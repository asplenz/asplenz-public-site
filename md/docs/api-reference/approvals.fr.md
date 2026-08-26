---
title: /v1/approvals
description: Créer, poll, et décider sur les entités Approval retournées par les verdicts approval_required.
locale: fr
kicker: Docs / API reference - Stable
---

Quand `/check` ou `/resolve` retourne `verdict: "approval_required"`, l'opération ne peut pas procéder tant qu'un decider ne l'a pas approuvée. Ce groupe d'endpoints gère l'entité Approval.

## Créer une approval

```
POST /tnt-acme/v1/approvals
X-API-Key: ak-live-...
Content-Type: application/json
```

**Body :**

```json
{
  "consultation_id": "cns-abc123",
  "requester_notes": "duplicate charge, customer complained twice"
}
```

L'ID de consultation porte l'action, resource, parameters, et rules déclenchantes intended. Le body d'approval copie ceux-ci dans les champs `intended_*` sur la ligne Approval.

**Réponse** (201 Created) :

```json
{
  "id": "apr-def456",
  "status": "pending",
  "requester": "agn-rm-copilot",
  "requester_principal": "hum-marie",
  "intended_action": "refund.execute",
  "intended_resource": "TX-456",
  "intended_parameters": { "amount_eur": 400 },
  "triggers": [
    { "rule_id": "rul-refund-over-100",
      "rule_version_id": "rv-abc",
      "reason": "amount_eur > 100" }
  ],
  "requester_notes": "duplicate charge, customer complained twice",
  "requested_at": "2026-08-14T09:12:33Z",
  "consultation_id": "cns-abc123",
  "candidate_deciders": ["hum-alice", "role-refund-approver"]
}
```

Le routing vers les deciders (Slack, email, notification UI back-office) arrive via webhooks configurés par-tenant.

## Poll approval status

```
GET /tnt-acme/v1/approvals/apr-def456
X-API-Key: ak-live-...
```

**Réponse - pending :**

```json
{
  "id": "apr-def456",
  "status": "pending",
  ...
  "decider": null,
  "decision": null
}
```

**Réponse - approved :**

```json
{
  "id": "apr-def456",
  "status": "approved",
  "decider": "hum-alice",
  "decision": "approve",
  "decider_notes": "verified customer's complaint on ticket #4432",
  "decided_at": "2026-08-14T09:18:12Z",
  "grants": [
    {
      "override_id": "ovr-...",
      "applies_to_scope": { "resource_type": "refund", "channel": "in_app" },
      "expires_at": "2026-08-14T10:18:12Z"
    }
  ]
}
```

**Réponse - rejected :**

```json
{
  "id": "apr-def456",
  "status": "rejected",
  "decider": "hum-alice",
  "decision": "reject",
  "decider_notes": "amount excessive vs customer profile",
  "decided_at": "2026-08-14T09:20:00Z"
}
```

Poll périodiquement ou subscribe au webhook. Une fois résolue, le caller re-invoke `/check` sur l'opération ; si approuvée, le verdict résultant est `allowed` (ou `approval_required` à nouveau si de nouveaux triggers ont surfaced).

## Décider (action approver)

```
POST /tnt-acme/v1/approvals/apr-def456/decision
X-API-Key: ak-live-<decider-key>
Content-Type: application/json
```

**Body - approve avec grant :**

```json
{
  "decision": "approve",
  "decider_notes": "verified customer's complaint",
  "grant": {
    "applies_to_scope": { "resource_type": "refund", "channel": "in_app" },
    "expires_at": "2026-08-14T10:18:12Z"
  }
}
```

Grant crée un Override Type 3 qui neutralise les rules déclenchantes pour les opérations futures matchant le scope, dans la fenêtre d'expiry.

**Body - approve sans grant :**

```json
{
  "decision": "approve",
  "decider_notes": "one-time approval, do not create override"
}
```

**Body - reject :**

```json
{
  "decision": "reject",
  "decider_notes": "amount excessive vs customer profile"
}
```

**Réponse** : l'Approval mise à jour, plus (sur approve+grant) l'ID d'Override créé.

## List approvals

```
GET /tnt-acme/v1/approvals?status=pending&assignee=hum-alice&limit=50
```

Query parameters :

- `status` - `pending`, `approved`, `rejected`.
- `assignee` - filtrer par decider candidate.
- `requester` - filtrer par principal requester.
- `since` / `until` - bornes de date ISO 8601.
- `dominating_rule_id` - approvals déclenchées par une rule spécifique.

## Erreurs

| Status | Code | Signification |
|---|---|---|
| 400 | `consultation_not_approval_required` | Le verdict de la consultation n'était pas `approval_required` |
| 403 | `not_a_valid_decider` | Le principal caller n'est pas dans `candidate_deciders` |
| 409 | `already_decided` | L'approval a déjà été résolue |

## Related

- [Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses) - modèle conceptuel.
- [Verdicts et decisions](/docs/concepts/verdicts-and-decisions) - l'échelle de severity.
- [/v1/consultations/{id}](/docs/api-reference/consultations) - le record auquel l'approval est attachée.
