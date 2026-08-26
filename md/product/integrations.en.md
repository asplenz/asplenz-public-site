---
title: Integrations
description: How Knowledge plugs into agent stacks, MCP servers, Python backends and the identity/observability layers around them.
locale: en
kicker: Product - Integrations
---

Knowledge integrates through three surfaces : a **REST API** (the source of truth), an **MCP tool + proxy** for agent stacks that speak Model Context Protocol, and a **Python SDK** for backends that expose tools to agents directly.

## MCP - native support

**MCP tool** [Stable] : `knowledge-mcp` server exposes Knowledge's `/check`, `/resolve`, `/approvals` as native MCP tools. Any MCP host (Claude Desktop, Cursor, IDE plugins, Anthropic API MCP servers array) can consult Knowledge from a running agent by calling the tools. Runs stdio or streamable-http.

**MCP proxy** [Stable] : `asplenz-mcp-proxy` sits between an MCP host and an existing customer MCP server. Reads a config declaring which tools are governed. On each `tools/call`, the proxy runs the PEP flow (resolve → verify signed_verdict → forward) transparently. The customer's MCP server, the tool implementations and the host client all stay unchanged.

**Adoption story** : the MCP proxy is the smoothest onboarding path for teams already running MCP - drop-in insertion, no code change on tools, enforcement added by proxy insertion. See [Enforcement](/product/enforcement) §Three adoption paths and [MCP proxy setup](/docs/mcp-proxy/setup).

## Python SDK - knowledge-runtime

[Stable] Shared Python module for backends that expose tools to agents.

**Primitives** :
- `verify_verdict(token, jwks_url, expected_bindings) -> claims` : verifies a JWS envelope + bindings against Knowledge's JWKS
- `@governed_tool(action, resource, bind)` decorator : wraps a Python callable so calls go through `/resolve` + verify + execute transparently
- `JwksCache` : per-URL cache with TTL + auto-refresh on `kid` miss
- `lint_bindings(fn)` : import-time sanity check on decorator declarations
- `verify_binding_completeness(fn, sample, variations)` : test helper that proves bound args change the signed envelope and unbound args do not

**Installation** :
```
pip install -e ../knowledge-runtime      # editable, from monorepo
```

PyPI publication is a follow-up when a client outside the monorepo needs it.

**Framework compatibility** :
- **Any Python callable-based tool framework** (LangChain, LlamaIndex, custom Python agents) : the decorator wraps a Python function, preserves `__wrapped__` so tool-schema generators see the intended signature. Compatible structurally, not tested per-framework.
- **OpenAI Assistants API / function-calling** : structurally possible via an adapter that exposes the tool as JSON schema. Not shipped ; on roadmap based on demand.
- **TypeScript backends** : the SDK is Python only today. `@asplenz/knowledge-runtime` on npm is on the roadmap for Q4-2026.

## REST API - the source of truth

Every integration path ultimately calls this. Endpoints :

| Endpoint | Purpose |
|---|---|
| `POST /knowledge/v1/check` | Deterministic verdict, strict context (caller sends everything) |
| `POST /knowledge/v1/resolve` | Progressive verdict, tolerant context (Knowledge tells caller what is still needed) |
| `GET /knowledge/v1/tenants/{slug}/jwks` | Public JWKS for signed_verdict verification |
| `GET /knowledge/v1/normative-hash` | Current tenant normative hash (for strict-mode verification) |
| `GET /knowledge/v1/.well-known/webhook-key` | Public key for webhook signature verification |
| `POST /knowledge/v1/namespaces/{ns}/approvals` | Create an approval request |
| `POST /knowledge/v1/approvals/{id}/decide` | Human decides an approval request |
| `GET /knowledge/v1/consultations/{id}` | Retrieve a Consultation record for audit |

Authenticated with an API key (`X-API-Key` header). Full reference at [API reference](/docs/api-reference/authentication). OpenAPI spec at `/api/openapi-v3.json`.

## Identity, SSO, SCIM

**OIDC** [Stable] : back-office UI supports OIDC login. Configurable per deployment at onboarding.

**SCIM** [Stable] : SCIM 2.0 endpoints for user + group provisioning. Configurable per deployment.

**Identity binding** [Stable core, admin surface in progress] : Knowledge tracks the mapping *"SSO email X in tenant Y = principal Z"* to unify identities across auth mechanisms. The `PrincipalIdentityBinding` model ships auto-linking on email match. Admin CRUD endpoints + knowledge-ui surface are the remaining Slice C+D of the identity-unification workstream.

## Observability + logs

**Structured logs** : all services emit structlog JSON by default. `LOG_FORMAT=text` for local dev.

**Correlation IDs** : `X-Request-Id` propagates across knowledge-api / knowledge-ai / knowledge-slack / knowledge-mcp. Every log line carries it.

**Events table** : every mutation of a governed entity writes an `Event` row. Query for audit or ship to a SIEM via the events API.

**FinOps widgets** [Stable] : per-tenant LLM cost breakdown (tokens, cache hit ratio, per-model spend) via the standalone `asplenz-finops` service on port 8092. Widget dashboard shipped as a React app served at `/dashboard/`.

## Deployment shapes

- **SaaS** (Asplenz-hosted) : fastest to start. Design-partner tier available today ; production certification (SOC 2, ISO 27001) starts with the design-partner cohort.
- **Private cloud / VPC** : deployed in your cloud account. You control network placement, backup, residency.
- **On-premise** : deployed on infrastructure you operate. No external runtime dependency beyond a standard Postgres and (when the reasoning layer is used) an LLM provider you configure.

## What is not shipped yet (roadmap)

- TypeScript SDK
- OpenAI function-calling adapter
- Field-fetcher registry (`GET /v1/field-fetchers/{tenant}` for the agent to auto-discover how to fetch missing fields ; see [Progressive context](/product/progressive-context))
- Java SDK (opt-in based on demand)

Everything shipped carries a maturity badge in [`docs/`](/docs) : `[Stable] [Beta] [Experimental] [Roadmap]`.

## Related

| Read next | Why |
|---|---|
| [Enforcement](/product/enforcement) | The signed envelope + PEP model that MCP proxy + SDK implement |
| [Docs quickstart](/docs) | 5-minute hands-on with the decorator or the MCP proxy |
| [Security](/security) | Trust model, keys inventory, deployment topologies |
