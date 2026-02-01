# Security & Sovereignty

**Architecture for Trust**

**Audience:** RSSI / DSI / Security Architects / Compliance Officers

This document explains how Horizon's architecture ensures data integrity, tenant isolation, and supports sovereign deployment requirements.

---

## Append-Only Architecture

### Architectural Constraint, Not Policy

The inability to modify or delete sealed facts is not a configuration option or policy decision. It is an **architectural constraint** enforced at every layer.

| Operation | System Behavior |
|-----------|-----------------|
| Create fact | Allowed |
| Read fact | Allowed |
| Update fact | No mechanism exists |
| Delete fact | No mechanism exists |

There is no admin override, no maintenance mode, no "soft delete". The append-only property is intrinsic to the system design.

### Hash Chain Enforcement

Every fact is cryptographically linked to its predecessor:

```
Fact N:
  fact_hash = hash(canonical representation of Fact N)
  prev_hash = fact_hash of Fact N-1
```

Any modification to a fact:
1. Changes its `fact_hash`
2. Breaks the `prev_hash` link from the next fact
3. Is immediately detectable by chain verification

This creates mathematical proof of integrity, not just access control.

---

## Tenant Isolation

### Strict Scoping

All data is scoped by `tenant_id` at the architectural level:

| Resource | Isolation |
|----------|-----------|
| Streams | Tenant-scoped |
| Facts | Tenant-scoped |
| Hash chains | Independent per tenant |
| Proof bundles | Tenant-scoped |
| API queries | Filtered by tenant |

### No Cross-Tenant Access

Tenant A cannot:
- List Tenant B's streams
- Read Tenant B's facts
- Verify Tenant B's chains
- Access Tenant B's bundles

This isolation is enforced at the data layer, not just the API layer.

### Independent Hash Chains

Each tenant's streams maintain independent hash chains. A compromise or corruption in one tenant's data has no effect on other tenants' chain integrity.

---

## Privacy by Design

### Opaque Business Data

The `custom_payload` field is opaque to Horizon:

| Aspect | Horizon's Role |
|--------|----------------|
| Schema | Not enforced |
| Validation | Not performed |
| Indexing | Not indexed |
| Interpretation | Not attempted |

Horizon stores your payload exactly as provided, without parsing, analyzing, or extracting information from it.

### Hash-Only File References

When files are attached (via Email channel), Horizon stores only:

```json
{
  "attachments_manifest": [
    {
      "filename": "contract.pdf",
      "sha256": "9f86d081884c7d659a2feaa0...",
      "size_bytes": 48213,
      "content_type": "application/pdf"
    }
  ]
}
```

The file content is **never stored** by Horizon. Only the cryptographic hash is sealed, proving that a specific file existed at seal time.

### Minimal Metadata

Horizon stores only what is necessary for proof:

| Stored | Not Stored |
|--------|------------|
| `tenant_id` | IP addresses |
| `actor` | Browser fingerprints |
| `sealed_at` | Session data |
| `custom_payload` (opaque) | Derived analytics |
| Hash chain links | User behavior patterns |

---

## Cryptographic Foundation

### Hash Algorithm

Facts are hashed using SHA-256 applied to a canonical JSON representation:
- Deterministic key ordering
- Consistent whitespace handling
- Reproducible across implementations

### Bundle Signatures

Proof bundles are signed using Ed25519:
- 256-bit security level
- Fast verification
- Small signature size (64 bytes)
- No certificate infrastructure required

### Verification Independence

Bundles are self-contained. Verification requires only:
1. The bundle itself
2. Horizon's public key

No network access to Horizon is required for verification.

---

## Proof Ownership

### Your Proof, Your Property

Once a proof bundle is exported, it becomes your autonomous property:

| Aspect | Implication |
|--------|-------------|
| **No dependency on Horizon** | Verify without network access to Horizon |
| **Portable evidence** | Bundle works in any jurisdiction, any system |
| **Eternal validity** | Proof remains valid even if Horizon ceases to exist |
| **Third-party verifiable** | Any auditor, court, or regulator can verify independently |

### What the Bundle Contains

The bundle is self-sufficient for verification:
- All sealed facts with their hashes
- The complete hash chain linkage
- Horizon's cryptographic signature
- Timestamp attestations

### The Sovereignty Guarantee

> **Horizon is a witness that can be dismissed after testimony.**

Once you export a proof bundle:
- You owe nothing to Horizon
- You need nothing from Horizon
- Your proof stands alone

The proof becomes **autonomous**, **sovereign**, and **permanently yours**.

---

## Deployment Options

Horizon supports multiple deployment models to meet sovereignty requirements:

### SaaS

| Aspect | Description |
|--------|-------------|
| Hosting | Horizon-managed infrastructure |
| Updates | Automatic |
| Compliance | SOC 2, GDPR-ready |
| Best for | Standard enterprise requirements |

### On-Premise

| Aspect | Description |
|--------|-------------|
| Hosting | Your infrastructure |
| Control | Full infrastructure control |
| Data residency | Your jurisdiction |
| Best for | Regulated industries, data localization |

### Air-Gapped

| Aspect | Description |
|--------|-------------|
| Network | No external connectivity |
| Updates | Manual deployment packages |
| Verification | Fully offline capable |
| Best for | Defense, critical infrastructure, sovereign sectors |

All deployment options provide identical cryptographic guarantees.

---

## Compliance Positioning

### What Horizon Provides

| Capability | Compliance Value |
|------------|------------------|
| Immutable audit trail | Evidence preservation |
| Authoritative timestamps | Temporal proof |
| Tamper detection | Integrity assurance |
| Signed exports | Portable evidence |
| Tenant isolation | Data segregation |

### What Horizon Does Not Replace

| Your Responsibility | Example |
|---------------------|---------|
| Access management | Who can seal facts |
| Authentication | Identity verification |
| Business validation | Decision quality |
| Process controls | Approval workflows |
| Regulatory interpretation | Jurisdiction-specific rules |

Horizon is infrastructure. Your compliance program defines how to use it.

---

## Threat Model

### Protected Against

| Threat | Protection |
|--------|------------|
| Post-facto modification | Hash chain breaks on any change |
| Backdating | Authoritative timestamps assigned by Horizon |
| Evidence deletion | Append-only architecture |
| Cross-tenant leakage | Strict tenant isolation |
| Bundle forgery | Ed25519 signatures |

### Not Protected Against

| Threat | Mitigation |
|--------|------------|
| False declarations | Your process controls |
| Unauthorized sealing | Your access management |
| Key compromise | Key rotation procedures |
| Complete system destruction | Backup and DR procedures |

Horizon provides the cryptographic foundation. Operational security remains your responsibility.

---

## Summary

| Property | Implementation |
|----------|----------------|
| Immutability | Architectural (no update/delete mechanism) |
| Integrity | SHA-256 hash chains |
| Authenticity | Ed25519 bundle signatures |
| Isolation | Tenant-scoped data and chains |
| Privacy | Opaque payloads, hash-only files |
| Sovereignty | SaaS, on-premise, or air-gapped |

Horizon is designed for environments where proof matters: regulated industries, critical decisions, and sovereign requirements.

---

## Next

- [Proof Semantics](../technical/proof-semantics.md) — What sealed facts prove
- [Auditor's Guide](../compliance/auditor-guide.md) — Independent verification
- [Guarantees](../technical/guarantees.md) — Technical guarantee details
