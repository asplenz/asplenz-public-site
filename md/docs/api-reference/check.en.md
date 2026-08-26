---
title: POST /v1/check
description: Deterministic verdict endpoint - strict context, no required_context loop.
locale: en
kicker: Docs / API reference - Stable
---

`/v1/check` produces a deterministic verdict from a fully-shaped context. Use it when the caller knows the exact input shape upfront (OMS, claims platform, custom PEP behind a fixed contract).

For agent-shaped callers that assemble context on the fly, use [`/v1/resolve`](/docs/api-reference/resolve).

## Request

```
POST /tnt-acme/v1/check
X-API-Key: ak-live-...
X-Verdict-TTL: 60        (optional, seconds ; default: tenant config)
Content-Type: application/json
```

**Body :**

```json
{
  "action": "refund.execute",
  "resource": "TX-456",
  "scope": {
    "product_type": "customer_refund",
    "channel": "in_app"
  },
  "parameters": {
    "amount_eur": 40,
    "reason": "duplicate_charge"
  },
  "on_behalf_of": "hum-marie"
}
```

- **`action`** (required) - the operation being decided.
- **`resource`** (required) - the resource acted on.
- **`scope`** (required) - a dict validated against the tenant's `scope_schema`. Every field must be recognised.
- **`parameters`** (optional) - the operation's parameters ; every field will be part of the signed bindings.
- **`on_behalf_of`** (optional) - the human principal on whose behalf the agent is calling.

## Response - allowed / blocked / approval_required

```json
{
  "operation_status": "complete",
  "verdict": "allowed",
  "cited_rule_ids": ["rul-refund-under-100"],
  "cited_rule_version_ids": ["rv-abc"],
  "dominating_rule_id": "rul-refund-under-100",
  "precedence_trace": [
    { "rule_id": "rul-refund-under-100", "rule_version_id": "rv-abc",
      "severity": "allow", "scope_match": "exact", "reason": "fires" }
  ],
  "resolved_target_ids": ["tgt-agents-refund-team"],
  "consultation_id": "cns-abc123",
  "signed_verdict": "eyJhbGciOiJFUzI1NiIsInR5cCI6ImdvdmVybmVkK2p3cyIsImtpZCI6...",
  "context_hash": "sha256:9f2c..."
}
```

The `signed_verdict` is a compact JWS. See [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) for the envelope layout.

## Response - blocked

```json
{
  "operation_status": "complete",
  "verdict": "blocked",
  "cited_rule_ids": ["rul-refund-over-1000"],
  "dominating_rule_id": "rul-refund-over-1000",
  "signed_verdict": "eyJ...",
  "consultation_id": "cns-..."
}
```

The signed envelope carries the deny decision. PEPs SHOULD still verify the signature ; a signed `blocked` verdict is proof to logs and auditors that Knowledge refused, not that the caller silently dropped the operation.

## Response - approval_required

```json
{
  "operation_status": "complete",
  "verdict": "approval_required",
  "cited_rule_ids": ["rul-refund-over-100"],
  "signed_verdict": "eyJ...",
  "consultation_id": "cns-...",
  "approval": {
    "endpoint": "/tnt-acme/v1/approvals",
    "example_body": {
      "consultation_id": "cns-...",
      "requester_notes": "duplicate charge, customer complained"
    }
  }
}
```

The caller creates an Approval via the [approvals endpoint](/docs/api-reference/approvals). The PEP typically returns 202-Accepted to the user with a status URL to poll.

## Errors

| Status | Code | Meaning |
|---|---|---|
| 400 | `invalid_scope_field` | A field in `scope` is not in the tenant's `scope_schema` |
| 400 | `invalid_scope_value` | A field value is not in `allowed_values` |
| 401 | `missing_credentials` | See [Authentication](/docs/api-reference/authentication) |
| 403 | `principal_deactivated` | Caller's principal was deactivated |
| 422 | `insufficient_context` | A rule needs a field that is not present ; use `/resolve` instead if this is a common case |
| 500 | `signing_key_unavailable` | The verdict signing key could not be resolved ; check `docs/engineering/keys-guide.md` |

## Headers

- **Request** :
  - `X-API-Key: ak-...` - required auth (or session cookie).
  - `X-Verdict-TTL: N` - override the tenant's default TTL for this call (seconds ; max 3600).
- **Response** :
  - `X-Verdict-TTL: N` - the applied TTL, in seconds.
  - `X-Consultation-Id: cns-...` - the consultation ID, also in the body.

## Related

- [/v1/resolve](/docs/api-reference/resolve) - tolerant sibling that returns `required_context`.
- [/v1/consultations/{id}](/docs/api-reference/consultations) - fetch the full frozen record.
- [Verdicts and decisions](/docs/concepts/verdicts-and-decisions) - severity ladder + precedence.
- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - verifying the envelope.
