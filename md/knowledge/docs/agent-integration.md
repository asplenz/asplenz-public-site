# Agent Integration

## Overview

Knowledge is designed to be consumed by both humans and AI agents. Agents interact with Knowledge through a tool-based interface that allows them to query constraints, evaluate actions, record decisions, and request approvals.

The integration model is simple: before taking an action, the agent checks whether it is allowed. After completing work, the agent documents what was followed or diverged from.

## Recommended Agent Flow

### 1. Before acting: evaluate

Before making an architectural change, adding a dependency, modifying infrastructure, or changing a process, the agent should:

```
1. List invariants for the relevant scope
2. List rules for the relevant scope
3. Evaluate the intended action against the normative state
```

If the evaluation returns `allowed: true`, the agent proceeds. If not, the agent must either change its approach or request approval.

### 2. When blocked: request approval

If the evaluation returns a conflict with `requires_approval: true`:

```
1. Submit an approval request with:
   - The conflicting entry ID
   - The intended action
   - A justification explaining why the exception is needed
2. Wait for human approval
3. If approved, proceed (an override is auto-created)
4. If rejected, find an alternative approach
```

The agent should not proceed without approval. The approval mechanism exists to keep humans in the loop for high-risk exceptions.

### 3. After acting: document

When the agent opens a PR or completes a task, it should include an Implementation Report in the PR description:

```markdown
## Implementation Report

### Invariants verified
- inv-abc123: All endpoints require auth — followed
- inv-def456: No hardcoded secrets — followed

### Rules applied
- rul-abc123: PR approval required — followed

### Overrides used
- ovr-abc123: Health endpoint auth exception

### Decisions referenced
- dec-abc123: Use FastAPI for backend services
```

This report serves two purposes:

- It proves the agent considered the applicable constraints
- It enables the Verifier to automatically validate compliance in CI

### 4. Record significant decisions

When the agent makes a meaningful technical choice (selecting a library, choosing an architecture pattern, defining a convention), it should record it as a decision:

```
Record a decision with:
  - What was decided
  - Context that led to the decision
  - Reasoning
  - Author (the agent's identifier)
```

This builds the organization's decision history incrementally.

## Best Practices for Agent Authors

### Query before modifying

Always retrieve the normative state before making changes. Do not assume constraints from prior sessions — the normative state may have changed.

### Cite specific IDs

When referencing Knowledge entries in PR descriptions or commit messages, use the full entry ID (e.g., `inv-abc123`). This enables automated verification.

### Respect approval boundaries

If an action requires approval, do not attempt workarounds. The approval mechanism represents an organizational decision about what requires human oversight.

### Handle unavailability gracefully

If Knowledge is unreachable, the agent should:

- Warn the user that compliance cannot be verified
- Proceed with caution or wait, depending on the organization's policy
- Not silently ignore the failure

### Record divergence

If the agent must deviate from a rule (e.g., following an advisory rule is impractical for a specific case), it should record a reference with status `diverged` and provide a reason. This is preferable to silent non-compliance.

## Scope Selection

Agents should select the scope that matches the domain of their work:

- Code changes in a backend service: "Engineering"
- Infrastructure modifications: "Operations"
- Product feature decisions: "Product"

If unsure, the agent should default to the broadest applicable scope or ask the user.

## Tool Summary

Agents interact with Knowledge through the following operations:

| Operation | Purpose |
|-----------|---------|
| **List invariants** | See what must never be violated in a scope |
| **List rules** | See what should be followed (mandatory and advisory) |
| **Evaluate action** | Check if a planned action is allowed |
| **Resolve state** | Get the full normative state with hash for change detection |
| **Record decision** | Capture a new decision with context and reasoning |
| **Create override** | Request a governed exception to a constraint |
| **Request approval** | Ask for human approval when required |
| **Check approval status** | Poll the status of a pending approval |
| **Record reference** | Document that an entry was followed or diverged from |
| **Search** | Find entries by keyword across all types |
