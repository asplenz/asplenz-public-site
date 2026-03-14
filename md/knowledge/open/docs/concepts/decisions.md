# Concepts: Decisions

A **decision** is the foundational entity in Knowledge. It records what was decided, by whom, when, and why — as an immutable historical fact.

---

## What Is a Decision?

A decision captures an organizational choice with structured metadata:

| Field | Type | Description |
|-------|------|-------------|
| `decision` | string | What was decided |
| `context` | string | The situation that led to the decision |
| `reasoning` | string | Why this option was chosen |
| `author` | string | Who made the decision |
| `author_type` | enum | `human`, `agent`, or `system` |
| `tags` | string[] | Categorization labels |
| `namespace` | string | Sub-scope organization (default: `_root`) |

Decisions are **immutable** — once created, they cannot be modified. This preserves the historical record exactly as it was captured. If a decision is later revised, the new decision links to the old one via a `supersedes` relation.

---

## Creating a Decision

### Via the API

```bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/decisions \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "decision": "Use PostgreSQL for all transactional data stores",
    "context": "Evaluated PostgreSQL, DynamoDB, and CockroachDB",
    "reasoning": "ACID guarantees without distributed complexity",
    "author": "sarah.chen",
    "author_type": "human",
    "tags": ["database", "infrastructure"]
  }'
```

### Via MCP (AI Agent)

```
"Record a decision in Engineering: we chose PostgreSQL for the production database.
 Context: evaluated PostgreSQL, DynamoDB, and CockroachDB.
 Reasoning: ACID guarantees without distributed complexity."
```

The agent calls `knowledge_record` with the structured fields.

### Via the Dashboard

Navigate to a scope → Decisions tab → **Add Decision** → fill in the form.

---

## Linking Decisions to Constraints

Decisions produce invariants and rules. Link them to trace the chain:

```
POST /api/v1/links
{
  "from_id": "dec-abc123",
  "from_type": "decision",
  "to_id": "inv-def456",
  "to_type": "invariant",
  "relation": "creates"
}
```

Available relation types:

| Relation | Meaning |
|----------|---------|
| `creates` | Decision produced this invariant or rule |
| `depends_on` | Entry B requires entry A |
| `supersedes` | Entry B replaces entry A |
| `contradicts` | Entries conflict (needs resolution) |
| `in_tension_with` | Entries pull in different directions |

---

## Searching Decisions

```bash
curl -X POST http://localhost:8090/api/v1/search \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "database",
    "entry_type": "decision",
    "scope_id": "scp-XXXX"
  }'
```

Search covers the `decision`, `context`, and `reasoning` fields. Results include excerpts and metadata.

---

## Best Practices

- **Record at decision time**, not retroactively. Context and reasoning are freshest when the decision is made.
- **Include the alternatives considered** in the context field. "We evaluated X, Y, and Z" is more valuable than "We chose X."
- **Tag consistently**. Tags enable filtering. Use domain tags (`database`, `auth`, `deployment`) and category tags (`architecture`, `process`, `security`).
- **Link to constraints**. If a decision creates a rule or invariant, create the link. This is what makes the graph navigable.
- **Use author_type accurately**. If an AI agent suggested the decision and a human approved it, the author should be the human who approved.

---

## Related Concepts

- [Invariants](/docs/concepts/invariants) — blocking constraints, often created by decisions
- [Rules](/docs/concepts/rules) — active directives, often created by decisions
- [Overrides](/docs/concepts/overrides) — governed exceptions to invariants and rules
