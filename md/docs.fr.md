---
title: Docs
description: Quickstarts, concepts, référence API et guides SDK pour intégrer Knowledge dans votre stack.
locale: fr
kicker: Docs
---

Tout ce dont vous avez besoin pour consulter Knowledge depuis votre stack, wrapper un business tool avec autorisation signée, ou lancer un MCP proxy. Chaque page porte un badge de maturité : `[Stable]` `[Beta]` `[Experimental]` `[Roadmap]`.

## Getting started

- **[Qu'est-ce que Knowledge ?](/docs/what-is-knowledge)** [Stable] - deux minutes sur le modèle mental et le vocabulaire.
- **[Quickstart : governed tool en Python](/docs/quickstart-governed-tool)** [Stable] - cinq minutes hands-on avec le décorateur `@governed_tool`, de l'install au premier verdict signé.
- **[Quickstart : MCP proxy en 5 minutes](/docs/quickstart-mcp-proxy)** [Stable] - cinq minutes pour insérer le proxy devant un serveur MCP existant et voir l'enforcement se déclencher sur un appel tampered.

## Concepts

Explications approfondies des abstractions core. **Bientôt** - pour l'instant, voir les specs dans le monorepo à `docs/specs/` :

- Policies, rules et targets - `docs/specs/knowledge-impl-spec-v5.md`
- Verdicts et décisions - `docs/specs/knowledge-impl-spec-v5.md` §7
- Résolution progressive de contexte - `docs/specs/knowledge-resolve-spec-v1.md`
- Verdicts signés et PEP - `docs/specs/signed-verdict-v1.md`
- Overrides, approbations, pauses - `docs/specs/action-override-feature.md`
- Modèle de confiance à quatre acteurs - `docs/specs/signed-verdict-v1.md` §17

## Référence API

**Bientôt** - voir la spec OpenAPI à `docs/api/openapi-v3.json` pour la liste complète d'endpoints. Collection Postman : `docs/api/postman/knowledge-v3.postman_collection.json`.

Endpoints clés :
- `POST /knowledge/v1/check` - verdict déterministe, contexte strict
- `POST /knowledge/v1/resolve` - verdict progressif, contexte tolérant
- `GET /knowledge/v1/tenants/{slug}/jwks` - JWKS pour vérification de signature
- `GET /knowledge/v1/consultations/{id}` - récupérer un record de Consultation
- `POST /knowledge/v1/namespaces/{ns}/approvals` - créer une demande d'approbation

## Référence SDK

- `knowledge-runtime` (Python) [Stable] - décorateur `@governed_tool`, primitive `verify_verdict`, cache JWKS, guard-rails. Référence détaillée dans `src/knowledge-runtime/README.md`.
- SDK TypeScript [Roadmap Q4-2026] - parité feature avec Python.

## MCP proxy

- Setup + config - voir `docs/engineering/mcp-proxy-guide.html`
- Modes de déploiement (direct, proxy upstream)
- Câblage avec Claude Desktop / Cursor

## Guides

**Bientôt** :
- Rotation des clés de signature
- Setup multi-tenant
- Bring your own tools au MCP proxy
- Migrer du mode advisory à enforcement
- Réponse d'urgence (kill switch de rule)

## Sécurité + compliance

- Modèle de confiance en profondeur - `docs/specs/signed-verdict-v1.md` §17
- Inventaire des clés - `docs/engineering/keys-guide.md`
- Formes de déploiement (SaaS, VPC, on-prem)
- Posture compliance - état honnête courant à [/security](/security)

---

*La surface docs complète arrive en ligne courant Q4-2026. Tout ce qui est référencé ci-dessus ship aujourd'hui soit comme un artefact qui tourne, soit comme une spec dans le repo. Feedback à [contact@asplenz.com](mailto:contact@asplenz.com).*
