---
title: For CISO / platform
description: Cryptographic proof that every governed action was authorized by policy. A four-actor trust chain that documents its own boundaries. Audit reconstruction that survives cold storage.
locale: en
kicker: Solutions - For CISO / platform
---

Your organisation is deploying AI agents. Your job is to answer three questions before that happens :

> *How do I audit what the agent actually decided ?*

> *How do I prevent the agent from acting outside its authorized scope ?*

> *How do I prove that to a regulator, six months later, without a scramble ?*

Knowledge answers the first two directly and the third structurally.

## Cryptographic proof at the tool boundary

Every `/check` and `/resolve` response embeds a JWS ES256 envelope signed by the tenant's private key. Downstream Policy Enforcement Points (tool wrappers, MCP proxy, custom code) verify the signature and check that the operation matches the bindings before executing the underlying business API.

Concretely, a verdict authorizing `refund_execute(TX-456, 40 EUR)` :

- Cannot be replayed for `refund_execute(TX-456, 4000 EUR)` - the `amount` binding does not match, the PEP refuses with `binding_mismatch`
- Cannot be replayed for `refund_execute(TX-999, 40 EUR)` - the `resource` binding does not match
- Cannot be forged with a different `actor` field via JSON body injection - the actor is derived from Knowledge's authentication of the caller, never from the request payload
- Cannot be verified past its `expires_at` - default 60 seconds, configurable per tenant + per call

The full spec at [/product/enforcement](/product/enforcement).

## The four-actor trust chain

```
Human Principal   ->   Agent Principal   ->   Knowledge   ->   PEP   ->   Business API
```

Knowledge tightens two edges of this chain :

- **Knowledge -> PEP** : signature verification
- **Agent -> PEP** : binding check against the signed operation

The other edges depend on your architecture. The trust model is explicit at [/product/enforcement](/product/enforcement) §Trust boundaries so your review team sees exactly what Knowledge does and does not guarantee.

## What Knowledge does NOT guarantee (documented, not hidden)

- **Every path to a business API goes through a PEP.** If your network / IAM allows the agent to reach a business API directly, no signed verdict helps. **This is your architecture responsibility.**
- **The delegating human is trustworthy.** The `on_behalf_of` claim is authenticated only when a delegation token or an identity binding backs it. `on_behalf_of_authenticated: false` is a common case ; the PEP must treat it as untrusted metadata.
- **Caller-asserted facts are truthful.** Facts fed into `/resolve` are hashed for audit but not authenticated per field. Fact provenance is orthogonal.
- **A signed verdict cannot be replayed within its TTL.** Replay protection is a PEP-side spent-verdicts store. Enable it for exactly-once operations.

Being explicit about these limits is part of the enforcement contract. A signed-verdict story that hides its limits is worse than one that names them.

## Audit surface that survives cold storage

Every consultation writes a Consultation record freezing the exact rule versions, precedence trace, overrides, and normative hash at decision time. Signed verdicts add cryptographic tamper-evidence : an auditor can verify a decision from cold storage years later, against the tenant's JWKS, without any dependency on Knowledge being live.

- **Provable authorization trace.** Every wrapped execution has a cryptographic artifact citing the exact rules that authorized it, at a specific policy state, for a specific agent principal, on a specific resource with specific parameters.
- **Non-repudiation.** The tenant cannot later claim *"Knowledge did not say that"* - the signature proves the exact decision produced at the exact time.
- **Deterministic replay.** Not from log inference. From frozen state.

Full audit story at [/product/auditability](/product/auditability).

## Keys inventory (honest)

Knowledge ships with four cryptographic keys per deployment, documented at `docs/engineering/keys-guide.md` :

- **Webhook signing** (ECDSA P-256, deployment-wide) - stable
- **Encryption at rest / KEK** (Fernet AES-128-CBC + HMAC-SHA256, deployment-wide, MultiFernet rotation) - stable
- **Session JWT secret** (HS256, deployment-wide, shared with knowledge-mcp) - stable
- **Verdict signing** (ECDSA P-256, per-tenant as planned) - Option B deployment-wide today, Option C per-tenant is a non-breaking upgrade path

Rotation stories per key are documented ; the KEK rotation is graceful with zero downtime via MultiFernet. Verdict-signing rotation retires the old `kid` from JWKS after the overlap window drains in-flight signed verdicts.

## Compliance posture

Current state, honest :

- **SOC 2 + ISO 27001** : programme starts with the design-partner cohort. Today, the security controls documented at [/security](/security) define the posture.
- **Data residency** : configurable by deployment shape. SaaS runs in a fixed region ; VPC and on-prem give you full control.
- **Audit retention** : configured per deployment. Platform preserves the audit records ; retention windows are yours to set.
- **Threat model** : four-actor trust chain fully documented ; incident response per key documented ; deployment guidance for network isolation of business APIs documented.

We do not claim what we do not have. The design-partner tier is production-grade for design partners ; full certifications ship as the cohort matures.

## Deployment shapes

- **SaaS** (Asplenz-hosted) : fastest to start ; certifications trail
- **Private cloud / VPC** : deployed in your cloud account ; you control everything
- **On-premise** : deployed on infrastructure you operate ; no external runtime dependency beyond Postgres + your LLM provider

See [Integrations](/product/integrations) §Deployment shapes.

## Getting started

1. Read [Enforcement](/product/enforcement) - the model in depth.
2. Read [Security](/security) - the compliance posture.
3. Read `docs/engineering/keys-guide.md` in the monorepo - the full keys inventory.
4. [Talk to us](/contact) for a technical evaluation.

## Related

| Read next | Why |
|---|---|
| [Enforcement](/product/enforcement) | Cryptographic model, adoption paths, trust boundaries |
| [Auditability](/product/auditability) | Consultation freeze, replay, tamper-evidence |
| [Security](/security) | Enterprise controls, keys, deployment topologies |
