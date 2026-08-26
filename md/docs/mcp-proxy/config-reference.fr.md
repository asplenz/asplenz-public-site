---
title: MCP proxy - config reference
description: Chaque knob dans proxy.yaml.
locale: fr
kicker: Docs / MCP proxy - Stable
---

Référence complète pour le fichier de config `proxy.yaml` utilisé par `knowledge-mcp-proxy`.

## Forme top-level

```yaml
knowledge: { ... }
upstream: { ... }
on_behalf_of: <string>
policy_mapping: { ... }
fetchers: { ... }          # optionnel
observability: { ... }     # optionnel
```

## `knowledge`

Connexion au tenant Knowledge.

```yaml
knowledge:
  base_url: https://knowledge.asplenz.com/tnt-acme
  api_key: ${KNOWLEDGE_API_KEY}
  default_verdict_ttl_seconds: 60
  jwks_cache_ttl_seconds: 300
  timeout_seconds: 5
```

- `base_url` (required) - URL Knowledge scoped au tenant.
- `api_key` (required) - principal propre du proxy (`ak-live-*`). Ne pas réutiliser une clé utilisateur.
- `default_verdict_ttl_seconds` (défaut 60) - appliqué quand l'appel upstream n'override pas.
- `jwks_cache_ttl_seconds` (défaut 300) - combien de temps cacher les clés publiques du tenant.
- `timeout_seconds` (défaut 5) - cap par-requête sur les appels Knowledge.

## `upstream`

Le serveur MCP que le proxy fronte.

### stdio

```yaml
upstream:
  transport: stdio
  command: ["npx", "-y", "@vendor/some-mcp-server"]
  env:
    VENDOR_TOKEN: ${VENDOR_TOKEN}
  restart_on_exit: true
```

### HTTP

```yaml
upstream:
  transport: http
  url: https://mcp.internal/some-server
  headers:
    Authorization: Bearer ${VENDOR_TOKEN}
```

### SSE

```yaml
upstream:
  transport: sse
  url: https://mcp.internal/some-server/sse
  headers:
    Authorization: Bearer ${VENDOR_TOKEN}
```

## `on_behalf_of`

Le principal humain pour le compte duquel chaque appel proxy tourne. String statique ou substitution env-var.

```yaml
on_behalf_of: ${USER_ID}
```

Pour des déploiements proxy multi-utilisateur, utilisez un resolver dynamique (voir `advanced` ci-dessous).

## `policy_mapping`

Mappe les noms de tool MCP à Knowledge `(action, resource, parameters)`.

```yaml
policy_mapping:
  "search_kb":
    action: kb.search
    resource: "{query}"

  "create_ticket":
    action: ticket.create
    resource: "{title}"
    bind: [priority, assignee]

  "delete_ticket":
    action: ticket.delete
    resource: "{ticket_id}"
    bind: []
    require_approval_if:
      priority: critical
```

Champs par-tool :

- `action` (required) - le nom d'action Knowledge.
- `resource` (required) - string template sur les arguments du tool. `{arg_name}` interpole.
- `bind` (défaut `[]`) - noms d'args dont les valeurs deviennent partie des bindings de l'enveloppe signée. Le PEP rejettera les opérations aval où ces champs diffèrent.
- `require_approval_if` (optionnel) - short-circuit vers workflow d'approval quand une condition matche (advisory ; le vrai gate est la rule Knowledge).

Les tools non listés passent inchangés. Pour fail-closed, ajoutez `allow_unmapped: false` au top level.

## `fetchers`

Callables Python enregistrés qui populate les champs `required_context` pendant la boucle `/resolve`.

```yaml
fetchers:
  module: my_org.fetchers
  registry:
    "client.classification": get_classification
    "client.knowledge_experience_level": get_ke_level
```

Le proxy importe `my_org.fetchers` et appelle chaque fonction enregistrée avec le contexte courant ; la valeur de retour devient la valeur du champ. Voir [Bring your own tools](/docs/guides/bring-your-own-tools-to-mcp-proxy).

## `observability`

```yaml
observability:
  log_level: info
  metrics_port: 9091            # exposition Prometheus
  trace_exporter: otlp
  trace_endpoint: http://otel:4317
```

Metrics exposés :

- `mcp_proxy_calls_total{action, verdict}` counter.
- `mcp_proxy_call_latency_seconds{action}` histogram.
- `mcp_proxy_upstream_latency_seconds{tool}` histogram.
- `mcp_proxy_jwks_refreshes_total` counter.

## Advanced

**on_behalf_of dynamique** :

```yaml
on_behalf_of:
  resolver: my_org.auth.resolve_user_from_session
```

**Fail-closed pour tools non mappés** :

```yaml
allow_unmapped: false
```

Tout tool non dans `policy_mapping` est refusé avec `policy_mapping_missing`. Utilisez pour déploiements compliance-critical.

**Store spent-verdict** :

```yaml
spent_store:
  backend: redis
  url: redis://localhost:6379/0
  ttl_seconds: 120
```

Rejette les replays de verdict dans la fenêtre TTL ; utilisez pour tools exactly-once.

## Related

- [Setup](/docs/mcp-proxy/setup) - install + premier run.
- [Deployment modes](/docs/mcp-proxy/deployment-modes) - stdio vs sidecar vs shared.
- [Bring your own tools](/docs/guides/bring-your-own-tools-to-mcp-proxy) - pattern fetcher.
