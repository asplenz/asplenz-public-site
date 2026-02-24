# Knowledge Verifier: PR Compliance Verification for CI/CD

> Route: /verifier

Make Knowledge enforceable in practice — without turning Knowledge into a CI runtime.

Knowledge Verifier analyzes each Pull Request and determines whether the change is compliant with the applicable **Invariants**, **Rules**, **Decisions**, and active **Overrides** — and whether the PR cites the relevant Knowledge IDs (via an Implementation Report).

## What it produces

### 1) CI verdict (machine-readable)

- `pass` — compliant
- `warn` — non-blocking issues (advisory rules, low-confidence inferences, missing optional citations)
- `fail` — blocking violations (active invariants or mandatory rules without a valid override), or missing required reporting (strict mode)

### 2) Compliance Report (human-readable)

A Markdown report that reviewers can read in seconds:

- Blocking violations with references to affected files/lines when possible
- Advisory findings
- Overrides used (and whether they are active / scoped / not expired)
- Citation coverage (missing/invalid IDs)
- Recommended next actions (fix, request approval, create override, record new decision)

## How teams use it

### Report-only (early adoption)
Always posts the report. Never blocks merges.

### Fail-on-blocking (default guardrails)
Blocks only on invariant / mandatory-rule violations without valid overrides.

### Strict (high assurance)
Also blocks if required citations / Implementation Report are missing.

## Why it matters (ex-ante + ex-post)

Most security and quality tools scan code **after** a PR exists.

Verifier closes the loop between **declared rules** (Knowledge) and **executed changes** (PRs), so:

- Reviewers see not just the diff, but the decision context
- Exceptions are validated, not hand-waved
- Drift becomes measurable over time

## Works with your agents

Agents can include a lightweight **Implementation Report** in the PR description:

- Decisions followed (IDs)
- Invariants verified (IDs + status)
- Rules applied (IDs)
- Overrides used (IDs) or “none”

Verifier validates that these IDs exist and are applicable.

## Relationship to Evidence

Use Evidence to seal the approvals / overrides / compliance reports that become legally or contractually significant.

[Learn about Evidence](/evidence)
