---
title: Progressive context resolution
description: How /resolve inverts the dependency between callers and policies via the required_context loop.
locale: en
kicker: Docs / Concepts - Stable
---

`/v1/resolve` is Knowledge's answer to a subtle problem : a caller cannot know, in advance, every field a policy might need. Adding a new rule that requires a new field would otherwise force every caller to redeploy. Progressive context resolution removes that coupling.

## The loop

```
caller             Knowledge
  |                     |
  |--- /resolve --->    | (has some context)
  |    ...              |
  |<-- required_context |
  |    (missing fields) |
  |                     |
  |  fetch(field)       |
  |  from CRM, vendor,  |
  |  user, LLM extract  |
  |                     |
  |--- /resolve --->    | (has more context)
  |    ...              |
  |<-- required_context |
  |    (or verdict)     |
```

The caller sends what it has. Knowledge classifies the fields into :

- **`sufficient`** - present, valid, engine can evaluate.
- **`incomplete`** - present but insufficient to reach a verdict (needs more).
- **`required`** - not present, applicable rules need it.

If any `required` fields remain, Knowledge returns `operation_status: "incomplete"` with a `required_context` array. The caller fetches, re-calls. Eventually the loop converges to `operation_status: "complete"` with a verdict.

## Anatomy of a required_context entry

```json
{
  "field": "client.knowledge_experience_level",
  "reason": "required by rul-sp-elig-complex-ke-gate",
  "type": "enum",
  "allowed_values": ["insufficient", "sufficient"],
  "source_requirement": "verified"
}
```

- `field` - path in the tenant's `scope_schema`.
- `reason` - which rule (or condition) triggered this requirement.
- `type` - json-schema-lite : `enum`, `string`, `number`, `boolean`, ...
- `allowed_values` - present for enum types.
- `source_requirement` - `verified` if the field must carry a `source` attesting to who verified it.

## Two-stage algorithm

Every `/resolve` call runs a two-stage algorithm inside :

**Stage 1 - Classify.** Walk the applicable rules ; for each condition field, mark it `sufficient`, `incomplete`, or `required` given the current context.

**Stage 2 - Decide.** If everything is sufficient, evaluate ; produce a verdict and sign it. Otherwise, return `required_context`.

The algorithm handles OR semantics (`fires_when_any`) correctly : a field is only required if it would be needed by every branch that could fire. It does not ask for fields whose rule was already ruled out by other context.

## Dependency inversion

Traditional flow :

```
caller (must know policy)  ---->  business API
```

The caller ships knowing which fields are required for every path. Add a new rule ? Every caller redeploys.

Knowledge flow :

```
caller (knows what it has)  --->  Knowledge (knows the policy)
                                  |
                                  v
                            required_context (what to fetch next)
                                  |
                                  v
                            registered fetchers
                                  |
                                  v
caller <---- verdict -----
```

The caller only needs to know **how to fetch fields**, not which fields matter for which rule. New rules requiring new fields propagate silently as long as fetchers exist for them.

## Fetcher registry pattern

The standard shape :

```python
fetchers = {
    "client.classification":         crm.get_classification,
    "client.knowledge_experience_level": crm.get_ke_level,
    "trade.beneficial_owner_id":     vendor.get_owner_id,
    "solicitation.type":             lambda ctx: llm_extract(ctx.conversation, "solicitation_type"),
}

def resolve_with_fetchers(initial_ctx):
    ctx = initial_ctx
    for _ in range(MAX_ROUNDS):
        result = knowledge.resolve(ctx)
        if result.status == "complete":
            return result
        for req in result.required_context:
            ctx[req.field] = fetchers[req.field](ctx)
    raise TooManyRounds()
```

`MAX_ROUNDS` guards against a misconfigured fetcher that never populates the requested field.

## When to use /resolve vs /check

| Situation | Endpoint |
|---|---|
| The caller assembles context on the fly (agents, chat, dynamic UIs) | `/resolve` |
| The caller has a fixed input contract (OMS, claims platform, batch job) | `/check` |
| The caller is willing to fail if context is incomplete | `/check` |
| The caller has a registered fetcher for every possible field | either (probably `/resolve` for the retry semantics) |

## What /resolve does NOT do

- **Ask the user.** `/resolve` returns `required_context` ; it does not present dialogs. The caller decides whether to fetch programmatically or prompt the user.
- **Cache fetches across calls.** Every re-call sends the full context. If a fetch is expensive, cache it caller-side.
- **Guarantee bounded rounds.** Nothing prevents an adversarial fetcher registry from looping forever. Cap the round count.

## Related

- [/v1/resolve](/docs/api-reference/resolve) - the endpoint reference.
- [Progressive context product page](/product/progressive-context) - the story-level view.
