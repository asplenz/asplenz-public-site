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

### The Reconstruction Problem

Logs and tickets facilitate reconstruction. They do not create a declared, ordered, and immutable evidence record at Time T. When an examination focuses on a specific case, the question is no longer "what usually happens," but "what exactly happened here." At that point, the reconstruction itself becomes contestable.

---

### Institutional Control and Evidence Governance

*Mastery of the evidence lifecycle, from capture to disclosure*

#### A. Control of Capture: Institution-Defined Rules

* **Institution-owned logic:** Horizon records execution-time evidence according to capture rules defined and owned by the institution.
* **Defined Scope:** The institution determines which specific execution flows are within scope and which artefacts are considered legitimate for evidentiary purposes.
* **No Blind Automation:** Capture is a deliberate governance choice, not a technical imposition.

#### B. Perimeter and Access: Absolute Sovereignty

* **Intra-Perimeter Deployment:** Horizon operates strictly within the institution's perimeter, under its own operational and security controls.
* **No External Windows:** Regulators and third parties have no direct access to Horizon or its underlying evidence store.
* **Security Alignment:** The system integrates into the existing institutional security stack without creating external dependencies.

#### C. Evidence Disclosure: A Strategic Decision

* **Selective Inclusion:** Horizon produces evidence artefacts that the institution may include, selectively, in an audit, inquiry, or regulatory dossier.
* **Institutional Discretion:** The institution retains full discretion over which artefacts are disclosed, contextualized, or withheld, in accordance with applicable legal and procedural frameworks.
* **Technical vs. Legal:** Horizon provides the factual capability; the disclosure remains a legal and strategic decision.

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

### Le problème de la reconstruction

Les logs et les tickets facilitent la reconstruction. Ils ne créent pas une preuve déclarée, ordonnée et immuable à l'instant T. Lorsqu'un examen porte sur un cas spécifique, la question n'est plus « que se passe-t-il habituellement », mais « que s'est-il passé exactement ici ». C'est à ce moment précis que la reconstruction elle-même devient contestable.

---

### Contrôle institutionnel et gouvernance des preuves

*Maîtrise du cycle de vie de la preuve, de la capture à la divulgation*

#### A. Contrôle de la capture : défini par l'institution

* **Règles détenues par l'institution :** Horizon enregistre les preuves à l'exécution selon des règles de capture définies et appartenant exclusivement à l'institution.
* **Périmètre sur mesure :** L'institution détermine quels flux d'exécution entrent dans le périmètre et quels artefacts sont considérés comme légitimes à des fins probatoires.
* **Pas d'automatisme aveugle :** La capture est un choix de gouvernance délibéré, et non une imposition technique automatique.

#### B. Périmètre et accès : souveraineté absolue

* **Déploiement intra-périmètre :** Horizon fonctionne strictement au sein du périmètre de l'institution, sous ses propres contrôles opérationnels et de sécurité.
* **Aucune « fenêtre » externe :** Les régulateurs et les tiers n'ont aucun accès direct à Horizon ni à son socle de preuves sous-jacent.
* **Contrôle opérationnel :** Le système s'intègre dans l'infrastructure de sécurité existante sans créer de dépendances ou d'accès vers l'extérieur.

#### C. Divulgation des preuves : une décision stratégique

* **Inclusion sélective :** Horizon produit des artefacts de preuve que l'institution peut choisir d'inclure, de manière sélective, dans un audit, une enquête ou un dossier réglementaire.
* **Discrétion institutionnelle :** L'institution conserve l'entière discrétion sur les artefacts Horizon qui sont divulgués, contextualisés ou retenus, conformément aux cadres juridiques et procéduraux applicables.
* **Capacité technique vs Décision juridique :** Horizon fournit la capacité factuelle ; la divulgation demeure une décision juridique et stratégique sous le contrôle de la banque.

---
