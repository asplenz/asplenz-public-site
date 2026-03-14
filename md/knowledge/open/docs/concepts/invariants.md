# Concepts: Invariants

An **invariant** is an absolute constraint — something that must never be violated. Invariants are the strongest enforcement mechanism in Knowledge.

---

## What Is an Invariant?

An invariant represents a non-negotiable organizational constraint:

| Field | Type | Description |
|-------|------|-------------|
| `constraint` | string | The constraint statement |
| `rationale` | string | Why this constraint exists |
| `requires_approval` | boolean | Whether an override requires human approval |
| `status` | enum | `active` or `revoked` |
| `namespace` | string | Sub-scope organization (default: `_root`) |

Invariants are **blocking**: if an action conflicts with an active invariant, Knowledge reports a blocking conflict. The action should be stopped or an override must be obtained.

---

## Creating an Invariant

### Via the API

```bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/invariants \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "constraint": "All public API endpoints must require authentication",
    "rationale": "Security baseline — no exceptions without explicit approval",
    "requires_approval": true,
    "author": "security-team",
    "author_type": "human"
  }'
```

### Via the Dashboard

Navigate to a scope → Invariants tab → **Add Invariant**.

---

## How Invariants Are Enforced

### Compliance Check

When an agent or human checks an intended action:

```bash
curl -X POST http://localhost:8090/api/v1/check \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "scp-XXXX",
    "intended_action": "Add a public health endpoint without authentication"
  }'
```

Response:
```json
{
  "conflicts": [
    {
      "entry_id": "inv-8a3f1b2c4d5e",
      "entry_type": "invariant",
      "constraint": "All public API endpoints must require authentication",
      "severity": "blocking",
      "requires_approval": true
    }
  ]
}
```

The conflict is **blocking** — the action should not proceed without an override.

### CI Verifier

The Verifier checks PRs against active invariants. If a mandatory invariant is applicable and not cited in the PR's Implementation Report, the Verifier fails the check (in `fail-on-blocking` or `strict` mode).

### MCP Agent

AI agents query invariants before acting:

```
Agent → knowledge_list_invariants("Engineering")
  → Returns all active invariants for the scope
  → Agent evaluates its planned action against each
  → If conflict: stops and reports, or requests approval
```

---

## Approval-Gated Invariants

When `requires_approval` is `true`, an override cannot be created without an approval workflow:

```
1. Agent detects conflict with invariant
2. Agent calls request_approval(trigger_id="inv-8a3f", ...)
3. Approval request appears in the dashboard
4. Human with required role reviews and decides
5. If approved → override is auto-created
6. Agent re-checks → conflict resolved by override → proceeds
```

This ensures human oversight for the most critical constraints.

---

## Revoking an Invariant

Invariants can be revoked (soft-deleted) when they no longer apply:

```bash
curl -X DELETE http://localhost:8090/api/v1/scopes/scp-XXXX/invariants/inv-XXXX \
  -H "Authorization: Bearer kn_xxxxxxxx"
```

Revocation sets `is_active = false` and records `revoked_at`. The invariant is preserved for audit — it is not deleted. Revocation generates an event in the timeline.

---

## Best Practices

- **Keep invariants few and critical**. If everything is an invariant, nothing is. Reserve invariants for constraints that should genuinely never be violated.
- **Use `requires_approval` for high-risk invariants**. This ensures a human reviews any exception.
- **Write clear rationale**. The rationale should explain *why* the constraint exists, not just restate it.
- **Link to the decision** that created the invariant. This makes the reasoning traceable.
- **Review periodically**. Invariants that no longer apply should be revoked — not left active as noise.

---

## Related Concepts

- [Decisions](/docs/concepts/decisions) — the choices that create invariants
- [Rules](/docs/concepts/rules) — active directives (softer than invariants)
- [Overrides](/docs/concepts/overrides) — governed exceptions to invariants
