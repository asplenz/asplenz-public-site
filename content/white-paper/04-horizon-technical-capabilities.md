# 🇫🇷 Horizon : Capacités techniques

Cette section décrit les capacités techniques fondamentales de Horizon. Elle précise ce qui est capturé, comment, et quelles propriétés structurelles garantissent que les faits restent exploitables dans le temps, indépendamment de l’évolution des systèmes.

## Ce que Horizon capture

Horizon capture des **Decision Snapshot Artifacts** au moment exact où une décision devient irréversible. Chaque snapshot est composé de faits déclarés, produits à l’exécution, et non reconstruits après coup. Ces faits sont organisés en deux catégories complémentaires :

### 1. Les exécutions

Une exécution est un acte irréversible par lequel un système automatisé produit un résultat. Elle capture notamment :

* **Les données d’entrée réellement consommées** à l’instant T0.
* **La logique appliquée** (règles, modèle, configuration).
* **Le contexte d’exécution.**
* **Le résultat produit.**

L’exécution constitue le fait primaire, figé dans le temps. Une fois déclarée, elle ne peut plus être modifiée ni reconstituée.

### 2. Les évaluations

Une évaluation est une déclaration produite après l’exécution (analyse humaine, relecture métier, revue technique). Chaque évaluation est :

* **Explicitement datée.**
* **Reliée à une exécution donnée.**
* **Distincte du fait d’exécution.**

Cette séparation empêche toute confusion entre ce qui était connu au moment de l’action et ce qui a été compris ou jugé plus tard. Elle interdit structurellement les **biais de rétrospective**.

---

## Contextes d’application

* **Décisions assistées par l’IA :** Horizon capture les données réellement vues par le modèle et la version exacte du modèle à T0, empêchant toute inférence erronée a posteriori.
* **Flux de décisions automatisés :** Horizon capture chaque point de bascule. Chaque décision devient un fait autonome, traçable sans dépendance à l’état futur du pipeline.
* **Escalades avec intervention humaine :** Horizon permet de distinguer clairement la décision automatisée initiale des arbitrages humains ultérieurs.

---

## Propriétés techniques fondamentales

* **Auto-contenu :** L'artefact contient tout le nécessaire à sa compréhension sans dépendre de systèmes externes.
* **Ajout exclusif (Append-only) :** Les snapshots ne peuvent être ni modifiés ni supprimés.
* **Séquençage explicite :** L’ordre des décisions est vérifiable, rendant toute altération détectable.
* **Intégrité cryptographique :** Chaque artefact est signé, garantissant son authenticité.
* **Non intrusif :** Horizon n’interfère pas avec l’exécution de la décision elle-même.

### Durabilité et indépendance

Les artefacts sont conçus pour survivre aux systèmes qui les ont produits. Même si le modèle est remplacé, l'architecture refondue ou le système source décommissionné, les faits restent **lisibles, vérifiables et exploitables**.

---

## Valeur opérationnelle et contrôle

Horizon ne modifie pas ce que l’organisation choisit de consigner, mais réduit radicalement l’effort requis pour établir l’état factuel. Il diminue les coûts d’établissement des faits et la dépendance aux systèmes legacy.

**Horizon n’impose aucune narration.** Il n’automatise aucun jugement et ne définit aucune interprétation. L’organisation conserve l’entière maîtrise de l’examen et de la communication. Horizon fournit simplement la **base factuelle stable** nécessaire à l'exercice du contrôle institutionnel.

---

## Pourquoi les traces existantes ne suffisent pas

Les logs et métriques classiques sont fragmentés, dépendants de systèmes évolutifs et ne garantissent pas l’intégrité dans le temps. Ils sont utiles pour l’observabilité, mais insuffisants pour établir des faits incontestables. Horizon répond à un besoin structurel différent : la **préservation souveraine des faits d’exécution**.

---

# 🇬🇧 Horizon: Technical Capabilities

This section describes the core technical capabilities of Horizon. It details what is captured, how, and the structural properties that ensure facts remain actionable over time, regardless of system evolution.

## What Horizon Captures

Horizon captures **Decision Snapshot Artifacts** at the exact moment a decision becomes irreversible. Each snapshot consists of declared facts produced at execution time, rather than post-hoc reconstructions. These facts are organized into two complementary categories:

### 1. Executions

An execution is an irreversible act by which an automated system produces an outcome. It specifically captures:

* **The data actually consumed** at time T0.
* **The applied logic** (rules, model, configuration).
* **The execution context.**
* **The produced outcome.**

The execution constitutes the primary fact, frozen in time. Once declared, it can neither be modified nor reconstituted.

### 2. Evaluations

An evaluation is a declaration produced after the execution (human analysis, business review, technical audit). Each evaluation is:

* **Explicitly timestamped.**
* **Linked to a specific execution.**
* **Distinct from the execution fact.**

This separation prevents confusion between what was known at the time of action and what was understood or judged later. It structurally eliminates **hindsight bias**.

---

## Application Contexts

* **AI-Assisted Decisions:** Horizon captures the data actually seen by the model and the exact model version at T0, preventing erroneous post-hoc inferences.
* **Automated Decision Flows:** Horizon captures every pivot point. Each decision becomes an autonomous fact, traceable over time without dependence on the future state of the pipeline.
* **Human-in-the-loop Escalations:** Horizon clearly distinguishes the initial automated decision from subsequent human interventions and arbitrations.

---

## Core Technical Properties

* **Self-contained:** Each artifact contains all elements necessary for its comprehension without relying on external systems.
* **Append-only:** Snapshots cannot be modified or deleted once created.
* **Explicit Sequencing:** The order of decisions is verifiable, making any alteration or deletion detectable.
* **Cryptographic Integrity:** Every artifact is signed, guaranteeing its authenticity and immutability.
* **Non-intrusive:** Horizon does not interfere with the execution of the decision itself.

### Durability and Independence

Artifacts are designed to outlive the systems that produced them. Even if the model is replaced, the architecture overhauled, or the source system decommissioned, the facts remain **readable, verifiable, and actionable**.

---

## Operational Value and Control

Horizon does not change what the organization chooses to record; it radically reduces the effort required to establish the factual state. It decreases the cost of fact-finding and the dependency on legacy systems.

**Horizon does not impose a narrative.** It does not automate judgment or define interpretations. The organization retains full control over how facts are examined and communicated. Horizon simply provides the **stable factual base** required for institutional discretion.

---

## Why Existing Traces Are Insufficient

Standard logs and metrics are fragmented, dependent on evolving systems, and do not guarantee integrity over time. They are useful for observability but insufficient for establishing indisputable facts. Horizon addresses a different structural need: the **sovereign preservation of execution facts**.

---
