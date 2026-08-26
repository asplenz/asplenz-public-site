---
title: Verdicts and decisions
description: How rules compose into a verdict, the severity ladder, precedence, and what a Consultation records.
locale: en
kicker: Docs / Concepts - Stable
---

Every `/check` or `/resolve` call produces a **verdict** determined by the rules that fire on the case. This page walks through the model.

## The severity ladder

Verdicts come out of five severity levels, ranked strongest first :

| Severity | Verdict | What the caller does |
|---|---|---|
| `absolute_ban` | `blocked` | Refuse. Cannot be overridden. |
| `hard_block` | `blocked` | Refuse. Overridable by a scope-bounded `Override` if `derogation_allowed`. |
| `require_approval` | `approval_required` | Route to human approver. |
| `informative` | `allowed` (with warning) | Proceed. Log the informative fires. |
| `allow` | `allowed` | Proceed. |

The verdict of a consultation is the effect of the **dominating rule** : the fired rule with the strongest severity. Ties are broken by the `precedence_trace` (see below).

## Two write endpoints

- **`/v1/check`** - strict context. The caller sends a complete, typed context ; Knowledge evaluates and returns the verdict. Wrong shape ? 422. Missing field the rule needs ? Error, not a `required_context` loop. Use it for tools that already know the full call shape (OMS, claims platform, custom PEP).

- **`/v1/resolve`** - tolerant context. The caller sends what it has ; Knowledge iterates with `required_context`. Use it for agents (LLM callers) that assemble context on the fly. See [Progressive context](/docs/concepts/progressive-context-resolution).

Both endpoints produce the same Consultation record and the same signed envelope.

## What fires

The engine considers a rule **applicable** to the case if :

1. The caller principal is a member of one of the rule's Targets (or the rule is `universal`).
2. The rule has a row whose `scope` matches the case's `scope`.
3. That row's `condition` evaluates true on the case.

Multiple rules can fire on the same case. The one with the strongest severity dominates ; the others are logged in the trace and their statements can be quoted in the verdict prose.

## Precedence tie-breakers

When two rules would return the same severity, Knowledge picks a dominator using an explicit precedence order :

1. Highest severity.
2. Longest scope match (more specific scope wins over broader scope).
3. Youngest rule (most-recently-adopted takes precedence).
4. Deterministic tie-break by rule ID (rare, but avoids non-determinism).

The full ordered trace is captured on the Consultation as `precedence_trace` so any reader can reconstruct why *this* rule won and not the other.

## The Consultation record

Every consultation writes a `Consultation` (`cns-`) row carrying :

- `cited_entry_ids` - the fired rules by ID.
- `cited_rule_version_ids` - the exact RuleVersion snapshots pinned at decision time.
- `dominating_rule_id` - the winning rule.
- `precedence_trace` - the ordered candidate list and tie-break trail.
- `resolved_target_ids` - which targets the principal belonged to at that moment.
- `scope_used` - the effective scope evaluated.
- `verdict` - the resolved verdict.
- `signed_verdict` - the JWS ES256 envelope.
- `normative_hash` - a hash of the frozen state ; anyone reading the record later can verify the record is unmodified.

Fetch it any time :

```
GET /knowledge/v1/consultations/cns-abc123
```

The response renders the frozen state exactly as it stood at decision time. Rule text changed since ? Doesn't matter - `cited_rule_version_ids` points at the immutable snapshot.

## Signed envelope

Every verdict is signed. The tool boundary verifies the signature and refuses on binding mismatch. See [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) for the full model.

## Verdict prose (LLM-rendered)

If the tenant has `knowledge-ai` enabled, the verdict can be rendered as human-readable prose citing the governance log entries and rationale. **The prose is not authoritative** ; the deterministic verdict from the engine is. The LLM is a renderer, not a judge.

## Related

- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - how the tool boundary enforces the verdict.
- [Progressive context](/docs/concepts/progressive-context-resolution) - the `/resolve` loop.
- [/v1/check](/docs/api-reference/check) - the strict endpoint.
- [/v1/resolve](/docs/api-reference/resolve) - the tolerant endpoint.
- [/v1/consultations/{id}](/docs/api-reference/consultations) - fetch a consultation record.
