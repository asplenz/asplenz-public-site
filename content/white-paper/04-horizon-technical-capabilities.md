# 1. English Version

# Horizon: Technical Capabilities

## A Decision Snapshot Infrastructure (intra-perimeter)

### What it records

Horizon records **Decision Snapshots**, encapsulated in immutable and self-contained **Artifacts**. These snapshots consist of two types of declared facts, strictly separated:

#### 1) Executions

An execution is **an irreversible act**:

* An automated decision applied
* A human authorization
* A choice to continue or suspend
* A publication, override, or acceptance

Executions record what happened, in a declared context, at time T.

---

#### 2) Evaluations & Chronological Anchoring

An evaluation is an **evidentiary record of judgment** captured at Time T. It documents the organizational stance (human or policy-based) that contextualizes a specific factual event.

* **Functional Decoupling:** Horizon is functionally independent of the operational execution path. It records the evaluation without ever intervening in the system's workflow.
* **Point-in-Time Binding:** Evaluations are bound to factual triggers at the exact moment they are produced. This ensures the "state of knowledge" is frozen, preventing any post-hoc justification or hindsight bias.
* **Sequential Integrity:** Every evaluation is treated as an immutable block. It proves what the organization judged to be true at Time T, regardless of the eventual outcome.

**Captured Stance Attributes:**
■ Severity classification
■ Risk acceptance
■ Declared basis (The rationale used at that specific moment)
■ Confidence level

> **Design Principle:** A **Decision Snapshot Artifact** is the evidence itself. It carries everything required to establish what occurred within itself, ensuring absolute independence from the source system's future state.

---

### Contexts where this applies

This infrastructure is agnostic to the decision source. It applies whenever a specific decision or action may later require case-by-case examination.

#### AI-assisted decisions

The same approach captures executions and evaluations from AI-assisted workflows at execution time, immutably, before any question arises. This supports a shift from outcome-based testing to **behavior-based examinability**: what did the system see, evaluate, and decide, and when?
Asplenz Horizon does not replace AI governance frameworks (EU AI Act, CDMC). It provides the **evidence layer** that allows those frameworks to be demonstrated in real, case-by-case examinations.

#### Automated decision workflows

Risk engines and eligibility rules are recorded as declared executions. Optional evaluations preserve the organizational stance at time T.

#### Human-in-the-loop escalations

When automated outcomes escalate, the original execution reference is propagated. Human decisions are recorded as evaluations linked to the triggering execution, preserving a **single factual chain**.

---

### Properties

* **Self-contained**: Everything needed for verification is inside the artifact (no reliance on external databases).
* **Append-only**: No edits, no deletes.
* **Ordering**: Explicit and verifiable chronology.
* **Integrity**: Cryptographically signed records (Ed25519).
* **Intra-perimeter**: Deployable on-premise or in private cloud.
* **Non-intrusive**: Outside the critical execution path.

---

### What it is NOT

* Not observability or monitoring.
* Not SIEM.
* Not a workflow tool.
* Not a decision-making system.

---

### Common questions

* **We already capture execution-time facts and generate artefacts. Why is this not sufficient?**
Most systems generate traces that depend on the source system’s current state (database, API, version). If the system evolves, the trace requires a complex and uncertain **reconstruction**. Horizon produces **Decision Snapshot Artifacts** that are **independently verifiable**: they remain valid and readable even after the model is retrained, the database schema changes, or the source system is decommissioned.

---

---

# 2. Version Française

# Horizon : Capacités Techniques

## Une Infrastructure de Persistance Décisionnelle (intra-périmètre)

### Ce qu'il consigne

Horizon consigne des **Snapshots Décisionnels**, encapsulés dans des **Artefacts** immuables et auto-contenus. Ces snapshots se composent de deux types de faits déclarés, strictement séparés :

#### 1) Les exécutions

Une exécution est **un acte irréversible** :

* Une décision automatisée appliquée
* Une autorisation humaine
* Un choix de poursuite ou de suspension
* Une publication, un passage outre (override) ou une acceptation

Les exécutions consignent ce qui s'est produit, dans un contexte déclaré, à l'instant T.

---

#### 2) Les évaluations et l'ancrage chronologique

Une évaluation est un **acte de jugement consigné** à l'instant T. Elle documente la posture organisationnelle (humaine ou réglementaire) qui contextualise un fait précis.

* **Indépendance fonctionnelle :** Horizon est déconnecté du flux d'exécution opérationnel. Il consigne l'évaluation sans jamais interférer avec le déroulement du système.
* **Lien indissociable :** Les évaluations sont liées aux déclencheurs factuels au moment exact de leur production. Cela fige « l'état des connaissances », interdisant toute reconstruction a posteriori.
* **Intégrité séquentielle :** Chaque évaluation est traitée comme un bloc immuable. Elle prouve ce que l'organisation jugeait vrai à l'instant T.

**Attributs de posture consignés :**
■ Classification de sévérité
■ Acceptation du risque
■ Fondement déclaré (Le raisonnement à cet instant précis)
■ Niveau de confiance

> **Principe de conception :** L’**Artefact de Snapshot Décisionnel** est la preuve elle-même. Il porte en lui-même tout ce qui est nécessaire pour établir ce qui s'est produit, garantissant une indépendance absolue vis-à-vis de l'évolution future du système source.

---

### Contextes d'application

Ce dispositif est agnostique vis-à-vis de la source de décision.

#### Décisions assistées par l'IA

Cette approche capture les exécutions et les évaluations des flux d'IA au moment de l'exécution, de manière immuable. Cela permet de passer d'un test basé sur le résultat à une **examinabilité comportementale** : qu'est-ce que le système a vu, évalué et décidé, et à quel moment ?
Asplenz Horizon fournit la **couche de preuve** qui permet de démontrer l'application des cadres de gouvernance (IA Act, CDMC) lors d'examens réels.

#### Flux de décisions automatisés

Les moteurs de risques et les règles d'éligibilité sont consignés en tant qu'exécutions. Des évaluations optionnelles préservent la posture organisationnelle à l'instant T.

#### Escalades vers l'humain (Human-in-the-loop)

En cas d'escalade, la référence d'exécution d'origine est propagée. Toute décision humaine est consignée comme une évaluation liée à l'exécution déclencheuse, préservant une **chaîne factuelle unique**.

---

### Propriétés

* **Auto-contenu** : Tout ce qui est nécessaire à la vérification est dans l’artefact (pas de dépendance aux bases de données externes).
* **Ajout exclusif (Append-only)** : Ni modification, ni suppression.
* **Séquençage** : Chronologie explicite et vérifiable.
* **Intégrité** : Registres signés cryptographiquement (Ed25519).
* **Intra-périmètre** : Déploiement on-premise ou cloud privé.
* **Non-intrusif** : Hors du chemin critique d'exécution.

---

### Ce que ceci n'est PAS

* Ni observabilité, ni monitoring.
* Ni SIEM.
* Ni outil de gestion de flux (workflow).
* Ni système de prise de décision.

---

### Questions fréquentes

* **Nous capturons déjà des faits à l'exécution et générons des artefacts. Pourquoi cela ne suffit-il pas ?**
La plupart des systèmes génèrent des traces dépendantes de l'état actuel du système (base de données, API, version). Si le système évolue, la trace nécessite une **reconstitution** complexe et incertaine. Horizon produit des **Artefacts de Snapshots Décisionnels** qui sont **vérifiables de manière indépendante** : ils restent valides et lisibles même après le réentraînement d'un modèle, un changement de schéma de base de données ou le décommissionnement du système source.

