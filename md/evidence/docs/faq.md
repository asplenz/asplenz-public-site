# Frequently Asked Questions

## Is Evidence legally binding?

Evidence produces cryptographically signed records with tamper-evident properties. These records provide strong evidence of what was decided, by whom, and when. However, the legal weight of any record depends on the jurisdiction, the applicable legal framework, and the specific context in which it is presented.

Evidence does not claim to create legally binding documents. It provides a verifiable record that supports legal and regulatory proceedings. Organizations should consult legal counsel regarding the admissibility and evidentiary value of cryptographic proof in their jurisdiction.

## Can sealed decisions be modified?

No. Once a fact is sealed, it cannot be modified, replaced, or removed. This is enforced by the cryptographic hash chain: any change to a sealed fact would break the chain and invalidate the digital signature.

If a decision needs to be revised, the appropriate action is to seal a new fact (e.g., a cancellation of the original decision, or a new superseding decision). The original record remains intact, providing a complete and honest history.

## What happens if Evidence becomes unavailable?

If the Evidence service is temporarily unavailable, new facts cannot be sealed during the outage. However:

- All previously sealed facts remain intact and verifiable. Availability does not affect the integrity of existing records.
- Proof packages that have already been exported can still be verified offline using the public key.
- When service resumes, new facts can be sealed normally. The hash chain continues from the last sealed fact.

Evidence does not retroactively seal facts that occurred during an outage. If a decision was made during downtime, it can be sealed when service resumes, but the timestamp will reflect the actual seal time, not the time of the original decision.

## Who owns the data?

The organization that operates Evidence owns all data stored in the system. Sealed facts, proof packages, and configuration data belong to the organization.

Proof packages are self-contained and can be exported at any time. The organization is free to store, share, archive, or process proof packages according to its own policies.

## Can proofs be independently verified?

Yes. This is a core property of Evidence. Verification requires only the proof package and the public key. No connection to the Evidence system is needed.

Any party can verify a proof package:

- Auditors verifying regulatory compliance
- Legal teams examining records during discovery
- Regulators conducting examinations
- Counterparties in a dispute
- Automated compliance tools

The verification process checks the hash chain integrity and the digital signature. It can be performed on air-gapped systems with no network access.

## What happens if signing keys are rotated?

Key rotation is a normal operational procedure. When a signing key is rotated:

- New facts are signed with the new key
- Previously sealed facts remain valid under the key that was active at the time of sealing
- Each signature includes a `key_id` that identifies which key was used
- Proof packages include the key identifier, enabling verifiers to use the correct public key

Key rotation does not invalidate or affect any existing sealed records or proof packages.

## How long are proofs valid?

Proofs remain valid as long as the cryptographic algorithms (SHA-256 and Ed25519) are considered secure. Both algorithms are widely adopted, peer-reviewed, and currently have no known practical attacks.

- SHA-256 has been in use since 2001 and remains the standard for cryptographic hashing.
- Ed25519 is a modern signature algorithm adopted by OpenSSH, Signal, TLS 1.3, and WireGuard.

If either algorithm is deprecated in the future due to advances in cryptanalysis, migration procedures would be implemented to re-sign existing records under a stronger algorithm. The hash chain structure facilitates this migration without loss of integrity guarantees.

From a practical standpoint, proof packages exported today are expected to remain verifiable for decades.

## Can Evidence be used for healthcare decisions?

Yes. Evidence includes support for clinical decision governance, including clinical authorizations, protocol deviations, and post-decision tracking (follow-up assessments, adverse events). The sealed record provides an audit trail for patient safety and regulatory compliance in healthcare settings.

## Does Evidence replace our existing audit tools?

No. Evidence complements existing audit and compliance tools. It provides the cryptographic proof layer that existing tools lack: tamper-evident, independently verifiable records of what was decided.

Evidence does not perform audits, generate compliance reports, or evaluate policy adherence. It provides the raw, verifiable evidence that audit and compliance tools can consume.

## How does Evidence handle multi-tenant isolation?

Each organization (tenant) operates in a fully isolated context. Facts, streams, systems, decisions, and incidents belonging to one tenant are not accessible to another. Tenant isolation is enforced at the data layer, and the tenant identifier is included in the signed data of every sealed fact.

## What happens if we need to comply with a data deletion request?

Evidence's append-only design means that individual facts cannot be deleted from the hash chain without breaking its integrity. Organizations subject to data deletion requirements (e.g., GDPR right to erasure) should consider this when determining what data is included in sealed facts.

Best practice is to store personally identifiable information by reference (e.g., an anonymized identifier) rather than directly in the sealed payload. This allows the referenced data to be deleted from the source system while the sealed record retains its structural integrity.

Organizations should consult their data protection officer regarding the interaction between append-only proof systems and data deletion obligations.
