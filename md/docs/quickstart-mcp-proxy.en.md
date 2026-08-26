---
title: Quickstart - MCP proxy in 5 minutes
description: Insert the Asplenz MCP proxy in front of an existing MCP server. Zero code change on your tools. Enforcement added by proxy insertion.
locale: en
kicker: Docs - Getting started
---

Five minutes. Ends with a Claude Desktop (or Cursor, or any MCP host) call refused by the proxy because the signed verdict does not match.

## Prerequisites

- A running Knowledge deployment (design-partner tier) with signed verdicts enabled.
- An agent API key for the tenant. Passed as `AGENT_API_KEY` env var.
- Python 3.11+ available.
- (Optional but recommended) An MCP host like Claude Desktop or Cursor to test end-to-end.

## Install

```bash
pip install -e path/to/knowledge-mcp-proxy       # from monorepo
pip install -e path/to/knowledge-runtime         # the SDK it depends on
```

## Write the proxy config

Create `customer-tools.yaml` :

```yaml
knowledge:
  url: https://knowledge.your-deployment.com
  tenant_slug: acme-bank
  api_key_env: AGENT_API_KEY

tools:
  refund_customer:
    governed:
      action: refund.execute
      resource: tx
      bind: [amount]
    description: "Refund a customer transaction. Governed by Knowledge policy."
    schema:
      tx: {type: string, required: true}
      amount: {type: integer, required: true}
      reason: {type: string, required: false}

  cancel_order:
    governed:
      action: order.cancel
      resource: order_id
      bind: []
    description: "Cancel an open order. Governed by Knowledge policy."
    schema:
      order_id: {type: string, required: true}

  search_customer:
    # No `governed` block : proxy passes calls through directly.
    description: "Look up a customer by email. Read-only, non-governed."
    schema:
      email: {type: string, required: true}
```

Two governed tools + one pass-through (to show non-governed tools work transparently).

## Start the proxy

```bash
export AGENT_API_KEY=<your-agent-api-key>
python -m mcp_proxy.server --config customer-tools.yaml
```

The proxy speaks MCP over stdio (default) or streamable-http (via `MCP_TRANSPORT=streamable-http`).

## Wire an MCP host

Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS) :

```json
{
  "mcpServers": {
    "asplenz-governed": {
      "command": "python",
      "args": ["-m", "mcp_proxy.server", "--config", "/absolute/path/customer-tools.yaml"],
      "env": {"AGENT_API_KEY": "<your-agent-api-key>"}
    }
  }
}
```

Restart Claude Desktop. The three tools (`refund_customer`, `cancel_order`, `search_customer`) appear in the tools list.

## Try the happy path

Ask Claude Desktop : *"Refund transaction TX-456 for 40 euros"*. The agent calls `refund_customer(tx="TX-456", amount=40)`. The proxy :

1. Consults `/knowledge/v1/resolve` with the tool's declared action + bindings.
2. Gets back a signed_verdict.
3. Verifies signature against the tenant JWKS.
4. Verifies bindings match the incoming args.
5. Executes the underlying tool handler (fictional in this reference implementation).
6. Returns the result to Claude Desktop.

## Try the enforcement refusal

Ask Claude Desktop : *"Refund transaction TX-456 for FOUR HUNDRED THOUSAND euros"*. If your tenant policy has an amount threshold (the reference `wealth` seed does), Knowledge returns `outcome=blocked` or `outcome=approval_required`. The proxy returns an MCP tool error with the typed reason (`outcome_not_allowed`). Claude Desktop surfaces the error to the user.

The agent cannot bypass because :

1. The tool implementation is not reachable via any other path (the proxy is the only exposed MCP endpoint for these tools).
2. Even if the agent knew how to construct a signed verdict for amount=40 and then call the tool with amount=400000, the wrapper compares bindings and refuses with `binding_mismatch`.

## Enforcement decisions the proxy can return

| Code | When |
|---|---|
| `unknown_tool` | Host called a tool not in the config. |
| `knowledge_unreachable` | HTTP error reaching /resolve. |
| `knowledge_error` | Non-200 from /resolve. |
| `unsigned_verdict` | Knowledge returned a verdict without signed_verdict (advisory-only deployment). Proxy refuses because it cannot enforce. |
| `bad_signature` | JWS signature does not verify against JWKS. |
| `expired` | Signed verdict's expires_at is in the past. |
| `outcome_not_allowed` | Decision was `blocked`, `approval_required`, or `observe`. |
| `binding_mismatch` | Declared binding (`action`, `resource`, `parameters.*`) does not match the arguments the host sent. |
| `unknown_kid` | Token's kid not found in JWKS even after a forced refetch. |

## Non-governed pass-through

The `search_customer` tool in the config has no `governed` block. Calls to it pass through the proxy directly to the handler with no enforcement. Useful for informative tools that do not require an authorization decision.

## What is NOT shipped yet

- **Mode B - forward to a running upstream MCP server** : the current proxy implements tools directly (Mode A). Forwarding to a customer MCP server transparently is a follow-up.
- **Multi-tenant per proxy process** : one proxy = one tenant today.
- **Real replay protection** : the proxy does not maintain a spent-verdicts store ; short TTL (default 60s) is the current protection.

Full reference : [MCP proxy setup](/docs/mcp-proxy/setup) + [config reference](/docs/mcp-proxy/config-reference) + [deployment modes](/docs/mcp-proxy/deployment-modes).

## Next

- **[Enforcement](/product/enforcement)** - the full model, deployment paths, threat model.
- **[Integrations](/product/integrations)** - other integration surfaces (Python SDK, REST API, JWKS).
