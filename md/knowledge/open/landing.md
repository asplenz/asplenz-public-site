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

Your team already has rules — buried in READMEs, runbooks, architecture docs, and code comments. Ask your AI agent to extract them: it reads your local files, analyzes them via Knowledge, and surfaces typed candidates: invariants, rules, and decisions. You review and approve — nothing is published without human validation.

```
> "Extract rules from ./docs and ./CLAUDE.md for the Engineering scope"

Scanning 14 files...
  8 invariant candidates  (e.g., "All endpoints must require authentication")
  11 rule candidates       (e.g., "Use conventional commits")
  5 decision candidates   (e.g., "Chose PostgreSQL over DynamoDB")
  3 duplicates skipped
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
| **Web Dashboard** | Engineers, managers, compliance | Browse decisions, review drafts, search, check compliance |
| **MCP Server** | Claude Code, Cursor, AI agents | Extract rules, query constraints, record decisions, request approvals |
| **REST API** | Scripts, custom integrations | Programmatic access to the full registry |
| **CI Verifier** | GitHub Actions, GitLab CI | Check PRs against applicable rules, produce compliance reports |

All interfaces read from and write to the same registry. What an agent extracts, a human reviews. What an agent respects, a manager can audit.

---

## How It Works

```
Existing docs, repos, runbooks
    │
    ▼
AI agent reads local files → sends to Knowledge for analysis
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

## Get Started

1. [Create your account](/docs/getting-started)
2. Create your first scope
3. Connect your AI agent via MCP
4. Ask the agent to extract rules from your existing docs
5. Review and approve the drafts in the dashboard
6. Add the Verifier to your CI pipeline

[Getting Started Guide →](/docs/getting-started) · [Pricing →](/pricing)
