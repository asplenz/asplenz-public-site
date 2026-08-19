---
title: "Votre agent IA sait récupérer de l'information et appeler des tools. Mais doit-il interpréter votre business policy avant de prendre une action ?"
description: Knowledge expose /resolve comme un tool que l'agent appelle chaque fois qu'il a besoin d'un verdict déterministe - règles citées, audit rejouable, pas d'hallucination policy.
locale: fr
kicker: Pour les équipes IA
ctaLabel: Voir une intégration de référence
ctaHref: /wealth
---

Au moment où un agent passe de répondre à des questions à prendre des actions - approuver un refund, admettre un client, binder une policy, exécuter un trade - Legal et Compliance freezent le passage en production. Un interpréteur de policy probabiliste n'est pas signable. Chaque action a besoin d'un verdict qui est déterministe, cité, et rejouable des années plus tard.

Knowledge donne à votre agent ce verdict, comme un tool qu'il appelle.

## Le pattern

```agent-toolbelt
input: Intention client (chat, voice, email)
agent: Agent framework (Claude, GPT, LangGraph, MCP, custom)
tool: CRM lookup | Récupérer les faits client
tool: Order / policy lookup | Récupérer les faits objet
tool: Résultat vendor KYC | Récupérer l'état de vérification
tool*: Knowledge /resolve | Autorité policy
tool: Execute / Slack / Email |
```

L'agent reste probabiliste dans sa conversation et son extraction de contexte. Knowledge rend la **frontière de décision** déterministe - verdict, règles citées, état rejouable.

## La collecte progressive permet à l'agent d'arrêter de demander « au cas où »

Quand l'agent n'a pas encore tout le contexte dont Knowledge a besoin, `/resolve` retourne ce qui manque.

```
L'agent appelle /resolve avec un contexte partiel
      { action_type: "sp_offer_eligibility",
        context: { asset_class: "structured_product" } }

Knowledge répond
      { operation_status: "incomplete",
        required_context: ["client.classification",
                           "structured_products.product.complexity"] }

L'agent sait exactement quoi récupérer ensuite
      via le tool CRM, le tool product-master, ou une
      question de suivi à l'utilisateur

L'agent rappelle /resolve avec le contexte enrichi
      → verdict + cited_rules
```

L'agent demande à l'utilisateur uniquement ce que CETTE décision requiert, pas tout ce qu'un template de prompt a pré-décidé.

## RAG vs Knowledge

| | RAG | Knowledge |
|---|---|---|
| Question | « Que dit la policy ? » | « Quelle est la décision policy pour ce contexte explicite ? » |
| Sortie | Texte pertinent + interprétation LLM | Verdict déterministe + règles citées |
| Variance | Le LLM ré-interprète à chaque appel | Même contexte = même sortie |
| Rejouable | Non - l'interprétation dérive | Oui - la clé snapshot reconstitue l'état exact |
| Signable par Compliance | Non | Oui |
| Fit dans un agent | Oui, comme tool de retrieval | Oui, comme tool de décision |

**Nous ne prétendons pas rendre toute votre chaîne agent déterministe.** Le LLM continue à interpréter l'utilisateur, extraire le contexte, choisir quel tool appeler. Knowledge tient une seule frontière spécifique : le moment de « la policy autorise-t-elle cette action ». À cette frontière la réponse est déterministe, citée, rejouable. Tout ce qui est en amont peut rester LLM-driven.

## Trois audiences

| Qui | Ce que Knowledge débloque |
|---|---|
| **Head of AI Product** | Votre agent tourne en prototype ; Legal bloque le passage en production. Ajouter Knowledge comme un tool débloque le taux d'action autonome - le KPI sur lequel votre programme est mesuré |
| **VP Engineering / CTO** | Une policy encodée dans les prompts et les corpus RAG est intestable, non-versionnable, dérive silencieusement. Knowledge expose la policy comme un vrai service avec API REST, RuleVersion versionnées, Consultations rejouables, évaluation déterministe |
| **Chief Compliance Officer** | Pas l'acheteur, mais le stakeholder dont le blocker compte. Consultation + normative_hash + pinning RuleVersion vous donnent la reconstruction d'audit que votre régulateur exige. Le sign-off que vous n'arriviez pas à donner devient possible |

## Land and expand - l'IA est le trigger, Knowledge n'est pas un produit IA

Les prospects entrent souvent chez Knowledge pour sécuriser un agent sur une décision. Six mois plus tard, la même couche policy est appelée par le formulaire web, le BPM, l'app mobile et le back-office - parce que la source policy est la même.

```fanout
source: Knowledge | une policy
caller: Agent Support
caller: Portail web
caller: App mobile
caller: BPM (batch claims)
caller: File back-office (opérations)
```

Knowledge cesse d'être « guardrail pour l'agent » et devient la couche policy partagée du tenant. L'IA était le buying trigger. Knowledge n'est pas un produit IA - il fonctionne à l'identique que l'appelant soit Claude ou un service Java.

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le contrat API, la surface d'audit, le modèle mental |
| [Wealth](/wealth) | Script d'intégration de référence montrant un copilote RM appelant Knowledge pour 4 décisions canoniques de produits structurés |
| [Pilote](/pilot) | Commencez avec un agent, une décision, mode shadow pendant 4-8 semaines. Mesurez l'accord de décision contre votre logique actuelle |
