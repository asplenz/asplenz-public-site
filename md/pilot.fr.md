---
title: Commencez par une décision, pas par une transformation.
description: Un pilote Knowledge modélise une décision douloureuse, la fait tourner à côté de votre système existant pendant 4–8 semaines, et mesure le résultat contre des critères convenus. Petit ticket, petit scope, preuve réelle avant commit.
locale: fr
kicker: Comment on démarre
ctaLabel: Réserver un scoping call
ctaHref: mailto:contact@asplenz.com
---

Acheter Knowledge ne signifie pas s'engager sur une migration plateforme pluriannuelle. Chaque premier client démarre par un pilote - une décision, un scope, 4-8 semaines, résultat mesurable. Étendez seulement si les chiffres le justifient.

## Le pilote en cinq étapes

**1. Choisissez une décision douloureuse.**
Celle qui est escaladée le plus souvent, ou celle qu'une nouvelle règle va exiger sous peu, ou celle où la prep d'audit est un cauchemar. Une décision. Pas un domaine, pas une ligne produits - une décision spécifique que le compliance officer réécrirait demain s'il pouvait.

**2. Modélisez-la dans Knowledge.**
Nous travaillons avec votre équipe pour modéliser la décision : le scope schema (quels champs comptent), les règles (avec vos seuils existants), la forme d'audit. Si un pack vertical la couvre déjà (Wealth produits structurés, KYC onboarding), nous installons le pack et calibrons. Sinon, nous autorons les règles à partir de votre logique actuelle.

**3. Faites-la tourner à côté de votre système existant.**
Mode shadow : chaque décision réelle que votre système existant prend est aussi calculée par Knowledge en parallèle. Aucun impact production. Les verdicts sont comparés, les divergences loggées. Alternativement : mode gate sur un sous-ensemble du trafic, si vous êtes à l'aise avec un déploiement live contrôlé.

**4. Définissez les critères de succès mesurables d'entrée.**
Avant le début du pilote, nous convenons ensemble des chiffres qui justifieraient l'extension. Critères typiques :

| Critère | Ce qu'il mesure |
|---|---|
| **Accord de décision** | Knowledge et votre système existant sont d'accord sur X% des cas. Divergences tracées à (a) Knowledge oubliant une règle, (b) bug legacy, ou (c) ambiguïté légitime |
| **Réduction de review manuelle** | Pour les cas où Knowledge marque des verdicts déterministes complets, quel % pourrait sauter la review manuelle actuelle ? |
| **Effort d'implémentation / de changement** | Délai entre « compliance demande une nouvelle règle » et « règle live dans Knowledge » vs même délai dans votre système existant |
| **Précision du required-context** | Pour les flux type onboarding, la collecte progressive de Knowledge pose-t-elle moins de questions que votre formulaire actuel ? |
| **Reproductibilité d'audit** | Knowledge peut-il reconstruire une décision spécifique de la période pilote avec l'état exact des règles ? (Oui by design ; la mesure est contre le temps que prendrait votre système actuel) |

**5. Décidez d'étendre.**
Si les chiffres atteignent les critères, étendez : plus de décisions, plus d'appelants, plus de votre stack routé à travers Knowledge. Sinon le pilote se termine proprement - nous vous avons coûté quelques semaines de travail scopé, aucun engagement continu.

## Ce que nous vous demandons

| Quoi | Détail |
|---|---|
| **Un propriétaire business nommé** | Qui se soucie de la décision pilotée - typiquement le compliance officer, le head d'une business line, ou le head of AI product selon le pain |
| **Un contact technique nommé** | Qui peut plomber Knowledge dans l'appelant (BPM, service, agent, formulaire). Nous faisons le gros du travail mais avons besoin d'un allié interne |
| **Accès à un vrai flux de décision** | Soit historique (replay contre les cas du mois dernier) soit live (mode shadow sur le trafic production) |
| **Critères de succès** | Les chiffres que vous voudriez mesurer, convenus avant le début du pilote |

## Ce que nous fournissons

| Quoi | Détail |
|---|---|
| **Instance Knowledge opérationnelle** | Déployée dans votre environnement (SaaS, VPC, ou on-premise selon vos exigences) |
| **Installation et calibration du pack** | Si la décision pilote est couverte par un pack vertical existant, nous installons et calibrons ; sinon nous autorons les règles avec votre équipe compliance |
| **Support d'intégration** | Plomberie de Knowledge dans votre appelant (BPM, service, agent, formulaire) |
| **Réunions de review hebdomadaires** | Parcours des divergences, ajustement des règles, tuning des critères de succès si nécessaire |
| **Rapport final** | Mesuré contre les critères convenus, avec une recommandation sur le scope d'extension |

## Pricing

Le pricing du pilote est scopé par engagement. Nous travaillons avec vous d'entrée pour définir le scope, les critères de succès, et le prix - pas de surprises. Ordre de grandeur : un pilote sur une décision unique tourne dans le bas de la fourchette à cinq chiffres, avec une sortie propre si les critères ne sont pas atteints.

Réservez un scoping call pour discuter de votre pain spécifique et obtenir une proposition scopée.

[[cta]Réserver un scoping call](mailto:contact@asplenz.com)
