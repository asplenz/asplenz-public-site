---
title: Pour équipes produit IA
description: Donnez à vos agents IA une décision policy gouvernée et déterministe avant qu'ils n'agissent. Shippez plus vite sans donner au LLM l'autorité finale sur les actions régulées.
locale: fr
kicker: Solutions - Pour équipes produit IA
---

Vous shippez un agent IA qui prend des actions réelles dans un environnement régulé. Les reviews bloquent sur la même question à chaque fois :

> *Comment on sait que le LLM ne va pas décider quelque chose avec quoi l'équipe compliance n'est pas d'accord ?*

La réponse traditionnelle est *"on va prompt-engineer la policy dans le system prompt"*. Cette réponse échoue le moment où l'équipe compliance amende la policy, ou un régulateur demande *"montrez-moi la règle exacte qui a autorisé ce refund"*, ou un utilisateur trouve un prompt adversarial qui décale l'interprétation des règles par le modèle.

Knowledge vous laisse garder l'agent flexible là où il doit être flexible (comprendre, rassembler, planifier) et hors du modèle là où le modèle ne devrait jamais être (détermination policy finale).

## Le pattern

```
Votre agent
  |  comprend l'intention de l'utilisateur
  |  rassemble les facts (CRM, vendor, docs)
  |  investigue
  v
Knowledge   (couche policy déterministe, hors du modèle)
  |  rules applicables, précédence, verdict
  v
Wrapper de tool gouverné
  |  vérifie que la décision signée matche l'appel exact
  v
API métier
```

Deux lignes de code font marcher le wrapper :

```python
@governed_tool(action="refund.execute", resource="tx", bind=["amount"])
def refund_customer(tx: str, amount: int):
    return refund_api_legacy(tx, amount)
```

L'agent appelle `refund_customer(tx="TX-456", amount=40)` comme n'importe quelle autre fonction Python. Le wrapper consulte Knowledge, vérifie l'enveloppe signée, contrôle que les bindings matchent, exécute l'appel sous-jacent. Sur refus il raise une erreur typée que l'agent peut logger et communiquer à l'utilisateur.

## Ce que ça débloque dans votre processus de review

**Sign-off compliance.** Au lieu de *"on espère que le prompt est bon"*, vous montrez un fichier de règles avec des triples structurés `{scope, condition, severity}`. L'équipe compliance l'édite directement. L'équipe engineering écrit zéro code quand une règle change.

**Questions régulateur.** Chaque consultation écrit un record Consultation avec les versions exactes de rules, le trace de précédence, et les overrides cités au moment de décision. *"Montrez-moi pourquoi ce refund a été autorisé le 2026-03-15"* est un seul appel API.

**Robustesse adversariale.** Le modèle n'interprète pas la policy. Si un prompt utilisateur décale le comportement du modèle, le modèle peut proposer une action, mais le wrapper de tool refuse toujours sans décision signée valide. La surface d'attaque est la clé API + IAM, pas le prompt.

**Découplage de déploiement.** Compliance ajoute un nouveau champ requis (`beneficial_owner_verified`). Votre agent l'auto-découvre via `required_context`, le fetche à travers votre registry de field-fetcher existant, re-consulte. Zéro redéploiement d'agent.

## Progressive context - une partie first-class de la boucle agentique

Pas une optimisation de formulaire. Quand l'agent a un contexte partiel, `/resolve` retourne les champs encore nécessaires avec schema et allowed_values. L'agent décide comment acquérir chacun (lookup CRM, appel vendor, extraction LLM, question utilisateur), re-consulte, itère. Voir [Progressive context](/product/progressive-context).

La direction de dépendance s'inverse : votre agent n'a pas besoin de connaître le schema de policy d'entrée. Il probe avec ce qu'il a, Knowledge lui dit ce qu'il doit acquérir ensuite.

## Matrice d'intégration

| Votre stack | Intégration |
|---|---|
| MCP (Claude Desktop, Cursor, plugins IDE) | Proxy MCP Asplenz devant votre serveur MCP existant. Zéro changement de code. |
| Python (LangChain, LlamaIndex, custom) | Décorateur `@governed_tool` sur les fonctions de tool. |
| Backends Node.js / TypeScript | Appel REST à `/check` ou `/resolve` + PEP custom. SDK TypeScript sur roadmap Q4-2026. |
| N'importe quel langage | Appel REST + vérification JWKS (n'importe quelle librairie JWS). |

## Ce que Knowledge ne fait PAS

- **Défense contre l'injection de prompt** : c'est le travail de votre fournisseur de modèle.
- **RAG sur vos documents policy** : Knowledge produit des verdicts déterministes avec rules citées, pas du texte retrouvé.
- **Garantir que votre agent ne peut pas être bypassé** : si votre réseau / IAM permet à l'agent d'atteindre une API métier directement, aucun verdict signé n'aide. L'enforcement vit à la frontière du tool, que vous architecturez.

Modèle de confiance explicite à [/product/enforcement](/product/enforcement).

## Commencer

1. Lisez [Enforcement](/product/enforcement) pour le modèle.
2. Lisez le [quickstart governed-tool](/docs/quickstart-governed-tool) - 5 minutes hands-on.
3. Ou le [quickstart MCP proxy](/docs/quickstart-mcp-proxy) si votre stack est MCP-based.
4. [Parlez-nous](/contact) d'un engagement design-partner.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Enforcement](/product/enforcement) | Le modèle enveloppe signée + PEP |
| [Progressive context](/product/progressive-context) | La boucle `required_context` et le découplage de déploiement |
| [Integrations](/product/integrations) | Matrice de compatibilité, MCP, SDK, REST |
