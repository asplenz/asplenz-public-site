---
title: Knowledge MCP tools reference
description: Every tool exposed by the Knowledge MCP server, with parameters, return shape, and typical use.
locale: en
kicker: Docs / MCP server - Stable
---

The Knowledge MCP server exposes eight tools. Each one wraps a Knowledge API endpoint. This page describes what each tool does, the arguments it accepts, and what it returns.

For wiring the server into your MCP host, see [Quickstart : Knowledge as an MCP server](/docs/quickstart-knowledge-mcp).

---

## `knowledge_query`

Search rules in the caller's tenant by free text.

**Parameters**

| Name | Type | Required | Notes |
|---|---|---|---|
| `query` | string | yes | Free-text search terms. |
| `policy_id` | string | no | Narrow the search to one Policy. |
| `entry_type` | string | no | Only `"rule"` is meaningful today. |

**Returns** - a formatted list of results with entry type, title, snippet, author, and date. Empty string if no results.

**Typical use** - agent asks "what does the tenant know about refund limits ?" before proposing an action.

---

## `knowledge_check`

Verdict on an intended action against the caller's authorized targets.

**Parameters**

| Name | Type | Required | Notes |
|---|---|---|---|
| `intended_action` | string | yes | Free-text description of what the caller wants to do. |
| `scope` | object | no | Structured scope dimensions (jurisdiction, asset_class, client_classification, ...). Rules whose scope key does not match are skipped. |
| `metrics` | object | no | Runtime facts the rules evaluate against : numbers (thresholds), booleans (attestations), strings (ids, timestamps). Everything a rule may gate on that is not a scope dim goes here. |

**Returns** - verdict block :

```
Verdict: BLOCK | ALLOW | REQUIRE_APPROVAL | WARN
Consultation: cns-...

Cited rules (N, winning severity):
  [severity] rule_id
    statement
    Rationale: ...
```

Plus a summary line if additional rules fired at lower severity (precedence trace).

**Typical use** - agent asks "am I allowed to do X in this scope with these metrics ?" and branches on the returned effect.

---

## `knowledge_resolve`

Two-stage progressive-context verdict. The agent sends what it knows ; the engine either returns a verdict or lists the missing fields the agent must acquire before re-invoking.

**Parameters**

| Name | Type | Required | Notes |
|---|---|---|---|
| `action_type` | string | yes | The operation being evaluated (e.g. `refund_request`, `trade_execution`). Used to resolve the applicable target. |
| `context` | object | no | Known facts as `{field_name: value_or_fact}`. Bare scalars are auto-wrapped as user-asserted facts. Full fact dicts pass through untouched : `{"value": X, "source": "CRM", "verification_status": "verified"}`. |
| `correlation` | object | no | External IDs to correlate this call to a conversation, agent run, or interaction. Stored on the Consultation, uninterpreted. |

**Returns** - one of two shapes :

- `INCOMPLETE` : list of required fields with type, reason, `allowed_values` / range / `source_requirement` / acceptable sources.
- `COMPLETE` : verdict + dominating rule + cited rules + `normative_hash` + consultation id.

**Typical use** - conversational agents that build up context turn by turn. See [Progressive context resolution](/docs/concepts/progressive-context-resolution).

---

## `knowledge_request_approval`

Submit a human approval request for an action a check has flagged.

**Parameters**

| Name | Type | Required | Notes |
|---|---|---|---|
| `intended_action` | string | yes | Short natural-language summary for the compliance officer to read. |
| `justification` | string | yes | The prose the officer reads to decide approve or refuse. Should speak specifically to the rules that block the context. |
| `context` | object | yes | The SAME `context` (`scope` + `metrics`) that produced the block verdict from `knowledge_check`. The backend re-runs the check to derive the covered rules. |
| `requested_by` | string | no | `principal_id` the request is filed under. Falls back to the tenant's default requester if omitted. |
| `requested_by_type` | string | no | `"human"` / `"agent"` / `"system"`. Defaults to the tenant's configured type. |

**Returns** - `approval_request_id`, status, and the list of `rule_id`s the backend attached as triggers. Verify that trigger list matches what `knowledge_check` returned - a mismatch means the context passed here differs from the context checked.

**Typical use** - agent hits `require_approval` on `knowledge_check`, drafts a justification, submits, then polls.

**Why re-passing context, not triggers** : one code path answers "what blocks this context ?" for both the read (check) and the write (approval). Prevents "wave 2" blockers hidden behind the dominating severity from surfacing after approval.

---

## `knowledge_get_approval_status`

Poll an approval request.

**Parameters**

| Name | Type | Required | Notes |
|---|---|---|---|
| `approval_request_id` | string | yes | The id returned by `knowledge_request_approval`. |

**Returns** - status, requester, action summary, plus decider + decision timestamp + resulting `override_id` + decision comment when resolved.

**Typical use** - agent polls until the status flips from `pending` to `approved` / `refused`, then proceeds accordingly.

---

## `knowledge_create_rule`

Author a new Rule under an existing Policy. Requires write access on the tenant.

**Parameters**

| Name | Type | Required | Notes |
|---|---|---|---|
| `policy_id` | string | yes | The Policy the rule belongs to. |
| `statement` | string | yes | Directive text - what the rule says. |
| `author` | string | yes | Author name. |
| `severity` | string | no | `absolute_ban` / `hard_block` / `require_approval` / `informative` / `allow`. Default `hard_block`. |
| `effect` | string | no | `block` / `allow` / `require_approval` / `warn`. Default `block`. |
| `priority` | integer | no | Higher wins ties. Default 50. |
| `rows` | string (JSON) | no | Multi-row decision-table body. Each row : `{"position", "scope", "condition?", "output?"}`. |
| `scope` | string (JSON) | no | Convenience for a single-row rule. Ignored when `rows` is set. |
| `condition` | string (JSON) | no | Convenience for a single-row rule. Ignored when `rows` is set. |
| `rationale` | string | no | Plain-text motivation. |
| `derogation_allowed` | boolean | no | Whether an Override can lift this rule. Default true. |

**Returns** - `rule_id`, severity, row-count summary, and the statement.

**Typical use** - authoring flow where the LLM proposes a rule and the human approves. Rare from an agent runtime.

---

## `knowledge_list_rules`

Enumerate the active rules of a Policy.

**Parameters**

| Name | Type | Required | Notes |
|---|---|---|---|
| `policy_id` | string | yes | Policy to list. |

**Returns** - formatted list of `rule_id` + severity + statement.

**Typical use** - agent inspects an existing Policy before proposing an amendment.

---

## `knowledge_create_override`

Grant a scope-bounded exception on one or more Rules for a specific audience.

**Parameters**

| Name | Type | Required | Notes |
|---|---|---|---|
| `targets` | list | yes | List of `{"target_id", "target_type"}` objects. |
| `justification` | string | yes | Audit trail explaining the exception. |
| `approved_by` | string | yes | Approver name. |
| `audience_type` | string | no | `"individual"` (list of principals) or `"domain"` (whole domain). Default `"individual"`. |
| `audience_principal_ids` | list | no | Principals for individual audience. |
| `audience_domain_id` | string | no | Domain id for domain audience. |
| `expires_at` | string | no | ISO timestamp when the override stops applying. |
| `conditions` | string | no | Free-text gate description. |

**Returns** - `override_id`, target count, audience type.

**Typical use** - after an approval is granted, the resulting Override is created here (typically by the back-office code, not by the agent).

---

## Auth and configuration

The MCP server calls Knowledge with a service-level API key set as `KNOWLEDGE_API_KEY` at startup. Every tool call passes through that key. There is no per-call caller-identity impersonation today.

For remote transport (streamable-http), the MCP host authenticates to the server itself with either a static bearer (`MCP_ACCESS_TOKEN`) or OAuth 2.1. See [Quickstart : Knowledge as an MCP server](/docs/quickstart-knowledge-mcp) for wiring details.
