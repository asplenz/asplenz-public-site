---
title: Docs
description: Quickstarts, concepts, API reference and SDK guides for integrating Knowledge into your stack.
locale: en
kicker: Docs
---

Everything you need to consult Knowledge from your stack, wrap a business tool with signed authorization, or spin up an MCP proxy. Every page carries a maturity badge : `[Stable]` `[Beta]` `[Experimental]` `[Roadmap]`.

## Getting started

- **[What is Knowledge ?](/docs/what-is-knowledge)** [Stable] - two minutes on the mental model and vocabulary.
- **[Quickstart : governed tool in Python](/docs/quickstart-governed-tool)** [Stable] - five minutes hands-on with the `@governed_tool` decorator, from install to first signed verdict.
- **[Quickstart : MCP proxy in 5 minutes](/docs/quickstart-mcp-proxy)** [Stable] - five minutes to insert the proxy in front of an existing MCP server and see enforcement fire on a tampered call.

## Concepts

Deeper explanations of the core abstractions. **Coming soon** - for now, see the specs in the monorepo at `docs/specs/` :

- Policies, rules and targets - `docs/specs/knowledge-impl-spec-v5.md`
- Verdicts and decisions - `docs/specs/knowledge-impl-spec-v5.md` §7
- Progressive context resolution - `docs/specs/knowledge-resolve-spec-v1.md`
- Signed verdicts and PEP - `docs/specs/signed-verdict-v1.md`
- Overrides, approvals, pauses - `docs/specs/action-override-feature.md`
- Four-actor trust model - `docs/specs/signed-verdict-v1.md` §17

## API reference

**Coming soon** - see the OpenAPI spec at `docs/api/openapi-v3.json` for the full endpoint list. Postman collection : `docs/api/postman/knowledge-v3.postman_collection.json`.

Key endpoints :
- `POST /knowledge/v1/check` - deterministic verdict, strict context
- `POST /knowledge/v1/resolve` - progressive verdict, tolerant context
- `GET /knowledge/v1/tenants/{slug}/jwks` - JWKS for signature verification
- `GET /knowledge/v1/consultations/{id}` - retrieve a Consultation record
- `POST /knowledge/v1/namespaces/{ns}/approvals` - create an approval request

## SDK reference

- `knowledge-runtime` (Python) [Stable] - `@governed_tool` decorator, `verify_verdict` primitive, JWKS cache, guard-rails. Detailed reference in `src/knowledge-runtime/README.md`.
- TypeScript SDK [Roadmap Q4-2026] - feature parity with Python.

## MCP proxy

- Setup + config - see `docs/engineering/mcp-proxy-guide.html`
- Deployment modes (direct, upstream proxy)
- Wiring with Claude Desktop / Cursor

## Guides

**Coming soon** :
- Rotate signing keys
- Multi-tenant setup
- Bring your own tools to MCP proxy
- Migrate from advisory mode to enforcement
- Emergency response (rule kill switch)

## Security + compliance

- Trust model deep dive - `docs/specs/signed-verdict-v1.md` §17
- Keys inventory - `docs/engineering/keys-guide.md`
- Deployment shapes (SaaS, VPC, on-prem)
- Compliance posture - honest current state at [/security](/security)

---

*The full docs surface is coming online through Q4-2026. Everything referenced above ships today either as a running artefact or as a spec in the repo. Send feedback to [contact@asplenz.com](mailto:contact@asplenz.com).*
