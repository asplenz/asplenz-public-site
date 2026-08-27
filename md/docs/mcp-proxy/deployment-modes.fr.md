---
title: MCP proxy - deployment modes
description: stdio, sidecar, shared - quand pick lequel.
locale: fr
kicker: Docs / MCP proxy - Stable
---

Le proxy MCP tourne dans trois topologies canoniques. Pickez celle qui matche votre profil d'isolation, d'échelle, et opérationnel.

## Mode 1 : stdio (per-client)

Chaque client MCP (Claude Desktop, Cursor, plugin) launch son propre subprocess proxy. Install le plus simple ; blast radius le plus petit.

```
Claude Desktop  ---stdio--->  knowledge-mcp-proxy  ---stdio--->  vendor MCP server
```

**Pros** :
- Zéro infrastructure. Fichier de config + install local.
- Identité per-user via env vars.
- Crashes isolés ; le proxy d'un user qui fail n'affecte pas les autres.

**Cons** :
- Cold start par session (le proxy launch au startup du client).
- Pas de métriques centralisées à moins que chaque proxy push.
- Multiples connexions upstream si beaucoup d'users hit le même serveur.

**Best for** : développeurs individuels, petites équipes, POCs, déploiements per-workstation.

## Mode 2 : sidecar (per-user, long-running)

Le proxy tourne comme un long-running process sur la workstation (sous le superviseur que la workstation utilise), exposant HTTP ou SSE. Le client MCP se connecte via un socket ou port local.

```
Claude Desktop  ---HTTP--->  knowledge-mcp-proxy (port local)  ---HTTP--->  vendor MCP server
                             (always on)
```

**Pros** :
- Pas de cold start ; cache JWKS warm.
- Logging centralisé sur la workstation.
- Même identité à travers les redémarrages du client MCP.

**Cons** :
- Requiert un install + gestion de service sur la workstation.

**Best for** : power users, flottes de workstations enterprise avec un setup MCP standardisé.

## Mode 3 : shared (multi-user gateway)

Le proxy tourne centralement (VM, container, pod k8s). Chaque client MCP dans l'org se connecte à la même instance ; identité per-user via headers ou session.

```
Claude Desktop (user A)  ---HTTPS--->  |
Claude Desktop (user B)  ---HTTPS--->  |  knowledge-mcp-proxy (cluster)  ---HTTPS--->  vendor MCP server
Cursor (user C)          ---HTTPS--->  |  (derrière Caddy / nginx / ALB)
```

**Différence de config** :

```yaml
on_behalf_of:
  resolver: my_org.auth.resolve_user_from_session   # dynamique per-request
transport:
  protocol: http
  bind: 0.0.0.0:9090
  auth:
    type: session_jwt
    verify_key: ${SESSION_VERIFY_KEY}
```

**Pros** :
- Un déploiement à update.
- Métriques + tracing centralisés.
- Connection pooling vers le serveur upstream.
- Plus facile d'enforcer un chemin réseau (aucun moyen de bypass).

**Cons** :
- Blast radius d'un bug affecte tout le monde.
- Requiert intégration SSO / session pour l'identité `on_behalf_of`.
- Plancher de latence plus haut que stdio (hop réseau).

**Best for** : organisations avec SSO + IAM ; déploiements MCP où chaque user doit traverser le proxy (aucun moyen de bypass).

## Choisir sous incertitude

- Partant de zéro, envie de sentir l'enforcement -> **stdio**.
- Déjà de la gestion de config workstation -> **sidecar**.
- Déploiement enterprise, besoin d'audit + centralisation -> **shared**.

Vous pouvez mixer : certains users sur stdio pour l'exploration, gateway shared pour le serveur vendor compliance-critical.

## Santé + observability

Chaque mode expose `/health` sur le port de metrics (défaut 9091). Le scrape Prometheus est identique à travers les modes.

Pour stdio, le port de metrics n'ouvre que si `observability.metrics_port` est set dans `proxy.yaml`. Off par défaut.

## Failure modes

| Failure | Comportement |
|---|---|
| Knowledge inaccessible | Fail closed par défaut. Set `on_knowledge_unreachable: allow` si vous devez dégrader en advisory. |
| Clé de signing rotée, JWKS stale | Force-refresh une fois, puis fail closed si toujours non résoluble. |
| Serveur MCP upstream down | Erreur MCP standard propage au client ; Knowledge n'est pas consulté (pas d'opération à autoriser). |
| Fetcher raise | La consultation continue sans ce champ ; `required_context` peut boucler jusqu'à ce que `max_rounds` déclenche. |

## Related

- [Setup](/docs/mcp-proxy/setup) - install + premier run.
- [Config reference](/docs/mcp-proxy/config-reference) - chaque knob.
- [Bring your own tools](/docs/guides/bring-your-own-tools-to-mcp-proxy) - pattern fetcher registry.
