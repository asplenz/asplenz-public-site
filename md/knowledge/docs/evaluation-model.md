# Evaluation Model

## Normative State

The normative state is the complete set of active constraints for a given scope at a point in time. It includes:

- **Blocking invariants** — absolute constraints currently in effect
- **Mandatory rules** — active directives that must be followed
- **Advisory rules** — active recommendations
- **Active overrides** — governed exceptions that waive specific constraints

The normative state is retrieved via the `resolve()` operation. It returns a deterministic snapshot: for the same scope and the same set of active entries, the result is always identical.

Each resolution includes a `normative_hash` — a fingerprint of the current state. This allows consumers to detect when the normative state has changed since their last check.

## Scope Resolution

Every evaluation happens within a scope. A scope is an isolation boundary — invariants, rules, and overrides in one scope do not affect another.

When evaluating an action:

1. The scope is identified (by name or ID)
2. The full normative state for that scope is resolved
3. The action is evaluated against that state

In CI/CD contexts, scope resolution can be automated based on which files were changed. For example, changes to `src/` may map to the "Engineering" scope, while changes to `infra/` map to "Operations".

## Determinism

For the same action, the same scope, and the same normative state, the evaluation produces the same result. There is no randomness, no external inference, and no model-based interpretation in the evaluation path.

This property is important for CI/CD integration: re-running the same check on the same PR with the same Knowledge state produces the same verdict.

## How Overrides Affect Evaluation

When an action conflicts with an invariant or mandatory rule, the system checks whether an active override exists for that specific entry.

- If a valid override exists: the conflict is resolved. The override is recorded in the result.
- If no override exists: the conflict is reported as blocking.

An override is considered valid when:

- It targets the conflicting entry
- It is currently active (not revoked)
- It has not expired
- It belongs to the same scope

Expired overrides are treated as if they do not exist. The original constraint is automatically re-enforced.

## Evaluation Outcomes

Every evaluation returns one of three outcomes:

### Allowed

The proposed action does not conflict with any blocking invariant or mandatory rule. Any applicable advisory rules are reported as informational.

```json
{
  "allowed": true,
  "conflicts": [],
  "advisory": [
    {
      "entry_type": "rule",
      "statement": "Use conventional commits format",
      "severity": "advisory"
    }
  ]
}
```

### Denied

The proposed action conflicts with one or more blocking constraints, and no valid override exists.

```json
{
  "allowed": false,
  "conflicts": [
    {
      "entry_type": "invariant",
      "statement": "All API endpoints must require authentication",
      "severity": "blocking",
      "requires_approval": false
    }
  ]
}
```

The caller must change their approach to avoid the conflict.

### Requires Approval

The proposed action conflicts with a constraint that has `requires_approval: true`. The caller cannot proceed without explicit human approval.

```json
{
  "allowed": false,
  "conflicts": [
    {
      "entry_type": "invariant",
      "statement": "All API endpoints must require authentication",
      "severity": "blocking",
      "requires_approval": true
    }
  ]
}
```

The expected flow:

1. Submit an approval request with justification
2. Wait for a human with the required role to approve or reject
3. If approved, an override is created and the action can proceed
4. If rejected, find an alternative approach

## Overridden Conflicts

When a conflict exists but is covered by a valid override, it appears in the `overridden` section of the result rather than in `conflicts`:

```json
{
  "allowed": true,
  "conflicts": [],
  "overridden": [
    {
      "entry_type": "invariant",
      "statement": "All API endpoints must require authentication",
      "severity": "blocking",
      "active_overrides": [
        {
          "override_id": "ovr-...",
          "justification": "Health endpoint must be public for load balancer"
        }
      ]
    }
  ]
}
```

This provides full transparency: the caller can see that a constraint was waived, by whom, and why.
