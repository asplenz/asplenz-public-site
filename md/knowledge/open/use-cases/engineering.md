# Knowledge for Engineering Teams

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

Your team already has rules — they're in your READMEs, CLAUDE.md, runbooks, and architecture docs. Knowledge extracts them automatically:

```bash
knowledge extract --scope Engineering --source . --pattern "**/*.md"
```

The CLI scans your sources, analyzes each chunk with an LLM, and creates typed drafts. You review in the dashboard and approve what's correct. In minutes, you go from scattered markdown to a structured registry — without writing a single entry by hand.

```
Scanning ./docs, ./CLAUDE.md, ./README.md...
  → 8 invariant candidates  (e.g., "All endpoints must require authentication")
  → 11 rule candidates       (e.g., "Use conventional commits")
  → 5 decision candidates    (e.g., "Chose PostgreSQL over DynamoDB")
  → 3 duplicates skipped
```

### Capture Decisions That Stick

Every architectural choice gets recorded with context, reasoning, author, and timestamp. Decisions are immutable and searchable — not buried in markdown files.

```
Decision: "Use FastAPI for all new Python backend services"
  Context: "Evaluated Flask, Django REST, and FastAPI"
  Reasoning: "FastAPI provides native async, OpenAPI generation, and Pydantic validation"
  Author: sarah.chen
  Tags: [architecture, python, backend]
```

Link decisions to the rules and invariants they create:

```
Decision: "Use FastAPI for all new backend services"
    └── creates → Rule: "New services must use FastAPI unless exempted"
```

Six months later, when someone asks "why FastAPI?", the answer is one search away.

### Give AI Agents Your Team's Context

When Claude or Cursor works on your code, it queries Knowledge first:

```
Engineer: "Add a new endpoint for user profiles"

Claude → knowledge_list_invariants("Engineering")
  → "All public API endpoints must require authentication"
  → "No direct database queries in route handlers"

Claude → knowledge_list_rules("Engineering")
  → "Use FastAPI for all new services" (MANDATORY)
  → "Follow conventional commits" (MANDATORY)

Claude writes the endpoint following all constraints
  → Records a reference: "Followed inv-8a3f and rul-2b7c in PR #142"
```

The agent doesn't guess your standards — it reads them from the same registry your team maintains.

### Enforce Deployment Rules

Codify deployment constraints as invariants:

```
Invariant: "No production deployment on Friday after 16:00 UTC"
Invariant: "All deployments require PR approval from at least one team member"
Rule: "Database migrations require tech-lead sign-off" (requires_approval: true)
```

When an agent or CI pipeline tries to deploy, Knowledge blocks violations and requires approval for gated actions.

### CI Compliance Checks

The Verifier runs in your pipeline and checks that PRs address applicable constraints:

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: python -m knowledge_verifier --config .knowledge-verifier.yml
```

Engineers add an Implementation Report to their PR body:

```markdown
## Implementation Report
- inv-8a3f: All endpoints require auth — followed
- rul-2b7c: Use FastAPI — followed
- rul-6f8e: PR approval required — followed
```

The Verifier validates that cited IDs exist, overrides are active, and mandatory entries are addressed. Result: PASS, WARN, or FAIL.

---

## Day-to-Day Workflow

### For Engineers

1. **Before coding**: AI agent queries Knowledge → gets applicable constraints
2. **During coding**: agent follows rules and records decisions it makes
3. **In the PR**: add Implementation Report citing relevant entries
4. **CI runs**: Verifier checks compliance → PASS/FAIL

### For Tech Leads

1. **Define rules**: set team standards as rules (mandatory or advisory)
2. **Set invariants**: codify non-negotiable constraints
3. **Review approvals**: approve or reject exception requests from agents and engineers
4. **Monitor events**: track normative changes in the event timeline

### For New Engineers

1. **Browse scopes**: see Engineering, Product, Operations at a glance
2. **Read invariants**: understand what must never be violated
3. **Search decisions**: "why did we choose PostgreSQL?" → instant answer with context
4. **Follow the graph**: trace from rule → decision → context

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

1. [Install Knowledge →](/docs/getting-started)
2. Create an Engineering scope
3. Run `knowledge extract --scope Engineering --source ./docs` to populate from existing docs
4. Review and approve the drafts in the dashboard
5. Connect Claude via MCP
6. Add the Verifier to one repository

[Getting Started →](/docs/getting-started) · [How it Works →](/product/how-it-works) · [Pricing →](/pricing)
