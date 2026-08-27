---
title: Qu'est-ce que Knowledge ?
description: Deux minutes sur le modèle mental, le vocabulaire et où Knowledge s'insère dans votre stack.
locale: fr
kicker: Docs - Getting started
---

**Knowledge est une infrastructure policy gouvernée pour agents IA de décision.** C'est un petit ensemble de services qui répondent à une question avec un verdict déterministe, auditable, cryptographiquement signable :

> *Étant donné le contexte courant, est-ce que cette policy permet cette action ?*

## Le modèle mental en un paragraphe

Un agent (ou n'importe quel caller) envoie une action proposée et le contexte qu'il a. Knowledge détermine quelles règles s'appliquent, les évalue, et retourne un verdict : `allowed`, `blocked`, `approval_required`, `observe`. Les rules qui ont fired sont citées. L'état de la policy au moment de décision est gelé et signé. Un Policy Enforcement Point en aval vérifie l'enveloppe signée avant que l'action métier ne s'exécute.

> **AI investigates. Knowledge decides. The tool boundary enforces.**

## Ce que veut dire "Knowledge décide"

*Non* : Knowledge prend toute la décision business.

*Oui* : Knowledge fait la **détermination policy** - quelles règles s'appliquent, quel est le verdict déterministe, si une autorisation humaine est requise. L'agent décide de tout le reste (ce qu'il investigue, quelles preuves il rassemble, comment il communique). La frontière du tool est où la décision policy devient un résultat exécutable.

## Vocabulaire

**Policy** - l'agrégat qui porte un ensemble de Rules liées plus un `governance_log` d'actes d'adoption / amendement / renouvellement. Chaque Policy a un owner et une chaîne d'approbateurs.

**Rule** - une directive active avec une sévérité (`absolute_ban`, `hard_block`, `require_approval`, `informative`, `allow`), un scope structuré, et optionnellement des rows de condition (triples `{field, op, threshold}`) qui doivent fire pour que la règle s'applique.

**Target** - une audience nommée qui reçoit des rules. Remplace le concept `Namespace` V2 retiré.

**Consultation** - le record d'audit d'un appel `/check` ou `/resolve`. Fige le contexte envoyé, les versions de rules citées, la règle dominante, le trace de précédence, le scope utilisé, le verdict et le normative hash.

**Verdict** - un parmi `allowed`, `blocked`, `approval_required`, `observe`, `not_covered`. Le résultat que le caller reçoit.

**Signed verdict** - l'enveloppe JWS qui wrappe une décision pour qu'un Policy Enforcement Point en aval puisse la vérifier. Optionnel par déploiement. Voir [Enforcement](/product/enforcement).

**Progressive context** - le mécanisme par lequel un caller envoie ce qu'il a et Knowledge retourne les champs encore nécessaires pour atteindre un verdict. Voir [Progressive context](/product/progressive-context).

**PEP (Policy Enforcement Point)** - le wrapper côté client (décorateur Python, MCP proxy, code custom) qui vérifie l'enveloppe signée avant d'exécuter une action métier. Vit dans votre infrastructure, pas celle de Knowledge.

## Où Knowledge s'insère dans votre stack

Knowledge est designé pour une classe spécifique de décisions :

- Décisions qu'un agent IA prend de façon autonome et qui nécessitent des résultats déterministes gouvernés par règles.
- Décisions qui doivent rester reproductibles pour l'audit de niveau régulateur des années plus tard.
- Décisions qui ont besoin de sémantique d'approbation explicite (`approval_required` comme verdict first-class).
- Décisions dont l'exécution requiert une autorisation cryptographiquement vérifiable à la frontière du tool.

Les catégories adjacentes (orchestration de workflows, scoring déterministe de règles, retrieval sur documents, vérification d'identité) ont leurs propres outils dédiés. Knowledge se place à côté d'elles.

## Les surfaces avec lesquelles vous interagissez

Knowledge expose un petit set de surfaces. Laquelle compte dépend de votre rôle.

| Surface | Qui l'utilise | Pour quoi |
|---|---|---|
| **API Knowledge** | Agents, applications, workflows | Consulter une décision (`/check`, `/resolve`), fetch des consultations, créer des approbations |
| **UI back-office** | Compliance officers, product owners | Authorer policies et règles, review coverage, résoudre des approbations |
| **SDK Python** | Équipes backend | Wrapper des tools avec `@governed_tool` pour que les verdicts signés soient enforced avant exécution |
| **Proxy MCP** | Stacks d'agent tournant MCP | Couche de gouvernance devant un serveur MCP existant, zéro changement de code sur les tools |
| **Endpoint JWKS** | Points d'enforcement | Clés publiques pour vérifier les verdicts signés offline |

Le déploiement sous-jacent (SaaS, cloud privé, on-premise) est opaque aux callers. Les endpoints sont des paths versionnés ; substituez l'URL de base de votre tenant.

## Suite

- **[Quickstart : governed tool en Python](/docs/quickstart-governed-tool)** - 5 minutes.
- **[Quickstart : MCP proxy en 5 minutes](/docs/quickstart-mcp-proxy)** - 5 minutes.
- **[Enforcement](/product/enforcement)** - plus profond sur le modèle d'enveloppe signée.
- **[Progressive context](/product/progressive-context)** - plus profond sur la boucle required_context.
