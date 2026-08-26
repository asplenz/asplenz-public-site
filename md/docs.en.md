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

Deeper explanations of the core abstractions.

- **[Policies, rules and targets](/docs/concepts/policies-rules-targets)** [Stable] - the three core aggregates.
- **[Verdicts and decisions](/docs/concepts/verdicts-and-decisions)** [Stable] - severity ladder, precedence, Consultation record.
- **[Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep)** [Stable] - the JWS envelope, binding checks, spent-verdicts.
- **[Progressive context resolution](/docs/concepts/progressive-context-resolution)** [Stable] - the `/resolve` loop and dependency inversion.
- **[Overrides, approvals, pauses](/docs/concepts/overrides-approvals-pauses)** [Stable] - the three governed exception mechanisms.
- **[Four-actor trust model](/docs/concepts/four-actor-trust-model)** [Stable] - who signs, who verifies, what each edge guarantees.

## API reference

- **[Authentication](/docs/api-reference/authentication)** [Stable] - API keys, session cookies, principal binding.
- **[POST /v1/check](/docs/api-reference/check)** [Stable] - deterministic verdict, strict context.
- **[POST /v1/resolve](/docs/api-reference/resolve)** [Stable] - progressive verdict, tolerant context.
- **[GET /v1/tenants/{slug}/jwks](/docs/api-reference/jwks)** [Stable] - JWKS for signature verification.
- **[GET /v1/consultations/{id}](/docs/api-reference/consultations)** [Stable] - retrieve a Consultation record.
- **[/v1/approvals](/docs/api-reference/approvals)** [Stable] - create, poll, decide.

Full OpenAPI spec at `docs/api/openapi-v3.json` in the monorepo. Postman collection : `docs/api/postman/knowledge-v3.postman_collection.json`.

## SDK reference

- **[knowledge-runtime (Python)](/docs/sdk-reference/knowledge-runtime-python)** [Stable] - `@governed_tool`, `verify_verdict`, JWKS cache, guard-rails.
- **[TypeScript SDK](/docs/sdk-reference/typescript-roadmap)** [Roadmap] - feature parity with Python planned for Q4-2026.

## MCP proxy

- **[Setup](/docs/mcp-proxy/setup)** [Stable] - insert the proxy in front of any MCP server.
- **[Config reference](/docs/mcp-proxy/config-reference)** [Stable] - every knob in proxy.yaml.
- **[Deployment modes](/docs/mcp-proxy/deployment-modes)** [Stable] - stdio, sidecar, shared.

## Guides

- **[Rotate signing keys](/docs/guides/rotate-signing-keys)** [Stable] - scheduled + emergency rotation.
- **[Multi-tenant setup](/docs/guides/multi-tenant-setup)** [Stable] - run multiple tenants on one deployment.
- **[Bring your own tools to MCP proxy](/docs/guides/bring-your-own-tools-to-mcp-proxy)** [Stable] - fetcher registry + policy mapping.
- **[Migrate from advisory to enforcement](/docs/guides/migrate-from-advisory-to-enforcement)** [Stable] - the three-stage playbook.
- **[Emergency response](/docs/guides/emergency-response)** [Stable] - kill switch, key rotation, downgrade.

## Security + compliance

- **[Trust model deep dive](/docs/security-compliance/trust-model)** [Stable] - four-actor chain, edge-by-edge threats.
- **[Keys inventory](/docs/security-compliance/keys-inventory)** [Stable] - all four cryptographic keys, storage, rotation.
- **[Deployment shapes](/docs/security-compliance/deployment-shapes)** [Stable] - SaaS, VPC, on-prem trade-offs.
- **[Compliance posture](/docs/security-compliance/compliance-posture)** [Stable] - certifications, residency, retention, threat model.

---

*Send feedback to [contact@asplenz.com](mailto:contact@asplenz.com).*
