---
title: MCP proxy - setup
description: Insert Asplenz's MCP proxy in front of any MCP server. Zero client code change ; enforcement kicks in immediately.
locale: en
kicker: Docs / MCP proxy - Stable
---

The Asplenz MCP proxy is a transparent Policy Enforcement Point for MCP (Model Context Protocol) tool calls. It sits between an MCP client (Claude Desktop, Cursor, custom MCP client) and an upstream MCP server, consulting Knowledge before forwarding tool invocations.

## What it does

- **Transparent proxy** : forwards `tools/list`, `resources/*`, `prompts/*` unchanged.
- **Enforces `tools/call`** : consults Knowledge, verifies the signed verdict, and only forwards if the operation is authorised.
- **Adds progressive context** : if Knowledge returns `required_context`, the proxy runs registered fetchers and re-consults before either forwarding or refusing.
- **Emits audit signals** : every intercepted call writes a Consultation and (on refusal) surfaces a typed error to the client.

## Install

```bash
pip install knowledge-mcp-proxy
```

Runs as a stdio, HTTP, or SSE MCP transport. Requires Python 3.11+.

## Minimal config

`proxy.yaml` :

```yaml
knowledge:
  base_url: https://knowledge.asplenz.com/tnt-acme
  api_key: ${KNOWLEDGE_API_KEY}

upstream:
  transport: stdio
  command: ["npx", "-y", "@vendor/some-mcp-server"]

on_behalf_of: ${USER_ID}

policy_mapping:
  # Which MCP tool names to intercept, and how to map arguments to
  # Knowledge (action, resource, parameters).
  "search_kb":
    action: kb.search
    resource: "{query}"
  "create_ticket":
    action: ticket.create
    resource: "{title}"
    bind: [priority, assignee]
```

## Run

```bash
knowledge-mcp-proxy --config proxy.yaml
```

The proxy exposes stdio by default. Point your MCP client at it as though it were the upstream server ; the client sees the same tools.

## Claude Desktop wiring

`claude_desktop_config.json` :

```json
{
  "mcpServers": {
    "governed-vendor": {
      "command": "knowledge-mcp-proxy",
      "args": ["--config", "/etc/knowledge/proxy.yaml"],
      "env": {
        "KNOWLEDGE_API_KEY": "ak-live-...",
        "USER_ID": "hum-alice"
      }
    }
  }
}
```

Restart Claude Desktop. The proxy now enforces every call to the upstream server.

## Cursor / other MCP clients

Any client that speaks MCP stdio can use the proxy the same way. The proxy is a drop-in for the upstream server ; the client never learns Knowledge exists (it only sees typed refusals).

## Verify enforcement fires

Send a call that should be blocked. Example : `create_ticket` with `priority=critical` when the current user is not authorised for critical tickets.

Client sees a typed MCP error :

```json
{
  "code": -32001,
  "message": "policy_blocked",
  "data": {
    "consultation_id": "cns-abc",
    "cited_rules": ["rul-critical-tickets-restricted"]
  }
}
```

If the request would have hit the vendor upstream, the proxy never forwarded it. See [Quickstart : MCP proxy](/docs/quickstart-mcp-proxy) for a 5-minute demo.

## Related

- [Config reference](/docs/mcp-proxy/config-reference) - every knob in proxy.yaml.
- [Deployment modes](/docs/mcp-proxy/deployment-modes) - stdio vs sidecar vs shared.
- [Bring your own tools](/docs/guides/bring-your-own-tools-to-mcp-proxy) - fetcher registry + policy mapping.
