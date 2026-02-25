# Governed AI Agents

## The Problem

Autonomous agents make decisions. Some of those decisions violate organizational constraints that were never communicated to the agent, or that were communicated once and forgotten. Post-hoc review catches violations after the damage is done. There is no mechanism to enforce constraints at decision time, and no structured trail proving the agent considered them.

## How Knowledge Solves It

Knowledge provides a normative layer that agents query before acting. The agent calls `resolve()` with its scope and receives all applicable invariants, rules, and overrides. It then evaluates its intended action against that normative state. If a blocking invariant applies, the agent stops. If an approval-gated rule applies, the agent requests human approval and waits. After acting, the agent records a reference — a structured trace proving it consulted Knowledge.

### Agent Flow

```
Agent receives task
    │
    ▼
resolve(scope="Engineering")
    │
    ▼
Receives:
  - 3 blocking invariants
  - 5 mandatory rules
  - 2 active overrides
    │
    ▼
Agent evaluates intended action
    │
    ├── Blocked by invariant → STOP, report violation
    ├── Requires approval   → request_approval(), WAIT
    └── Allowed             → proceed
    │
    ▼
record_reference(entry_id, context_ref, status="followed")
```

### What the Agent Sees

When an agent calls `resolve()`, it receives a deterministic snapshot:

```json
{
  "scope": { "id": "scp-e1134c6636d7", "name": "Engineering" },
  "normative_state": {
    "blocking_invariants": [
      {
        "invariant_id": "inv-8a3f...",
        "constraint": "No production deployment on Friday after 16:00 UTC"
      }
    ],
    "mandatory_rules": [
      {
        "rule_id": "rul-2b7c...",
        "current_version": {
          "directive": "All API changes must include OpenAPI spec update"
        }
      }
    ],
    "active_overrides": []
  },
  "normative_hash": "sha256:a1b2c3..."
}
```

The `normative_hash` is a content hash of the full normative state. If the hash hasn't changed since the agent's last query, the constraints haven't changed.

### Approval Gates

Some rules and invariants require human approval before they can be overridden. When an agent encounters one:

1. The agent calls `request_approval()` with the trigger entry, the intended action, and a justification.
2. Knowledge creates a pending approval request and notifies the required role.
3. A human with the right role reviews and decides (approve or reject).
4. If approved, Knowledge automatically creates a scoped override and the agent proceeds.
5. The entire chain — request, decision, override — is recorded as events.

No silent escalation. No assumed authority. The agent waits.

## Example: CI Agent Deploying to Production

An agent managing deployments receives a request to deploy `v2.3.1` to production on Friday at 17:30 UTC.

**Step 1**: Agent resolves the Engineering scope.

**Step 2**: Knowledge returns invariant `inv-8a3f...`: "No production deployment on Friday after 16:00 UTC." No active override exists.

**Step 3**: Agent stops the deployment. It records a reference with status `cited` against the invariant and reports:

> Deployment blocked. Invariant inv-8a3f prohibits Friday production deployments after 16:00 UTC. Rescheduling to Monday 09:00 UTC.

**Step 4**: If the deployment is urgent, a human can create an override with justification. The agent re-resolves, sees the override, and proceeds — with a full audit trail.

## What It Produces

Every agent interaction with Knowledge generates:

| Artifact | Purpose |
|----------|---------|
| **Reference** | Proof the agent consulted a specific entry (with status: cited, followed, verified, or diverged) |
| **Event log** | Chronological record of normative changes, approvals, and overrides |
| **Normative hash** | Cryptographic proof of what the agent saw at decision time |
| **Approval chain** | Request, decision, and resulting override linked together |

This is not logging. It is structured, queryable evidence that the agent operated within declared constraints — or documented exactly why it didn't.
