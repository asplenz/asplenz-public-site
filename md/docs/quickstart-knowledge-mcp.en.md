---
title: Quickstart - Knowledge as an MCP server
description: Wire the Knowledge MCP server into your agent's MCP host so the agent can query policies, ask for a verdict, and request approvals as tool calls.
locale: en
kicker: Docs - Getting started
---

Knowledge ships an MCP server that exposes its main operations as tools an agent's LLM can call directly. Wire it into Claude Desktop, Cursor, or any MCP host, and the agent can consult Knowledge from inside its reasoning loop instead of your code driving REST calls.

## What the agent gets

Eight tools appear in the agent's tool list once the server is wired :

| Tool | Purpose |
|---|---|
| `knowledge_query` | Search rules by free text. |
| `knowledge_check` | Verdict on an intended action given a scope + metrics. |
| `knowledge_resolve` | Two-stage verdict : missing facts are surfaced as `required_context` so the agent can acquire them and re-invoke. |
| `knowledge_request_approval` | Submit a human approval request for a blocked action. |
| `knowledge_get_approval_status` | Poll an approval. |
| `knowledge_create_rule` | Author a rule under a Policy (write access required). |
| `knowledge_list_rules` | Enumerate rules of a Policy. |
| `knowledge_create_override` | Grant a time-bounded exception on one or more rules. |

Full parameter reference : [Knowledge MCP tools reference](/docs/mcp-server/tools-reference).

## Prerequisites

- A running Knowledge deployment.
- An API key for the tenant the agent should act against.
- An MCP host (Claude Desktop, Cursor, Claude Code, or any client that can spawn an MCP subprocess or connect to a remote MCP endpoint).

## Two transports

Pick one :

- **Local (stdio)** - the MCP host spawns the Knowledge MCP server as a subprocess. Simplest ; fits Claude Desktop / Cursor / Claude Code on a developer machine.
- **Remote (streamable-http)** - the MCP server runs as an HTTP endpoint the host connects to. Fits shared deployments and hosted agents (claude.ai custom connectors, Anthropic API MCP servers array).

## Local transport - wire into Claude Desktop

Add an entry to Claude Desktop's config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS ; `%APPDATA%\Claude\claude_desktop_config.json` on Windows) :

```json
{
  "mcpServers": {
    "knowledge": {
      "command": "python",
      "args": ["-m", "knowledge_mcp.server"],
      "env": {
        "KNOWLEDGE_API_URL": "https://knowledge.your-deployment.com",
        "KNOWLEDGE_API_KEY": "ak-...",
        "MCP_TRANSPORT": "stdio"
      }
    }
  }
}
```

Restart Claude Desktop. The eight tools appear in the tools list under `knowledge`.

## Remote transport - deploy as an HTTP endpoint

Run the server with `MCP_TRANSPORT=streamable-http` and a chosen `MCP_ACCESS_TOKEN`. It listens on `MCP_PORT` (default 8005) at `/mcp`. Every request must carry `Authorization: Bearer <MCP_ACCESS_TOKEN>`.

Two auth paths are supported on the same endpoint :

- **Static bearer** - pre-shared token via `MCP_ACCESS_TOKEN`. Simple clients (Anthropic API MCP servers array, smoke-test scripts) pass this directly.
- **OAuth 2.1** - full DCR + PKCE + authorization-code flow for clients that require it (claude.ai custom connectors). Discovery metadata is served at `/.well-known/oauth-authorization-server`.

Point the MCP host at `https://knowledge-mcp.your-deployment.com/mcp` with the chosen credential.

## First call - `knowledge_query`

Ask the agent : *"Search Knowledge for anything about refunds."*

The agent invokes `knowledge_query(query="refund")`. The MCP server calls your Knowledge deployment's search endpoint and returns matching rules with their author, date, and snippet. The agent surfaces the list to you in its reply.

## Verdict on an intended action - `knowledge_check`

Ask the agent : *"Am I allowed to refund transaction TX-456 for 250 EUR ? Client is retail, jurisdiction SG."*

The agent invokes :

```
knowledge_check(
  intended_action="Refund TX-456 for 250 EUR",
  scope={"jurisdiction": "SG", "client_classification": "retail"},
  metrics={"amount_eur": 250}
)
```

Response :

```
Verdict: REQUIRE_APPROVAL
Consultation: cns-abc123

Cited rules (1, winning severity):
  [require_approval] rul-refund-medium
    Refunds between 100 and 500 EUR require compliance sign-off.
    Rationale: Standard mid-range refund control.
```

The agent now knows the action is not auto-allowed and can propose the next step (request approval) instead of executing blindly.

## Progressive context - `knowledge_resolve`

Some verdicts depend on facts the agent does not yet have. `knowledge_resolve` returns `INCOMPLETE` with a typed list of missing fields, so the agent can acquire them (lookup, question, branch) and re-invoke :

```
knowledge_resolve(
  action_type="refund_request",
  context={"amount_eur": 250}
)
```

Possible response :

```
Operation status: INCOMPLETE (2 field(s) needed)

- customer.tier  [enum]
    reason: required by rul-refund-vip
    allowed_values: ["standard", "vip"]

- authorization.dealer_signoff  [boolean]
    reason: required by rul-refund-medium
    source_requirement: verified

Acquire these fields (system lookup, user question, branching enum)
and re-invoke knowledge_resolve with the enriched context.
```

The agent fetches those facts, calls `knowledge_resolve` again with the enriched context, and gets the `COMPLETE` verdict once every gate has evaluable inputs. Full model : [Progressive context resolution](/docs/concepts/progressive-context-resolution).

## Approvals - two-tool workflow

If `knowledge_check` returns `require_approval`, the agent submits :

```
knowledge_request_approval(
  intended_action="Refund TX-456 for 250 EUR, client requested duplicate",
  justification="Client provided invoice showing duplicate charge on statement.",
  context={"scope": {"jurisdiction": "SG", ...}, "metrics": {"amount_eur": 250}}
)
```

The response carries an `approval_request_id`. The compliance officer sees the request in the back-office and decides. The agent polls with `knowledge_get_approval_status(id)` until the status flips.

## Next

- **[Knowledge MCP tools reference](/docs/mcp-server/tools-reference)** - every tool, every parameter, return format.
- **[Wrap your own MCP server with enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement)** - when your agent has its own tools you want gated by Knowledge, not tools Knowledge itself exposes.
- **[Verdicts and decisions](/docs/concepts/verdicts-and-decisions)** - the severity ladder and how the winning rule is chosen.
