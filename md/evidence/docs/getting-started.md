# Getting Started with Asplenz Evidence

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

```
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
```

The decision is created as a **proposal** and immediately sealed as a `decision_proposed` fact.

### 2. Approve the decision

```
POST /api/v1/decisions/{decision_id}/approve
{
  "comment": "Reviewed and approved per credit policy CP-2024-03"
}
```

The approval is sealed as a `decision_approved` fact, cryptographically linked to the proposal.

### 3. Retrieve the proof

```
GET /api/v1/systems/{system_id}/proof-package
```

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
