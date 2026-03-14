# API Reference

The Knowledge API is a REST API for managing decisions, invariants, rules, and the compliance workflow. All endpoints require authentication via Bearer token.

Base URL: `http://localhost:8090/api/v1`

---

## Authentication

All requests must include an API key:

```
Authorization: Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

API keys are created via the `/api-keys` endpoint or during database seeding. Keys control:
- **Permissions**: what operations are allowed
- **Scope access**: which scopes the key can read/write
- **Tenant isolation**: keys belong to one tenant

---

## Core Entities

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

---

## Search and Compliance

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

---

## References and Events

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

---

## Approval Workflow

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

---

## Links

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

---

## Tenants and Namespaces

### Tenants

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/tenants` | List tenants |
| `POST` | `/tenants` | Create a tenant |

### Namespaces

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/scopes/{scope_id}/namespaces` | List namespaces |
| `POST` | `/scopes/{scope_id}/namespaces` | Create a namespace |

Namespaces support hierarchy: `payments` → `payments/stripe` → max depth 2 levels below root.

---

## Error Responses

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

## Interactive Documentation

When the API is running, visit `http://localhost:8090/docs` for the auto-generated Swagger UI with try-it-out capability.
