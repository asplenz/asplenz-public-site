# Governance and Compliance

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
