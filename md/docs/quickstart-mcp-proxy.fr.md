---
title: Quickstart - MCP proxy en 5 minutes
description: Insérez le MCP proxy Asplenz devant un serveur MCP existant. Zéro changement de code sur vos tools. Enforcement ajouté par insertion du proxy.
locale: fr
kicker: Docs - Getting started
---

Cinq minutes. Se termine par un appel Claude Desktop (ou Cursor, ou n'importe quel MCP host) refusé par le proxy parce que le signed verdict ne matche pas.

## Prérequis

- Un déploiement Knowledge qui tourne (tier design-partner) avec verdicts signés activés.
- Une clé API agent pour le tenant. Passée comme env var `AGENT_API_KEY`.
- Python 3.11+ disponible.
- (Optionnel mais recommandé) Un MCP host comme Claude Desktop ou Cursor pour tester end-to-end.

## Installation

```bash
pip install -e path/to/knowledge-mcp-proxy       # depuis monorepo
pip install -e path/to/knowledge-runtime         # le SDK dont il dépend
```

## Écrire la config du proxy

Créez `customer-tools.yaml` :

```yaml
knowledge:
  url: https://knowledge.your-deployment.com
  tenant_slug: acme-bank
  api_key_env: AGENT_API_KEY

tools:
  refund_customer:
    governed:
      action: refund.execute
      resource: tx
      bind: [amount]
    description: "Refund a customer transaction. Governed by Knowledge policy."
    schema:
      tx: {type: string, required: true}
      amount: {type: integer, required: true}
      reason: {type: string, required: false}

  cancel_order:
    governed:
      action: order.cancel
      resource: order_id
      bind: []
    description: "Cancel an open order. Governed by Knowledge policy."
    schema:
      order_id: {type: string, required: true}

  search_customer:
    # Pas de bloc `governed` : le proxy passe les appels directement.
    description: "Look up a customer by email. Read-only, non-governed."
    schema:
      email: {type: string, required: true}
```

Deux tools gouvernés + un pass-through (pour montrer que les tools non-gouvernés marchent de façon transparente).

## Démarrer le proxy

```bash
export AGENT_API_KEY=<votre-clé-api-agent>
python -m mcp_proxy.server --config customer-tools.yaml
```

Le proxy speak MCP en stdio (défaut) ou streamable-http (via `MCP_TRANSPORT=streamable-http`).

## Câbler un MCP host

Config Claude Desktop (`~/Library/Application Support/Claude/claude_desktop_config.json` sur macOS) :

```json
{
  "mcpServers": {
    "asplenz-governed": {
      "command": "python",
      "args": ["-m", "mcp_proxy.server", "--config", "/absolute/path/customer-tools.yaml"],
      "env": {"AGENT_API_KEY": "<votre-clé-api-agent>"}
    }
  }
}
```

Redémarrez Claude Desktop. Les trois tools (`refund_customer`, `cancel_order`, `search_customer`) apparaissent dans la liste des tools.

## Essayer le happy path

Demandez à Claude Desktop : *"Rembourse la transaction TX-456 pour 40 euros"*. L'agent appelle `refund_customer(tx="TX-456", amount=40)`. Le proxy :

1. Consulte `/knowledge/v1/resolve` avec l'action déclarée du tool + bindings.
2. Récupère un signed_verdict.
3. Vérifie la signature contre le JWKS du tenant.
4. Vérifie que les bindings matchent les args entrants.
5. Exécute le handler du tool sous-jacent (fictif dans cette implémentation de référence).
6. Retourne le résultat à Claude Desktop.

## Essayer le refus d'enforcement

Demandez à Claude Desktop : *"Rembourse la transaction TX-456 pour QUATRE CENT MILLE euros"*. Si votre policy tenant a un threshold de montant (le seed `wealth` de référence en a), Knowledge retourne `outcome=blocked` ou `outcome=approval_required`. Le proxy retourne une erreur tool MCP avec la raison typée (`outcome_not_allowed`). Claude Desktop surface l'erreur à l'utilisateur.

L'agent ne peut pas contourner parce que :

1. L'implémentation du tool n'est pas atteignable via aucun autre chemin (le proxy est le seul endpoint MCP exposé pour ces tools).
2. Même si l'agent savait comment construire un signed verdict pour amount=40 et ensuite appeler le tool avec amount=400000, le wrapper compare les bindings et refuse avec `binding_mismatch`.

## Décisions d'enforcement que le proxy peut retourner

| Code | Quand |
|---|---|
| `unknown_tool` | Host a appelé un tool pas dans la config. |
| `knowledge_unreachable` | Erreur HTTP pour atteindre /resolve. |
| `knowledge_error` | Non-200 de /resolve. |
| `unsigned_verdict` | Knowledge a retourné un verdict sans signed_verdict (déploiement advisory-only). Le proxy refuse parce qu'il ne peut pas enforcer. |
| `bad_signature` | La signature JWS ne vérifie pas contre le JWKS. |
| `expired` | L'expires_at du signed verdict est dans le passé. |
| `outcome_not_allowed` | La décision était `blocked`, `approval_required`, ou `observe`. |
| `binding_mismatch` | Binding déclaré (`action`, `resource`, `parameters.*`) ne matche pas les arguments que le host a envoyés. |
| `unknown_kid` | Le kid du token n'est pas trouvé dans le JWKS même après un refetch forcé. |

## Pass-through non-gouverné

Le tool `search_customer` dans la config n'a pas de bloc `governed`. Les appels vers lui passent à travers le proxy directement vers le handler sans enforcement. Utile pour les tools informatifs qui ne requièrent pas de décision d'autorisation.

## Ce qui n'est PAS shipped encore

- **Mode B - forward vers un serveur MCP upstream qui tourne** : le proxy actuel implémente les tools directement (Mode A). Forward transparent vers un serveur MCP customer est un follow-up.
- **Multi-tenant par process proxy** : un proxy = un tenant aujourd'hui.
- **Vraie protection replay** : le proxy ne maintient pas de store spent-verdicts ; le TTL court (défaut 60s) est la protection actuelle.

Référence complète : [`docs/engineering/mcp-proxy-guide.html`](/enforcement).

## Suite

- **[Enforcement](/product/enforcement)** - le modèle complet, chemins de déploiement, modèle de menace.
- **[Integrations](/product/integrations)** - autres surfaces d'intégration (SDK Python, API REST, JWKS).
