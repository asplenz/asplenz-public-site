# Knowledge for Healthcare

Healthcare organizations deploying AI systems need rigorous documentation, human oversight, and audit trails. Knowledge provides the infrastructure to govern clinical AI, enforce protocol constraints, and meet regulatory requirements.

---

## The Challenge

- Clinical protocols and AI governance rules live in policy documents that no system reads
- AI-assisted diagnostic or treatment tools operate without structured awareness of clinical constraints
- Regulatory submissions require proof that AI systems were governed throughout their lifecycle
- Audit trails for AI decisions are manual and incomplete
- Changes to clinical protocols must cascade to all systems that depend on them

---

## How Knowledge Helps

### Codify Clinical Protocol Constraints

Turn clinical requirements into machine-enforceable invariants:

```
Invariant: "No AI-generated diagnostic suggestion without clinician review"
  Rationale: "Patient safety — all AI outputs in clinical context are advisory"
  requires_approval: false  (hard block, no override path)

Invariant: "Drug interaction alerts cannot be suppressed by AI agents"
  Rationale: "Regulatory requirement — safety alerts must always reach clinician"

Rule: "AI-assisted triage scores must be recalibrated quarterly"
  Severity: MANDATORY
```

When an AI agent processes clinical data, Knowledge enforces these constraints in real time.

### Document Decision Rationale

Record clinical AI decisions with full traceability:

```
Decision: "Use ensemble model for sepsis risk prediction"
  Context: "Single-model approach had 12% false negative rate"
  Reasoning: "Ensemble reduces FNR to 4% on validation cohort (n=12,400)"
  Author: clinical-ai-team
  Tags: [clinical, sepsis, model-selection]
    │
    ├── creates → Rule: "Sepsis model requires validation on current quarter data"
    └── creates → Invariant: "No sepsis prediction without vital signs within 4 hours"
```

### Human Oversight for High-Risk AI

For AI systems that influence clinical decisions:

```
Agent: process_radiology_scan(patient_id="...")
  → knowledge_check("Clinical AI")
  → Invariant: "All AI diagnostic outputs require clinician sign-off"
  → Agent generates analysis but flags for review
  → Clinician reviews and approves
  → Reference recorded: "Followed inv-4a2b in case CAS-2024-892"
```

The approval workflow ensures no AI output reaches a clinical decision without human oversight.

### Regulatory Audit Readiness

| Regulatory Need | Knowledge Feature |
|----------------|-------------------|
| FDA 21 CFR Part 11 (electronic records) | Immutable decisions, timestamped events, audit trail |
| EU MDR / AI Act | Invariants as risk controls, approval workflows, compliance reports |
| HIPAA audit trail | Event log with actor attribution, reference traces |
| Clinical trial governance | Decision history, protocol change tracking, version control on rules |

---

## Use Cases in Healthcare

### Clinical AI Governance

- Invariants for patient safety constraints (human review, alert thresholds)
- Rules for model validation and monitoring cadence
- Approval gates for deploying AI models to clinical environments
- Decision history for model selection with clinical justification

### Drug Development

- Decisions documenting trial protocol choices with regulatory context
- Rules for data handling and analysis methodology
- Invariants for safety reporting requirements
- Event timeline for GCP (Good Clinical Practice) audit trail

### Health IT Operations

- Deployment rules for clinical systems (change windows, rollback requirements)
- Invariants for data integrity (no modification of clinical records by AI)
- Rules for system access and authentication standards
- CI Verifier for health IT code changes

### Interoperability and Data Governance

- Decisions for data standard adoption (HL7 FHIR, DICOM)
- Rules for data quality requirements in AI training sets
- Invariants for consent-based data access
- Reference traces proving compliance per data use

---

## Get Started

1. [Install Knowledge →](/docs/getting-started)
2. Create scopes for your domains (Clinical AI, Health IT, Data Governance)
3. Run `knowledge extract` on your clinical protocol documents to pre-populate the registry
4. Review extracted drafts — approve patient safety constraints as invariants
5. Connect AI agents via MCP for real-time constraint checking

[Getting Started →](/docs/getting-started) · [AI Act Compliance →](/compliance/ai-act) · [Pricing →](/pricing)
