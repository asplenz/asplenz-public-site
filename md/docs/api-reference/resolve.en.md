---
title: POST /v1/resolve
description: Progressive verdict endpoint - tolerant context, returns required_context when insufficient.
locale: en
kicker: Docs / API reference - Stable
---

`/v1/resolve` is Knowledge's tolerant sibling to [`/v1/check`](/docs/api-reference/check). It accepts partial context and returns either :

- **`complete`** - a signed verdict (`allowed` / `blocked` / `approval_required`).
- **`incomplete`** - a `required_context` array listing the fields still needed.

The caller fetches, re-submits. See [Progressive context resolution](/docs/concepts/progressive-context-resolution) for the algorithm.

## Request

```
POST /tnt-acme/v1/resolve
X-API-Key: ak-live-...
X-Verdict-TTL: 60
Content-Type: application/json
```

**Body :**

```json
{
  "action": "structured_note.propose",
  "resource": "product-STRAT-2026-04",
  "scope": {
    "asset_class": "equity",
    "product_type": "structured_note"
  },
  "context": {
    "client.id": { "value": "cli-9f2c", "source": "crm" },
    "client.classification": { "value": "retail", "source": "crm" }
  },
  "on_behalf_of": "hum-marie"
}
```

- **`action`** / **`resource`** (required) - same semantics as `/check`.
- **`scope`** (required) - the initial scope ; may be widened as context arrives.
- **`context`** (required) - map of `field -> { value, source, ... }`. Every field is validated against the scope_schema on receipt.
- **`on_behalf_of`** (optional) - delegation claim.

Each context field's value carries provenance :

```json
{
  "value": "insufficient",
  "source": "crm",
  "verification_status": "verified",
  "as_of": "2026-08-14T09:00:00Z"
}
```

`source` becomes part of `context_hash` (bound in the signed envelope). Fetchers should always set it.

## Response - incomplete

```json
{
  "operation_status": "incomplete",
  "required_context": [
    {
      "field": "client.knowledge_experience_level",
      "reason": "required by rul-sp-elig-complex-ke-gate",
      "type": "enum",
      "allowed_values": ["insufficient", "sufficient"]
    },
    {
      "field": "solicitation.type",
      "reason": "required by rul-sp-crossborder-solicited",
      "type": "enum",
      "allowed_values": ["solicited", "reverse_enquiry"]
    }
  ],
  "provisional_context": {
    "client.classification": "retail"
  }
}
```

`provisional_context` echoes back the fields Knowledge accepted (useful to detect field-name typos client-side). No `signed_verdict` field on `incomplete` responses.

## Response - complete

Same shape as `/check`'s complete response, plus :

```json
{
  "operation_status": "complete",
  "verdict": "approval_required",
  ...
  "required_context_history": [
    { "round": 1, "fields": ["client.classification", "solicitation.type"] },
    { "round": 2, "fields": ["client.knowledge_experience_level"] }
  ]
}
```

The `required_context_history` records how many rounds it took. Useful for observability (long chains suggest missing fetchers).

## Errors

| Status | Code | Meaning |
|---|---|---|
| 400 | `invalid_context_shape` | A context field is missing `value` |
| 400 | `unknown_scope_field` | A scope field is not in the tenant's `scope_schema` |
| 401 | `missing_credentials` | See [Authentication](/docs/api-reference/authentication) |
| 429 | `too_many_rounds` | Server-side cap on rounds per consultation reached (default 12) ; likely a fetcher registry that never populates a required field |

## Fetcher pattern

The canonical caller loop :

```python
ctx = initial_context
for round_num in range(MAX_ROUNDS):
    resp = knowledge.resolve(action, resource, scope, ctx, on_behalf_of=user_id)
    if resp["operation_status"] == "complete":
        return resp
    for req in resp["required_context"]:
        ctx[req["field"]] = fetch_field(req["field"], ctx)
raise ContextResolutionTooManyRounds()
```

## Related

- [Progressive context resolution](/docs/concepts/progressive-context-resolution) - the algorithm + fetcher pattern.
- [/v1/check](/docs/api-reference/check) - strict sibling.
- [Bring your own tools to MCP proxy](/docs/guides/bring-your-own-tools-to-mcp-proxy) - fetcher pattern in production.
