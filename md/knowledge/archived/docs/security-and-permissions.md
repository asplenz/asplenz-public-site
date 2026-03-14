# Security and Permissions

## Authentication

All API access requires an API key passed via the `X-API-Key` header. Keys are prefixed with `kn_` and stored as irreversible hashes. The raw key is returned once at creation and cannot be recovered.

Each API key has a name, a creation timestamp, and a scope access map that defines which scopes it can access and at what role level.

## Scope Isolation

Scopes provide strict data isolation. Each scope maintains its own set of decisions, invariants, rules, overrides, approvals, events, and references. An API key with access to one scope cannot read or modify data in another scope unless explicitly granted.

This isolation model supports multi-team and multi-domain deployments where different groups maintain independent governance structures.

## Role Model

Each API key is granted a role per scope. Roles are cumulative — higher roles include the permissions of lower ones.

| Role | Read | Create entries | Revoke / Archive | Decide approvals |
|------|------|---------------|-------------------|-----------------|
| **Reader** | Yes | No | No | No |
| **Contributor** | Yes | Yes | No | Contributor-level |
| **Admin** | Yes | Yes | Yes | All levels |

### Role assignment

When creating an API key, you specify the role for each scope:

```json
{
  "name": "ci-pipeline",
  "scope_access": {
    "scp-abc123": "reader",
    "scp-def456": "contributor"
  }
}
```

A single API key can have different roles in different scopes.

### Recommended key allocation

| Consumer | Recommended role | Rationale |
|----------|-----------------|-----------|
| CI/CD pipeline (Verifier) | Reader | Only needs to resolve normative state |
| AI agent | Contributor | Needs to record decisions and request approvals |
| Human operator | Contributor or Admin | Depends on whether they manage constraints |
| Platform administrator | Admin | Full control over constraints and approvals |

## Approval Authority

Invariants and rules can specify an `approver_role` that controls who can approve exceptions:

- `contributor` — any contributor or admin can approve
- `admin` — only admins can approve

This prevents agents or junior contributors from self-approving exceptions to critical constraints.

Approval requests also support an expiration time. Expired requests are automatically treated as rejected. No background process is required — expiration is evaluated at read time.

## Auditability

Knowledge maintains a complete audit trail through two mechanisms:

### Events

Every mutation to the normative state is recorded as an event:

- Invariant created or revoked
- Rule created, updated, or archived
- Override created, expired, or revoked
- Approval requested or resolved

Events include the actor (who), the action (what), and the timestamp (when). They can be queried by type and support real-time delivery via WebSocket.

### References

Every citation or usage of a Knowledge entry is recorded as an append-only reference. References cannot be modified or deleted. They document:

- Which entry was cited or followed
- In what context (PR, commit, CI check, deployment)
- By whom
- Whether the entry was followed or diverged from

Together, events and references provide a complete picture of how constraints were defined and how they were applied in practice.

## Failure Behavior

### API key invalid or missing

Requests without a valid API key receive a `401 Unauthorized` response. No data is returned.

### Insufficient permissions

Requests that exceed the API key's role for the target scope receive a `403 Forbidden` response.

### Scope not accessible

If an API key does not have any role for a scope, the scope is not visible to that key. It behaves as if the scope does not exist.

### Knowledge unavailable

When the Knowledge API is unreachable:

- Agents should warn the user and avoid proceeding without compliance verification
- The Verifier operates in fail-open (produces a degraded report) or fail-closed (blocks CI) mode, depending on configuration
- No cached or stale data is used — every evaluation requires a live connection to the current normative state
