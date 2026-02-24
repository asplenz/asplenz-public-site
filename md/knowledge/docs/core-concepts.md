# Core Concepts

## Decisions

A decision is a recorded fact: what was chosen, by whom, and why.

- **Purpose**: Preserve institutional knowledge so it can be discovered and referenced
- **Lifecycle**: Created once, never modified. Decisions are historical records.
- **Mutability**: Immutable

Decisions do not enforce anything. They exist to provide context and traceability.

### Example

```json
{
  "decision": "Use FastAPI for all new Python backend services",
  "context": "Evaluated Flask, Django REST, and FastAPI",
  "reasoning": "FastAPI has native async support, automatic OpenAPI docs, and Pydantic validation",
  "author": "tech-lead",
  "tags": ["architecture", "python"]
}
```

A decision can be recorded by a human or by an AI agent. The `author_type` field distinguishes between `human`, `agent`, and `system` sources.

---

## Invariants

An invariant is an absolute constraint — a condition that must never be violated.

- **Purpose**: Define hard boundaries that protect critical requirements (security, compliance, operational safety)
- **Lifecycle**: Active until explicitly revoked by an administrator
- **Mutability**: Rarely modified. Invariants represent foundational constraints.

When an action conflicts with an active invariant, it is blocked unless a valid override exists.

### Example

```json
{
  "constraint": "All API endpoints must require authentication",
  "rationale": "Security baseline — prevents accidental data exposure",
  "author": "security-team",
  "approval_required": true,
  "approver_role": "admin"
}
```

Setting `approval_required: true` means any exception to this invariant requires explicit human approval before proceeding. The `approver_role` specifies the minimum role authorized to grant that approval.

---

## Rules

A rule is an active directive — a guideline that should be followed during development.

- **Purpose**: Codify operational standards, coding practices, and process requirements
- **Lifecycle**: Active until archived. Rules are versioned — updating a rule creates a new version while preserving the history.
- **Severity**: `mandatory` (violations are blocking) or `advisory` (violations produce warnings)

### Example

```json
{
  "directive": "All PRs must have at least one approval before merge",
  "rationale": "Code review catches bugs and spreads knowledge",
  "author": "tech-lead",
  "severity": "mandatory"
}
```

When a rule is updated, the previous version is preserved. This provides a clear audit trail of how standards evolved over time.

### Mandatory vs Advisory

| Severity | Evaluation behavior |
|----------|-------------------|
| **mandatory** | Treated as blocking — same as an invariant during compliance checks |
| **advisory** | Produces a warning but does not block |

---

## Overrides

An override is a governed exception to an invariant or rule.

- **Purpose**: Allow controlled deviations with justification, approval, and optional expiration
- **Types**: `temporary` (time-bounded) or `permanent`
- **Lifecycle**: Active until revoked, expired, or the target entry is itself revoked/archived

An override does not delete or weaken the constraint. It documents that a specific exception was approved, by whom, under what conditions, and for how long.

### Example

```json
{
  "target_id": "inv-abc123",
  "target_type": "invariant",
  "justification": "Health endpoint must be public for load balancer health checks",
  "approved_by": "security-lead",
  "override_type": "temporary",
  "conditions": "Only for /health endpoint",
  "expires_at": "2025-12-31T23:59:59"
}
```

When an override expires, the original constraint is automatically re-enforced. No manual intervention is required.

---

## Approvals

Some invariants and rules can be configured to require human approval before an exception is granted.

- When an action conflicts with an approval-required entry, the system returns `requires_approval: true`
- The requesting party (human or agent) submits an approval request with a justification
- A human with the required role reviews and approves or rejects
- If approved, an override is automatically created

### Approval flow

```
Action conflicts with invariant (requires_approval=true)
  → Approval request created with justification
  → Human reviews in the UI
  → Approved: override auto-created, action can proceed
  → Rejected: requester must find an alternative
```

Approval requests can have an expiration. Expired requests are treated as rejected.

---

## References

A reference is an append-only usage trace that records when and where a knowledge entry was cited, followed, or diverged from.

- **Purpose**: Build an audit trail of how decisions and constraints are adopted in practice
- **Contexts**: Pull requests, commits, CI checks, deployments, reviews
- **Statuses**:
  - `cited` — the entry was mentioned
  - `followed` — the entry was complied with
  - `verified` — compliance was proven (e.g., by automated check)
  - `diverged` — the entry was not followed (requires a reason)

### Example

```json
{
  "entry_id": "inv-abc123",
  "context_type": "pull_request",
  "context_ref": "github:acme/api/pull_request#42",
  "status": "followed",
  "author": "ci-bot"
}
```

References are never modified or deleted. They provide a complete history of how knowledge is consumed across the organization.
