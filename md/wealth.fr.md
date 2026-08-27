---
title: Laissez les copilotes RM investiguer les opportunités. Gardez la suitability et la policy de distribution hors du modèle.
description: Quand un copilote IA aide à déterminer si un produit structuré peut être proposé à un client, il peut avoir besoin de contexte produit, client, portefeuille et juridiction. Knowledge laisse le copilote rassembler ce contexte progressivement pendant qu'une policy déterministe détermine ce qui est allowed, blocked ou requires human approval.
locale: fr
kicker: Knowledge pour le Wealth
ctaLabel: Explorer un design partnership
ctaHref: /pilot
---

## La nouvelle frontière de décision qu'un copilote wealth management introduit

Le RM demande au copilote IA :

> *« Pourrait-on montrer au client cet autocall ? »*

Avant les agents, le RM ouvrait un memo de distribution, checkait une matrice, regardait le portefeuille, combinait mentalement l'alignement target-market avec la classification client et les règles cross-border, et proposait le produit ou escaladait.

Avec un copilote IA qui participe, cette détermination se construit par le modèle. L'éligibilité produit, la suitability, le cross-border, et la concentration sont toujours gouvernés par la policy. Mais le copilote navigue maintenant lui-même à travers.

La question n'est pas *comment centraliser toutes les règles wealth*. Elle est :

> **Maintenant que le copilote participe à cette détermination, où vit l'autorité policy ?**

Knowledge sépare les deux. Le copilote investigue, rassemble le contexte, prépare la proposition. Knowledge détermine ce que le copilote est autorisé à conclure.

## Vous avez déjà des moteurs d'éligibilité et de suitability ? Gardez-les.

Knowledge n'exige pas de déplacer chaque règle Wealth dans une nouvelle plateforme. Les services d'éligibilité, suitability, OMS et compliance existants peuvent rester autoritatifs là où ils possèdent déjà une décision proprement.

**Knowledge devient utile là où le nouveau copilote crée une frontière de décision qui n'existe pas déjà comme capability métier appelable unique.** La décision composite *« puis-je proposer ce produit spécifique à ce client spécifique, étant donné le contexte courant ? »* est souvent cette frontière. Elle combine information produit, client, portefeuille et juridiction d'une façon qu'aucun moteur existant unique ne détient peut-être end-to-end.

## La décision composite que le copilote navigue

```
                    PRODUIT
                  éligibilité
                       |
CLIENT --- suitability +----- CROSS-BORDER
                       |      solicitation, booking centre
                       |
                  PORTEFEUILLE
                  concentration
                       |
                       v

           LE RM PEUT-IL PROPOSER ÇA ?
```

Chacun des quatre inputs peut déjà avoir son propre système de record : product master, CRM, moteur suitability, moteur portefeuille, données juridictionnelles. Knowledge ne les remplace pas. Il lit ce qu'ils tiennent, applique la policy wealth qui gouverne le composite, et retourne une décision déterministe sur laquelle le copilote et le RM peuvent agir.

## Progressive context : le copilote investigue à mesure que la policy demande

C'est la forme opérationnelle qui rend le wealth intéressant pour un copilote agent.

Le copilote n'a pas besoin de fetcher 47 champs d'entrée. Il démarre avec ce qu'il a ; Knowledge lui dit ce que les règles applicables exigent encore ; le copilote acquiert chaque champ (lookup CRM, appel portefeuille, extraction LLM depuis la conversation RM, question au RM), re-consulte, itère jusqu'à ce qu'une décision soit atteinte.

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
  signed_verdict: "eyJhbGciOiJFUzI1NiIsInR5cCI6ImdvdmVybmVkK2p3cyIsImtpZCI6...",
  consultation_id: "cns-..." }
```

Le copilote n'encode pas quelle question vient ensuite. La policy le lui dit. Quand compliance amende une règle et qu'elle commence à exiger un nouveau champ, le prochain `/resolve` du copilote apprend à le fetch. Voir [Progressive context](/product/progressive-context).

## Quatre questions que le copilote ne devrait pas répondre depuis le jugement du modèle seul

Au-delà de la décision composite *« puis-je proposer ceci ? »*, il y a quatre déterminations liées dont le copilote peut avoir besoin. Chacune est un cas où l'autorité policy déterministe devrait vivre hors du modèle.

| Question | Ce que la policy détermine |
|---|---|
| **Puis-je offrir ce produit à ce client ?** | Retail vs produit highly-complex, approval sur large notional retail, alignement target-market |
| **Ce trade est-il suitable pour ce client ?** | Gate K&E sur produits complex, escalation sur mismatch de tolérance au risque, allow documenté sur reverse enquiry |
| **Cross-border : puis-je soliciter ce client depuis cette localisation ?** | Bloque l'outreach solicité vers juridictions restreintes, mismatch de booking-centre au-dessus du seuil escalade |
| **Concentration portefeuille : ce trade est-il dans les limites ?** | Thresholds d'escalation et de block sur concentration single-name post-trade, plafonds d'allocation SP agrégée sur mandats conservateurs |

Si votre OMS ou moteur pre-trade possède déjà une de ces décisions end-to-end, gardez-la là. Là où le copilote introduit une nouvelle frontière que les systèmes existants ne couvrent pas proprement, Knowledge la gouverne.

## Compliance possède les policies déléguées à Knowledge

Les policies gouvernant la frontière de décision du copilote peuvent être versionnées, approuvées et évoluées indépendamment du copilote. Les règles qui restent possédées par les systèmes existants y restent.

Là où Knowledge tient une règle, elle vit dans l'UI back-office comme un objet business-view : scope (juridiction, asset class, segment client), conditions et thresholds, severity (allow / require approval / block / absolute ban), dates d'effet, rationale, approver. Compliance amende le threshold ; le prochain `/resolve` utilise la nouvelle valeur. Les consultations antérieures pointent toujours sur la règle exacte de leur jour, via RuleVersion immuable. Voir [Auditability](/product/auditability).

## Démarrer sans remplacer ce qui marche déjà

Un engagement wealth insère typiquement Knowledge d'une de quatre façons.

| Point d'insertion | Comment ça marche |
|---|---|
| **La décision existante garde son autorité** | Si OMS, moteur pre-trade ou moteur suitability possède déjà une décision proprement, aucun changement. Knowledge ne se met pas sur ce chemin. |
| **Overlay** | Les résultats d'éligibilité ou suitability existants deviennent partie du contexte que Knowledge évalue. Ajouter un nouveau domaine policy, une juridiction ou une décision agent-driven sans migrer le moteur sous-jacent. |
| **Shadow** | Knowledge évalue la décision composite du copilote en parallèle du process existant. Comparer les résultats pendant une fenêtre définie avant de donner l'autorité à Knowledge. |
| **Nouvelle frontière de décision** | La décision *« puis-je proposer ceci ? »* du copilote tourne sur Knowledge dès le premier jour. Les moteurs existants restent l'autorité pour les flows qu'ils possèdent déjà. |

Knowledge n'est pas un projet de migration.

## Pack de décision Wealth

Pour un engagement design-partner, Asplenz ship un point de départ opérationnel que Compliance peut calibrer contre les policies propres de la firme :

| Composant | Ce que c'est |
|---|---|
| **Scope schema** | Le vocabulaire que la couche de décision utilise : product complexity, risk rating, client experience level, solicitation type, booking centre, RM location, post-trade exposure |
| **Quatre templates de policy + règles d'exemple** | Un modèle de décision opérationnel avec des thresholds illustratifs, prêt pour calibration |
| **Intégration de référence RM-copilot** | Un script opérationnel montrant le copilote appelant `/resolve` progressivement à travers la décision composite |
| **Playbook de calibration** | Le runbook que Compliance et l'équipe d'engineering utilisent pour installer, calibrer et répéter |

**Knowledge évalue la policy encodée de l'institution. Il ne remplace pas le jugement réglementaire de l'institution ni n'exécute l'action métier qui en résulte.** Le pack ne livre pas d'interprétation réglementaire ; il donne à la banque une forme opérationnelle à calibrer.

## Commencer par une décision RM

Pickez une décision que votre copilote RM doit prendre qui est actuellement gouvernée par de l'interprétation humaine, des procédures fragmentées ou de la logique d'agent custom. Faites-la tourner en shadow mode contre le process actuel. Cutoverez quand la parité et l'audit sont prouvés.

**[Explorer un design partnership](/pilot)** &nbsp; · &nbsp; **[Parlez-nous](/contact)**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Pour équipes produit IA](/solutions/by-role/ai-product-teams) | L'angle copilote RM : intégration côté agent |
| [Pour compliance officers](/solutions/by-role/compliance-officers) | L'angle compliance : ownership des règles, coverage, approbations |
| [Progressive context](/product/progressive-context) | La boucle `/resolve` que le copilote navigue |
| [Enforcement](/product/enforcement) | Verdicts signés, PEP, chaîne de confiance à quatre acteurs |
| [Auditability](/product/auditability) | Questions régulateur : Consultation, RuleVersion, trace de précédence |
