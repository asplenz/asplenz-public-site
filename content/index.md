### Version FR

## 🧠 Horizon

### **Decision Snapshot Infrastructure**

### **Rendre les décisions automatisées durablement exploitables**

Aujourd’hui, les systèmes automatisés prennent des décisions qui engagent l’organisation sur la durée. Pourtant, les faits ayant conduit à ces décisions disparaissent rapidement avec l’évolution des systèmes.

Horizon est une **infrastructure** qui permet de **préserver l’état factuel d’une décision au moment exact où elle est exécutée**, afin que les équipes puissent y revenir plus tard **sans dépendre du système d’origine**.

* 👉 Les faits sont capturés au moment de l’exécution.
* 👉 Le contrôle institutionnel reste inchangé.
* 👉 Le coût opérationnel est radicalement réduit.

### **[ Réserver un entretien d’acceptabilité ]**

*Horizon s’intègre aux systèmes existants. L’adoption commence par une discussion d’acceptabilité, pas par une décision imposée.*

---

## 🎯 Les faits avant la reconstruction

Les équipes techniques produisent déjà aujourd’hui des dossiers décisionnels : logs, bases de données, configurations, modèles, documents internes.

Horizon **ne redéfinit pas ce qu’est un dossier**. Il **simplifie radicalement la production de ces éléments factuels**.

* 👉 Ce qui change, ce n’est pas le contenu du dossier.
* 👉 C’est l’effort nécessaire pour l’établir, le conserver et le mobiliser.

---

## ❓ Le problème opérationnel

### **Les décisions automatisées ne survivent pas aux systèmes qui les produisent**

Dans les environnements réels, tout bouge : les données évoluent, les règles changent, les modèles sont mis à jour et les architectures se transforment. Lorsqu’une décision passée doit être comprise, les équipes doivent **reconstruire les faits** à partir de sources partielles.

> **Le constat :** Cette reconstruction est coûteuse, incertaine et dépendante d’un système qui n’existe plus dans son état d’origine.

---

## ✅ Le principe Horizon

### **Capturer les faits une fois, au bon moment**

Horizon capture **l’état factuel d’une décision au moment exact de son exécution**, sous la forme d’un **Decision Snapshot Artifact**.

* **Données réellement consommées :** L’intégralité des entrées à T0.
* **État de la logique :** La version exacte du modèle et sa configuration.
* **Contexte :** L’identité du système et l’horodatage précis.
* **Indépendance :** L'artefact est généré en temps réel ; il ne dépend pas de l’évolution future du système.

---

## 📦 Decision Snapshot Artifact

L’artefact est un **objet auto-contenu** qui permet d’établir les faits sans reconstitution. Il inclut :

* **Métadonnées d’exécution :** ID unique et horodatage UTC précis.
* **Snapshot Data :** Les entrées brutes vues par le système à T0.
* **Model State :** Le hash du modèle et les seuils actifs.
* **Output :** Le résultat et ses *reason codes*.
* **Intégrité :** Signature cryptographique assurant l’immuabilité.

---

## 🔐 Un support factuel, pas une contrainte

Horizon n’impose aucune narration et n’automatise aucun jugement. Les équipes conservent **le même contrôle qu’aujourd’hui** sur ce qui est consigné, interprété ou communiqué.

👉 La seule différence est opérationnelle : **les faits sont déjà là.**

---

## ⚙️ Conçu comme une infrastructure

Horizon n’est ni un outil d’analyse, ni un système métier, ni un processus de gouvernance. C’est une **couche d’infrastructure** qui :

* S’intègre aux systèmes existants sans les perturber.
* Fonctionne avec règles, scoring et systèmes IA.
* Capture les décisions en mode synchrone ou asynchrone.
* Respecte les politiques de conservation et de sécurité en place.
* N’intervient jamais dans l’exécution de la décision.

👉 Horizon **ne décide rien**.
👉 Il **enregistre l’état factuel de ce qui s’exécute**, puis s’efface.

---

## 💡 Valeur opérationnelle

Horizon ne crée pas de nouveaux processus. Il **supprime des coûts invisibles mais récurrents** liés à la reconstruction des faits.

### Réduction des coûts opérationnels

* Moins d’investigations longues et incertaines.
* Moins de mobilisation transverse (IT, data, support, risques).
* Moins de dépendance aux anciens systèmes et aux équipes passées.

### Gain de temps cumulatif

* Les faits sont immédiatement disponibles.
* Plus besoin de reconstituer laborieusement des états passés.
* Une base factuelle commune pour toutes les parties prenantes.

👉 **Un effort de capture unique. Plusieurs usages. Aucun coût marginal.**

---

## 🎯 Ce qui change concrètement

| Avant | Avec Horizon |
| --- | --- |
| Faits reconstruits | **Faits capturés** |
| Effort élevé | **Coût marginal** |
| Dépendance aux anciens systèmes | **Indépendance temporelle** |
| Investigations longues | **Accès immédiat** |
| Incertitude factuelle | **Base factuelle immuable** |

---

## 🚀 Comment commencer

### **Une démonstration est possible. Une reconstitution ne l’est pas.**

Horizon peut être démontré sur tout système vivant (test, sandbox, démo). Ce qui ne peut pas être simulé, c’est la capture de décisions **déjà passées**.

L’adoption commence par un **entretien d’acceptabilité** :

1. Évaluer l’adéquation technique et organisationnelle.
2. Définir les périmètres pertinents.
3. Décider explicitement d’une adoption (ou non).

### **[ Réserver un entretien d’acceptabilité ]**

---

## ❓ FAQ

* **Est-ce un système d’audit ?** Non. C’est une infrastructure de capture factuelle, utilisable par différentes équipes (audit, support, IT, ingénierie).
* **Est-ce une explication automatique ?** Non. L’interprétation reste humaine.
* **Perd-on de la flexibilité ?** Non. Le contrôle est inchangé, seul l’effort diminue.

### Version EN

Voici la version anglaise de votre landing page. J'ai veillé à conserver le ton **"Infrastructure"** (robuste et neutre) tout en utilisant un vocabulaire qui résonne auprès d'un public de décideurs techniques (CTO) et de responsables des risques (CRO).

---

# 🇬🇧 English Version — Horizon

---

## 🧠 Horizon

### **Decision Snapshot Infrastructure**

### **Making automated decisions durably actionable**

Today, automated systems make decisions that commit organizations over the long term. Yet, the facts that led to these decisions quickly disappear as systems evolve.

Horizon is an **infrastructure** that **preserves the factual state of a decision at the exact moment of execution**, allowing teams to revisit it later **without depending on the original system**.

* 👉 Facts are captured at the moment of execution.
* 👉 Institutional control remains unchanged.
* 👉 Operational cost is drastically reduced.

### **[ Book an Acceptability Discussion ]**

*Horizon integrates into existing systems. Adoption starts with an acceptability discussion, not an imposed decision.*

---

## 🎯 Facts before reconstruction

Technical teams already produce decision records today: logs, databases, configurations, rules, models, and internal documents.

Horizon **does not redefine what a record is**.
It **radically simplifies the production of its factual components**.

* 👉 What changes is not the content of the record.
* 👉 It is the effort required to establish, preserve, and mobilize it.

---

## ❓ The operational problem

### **Automated decisions do not survive the systems that produced them**

In real-world environments, everything moves: data evolves, rules change, models are updated, and architectures transform. When a past decision must be understood, teams are forced to **reconstruct the facts** from partial sources.

> **The reality:** This reconstruction is costly, uncertain, and dependent on a system that no longer exists in its original state.

---

## ✅ The Horizon principle

### **Capture facts once, at the right moment**

Horizon captures the **factual state of a decision at the exact moment of execution**, in the form of a **Decision Snapshot Artifact**.

* **Data actually consumed:** The entirety of the inputs at T0.
* **Logic state:** The exact version of the model and its configuration.
* **Context:** System identity and precise timestamp.
* **Independence:** Generated in real-time; it does not depend on future system evolution.

---

## 📦 Decision Snapshot Artifact

The artifact is a **self-contained object** that establishes facts without reconstruction. It includes:

* **Execution metadata:** Unique ID and precise UTC timestamp.
* **Snapshot Data:** Raw inputs as seen by the system at T0.
* **Model State:** Model hash and active thresholds.
* **Output:** The result and its *reason codes*.
* **Integrity:** Cryptographic signature ensuring immutability.

---

## 🔐 Factual support, not a constraint

Horizon does not impose a narrative and does not automate judgment.
Teams retain **the same control as they have today** over what is recorded, interpreted, or communicated.

👉 The only difference is operational: **the facts are already there.**

---

## ⚙️ Designed as infrastructure

Horizon is not an analysis tool, a business system, or a governance process.

It is an **infrastructure layer** that:

* Integrates into existing systems without disrupting them.
* Works with rules, scoring, and AI systems.
* Captures decisions in synchronous or asynchronous mode.
* Respects existing retention and security policies.
* Never intervenes in the execution of the decision.

👉 Horizon **decides nothing**.
👉 It **records the factual state of what is executing**, then fades into the background.

---

## 💡 Operational value

Horizon does not create new processes.
It **eliminates invisible but recurring costs** related to factual reconstruction.

### Reduction of operational costs

* Fewer long and uncertain investigations.
* Less cross-functional mobilization (IT, data, support, risk).
* Less dependence on legacy systems and teams.

### Cumulative time savings

* Facts are immediately available.
* No more need to reconstitute past states.
* A common factual base for all teams.

👉 **A single capture effort.
Multiple uses. Zero marginal cost.**

---

## 🎯 What changes in practice

| Before | With Horizon |
| --- | --- |
| Reconstructed facts | **Captured facts** |
| High effort | **Marginal cost** |
| Legacy system dependence | **Temporal independence** |
| Long investigations | **Immediate access** |
| Factual uncertainty | **Immutable factual base** |

---

## 🚀 How to start

### **Demonstration is possible. Reconstruction is not.**

Horizon can be demonstrated on any live system (test, sandbox, demo).
What cannot be simulated is the capture of **past decisions**.

Adoption starts with an **Acceptability Discussion**:

1. Assess technical and organizational fit.
2. Define relevant scopes.
3. Explicitly decide on adoption (or non-adoption).

### **[ Book an Acceptability Discussion ]**

---

## ❓ FAQ

* **Is this an audit system?**
No. It is a factual capture infrastructure, usable by different teams when necessary (audit, support, IT, engineering).
* **Is this an automated explanation?**
No. Interpretation remains human.
* **Does it reduce flexibility?**
No. Control is unchanged; only the effort decreases.

---



