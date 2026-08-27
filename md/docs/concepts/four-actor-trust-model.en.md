---
title: Four-actor trust model
description: The four principals in a governed agent operation, which edges Knowledge guarantees, and which edges depend on your architecture.
locale: en
kicker: Docs / Concepts - Stable
---

Any governed agent operation involves four distinct principals. Getting the trust boundaries right is the difference between a signed verdict that means something and a signed verdict that is theatre.

## The four actors

```
Human Principal (Marie, hum-marie)
     |
     |  delegates
     v
Agent Principal (RM Copilot, agn-rm-copilot)
     |
     |  consults
     v
Knowledge (PDP - Policy Decision Point)
     |
     |  signs verdict
     v
PEP (Policy Enforcement Point, tool wrapper)
     |
     |  invokes
     v
Business API (refund service, KYC admission, ...)
```

Every edge is a trust boundary. Knowledge tightens two ; the others depend on your architecture.

## Edge 1 : Human -> Agent (delegation)

**The claim** : the agent is acting on behalf of a specific human who authorised it.

**What Knowledge accepts** : the `on_behalf_of` field on `/check` and `/resolve`. It is copied into the signed envelope.

**What Knowledge verifies** : whether the delegation is authenticated. Two shapes :

- **Authenticated** (`on_behalf_of_authenticated: true`) : a delegation token, an OAuth chain, or an identity binding proves the human authorised the agent to act on their behalf.
- **Caller-asserted** (`on_behalf_of_authenticated: false`) : the agent claimed a delegation ; Knowledge signed the claim as metadata but did not verify it.

**PEP responsibility** : treat `on_behalf_of` as untrusted metadata when `on_behalf_of_authenticated: false`. Tighten authorisation accordingly (e.g. refuse for high-severity actions).

## Edge 2 : Agent -> Knowledge (authentication)

**The claim** : the agent principal calling `/check` is who it claims to be.

**What Knowledge does** : authenticates every call via `X-API-Key` (M2M) or session cookie (browser UI). The authenticated principal ID is what Knowledge writes into `authorization.actor` in the signed envelope - **never** whatever the caller passed in a request body.

**Attack model** : a compromised API key allows an attacker to impersonate the agent. Rotation + key scoping are your defence. Multi-tenant deployments : one key per agent principal, never shared.

## Edge 3 : Knowledge -> PEP (signature)

**The claim** : the verdict + authorization bindings came from Knowledge, unmodified.

**What Knowledge does** : signs the envelope with the tenant's private ES256 key.

**What the PEP verifies** : the signature against the tenant's JWKS.

**Failure modes** :

- **Signature invalid** : someone tampered. Refuse.
- **kid not in JWKS** : signing key rotated ; PEP should refresh JWKS and retry once.
- **Expired verdict** (`exp` in past) : reject as stale.

## Edge 4 : PEP -> Business API (binding + gate)

**The claim** : this concrete operation matches the operation the verdict authorised.

**What the PEP does** :

1. Extract the operation's `(actor, action, resource, parameters)` from the incoming tool call.
2. Compare against `authorization` in the signed envelope.
3. If every declared binding matches, invoke the business API. Otherwise refuse.

**This is the load-bearing edge.** Get bindings wrong and enforcement becomes theatre. The `@governed_tool` decorator handles this correctly in Python ; an MCP tool-call interceptor built on `verify_verdict` handles this correctly for MCP tools ; custom PEPs must implement it correctly.

**Coverage responsibility** : if any reachable path to the business API skips the PEP, the model breaks. Network isolation + IAM prevent alternative paths. This is your architecture, not Knowledge's.

## What Knowledge guarantees vs what your architecture guarantees

| Guarantee | Owned by |
|---|---|
| Deterministic verdict from encoded policy | Knowledge |
| Signature integrity of the envelope | Knowledge |
| Actor authentication | Knowledge |
| Freeze of decision context (Consultation) | Knowledge |
| PEP verifies signature before executing | You (via `knowledge-runtime` or custom code) |
| Every path to the business API traverses the PEP | You (via network isolation + IAM) |
| The delegating human is authenticated | You (via identity binding you provide to Knowledge) |
| Caller-asserted facts (in `context`) are truthful | You (fact-level auth is orthogonal) |

## The audit surface

The four-actor chain is captured on every Consultation :

- `authorization.actor` - the authenticated agent principal.
- `on_behalf_of` - the claimed human (with `_authenticated` flag).
- `iss` - the Knowledge tenant issuer.
- `consultation_id` - the audit key.

Six months later, an auditor reads the Consultation, verifies the signature against the archived JWKS (via kid + epoch), and reconstructs the exact frozen policy state. Non-repudiation follows from the signature.

## Related

- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - the envelope in depth.
- [Enforcement product page](/product/enforcement) - the story-level view.
- [Trust model deep dive](/docs/security-compliance/trust-model) - the full security narrative.
- [Keys inventory](/docs/security-compliance/keys-inventory) - all four keys, rotation stories.
