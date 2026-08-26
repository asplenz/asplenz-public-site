---
title: Signed verdicts and PEP
description: The JWS ES256 envelope Knowledge returns, and how a Policy Enforcement Point verifies and binds it to the exact operation.
locale: en
kicker: Docs / Concepts - Stable
---

Knowledge does not execute the business action. It returns a **signed verdict** that a downstream **Policy Enforcement Point (PEP)** verifies before executing the underlying call. This page explains the model.

## The envelope

Every `/check` and `/resolve` response includes a `signed_verdict` field : a compact JWS (JSON Web Signature) produced with ECDSA P-256 (ES256). It has three parts joined by dots :

```
<protected-header-b64>.<claims-b64>.<signature-b64>
```

**Protected header** :

```json
{
  "alg": "ES256",
  "typ": "governed+jws",
  "kid": "tnt-acme:2026-01"
}
```

The `kid` identifies the tenant + signing epoch. It resolves to a public key at the tenant's JWKS endpoint.

**Claims** (the payload) :

```json
{
  "iss": "https://knowledge.asplenz.com/tnt-acme",
  "iat": 1737849600,
  "exp": 1737849660,
  "authorization": {
    "actor": "agn-rm-copilot",
    "action": "refund.execute",
    "resource": "TX-456",
    "parameters": { "amount_eur": 40 }
  },
  "decision": {
    "verdict": "allowed",
    "cited_rule_version_ids": ["rv-abc", "rv-def"],
    "dominating_rule_id": "rul-refund-under-100"
  },
  "context_hash": "sha256:9f2c...",
  "consultation_id": "cns-abc123",
  "on_behalf_of": "hum-marie",
  "on_behalf_of_authenticated": false
}
```

The signature covers the header + claims. Any modification invalidates the signature.

## The PEP contract

A PEP is any component that wraps a business API and verifies verdicts before executing. Concrete examples in this codebase :

- **`@governed_tool` decorator** in `knowledge-runtime` (Python).
- **MCP proxy** in `knowledge-mcp-proxy` (transparent proxy in front of an MCP server).
- **Custom code** you write in any language.

Every PEP performs the same six checks on receipt :

1. **Signature verification** using the JWKS public key.
2. **`exp` check** - reject expired verdicts (`nbf` if present).
3. **Actor binding** - the operation's actor matches `authorization.actor` (from Knowledge's authentication, not from the caller's payload).
4. **Action binding** - the tool's declared `action` matches.
5. **Resource binding** - the operation's `resource` matches.
6. **Parameter bindings** - for each declared bind field, the operation's value matches the signed value (or falls within the signed range).

If any check fails, the PEP refuses with a typed error (`signature_invalid`, `expired`, `binding_mismatch`, ...) and never invokes the underlying business API.

## Why this catches replay + injection

- **Same call, different amount** : `parameters.amount_eur` binding does not match. Refused.
- **Same call, different resource** : `resource` binding does not match. Refused.
- **Same call, different actor via body injection** : Knowledge's `actor` in the claims comes from Knowledge's own authentication ; a malicious body cannot force a different actor.
- **Same call, an hour later** : `exp` in the past. Refused.

## What the PEP does NOT guarantee

- **Replay within TTL.** If the same verdict is submitted twice within its TTL for the same operation, the signature is valid both times. For exactly-once operations, add a **spent-verdicts store** (a set of `{iss, consultation_id}` you've already burned).
- **Alternative reach paths.** If your network / IAM lets the agent reach the business API directly without going through the PEP, no signed verdict helps. The PEP owns the tool boundary ; it does not police the whole network.
- **Trustworthiness of `on_behalf_of`.** The `on_behalf_of_authenticated` field tells you whether the delegation is backed by identity binding (true) or is caller-asserted metadata (false). The PEP should tighten authorisation when `false`.

## TTL

Default 60 seconds. Configurable :

- Per tenant : `verdict_ttl_seconds` in tenant config.
- Per call : `X-Verdict-TTL: 30` header on the `/check` or `/resolve` request.

Short TTLs (a few seconds) reduce replay window ; long TTLs (minutes) accommodate slow business APIs. Pick per operation.

## Key management

Signing keys live at `${DATA_DIR}/keys/verdict-signing.json` (single deployment-wide key today, per-tenant supported by the resolver stub). Rotation flow at [Rotate signing keys](/docs/guides/rotate-signing-keys).

JWKS endpoint (per tenant) :

```
GET /knowledge/v1/tenants/{slug}/jwks
```

Cached client-side by `knowledge-runtime` for 5 minutes by default.

## Related

- [Enforcement product page](/product/enforcement) - the story-level view.
- [Verdicts and decisions](/docs/concepts/verdicts-and-decisions) - what's inside the decision block.
- [Four-actor trust model](/docs/concepts/four-actor-trust-model) - who signs, who verifies, what each edge guarantees.
- [/v1/jwks](/docs/api-reference/jwks) - the JWKS endpoint contract.
- [`knowledge-runtime` Python](/docs/sdk-reference/knowledge-runtime-python) - the reference PEP.
- [MCP proxy](/docs/mcp-proxy/setup) - transparent PEP for MCP servers.
