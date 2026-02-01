# Guarantees

Horizon provides cryptographic guarantees that transform business decisions into verifiable proof.

---

## Storage Guarantees

### Append-Only

Facts cannot be modified, updated, or deleted after sealing.

| Operation | Allowed |
|-----------|---------|
| Create new fact | ✅ Yes |
| Read existing fact | ✅ Yes |
| Update existing fact | ❌ No |
| Delete existing fact | ❌ No |

This is not a policy — it's an architectural constraint. The system has no mechanism to alter sealed facts.

### Immutable Timeline

Each stream maintains a strict chronological order:

```
Fact 1 → Fact 2 → Fact 3 → Fact 4 → ...
```

Facts cannot be inserted between existing facts. New facts are always appended to the end of the chain.

---

## Integrity Guarantees

### Hash Chain

Every fact is cryptographically linked to its predecessor:

```
Fact N:
  - fact_hash = hash(content of Fact N)
  - prev_hash = fact_hash of Fact N-1
```

This creates an unbreakable chain. If any fact is modified:
- Its `fact_hash` changes
- The next fact's `prev_hash` no longer matches
- The chain is broken and tampering is detected

### Tamper Detection

Horizon can verify the integrity of any stream on demand:

```http
POST /streams/{stream_id}/verify
```

Response:
```json
{
  "valid": true,
  "facts_verified": 47
}
```

If tampering is detected:
```json
{
  "valid": false,
  "facts_verified": 23,
  "error": "Hash mismatch at fact-01HRX8ABC"
}
```

---

## Timestamp Guarantees

### Authoritative Timestamping

The `sealed_at` timestamp is assigned by Horizon, not by the client.

| Timestamp | Source | Trust Level |
|-----------|--------|-------------|
| `sealed_at` | Horizon | Authoritative |
| Client-provided timestamps | Your system | Informational only |

This prevents backdating. You cannot seal a fact and claim it was sealed yesterday.

### Ordering Proof

The combination of hash chain and authoritative timestamps proves:
1. **Fact A was sealed before Fact B** (chain order)
2. **Fact A was sealed at time T** (authoritative timestamp)
3. **Nothing was inserted between A and B** (hash chain integrity)

---

## Signature Guarantees

### Signed Proof Bundles

When you create a proof bundle, Horizon signs it cryptographically:

```json
{
  "bundle_id": "bundle-01HRX8XYZ",
  "facts_manifest": ["fact-01...", "fact-02...", "fact-03..."],
  "head_hash": "abc123...",
  "signature": "...",
  "signature_alg": "ed25519"
}
```

The signature proves:
- The bundle was created by Horizon (authenticity)
- The bundle has not been modified since creation (integrity)
- The facts listed were in the stream at bundle time (snapshot validity)

### Independent Verification

Bundles are self-contained. An auditor can verify a bundle without access to Horizon:

1. Check the signature against Horizon's public key
2. Verify that `head_hash` matches the computed hash
3. Confirm all facts in `facts_manifest` chain correctly

---

## Tenant Isolation

### Multi-Tenancy

Facts are scoped by `tenant_id`. Tenants cannot access each other's data.

| Guarantee | Description |
|-----------|-------------|
| Data isolation | Tenant A cannot read Tenant B's facts |
| Query isolation | Tenant A cannot list Tenant B's streams |
| Hash isolation | Each tenant has independent hash chains |

---

## What Horizon Does NOT Guarantee

| Not Guaranteed | Explanation |
|----------------|-------------|
| **Truth** | Horizon proves a fact was recorded, not that it's true |
| **Validity** | Horizon doesn't validate business rules |
| **Completeness** | Horizon doesn't know if facts are missing |
| **Interpretation** | Horizon doesn't understand your payload |

Horizon is a **witness**, not a **judge**. It records what you declare, exactly as you declare it.

---

## Universal Across Channels

All guarantees apply regardless of ingestion channel:

| Channel | Append-Only | Hash Chain | Signed Bundles | Timestamp Authority |
|---------|-------------|------------|----------------|---------------------|
| [API](channels/api.md) | ✅ | ✅ | ✅ | ✅ |
| [Email](channels/email.md) | ✅ | ✅ | ✅ | ✅ |

The [Webapp](channels/webapp.md) is a viewer for browsing and verifying facts — sealing is done via API or Email.

A fact sealed via email carries the same cryptographic weight as one sealed via API.

---

## Next

- [Proof Semantics](proof-semantics.md) — What sealed facts prove and don't prove
- [Auditor's Guide](../compliance/auditor-guide.md) — Independent verification protocol
- [Security & Sovereignty](../security/sovereignty.md) — Architecture and deployment
- [API Reference](api-reference.md) — How to seal and verify facts
