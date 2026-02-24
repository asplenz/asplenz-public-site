export const evidenceDocs = {
  'getting-started': {
    title: 'Getting Started with Asplenz Evidence',
    content: `
## What is Asplenz Evidence?

Asplenz Evidence is a cryptographic proof infrastructure for critical decisions. It seals decisions, approvals, incidents, and evaluations at the moment they occur, producing tamper-evident records that can be independently verified at any future point.

Evidence does not make decisions, enforce policies, or manage workflows. It is a witness. It records what was decided, by whom, and when, and guarantees that this record cannot be altered after the fact.

## What problem does it solve?

In regulated environments, critical decisions are often reconstructed weeks or months later from fragmented sources: emails, meeting notes, verbal accounts, and audit logs of varying reliability. When regulators, auditors, or legal teams need to understand what happened, the available record is frequently incomplete, inconsistent, or contested.

Evidence eliminates this problem by producing a cryptographically signed proof at the exact moment a decision is declared. The proof is immutable, timestamped, and verifiable without trusting the issuing system.

## What does "sealing a decision" mean?

Sealing is the act of recording a fact into an append-only cryptographic chain. When a decision is sealed:

- A deterministic representation of the decision is produced
- A cryptographic hash links it to all previous facts in its chain
- An Ed25519 digital signature is applied
- A timestamp is assigned by the system

The result is a **proof artifact**: a signed, hash-chained record that can be verified independently by any party holding the public key.

Once sealed, the fact cannot be modified, reordered, or removed without breaking the cryptographic chain.

## Minimal example

### 1. Submit a decision

\`\`\`
POST /api/v1/decisions
{
  "system_id": "sys-abc123def456",
  "decision_type": "credit-approval",
  "title": "Credit facility EUR 500K - Company X",
  "payload": {
    "amount": 500000,
    "currency": "EUR",
    "risk_rating": "moderate",
    "committee_vote": "unanimous"
  }
}
\`\`\`

The decision is created as a **proposal** and immediately sealed as a \`decision_proposed\` fact.

### 2. Approve the decision

\`\`\`
POST /api/v1/decisions/{decision_id}/approve
{
  "comment": "Reviewed and approved per credit policy CP-2024-03"
}
\`\`\`

The approval is sealed as a \`decision_approved\` fact, cryptographically linked to the proposal.

### 3. Retrieve the proof

\`\`\`
GET /api/v1/systems/{system_id}/proof-package
\`\`\`

This returns a self-contained proof package containing all sealed facts, the hash chain, and the digital signature. The package can be verified offline using the public key.

## Typical use cases

- **Risk acceptance**: A risk committee approves a risk exposure. The decision, rationale, and vote are sealed with cryptographic proof of who approved and when.

- **Production deployment approval**: A deployment to a critical system requires sign-off. The approval is sealed and linked to the system record.

- **Regulatory commitment**: An organization commits to a remediation action following a regulatory finding. The commitment and subsequent completion are both sealed.

- **Incident response**: A security incident is reported, investigated, and resolved. Each stage is sealed, producing a verifiable timeline for regulators.

- **Agent transparency**: An AI agent declares its intent before executing an action. Both the intent and the execution outcome are sealed, enabling after-the-fact audit of autonomous behavior.

## Next steps

- [Core Concepts](core-concepts.md) for a detailed explanation of Evidence's data model
- [Sealing Process](sealing-process.md) for how cryptographic sealing works
- [Verification](verification.md) for how to verify proof artifacts
- [Integration](integration.md) for how to connect your systems to Evidence
`,
  },
  'core-concepts': {
    title: 'Core Concepts',
    content: `
## Decision artifact

A decision artifact is a structured record of a critical decision: what was decided, by whom, in what context, and with what supporting information.

- **Definition**: A JSON object containing the decision type, title, payload (structured metadata), proposer identity, and timestamp.
- **Purpose**: To capture the full context of a decision at the moment it is made, before memories fade or records diverge.
- **Practical implication**: Every decision artifact is immutable once created. If a decision must be revised, a new decision is proposed; the original record remains intact.

## Sealing

Sealing is the process of cryptographically committing a fact to an append-only chain.

- **Definition**: The act of signing a deterministic representation of a record and linking it to the previous record in its chain via a cryptographic hash.
- **Purpose**: To produce a tamper-evident record that cannot be altered, reordered, or deleted without detection.
- **Practical implication**: Once a fact is sealed, it is permanent. No administrative action, database operation, or system failure can modify a sealed fact without breaking the cryptographic chain.

## Proof artifact

A proof artifact is a self-contained package that allows independent verification of a sealed record or set of records.

- **Definition**: A bundle containing sealed facts, their hash chain, and a digital signature covering the entire set.
- **Purpose**: To enable any party to verify the integrity of the record without trusting the issuing system.
- **Practical implication**: Proof artifacts can be exported, emailed, archived, or presented in legal proceedings. Verification requires only the public key.

## Stream

A stream is a logical container for related facts, analogous to an append-only ledger for a specific subject.

- **Definition**: An ordered, append-only sequence of facts associated with a system, incident, or agent.
- **Purpose**: To group all sealed facts related to a single subject (e.g., all decisions for a credit committee, all events for an incident).
- **Practical implication**: Each stream maintains its own hash chain. Facts within a stream are cryptographically ordered. New facts can be added at any time; the stream never closes.

## Immutability

Immutability means that sealed records cannot be changed after creation.

- **Definition**: The property that no fact, once sealed, can be modified, replaced, or removed.
- **Purpose**: To provide a trustworthy record that regulators, auditors, and legal teams can rely on.
- **Practical implication**: If an earlier decision was incorrect, the correct approach is to seal a new fact (e.g., a cancellation or a superseding decision). The original record remains, providing a complete and honest history.

## Cryptographic signature

Each sealed fact and proof bundle carries a digital signature.

- **Definition**: An Ed25519 digital signature applied to the deterministic representation of a record.
- **Purpose**: To guarantee that the record was produced by the Evidence system and has not been tampered with.
- **Practical implication**: Signature verification is fast, deterministic, and requires only the public key. It can be performed offline by any party.

## Verification

Verification is the process of confirming that a proof artifact is intact and authentic.

- **Definition**: The act of checking that (1) the hash chain is unbroken, (2) each fact links correctly to its predecessor, and (3) the digital signature is valid.
- **Purpose**: To allow any party to independently confirm the integrity of the record without trusting Evidence.
- **Practical implication**: Verification can be performed by auditors, regulators, legal counsel, or automated compliance tools using the public key alone.

## Evidence lifecycle

The lifecycle of a record in Evidence follows a strict progression:

1. **Declaration**: A fact is submitted (decision proposed, incident reported, intent declared).
2. **Sealing**: The fact is hashed, linked to the chain, signed, and timestamped.
3. **Enrichment**: Additional facts are added to the same stream (approvals, evaluations, remediations).
4. **Bundling**: A proof package is generated covering all facts in the stream.
5. **Verification**: Any party verifies the proof package using the public key.
6. **Archival**: The proof package is stored for regulatory retention, legal discovery, or long-term audit.

Facts move through this lifecycle in one direction only. There is no deletion step, no modification step, and no rollback.
`,
  },
  'sealing-process': {
    title: 'Sealing Process',
    content: `
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
2. Walk the chain backward, confirming that each fact's \`prev_hash\` matches the computed hash of the preceding fact
3. Confirm that the first fact has a null \`prev_hash\`

If any link in the chain is broken, the entire chain from that point forward is invalidated.
`,
  },
  'verification': {
    title: 'Verification',
    content: `
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
- Confirm that the computed hash matches the stored \`fact_hash\`
- Confirm that the fact's \`prev_hash\` matches the \`fact_hash\` of the preceding fact
- For the first fact in the stream, confirm that \`prev_hash\` is null

If any hash does not match, the chain has been tampered with.

### Step 2: Verify the bundle signature

Using the public key corresponding to the \`key_id\` in the bundle:

- Reconstruct the signed payload from the bundle metadata and manifest
- Verify the Ed25519 signature against this payload
- Confirm that the signature is valid

If the signature is invalid, the bundle has been modified after signing.

### Step 3: Verify completeness

- Confirm that the facts manifest matches the actual facts included in the bundle
- Confirm that the chain is continuous (no gaps between facts)
- Confirm that the \`head_fact_id\` in the bundle matches the last fact in the chain

## What verification confirms

A successful verification confirms:

- **Integrity**: No fact in the bundle has been modified since sealing
- **Completeness**: All facts in the chain are present, with no gaps or omissions
- **Ordering**: Facts are in the correct chronological order as originally sealed
- **Authenticity**: The bundle was signed by a key controlled by the Evidence system
- **Attribution**: The actor identity recorded in each fact has not been altered

## Offline verification

Proof artifacts are self-contained. Verification does not require a connection to Evidence or any external service. The only requirement is the public key corresponding to the \`key_id\` in the bundle.

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

\`\`\`
Verification result: VALID

Bundle: bnd-a1b2c3d4e5f6
Stream: ai-system-sys-abc123def456
Facts verified: 5 of 5
Chain integrity: intact
Signature: valid (key: evidence-prod-2025-01)
Time range: 2025-02-10T10:00:00Z to 2025-02-24T14:30:00Z
\`\`\`

### Failed verification

\`\`\`
Verification result: INVALID

Bundle: bnd-a1b2c3d4e5f6
Stream: ai-system-sys-abc123def456
Facts verified: 3 of 5
Chain integrity: BROKEN at fact-4
  Expected prev_hash: sha256:8a3f...
  Found prev_hash: sha256:c71b...
Signature: not checked (chain integrity failure)
\`\`\`
`,
  },
  'security-and-trust-model': {
    title: 'Security and Trust Model',
    content: `
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

- Signing keys have identifiers (\`key_id\`) that are included in every signature, enabling key rotation without invalidating historical proofs.
- When a key is rotated, new facts are signed with the new key. Historical facts remain valid under the key that was active at the time of sealing.
- Key rotation does not affect the validity of existing proof artifacts. Each artifact references the specific key used for signing.

## Retention

- Sealed facts are retained for the duration configured by the organization's retention policy.
- Proof artifacts (bundles) can be exported and archived independently of the Evidence system.
- The append-only nature of streams means that no fact is deleted during normal operation. Retention policies, if applied, operate at the stream level and are logged.
- Organizations requiring long-term retention (regulatory or legal) should export proof packages to independent archival storage.
`,
  },
  'integration': {
    title: 'Integration',
    content: `
## Overview

Asplenz Evidence can be integrated into existing systems and workflows through its REST API, its web interface, or a combination of both. This document describes the available integration paths and their typical use cases.

## API integration

Evidence exposes a REST API for programmatic integration. All operations that can be performed through the web interface are also available through the API.

### Core operations

**Systems**: Register and manage the systems, committees, or processes whose decisions will be sealed.

\`\`\`
POST   /api/v1/systems                    Register a system
GET    /api/v1/systems                    List systems
GET    /api/v1/systems/{system_id}        Retrieve system details
PATCH  /api/v1/systems/{system_id}        Update system metadata
\`\`\`

**Decisions**: Propose, approve, and track decisions with cryptographic proof.

\`\`\`
POST   /api/v1/decisions                              Create a decision proposal
GET    /api/v1/decisions                              List decisions
GET    /api/v1/decisions/{decision_id}                Retrieve a decision
POST   /api/v1/decisions/{decision_id}/approve        Approve a decision
POST   /api/v1/decisions/{decision_id}/cancel         Cancel a proposal
POST   /api/v1/decisions/{decision_id}/evidence       Attach supporting evidence
POST   /api/v1/decisions/{decision_id}/evaluations    Record a follow-up evaluation
\`\`\`

**Incidents**: Report, investigate, and resolve incidents with a sealed timeline.

\`\`\`
POST   /api/v1/incidents                                  Report an incident
GET    /api/v1/incidents/{incident_id}                    Retrieve incident details
POST   /api/v1/incidents/{incident_id}/investigate        Begin investigation
POST   /api/v1/incidents/{incident_id}/resolve            Mark as resolved
POST   /api/v1/incidents/{incident_id}/close              Mark as closed
POST   /api/v1/incidents/{incident_id}/remediations       Record a remediation action
GET    /api/v1/incidents/{incident_id}/proof-package      Export proof package
\`\`\`

**Agents**: Register AI agents and seal their intent and execution declarations.

\`\`\`
POST   /api/v1/agents                                                Register an agent
POST   /api/v1/agents/{agent_id}/traces                             Start an execution trace
POST   /api/v1/agents/{agent_id}/traces/{trace_id}/facts/intent     Declare intent
POST   /api/v1/agents/{agent_id}/traces/{trace_id}/facts/execution  Declare execution
\`\`\`

### Authentication

API requests are authenticated using bearer tokens. Each request must include an \`Authorization\` header with a valid token that identifies the user and tenant.

### Response format

All API responses follow a consistent structure:

\`\`\`json
{
  "decision_id": "dec-a1b2c3d4e5f6",
  "status": "approved",
  "approved_by": "alice@example.com",
  "approved_at": "2025-02-24T14:30:00Z"
}
\`\`\`

List endpoints include pagination:

\`\`\`json
{
  "decisions": [...],
  "total": 42,
  "limit": 10,
  "offset": 0
}
\`\`\`

Errors are returned with a detail message:

\`\`\`json
{
  "detail": "Decision not found"
}
\`\`\`

## Web interface

Evidence provides a web interface for users who interact with the system directly rather than through integrated tools.

The web interface supports:

- Registering and managing systems
- Proposing and approving decisions
- Reporting and managing incidents
- Viewing sealed timelines and proof chains
- Downloading proof packages
- Monitoring agent execution traces

The web interface uses the same API as programmatic integrations, ensuring consistency between all access paths.

## Standalone usage

Evidence can be used independently, without integration into other systems. In this mode:

- Users submit decisions and approvals through the web interface
- Incidents are reported and managed manually
- Proof packages are exported and shared via email or file transfer
- No external system integration is required

This is appropriate for organizations that need cryptographic proof of decisions but do not have automated workflows that would benefit from API integration.

## Integration with Asplenz Knowledge

Evidence can optionally work alongside **Asplenz Knowledge**, a normative decision management system that maintains organizational rules, invariants, and decision precedents.

When used together:

- Knowledge provides the normative context: what rules apply, what constraints exist, what precedents have been set
- Evidence provides the cryptographic proof: what was actually decided, by whom, and when

The two systems are independent. Evidence does not require Knowledge to operate, and Knowledge does not require Evidence. Integration between them is optional and purely additive.

## Integration patterns

### Pattern 1: Decision gateway

An external system (e.g., a loan origination platform) submits a decision to Evidence when a human approval is required. Evidence seals the proposal, the human approves through the web interface or API, and Evidence seals the approval. The external system polls for the decision status or receives a webhook callback.

### Pattern 2: Incident lifecycle

A monitoring system detects an anomaly and reports an incident to Evidence via the API. The incident response team manages the investigation and remediation through Evidence. Each step is sealed automatically. At the end, a proof package is exported for the regulator.

### Pattern 3: Agent observability

An AI agent is instrumented to declare its intent before each significant action and its execution result afterward. Both declarations are sealed by Evidence. A compliance team reviews agent traces periodically to confirm that all actions were properly authorized and executed.

### Pattern 4: Audit export

An organization uses Evidence purely for its cryptographic proof capability. Decisions are recorded through the API at key points in existing workflows. Periodically, proof packages are exported and stored in a compliance archive for regulatory readiness.
`,
  },
  'governance-and-compliance': {
    title: 'Governance and Compliance',
    content: `
## Audit readiness

Evidence produces cryptographically signed, tamper-evident records at the moment decisions are made. This means that when an audit occurs, the organization does not need to reconstruct what happened from fragmented sources. The sealed record is the definitive account.

### What Evidence provides for auditors

- **Immutable timeline**: Every decision, approval, incident, and remediation is recorded in chronological order with cryptographic guarantees.
- **Actor attribution**: Each sealed fact identifies who performed the action. This attribution is part of the signed data and cannot be altered.
- **Timestamp integrity**: Timestamps are assigned at seal time and included in the signed record. They cannot be backdated.
- **Independent verification**: Auditors can verify proof packages using the public key alone, without trusting the Evidence system or the organization's IT infrastructure.
- **Self-contained proof**: Proof packages include all facts, the hash chain, and the signature. No external system access is needed for verification.

### Preparing for an audit

1. Identify the systems, incidents, or time period under review
2. Export proof packages for the relevant streams
3. Provide the proof packages and the public key to the auditor
4. The auditor verifies independently

No special preparation, data reconciliation, or manual compilation is required.

## Regulatory scenarios

### Financial services regulation

Financial regulators require evidence of governance over credit decisions, risk acceptances, and operational incidents. Evidence provides:

- Sealed records of credit committee decisions, including vote outcomes and rationale
- Proof of who approved what, and when
- Complete incident timelines for operational resilience reporting
- Remediation tracking with sealed completion records

### Digital Operational Resilience Act (DORA)

DORA requires financial entities to maintain robust incident management with classification, timeline documentation, and corrective measures. Evidence supports DORA compliance by:

- Sealing incident reports at the moment of detection
- Recording each stage of the incident lifecycle (reporting, investigation, remediation, resolution, closure)
- Sealing each remediation action with responsible party, deadline, and completion status
- Producing a verifiable timeline that demonstrates compliance with incident management requirements

### EU AI Act

The EU AI Act requires documentation and oversight of high-risk AI systems. Evidence supports compliance by:

- Maintaining a sealed registry of AI systems with risk classification
- Recording decisions related to AI system deployment, modification, and decommissioning
- Sealing AI agent intent and execution traces for transparency and accountability
- Providing verifiable proof of human oversight over AI-assisted decisions

### General Data Protection Regulation (GDPR)

GDPR requires organizations to demonstrate accountability in data processing decisions. Evidence provides:

- Sealed records of decisions related to data processing
- Verifiable proof of who authorized specific processing activities
- Timestamped records of data protection impact assessments
- Audit trail for data subject rights requests and responses

## Litigation scenarios

In litigation, the strength of evidence depends on its reliability, authenticity, and integrity. Evidence provides:

- **Contemporaneous records**: Facts are sealed at the time they occur, not reconstructed later. This addresses challenges to the reliability of records created after the fact.
- **Tamper evidence**: The cryptographic chain and digital signature provide strong evidence that records have not been altered. This addresses challenges to the authenticity of records.
- **Independent verification**: An opposing party or the court can verify the proof package using the public key, without relying on the producing party's systems.
- **Attribution**: Each fact identifies the actor, providing evidence of who made each decision.

Evidence does not make legal claims about the admissibility or weight of cryptographic proof in any jurisdiction. Organizations should consult legal counsel regarding the evidentiary value of sealed records in their specific legal context.

## Risk committee workflows

Risk committees make decisions that must be documented with precision: what was decided, what alternatives were considered, what the vote was, and who participated. Evidence supports these workflows by:

- Sealing the decision proposal with full context (risk assessment, financial impact, alternatives)
- Recording individual approvals with comments and rationale
- Attaching supporting evidence (reports, analyses, models) referenced by content hash
- Sealing follow-up evaluations (e.g., credit review after 6 months)
- Producing a complete, verifiable record of the committee's governance

## Incident post-mortem scenarios

After an incident, organizations need to demonstrate that they responded appropriately. Evidence provides:

- A sealed timeline showing when the incident was detected, reported, and escalated
- Records of each investigation step and finding
- Sealed remediation actions with responsible parties and deadlines
- Proof of remediation completion
- A verifiable record that the incident was properly closed with lessons learned

This is particularly relevant for:

- Regulatory reporting (DORA, NIS2, sector-specific requirements)
- Insurance claims where response timeliness is relevant
- Internal governance reviews
- Board-level reporting on operational resilience
`,
  },
  'faq': {
    title: 'Frequently Asked Questions',
    content: `
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
- Each signature includes a \`key_id\` that identifies which key was used
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
`,
  },
}
