---
title: Docs
description: Quickstarts, concepts, référence API et guides SDK pour intégrer Knowledge dans votre stack.
locale: fr
kicker: Docs
---

Tout ce dont vous avez besoin pour consulter Knowledge depuis votre stack, wrapper un business tool avec autorisation signée, ou lancer un MCP proxy. Chaque page porte un badge de maturité : `[Stable]` `[Beta]` `[Experimental]` `[Roadmap]`.

## Getting started

- **[Qu'est-ce que Knowledge ?](/docs/what-is-knowledge)** [Stable] - deux minutes sur le modèle mental et le vocabulaire.
- **[Quickstart : créer votre première policy](/docs/quickstart-first-policy)** [Stable] - d'un tenant vide au premier `/resolve` qui retourne un vrai verdict, en environ 30 minutes. Le chemin auteur.
- **[Quickstart : governed tool en Python](/docs/quickstart-governed-tool)** [Stable] - cinq minutes hands-on avec le décorateur `@governed_tool`, de l'install au premier verdict signé.
- **[Quickstart : MCP proxy en 5 minutes](/docs/quickstart-mcp-proxy)** [Stable] - cinq minutes pour insérer le proxy devant un serveur MCP existant et voir l'enforcement se déclencher sur un appel tampered.

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

## MCP proxy

- **[Setup](/docs/mcp-proxy/setup)** [Stable] - insérer le proxy devant n'importe quel serveur MCP.
- **[Config reference](/docs/mcp-proxy/config-reference)** [Stable] - chaque knob dans proxy.yaml.
- **[Deployment modes](/docs/mcp-proxy/deployment-modes)** [Stable] - stdio, sidecar, shared.

## Guides

- **[Authorer des règles dans l'UI back-office](/docs/guides/author-rules-in-back-office-ui)** [Stable] - le chemin d'authoring visuel pour compliance et SMEs.
- **[Valider avant d'enforce](/docs/guides/validate-before-you-enforce)** [Stable] - shadow mode, investigation des discrepancies, critères de cut-over, bibliothèques de test cases.
- **[Rotate signing keys](/docs/guides/rotate-signing-keys)** [Stable] - rotation planifiée + urgence.
- **[Multi-tenant setup](/docs/guides/multi-tenant-setup)** [Stable] - faire tourner plusieurs tenants sur un déploiement.
- **[Bring your own tools au MCP proxy](/docs/guides/bring-your-own-tools-to-mcp-proxy)** [Stable] - fetcher registry + policy mapping.
- **[Migrer d'advisory à enforcement](/docs/guides/migrate-from-advisory-to-enforcement)** [Stable] - le playbook en trois étapes.
- **[Emergency response](/docs/guides/emergency-response)** [Stable] - kill switch, rotation de clé, downgrade.

## Security + compliance

- **[Trust model deep dive](/docs/security-compliance/trust-model)** [Stable] - chaîne à quatre acteurs, menaces edge-by-edge.
- **[Keys inventory](/docs/security-compliance/keys-inventory)** [Stable] - les quatre clés cryptographiques, storage, rotation.
- **[Deployment shapes](/docs/security-compliance/deployment-shapes)** [Stable] - trade-offs SaaS, VPC, on-prem.
- **[Compliance posture](/docs/security-compliance/compliance-posture)** [Stable] - certifications, résidence, rétention, modèle de menace.

---

*Feedback à [contact@asplenz.com](mailto:contact@asplenz.com).*
