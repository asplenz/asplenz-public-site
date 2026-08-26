---
title: Integrations
description: Comment Knowledge s'insère dans les stacks agentiques, les serveurs MCP, les backends Python et les couches identity/observability autour.
locale: fr
kicker: Produit - Integrations
---

Knowledge s'intègre par trois surfaces : une **API REST** (la source of truth), un **MCP tool + proxy** pour les stacks agentiques qui parlent Model Context Protocol, et un **SDK Python** pour les backends qui exposent des tools à des agents directement.

## MCP - support natif

**MCP tool** [Stable] : serveur `knowledge-mcp` expose `/check`, `/resolve`, `/approvals` de Knowledge comme des tools MCP natifs. N'importe quel MCP host (Claude Desktop, Cursor, plugins IDE, arrays MCP servers de l'API Anthropic) peut consulter Knowledge depuis un agent en cours en appelant les tools. Tourne en stdio ou streamable-http.

**MCP proxy** [Stable] : `asplenz-mcp-proxy` s'insère entre un MCP host et un serveur MCP customer existant. Lit une config déclarant quels tools sont gouvernés. À chaque `tools/call`, le proxy exécute le flow PEP (resolve → verify signed_verdict → forward) de façon transparente. Le serveur MCP du customer, les implémentations de tools et le client host restent inchangés.

**Histoire d'adoption** : le MCP proxy est le chemin d'onboarding le plus fluide pour les équipes déjà en MCP - insertion drop-in, zéro changement de code sur les tools, enforcement ajouté par insertion du proxy. Voir [Enforcement](/product/enforcement) §Trois chemins d'adoption et [MCP proxy setup](/docs/mcp-proxy/setup).

## SDK Python - knowledge-runtime

[Stable] Module Python partagé pour backends qui exposent des tools à des agents.

**Primitives** :
- `verify_verdict(token, jwks_url, expected_bindings) -> claims` : vérifie une enveloppe JWS + bindings contre le JWKS de Knowledge
- Décorateur `@governed_tool(action, resource, bind)` : wrappe une callable Python pour que les appels passent par `/resolve` + verify + execute de façon transparente
- `JwksCache` : cache par URL avec TTL + auto-refresh sur miss de `kid`
- `lint_bindings(fn)` : sanity check à l'import sur les déclarations du décorateur
- `verify_binding_completeness(fn, sample, variations)` : test helper qui prouve que les args bindés changent l'enveloppe signée et les args non-bindés non

**Installation** :
```
pip install -e ../knowledge-runtime      # editable, depuis le monorepo
```

Publication PyPI est un follow-up quand un client hors monorepo en a besoin.

**Compatibilité framework** :
- **Tout framework de tool basé sur callables Python** (LangChain, LlamaIndex, agents Python custom) : le décorateur wrappe une fonction Python, préserve `__wrapped__` pour que les tool-schema generators voient la signature intentionnelle. Compatible structurellement, pas testé par framework.
- **OpenAI Assistants API / function-calling** : structurellement possible via un adapter qui expose le tool comme JSON schema. Pas shippé ; sur la roadmap selon la demande.
- **Backends TypeScript** : le SDK est Python uniquement aujourd'hui. `@asplenz/knowledge-runtime` sur npm est sur la roadmap pour Q4-2026.

## API REST - la source of truth

Chaque chemin d'intégration appelle ultimement ceci. Endpoints :

| Endpoint | Objectif |
|---|---|
| `POST /knowledge/v1/check` | Verdict déterministe, contexte strict (le caller envoie tout) |
| `POST /knowledge/v1/resolve` | Verdict progressif, contexte tolérant (Knowledge dit au caller ce qu'il manque) |
| `GET /knowledge/v1/tenants/{slug}/jwks` | JWKS public pour vérification signed_verdict |
| `GET /knowledge/v1/normative-hash` | Normative hash tenant courant (pour vérification strict-mode) |
| `GET /knowledge/v1/.well-known/webhook-key` | Clé publique pour vérification signature webhook |
| `POST /knowledge/v1/namespaces/{ns}/approvals` | Créer une demande d'approbation |
| `POST /knowledge/v1/approvals/{id}/decide` | Un humain décide une demande d'approbation |
| `GET /knowledge/v1/consultations/{id}` | Récupérer un record de Consultation pour audit |

Authentifié avec une clé API (header `X-API-Key`). Référence complète à [API reference](/docs/api-reference/authentication). Spec OpenAPI à `/api/openapi-v3.json`.

## Identity, SSO, SCIM

**OIDC** [Stable] : l'UI back-office supporte le login OIDC. Configurable par déploiement à l'onboarding.

**SCIM** [Stable] : endpoints SCIM 2.0 pour provisioning users + groupes. Configurable par déploiement.

**Identity binding** [Stable core, surface admin en cours] : Knowledge track le mapping *"SSO email X dans tenant Y = principal Z"* pour unifier les identités à travers les mécanismes d'auth. Le modèle `PrincipalIdentityBinding` ship avec auto-linking sur email match. Endpoints admin CRUD + surface knowledge-ui sont les Slice C+D restants du workstream identity-unification.

## Observability + logs

**Structured logs** : tous les services émettent structlog JSON par défaut. `LOG_FORMAT=text` pour dev local.

**Correlation IDs** : `X-Request-Id` se propage à travers knowledge-api / knowledge-ai / knowledge-slack / knowledge-mcp. Chaque ligne de log le porte.

**Table Events** : chaque mutation d'une entité gouvernée écrit une ligne `Event`. Query pour audit ou ship vers un SIEM via l'API events.

**Widgets FinOps** [Stable] : breakdown des coûts LLM par tenant (tokens, cache hit ratio, spend par modèle) via le service standalone `asplenz-finops` sur port 8092. Dashboard widget shippé comme une app React servie à `/dashboard/`.

## Formes de déploiement

- **SaaS** (hosté par Asplenz) : le plus rapide à démarrer. Tier design-partner disponible aujourd'hui ; certification production (SOC 2, ISO 27001) démarre avec la cohorte design-partner.
- **Cloud privé / VPC** : déployé dans votre compte cloud. Vous contrôlez le placement réseau, backup, résidence.
- **On-premise** : déployé sur une infrastructure que vous opérez. Aucune dépendance externe au runtime au-delà d'un Postgres standard et (quand la couche reasoning est utilisée) d'un provider LLM que vous configurez.

## Ce qui n'est pas encore shippé (roadmap)

- SDK TypeScript
- Adapter OpenAI function-calling
- Registry de field-fetchers (`GET /v1/field-fetchers/{tenant}` pour que l'agent auto-découvre comment fetcher les champs manquants ; voir [Progressive context](/product/progressive-context))
- SDK Java (opt-in selon demande)

Tout ce qui est shippé porte un badge de maturité dans [`docs/`](/docs) : `[Stable] [Beta] [Experimental] [Roadmap]`.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Enforcement](/product/enforcement) | L'enveloppe signée + le modèle PEP que MCP proxy + SDK implémentent |
| [Docs quickstart](/docs) | Hands-on de 5 minutes avec le décorateur ou le MCP proxy |
| [Security](/security) | Modèle de confiance, inventaire des clés, topologies de déploiement |
