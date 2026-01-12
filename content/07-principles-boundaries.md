### 2. English Version

# Principles & Boundaries

## Principles, perimeters and excluded objectives

Reconstruction is valuable, until it becomes the subject of dispute. These principles are not design preferences. They exist because, in formal examination contexts, flexibility becomes a vulnerability: evidence must be created at the time of execution, not reconstructed post-hoc.

We use the term **Execution Evidence Infrastructure (EEI)** to describe this framework: a dedicated evidence layer that creates examinable facts at the moment of execution, independent of subsequent audits, inquiries, or reconstructions.

---

### Non-negotiable principles

* **Evidence at Time T (Point of no return)**
Prevents retrospective reconstruction from becoming "the evidence" by producing facts at the exact moment the action occurs. This protects the organization against asymmetric adverse interpretations by anchoring the defense in the actual execution context, effectively neutralizing hindsight bias.
* **Append-only Ledger: An immutable, cumulative record**
Nothing is ever erased or overwritten. If new information (e.g., an audit or post-hoc validation) emerges after an execution, it is appended as a new timestamped artefact. We do not modify the past; we document the progression of knowledge.
* **Agent-Agnostic (Human or Machine)**
Preserves a single factual chain between automated decisions and human interventions, without loss of continuity.
* **Non-intrusiveness (Functional Decoupling)**
Ensures that evidence capture does not act as a checkpoint. The system is purely observational: it modifies neither outcomes nor workflows, and minimizes system overhead.
* **Strict Separation: Execution vs. Evaluation**
Distinguishes "what happened" from "what was evaluated," so that subsequent examination can separate the raw action from its organizational interpretation.
* **Independent Verification (Including Offline)**
Integrity can be verified from exported evidence artefacts (evidence packages) without relying on the source systems, and without requiring access to the execution environment during critical examinations.

---

### Deliberate Exclusions

These exclusions preserve Horizon's role as a pure evidence layer, orthogonal to operational tools:

* Not an investigation platform
* Not observability or SIEM
* Not a case-management workflow
* Not a compliance tool (GRC)
* Not a single operational oversight console

---

### Why logs and tickets are not equivalent

Logs and tickets facilitate reconstruction. They do not create a declared, ordered, and immutable evidence record at Time T. When an examination focuses on a specific case, the question is no longer "what usually happens," but "what exactly happened here." At that point, the reconstruction itself becomes contestable.

---

### 3. Version Française

# Principes & Limites

## Principes, périmètres et objectifs exclus

La reconstruction est précieuse, jusqu'à ce qu'elle devienne l'objet de la contestation. Ces principes ne sont pas des préférences de conception. Ils existent car, dans les contextes d'examen formel, la flexibilité devient une vulnérabilité : la preuve doit être créée au moment de l'exécution, et non reconstruite a posteriori.

Nous utilisons le terme **Infrastructure de Preuve d'Exécution (EEI)** pour décrire ce dispositif : une couche de preuve dédiée qui crée des faits examinables au moment de l'exécution, indépendamment des audits, enquêtes ou reconstructions ultérieurs.

---

### Principes non négociables

* **La preuve à l'instant T (point de non-retour)**
Empêche la reconstruction rétrospective de devenir « la preuve » en produisant des faits au moment même où l'action survient. Cela protège l'organisation contre les interprétations adverses asymétriques en ancrant la défense sur le contexte réel de l'exécution, neutralisant ainsi le biais de rétrospective.
* **Registres en ajout exclusif (Append-only) : Un registre immuable et cumulatif**
Rien n'est jamais effacé ou réécrit. Si une information nouvelle (ex : un audit ou une validation a posteriori) survient après une exécution, elle est ajoutée comme un nouvel artefact daté. On ne modifie pas le passé, on documente la progression de la connaissance.
* **Agnostique vis-à-vis de l'agent (humain ou machine)**
Préserve une chaîne factuelle unique entre les décisions automatisées et les interventions humaines, sans rupture de continuité.
* **Non-intrusivité (découplage fonctionnel)**
Garantit que la capture de la preuve n'agit pas comme un point de contrôle. Le dispositif est purement observationnel : il ne modifie ni les résultats ni les flux de travail, minimisant ainsi la charge système.
* **Séparation stricte : exécution vs évaluation**
Distingue « ce qui s'est passé » de « ce qui a été évalué », afin que l'examen ultérieur puisse séparer l'action brute de son interprétation organisationnelle.
* **Vérification indépendante (y compris hors ligne)**
L'intégrité peut être vérifiée à partir d'artefacts exportés (dossiers de preuves) sans dépendre des systèmes d'origine, ni nécessiter d'accès à l'environnement d'exécution au moment de l'examen.

---

### Objectifs exclus délibérément

Ces exclusions préservent le rôle d'Horizon en tant que couche de preuve pure, orthogonale aux outils opérationnels :

* Ni plateforme d'enquête
* Ni observabilité ou SIEM
* Ni flux de gestion de dossiers (case-management)
* Ni outil de conformité (GRC)
* Ni console de supervision opérationnelle

---

### Pourquoi les logs et les tickets ne sont pas équivalents

Les logs et les tickets facilitent la reconstruction. Ils ne créent pas une preuve déclarée, ordonnée et immuable à l'instant T. Lorsqu'un examen porte sur un cas spécifique, la question n'est plus « que se passe-t-il habituellement », mais « que s'est-il passé exactement ici ». C'est à ce moment précis que la reconstruction elle-même devient contestable.

---
