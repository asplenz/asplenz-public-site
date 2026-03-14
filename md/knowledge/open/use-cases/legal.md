# Knowledge for Legal and Compliance Teams

Legal and compliance teams need to document policy decisions, enforce regulatory constraints, and produce structured evidence for auditors. Knowledge provides the registry to do this systematically.

---

## The Challenge

- Policy decisions are recorded in emails, meeting notes, and scattered documents
- Compliance constraints exist in regulatory texts but are not machine-enforceable
- When auditors ask for evidence, teams spend days assembling it manually
- AI tools used by the organization operate without awareness of compliance requirements
- No structured way to prove that constraints were checked before actions were taken

---

## How Knowledge Helps

### Document Policy Decisions

Record every compliance decision with full context:

```
Decision: "GDPR data retention limit set to 36 months for customer records"
  Context: "Legal review of GDPR Art. 5(1)(e) and sector-specific guidance"
  Reasoning: "36 months balances legitimate business interest against minimization"
  Author: legal-team
  Tags: [gdpr, data-retention, privacy]
```

Link decisions to the constraints they create:

```
Decision: "36-month retention for customer records"
    ├── creates → Invariant: "No customer data retained beyond 36 months"
    └── creates → Rule: "Automated deletion pipeline must run monthly"
```

### Encode Regulatory Constraints

Turn regulatory requirements into machine-readable invariants:

```
Invariant: "Personal data processing requires documented legal basis"
  Rationale: "GDPR Art. 6 — no processing without lawful basis"
  requires_approval: true

Invariant: "Data transfers outside EU require adequacy decision or SCCs"
  Rationale: "GDPR Art. 44-49"

Rule: "Privacy impact assessment required for new data processing activities"
  Severity: MANDATORY
```

These constraints are checked automatically — by AI agents before they act, by the Verifier before code ships.

### Produce Structured Evidence

When an auditor asks "how do you ensure AI systems comply with your data governance policies?":

| Auditor Question | Knowledge Answer |
|-----------------|------------------|
| "What constraints exist?" | Export invariant and rule registry |
| "Who set these constraints?" | Each entry has author + timestamp |
| "Were constraints checked before deployment?" | Reference traces with status |
| "Who approved this exception?" | Approval chain: request → decision → override |
| "What changed and when?" | Event timeline with full attribution |

This is not a manual report. It is a structured export from a live registry.

### Gate High-Risk Actions

For actions that require legal review:

```
Engineer: deploys feature with new data collection
  → Verifier: conflict with invariant "Privacy impact required"
  → PR blocked

Engineer: creates approval request with justification
  → Legal team reviews → approves with conditions
  → Override created: "PIA completed, ref DOC-2024-47"
  → PR passes
```

---

## Use Cases in Legal/Compliance

### Data Privacy (GDPR)

- Invariants for data processing constraints (legal basis, retention, transfers)
- Rules for privacy impact assessments and data mapping
- Approval gates for new processing activities
- Decision history linking regulatory interpretation to operational controls

### Contract and IP Management

- Decisions recording licensing and contract interpretations
- Rules for IP attribution requirements in generated content
- Invariants for prohibited uses of third-party IP
- Reference traces proving compliance with licensing terms

### Corporate Governance

- Decisions documenting board resolutions and policy changes
- Rules for approval thresholds and delegation of authority
- Invariants for separation-of-duties requirements
- Event timeline for governance audit trail

### AI Governance

- Map to EU AI Act requirements (see [AI Act Compliance](/compliance/ai-act))
- Invariants for AI system risk controls
- Rules for model validation and monitoring
- Approval workflows for high-risk AI deployments

---

## Integration with Legal Workflows

Knowledge fits alongside your existing tools:

- **Document management**: decisions reference external legal documents by ID
- **Approval tools**: approval workflows in Knowledge complement existing legal review processes
- **Audit tools**: structured JSON export feeds into audit management platforms
- **AI agents**: legal-aware agents check constraints before taking actions

---

## Get Started

1. [Install Knowledge →](/docs/getting-started)
2. Create scopes for your compliance domains (Privacy, Contracts, Corporate Governance)
3. Run `knowledge extract` on your existing policy documents to pre-populate the registry
4. Review and approve extracted drafts, then refine with manual entries
5. Connect to your CI/CD pipeline for automated checks

[Getting Started →](/docs/getting-started) · [AI Act Compliance →](/compliance/ai-act) · [Pricing →](/pricing)
