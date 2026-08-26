---
title: Bring your own tools to MCP proxy
description: Register fetchers and map tool arguments so your MCP server's tools work end-to-end through the proxy.
locale: en
kicker: Docs / Guides - Stable
---

The MCP proxy needs two things to enforce a vendor MCP server's tools : a **policy mapping** (which tool calls what Knowledge action) and **fetchers** (how to populate `required_context` fields when Knowledge asks for them).

This guide walks through wiring a hypothetical vendor MCP server that exposes `search_kb`, `create_ticket`, and `close_ticket`.

## Step 1 : audit the vendor's tools

```
knowledge-mcp-proxy inspect \
  --transport stdio \
  --command "npx -y @vendor/some-mcp-server" \
  --tools-list
```

Output :

```json
{
  "tools": [
    { "name": "search_kb",     "inputSchema": { "properties": { "query": { "type": "string" } } } },
    { "name": "create_ticket", "inputSchema": { "properties": { "title": {...}, "priority": {...}, "assignee": {...} } } },
    { "name": "close_ticket",  "inputSchema": { "properties": { "ticket_id": {...} } } }
  ]
}
```

## Step 2 : map each tool to a Knowledge action

`proxy.yaml` :

```yaml
policy_mapping:
  "search_kb":
    action: kb.search
    resource: "{query}"
    bind: []

  "create_ticket":
    action: ticket.create
    resource: "{title}"
    bind: [priority, assignee]

  "close_ticket":
    action: ticket.close
    resource: "{ticket_id}"
    bind: []
```

Guidance :

- **`action`** : hierarchical name. Reuse the same action across tools that mean the same thing (a `close_ticket` in Zendesk and a `close_ticket` in ServiceNow can share `ticket.close` if the policies are the same).
- **`resource`** : identifies what is being acted on. Interpolate from tool args with `{arg_name}`. Match to what the rule scope references.
- **`bind`** : arg names whose values become part of the signed envelope. **Any operation whose bound arg value differs will be refused by the PEP.** Bind the fields your rules discriminate on.

## Step 3 : write the Knowledge rules

In the back-office UI (or via seed file), create rules that cite the actions and scope fields from your mapping :

```yaml
- id: rul-tickets-critical-restricted
  policy: pol-ticketing
  statement: "Only 'senior' support agents can create critical tickets."
  severity: hard_block
  rows:
    - scope: { action: ticket.create }
      condition:
        parameters.priority: { eq: critical }
        caller.seniority: { neq: senior }
```

## Step 4 : register fetchers for required_context

If a rule references a field not present in the tool call (e.g. `caller.seniority` above), Knowledge returns `required_context`. The proxy needs a fetcher.

Create `my_org/fetchers.py` :

```python
def get_caller_seniority(context: dict) -> dict:
    caller_id = context["caller"]["id"]["value"]
    seniority = hr.lookup(caller_id).level
    return {"value": seniority, "source": "hr_system"}

def get_client_verified_flag(context: dict) -> dict:
    kyc_id = context["client"]["kyc_id"]["value"]
    return {"value": kyc.is_verified(kyc_id), "source": "kyc_vendor"}
```

Wire them in `proxy.yaml` :

```yaml
fetchers:
  module: my_org.fetchers
  registry:
    "caller.seniority": get_caller_seniority
    "client.verified_flag": get_client_verified_flag
```

## Step 5 : verify end-to-end

**Happy path** :

```
call: create_ticket(title="Login broken", priority=low, assignee=hum-bob)
proxy: consults Knowledge -> allowed -> forwards to upstream -> ticket created
```

**Refused path (bind mismatch)** :

Vendor tool returns a downstream error trying to elevate `priority` from `low` to `critical` post-facto. PEP refuses with `binding_mismatch` : the signed envelope authorised `priority=low`, not `critical`.

**Progressive context path** :

```
call: create_ticket(title="Server down", priority=critical, assignee=hum-alice)
proxy: /resolve -> required_context: [caller.seniority]
proxy: fetcher get_caller_seniority(ctx) -> {value: "junior", source: "hr_system"}
proxy: /resolve again -> blocked, cited_rules: [rul-tickets-critical-restricted]
client: sees typed MCP error
```

## Common pitfalls

- **Forgetting to bind a discriminating field.** If `priority` is a rule discriminator but not in `bind`, the PEP has no signature commitment on it - an attacker (or a misbehaving upstream) could change it. Always bind fields your rules read.
- **`allow_unmapped: true` (default) hides new tools.** If the vendor adds a new tool in an update, it passes ungoverned. Set to `false` in compliance-critical deployments.
- **Fetchers that block on slow APIs.** Fetchers run in the proxy's request path ; keep them fast or cache aggressively. If a fetch legitimately takes minutes, use a background job + `approval_required`.

## Related

- [Setup](/docs/mcp-proxy/setup) - install + first run.
- [Config reference](/docs/mcp-proxy/config-reference) - every knob.
- [Progressive context](/docs/concepts/progressive-context-resolution) - the loop the fetchers feed.
