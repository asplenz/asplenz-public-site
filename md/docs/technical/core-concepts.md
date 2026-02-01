# Core Concepts

Horizon's data model is intentionally minimal: **Streams**, **Facts**, and **Proof Bundles**.

---

## Streams

A **Stream** is a container for related facts. Think of it as a timeline for a specific decision context.

**Examples of streams:**
- `incident-2024-01-26` — All facts related to a specific incident
- `loan-application-12345` — Decision trail for a loan application
- `ai-session-abc123` — Audit trail for an AI conversation

**Key properties:**
- Streams are created implicitly when the first fact is sealed
- Streams are never closed — they can always receive new facts
- Streams are scoped by tenant for multi-tenancy isolation

---

## Facts

A **Fact** is the atomic unit of proof in Horizon. It represents a single, sealed declaration.

**What goes into a fact:**

| Field | Description | Who provides it |
|-------|-------------|-----------------|
| `actor` | Who made the declaration | You |
| `custom_payload` | The content of the declaration | You |
| `sealed_at` | When it was sealed | Horizon (authoritative) |
| `fact_hash` | Cryptographic fingerprint | Horizon (computed) |
| `prev_hash` | Link to previous fact | Horizon (chain) |

**Key properties:**
- Facts are immutable — once sealed, they cannot be modified
- Facts are ordered — each fact knows its predecessor
- Facts are opaque — Horizon does not interpret `custom_payload`

### The Semantic Frontier

The `custom_payload` field is your data. Horizon treats it as an opaque blob.

```json
{
  "custom_payload": {
    "decision": "Approve loan",
    "amount": 50000,
    "risk_score": 0.12,
    "approved_by": "credit-committee"
  }
}
```

Horizon seals this payload without understanding it. It doesn't know what "Approve loan" means, what a "risk_score" is, or whether the decision is good or bad.

This separation is intentional: **Horizon proves that a fact was recorded, not that the fact is true or correct.**

---

## Proof Bundles

A **Proof Bundle** is a signed, exportable snapshot of a stream at a point in time.

**Use cases:**
- Export proof for external auditors
- Archive a decision trail for compliance
- Share verifiable evidence with third parties

**What's in a bundle:**

| Field | Description |
|-------|-------------|
| `facts_manifest` | List of fact IDs included |
| `head_hash` | Hash of the last fact |
| `signature` | Cryptographic signature |
| `created_at` | When the bundle was created |

**Key properties:**
- Bundles are signed — anyone can verify authenticity
- Bundles are snapshots — the stream continues after bundling
- Bundles are self-contained — can be verified independently

---

## Data Flow

```
Your System                         Horizon
    │                                  │
    │  POST /streams/{id}/facts        │
    │  { actor, custom_payload }       │
    │ ───────────────────────────────► │
    │                                  │
    │                         ┌────────┴────────┐
    │                         │ 1. Timestamp    │
    │                         │ 2. Hash         │
    │                         │ 3. Chain        │
    │                         │ 4. Store        │
    │                         └────────┬────────┘
    │                                  │
    │  { fact_id, sealed_at, hash }    │
    │ ◄─────────────────────────────── │
    │                                  │
```

---

## Relationships

```
Tenant
  └── Stream (1:N)
        └── Fact (1:N, chained)
              └── Proof Bundle (N:M snapshot)
```

- One tenant can have many streams
- One stream contains many facts (chained sequentially)
- One bundle captures a snapshot of many facts
- Facts can appear in multiple bundles (as streams grow)

---

## What Horizon Guarantees

| Property | Meaning |
|----------|---------|
| **When** | `sealed_at` is assigned by Horizon, not by you |
| **Who** | `actor` is recorded as declared by you |
| **What** | `custom_payload` is sealed exactly as sent |
| **Order** | Facts are chained — sequence is provable |
| **Integrity** | Any modification breaks the hash chain |

---

## Reading a Proof

Once facts are sealed, they form a verifiable timeline. Here's an example of a post-incident stream:

| sealed_at | actor | custom_payload | hash |
|-----------|-------|----------------|------|
| 08:30:00 | monitoring@ | `metric=memory_usage, threshold=95%` | ✓ a1b2c3... |
| 08:32:00 | ops-lead@ | `action=stop_service, target=payment-gateway-eu-west-1` | ✓ b2c3d4... |
| 08:33:00 | cto@ | `message=Proceed with controlled shutdown.` | ✓ c3d4e5... |
| 08:35:02 | ops-lead@ | `method=kubectl_drain, result=service_stopped` | ✓ d4e5f6... |
| 08:40:00 | monitoring@ | `observation=service_stopped, error_rate=0%` | ✓ e5f6a7... |

*Proof Bundle · 5 facts · Signed*

### What this timeline shows

- That these declarations existed
- Who declared them (as attributed)
- When Horizon sealed them
- That they belong to the same stream
- That the chain is intact (hashes verify)

### What this timeline does NOT show

- Whether the declarations are true
- Whether the actors were authorized
- Whether actions occurred as described
- Whether one fact caused another
- Whether decisions were correct or legitimate

The timeline does not explain events. It does not reconstruct intent. It does not assign responsibility. It exposes sealed facts in a verifiable order.

**Horizon shows what was declared. You draw the conclusions.**

For the full semantic framework, see [Proof Semantics](proof-semantics.md).

---

## Next

- [Guarantees](guarantees.md) — Detailed integrity and verification guarantees
- [Proof Semantics](proof-semantics.md) — What sealed facts prove and don't prove
- [API Reference](api-reference.md) — How to seal facts programmatically
