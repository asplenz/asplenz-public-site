---
title: "Votre agent IA sait récupérer de l'information et appeler des tools. Mais doit-il interpréter votre business policy avant de prendre une action ?"
description: Knowledge est une interface policy gouvernée qu'un agent appelle avant d'agir. Il renvoie soit la décision, soit le contexte encore requis pour l'atteindre, avec les règles qui ont déterminé le résultat.
locale: fr
kicker: Pour les équipes IA
ctaLabel: Voir une intégration de référence
ctaHref: /wealth
---

Au moment où un agent passe de répondre à des questions à prendre des actions métier gouvernées, une nouvelle question apparaît : qui détermine si l'action est autorisée ?

Laisser le LLM interpréter la policy à partir de documents ou de prompts rend cette décision difficile à rendre déterministe, testable et auditable.

**Knowledge donne à l'agent une interface policy gouvernée qu'il peut appeler avant d'agir.**

## Knowledge n'est pas un décideur IA

Knowledge est un **service policy gouverné** que les agents IA - et les logiciels conventionnels - peuvent appeler. Ce n'est pas un produit IA. Il fonctionne à l'identique que l'appelant soit Claude, GPT, un service Java ou une task de workflow.

**Pour les agents, cela compte plus que pour un logiciel conventionnel.** Le chemin de décision d'une application conventionnelle est défini par du code que les reviewers peuvent lire directement ; le chemin de décision d'un agent est défini par le LLM au runtime, précisément là où la frontière policy doit être posée hors du modèle. Knowledge externalise cette frontière pour que l'agent puisse raisonner librement pendant que la décision reste déterministe, versionnée et auditable.

## Le pattern

```agent-toolbelt
input: Intention client (chat, voice, email)
agent: Agent framework (Claude, GPT, LangGraph, MCP, custom)
tool: CRM lookup | Récupérer les faits client
tool: Order / policy lookup | Récupérer les faits objet
tool: Résultat vendor KYC | Récupérer l'état de vérification
tool*: Knowledge /resolve | Décision policy gouvernée
tool: Execute / Slack / Email |
```

## Knowledge donne à l'agent soit la décision, soit ce qu'il a encore besoin de savoir

`/resolve` répond dans l'un de deux états :

- **Complete** - l'agent reçoit le verdict, les règles qui l'ont déterminé, et une référence de consultation pour l'audit.
- **Incomplete** - l'agent reçoit `required_context` : les champs dont les policies applicables ont encore besoin. L'agent obtient ce contexte et rappelle `/resolve`.

**L'agent décide comment obtenir le contexte. Knowledge détermine ce que la policy exige.**

L'agent peut récupérer le contexte manquant depuis un système interne (CRM, product master, vendor de vérification), le dériver d'un document ou d'une conversation existants, ou demander à l'utilisateur si nécessaire. La source qu'il choisit est une décision côté agent, pas une préoccupation de Knowledge.

## Une frontière concrète : avant d'exécuter un remboursement

Un agent de service client se voit demander de rembourser une transaction de 2 000 EUR. Avant d'exécuter, il appelle `/resolve`.

```
POST /knowledge/v1/resolve
{
  "action_type": "refund_execute",
  "context": {
    "customer.tier": { value: "standard", source: "CRM" },
    "transaction.amount_eur": { value: 2000, source: "core_banking" },
    "transaction.age_days": { value: 3, source: "core_banking" }
  }
}
```

**Cas A - Knowledge renvoie `approval_required` avec un verdict signé :**

```
{ operation_status: "complete",
  verdict: "approval_required",
  cited_rules: ["rul-refund-above-threshold"],
  consultation_id: "cns-...",
  signed_verdict: "eyJhbGc..." }
```

Le wrapper du tool refund (Policy Enforcement Point) voit un verdict différent de `allowed` et refuse d'exécuter. L'agent n'a pas besoin d'être digne de confiance pour obéir. L'agent enchaîne en créant une demande d'approbation, informe le client que le cas est en review, et passe le relais au chemin de décision humain. Après approbation, l'agent re-consulte, reçoit un nouveau verdict signé avec `allowed`, et le tool accepte l'appel.

**Cas B - même intention, transaction de 40 EUR, Knowledge renvoie `allowed` :**

```
{ operation_status: "complete",
  verdict: "allowed",
  cited_rules: ["rul-refund-standard"],
  consultation_id: "cns-...",
  signed_verdict: "eyJhbGc..." }
```

Le wrapper du tool refund vérifie le verdict signé (signature, expiry, bindings correspondent à l'appel entrant), puis invoque l'API de remboursement sous-jacente.

L'agent a choisi comment interpréter l'intention, rassembler le contexte et communiquer. Knowledge a déterminé ce que la policy exigeait. Le wrapper du tool est ce qui rend le résultat non contournable.

**La gouvernance est une propriété du tool, pas une instruction à l'agent.** Voir [Enforcement](/enforcement) pour le modèle complet : forme de l'enveloppe signée, chaîne de confiance à quatre acteurs, et chemins d'adoption (décorateur SDK, proxy MCP, PEP custom).

**Ce pattern se généralise.** Partout où un agent doit décider « puis-je exécuter ceci ? » avant d'agir — gestion de refund, change management, approbation de dépense, achats, service request IT, requête RH — le même appel `/resolve` se place à la même frontière. Voir [Approbations](/automate-approvals) pour le use case horizontal.

## Déterministe où ça compte. Probabiliste où ça aide.

Le LLM peut continuer à interpréter l'intention, extraire le contexte, choisir des tools et gérer la conversation. Knowledge gouverne une frontière spécifique : résoudre la business policy explicite contre un contexte explicite.

**Laissez l'agent raisonner. Ne lui faites pas inventer la policy.**

## RAG vs Knowledge

RAG et Knowledge répondent à des questions différentes. La comparaison :

| | RAG | Knowledge |
|---|---|---|
| **Objectif principal** | Retrouver de la connaissance pertinente pour le raisonnement du modèle | Résoudre une business policy explicite |
| **Sortie** | Contexte retrouvé interprété par un modèle | Résultat policy structuré |
| **Sémantique de décision** | Déterminée par le modèle ou l'application qui utilise le contenu retrouvé | Encodée explicitement dans des règles gouvernées |
| **Déterminisme** | L'interprétation du modèle peut varier | Même contexte + même état de policy = même résultat |
| **Focus d'audit** | Quelle information a été retrouvée et générée | Quel état de policy et quelles règles ont déterminé le résultat |
| **Rôle dans l'agent** | Tool de connaissance / raisonnement | Tool de décision gouvernée |

Les deux peuvent coexister dans un agent : RAG pour le retrieval et le support de raisonnement, Knowledge pour la frontière de décision où le résultat doit être déterministe et auditable.

## Trois audiences

| Qui | Ce que Knowledge adresse |
|---|---|
| **Head of AI Product** | Faire passer les agents au-delà de l'assistance en lecture seule tout en gardant les décisions métier gouvernées hors de l'interprétation probabiliste du modèle |
| **VP Engineering / CTO** | Arrêter de s'appuyer sur les prompts et les documents retrouvés comme représentation exécutable de la business policy. Exposer la policy gouvernée à travers une API de décision versionnée à la place |
| **Chief Compliance Officer** | Une frontière de décision définie : règles policy explicites, évaluation déterministe et trace de l'état de policy derrière chaque résultat |
| **CISO / Head of AI Safety** | L'enforcement vit à la frontière du tool, pas dans la discrétion de l'agent. Chaque exécution wrappée porte un artefact d'autorisation cryptographiquement vérifiable citant les règles exactes qui l'ont permise |

## Une couche policy peut servir plus que l'agent

Vous pouvez introduire Knowledge pour un agent et une décision gouvernée. La même couche policy peut ensuite servir des applications, workflows et systèmes opérationnels qui ont besoin des mêmes capacités policy.

```fanout
source: Knowledge | une couche policy
caller: Agent Support
caller: Portail web
caller: App mobile
caller: BPM (batch claims)
caller: File back-office (opérations)
```

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le contrat API, la surface d'audit, le modèle mental |
| [Enforcement](/enforcement) | Verdicts signés, modèle de confiance à quatre acteurs, adoption MCP proxy |
| [Wealth](/wealth) | Script d'intégration de référence montrant un copilote RM appelant Knowledge pour des décisions produits structurés |
| [Design partner](/pilot) | Trois places founding, une décision production, pricing founding-customer |
