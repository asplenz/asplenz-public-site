# Auditor's Guide

**Independent Verification Protocol**

**Audience:** External Auditors / Internal Audit / Compliance Officers / Forensic Analysts

This document provides a complete protocol for independently verifying Horizon proof artifacts without relying on Horizon's systems.

---

## Verification Principles

### Independence

All verification can be performed:
- Without network access to Horizon
- Using standard cryptographic libraries
- By any party with the proof bundle and public key

### What You Can Verify

| Verification | Proves |
|--------------|--------|
| Bundle signature | Bundle was created by Horizon and is unmodified |
| Hash chain | No facts have been modified, deleted, or reordered |
| Fact hashes | Each fact's content matches its recorded hash |
| File integrity | Attached files match their sealed hashes |

### What Verification Does NOT Prove

| Not Proven | Explanation |
|------------|-------------|
| Truth of content | Facts are declarations, not verified truths |
| Completeness | There may be facts that were never sealed |
| Actor identity | `actor` is attribution, not authentication |

See [Proof Semantics](../technical/proof-semantics.md) for semantic boundaries.

---

## Proof Bundle Anatomy

A proof bundle is a signed snapshot of a stream's state at bundle creation time.

### Bundle Structure

```json
{
  "bundle_id": "bundle-01HRX8XYZ",
  "stream_id": "incident-2024-01-26",
  "tenant_id": "acme-corp",
  "version": 3,
  "facts_manifest": [
    "fact-01HRX7A1BC",
    "fact-01HRX7B2CD",
    "fact-01HRX7C3DE"
  ],
  "head_fact_id": "fact-01HRX7C3DE",
  "head_hash": "a1b2c3d4e5f6...",
  "created_at_ms": 1706371200000,
  "created_at_iso": "2024-01-27T12:00:00.000Z",
  "signature": "base64-encoded-ed25519-signature",
  "signature_alg": "ed25519"
}
```

### Field Definitions

| Field | Description |
|-------|-------------|
| `bundle_id` | Unique identifier for this bundle |
| `stream_id` | The stream this bundle represents |
| `tenant_id` | Tenant scope |
| `version` | Incremental bundle version for this stream |
| `facts_manifest` | Ordered list of fact IDs included |
| `head_fact_id` | The most recent fact at bundle time |
| `head_hash` | Hash of the head fact (chain tip) |
| `created_at_ms` | Bundle creation timestamp (milliseconds) |
| `signature` | Ed25519 signature over canonical bundle content |
| `signature_alg` | Signature algorithm identifier |

---

## Verification Protocol

### Step 1: Verify Bundle Signature

**Purpose:** Confirm the bundle was created by Horizon and has not been modified.

**Process:**

1. Extract the signature from the bundle
2. Construct the canonical signing payload (bundle without signature fields)
3. Verify using Horizon's Ed25519 public key

**Canonical Payload Construction:**

```python
import json

def canonical_payload(bundle: dict) -> bytes:
    # Remove signature fields
    payload = {k: v for k, v in bundle.items()
               if k not in ('signature', 'signature_alg')}
    # Canonical JSON: sorted keys, no extra whitespace
    return json.dumps(payload, sort_keys=True, separators=(',', ':')).encode('utf-8')
```

**Signature Verification:**

```python
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey
import base64

def verify_bundle_signature(bundle: dict, public_key_bytes: bytes) -> bool:
    payload = canonical_payload(bundle)
    signature = base64.b64decode(bundle['signature'])

    public_key = Ed25519PublicKey.from_public_bytes(public_key_bytes)
    try:
        public_key.verify(signature, payload)
        return True
    except Exception:
        return False
```

**Expected Result:** Verification succeeds if bundle is authentic and unmodified.

---

### Step 2: Retrieve and Verify Facts

**Purpose:** Confirm each fact in the manifest exists and its hash is correct.

**Process:**

For each fact in `facts_manifest`:

1. Retrieve the fact (from bundle export or API)
2. Compute the expected hash from fact content
3. Compare with the stored `fact_hash`

**Fact Hash Computation:**

```python
import hashlib
import json

def compute_fact_hash(fact: dict) -> str:
    # Fields included in hash computation
    hashable = {
        'stream_id': fact['stream_id'],
        'tenant_id': fact['tenant_id'],
        'actor': fact['actor'],
        'sealed_at_ms': fact['sealed_at_ms'],
        'custom_payload': fact['custom_payload'],
        'prev_hash': fact['prev_hash'],
        'client_ref': fact.get('client_ref'),
        'attachments_manifest': fact.get('attachments_manifest')
    }
    # Remove None values
    hashable = {k: v for k, v in hashable.items() if v is not None}

    canonical = json.dumps(hashable, sort_keys=True, separators=(',', ':')).encode('utf-8')
    return hashlib.sha256(canonical).hexdigest()
```

**Verification:**

```python
def verify_fact_hash(fact: dict) -> bool:
    computed = compute_fact_hash(fact)
    return computed == fact['fact_hash']
```

---

### Step 3: Verify Chain Continuity

**Purpose:** Confirm the hash chain is unbroken from first fact to head.

**Process:**

1. Order facts by sequence (first to last)
2. Verify each fact's `prev_hash` matches the previous fact's `fact_hash`
3. Verify the first fact has `prev_hash` of `None` or genesis value

**Chain Verification:**

```python
def verify_chain(facts: list[dict]) -> tuple[bool, str]:
    """
    Verify hash chain continuity.
    Returns (valid, message).
    """
    if not facts:
        return True, "Empty chain"

    # First fact should have no previous
    if facts[0].get('prev_hash') is not None:
        return False, f"First fact {facts[0]['fact_id']} has unexpected prev_hash"

    # Verify each subsequent link
    for i in range(1, len(facts)):
        expected_prev = facts[i-1]['fact_hash']
        actual_prev = facts[i]['prev_hash']

        if actual_prev != expected_prev:
            return False, f"Chain break at {facts[i]['fact_id']}: expected prev_hash {expected_prev}, got {actual_prev}"

    return True, f"Valid chain of {len(facts)} facts"
```

---

### Step 4: Verify Head Hash

**Purpose:** Confirm the bundle's `head_hash` matches the actual head fact.

**Process:**

```python
def verify_head_hash(bundle: dict, facts: list[dict]) -> bool:
    if not facts:
        return bundle.get('head_hash') is None

    head_fact = facts[-1]  # Last fact in chain
    return bundle['head_hash'] == head_fact['fact_hash']
```

---

## File Integrity Verification

When facts include file references, verify the files match their sealed hashes.

### Attachments Manifest

```json
{
  "attachments_manifest": [
    {
      "filename": "evidence.pdf",
      "sha256": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
      "size_bytes": 48213,
      "content_type": "application/pdf"
    }
  ]
}
```

### File Verification

```python
import hashlib

def verify_file(file_path: str, expected_hash: str) -> bool:
    """Verify a file matches its sealed hash."""
    sha256 = hashlib.sha256()
    with open(file_path, 'rb') as f:
        for chunk in iter(lambda: f.read(8192), b''):
            sha256.update(chunk)
    return sha256.hexdigest() == expected_hash
```

**Verification proves:** This exact file existed at seal time.

**Verification does NOT prove:** The file's contents are accurate, complete, or authentic.

---

## Complete Verification Procedure

### Prerequisites

- Proof bundle (JSON)
- Facts data (from bundle export or API)
- Horizon's public key
- (Optional) Referenced files

### Procedure

```python
def full_verification(bundle: dict, facts: list[dict], public_key: bytes) -> dict:
    results = {
        'bundle_signature': False,
        'fact_hashes': False,
        'chain_continuity': False,
        'head_hash': False,
        'overall': False,
        'errors': []
    }

    # Step 1: Bundle signature
    if verify_bundle_signature(bundle, public_key):
        results['bundle_signature'] = True
    else:
        results['errors'].append("Bundle signature verification failed")

    # Step 2: Fact hashes
    all_hashes_valid = True
    for fact in facts:
        if not verify_fact_hash(fact):
            all_hashes_valid = False
            results['errors'].append(f"Hash mismatch for {fact['fact_id']}")
    results['fact_hashes'] = all_hashes_valid

    # Step 3: Chain continuity
    chain_valid, chain_msg = verify_chain(facts)
    results['chain_continuity'] = chain_valid
    if not chain_valid:
        results['errors'].append(chain_msg)

    # Step 4: Head hash
    if verify_head_hash(bundle, facts):
        results['head_hash'] = True
    else:
        results['errors'].append("Head hash mismatch")

    # Overall result
    results['overall'] = all([
        results['bundle_signature'],
        results['fact_hashes'],
        results['chain_continuity'],
        results['head_hash']
    ])

    return results
```

---

## Verification via Webapp

For non-technical verification, use the Horizon webapp:

1. Navigate to the stream
2. Click **Verify Chain**
3. Result shows: `Valid (N facts verified)` or error details

See [Webapp Channel](../technical/channels/webapp.md) for details.

---

## Verification via API

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

Or if tampering detected:
```json
{
  "valid": false,
  "facts_verified": 23,
  "error": "Hash mismatch at fact-01HRX8ABC"
}
```

---

## Audit Checklist

| Check | Method | Expected Result |
|-------|--------|-----------------|
| Bundle signature valid | Cryptographic verification | Signature verifies |
| All fact hashes match | Recompute and compare | All hashes match |
| Chain unbroken | Verify prev_hash links | No breaks |
| Head hash correct | Compare bundle to chain tip | Matches |
| Files match manifests | SHA-256 verification | Hashes match |
| Timestamps plausible | Review sealed_at values | Chronological order |
| Actor attribution recorded | Review actor fields | Present on all facts |

---

## Obtaining Horizon's Public Key

For signature verification, you need Horizon's Ed25519 public key.

| Deployment | Key Location |
|------------|--------------|
| SaaS | Published at `https://horizon.example.com/.well-known/horizon-public-key` |
| On-Premise | Provided during deployment |
| Air-Gapped | Delivered via secure channel |

---

## Reporting

### Verification Report Template

```
HORIZON CHAIN VERIFICATION REPORT
=================================
Date: [verification date]
Auditor: [name]
Stream: [stream_id]
Bundle: [bundle_id]

VERIFICATION RESULTS
--------------------
Bundle Signature: [PASS/FAIL]
Fact Hashes: [PASS/FAIL] ([N] facts)
Chain Continuity: [PASS/FAIL]
Head Hash: [PASS/FAIL]

OVERALL: [VALID/INVALID]

OBSERVATIONS
------------
[Any notes or anomalies]

CONCLUSION
----------
[Auditor's conclusion]
```

---

## Incomplete or Partial Bundles

A proof bundle reflects the stream up to a specific point in time. The absence of later facts:

| Observation | Interpretation |
|-------------|----------------|
| Bundle ends at fact N | Stream state at bundle time |
| No facts after timestamp T | Does not indicate success, failure, or abandonment |
| Fewer facts than expected | Verification does not infer completeness |

A bundle proves what was sealed up to a point. It cannot prove what was not sealed.

---

## Key Management and Trust Assumptions

### What Verification Assumes

| Assumption | Description |
|------------|-------------|
| Key authenticity | The public key is genuinely Horizon's |
| Key distribution | The key was obtained through a trusted channel |
| Key validity | The key was valid at bundle creation time |

### What Verification Does NOT Assess

| Out of Scope | Reason |
|--------------|--------|
| Key governance | How Horizon manages its signing keys |
| Operational security | Horizon's internal security posture |
| Client security | How your systems protect sealed data |

Verification establishes cryptographic integrity given a trusted public key. Key trust is a separate concern.

---

## Document Stability

This guide defines the stable verification semantics of Horizon proof bundles.

| Guarantee | Commitment |
|-----------|------------|
| Verification protocol | Will not change in breaking ways |
| Bundle structure | Backward compatible evolution only |
| Hash algorithms | SHA-256, with versioned migration if needed |
| Signature algorithm | Ed25519, with versioned migration if needed |

Any future evolution of Horizon will remain consistent with the verification guarantees described here.

---

## Next

- [Guarantees](../technical/guarantees.md) — Technical guarantee details
- [Proof Semantics](../technical/proof-semantics.md) — What sealed facts prove
- [Security & Sovereignty](../security/sovereignty.md) — Architecture overview
