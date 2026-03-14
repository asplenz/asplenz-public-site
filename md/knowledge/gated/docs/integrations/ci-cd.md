# Integration: CI/CD Verifier

The Knowledge Verifier runs in your CI pipeline and checks that PRs comply with applicable invariants and rules. It produces a machine-readable verdict and a human-readable compliance report.

---

## How It Works

```
PR opened/updated
    │
    ▼
CI triggers Verifier
    │
    ▼
Reads PR context (title, body, changed files, commits)
    │
    ▼
Maps changed files → Knowledge scopes (via config)
    │
    ▼
Resolves each scope via Knowledge API
    │
    ▼
Parses citations from PR body (Implementation Report)
    │
    ▼
3-axis analysis:
  A. Conformity — are applicable entries addressed?
  B. Override validity — are cited overrides active?
  C. Citation coverage — are all mandatory entries cited?
    │
    ▼
Verdict: PASS / WARN / FAIL
    │
    ▼
Outputs: verifier-result.json + verifier-report.md
```

---

## Setup

### 1. Install

```bash
pip install knowledge-verifier
# or
cd src/knowledge-verifier && pip install -e .
```

### 2. Configure

Create `.knowledge-verifier.yml` in your repository root:

```yaml
scope_mappings:
  - scope: "Engineering"
    paths: ["src/**", "lib/**", "apps/**"]
  - scope: "Operations"
    paths: ["infra/**", "deploy/**", ".github/**"]

default_scope: "Engineering"
gating_mode: "fail-on-blocking"
```

### 3. Add to CI

#### GitHub Actions

```yaml
name: Knowledge Compliance
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  compliance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Knowledge Compliance Check
        run: python -m knowledge_verifier --config .knowledge-verifier.yml
        env:
          KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
          KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

The Verifier detects GitHub Actions automatically and extracts PR metadata from `GITHUB_EVENT_PATH`.

#### GitLab CI

```yaml
knowledge-compliance:
  stage: test
  script:
    - python -m knowledge_verifier --config .knowledge-verifier.yml
  variables:
    KNOWLEDGE_API_URL: $KNOWLEDGE_API_URL
    KNOWLEDGE_API_KEY: $KNOWLEDGE_API_KEY
  rules:
    - if: $CI_MERGE_REQUEST_ID
```

#### Manual / Local

```bash
KNOWLEDGE_API_URL=http://localhost:8090 \
KNOWLEDGE_API_KEY=kn_xxxxxxxx \
VERIFIER_PR_TITLE="Add health endpoint" \
VERIFIER_PR_BODY="## Implementation Report ..." \
VERIFIER_FILES_CHANGED="src/routes/health.py" \
python -m knowledge_verifier --config .knowledge-verifier.yml
```

---

## Gating Modes

| Mode | Behavior | Exit Code |
|------|----------|-----------|
| `report-only` | Always passes, generates report | Always 0 |
| `fail-on-blocking` | Fails only if blocking invariants are uncited | 0 or 1 |
| `strict` | Fails on any uncited mandatory entry | 0 or 1 |

**Recommended rollout:**
1. Start with `report-only` — see what would fail
2. After 2-4 weeks, switch to `fail-on-blocking` — invariants block
3. For regulated environments, use `strict` — full compliance required

---

## Implementation Report

The Verifier looks for an `## Implementation Report` section in the PR body:

```markdown
## Implementation Report

### Invariants verified
- inv-8a3f1b2c4d5e: All endpoints require auth — followed
- inv-2c4d6e8f0a1b: Secrets in env vars — followed

### Rules applied
- rul-2b7c9e4f1a3d: PR approval required — followed
- rul-6f8e2a1b3c4d: Use conventional commits — overridden (see ovr-9d1e3f5a7b2c)
```

Each citation links the PR to a specific Knowledge entry with a clear status. The Verifier validates that:
- Cited IDs exist in the Knowledge registry
- Referenced overrides are active and not expired
- All mandatory entries for applicable scopes are addressed

---

## Outputs

### verifier-result.json

```json
{
  "verdict": "pass",
  "scopes_checked": ["Engineering"],
  "violations": [],
  "warnings": [],
  "citations": [
    {
      "entry_id": "inv-8a3f1b2c4d5e",
      "entry_type": "invariant",
      "status": "followed",
      "source": "implementation_report"
    }
  ]
}
```

### verifier-report.md

```markdown
## Knowledge Compliance Report

**Verdict: PASS**

### Engineering (scp-e1134c6636d7)
- 3 invariants applicable, 3 cited
- 2 mandatory rules applicable, 2 cited
- 1 advisory rule applicable, 0 cited (advisory)

### Citation Coverage
| Entry | Status | Location |
|-------|--------|----------|
| inv-8a3f... | followed | implementation_report |
| rul-2b7c... | followed | implementation_report |
```

---

## Scope Mapping

The `scope_mappings` configuration maps file paths to Knowledge scopes:

```yaml
scope_mappings:
  - scope: "Engineering"
    paths: ["src/**", "lib/**"]
  - scope: "Operations"
    paths: ["infra/**", "deploy/**"]
  - scope: "Security"
    paths: ["auth/**", "crypto/**"]
```

When a PR modifies files in multiple scopes, the Verifier checks compliance against all applicable scopes.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Verifier can't reach API | Check `KNOWLEDGE_API_URL` and network access |
| "Invalid API key" | Update `KNOWLEDGE_API_KEY` in CI secrets |
| False failures | Start with `report-only` to calibrate |
| Missing scope mapping | Add paths to `.knowledge-verifier.yml` |
| Override not recognized | Check the override is active and not expired |

---

## Learn More

- [Getting Started →](/docs/getting-started)
- [Claude MCP Integration →](/docs/integrations/claude-mcp)
- [API Reference →](/docs/integrations/api-reference)
