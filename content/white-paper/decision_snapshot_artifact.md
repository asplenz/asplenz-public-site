# Version Française

# L'Artefact de Persistance Décisionnelle

## Définition

Un **Artefact de Persistance Décisionnelle** est un enregistrement auto-contenu et immuable qui capture l'état factuel complet d'une décision au moment précis où elle devient irréversible.

Ce n'est pas une entrée de log.
Ce n'est pas une trace d'exécution.
Ce n'est pas un rapport généré après coup.

C'est la **déclaration institutionnelle officielle** du système décisionnel lui-même, faisant foi de ce qui existait — entrées, contexte, évaluation et sortie — au point de non-retour.

Le Persistance Décisionnelle ne décrit pas une décision.
**Il est la décision, figée dans le temps.**

*(Ci-après dénommé l'« Artefact »)*

---

## Propriétés Invariantes

Un Artefact de Persistance Décisionnelle garantit cinq propriétés qui **ne peuvent être altérées après sa création**.

Ces propriétés ne sont pas des choix d'implémentation.
Ce sont des **invariants non négociables**.

| Propriété | Garantie |
| --- | --- |
| **Exhaustivité** | Contient toutes les entrées, contextes, évaluations et sorties présents au moment de la décision — rien ne doit être récupéré ailleurs. |
| **Intégrité Temporelle** | L'horodatage est lié cryptographiquement à l'enregistrement — le moment exact de l'exécution est indiscutable. |
| **Immuabilité** | Une fois écrit, l'artefact ne peut être modifié, amendé ou supprimé. |
| **Ordonnancement** | La position dans la séquence décisionnelle est explicite et vérifiable — ce qui est arrivé avant, ce qui est arrivé après. |
| **Authenticité** | Signé cryptographiquement — l'origine et l'intégrité sont prouvables. |

---

## Pourquoi l’Auto-Contenu ?

Un Artefact porte en lui-même tout ce qui est nécessaire pour établir ce qui s'est produit.

* **Aucune dépendance externe** — Il ne repose pas sur des bases de données, des API ou des systèmes qui pourraient changer ou disparaître.
* **Aucune reconstitution requise** — L'examinateur n'a pas besoin de consulter d'autres sources pour comprendre ce qui s'est passé.
* **Aucune interprétation requise pour établir les faits** — Les faits sont déclarés, pas déduits.

Cela signifie que :

> **Deux ans plus tard, l'artefact seul suffit à répondre :**
> *« Qu'est-ce que le système a vu, évalué et décidé à cet instant précis ? »*

Si la compréhension de la décision nécessite de récupérer des données ailleurs,
ce n'est **pas** un Artefact de Persistance Décisionnelle —
c'est un **pointeur vers une reconstitution**.

---

## Pourquoi il survit au système source

Les systèmes évoluent. Les modèles sont réentraînés. Les configurations sont mises à jour.
Les équipes tournent. Les fournisseurs changent. Les systèmes sont déclassés.

L'Artefact est explicitement conçu pour **survivre à sa source**.

| Réalité du système source | Garantie de l'Artefact |
| --- | --- |
| Modèle réentraîné mensuellement | L'artefact contient le hash et la version du modèle à T₀. |
| Configuration mise à jour | L'artefact contient l'état complet de la configuration à T₀. |
| Schéma de base de données modifié | L'artefact contient les données du snapshot, pas une clé étrangère. |
| Système mis hors service | L'artefact reste lisible et vérifiable de manière indépendante. |
| Fin de relation fournisseur | L'artefact n'a aucune dépendance d'exécution envers le fournisseur. |

L'Artefact ne demande pas au système source :
*« Qu'as-tu fait ? »*

**Il est le compte-rendu de ce qui a été fait.**

---

## Le Principe Fondamental : l'Indépendance de la Preuve

Une preuve qui dépend de l'existence continue, de la disponibilité
ou de la coopération du système source **n'est pas une preuve**.

C'est une promesse de reconstitution.

L'Artefact de Persistance Décisionnelle ne fait aucune promesse de ce genre.
**Il est la preuve.**

---

---

# English Version

# The Decision Snapshot Artifact

## Definition

A **Decision Snapshot Artifact** is a self-contained, immutable record that captures the complete factual state of a decision at the moment it becomes irreversible. It contains the Decision Snapshot.

It is not a log entry.
It is not a trace.
It is not a report generated after the fact.

It is the **institutional declaration of record**, by the decision-making system itself, of what existed — inputs, context, evaluation, and output — at the point of no return.

The Decision Snapshot does not describe a decision.
**It is the decision, fixed in time.**

*(Hereafter referred to as the "Snapshot Artifact")*

---

## Invariant Properties

A Decision Snapshot Artifact guarantees five properties that **cannot be altered after creation**.

These properties are not implementation choices.
They are **non-negotiable invariants**.

| Property | Guarantee |
| --- | --- |
| **Completeness** | Contains all inputs, context, evaluations, and outputs that were present at decision time — nothing must be fetched elsewhere. |
| **Temporal Integrity** | Timestamp is cryptographically bound to the record — the moment of execution cannot be disputed. |
| **Immutability** | Once written, the artifact cannot be modified, amended, or deleted. |
| **Ordering** | Position in the decision sequence is explicit and verifiable — what came before, what came after. |
| **Authenticity** | Cryptographically signed — origin and integrity are provable. |

---

## Why Self-Contained

A Decision Snapshot Artifact carries everything required to establish what occurred **within itself**.

* **No external dependencies** — It does not rely on databases, APIs, or systems that may change or disappear.
* **No reconstruction required** — The examiner does not need to query other sources to understand what happened.
* **No interpretation required to establish facts** — The facts are declared, not inferred.

This means:

> **Two years later, the artifact alone is sufficient to answer:**
> *“What did the system see, evaluate, and decide at that moment?”*

If understanding the decision requires fetching data from elsewhere,
it is **not** a Decision Snapshot —
it is a **pointer to a reconstruction**.

---

## Why It Survives the Source System

Systems evolve. Models are retrained. Configurations are updated.
Teams move on. Vendors change. Systems are decommissioned.

A Decision Snapshot Artifact is explicitly designed to **outlive its source**.

| Source system reality | Artifact guarantee |
| --- | --- |
| Model is retrained monthly | Artifact contains the model hash and version at T₀. |
| Configuration is updated | Artifact contains the full configuration state at T₀. |
| Database schema changes | Artifact contains the snapshot data, not a foreign key. |
| System is decommissioned | Artifact remains readable and verifiable independently. |
| Vendor relationship ends | Artifact has no runtime dependency on the vendor. |

The Snapshot Artifact does not ask the source system:
*“What did you do?”*

**It is the record of what was done.**

---

## The Core Principle: Evidence Independence

Evidence that depends on the continued existence, availability,
or cooperation of the source system **is not evidence**.

It is a promise to reconstruct.

A Decision Snapshot Artifact makes no such promise.
**It is the evidence.**

