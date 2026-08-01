---
slug: product
title_en: "Product"
title_fr: "Produit"
description_en: "Built around the compliance operating model. Three pillars, nine entities, one runtime — with native decision tables."
description_fr: "Construit autour du modèle opérationnel compliance. Trois piliers, neuf entités, un runtime — avec les decision tables en natif."
---

<!-- @lang en -->

# Built around the compliance operating model

Nine entities replace spreadsheets, emails, Word procedures and duplicated business logic with one executable compliance model. Knowledge starts where decision platforms stop : the objects a compliance department actually manipulates are native in the runtime.

**Talk to us · Explore the ecosystem**

## Nine entities, one operating model

Every compliance workflow reduces to reads and writes on these nine entities. Onboarding a new relationship manager is a Target membership. Approving an exception mints an Override. Suspending a rule while reviewing it is a Pause. The vocabulary matches the discipline, and the discipline replaces the scatter of tools it used to live across.

### The compliance data model

- **Policy** — A named container for related rules. Carries a governance log of adoption, amendment and renewal acts.
- **Rule** — A directive expressed as one or more rows. Each row carries a scope, an optional metric condition and an optional output. A single row is a simple directive ; multiple rows form a decision table read top-to-bottom.
- **Target** — A named audience of principals. A rule is applied to a target ; a principal is a member of one or more targets.
- **Approval** — A request for exception, filed by a business actor when a check blocks. One per operation, N triggers attached.
- **Override** — An authorised exception, scope-bounded, time-bounded, tied to the rules it neutralises and to the approver who granted it.
- **Pause** — A temporal admin suspension of a rule or a target. Strictly permissive : it never converts allow into block.
- **Consultation** — The immutable audit row written on every check or reason call. Carries the pinned rule versions, the resolved audience, the winning rule and the precedence trace.
- **GovernanceNote** — A structured act inside a policy's governance log. Adoption, amendment, renewal, all recorded and citable.
- **Event** — The audit trail for every mutation of every entity.

> *We didn't build a better rules engine. We built the compliance operating model.*

## Decision tables without losing governance

**A decision table is a governed Rule, not a separate artefact.**

Traditional BRMS platforms treat decision tables as a second class of object, with its own storage, its own approval flow and its own audit trail. Knowledge treats a decision table as a Rule with multiple rows. Same governance lifecycle, same approval, same override, same replayable consultation. Multiple operational outcomes.

```
        Policy
    (Governance log)
          ↓
         Rule
  (One approval, one override)
    Rows : Row 1 · Row 2 · Row 3
          ↓
      Consultation
  (One replayable audit row)
```

*One Rule, many rows, one governance lifecycle.*

### Traditional BRMS

- Decision table = separate artefact
- Multiple approvals
- Multiple overrides
- Multiple audit trails

### Knowledge

- Decision table = Rule with multiple rows
- One approval
- One override
- One replayable consultation

### Example : MAS equity exposure caps, expressed as one Rule with three rows

| Client segment | Equity cap |
|---|---|
| Retail · lower net worth | 40 % |
| Retail · high net worth | 50 % |
| Accredited investor | 70 % |

**One Rule. Three rows. One governance lifecycle. Three operational outcomes.**

## The three pillars

### 01. Compliance operating model

Every compliance workflow, from routine trade checks to yearly regulator audits, reduces to reads and writes on the nine entities — Policies, Rules (single-row directives or decision tables), Targets, Approvals, Overrides, Pauses, Consultations, GovernanceNotes and Events. The vocabulary matches the discipline. Compliance teams stop translating policy into rules-engine primitives.

### 02. Deterministic execution

The engine matches a business action against candidate rules, flattens each rule into its rows, applies severity ranking plus row scope specificity plus priority, and returns a typed verdict in milliseconds. Same inputs always produce the same decision. AI never sits on this critical path ; it only renders the resulting state into prose when someone asks.

### 03. Replayable governance

Consultations are immutable and cite pinned rule versions, including the row that won. Six months later, one call reconstructs the exact reasoning : the rule versions as they stood, the winning row and its scope, the trace, the override in effect if any. The regulator asks « why was this blocked on 15 March ? ». You answer without archaeology.

## What Knowledge captures beyond rules

A traditional decision engine answers one question. Knowledge answers seven.

**A traditional decision engine answers :**

- What rule fired ?

**Knowledge answers :**

- What rule fired ?
- Why does this rule exist ?
- Who approved it ?
- Why was it modified ?
- Why was it overridden ?
- Why was it paused ?
- Why was it attached to this audience ?

Every governance movement is a first-class object with authorship, timestamp, and full history. There is no ephemeral state in the compliance backbone.

- **Rationale** : Every rule carries a rationale field, cited in prose output.
- **Adoption** : The governance log records the adoption act with author and date.
- **Modification** : Every rule version carries the mandatory reason for the change.
- **Override** : Every Override has a justification and a decider.
- **Pause** : Pauses carry a note and an initiator.
- **Attachment** : TargetRuleAttachment records the decision, its author, and its rationale.

## What Knowledge replaces

For most compliance teams today, the discipline lives across a scatter of tools none of which was designed for the job.

- Excel sheets that never quite match the current book of rules
- Word procedures nobody reads at decision time
- SharePoint pages of last quarter's exceptions
- Email approvals that no auditor can reconstruct in year 3
- Rules re-implemented in three or four business applications, inevitably out of sync

Knowledge collapses these into one operating model that compliance teams control directly, that business systems integrate against, and that produces the audit trail a regulator asks for.

## Ready to walk through it live ?

The best way to see the product is on a demo tenant that mirrors your shape.

**Book a demo · Explore the ecosystem**

<!-- @lang fr -->

# Construit autour du modèle opérationnel compliance

Neuf entités remplacent les feuilles Excel, les emails, les procédures Word et la logique métier dupliquée par un modèle compliance exécutable unique. Knowledge démarre là où les plateformes de décision s'arrêtent : les objets qu'un département compliance manipule réellement sont natifs dans le runtime.

**Nous parler · Explorer l'écosystème**

## Neuf entités, un modèle opérationnel

Chaque workflow compliance se réduit à des lectures et écritures sur ces neuf entités. Onboarder un nouveau chargé de clientèle = une adhésion à Target. Approuver une exception = créer un Override. Suspendre une règle en cours de revue = une Pause. Le vocabulaire épouse la discipline, et la discipline remplace l'éparpillement d'outils dans lequel elle vivait.

### Le modèle de données compliance

- **Policy** — Un conteneur nommé de règles liées. Porte un journal de gouvernance : actes d'adoption, d'amendement et de renouvellement.
- **Rule** — Une directive exprimée en une ou plusieurs rangées. Chaque rangée porte un scope, une condition métrique optionnelle et une sortie optionnelle. Une seule rangée = directive simple ; plusieurs rangées = decision table lue de haut en bas.
- **Target** — Une audience nommée de principals. Une règle est appliquée à une target ; un principal est membre d'une ou plusieurs targets.
- **Approval** — Une demande d'exception, déposée par un acteur métier quand un check bloque. Une par opération, N triggers attachés.
- **Override** — Une exception autorisée, scopée, bornée dans le temps, liée aux règles qu'elle neutralise et à l'approbateur qui l'a accordée.
- **Pause** — Une suspension administrative temporaire d'une règle ou d'une target. Strictement permissive : ne convertit jamais un autorisé en bloqué.
- **Consultation** — La ligne d'audit immuable écrite à chaque appel de check ou de reason. Porte les versions de règles figées, l'audience résolue, la règle gagnante et la trace de précédence.
- **GovernanceNote** — Un acte structuré dans le journal de gouvernance d'une policy. Adoption, amendement, renouvellement, tous enregistrés et citables.
- **Event** — La piste d'audit de chaque mutation de chaque entité.

> *Nous n'avons pas construit un meilleur moteur de règles. Nous avons construit le modèle opérationnel compliance.*

## Les decision tables sans perdre la gouvernance

**Une decision table est une Rule gouvernée, pas un artefact séparé.**

Les BRMS classiques traitent les decision tables comme une seconde classe d'objet : stockage propre, workflow d'approbation propre, piste d'audit propre. Knowledge traite une decision table comme une Rule avec plusieurs rangées. Même cycle de gouvernance, même approbation, même override, même consultation rejouable. Plusieurs sorties opérationnelles.

```
        Policy
 (Journal de gouvernance)
          ↓
         Rule
 (Une approbation, un override)
   Rangées : Row 1 · Row 2 · Row 3
          ↓
     Consultation
  (Une ligne d'audit rejouable)
```

*Une Rule, plusieurs rangées, un seul cycle de gouvernance.*

### BRMS classique

- Decision table = artefact séparé
- Plusieurs approbations
- Plusieurs overrides
- Plusieurs pistes d'audit

### Knowledge

- Decision table = Rule avec plusieurs rangées
- Une approbation
- Un override
- Une consultation rejouable

### Exemple : plafonds MAS d'exposition equity, exprimés en une Rule à trois rangées

| Segment client | Plafond equity |
|---|---|
| Retail · lower net worth | 40 % |
| Retail · high net worth | 50 % |
| Accredited investor | 70 % |

**Une Rule. Trois rangées. Un seul cycle de gouvernance. Trois sorties opérationnelles.**

## Les trois piliers

### 01. Modèle opérationnel compliance

Chaque workflow compliance, du check de trade routinier à l'audit régulateur annuel, se réduit à des lectures et écritures sur les neuf entités — Policies, Rules (directives à une rangée ou decision tables), Targets, Approvals, Overrides, Pauses, Consultations, GovernanceNotes et Events. Le vocabulaire épouse la discipline. Les équipes compliance arrêtent de traduire de la policy en primitives de rules-engine.

### 02. Exécution déterministe

Le moteur confronte une action métier aux règles candidates, aplatit chaque règle en ses rangées, applique classement par sévérité plus spécificité du scope de la rangée plus priorité, et renvoie un verdict typé en millisecondes. Mêmes entrées produisent toujours la même décision. L'IA ne siège jamais sur ce chemin critique ; elle rend seulement l'état résultant en prose quand quelqu'un le demande.

### 03. Gouvernance rejouable

Les Consultations sont immuables et citent des versions figées de règles, y compris la rangée qui a gagné. Six mois plus tard, un appel reconstitue le raisonnement exact : les versions de règles telles qu'elles étaient, la rangée gagnante et son scope, la trace, l'override en vigueur le cas échéant. Le régulateur demande « pourquoi ceci a-t-il été bloqué le 15 mars ? ». Vous répondez sans archéologie.

## Ce que Knowledge capture au-delà des règles

Un moteur de décision classique répond à une question. Knowledge répond à sept.

**Un moteur de décision classique répond à :**

- Quelle règle a fired ?

**Knowledge répond à :**

- Quelle règle a fired ?
- Pourquoi cette règle existe-t-elle ?
- Qui l'a approuvée ?
- Pourquoi a-t-elle été modifiée ?
- Pourquoi a-t-elle été overridée ?
- Pourquoi a-t-elle été mise en pause ?
- Pourquoi attachée à cette audience ?

Chaque mouvement de gouvernance est un objet de première classe avec paternité, timestamp et historique complet. Il n'y a pas d'état éphémère dans le socle compliance.

- **Rationale** : Chaque règle porte un champ rationale, cité dans la prose de sortie.
- **Adoption** : Le journal de gouvernance enregistre l'acte d'adoption avec auteur et date.
- **Modification** : Chaque version de règle porte le motif obligatoire du changement.
- **Override** : Chaque Override a une justification et un décideur.
- **Pause** : Les Pauses portent une note et un initiateur.
- **Attachement** : TargetRuleAttachment enregistre la décision, son auteur, et son rationale.

## Ce que Knowledge remplace

Pour la plupart des équipes compliance aujourd'hui, la discipline vit à travers un éparpillement d'outils dont aucun n'a été conçu pour ce travail.

- Des feuilles Excel qui ne collent jamais tout à fait au corpus de règles courant
- Des procédures Word que personne ne lit au moment de la décision
- Des pages SharePoint des exceptions du trimestre dernier
- Des approbations par email qu'aucun auditeur ne peut reconstituer en année 3
- Des règles réimplémentées dans trois ou quatre applications métier, inévitablement désynchronisées

Knowledge collapse cela en un modèle opérationnel unique que les équipes compliance contrôlent directement, contre lequel les systèmes métier s'intègrent, et qui produit la piste d'audit qu'un régulateur demande.

## Prêt à voir la plateforme en direct ?

La meilleure façon de découvrir le produit est sur un tenant de démonstration qui reproduit votre forme.

**Réserver une démo · Explorer l'écosystème**
