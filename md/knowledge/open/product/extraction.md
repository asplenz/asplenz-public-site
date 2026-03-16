# Automatic Extraction

## Your rules already exist. They're just not structured.

Every team has implicit rules — buried in READMEs, architecture docs, runbooks, code comments, and Slack threads. Manually entering each one into a registry takes time most teams don't have.

Knowledge solves the cold-start problem: point the CLI at your existing sources and get a populated registry in minutes.

---

## How It Works

Point the CLI at your existing sources. Knowledge analyzes the content, identifies implicit rules and constraints, and surfaces them as typed drafts in your dashboard. You review each one — approve, edit, or reject. Nothing is published without human validation.

```bash
knowledge extract --scope Engineering --namespace payments --source ./docs --source ./CLAUDE.md
```

Semantic deduplication ensures you can re-extract regularly without flooding the registry.

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
knowledge extract --scope Engineering --namespace infra \
  --source ./docs --pattern "**/*.md" \
  --source ./src --pattern "**/README.md" \
  --source . --pattern "CLAUDE.md"
```

### Git repositories
Point the CLI at any repository and filter by glob pattern. Knowledge analyzes source files — code, configuration, infrastructure definitions — and surfaces implicit rules and constraints that are not documented anywhere.

```bash
knowledge extract --scope Engineering --source /path/to/repo --pattern "**/*.{ts,py,yaml,md}"
```

### Ingestion API
For sources that don't live on disk — Confluence exports, Slack digests, wiki pages, CI artifacts — push documents directly via the REST API. See the [API documentation](/docs/api) for details.

---

## Smart Deduplication

Every extraction is compared against existing entries using semantic similarity. Exact duplicates are automatically filtered out and logged in the extraction report. Near-matches are flagged with a REPLACES relation and appear in the review queue alongside the existing entry, so you can compare both versions and decide whether the new one should replace the old one.

This means you can re-extract regularly — quarterly, after a major rewrite, or whenever new docs appear — without worrying about polluting your registry.

---

## Human Review

Nothing is published without validation. Every extraction becomes a draft visible in the dashboard, showing:

- The proposed entry with its detected type (Invariant, Rule, or Decision) and confidence score
- The source excerpt that motivated the extraction
- Detected relations to existing entries — duplicates, replacements, tensions
- An explanation of why this was identified

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
knowledge extract --scope Engineering --namespace payments --source ./docs --source ./CLAUDE.md
```

Review the drafts in your dashboard. Approve the good ones, reject the noise. Your registry is populated.

[Full Extraction Documentation →](/docs/extraction)

[Getting Started Guide](/docs/getting-started)
