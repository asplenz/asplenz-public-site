---
title: MCP proxy - deployment modes
description: stdio, sidecar, shared - when to pick which.
locale: en
kicker: Docs / MCP proxy - Stable
---

The MCP proxy runs in three canonical topologies. Pick the one that matches your isolation, scale, and operational profile.

## Mode 1 : stdio (per-client)

Every MCP client (Claude Desktop, Cursor, plugin) launches its own proxy subprocess. Simplest install ; smallest blast radius.

```
Claude Desktop  ---stdio--->  knowledge-mcp-proxy  ---stdio--->  vendor MCP server
```

**Pros** :
- Zero infrastructure. Config file + local install.
- Per-user identity via env vars.
- Isolated crashes ; one user's proxy failing does not affect others.

**Cons** :
- Cold start per session (proxy launches at client startup).
- No centralised metrics unless each proxy pushes.
- Multiple upstream connections if many users hit the same server.

**Best for** : individual developers, small teams, POCs, per-workstation deployments.

## Mode 2 : sidecar (per-user, long-running)

Proxy runs as a long-running process on the workstation (under whatever supervisor the workstation uses), exposing HTTP or SSE. MCP client connects over a local socket or port.

```
Claude Desktop  ---HTTP--->  knowledge-mcp-proxy (local port)  ---HTTP--->  vendor MCP server
                             (always on)
```

**Pros** :
- No cold start ; JWKS cache warm.
- Centralised logging on the workstation.
- Same identity across MCP client restarts.

**Cons** :
- Needs an install + service management on the workstation.

**Best for** : power users, enterprise workstation fleets with a standardised MCP setup.

## Mode 3 : shared (multi-user gateway)

Proxy runs centrally (VM, container, k8s pod). Every MCP client in the org connects to the same instance ; per-user identity via headers or session.

```
Claude Desktop (user A)  ---HTTPS--->  |
Claude Desktop (user B)  ---HTTPS--->  |  knowledge-mcp-proxy (cluster)  ---HTTPS--->  vendor MCP server
Cursor (user C)          ---HTTPS--->  |  (behind Caddy / nginx / ALB)
```

**Config difference** :

```yaml
on_behalf_of:
  resolver: my_org.auth.resolve_user_from_session   # dynamic per-request
transport:
  protocol: http
  bind: 0.0.0.0:9090
  auth:
    type: session_jwt
    verify_key: ${SESSION_VERIFY_KEY}
```

**Pros** :
- One deployment to update.
- Centralised metrics + tracing.
- Connection pooling to upstream server.
- Easier to enforce a network path (no per-workstation firewall configuration).

**Cons** :
- Blast radius of a bug affects everyone.
- Requires SSO / session integration for `on_behalf_of` identity.
- Latency floor higher than stdio (network hop).

**Best for** : organisations with SSO + IAM ; MCP deployments where every user must traverse the proxy (no way to bypass).

## Choosing under uncertainty

- Starting from zero, want to feel the enforcement -> **stdio**.
- Already have workstation config management -> **sidecar**.
- Enterprise deployment, need audit + centralisation -> **shared**.

You can mix : some users on stdio for exploration, shared gateway for the compliance-critical vendor server.

## Health + observability

Every mode exposes `/health` on the metrics port (default 9091). Prometheus scrape is identical across modes.

For stdio, the metrics port only opens if `observability.metrics_port` is set in `proxy.yaml`. Off by default.

## Failure modes

| Failure | Behaviour |
|---|---|
| Knowledge unreachable | Fails closed by default. Set `on_knowledge_unreachable: allow` if you must degrade to advisory. |
| Signing key rotated, JWKS stale | Force-refreshes once, then fails closed if still unresolvable. |
| Upstream MCP server down | Standard MCP error propagates to the client ; Knowledge is not consulted (no operation to authorise). |
| Fetcher raises | Consultation continues without that field ; `required_context` may loop until `max_rounds` triggers. |

## Related

- [Setup](/docs/mcp-proxy/setup) - install + first run.
- [Config reference](/docs/mcp-proxy/config-reference) - every knob.
- [Bring your own tools](/docs/guides/bring-your-own-tools-to-mcp-proxy) - fetcher registry pattern.
