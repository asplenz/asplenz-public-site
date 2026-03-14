# AI Agent Integration

## Give your agents the context they're missing.

When an AI agent writes code, reviews a PR, or makes a deployment decision, it acts without knowledge of your team's architectural choices, compliance requirements, or operational rules. It does its best — and you review after the fact, hoping to catch violations.

Knowledge closes that gap. Agents query your decision registry before acting, not after.

---

## The Problem with Post-Hoc Review

Today's workflow:

```
Agent receives task
    |
    v
Agent writes code (no context about your rules)
    |
    v
Human reviews output
    |
    v
Human catches violation (maybe)
    |
    v
Agent rewrites (wasted cycle)
```

The agent doesn't know that your team decided to use PostgreSQL for transactional data, that all API endpoints must require authentication, or that deployments to production require a staging step. It discovers these constraints when you reject its work.

---

## Pre-Flight Constraint Checking

With Knowledge, the workflow becomes:

```
Agent receives task
    |
    v
Query Knowledge: "What constraints apply to this scope?"
    |
    +-- Blocked by invariant --> STOP, report conflict
    +-- Requires approval --> REQUEST and WAIT
    +-- Allowed --> PROCEED with full context
    |
    v
Agent acts with knowledge of your rules
    |
    v
Record reference: "I followed constraint X in PR #42"
```

Every action is informed. Every constraint check is recorded. Every compliance question has a structured answer.

---

## MCP Integration

Knowledge exposes 10 tools through the Model Context Protocol (MCP), compatible with Claude Code, Cursor, and any MCP client.

### Before acting

| Tool | Purpose |
|------|---------|
| `knowledge_list_invariants` | Get all blocking constraints for a scope |
| `knowledge_list_rules` | Get all active directives (mandatory + advisory) |
| `knowledge_check` | Test an intended action against the normative state |
| `knowledge_request_approval` | Request human approval for gated actions |
| `knowledge_get_approval_status` | Check if approval was granted |

### After acting

| Tool | Purpose |
|------|---------|
| `knowledge_record_reference` | Record that a constraint was followed or diverged from |
| `knowledge_record` | Capture a new decision with context and reasoning |

### Anytime

| Tool | Purpose |
|------|---------|
| `knowledge_query` | Search the registry by keywords, type, scope |
| `knowledge_resolve` | Get the full normative state for a scope |

---

## Example: Agent Workflow

```
Agent: I need to add a new API endpoint for payment processing.

1. knowledge_list_invariants(scope="Engineering")
   --> "All API endpoints must require authentication"
   --> "No eventual consistency for financial transactions"

2. knowledge_check(scope="Engineering", action="Add REST endpoint for payment processing")
   --> No conflicts. Proceed.

3. Agent writes the endpoint with authentication middleware and PostgreSQL.

4. knowledge_record_reference(
     entry_id="inv-a1b2c3",
     context_type="pull_request",
     context_ref="PR #142",
     compliance="followed"
   )

5. knowledge_record(
     scope="Engineering",
     decision="Added /api/payments endpoint using REST with bearer auth",
     context="Payment team requested payment initiation API",
     reasoning="Followed existing REST convention per Engineering rules"
   )
```

The agent acted with full context. The compliance trail is automatic.

---

## What Agents Can Enforce

### Invariants — Hard Stops
Absolute constraints that block violating actions. If an agent's intended action conflicts with an invariant, the compliance check returns a conflict and the agent stops.

### Rules — Active Guidance
Directives that shape behavior. Mandatory rules must be followed; advisory rules should be considered. Agents receive both and can explain which rules influenced their decisions.

### Approval Gates
Some invariants require human approval before proceeding. The agent requests approval, waits for a human decision, and only proceeds when approved. The entire exchange is recorded.

---

## Audit Trail

Every agent interaction with Knowledge generates structured data:

| Event | What's Recorded |
|-------|----------------|
| Constraint query | Scope, timestamp, entries returned |
| Compliance check | Action, conflicts, result |
| Approval request | Entry, justification, status |
| Reference | Entry cited, context (PR, commit, deploy), compliance status |
| Decision recorded | Full decision with context and reasoning |

When an auditor asks "what constraints governed this AI-generated code?", the answer is a database query.

---

## Setup

### 1. Configure MCP

Add to your `.mcp.json`:

```json
{
  "mcpServers": {
    "knowledge": {
      "command": "python",
      "args": ["-m", "src.knowledge-mcp.server"],
      "env": {
        "KNOWLEDGE_API_URL": "http://localhost:8090",
        "KNOWLEDGE_API_KEY": "kn_..."
      }
    }
  }
}
```

### 2. Launch your agent

The MCP tools are automatically available. The agent discovers constraints on its own — no prompt engineering required.

### 3. Monitor in the dashboard

Every query, check, approval, and reference appears in the event timeline. Review agent behavior in real time or audit historically.

---

## Compatible Agents

Knowledge works with any MCP-compatible client:

- **Claude Code** — full MCP support, recommended workflow
- **Cursor** — MCP integration for IDE-based agents
- **Custom agents** — any client implementing the MCP protocol

The same API that agents use is available via REST for custom integrations, CI pipelines, and scripts.

---

[MCP Setup Guide](/docs/integrations/claude-mcp) · [API Reference](/docs/integrations/api-reference) · [Getting Started](/docs/getting-started)
