---
title: Docs
description: Quickstarts, concepts, référence API et guides SDK pour intégrer Knowledge dans votre stack.
locale: fr
kicker: Docs
---

Tout ce dont vous avez besoin pour consulter Knowledge depuis votre stack, wrapper un business tool avec autorisation signée, ou brancher un MCP host aux tools Knowledge.

## Getting started

| Page | Description |
|---|---|
| **[Qu'est-ce que Knowledge ?](/docs/what-is-knowledge)** | Deux minutes sur le modèle mental et le vocabulaire. |
| **[Quickstart : créer votre première policy](/docs/quickstart-first-policy)** | D'un tenant vide au premier `/resolve` qui retourne un vrai verdict, en environ 30 minutes. Le chemin auteur. |
| **[Quickstart : governed tool en Python](/docs/quickstart-governed-tool)** | Deux patterns pour l'enforcement de signed verdict sur un tool Python : vérifier un verdict qu'on reçoit, ou laisser un décorateur se consulter tout seul. |
| **[Quickstart : Knowledge comme serveur MCP](/docs/quickstart-knowledge-mcp)** | Wire le serveur MCP Knowledge dans Claude Desktop / Cursor / tout MCP host pour que l'agent puisse query, check, et soumettre des approvals sous forme de tool calls. |

## Concepts

Explications approfondies des abstractions core.

| Page | Description |
|---|---|
| **[Policies, rules et targets](/docs/concepts/policies-rules-targets)** | Les trois aggregates core. |
| **[Verdicts et decisions](/docs/concepts/verdicts-and-decisions)** | Échelle de severity, précédence, record Consultation. |
| **[Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep)** | L'enveloppe JWS, checks de binding, spent-verdicts. |
| **[Résolution progressive de contexte](/docs/concepts/progressive-context-resolution)** | La boucle `/resolve` et l'inversion de dépendance. |
| **[Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses)** | Les trois mécanismes d'exception gouvernés. |
| **[Modèle de confiance à quatre acteurs](/docs/concepts/four-actor-trust-model)** | Qui signe, qui vérifie, ce que chaque arête garantit. |

## Référence API

| Endpoint | Description |
|---|---|
| **[Authentication](/docs/api-reference/authentication)** | Clés API, cookies de session, binding de principal. |
| **[POST /v1/check](/docs/api-reference/check)** | Verdict déterministe, contexte strict. |
| **[POST /v1/resolve](/docs/api-reference/resolve)** | Verdict progressif, contexte tolérant. |
| **[GET /v1/tenants/{slug}/jwks](/docs/api-reference/jwks)** | JWKS pour vérification de signature. |
| **[GET /v1/consultations/{id}](/docs/api-reference/consultations)** | Récupérer un record de Consultation. |
| **[/v1/approvals](/docs/api-reference/approvals)** | Créer, poll, décider. |

Spec OpenAPI complète à `docs/api/openapi-v3.json` dans le monorepo. Collection Postman : `docs/api/postman/knowledge-v3.postman_collection.json`.

## Référence SDK

| Page | Description |
|---|---|
| **[knowledge-runtime (Python)](/docs/sdk-reference/knowledge-runtime-python)** | `@governed_tool`, `verify_verdict`, cache JWKS, guard-rails. |
| **[SDK TypeScript](/docs/sdk-reference/typescript-roadmap)** *[Roadmap]* | Parité feature avec Python planifiée pour Q4-2026. |

## Serveur MCP

| Page | Description |
|---|---|
| **[Reference des tools](/docs/mcp-server/tools-reference)** | Les huit tools qu'expose le serveur MCP Knowledge, avec paramètres et format de retour. |

## Guides

| Page | Description |
|---|---|
| **[Wrapper votre propre serveur MCP avec enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement)** | Le pattern pour gater les tool calls d'un serveur MCP avec les signed verdicts Knowledge. Exemple de référence dans le monorepo. |
| **[Rotate signing keys](/docs/guides/rotate-signing-keys)** | Rotation planifiée + urgence. |
| **[Multi-tenant setup](/docs/guides/multi-tenant-setup)** | Faire tourner plusieurs tenants sur un déploiement. |
| **[Migrer d'advisory à enforcement](/docs/guides/migrate-from-advisory-to-enforcement)** | Le playbook en trois étapes. |
| **[Emergency response](/docs/guides/emergency-response)** | Kill switch, rotation de clé, downgrade. |

## Security + compliance

| Page | Description |
|---|---|
| **[Trust model deep dive](/docs/security-compliance/trust-model)** | Chaîne à quatre acteurs, menaces edge-by-edge. |
| **[Keys inventory](/docs/security-compliance/keys-inventory)** | Les quatre clés cryptographiques, storage, rotation. |
| **[Deployment shapes](/docs/security-compliance/deployment-shapes)** | Trade-offs SaaS, VPC, on-prem. |
| **[Compliance posture](/docs/security-compliance/compliance-posture)** | Certifications, résidence, rétention, modèle de menace. |

---

*Feedback à [contact@asplenz.com](mailto:contact@asplenz.com).*
