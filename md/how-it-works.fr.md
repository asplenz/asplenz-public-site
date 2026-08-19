---
title: Comment fonctionne Knowledge
description: Une couche de policy gouvernée appelable via REST. Vos applications, workflows et agents IA envoient un contexte. Knowledge retourne un verdict déterministe avec règles citées et audit rejouable.
locale: fr
kicker: Le modèle mental
---

Knowledge est une couche de policy gouvernée. Les appelants envoient un contexte ; Knowledge évalue les règles applicables contre ce contexte et retourne un verdict déterministe.

## Les trois boîtes

```pipeline
Vos appelants | Application | Workflow | BPM | Agent IA
Knowledge | Policy layer | Règles, versioning | Trace d'audit
Votre système de record | Exécution | Persistance
```

Knowledge ne possède pas de données. Il n'orchestre pas les flux. Il n'exécute pas d'actions. Il répond à une seule question, de manière déterministe :

> Étant donné ce contexte, que dit la policy ?

## Le contrat - un endpoint

Les appelants POSTent un contexte à `/resolve` :

```
POST /knowledge/v1/resolve
{
  "action_type": "sp_offer_eligibility",
  "context": {
    "asset_class": "structured_product",
    "client": {"classification": "retail"},
    "structured_products": {
      "product": {"complexity": "highly_complex"}
    }
  }
}
```

Knowledge répond avec l'une de trois formes.

**Décision complète** - chaque feuille dont les règles applicables ont besoin est présente :

```
{
  "operation_status": "complete",
  "verdict": "blocked",
  "cited_rules": ["rul-sp-elig-highly-complex-retail-block"],
  "dominating_rule_id": "rul-sp-elig-highly-complex-retail-block",
  "consultation_id": "cns-abc123",
  "normative_hash": "sha256:..."
}
```

**Incomplet** - une règle a besoin d'une feuille que l'appelant n'a pas encore fournie :

```
{
  "operation_status": "incomplete",
  "required_context": ["client.classification"]
}
```

L'appelant récupère la feuille manquante (depuis un CRM, un vendor KYC, une extraction LLM, ou une question de suivi à l'utilisateur) et rappelle avec le contexte enrichi.

**Approbation requise** - une règle qui gate sur une autorisation humaine s'est déclenchée :

```
{
  "verdict": "approval_required",
  "cited_rules": [...],
  "consultation_id": "cns-..."
}
```

## Ce que « gouverné » veut dire

| Aspect | Ce que ça veut dire |
|---|---|
| **Versioning** | Chaque règle possède une `RuleVersion` - un snapshot immuable de ses champs affectant le verdict. Les consultations pinent la version exacte utilisée, le replay des années plus tard est exact. |
| **Audit** | Chaque appel `/resolve` produit une ligne `Consultation` avec le contexte, les règles citées, et un `normative_hash` qui sert de clé de snapshot. |
| **Workflow d'override** | Quand une règle nécessite une approbation, l'approbation est une entité de premier ordre avec le décideur, le scope d'application, et l'audit. Le moteur reconsulte après l'approbation, le verdict flippe de manière déterministe. |
| **Autorship policy dans l'UI** | Les règles vivent dans un registry que les compliance officers peuvent éditer sans engineering - sujet à versioning + governance. |

## Ce que Knowledge n'est pas

| Pas ça | Pourquoi |
|---|---|
| **Pas un moteur de workflow** | Knowledge répond « que dit la policy » ; votre BPM ou agent répond « que faire ensuite ». Ils coexistent. |
| **Pas un vendor KYC** | Knowledge ne vérifie pas l'identité ni ne lance de PEP screening. Il consomme le résultat du vendor et applique la décision composite (résultat Verify + éligibilité produit + juridiction + policy commerciale + exceptions). |
| **Pas un RAG sur vos docs policy** | RAG retrouve du texte pertinent. Knowledge produit un verdict déterministe avec règles citées et état rejouable. Voir la [page Agents IA](/ai-agents) pour le contraste complet. |
| **Pas un rip-and-replace** | Knowledge s'insère à côté de votre stack existant selon plusieurs patterns. Voir [comment ça s'insère](/stack). |

## Le cycle de vie d'une décision

1. L'appelant assemble un contexte (depuis un formulaire, une API, un appel de tool, une extraction LLM).
2. L'appelant POSTe `/resolve` avec `action_type` + `context`.
3. Knowledge évalue les règles applicables, retourne un verdict ou `required_context`.
4. L'appelant agit sur le verdict (exécute, escalade, refuse, redemande à l'utilisateur).
5. Chaque appel est loggé en `Consultation` avec le snapshot d'état.
6. Des années plus tard, un régulateur demande sur une décision - une seule requête reconstitue l'état exact des règles et le output cité.

## Voir aussi

| À lire ensuite | Pourquoi |
|---|---|
| [Agents IA](/ai-agents) | Comment un agent utilise `/resolve` comme tool |
| [Fonctionne avec votre stack](/stack) | Les cinq patterns d'insertion |
| [Pilote](/pilot) | Comment démarrer avec une seule décision |
