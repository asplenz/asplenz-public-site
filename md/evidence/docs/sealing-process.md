# Sealing Process

## Overview

When a decision, approval, incident, or any other significant event is submitted to Evidence, it undergoes a sealing process that produces a cryptographically signed, hash-chained record. This document explains what happens during sealing, what guarantees are provided, and what limitations apply.

## What happens when a fact is sealed

1. **Canonicalization**: The submitted data is converted into a deterministic JSON representation. Field ordering, whitespace, and encoding are normalized so that the same logical content always produces the same byte sequence.

2. **Hash computation**: A SHA-256 hash is computed over the canonical representation. This hash uniquely identifies the content of the fact.

3. **Chain linking**: The hash of the previous fact in the stream is included in the current fact. This creates a cryptographic chain: modifying any earlier fact would change its hash, which would invalidate every subsequent fact.

4. **Timestamping**: The system assigns a timestamp at the moment of sealing. This timestamp is part of the signed data and cannot be altered retroactively.

5. **Signing**: An Ed25519 digital signature is applied to the canonical representation. The signature proves that the fact was produced by the Evidence system and has not been modified.

6. **Storage**: The sealed fact, its hash, the chain link, and the signature are stored persistently.

## What is stored

For each sealed fact, Evidence stores:

- The full content of the fact (event type, actor, payload)
- The SHA-256 hash of the canonical representation
- The hash of the previous fact in the stream (or null for the first fact)
- The Ed25519 signature
- The key identifier used for signing
- The timestamp of sealing
- The stream identifier

## What is signed

The signature covers the **canonical representation** of the fact, which includes:

- The fact identifier
- The stream identifier
- The tenant identifier
- The actor identity (email or agent identifier)
- The timestamp
- The custom payload (the decision content, approval details, etc.)
- The hash of the previous fact in the chain

All of these fields are included in the signed data. Modifying any field invalidates the signature.

## Determinism

The sealing process is deterministic: given the same input data and the same position in the chain, the process always produces the same hash. This is essential for verification.

- Field ordering in JSON is fixed (not dependent on language or library)
- String encoding is normalized to UTF-8
- Numeric representations are standardized
- Null values are handled consistently

This determinism means that any party can independently recompute the hash from the original data and confirm it matches.

## What guarantees are provided

**Integrity**: Any modification to a sealed fact is detectable. Changing even a single character in the payload, timestamp, or actor identity would produce a different hash, breaking the chain and invalidating the signature.

**Ordering**: Facts within a stream are cryptographically ordered. The hash chain proves that fact N was sealed after fact N-1. It is not possible to insert, reorder, or remove facts without detection.

**Attribution**: The actor identity (who performed the action) is included in the signed data. It cannot be altered after sealing.

**Timestamping**: The timestamp is assigned by Evidence at seal time and included in the signed data. It cannot be backdated or modified.

**Non-repudiation**: The combination of actor identity, timestamp, and digital signature provides evidence that a specific action was recorded at a specific time. This record can be presented to third parties for independent verification.

## What guarantees are NOT provided

**Evidence does not guarantee the truthfulness of the content**. If a user submits false information, Evidence will faithfully seal it. Evidence proves that a specific claim was made by a specific actor at a specific time. It does not evaluate whether the claim is accurate.

**Evidence does not guarantee real-time availability**. While the system is designed for high availability, it is possible for the sealing service to be temporarily unavailable. Facts submitted during an outage will be sealed when service resumes.

**Evidence does not guarantee legal enforceability**. Cryptographic proof is a strong form of evidence, but its legal weight depends on jurisdiction, context, and applicable regulations. Organizations should consult legal counsel regarding the admissibility and weight of cryptographic proof in their specific context.

**Evidence does not prevent unauthorized access to the system**. The sealing process guarantees integrity of records, not access control. Authentication and authorization are separate concerns handled by the platform layer.

## Chain integrity

The hash chain provides a form of collective integrity: the validity of the most recent fact in a stream implicitly validates every preceding fact. To verify the entire history of a stream, it is sufficient to:

1. Verify the signature on the most recent bundle
2. Walk the chain backward, confirming that each fact's `prev_hash` matches the computed hash of the preceding fact
3. Confirm that the first fact has a null `prev_hash`

If any link in the chain is broken, the entire chain from that point forward is invalidated.
