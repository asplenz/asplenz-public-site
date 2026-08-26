---
title: Overrides, approvals, pauses
description: The three governed exception mechanisms Knowledge offers, and when each is the right tool.
locale: en
kicker: Docs / Concepts - Stable
---

Rules are the default. When a case needs to go through despite the default, Knowledge exposes three distinct governed mechanisms - each with a different lifecycle and audit shape.

## Approval (`apr-`)

An **Approval** is a governance object created when a rule returns `require_approval`. It represents a request for a human decider to authorise a specific operation.

**Shape :**

```json
{
  "id": "apr-abc123",
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
  "status": "pending",
  "decider": null,
  "decision": null,
  "decided_at": null,
  "grants": []
}
```

**Lifecycle** : one approval per operation. Multiple triggering rules become entries in `triggers[]`, but a single "Approve" button in the UI resolves them collectively. On approval, the decider can optionally attach an `Override` via `grants[]`.

**Fire semantics** : the approval body always ships with the exact operation shape (`intended_action`, `intended_resource`, `intended_parameters`) so the decider knows precisely what they are authorising.

## Override (`ovr-`)

An **Override** is an ongoing authorisation for a set of rules to be neutralised over a bounded scope. Unlike an approval (per-operation), an override can cover many future operations that fall within its scope.

**Types** :

- **Type 1 - Standing exception.** Manually created by an admin to permanently authorise a scoped exception (rare, high-friction).
- **Type 2 - Time-bounded.** Same, but with an `expires_at`.
- **Type 3 - Granted by approval.** The most common. An `Approval` decides yes and simultaneously creates an override that covers "operations of this kind" within a bounded scope.

**Mandatory field** : `applies_to_scope`. Overrides are never blanket ; they always specify the scope inside which they authorise the exception.

**Versioning** : symmetric to Rule. Every override change writes a new `OverrideVersion` (`ovv-`) and consultations pin the version they applied.

**What overrides can and cannot do** :

- Overrides neutralise a rule (make it not fire). They never turn a hard `blocked` into a wider `allowed`.
- Overrides do not affect `absolute_ban` rules (bypass is impossible by design).
- A rule with `derogation_allowed = false` cannot be overridden.

## Pause (`pau-`)

A **Pause** is a temporal admin suspension of a rule or target. Two modes :

- **`paused`** - the rule is hidden from the engine ; it does not fire at all.
- **`observe`** - the rule fires but its verdict is treated as advisory (not enforced). Useful for shadow validation.

**Strictly permissive** : a Pause never converts `allow` into `block`. It only weakens or suspends.

**Difference from Override** : an override authorises exceptions to a rule that continues to exist. A pause suspends the rule itself.

**Difference from a rule status** : `Rule.status = paused` (retired terminology) is the old way. Pause is a separate entity with its own actor, reason, and expiry.

## The (deferred) opposite : Signal

A **Signal** would be a rule *activator* : a rule silent by default that fires on a temporal or contextual condition. Semantically the opposite of Pause. Specified in `docs/specs/signal-entity-v1.md` but explicitly **not in V5** ; do not model your integration on it.

## Choosing among the three

| Situation | Use |
|---|---|
| One-off operation needs manual sign-off | Approval |
| Approval granted, want subsequent similar operations to go through | Approval with a Type-3 Override grant |
| A rule fired at wrong time, need it silenced now | Pause (mode `paused`) |
| A rule is new, we want to see what it would do before enforcing | Pause (mode `observe`) |
| A standing scope exception (VIP client, sandbox tenant) | Override Type 1 |
| Same, but bounded in time | Override Type 2 |

## Audit surface

Every mechanism writes an `Event` (`evt-`). Consultations record the overrides and pauses in force at decision time so replay reflects the exact set of exceptions that applied.

## Related

- [Verdicts and decisions](/docs/concepts/verdicts-and-decisions) - how overrides + pauses affect the verdict.
- [/v1/approvals](/docs/api-reference/approvals) - the approval endpoint.
- [Emergency response](/docs/guides/emergency-response) - kill-switch via Pause `paused`.
