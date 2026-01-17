# 🇫🇷 Version Française : Glossaire

### **Persistance Décisionnelle**

Un **Persistance Décisionnelle** est l'état factuel figé d'une décision au moment où elle devient irréversible. Il représente la combinaison exacte des entrées, du contexte, des évaluations et du résultat qui existaient à cet instant précis, indépendamment de toute évolution future du système.

### **Artefact de Persistance Décisionnelle**

Un **Artefact de Persistance Décisionnelle** est un enregistrement auto-contenu, immuable et vérifiable par cryptographie qui capture un Persistance Décisionnelle. Il constitue la représentation canonique et faisant autorité de ce que le système décisionnel a réellement exécuté au point de non-retour.

* Un Artefact de Persistance Décisionnelle ne décrit pas une décision.
* **Il est la décision, figée dans le temps.**

### **Infrastructure de Persistance Décisionnelle**

Une **Infrastructure de Persistance Décisionnelle** est une capacité au niveau système conçue pour produire, préserver et vérifier des Artefacts de Persistance Décisionnelle au moment de l'exécution des décisions. Son but n'est pas d'expliquer les décisions, mais d'attester de leur existence factuelle.

### **Preuve**

La **Preuve** désigne un enregistrement factuel dont l'intégrité, l'exhaustivité, l'authenticité et la validité temporelle peuvent être vérifiées de manière indépendante. La preuve est déclarée au moment de l'événement, et non reconstituée après coup.

### **Reconstitution**

La **Reconstitution** est toute tentative de déduire, réassembler ou approximer l'état d'une décision passée en interrogeant des systèmes, des logs, des modèles ou des sources de données après que la décision a eu lieu. La reconstitution est intrinsèquement dépendante de la disponibilité continue et de l'exactitude des systèmes sources.

### **Log (Journal)**

Un **Log** est un enregistrement généré par le système destiné au débogage, à la surveillance ou à la visibilité opérationnelle. Les logs sont partiels, mutables et ne sont pas conçus pour servir de preuve d'autorité pour une décision.

### **Trace**

Une **Trace** est une séquence d'événements ou de signaux d'exécution capturés pendant le fonctionnement du système. Les traces offrent une observabilité mais ne déclarent pas un état décisionnel complet ou faisant autorité.

### **Enregistrement (Record)**

Un **Enregistrement** est une donnée ou une entrée stockée de manière générique. À moins d'être explicitement défini comme un Artefact de Persistance Décisionnelle, un enregistrement ne garantit ni l'exhaustivité, ni l'immuabilité, ni la vérifiabilité.

### **Exhaustivité**

L'**Exhaustivité** est la propriété par laquelle un Artefact de Persistance Décisionnelle contient toutes les entrées, paramètres contextuels, évaluations et sorties nécessaires pour établir ce qui s'est produit, sans recours à des sources externes.

### **Intégrité Temporelle**

L'**Intégrité Temporelle** est la propriété par laquelle le moment exact de l'exécution de la décision est lié cryptographiquement à l'Artefact de Persistance Décisionnelle et ne peut être altéré ou contesté.

### **Immuabilité**

L'**Immuabilité** est la garantie qu'un Artefact de Persistance Décisionnelle ne peut être modifié, amendé ou supprimé une fois créé.

### **Ordonnancement**

L'**Ordonnancement** est la propriété qui établit la position vérifiable d'un Artefact de Persistance Décisionnelle au sein d'une séquence de décisions, incluant ce qui l'a précédé et ce qui l'a suivi.

### **Authenticité**

L'**Authenticité** est l'assurance cryptographique qu'un Artefact de Persistance Décisionnelle provient bien du système déclaré et n'a pas été altéré.

### **Vérifiabilité**

La **Vérifiabilité** est la capacité de confirmer de manière indépendante l'intégrité, l'authenticité, l'exhaustivité et l'intégrité temporelle d'un Artefact de Persistance Décisionnelle sans accès au système source.

### **Point de Non-Retour**

Le **Point de Non-Retour** est le moment où une décision devient irréversible et doit donc être capturée sous forme d'Artefact de Persistance Décisionnelle.

### **Système Source**

Le **Système Source** est le système, le modèle ou le processus qui a exécuté la décision. Un Artefact de Persistance Décisionnelle est conçu pour rester valide, lisible et vérifiable même après que le système source a changé ou a cessé d'exister.

### **Interprétation**

L'**Interprétation** désigne le processus humain ou analytique consistant à dériver une signification, une explication ou une justification à partir d'un enregistrement factuel. Un Artefact de Persistance Décisionnelle ne fournit pas d'interprétation ; il fournit une attestation.

### **Attestation**

L'**Attestation** est l'acte de déclarer formellement et de préserver un état factuel de telle sorte qu'il puisse faire foi indépendamment du système qui l'a déclaré.

### **Indépendance de la Preuve**

L'**Indépendance de la Preuve** est le principe selon lequel une preuve ne doit pas dépendre de l'existence continue, de la disponibilité ou de la coopération du système source qui l'a produite.

---

---

# 🇺🇸 English Version: Glossary

### **Decision Snapshot**

A **Decision Snapshot** is the frozen factual state of a decision at the moment it becomes irreversible. It represents the exact combination of inputs, context, evaluations, and outcome that existed at that point in time, independent of any future system evolution.

### **Decision Snapshot Artifact**

A **Decision Snapshot Artifact** is a self-contained, immutable, and cryptographically verifiable record that captures a Decision Snapshot. It is the canonical and authoritative representation of what the decision-making system actually executed at the point of no return.

* A Decision Snapshot Artifact does not describe a decision.
* **It is the decision, fixed in time.**

### **Decision Snapshot Infrastructure**

A **Decision Snapshot Infrastructure** is a system-level capability designed to produce, preserve, and verify Decision Snapshot Artifacts at the moment decisions are executed. Its purpose is not to explain decisions, but to attest to their factual existence.

### **Evidence**

**Evidence** refers to a factual record whose integrity, completeness, authenticity, and temporal validity can be independently verified. Evidence is declared at the time of occurrence, not reconstructed after the fact.

### **Reconstruction**

**Reconstruction** is any attempt to infer, reassemble, or approximate the state of a past decision by querying systems, logs, models, or data sources after the decision has occurred. Reconstruction is inherently dependent on the continued availability and correctness of the source systems.

### **Log**

A **Log** is a system-generated record intended for debugging, monitoring, or operational visibility. Logs are partial, mutable, and not designed to serve as authoritative evidence of a decision.

### **Trace**

A **Trace** is a sequence of execution events or signals captured during system operation. Traces provide observability but do not declare a complete or authoritative decision state.

### **Record**

A **Record** is a generic stored datum or entry. Unless explicitly defined as a Decision Snapshot Artifact, a record does not guarantee completeness, immutability, or verifiability.

### **Completeness**

**Completeness** is the property by which a Decision Snapshot Artifact contains all inputs, contextual parameters, evaluations, and outputs required to establish what occurred, without reliance on external sources.

### **Temporal Integrity**

**Temporal Integrity** is the property by which the exact moment of decision execution is cryptographically bound to the Decision Snapshot Artifact and cannot be altered or disputed.

### **Immutability**

**Immutability** is the guarantee that a Decision Snapshot Artifact cannot be modified, amended, or deleted once created.

### **Ordering**

**Ordering** is the property that establishes the verifiable position of a Decision Snapshot Artifact within a sequence of decisions, including what preceded and followed it.

### **Authenticity**

**Authenticity** is the cryptographic assurance that a Decision Snapshot Artifact originates from the declared system and has not been altered.

### **Verifiability**

**Verifiability** is the ability to independently confirm the integrity, authenticity, completeness, and temporal integrity of a Decision Snapshot Artifact without access to the source system.

### **Point of No Return**

The **Point of No Return** is the moment at which a decision becomes irreversible and must therefore be captured as a Decision Snapshot Artifact.

### **Source System**

The **Source System** is the system, model, or process that executed the decision. A Decision Snapshot Artifact is designed to remain valid, readable, and verifiable even after the source system has changed or no longer exists.

### **Interpretation**

**Interpretation** refers to the human or analytical process of deriving meaning, explanation, or justification from a factual record. A Decision Snapshot Artifact does not provide interpretation; it provides attestation.

### **Attestation**

**Attestation** is the act of formally declaring and preserving a factual state such that it can be relied upon independently of the declaring system.

### **Evidence Independence**

**Evidence Independence** is the principle that evidence must not depend on the continued existence, availability, or cooperation of the source system that produced it.

