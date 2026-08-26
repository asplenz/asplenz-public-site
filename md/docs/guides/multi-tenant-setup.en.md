---
title: Multi-tenant setup
description: Run multiple isolated tenants on one Knowledge deployment.
locale: en
kicker: Docs / Guides - Stable
---

Knowledge is multi-tenant by design. One deployment can serve many isolated tenants (customer organisations, business units, environments). This guide walks through the model and the operational steps.

## Isolation guarantees

- **API surface** : every route is tenant-scoped (`/tnt-slug/v1/...`). Cross-tenant reads via API key are impossible ; they require a Platform admin session with explicit target scope.
- **Data** : all row-level tables carry `tenant_id`. Queries enforce it at the ORM layer.
- **JWKS** : per-tenant JWKS endpoint. Verifiers cache keys per tenant.
- **Rules + Policies** : cannot cross tenants. Copying a policy pack from tenant A to tenant B is a deliberate operator action.
- **Consultations** : archived per-tenant. Retention windows are per-tenant.

## What is deployment-wide today (Option B)

- **Verdict signing key** : one ES256 keypair for the whole deployment. `kid` still includes tenant + epoch so migration to per-tenant is non-breaking.
- **KEK (encryption at rest)** : one Fernet keyring for the whole deployment.
- **Session JWT secret** : one HMAC secret, shared with `knowledge-mcp`.
- **Webhook signing key** : one ECDSA P-256 keypair.

Migration to per-tenant is on the roadmap, non-breaking (see [Rotate signing keys](/docs/guides/rotate-signing-keys)).

## Create a tenant

```bash
knowledge-admin tenant create \
  --slug tnt-acme \
  --display-name "Acme Corp" \
  --scope-schema ./scope-schema.acme.json \
  --owner-email compliance@acme.example
```

Behaviour :

- Provisions the tenant row.
- Registers the scope schema against which every rule row is validated.
- Creates the initial admin principal + issues an API key (printed once).
- Emits a tenant setup Event.

## Install a decision pack

Every vertical has a canonical decision pack in the monorepo :

```bash
knowledge-admin pack install \
  --tenant tnt-acme \
  --pack src/knowledge-verticals/wealth/policy-packs/structured-products
```

Behaviour :

- Reads `pack.yaml` for policy + rule definitions.
- Merges required scope additions into the tenant's scope schema.
- Creates the policies + rules with the tenant's calibrated thresholds (if a calibration file is provided).
- Registers the `source_requirement` field where relevant.

## Provision principals and targets

Two paths :

- **Manual** via the back-office UI or admin CLI.
- **SCIM 2.0** via `/v1/scim` endpoint (see `docs/engineering/scim.md`).

Every human or agent principal belongs to exactly one tenant. Target memberships (`TargetMember` rows) determine which rules apply.

## Configure webhooks (per-tenant)

Approvals, verdicts, and events can fire webhooks. Configure per-tenant :

```bash
knowledge-admin webhook create \
  --tenant tnt-acme \
  --event approval.pending \
  --url https://ops.acme.example/knowledge/webhook
```

The webhook is signed with the deployment-wide ECDSA P-256 key. Verify per `docs/engineering/webhooks-guide.md`.

## Deployment shape considerations

- **Shared Postgres, shared API** : simplest. Row-level isolation.
- **Shared API, per-tenant Postgres schemas** : stronger isolation, more operational overhead.
- **Per-tenant deployment** : full isolation, per-tenant certifications. VPC / on-prem shapes typically operate this way.

Pick based on your compliance posture. Design partners typically start on shared infrastructure and migrate as their volume + certification requirements grow.

## Naming conventions

- Tenant slugs : `tnt-<kebab>` (all lowercase). Used in URLs and kid.
- Human principals : `hum-<hex12>`.
- Agent principals : `agn-<hex12>`.
- Rules : `rul-<hex12>` (or `rul-<pack>-<intent>` in seeded packs).
- Targets : `tgt-<hex12>` (or `tgt-<role>` in seeded packs).

## Related

- [Authentication](/docs/api-reference/authentication) - principal + tenant binding.
- [Keys inventory](/docs/security-compliance/keys-inventory) - what's deployment-wide today.
- [Deployment shapes](/docs/security-compliance/deployment-shapes) - SaaS, VPC, on-prem topologies.
