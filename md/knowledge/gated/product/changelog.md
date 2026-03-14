# Changelog

All notable changes to Knowledge are documented here.

---

## v0.10.0 — March 2026

### Automatic Extraction

- **CLI extraction**: `knowledge extract --scope <name> --source <path>` scans existing documentation and surfaces implicit rules, decisions, and invariants as typed drafts
- **LLM-powered analysis**: each source file is chunked and analyzed by an LLM to identify normative content with confidence scoring (0.6 – 1.0 threshold)
- **Draft review workflow**: extracted candidates appear in the dashboard for human review — approve, reject, or edit before publishing
- **Semantic deduplication**: new extractions are compared against existing entries using embedding similarity to avoid duplicates and detect replacements
- **Git source connector**: point at a local repository and extract from working copy files by glob pattern
- **Document source connector**: extract from specific local files (markdown, text)
- **Stream API**: push documents from any external source for extraction via `POST /distill/stream`
- **Relation detection**: extraction identifies `REPLACES` and `IN_TENSION_WITH` relations between new drafts and existing entries
- **Publish on approve**: approved drafts are automatically created as real Knowledge entries (decisions, invariants, rules) with `source: auto_extracted` attribution

### New Permissions

- `distill_run`: launch extraction runs (senior-dev+)
- `distill_read`: view runs and drafts (developer+)
- `distill_review`: approve, reject, or edit drafts (tech-lead+)
- `distill_stream`: push documents via Stream API (admin)

---

## v0.9.0 — March 2026

### Namespaces

- **Namespace hierarchy**: subdivide scopes into nested namespaces (e.g., `payments`, `payments/stripe`)
- Entries can be assigned to specific namespaces within a scope
- Default `_root` namespace for backward compatibility
- Maximum nesting depth of 2 levels

### Multi-Tenant

- **Tenant model**: full tenant isolation with `parent_tenant_id` for holding → subsidiary hierarchies
- API keys scoped to a single tenant
- Tenant creation and management endpoints

### Analytics

- **Coverage analytics**: which scopes have rules, invariants, and decisions
- **Completeness scoring**: identify scopes missing key entry types
- **Dead entry detection**: find invariants and rules with no references
- **Link suggestions**: recommend connections between related entries

---

## v0.8.0 — February 2026

### Authentication Overhaul

- **Bearer token auth**: migrated from `X-API-Key` header to `Authorization: Bearer kn_...`
- **Principal model**: unified identity for humans, agents, and system accounts
- **Role hierarchy**: developer → senior-dev → tech-lead → admin with granular permissions
- **Permission intersection**: effective permissions = key permissions ∩ role permissions
- **Cascade deactivation**: deactivating a principal deactivates all their API keys

### Status Workflow

- **Entry lifecycle**: draft → active → archived status transitions
- Draft entries visible only to their creators
- Status change events recorded in timeline

---

## v0.7.0 — January 2026

### Approval Workflow

- **Approval requests**: agents and humans can request approval for actions blocked by `requires_approval` entries
- **Approval decisions**: approve or reject with comments and role verification
- **Auto-override**: approved requests automatically create scoped overrides
- **Approval expiry**: requests expire after configurable duration
- Dashboard shows pending approvals and decision history

### Events Timeline

- **Event log**: chronological record of all normative changes per scope
- Filter by event type (created, updated, revoked, approved, etc.)
- Catch-up pattern: query events after a specific event ID

---

## v0.6.0 — December 2025

### CI Verifier

- **Knowledge Verifier**: CLI tool that checks PR compliance against normative state
- Three gating modes: `report-only`, `fail-on-blocking`, `strict`
- Implementation Report parsing with citation validation
- Machine-readable JSON output + human-readable Markdown report
- GitHub Actions auto-detection
- Scope mapping: file paths → Knowledge scopes

### References

- **Usage traces**: record where knowledge entries were cited, followed, or diverged from
- Context types: pull_request, commit, deploy, ci_check
- Divergence tracking with mandatory reason field
- Query by entry, scope, or context reference

---

## v0.5.0 — November 2025

### MCP Server

- **10 MCP tools** for AI agent integration
- Scope resolution by name (case-insensitive) or ID
- Full CRUD: query, record, check, override, reference, approval
- Compatible with Claude Code, Cursor, and any MCP client

### Links and Relations

- **Typed relations**: depends_on, supersedes, contradicts, in_tension_with, creates
- Bidirectional link queries
- Graph visualization in dashboard

---

## v0.4.0 — October 2025

### Overrides

- **Governed exceptions**: temporary and permanent overrides for invariants and rules
- Justification, conditions, and expiry support
- Override revocation with event logging
- Compliance check shows overridden entries separately

### Search

- **Full-text search** across decisions, invariants, and rules
- Filter by entry type, scope, author, and tags
- Context excerpts in results

---

## v0.3.0 — September 2025

### Rules with Versioning

- **Versioned rules**: updates create new versions, history is preserved
- Two severity levels: MANDATORY and ADVISORY
- Rule archiving (soft-delete with event)
- Version history endpoint

### Dashboard

- **Web UI**: React + Tailwind dashboard
- Scope pages with tabs: Decisions, Invariants, Rules, Overrides
- KPI cards on the main dashboard
- API key authentication

---

## v0.2.0 — August 2025

### Core Entities

- **Decisions**: immutable records with context, reasoning, author, tags
- **Invariants**: blocking constraints with rationale and approval gates
- **Scopes**: domain organization (Engineering, Product, Operations)
- **Compliance check**: test intended actions against normative state

---

## v0.1.0 — July 2025

Initial release.

- FastAPI backend with SQLAlchemy async
- SQLite database for development
- API key authentication
- Basic CRUD for decisions and scopes
