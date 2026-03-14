# Governing AI Agents: Constraints Before Actions

AI agents that write code, deploy services, and make operational decisions need guardrails. Not after the fact — before they act. Here's how a normative layer makes AI agents governable.

---

## The Problem with Post-Hoc Review

Today's AI agent governance looks like this:

1. Agent receives a task
2. Agent acts (writes code, makes API calls, deploys)
3. Human reviews the output
4. Human catches violations (sometimes)
5. Human fixes the damage (if possible)

This is post-hoc review. It works when the stakes are low and the volume is manageable. It fails when:

- The agent makes dozens of changes across multiple PRs
- The violation is subtle (e.g., choosing the wrong database for a workload)
- The constraint exists only in someone's head
- The damage is hard to reverse (deployment, data mutation, external API call)

Post-hoc review asks: "Did the agent do the right thing?" Pre-flight governance asks: "Does the agent know what the right thing is?"

## Pre-Flight Constraint Checking

A normative layer sits between the agent and its actions:

```
Agent receives task
    │
    ▼
Query normative state: "What constraints apply to Engineering?"
    │
    ▼
Evaluate: does my planned action conflict with any constraint?
    │
    ├── Blocked → STOP, report why
    ├── Needs approval → REQUEST, WAIT
    └── Clear → PROCEED
    │
    ▼
Record reference: "I checked constraint X, status: followed"
```

The agent doesn't guess at organizational standards. It reads them from a structured registry that the team maintains. If a constraint changes, the agent sees the change on its next query.

## What a Normative Layer Contains

### Invariants — Hard Limits

Things that must never happen:

- "No production deployment on Friday after 16:00 UTC"
- "No public API endpoint without authentication"
- "No database migration without backup verification"

Invariants are blocking. An agent encountering an invariant conflict stops. No bypass without explicit human approval.

### Rules — Active Directives

Things that should happen:

- "All PRs must be reviewed by at least one team member"
- "Use conventional commits for all commit messages"
- "Update the OpenAPI spec when changing API endpoints"

Rules can be mandatory (must follow) or advisory (should follow). They are versioned — when the team's standards evolve, the rules update.

### Overrides — Governed Exceptions

Sometimes agents need to break a rule. Overrides provide a structured way to do this:

- Justification: why the exception is needed
- Conditions: when it applies
- Expiry: when the exception ends
- Approval: who authorized it

An override is not a workaround. It's proof that the organization acknowledged a constraint and consciously decided to deviate.

## The Audit Trail

Every interaction between an agent and the normative layer produces structured evidence:

| Artifact | What It Proves |
|----------|---------------|
| **Constraint query** | Agent knew the rules at decision time |
| **Compliance check** | Agent evaluated its action against constraints |
| **Approval request** | Agent escalated when blocked |
| **Reference** | Agent followed/cited/diverged with documentation |
| **Normative hash** | What the rules were at that exact moment |

This trail answers the questions that post-hoc review cannot:

- "Did the agent check before acting?" — Yes, reference ref-xxx shows it queried invariant inv-yyy
- "What constraints existed when this was deployed?" — Normative hash sha256:abc... at 2025-01-15T14:30Z
- "Who approved the exception?" — Approval apr-zzz, decided by tech-lead at 2025-01-15T15:00Z

## Why This Matters for the AI Act

The EU AI Act (effective August 2026 for high-risk systems) explicitly requires:

- **Human oversight** (Article 14): mechanisms for human intervention and override
- **Record-keeping** (Article 12): automatic logging of events during operation
- **Risk management** (Article 9): continuous risk identification and mitigation

A normative layer with approval workflows, event logging, and constraint enforcement maps directly to these requirements. It's not compliance theater — it's the technical infrastructure that makes governance verifiable.

## Implementation Is Not Hard

The pattern is simple:

1. **Before any significant action**: query the normative state for the relevant scope
2. **Evaluate**: does the planned action conflict?
3. **If blocked**: stop or request approval
4. **After acting**: record what was followed or diverged from

This adds milliseconds to agent execution and minutes to team setup. In return, you get governance that is structured, machine-readable, and audit-ready — not scattered across wikis and Slack threads.

---

## Learn More

- [How Knowledge implements this →](/product/how-it-works)
- [Connect agents via MCP →](/docs/integrations/claude-mcp)
- [EU AI Act compliance →](/compliance/ai-act)
