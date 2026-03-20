# Why ADRs Fail — and What Comes Next

Architecture Decision Records were supposed to capture the "why" behind technical choices. In practice, most ADR initiatives decay within months. Here's why, and what a structured decision registry does differently.

---

## The ADR Promise

ADRs (Architecture Decision Records) are markdown files with a standard format: title, status, context, decision, consequences. The idea is simple: every significant technical decision gets documented in a file, committed to the repo, and available for future reference.

The format was proposed by Michael Nygard in 2011 and popularized by the ThoughtWorks Technology Radar. It addressed a real problem: teams make decisions and forget why. Six months later, someone re-evaluates the same options because no one remembers the outcome.

## Where ADRs Break Down

### 1. No one searches them

ADRs live in a `docs/adr/` directory. Engineers know they exist but rarely search them proactively. When facing a new decision, the natural behavior is to ask a colleague, not to run `grep -r "database" docs/adr/`. The information exists but is not discoverable at the moment it's needed.

### 2. No connection to constraints

A decision about choosing PostgreSQL is one file. The invariant it creates — "no eventual consistency for financial transactions" — lives elsewhere (or nowhere). The decision and the constraint are logically connected but physically separate. When someone encounters the constraint, there is no link back to the decision that produced it.

### 3. No enforcement

ADRs are informational. Nothing checks whether a PR complies with an existing ADR. Nothing prevents an engineer from unknowingly violating a decision made three months ago. The ADR exists, but it has no teeth.

### 4. No versioning for evolving standards

ADRs are typically "accepted" or "superseded." But what about a standard that changes incrementally? "All services must use REST" becomes "All new services should use gRPC, existing REST services are grandfathered." An ADR captures the original decision, but tracking the evolution requires multiple ADRs with manual cross-references.

### 5. Agents can't read them

The most pressing issue today: AI agents that write and review code have no structured way to query ADRs. They can read markdown files, but they cannot search by scope, filter by type, check compliance, or understand the relationships between decisions and constraints. ADRs are human-readable but not machine-actionable.

---

## What a Decision Registry Does Differently

A decision registry treats decisions as structured data, not documents.

### Structured and searchable

Every decision has fields: `decision`, `context`, `reasoning`, `author`, `tags`, `scope`. Search is built-in — not grep over markdown files, but a query engine that returns results with relevance ranking, type filtering, and scope restriction.

### Connected to constraints

Decisions link to the invariants and rules they produce. "We chose PostgreSQL" connects to "No eventual consistency for financial transactions" via a `creates` relation. Follow the link in either direction: from decision to constraint, or from constraint to rationale.

### Machine-enforceable

Invariants are blocking — a compliance check against the registry returns conflicts before code is deployed, not after. A CI pipeline can check every PR against the current normative state and produce a compliance report automatically.

### Versioned naturally

Rules evolve through versions. The current directive is always clear, and the full version history shows how it changed and why. No need for "superseded by ADR-047" chains.

### Agent-native

AI agents query the registry through MCP tools. Before writing code, Claude calls `knowledge_check` to verify the action doesn't conflict with constraints. After coding, it calls `knowledge_record_reference` to prove it followed the rules. The governance loop is built into the agent's workflow, not bolted on after the fact.

---

## You Don't Have to Start from Scratch

The biggest barrier to adopting a decision registry is the initial effort: who has time to manually re-enter hundreds of decisions? The answer is: you don't have to.

A decision registry with automatic extraction scans your existing documentation — READMEs, architecture docs, runbooks, even your ADR files — and surfaces implicit rules, decisions, and constraints as typed candidates. You review and approve. In minutes, you go from scattered markdown to a structured registry without writing a single entry by hand.

```
> "Extract rules from ./docs/adr and ./CLAUDE.md for the Engineering scope"

Scanning 14 files...
  8 invariant candidates  (e.g., "All endpoints must require authentication")
  11 rule candidates       (e.g., "Use conventional commits")
  5 decision candidates   (e.g., "Chose PostgreSQL over DynamoDB")
  3 duplicates skipped
```

Your existing ADRs become the input. The registry becomes the output — searchable, enforceable, and queryable by agents.

---

## ADRs Are Not Wrong — They're Incomplete

ADRs got the core insight right: decisions need to be documented with context and reasoning. What they lack is structure, enforcement, and machine accessibility.

A decision registry builds on the ADR insight and adds:

| ADR | Decision Registry |
|-----|-------------------|
| Markdown file | Structured record with metadata |
| `docs/adr/` directory | Scoped, searchable registry |
| Informational | Enforceable (invariants, rules) |
| Standalone | Linked to constraints and other decisions |
| Human-only | Queryable by AI agents and CI pipelines |
| Point-in-time | Versioned with change history |
| Manual entry only | Automatic extraction from existing docs |

If your ADR initiative is thriving, a registry gives it structure and enforcement. If your ADRs have decayed, a registry addresses the reasons they failed — and can automatically extract what's still relevant from the files you already have.

---

## Getting Started

- [See how Knowledge works →](/product/how-it-works)
- [Get started in 5 minutes →](/docs/getting-started)
- [Connect AI agents →](/docs/integrations/claude-mcp)
