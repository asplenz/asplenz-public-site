---
title: Ajouter du decisioning gouverné sans reconstruire votre stack d'agent
description: Gardez vos agents, tools, APIs métier, systèmes d'identité et rules engines existants. Knowledge s'insère dans le chemin de décision là où la policy a besoin d'une autorité indépendante.
locale: fr
kicker: Produit - Integrations
---

## Où Knowledge s'insère

Vous avez déjà assemblé un stack : un runtime d'agent, des tools, des APIs métier, de l'identity, de l'observability, peut-être un ou plusieurs rules engines existants. La question à laquelle cette page répond n'est pas *quels endpoints proposons-nous*, mais *où Knowledge se met dans ce que vous faites déjà tourner, et combien vous devrez changer*.

La réponse : très peu.

**Avant Knowledge :**

```pipeline
Agent IA | Investigue, décide
Runtime d'agent | Orchestre les appels de tools
Tools | Exécutent directement
API métier | Trust le caller
```

**Avec Knowledge :**

```pipeline
Agent IA | Investigue, rassemble le contexte
Runtime d'agent | Orchestre les appels de tools
Frontière du tool | Consulte Knowledge, vérifie la décision signée
API métier | Exécute seulement si autorisée
```

Knowledge ne remplace pas votre runtime d'agent ni vos systèmes métier. Il ajoute une décision policy gouvernée et, quand c'est requis, un point d'enforcement à la frontière du tool. Tout ce qui est en amont et tout ce qui est en aval reste tel quel.

## Choisissez votre chemin d'intégration

Trois choix architecturaux selon ce à quoi votre stack ressemble déjà. Même modèle sous-jacent, points d'insertion différents.

### Déjà MCP ?

Deux chemins selon le côté de la conversation où Knowledge se trouve.

**Knowledge comme serveur MCP.** Wire le serveur MCP Knowledge dans le MCP host de votre agent. L'agent appelle `knowledge_check`, `knowledge_resolve`, `knowledge_request_approval` et les autres comme des tool calls, sans que votre code pilote de REST. Voir [Quickstart : Knowledge comme serveur MCP](/docs/quickstart-knowledge-mcp).

**Intercepteur de tool call MCP.** Pour gater vos propres tools MCP avec l'enforcement Knowledge, wrappez chaque invocation avec `verify_verdict` avant exécution. Pattern documenté à [Wrapper votre propre serveur MCP avec enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement) ; une implémentation de référence vit dans le monorepo à copier et adapter à votre stack.

Meilleur fit pour les équipes tournant déjà MCP. Insertion drop-in, zéro changement de code.

### Vos tools sont des fonctions Python ?

**SDK Python - `knowledge-runtime`.** Wrappez les tools sélectionnés avec un décorateur :

```python
from knowledge_runtime import governed_tool

@governed_tool(action="refund.execute", resource="tx", bind=["amount"])
def refund(tx: str, amount: int):
    return refund_api.execute(tx, amount)
```

Le décorateur consulte Knowledge à chaque appel, vérifie la décision signée, et ne fait tourner la fonction sous-jacente que si l'opération a été autorisée. Structurellement compatible avec LangChain, LlamaIndex et les runtimes Python custom.

### Architecture custom ?

**REST API + PEP custom.** N'importe quel langage, n'importe quel framework. Votre runtime appelle les endpoints REST de Knowledge, vérifie l'enveloppe JWS retournée contre le JWKS public de Knowledge, puis décide dans votre propre couche d'enforcement s'il faut invoquer l'API métier.

Meilleur fit quand votre stack d'agent n'est pas Python ou MCP, ou quand vous voulez contrôle complet sur où l'évaluation policy et l'enforcement se produisent.

### Excel ou un autre workbook back-office ?

Un workbook peut consommer une décision signée de la même façon qu'un tool d'agent : appeler `POST /v1/resolve`, recevoir un verdict + une enveloppe JWS, et agir dessus. Le verdict signé est transport-agnostic.

Le chemin d'intégration concret dépend de vos contraintes IT — typiquement un bridge ou un broker interne entre le workbook et Knowledge, dimensionné selon votre gateway, votre auth et votre posture de déploiement. On scope la forme dans le cadre d'un engagement design-partner.

## Gardez vos systèmes métier existants

Knowledge n'exige pas de centraliser chaque règle dans votre organisation. Il donne aux décisions que vous choisissez de gouverner une policy authority indépendante, et coexiste proprement avec tout le reste.

| Système existant | Comment Knowledge coexiste |
|---|---|
| **Rules engines existants** (FICO, ODM, ServiceNow, custom) | Knowledge gouverne les décisions que vous lui routez. Vos moteurs existants continuent de gérer credit scoring, fraud, ticketing, ou quel que soit le domaine qu'ils possèdent déjà. |
| **CRM, core banking, ERP** | Intouchés. Knowledge lit seulement le contexte que le caller lui envoie et retourne une décision. Il ne se place pas dans le chemin de données de vos systèmes de record. |
| **APIs métier** | Atteintes uniquement à travers la frontière du tool qui vérifie la décision signée. Aucun changement à l'API métier elle-même. |
| **Workflow engines** (Camunda, Temporal, n8n) | Knowledge peut être appelé comme une étape dans un workflow, ou embarqué dans un agent gouverné qui tourne dans le workflow. Les deux formes marchent. |

Deux patterns couvrent la plupart des intégrations :

- **Knowledge possède la décision** — pour une nouvelle classe de décisions agentiques qui a besoin d'une policy authority indépendante.
- **Knowledge coexiste avec les moteurs de domaine** — certaines décisions restent naturellement dans ODM / FICO / ServiceNow / code custom, et Knowledge gouverne celles qui étaient précédemment gérées par procédures, spreadsheets ou jugement humain.

## S'insérer dans votre infrastructure enterprise

| Couche | Ce avec quoi Knowledge s'intègre |
|---|---|
| **Identity** | Login OIDC pour l'UI back-office. SCIM 2.0 pour le provisioning utilisateurs et groupes. Identity binding pour unifier une personne à travers les mécanismes d'auth. |
| **Observability** | Logs JSON structurés sur chaque service, `X-Request-Id` propagé pour la corrélation, une ligne `Event` par mutation d'entité gouvernée queryable pour audit ou shipping SIEM. |
| **Déploiement** | SaaS (hosté par Asplenz), cloud privé / VPC (dans votre compte, vous contrôlez réseau, backup, résidence), ou on-premise (aucune dépendance externe au runtime au-delà de Postgres et, quand le reasoning est utilisé, votre provider LLM). |
| **Security** | JWKS per-tenant pour vérification JWS, clés API avec `X-API-Key`, clé publique de signature webhook à une URL well-known. |

## Disponible aujourd'hui

| Surface | Status |
|---|---|
| **Serveur MCP Knowledge** | Disponible |
| **Pattern d'intercepteur de tool call MCP** | Exemple de référence dans le monorepo |
| **SDK Python** (`knowledge-runtime`) | Disponible |
| **REST API + JWKS** | Disponible |
| **Intégration Spreadsheet / EUC** | Patterns de bridge scopés par engagement |
| **OIDC + SCIM** | Disponible |
| **TypeScript, Java, adaptateur OpenAI** | [Parlez-nous](/contact) si c'est sur votre chemin |

## Explorer l'API

Trois endpoints font le plus gros du travail dans une intégration d'agent :

- `POST /v1/resolve` - détermine la policy à partir du contexte disponible, retourne ce qui manque encore si incomplet
- `POST /v1/check` - évalue avec un contexte complet, contrat d'input strict
- `POST /v1/approvals` - route les décisions qui exigent une autorité humaine

Référence endpoints complète, schémas de requêtes et réponses à [Référence API](/docs/api-reference/authentication). Spec OpenAPI à `/api/openapi-v3.json`.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Enforcement](/product/enforcement) | Le modèle enveloppe signée et PEP que les chemins d'intégration implémentent |
| [Quickstart : governed tool](/docs/quickstart-governed-tool) | Hands-on de cinq minutes avec le décorateur Python |
| [Knowledge comme serveur MCP](/docs/quickstart-knowledge-mcp) | Wire le serveur MCP Knowledge dans le MCP host de votre agent |
| [Wrapper votre propre serveur MCP](/docs/guides/wrap-your-own-mcp-server-with-enforcement) | Pattern pour gater vos propres tools MCP avec des signed verdicts |
| [Formes de déploiement](/docs/security-compliance/deployment-shapes) | Détails SaaS, VPC, on-premise |
| [Security](/security) | Trust model, inventaire des clés, frontières réseau |
