---
title: Demandez moins. Décidez avec ce qui compte vraiment.
description: Ne collectez que l'information dont chaque décision a réellement besoin. La résolution progressive remplace « demander tout au cas où ».
locale: fr
kicker: Pour les parcours customer-facing
ctaLabel: Devenir design partner
ctaHref: /pilot
---

La plupart des parcours customer-facing collectent l'information avant de savoir ce que la décision va réellement exiger. Le formulaire demande tout ce qu'une policy POURRAIT requérir, au prix de la longueur, de la friction et de l'abandon. Seule une fraction des champs collectés change le résultat pour un client donné.

**Knowledge inverse le pattern.** L'appelant envoie le contexte qu'il a, et Knowledge lui dit ce qui est encore requis pour résoudre la décision courante. À mesure que le parcours progresse, les branches de policy non pertinentes disparaissent et seuls les champs qui comptent réellement pour ce client sont demandés.

## Les questions de screening

Deux questions que nous posons tôt dans une conversation design-partner :

- **Quel est le taux de complétion actuel du parcours, et où se produisent la plupart des abandons ?**
- **Sur les champs que vous collectez aujourd'hui, quel pourcentage change réellement la décision pour un client donné ?**

La première expose le coût de friction. La seconde expose le gaspillage de collecte. Les deux sont adressables par le même mécanisme.

## Deux résultats économiques

| Résultat | Ce que ça veut dire |
|---|---|
| **Friction réduite** | Les clients ne voient que les champs dont les policies applicables ont réellement besoin pour leur situation. Moins de questions inutiles, moins de fatigue de formulaire, taux de complétion supérieur à même strictness de policy |
| **Time-to-decision réduit** | Pas de demandes de suivi pour de l'information qui s'est révélée sans impact, pas de rework quand un changement de règle rend la collecte d'hier insuffisante. Le parcours se termine dès que la policy peut résoudre |

Le client ne voit jamais Knowledge. Il voit moins de questions, plus pertinentes.

## Le mécanisme

Chaque étape du parcours est un appel `/resolve` avec le contexte collecté jusqu'ici :

1. L'appelant envoie ce qu'il sait déjà.
2. Knowledge retourne soit le verdict (si les policies applicables peuvent résoudre avec ce qu'il y a), soit `required_context` — les champs spécifiques encore requis.
3. L'appelant obtient ces champs, puis rappelle `/resolve`.
4. À mesure que le contexte devient plus spécifique, les branches de policy qui auraient concerné d'autres situations clients deviennent sans objet. Le `required_context` restant rétrécit en conséquence.

L'arbre de dépendances vit dans Knowledge. L'appelant n'a jamais à encoder quels champs sont nécessaires sous quelles conditions.

## Un exemple concret : ouverture de compte business

Un client small-business commence l'ouverture d'un compte. L'UI d'onboarding ne connaît que la juridiction pour l'instant.

**Appel 1.**

```
context: { "jurisdiction": { value: "FR", source: "caller" } }
```

Knowledge répond :

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client_type",
      reason: "required by rul-kyb-fr-client-type",
      type: "enum",
      allowed_values: ["individual", "business"] }
  ] }
```

L'UI demande : *particulier ou entreprise ?* Le client répond entreprise.

**Appel 2.**

```
context: {
  ...,
  "client_type": { value: "business", source: "caller" }
}
```

Knowledge répond :

```
{ operation_status: "incomplete",
  required_context: [
    { field: "legal_form", ... },
    { field: "beneficial_ownership_structure", ... }
  ] }
```

Remarquez ce qui N'EST PAS revenu : rien sur les chemins onboarding-individuel (checks PEP calibrés pour comptes personnels, source-of-wealth pour high-net-worth individuals, etc.). Ces branches ne sont plus applicables, leurs champs requis ne sont plus demandés.

**Appel 3.** Le client fournit SAS + actionnariat simple. Le pool de règles applicables se réduit encore. Knowledge n'identifie que ce dont ces règles spécifiques ont encore besoin : identité du bénéficiaire effectif.

L'UI n'a jamais demandé de pyramide d'actionnaires parce que la policy pour une SAS avec actionnariat simple ne l'exige pas. Un client avec une structure holding complexe aurait vu ces questions à la place.

## « Required » ne veut pas dire « demander au client »

Knowledge identifie le contexte requis pour la décision. L'appelant décide où l'obtenir.

| D'où le contexte peut venir |
|---|
| Déjà dans le dossier client, le CRM ou le compte existant |
| Retourné par un vendor existant de vérification, screening ou credit-bureau |
| Extrait par un assistant IA depuis des documents ou une conversation |
| Récupéré d'un registre public (registre des sociétés, sanctions) |
| Réellement inconnu — demander au client |

**Knowledge détermine ce que la policy exige. L'appelant détermine comment l'obtenir.** Pour la plupart des champs, demander au client est le dernier recours, pas le premier.

## Où ça s'applique

Le même mécanisme s'applique à tout parcours customer-facing qui collecte de l'information avant de décider :

| Parcours | L'information souvent collectée trop tôt |
|---|---|
| **Onboarding KYC / KYB** | Documents, structure d'actionnariat, source-of-funds — dont une grande partie non nécessaire pour la décision d'admission réelle de ce client |
| **Demande de prêt ou de crédit** | Financials complets collectés d'entrée alors que la policy pourrait pré-qualifier avec une vue partielle |
| **Demande d'assurance** (auto, habitation, vie, professionnelle) | Questions d'underwriting complètes posées quand un profil de risque plus simple s'applique |
| **Ouverture de compte** (retail, business, brokerage) | Disclosures spécifiques produit demandées avant que le mix produit soit même choisi |
| **Onboarding marchand** (paiements, marketplace) | Documents business requis indépendamment de la catégorie ou du volume du marchand |
| **Éligibilité subscription** (produits régulés, offres professional-only) | Questions de suitability posées avant que l'offre soit même montrée au client |

Le meilleur fit est un parcours où l'équation **taux de complétion × valeur client × coût marginal de chaque question additionnelle × coût d'un client perdu** est significative, et où le formulaire actuel pose le même ensemble de questions à des clients dont les décisions requièrent en fait des sous-ensembles différents.

## Forme de déploiement

Deux patterns d'adoption fittent les parcours customer-facing (voir [Fonctionne avec votre stack](/stack) pour le tableau complet) :

| Pattern | Où Knowledge se place |
|---|---|
| **Primary** | Le parcours est construit greenfield autour de `/resolve`. Chaque étape appelle Knowledge pour déterminer quel contexte la policy exige encore. Le parcours décide de le récupérer depuis une source existante ou de le demander au client |
| **Overlay** | Un formulaire ou funnel existant continue de tourner. Knowledge est appelé à chaque transition pour déterminer si le contexte courant suffit à résoudre, ou si le champ suivant est réellement nécessaire. Les champs que la policy n'exige pas peuvent être cachés ou sautés |

Les deux préservent l'architecture d'onboarding existante (l'UI, les analytics de funnel, les vendors appelés pour la vérification).

## À quoi ressemble un engagement design-partner ici

Un scope borné — un parcours spécifique dans une ligne de produits spécifique — modélisé avec vos policy owners, tournant à côté de l'onboarding actuel pendant huit semaines. Ce qu'on mesure ensemble à la fin :

- **Ratio de réduction de champs** — combien de champs le formulaire actuel demande vs combien étaient réellement nécessaires pour résoudre les décisions dans l'échantillon.
- **Delta time-to-onboard** — temps médian de complétion sur le nouveau parcours vs l'actuel.
- **Uplift de taux de complétion** — clients qui atteignent une décision vs taux d'abandon actuel à chaque étape.
- **Demandes de suivi évitées** — cas où le processus actuel aurait re-contacté le client pour un champ que le nouveau soit a récupéré depuis un système, soit n'a pas exigé du tout.

Voir [Design partner](/pilot) pour comment l'engagement est scopé.

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [KYC / KYB](/kyc) | Un vertical concret où ce pattern s'applique aux décisions d'admission |
| [Comment fonctionne Knowledge](/how-it-works) | Le contrat `/resolve` derrière le `required_context` qui rétrécit |
| [Revues & approbations](/automate-approvals) | Le sibling interne (approbations) du même mécanisme |
| [Design partner](/pilot) | Trois places founding, un parcours production, pricing founding-customer |
