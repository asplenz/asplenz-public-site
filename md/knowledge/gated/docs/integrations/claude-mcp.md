# Integration: Claude MCP

Knowledge ships with an MCP (Model Context Protocol) server that lets AI agents — Claude, Cursor, and any MCP-compatible tool — interact with the decision registry using natural language.

---

## Setup

### Prerequisites

- Knowledge API running (default: port 8090)
- Database seeded with data
- Valid API key

### Install MCP Dependencies

```bash
pip install mcp httpx
```

### Configure Claude Code

Create `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "knowledge": {
      "command": "python",
      "args": ["path/to/knowledge/src/knowledge-mcp/server.py"],
      "env": {
        "KNOWLEDGE_API_KEY": "kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "KNOWLEDGE_API_URL": "http://localhost:8090"
      }
    }
  }
}
```

### Launch

```bash
claude  # from the directory containing .mcp.json
```

Claude detects the MCP config and loads the Knowledge tools automatically.

---

## Available Tools

### `knowledge_query` — Search

Search across decisions, invariants, and rules.

```
"Search for decisions about authentication"
"Find rules related to deployment"
```

Parameters: `query` (required), `scope` (optional), `entry_type` (optional)

### `knowledge_record` — Record a Decision

```
"Record a decision in Engineering: we chose Playwright for E2E testing"
```

Parameters: `scope`, `decision`, `author` (required), `context`, `reasoning`, `tags` (optional)

### `knowledge_list_invariants` — List Constraints

```
"What invariants does Engineering have?"
```

Parameters: `scope` (required)

### `knowledge_list_rules` — List Directives

```
"What rules apply in Engineering?"
```

Parameters: `scope` (required)

### `knowledge_resolve` — Full Normative State

Get all invariants, rules, and overrides for a scope, plus a normative hash.

```
"What's the full normative state of Engineering?"
```

Parameters: `scope` (required)

### `knowledge_check` — Compliance Check

```
"Can I deploy on Friday evening?"
"Is it okay to skip code review for this hotfix?"
```

Parameters: `scope`, `intended_action` (required)

### `knowledge_create_override` — Create Exception

```
"Create an override for the auth invariant: health endpoint needs to be public"
```

Parameters: `scope`, `target_id`, `justification`, `approved_by` (required), `override_type`, `conditions`, `expires_at` (optional)

### `knowledge_record_reference` — Record Usage Trace

```
"Record that invariant inv-abc123 was followed in PR #42"
```

Parameters: `scope`, `entry_id`, `context_type`, `context_ref`, `status` (required), `reason` (optional, required when diverged)

### `knowledge_request_approval` — Request Human Approval

```
"Request approval to add a public health endpoint"
```

Parameters: `scope`, `trigger_id`, `intended_action`, `justification` (required)

### `knowledge_get_approval_status` — Check Approval Status

```
"What's the status of approval apr-abc123?"
```

Parameters: `approval_id` (required)

---

## Recommended Agent Workflow

### Before Acting

```
1. knowledge_list_invariants(scope) — know the hard limits
2. knowledge_check(scope, intended_action) — test your plan
3. If conflict with requires_approval → knowledge_request_approval()
4. If conflict without approval path → stop and report
5. If no conflict → proceed
```

### After Acting

```
6. knowledge_record_reference(entry_id, context, status="followed")
7. If a significant decision was made → knowledge_record()
```

### Example Session

```
User: "Add a new public health endpoint to the API"

Claude: Let me check Knowledge first.
  → knowledge_check("Engineering", "Add public endpoint without auth")
  → Conflict: inv-8a3f "All endpoints require auth", requires_approval=true

Claude: This conflicts with an invariant. Let me request approval.
  → knowledge_request_approval(trigger="inv-8a3f", action="Add public /health", ...)
  → apr-xyz123 created, waiting for tech-lead

Claude: Approval request created (apr-xyz123). A tech-lead needs to approve
this in the Knowledge dashboard before I can proceed.

[Tech-lead approves in dashboard]

User: "Check the approval status"
Claude: → knowledge_get_approval_status("apr-xyz123")
  → Approved, override ovr-9d1e created

Claude: Approved. I'll proceed with the implementation, following the override.
  → [writes code]
  → knowledge_record_reference(entry="inv-8a3f", context="PR #42", status="followed")
```

---

## Scope Resolution

All tools accept either:
- **Scope name** (case-insensitive): `"Engineering"`, `"engineering"`
- **Scope ID**: `"scp-81108708a334"`

The MCP server resolves names to IDs automatically.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Tools not showing in Claude | Launch Claude from the directory with `.mcp.json` |
| "Scope not found" | Check spelling, or seed the database |
| "Invalid or expired API key" | Update `KNOWLEDGE_API_KEY` in `.mcp.json` |
| Connection refused | Start the API: `uvicorn src.main:app --port 8090` |

---

## Learn More

- [Getting Started →](/docs/getting-started)
- [CI/CD Integration →](/docs/integrations/ci-cd)
- [API Reference →](/docs/integrations/api-reference)
