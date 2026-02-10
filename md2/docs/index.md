# Horizon Documentation

**Proof Infrastructure for Business Decisions**

---

## What is Horizon?

Horizon captures and seals business decisions as they happen, creating an immutable, cryptographically-secured timeline that can be audited, verified, and exported at any time.

Horizon is a **neutral witness**. It records what you declare, exactly as you declare it, without interpretation or validation.

---

## Documentation by Audience

### For Risk Managers & RSSI

You need to understand the security model and what Horizon actually proves.

| Document | Description |
|----------|-------------|
| [Proof Semantics](technical/proof-semantics.md) | What sealed facts prove and don't prove |
| [Security & Sovereignty](security/sovereignty.md) | Architecture, isolation, deployment options |
| [Guarantees](technical/guarantees.md) | Cryptographic and storage guarantees |

### For Auditors

You need to verify proof bundles and chain integrity independently.

| Document | Description |
|----------|-------------|
| [Auditor's Guide](compliance/auditor-guide.md) | Step-by-step verification protocol |
| [Guarantees](technical/guarantees.md) | Hash chain and signature guarantees |
| [Proof Semantics](technical/proof-semantics.md) | Semantic boundaries of evidence |

### For Integration Engineers

You need to integrate Horizon into your systems.

| Document | Description |
|----------|-------------|
| [First Seal](technical/first-seal.md) | Seal your first fact in 5 minutes |
| [Core Concepts](technical/core-concepts.md) | Streams, Facts, Bundles explained |
| [API Reference](technical/api-reference.md) | All endpoints and payloads |
| [Integration Guide](technical/integration-guide.md) | Step-by-step implementation |

### For Operations & Business Users

You need to seal facts and view timelines.

| Document | Description |
|----------|-------------|
| [Email Channel](technical/channels/email.md) | Seal facts by sending emails |
| [Webapp Channel](technical/channels/webapp.md) | View and verify timelines |
| [API Channel](technical/channels/api.md) | Programmatic integration patterns |

---

## Quick Start

**Seal a fact in 5 minutes:** [First Seal](technical/first-seal.md)

```http
POST /streams/incident-2024-01-26/facts
Content-Type: application/json

{
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "decision": "Approve emergency maintenance"
  }
}
```

Response:
```json
{
  "fact_id": "fact-01HRX7G2NB",
  "sealed_at_iso": "2024-01-26T12:00:01.000Z",
  "fact_hash": "a1b2c3...",
  "prev_hash": "9f8e7d..."
}
```

---

## Three Ingestion Channels

| Channel | Use Case | Status |
|---------|----------|--------|
| [API](technical/channels/api.md) | Automated systems, AI pipelines, backend integrations | Available |
| [Email](technical/channels/email.md) | Mobile decisions, urgent captures, executive approvals | Available |
| [Webapp](technical/channels/webapp.md) | Timeline viewing, chain verification, audit support | Available |

All channels provide identical cryptographic guarantees.

---

## Documentation Structure

### Strategic

| Document | Description |
|----------|-------------|
| [Proof Semantics](technical/proof-semantics.md) | Logical framework: what Horizon proves |
| [Security & Sovereignty](security/sovereignty.md) | Architecture, isolation, deployment |

### Integration

| Document | Description |
|----------|-------------|
| [First Seal](technical/first-seal.md) | 5-minute quickstart |
| [Core Concepts](technical/core-concepts.md) | Data model explained |
| [API Reference](technical/api-reference.md) | Endpoints and payloads |
| [Integration Guide](technical/integration-guide.md) | Implementation patterns |
| [Channels](technical/channels/) | API, Email, Webapp details |

### Compliance

| Document | Description |
|----------|-------------|
| [Auditor's Guide](compliance/auditor-guide.md) | Independent verification protocol |
| [Guarantees](technical/guarantees.md) | Cryptographic guarantees |

### Reference

| Document | Description |
|----------|-------------|
| [FAQ](faq.md) | Frequently asked questions |

---

## Core Principle

Horizon is **semantically neutral**:

| Horizon Does | Horizon Does Not |
|--------------|------------------|
| Timestamp authoritatively | Interpret your data |
| Chain facts cryptographically | Enforce business rules |
| Sign exportable proof bundles | Validate decision quality |
| Detect tampering | Store business logic |

Your data remains yours. Horizon guarantees **when** it was sealed, **by whom**, and that it **hasn't changed**.

---

## Next Steps

- **New to Horizon?** Start with [First Seal](technical/first-seal.md)
- **Evaluating security?** Read [Security & Sovereignty](security/sovereignty.md)
- **Planning an audit?** See the [Auditor's Guide](compliance/auditor-guide.md)
- **Ready to integrate?** Jump to [API Reference](technical/api-reference.md)
- **Have questions?** Check the [FAQ](faq.md)
