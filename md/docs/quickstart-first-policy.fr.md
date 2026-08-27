---
title: Quickstart - créer votre première policy
description: D'un tenant vide à votre premier `/resolve` qui retourne un vrai verdict, en environ 30 minutes. Deux chemins d'authoring - UI back-office (no-code, create direct) ou API JSON (programmatique). Choisissez l'un ou l'autre.
locale: fr
kicker: Docs / Getting started - Stable
---

Ce quickstart vous emmène d'un tenant vide à votre premier appel `/resolve` qui retourne un vrai verdict, en environ 30 minutes. Il se concentre sur le côté auteur : comment les règles entrent dans Knowledge. Les quickstarts côté consumer (décorateur Python, proxy MCP) s'appuient sur celui-ci.

## Prérequis

- Un tenant Knowledge.
- L'un de :
  - Un accès UI back-office avec un rôle d'authoring (Path A ci-dessous), OU
  - Une clé API avec permission d'authoring et l'URL de base de l'API Knowledge de votre tenant (Path B)

Vous n'avez pas besoin des deux. Chaque chemin vous emmène au même état final.

## L'exemple que nous construisons

Une policy de refund pour un tool customer-service :

- Tout refund de €100 ou moins est allowed automatiquement
- Tout refund entre €100 et €500 requiert une approbation
- Tout refund au-dessus de €500 est bloqué

Trois règles. Une policy. S'applique à chaque caller du tenant (universal). Assez pour voir toute la boucle.

---

## Path A - authorer via l'UI back-office (no code)

Le chemin visuel. Idéal quand un compliance officer ou SME authore les règles directement.

### Étape 1 - créer la Policy

Connectez-vous à l'UI back-office. Depuis la vue Registry, choisissez *Nouvelle policy*. Remplissez :

- **Nom** : Refund policy
- **Owner** : le rôle ou la personne responsable
- **Rationale** : *« Gouverne les autorisations refund customer-service »*

Sauvegardez. La policy apparaît dans le registry avec sa propre page de détail. Gardez cette page ouverte ; vous allez authorer les règles depuis là. L'identifiant policy est affiché en haut de la page et dans l'URL (ex. `pol-refund-a3f2`) ; vous l'utiliserez pour les appels `/resolve` en étape 4.

### Étape 2 - authorer chaque règle

Depuis la page de détail de la policy, choisissez *Nouvelle règle*. Pour chacune des trois règles, remplissez la vue auteur :

| Règle | Statement | Scope | Condition | Severity |
|---|---|---|---|---|
| Small refund | Allow refunds up to €100 | action = `refund.execute` | `parameters.amount_eur` `<=` `100` | allow |
| Medium refund | Refunds between €100 and €500 require approval | action = `refund.execute` | `parameters.amount_eur` `>` `100` | require_approval |
| Large refund | Refunds above €500 are blocked | action = `refund.execute` | `parameters.amount_eur` `>` `500` | hard_block |

Sauvegardez chacune. Les règles authorées ici s'appliquent à **chaque principal** du tenant par défaut (universal). Voir *[À propos du targeting](#à-propos-du-targeting)* plus bas.

### Étape 3 - approuver si requis

Si la policy a une approver chain, les règles entrent en état pending. Les approvers nommés les voient dans leur queue, les reviewent, et les approuvent. Les règles deviennent alors actives.

Skipper si le tenant n'enforce pas le workflow d'approbation.

---

## Path B - authorer via l'API (programmatique)

Le chemin programmatique. Idéal quand vous voulez tout le flow scripté, seedé depuis du code, ou intégré à votre CI pipeline.

Chaque endpoint ci-dessous est montré en path. Préfixez avec l'URL de base de votre tenant. Chaque requête porte `X-API-Key: <votre clé>`.

### Étape 1 - créer la Policy

```
POST /v1/policies
Content-Type: application/json

{
  "name": "Refund policy",
  "owner_role": "customer-service-compliance",
  "rationale": "Gouverne les autorisations refund customer-service"
}
```

Réponse :

```json
{
  "id": "pol-refund-a3f2",
  "name": "Refund policy",
  "owner_role": "customer-service-compliance",
  "created_at": "2026-08-27T09:00:00Z"
}
```

**Capturez `id`** ; chaque règle que vous créez référence cette Policy.

### Étape 2 - ajouter chaque règle

Un `POST` par règle :

```
POST /v1/policies/pol-refund-a3f2/rules
Content-Type: application/json

{
  "id": "rul-refund-small",
  "statement": "Allow refunds up to and including €100",
  "severity": "allow",
  "universal": true,
  "rows": [
    {
      "scope": { "action": "refund.execute" },
      "condition": { "parameters.amount_eur": { "op": "lte", "value": 100 } }
    }
  ],
  "rationale": "Standard small-refund allowance"
}
```

Même forme de body pour les deux autres, en ajustant `severity` et `condition` :

- `rul-refund-medium` : `severity: "require_approval"`, condition `parameters.amount_eur > 100`
- `rul-refund-large` : `severity: "hard_block"`, condition `parameters.amount_eur > 500`

Réponse pour chaque :

```json
{
  "id": "rul-refund-small",
  "version_id": "rv-abc1",
  "status": "active"
}
```

Chaque règle porte un `version_id` immuable. Chaque décision future qui cite la règle va pinner la version exacte qui s'appliquait.

---

## À propos du targeting

Les règles de ce quickstart utilisent `universal: true` (dans le chemin JSON) ou le défaut *s'applique à tout le monde* (dans le chemin UI). Ça veut dire que les règles s'appliquent à **chaque principal appelant le tenant** - chaque agent, chaque service account, chaque utilisateur.

Si vous voulez qu'une règle s'applique seulement à un sous-ensemble spécifique de principals (un rôle, un agent, un groupe d'utilisateurs), attachez-la à un **Target** au lieu de la marquer universal. Voir [Policies, rules et targets](/docs/concepts/policies-rules-targets) pour le concept, et le guide [authorer des règles dans l'UI back-office](/docs/guides/author-rules-in-back-office-ui) pour comment attacher des règles à des Targets dans l'UI.

---

## Étape 4 - appeler `/resolve` sur un vrai cas

Identique pour les deux chemins. Envoyez un cas que la règle small-refund devrait allow :

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

Votre première décision gouvernée. Notez `cited_rule_version_ids` : si vous éditez la règle plus tard, cette consultation pointe toujours sur `rv-abc1`.

## Étape 5 - essayer un cas qui requiert une approbation

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

Un record `Approval` est créé automatiquement. Un decider peut le résoudre via l'UI back-office ou à travers l'API approvals. Voir [approvals](/docs/api-reference/approvals).

## Étape 6 - essayer un cas qui requiert un contexte non envoyé

Ajoutez une règle qui a besoin d'un champ que votre cas ne porte pas. Authorez-la via l'UI ou via l'API :

```json
{
  "id": "rul-refund-vip",
  "statement": "VIP customers get refunds up to €200 automatically",
  "severity": "allow",
  "universal": true,
  "rows": [
    {
      "scope": { "action": "refund.execute" },
      "condition": {
        "parameters.amount_eur": { "op": "lte", "value": 200 },
        "customer.tier": { "op": "eq", "value": "vip" }
      }
    }
  ],
  "rationale": "VIP tier exception"
}
```

Maintenant appelez `/resolve` avec seulement le montant, pas le tier :

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

Knowledge vous dit ce qui est encore nécessaire. Fetchez le champ, ajoutez-le à la requête, rappelez `/resolve`. C'est la boucle progressive-context. Voir [Progressive context](/docs/concepts/progressive-context-resolution) pour le modèle complet.

## Ce que vous avez maintenant

- Un tenant avec une policy et (au moins) trois règles, s'appliquant à chaque principal
- Des règles qui résolvent à `allow`, `approval_required` et `hard_block`
- Une règle qui démontre la boucle progressive-context
- Une enveloppe signée sur chaque verdict complete, prête pour qu'un point d'enforcement aval la vérifie

## La suite

- Wrapper un tool en Python pour que le verdict signé soit enforced avant que l'action tourne : [Quickstart : governed tool](/docs/quickstart-governed-tool)
- Faire la même chose pour un stack d'agent basé MCP : [Quickstart : MCP proxy](/docs/quickstart-mcp-proxy)
- Authorer plus de règles depuis l'UI, avec test cases et preview : [Authorer des règles dans l'UI back-office](/docs/guides/author-rules-in-back-office-ui)
- Faire tourner Knowledge à côté de votre process actuel avant enforcement : [Valider avant d'enforce](/docs/guides/validate-before-you-enforce)

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Policies, rules et targets](/docs/concepts/policies-rules-targets) | Le modèle conceptuel derrière les champs de règle et le targeting |
| [Verdicts et decisions](/docs/concepts/verdicts-and-decisions) | L'échelle de severity et comment la règle gagnante est choisie |
| [POST /v1/resolve](/docs/api-reference/resolve) | Référence endpoint |
