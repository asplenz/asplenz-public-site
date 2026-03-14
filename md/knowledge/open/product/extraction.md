# Automatic Extraction

## Your rules already exist. They're just not structured.

Every team has implicit rules — buried in READMEs, architecture docs, runbooks, code comments, and Slack threads. Manually entering each one into a registry takes time most teams don't have.

Knowledge solves the cold-start problem: point the CLI at your existing sources and get a populated registry in minutes.

---

## How It Works

```
Your existing docs, repos, runbooks
    |
    v
knowledge extract --scope Engineering --source ./docs
    |
    v
LLM analyzes each chunk, identifies rules and constraints
    |
    v
Semantic deduplication filters noise
    |
    v
Typed drafts appear in your dashboard
    |
    +-- Approve --> published to registry
    +-- Edit --> modify then approve
    +-- Reject --> discarded
```

Nothing is published without human review.

---

## What Gets Extracted

The LLM identifies three types of normative content:

### Invariants
Absolute constraints that must never be violated.

*"All API endpoints must require authentication"* — extracted from your security docs, surfaced as a blocking constraint.

### Rules
Active directives that guide behavior, with mandatory or advisory severity.

*"Use conventional commits for all repositories"* — extracted from your contributing guide, surfaced as a mandatory rule.

### Decisions
Historical choices with context and reasoning.

*"We chose PostgreSQL for transactional data because we need ACID guarantees"* — extracted from your architecture docs, surfaced as an immutable decision record.

---

## Three Source Types

### Local files
Point at directories or specific files. The CLI reads everything matching your patterns.

```bash
knowledge extract --scope Engineering \
  --source ./docs --pattern "**/*.md" \
  --source ./src --pattern "**/README.md" \
  --source . --pattern "CLAUDE.md"
```

### Git repositories
Scan a working copy by glob pattern. No git history parsing — the LLM analyzes current file contents.

```bash
knowledge extract --scope Engineering --source /path/to/repo --pattern "**/*.md"
```

### Stream API
For sources that don't live on disk — Confluence exports, Slack digests, wiki pages, CI artifacts — push documents directly via the API.

```bash
curl -X POST http://localhost:8090/api/v1/distill/stream \
  -H "Authorization: Bearer kn_..." \
  -d '{"scope_id": "scp-...", "documents": [{"content": "..."}], "auto_run": true}'
```

---

## Smart Deduplication

Every extraction is compared against existing entries using semantic similarity:

| Similarity | Result |
|-----------|--------|
| >= 0.92 | Exact duplicate — silently discarded |
| >= 0.80 | Similar — draft linked to existing entry for review |
| < 0.80 | New — draft created |

Run extraction quarterly without flooding your registry with entries you already have.

---

## Human Review

Every extraction becomes a draft visible in the dashboard:

- **Content** with type classification and confidence score (0.6 – 1.0)
- **Source excerpt** that motivated the extraction
- **Detected relations** — duplicates, replacements, tensions with existing entries
- **LLM explanation** of why this was identified

Three actions: **Approve** (publishes to registry), **Reject** (discards), or **Edit** (modify before approving).

---

## From Scattered Docs to Structured Registry

| Before | After |
|--------|-------|
| Rules buried in READMEs | Typed, searchable entries |
| Decisions in Slack threads | Immutable records with context |
| Constraints in people's heads | Blocking invariants in the registry |
| Manual entry, one at a time | Batch extraction in minutes |
| No one maintains the docs | Re-extract quarterly, dedup handles the rest |

---

## Get Started

```bash
knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md
```

Review the drafts in your dashboard. Approve the good ones, reject the noise. Your registry is populated.

[Getting Started Guide](/docs/getting-started) · [Extraction Documentation](/docs/extraction) · [Pricing](/pricing)
