---
title: Fonctionne avec votre stack existant
description: Pas de rip-and-replace. Knowledge s'insère à côté de ce que vous avez - comme gate, overlay, shadow validator, selective router, ou couche primary pour les nouveaux domaines.
locale: fr
kicker: Cinq modes d'adoption
ctaLabel: Discuter du mode qui vous convient
ctaHref: /pilot
---

Knowledge ne remplace pas votre moteur de workflow, votre vendor KYC, votre OMS ou votre code de décision legacy. Il s'insère à côté, selon l'un de cinq patterns. Choisissez le mode qui correspond à où vous en êtes aujourd'hui.

---

## Vous avez déjà un moteur de décision ? - Gate ou Overlay

Vous avez quelque chose qui tourne aujourd'hui. Alloy, un moteur de règles custom, du code de décision embarqué dans votre OMS, un système d'admission legacy. Ça marche, mais vous devez ajouter de nouvelles règles, gouverner celles existantes, ou ajouter de l'audit - sans déplacer ce qui tourne.

**Gate.** Knowledge se place entre l'appelant et le système existant. Les requêtes arrivent d'abord sur Knowledge ; les verdicts bloquants arrêtent le flux pre-execution. Les flux non-bloquants passent à travers vers le système existant sans changement. Les nouvelles règles sont ajoutées dans Knowledge sans toucher au legacy.

**Overlay.** Knowledge se place après la décision existante. Le legacy calcule son verdict ; Knowledge peut ajouter des règles compliance, produire des traces d'audit, ou gouverner les exceptions par-dessus. Overlay est commun quand le legacy est intouchable (risque de régression, tribal knowledge, coût de re-certification).

Les deux patterns sont **additifs** - aucun changement au code qui tourne aujourd'hui.

---

## Vous voulez valider d'abord ? - Shadow

Vous voulez que Knowledge tourne à côté de votre couche de décision existante pendant une période, sans affecter le trafic live. Chaque appel va vers les deux systèmes. Les verdicts sont comparés. Les divergences remontent pour review.

C'est ainsi que les organisations averses au risque onboardent une nouvelle couche de décision. Après 4-8 semaines de run parallèle, l'analyse des divergences vous dit deux choses :
- Où Knowledge et le système existant sont d'accord (typiquement 80-95% sur les domaines stables)
- Où ils divergent - et lequel a raison (souvent, de manière surprenante, les divergences révèlent des bugs pré-existants dans le legacy)

Une fois les divergences comprises et la confiance suffisamment haute, Knowledge passe de shadow à gate ou primary.

---

## Vous lancez un nouveau domaine ? - Selective routing

Vous avez un système existant qui gère les flux actuels. Mais une nouvelle ligne de produits, une entrée sur un nouveau marché, un nouveau segment client requièrent des décisions pour lesquelles le système existant n'a pas été conçu.

Selective routing dirige le nouveau flux vers Knowledge en laissant le reste du système sur le legacy. Même tenant, mêmes clients, même OMS - mais les décisions du nouveau flux viennent de Knowledge.

C'est une façon peu risquée d'introduire Knowledge : aucun impact sur les flux actuels, contrôle total sur le nouveau, rollback facile si nécessaire.

---

## Vous construisez du nouveau ? - Primary

Greenfield. Un nouveau produit, une nouvelle startup, une nouvelle business unit, une nouvelle surface customer-facing où rien n'existe encore. Knowledge est la couche de décision dès le premier jour.

Primary est le pattern le plus simple parce qu'il n'y a pas de legacy à contourner. C'est aussi là où le modèle pack brille : installez un pack vertical (Wealth, KYC, ou tout ce qui ship ensuite), calibrez les seuils, et vous avez une couche de décision opérationnelle en quelques semaines.

---

## Les cinq patterns en un coup d'œil

| Votre situation | Pattern | Profil de risque | Timeline typique |
|---|---|---|---|
| Legacy intouchable, besoin d'ajouter des règles | Overlay | Bas | 4-8 semaines |
| Legacy touchable, envie de gater du live | Gate | Bas-moyen | 6-10 semaines |
| Envie de validation zéro-risque avant commit | Shadow | Très bas | 4-8 semaines shadow, puis transition |
| Nouveau marché / nouvelle ligne produits | Selective routing | Bas | 6-12 semaines |
| Build greenfield | Primary | N/A (pas de legacy) | 4-8 semaines |

## Ce que Knowledge N'exige PAS

| Ce qui reste en place | Comment Knowledge coexiste |
|---|---|
| **Votre moteur de workflow** | Knowledge est appelé depuis les tasks de workflow. Aucun remplacement de Camunda, Signavio, Appian, Pega |
| **Votre vendor IDV** | Knowledge est appelé après le résultat de vérification. Aucun swap de vendor |
| **Votre OMS** | Knowledge est appelé depuis l'OMS au point de décision. Aucun remplacement d'OMS |
| **Votre core legacy** | Knowledge se place en overlay ou en gate. Aucune réécriture de mainframe |

Chaque pattern de déploiement est additif. Vos systèmes existants continuent de tourner. Knowledge ajoute une couche gouvernée là où vous en avez besoin.

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le modèle mental derrière ces patterns |
| [Wealth](/wealth) | Un exemple où Knowledge se place en gate derrière un OMS |
| [KYC / KYB](/kyc) | Un exemple où Knowledge overlays ou remplace la boîte décision-d'admission dans un stack KYC |
| [Agents IA](/ai-agents) | Un cas spécifique de primary ou gate pour des flux agent-driven |
| [Pilote](/pilot) | Comment un pilote shadow-run est scopé et mesuré |
