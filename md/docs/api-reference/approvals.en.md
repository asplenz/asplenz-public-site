---
title: /v1/approvals
description: Create, poll, and decide on Approval entities returned by approval_required verdicts.
locale: en
kicker: Docs / API reference - Stable
---

When `/check` or `/resolve` returns `verdict: "approval_required"`, the operation cannot proceed until a decider approves it. This endpoint group manages the Approval entity.

## Create an approval

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

The consultation ID carries the intended action, resource, parameters, and triggering rules. The approval body copies these into `intended_*` fields on the Approval row.

**Response** (201 Created) :

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

The routing to deciders (Slack, email, back-office UI notification) happens via webhooks configured per-tenant.

## Poll approval status

```
GET /tnt-acme/v1/approvals/apr-def456
X-API-Key: ak-live-...
```

**Response - pending :**

```json
{
  "id": "apr-def456",
  "status": "pending",
  ...
  "decider": null,
  "decision": null
}
```

**Response - approved :**

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

**Response - rejected :**

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

Poll periodically or subscribe to the webhook. Once resolved, the caller re-invokes `/check` on the operation ; if approved, the resulting verdict is `allowed` (or `approval_required` again if new triggers surfaced).

## Decide (approver action)

```
POST /tnt-acme/v1/approvals/apr-def456/decision
X-API-Key: ak-live-<decider-key>
Content-Type: application/json
```

**Body - approve with grant :**

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

Grant creates a Type-3 Override that neutralises the triggering rules for future operations matching the scope, within the expiry window.

**Body - approve without grant :**

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

**Response** : the updated Approval, plus (on approve+grant) the created Override ID.

## List approvals

```
GET /tnt-acme/v1/approvals?status=pending&assignee=hum-alice&limit=50
```

Query parameters :

- `status` - `pending`, `approved`, `rejected`.
- `assignee` - filter by candidate decider.
- `requester` - filter by requesting principal.
- `since` / `until` - ISO 8601 date bounds.
- `dominating_rule_id` - approvals triggered by a specific rule.

## Errors

| Status | Code | Meaning |
|---|---|---|
| 400 | `consultation_not_approval_required` | The consultation's verdict was not `approval_required` |
| 403 | `not_a_valid_decider` | Caller principal is not in `candidate_deciders` |
| 409 | `already_decided` | The approval has already been resolved |

## Related

- [Overrides, approvals, pauses](/docs/concepts/overrides-approvals-pauses) - concept model.
- [Verdicts and decisions](/docs/concepts/verdicts-and-decisions) - the severity ladder.
- [/v1/consultations/{id}](/docs/api-reference/consultations) - the record the approval is attached to.
