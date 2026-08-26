---
title: GET /v1/consultations/{id}
description: Fetch the frozen record of a past consultation.
locale: en
kicker: Docs / API reference - Stable
---

Every `/check` and `/resolve` writes a `Consultation` (`cns-`). This endpoint reads it back, exactly as it stood at decision time.

## Request

```
GET /tnt-acme/v1/consultations/cns-abc123
X-API-Key: ak-live-...
```

## Response

```json
{
  "id": "cns-abc123",
  "tenant_id": "tnt-acme",
  "caller_principal_id": "agn-rm-copilot",
  "on_behalf_of": "hum-marie",
  "on_behalf_of_authenticated": false,
  "requested_at": "2026-08-14T09:12:33Z",
  "action": "refund.execute",
  "resource": "TX-456",
  "scope_used": {
    "product_type": "customer_refund",
    "channel": "in_app"
  },
  "parameters": {
    "amount_eur": 40,
    "reason": "duplicate_charge"
  },
  "context_hash": "sha256:9f2c...",
  "context_snapshot": {
    "client.id": { "value": "cli-9f2c", "source": "crm" }
  },
  "cited_entry_ids": ["rul-refund-under-100"],
  "cited_rule_version_ids": ["rv-abc"],
  "dominating_rule_id": "rul-refund-under-100",
  "precedence_trace": [...],
  "resolved_target_ids": ["tgt-agents-refund-team"],
  "verdict": "allowed",
  "signed_verdict": "eyJ...",
  "signing_kid": "tnt-acme:2026-01",
  "signing_epoch": "2026-01",
  "verdict_ttl_seconds": 60,
  "expired_at": "2026-08-14T09:13:33Z",
  "required_context_history": [],
  "normative_hash": "sha256:a3c8..."
}
```

Key fields :

- **`cited_rule_version_ids`** - the immutable RuleVersion snapshots pinned. Fetch these to see the exact rule text of that day.
- **`precedence_trace`** - the full candidate list and tie-break trail.
- **`context_snapshot`** - the entire context envelope as submitted (post-fetcher accumulation for `/resolve`).
- **`normative_hash`** - hash of the frozen state ; verify the record wasn't tampered.
- **`signed_verdict`** - the JWS from that call, verifiable against JWKS.

## Regulator playbook

*"Show me the decision on this case."*

```
GET /v1/consultations/cns-abc123
```

*"Show me the rule text that applied."*

```
GET /v1/rule-versions/rv-abc
```

The RuleVersion response includes the exact statement, condition rows, severity, and metadata of that day.

*"Show me why this rule won and not that similar one."*

Look at `precedence_trace` in the consultation. It records every candidate rule considered, the scope match quality, and the tie-break field that decided.

*"Prove the record wasn't modified."*

Recompute the `normative_hash` from the record's fields and compare. Or verify the `signed_verdict` against the archived JWKS at the `signing_kid`.

## List endpoint

```
GET /tnt-acme/v1/consultations?actor=agn-rm-copilot&since=2026-08-01&verdict=blocked&limit=100
```

Query parameters :

- `actor` - filter by caller principal.
- `since` / `until` - ISO 8601 date bounds.
- `action` - filter by action name.
- `verdict` - `allowed`, `blocked`, `approval_required`.
- `dominating_rule_id` - all consultations where this rule was dominating.
- `limit` (default 50, max 1000).
- `cursor` - opaque pagination cursor.

Response :

```json
{
  "items": [ ... ],
  "next_cursor": "eyJ..."
}
```

## Errors

| Status | Code | Meaning |
|---|---|---|
| 404 | `consultation_not_found` | ID does not exist in this tenant |
| 403 | `cross_tenant_forbidden` | Consultation belongs to a different tenant |

## Related

- [Verdicts and decisions](/docs/concepts/verdicts-and-decisions) - what each field means.
- [Auditability product page](/product/auditability) - the story-level view.
- [/v1/rule-versions/{id}](/docs/api-reference/rule-versions) - fetch the frozen rule text.
