---
title: Developer reference
description: The essentials of calling Knowledge from an application, workflow or AI agent. Authentication, /resolve, request and response shapes, errors, consultation retrieval.
locale: en
kicker: For engineering teams
ctaLabel: Become a design partner
ctaHref: /pilot
---

Knowledge exposes a small REST surface. Most integrations start with a single endpoint: `/v1/resolve`. This page covers what you need to make that first call and read its result.

## Base URL and versioning

The API is served under a versioned path:

```
POST https://<your-deployment>/knowledge/v1/resolve
```

The `v1` prefix is stable. Breaking changes ship under a new major-version prefix; additive changes remain under `v1`.

## Authentication

Every request must carry an API key in the `X-API-Key` header:

```
X-API-Key: ak-<hex>
```

Keys are minted per principal in the back-office UI or via the admin API. Keys are hashed at rest and displayed once at creation. Rotate them at the frequency your deployment requires.

See [Security](/security) for the full authentication and authorization model.

## POST /v1/resolve

Send the current context; receive either the verdict or the additional context still required.

**Request body:**

```
{
  "action_type": "sp_offer_eligibility",
  "context": {
    "product.complexity": { "value": "highly_complex", "source": "product_master" },
    "client.classification": { "value": "retail", "source": "CRM" }
  },
  "correlation": {
    "conversation_id": "conv-...",
    "agent_run_id": "run-..."
  }
}
```

- `action_type` — the operation being evaluated (defines which target's rules apply).
- `context` — a dict of dot-path field names to `Fact` objects. Fields the caller does not yet know are simply omitted.
- `correlation` — optional. Opaque IDs the caller passes so a Consultation can be traced back to an external interaction; Knowledge stores them but never interprets them.

**Response — INCOMPLETE:**

```
{
  "operation_status": "incomplete",
  "required_context": [
    {
      "field": "client.knowledge_experience",
      "reason": "required by rul-sp-elig-complex-professional-ke",
      "type": "enum",
      "allowed_values": ["insufficient", "sufficient"]
    }
  ]
}
```

The caller obtains each required field (from a system, a vendor, an extraction, or the user) and re-calls `/resolve` with the enriched context. No Consultation is written for INCOMPLETE responses.

**Response — COMPLETE:**

```
{
  "operation_status": "complete",
  "verdict": "blocked",
  "cited_rules": ["rul-sp-elig-highly-complex-retail-block"],
  "cited_rule_versions": ["rv-..."],
  "dominating_rule_id": "rul-sp-elig-highly-complex-retail-block",
  "consultation_id": "cns-abc123",
  "normative_hash": "sha256:..."
}
```

`verdict` is the business outcome. Depending on the applicable rules it may be `allowed`, `blocked`, `approval_required`, `observe`, or any value defined by the policy. `approval_required` is a verdict, not a separate response state; when it is returned, an optional `approver` object identifies who can decide.

## The Fact shape

Every value in `context` is a `Fact` — value plus provenance:

| Field | Required | Meaning |
|---|---|---|
| `value` | yes | The field value (any JSON-serialisable type) |
| `source` | yes | Caller-defined source identifier (`CRM`, `IDV_vendor`, `user_input`, ...) |
| `verification_status` | no | `unverified` (default) or `verified`. Rules can require `verified` via `source_requirement` |
| `confidence` | no | `0.0-1.0`, for probabilistic sources such as LLM extraction |

## The Requirement shape

Each entry in `required_context` carries what the caller needs to build a follow-up query:

| Field | Meaning |
|---|---|
| `field` | Canonical field name, dot notation supported for nested paths |
| `reason` | Human-readable justification, ideally citing the rule that requires the field |
| `type` | Schema type (`string`, `number`, `enum`, `boolean`, `date`, ...) |
| `allowed_values` | For enum fields, the acceptable values |
| `min` / `max` | For numeric fields |
| `format` | Format hint (`iso-date`, `iso-country`, ...) |
| `source_requirement` | `verified` if the fact must carry `verification_status: verified` |
| `acceptable_sources` | Whitelist of source identifiers narrower than `source_requirement` |
| `confidence_threshold` | Minimum confidence for probabilistic sources |

## Consultation retrieval

Every COMPLETE response returns a `consultation_id`. Fetch the full record:

```
GET /knowledge/v1/consultations/<consultation_id>
```

The record captures the context sent, the cited rule versions, the dominating rule, the precedence trace, the resolved targets, the scope used, and the normative hash. This is the surface `/explain` and the audit UI read from. See [Governance](/governance) for the semantics.

## Errors

Standard HTTP status codes:

| Code | Meaning |
|---|---|
| `400` | Malformed request body or context |
| `401` | Missing or invalid API key |
| `403` | API key does not have the required permission |
| `404` | Unknown action_type, consultation_id or related resource |
| `409` | Conflict with the current state (e.g. duplicate creation) |
| `422` | Request accepted, but validation on a nested structure failed |
| `500` | Unhandled error |

Every error response carries a JSON body with `code`, `message` and optionally `details`.

## curl example

```
curl -X POST https://<your-deployment>/knowledge/v1/resolve \
  -H "X-API-Key: ak-..." \
  -H "Content-Type: application/json" \
  -d '{
    "action_type": "sp_offer_eligibility",
    "context": {
      "product.complexity": { "value": "highly_complex", "source": "product_master" }
    }
  }'
```

## Reference integration

The Wealth pack ships a working script that calls `/resolve` for the four modelled decisions of structured-product distribution, showing the incomplete-to-complete loop end to end. See [Wealth](/wealth) for the walkthrough.

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The mental model behind `/resolve`, complete/incomplete and normative state |
| [Governance](/governance) | What the consultation captures and how replay reconstructs a historical decision |
| [Security](/security) | The authentication, authorization and tenant-isolation model the API enforces |
| [Design partner](/pilot) | Three founding slots, one production-relevant decision, founding-customer pricing |
