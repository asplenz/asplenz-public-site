---
title: MCP proxy - config reference
description: Every knob in proxy.yaml.
locale: en
kicker: Docs / MCP proxy - Stable
---

Full reference for the `proxy.yaml` config file used by `knowledge-mcp-proxy`.

## Top-level shape

```yaml
knowledge: { ... }
upstream: { ... }
on_behalf_of: <string>
policy_mapping: { ... }
fetchers: { ... }          # optional
observability: { ... }     # optional
```

## `knowledge`

Connection to the Knowledge tenant.

```yaml
knowledge:
  base_url: https://knowledge.asplenz.com/tnt-acme
  api_key: ${KNOWLEDGE_API_KEY}
  default_verdict_ttl_seconds: 60
  jwks_cache_ttl_seconds: 300
  timeout_seconds: 5
```

- `base_url` (required) - tenant-scoped Knowledge URL.
- `api_key` (required) - proxy's own principal (`ak-live-*`). Do not reuse a user's key.
- `default_verdict_ttl_seconds` (default 60) - applied when the upstream call does not override.
- `jwks_cache_ttl_seconds` (default 300) - how long to cache the tenant's public keys.
- `timeout_seconds` (default 5) - per-request cap on Knowledge calls.

## `upstream`

The MCP server the proxy fronts.

### stdio

```yaml
upstream:
  transport: stdio
  command: ["npx", "-y", "@vendor/some-mcp-server"]
  env:
    VENDOR_TOKEN: ${VENDOR_TOKEN}
  restart_on_exit: true
```

### HTTP

```yaml
upstream:
  transport: http
  url: https://mcp.internal/some-server
  headers:
    Authorization: Bearer ${VENDOR_TOKEN}
```

### SSE

```yaml
upstream:
  transport: sse
  url: https://mcp.internal/some-server/sse
  headers:
    Authorization: Bearer ${VENDOR_TOKEN}
```

## `on_behalf_of`

The human principal on whose behalf every proxy call runs. Static string or env-var substitution.

```yaml
on_behalf_of: ${USER_ID}
```

For multi-user proxy deployments, use a dynamic resolver (see `advanced` below).

## `policy_mapping`

Maps MCP tool names to Knowledge `(action, resource, parameters)`.

```yaml
policy_mapping:
  "search_kb":
    action: kb.search
    resource: "{query}"

  "create_ticket":
    action: ticket.create
    resource: "{title}"
    bind: [priority, assignee]

  "delete_ticket":
    action: ticket.delete
    resource: "{ticket_id}"
    bind: []
    require_approval_if:
      priority: critical
```

Per-tool fields :

- `action` (required) - the Knowledge action name.
- `resource` (required) - template string over the tool's arguments. `{arg_name}` interpolates.
- `bind` (default `[]`) - arg names whose values become part of the signed envelope bindings. The PEP will reject downstream operations where these fields differ.
- `require_approval_if` (optional) - short-circuit into approval workflow when a condition matches (advisory ; the real gate is the Knowledge rule).

Tools not listed pass through unmodified. To fail closed, add `allow_unmapped: false` at the top level.

## `fetchers`

Registered Python callables that populate `required_context` fields during the `/resolve` loop.

```yaml
fetchers:
  module: my_org.fetchers
  registry:
    "client.classification": get_classification
    "client.knowledge_experience_level": get_ke_level
```

The proxy imports `my_org.fetchers` and calls each registered function with the current context ; the return value becomes the field's value. See [Bring your own tools](/docs/guides/bring-your-own-tools-to-mcp-proxy).

## `observability`

```yaml
observability:
  log_level: info
  metrics_port: 9091            # Prometheus exposition
  trace_exporter: otlp
  trace_endpoint: http://otel:4317
```

Metrics exposed :

- `mcp_proxy_calls_total{action, verdict}` counter.
- `mcp_proxy_call_latency_seconds{action}` histogram.
- `mcp_proxy_upstream_latency_seconds{tool}` histogram.
- `mcp_proxy_jwks_refreshes_total` counter.

## Advanced

**Dynamic on_behalf_of** :

```yaml
on_behalf_of:
  resolver: my_org.auth.resolve_user_from_session
```

**Fail-closed for unmapped tools** :

```yaml
allow_unmapped: false
```

Any tool not in `policy_mapping` is refused with `policy_mapping_missing`. Use for compliance-critical deployments.

**Spent-verdict store** :

```yaml
spent_store:
  backend: redis
  url: redis://localhost:6379/0
  ttl_seconds: 120
```

Rejects verdict replays within the TTL window ; use for exactly-once tools.

## Related

- [Setup](/docs/mcp-proxy/setup) - install + first run.
- [Deployment modes](/docs/mcp-proxy/deployment-modes) - stdio vs sidecar vs shared.
- [Bring your own tools](/docs/guides/bring-your-own-tools-to-mcp-proxy) - fetcher pattern.
