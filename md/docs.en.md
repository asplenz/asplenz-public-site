---
title: Docs
description: Quickstarts, concepts, API reference and SDK guides for integrating Knowledge into your stack.
locale: en
kicker: Docs
---

Everything you need to consult Knowledge from your stack, wrap a business tool with signed authorization, or wire an MCP host to Knowledge tools.

## Getting started

| Page | Description |
|---|---|
| **[What is Knowledge ?](/docs/what-is-knowledge)** | Two minutes on the mental model and vocabulary. |
| **[Quickstart : create your first policy](/docs/quickstart-first-policy)** | From empty tenant to first `/resolve` returning a real verdict, in about 30 minutes. The author path. |
| **[Quickstart : governed tool in Python](/docs/quickstart-governed-tool)** | Two patterns for signed-verdict enforcement on a Python tool : verify a verdict you receive, or let a decorator self-consult. |
| **[Quickstart : Knowledge as an MCP server](/docs/quickstart-knowledge-mcp)** | Wire the Knowledge MCP server into Claude Desktop / Cursor / any MCP host so the agent can query, check, and request approvals as tool calls. |

## Concepts

Deeper explanations of the core abstractions.

| Page | Description |
|---|---|
| **[Policies, rules and targets](/docs/concepts/policies-rules-targets)** | The three core aggregates. |
| **[Verdicts and decisions](/docs/concepts/verdicts-and-decisions)** | Severity ladder, precedence, Consultation record. |
| **[Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep)** | The JWS envelope, binding checks, spent-verdicts. |
| **[Progressive context resolution](/docs/concepts/progressive-context-resolution)** | The `/resolve` loop and dependency inversion. |
| **[Overrides, approvals, pauses](/docs/concepts/overrides-approvals-pauses)** | The three governed exception mechanisms. |
| **[Four-actor trust model](/docs/concepts/four-actor-trust-model)** | Who signs, who verifies, what each edge guarantees. |

## API reference

| Endpoint | Description |
|---|---|
| **[Authentication](/docs/api-reference/authentication)** | API keys, session cookies, principal binding. |
| **[POST /v1/check](/docs/api-reference/check)** | Deterministic verdict, strict context. |
| **[POST /v1/resolve](/docs/api-reference/resolve)** | Progressive verdict, tolerant context. |
| **[GET /v1/tenants/{slug}/jwks](/docs/api-reference/jwks)** | JWKS for signature verification. |
| **[GET /v1/consultations/{id}](/docs/api-reference/consultations)** | Retrieve a Consultation record. |
| **[/v1/approvals](/docs/api-reference/approvals)** | Create, poll, decide. |

Full OpenAPI spec at `docs/api/openapi-v3.json` in the monorepo. Postman collection : `docs/api/postman/knowledge-v3.postman_collection.json`.

## SDK reference

| Page | Description |
|---|---|
| **[knowledge-runtime (Python)](/docs/sdk-reference/knowledge-runtime-python)** | `@governed_tool`, `verify_verdict`, JWKS cache, guard-rails. |
| **[TypeScript SDK](/docs/sdk-reference/typescript-roadmap)** *[Roadmap]* | Feature parity with Python planned for Q4-2026. |

## MCP server

| Page | Description |
|---|---|
| **[Tools reference](/docs/mcp-server/tools-reference)** | The eight tools the Knowledge MCP server exposes, with parameters and return format. |

## Guides

| Page | Description |
|---|---|
| **[Wrap your own MCP server with enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement)** | The pattern for gating an MCP server's tool calls with Knowledge signed verdicts. Reference example in the monorepo. |
| **[Rotate signing keys](/docs/guides/rotate-signing-keys)** | Scheduled + emergency rotation. |
| **[Multi-tenant setup](/docs/guides/multi-tenant-setup)** | Run multiple tenants on one deployment. |
| **[Migrate from advisory to enforcement](/docs/guides/migrate-from-advisory-to-enforcement)** | The three-stage playbook. |
| **[Emergency response](/docs/guides/emergency-response)** | Kill switch, key rotation, downgrade. |

## Security + compliance

| Page | Description |
|---|---|
| **[Trust model deep dive](/docs/security-compliance/trust-model)** | Four-actor chain, edge-by-edge threats. |
| **[Keys inventory](/docs/security-compliance/keys-inventory)** | All four cryptographic keys, storage, rotation. |
| **[Deployment shapes](/docs/security-compliance/deployment-shapes)** | SaaS, VPC, on-prem trade-offs. |
| **[Compliance posture](/docs/security-compliance/compliance-posture)** | Certifications, residency, retention, threat model. |

---

*Send feedback to [contact@asplenz.com](mailto:contact@asplenz.com).*
