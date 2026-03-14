# CI Verifier

## Check every PR against your team's rules — automatically.

The Knowledge Verifier integrates into your CI/CD pipeline and checks pull requests against the normative state of your registry. Violations are caught before merge, not after deployment.

---

## How It Works

```
Developer opens PR
    |
    v
CI pipeline triggers Knowledge Verifier
    |
    v
Verifier maps changed files to Knowledge scopes
    |
    v
Fetches applicable invariants and rules
    |
    v
Parses PR description for Implementation Report
    |
    v
Three-axis analysis:
  - Are invariants respected?
  - Are mandatory rules followed?
  - Are citations valid?
    |
    v
Verdict: PASS / WARN / FAIL
    |
    v
Posts report to PR (JSON + Markdown)
```

---

## Three Gating Modes

| Mode | Behavior | When to Use |
|------|----------|-------------|
| `report-only` | Posts compliance report, never blocks | Initial rollout, learning phase |
| `fail-on-blocking` | Fails if invariants are violated | Standard enforcement |
| `strict` | Fails on any violation (invariants + mandatory rules) | Regulated environments |

**Recommended rollout**: start with `report-only` for two weeks. Review the reports. When the team is comfortable, switch to `fail-on-blocking`. Move to `strict` when compliance is critical.

---

## Implementation Report

Developers document compliance in their PR description using a structured section:

```markdown
## Implementation Report

### Invariants
- [FOLLOWED] inv-a1b2c3: All endpoints require authentication
  Added bearer token middleware to /api/payments route.

### Rules
- [FOLLOWED] rul-d4e5f6: Use conventional commits
  All commits follow feat/fix/chore convention.

- [DIVERGED] rul-g7h8i9: Max function length 50 lines
  Payment validation requires 62 lines due to regulatory checks.
  Will refactor in follow-up PR #143.
```

The Verifier parses these citations, validates entry IDs against the registry, and checks that all applicable constraints are addressed.

---

## What Gets Checked

### Invariants
Blocking constraints. If an invariant applies to the changed files' scope and isn't cited as FOLLOWED (or has an active override), the Verifier reports a conflict.

### Mandatory Rules
Active directives with MANDATORY severity. Uncited mandatory rules generate warnings in `fail-on-blocking` mode and failures in `strict` mode.

### Advisory Rules
Active directives with ADVISORY severity. Reported for awareness but never block the pipeline.

### Overrides
Active overrides are recognized. If a developer has a valid override for an invariant, the Verifier marks it as "overridden" rather than "violated."

---

## CI Integration

### GitHub Actions

```yaml
- name: Knowledge Compliance Check
  run: |
    pip install knowledge-verifier
    knowledge-verifier \
      --config .knowledge-verifier.yml \
      --mode fail-on-blocking
  env:
    KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

GitHub Actions environment is auto-detected: PR number, changed files, and base branch are resolved automatically.

### GitLab CI

```yaml
compliance-check:
  stage: test
  script:
    - pip install knowledge-verifier
    - knowledge-verifier --config .knowledge-verifier.yml --mode fail-on-blocking
  variables:
    KNOWLEDGE_API_URL: $KNOWLEDGE_API_URL
    KNOWLEDGE_API_KEY: $KNOWLEDGE_API_KEY
```

### Local Execution

```bash
knowledge-verifier \
  --config .knowledge-verifier.yml \
  --mode report-only \
  --pr-number 142 \
  --repo-url https://github.com/org/repo
```

---

## Configuration

```yaml
# .knowledge-verifier.yml
knowledge_api:
  url: https://knowledge.example.com
  # API key via KNOWLEDGE_API_KEY env var

verification:
  mode: fail-on-blocking
  scope_mapping:
    "src/payments/**": "Engineering/payments"
    "src/auth/**": "Engineering/auth"
    "infrastructure/**": "Operations"
    "**": "Engineering"

output:
  json: verifier-result.json
  markdown: verifier-report.md
```

### Scope Mapping

Map file paths to Knowledge scopes. When a PR changes `src/payments/stripe.py`, the Verifier fetches invariants and rules from the `Engineering/payments` namespace.

Patterns are matched in order — the first match wins. Use `**` as a catch-all.

---

## Output

### Machine-readable (JSON)

```json
{
  "verdict": "FAIL",
  "invariants": {
    "total": 3,
    "followed": 2,
    "violated": 1,
    "overridden": 0
  },
  "rules": {
    "mandatory": {"total": 5, "followed": 4, "diverged": 1},
    "advisory": {"total": 2, "followed": 1, "not_cited": 1}
  },
  "conflicts": [
    {
      "entry_id": "inv-a1b2c3",
      "constraint": "All API endpoints must require authentication",
      "status": "violated"
    }
  ]
}
```

### Human-readable (Markdown)

Posted as a PR comment or saved as a file. Shows the full compliance report with pass/fail indicators, citations, and recommendations.

---

## Why Not Just Code Review?

| Code Review | CI Verifier |
|-------------|-------------|
| Reviewer must remember all rules | Rules are checked automatically |
| Inconsistent across reviewers | Same checks every time |
| Easy to miss a constraint | Every applicable constraint is evaluated |
| No audit trail | Structured report for every PR |
| Doesn't scale with team size | Scales to any number of PRs |

The Verifier doesn't replace code review — it ensures that organizational constraints are checked consistently, so reviewers can focus on logic, design, and quality.

---

[CI/CD Setup Guide](/docs/integrations/ci-verifier) · [Getting Started](/docs/getting-started) · [Pricing](/pricing)
