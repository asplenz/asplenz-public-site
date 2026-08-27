---
title: Docs
description: Quickstarts, concepts, référence API et guides SDK pour intégrer Knowledge dans votre stack.
locale: fr
kicker: Docs
---

Tout ce dont vous avez besoin pour consulter Knowledge depuis votre stack, wrapper un business tool avec autorisation signée, ou brancher un MCP host aux tools Knowledge. Chaque page porte un badge de maturité : `[Stable]` `[Beta]` `[Experimental]` `[Roadmap]`.

## Getting started

- **[Qu'est-ce que Knowledge ?](/docs/what-is-knowledge)** [Stable] - deux minutes sur le modèle mental et le vocabulaire.
- **[Quickstart : créer votre première policy](/docs/quickstart-first-policy)** [Stable] - d'un tenant vide au premier `/resolve` qui retourne un vrai verdict, en environ 30 minutes. Le chemin auteur.
- **[Quickstart : governed tool en Python](/docs/quickstart-governed-tool)** [Stable] - deux patterns pour l'enforcement de signed verdict sur un tool Python : vérifier un verdict qu'on reçoit, ou laisser un décorateur se consulter tout seul.
- **[Quickstart : Knowledge comme serveur MCP](/docs/quickstart-knowledge-mcp)** [Stable] - wire le serveur MCP Knowledge dans Claude Desktop / Cursor / tout MCP host pour que l'agent puisse query, check, et soumettre des approvals sous forme de tool calls.

## Concepts

Explications approfondies des abstractions core.

- **[Policies, rules et targets](/docs/concepts/policies-rules-targets)** [Stable] - les trois aggregates core.
- **[Verdicts et decisions](/docs/concepts/verdicts-and-decisions)** [Stable] - échelle de severity, précédence, record Consultation.
- **[Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep)** [Stable] - l'enveloppe JWS, checks de binding, spent-verdicts.
- **[Résolution progressive de contexte](/docs/concepts/progressive-context-resolution)** [Stable] - la boucle `/resolve` et l'inversion de dépendance.
- **[Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses)** [Stable] - les trois mécanismes d'exception gouvernés.
- **[Modèle de confiance à quatre acteurs](/docs/concepts/four-actor-trust-model)** [Stable] - qui signe, qui vérifie, ce que chaque arête garantit.

## Référence API

- **[Authentication](/docs/api-reference/authentication)** [Stable] - clés API, cookies de session, binding de principal.
- **[POST /v1/check](/docs/api-reference/check)** [Stable] - verdict déterministe, contexte strict.
- **[POST /v1/resolve](/docs/api-reference/resolve)** [Stable] - verdict progressif, contexte tolérant.
- **[GET /v1/tenants/{slug}/jwks](/docs/api-reference/jwks)** [Stable] - JWKS pour vérification de signature.
- **[GET /v1/consultations/{id}](/docs/api-reference/consultations)** [Stable] - récupérer un record de Consultation.
- **[/v1/approvals](/docs/api-reference/approvals)** [Stable] - créer, poll, décider.

Spec OpenAPI complète à `docs/api/openapi-v3.json` dans le monorepo. Collection Postman : `docs/api/postman/knowledge-v3.postman_collection.json`.

## Référence SDK

- **[knowledge-runtime (Python)](/docs/sdk-reference/knowledge-runtime-python)** [Stable] - `@governed_tool`, `verify_verdict`, cache JWKS, guard-rails.
- **[SDK TypeScript](/docs/sdk-reference/typescript-roadmap)** [Roadmap] - parité feature avec Python planifiée pour Q4-2026.

## Serveur MCP

- **[Reference des tools](/docs/mcp-server/tools-reference)** [Stable] - les huit tools qu'expose le serveur MCP Knowledge, avec paramètres et format de retour.

## Guides

- **[Wrapper votre propre serveur MCP avec enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement)** [Stable] - le pattern pour gater les tool calls d'un serveur MCP avec les signed verdicts Knowledge. Exemple de référence dans le monorepo.
- **[Rotate signing keys](/docs/guides/rotate-signing-keys)** [Stable] - rotation planifiée + urgence.
- **[Multi-tenant setup](/docs/guides/multi-tenant-setup)** [Stable] - faire tourner plusieurs tenants sur un déploiement.
- **[Migrer d'advisory à enforcement](/docs/guides/migrate-from-advisory-to-enforcement)** [Stable] - le playbook en trois étapes.
- **[Emergency response](/docs/guides/emergency-response)** [Stable] - kill switch, rotation de clé, downgrade.

## Security + compliance

- **[Trust model deep dive](/docs/security-compliance/trust-model)** [Stable] - chaîne à quatre acteurs, menaces edge-by-edge.
- **[Keys inventory](/docs/security-compliance/keys-inventory)** [Stable] - les quatre clés cryptographiques, storage, rotation.
- **[Deployment shapes](/docs/security-compliance/deployment-shapes)** [Stable] - trade-offs SaaS, VPC, on-prem.
- **[Compliance posture](/docs/security-compliance/compliance-posture)** [Stable] - certifications, résidence, rétention, modèle de menace.

---

*Feedback à [contact@asplenz.com](mailto:contact@asplenz.com).*
