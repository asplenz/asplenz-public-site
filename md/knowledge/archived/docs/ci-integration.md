# CI/CD Integration

## Overview

The Knowledge Verifier is a CLI tool that runs in your CI/CD pipeline. It analyzes Pull Requests against the normative state declared in Knowledge and produces a compliance verdict.

The Verifier:

- Reads PR context from the CI environment (title, description, changed files, commit messages)
- Resolves which Knowledge scopes apply based on the files changed
- Retrieves the normative state from the Knowledge API
- Checks citation coverage and override validity
- Produces a structured verdict (pass / warn / fail)
- Outputs a machine-readable JSON result and a human-readable Markdown report

The Verifier does not access your source control API. All PR context is provided by the CI runner through environment variables and local git commands.

## Gating Modes

The Verifier supports three gating modes that control how strictly compliance is enforced.

### report-only

The CI step never fails. The compliance report is always generated and available as an artifact. Use this mode during initial rollout to observe how your PRs perform against the normative state without blocking anyone.

### fail-on-blocking

The CI step fails only when a blocking violation is detected — an invariant or mandatory rule is violated and no valid override exists. Advisory warnings and missing citations do not block. This is the recommended mode for most teams.

### strict

The CI step fails on blocking violations and also when:

- The PR description does not include an Implementation Report section
- Required Knowledge entries are not cited
- Cited Knowledge IDs are invalid

Use this mode for high-assurance environments where full traceability is required.

## Fail-Open vs Fail-Closed

When the Verifier encounters an error (Knowledge API unavailable, scope not found, git diff failed), its behavior is configurable:

| Mode | Behavior |
|------|----------|
| **Fail-open** (default) | Produces a degraded report and passes CI. The report indicates what could not be verified. Recommended during adoption. |
| **Fail-closed** | Fails CI on any uncertainty. Use when compliance is mandatory and incomplete verification is unacceptable. |

## Implementation Report

An Implementation Report is a section in the PR description that documents which Knowledge entries were considered during the implementation. The expected format:

```markdown
## Implementation Report

### Invariants verified
- inv-abc123: All endpoints require auth — followed
- inv-def456: No hardcoded secrets — followed

### Rules applied
- rul-abc123: PR approval required — followed

### Overrides used
- ovr-abc123: Health endpoint auth exception

### Decisions referenced
- dec-abc123: Use FastAPI for backend services
```

The Verifier parses this section to extract Knowledge IDs and verify they exist in the normative state.

## Compliance Report

After each run, the Verifier produces two output files:

### Machine-readable (JSON)

```json
{
  "status": "warn",
  "scopes_resolved": ["Engineering"],
  "blocking_violations": [],
  "warnings": [
    {
      "entry_type": "invariant",
      "entry_id": "inv-abc123",
      "statement": "All API endpoints must require authentication",
      "severity": "blocking"
    }
  ],
  "missing_citations": ["inv-abc123"],
  "implementation_report_found": false,
  "applicable_entries_summary": {
    "invariants": 3,
    "mandatory_rules": 2,
    "advisory_rules": 1
  }
}
```

### Human-readable (Markdown)

The Markdown report includes:

- Verdict summary (PASS / WARN / FAIL) and gating mode
- Blocking violations with entry IDs and constraint text
- Applicable normative state per scope (invariants, rules, overrides)
- Citation coverage (Implementation Report found/missing, missing/invalid citations)
- Overrides used
- Recommended actions for the PR author
- Metadata (PR reference, commit SHA, timestamp)

## Example: CI Output

```
Knowledge Verifier: WARN
  2 warning(s)
  2 missing citation(s)
  JSON: verifier-result.json
  Report: verifier-report.md
```

In `fail-on-blocking` mode, this exits with code 0 (pass) because there are no blocking violations — only missing citations. In `strict` mode, this would exit with code 1 (fail).

## Configuration

The Verifier is configured via a YAML file. Key settings:

```yaml
# Gating mode
gating_mode: "fail-on-blocking"

# Error handling
fail_on_error: false

# Map repository paths to Knowledge scopes
scope_mappings:
  - scope: "Engineering"
    paths: ["src/**", "lib/**"]
  - scope: "Operations"
    paths: ["infra/**", ".github/**"]

# Default scope when no path matches
default_scope: "Engineering"

# Citation requirements
citation_policy:
  require_implementation_report: true
  required_prefixes: ["inv-", "rul-"]
```

## CI Setup

The Verifier requires:

- The Knowledge API accessible from the CI runner
- An API key stored as a CI secret
- Full git history (`fetch-depth: 0`) for diff computation

The Verifier reads PR metadata from CI-native environment variables (GitHub Actions, GitLab CI) or from generic environment variables for other CI systems.

Exit codes:

| Verdict | report-only | fail-on-blocking | strict |
|---------|-------------|------------------|--------|
| pass | 0 | 0 | 0 |
| warn | 0 | 0 | 0 |
| fail | 0 | 1 | 1 |
