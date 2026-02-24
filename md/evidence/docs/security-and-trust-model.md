# Security and Trust Model

## Trust assumptions

Asplenz Evidence operates under the following trust assumptions:

- **The sealing service is trusted to apply correct timestamps.** Facts are timestamped at seal time by the Evidence system. The accuracy of these timestamps depends on the correct operation of the sealing service.

- **The signing key is protected by operational controls.** The digital signatures are only as trustworthy as the protection of the signing key. Key management follows industry practices for secure key lifecycle management.

- **The hash function (SHA-256) and signature algorithm (Ed25519) are cryptographically sound.** These are widely adopted, peer-reviewed algorithms with no known practical attacks. Should either be compromised in the future, migration procedures would be implemented.

- **Clients are responsible for the accuracy of submitted content.** Evidence seals what it receives. It does not validate whether the content is truthful, complete, or appropriate. The system guarantees integrity of the record, not accuracy of the information.

## Integrity guarantees

Evidence provides the following integrity guarantees for sealed records:

- **Tamper evidence**: Any modification to a sealed fact is detectable through hash chain verification and signature validation.

- **Append-only history**: Facts can only be added to a stream, never modified or removed. The cryptographic chain enforces this property.

- **Temporal ordering**: The hash chain establishes a strict ordering of facts within a stream. The order cannot be altered without breaking the chain.

- **Attribution preservation**: The actor identity associated with each fact is part of the signed data and cannot be changed after sealing.

- **Independent verifiability**: Any party with the public key can verify a proof artifact without trusting Evidence or any intermediary.

## What Evidence protects against

- **Record tampering**: Modifying any sealed fact breaks the hash chain and invalidates the signature.

- **Record deletion**: Removing a fact from the chain creates a gap that is detectable during verification.

- **Record reordering**: Changing the sequence of facts breaks the hash chain links.

- **Backdating**: Timestamps are assigned at seal time and included in the signed data. They cannot be retroactively changed.

- **Repudiation of authorship**: The actor identity is cryptographically bound to the fact. An actor cannot deny having submitted a fact that bears their identity and a valid signature.

- **Silent modification**: Because the hash chain links every fact to its predecessors, any change to historical records is immediately visible during verification.

## What Evidence does not protect against

- **False declarations**: If an authorized user submits false information, Evidence will seal it faithfully. Evidence proves that a claim was made; it does not evaluate whether the claim is true.

- **Unauthorized access at the application layer**: Evidence's integrity guarantees apply to sealed records. Access control, authentication, and authorization are handled by the platform layer. If an unauthorized party gains access to the API, they could submit facts under their assumed identity.

- **Loss of availability**: While designed for resilience, Evidence may be temporarily unavailable. During an outage, facts cannot be sealed. This is a liveness concern, not an integrity concern: no sealed records are affected by an outage.

- **Compromise of the signing key**: If the signing key is compromised, an attacker could produce facts that appear authentic. Key compromise is addressed through key rotation and revocation procedures.

- **Content confidentiality**: Evidence is not an encryption service. Sealed facts are signed but not encrypted. Access controls determine who can read the content; cryptographic signing ensures that the content has not been modified.

## Key lifecycle

Evidence uses a managed key lifecycle:

- Signing keys have identifiers (`key_id`) that are included in every signature, enabling key rotation without invalidating historical proofs.
- When a key is rotated, new facts are signed with the new key. Historical facts remain valid under the key that was active at the time of sealing.
- Key rotation does not affect the validity of existing proof artifacts. Each artifact references the specific key used for signing.

## Retention

- Sealed facts are retained for the duration configured by the organization's retention policy.
- Proof artifacts (bundles) can be exported and archived independently of the Evidence system.
- The append-only nature of streams means that no fact is deleted during normal operation. Retention policies, if applied, operate at the stream level and are logged.
- Organizations requiring long-term retention (regulatory or legal) should export proof packages to independent archival storage.
