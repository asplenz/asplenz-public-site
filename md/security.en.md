---
title: Security and enterprise readiness
description: Standards, controls and deployment shapes. Enough to answer the first questions ; talk to us for the rest.
locale: en
kicker: Security model
ctaLabel: Discuss security with us
ctaHref: mailto:contact@asplenz.com
contactEmail: contact@asplenz.com
---

Knowledge is designed to be deployed inside regulated environments. This page describes the security model at a level suitable for a first pass. For a security questionnaire, a deployment-specific review, or a specific control requirement, [write to us](mailto:contact@asplenz.com).

## Authentication

Machine callers authenticate with API keys sent as `X-API-Key`. Human users authenticate through the back-office UI with a session cookie flow.

SSO (OIDC) and identity provisioning (SCIM) are supported at the platform level and can be scoped in at onboarding for deployments that need them.

## Authorization

Access is role-based and scoped per tenant. Standard roles cover policy authorship, decision, consumption and administration. Sensitive operations (such as key rotation or system-level integrations) are never implied by a role and must be granted explicitly.

## Tenant isolation

Every governed entity is scoped to a tenant. Queries filter on tenant at the service layer ; the engine never sees data from another tenant. Cross-tenant access is not possible via the API.

## Encryption

Sensitive stored data (external service credentials, signing keys, secrets) is encrypted at rest. In-transit encryption is handled by the fronting proxy or load balancer, standard for enterprise deployments.

## Audit

Every mutation of a governed entity and every decision the engine produces is recorded with the principal and the state at the time. See [Governance](/governance) for what a decision record contains and how it can be replayed.

## Webhook delivery

Outbound webhook payloads are cryptographically signed so consumers can verify origin and integrity.

## Deployment options

| Shape | Where it runs |
|---|---|
| **SaaS** | Hosted by Asplenz. Fastest to start |
| **Private cloud / VPC** | Deployed inside your cloud account. You control network placement, backup and residency |
| **On-premise** | Deployed on infrastructure you operate |

The engine has no external runtime dependencies beyond a standard relational store and, when the reasoning layer is used, an LLM provider you configure.

## Certifications and deployment scope

- **Formal certifications (SOC 2, ISO 27001)** : programme starts during the design-partner cohort. Today, the controls above define the security posture.
- **Data residency** : configurable by deployment shape. SaaS runs in a fixed region ; VPC and on-prem give you full control.
- **Audit retention** : configured per deployment. The platform preserves the audit records ; retention windows are yours to set.

## Discuss security with us

For detailed security questionnaires, deployment-specific reviews or custom control requirements, write to [contact@asplenz.com](mailto:contact@asplenz.com).

## What comes next

| Read next | Why |
|---|---|
| [Governance](/governance) | The authorship, versioning and approval surface protected by the controls on this page |
| [Developers](/developers) | The API surface the authentication and authorization controls apply to |
| [Design partner](/pilot) | Three founding slots, one production-relevant decision, founding-customer pricing |
