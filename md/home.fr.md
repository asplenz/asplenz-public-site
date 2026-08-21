---
title: Asplenz Knowledge - la couche de policy gouvernée pour vos applications, workflows et agents IA
description: Quand la logique de conformité est dispersée dans votre stack, chaque changement devient plus difficile à contrôler. Knowledge apporte la logique de décision dans une couche de policy gouvernée, sans remplacer ce qui tourne déjà.
locale: fr

hero:
  kicker: Couche de policy pour vos décisions de conformité
  headline: Quand la logique de conformité est dispersée dans votre stack,
  headlineItalic: chaque changement devient plus difficile à contrôler.
  sub: Knowledge apporte la logique de décision dans une couche de policy gouvernée, sans remplacer votre stack existant. Vos applications, workflows et agents IA fournissent le contexte qu'ils ont. Knowledge détermine ce que la policy exige, ce qui manque encore pour atteindre un verdict, et quelle décision s'applique.
  ctaPrimary: Parlons-en
  ctaPrimaryHref: /pilot
  ctaSecondary: Voir comment ça marche
  ctaSecondaryHref: /how-it-works

problem:
  kicker: ""
  title: "Ça vous parle ?"
  items:
    - kicker: Policy dispersée dans votre stack
      body: Chaque mise à jour est lente et risque de laisser une copie non mise à jour quelque part.
    - kicker: Onboarding qui demande « au cas où »
      body: Les clients abandonnent en cours de route sur des champs qui n'ont jamais affecté leur décision.
    - kicker: Reviewers sur des cas que la policy pourrait automatiser
      body: Les vrais cas de jugement s'accumulent derrière.
    - kicker: Régulateur qui pose une question sur une décision d'il y a 18 mois
      body: Des semaines de temps équipe pour reconstruire la version exacte de la policy.
    - kicker: Agent IA qui fonctionne en prototype
      body: Legal bloque le passage en production parce qu'il ne peut pas vérifier quelle policy sera réellement appliquée.

solutions:
  kicker: Solutions
  title: "Qu'est-ce que vous voulez améliorer ?"
  cards:
    - title: Revues & approbations
      desc: Résolvez les cas routiniers avant qu'ils n'atteignent un reviewer, et préparez les cas qui exigent réellement du jugement humain.
      ctaLabel: Réduire la charge de review
      ctaHref: /automate-approvals
    - title: Demandez moins
      desc: Ne collectez que l'information dont chaque décision a réellement besoin, au lieu de demander tout à chaque client d'entrée.
      ctaLabel: Réduire la friction client
      ctaHref: /ask-less
    - title: Gouvernez les décisions IA
      desc: Laissez les agents IA collecter le contexte et orchestrer le travail pendant que les décisions policy gouvernées restent déterministes et auditables.
      ctaLabel: Gouverner les décisions des agents
      ctaHref: /ai-agents

transition:
  text: "Symptômes différents. Même problème sous-jacent : la policy qui détermine une décision est couplée aux systèmes qui collectent l'information, orchestrent le processus ou exécutent l'action."

change:
  kicker: Ce que Knowledge change
  title: Une couche de policy gouvernée. Plusieurs appelants.
  sub: Vos applications, workflows et agents IA envoient un contexte. Knowledge retourne un verdict déterministe avec les règles qui l'ont déterminé et une trace d'audit rejouable.
  cards:
    - title: Une couche, plusieurs appelants
      desc: Formulaires web, apps mobiles, systèmes back-office, workflows et agents IA peuvent tous consulter la même couche de policy gouvernée. La logique de policy n'a plus à être réimplémentée par chaque appelant.
    - title: Verdicts déterministes
      desc: Même contexte, même état de policy, même décision. Chaque verdict identifie les règles qui l'ont déterminé. Aucune variance LLM à la frontière de décision.
    - title: Audit rejouable
      desc: Chaque consultation enregistre l'état normatif de la policy derrière la décision, pour que les décisions historiques puissent être tracées jusqu'aux règles et à l'état de policy qui les ont produites.
    - title: Contexte progressif
      desc: Knowledge identifie l'information dont les policies applicables ont encore besoin. Les parcours customer peuvent poser moins de questions inutiles ; les flux internes peuvent atteindre les reviewers avec le contexte nécessaire déjà assemblé.
  ctaLabel: Voir comment ça marche
  ctaHref: /how-it-works

stack:
  kicker: Fonctionne avec votre stack existant
  title: Pas de rip-and-replace. Cinq modes au choix.
  sub: Knowledge ne remplace pas votre moteur de workflow, votre vendor KYC, votre OMS ou votre code de décision legacy. Il s'insère à côté.
  cards:
    - question: Vous avez déjà un moteur de décision ?
      mode: Overlay
      desc: Alimentez Knowledge avec les décisions et le contexte existants pour appliquer une policy gouvernée additionnelle, sans remplacer le moteur sous-jacent.
    - question: Besoin de mettre en place un nouveau contrôle ?
      mode: Gate
      desc: Placez Knowledge avant l'exécution pour une décision ou une policy sélectionnée. Knowledge retourne le verdict gouverné ; votre système existant décide si l'action se poursuit, s'arrête ou requiert une approbation.
    - question: Vous voulez valider d'abord ?
      mode: Shadow
      desc: Knowledge évalue les mêmes cas en parallèle sans contrôler la décision production. Comparez les résultats avant de lui donner l'autorité.
    - question: Vous lancez un nouveau domaine ?
      mode: Selective routing
      desc: Knowledge gère le nouveau flux, le reste reste sur le legacy. Aucun impact sur les flux actuels, contrôle total sur le nouveau.
    - question: Vous construisez du nouveau ?
      mode: Primary
      desc: Knowledge est la couche de décision dès le premier jour. Installez un pack vertical, calibrez les seuils, opérationnel en quelques semaines.
  ctaLabel: Voir comment Knowledge s'insère dans votre stack
  ctaHref: /stack

proof:
  kicker: Industries
  title: Voyez Knowledge appliqué à des domaines de décision réels.
  cards:
    - name: Wealth
      subtitle: Distribution de produits structurés
      desc: Éligibilité produit, suitability client, règles cross-border, concentration portefeuille. Quatre policies, treize règles et une intégration de référence opérationnelle.
      ctaLabel: Voir le walkthrough Wealth
      ctaHref: /wealth
    - name: KYC / KYB
      subtitle: Décisions d'onboarding
      desc: Exigences d'information progressives, règles juridictionnelles, résultats PEP et sanctions, exigences source-of-wealth et décisions d'escalation - tout en gardant en place vos fournisseurs d'identité et de vérification existants.
      ctaLabel: Voir le walkthrough KYC
      ctaHref: /kyc

pilot:
  kicker: La cohorte founding
  title: Apportez-nous une décision à résoudre. Le statut founding vient avec.
  desc: Apportez une décision difficile à changer, automatiser ou auditer aujourd'hui. Knowledge tourne contre des critères de succès convenus d'entrée, dans un pattern d'adoption qui rentre dans votre stack existant. Pricing founding-customer, influence produit directe, sortie propre si les chiffres ne tombent pas. Trois engagements dans la cohorte founding.
  ctaLabel: Voir l'engagement design partner
  ctaHref: /pilot
---

Le contenu structuré ci-dessus alimente la composition de la home.
Ce body est volontairement minimal - chaque section home est data-driven.
