---
slug: product
title_en: "Product"
title_fr: "Produit"
description_en: "Built around the compliance operating model. Three pillars, nine entities, one runtime."
description_fr: "Construit autour du modèle opérationnel compliance. Trois piliers, neuf entités, un runtime."
---

<!-- @lang en -->

# Built around the compliance operating model

Most decision platforms give you condition, action, priority : three primitives from which you build the rest yourself. Knowledge starts one level higher : the objects a compliance department actually manipulates are native in the runtime.

## Nine entities, one operating model

- **Policy** : a named container for related rules. Carries a governance log of adoption, amendment and renewal acts.
- **Rule** : a directive with a scope, a severity, an optional metric condition, and a rationale that explains why it exists.
- **Target** : a named audience of principals. A rule is applied to a target ; a principal is a member of one or more targets.
- **Approval** : a request for exception, filed by a business actor when a check blocks. One per operation, N triggers attached.
- **Override** : an authorised exception, scope-bounded, time-bounded, tied to the rules it neutralises and to the approver who granted it.
- **Pause** : a temporal admin suspension of a rule or a target. Strictly permissive : it never converts allow into block.
- **Consultation** : the immutable audit row written on every check or reason call. Carries the pinned rule versions, the resolved audience, the winning rule and the precedence trace.
- **GovernanceNote** : a structured act inside a policy's governance log. Adoption, amendment, renewal, all recorded and citable.
- **Event** : the audit trail for every mutation of every entity.

> We didn't build a better rules engine. We built the compliance operating model.

## The three pillars

### 1. Compliance operating model

Every compliance workflow (from routine trade checks to yearly regulator audits) reduces to reads and writes on these nine entities. Onboarding a new relationship manager is a Target membership. Approving an exception mints an Override. Suspending a rule while reviewing it is a Pause. The vocabulary matches the discipline.

### 2. Deterministic execution

The engine matches a business action against candidate rules, applies severity ranking + scope specificity + priority, and returns a typed verdict in milliseconds. Same inputs always produce the same decision. The severity ladder (from absolute ban to hard block to require approval to informative to allow) is the primary control the compliance officer exercises. AI never sits on this critical path. It only renders the resulting state into prose when someone asks.

### 3. Replayable governance

Consultations are immutable and cite pinned rule versions. Six months later, one API call reconstructs the exact reasoning : the rule versions as they stood, the scope, the winning rule, the trace, the override in effect if any. A separate call renders the same state as natural language an auditor can read directly. The regulator asks « why was this blocked on 15 March ? ». You answer without archaeology.

## What Knowledge captures : beyond rules

A traditional decision engine answers *what rule fired ?*. Knowledge also answers :

- **Why does this rule exist ?** : every rule carries a rationale field, cited in prose output.
- **Who approved it ?** : the governance log records the adoption act with author and date.
- **Why was it modified ?** : every rule version carries the reason for the change, mandatory in V3.
- **Why was it overridden ?** : every Override has a justification and a decider.
- **Why was it paused ?** : Pauses carry a note and an initiator.
- **Why was it attached to this audience ?** : TargetRuleAttachment records the decision, its author, and its rationale.

Every governance movement is a first-class object with authorship, timestamp, and full history. There is no ephemeral state in the compliance backbone.

## What Knowledge replaces

For most compliance teams today, the discipline lives across :

- Excel sheets that never quite match the current book of rules
- Word procedures nobody reads at decision time
- SharePoint pages of last quarter's exceptions
- Email approvals that no auditor can reconstruct in year 3
- Rules re-implemented in three or four business applications, inevitably out of sync

Knowledge collapses these into one operating model that compliance teams control directly, that business systems integrate against, and that produces the audit trail a regulator asks for.

<!-- @lang fr -->

# Construit autour du modèle opérationnel compliance

La plupart des plateformes de décision vous donnent condition, action, priority : trois primitives à partir desquelles vous construisez tout le reste. Knowledge démarre un niveau plus haut : les objets qu'un département compliance manipule réellement sont natifs dans le runtime.

## Neuf entités, un modèle opérationnel

- **Policy** : un conteneur nommé de règles liées. Porte un journal de gouvernance : actes d'adoption, d'amendement et de renouvellement.
- **Rule** : une directive avec un scope, une sévérité, une condition métrique optionnelle, et un rationale qui explique pourquoi elle existe.
- **Target** : une audience nommée de principals. Une règle est appliquée à une target ; un principal est membre d'une ou plusieurs targets.
- **Approval** : une demande d'exception, déposée par un acteur métier quand un check bloque. Une par opération, N triggers attachés.
- **Override** : une exception autorisée, scopée, bornée dans le temps, liée aux règles qu'elle neutralise et à l'approbateur qui l'a accordée.
- **Pause** : une suspension administrative temporaire d'une règle ou d'une target. Strictement permissive : ne convertit jamais un autorisé en bloqué.
- **Consultation** : la ligne d'audit immuable écrite à chaque appel de check ou de reason. Porte les versions de règles figées, l'audience résolue, la règle gagnante et la trace de précédence.
- **GovernanceNote** : un acte structuré dans le journal de gouvernance d'une policy. Adoption, amendement, renouvellement, tous enregistrés et citables.
- **Event** : la piste d'audit de chaque mutation de chaque entité.

> Nous n'avons pas construit un meilleur moteur de règles. Nous avons construit le modèle opérationnel compliance.

## Les trois piliers

### 1. Modèle opérationnel compliance

Chaque workflow compliance (du check de trade routinier à l'audit régulateur annuel) se réduit à des lectures et écritures sur ces neuf entités. Onboarder un nouveau chargé de clientèle = une adhésion à Target. Approuver une exception = créer un Override. Suspendre une règle en cours de revue = une Pause. Le vocabulaire épouse la discipline.

### 2. Exécution déterministe

Le moteur confronte une action métier aux règles candidates, applique classement par sévérité + spécificité de scope + priorité, et renvoie un verdict typé en millisecondes. Mêmes entrées produisent toujours la même décision. L'échelle de sévérité (d'interdiction absolue à bloquant strict à approbation requise à informatif à autorisé) est le levier principal du compliance officer. L'IA ne siège jamais sur ce chemin critique. Elle rend seulement l'état résultant en prose quand quelqu'un le demande.

### 3. Gouvernance rejouable

Les Consultations sont immuables et citent des versions figées de règles. Six mois plus tard, un appel API reconstitue le raisonnement exact : les versions de règles telles qu'elles étaient, le scope, la règle gagnante, la trace, l'override en vigueur le cas échéant. Un appel séparé rend le même état en langage naturel qu'un auditeur peut lire directement. Le régulateur demande « pourquoi ceci a-t-il été bloqué le 15 mars ? ». Vous répondez sans archéologie.

## Ce que Knowledge capture : au-delà des règles

Un moteur de décision classique répond à *quelle règle a fired ?*. Knowledge répond aussi à :

- **Pourquoi cette règle existe-t-elle ?** : chaque règle porte un champ rationale, cité dans la prose de sortie.
- **Qui l'a approuvée ?** : le journal de gouvernance enregistre l'acte d'adoption avec auteur et date.
- **Pourquoi a-t-elle été modifiée ?** : chaque version de règle porte le motif du changement, obligatoire en V3.
- **Pourquoi a-t-elle été overridée ?** : chaque Override a une justification et un décideur.
- **Pourquoi a-t-elle été mise en pause ?** : les Pauses portent une note et un initiateur.
- **Pourquoi attachée à cette audience ?** : TargetRuleAttachment enregistre la décision, son auteur, et son rationale.

Chaque mouvement de gouvernance est un objet de première classe avec paternité, timestamp et historique complet. Il n'y a pas d'état éphémère dans le socle compliance.

## Ce que Knowledge remplace

Pour la plupart des équipes compliance aujourd'hui, la discipline vit à travers :

- Des feuilles Excel qui ne collent jamais tout à fait au corpus de règles courant
- Des procédures Word que personne ne lit au moment de la décision
- Des pages SharePoint des exceptions du trimestre dernier
- Des approbations par email qu'aucun auditeur ne peut reconstituer en année 3
- Des règles réimplémentées dans trois ou quatre applications métier, inévitablement désynchronisées

Knowledge collapse cela en un modèle opérationnel unique que les équipes compliance contrôlent directement, contre lequel les systèmes métier s'intègrent, et qui produit la piste d'audit qu'un régulateur demande.
