# How It Works

## The Conceptual Model

Horizon organizes evidence around two core primitives: **Streams** and **Facts**.

---

## Decision Streams

A **Stream** is a container of proof. It groups related facts that belong together — typically facts related to a single decision, intervention, or process.

Key properties:

- **No business state** — A stream has no "status" like open, closed, or pending
- **Never closed** — A stream can receive new facts at any time
- **Perpetually open** — Facts can be added immediately, later, or years after

There is no concept of "opening", "closing", or "reopening" a stream in Horizon. This is intentional: real-world decisions don't follow clean lifecycles. New information surfaces. Audits happen years later. Evidence must be addable whenever it becomes available.

---

## Facts

A **Fact** is a sealed declaration — the atomic unit of proof in Horizon.

Every fact contains:

| Component | Description |
|-----------|-------------|
| **Actor** | Who declared this fact (opaque to Horizon) |
| **Sealed timestamp** | When Horizon received and sealed it (authoritative) |
| **Payload** | The actual content (opaque to Horizon) |
| **Chain link** | Cryptographic link to the previous fact |

Horizon does not define fact types. It does not recognize "approval", "execution", or "request" as special concepts. All meaning lives in the payload, which Horizon does not read or interpret.

### Evaluation linking

A fact can optionally reference another fact as its subject of evaluation. This creates a structural link — "this fact evaluates that fact" — without Horizon understanding what the evaluation means.

---

## The Append-Only Guarantee

Horizon is **append-only by construction**.

- No fact can be modified after sealing
- No fact can be deleted
- Every fact is cryptographically chained to its predecessor
- Any tampering is **detectable**

This is enforced through a hash chain: each fact includes the hash of the previous fact. Modifying or removing any fact breaks the chain, making tampering evident to any verifier.

---

## Proof Bundles

A **Proof Bundle** is a signed snapshot of a stream at a specific moment.

Bundles are:

- **Not closures** — The stream remains open after a bundle is created
- **Transportable** — Can be exported and verified independently
- **Self-contained** — Include everything needed for verification
- **Versioned** — Multiple bundles can exist for the same stream

Think of a bundle as a notarized copy of the evidence at a point in time. It can be handed to auditors, regulators, or legal counsel as a standalone proof package.

---

## Capture Channels

Horizon captures facts **where they actually happen**, without imposing new tools.

| Channel | Use case |
|---------|----------|
| **API** | Automated systems, business applications, integrations |
| **Email** | Human decisions, informal processes, legacy workflows |
| **SDK** | Embedded capture in edge environments |

All channels produce equivalent proof. A fact captured via email has the same evidentiary weight as a fact captured via API.

This is critical: decisions don't always happen in enterprise applications. They happen in email threads, chat messages, and phone calls. Horizon meets organizations where their decisions actually occur.

---

## Cryptographic Guarantees

Horizon provides cryptographic certainty through:

### Hash Chain

Every fact is linked to its predecessor through SHA-256 hashing. This creates an immutable sequence where any modification is detectable by recomputing the chain.

### Digital Signatures

Proof bundles are signed using Ed25519 signatures. This provides:

- **Authenticity** — Proof that Horizon produced this bundle
- **Integrity** — Proof that the bundle hasn't been modified
- **Non-repudiation** — Horizon cannot deny having produced it

### Deterministic Canonicalization

Facts are canonicalized before hashing and signing:

- Keys sorted lexicographically
- No whitespace variations
- UTF-8 encoding
- No floating-point numbers (non-deterministic)

This ensures that the same logical content always produces the same hash, enabling independent verification.

---

## Verification

Anyone with a proof bundle can verify it independently:

1. **Recompute hashes** — Hash each fact and verify the chain
2. **Verify signature** — Check the bundle signature against Horizon's public key
3. **Compare timestamps** — Confirm the sealing order

This verification requires no access to Horizon's systems. A bundle exported today can be verified ten years from now using only the bundle itself and Horizon's public key.

---

## Operational Invisibility

Horizon is designed to be:

- **Invisible during action** — No workflow interruption, no new screens
- **Fully visible after the fact** — Complete audit trail when needed

The primary interface is a **proof viewer** — a read-only view for auditors, risk teams, compliance officers, and regulators. It shows facts, their relationships, and their sealing times. It does not allow any decisional action.

---

## Summary

| Concept | Purpose |
|---------|---------|
| **Stream** | Groups related facts, never closes |
| **Fact** | Atomic sealed declaration with opaque payload |
| **Seal timestamp** | Authoritative time assigned by Horizon |
| **Hash chain** | Tamper-evident linking of facts |
| **Proof bundle** | Signed, exportable snapshot for verification |
| **Evaluation link** | Optional reference from one fact to another |

This model provides **immutable, verifiable, independently auditable evidence** of what was declared, by whom, and when Horizon sealed it.

---

**Horizon is the system of record for decision facts.**
