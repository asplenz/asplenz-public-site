# 🇫🇷 Référence Conceptuelle : Infrastructure de Snapshot Décisionnel

Ce document fournit une définition formelle et explicite de l'Infrastructure de Snapshot Décisionnel.

Il est destiné aux institutions, aux équipes juridiques, aux auditeurs et aux architectes de systèmes qui exigent des limites ontologiques précises, des définitions invariantes et un usage non ambigu des termes liés à la preuve à l'exécution.

Ce document n'est pas une introduction. Il ne vise ni la concision ni la promotion.

### La preuve avant les questions

L'**Infrastructure de Snapshot Décisionnel** établit une couche de preuve à l'exécution pour les systèmes de décision automatisés et semi-automatisés opérant dans des contextes institutionnels. Son objectif est unique : préserver des états factuels immuables au moment exact où les décisions deviennent irréversibles, indépendamment de l'évolution ultérieure du système.

Cette infrastructure n'explique, ne justifie, ni n'évalue les décisions. Elle préserve ce qui a été exécuté.

---

## Résumé opérationnel

Les organisations s'appuient de plus en plus sur des systèmes de décision dont les résultats entraînent des conséquences opérationnelles, juridiques, financières et réputationnelles durables. Ces systèmes évoluent continuellement : les modèles sont ré-entraînés, les règles ajustées, les sources de données modifiées, les infrastructures refondues et les équipes renouvelées. Pourtant, les décisions produites restent souvent examinables bien après que les conditions techniques ayant présidé à leur création ont disparu.

Dans la plupart des organisations, l'état factuel des décisions passées n'est pas préservé au moment de l'exécution. Lorsque des questions surgissent, les institutions tentent de reconstruire ce qui s'est passé à l'aide de logs, de traces, de référentiels de configuration, de tableaux de bord et de souvenirs humains. Ce processus est intrinsèquement fragile, coûteux et incertain. Il produit des récits plutôt que des faits.

L'Infrastructure de Snapshot Décisionnel comble cette lacune structurelle. Elle introduit une couche de preuve à l'exécution dont le seul but est de capturer, au point de non-retour, l'état factuel complet d'une décision et de le préserver sous la forme d'un artefact immuable et auto-contenu. Cet artefact existe indépendamment de l'évolution future du système qui l'a produit.

---

## Énoncé du problème

### Absence structurelle de faits à l'exécution

Les systèmes de décision automatisés ne préservent généralement pas leur propre réalité au moment de l'exécution. À l'instant où une décision devient irréversible, le système consomme des entrées, applique une logique, opère sous une configuration concrète et produit un résultat. Cet état composite n'existe que de manière transitoire.

Après l'exécution, le système conserve des traces : logs, métriques, alertes, référentiels de configuration, états de base de données. Ces traces n'ont pas été conçues pour constituer un enregistrement factuel complet et durable de l'exécution. Elles sont partielles, distribuées et dépendantes de la survie et de la stabilité de systèmes en constante évolution.

Lorsque les institutions doivent plus tard établir ce qui s'est produit, elles doivent reconstruire cet état a posteriori. Cette exigence ne découle pas d'une mauvaise discipline technique ou d'une défaillance organisationnelle. Elle provient d'une inadéquation structurelle entre ce qui est nécessaire pour établir les faits et ce que les systèmes d'exécution sont conçus pour conserver.

La reconstruction échoue donc de manière structurelle, et non contingente.

---

## Principe central

### Capturer au point de non-retour

Une décision devient un fait lorsqu'elle est exécutée. À cet instant :

* des entrées spécifiques sont consommées,
* une logique spécifique est appliquée,
* dans un contexte d'exécution spécifique,
* produisant un résultat spécifique.

Une fois ce moment passé, l'état factuel d'origine ne peut plus être reconstitué avec certitude. La preuve doit donc être produite au moment de l'exécution, et non déduite plus tard.

---

## Artefact de Snapshot Décisionnel

### Objet canonique

L'**Artefact de Snapshot Décisionnel** est le seul objet probant à l'exécution défini dans ce document. Toutes les références aux faits ou à la preuve se rapportent exclusivement aux propriétés de cet artefact.

L'artefact est produit par le système décisionnel lui-même au moment où la décision devient irréversible. Il n'est pas dérivé de logs ou d'observations externes.

### Propriétés invariantes

Un Artefact de Snapshot Décisionnel garantit les invariants suivants, qui ne peuvent être modifiés après création :

* **Complétude** – toutes les entrées, l'état de la logique, le contexte d'exécution et les résultats présents à l'exécution sont intégrés.
* **Intégrité temporelle** – l'horodatage de l'exécution est lié cryptographiquement à l'artefact.
* **Immuabilité** – l'artefact ne peut être ni modifié, ni amendé, ni supprimé.
* **Ordonnancement** – la position de l'artefact dans la séquence d'exécution est explicite et vérifiable.
* **Authenticité** – l'origine et l'intégrité de l'artefact sont prouvables par cryptographie.

Tout enregistrement nécessitant des systèmes externes pour établir les faits d'exécution n'est pas un Artefact de Snapshot Décisionnel et ne constitue pas une preuve à l'exécution.

---

## Preuve vs Reconstruction

### Distinction ontologique

Dans ce document, la **preuve** désigne exclusivement les faits d'exécution incarnés dans un Artefact de Snapshot Décisionnel. La preuve n'existe que si elle a été produite au moment de l'exécution.

La **reconstruction** désigne tout processus a posteriori qui tente de déduire les états d'exécution passés en utilisant des traces survivantes, de l'interprétation ou des connaissances rétrospectives. Ces deux notions ne sont pas interchangeables.

### Limites structurelles de la reconstruction

La reconstruction dépend nécessairement d'éléments qui évoluent ou disparaissent :

* configurations mutables,
* modèles ré-entraînés,
* sources de données modifiées,
* rotation des logs,
* souvenirs humains.

L'Infrastructure de Snapshot Décisionnel n'améliore pas la reconstruction. Elle la rend superflue dans son périmètre.

| Reconstruction | Preuve à l'exécution |
| --- | --- |
| Récit assemblé après le résultat | Fait déclaré avant l'examen |
| Dépend de traces survivantes | Artefact auto-contenu |
| Soumise au biais de rétrospective | Préserve la connaissance au temps T |
| Coût croissant avec le temps | Coût fixe à l'exécution |

---

## Séparation de l'Exécution et de l'Évaluation

L'Infrastructure de Snapshot Décisionnel distingue :

* **Les Exécutions** – faits immuables déclarés au temps T.
* **Les Évaluations** – appréciations humaines ou institutionnelles produites ultérieurement, explicitement datées et liées.

[Image showing the separation of layers between immutable execution facts and subsequent subjective evaluations]

Cette séparation élimine structurellement le biais de rétrospective en empêchant les connaissances ultérieures de contaminer les faits d'exécution.

---

## Principes et Limites

### Principe : les faits n'existent qu'en tant qu'artefacts

Dans cette infrastructure, un fait n'est pas une notion abstraite. Un fait n'existe qu'en tant qu'il est incarné dans un Artefact de Snapshot Décisionnel. Les affirmations sur la réalité de l'exécution sont des affirmations sur le contenu de l'artefact.

### Limite : non-revendications

Cette infrastructure ne prétend explicitement pas :

* expliquer les décisions ou leur logique,
* évaluer la justesse ou la conformité,
* attribuer une responsabilité ou une faute,
* remplacer les processus d'audit ou de gouvernance.

Elle préserve les faits d'exécution, et rien d'autre.

---

## Conclusion

La reconstruction a posteriori est structurellement incapable de fournir une certitude factuelle durable. Elle assemble des récits une fois les résultats connus, en utilisant des traces qui n'ont jamais été conçues pour servir de preuve. L'Infrastructure de Snapshot Décisionnel restaure la continuité factuelle en garantissant que la preuve existe avant que les questions ne surgissent.

Elle ne dicte ni l'interprétation, ni le jugement. Elle préserve le terrain factuel sur lequel s'exerce la discrétion institutionnelle. La preuve n'existe qu'au moment de l'exécution. Sa préservation n'est pas un choix méthodologique, c'est une nécessité structurelle.

---

---

# 🇬🇧 Conceptual Reference document

## Conceptual Reference for Decision Snapshot Infrastructure

This document provides a formal, explicit definition of Decision Snapshot Infrastructure.

It is intended for institutions, legal teams, auditors, and system architects who require precise ontological boundaries, invariant definitions, and non-ambiguous use of terms related to execution-time evidence.

This document is not an introduction. It does not aim to be concise or promotional.

### Evidence before questions

**Decision Snapshot Infrastructure** establishes an execution-time evidence layer for automated and semi-automated decision systems operating in institutional contexts. Its purpose is singular: preserve immutable factual states at the exact moment decisions become irreversible, independently of subsequent system evolution.

This infrastructure does not explain, justify, or evaluate decisions. It preserves what was executed.

---

## Executive Summary

Organizations increasingly rely on automated and semi-automated decision systems whose outputs carry durable operational, legal, financial, and reputational consequences. These systems evolve continuously: models are retrained, rules are adjusted, data sources change, infrastructures are refactored, and teams rotate. Yet the decisions produced by these systems often remain examinable long after the technical conditions that produced them have disappeared.

In most organizations, the factual state of past decisions is not preserved at execution time. When questions arise, institutions attempt to reconstruct what happened using logs, traces, configuration repositories, dashboards, tickets, and human recollection. This process is inherently fragile, costly, and uncertain. It produces narratives rather than facts.

Decision Snapshot Infrastructure addresses this structural gap. It introduces an execution-time evidence layer whose sole purpose is to capture, at the point of no return, the complete factual state of a decision and preserve it as an immutable, self-contained artifact. This artifact exists independently of the future evolution of the system that produced it.

---

## Problem Statement

### Structural absence of execution-time facts

Automated decision systems generally do not preserve their own execution-time reality. At the moment a decision becomes irreversible, the system consumes inputs, applies logic, operates under a concrete configuration, and produces an outcome. This composite state exists only transiently.

After execution, the system retains traces: logs, metrics, alerts, configuration repositories, database states. These traces were not designed to constitute a complete, durable factual record of execution. They are partial, distributed, and dependent on the continued existence and stability of evolving systems.

When institutions are later required to establish what occurred, they must reconstruct this state after the fact. This requirement does not arise from poor engineering discipline or organizational failure. It arises from a structural mismatch between what is needed to establish facts and what execution systems are designed to retain.

Reconstruction therefore fails structurally, not contingently.

---

## Core Principle

### Capture at the point of no return

A decision becomes a fact when it is executed. At that moment:

* specific inputs are consumed,
* specific logic is applied,
* under a specific execution context,
* producing a specific outcome.

Once this moment passes, the original factual state cannot be reconstituted with certainty. Evidence must therefore be produced at execution time, not inferred later.

---

## Decision Snapshot Artifact

### Canonical object

The **Decision Snapshot Artifact** is the sole execution-time evidentiary object defined in this document. All references to facts, evidence, or execution-time state refer exclusively to properties of this artifact.

The artifact is produced by the decision-making system itself at the moment the decision becomes irreversible. It is not derived from logs, traces, or external observation.

### Invariant properties

A Decision Snapshot Artifact guarantees the following invariants, which cannot be altered after creation:

* **Completeness** – all inputs, logic state, execution context, and outputs present at execution time are embedded.
* **Temporal integrity** – the execution timestamp is cryptographically bound to the artifact.
* **Immutability** – the artifact cannot be modified, amended, or deleted.
* **Ordering** – the artifact’s position within the execution sequence is explicit and verifiable.
* **Authenticity** – the origin and integrity of the artifact are cryptographically provable.

Any record that requires external systems to establish execution-time facts is not a Decision Snapshot Artifact and does not constitute execution-time evidence.

---

## Evidence vs Reconstruction

### Ontological distinction

In this document, **evidence** refers exclusively to execution-time facts embodied in a Decision Snapshot Artifact. Evidence exists only if it was produced at execution time.

**Reconstruction** refers to any post-hoc process that attempts to infer past execution states using surviving traces, interpretation, or retrospective knowledge.

These two notions are not interchangeable.

### Structural limits of reconstruction

Reconstruction necessarily depends on elements that evolve or disappear over time:

* mutable configurations,
* retrained models,
* altered data sources,
* rotated logs,
* human recollection.

Because these elements do not preserve their past states exhaustively or immutably, reconstruction cannot reliably re-establish the factual state that existed at execution time.

### Consequence

Where Decision Snapshot Artifact exist, reconstruction is not required to establish facts. It may still be used for analysis or learning, but it cannot serve as a source of evidence.

| Reconstruction | Execution-time Evidence |
| --- | --- |
| Narrative assembled after outcome | Fact declared before examination |
| Depends on surviving traces | Self-contained artifact |
| Subject to hindsight bias | Preserves knowledge at Time T |
| Cost increases over time | Cost fixed at execution |

---

## Separation of Execution and Evaluation

Decision Snapshot Infrastructure distinguishes:

* **Executions** – immutable facts declared at Time T.
* **Evaluations** – human or institutional assessments produced later, explicitly timestamped and linked.

This separation structurally eliminates hindsight bias by preventing later knowledge from contaminating execution-time facts.

---

## Principles and Boundaries

### Principle: facts exist only as artifacts

In this infrastructure, a fact is not an abstract notion. A fact exists only insofar as it is embodied in a Decision Snapshot Artifact. Statements about execution-time reality are therefore statements about artifact content.

### Principle: separation of execution and interpretation

Decision Snapshot Infrastructure records executions. Interpretation, evaluation, judgment, and communication occur after execution and remain institutional responsibilities.

### Boundary: non-claims

This infrastructure explicitly does not:

* explain decisions or their rationale,
* evaluate correctness or compliance,
* assign responsibility or liability,
* replace audit, governance, or legal processes.

It preserves execution-time facts and nothing else.

---

## Conclusion

Automated decision systems do not fail because institutions are unable to act. They fail when, over time, institutions can no longer establish with certainty what was actually executed, under which conditions, and with what information.

Post-hoc reconstruction is structurally incapable of providing this certainty. It assembles narratives after outcomes are known, using traces that were never designed to serve as durable evidence. As systems evolve, the cost and fragility of reconstruction increase.

Decision Snapshot Infrastructure restores factual continuity by ensuring that execution-time evidence exists before questions arise. It replaces reliance on reconstruction with immutable facts, preserved independently of system lifecycle and organizational change.

Evidence exists only at execution time. Preserving it is not a methodological choice. It is a structural necessity.