# Knowledge

## The decision registry for teams that ship with AI agents.

Extract rules from what exists. Record decisions. Enforce constraints. Prove compliance. One API for humans, agents, and pipelines.

---

## The Problem

Your team makes decisions every week. Most are never written down. The ones that are end up scattered across Confluence, Notion, Slack threads, and people's heads.

When an AI agent writes code for you, it has no idea about your architectural decisions, compliance requirements, or deployment rules. It acts without context. You review after the fact — and hope you catch the violations.

When an auditor asks "what constraints governed this AI-generated code?", you have no structured answer.

---

## Knowledge Fixes This

Knowledge is a structured registry where your team's decisions, constraints, and directives are captured once and enforced everywhere:

### Extract rules from what already exists

Your team already has rules — buried in READMEs, runbooks, architecture docs, and code comments. Knowledge scans your existing sources and surfaces them as typed candidates: invariants, rules, and decisions. You review and approve — nothing is published without human validation.

```bash
knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md
```

### Record decisions with context

Every architectural choice, policy decision, and operational rule gets recorded with who decided, when, why, and what it connects to. Decisions are immutable — the historical record is preserved.

### Enforce constraints in real time

**Invariants** are absolute constraints that block violating actions. **Rules** are directives that guide behavior. AI agents query Knowledge before acting — not after.

### Prove compliance automatically

Every agent query, every approval, every CI check generates a structured trace. When someone asks "was this constraint checked?", the answer is a database query — not a manual investigation.

---

## Four Interfaces, One Source of Truth

| Interface | Who Uses It | What They Do |
|-----------|------------|--------------|
| **CLI** | Engineers, DevOps | Extract rules from existing sources, manage the registry |
| **Web Dashboard** | Engineers, managers, compliance | Browse decisions, review drafts, search, check compliance |
| **MCP Server** | Claude, Cursor, AI agents | Query constraints, record decisions, request approvals |
| **CI Verifier** | GitHub Actions, GitLab CI | Check PRs against applicable rules, produce compliance reports |

All four interfaces read from and write to the same registry. What the CLI extracts, a human reviews. What an agent respects, a manager can audit.

---

## How It Works

```
Existing docs, repos, runbooks
    │
    ▼
knowledge extract → LLM analyzes sources
    │
    ▼
Typed drafts (invariants, rules, decisions)
    │
    ├── Human reviews → Approve or Reject
    └── Approved → Published to registry
    │
    ▼
Agent receives task
    │
    ▼
Query Knowledge: "What constraints apply?"
    │
    ├── Blocked by invariant → STOP
    ├── Requires approval → REQUEST and WAIT
    └── Allowed → PROCEED
    │
    ▼
Record reference: "I followed constraint X in PR #42"
```

Start by extracting what your team already knows. Then let agents enforce it. Every step produces a verifiable trail.

---

## Built for Regulated Environments

Knowledge maps directly to the EU AI Act's requirements for high-risk AI systems:

| AI Act Requirement | Knowledge Feature |
|-------------------|-------------------|
| Risk management (Art. 9) | Invariants and rules codify risk controls |
| Technical documentation (Art. 11) | Decisions with context, reasoning, and links |
| Record-keeping (Art. 12) | Events, references, normative hash |
| Human oversight (Art. 14) | Approval workflows, role-gated overrides |

[See full AI Act mapping →](/compliance/ai-act)

---

## Use Cases

### Engineering Teams
Capture architecture decisions. Enforce deployment rules. Give AI agents the context they need to write compliant code. [Learn more →](/use-cases/engineering)

### Financial Services
Model risk governance. Audit-ready decision trails. Human-in-the-loop for high-risk automated decisions. [Learn more →](/use-cases/finance)

### Legal and Compliance
Document policy decisions. Enforce compliance constraints. Produce structured evidence for regulators. [Learn more →](/use-cases/legal)

### Healthcare
Clinical protocol governance. AI system constraints. Audit trails for regulatory submissions. [Learn more →](/use-cases/healthcare)

---

## Start in 5 Minutes

```bash
git clone https://github.com/asplenz/knowledge.git
cd knowledge && python -m src.seed
uvicorn src.main:app --port 8090
```

Open `http://localhost:3002`, paste your API key, and explore a fully populated demo with decisions, invariants, rules, and approval workflows.

[Getting Started Guide →](/docs/getting-started) · [Pricing →](/pricing)

---

## Open Source Core

Knowledge's core is open source. The Community tier is free forever. Team and Enterprise add collaboration, CI integration, and compliance features for production use.

[View on GitHub →](https://github.com/asplenz/knowledge) · [Pricing →](/pricing)
