---
title: Résolution progressive de contexte
description: Comment /resolve inverse la dépendance entre callers et policies via la boucle required_context.
locale: fr
kicker: Docs / Concepts - Stable
---

`/v1/resolve` est la réponse de Knowledge à un problème subtil : un caller ne peut pas connaître, en avance, chaque champ dont une policy pourrait avoir besoin. Ajouter une nouvelle rule qui requiert un nouveau champ forcerait sinon chaque caller à redéployer. La résolution progressive de contexte retire ce couplage.

## La boucle

```
caller             Knowledge
  |                     |
  |--- /resolve --->    | (a du contexte)
  |    ...              |
  |<-- required_context |
  |    (champs manquants)|
  |                     |
  |  fetch(field)       |
  |  depuis CRM, vendor,|
  |  user, extract LLM  |
  |                     |
  |--- /resolve --->    | (a plus de contexte)
  |    ...              |
  |<-- required_context |
  |    (ou verdict)     |
```

Le caller envoie ce qu'il a. Knowledge classifie les champs en :

- **`sufficient`** - présent, valide, le moteur peut évaluer.
- **`incomplete`** - présent mais insuffisant pour atteindre un verdict (besoin de plus).
- **`required`** - absent, les rules applicables en ont besoin.

Si des champs `required` restent, Knowledge retourne `operation_status: "incomplete"` avec un array `required_context`. Le caller fetche, rappelle. Éventuellement la boucle converge vers `operation_status: "complete"` avec un verdict.

## Anatomie d'une entrée required_context

```json
{
  "field": "client.knowledge_experience_level",
  "reason": "required by rul-sp-elig-complex-ke-gate",
  "type": "enum",
  "allowed_values": ["insufficient", "sufficient"],
  "source_requirement": "verified"
}
```

- `field` - chemin dans le `scope_schema` du tenant.
- `reason` - quelle rule (ou condition) a déclenché cette exigence.
- `type` - json-schema-lite : `enum`, `string`, `number`, `boolean`, ...
- `allowed_values` - présent pour les types enum.
- `source_requirement` - `verified` si le champ doit porter un `source` attestant qui l'a vérifié.

## Algorithme en deux étapes

Chaque appel `/resolve` fait tourner un algorithme en deux étapes en interne :

**Étape 1 - Classify.** Walk les rules applicables ; pour chaque champ de condition, marque-le `sufficient`, `incomplete`, ou `required` étant donné le contexte actuel.

**Étape 2 - Decide.** Si tout est sufficient, évalue ; produit un verdict et signe-le. Sinon, retourne `required_context`.

L'algorithme gère la sémantique OR (`fires_when_any`) correctement : un champ n'est required que s'il serait nécessaire par chaque branche qui pourrait fire. Il ne demande pas des champs dont la rule a déjà été écartée par d'autre contexte.

## Inversion de dépendance

Flow traditionnel :

```
caller (doit connaître la policy)  ---->  API métier
```

Le caller ship en connaissant quels champs sont required pour chaque chemin. Ajouter une nouvelle rule ? Chaque caller redéploie.

Flow Knowledge :

```
caller (sait ce qu'il a)  --->  Knowledge (connaît la policy)
                                |
                                v
                          required_context (quoi fetch ensuite)
                                |
                                v
                          fetchers enregistrés
                                |
                                v
caller <---- verdict -----
```

Le caller a seulement besoin de savoir **comment fetcher des champs**, pas quels champs comptent pour quelle rule. Les nouvelles rules requérant de nouveaux champs se propagent silencieusement tant qu'il existe des fetchers pour eux.

## Pattern fetcher registry

La forme standard (documentée à [Bring your own tools to MCP proxy](/docs/guides/bring-your-own-tools-to-mcp-proxy)) :

```python
fetchers = {
    "client.classification":         crm.get_classification,
    "client.knowledge_experience_level": crm.get_ke_level,
    "trade.beneficial_owner_id":     vendor.get_owner_id,
    "solicitation.type":             lambda ctx: llm_extract(ctx.conversation, "solicitation_type"),
}

def resolve_with_fetchers(initial_ctx):
    ctx = initial_ctx
    for _ in range(MAX_ROUNDS):
        result = knowledge.resolve(ctx)
        if result.status == "complete":
            return result
        for req in result.required_context:
            ctx[req.field] = fetchers[req.field](ctx)
    raise TooManyRounds()
```

`MAX_ROUNDS` garde contre un fetcher mal configuré qui ne populate jamais le champ demandé.

## Quand utiliser /resolve vs /check

| Situation | Endpoint |
|---|---|
| Le caller assemble le contexte à la volée (agents, chat, UIs dynamiques) | `/resolve` |
| Le caller a un contrat d'input fixe (OMS, claims platform, batch job) | `/check` |
| Le caller accepte d'échouer si le contexte est incomplet | `/check` |
| Le caller a un fetcher enregistré pour chaque champ possible | soit l'un soit l'autre (probablement `/resolve` pour la sémantique de retry) |

## Ce que /resolve ne fait PAS

- **Demander à l'utilisateur.** `/resolve` retourne `required_context` ; il ne présente pas de dialogs. Le caller décide s'il fetche programmatiquement ou prompt l'utilisateur.
- **Cache les fetches à travers les appels.** Chaque re-call envoie le contexte complet. Si un fetch est coûteux, cache-le côté caller.
- **Garantir des rounds bornés.** Rien n'empêche un fetcher registry adversarial de boucler indéfiniment. Cap le compteur de rounds.

## Related

- [/v1/resolve](/docs/api-reference/resolve) - la référence endpoint.
- [Page produit Progressive context](/product/progressive-context) - la vue story-level.
- [Bring your own tools to MCP proxy](/docs/guides/bring-your-own-tools-to-mcp-proxy) - pattern fetcher en pratique.
