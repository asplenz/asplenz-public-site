---
title: MCP proxy - setup
description: Insérez le proxy MCP d'Asplenz devant n'importe quel serveur MCP. Zéro changement de code client ; l'enforcement kick in immédiatement.
locale: fr
kicker: Docs / MCP proxy - Stable
---

Le proxy MCP d'Asplenz est un Policy Enforcement Point transparent pour les appels de tools MCP (Model Context Protocol). Il s'assoit entre un client MCP (Claude Desktop, Cursor, client MCP custom) et un serveur MCP upstream, consultant Knowledge avant de forwarder les invocations de tool.

## Ce qu'il fait

- **Proxy transparent** : forward `tools/list`, `resources/*`, `prompts/*` inchangés.
- **Enforce `tools/call`** : consulte Knowledge, vérifie le verdict signé, et forward seulement si l'opération est autorisée.
- **Ajoute progressive context** : si Knowledge retourne `required_context`, le proxy fait tourner les fetchers enregistrés et re-consulte avant de forwarder ou refuser.
- **Émet des signaux d'audit** : chaque appel intercepté écrit une Consultation et (sur refus) surface une erreur typée au client.

## Install

```bash
pip install knowledge-mcp-proxy
```

Tourne comme transport MCP stdio, HTTP, ou SSE. Requiert Python 3.11+.

## Config minimale

`proxy.yaml` :

```yaml
knowledge:
  base_url: https://knowledge.asplenz.com/tnt-acme
  api_key: ${KNOWLEDGE_API_KEY}

upstream:
  transport: stdio
  command: ["npx", "-y", "@vendor/some-mcp-server"]

on_behalf_of: ${USER_ID}

policy_mapping:
  # Quels noms de tool MCP intercepter, et comment mapper les arguments à
  # Knowledge (action, resource, parameters).
  "search_kb":
    action: kb.search
    resource: "{query}"
  "create_ticket":
    action: ticket.create
    resource: "{title}"
    bind: [priority, assignee]
```

## Run

```bash
knowledge-mcp-proxy --config proxy.yaml
```

Le proxy expose stdio par défaut. Pointez votre client MCP dessus comme s'il était le serveur upstream ; le client voit les mêmes tools.

## Wiring Claude Desktop

`claude_desktop_config.json` :

```json
{
  "mcpServers": {
    "governed-vendor": {
      "command": "knowledge-mcp-proxy",
      "args": ["--config", "/etc/knowledge/proxy.yaml"],
      "env": {
        "KNOWLEDGE_API_KEY": "ak-live-...",
        "USER_ID": "hum-alice"
      }
    }
  }
}
```

Redémarrez Claude Desktop. Le proxy enforce maintenant chaque appel au serveur upstream.

## Cursor / autres clients MCP

Tout client qui parle MCP stdio peut utiliser le proxy de la même façon. Le proxy est un drop-in pour le serveur upstream ; le client n'apprend jamais que Knowledge existe (il ne voit que des refus typés).

## Vérifier que l'enforcement fire

Envoyez un appel qui devrait être bloqué. Exemple : `create_ticket` avec `priority=critical` quand l'utilisateur actuel n'est pas autorisé pour les tickets critiques.

Le client voit une erreur MCP typée :

```json
{
  "code": -32001,
  "message": "policy_blocked",
  "data": {
    "consultation_id": "cns-abc",
    "cited_rules": ["rul-critical-tickets-restricted"]
  }
}
```

Si la requête aurait hit le vendor upstream, le proxy ne l'a jamais forwardée. Voir [Quickstart : MCP proxy](/docs/quickstart-mcp-proxy) pour une démo de 5 minutes.

## Related

- [Config reference](/docs/mcp-proxy/config-reference) - chaque knob dans proxy.yaml.
- [Deployment modes](/docs/mcp-proxy/deployment-modes) - stdio vs sidecar vs shared.
- [Bring your own tools](/docs/guides/bring-your-own-tools-to-mcp-proxy) - fetcher registry + policy mapping.
