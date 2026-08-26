---
title: Rotate signing keys
description: Rotate the ES256 verdict-signing key with zero client changes and no downtime.
locale: en
kicker: Docs / Guides - Stable
---

The verdict-signing key rotates on a scheduled epoch (default annual) or on demand. Rotation is graceful : new signatures use the new `kid` immediately, old `kid` remains in JWKS so in-flight verdicts still verify.

## When to rotate

- **Scheduled** : yearly, or according to your tenant's compliance schedule.
- **Emergency** : suspected private key compromise.
- **Structural** : moving from deployment-wide to per-tenant keys (Option B -> Option C).

## Scheduled rotation (no compromise)

**Step 1 - Generate the new key.**

```bash
knowledge-admin verdict-signing rotate \
  --tenant tnt-acme \
  --new-epoch 2027-01 \
  --overlap-days 7
```

Behaviour :

- Generates a fresh ES256 private key.
- Adds it to the tenant's key set with `not_before = now`.
- Sets `not_after = now + overlap_days` on the previous key (it stays in JWKS for cold-storage verification but is not used to sign new verdicts).
- Reloads the signing key resolver.

**Step 2 - Wait for the overlap to drain.**

During overlap, both keys are in JWKS. New signatures use the new key ; verdicts issued in the overlap window under the old key remain verifiable.

Monitor with `mcp_proxy_jwks_refreshes_total` or the Knowledge admin dashboard.

**Step 3 - Verify.**

```bash
curl https://knowledge.asplenz.com/tnt-acme/v1/jwks | jq '.keys[] | {kid, not_before, not_after}'
```

You should see both keys. New verdicts inspected with `jwt-cli` or the runtime helper should carry the new `kid`.

**Step 4 - Done.**

After the overlap window, the old key is dormant (still in JWKS for historical verification). No client change required ; JWKS caches expire and re-fetch within 5 minutes by default.

## Emergency rotation (suspected compromise)

**Step 1 - Rotate now, zero overlap.**

```bash
knowledge-admin verdict-signing rotate \
  --tenant tnt-acme \
  --new-epoch 2026-08-emergency \
  --overlap-days 0 \
  --reason "suspected private-key compromise, incident IR-2026-08-42"
```

The previous key's `not_after` is set to `now` immediately.

**Step 2 - Force JWKS refresh at every PEP.**

If you cannot wait for cache TTL :

```bash
# For sidecar/shared proxies :
curl -X POST http://proxy:9091/admin/jwks/refresh

# For stdio proxies : restart the MCP client.
```

**Step 3 - Reject in-flight verdicts under the old key.**

Add a temporary rule at the PEP layer :

```python
if payload["signing_kid"].startswith("tnt-acme:2026-01"):
    raise EmergencyRotationRefuse("compromised key ; ignore verdicts")
```

Or, if you use `knowledge-runtime`, set the refusal in the client :

```python
client.forbid_kid("tnt-acme:2026-01")
```

**Step 4 - Post-mortem.**

Historical Consultations remain valid audit records even under a compromised key : the compromise is an operational fact, not a fact about the frozen policy state. The signed_verdict field on those Consultations should be marked as "signed under compromised key" in your audit surface.

## From Option B to Option C (per-tenant keys)

Deployment-wide keys today ; per-tenant is a non-breaking upgrade. Steps :

1. Enable per-tenant key generation : `knowledge-admin config set verdict_signing.mode=per_tenant`.
2. New tenants get their own key ; existing tenants continue on the shared key.
3. Optionally migrate existing tenants one at a time : `knowledge-admin verdict-signing migrate --tenant tnt-acme --generate-per-tenant`.

The resolver already supports both modes ; no client change required.

## Verify no downtime

Before rotating in production, rehearse on staging with a load test hitting `/check` continuously :

```bash
hey -z 60s -c 20 -H "X-API-Key: ak-..." \
  -m POST -T "application/json" \
  -d '{"action":"health.check","resource":"probe","scope":{}}' \
  https://knowledge.staging.asplenz.com/tnt-test/v1/check
```

While the test runs, execute the rotation. Zero 5xx errors expected.

## Related

- [Keys inventory](/docs/security-compliance/keys-inventory) - all four Knowledge keys.
- [/v1/jwks](/docs/api-reference/jwks) - JWKS endpoint contract.
- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - envelope + kid.
- [Emergency response](/docs/guides/emergency-response) - broader incident playbook.
