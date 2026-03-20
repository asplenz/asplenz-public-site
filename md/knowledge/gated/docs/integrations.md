<!-- lang: en -->

# Integrations

Knowledge integrates with your AI agents, CI pipelines, and any HTTP client. This page covers the three main integration points: the REST API, the MCP server for AI agents, and the CI Verifier.

---

## API Reference

The Knowledge API is a REST API for managing decisions, invariants, rules, and the compliance workflow. All endpoints require authentication via Bearer token.

Base URL: `https://api.asplenz.com/knowledge/v1`

### Authentication

All requests must include an API key:

```
Authorization: Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

API keys control:
- **Permissions**: what operations are allowed
- **Scope access**: which scopes the key can read/write
- **Tenant isolation**: keys belong to one tenant

### Scopes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/scopes` | List scopes for the authenticated tenant |
| `POST` | `/scopes` | Create a scope |
| `GET` | `/scopes/{scope_id}` | Get scope details with entry counts |
| `PATCH` | `/scopes/{scope_id}` | Update scope |

### Decisions

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/scopes/{scope_id}/decisions` | List decisions |
| `POST` | `/scopes/{scope_id}/decisions` | Create a decision |
| `GET` | `/scopes/{scope_id}/decisions/{id}` | Get decision details |

**Create request:**
```json
{
  "decision": "Use PostgreSQL for transactional data",
  "context": "Evaluated PostgreSQL, DynamoDB, CockroachDB",
  "reasoning": "ACID guarantees without distributed complexity",
  "author": "sarah.chen",
  "author_type": "human",
  "tags": ["database", "infrastructure"],
  "namespace": "payments"
}
```

### Invariants

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/scopes/{scope_id}/invariants` | List invariants (active by default) |
| `POST` | `/scopes/{scope_id}/invariants` | Create an invariant |
| `GET` | `/scopes/{scope_id}/invariants/{id}` | Get invariant details |
| `DELETE` | `/scopes/{scope_id}/invariants/{id}` | Revoke (soft-delete) |

**Create request:**
```json
{
  "constraint": "All public endpoints require authentication",
  "rationale": "Security baseline",
  "requires_approval": true,
  "author": "security-team",
  "author_type": "human"
}
```

### Rules

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/scopes/{scope_id}/rules` | List rules (active by default) |
| `POST` | `/scopes/{scope_id}/rules` | Create a rule |
| `GET` | `/scopes/{scope_id}/rules/{id}` | Get rule with current version |
| `PUT` | `/scopes/{scope_id}/rules/{id}` | Update (creates new version) |
| `GET` | `/scopes/{scope_id}/rules/{id}/versions` | List all versions |
| `PATCH` | `/scopes/{scope_id}/rules/{id}/archive` | Archive the rule |

**Create request:**
```json
{
  "directive": "All PRs must be reviewed before merging",
  "severity": "MANDATORY",
  "author": "tech-lead",
  "author_type": "human"
}
```

### Overrides

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/scopes/{scope_id}/overrides` | List overrides |
| `POST` | `/scopes/{scope_id}/overrides` | Create an override |
| `DELETE` | `/scopes/{scope_id}/overrides/{id}` | Revoke an override |

**Create request:**
```json
{
  "target_id": "inv-8a3f1b2c4d5e",
  "override_type": "temporary",
  "justification": "Health endpoint must be public for load balancer",
  "conditions": "Only /health and /ready endpoints",
  "approved_by": "tech-lead",
  "expires_at": "2025-06-01T00:00:00Z"
}
```

### Search

```
POST /search
```

```json
{
  "query": "PostgreSQL",
  "scope_id": "scp-XXXX",
  "entry_type": "decision",
  "limit": 10
}
```

Searches across `decision`, `context`, `reasoning` (decisions), `constraint`, `rationale` (invariants), and `directive` (rules).

### Compliance Check

```
POST /check
```

```json
{
  "scope_id": "scp-XXXX",
  "intended_action": "Deploy on Friday evening without review"
}
```

Returns:
```json
{
  "conflicts": [
    {
      "entry_id": "inv-8a3f1b2c4d5e",
      "entry_type": "invariant",
      "severity": "blocking",
      "requires_approval": true
    }
  ],
  "overridden": []
}
```

### Resolve Normative State

```
GET /scopes/{scope_id}/resolve
```

Returns the complete normative state: all active invariants, rules, and overrides, plus a `normative_hash` for change detection.

### References

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/scopes/{scope_id}/references` | List references |
| `POST` | `/scopes/{scope_id}/references` | Record a reference |
| `GET` | `/references?entry_id=xxx` | Get references for an entry |
| `GET` | `/references?context_ref=xxx` | Get references for a context |

**Create request:**
```json
{
  "entry_id": "inv-8a3f1b2c4d5e",
  "context_type": "pull_request",
  "context_ref": "github:acme/api/pull_request#42",
  "status": "followed",
  "author": "claude-agent",
  "author_type": "agent"
}
```

Status values: `cited`, `followed`, `verified`, `diverged` (requires `reason`).

### Events

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/scopes/{scope_id}/events` | List events |
| `GET` | `/scopes/{scope_id}/events?type=xxx` | Filter by event type |
| `GET` | `/scopes/{scope_id}/events?after=xxx` | Catch-up from event ID |

### Approval Workflow

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/scopes/{scope_id}/approvals` | Request approval |
| `GET` | `/scopes/{scope_id}/approvals` | List approvals |
| `GET` | `/scopes/{scope_id}/approvals/{id}` | Get approval details |
| `POST` | `/scopes/{scope_id}/approvals/{id}/decide` | Approve or reject |

**Request approval:**
```json
{
  "trigger_id": "inv-8a3f1b2c4d5e",
  "trigger_type": "invariant",
  "intended_action": "Add public health endpoint",
  "justification": "Load balancer needs unauthenticated health check",
  "requested_by": "deploy-bot",
  "requested_by_type": "agent"
}
```

**Decide:**
```json
{
  "decision": "approved",
  "comment": "Approved for health/ready endpoints only",
  "decided_by": "tech-lead"
}
```

If approved for an invariant/rule with `requires_approval`, an override is auto-created.

### Webhook Notifications

Instead of polling `GET /approvals/{id}`, subscribers can receive ECDSA-signed webhook POSTs when approvals are requested or resolved.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/.well-known/webhook-key` | Public key for signature verification (no auth) |
| `POST` | `/scopes/{scope_id}/webhooks` | Create a subscription (admin) |
| `GET` | `/scopes/{scope_id}/webhooks` | List subscriptions |
| `GET` | `/webhooks/{subscription_id}` | Get subscription details |
| `PATCH` | `/webhooks/{subscription_id}` | Update a subscription (admin) |
| `DELETE` | `/webhooks/{subscription_id}` | Delete a subscription (admin) |

**Create a subscription:**
```json
{
  "url": "https://your-service.example.com/webhook",
  "events": ["approval.requested", "approval.resolved"],
  "description": "Notify Slack bot on approvals"
}
```

Each webhook POST includes headers for verification:
- `X-Knowledge-Event` — event type
- `X-Knowledge-Timestamp` — Unix timestamp
- `X-Knowledge-Signature` — hex-encoded ECDSA P-256/SHA-256 signature

Verify by reconstructing the message (`{timestamp}.{raw_body}`) and checking against the public key from `/.well-known/webhook-key`.

### Links

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/links` | Create a link between entries |
| `GET` | `/links?entity_id=xxx` | Get links for an entity |

**Create link:**
```json
{
  "from_id": "dec-abc123",
  "from_type": "decision",
  "to_id": "inv-def456",
  "to_type": "invariant",
  "relation": "creates"
}
```

Relation types: `depends_on`, `supersedes`, `contradicts`, `in_tension_with`, `creates`.

### Namespaces

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/scopes/{scope_id}/namespaces` | List namespaces |
| `POST` | `/scopes/{scope_id}/namespaces` | Create a namespace |

Namespaces support hierarchy: `payments` → `payments/stripe` → max depth 2 levels below root.

### Error Responses

```json
{
  "detail": "Not authorized: missing permission manage_rules"
}
```

| Status | Meaning |
|--------|---------|
| 400 | Bad request (validation error) |
| 401 | Missing or invalid API key |
| 403 | Insufficient permissions |
| 404 | Resource not found |
| 422 | Validation error (missing required field) |

---

## Claude MCP

Knowledge ships with an MCP (Model Context Protocol) server that lets AI agents — Claude Code, Cursor, and any MCP-compatible tool — interact with the decision registry using natural language.

### Setup

Knowledge provides a hosted MCP server. No installation required.

Create `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com",
      "headers": {
        "Authorization": "Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}
```

Launch your agent from the directory containing `.mcp.json`. Claude detects the MCP config and loads the Knowledge tools automatically.

### Available Tools

| Tool | Description | Key Parameters |
|------|-------------|----------------|
| `knowledge_query` | Search across decisions, invariants, rules | `query`, `scope`, `entry_type` |
| `knowledge_record` | Record a decision | `scope`, `decision`, `author` |
| `knowledge_list_invariants` | List constraints for a scope | `scope` |
| `knowledge_list_rules` | List directives for a scope | `scope` |
| `knowledge_resolve` | Full normative state + hash | `scope` |
| `knowledge_check` | Compliance check | `scope`, `intended_action` |
| `knowledge_create_override` | Create a governed exception | `scope`, `target_id`, `justification`, `approved_by` |
| `knowledge_record_reference` | Record a usage trace | `scope`, `entry_id`, `context_type`, `context_ref`, `status` |
| `knowledge_request_approval` | Request human approval | `scope`, `trigger_id`, `intended_action`, `justification` |
| `knowledge_get_approval_status` | Check approval status | `approval_id` |

> **Webhook alternative:** Instead of polling `knowledge_get_approval_status`, agents can register a `callback_url` when requesting approval. Knowledge will POST an ECDSA-signed notification when the approval is resolved.

### Recommended Agent Workflow

**Before acting:**

1. `knowledge_list_invariants(scope)` — know the hard limits
2. `knowledge_check(scope, intended_action)` — test your plan
3. If conflict with `requires_approval` → `knowledge_request_approval()`
4. If conflict without approval path → stop and report
5. If no conflict → proceed

**After acting:**

6. `knowledge_record_reference(entry_id, context, status="followed")`
7. If a significant decision was made → `knowledge_record()`

### Example Session

```
User: "Add a new public health endpoint to the API"

Claude: Let me check Knowledge first.
  → knowledge_check("Engineering", "Add public endpoint without auth")
  → Conflict: inv-8a3f "All endpoints require auth", requires_approval=true

Claude: This conflicts with an invariant. Let me request approval.
  → knowledge_request_approval(trigger="inv-8a3f", action="Add public /health", ...)
  → apr-xyz123 created, waiting for tech-lead

Claude: Approval request created (apr-xyz123). A tech-lead needs to approve
this in the Knowledge dashboard before I can proceed.

[Tech-lead approves in dashboard]

User: "Check the approval status"
Claude: → knowledge_get_approval_status("apr-xyz123")
  → Approved, override ovr-9d1e created

Claude: Approved. I'll proceed with the implementation.
  → [writes code]
  → knowledge_record_reference(entry="inv-8a3f", context="PR #42", status="followed")
```

### Scope Resolution

All tools accept either:
- **Scope name** (case-insensitive): `"Engineering"`, `"engineering"`
- **Scope ID**: `"scp-81108708a334"`

The MCP server resolves names to IDs automatically.

---

## CI Verifier

The Knowledge Verifier runs in your CI pipeline and checks that PRs comply with applicable invariants and rules. It produces a machine-readable verdict and a human-readable compliance report.

### How It Works

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
5-axis analysis:
  A. Conformity — are applicable entries addressed?
  B. Override validity — are cited overrides active?
  C. Citation coverage — are all mandatory entries cited?
  D. Semantic analysis — AI evaluates the diff against each constraint
  E. External checkers — scripts/webhooks collect dynamic data and verify constraints that code alone can't prove
    │
    ▼
Verdict: PASS / WARN / FAIL
    │
    ▼
Outputs: verifier-result.json + verifier-report.md
```

Axes A–C run on every check. Axis D (semantic analysis) is optional and requires an AI provider API key. Axis E runs automatically when constraints have attached checkers.

### Setup

**1. Install:**

```bash
pip install knowledge-verifier
```

**2. Configure** — create `.knowledge-verifier.yml` in your repository root:

```yaml
knowledge_api:
  url: https://api.asplenz.com
  # API key via KNOWLEDGE_API_KEY env var

verification:
  mode: fail-on-blocking
  scope_mapping:
    "src/**": "Engineering"
    "lib/**": "Engineering"
    "infra/**": "Operations"
    "auth/**": "Security"
    "**": "Engineering"

# Optional: AI-powered semantic analysis of the diff against constraints
semantic_analysis:
  enabled: false
  # See configuration docs for provider setup

# Optional: execute scripts/webhooks attached to constraints
external_checkers:
  enabled: true
  allowed_commands: ["gh", "python", "node", "bash"]
  max_concurrency: 5
```

**3. Add to CI:**

**GitHub Actions:**

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
        run: |
          pip install knowledge-verifier
          knowledge-verifier --config .knowledge-verifier.yml
        env:
          KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
          KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

The Verifier detects GitHub Actions automatically and extracts PR metadata from `GITHUB_EVENT_PATH`.

**GitLab CI:**

```yaml
knowledge-compliance:
  stage: test
  script:
    - pip install knowledge-verifier
    - knowledge-verifier --config .knowledge-verifier.yml
  variables:
    KNOWLEDGE_API_URL: $KNOWLEDGE_API_URL
    KNOWLEDGE_API_KEY: $KNOWLEDGE_API_KEY
  rules:
    - if: $CI_MERGE_REQUEST_ID
```

### Gating Modes

| Mode | Behavior | Exit Code |
|------|----------|-----------|
| `report-only` | Always passes, generates report | Always 0 |
| `fail-on-blocking` | Fails only if blocking invariants are uncited | 0 or 1 |
| `strict` | Fails on any uncited mandatory entry | 0 or 1 |

**Recommended rollout:**
1. Start with `report-only` — see what would fail
2. After 2-4 weeks, switch to `fail-on-blocking` — invariants block
3. For regulated environments, use `strict` — full compliance required

### Implementation Report

The agent (e.g. Claude Code) documents compliance in a dedicated section of the PR description:

```markdown
## Implementation Report

### Invariants verified
- inv-8a3f1b2c4d5e: All endpoints require auth — followed
- inv-2c4d6e8f0a1b: Secrets in env vars — followed

### Rules applied
- rul-2b7c9e4f1a3d: PR approval required — followed
- rul-6f8e2a1b3c4d: Use conventional commits — overridden (see ovr-9d1e3f5a7b2c)
```

The Verifier validates that:
- Cited IDs exist in the Knowledge registry
- Referenced overrides are active and not expired
- All mandatory entries for applicable scopes are addressed

### Outputs

**verifier-result.json:**

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
  ],
  "semantic_findings": [
    {
      "entry_id": "inv-8a3f1b2c4d5e",
      "verdict": "respected",
      "confidence": 0.95,
      "explanation": "Auth middleware applied to all new endpoints"
    }
  ],
  "checker_findings": [
    {
      "entry_id": "rul-2b7c9e4f1a3d",
      "verdict": "respected",
      "source": "script",
      "explanation": "PR has 2 approved reviews"
    }
  ]
}
```

**verifier-report.md:**

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

### Scope Mapping

You define which files map to which scopes in your configuration:

```yaml
scope_mapping:
  "src/**": "Engineering"
  "lib/**": "Engineering"
  "infra/**": "Operations"
  "auth/**": "Security"
```

Patterns are matched in order — the first match wins. Use `**` as a catch-all. When a PR modifies files in multiple scopes, the Verifier checks compliance against all applicable scopes. Files that don't match any pattern are checked against the default scope.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `401 Unauthorized` | Check your API key in the `Authorization` header |
| `Invalid or expired API key` | Generate a new key from the dashboard |
| MCP tools not showing in Claude | Launch Claude from the directory containing `.mcp.json` |
| Verifier can't reach API | Check `KNOWLEDGE_API_URL` and network access |
| Verifier false failures | Start with `report-only` mode to calibrate |
| Missing scope mapping | Add paths to `.knowledge-verifier.yml` |
| Override not recognized | Check the override is active and not expired |

---
---

<!-- lang: fr -->

# Intégrations

Knowledge s'intègre avec vos agents IA, vos pipelines CI, et tout client HTTP. Cette page couvre les trois points d'intégration principaux : l'API REST, le serveur MCP pour les agents IA, et le CI Verifier.

---

## Référence API

L'API Knowledge est une API REST pour gérer les decisions, invariants, rules et le workflow de conformité. Tous les endpoints nécessitent une authentification via Bearer token.

URL de base : `https://api.asplenz.com/knowledge/v1`

### Authentification

Toutes les requêtes doivent inclure une clé API :

```
Authorization: Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Les clés API contrôlent :
- **Permissions** : quelles opérations sont autorisées
- **Accès aux scopes** : quels scopes la clé peut lire/écrire
- **Isolation tenant** : les clés appartiennent à un seul tenant

### Scopes

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/scopes` | Lister les scopes du tenant authentifié |
| `POST` | `/scopes` | Créer un scope |
| `GET` | `/scopes/{scope_id}` | Détails du scope avec compteurs d'entrées |
| `PATCH` | `/scopes/{scope_id}` | Mettre à jour un scope |

### Decisions

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/scopes/{scope_id}/decisions` | Lister les decisions |
| `POST` | `/scopes/{scope_id}/decisions` | Créer une decision |
| `GET` | `/scopes/{scope_id}/decisions/{id}` | Détails d'une decision |

**Requête de création :**
```json
{
  "decision": "Use PostgreSQL for transactional data",
  "context": "Evaluated PostgreSQL, DynamoDB, CockroachDB",
  "reasoning": "ACID guarantees without distributed complexity",
  "author": "sarah.chen",
  "author_type": "human",
  "tags": ["database", "infrastructure"],
  "namespace": "payments"
}
```

### Invariants

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/scopes/{scope_id}/invariants` | Lister les invariants (actifs par défaut) |
| `POST` | `/scopes/{scope_id}/invariants` | Créer un invariant |
| `GET` | `/scopes/{scope_id}/invariants/{id}` | Détails d'un invariant |
| `DELETE` | `/scopes/{scope_id}/invariants/{id}` | Révoquer (soft-delete) |

**Requête de création :**
```json
{
  "constraint": "All public endpoints require authentication",
  "rationale": "Security baseline",
  "requires_approval": true,
  "author": "security-team",
  "author_type": "human"
}
```

### Rules

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/scopes/{scope_id}/rules` | Lister les rules (actives par défaut) |
| `POST` | `/scopes/{scope_id}/rules` | Créer une rule |
| `GET` | `/scopes/{scope_id}/rules/{id}` | Rule avec version courante |
| `PUT` | `/scopes/{scope_id}/rules/{id}` | Mettre à jour (crée une nouvelle version) |
| `GET` | `/scopes/{scope_id}/rules/{id}/versions` | Lister toutes les versions |
| `PATCH` | `/scopes/{scope_id}/rules/{id}/archive` | Archiver la rule |

**Requête de création :**
```json
{
  "directive": "All PRs must be reviewed before merging",
  "severity": "MANDATORY",
  "author": "tech-lead",
  "author_type": "human"
}
```

### Overrides

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/scopes/{scope_id}/overrides` | Lister les overrides |
| `POST` | `/scopes/{scope_id}/overrides` | Créer un override |
| `DELETE` | `/scopes/{scope_id}/overrides/{id}` | Révoquer un override |

**Requête de création :**
```json
{
  "target_id": "inv-8a3f1b2c4d5e",
  "override_type": "temporary",
  "justification": "Health endpoint must be public for load balancer",
  "conditions": "Only /health and /ready endpoints",
  "approved_by": "tech-lead",
  "expires_at": "2025-06-01T00:00:00Z"
}
```

### Recherche

```
POST /search
```

```json
{
  "query": "PostgreSQL",
  "scope_id": "scp-XXXX",
  "entry_type": "decision",
  "limit": 10
}
```

Recherche dans `decision`, `context`, `reasoning` (decisions), `constraint`, `rationale` (invariants) et `directive` (rules).

### Compliance Check

```
POST /check
```

```json
{
  "scope_id": "scp-XXXX",
  "intended_action": "Deploy on Friday evening without review"
}
```

Retourne :
```json
{
  "conflicts": [
    {
      "entry_id": "inv-8a3f1b2c4d5e",
      "entry_type": "invariant",
      "severity": "blocking",
      "requires_approval": true
    }
  ],
  "overridden": []
}
```

### Résoudre l'état normatif

```
GET /scopes/{scope_id}/resolve
```

Retourne l'état normatif complet : tous les invariants, rules et overrides actifs, plus un `normative_hash` pour détecter les changements.

### Références

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/scopes/{scope_id}/references` | Lister les références |
| `POST` | `/scopes/{scope_id}/references` | Enregistrer une référence |
| `GET` | `/references?entry_id=xxx` | Références pour une entrée |
| `GET` | `/references?context_ref=xxx` | Références pour un contexte |

**Requête de création :**
```json
{
  "entry_id": "inv-8a3f1b2c4d5e",
  "context_type": "pull_request",
  "context_ref": "github:acme/api/pull_request#42",
  "status": "followed",
  "author": "claude-agent",
  "author_type": "agent"
}
```

Valeurs de status : `cited`, `followed`, `verified`, `diverged` (nécessite `reason`).

### Events

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/scopes/{scope_id}/events` | Lister les events |
| `GET` | `/scopes/{scope_id}/events?type=xxx` | Filtrer par type |
| `GET` | `/scopes/{scope_id}/events?after=xxx` | Rattraper depuis un event ID |

### Workflow d'approbation

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `POST` | `/scopes/{scope_id}/approvals` | Demander une approbation |
| `GET` | `/scopes/{scope_id}/approvals` | Lister les approbations |
| `GET` | `/scopes/{scope_id}/approvals/{id}` | Détails d'une approbation |
| `POST` | `/scopes/{scope_id}/approvals/{id}/decide` | Approuver ou rejeter |

**Demander une approbation :**
```json
{
  "trigger_id": "inv-8a3f1b2c4d5e",
  "trigger_type": "invariant",
  "intended_action": "Add public health endpoint",
  "justification": "Load balancer needs unauthenticated health check",
  "requested_by": "deploy-bot",
  "requested_by_type": "agent"
}
```

**Décider :**
```json
{
  "decision": "approved",
  "comment": "Approved for health/ready endpoints only",
  "decided_by": "tech-lead"
}
```

Si approuvé pour un invariant/rule avec `requires_approval`, un override est auto-créé.

### Notifications Webhook

Au lieu de polling `GET /approvals/{id}`, les abonnés peuvent recevoir des webhooks POST signés ECDSA quand des approbations sont demandées ou résolues.

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/.well-known/webhook-key` | Clé publique pour vérification de signature (sans auth) |
| `POST` | `/scopes/{scope_id}/webhooks` | Créer un abonnement (admin) |
| `GET` | `/scopes/{scope_id}/webhooks` | Lister les abonnements |
| `GET` | `/webhooks/{subscription_id}` | Détails d'un abonnement |
| `PATCH` | `/webhooks/{subscription_id}` | Mettre à jour un abonnement (admin) |
| `DELETE` | `/webhooks/{subscription_id}` | Supprimer un abonnement (admin) |

**Créer un abonnement :**
```json
{
  "url": "https://your-service.example.com/webhook",
  "events": ["approval.requested", "approval.resolved"],
  "description": "Notify Slack bot on approvals"
}
```

Chaque webhook POST inclut des headers pour vérification :
- `X-Knowledge-Event` — type d'event
- `X-Knowledge-Timestamp` — timestamp Unix
- `X-Knowledge-Signature` — signature ECDSA P-256/SHA-256 encodée en hex

Vérifiez en reconstruisant le message (`{timestamp}.{raw_body}`) et en validant avec la clé publique de `/.well-known/webhook-key`.

### Links

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `POST` | `/links` | Créer un lien entre entrées |
| `GET` | `/links?entity_id=xxx` | Liens pour une entité |

**Créer un lien :**
```json
{
  "from_id": "dec-abc123",
  "from_type": "decision",
  "to_id": "inv-def456",
  "to_type": "invariant",
  "relation": "creates"
}
```

Types de relation : `depends_on`, `supersedes`, `contradicts`, `in_tension_with`, `creates`.

### Namespaces

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/scopes/{scope_id}/namespaces` | Lister les namespaces |
| `POST` | `/scopes/{scope_id}/namespaces` | Créer un namespace |

Les namespaces supportent la hiérarchie : `payments` → `payments/stripe` → profondeur max 2 niveaux sous root.

### Réponses d'erreur

```json
{
  "detail": "Not authorized: missing permission manage_rules"
}
```

| Statut | Signification |
|--------|---------------|
| 400 | Requête invalide (erreur de validation) |
| 401 | Clé API manquante ou invalide |
| 403 | Permissions insuffisantes |
| 404 | Ressource non trouvée |
| 422 | Erreur de validation (champ requis manquant) |

---

## Claude MCP

Knowledge inclut un serveur MCP (Model Context Protocol) qui permet aux agents IA — Claude Code, Cursor et tout outil compatible MCP — d'interagir avec le registre de décisions en langage naturel.

### Configuration

Knowledge fournit un serveur MCP hébergé. Aucune installation requise.

Créez `.mcp.json` à la racine de votre projet :

```json
{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com",
      "headers": {
        "Authorization": "Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}
```

Lancez votre agent depuis le répertoire contenant `.mcp.json`. Claude détecte la config MCP et charge les outils Knowledge automatiquement.

### Outils disponibles

| Outil | Description | Paramètres clés |
|-------|-------------|-----------------|
| `knowledge_query` | Rechercher dans decisions, invariants, rules | `query`, `scope`, `entry_type` |
| `knowledge_record` | Enregistrer une decision | `scope`, `decision`, `author` |
| `knowledge_list_invariants` | Lister les contraintes d'un scope | `scope` |
| `knowledge_list_rules` | Lister les directives d'un scope | `scope` |
| `knowledge_resolve` | État normatif complet + hash | `scope` |
| `knowledge_check` | Compliance check | `scope`, `intended_action` |
| `knowledge_create_override` | Créer une exception gouvernée | `scope`, `target_id`, `justification`, `approved_by` |
| `knowledge_record_reference` | Enregistrer une trace d'usage | `scope`, `entry_id`, `context_type`, `context_ref`, `status` |
| `knowledge_request_approval` | Demander une approbation humaine | `scope`, `trigger_id`, `intended_action`, `justification` |
| `knowledge_get_approval_status` | Vérifier le statut d'approbation | `approval_id` |

> **Alternative webhook :** Au lieu de polling `knowledge_get_approval_status`, les agents peuvent enregistrer un `callback_url` lors de la demande d'approbation. Knowledge enverra une notification signée ECDSA quand l'approbation est résolue.

### Workflow recommandé pour l'agent

**Avant d'agir :**

1. `knowledge_list_invariants(scope)` — connaître les limites absolues
2. `knowledge_check(scope, intended_action)` — tester votre plan
3. Si conflit avec `requires_approval` → `knowledge_request_approval()`
4. Si conflit sans chemin d'approbation → s'arrêter et signaler
5. Si aucun conflit → procéder

**Après avoir agi :**

6. `knowledge_record_reference(entry_id, context, status="followed")`
7. Si une décision significative a été prise → `knowledge_record()`

### Exemple de session

```
User: "Add a new public health endpoint to the API"

Claude: Let me check Knowledge first.
  → knowledge_check("Engineering", "Add public endpoint without auth")
  → Conflict: inv-8a3f "All endpoints require auth", requires_approval=true

Claude: This conflicts with an invariant. Let me request approval.
  → knowledge_request_approval(trigger="inv-8a3f", action="Add public /health", ...)
  → apr-xyz123 created, waiting for tech-lead

Claude: Approval request created (apr-xyz123). A tech-lead needs to approve
this in the Knowledge dashboard before I can proceed.

[Tech-lead approves in dashboard]

User: "Check the approval status"
Claude: → knowledge_get_approval_status("apr-xyz123")
  → Approved, override ovr-9d1e created

Claude: Approved. I'll proceed with the implementation.
  → [writes code]
  → knowledge_record_reference(entry="inv-8a3f", context="PR #42", status="followed")
```

### Résolution de scope

Tous les outils acceptent :
- **Nom du scope** (insensible à la casse) : `"Engineering"`, `"engineering"`
- **ID du scope** : `"scp-81108708a334"`

Le serveur MCP résout les noms en IDs automatiquement.

---

## CI Verifier

Le Knowledge Verifier s'exécute dans votre pipeline CI et vérifie que les PRs respectent les invariants et rules applicables. Il produit un verdict machine-readable et un rapport de conformité human-readable.

### Comment ça fonctionne

```
PR ouverte/mise à jour
    │
    ▼
CI déclenche le Verifier
    │
    ▼
Lit le contexte PR (titre, body, fichiers modifiés, commits)
    │
    ▼
Mappe les fichiers modifiés → scopes Knowledge (via config)
    │
    ▼
Résout chaque scope via l'API Knowledge
    │
    ▼
Parse les citations du body PR (Implementation Report)
    │
    ▼
Analyse 5 axes :
  A. Conformité — les entrées applicables sont-elles adressées ?
  B. Validité des overrides — les overrides cités sont-ils actifs ?
  C. Couverture des citations — toutes les entrées mandatory sont-elles citées ?
  D. Analyse sémantique — l'IA évalue le diff contre chaque contrainte
  E. External checkers — scripts/webhooks collectent des données dynamiques et vérifient les contraintes que le code seul ne peut pas prouver
    │
    ▼
Verdict : PASS / WARN / FAIL
    │
    ▼
Sorties : verifier-result.json + verifier-report.md
```

Les axes A–C s'exécutent à chaque vérification. L'axe D (analyse sémantique) est optionnel et nécessite une clé API de fournisseur IA. L'axe E s'exécute automatiquement quand des contraintes ont des checkers attachés.

### Configuration

**1. Installer :**

```bash
pip install knowledge-verifier
```

**2. Configurer** — créez `.knowledge-verifier.yml` à la racine de votre dépôt :

```yaml
knowledge_api:
  url: https://api.asplenz.com
  # Clé API via la variable d'environnement KNOWLEDGE_API_KEY

verification:
  mode: fail-on-blocking
  scope_mapping:
    "src/**": "Engineering"
    "lib/**": "Engineering"
    "infra/**": "Operations"
    "auth/**": "Security"
    "**": "Engineering"

# Optionnel : analyse sémantique du diff par IA contre les contraintes
semantic_analysis:
  enabled: false
  # Voir la documentation de configuration pour le setup du fournisseur

# Optionnel : exécuter des scripts/webhooks attachés aux contraintes
external_checkers:
  enabled: true
  allowed_commands: ["gh", "python", "node", "bash"]
  max_concurrency: 5
```

**3. Ajouter au CI :**

**GitHub Actions :**

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
        run: |
          pip install knowledge-verifier
          knowledge-verifier --config .knowledge-verifier.yml
        env:
          KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
          KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

Le Verifier détecte GitHub Actions automatiquement et extrait les métadonnées PR de `GITHUB_EVENT_PATH`.

**GitLab CI :**

```yaml
knowledge-compliance:
  stage: test
  script:
    - pip install knowledge-verifier
    - knowledge-verifier --config .knowledge-verifier.yml
  variables:
    KNOWLEDGE_API_URL: $KNOWLEDGE_API_URL
    KNOWLEDGE_API_KEY: $KNOWLEDGE_API_KEY
  rules:
    - if: $CI_MERGE_REQUEST_ID
```

### Modes de gating

| Mode | Comportement | Code de sortie |
|------|-------------|----------------|
| `report-only` | Passe toujours, génère le rapport | Toujours 0 |
| `fail-on-blocking` | Échoue uniquement si des invariants bloquants ne sont pas cités | 0 ou 1 |
| `strict` | Échoue sur toute entrée mandatory non citée | 0 ou 1 |

**Déploiement recommandé :**
1. Commencez en `report-only` — voyez ce qui échouerait
2. Après 2-4 semaines, passez en `fail-on-blocking` — les invariants bloquent
3. Pour les environnements régulés, utilisez `strict` — conformité complète requise

### Implementation Report

L'agent (ex. Claude Code) documente la conformité dans une section dédiée de la description de PR :

```markdown
## Implementation Report

### Invariants verified
- inv-8a3f1b2c4d5e: All endpoints require auth — followed
- inv-2c4d6e8f0a1b: Secrets in env vars — followed

### Rules applied
- rul-2b7c9e4f1a3d: PR approval required — followed
- rul-6f8e2a1b3c4d: Use conventional commits — overridden (see ovr-9d1e3f5a7b2c)
```

Le Verifier valide que :
- Les IDs cités existent dans le registre Knowledge
- Les overrides référencés sont actifs et non expirés
- Toutes les entrées mandatory des scopes applicables sont adressées

### Sorties

**verifier-result.json :**

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
  ],
  "semantic_findings": [
    {
      "entry_id": "inv-8a3f1b2c4d5e",
      "verdict": "respected",
      "confidence": 0.95,
      "explanation": "Auth middleware applied to all new endpoints"
    }
  ],
  "checker_findings": [
    {
      "entry_id": "rul-2b7c9e4f1a3d",
      "verdict": "respected",
      "source": "script",
      "explanation": "La PR a 2 reviews approuvés"
    }
  ]
}
```

**verifier-report.md :**

```markdown
## Knowledge Compliance Report

**Verdict: PASS**

### Engineering (scp-e1134c6636d7)
- 3 invariants applicables, 3 cités
- 2 rules mandatory applicables, 2 citées
- 1 rule advisory applicable, 0 citée (advisory)

### Couverture des citations
| Entrée | Statut | Emplacement |
|--------|--------|-------------|
| inv-8a3f... | followed | implementation_report |
| rul-2b7c... | followed | implementation_report |
```

### Scope Mapping

Vous définissez quels fichiers correspondent à quels scopes dans votre configuration :

```yaml
scope_mapping:
  "src/**": "Engineering"
  "lib/**": "Engineering"
  "infra/**": "Operations"
  "auth/**": "Security"
```

Les patterns sont évalués dans l'ordre — le premier match gagne. Utilisez `**` comme catch-all. Quand une PR modifie des fichiers dans plusieurs scopes, le Verifier vérifie la conformité contre tous les scopes applicables. Les fichiers qui ne matchent aucun pattern sont vérifiés contre le scope par défaut.

---

## Problèmes courants

| Problème | Solution |
|----------|----------|
| `401 Unauthorized` | Vérifiez votre clé API dans le header `Authorization` |
| `Invalid or expired API key` | Générez une nouvelle clé depuis le dashboard |
| Les outils MCP n'apparaissent pas dans Claude | Lancez Claude depuis le répertoire contenant `.mcp.json` |
| Le Verifier ne peut pas atteindre l'API | Vérifiez `KNOWLEDGE_API_URL` et l'accès réseau |
| Faux échecs du Verifier | Commencez en mode `report-only` pour calibrer |
| Scope mapping manquant | Ajoutez les paths dans `.knowledge-verifier.yml` |
| Override non reconnu | Vérifiez que l'override est actif et non expiré |
