# Concepts: Rules

A **rule** is an active directive — a statement of what should be done. Unlike invariants (absolute blocks), rules can be mandatory or advisory, and they are versioned to track how standards evolve.

---

## What Is a Rule?

A rule represents an organizational standard:

| Field | Type | Description |
|-------|------|-------------|
| `directive` | string | What should be done |
| `severity` | enum | `MANDATORY` or `ADVISORY` |
| `status` | enum | `active` or `archived` |
| `namespace` | string | Sub-scope organization (default: `_root`) |

Rules are **versioned**: when a rule changes, a new version is created while the full history is preserved.

### Severity Levels

| Severity | Meaning | CI Behavior |
|----------|---------|-------------|
| **MANDATORY** | Must be followed | Verifier fails if uncited |
| **ADVISORY** | Should be followed | Verifier warns if uncited |

---

## Creating a Rule

### Via the API

```bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/rules \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "directive": "All PRs must be reviewed by at least one team member before merging",
    "severity": "MANDATORY",
    "author": "tech-lead",
    "author_type": "human"
  }'
```

### Via the Dashboard

Navigate to a scope → Rules tab → **Add Rule**.

---

## Versioning

When a rule needs to change, update it — Knowledge creates a new version automatically:

```bash
curl -X PUT http://localhost:8090/api/v1/scopes/scp-XXXX/rules/rul-XXXX \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "directive": "All PRs must be reviewed by at least two team members before merging",
    "severity": "MANDATORY",
    "change_reason": "Increased review requirement after production incident"
  }'
```

The previous version is preserved. You can view the full version history:

```bash
curl http://localhost:8090/api/v1/scopes/scp-XXXX/rules/rul-XXXX/versions \
  -H "Authorization: Bearer kn_xxxxxxxx"
```

Each version has its own timestamp, author, and change reason. This is your audit trail for how standards evolved.

---

## How Rules Are Enforced

### Compliance Check

```bash
curl -X POST http://localhost:8090/api/v1/check \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "scp-XXXX",
    "intended_action": "Merge a PR without any review"
  }'
```

Response includes the rule conflict with its severity:

```json
{
  "conflicts": [
    {
      "entry_id": "rul-2b7c9e4f1a3d",
      "entry_type": "rule",
      "directive": "All PRs must be reviewed by at least two team members",
      "severity": "mandatory"
    }
  ]
}
```

### CI Verifier

- **Mandatory rules**: uncited = Verifier fails
- **Advisory rules**: uncited = Verifier warns

### MCP Agent

```
Agent → knowledge_list_rules("Engineering")
  → Returns all active rules with severity
  → Agent plans action accordingly
  → After acting: records reference with status
```

---

## Archiving a Rule

When a rule no longer applies:

```bash
curl -X PATCH http://localhost:8090/api/v1/scopes/scp-XXXX/rules/rul-XXXX/archive \
  -H "Authorization: Bearer kn_xxxxxxxx"
```

Archived rules are no longer returned by compliance checks or the Verifier, but remain in the registry for audit purposes. Archiving generates an event.

---

## Best Practices

- **Distinguish mandatory from advisory**. Not every guideline needs to block CI. Use ADVISORY for preferences and best practices.
- **Version with change reasons**. A version without a `change_reason` is an incomplete audit trail.
- **Link to the decision** that created the rule. *Why* the rule exists matters as much as the rule itself.
- **Archive instead of deleting**. Archiving preserves history. Deletion would break the audit trail.
- **Keep directives actionable**. "Code should be clean" is not enforceable. "All functions must have explicit return types" is.

---

## Related Concepts

- [Decisions](/docs/concepts/decisions) — the choices that create rules
- [Invariants](/docs/concepts/invariants) — absolute constraints (stronger than rules)
- [Overrides](/docs/concepts/overrides) — governed exceptions to rules
