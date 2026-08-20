---
title: KYC / KYB - gouverner la décision d'admission sans remplacer votre stack de vérification
description: Knowledge gouverne les policies d'admission autour de votre stack de vérification existant. Il détermine ce que la policy exige ; vos applications, agents et vendors déterminent comment l'obtenir.
locale: fr
kicker: Knowledge pour le KYC / KYB
ctaLabel: Devenir design partner
ctaHref: /pilot
---

L'onboarding est souvent décrit comme « KYC » comme si c'était une seule chose. Ce n'en est pas une. C'est un stack.

| Couche | Ce qu'elle fait |
|---|---|
| **Collecter** | Ce que le client doit fournir (quels champs, quels documents, dans quel ordre) |
| **Vérifier** | Que ce qu'il a fourni est valide (identité, adresse, screening, PEP, sanctions) |
| **Décider** | De l'admettre (résultat de vérification + règles firme + policy juridictionnelle + policy produit + policy commerciale + exceptions) |
| **Orchestrer** | Le flux (retries, escalations, callbacks, SLAs) |

Votre plateforme de vérification ou de compliance peut déjà couvrir des parties des quatre couches. La frontière devient intéressante quand la décision d'admission dépend de policies qui vont au-delà du domaine de vérification du vendor - juridiction, éligibilité produit, appétit au risque, policy commerciale ou exceptions spécifiques à la firme.

**Knowledge gouverne cette couche de décision.**

## Ce que Knowledge apporte à l'onboarding

**Gouverne la décision d'admission composite.** Combine le résultat de vérification de votre vendor avec les policies de votre firme (éligibilité produit, restrictions juridictionnelles, règles commerciales, matrices d'exceptions). Retourne un verdict déterministe identifiant les règles qui l'ont déterminé.

**Détermine quel contexte est requis.** À mesure que le cas se résout, Knowledge indique à l'appelant onboarding quelle information manque encore pour la décision en cours, plutôt qu'encoder chaque exigence d'information possible d'entrée.

**Préserve le contexte de décision.** Chaque consultation enregistre l'état de la policy et les règles derrière le résultat, fournissant une trace reproductible pour review ultérieure.

## Ce que Knowledge ne fait PAS

| Pas ça | Pourquoi |
|---|---|
| **Pas d'IDV** | Knowledge ne vérifie pas l'identité, ne fait pas d'OCR sur documents, ne matche pas de visages, ne fait pas de screening de sanctions, ne consulte pas de bases PEP. Votre vendor existant est meilleur pour ça |
| **Pas le workflow de vérification** | Knowledge n'orchestre pas les retries et callbacks entre votre UI et le vendor IDV. Votre outil de workflow (ou le workflow intégré du vendor IDV) gère ça |
| **Pas la surface de collecte** | Knowledge gouverne les exigences d'information derrière la collecte et la décision elle-même ; votre application ou agent reste responsable de la collecte |
| **Pas un remplacement de RFP KYC** | Si votre problème est de choisir entre vendors IDV, Knowledge n'est pas cette décision. Choisissez votre vendor IDV pour sa qualité de vérification |

## Knowledge détermine ce que la policy exige. Votre stack existant détermine comment l'obtenir.

L'onboarding traditionnel encode chaque exigence d'information possible d'entrée, puis cache les champs avec de la logique conditionnelle. Knowledge inverse ça : l'appelant envoie ce qu'il a, et Knowledge lui dit ce qui manque encore pour que les policies applicables se résolvent.

Une admission KYB pour un client entreprise, dépliée :

**Étape 1.** L'appelant commence avec le peu qu'il sait.

```
context: {
  "jurisdiction": { value: "FR", source: "caller" }
}
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

**Étape 2.** Le client est une entreprise. L'appelant rappelle `/resolve`.

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
    { field: "legal_form",
      reason: "required by rul-kyb-fr-business",
      type: "enum",
      allowed_values: ["SAS", "SARL", "SA", "..."] },
    { field: "beneficial_ownership_structure",
      reason: "required by rul-kyb-fr-business",
      type: "enum",
      allowed_values: ["simple", "complex"] }
  ] }
```

**Étape 3.** L'appelant ajoute la forme juridique et la structure d'actionnariat. Plusieurs branches de policy qui auraient concerné des particuliers ou des structures complexes deviennent maintenant sans objet.

```
context: {
  ...,
  "legal_form": { value: "SAS", source: "company_registry" },
  "beneficial_ownership_structure": { value: "simple", source: "company_registry" }
}
```

Knowledge répond :

```
{ operation_status: "incomplete",
  required_context: [
    { field: "beneficial_owner_identity",
      reason: "required by rul-kyb-fr-sas-simple-owner",
      type: "string",
      source_requirement: "verified" }
  ] }
```

**Étape 4.** Le fournisseur de vérification d'identité retourne son résultat. L'appelant rappelle `/resolve`.

```
context: {
  ...,
  "beneficial_owner_identity": {
    value: "verified", source: "IDV_vendor", verification_status: "verified"
  },
  "pep_match": { value: false, source: "screening_vendor" }
}
```

Knowledge répond :

```
{ operation_status: "complete",
  verdict: "allowed",
  cited_rules: ["rul-kyb-fr-sas-simple-owner-verified"],
  consultation_id: "cns-..." }
```

L'appelant n'a pas besoin d'encoder tout l'arbre de dépendances. À mesure que le contexte arrive, Knowledge détermine quelles branches de policy restent pertinentes et quelle information additionnelle est réellement nécessaire pour résoudre la décision.

## « Required » ne veut pas dire « demander au client »

Knowledge identifie le contexte requis pour la décision. L'appelant décide où l'obtenir.

| Contexte requis | Source typique |
|---|---|
| Pays du client | Dossier client existant, CRM |
| Statut PEP | Vendor de screening, API sanctions |
| Activité business | Demander au client, extraire des documents |
| Relation existante | Système core banking ou de compte |
| Vérification d'identité | Vendor IDV |

**Votre système d'onboarding doit décider comment collecter l'information. Il ne devrait pas avoir à savoir pourquoi la policy l'exige.**

## Ce que ça change pour un onboarding piloté par IA

Un agent d'onboarding (chat, voice, in-app) appelle Knowledge comme un tool. À mesure que `required_context` arrive, l'agent décide s'il va le récupérer depuis un système interne, appeler un vendor de vérification, ou demander au client directement.

L'agent choisit **comment** collecter l'information. Knowledge détermine **ce que** la policy exige. C'est le garde-fou qui permet à un agent probabiliste de prendre des actions au-dessus d'une policy déterministe.

## Où Knowledge s'insère dans un stack KYC typique

Selon ce que votre stack existant possède déjà, Knowledge s'insère de façons différentes.

| Votre setup actuel | Où Knowledge se place |
|---|---|
| **Vendor IDV possède vérifier + workflow, vous possédez l'admission** | Knowledge expose la décision d'admission au parcours d'onboarding. Il peut être consulté progressivement à mesure que le contexte est collecté et à nouveau quand les résultats de vérification arrivent |
| **Plateforme compliance possède vérification + workflow + rules end-to-end** | Knowledge ne fit pas à la couche KYC. Entrée possible au-dessus : la décision d'admission composite qui combine verdict KYC + éligibilité produit + matrice juridictionnelle + exceptions commerciales - une décision que la plateforme compliance ne possède pas |
| **Vendor IDV verification-only, votre plateforme possède collecte + orchestration + décision** | Knowledge gouverne la décision ; votre plateforme continue à posséder l'UI et l'orchestration |
| **Logique d'admission legacy custom patchée sur des années** | Knowledge se place en overlay, ajoute de nouvelles règles ou gouverne des existantes sans toucher au code legacy. Shadow-first est commun - valider la parité avant de passer primary |

[Voir l'analyse complète de stack-fit](/stack)

## Résolution progressive : ce qui se mesure

Pour les processus où beaucoup d'information est actuellement collectée « au cas où », la capacité à demander de l'information seulement quand elle devient pertinente crée une opportunité de réduire la collecte inutile et les demandes de suivi. L'impact sur le taux de complétion et le time-to-onboard se mesure pendant un engagement design-partner, aux côtés de l'accord de décision et du temps de reconstruction d'audit.

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le modèle mental, le contrat API, la surface d'audit |
| [Fonctionne avec votre stack](/stack) | Comment Knowledge s'insère avec vendors IDV, plateformes compliance, builds custom et outils BPM |
| [Agents IA](/ai-agents) | Pour les assistants d'onboarding pilotés par IA qui doivent consulter une source policy déterministe |
| [Design partner](/pilot) | Trois places founding, une décision production, pricing founding-customer |
