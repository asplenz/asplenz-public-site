---
title: Trust model deep dive
description: The full four-actor trust chain, what Knowledge guarantees, what your architecture guarantees, and where the load-bearing edges are.
locale: en
kicker: Docs / Security & compliance - Stable
---

The four-actor trust model is Knowledge's honest account of what a signed verdict does and does not prove. It is the reference document for security reviews.

## The chain

```
Human Principal (Marie)
     |  E1 : delegation
     v
Agent Principal (RM Copilot)
     |  E2 : authentication
     v
Knowledge (PDP)
     |  E3 : signature
     v
PEP (tool boundary)
     |  E4 : binding + gate
     v
Business API
```

Four edges. Two are Knowledge's responsibility (E2, E3). Two depend on your architecture (E1, E4).

## Edge 1 : Human -> Agent (delegation authenticity)

**Threat** : an agent claims to act for a human who did not actually authorise it.

**Knowledge's role** : accepts `on_behalf_of` on requests, copies it into the signed envelope, and stamps it with `on_behalf_of_authenticated: true|false`.

**Your role** : provide Knowledge with the identity binding (delegation token, OAuth chain, SSO federation trust) that lets Knowledge distinguish an authenticated delegation from a caller-asserted one. Without an identity binding declared on the agent's principal record, `on_behalf_of_authenticated` is `false` and the PEP MUST treat the field as untrusted metadata.

**Failure mode if this edge is weak** : a compromised agent can impersonate any human, and forensic reconstruction cannot distinguish who actually acted.

## Edge 2 : Agent -> Knowledge (authentication)

**Threat** : an attacker impersonates the agent to trigger favourable verdicts.

**Knowledge's role** : authenticates every API call via `X-API-Key` (M2M) or session cookie. The authenticated principal is what appears in `authorization.actor` on the signed envelope, never a value provided in the request body.

**Your role** : protect API keys (env vars, secret managers, no code commits), rotate on schedule and on suspected compromise. One key per agent principal ; never shared.

**Failure mode if this edge is weak** : an attacker with a stolen key can produce authentic signed verdicts. Detection is via unusual `caller_principal_id` patterns in consultations.

## Edge 3 : Knowledge -> PEP (signature integrity)

**Threat** : an attacker tampers with a verdict between Knowledge and the PEP.

**Knowledge's role** : signs every verdict with the tenant's ES256 private key. The signature covers the JWS protected header and claims. Any modification invalidates it.

**Your role** : the PEP verifies the signature against JWKS on every call, without exception. `knowledge-runtime` and `knowledge-mcp-proxy` handle this by default ; custom PEPs must implement it.

**Failure mode if this edge is weak** : network-level attackers can forge favourable verdicts. Detection is impossible without signature verification ; audit would show the verdict as legitimate.

## Edge 4 : PEP -> Business API (binding + gate)

**Threat** : the PEP verifies the signature but does not check that the actual operation matches the operation the verdict authorised.

**Knowledge's role** : encodes `authorization.{actor, action, resource, parameters}` in the signed claims. Provides `knowledge-runtime` (Python) and `knowledge-mcp-proxy` as reference PEPs that implement the check.

**Your role** :

- If using the reference SDKs : declare `bind=[...]` correctly ; the SDK does the check.
- If writing a custom PEP : implement every check documented in [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep).
- **Ensure every reachable path to the business API traverses the PEP.** Network isolation + IAM prevent alternative paths. If an agent can call the business API directly (bypassing the PEP), no signed verdict helps.

**Failure mode if this edge is weak** :

- Weak binding : the verdict authorises `amount=40`, the actual call sends `amount=4000`, PEP doesn't check, business API runs. This is enforcement theatre.
- Alternative reach path : PEP is correctly wired, but the agent has direct network access to the business API. Same result.

## What Knowledge does NOT guarantee (summary)

| Not guaranteed | Owner |
|---|---|
| Every path to the business API traverses a PEP | Your network / IAM |
| The delegating human authenticates their delegation | Your identity provider integration |
| Caller-asserted facts in `context` are truthful | Your fact provenance system (orthogonal) |
| Signed verdicts cannot be replayed within TTL | PEP + spent-verdicts store (both provided as reference implementations) |
| A compromised agent principal is detected | Your monitoring + IAM anomaly detection |

## What Knowledge DOES guarantee

| Guaranteed | Mechanism |
|---|---|
| Deterministic verdict from encoded policy | Engine + immutable RuleVersion |
| Signature integrity of the envelope | ES256 with per-tenant kid |
| Non-repudiation of the decision | Signed envelope + archived JWKS |
| Freeze of the decision context | Consultation record + normative_hash |
| Historical reconstruction from cold storage | Immutable Consultation + archived JWKS |
| Actor identity tied to authenticated principal | `authorization.actor` from Knowledge's own authentication, not from request body |

## Threat modelling exercise

For your specific deployment :

1. **Draw the graph.** Every path from an agent to any business API. Which paths traverse a PEP ? Which do not ?
2. **Check E4.** For each PEP, are all discriminating parameters in `bind=[...]` ?
3. **Check E1.** For each agent principal, is there an identity binding declared for authenticated `on_behalf_of` ? If not, are downstream PEPs treating the field as untrusted ?
4. **Check E2.** Where do API keys live ? Who has access ? What's the rotation schedule ?

## Related

- [Four-actor trust model](/docs/concepts/four-actor-trust-model) - shorter concept overview.
- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - envelope format + PEP contract.
- [Keys inventory](/docs/security-compliance/keys-inventory) - the four keys in the deployment.
- [Deployment shapes](/docs/security-compliance/deployment-shapes) - SaaS, VPC, on-prem topologies.
