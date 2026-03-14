# Automatic Extraction

Knowledge can scan your existing documentation and extract implicit rules, decisions, and constraints automatically. Nothing is published without human review.

---

## Why Extraction?

Most teams already have rules — they're just not structured. They live in:

- READMEs and CLAUDE.md files
- Architecture decision records
- Runbooks and playbooks
- Code comments and docstrings
- Wiki pages and Confluence docs

Manually entering each rule into a registry takes time most teams don't have. Automatic extraction solves the cold-start problem: point the CLI at your sources and get a populated registry in minutes.

---

## How It Works

```
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
```

### 1. Point at your sources

```bash
knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md
```

The CLI reads every file matching the configured patterns (default: `**/*.md`). You can target specific directories and file types:

```bash
knowledge extract --scope Engineering \
  --source ./docs --pattern "**/*.md" \
  --source ./src --pattern "**/README.md" \
  --source . --pattern "CLAUDE.md"
```

### 2. LLM analyzes each chunk

Files are split into contextual chunks (~1500 characters with 10% overlap). Each chunk is sent to an LLM with a structured extraction prompt. The LLM identifies:

- **Invariant candidates**: absolute constraints ("All API endpoints must require authentication")
- **Rule candidates**: active directives, mandatory or advisory ("Use conventional commits")
- **Decision candidates**: historical choices with context ("We chose PostgreSQL for transactional data")

Each extraction includes:
- **Confidence score** (0.0 – 1.0, minimum 0.6 to be kept)
- **Source excerpt** that motivated the extraction
- **Suggested tags** and namespace
- **LLM explanation** of why this was identified

### 3. Deduplication filters noise

Every extraction is compared against existing entries in the target scope using semantic similarity:

| Similarity | Result |
|-----------|--------|
| >= 0.92 | Exact duplicate — silently discarded |
| >= 0.80 | Similar — draft created with `REPLACES` relation pointing to the existing entry |
| < 0.80 | New — draft created without relations |

This prevents flooding the registry with entries you already have.

### 4. Human review

Every extraction becomes a **draft** visible in the web dashboard:

```
Draft dsd-8a3f (invariant, confidence: 0.91)
  Constraint: "All API endpoints must require authentication"
  Source: docs/security.md
  Excerpt: "Never expose unauthenticated endpoints. Every route must..."
  Tags: [security, api]
  → Approve | Reject | Edit
```

Reviewers see:
- The extracted content with type and confidence
- The source file and excerpt that motivated it
- Any detected relations (duplicates, replacements, tensions with existing entries)
- LLM explanation

Three actions:
- **Approve**: publishes the draft as a real Knowledge entry (decision, invariant, or rule) with `source: auto_extracted` attribution
- **Reject**: discards the draft
- **Edit**: modify the content, tags, or namespace before approving

---

## Source Types

### Git (working copy)

Reads files from a local repository:

```bash
knowledge extract --scope Engineering --source /path/to/repo --pattern "**/*.md"
```

No git history parsing — the LLM analyzes file contents directly.

### Document (specific files)

Read specific files by path:

```bash
knowledge extract --scope Engineering \
  --source /path/to/runbook.md \
  --source /path/to/architecture.md
```

### Stream API (custom sources)

For sources that don't live on disk, push documents directly via the API:

```bash
curl -X POST http://localhost:8090/api/v1/distill/stream \
  -H "Authorization: Bearer kn_..." \
  -H "Content-Type: application/json" \
  -d '{
    "scope_id": "scp-...",
    "documents": [
      {
        "content": "All deployments must go through staging first.",
        "metadata": {"author": "ops-team", "source": "runbook-v3"}
      }
    ],
    "auto_run": true
  }'
```

This enables extraction from any source: Confluence exports, Slack digests, internal wikis, or CI artifacts.

---

## Permissions

| Action | Required permission | Minimum role |
|--------|-------------------|-------------|
| Launch extraction | `distill_run` | senior-dev |
| View runs and drafts | `distill_read` | developer |
| Approve / reject / edit drafts | `distill_review` | tech-lead |
| Push via Stream API | `distill_stream` | admin |

---

## Configuration

### Extraction parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| Model | claude-sonnet-4-5-20250514 | LLM used for extraction |
| Temperature | 0.1 | Low for factual extraction |
| Min confidence | 0.6 | Below this, extractions are discarded |
| Max extractions per chunk | 5 | Limits noise |
| Max drafts per run | 200 | Caps total output |
| Chunk size | ~1500 chars | Paragraph-based splitting with 10% overlap |
| Dedup exact threshold | 0.92 | Similarity above this = duplicate |
| Dedup similar threshold | 0.80 | Similarity above this = REPLACES relation |

### Anthropic API key

Set the environment variable to enable LLM extraction:

```bash
export KNOWLEDGE_ANTHROPIC_API_KEY=sk-ant-...
```

---

## Best Practices

### Start broad, then refine

Run extraction on your entire `docs/` directory first. Review the results to understand what the LLM picks up. Then narrow your patterns to the most productive sources.

### Review in batches

Don't approve one draft at a time. Review all pending drafts for a run, reject the noise, and approve the good ones in a single session.

### Re-extract periodically

Documentation evolves. Run extraction every quarter (or after major documentation changes) to catch new implicit rules. The deduplication pipeline ensures you won't get flooded with entries you already have.

### Use tags consistently

The LLM suggests tags, but review them for consistency. A clean tagging system makes the registry more searchable.

---

## Learn More

- [Getting Started →](/docs/getting-started)
- [How Knowledge Works →](/product/how-it-works)
- [Concepts: Invariants →](/docs/concepts/invariants)
- [Concepts: Rules →](/docs/concepts/rules)
- [API Reference →](/docs/integrations/api-reference)
