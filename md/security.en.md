---
title: Security and enterprise readiness
description: Standards, controls, cryptographic enforcement, and deployment shapes. Enough to answer the first questions; talk to us for the rest.
locale: en
kicker: Security model
ctaLabel: Discuss security with us
ctaHref: mailto:contact@asplenz.com
contactEmail: contact@asplenz.com
---

Knowledge is designed to be deployed in environments where the cost of a wrong or forged authorization is material. The standard controls are summarised below. For a security questionnaire, a deployment-specific review, or a specific control requirement, [write to us](mailto:contact@asplenz.com).

## Enforcement, not just advisory

An advisory rules engine returns a verdict your systems can ignore. Knowledge additionally emits, on every decision, a **cryptographically signed authorization artifact** (JWS ES256) that a downstream enforcement boundary verifies before the underlying business action runs.

- Every `/resolve` and `/check` response includes a signed envelope containing the operation the decision permits (action, actor, resource, parameters), the outcome, and the normative state of the tenant at decision time.
- Signatures verify offline against a per-tenant JWKS. No round-trip to Knowledge per verification.
- The signature binds to the exact operation. A verdict authorizing `refund_execute(TX-456, 40 EUR)` cannot be reused for a different transaction, a larger amount, or a different action.
- The `actor` claim is derived from Knowledge's authentication of the caller (API key to principal binding), not from the request body. A caller cannot forge its own subject.

See [Enforcement](/enforcement) for the full trust model and adoption paths.

## Authentication

Machine callers authenticate with API keys sent as `X-API-Key`. Human users authenticate through the back-office UI with a session cookie flow.

SSO (OIDC) and identity provisioning (SCIM) are supported at the platform level and can be scoped in at onboarding for deployments that need them.

## Authorization

Access is role-based and scoped per tenant. Standard roles cover policy authorship, decision, consumption and administration. Sensitive operations (such as key rotation or system-level integrations) are never implied by a role and must be granted explicitly.

## Tenant isolation

Every governed entity is scoped to a tenant. Queries filter on tenant at the service layer; the engine never sees data from another tenant. Cross-tenant access is not possible via the API.

## Signing keys

Two distinct signing keypairs per tenant, both ECDSA P-256:

- **Webhook signing key** authenticates outbound webhook payloads so consumers can verify origin and integrity.
- **Verdict signing key** authenticates the signed envelope returned on every `/resolve` and `/check` decision.

The keys are kept separate because the blast radii differ. A compromised verdict-signing key would let an attacker forge authorizations for arbitrary operations, which is strictly larger than forging notifications. Same KMS infrastructure, same rotation policy, separate private key material.

Rotation retires the old `kid` from JWKS after the overlap window drains in-flight signed verdicts.

## Encryption

Sensitive stored data (external service credentials, signing keys, secrets) is encrypted at rest. In-transit encryption is handled by the fronting proxy or load balancer, standard for enterprise deployments.

## Audit

Every mutation of a governed entity and every decision the engine produces is recorded with the principal and the state at the time. Signed verdicts extend audit reconstruction: every wrapped execution carries a cryptographic artifact citing the exact rules that authorized it, at a specific policy state, for a specific agent principal, on a specific resource with specific parameters. See [Governance](/governance) for what a decision record contains and how it can be replayed.

## Trust boundaries (what Knowledge does not do)

Being explicit about limits is a control in itself.

| Not this | Client responsibility |
|---|---|
| **Every path to a business API goes through a PEP** | Network and IAM policies must prevent agents from reaching un-wrapped APIs directly. |
| **The delegating human is trustworthy** | Unauthenticated `on_behalf_of` claims are surfaced with an explicit flag so downstream PEPs do not treat them as authority. |
| **Caller-asserted facts are truthful** | Facts fed into `/resolve` are hashed for audit but not authenticated per field. Fact provenance is a separate control. |
| **A signed verdict cannot be replayed** | Replay protection is a PEP-side spent-verdicts store. Enable for operations that must execute exactly once. |
| **A signed verdict survives arbitrary delays** | Verdicts carry an expiry (60 seconds by default, configurable). Long-running flows re-consult after human approval. |

See [Enforcement](/enforcement) for the four-actor trust model in full.

## Deployment options

| Shape | Where it runs |
|---|---|
| **SaaS** | Hosted by Asplenz. Fastest to start |
| **Private cloud / VPC** | Deployed inside your cloud account. You control network placement, backup and residency |
| **On-premise** | Deployed on infrastructure you operate |

The engine has no external runtime dependencies beyond a standard relational store and, when the reasoning layer is used, an LLM provider you configure.

## Certifications and deployment scope

- **Formal certifications (SOC 2, ISO 27001)**: programme starts during the design-partner cohort. Today, the controls above define the security posture.
- **Data residency**: configurable by deployment shape. SaaS runs in a fixed region; VPC and on-prem give you full control.
- **Audit retention**: configured per deployment. The platform preserves the audit records; retention windows are yours to set.

## Discuss security with us

For detailed security questionnaires, deployment-specific reviews or custom control requirements, write to [contact@asplenz.com](mailto:contact@asplenz.com).

## What comes next

| Read next | Why |
|---|---|
| [Enforcement](/enforcement) | The signed verdict and PEP model, the four-actor trust chain, adoption paths |
| [Governance](/governance) | The authorship, versioning and approval surface protected by the controls on this page |
| [Developers](/developers) | The API surface the authentication and authorization controls apply to |
| [Design partner](/pilot) | Three founding slots, one production-relevant decision, founding-customer pricing |
