---
title: Quickstart - Knowledge comme serveur MCP
description: Branchez le serveur MCP Knowledge dans le MCP host de votre agent pour que l'agent puisse chercher des policies, demander un verdict et soumettre des approvals sous forme de tool calls.
locale: fr
kicker: Docs - Getting started
---

Knowledge ship un serveur MCP qui expose ses opérations principales comme tools appelables directement par le LLM de l'agent. Branchez-le dans Claude Desktop, Cursor, ou n'importe quel MCP host, et l'agent consulte Knowledge depuis sa boucle de raisonnement au lieu que votre code pilote des appels REST.

## Ce que l'agent obtient

Huit tools apparaissent dans la liste des tools de l'agent une fois le serveur branché :

| Tool | Rôle |
|---|---|
| `knowledge_query` | Chercher des rules par texte libre. |
| `knowledge_check` | Verdict sur une action envisagée avec scope + metrics. |
| `knowledge_resolve` | Verdict à deux étages : les faits manquants remontent en `required_context` pour que l'agent les acquière et re-invoque. |
| `knowledge_request_approval` | Soumettre une demande d'approbation humaine pour une action bloquée. |
| `knowledge_get_approval_status` | Poller une approval. |
| `knowledge_create_rule` | Créer une rule sous une Policy (write access requis). |
| `knowledge_list_rules` | Lister les rules d'une Policy. |
| `knowledge_create_override` | Accorder une exception time-bounded sur une ou plusieurs rules. |

Reference complète des paramètres : [Reference des tools MCP Knowledge](/docs/mcp-server/tools-reference).

## Prérequis

- Un déploiement Knowledge actif.
- Une clé API pour le tenant sur lequel l'agent doit agir.
- Un MCP host (Claude Desktop, Cursor, Claude Code, ou tout client capable de spawn un subprocess MCP ou de se connecter à un endpoint MCP distant).

## Deux transports

Choisissez :

- **Local (stdio)** - le MCP host spawn le serveur MCP Knowledge comme subprocess. Le plus simple ; fit Claude Desktop / Cursor / Claude Code sur une machine dev.
- **Remote (streamable-http)** - le serveur MCP tourne comme endpoint HTTP auquel le host se connecte. Fit les déploiements partagés et les agents hostés (custom connectors claude.ai, tableau MCP servers de l'API Anthropic).

## Transport local - wiring dans Claude Desktop

Ajoutez une entrée dans la config Claude Desktop (`~/Library/Application Support/Claude/claude_desktop_config.json` sur macOS ; `%APPDATA%\Claude\claude_desktop_config.json` sur Windows) :

```json
{
  "mcpServers": {
    "knowledge": {
      "command": "python",
      "args": ["-m", "knowledge_mcp.server"],
      "env": {
        "KNOWLEDGE_API_URL": "https://knowledge.votre-deploiement.com",
        "KNOWLEDGE_API_KEY": "ak-...",
        "MCP_TRANSPORT": "stdio"
      }
    }
  }
}
```

Relancez Claude Desktop. Les huit tools apparaissent dans la liste sous `knowledge`.

## Transport remote - déployer comme endpoint HTTP

Lancez le serveur avec `MCP_TRANSPORT=streamable-http` et un `MCP_ACCESS_TOKEN` choisi. Il écoute sur `MCP_PORT` (défaut 8005) à `/mcp`. Chaque requête doit porter `Authorization: Bearer <MCP_ACCESS_TOKEN>`.

Deux chemins d'auth supportés sur le même endpoint :

- **Bearer statique** - token pre-shared via `MCP_ACCESS_TOKEN`. Les clients simples (tableau MCP servers de l'API Anthropic, scripts de smoke-test) le passent directement.
- **OAuth 2.1** - flow complet DCR + PKCE + authorization-code pour les clients qui l'exigent (custom connectors claude.ai). Les metadata de discovery sont servies à `/.well-known/oauth-authorization-server`.

Pointez le MCP host vers `https://knowledge-mcp.votre-deploiement.com/mcp` avec la credential choisie.

## Premier appel - `knowledge_query`

Demandez à l'agent : *"Cherche dans Knowledge tout ce qui parle de refunds."*

L'agent invoque `knowledge_query(query="refund")`. Le serveur MCP appelle l'endpoint de search de votre déploiement Knowledge et retourne les rules qui matchent avec leur auteur, date, et snippet. L'agent surface la liste dans sa réponse.

## Verdict sur une action envisagée - `knowledge_check`

Demandez à l'agent : *"J'ai le droit de rembourser la transaction TX-456 pour 250 EUR ? Client retail, juridiction SG."*

L'agent invoque :

```
knowledge_check(
  intended_action="Refund TX-456 for 250 EUR",
  scope={"jurisdiction": "SG", "client_classification": "retail"},
  metrics={"amount_eur": 250}
)
```

Réponse :

```
Verdict: REQUIRE_APPROVAL
Consultation: cns-abc123

Cited rules (1, winning severity):
  [require_approval] rul-refund-medium
    Refunds between 100 and 500 EUR require compliance sign-off.
    Rationale: Standard mid-range refund control.
```

L'agent sait maintenant que l'action n'est pas auto-allowed et peut proposer l'étape suivante (demander l'approval) au lieu d'exécuter aveuglément.

## Contexte progressif - `knowledge_resolve`

Certains verdicts dépendent de faits que l'agent n'a pas encore. `knowledge_resolve` retourne `INCOMPLETE` avec une liste typée des champs manquants pour que l'agent les acquière (lookup, question, branch) et re-invoque :

```
knowledge_resolve(
  action_type="refund_request",
  context={"amount_eur": 250}
)
```

Réponse possible :

```
Operation status: INCOMPLETE (2 field(s) needed)

- customer.tier  [enum]
    reason: required by rul-refund-vip
    allowed_values: ["standard", "vip"]

- authorization.dealer_signoff  [boolean]
    reason: required by rul-refund-medium
    source_requirement: verified

Acquire these fields (system lookup, user question, branching enum)
and re-invoke knowledge_resolve with the enriched context.
```

L'agent fetch ces faits, rappelle `knowledge_resolve` avec le contexte enrichi, et obtient le verdict `COMPLETE` une fois que chaque gate a des inputs évaluables. Modèle complet : [Résolution progressive de contexte](/docs/concepts/progressive-context-resolution).

## Approvals - workflow à deux tools

Si `knowledge_check` retourne `require_approval`, l'agent soumet :

```
knowledge_request_approval(
  intended_action="Refund TX-456 for 250 EUR, client requested duplicate",
  justification="Client provided invoice showing duplicate charge on statement.",
  context={"scope": {"jurisdiction": "SG", ...}, "metrics": {"amount_eur": 250}}
)
```

La réponse porte un `approval_request_id`. Le compliance officer voit la demande dans le back-office et décide. L'agent polle avec `knowledge_get_approval_status(id)` jusqu'à ce que le status flip.

## Suite

- **[Reference des tools MCP Knowledge](/docs/mcp-server/tools-reference)** - chaque tool, chaque paramètre, format de retour.
- **[Wrapper votre propre serveur MCP avec enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement)** - quand votre agent a ses propres tools que vous voulez gater par Knowledge, pas des tools que Knowledge lui-même expose.
- **[Verdicts et decisions](/docs/concepts/verdicts-and-decisions)** - l'échelle de severity et comment la rule gagnante est choisie.
