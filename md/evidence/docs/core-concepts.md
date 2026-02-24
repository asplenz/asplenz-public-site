# Core Concepts

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
