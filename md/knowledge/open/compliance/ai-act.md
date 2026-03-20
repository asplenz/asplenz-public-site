# EU AI Act Compliance with Knowledge

The EU AI Act (Regulation 2024/1689) requires documentation, oversight, and traceability for high-risk AI systems. Knowledge provides the infrastructure to meet these obligations systematically.

---

## What the AI Act Requires

For **high-risk AI systems** (Article 6), the Act mandates:

| Obligation | Article | Summary |
|------------|---------|---------|
| Risk management | Art. 9 | Continuous risk identification and mitigation |
| Technical documentation | Art. 11 | Complete record of design, development, and operation |
| Record-keeping | Art. 12 | Automatic logging of events during operation |
| Transparency | Art. 13 | Clear information about capabilities and limitations |
| Human oversight | Art. 14 | Mechanisms for human intervention, override, and reversal |
| Accuracy and robustness | Art. 15 | Performance standards and error protection |

Non-compliance: up to **35 million EUR or 7% of global annual turnover** (Article 99).

---

## How Knowledge Maps to AI Act Requirements

### Article 9 — Risk Management

The Act requires a continuous, iterative risk management process throughout the AI system lifecycle.

**Knowledge provides:**

- **Invariants** codify risk controls as blocking constraints. Each has a rationale and timestamp. *Example: "No autonomous decision with financial impact above 10,000 EUR without human approval."*
- **Rules** implement operational risk mitigation. Version history captures how controls evolve as risks change.
- **Compliance checks** evaluate actions against the full normative state in real time — before execution, not after.
- **Links** trace the chain from risk identification to decision to invariant to rule.

```
Risk: AI may generate incorrect financial figures
  │
  ├── Decision: "All AI-generated financial outputs require source verification"
  │       └── creates → Invariant: "No financial report without source check"
  │
  └── Rule: "AI outputs in finance scope require human review"
```

### Article 11 — Technical Documentation

The Act requires documentation of the system's design, purpose, and decision rationale.

**Knowledge provides:**

- **Decisions** record every architectural and operational choice with context, reasoning, author, and timestamp.
- **Scopes** organize documentation by domain — not buried in wikis.
- **Search** makes everything retrievable by keyword, type, author, or date.
- **Immutability**: decisions cannot be edited after creation. The historical record is preserved.

### Article 12 — Record-Keeping

The Act requires automatic recording of events during system operation.

**Knowledge provides:**

- **Events**: every normative change generates a timestamped event with actor attribution.
- **References**: structured traces proving which entries were consulted, followed, or diverged from — with context (PR, commit, deployment).
- **Normative hash**: cryptographic hash of the full normative state at any point in time.

### Article 14 — Human Oversight

The Act requires mechanisms for human intervention and override.

**Knowledge provides:**

- **Approval workflows**: invariants and rules can require human approval. Agents request approval and wait — no silent bypass.
- **Overrides**: governed exceptions with justification, conditions, and expiry. Logged as events.
- **Role-based access**: approval decisions require minimum roles (tech-lead, admin).
- **Dashboard**: pending approvals, override history, and full event timeline in a single view.

---

## Audit-Ready Outputs

| Artifact | AI Act Article | What It Proves |
|----------|---------------|----------------|
| Decision history with context | Art. 11 | Design rationale documented at creation time |
| Invariant and rule registry | Art. 9, 11 | Risk controls identified and codified |
| Event log with attribution | Art. 12 | Automatic recording of all normative changes |
| Reference traces | Art. 12 | Agent consulted constraints before acting |
| Compliance reports (Verifier) | Art. 11 | Each PR checked against applicable constraints |
| Override history | Art. 14 | Human intervention documented with justification |
| Approval chain | Art. 14 | Request → decision → override linked |
| Normative hash | Art. 12 | What constraints existed at decision time |

These are direct exports from the Knowledge registry — structured, timestamped, and verifiable.

---

## Implementation Timeline

| Date | Milestone |
|------|-----------|
| August 2024 | AI Act entered into force |
| February 2025 | Prohibited practices apply |
| August 2025 | General-purpose AI model obligations |
| **August 2026** | **Full high-risk AI system obligations** |
| August 2027 | Certain embedded high-risk system obligations |

Starting now means your documentation, oversight, and audit trail are in place before enforcement.

---

## Getting Started for Compliance

### 1. Map your AI systems to scopes

Create one scope per AI system or risk domain. Example: "Credit Scoring AI", "Customer Chatbot", "Fraud Detection".

### 2. Codify existing risk controls

Review your risk assessments and encode them as invariants (absolute constraints) and rules (operational directives).

### 3. Record historical decisions

Backfill key decisions that shaped your AI systems. Include context and reasoning — this is your Article 11 documentation.

### 4. Connect your agents

AI agents query Knowledge via MCP before acting. They check constraints, request approvals, and record references.

### 5. Add the Verifier to CI/CD

Every code change produces a compliance report. Start with `report-only` mode, then promote to `fail-on-blocking`.

### 6. Export for regulatory filing

Event logs, decision histories, compliance reports, and reference traces export as structured JSON — ready for auditors.

---

## Learn More

- [Getting Started →](/docs/getting-started)
- [How it works →](/product/how-it-works)
- [Finance use case →](/use-cases/finance)
- [Pricing →](/pricing)
