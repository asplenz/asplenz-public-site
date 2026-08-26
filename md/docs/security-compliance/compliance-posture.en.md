---
title: Compliance posture
description: Honest state of certifications, data residency, retention, and threat model. What ships today, what's on the roadmap.
locale: en
kicker: Docs / Security & compliance - Stable
---

This page states Asplenz's current compliance posture. Written for security reviewers, procurement teams, and auditors evaluating the platform.

## Certifications

**Today** : design-partner tier. The security controls documented at [/security](/security) define the operational baseline. No formal SOC 2 or ISO 27001 certification yet.

**Roadmap** : SOC 2 Type II + ISO 27001 programme starts with the design-partner cohort. Timing follows customer commitments (design-partner tenants inform which controls need documented evidence first).

**What that means practically** :

- SaaS design-partner deployments carry Asplenz's controls as the baseline. Sufficient for most B2B pilots.
- Enterprise procurement teams requiring formal certification should plan for VPC / on-prem shapes where the posture inherits their own controls.
- Design partners get access to the same operational rigor as the certification programme requires ; the certification is documentation of what already runs.

## Data residency

**SaaS** : configurable by region. Default region is per contract. Data does not leave the region.

**VPC** : your cloud account, your region. No data leaves your perimeter.

**On-prem** : your infrastructure, your control.

## Retention

**Consultations** : configurable per tenant. Default retention 7 years (regulatory alignment). Older records can be archived to cheaper storage while remaining verifiable against the archived JWKS.

**Events (audit trail)** : same retention as consultations.

**Signed verdicts** : embedded in the Consultation record ; retention follows.

**JWKS (public keys)** : retained forever. Cold-storage verification depends on archived keys ; deleting them breaks historical audit.

**Principal + rule state** : retained while active. Deactivated principals + retired rules retained per tenant policy (default 7 years).

**Personal data** : Knowledge stores principal identifiers (email, display name) and consultation contexts. Right-to-erasure requests are handled by anonymising the principal record + redacting personal fields from consultation `context_snapshot`, while preserving `authorization.actor` for audit integrity.

## Threat model

Documented at [Trust model deep dive](/docs/security-compliance/trust-model). Four-actor chain, edge-by-edge threats + mitigations.

## Data-in-transit

- **All API traffic** : TLS 1.3 minimum. HSTS enforced. HTTP/2 supported.
- **Webhooks outbound** : TLS 1.2 minimum (limited by subscriber capability).
- **Internal service-to-service** : mTLS between `knowledge-api` and `knowledge-ai` in production.

## Data-at-rest

- Row-level tables encrypted via KEK (see [Keys inventory](/docs/security-compliance/keys-inventory) Key 2).
- Sensitive columns (API key secrets, webhook secrets, principal PII) encrypted per-field.
- Filesystem-level encryption + volume backup policies per deployment shape.

## Access control (Asplenz personnel)

**SaaS** :
- Access to customer data restricted to on-call SRE + product engineers actively investigating an incident.
- Every access to customer data is logged in a dedicated audit trail.
- No routine access ; queries require justified ticket.

**VPC / on-prem** : Asplenz has no runtime access. Support is on-demand via your channel of choice.

## Incident response

**SLA** :
- Critical (data breach, integrity compromise) : 1-hour acknowledgement, hourly updates.
- High (service degradation) : 4-hour acknowledgement, 4-hour updates.
- Standard : next business day.

**Notification** : SaaS customers notified within 24 hours of confirmed material incident affecting their tenant. VPC / on-prem : your own operational team leads ; Asplenz supports on request.

## Sub-processors (SaaS)

Current list :
- **Cloud provider** : AWS (region per contract).
- **CDN / edge** : Cloudflare (for public-site + JWKS endpoints only).
- **LLM providers** : Anthropic (Claude) as primary. Configurable per tenant.
- **Observability** : OpenTelemetry Collector + backend per Asplenz environment.
- **Email** : Postmark for transactional emails.

Sub-processor changes notified 30 days in advance to SaaS customers with active enterprise plans.

## VPC / on-prem : no sub-processors

The deployment runs in your infrastructure with your dependencies. Asplenz-hosted sub-processors are irrelevant.

## What we do not claim

We do not claim SOC 2 or ISO 27001 certification today. We do not claim HIPAA / PCI compliance today (the platform can support HIPAA-aligned deployments on VPC / on-prem with appropriate BAAs but the certification programme is not open).

If your procurement requires these certifications, plan for the design-partner engagement to sequence them - or deploy in VPC / on-prem where your certifications apply.

## Related

- [Security page](/security) - current operational controls.
- [Trust model](/docs/security-compliance/trust-model) - what a signed verdict guarantees.
- [Keys inventory](/docs/security-compliance/keys-inventory) - cryptographic material.
- [Deployment shapes](/docs/security-compliance/deployment-shapes) - SaaS vs VPC vs on-prem trade-offs.
