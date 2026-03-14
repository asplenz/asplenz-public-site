# Knowledge for Financial Services

Financial institutions face regulatory requirements that demand traceability, auditability, and human oversight of automated decision-making. Knowledge provides the infrastructure to document, enforce, and prove compliance — from model risk management to AI governance.

---

## The Challenge

Financial services teams operate under strict regulatory frameworks (MiFID II, Basel III, EU AI Act, SOX). When AI agents or automated systems make decisions:

- Regulators want proof that constraints were enforced, not just documented
- Model risk management requires traceable decision chains from risk identification to control implementation
- Audit teams need structured evidence, not wiki pages and email threads
- Compliance officers must demonstrate human oversight of high-risk automated decisions

Traditional approaches — wikis, spreadsheets, email approvals — produce evidence that is scattered, incomplete, and expensive to reconstruct.

---

## How Knowledge Helps

### Model Risk Controls

Codify model governance requirements as invariants and rules:

```
Invariant: "No model deployed to production without validation committee sign-off"
  ├── requires_approval: true
  └── min_role_to_decide: tech-lead

Rule (mandatory): "All model changes require back-testing on 24 months of data"
  └── severity: MANDATORY

Rule (advisory): "Prefer ensemble methods over single models for credit scoring"
  └── severity: ADVISORY
```

When an AI agent or engineer attempts to deploy a model, Knowledge's compliance check catches violations *before* deployment.

### Traceable Decision Chains

Every decision links to its consequences:

```
Decision: "Switch credit scoring from logistic regression to gradient boosting"
  ├── Context: "False positive rate of 18% unacceptable for SME lending"
  ├── Reasoning: "Gradient boosting reduces FPR to 7% on backtesting data"
  ├── Author: risk-analytics-team
  │
  ├── creates → Rule: "Gradient boosting models require quarterly recalibration"
  ├── creates → Invariant: "No credit score change > 50 points without human review"
  └── supersedes → Decision: "Use logistic regression for all scoring" (2019)
```

When an auditor asks "why did you change the scoring model?", the answer is one query away — not a week of investigation.

### Regulatory Audit Trail

Knowledge produces audit-ready artifacts:

| What Regulators Ask | What Knowledge Provides |
|---------------------|------------------------|
| "How are AI decisions governed?" | Invariant and rule registry with version history |
| "Who approved this model change?" | Approval chain: request → decision → override |
| "Was this change reviewed by a human?" | Approval workflow with role verification |
| "What constraints applied at deployment time?" | Normative hash + reference traces |
| "Can you prove the agent checked before acting?" | Reference with status (followed/diverged) and context |

### Human-in-the-Loop for High-Risk Actions

For decisions above a risk threshold, Knowledge enforces human approval:

```
Agent: check("Deploy updated credit model to production")
  → Conflict: inv-8a3f "No model deployed without validation committee"
  → requires_approval: true

Agent: request_approval(
    trigger_id: "inv-8a3f",
    intended_action: "Deploy credit model v2.3",
    justification: "Backtested on 36 months, FPR improved 60%"
  )
  → Pending, waiting for tech-lead

Committee reviews in Knowledge dashboard → Approve
  → Override auto-created with conditions
  → Agent proceeds, reference recorded
```

The entire chain — check, conflict, request, approval, override, deployment trace — is one connected timeline.

---

## Use Cases in Finance

### Credit Risk

- Invariants for credit decision boundaries (max exposure, minimum documentation)
- Rules for model validation cadence and methodology
- Approval gates for credit limit changes above threshold
- Decision history linking risk appetite changes to model updates

### Trading and Market Risk

- Invariants for position limits and hedging requirements
- Rules for pre-trade compliance checks
- Reference traces proving risk limits were checked before execution
- Override mechanism for emergency situations with full audit trail

### Anti-Money Laundering (AML)

- Invariants for screening requirements (no transaction without sanctions check)
- Rules for enhanced due diligence thresholds
- Decision records for risk rating changes with justification
- Event timeline for regulatory reporting

### AI Governance (EU AI Act)

- Map AI systems to scopes (one scope per high-risk system)
- Codify Article 14 human oversight requirements as approval-gated invariants
- Export event logs and reference traces for Article 12 compliance
- Generate compliance reports per deployment via the CI Verifier

---

## Integration with Existing Infrastructure

Knowledge integrates into financial service workflows through:

- **CLI extraction**: Scan existing policy documents, risk frameworks, and runbooks to populate the registry automatically. Review and approve — nothing is published without human validation.
- **API**: REST API for integration with internal risk platforms, model registries, and compliance tools
- **MCP**: AI agents (Claude, Cursor) query constraints in real-time before acting
- **CI Verifier**: Automated compliance checks on every code change
- **Export**: Structured JSON export for regulatory filing systems and audit tools

---

## Getting Started

1. [Start with the Getting Started guide →](/docs/getting-started)
2. Create scopes for your risk domains (Credit, Market, AML, Model Governance)
3. Run `knowledge extract` on your existing risk policy documents to pre-populate the registry
4. Review extracted drafts and approve the ones that are correct
5. Connect your AI agents and pipelines
6. Export your first compliance report

[View pricing →](/pricing) · [EU AI Act compliance →](/compliance/ai-act)
