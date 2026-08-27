---
title: Quickstart - créer votre première policy
description: D'un tenant vide à votre premier `/resolve` qui retourne un vrai verdict, en environ 30 minutes. Import CSV, sample cases, premier appel côté agent.
locale: fr
kicker: Docs / Getting started - Stable
---

Ce quickstart vous emmène d'un tenant vide à votre premier appel `/resolve` qui retourne un vrai verdict, en environ 30 minutes. Il se concentre sur le côté auteur : comment mettre des règles dans Knowledge. Les quickstarts côté consumer (décorateur Python, proxy MCP) s'appuient sur celui-ci.

## Ce dont vous avez besoin

- Un tenant Knowledge et une clé API avec permission d'authoring.
- L'URL de base de votre tenant pour l'API Knowledge. Tous les endpoints ci-dessous sont montrés en paths ; préfixez avec votre URL de base.
- Un éditeur de texte. C'est vraiment tout.

## L'exemple que nous construisons

Une policy de refund pour un tool customer-service :

- Tout refund de €100 ou moins est allowed automatiquement.
- Tout refund entre €100 et €500 requiert une approbation.
- Tout refund au-dessus de €500 est bloqué.

Trois règles. Une policy. Assez pour voir toute la boucle.

## Étape 1 - authorer les règles en CSV

Créez `refund-policy.csv` avec une ligne par règle :

```csv
policy_id,rule_id,statement,scope_action,condition_field,condition_op,condition_value,severity,rationale
pol-refund,rul-refund-small,Allow refunds up to and including €100,refund.execute,amount_eur,lte,100,allow,Standard small-refund allowance
pol-refund,rul-refund-medium,Refunds between €100 and €500 require approval,refund.execute,amount_eur,gt,100,require_approval,Above €100 needs decider oversight
pol-refund,rul-refund-large,Refunds above €500 are blocked,refund.execute,amount_eur,gt,500,hard_block,Above €500 is out of standard policy
```

Chaque ligne est une règle avec son scope (`refund.execute`), sa condition (`amount_eur` comparé à un threshold), et sa severity (`allow` / `require_approval` / `hard_block`).

## Étape 2 - importer dans Knowledge

Postez le CSV à l'endpoint d'import :

```
POST /v1/rules/import
Content-Type: multipart/form-data
X-API-Key: <votre clé>

file=@refund-policy.csv
```

La réponse retourne les règles créées avec leurs versions :

```json
{
  "policy_id": "pol-refund",
  "rules_created": [
    { "id": "rul-refund-small", "version_id": "rv-abc1" },
    { "id": "rul-refund-medium", "version_id": "rv-def2" },
    { "id": "rul-refund-large", "version_id": "rv-ghi3" }
  ]
}
```

La policy est maintenant live. Chaque règle porte un `version_id` immuable ; chaque décision future qui cite la règle va pinner la version exacte qui s'appliquait.

## Étape 3 - appeler `/resolve` sur un vrai cas

Envoyez un cas que la règle small-refund devrait allow :

```
POST /v1/resolve
Content-Type: application/json
X-API-Key: <votre clé>

{
  "action": "refund.execute",
  "resource": "TX-42",
  "parameters": { "amount_eur": 40 }
}
```

Réponse :

```json
{
  "operation_status": "complete",
  "verdict": "allow",
  "cited_rule_ids": ["rul-refund-small"],
  "cited_rule_version_ids": ["rv-abc1"],
  "dominating_rule_id": "rul-refund-small",
  "consultation_id": "cns-...",
  "signed_verdict": "eyJhbGciOiJFUzI1NiIs..."
}
```

Vous avez votre première décision gouvernée. Notez `cited_rule_version_ids` : si vous éditez la règle plus tard, cette consultation pointe toujours sur `rv-abc1`.

## Étape 4 - essayer un cas qui requiert une approbation

```
POST /v1/resolve
{
  "action": "refund.execute",
  "resource": "TX-43",
  "parameters": { "amount_eur": 250 }
}
```

Réponse :

```json
{
  "operation_status": "complete",
  "verdict": "approval_required",
  "cited_rule_ids": ["rul-refund-medium"],
  "consultation_id": "cns-...",
  "signed_verdict": "..."
}
```

Un record `Approval` est créé automatiquement ; un decider peut le résoudre via l'UI back-office ou à travers l'API approvals. Voir [approvals](/docs/api-reference/approvals).

## Étape 5 - essayer un cas qui requiert un contexte que vous n'avez pas envoyé

Ajoutez une règle qui a besoin d'un champ que votre cas ne porte pas. Importez un CSV mis à jour où une règle exige `customer.tier` :

```csv
pol-refund,rul-refund-vip,VIP customers get refunds up to €200 automatically,refund.execute,amount_eur,lte,200,allow,VIP tier exception
```

Ajoutez la condition sur `customer.tier` (via l'UI back-office ou une seconde colonne CSV ; les deux marchent). Maintenant appelez `/resolve` avec seulement le montant :

```
POST /v1/resolve
{
  "action": "refund.execute",
  "resource": "TX-44",
  "parameters": { "amount_eur": 180 }
}
```

Réponse :

```json
{
  "operation_status": "incomplete",
  "required_context": [
    {
      "field": "customer.tier",
      "reason": "required by rul-refund-vip",
      "type": "enum",
      "allowed_values": ["standard", "vip"]
    }
  ]
}
```

Knowledge vous dit ce qui est encore nécessaire. Fetchez le champ depuis votre CRM, ajoutez-le à la requête, rappelez `/resolve`. C'est la boucle progressive-context. Voir [Progressive context](/docs/concepts/progressive-context-resolution) pour le modèle complet.

## Ce que vous avez maintenant

- Un tenant avec une policy et trois règles
- Des règles qui résolvent à `allow`, `approval_required` et `hard_block`
- Une règle qui démontre la boucle progressive-context
- Une enveloppe signée sur chaque verdict complete, prête pour qu'un point d'enforcement aval la vérifie

## La suite

- Wrapper un tool en Python pour que le verdict signé soit enforced avant que l'action tourne : [Quickstart : governed tool](/docs/quickstart-governed-tool)
- Faire la même chose pour un stack d'agent basé MCP : [Quickstart : MCP proxy](/docs/quickstart-mcp-proxy)
- Authorer les mêmes règles depuis l'UI back-office compliance-friendly : [Author rules in the back-office UI](/docs/guides/author-rules-in-back-office-ui)
- Faire tourner Knowledge à côté de votre process actuel avant enforcement : [Validate before you enforce](/docs/guides/validate-before-you-enforce)

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Policies, rules et targets](/docs/concepts/policies-rules-targets) | Le modèle conceptuel derrière les colonnes CSV |
| [Verdicts et decisions](/docs/concepts/verdicts-and-decisions) | L'échelle de severity et comment la règle gagnante est choisie |
| [POST /v1/resolve](/docs/api-reference/resolve) | Référence endpoint |
| [POST /v1/rules/import](/docs/api-reference/authentication) | Référence endpoint import (dans la section API) |
