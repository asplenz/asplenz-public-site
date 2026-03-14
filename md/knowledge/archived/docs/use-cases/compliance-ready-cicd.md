# Compliance-Ready CI/CD

## The Problem

Teams declare engineering rules — "all API changes need tests," "no deploys on Friday," "database migrations require review" — but enforcement is manual. Rules live in wiki pages, Slack messages, or engineers' heads. CI pipelines check syntax and tests, but not organizational constraints. When an audit asks "did this PR comply with your stated rules?", the answer requires hours of manual reconstruction.

## How Knowledge Solves It

The Knowledge Verifier runs in your CI pipeline as a gate. It reads the PR context (title, body, changed files, commits), resolves the applicable Knowledge scopes based on which files were modified, and checks whether the PR cites the relevant normative entries. It produces a machine-readable verdict and a human-readable report.

### Pipeline Flow

```
PR opened / updated
    │
    ▼
CI triggers Verifier
    │
    ▼
Verifier reads:
  - PR title, body, author
  - Changed files list
  - Commit messages
    │
    ▼
Maps files → scopes (via config)
  src/api/** → Engineering
  infra/**   → Operations
    │
    ▼
Resolves each scope via Knowledge API
    │
    ▼
Parses citations from PR body
  (inv-xxx, rul-yyy, ovr-zzz)
    │
    ▼
3-axis analysis:
  A. Conformity (applicable entries)
  B. Override validity
  C. Citation coverage
    │
    ▼
Verdict: pass / warn / fail
    │
    ▼
Outputs:
  - verifier-result.json (machine)
  - verifier-report.md   (human)
```

### Implementation Report

The Verifier looks for an `## Implementation Report` section in the PR body where the author documents how they addressed each applicable normative entry:

```markdown
## Implementation Report

- inv-8a3f1b2c4d5e: Followed — deployment scheduled within allowed window
- rul-2b7c9e4f1a3d: Followed — OpenAPI spec updated in commit a1b2c3d
- rul-6f8e2a1b3c4d: Overridden — see ovr-9d1e3f5a7b2c (approved for hotfix)
```

Each citation links the PR to a specific Knowledge entry with a clear status. The Verifier validates that cited IDs exist and that referenced overrides are active.

### Gating Modes

The Verifier supports three modes, configured per repository:

| Mode | Behavior | When to Use |
|------|----------|-------------|
| **report-only** | Always exits 0, generates report | Initial adoption — see what would fail without blocking |
| **fail-on-blocking** | Exits 1 only if blocking invariants are uncited | Standard operation — invariants block, rules warn |
| **strict** | Exits 1 on any uncited mandatory entry | Regulated environments — full citation coverage required |

Start with `report-only`. Review reports for a few weeks. Promote to `fail-on-blocking` once the team is comfortable. Use `strict` only where regulatory requirements demand it.

## Example: GitHub Actions Integration

```yaml
- name: Knowledge Compliance Check
  run: |
    python -m knowledge_verifier \
      --config .knowledge-verifier.yml
  env:
    KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

The Verifier detects GitHub Actions automatically via `GITHUB_EVENT_PATH` and extracts PR context from the webhook payload. No additional configuration needed for PR metadata.

### Scope Mapping

The configuration file maps file paths to Knowledge scopes:

```yaml
scope_mappings:
  - scope: "Engineering"
    paths: ["src/**", "lib/**", "apps/**"]
  - scope: "Operations"
    paths: ["infra/**", "deploy/**", ".github/**"]

default_scope: "Engineering"
gating_mode: "fail-on-blocking"
```

When a PR modifies `src/api/routes.py` and `infra/terraform/main.tf`, the Verifier resolves both Engineering and Operations scopes and checks compliance against both.

## What It Produces

| Output | Format | Content |
|--------|--------|---------|
| `verifier-result.json` | JSON | Verdict, violations, warnings, citations, per-scope analysis |
| `verifier-report.md` | Markdown | Verdict banner, blocking violations, applicable normative state, citation coverage, recommended actions |

The JSON result can be consumed by other tools (dashboards, audit systems, notification bots). The Markdown report is designed for PR comments.

### Report Excerpt

```
## Knowledge Compliance Report

**Verdict: PASS**

### Engineering (scp-e1134c6636d7)
- 3 invariants applicable, 3 cited
- 2 mandatory rules applicable, 2 cited
- 1 advisory rule applicable, 0 cited (advisory — not required)

### Citation Coverage
| Entry | Status | Location |
|-------|--------|----------|
| inv-8a3f... | cited | implementation_report |
| rul-2b7c... | cited | implementation_report |
```

This report is the compliance artifact. It proves what was checked, what was found, and what the author documented — without requiring anyone to manually trace the decision chain after the fact.
