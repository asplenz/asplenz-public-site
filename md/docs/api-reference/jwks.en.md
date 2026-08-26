---
title: GET /v1/tenants/{slug}/jwks
description: JWKS endpoint for offline verification of signed verdicts.
locale: en
kicker: Docs / API reference - Stable
---

The JWKS (JSON Web Key Set) endpoint publishes the public keys a Policy Enforcement Point uses to verify signed verdicts. Per-tenant scoping so keys can rotate independently.

## Request

```
GET /v1/tenants/tnt-acme/jwks
```

No authentication required. JWKS endpoints are public by design (they publish public keys only).

## Response

```json
{
  "keys": [
    {
      "kid": "tnt-acme:2026-01",
      "kty": "EC",
      "crv": "P-256",
      "x": "Kk8H_..._9Yq",
      "y": "F5Zj4_..._P8w",
      "alg": "ES256",
      "use": "sig",
      "not_before": "2026-01-01T00:00:00Z",
      "not_after": null
    },
    {
      "kid": "tnt-acme:2025-07",
      "kty": "EC",
      "crv": "P-256",
      "x": "...",
      "y": "...",
      "alg": "ES256",
      "use": "sig",
      "not_before": "2025-07-01T00:00:00Z",
      "not_after": "2026-01-08T00:00:00Z"
    }
  ]
}
```

- `kid` uniquely identifies each key ; matches the `kid` in the JWS protected header.
- `not_before` / `not_after` bound the key's validity. Keys past their `not_after` continue to publish so historical verdicts remain verifiable.
- Old keys are retained forever (see rotation guide) so cold-storage audit works.

## Caching

**Client-side** : the `knowledge-runtime` Python SDK caches the JWKS response for 5 minutes by default. Configurable via `KnowledgeClient(jwks_cache_ttl_seconds=...)`.

**Server-side** : the response includes `Cache-Control: public, max-age=300, immutable` for the specific key set. When rotation happens, a new JWKS URL query parameter can bust the cache (`?v=2` convention).

## Cold-storage verification

To verify a signed verdict from years ago :

1. Extract the `kid` from the JWS protected header.
2. Fetch the archived JWKS (Knowledge preserves them forever).
3. Match the `kid` to a key in the set.
4. Verify the ES256 signature.
5. Optionally cross-check `iat` / `exp` for the time window - but past `exp` doesn't invalidate the historical evidence, only the "still valid to act on" property.

This works from cold storage without Knowledge being live, provided the JWKS was archived alongside the verdicts.

## When keys rotate

Two mechanisms :

- **Scheduled** : new key at each epoch (default : yearly). Old key kept in JWKS with `not_after` set. All new signatures use the new `kid`.
- **Emergency** : compromised key ; new key issued immediately, old key `not_after` set to "now" but retained for historical verification. In-flight signed verdicts under the old key are refused by policy at the PEP layer (see [Rotate signing keys](/docs/guides/rotate-signing-keys)).

## Errors

| Status | Code | Meaning |
|---|---|---|
| 404 | `tenant_not_found` | Slug does not exist |
| 500 | `no_keys_configured` | Tenant has no signing keys ; call the setup endpoint |

## Related

- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - envelope format the JWKS verifies.
- [Rotate signing keys](/docs/guides/rotate-signing-keys) - operational rotation guide.
- [`knowledge-runtime` Python](/docs/sdk-reference/knowledge-runtime-python) - built-in JWKS cache.
