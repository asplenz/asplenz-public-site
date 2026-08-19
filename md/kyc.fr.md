---
title: KYC / KYB - gouverner la couche de décision, pas remplacer l'IDV
description: Knowledge se place au-dessus de votre vendor de vérification d'identité. Il tient la décision d'admission composite - résultat de vérification, règles métier, policy juridictionnelle, exigences spécifiques à la firme. Collecte progressive remplace « demander tout au cas où ».
locale: fr
kicker: Preuve verticale - KYC / KYB
ctaLabel: Réserver un scoping call
ctaHref: /pilot
---

L'onboarding est souvent décrit comme « KYC » comme si c'était une seule chose. Ce n'en est pas une. C'est un stack.

| Couche | Ce qu'elle fait |
|---|---|
| **Collecter** | Ce que le client doit fournir (quels champs, quels documents, dans quel ordre) |
| **Vérifier** | Que ce qu'il a fourni est valide (identité, adresse, screening, PEP, sanctions) |
| **Décider** | De l'admettre (résultat de vérification + règles firme + policy juridictionnelle + policy produit + policy commerciale + exceptions) |
| **Orchestrer** | Le flux (retries, escalations, callbacks, SLAs) |

Votre vendor IDV fait un excellent boulot sur **vérifier**. Certains couvrent aussi des parties de **collecter** et **orchestrer**. Très peu possèdent **décider** - la logique d'admission composite qui combine le résultat de vérification avec vos policies firme. Ce composite vit typiquement dans du code, dans les gateways de workflow, ou dans des fichiers Excel d'exceptions éparpillés.

Knowledge se place dans la boîte **décider**.

## Ce que Knowledge apporte à l'onboarding

**Gouverne la décision d'admission composite.** Combine le résultat de vérification de votre vendor avec les policies de votre firme (éligibilité produit, restrictions juridictionnelles, règles commerciales, matrices d'exceptions). Retourne un verdict déterministe unique avec règles citées.

**Active la collecte progressive.** Le moteur indique à votre UI d'onboarding quel champ est nécessaire ensuite pour la décision en cours - pas tout ce qu'un form designer a pré-décidé « au cas où ». Votre onboarding demande des informations qui affectent réellement le chemin de décision de ce client spécifique.

**Rejoue chaque décision.** Le régulateur demande sur une admission d'il y a 2 ans. Une seule requête reconstitue l'état exact de la policy, la règle citée, et le résultat de vérification à ce moment-là.

## Ce que Knowledge ne fait PAS

| Pas ça | Pourquoi |
|---|---|
| **Pas d'IDV** | Knowledge ne vérifie pas l'identité, ne fait pas d'OCR sur documents, ne matche pas de visages, ne fait pas de screening de sanctions, ne consulte pas de bases PEP. Votre vendor existant est meilleur pour ça |
| **Pas le workflow de vérification** | Knowledge n'orchestre pas les retries et callbacks entre votre UI et le vendor IDV. Votre outil de workflow (ou le workflow intégré du vendor IDV) gère ça |
| **Pas un remplacement de RFP KYC** | Si votre problème est de choisir entre vendors IDV, Knowledge n'est pas cette décision - choisissez votre vendor IDV pour sa qualité de vérification |

## Où Knowledge s'insère dans un stack KYC typique

Selon ce que votre vendor existant possède déjà, Knowledge s'insère de façons différentes.

| Votre setup actuel | Où Knowledge se place |
|---|---|
| **Vendor IDV possède vérifier + workflow, vous possédez l'admission** | Knowledge tient la décision d'admission comme un endpoint REST que votre UI d'onboarding appelle après le retour du vendor IDV. La collecte progressive demande le champ suivant selon le verdict partiel courant |
| **Plateforme compliance possède vérification + workflow + rules end-to-end** | Knowledge ne fit pas à la couche KYC. Entrée possible au-dessus : la décision d'admission composite qui combine verdict KYC + éligibilité produit + matrice juridictionnelle + exceptions commerciales - une décision que la plateforme compliance ne possède pas |
| **Vendor IDV verification-only, votre plateforme possède collecte + orchestration + décision** | Knowledge tient les boîtes collecter + décider ; votre plateforme continue à posséder l'UI et l'orchestration |
| **Logique d'admission legacy custom patchée sur des années** | Knowledge se place en overlay, ajoute de nouvelles règles ou gouverne des existantes sans toucher au code legacy. Shadow-first est commun - valider la parité avant de passer primary |

[Voir l'analyse complète de stack-fit](/stack)

## Le pattern de collecte progressive

Les formulaires traditionnels demandent tout d'entrée. Knowledge inverse ça : l'appelant envoie le contexte minimal qu'il a, Knowledge retourne `required_context` qui dit ce qui suit.

Flux simplifié :

```
1. Le client démarre l'onboarding - jurisdiction: FR
   L'appelant envoie {jurisdiction: FR} à /resolve
   Knowledge retourne : required_context = [client_type]

2. L'appelant demande au client : êtes-vous un particulier ou une entreprise ?
   Le client répond : entreprise
   L'appelant envoie {jurisdiction: FR, client_type: business}
   Knowledge retourne : required_context = [beneficial_owner_structure, revenue_band]

3. Et ainsi de suite, jusqu'à ce que Knowledge retourne un verdict complet.
```

Chaque client ne voit que les champs qui comptent pour SA situation. Moins de questions, taux de complétion plus élevé, et - critique - aucun ticket support « pourquoi dois-je fournir ça » parce qu'on a demandé « au cas où ».

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le modèle mental, le contrat API, la surface d'audit |
| [Fonctionne avec votre stack](/stack) | Comment Knowledge s'insère avec vendors IDV, plateformes compliance, builds custom et outils BPM |
| [Agents IA](/ai-agents) | Pour les assistants d'onboarding pilotés par IA qui doivent consulter une source policy déterministe |
| [Pilote](/pilot) | Modélisez une décision d'admission, faites-la tourner en shadow pendant 4-8 semaines contre votre logique existante |
