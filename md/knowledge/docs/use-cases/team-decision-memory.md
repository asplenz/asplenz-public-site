# Team Decision Memory

## The Problem

Engineering teams make hundreds of decisions. Most are never written down. The ones that are get buried in Confluence pages, Notion docs, or Slack threads that no one searches. Six months later, a new engineer asks "why did we choose PostgreSQL over DynamoDB?" and the answer is either lost or reconstructed from memory — incomplete, biased, and unverifiable.

Architecture Decision Records (ADRs) were supposed to fix this. In practice, they decay. They live in markdown files that nobody updates, with no structure, no search, no connection to the rules they inform. A decision about database choice has no link to the invariant it created ("never use eventual consistency for financial transactions"). The decision exists. The constraint exists. But they are not connected.

## How Knowledge Solves It

Knowledge treats decisions as first-class entities with structure, scope, and relationships. A decision is not a document — it is a record with an author, a timestamp, context, reasoning, and tags. It lives in a scope (Engineering, Product, Operations) and can be linked to the invariants and rules it produced.

### Recording a Decision

```
POST /api/v1/scopes/{scope_id}/decisions
{
  "decision": "Use PostgreSQL for all transactional data stores",
  "context": "Evaluated PostgreSQL, DynamoDB, and CockroachDB for the payment service migration",
  "reasoning": "PostgreSQL provides ACID guarantees without operational complexity of distributed databases. DynamoDB's eventual consistency model is incompatible with financial transaction requirements. CockroachDB adds unnecessary complexity for our current scale.",
  "author": "sarah.chen",
  "author_type": "human",
  "tags": ["database", "infrastructure", "payments"]
}
```

The decision is immutable once created. Context and reasoning are preserved exactly as recorded. No one edits it later to match a different narrative.

### Connecting Decisions to Constraints

When a decision produces a rule or invariant, create a typed link:

```
Decision: "Use PostgreSQL for all transactional data stores"
    │
    ├── creates → Invariant: "No eventual consistency for financial transactions"
    ├── creates → Rule: "All new services must use PostgreSQL unless exempted"
    └── supersedes → Decision: "Evaluate NoSQL for payment service" (earlier exploration)
```

These links are queryable. When someone asks "why does this invariant exist?", the answer is one API call away — follow the `creates` link back to the decision, read the reasoning.

### Searching Decisions

Knowledge provides structured search across all scopes:

```
POST /api/v1/search
{
  "query": "database",
  "scope_id": "scp-e1134c6636d7",
  "entry_type": "decision",
  "limit": 10
}
```

Results include the decision text, context excerpt, author, and creation date. Filter by scope, entry type, author, tags, or date range. No more digging through wikis.

### The Graph

Decisions, invariants, and rules form a directed graph. Knowledge tracks typed relations between them:

| Relation | Meaning |
|----------|---------|
| `depends_on` | Entry B requires entry A to be valid |
| `supersedes` | Entry B replaces entry A |
| `contradicts` | Entry B conflicts with entry A (needs resolution) |

This graph answers questions that flat documents cannot:
- "What depends on this invariant?" — find all rules and decisions linked to it
- "What did this decision supersede?" — trace the evolution of a choice
- "Are there contradictions?" — find entries explicitly marked as conflicting

## Example: Onboarding a New Engineer

A new engineer joins the team. Instead of reading 47 Confluence pages of varying freshness, they:

**Step 1**: Browse scopes — Engineering, Product, Operations. Each scope shows counts: 12 decisions, 4 invariants, 6 rules.

**Step 2**: Read the invariants first — these are the hard constraints. "No production deployment on Friday after 16:00 UTC." "All public APIs must require authentication." Four invariants, each with a rationale and a link to the decision that created it.

**Step 3**: Search for their domain. "Search: payments" returns 3 decisions, 1 invariant, 2 rules — all scoped to Engineering. They read the PostgreSQL decision, see the reasoning, follow the link to the "no eventual consistency" invariant.

**Step 4**: Check the graph to understand how entries relate. The PostgreSQL decision links to 2 rules and 1 invariant. One rule was updated last month (new version with relaxed conditions for read replicas).

The engineer now understands not just *what* the rules are, but *why* they exist and *how* they evolved. This took 15 minutes, not 3 days.

## What It Produces

| Capability | What You Get |
|------------|-------------|
| **Structured decisions** | Every decision has context, reasoning, author, and tags — not just a title |
| **Linked constraints** | Decisions are connected to the invariants and rules they produced |
| **Scoped organization** | Decisions belong to scopes, not folders — browse by domain, not by file path |
| **Searchable history** | Full-text search across all entries, filterable by type, author, scope, date |
| **Relation graph** | Visual and queryable graph of how entries depend on, supersede, or contradict each other |
| **Immutable record** | Decisions cannot be edited after creation — the historical record is preserved |

This is not a wiki. It is a structured registry where decisions are recorded once, linked to their consequences, and retrievable by anyone who needs them — months or years later, with full context intact.
