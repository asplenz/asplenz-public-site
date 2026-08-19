---
title: Wealth - gouverner la distribution de produits structurés
description: Éligibilité produit. Suitability client. Règles cross-border. Limites de concentration. Le tout tenu dans une couche gouvernée que votre OMS, votre app mobile et votre copilote RM consultent.
locale: fr
kicker: Preuve verticale - Wealth
ctaLabel: Réserver un scoping call
ctaHref: /pilot
---

La distribution de produits structurés est une décision composite. Éligibilité produit (retail vs accredited, bande de complexité, niveau K&E), suitability (tolérance au risque, capacité de perte, objectifs d'investissement), règles cross-border (localisation RM vs résidence client, solicited vs reverse enquiry), et concentration (single name, sous-jacent, allocation SP agrégée) - tout se mélange dans chaque offre.

Aujourd'hui ce composite vit dans un mélange de code, workflows et fichiers Excel. Chaque lancement produit, chaque nouvelle juridiction, chaque mise à jour réglementaire signifie retrouver et mettre à jour la logique à plusieurs endroits.

## Ce que Knowledge apporte à une wealth manager

Knowledge tient la décision composite dans une couche gouvernée. Votre OMS, votre app mobile RM, votre dashboard compliance et tout copilote IA consultent la même source.

**Une décision, plusieurs appelants.** La même question « puis-je offrir ce produit à ce client », posée depuis l'OMS au moment du trade, depuis l'app mobile en pre-trade, depuis le copilote RM en pleine conversation, depuis le dashboard compliance pour l'audit - une seule source policy répond aux quatre.

**Quatre policies seedées, treize règles.**

| Policy | Ce qu'elle gouverne |
|---|---|
| **Éligibilité produit** | Retail vs produit highly-complex, approval sur large notional retail, alignement target-market |
| **Suitability client** | Gate K&E sur produits complex, escalation sur mismatch de tolérance au risque, allow documenté sur reverse enquiry |
| **Distribution cross-border** | Outreach solicité vers juridictions restreintes bloqué, mismatch de booking-centre au-dessus du seuil escalade |
| **Concentration portefeuille** | Single-name post-trade au-dessus de 30% escalade, au-dessus de 50% bloque, plafonds d'allocation SP agrégée sur mandats conservateurs |

Chaque seuil est un pattern livré avec un défaut réaliste. Le compliance officer de la banque calibre la valeur exacte selon la policy de la firme.

## Les quatre décisions canoniques

Un copilote RM ou un OMS pose à Knowledge l'une de quatre questions.

| Question posée | Verdict que Knowledge retourne |
|---|---|
| **Puis-je offrir ce produit à ce client ?** | Bloque le retail sur les produits highly-complex ; requiert une approbation sur large notional |
| **Ce trade est-il suitable pour ce client ?** | Gate les produits complex contre les niveaux K&E ; escalade les mismatchs de tolérance au risque |
| **Cross-border : puis-je soliciter ce client depuis cette localisation ?** | Bloque l'outreach solicité vers les juridictions restreintes ; autorise les reverse enquiries documentées |
| **Concentration portefeuille : ce trade est-il dans les limites ?** | Escalade la concentration single-name au-dessus de 30% ; bloque au-dessus de 50% |

Chaque verdict vient avec la règle citée et une clé d'audit rejouable.

## Ce que le pack livre

| Composant | Ce que c'est |
|---|---|
| **Scope schema** | Le vocabulaire que la couche de décision utilise (product complexity, risk rating, client experience level, solicitation type, booking centre, RM location, post-trade exposure) |
| **Quatre policies + treize règles** | Seuils par défaut réalistes, prêts à être calibrés par le compliance officer de la banque |
| **Intégration de référence** | Un script qui tourne, montrant un copilote RM appelant `/resolve` pour les quatre décisions canoniques |
| **Playbook opérateur** | Le runbook pour installer, calibrer et répéter le pack |

## Ce que la banque possède, ce qu'Asplenz livre

Asplenz livre l'ontologie et les règles de pattern avec des défauts réalistes. La fonction compliance de la banque possède l'interprétation de chaque seuil - que veut dire « large notional » chez cette firme, quelles juridictions sont restreintes, quel mismatch de tolérance au risque déclenche l'escalation. Le pack ne livre pas d'interprétation réglementaire ; il donne à la banque une forme qui tourne pour calibrer.

## Options de déploiement

Le pack wealth s'insère dans un stack wealth existant de plusieurs façons.

| Point d'insertion | Comment ça marche |
|---|---|
| **Derrière l'OMS** (gate) | L'OMS appelle Knowledge avant de router un ordre. Les verdicts bloquants arrêtent les mauvais trades pre-execution |
| **À côté d'un moteur compliance legacy** (shadow → selective routing) | Knowledge tourne en shadow, les divergences remontent pour review, puis transition vers primary sur le scope SP uniquement |
| **Couche de décision greenfield** (primary) | Pour une nouvelle ligne de produits ou une entrée sur un nouveau marché - pas de legacy à contourner |

[Voir comment Knowledge s'insère dans votre stack](/stack)

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le modèle mental, le contrat API, la surface d'audit |
| [Agents IA](/ai-agents) | Comment un copilote RM ou un agent de trading appelle Knowledge comme tool |
| [Pilote](/pilot) | Faites tourner une des quatre décisions en shadow pendant 4-8 semaines, mesurez l'accord de décision contre votre logique existante |
