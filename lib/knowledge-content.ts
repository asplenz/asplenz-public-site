export interface KnowledgeDoc {
  title: string
  content: string
  gated?: boolean
}

/* eslint-disable no-useless-escape */
export const knowledgeContent: Record<string, KnowledgeDoc> = {

  'landing': {
    title: 'Knowledge',
    content: `# Knowledge

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

\`\`\`bash
knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md
\`\`\`

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

\`\`\`
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
\`\`\`

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

[See full AI Act mapping →](/knowledge/compliance/ai-act)

---

## Use Cases

### Engineering Teams
Capture architecture decisions. Enforce deployment rules. Give AI agents the context they need to write compliant code. [Learn more →](/knowledge/use-cases/engineering)

### Financial Services
Model risk governance. Audit-ready decision trails. Human-in-the-loop for high-risk automated decisions. [Learn more →](/knowledge/use-cases/finance)

### Legal and Compliance
Document policy decisions. Enforce compliance constraints. Produce structured evidence for regulators. [Learn more →](/knowledge/use-cases/legal)

### Healthcare
Clinical protocol governance. AI system constraints. Audit trails for regulatory submissions. [Learn more →](/knowledge/use-cases/healthcare)

---

## Start in 5 Minutes

\`\`\`bash
git clone https://github.com/asplenz/knowledge.git
cd knowledge && python -m src.seed
uvicorn src.main:app --port 8090
\`\`\`

Open \`http://localhost:3002\`, paste your API key, and explore a fully populated demo with decisions, invariants, rules, and approval workflows.

[Getting Started Guide →](/knowledge/docs/getting-started) · [Pricing →](/knowledge/pricing)

---

## Open Source Core

Knowledge's core is open source. The Community tier is free forever. Team and Enterprise add collaboration, CI integration, and compliance features for production use.

[View on GitHub →](https://github.com/asplenz/knowledge) · [Pricing →](/knowledge/pricing)
`,
  },

  'pricing': {
    title: 'Pricing',
    content: `# Pricing

Knowledge is designed for teams that need structured decision management and compliance — from small startups to regulated enterprises.

---

## Plans

### Community
**Free** — for individuals and small teams exploring Knowledge.

- Up to 3 scopes
- Up to 2 API keys
- 1 tenant
- Full API access
- Dashboard and search
- MCP integration (Claude, Cursor)
- Community support (GitHub Issues)

Best for: side projects, personal decision registries, evaluating the platform.

---

### Team
**$29 / user / month** — for engineering teams that want structured governance.

- Unlimited scopes
- Unlimited API keys
- 1 tenant with namespaces
- Approval workflows
- CI/CD Verifier integration
- Event timeline and audit log
- Role-based access (developer, senior-dev, tech-lead, admin)
- Email support
- 99.9% uptime SLA

Best for: engineering teams of 5–50 who want to capture decisions, enforce rules, and connect AI agents to organizational knowledge.

---

### Enterprise
**Custom pricing** — for organizations with regulatory requirements.

Everything in Team, plus:

- Multi-tenant hierarchy (holding → subsidiaries)
- SSO / SAML integration
- Advanced analytics (coverage, completeness, dead entries)
- Custom retention policies
- Dedicated support and onboarding
- On-premise deployment option
- Compliance reporting (AI Act, SOC 2, ISO 27001)
- Custom SLA

Best for: regulated industries (finance, healthcare, legal), large organizations with multiple business units, companies preparing for the EU AI Act.

---

## Feature Comparison

| Feature | Community | Team | Enterprise |
|---------|:---------:|:----:|:----------:|
| Scopes | 3 | Unlimited | Unlimited |
| API keys | 2 | Unlimited | Unlimited |
| Tenants | 1 | 1 | Unlimited (hierarchy) |
| Decisions, rules, invariants | ✓ | ✓ | ✓ |
| Automatic extraction (CLI) | ✓ | ✓ | ✓ |
| Overrides and exceptions | ✓ | ✓ | ✓ |
| Search (full-text) | ✓ | ✓ | ✓ |
| MCP integration | ✓ | ✓ | ✓ |
| Draft review workflow | — | ✓ | ✓ |
| Stream API (custom sources) | — | ✓ | ✓ |
| Approval workflows | — | ✓ | ✓ |
| CI/CD Verifier | — | ✓ | ✓ |
| Role-based access | — | ✓ | ✓ |
| Event timeline | — | ✓ | ✓ |
| Namespaces | — | ✓ | ✓ |
| Relation graph | — | ✓ | ✓ |
| Multi-tenant | — | — | ✓ |
| SSO / SAML | — | — | ✓ |
| Advanced analytics | — | — | ✓ |
| Compliance reporting | — | — | ✓ |
| On-premise | — | — | ✓ |
| Support | Community | Email | Dedicated |
| SLA | — | 99.9% | Custom |

---

## Frequently Asked Questions

### Can I start free and upgrade later?

Yes. Community is fully functional — just limited in scale. Your data, scopes, and configurations carry over when you upgrade.

### Is there a free trial for Team?

Yes, 14-day free trial with no credit card required. Full Team features, up to 10 users.

### How do you count users?

A user is a Principal (human or agent) with an active API key. Deactivated principals don't count. System principals created for CI/CD integrations count as users.

### Can I self-host?

Community and Team are cloud-hosted. Enterprise includes an on-premise deployment option with the same API and feature set.

### What about data sovereignty?

Enterprise plan supports deployment in your cloud (AWS, Azure, GCP) or on-premise. Data never leaves your infrastructure.

### Do you offer discounts for startups or nonprofits?

Yes. Contact us for startup and nonprofit pricing.

---

## Get Started

- **Community**: [Sign up free](/signup) — no credit card required
- **Team**: [Start 14-day trial](/signup?plan=team)
- **Enterprise**: [Contact sales](/contact)
`,
  },

  'how-it-works': {
    title: 'How Knowledge Works',
    content: `# How Knowledge Works

Knowledge is a decision registry that connects humans, AI agents, and CI pipelines to a single source of truth for organizational constraints.

---

## The Core Idea

Organizations make decisions. Those decisions produce constraints. Constraints must be enforced. Today, decisions live in wikis, constraints live in people's heads, and enforcement is manual. Knowledge changes this by extracting what already exists, making decisions structured, constraints machine-readable, and enforcement automatic.

---

## Three Entities, One Registry

### Decisions

A **decision** is a historical fact — what was decided, by whom, when, and why. Decisions are immutable: once recorded, they cannot be edited. The historical record is preserved exactly as it was captured.

\`\`\`json
{
  "decision": "Use PostgreSQL for all transactional data stores",
  "context": "Evaluated PostgreSQL, DynamoDB, and CockroachDB",
  "reasoning": "ACID guarantees without distributed complexity",
  "author": "sarah.chen",
  "tags": ["database", "infrastructure"]
}
\`\`\`

Decisions answer the question: **"Why does this rule exist?"**

### Invariants

An **invariant** is an absolute constraint — something that must never be violated. Invariants are blocking: if an action conflicts with an invariant, the action is stopped.

\`\`\`json
{
  "constraint": "All public API endpoints must require authentication",
  "rationale": "Security baseline — no exceptions without explicit approval",
  "requires_approval": true
}
\`\`\`

Invariants answer the question: **"What must never happen?"**

### Rules

A **rule** is an active directive — something that should be followed. Rules are versioned: when requirements change, a new version is created while the history is preserved.

Rules have two severity levels:
- **Mandatory**: must be followed; violations block CI checks
- **Advisory**: should be followed; violations generate warnings

\`\`\`json
{
  "directive": "All PRs must be reviewed by at least one team member",
  "severity": "MANDATORY"
}
\`\`\`

Rules answer the question: **"What should we do?"**

---

## How Entries Connect

Entities link to each other through typed relations:

\`\`\`
Decision: "Use PostgreSQL for transactional data"
    │
    ├── creates → Invariant: "No eventual consistency for financial transactions"
    ├── creates → Rule: "New services must use PostgreSQL unless exempted"
    └── supersedes → Decision: "Evaluate NoSQL for payments" (earlier)
\`\`\`

Relation types: \`depends_on\`, \`supersedes\`, \`contradicts\`, \`in_tension_with\`, \`creates\`.

This graph means you can always trace *why* a constraint exists — follow the links back to the decision.

---

## Scopes and Organization

Knowledge is organized into **scopes** — domains like Engineering, Product, Operations, or Security. Each scope contains its own decisions, invariants, and rules. Within a scope, **namespaces** allow further subdivision (e.g., \`payments\`, \`auth\`, \`infra\`).

\`\`\`
Tenant: Acme Corp
  └── Scope: Engineering
  │     ├── Namespace: payments
  │     ├── Namespace: infrastructure
  │     └── Namespace: _root (default)
  └── Scope: Operations
        └── Namespace: _root
\`\`\`

For multi-entity organizations, **tenants** provide isolation. A holding company can have subsidiary tenants, each with their own scopes and entries.

---

## Start from What You Have

Most teams already have rules — they're just not structured. They live in READMEs, architecture docs, runbooks, code comments, and CLAUDE.md files. Knowledge extracts them automatically.

### Automatic Extraction

The \`knowledge extract\` CLI scans your sources and uses LLM analysis to surface implicit rules, decisions, and constraints:

\`\`\`bash
knowledge extract --scope Engineering --source ./docs --source ./README.md
\`\`\`

The CLI reads every file matching the configured patterns, splits them into chunks, and sends each chunk through an extraction pipeline. The LLM identifies:

- **Invariant candidates**: absolute constraints ("All endpoints must require authentication")
- **Rule candidates**: active directives ("Use conventional commits")
- **Decision candidates**: historical choices with context ("We chose PostgreSQL for...")

Each extraction includes a confidence score, the source excerpt that motivated it, and suggested tags.

### Human Review

Nothing is published without human validation. Every extraction becomes a **draft** in the review queue:

\`\`\`
knowledge extract → 47 chunks analyzed → 12 drafts generated

Draft dsd-8a3f (invariant, confidence: 0.91)
  Constraint: "All API endpoints must require authentication"
  Source: docs/security.md, line 42
  → Approve | Reject | Edit
\`\`\`

Reviewers see the source context, confidence level, and any detected relations to existing entries (duplicates, replacements, tensions). Approved drafts become real entries in the registry. Rejected drafts are discarded.

---

## Four Interfaces, One Source of Truth

### CLI

Engineers extract rules from existing documentation, run the extraction pipeline, and manage the registry from the terminal.

### Web Dashboard

Humans browse scopes, read decisions, review pending drafts and approvals, and search the registry. The dashboard shows KPI cards, extraction drafts with approve/reject workflow, scope pages with tabs, full-text search, and a compliance checker.

### MCP for AI Agents

AI agents (Claude, Cursor, etc.) connect via MCP and interact using natural language:

\`\`\`
User: "Can I deploy on Friday evening?"
Agent → knowledge_check(scope="Engineering", intended_action="Deploy on Friday evening")
Knowledge → Conflict: invariant inv-8a3f "No Friday deploys after 16:00 UTC"
Agent: "No — blocked by invariant inv-8a3f. The team has a no-Friday-deploy policy."
\`\`\`

### CI/CD Verifier

The Verifier runs in your CI pipeline and checks that every PR cites applicable Knowledge entries. It produces a machine-readable JSON result and a human-readable Markdown report. Three modes: \`report-only\`, \`fail-on-blocking\`, \`strict\`.

---

## The Compliance Loop

\`\`\`
 0. EXTRACT    1. RECORD      2. ENFORCE      3. TRACE
 ─────────    ─────────      ─────────       ─────────
 Scan sources → Decisions  → Invariants   → References
 LLM analysis   Context       block actions   prove compliance
 Human review   Reasoning     Rules           followed/diverged
                              direct actions  Events
                              Approvals       log everything
                              gate high-risk
\`\`\`

---

## Overrides: Governed Exceptions

Sometimes you need to break a rule. Knowledge handles this through **overrides** — explicit exceptions with justification, conditions, expiry, and an approval chain. Overrides are not workarounds — they are governed exceptions that prove the organization acknowledged a constraint, decided to deviate, and documented why.

---

## Learn More

- [Getting Started →](/knowledge/docs/getting-started)
- [Automatic Extraction →](/knowledge/docs/extraction)
- [Concepts: Decisions →](/knowledge/docs/concepts/decisions)
- [Concepts: Invariants →](/knowledge/docs/concepts/invariants)
- [Integrations: Claude MCP →](/knowledge/docs/integrations/claude-mcp)
- [Pricing →](/knowledge/pricing)
`,
  },

  'getting-started': {
    title: 'Getting Started with Knowledge',
    content: `# Getting Started with Knowledge

Get a working Knowledge instance in under 10 minutes. By the end of this guide, you'll have:
- A running API with seed data
- A web dashboard to explore decisions, invariants, and rules
- Rules automatically extracted from your existing docs
- An AI agent connected via MCP

---

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Python | 3.11+ |
| Node.js | 18+ |
| Conda | any recent |
| Git | any recent |

---

## 1. Clone and Install

\`\`\`bash
git clone https://github.com/asplenz/knowledge.git
cd knowledge
\`\`\`

### Backend (Python)

\`\`\`bash
conda create -n knowledge python=3.12 -y
conda activate knowledge
cd src/knowledge-api
pip install -r requirements.txt
\`\`\`

### Frontend (React)

\`\`\`bash
cd src/knowledge-ui
npm install
\`\`\`

---

## 2. Seed the Database

Knowledge ships with a seed script that creates a demo tenant, scopes, and sample entries:

\`\`\`bash
cd src/knowledge-api
python -m src.seed
\`\`\`

Output:
\`\`\`
Created tenant: Acme Corp (tnt-...)
Created scope: Engineering (scp-...)
Created scope: Operations (scp-...)
Created scope: Product (scp-...)
Created 9 decisions, 4 invariants, 4 rules, 2 overrides
Admin API key: kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
\`\`\`

**Save the API key** — it is shown only once.

---

## 3. Start the API

\`\`\`bash
cd src/knowledge-api
uvicorn src.main:app --reload --port 8090
\`\`\`

Verify it's running:
\`\`\`bash
curl http://localhost:8090/health
# {"status": "ok"}
\`\`\`

---

## 4. Start the Dashboard

In a separate terminal:
\`\`\`bash
cd src/knowledge-ui
npm run dev
\`\`\`

Open [http://localhost:3002](http://localhost:3002). Paste your API key and click **Connect**.

---

## 5. Your First API Call

### Search for a decision

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/search \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "FastAPI"}'
\`\`\`

### Record a new decision

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/decisions \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "decision": "Use Docker Compose for local development",
    "context": "Developers waste time setting up services manually",
    "author": "your-name",
    "author_type": "human",
    "tags": ["infrastructure", "dx"]
  }'
\`\`\`

### Check compliance

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/check \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "scp-XXXX",
    "intended_action": "Deploy on Friday evening without review"
  }'
\`\`\`

---

## 6. Extract Rules from Existing Docs

\`\`\`bash
knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md
\`\`\`

The CLI reads every matching file, analyzes each chunk with an LLM, and creates typed drafts. Open the dashboard and navigate to the extraction page to review and approve.

---

## 7. Connect an AI Agent (MCP)

Create or update \`.mcp.json\` in your project root:

\`\`\`json
{
  "mcpServers": {
    "knowledge": {
      "command": "python",
      "args": ["src/knowledge-mcp/server.py"],
      "env": {
        "KNOWLEDGE_API_KEY": "kn_xxxxxxxx",
        "KNOWLEDGE_API_URL": "http://localhost:8090"
      }
    }
  }
}
\`\`\`

Then launch Claude Code from the same directory: \`claude\`

---

## 8. Add the CI Verifier (Optional)

\`\`\`yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: python -m knowledge_verifier --config .knowledge-verifier.yml
  env:
    KNOWLEDGE_API_URL: \${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: \${{ secrets.KNOWLEDGE_API_KEY }}
\`\`\`

Start in \`report-only\` mode to see results without blocking PRs.

---

## What's Next

| Goal | Read |
|------|------|
| Extract rules from existing docs | [Automatic Extraction](/knowledge/docs/extraction) |
| Understand the data model | [Concepts: Decisions](/knowledge/docs/concepts/decisions) |
| Define constraints | [Concepts: Invariants](/knowledge/docs/concepts/invariants) |
| Set up CI compliance | [CI/CD Integration](/knowledge/docs/integrations/ci-cd) |
| Connect AI agents | [Claude MCP](/knowledge/docs/integrations/claude-mcp) |
| Explore the full API | [API Reference](/knowledge/docs/integrations/api-reference) |

---

## Common Issues

| Problem | Fix |
|---------|-----|
| \`Connection refused\` on port 8090 | Start the API: \`uvicorn src.main:app --port 8090\` |
| \`Invalid or expired API key\` | Re-seed: \`python -m src.seed\` and use the new key |
| Dashboard shows no data | Make sure you seeded the database |
| MCP tools not showing in Claude | Launch Claude from the directory containing \`.mcp.json\` |
`,
  },

  'extraction': {
    title: 'Automatic Extraction',
    content: `# Automatic Extraction

Knowledge can scan your existing documentation and extract implicit rules, decisions, and constraints automatically. Nothing is published without human review.

---

## Why Extraction?

Most teams already have rules — they're just not structured. They live in:

- READMEs and CLAUDE.md files
- Architecture decision records
- Runbooks and playbooks
- Code comments and docstrings
- Wiki pages and Confluence docs

Automatic extraction solves the cold-start problem: point the CLI at your sources and get a populated registry in minutes.

---

## How It Works

\`\`\`
Sources (docs, repos, files)
    │
    ▼
knowledge extract → reads files, splits into chunks
    │
    ▼
LLM analysis → identifies typed candidates
    │
    ▼
Deduplication → filters exact duplicates, flags similar entries
    │
    ▼
Drafts (pending) → human review in dashboard
    │
    ├── Approve → published to registry
    ├── Edit → modify then approve
    └── Reject → discarded
\`\`\`

### 1. Point at your sources

\`\`\`bash
knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md
\`\`\`

The CLI reads every file matching the configured patterns (default: \`**/*.md\`). You can target specific directories:

\`\`\`bash
knowledge extract --scope Engineering \\
  --source ./docs --pattern "**/*.md" \\
  --source ./src --pattern "**/README.md" \\
  --source . --pattern "CLAUDE.md"
\`\`\`

### 2. LLM analyzes each chunk

Files are split into contextual chunks (~1500 characters with 10% overlap). Each chunk is sent to an LLM with a structured extraction prompt. The LLM identifies invariant candidates, rule candidates, and decision candidates.

Each extraction includes a **confidence score** (0.0–1.0, minimum 0.6), **source excerpt**, **suggested tags**, and **LLM explanation**.

### 3. Deduplication filters noise

| Similarity | Result |
|-----------|--------|
| >= 0.92 | Exact duplicate — silently discarded |
| >= 0.80 | Similar — draft created with \`REPLACES\` relation |
| < 0.80 | New — draft created without relations |

### 4. Human review

Every extraction becomes a **draft** visible in the web dashboard. Reviewers see the extracted content, source file, detected relations, and LLM explanation. Three actions: **Approve**, **Reject**, or **Edit** before approving.

---

## Source Types

### Git (working copy)

\`\`\`bash
knowledge extract --scope Engineering --source /path/to/repo --pattern "**/*.md"
\`\`\`

### Stream API (custom sources)

For sources that don't live on disk, push documents directly via the API:

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/distill/stream \\
  -H "Authorization: Bearer kn_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "scp-...",
    "documents": [{"content": "All deployments must go through staging first."}],
    "auto_run": true
  }'
\`\`\`

---

## Permissions

| Action | Required permission | Minimum role |
|--------|-------------------|-------------|
| Launch extraction | \`distill_run\` | senior-dev |
| View runs and drafts | \`distill_read\` | developer |
| Approve / reject / edit drafts | \`distill_review\` | tech-lead |
| Push via Stream API | \`distill_stream\` | admin |

---

## Configuration

| Parameter | Default | Description |
|-----------|---------|-------------|
| Model | claude-sonnet-4-5-20250514 | LLM used for extraction |
| Min confidence | 0.6 | Below this, extractions are discarded |
| Chunk size | ~1500 chars | Paragraph-based with 10% overlap |
| Dedup exact threshold | 0.92 | Similarity above this = duplicate |
| Dedup similar threshold | 0.80 | Similarity above this = REPLACES relation |

Set the Anthropic API key to enable LLM extraction:

\`\`\`bash
export KNOWLEDGE_ANTHROPIC_API_KEY=sk-ant-...
\`\`\`

---

## Best Practices

- **Start broad, then refine**: run extraction on your entire \`docs/\` directory first.
- **Review in batches**: don't approve one draft at a time.
- **Re-extract periodically**: run every quarter to catch new implicit rules.
- **Use tags consistently**: review suggested tags for consistency.
`,
  },

  'concepts/decisions': {
    title: 'Concepts: Decisions',
    content: `# Concepts: Decisions

A **decision** is the foundational entity in Knowledge. It records what was decided, by whom, when, and why — as an immutable historical fact.

---

## What Is a Decision?

| Field | Type | Description |
|-------|------|-------------|
| \`decision\` | string | What was decided |
| \`context\` | string | The situation that led to the decision |
| \`reasoning\` | string | Why this option was chosen |
| \`author\` | string | Who made the decision |
| \`author_type\` | enum | \`human\`, \`agent\`, or \`system\` |
| \`tags\` | string[] | Categorization labels |
| \`namespace\` | string | Sub-scope organization (default: \`_root\`) |

Decisions are **immutable** — once created, they cannot be modified. This preserves the historical record exactly as it was captured. If a decision is later revised, the new decision links to the old one via a \`supersedes\` relation.

---

## Creating a Decision

### Via the API

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/decisions \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "decision": "Use PostgreSQL for all transactional data stores",
    "context": "Evaluated PostgreSQL, DynamoDB, and CockroachDB",
    "reasoning": "ACID guarantees without distributed complexity",
    "author": "sarah.chen",
    "author_type": "human",
    "tags": ["database", "infrastructure"]
  }'
\`\`\`

### Via MCP (AI Agent)

\`\`\`
"Record a decision in Engineering: we chose PostgreSQL for the production database.
 Context: evaluated PostgreSQL, DynamoDB, and CockroachDB.
 Reasoning: ACID guarantees without distributed complexity."
\`\`\`

### Via the Dashboard

Navigate to a scope → Decisions tab → **Add Decision** → fill in the form.

---

## Linking Decisions to Constraints

\`\`\`json
{
  "from_id": "dec-abc123",
  "from_type": "decision",
  "to_id": "inv-def456",
  "to_type": "invariant",
  "relation": "creates"
}
\`\`\`

Available relation types: \`creates\`, \`depends_on\`, \`supersedes\`, \`contradicts\`, \`in_tension_with\`.

---

## Searching Decisions

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/search \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "database", "entry_type": "decision", "scope_id": "scp-XXXX"}'
\`\`\`

---

## Best Practices

- **Record at decision time**, not retroactively.
- **Include the alternatives considered** in the context field.
- **Tag consistently** using domain and category tags.
- **Link to constraints** when a decision creates a rule or invariant.
- **Use author_type accurately** — if an AI agent suggested the decision and a human approved it, the author should be the human who approved.

---

## Related Concepts

- [Invariants](/knowledge/docs/concepts/invariants) — blocking constraints, often created by decisions
- [Rules](/knowledge/docs/concepts/rules) — active directives, often created by decisions
- [Overrides](/knowledge/docs/concepts/overrides) — governed exceptions to invariants and rules
`,
  },

  'concepts/invariants': {
    title: 'Concepts: Invariants',
    content: `# Concepts: Invariants

An **invariant** is an absolute constraint — something that must never be violated. Invariants are the strongest enforcement mechanism in Knowledge.

---

## What Is an Invariant?

| Field | Type | Description |
|-------|------|-------------|
| \`constraint\` | string | The constraint statement |
| \`rationale\` | string | Why this constraint exists |
| \`requires_approval\` | boolean | Whether an override requires human approval |
| \`status\` | enum | \`active\` or \`revoked\` |
| \`namespace\` | string | Sub-scope organization (default: \`_root\`) |

Invariants are **blocking**: if an action conflicts with an active invariant, Knowledge reports a blocking conflict. The action should be stopped or an override must be obtained.

---

## Creating an Invariant

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/invariants \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "constraint": "All public API endpoints must require authentication",
    "rationale": "Security baseline — no exceptions without explicit approval",
    "requires_approval": true,
    "author": "security-team",
    "author_type": "human"
  }'
\`\`\`

---

## How Invariants Are Enforced

### Compliance Check

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/check \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"scope_id": "scp-XXXX", "intended_action": "Add a public health endpoint without authentication"}'
\`\`\`

Response:
\`\`\`json
{
  "conflicts": [
    {
      "entry_id": "inv-8a3f1b2c4d5e",
      "entry_type": "invariant",
      "constraint": "All public API endpoints must require authentication",
      "severity": "blocking",
      "requires_approval": true
    }
  ]
}
\`\`\`

### CI Verifier

The Verifier checks PRs against active invariants. If a mandatory invariant is applicable and not cited in the PR's Implementation Report, the Verifier fails the check.

### MCP Agent

\`\`\`
Agent → knowledge_list_invariants("Engineering")
  → Returns all active invariants for the scope
  → Agent evaluates its planned action against each
  → If conflict: stops and reports, or requests approval
\`\`\`

---

## Approval-Gated Invariants

When \`requires_approval\` is \`true\`:

\`\`\`
1. Agent detects conflict with invariant
2. Agent calls request_approval(trigger_id="inv-8a3f", ...)
3. Approval request appears in the dashboard
4. Human with required role reviews and decides
5. If approved → override is auto-created
6. Agent re-checks → conflict resolved → proceeds
\`\`\`

---

## Revoking an Invariant

\`\`\`bash
curl -X DELETE http://localhost:8090/api/v1/scopes/scp-XXXX/invariants/inv-XXXX \\
  -H "Authorization: Bearer kn_xxxxxxxx"
\`\`\`

Revocation sets \`is_active = false\` and records \`revoked_at\`. The invariant is preserved for audit — it is not deleted.

---

## Best Practices

- **Keep invariants few and critical**. Reserve invariants for constraints that should genuinely never be violated.
- **Use \`requires_approval\` for high-risk invariants**.
- **Write clear rationale** explaining *why* the constraint exists.
- **Link to the decision** that created the invariant.
- **Review periodically** — invariants that no longer apply should be revoked.

---

## Related Concepts

- [Decisions](/knowledge/docs/concepts/decisions)
- [Rules](/knowledge/docs/concepts/rules)
- [Overrides](/knowledge/docs/concepts/overrides)
`,
  },

  'concepts/rules': {
    title: 'Concepts: Rules',
    content: `# Concepts: Rules

A **rule** is an active directive — a statement of what should be done. Unlike invariants (absolute blocks), rules can be mandatory or advisory, and they are versioned to track how standards evolve.

---

## What Is a Rule?

| Field | Type | Description |
|-------|------|-------------|
| \`directive\` | string | What should be done |
| \`severity\` | enum | \`MANDATORY\` or \`ADVISORY\` |
| \`status\` | enum | \`active\` or \`archived\` |
| \`namespace\` | string | Sub-scope organization (default: \`_root\`) |

Rules are **versioned**: when a rule changes, a new version is created while the full history is preserved.

### Severity Levels

| Severity | Meaning | CI Behavior |
|----------|---------|-------------|
| **MANDATORY** | Must be followed | Verifier fails if uncited |
| **ADVISORY** | Should be followed | Verifier warns if uncited |

---

## Creating a Rule

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/rules \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "directive": "All PRs must be reviewed by at least one team member before merging",
    "severity": "MANDATORY",
    "author": "tech-lead",
    "author_type": "human"
  }'
\`\`\`

---

## Versioning

When a rule needs to change, update it — Knowledge creates a new version automatically:

\`\`\`bash
curl -X PUT http://localhost:8090/api/v1/scopes/scp-XXXX/rules/rul-XXXX \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "directive": "All PRs must be reviewed by at least two team members before merging",
    "severity": "MANDATORY",
    "change_reason": "Increased review requirement after production incident"
  }'
\`\`\`

---

## How Rules Are Enforced

### Compliance Check

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/check \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"scope_id": "scp-XXXX", "intended_action": "Merge a PR without any review"}'
\`\`\`

### CI Verifier

- **Mandatory rules**: uncited = Verifier fails
- **Advisory rules**: uncited = Verifier warns

---

## Archiving a Rule

\`\`\`bash
curl -X PATCH http://localhost:8090/api/v1/scopes/scp-XXXX/rules/rul-XXXX/archive \\
  -H "Authorization: Bearer kn_xxxxxxxx"
\`\`\`

Archived rules are no longer returned by compliance checks but remain for audit purposes.

---

## Best Practices

- **Distinguish mandatory from advisory**. Not every guideline needs to block CI.
- **Version with change reasons**. A version without a \`change_reason\` is an incomplete audit trail.
- **Link to the decision** that created the rule.
- **Archive instead of deleting**.
- **Keep directives actionable**. "Code should be clean" is not enforceable.

---

## Related Concepts

- [Decisions](/knowledge/docs/concepts/decisions)
- [Invariants](/knowledge/docs/concepts/invariants)
- [Overrides](/knowledge/docs/concepts/overrides)
`,
  },

  'concepts/overrides': {
    title: 'Concepts: Overrides',
    content: `# Concepts: Overrides

An **override** is a governed exception to an invariant or rule. It documents that the organization knowingly deviated from a constraint, with justification and conditions.

---

## What Is an Override?

| Field | Type | Description |
|-------|------|-------------|
| \`target_id\` | string | ID of the invariant or rule being overridden |
| \`override_type\` | enum | \`temporary\` or \`permanent\` |
| \`justification\` | string | Why the exception is needed |
| \`conditions\` | string | When the override applies |
| \`approved_by\` | string | Who approved the exception |
| \`expires_at\` | datetime | When the override expires (temporary only) |

Overrides are **not workarounds**. They are explicit, documented exceptions that prove the organization acknowledged a constraint, evaluated the risk, and decided to deviate — with a clear paper trail.

---

## Creating an Override

### Via the API

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/overrides \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target_id": "inv-8a3f1b2c4d5e",
    "override_type": "temporary",
    "justification": "Health endpoint must be public for load balancer checks",
    "conditions": "Only applies to /health and /ready endpoints",
    "approved_by": "tech-lead",
    "expires_at": "2025-06-01T00:00:00Z"
  }'
\`\`\`

### Via Approval Workflow

When an invariant has \`requires_approval: true\`, overrides are created automatically after approval.

---

## Temporary vs. Permanent

| Type | Use Case | Behavior |
|------|----------|----------|
| **Temporary** | Hotfix, time-limited exception | Expires at \`expires_at\`, then constraint re-applies |
| **Permanent** | Deliberate long-term exception | Active until explicitly revoked |

Prefer temporary overrides. Permanent overrides should be rare and well-justified.

---

## How Overrides Affect Compliance

When an override is active, the compliance check moves the target entry from "conflicts" to "overridden":

\`\`\`json
{
  "conflicts": [],
  "overridden": [
    {
      "entry_id": "inv-8a3f1b2c4d5e",
      "override_id": "ovr-9d1e3f5a7b2c",
      "justification": "Health endpoint must be public for load balancer checks"
    }
  ]
}
\`\`\`

---

## Revoking an Override

\`\`\`bash
curl -X DELETE http://localhost:8090/api/v1/scopes/scp-XXXX/overrides/ovr-XXXX \\
  -H "Authorization: Bearer kn_xxxxxxxx"
\`\`\`

---

## Best Practices

- **Always include justification**.
- **Prefer temporary** — set an expiry date when possible.
- **Use conditions** to narrow the scope of the exception.
- **Review expired overrides** — they may indicate constraints that need updating.

---

## Related Concepts

- [Invariants](/knowledge/docs/concepts/invariants)
- [Rules](/knowledge/docs/concepts/rules)
- [Decisions](/knowledge/docs/concepts/decisions)
`,
  },

  'concepts/scopes': {
    title: 'Concepts: Scopes and Namespaces',
    content: `# Concepts: Scopes and Namespaces

**Scopes** organize knowledge by domain. **Namespaces** subdivide scopes for finer-grained structure. Together, they define where entries live and who can access them.

---

## Scopes

A scope represents a domain or department: Engineering, Product, Operations, Security, Legal. Each scope contains its own decisions, invariants, rules, overrides, and events.

### Creating a Scope

\`\`\`bash
curl -X POST http://localhost:8090/api/v1/scopes \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Engineering", "description": "Engineering decisions and architecture rules"}'
\`\`\`

### Scope Access

API keys control access at the scope level: no access, reader, contributor, or admin.

---

## Namespaces

Namespaces subdivide a scope into sub-domains. Every scope starts with a \`_root\` namespace:

\`\`\`
Scope: Engineering
  ├── _root (default)
  ├── payments
  │     └── payments/stripe
  └── infrastructure
\`\`\`

Maximum depth is 2 levels below \`_root\`.

### Assigning Entries to Namespaces

\`\`\`json
{
  "decision": "Use Stripe for EU payment processing",
  "namespace": "payments/stripe"
}
\`\`\`

---

## Tenants

Tenants represent organizations. Tenant isolation is strict — a key from one tenant cannot access another tenant's data. Tenants support hierarchy via \`parent_tenant_id\`:

\`\`\`
Acme Corp (parent)
  ├── Acme EU (subsidiary)
  └── Acme US (subsidiary)
\`\`\`

---

## Best Practices

- **One scope per domain**, not per team.
- **Use namespaces for sub-domains** within a scope.
- **Keep scope names simple** — the tenant already provides company context.
- **Don't over-subdivide** — start with 2–3 scopes.

---

## Related Concepts

- [Decisions](/knowledge/docs/concepts/decisions)
- [Invariants](/knowledge/docs/concepts/invariants)
- [Rules](/knowledge/docs/concepts/rules)
`,
  },

  'use-cases/engineering': {
    title: 'Knowledge for Engineering Teams',
    content: `# Knowledge for Engineering Teams

Engineering teams make hundreds of decisions. Knowledge captures them, enforces the constraints they produce, and gives AI agents the context to work within your team's standards.

---

## The Challenge

- Architecture Decision Records decay in wikis nobody searches
- AI agents write code without knowing your standards
- Deployment rules exist in Slack messages and people's heads
- When someone asks "why did we choose X?", the answer is lost or reconstructed from memory
- CI pipelines check syntax and tests, but not organizational constraints

---

## How Knowledge Helps

### Extract What You Already Have

\`\`\`bash
knowledge extract --scope Engineering --source . --pattern "**/*.md"
\`\`\`

The CLI scans your sources, analyzes each chunk with an LLM, and creates typed drafts. You review in the dashboard and approve what's correct. In minutes, you go from scattered markdown to a structured registry.

\`\`\`
Scanning ./docs, ./CLAUDE.md, ./README.md...
  → 8 invariant candidates  (e.g., "All endpoints must require authentication")
  → 11 rule candidates       (e.g., "Use conventional commits")
  → 5 decision candidates    (e.g., "Chose PostgreSQL over DynamoDB")
  → 3 duplicates skipped
\`\`\`

### Capture Decisions That Stick

Every architectural choice gets recorded with context, reasoning, author, and timestamp. Decisions are immutable and searchable — not buried in markdown files.

### Give AI Agents Your Team's Context

When Claude or Cursor works on your code, it queries Knowledge first:

\`\`\`
Engineer: "Add a new endpoint for user profiles"

Claude → knowledge_list_invariants("Engineering")
  → "All public API endpoints must require authentication"
  → "No direct database queries in route handlers"

Claude → knowledge_list_rules("Engineering")
  → "Use FastAPI for all new services" (MANDATORY)
  → "Follow conventional commits" (MANDATORY)

Claude writes the endpoint following all constraints
  → Records a reference: "Followed inv-8a3f and rul-2b7c in PR #142"
\`\`\`

### Enforce Deployment Rules

\`\`\`
Invariant: "No production deployment on Friday after 16:00 UTC"
Invariant: "All deployments require PR approval from at least one team member"
Rule: "Database migrations require tech-lead sign-off" (requires_approval: true)
\`\`\`

### CI Compliance Checks

\`\`\`yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: python -m knowledge_verifier --config .knowledge-verifier.yml
\`\`\`

Engineers add an Implementation Report to their PR body. The Verifier validates that cited IDs exist, overrides are active, and mandatory entries are addressed.

---

## What It Replaces

| Before | With Knowledge |
|--------|---------------|
| Rules scattered across docs nobody reads | Automatic extraction into a structured registry |
| Architecture Decision Records in Git | Structured decisions with links and search |
| Deployment rules in Slack | Machine-readable invariants |
| Standards in wiki pages | Versioned rules that agents can query |
| Manual PR compliance review | Automated Verifier in CI |
| "Ask Sarah, she remembers" | Searchable registry with full context |

---

## Get Started

1. [Install Knowledge →](/knowledge/docs/getting-started)
2. Create an Engineering scope
3. Run \`knowledge extract --scope Engineering --source ./docs\`
4. Review and approve the drafts in the dashboard
5. Connect Claude via MCP
6. Add the Verifier to one repository
`,
  },

  'use-cases/finance': {
    title: 'Knowledge for Financial Services',
    content: `# Knowledge for Financial Services

Financial institutions face regulatory requirements that demand traceability, auditability, and human oversight of automated decision-making. Knowledge provides the infrastructure to document, enforce, and prove compliance.

---

## The Challenge

Financial services teams operate under strict regulatory frameworks (MiFID II, Basel III, EU AI Act, SOX). When AI agents or automated systems make decisions:

- Regulators want proof that constraints were enforced, not just documented
- Model risk management requires traceable decision chains from risk identification to control implementation
- Audit teams need structured evidence, not wiki pages and email threads
- Compliance officers must demonstrate human oversight of high-risk automated decisions

---

## How Knowledge Helps

### Model Risk Controls

\`\`\`
Invariant: "No model deployed to production without validation committee sign-off"
  ├── requires_approval: true
  └── min_role_to_decide: tech-lead

Rule (mandatory): "All model changes require back-testing on 24 months of data"
Rule (advisory): "Prefer ensemble methods over single models for credit scoring"
\`\`\`

### Traceable Decision Chains

\`\`\`
Decision: "Switch credit scoring from logistic regression to gradient boosting"
  ├── Context: "False positive rate of 18% unacceptable for SME lending"
  ├── Reasoning: "Gradient boosting reduces FPR to 7% on backtesting data"
  ├── creates → Rule: "Gradient boosting models require quarterly recalibration"
  ├── creates → Invariant: "No credit score change > 50 points without human review"
  └── supersedes → Decision: "Use logistic regression for all scoring" (2019)
\`\`\`

### Regulatory Audit Trail

| What Regulators Ask | What Knowledge Provides |
|---------------------|------------------------|
| "How are AI decisions governed?" | Invariant and rule registry with version history |
| "Who approved this model change?" | Approval chain: request → decision → override |
| "Was this change reviewed by a human?" | Approval workflow with role verification |
| "What constraints applied at deployment time?" | Normative hash + reference traces |

### Human-in-the-Loop for High-Risk Actions

For decisions above a risk threshold, Knowledge enforces human approval before any action proceeds. The entire chain — check, conflict, request, approval, override, deployment trace — is one connected timeline.

---

## Use Cases in Finance

- **Credit Risk**: invariants for credit decision boundaries, approval gates for credit limit changes
- **Trading and Market Risk**: invariants for position limits, reference traces proving risk limits were checked
- **AML**: invariants for screening requirements, event timeline for regulatory reporting
- **AI Governance (EU AI Act)**: map AI systems to scopes, codify Article 14 human oversight requirements

---

## Getting Started

1. [Start with the Getting Started guide →](/knowledge/docs/getting-started)
2. Create scopes for your risk domains (Credit, Market, AML, Model Governance)
3. Run \`knowledge extract\` on your existing risk policy documents
4. Review extracted drafts and approve correct entries
5. Connect your AI agents and pipelines

[View pricing →](/knowledge/pricing) · [EU AI Act compliance →](/knowledge/compliance/ai-act)
`,
  },

  'use-cases/healthcare': {
    title: 'Knowledge for Healthcare',
    content: `# Knowledge for Healthcare

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

\`\`\`
Invariant: "No AI-generated diagnostic suggestion without clinician review"
  Rationale: "Patient safety — all AI outputs in clinical context are advisory"
  requires_approval: false  (hard block, no override path)

Invariant: "Drug interaction alerts cannot be suppressed by AI agents"
  Rationale: "Regulatory requirement — safety alerts must always reach clinician"

Rule: "AI-assisted triage scores must be recalibrated quarterly"
  Severity: MANDATORY
\`\`\`

### Human Oversight for High-Risk AI

The approval workflow ensures no AI output reaches a clinical decision without human oversight. Every consultation is logged with actor attribution and timestamp.

### Regulatory Audit Readiness

| Regulatory Need | Knowledge Feature |
|----------------|-------------------|
| FDA 21 CFR Part 11 | Immutable decisions, timestamped events, audit trail |
| EU MDR / AI Act | Invariants as risk controls, approval workflows, compliance reports |
| HIPAA audit trail | Event log with actor attribution, reference traces |
| Clinical trial governance | Decision history, protocol change tracking, rule version control |

---

## Use Cases in Healthcare

- **Clinical AI Governance**: invariants for patient safety constraints, approval gates for AI models
- **Drug Development**: decisions documenting trial protocol choices, safety reporting invariants
- **Health IT Operations**: deployment rules for clinical systems, CI Verifier for code changes
- **Interoperability**: decisions for data standard adoption (HL7 FHIR, DICOM), consent-based access invariants

---

## Get Started

1. [Install Knowledge →](/knowledge/docs/getting-started)
2. Create scopes for your domains (Clinical AI, Health IT, Data Governance)
3. Run \`knowledge extract\` on your clinical protocol documents
4. Review extracted drafts — approve patient safety constraints as invariants
5. Connect AI agents via MCP for real-time constraint checking

[AI Act Compliance →](/knowledge/compliance/ai-act) · [Pricing →](/knowledge/pricing)
`,
  },

  'use-cases/legal': {
    title: 'Knowledge for Legal and Compliance Teams',
    content: `# Knowledge for Legal and Compliance Teams

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

\`\`\`
Decision: "GDPR data retention limit set to 36 months for customer records"
  Context: "Legal review of GDPR Art. 5(1)(e) and sector-specific guidance"
  Reasoning: "36 months balances legitimate business interest against minimization"
  Author: legal-team
    ├── creates → Invariant: "No customer data retained beyond 36 months"
    └── creates → Rule: "Automated deletion pipeline must run monthly"
\`\`\`

### Encode Regulatory Constraints

\`\`\`
Invariant: "Personal data processing requires documented legal basis"
  Rationale: "GDPR Art. 6 — no processing without lawful basis"
  requires_approval: true

Rule: "Privacy impact assessment required for new data processing activities"
  Severity: MANDATORY
\`\`\`

### Produce Structured Evidence

| Auditor Question | Knowledge Answer |
|-----------------|------------------|
| "What constraints exist?" | Export invariant and rule registry |
| "Who set these constraints?" | Each entry has author + timestamp |
| "Were constraints checked before deployment?" | Reference traces with status |
| "Who approved this exception?" | Approval chain: request → decision → override |
| "What changed and when?" | Event timeline with full attribution |

### Gate High-Risk Actions

\`\`\`
Engineer: deploys feature with new data collection
  → Verifier: conflict with invariant "Privacy impact required"
  → PR blocked
  → Engineer creates approval request
  → Legal team reviews → approves with conditions
  → Override created: "PIA completed, ref DOC-2024-47"
  → PR passes
\`\`\`

---

## Use Cases in Legal/Compliance

- **Data Privacy (GDPR)**: invariants for data processing constraints, approval gates for new processing activities
- **Contract and IP Management**: licensing constraint invariants, reference traces proving compliance
- **Corporate Governance**: approval thresholds and delegation of authority rules
- **AI Governance**: map to EU AI Act requirements, invariants for AI system risk controls

---

## Get Started

1. [Install Knowledge →](/knowledge/docs/getting-started)
2. Create scopes for your compliance domains
3. Run \`knowledge extract\` on your existing policy documents
4. Review and approve extracted drafts, then refine with manual entries
5. Connect to your CI/CD pipeline for automated checks

[AI Act Compliance →](/knowledge/compliance/ai-act) · [Pricing →](/knowledge/pricing)
`,
  },

  'compliance/ai-act': {
    title: 'EU AI Act Compliance with Knowledge',
    content: `# EU AI Act Compliance with Knowledge

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

**Knowledge provides:**
- **Invariants** codify risk controls as blocking constraints with rationale and timestamp
- **Rules** implement operational risk mitigation with version history
- **Compliance checks** evaluate actions against the full normative state in real time
- **Links** trace the chain from risk identification to decision to invariant to rule

\`\`\`
Risk: LLM may generate incorrect financial figures
  │
  ├── Decision: "All LLM financial outputs require source verification"
  │       └── creates → Invariant: "No financial report without source check"
  │
  └── Rule: "LLM outputs in finance scope require human review"
\`\`\`

### Article 11 — Technical Documentation

**Knowledge provides:**
- **Decisions** record every architectural and operational choice with context, reasoning, author, and timestamp
- **Scopes** organize documentation by domain — not buried in wikis
- **Immutability**: decisions cannot be edited after creation

### Article 12 — Record-Keeping

**Knowledge provides:**
- **Events**: every normative change generates a timestamped event with actor attribution
- **References**: structured traces proving which entries were consulted, followed, or diverged from
- **Normative hash**: cryptographic hash of the full normative state at any point in time

### Article 14 — Human Oversight

**Knowledge provides:**
- **Approval workflows**: invariants and rules can require human approval before action
- **Overrides**: governed exceptions with justification, conditions, and expiry
- **Role-based access**: approval decisions require minimum roles (tech-lead, admin)

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

---

## Implementation Timeline

| Date | Milestone |
|------|-----------|
| August 2024 | AI Act entered into force |
| February 2025 | Prohibited practices apply |
| August 2025 | General-purpose AI model obligations |
| **August 2026** | **Full high-risk AI system obligations** |
| August 2027 | Certain embedded high-risk system obligations |

---

## Getting Started for Compliance

1. **Map your AI systems to scopes** — one scope per AI system or risk domain
2. **Codify existing risk controls** — encode as invariants and rules
3. **Record historical decisions** — backfill key decisions with context and reasoning
4. **Connect your agents** — AI agents query Knowledge via MCP before acting
5. **Add the Verifier to CI/CD** — every code change produces a compliance report
6. **Export for regulatory filing** — structured JSON for auditors

[Getting Started →](/knowledge/docs/getting-started) · [Finance use case →](/knowledge/use-cases/finance)
`,
  },

  'blog/governing-ai-agents': {
    title: 'Governing AI Agents: Constraints Before Actions',
    content: `# Governing AI Agents: Constraints Before Actions

AI agents that write code, deploy services, and make operational decisions need guardrails. Not after the fact — before they act. Here's how a normative layer makes AI agents governable.

---

## The Problem with Post-Hoc Review

Today's AI agent governance looks like this:

1. Agent receives a task
2. Agent acts (writes code, makes API calls, deploys)
3. Human reviews the output
4. Human catches violations (sometimes)
5. Human fixes the damage (if possible)

This is post-hoc review. It fails when the agent makes dozens of changes across multiple PRs, when the violation is subtle, when the constraint exists only in someone's head, or when the damage is hard to reverse.

Post-hoc review asks: "Did the agent do the right thing?" Pre-flight governance asks: "Does the agent know what the right thing is?"

## Pre-Flight Constraint Checking

A normative layer sits between the agent and its actions:

\`\`\`
Agent receives task
    │
    ▼
Query normative state: "What constraints apply to Engineering?"
    │
    ▼
Evaluate: does my planned action conflict with any constraint?
    │
    ├── Blocked → STOP, report why
    ├── Needs approval → REQUEST, WAIT
    └── Clear → PROCEED
    │
    ▼
Record reference: "I checked constraint X, status: followed"
\`\`\`

The agent doesn't guess at organizational standards. It reads them from a structured registry that the team maintains.

## What a Normative Layer Contains

### Invariants — Hard Limits

Things that must never happen:
- "No production deployment on Friday after 16:00 UTC"
- "No public API endpoint without authentication"
- "No database migration without backup verification"

Invariants are blocking. An agent encountering an invariant conflict stops. No bypass without explicit human approval.

### Rules — Active Directives

Things that should happen (mandatory or advisory). They are versioned — when the team's standards evolve, the rules update.

### Overrides — Governed Exceptions

An override is not a workaround. It's proof that the organization acknowledged a constraint and consciously decided to deviate — with justification, conditions, expiry, and approval.

## The Audit Trail

| Artifact | What It Proves |
|----------|---------------|
| **Constraint query** | Agent knew the rules at decision time |
| **Compliance check** | Agent evaluated its action against constraints |
| **Approval request** | Agent escalated when blocked |
| **Reference** | Agent followed/cited/diverged with documentation |
| **Normative hash** | What the rules were at that exact moment |

## Why This Matters for the AI Act

The EU AI Act (effective August 2026 for high-risk systems) explicitly requires human oversight (Art. 14), record-keeping (Art. 12), and risk management (Art. 9). A normative layer with approval workflows, event logging, and constraint enforcement maps directly to these requirements.

## Implementation Is Not Hard

1. **Before any significant action**: query the normative state for the relevant scope
2. **Evaluate**: does the planned action conflict?
3. **If blocked**: stop or request approval
4. **After acting**: record what was followed or diverged from

---

## Learn More

- [How Knowledge implements this →](/knowledge/docs/how-it-works)
- [Connect agents via MCP →](/knowledge/docs/integrations/claude-mcp)
- [EU AI Act compliance →](/knowledge/compliance/ai-act)
`,
  },

  'blog/why-adrs-fail': {
    title: 'Why ADRs Fail — and What Comes Next',
    content: `# Why ADRs Fail — and What Comes Next

Architecture Decision Records were supposed to capture the "why" behind technical choices. In practice, most ADR initiatives decay within months. Here's why, and what a structured decision registry does differently.

---

## The ADR Promise

ADRs (Architecture Decision Records) are markdown files with a standard format: title, status, context, decision, consequences. The idea is simple: every significant technical decision gets documented in a file, committed to the repo, and available for future reference.

The format was proposed by Michael Nygard in 2011. It addressed a real problem: teams make decisions and forget why.

## Where ADRs Break Down

### 1. No one searches them

ADRs live in a \`docs/adr/\` directory. Engineers know they exist but rarely search them proactively. The information exists but is not discoverable at the moment it's needed.

### 2. No connection to constraints

A decision about choosing PostgreSQL is one file. The invariant it creates — "no eventual consistency for financial transactions" — lives elsewhere (or nowhere). The decision and the constraint are physically separate.

### 3. No enforcement

ADRs are informational. Nothing checks whether a PR complies with an existing ADR. Nothing prevents an engineer from unknowingly violating a decision made three months ago.

### 4. No versioning for evolving standards

ADRs are typically "accepted" or "superseded." But tracking incremental evolution requires multiple ADRs with manual cross-references.

### 5. Agents can't read them

AI agents have no structured way to query ADRs. They can read markdown files, but they cannot search by scope, filter by type, check compliance, or understand the relationships between decisions and constraints.

---

## What a Decision Registry Does Differently

### Structured and searchable

Every decision has fields: \`decision\`, \`context\`, \`reasoning\`, \`author\`, \`tags\`, \`scope\`. Search is built-in — not grep over markdown files.

### Connected to constraints

Decisions link to the invariants and rules they produce via a \`creates\` relation. Follow the link in either direction: from decision to constraint, or from constraint to rationale.

### Machine-enforceable

Invariants are blocking — a compliance check against the registry returns conflicts before code is deployed.

### Versioned naturally

Rules evolve through versions. The current directive is always clear, and the full version history shows how it changed and why.

### Agent-native

AI agents query the registry through MCP tools. Before writing code, Claude calls \`knowledge_check\` to verify the action doesn't conflict with constraints.

---

## You Don't Have to Start from Scratch

\`\`\`bash
knowledge extract --scope Engineering --source ./docs/adr --source ./CLAUDE.md
\`\`\`

Your existing ADRs become the input. The registry becomes the output — searchable, enforceable, and queryable by agents.

---

## ADRs Are Not Wrong — They're Incomplete

| ADR | Decision Registry |
|-----|-------------------|
| Markdown file | Structured record with metadata |
| \`docs/adr/\` directory | Scoped, searchable registry |
| Informational | Enforceable (invariants, rules) |
| Standalone | Linked to constraints and other decisions |
| Human-only | Queryable by AI agents and CI pipelines |
| Point-in-time | Versioned with change history |
| Manual entry only | Automatic extraction from existing docs |

---

## Getting Started

- [See how Knowledge works →](/knowledge/docs/how-it-works)
- [Get started in 5 minutes →](/knowledge/docs/getting-started)
- [Connect AI agents →](/knowledge/docs/integrations/claude-mcp)
`,
  },

  'integrations/api-reference': {
    title: 'API Reference',
    gated: true,
    content: `# API Reference

The Knowledge API is a REST API for managing decisions, invariants, rules, and the compliance workflow. All endpoints require authentication via Bearer token.

Base URL: \`http://localhost:8090/api/v1\`

---

## Authentication

\`\`\`
Authorization: Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
\`\`\`

---

## Core Entities

### Scopes

| Method | Endpoint | Description |
|--------|----------|-------------|
| \`GET\` | \`/scopes\` | List scopes for the authenticated tenant |
| \`POST\` | \`/scopes\` | Create a scope |
| \`GET\` | \`/scopes/{scope_id}\` | Get scope details with entry counts |
| \`PATCH\` | \`/scopes/{scope_id}\` | Update scope |

### Decisions

| Method | Endpoint | Description |
|--------|----------|-------------|
| \`GET\` | \`/scopes/{scope_id}/decisions\` | List decisions |
| \`POST\` | \`/scopes/{scope_id}/decisions\` | Create a decision |
| \`GET\` | \`/scopes/{scope_id}/decisions/{id}\` | Get decision details |

### Invariants

| Method | Endpoint | Description |
|--------|----------|-------------|
| \`GET\` | \`/scopes/{scope_id}/invariants\` | List invariants (active by default) |
| \`POST\` | \`/scopes/{scope_id}/invariants\` | Create an invariant |
| \`DELETE\` | \`/scopes/{scope_id}/invariants/{id}\` | Revoke (soft-delete) |

### Rules

| Method | Endpoint | Description |
|--------|----------|-------------|
| \`GET\` | \`/scopes/{scope_id}/rules\` | List rules (active by default) |
| \`POST\` | \`/scopes/{scope_id}/rules\` | Create a rule |
| \`PUT\` | \`/scopes/{scope_id}/rules/{id}\` | Update (creates new version) |
| \`GET\` | \`/scopes/{scope_id}/rules/{id}/versions\` | List all versions |
| \`PATCH\` | \`/scopes/{scope_id}/rules/{id}/archive\` | Archive the rule |

### Overrides

| Method | Endpoint | Description |
|--------|----------|-------------|
| \`GET\` | \`/scopes/{scope_id}/overrides\` | List overrides |
| \`POST\` | \`/scopes/{scope_id}/overrides\` | Create an override |
| \`DELETE\` | \`/scopes/{scope_id}/overrides/{id}\` | Revoke an override |

---

## Search and Compliance

### Search

\`\`\`
POST /search
\`\`\`

\`\`\`json
{
  "query": "PostgreSQL",
  "scope_id": "scp-XXXX",
  "entry_type": "decision",
  "limit": 10
}
\`\`\`

### Compliance Check

\`\`\`
POST /check
\`\`\`

\`\`\`json
{
  "scope_id": "scp-XXXX",
  "intended_action": "Deploy on Friday evening without review"
}
\`\`\`

Returns \`conflicts\` (blocking) and \`overridden\` entries.

### Resolve Normative State

\`\`\`
GET /scopes/{scope_id}/resolve
\`\`\`

Returns the complete normative state: all active invariants, rules, and overrides, plus a \`normative_hash\`.

---

## References and Events

### References

Record usage traces:
\`\`\`json
{
  "entry_id": "inv-8a3f1b2c4d5e",
  "context_type": "pull_request",
  "context_ref": "github:acme/api/pull_request#42",
  "status": "followed",
  "author": "claude-agent",
  "author_type": "agent"
}
\`\`\`

Status values: \`cited\`, \`followed\`, \`verified\`, \`diverged\` (requires \`reason\`).

### Events

\`\`\`
GET /scopes/{scope_id}/events
GET /scopes/{scope_id}/events?type=xxx
GET /scopes/{scope_id}/events?after=xxx
\`\`\`

---

## Approval Workflow

\`\`\`
POST /scopes/{scope_id}/approvals          — Request approval
GET  /scopes/{scope_id}/approvals          — List approvals
POST /scopes/{scope_id}/approvals/{id}/decide — Approve or reject
\`\`\`

If approved for an entry with \`requires_approval\`, an override is auto-created.

---

## Links

\`\`\`json
{
  "from_id": "dec-abc123",
  "from_type": "decision",
  "to_id": "inv-def456",
  "to_type": "invariant",
  "relation": "creates"
}
\`\`\`

Relation types: \`depends_on\`, \`supersedes\`, \`contradicts\`, \`in_tension_with\`, \`creates\`.

---

## Error Responses

| Status | Meaning |
|--------|---------|
| 400 | Bad request (validation error) |
| 401 | Missing or invalid API key |
| 403 | Insufficient permissions |
| 404 | Resource not found |

---

## Interactive Documentation

When the API is running, visit \`http://localhost:8090/docs\` for the auto-generated Swagger UI.
`,
  },

  'integrations/ci-cd': {
    title: 'Integration: CI/CD Verifier',
    gated: true,
    content: `# Integration: CI/CD Verifier

The Knowledge Verifier runs in your CI pipeline and checks that PRs comply with applicable invariants and rules. It produces a machine-readable verdict and a human-readable compliance report.

---

## How It Works

\`\`\`
PR opened/updated → CI triggers Verifier
    │
    ▼
Reads PR context (title, body, changed files, commits)
Resolves Knowledge scopes via config
Parses citations from PR body (Implementation Report)
    │
    ▼
3-axis analysis:
  A. Conformity — are applicable entries addressed?
  B. Override validity — are cited overrides active?
  C. Citation coverage — are all mandatory entries cited?
    │
    ▼
Verdict: PASS / WARN / FAIL
Outputs: verifier-result.json + verifier-report.md
\`\`\`

---

## Setup

### 1. Install

\`\`\`bash
pip install knowledge-verifier
\`\`\`

### 2. Configure

Create \`.knowledge-verifier.yml\` in your repository root:

\`\`\`yaml
scope_mappings:
  - scope: "Engineering"
    paths: ["src/**", "lib/**", "apps/**"]
  - scope: "Operations"
    paths: ["infra/**", "deploy/**", ".github/**"]

default_scope: "Engineering"
gating_mode: "fail-on-blocking"
\`\`\`

### 3. GitHub Actions

\`\`\`yaml
name: Knowledge Compliance
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  compliance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Knowledge Compliance Check
        run: python -m knowledge_verifier --config .knowledge-verifier.yml
        env:
          KNOWLEDGE_API_URL: \${{ secrets.KNOWLEDGE_API_URL }}
          KNOWLEDGE_API_KEY: \${{ secrets.KNOWLEDGE_API_KEY }}
\`\`\`

### 4. GitLab CI

\`\`\`yaml
knowledge-compliance:
  stage: test
  script:
    - python -m knowledge_verifier --config .knowledge-verifier.yml
  variables:
    KNOWLEDGE_API_URL: \$KNOWLEDGE_API_URL
    KNOWLEDGE_API_KEY: \$KNOWLEDGE_API_KEY
  rules:
    - if: \$CI_MERGE_REQUEST_ID
\`\`\`

---

## Gating Modes

| Mode | Behavior | Exit Code |
|------|----------|-----------|
| \`report-only\` | Always passes, generates report | Always 0 |
| \`fail-on-blocking\` | Fails only if blocking invariants are uncited | 0 or 1 |
| \`strict\` | Fails on any uncited mandatory entry | 0 or 1 |

**Recommended rollout:**
1. Start with \`report-only\` — see what would fail
2. After 2–4 weeks, switch to \`fail-on-blocking\`
3. For regulated environments, use \`strict\`

---

## Implementation Report

The Verifier looks for an \`## Implementation Report\` section in the PR body:

\`\`\`markdown
## Implementation Report

### Invariants verified
- inv-8a3f1b2c4d5e: All endpoints require auth — followed

### Rules applied
- rul-2b7c9e4f1a3d: PR approval required — followed
- rul-6f8e2a1b3c4d: Use conventional commits — overridden (see ovr-9d1e3f5a7b2c)
\`\`\`

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Verifier can't reach API | Check \`KNOWLEDGE_API_URL\` and network access |
| "Invalid API key" | Update \`KNOWLEDGE_API_KEY\` in CI secrets |
| False failures | Start with \`report-only\` to calibrate |
| Missing scope mapping | Add paths to \`.knowledge-verifier.yml\` |

---

## Learn More

- [Getting Started →](/knowledge/docs/getting-started)
- [Claude MCP Integration →](/knowledge/docs/integrations/claude-mcp)
- [API Reference →](/knowledge/docs/integrations/api-reference)
`,
  },

  'integrations/claude-mcp': {
    title: 'Integration: Claude MCP',
    gated: true,
    content: `# Integration: Claude MCP

Knowledge ships with an MCP (Model Context Protocol) server that lets AI agents — Claude, Cursor, and any MCP-compatible tool — interact with the decision registry using natural language.

---

## Setup

### Prerequisites

- Knowledge API running (default: port 8090)
- Database seeded with data
- Valid API key

### Install MCP Dependencies

\`\`\`bash
pip install mcp httpx
\`\`\`

### Configure Claude Code

Create \`.mcp.json\` in your project root:

\`\`\`json
{
  "mcpServers": {
    "knowledge": {
      "command": "python",
      "args": ["path/to/knowledge/src/knowledge-mcp/server.py"],
      "env": {
        "KNOWLEDGE_API_KEY": "kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "KNOWLEDGE_API_URL": "http://localhost:8090"
      }
    }
  }
}
\`\`\`

Then: \`claude\` from the directory containing \`.mcp.json\`.

---

## Available Tools

### \`knowledge_query\` — Search

\`\`\`
"Search for decisions about authentication"
"Find rules related to deployment"
\`\`\`

### \`knowledge_record\` — Record a Decision

\`\`\`
"Record a decision in Engineering: we chose Playwright for E2E testing"
\`\`\`

### \`knowledge_list_invariants\` — List Constraints

\`\`\`
"What invariants does Engineering have?"
\`\`\`

### \`knowledge_list_rules\` — List Directives

\`\`\`
"What rules apply in Engineering?"
\`\`\`

### \`knowledge_resolve\` — Full Normative State

\`\`\`
"What's the full normative state of Engineering?"
\`\`\`

Returns all invariants, rules, and overrides, plus a normative hash.

### \`knowledge_check\` — Compliance Check

\`\`\`
"Can I deploy on Friday evening?"
"Is it okay to skip code review for this hotfix?"
\`\`\`

### \`knowledge_create_override\` — Create Exception

\`\`\`
"Create an override for the auth invariant: health endpoint needs to be public"
\`\`\`

### \`knowledge_record_reference\` — Record Usage Trace

\`\`\`
"Record that invariant inv-abc123 was followed in PR #42"
\`\`\`

### \`knowledge_request_approval\` — Request Human Approval

\`\`\`
"Request approval to add a public health endpoint"
\`\`\`

### \`knowledge_get_approval_status\` — Check Approval Status

\`\`\`
"What's the status of approval apr-abc123?"
\`\`\`

---

## Recommended Agent Workflow

### Before Acting

\`\`\`
1. knowledge_list_invariants(scope) — know the hard limits
2. knowledge_check(scope, intended_action) — test your plan
3. If conflict with requires_approval → knowledge_request_approval()
4. If conflict without approval path → stop and report
5. If no conflict → proceed
\`\`\`

### After Acting

\`\`\`
6. knowledge_record_reference(entry_id, context, status="followed")
7. If a significant decision was made → knowledge_record()
\`\`\`

### Example Session

\`\`\`
User: "Add a new public health endpoint to the API"

Claude → knowledge_check("Engineering", "Add public endpoint without auth")
  → Conflict: inv-8a3f "All endpoints require auth", requires_approval=true

Claude → knowledge_request_approval(trigger="inv-8a3f", ...)
  → apr-xyz123 created, waiting for tech-lead

[Tech-lead approves in dashboard]

Claude → knowledge_get_approval_status("apr-xyz123")
  → Approved, override ovr-9d1e created

Claude → [writes code]
  → knowledge_record_reference(entry="inv-8a3f", context="PR #42", status="followed")
\`\`\`

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Tools not showing in Claude | Launch Claude from the directory with \`.mcp.json\` |
| "Scope not found" | Check spelling, or seed the database |
| "Invalid or expired API key" | Update \`KNOWLEDGE_API_KEY\` in \`.mcp.json\` |
| Connection refused | Start the API: \`uvicorn src.main:app --port 8090\` |

---

## Learn More

- [Getting Started →](/knowledge/docs/getting-started)
- [CI/CD Integration →](/knowledge/docs/integrations/ci-cd)
- [API Reference →](/knowledge/docs/integrations/api-reference)
`,
  },

  'changelog': {
    title: 'Changelog',
    gated: true,
    content: `# Changelog

All notable changes to Knowledge are documented here.

---

## v0.10.0 — March 2026

### Automatic Extraction

- **CLI extraction**: \`knowledge extract --scope <name> --source <path>\` scans existing documentation and surfaces implicit rules, decisions, and invariants as typed drafts
- **LLM-powered analysis**: each source file is chunked and analyzed by an LLM to identify normative content with confidence scoring (0.6 – 1.0 threshold)
- **Draft review workflow**: extracted candidates appear in the dashboard for human review — approve, reject, or edit before publishing
- **Semantic deduplication**: new extractions are compared against existing entries using embedding similarity to avoid duplicates and detect replacements
- **Git source connector**: point at a local repository and extract from working copy files by glob pattern
- **Stream API**: push documents from any external source for extraction via \`POST /distill/stream\`
- **Relation detection**: extraction identifies \`REPLACES\` and \`IN_TENSION_WITH\` relations between new drafts and existing entries

### New Permissions

- \`distill_run\`: launch extraction runs (senior-dev+)
- \`distill_read\`: view runs and drafts (developer+)
- \`distill_review\`: approve, reject, or edit drafts (tech-lead+)
- \`distill_stream\`: push documents via Stream API (admin)

---

## v0.9.0 — March 2026

### Namespaces

- **Namespace hierarchy**: subdivide scopes into nested namespaces (e.g., \`payments\`, \`payments/stripe\`)
- Default \`_root\` namespace for backward compatibility
- Maximum nesting depth of 2 levels

### Multi-Tenant

- **Tenant model**: full tenant isolation with \`parent_tenant_id\` for holding → subsidiary hierarchies
- API keys scoped to a single tenant

### Analytics

- **Coverage analytics**: which scopes have rules, invariants, and decisions
- **Dead entry detection**: find invariants and rules with no references

---

## v0.8.0 — February 2026

### Authentication Overhaul

- **Bearer token auth**: migrated from \`X-API-Key\` header to \`Authorization: Bearer kn_...\`
- **Principal model**: unified identity for humans, agents, and system accounts
- **Role hierarchy**: developer → senior-dev → tech-lead → admin with granular permissions
- **Cascade deactivation**: deactivating a principal deactivates all their API keys

---

## v0.7.0 — January 2026

### Approval Workflow

- **Approval requests**: agents and humans can request approval for actions blocked by \`requires_approval\` entries
- **Auto-override**: approved requests automatically create scoped overrides
- Dashboard shows pending approvals and decision history

### Events Timeline

- **Event log**: chronological record of all normative changes per scope

---

## v0.6.0 — December 2025

### CI Verifier

- Three gating modes: \`report-only\`, \`fail-on-blocking\`, \`strict\`
- Machine-readable JSON output + human-readable Markdown report
- GitHub Actions auto-detection

### References

- **Usage traces**: record where knowledge entries were cited, followed, or diverged from
- Context types: pull_request, commit, deploy, ci_check

---

## v0.5.0 — November 2025

### MCP Server

- **10 MCP tools** for AI agent integration
- Compatible with Claude Code, Cursor, and any MCP client

### Links and Relations

- **Typed relations**: depends_on, supersedes, contradicts, in_tension_with, creates

---

## v0.4.0 — October 2025

### Overrides

- **Governed exceptions**: temporary and permanent overrides with justification, conditions, and expiry

### Search

- **Full-text search** across decisions, invariants, and rules

---

## v0.3.0 — September 2025

### Rules with Versioning

- **Versioned rules**: updates create new versions, history is preserved
- Two severity levels: MANDATORY and ADVISORY

### Dashboard

- **Web UI**: React + Tailwind dashboard

---

## v0.2.0 — August 2025

### Core Entities

- **Decisions**, **Invariants**, **Scopes**, **Compliance check**

---

## v0.1.0 — July 2025

Initial release. FastAPI backend, SQLite, API key authentication, basic CRUD.
`,
  },

}
