---
title: Une couche de policy gouvernée pour la distribution de produits structurés
description: Éligibilité produit. Suitability client. Distribution cross-border. Limites de concentration. Une couche gouvernée que votre OMS, vos applications RM, vos systèmes compliance et vos copilotes IA peuvent consulter.
locale: fr
kicker: Knowledge pour le Wealth
ctaLabel: Devenir design partner
ctaHref: /pilot
---

La distribution de produits structurés est une décision composite. Éligibilité produit (retail vs accredited, bande de complexité, niveau K&E), suitability (tolérance au risque, capacité de perte, objectifs d'investissement), règles cross-border (localisation RM vs résidence client, solicited vs reverse enquiry), et concentration (single name, sous-jacent, allocation SP agrégée) se mélangent toutes dans chaque offre.

Quand ces décisions sont implémentées à travers la logique OMS, les workflows, les outils compliance et les fichiers Excel, chaque lancement produit, nouvelle juridiction ou changement de policy peut exiger de coordonner des changements à travers plusieurs systèmes. Knowledge tient la décision composite dans une couche de policy gouvernée, pour que chaque appelant consulte la même source.

## Ce que Knowledge apporte à un wealth manager

**Une couche de policy, plusieurs points de décision.** Que l'éligibilité soit vérifiée par l'OMS au moment du trade, par une application mobile RM avant une offre, par un copilote IA en pleine conversation client, ou par Compliance pendant une review, chaque appelant consulte la même couche de policy gouvernée.

**Quatre templates de policy, treize règles d'exemple.**

| Policy | Ce qu'elle gouverne |
|---|---|
| **Éligibilité produit** | Retail vs produit highly-complex, approval sur large notional retail, alignement target-market |
| **Suitability client** | Gate K&E sur produits complex, escalation sur mismatch de tolérance au risque, allow documenté sur reverse enquiry |
| **Distribution cross-border** | Outreach solicité vers juridictions restreintes bloqué, mismatch de booking-centre au-dessus du seuil escalade |
| **Concentration portefeuille** | Single-name post-trade au-dessus d'un seuil escalade, au-dessus d'un seuil supérieur bloque, plafonds d'allocation SP agrégée sur mandats conservateurs |

Le pack fournit un modèle de décision opérationnel avec des seuils illustratifs. Les seuils spécifiques à la firme, les juridictions restreintes, les classifications et les exigences d'approbation sont calibrés contre les policies propres à l'institution.

## Quatre décisions modélisées dans le pack

Un copilote RM ou un OMS pose à Knowledge l'une de quatre questions.

| Question posée | Ce que Knowledge retourne |
|---|---|
| **Puis-je offrir ce produit à ce client ?** | Bloque le retail sur les produits highly-complex ; requiert une approbation sur large notional |
| **Ce trade est-il suitable pour ce client ?** | Gate les produits complex contre les niveaux K&E ; escalade les mismatchs de tolérance au risque |
| **Cross-border : puis-je soliciter ce client depuis cette localisation ?** | Bloque l'outreach solicité vers les juridictions restreintes ; autorise les reverse enquiries documentées |
| **Concentration portefeuille : ce trade est-il dans les limites ?** | Escalade la concentration single-name au-dessus du seuil d'escalation ; bloque au-dessus du seuil de blocage |

Chaque verdict identifie les règles qui ont déterminé le résultat et l'état normatif de la policy utilisé pour l'évaluation.

## Knowledge n'exige pas de l'appelant qu'il connaisse tout l'arbre de décision

Les rules engines traditionnels exigent que chaque appelant connaisse les champs exacts nécessaires pour chaque décision. Knowledge inverse ça : l'appelant envoie le contexte qu'il a, et Knowledge identifie quel contexte est encore requis pour atteindre un verdict contre les policies applicables.

Un copilote RM se demandant si une note structurée peut être proposée à un client :

**Étape 1.** Le copilote appelle `/resolve` avec ce qu'il a déjà (asset class, type de produit).

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.classification",
      reason: "required by rul-sp-elig-highly-complex",
      type: "enum",
      allowed_values: ["retail", "professional", "accredited"] },
    { field: "solicitation.type",
      reason: "required by rul-sp-crossborder-solicited",
      type: "enum",
      allowed_values: ["solicited", "reverse_enquiry"] }
  ] }
```

**Étape 2.** Le copilote récupère la classification depuis le CRM et infère le type de solicitation depuis la conversation RM, puis rappelle `/resolve`.

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.knowledge_experience_level",
      reason: "required by rul-sp-elig-complex-ke-gate",
      type: "enum",
      allowed_values: ["insufficient", "sufficient"] }
  ] }
```

**Étape 3.** Le copilote récupère le niveau K&E depuis le dossier client, puis rappelle `/resolve`.

```
{ operation_status: "complete",
  verdict: "approval_required",
  cited_rules: ["rul-sp-elig-highly-complex-retail-notional",
                "rul-sp-crossborder-solicited-restricted"],
  consultation_id: "cns-..." }
```

Le copilote RM n'a pas besoin d'encoder quelle question vient ensuite. Knowledge dérive le contexte requis à partir des policies qui deviennent applicables à mesure que le cas est résolu.

## Ce que le pack livre

| Composant | Ce que c'est |
|---|---|
| **Scope schema** | Le vocabulaire que la couche de décision utilise (product complexity, risk rating, client experience level, solicitation type, booking centre, RM location, post-trade exposure) |
| **Quatre templates de policy + treize règles d'exemple** | Un modèle de décision opérationnel avec des seuils illustratifs, prêt à être calibré par l'équipe compliance de l'institution |
| **Intégration de référence** | Un script opérationnel montrant un copilote RM appelant `/resolve` pour les quatre décisions modélisées |
| **Playbook opérateur** | Le runbook pour installer, calibrer et répéter le pack |

## Ce que la banque possède, ce qu'Asplenz livre

Asplenz livre l'ontologie et les patterns de règles avec des seuils illustratifs. La fonction compliance de la banque possède l'interprétation de chaque seuil - ce que « large notional » veut dire chez cette firme, quelles juridictions sont restreintes, quel mismatch de tolérance au risque déclenche l'escalation.

**Knowledge évalue la policy encodée de l'institution ; il ne remplace pas le jugement réglementaire de l'institution ni n'exécute l'action métier qui en résulte.** Le pack ne livre pas d'interprétation réglementaire ; il donne à la banque une forme opérationnelle à calibrer.

## Options de déploiement

Le pack wealth s'insère dans un stack wealth existant de plusieurs façons.

| Point d'insertion | Comment ça marche |
|---|---|
| **Moteur d'éligibilité existant** (Overlay) | Les résultats d'éligibilité existants deviennent une partie du contexte évalué par Knowledge. Ajouter un nouveau domaine de policy, une juridiction ou un contrôle sans migrer le moteur sous-jacent |
| **Derrière l'OMS** (Gate) | L'OMS appelle Knowledge avant de router un ordre. Les verdicts bloquants arrêtent les mauvais trades pre-execution |
| **À côté d'un moteur legacy** (Shadow) | Knowledge évalue les mêmes cas en parallèle sans contrôler la décision production. Comparer les résultats avant de lui donner l'autorité |
| **Nouvelle ligne produits ou nouveau marché** (Selective routing) | La couche de décision existante gère les flux actuels ; Knowledge gère le nouveau flux, sans impact sur les décisions actuelles |
| **Couche de décision greenfield** (Primary) | Pas de legacy à contourner. Knowledge est la couche de décision dès le premier jour, typique pour une nouvelle business unit ou une surface greenfield |

[Voir comment Knowledge s'insère dans votre stack](/stack)

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le modèle mental, le contrat API, la surface d'audit |
| [Agents IA](/ai-agents) | Comment un copilote RM ou un agent de trading appelle Knowledge comme tool |
| [Design partner](/pilot) | Trois places founding, une décision production, pricing founding-customer |
