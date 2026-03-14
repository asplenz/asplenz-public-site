# Concepts: Overrides

An **override** is a governed exception to an invariant or rule. It documents that the organization knowingly deviated from a constraint, with justification and conditions.

---

## What Is an Override?

An override allows a specific action to proceed despite conflicting with an invariant or rule:

| Field | Type | Description |
|-------|------|-------------|
| `target_id` | string | ID of the invariant or rule being overridden |
| `override_type` | enum | `temporary` or `permanent` |
| `justification` | string | Why the exception is needed |
| `conditions` | string | When the override applies |
| `approved_by` | string | Who approved the exception |
| `expires_at` | datetime | When the override expires (temporary only) |

Overrides are **not workarounds**. They are explicit, documented exceptions that prove the organization acknowledged a constraint, evaluated the risk, and decided to deviate — with a clear paper trail.

---

## Creating an Override

### Via the API

```bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/overrides \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "target_id": "inv-8a3f1b2c4d5e",
    "override_type": "temporary",
    "justification": "Health endpoint must be public for load balancer checks",
    "conditions": "Only applies to /health and /ready endpoints",
    "approved_by": "tech-lead",
    "expires_at": "2025-06-01T00:00:00Z"
  }'
```

### Via Approval Workflow

When an invariant has `requires_approval: true`, overrides are created automatically after approval:

```
1. Agent or engineer detects conflict
2. Calls request_approval() with justification
3. Approver reviews in dashboard → Approve
4. Override auto-created with approval metadata
```

### Via the Dashboard

Navigate to a scope → Overrides tab → **Add Override**.

---

## Temporary vs. Permanent

| Type | Use Case | Behavior |
|------|----------|----------|
| **Temporary** | Hotfix, time-limited exception | Expires at `expires_at`, then constraint re-applies |
| **Permanent** | Deliberate long-term exception | Active until explicitly revoked |

Prefer temporary overrides. Permanent overrides should be rare and well-justified.

---

## How Overrides Affect Compliance

When an override is active, the compliance check moves the target entry from "conflicts" to "overridden":

```json
{
  "conflicts": [],
  "overridden": [
    {
      "entry_id": "inv-8a3f1b2c4d5e",
      "override_id": "ovr-9d1e3f5a7b2c",
      "justification": "Health endpoint must be public for load balancer checks"
    }
  ]
}
```

The action is allowed, but the override is visible in the response — it's not silent.

The CI Verifier recognizes overrides: citing an overridden entry with the override ID satisfies the compliance check.

---

## Revoking an Override

```bash
curl -X DELETE http://localhost:8090/api/v1/scopes/scp-XXXX/overrides/ovr-XXXX \
  -H "Authorization: Bearer kn_xxxxxxxx"
```

After revocation, the original constraint re-applies. A revocation event is recorded.

---

## Best Practices

- **Always include justification**. An override without justification is a gap in your audit trail.
- **Prefer temporary**. If the exception is for a specific situation, set an expiry date.
- **Use conditions**. "Only applies to /health endpoint" is more precise than overriding the entire invariant.
- **Link to approval**. If the override was approved through the approval workflow, the link is automatic. For manual overrides, document who approved.
- **Review expired overrides**. Temporary overrides that expired may indicate constraints that need updating.

---

## Related Concepts

- [Invariants](/docs/concepts/invariants) — the constraints that overrides except
- [Rules](/docs/concepts/rules) — directives that overrides except
- [Decisions](/docs/concepts/decisions) — the choices behind the constraints
