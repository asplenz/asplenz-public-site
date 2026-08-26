---
title: Produit
description: Les agents IA peuvent investiguer, rassembler l'information et proposer une action. Quand la décision est gouvernée par des règles métier ou compliance, ces règles ne devraient pas vivre à l'intérieur du modèle. Knowledge leur donne une policy authority indépendante que l'agent consulte, et émet une autorisation que la frontière du tool peut faire respecter.
locale: fr
kicker: Produit
---

Les agents IA peuvent investiguer un cas, rassembler l'information et proposer une action. Mais quand la décision est gouvernée par des règles métier ou compliance, ces règles ne devraient pas avoir à vivre à l'intérieur du modèle.

Knowledge donne à ces décisions une policy authority indépendante. L'agent rassemble les faits. Knowledge évalue les règles applicables, détermine quand plus de contexte est nécessaire, retourne une décision déterministe, et peut émettre une autorisation que la frontière d'exécution peut faire respecter.

## Comment fonctionne Knowledge

```lifecycle
step: L'agent reçoit une tâche
step: Rassemble le contexte disponible
step: Knowledge évalue la policy
branch-left-label: Contexte manquant
branch-left-1: Knowledge retourne les champs requis avec schema
branch-left-2: L'agent récupère depuis CRM, vendor, extraction LLM ou utilisateur
branch-left-loop: Retour à Knowledge
branch-right-label: Décision
branch-right-1: allowed  /  approval required  /  blocked
branch-right-2: Enveloppe d'autorisation signée
branch-right-3: La frontière du tool vérifie signature et bindings
end: L'action s'exécute
```

La boucle est le produit. Chaque étape est conçue pour que l'agent fasse ce dans quoi il est bon (investiguer, rassembler, orchestrer) pendant que les règles restent dans une couche gouvernée que la fonction compliance peut owner.

## Ce que fait chaque partie de la boucle

Quatre capabilities matérialisent la boucle. Chacune a sa propre page ; cette section est la carte.

**Progressive context** - la réponse à *contexte manquant ?* Knowledge dit au caller quels champs les règles applicables exigent encore, avec schema et valeurs autorisées. Le caller les acquiert (depuis CRM, vendor, extraction LLM, ou l'utilisateur) et re-consulte, jusqu'à ce qu'un verdict puisse être atteint. Les policies peuvent changer sans changer chaque caller. Voir [Progressive context](/product/progressive-context).

**Le verdict lui-même** - l'outcome déterministe (`allowed`, `approval_required`, `blocked`). Produit à partir de la policy encodée, pas de l'interprétation du LLM. Chaque règle qui fire est citée par la `RuleVersion` exacte en vigueur au moment de décision. Voir [Verdicts et decisions](/docs/concepts/verdicts-and-decisions) pour l'échelle de severity et les tie-breakers de précédence.

**Enforcement** - Knowledge signe chaque verdict comme une enveloppe JWS liant l'opération exacte autorisée. Un Policy Enforcement Point (décorateur SDK, proxy MCP, code custom) vérifie la signature et checke les bindings avant que le tool ne s'exécute. Un agent qui hallucine ou un bug qui skip le check ne peut pas exécuter l'action sous-jacente, parce que la frontière refuse sans verdict signé matchant. Voir [Enforcement](/product/enforcement).

**Auditability** - chaque consultation écrit un record Consultation qui fige les versions de règles exactes citées, la trace de précédence, les overrides appliqués, et le normative hash. Un régulateur demandant *« montrez-moi pourquoi cette décision a été prise le 2026-03-15 »* est un seul appel API. Voir [Auditability](/product/auditability).

**Integrations** - les surfaces à travers lesquelles agents, tools et systèmes existants se connectent à Knowledge : proxy MCP, SDK Python (`knowledge-runtime`), API REST, endpoint JWKS par tenant, webhooks, SSO / SCIM. Voir [Integrations](/product/integrations).

## Où Knowledge s'insère

**Knowledge ajoute une couche de policy gouvernée pour les décisions rule-driven que les agents IA doivent prendre.** Il fonctionne avec les frameworks d'agents, systèmes enterprise et infrastructure de décision que vous utilisez déjà.

| Fonctionne avec | Comment Knowledge s'insère |
|---|---|
| **Votre agent stack** | Utilisez LangGraph, MCP, un orchestrator custom ou votre plateforme d'agent existante. Knowledge fournit la policy authority indépendante pour les décisions gouvernées par des règles métier. |
| **Votre processus de formalisation de policy** | Les experts métier et équipes d'implémentation peuvent amener les règles formalisées dans Knowledge via CSV, Excel, DMN ou API, puis les gouverner, tester et faire évoluer indépendamment de l'agent. |
| **Vos systèmes de décision existants** | Gardez FICO, les rules engines existants et les plateformes spécialisées là où ils marchent déjà. Knowledge vous donne un chemin pour les décisions rule-governed encore gérées à travers procédures, spreadsheets et expertise humaine. |

## Amener Knowledge dans votre stack

Trois points d'entrée naturels selon qui fait le travail.

| Si vous êtes | Commencer ici |
|---|---|
| **En train de construire des agents pour des clients enterprise** | [Construire des agents rule-governed](/solutions/build-rule-governed-agents) - l'angle intégrateur : ce que vous arrêtez de réinventer à chaque engagement, l'argument que vous ajoutez à votre propre pitch, l'effet plateforme à travers votre book of business. |
| **L'équipe enterprise déployant un agent** | [Design partner](/pilot) - engagement co-delivery : une décision production, faite tourner en shadow mode contre votre process existant, convertie en contrat founding-customer si les chiffres tombent. |
| **À la recherche de la surface technique** | [Docs](/docs) - quickstarts, référence API, setup proxy MCP, deep dives security et compliance. |

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Enforcement](/product/enforcement) | L'enveloppe signée et le modèle PEP, chaîne de confiance à quatre acteurs, chemins d'adoption |
| [Progressive context](/product/progressive-context) | La boucle `/resolve`, l'inversion de dépendance, pourquoi les policies changent sans toucher au caller |
| [Auditability](/product/auditability) | Consultation, RuleVersion, trace de précédence, replay cold-storage |
| [Integrations](/product/integrations) | Proxy MCP, SDK Python, REST, JWKS, formes de déploiement |
| [Docs](/docs) | Référence implementation-level |
| [Solutions](/solutions/build-rule-governed-agents) | Pourquoi ça compte pour quelqu'un dans votre rôle |
