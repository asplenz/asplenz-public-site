# Horizon Technical Documentation

**Audience:** Integration Engineers · Solution Architects · Technical Decision Makers

---

## What is Horizon?

Horizon is a **proof infrastructure** that captures and seals business decisions as they happen. It creates an immutable, cryptographically-secured timeline of facts that can be audited, verified, and exported at any time.

Horizon is designed to be **invisible** to your operations: it integrates into your existing workflows without imposing new tools, interfaces, or processes.

---

## Core Principle: Semantic Neutrality

Horizon is a **neutral witness**. It seals what you send without interpreting, validating, or qualifying the content.

| Horizon Does | Horizon Does Not |
|--------------|------------------|
| Timestamp authoritatively | Interpret your data |
| Chain facts cryptographically | Enforce business rules |
| Sign exportable proof packages | Validate decision quality |
| Detect tampering | Store business logic |

Your data remains **yours**. Horizon only guarantees **when** it was sealed, **by whom**, and that it **hasn't changed**.

---

## Ingestion Channels

Horizon meets your teams where they already work:

| Channel | Use Case | Status |
|---------|----------|--------|
| **API** | Automated systems, AI pipelines, backend integrations | Available |
| **Email** | Mobile decisions, urgent field captures, executive approvals | Available |
| **Webapp** | Manual declarations, timeline viewing, chain verification | Available |

All channels provide **identical guarantees**. A fact sealed by email carries the same cryptographic weight as one sealed by API.

---

## Documentation Structure

| Section | Description |
|---------|-------------|
| [Core Concepts](core-concepts.md) | Streams, Facts, and Proof Bundles explained |
| [Guarantees](guarantees.md) | Storage, integrity, and verification guarantees |
| [Proof Semantics](proof-semantics.md) | What sealed facts prove and don't prove |
| [API Reference](api-reference.md) | Endpoints, payloads, and response formats |
| [Integration Guide](integration-guide.md) | Step-by-step integration examples |
| [API Channel](channels/api.md) | Programmatic integration |
| [Email Channel](channels/email.md) | Seal facts by sending emails |
| [Webapp Channel](channels/webapp.md) | Visual interface for viewing and verification |

### Related Documentation

| Section | Description |
|---------|-------------|
| [Security & Sovereignty](../security/sovereignty.md) | Architecture, isolation, deployment options |
| [Auditor's Guide](../compliance/auditor-guide.md) | Independent verification protocol |

---

## Quick Example

**Seal a decision:**

```http
POST /streams/incident-2024-01-26/facts
Content-Type: application/json

{
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "decision": "Approve emergency maintenance",
    "justification": "Memory leak confirmed by monitoring"
  }
}
```

**What you get back:**

```json
{
  "fact_id": "fact-01HRX7G2NB",
  "sealed_at_iso": "2024-01-26T12:00:01.000Z",
  "fact_hash": "a1b2c3...",
  "prev_hash": "9f8e7d..."
}
```

The decision is now:
- **Timestamped** with Horizon's authoritative clock
- **Chained** to the previous fact in the stream
- **Sealed** cryptographically for tamper detection
- **Exportable** as a signed proof bundle

---

## Recommended Reading Order

### For Everyone (Start Here)

| Step | Document | You'll Learn |
|------|----------|--------------|
| 1 | [Core Concepts](core-concepts.md) | Streams, Facts, Bundles — the data model |
| 2 | [Guarantees](guarantees.md) | What Horizon proves and doesn't prove |
| 3 | [Proof Semantics](proof-semantics.md) | Semantic boundaries of Horizon evidence |

### For Integration Engineers

| Step | Document | You'll Learn |
|------|----------|--------------|
| 4 | [API Reference](api-reference.md) | Endpoints, payloads, responses |
| 5 | [Integration Guide](integration-guide.md) | Step-by-step implementation |
| 6 | [API Channel](channels/api.md) | Idempotency, retries, patterns |

### For Operations & Business Users

| Step | Document | You'll Learn |
|------|----------|--------------|
| 4 | [Email Channel](channels/email.md) | How to seal facts by email |
| 5 | [Webapp Channel](channels/webapp.md) | How to view and verify timelines |

### Quick Reference

- **"How do I seal a fact?"** → [API Reference](api-reference.md) or [Email Channel](channels/email.md)
- **"What can I prove?"** → [Guarantees](guarantees.md) and [Proof Semantics](proof-semantics.md)
- **"How do I verify integrity?"** → [Webapp Channel](channels/webapp.md) or [API Reference](api-reference.md)
- **"What does a sealed fact mean legally?"** → [Proof Semantics](proof-semantics.md)
