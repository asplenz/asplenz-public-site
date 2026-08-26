---
title: Deployment shapes
description: SaaS, VPC, on-prem - what changes across topologies.
locale: en
kicker: Docs / Security & compliance - Stable
---

Knowledge ships in three deployment shapes. Pick based on data residency requirements, compliance posture, and operational appetite.

## SaaS (Asplenz-hosted)

**Where it runs** : Asplenz-managed infrastructure in a chosen region.

**Who operates it** : Asplenz SRE.

**What you get** :
- Fastest time-to-first-decision. Provisioning is minutes, not weeks.
- Rolling upgrades, patches, and monitoring included.
- Certifications trail (design-partner tier today ; SOC 2 + ISO 27001 as the cohort matures).

**What you give up** :
- Data physically leaves your perimeter (SaaS provider = Asplenz).
- Certification posture is Asplenz's, not yours ; audit responses cite Asplenz controls.

**Suitable for** : POCs, teams without compliance blockers on external SaaS, verticals where the data is not itself regulated (agent tool orchestration, internal ops).

**Isolation** : row-level multi-tenant by default. Per-tenant infrastructure available for enterprise plans.

## Private cloud / VPC

**Where it runs** : your cloud account (AWS, Azure, GCP, ...).

**Who operates it** : jointly. Asplenz provides the deployment tooling ; you own the account and its IAM.

**What you get** :
- Data never leaves your VPC.
- You control network policies, IAM, security groups, and audit logs.
- Compliance posture inherits your controls.

**What you give up** :
- Operational overhead : you patch, upgrade, monitor.
- Rolling releases require your acknowledgement.

**Suitable for** : regulated verticals (banking, healthcare) where residency + control are contractual. Any org with mature cloud practices.

**Provisioning** : Asplenz ships Terraform modules for AWS + Azure + GCP. Deployment takes hours to days depending on your review cycles.

**Data plane vs control plane** : your VPC runs both. No management plane call-home.

## On-premise

**Where it runs** : infrastructure you operate (bare metal, private data centre, air-gapped environment).

**Who operates it** : you.

**What you get** :
- Complete control. Data never leaves your infrastructure.
- Air-gap possible (no network dependency on Asplenz).

**What you give up** :
- Full operational overhead. You handle everything.
- Support cycles are longer (fewer telemetry signals to Asplenz).

**Suitable for** : air-gapped environments (defence, restricted networks) ; jurisdictions with strict on-prem-only requirements.

**Runtime dependencies** :
- Postgres 15+ (managed or self-hosted).
- Your LLM provider (Anthropic, OpenAI, ...) if you enable `knowledge-ai` for verdict prose. Otherwise no LLM dependency.

**Everything else** : bundled in the Knowledge distribution.

## Shape comparison

| Dimension | SaaS | VPC | On-prem |
|---|---|---|---|
| Time to first decision | Minutes | Hours-days | Days-weeks |
| Data residency | Asplenz region | Your VPC | Your infra |
| Certification inheritance | Asplenz's | Yours | Yours |
| Operational overhead | None | Moderate | Full |
| Upgrade cadence | Rolling (Asplenz) | You approve | You control |
| Air-gap possible | No | No | Yes |
| Per-tenant isolation | Row-level default ; per-tenant available | Row-level default ; per-tenant available | Row-level default ; per-tenant available |

## What is the same across shapes

- **API surface** : identical. Callers do not know which shape they hit.
- **Signed verdicts + JWKS** : identical envelope, per-tenant kid.
- **Audit surface** : identical Consultation shape.
- **Enforcement model** : PEP does the same work regardless of shape.

The difference is where the servers live and who operates them - not what the software does.

## Getting started

1. Read [Security](/security) - Asplenz's current controls.
2. Read [Keys inventory](/docs/security-compliance/keys-inventory) - what's in the deployment.
3. [Talk to us](/contact) with your compliance / procurement requirements ; we scope the shape and timeline together.

## Related

- [Multi-tenant setup](/docs/guides/multi-tenant-setup) - operating multiple tenants on one deployment.
- [Compliance posture](/docs/security-compliance/compliance-posture) - certifications + design-partner tier.
- [Keys inventory](/docs/security-compliance/keys-inventory) - key storage per shape.
