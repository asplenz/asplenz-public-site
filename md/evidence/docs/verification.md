# Verification

## Overview

Verification is the process of confirming that a proof artifact produced by Evidence is intact and authentic. It can be performed by any party holding the public key, without trusting Evidence or any intermediary.

## How to verify a proof artifact

A proof artifact (bundle) contains:

- A list of sealed facts with their hashes and chain links
- A manifest listing all fact identifiers in order
- A digital signature covering the bundle
- The key identifier used for signing

Verification proceeds in three steps:

### Step 1: Verify the hash chain

For each fact in the bundle, starting from the first:

- Recompute the SHA-256 hash of the fact's canonical representation
- Confirm that the computed hash matches the stored `fact_hash`
- Confirm that the fact's `prev_hash` matches the `fact_hash` of the preceding fact
- For the first fact in the stream, confirm that `prev_hash` is null

If any hash does not match, the chain has been tampered with.

### Step 2: Verify the bundle signature

Using the public key corresponding to the `key_id` in the bundle:

- Reconstruct the signed payload from the bundle metadata and manifest
- Verify the Ed25519 signature against this payload
- Confirm that the signature is valid

If the signature is invalid, the bundle has been modified after signing.

### Step 3: Verify completeness

- Confirm that the facts manifest matches the actual facts included in the bundle
- Confirm that the chain is continuous (no gaps between facts)
- Confirm that the `head_fact_id` in the bundle matches the last fact in the chain

## What verification confirms

A successful verification confirms:

- **Integrity**: No fact in the bundle has been modified since sealing
- **Completeness**: All facts in the chain are present, with no gaps or omissions
- **Ordering**: Facts are in the correct chronological order as originally sealed
- **Authenticity**: The bundle was signed by a key controlled by the Evidence system
- **Attribution**: The actor identity recorded in each fact has not been altered

## Offline verification

Proof artifacts are self-contained. Verification does not require a connection to Evidence or any external service. The only requirement is the public key corresponding to the `key_id` in the bundle.

This means that:

- Auditors can verify proof packages on air-gapped systems
- Regulators can verify without granting access to internal systems
- Legal teams can verify independently during discovery
- Archives can be verified years after creation

## Audit scenarios

### Regulatory examination

A regulator requests evidence of decision-making for a specific system. The organization exports a proof package covering the relevant time period and provides it to the regulator along with the public key. The regulator verifies independently.

### Internal audit

An internal audit team reviews incident response procedures. They retrieve proof packages for recent incidents and verify that all required steps (reporting, investigation, remediation, resolution) were completed in the correct order with proper authorization.

### Legal discovery

During litigation, a party requests proof of when a specific decision was made and by whom. The proof package provides a cryptographically verifiable answer: the timestamp and actor identity are part of the signed record.

### Dispute resolution

Two parties disagree about what was decided. The proof package provides an impartial, tamper-evident record of the decision as it was originally sealed.

## What invalid proof means

If verification fails, one or more of the following has occurred:

- **Hash chain break**: A fact has been modified, inserted, or removed after sealing. The computed hash does not match the stored hash, or the chain links are inconsistent.
- **Signature failure**: The bundle has been modified after signing, or the signature was not produced by the expected key.
- **Missing facts**: The manifest references facts that are not present in the bundle, indicating an incomplete or truncated export.

An invalid proof does not necessarily indicate malicious tampering. It may result from data corruption, incomplete export, or transmission errors. However, an invalid proof cannot be relied upon as evidence of what occurred.

## Example verification result

### Successful verification

```
Verification result: VALID

Bundle: bnd-a1b2c3d4e5f6
Stream: ai-system-sys-abc123def456
Facts verified: 5 of 5
Chain integrity: intact
Signature: valid (key: evidence-prod-2025-01)
Time range: 2025-02-10T10:00:00Z to 2025-02-24T14:30:00Z
```

### Failed verification

```
Verification result: INVALID

Bundle: bnd-a1b2c3d4e5f6
Stream: ai-system-sys-abc123def456
Facts verified: 3 of 5
Chain integrity: BROKEN at fact-4
  Expected prev_hash: sha256:8a3f...
  Found prev_hash: sha256:c71b...
Signature: not checked (chain integrity failure)
```
