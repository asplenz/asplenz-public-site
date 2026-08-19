---
title: Asplenz Knowledge - la couche de policy gouvernée pour vos applications, workflows et agents IA
description: Quand la logique de conformité se disperse dans les workflows, applications et fichiers Excel, chaque changement de policy devient plus coûteux à maintenir, tester et auditer. Knowledge centralise cette logique de décision dans une couche gouvernée - sans remplacer votre stack.
locale: fr

hero:
  kicker: Couche de policy pour vos décisions de conformité
  headline: Quand la logique de conformité se disperse dans les workflows, applications et fichiers Excel,
  headlineItalic: chaque changement de policy devient plus coûteux à maintenir, tester et auditer.
  sub: Knowledge centralise cette logique de décision dans une couche gouvernée - sans remplacer votre stack existant. Vos applications, workflows et agents IA peuvent demander à Knowledge quelles informations sont requises et quelle décision s'applique.
  ctaPrimary: Prendre 30 minutes de conversation
  ctaPrimaryHref: /pilot
  ctaSecondary: Voir comment ça marche
  ctaSecondaryHref: /how-it-works

problem:
  kicker: ""
  title: "Ça vous parle ?"
  items:
    - Changer une policy signifie retrouver chaque workflow, application et fichier Excel où la logique a été copiée.
    - Votre onboarding demande des informations « au cas où » - même quand la plupart n'affectent jamais la décision.
    - La moitié de votre file de review contient des cas qu'une règle aurait pu trancher.
    - Un régulateur vous demande de reproduire une décision d'il y a 18 mois, et reconstruire la version exacte de la policy prend des semaines.
    - Votre agent IA fonctionne - jusqu'à ce que Legal bloque le passage aux actions, parce qu'un interpréteur de policy probabiliste n'est pas signable.

change:
  kicker: Ce que Knowledge change
  title: Une couche de policy gouvernée. Plusieurs appelants.
  sub: Vos applications, workflows et agents IA envoient un contexte. Knowledge retourne un verdict déterministe avec la règle exacte appliquée et une trace d'audit rejouable.
  cards:
    - title: Une policy, plusieurs appelants
      desc: Formulaires web, apps mobiles, files back-office, outils BPM, agents IA - tous consultent la même source. Une modification se propage partout.
    - title: Verdicts déterministes
      desc: Même entrée, même sortie. Chaque décision cite la règle qui a matché. Aucune variance LLM à la frontière de décision.
    - title: Audit rejouable
      desc: Chaque consultation est stockée avec une clé snapshot qui reconstitue l'état exact de la policy, des années plus tard. Répondre à un régulateur prend des secondes, plus des semaines.
    - title: Collecte progressive
      desc: Knowledge indique à l'appelant quelles informations manquent encore pour la décision en cours. Plus de « au cas où ».
  ctaLabel: Voir comment ça marche
  ctaHref: /how-it-works

stack:
  kicker: Fonctionne avec votre stack existant
  title: Pas de rip-and-replace. Cinq modes au choix.
  sub: Knowledge ne remplace pas votre moteur de workflow, votre vendor KYC, votre OMS ou votre code de décision legacy. Il s'insère à côté.
  cards:
    - question: Vous avez déjà un moteur de décision ?
      mode: Gate ou Overlay
      desc: Knowledge ajoute de nouvelles règles ou en gouverne d'existantes sans changer ce qui tourne aujourd'hui. Les verdicts bloquants arrêtent les mauvaises décisions pre-execution.
    - question: Vous voulez valider d'abord ?
      mode: Shadow
      desc: Knowledge calcule des verdicts en parallèle de votre système existant, les divergences remontent pour review. Zéro risque en production.
    - question: Vous lancez un nouveau domaine ?
      mode: Selective routing
      desc: Knowledge gère le nouveau flux, le reste reste sur le legacy. Aucun impact sur les flux actuels, contrôle total sur le nouveau.
    - question: Vous construisez du nouveau ?
      mode: Primary
      desc: Knowledge est la couche de décision dès le premier jour. Installez un pack vertical, calibrez les seuils, opérationnel en quelques semaines.
  ctaLabel: Voir comment Knowledge s'insère dans votre stack
  ctaHref: /stack

proof:
  kicker: Preuve verticale aujourd'hui
  title: Des décisions réelles modélisées et qui tournent.
  cards:
    - name: Wealth
      subtitle: Distribution de produits structurés
      desc: Éligibilité produit, suitability client, règles cross-border, concentration portefeuille. Quatre policies, treize règles, intégration de référence qui tourne.
      ctaLabel: Voir le walkthrough Wealth
      ctaHref: /wealth
    - name: KYC / KYB
      subtitle: Décisions d'onboarding
      desc: Collecte progressive, règles juridictionnelles, PEP et sanctions, documentation source of wealth. Se place au-dessus de votre vendor IDV.
      ctaLabel: Voir le walkthrough KYC
      ctaHref: /kyc

pilot:
  kicker: Commencez petit
  title: Commencez par une décision, pas par un programme de transformation.
  desc: Choisissez une décision douloureuse. Modélisez-la dans Knowledge. Faites-la tourner à côté de votre système existant. Mesurez le résultat. Décidez si vous étendez.
  ctaLabel: Voir comment se déroule un pilote
  ctaHref: /pilot
---

Le contenu structuré ci-dessus alimente la composition de la home.
Ce body est volontairement minimal - chaque section home est data-driven.
