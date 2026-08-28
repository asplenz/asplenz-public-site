---
title: Laissez les workflows wealth AI-powered investiguer la suitability. Gardez la policy de distribution hors du modèle.
description: Quand les capabilities IA derrière vos applications wealth aident à déterminer si un produit structuré peut être proposé à un client, elles peuvent avoir besoin de contexte produit, client, portefeuille et juridiction. Knowledge les laisse rassembler ce contexte progressivement pendant qu'une policy déterministe détermine ce qui est allowed, blocked ou requires human approval.
locale: fr
kicker: Knowledge pour le Wealth
ctaLabel: Discuter de votre use case
ctaHref: /contact
---

## La nouvelle frontière de décision qu'un workflow wealth AI-powered introduit

Le RM est dans son workstation, au milieu d'une conversation client. Il sélectionne un candidat de note structurée et clique sur **« Check suitability »**.

Avant les agents, ce bouton appelait soit un moteur suitability fixe soit déclenchait une desk review manuelle. La détermination était possédée end-to-end par un système unique ou un process humain.

Avec un service IA qui participe derrière le bouton, la détermination se construit maintenant par le modèle. Il fetche les données produit, lit le profil client, extrait des faits depuis la conversation et le dossier, et construit la vue composite : éligibilité produit, suitability, cross-border, concentration.

Le RM voit un résultat native de l'application.

| Résultat | Ce que le workstation affiche |
|---|---|
| **Suitable** | Le client rencontre les exigences applicables. |
| **Additional information required** | Merci d'obtenir un niveau K&E à jour pour cette complexité de produit. |
| **Compliance review required** | Mismatch booking-centre avec juridiction ; escalader à Compliance. |

Il n'a pas besoin de savoir qu'un agent a tourné derrière le workstation. Le workstation, le CRM, l'UI d'order entry restent exactement comme ils sont.

La question n'est pas *comment centraliser toutes les règles wealth*. Elle est :

> **Maintenant qu'une capability IA derrière le workstation participe à cette détermination, où vit l'autorité policy ?**

Knowledge sépare les deux. Le service IA investigue, rassemble le contexte, prépare le cas. Knowledge détermine ce que la capability IA est autorisée à conclure avant que le workstation ne surface le résultat.

## Ce que Knowledge peut être dans votre stack

Deux formes couvrent la plupart des déploiements Wealth.

| Forme | Comment ça marche |
|---|---|
| **Knowledge comme autorité de décision** | Pour un workflow donné, Knowledge possède la détermination policy end-to-end. Le service IA demande à Knowledge, obtient un verdict déterministe, le workstation agit dessus. |
| **Knowledge comme complément à ce que vous faites déjà tourner** | Pour les décisions qu'un moteur existant produit déjà, Knowledge peut ajouter une couche gouvernée par-dessus : un check supplémentaire sur les opérations à haut risque, un workflow d'approbation, ou une surface d'audit, sans remplacer le moteur sous-jacent. |

Les engagements Wealth utilisent souvent les deux formes en même temps.

## La décision composite que la capability IA navigue

Quatre dimensions shapent typiquement la détermination *« pouvons-nous proposer ceci ? »*.

| Dimension | Ce qu'elle apporte à la décision |
|---|---|
| **Produit** | Éligibilité (retail vs highly-complex, alignement target-market, bandes de notional) |
| **Client** | Suitability (niveau K&E, tolérance au risque, capacité de perte, objectifs d'investissement) |
| **Cross-border** | Règles juridictionnelles (type de solicitation, booking centre vs résidence client) |
| **Portefeuille** | Limites de concentration et d'exposition (single-name, allocation SP agrégée) |

Chacun des quatre inputs peut déjà avoir son propre système de record : product master, CRM, moteur suitability, moteur portefeuille, données juridictionnelles. Knowledge ne les remplace pas. Il lit ce qu'ils tiennent, applique la policy wealth qui gouverne le composite, et retourne une décision déterministe sur laquelle le workstation peut agir.

## Progressive context : le service IA investigue à mesure que la policy demande

C'est la forme opérationnelle qui rend le wealth intéressant pour une capability IA sise derrière un workstation.

Le service IA n'a pas besoin de fetcher 47 champs d'entrée. Il démarre avec ce qu'il a ; Knowledge lui dit ce que les règles applicables exigent encore ; le service acquiert chaque champ (lookup CRM, appel portefeuille, extraction LLM depuis le dossier, question remontée à travers le workstation), re-consulte, itère jusqu'à ce qu'une décision soit atteinte.

**Étape 1.** Le service IA appelle `/resolve` avec ce qu'il a déjà (asset class, type de produit).

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

**Étape 2.** Le service récupère la classification depuis le CRM et infère le type de solicitation depuis le contexte du cas, puis rappelle `/resolve`.

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.knowledge_experience_level",
      reason: "required by rul-sp-elig-complex-ke-gate",
      type: "enum",
      allowed_values: ["insufficient", "sufficient"] }
  ] }
```

**Étape 3.** Le service récupère le niveau K&E depuis le dossier client, puis rappelle `/resolve`.

```
{ operation_status: "complete",
  verdict: "approval_required",
  cited_rules: ["rul-sp-elig-highly-complex-retail-notional",
                "rul-sp-crossborder-solicited-restricted"],
  signed_verdict: "eyJhbGciOiJFUzI1NiIsInR5cCI6ImdvdmVybmVkK2p3cyIsImtpZCI6...",
  consultation_id: "cns-..." }
```

Le service n'encode pas quelle question vient ensuite. La policy le lui dit. Quand compliance amende une règle et qu'elle commence à exiger un nouveau champ, le prochain `/resolve` apprend à le fetch, et seul le fetcher doit être ajouté côté backend du workstation. Voir [Progressive context](/product/progressive-context).

## Quatre questions que la capability IA ne devrait pas répondre depuis le jugement du modèle seul

Au-delà de la décision composite *« pouvons-nous proposer ceci ? »*, il y a quatre déterminations liées dont le service IA peut avoir besoin. Chacune est un cas où l'autorité policy déterministe devrait vivre hors du modèle.

| Question | Ce que la policy détermine |
|---|---|
| **Pouvons-nous offrir ce produit à ce client ?** | Retail vs produit highly-complex, approval sur large notional retail, alignement target-market |
| **Ce trade est-il suitable pour ce client ?** | Gate K&E sur produits complex, escalation sur mismatch de tolérance au risque, allow documenté sur reverse enquiry |
| **Cross-border : pouvons-nous soliciter ce client depuis cette localisation ?** | Bloque l'outreach solicité vers juridictions restreintes, mismatch de booking-centre au-dessus du seuil escalade |
| **Concentration portefeuille : ce trade est-il dans les limites ?** | Thresholds d'escalation et de block sur concentration single-name post-trade, plafonds d'allocation SP agrégée sur mandats conservateurs |

Si votre OMS ou moteur pre-trade possède déjà une de ces décisions end-to-end, gardez-la là. Là où la capability IA introduit une nouvelle frontière que les systèmes existants ne couvrent pas proprement, Knowledge la gouverne.

## Compliance possède les policies déléguées à Knowledge

Les policies gouvernant la frontière de décision de la capability IA peuvent être versionnées, approuvées et évoluées indépendamment du service IA. Les règles qui restent possédées par les systèmes existants y restent.

Là où Knowledge tient une règle, elle vit dans l'UI back-office comme un objet business-view : scope (juridiction, asset class, segment client), conditions et thresholds, severity (allow / require approval / block / absolute ban), dates d'effet, rationale, approver. Compliance amende le threshold ; le prochain `/resolve` utilise la nouvelle valeur. Les consultations antérieures pointent toujours sur la règle exacte de leur jour, via RuleVersion immuable. Voir [Auditability](/product/auditability).

## Patterns d'insertion

Un engagement wealth insère typiquement Knowledge d'une de quatre façons.

| Pattern | Comment ça marche |
|---|---|
| **La décision existante garde son autorité** | Si un OMS, moteur pre-trade ou moteur suitability possède déjà une décision, Knowledge ne se met pas sur ce chemin. |
| **Overlay** | Les résultats d'éligibilité ou suitability existants deviennent partie du contexte que Knowledge évalue. Ajouter un nouveau domaine policy, une juridiction ou une décision agent-driven sans migrer le moteur sous-jacent. |
| **Shadow** | Knowledge évalue la décision composite en parallèle du process existant. Comparer les résultats pendant une fenêtre définie avant de donner l'autorité à Knowledge. |
| **Nouvelle frontière de décision** | La détermination *« pouvons-nous proposer ceci ? »* du workstation tourne sur Knowledge dès le premier jour. Les moteurs existants restent l'autorité pour les flows qu'ils possèdent déjà. |

## Pack de décision Wealth

Pour un engagement design-partner, Asplenz ship un point de départ opérationnel que Compliance peut calibrer contre les policies propres de la firme :

| Composant | Ce que c'est |
|---|---|
| **Scope schema** | Le vocabulaire que la couche de décision utilise : product complexity, risk rating, client experience level, solicitation type, booking centre, RM location, post-trade exposure |
| **Quatre templates de policy + règles d'exemple** | Un modèle de décision opérationnel avec des thresholds illustratifs, prêt pour calibration |
| **Intégration de référence service IA** | Un script opérationnel montrant le service derrière un workflow wealth appelant `/resolve` progressivement à travers la décision composite |
| **Playbook de calibration** | Le runbook que Compliance et l'équipe d'engineering utilisent pour installer, calibrer et répéter |

**Knowledge évalue la policy encodée de l'institution. Il ne remplace pas le jugement réglementaire de l'institution ni n'exécute l'action métier qui en résulte.** Le pack ne livre pas d'interprétation réglementaire ; il donne à la banque une forme opérationnelle à calibrer.

## Commencer par une décision workstation

Pickez une décision que votre service IA derrière le workstation doit prendre qui est actuellement gouvernée par de l'interprétation humaine, des procédures fragmentées ou de la logique d'agent custom. Faites-la tourner en shadow mode contre le process actuel. Cutoverez quand la parité et l'audit sont prouvés.

**[Discuter de votre use case](/contact)** &nbsp; · &nbsp; **[Voir pricing](/pricing)**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Pour équipes produit IA](/solutions/by-role/ai-product-teams) | L'équipe qui construit la capability IA derrière le workstation |
| [Pour compliance officers](/solutions/by-role/compliance-officers) | L'angle compliance : ownership des règles, coverage, approbations |
| [Progressive context](/product/progressive-context) | La boucle `/resolve` que le service IA navigue |
| [Enforcement](/product/enforcement) | Verdicts signés, PEP, chaîne de confiance à quatre acteurs |
| [Auditability](/product/auditability) | Questions régulateur : Consultation, RuleVersion, trace de précédence |
