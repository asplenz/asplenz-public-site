# Concepts: Scopes and Namespaces

**Scopes** organize knowledge by domain. **Namespaces** subdivide scopes for finer-grained structure. Together, they define where entries live and who can access them.

---

## Scopes

A scope represents a domain or department: Engineering, Product, Operations, Security, Legal. Each scope contains its own decisions, invariants, rules, overrides, and events.

### Creating a Scope

```bash
curl -X POST http://localhost:8090/api/v1/scopes \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Engineering",
    "description": "Engineering decisions and architecture rules"
  }'
```

Scopes belong to the tenant of the API key used to create them.

### Scope Access

API keys control access at the scope level. A key can have:
- **No access** to a scope — cannot read or write
- **Reader access** — can search and list entries
- **Contributor access** — can create entries
- **Admin access** — can manage entries and settings

---

## Namespaces

Namespaces subdivide a scope into sub-domains. Every scope starts with a `_root` namespace. You can create additional namespaces to organize entries:

```
Scope: Engineering
  ├── _root (default)
  ├── payments
  │     └── payments/stripe
  └── infrastructure
```

### Creating a Namespace

```bash
curl -X POST http://localhost:8090/api/v1/scopes/scp-XXXX/namespaces \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "payments",
    "owner": "payments-team"
  }'
```

### Nesting

Namespaces support one level of nesting below the parent:

```
_root              ← default, always exists
payments           ← first level
payments/stripe    ← second level (maximum depth)
```

Maximum depth is 2 levels below `_root`. Attempting to create a third level returns an error.

### Assigning Entries to Namespaces

When creating a decision, invariant, or rule, specify the namespace:

```json
{
  "decision": "Use Stripe for EU payment processing",
  "namespace": "payments/stripe",
  ...
}
```

If no namespace is specified, the entry is placed in `_root`.

---

## Tenants

Tenants represent organizations. Each tenant has its own scopes, entries, and API keys. Tenant isolation is strict — a key from one tenant cannot access another tenant's data.

Tenants support hierarchy via `parent_tenant_id`:

```
Acme Corp (parent)
  ├── Acme EU (subsidiary)
  └── Acme US (subsidiary)
```

### Creating a Tenant

```bash
curl -X POST http://localhost:8090/api/v1/tenants \
  -H "Authorization: Bearer kn_xxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme Corp",
    "slug": "acme-corp",
    "description": "Acme Corporation"
  }'
```

---

## Best Practices

- **One scope per domain**, not per team. "Engineering" is better than "Backend Team" — scopes should reflect knowledge domains.
- **Use namespaces for sub-domains**. Within Engineering, use `payments`, `infrastructure`, `auth` — not separate scopes.
- **Keep scope names simple**. "Engineering", not "Acme Corp Engineering Department". The tenant already provides the company context.
- **Don't over-subdivide**. Start with 2-3 scopes. Add more only when you need separate normative states.

---

## Related Concepts

- [Decisions](/docs/concepts/decisions) — entries within scopes
- [Invariants](/docs/concepts/invariants) — constraints scoped to a domain
- [Rules](/docs/concepts/rules) — directives scoped to a domain
