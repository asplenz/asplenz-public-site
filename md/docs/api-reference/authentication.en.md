---
title: Authentication
description: How Knowledge authenticates API callers - API keys, session cookies, principal binding.
locale: en
kicker: Docs / API reference - Stable
---

Knowledge authenticates every API call. There are two supported mechanisms.

## API keys (M2M)

**Header** :

```
X-API-Key: ak-live-a1b2c3d4e5f6...
```

Issued in the back-office UI per-principal. Every key is bound to exactly one principal ID (human or agent) and its tenant. The authenticated principal is the one Knowledge writes into the signed verdict's `authorization.actor` field.

**Format** : `ak-{env}-{secret}` where `{env}` is `live` or `test`. The prefix is meaningful to Knowledge ; the secret is 32 bytes of URL-safe base64.

**Scope** : an API key inherits its principal's target memberships. Rules attached to those targets apply. Universal rules always apply.

**Rotation** : issue a new key first, deploy the caller with the new key, revoke the old one. There is no soft-delete grace period ; revocation is immediate.

**Where to store** : environment variable, secret manager, or vault. Never in code.

## Session cookies (browser UI)

Set by the back-office UI login flow (`auth_session`). Carries a signed session JWT (HS256, deployment-wide secret).

**Applies to** : back-office UI routes only. API endpoints accept `X-API-Key` OR session cookie ; browser callers use the cookie automatically.

**TTL** : 8 hours default, configurable per tenant.

**Logout** : `POST /auth/logout` clears the session server-side.

## The authenticated principal

Every authenticated call resolves to a principal record with :

- `id` (`hum-*` or `agn-*`)
- `tenant_id`
- `email` (humans only)
- `display_name`
- `target_memberships` (via `TargetMember` rows)

This is what appears in `authorization.actor` on the signed verdict, in `Consultation.caller_principal_id`, and in every `Event` row.

## on_behalf_of (delegation)

An agent (`agn-*`) can pass `on_behalf_of: "hum-marie"` in the `/check` or `/resolve` body. This claim is copied verbatim into the signed envelope with a flag :

- `on_behalf_of_authenticated: true` - Knowledge verified the delegation (via an identity binding declared on the agent's principal record).
- `on_behalf_of_authenticated: false` - Knowledge signed the claim as-is without verification.

PEPs SHOULD treat `_authenticated: false` as untrusted metadata.

## Multi-tenant

Every API key is bound to one tenant. Requests hit the tenant's API surface :

```
POST https://knowledge.asplenz.com/tnt-acme/v1/check
                                    ~~~~~~~
                                    tenant slug in path
```

Cross-tenant reads are impossible via API key ; they require a Platform admin session with explicit tenant scope.

## Errors

| Code | Meaning | Fix |
|---|---|---|
| 401 `missing_credentials` | No `X-API-Key` and no session cookie | Add the header |
| 401 `invalid_key` | Key format invalid or revoked | Rotate |
| 403 `tenant_mismatch` | Key belongs to a different tenant | Check the URL |
| 403 `principal_deactivated` | The principal was deactivated | Reactivate or re-issue |

## Related

- [/v1/check](/docs/api-reference/check) - deterministic verdict endpoint.
- [/v1/resolve](/docs/api-reference/resolve) - progressive verdict endpoint.
- [Four-actor trust model](/docs/concepts/four-actor-trust-model) - what the authenticated principal represents.
- [Multi-tenant setup](/docs/guides/multi-tenant-setup) - operating multiple tenants on one deployment.
