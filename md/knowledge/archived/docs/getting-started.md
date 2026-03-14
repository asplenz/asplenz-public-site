# Getting Started

## What is Asplenz Knowledge?

Asplenz Knowledge is a structured decision governance system. It provides a central registry where engineering organizations declare their decisions, constraints, and operational rules — then enforces them across human and AI-driven workflows.

Knowledge answers three questions for every action taken in your codebase:

- **What was decided?** (Decisions)
- **What must never happen?** (Invariants)
- **What should be done now?** (Rules)

## The Problem

Engineering teams accumulate decisions across Slack threads, meeting notes, RFCs, and tribal knowledge. When AI agents generate code or humans review PRs, there is no reliable way to verify whether the proposed changes comply with existing constraints.

Knowledge makes these decisions machine-readable and enforceable.

## Core Concepts

| Concept | Purpose |
|---------|---------|
| **Decision** | A recorded fact — what was chosen and why |
| **Invariant** | An absolute constraint that must never be violated |
| **Rule** | An active directive that should be followed (mandatory or advisory) |
| **Override** | A governed exception to an invariant or rule |

Decisions are historical and immutable. Invariants and rules are active constraints. Overrides allow controlled exceptions with justification and audit trail.

## Quick Start

### 1. Create a scope

A scope is an isolation boundary for your decisions and constraints. Typical scopes: "Engineering", "Security", "Operations".

```
POST /api/v1/scopes
{
  "name": "Engineering",
  "description": "Software engineering decisions and constraints"
}
```

### 2. Declare an invariant

```
POST /api/v1/scopes/{scope_id}/invariants
{
  "constraint": "All API endpoints must require authentication",
  "rationale": "Security baseline — prevents accidental data exposure",
  "author": "security-team"
}
```

### 3. Evaluate an action

```
POST /api/v1/check
{
  "scope_id": "scp-...",
  "intended_action": "Add a public health endpoint without authentication"
}
```

Response:

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

### 4. Interpret the result

- **allowed: true** — proceed
- **allowed: false, requires_approval: true** — request human approval before proceeding
- **allowed: false, requires_approval: false** — change the approach

## Example Workflow

```
1. AI agent receives a task: "Add a public health endpoint"
2. Agent calls Knowledge check() → conflict with auth invariant, requires_approval=true
3. Agent requests approval with justification
4. Human reviews in the UI → approves → override auto-created
5. Agent proceeds with the implementation
6. Agent opens a PR with an Implementation Report citing the invariant and override
7. CI runs the Verifier → PASS (override covers the violation)
```

This workflow applies equally to human developers and autonomous agents.
