# 🇫🇷 Version Française : Horizon

## 🧠 Horizon

### **Decision Snapshot Infrastructure**

### **Rendre les décisions automatisées durablement exploitables**

Aujourd’hui, les systèmes automatisés prennent des décisions qui engagent l’organisation sur la durée. Pourtant, les faits ayant conduit à ces décisions disparaissent rapidement avec l’évolution des systèmes.

Horizon est une **infrastructure** qui permet de **préserver l’état factuel d’une décision au moment exact où elle est exécutée**, afin que les équipes puissent y revenir plus tard **sans dépendre du système d’origine**.

* 👉 Les faits sont capturés au moment de l’exécution.
* 👉 Le contrôle institutionnel reste inchangé.
* 👉 Le coût opérationnel est radicalement réduit.

### **[ Book an acceptability discussion ]**

*Horizon s’intègre aux systèmes existants. L’adoption commence par une discussion d’acceptabilité, pas par une décision imposée.*

---

## 🎯 Les faits avant la reconstruction

Les équipes techniques produisent déjà aujourd’hui des dossiers décisionnels : logs, bases de données, configurations, modèles, documents internes.

Horizon **ne redéfinit pas ce qu’est un dossier**. Il **simplifie radicalement la production de ses éléments factuels**.

* 👉 Ce qui change, ce n’est pas le contenu du dossier.
* 👉 C’est l’effort nécessaire pour l’établir.

---

## ❓ Le problème opérationnel

### **Les décisions automatisées ne survivent pas aux systèmes qui les produisent**

Dans les environnements réels, tout bouge : les données évoluent, les règles changent, les modèles sont mis à jour et les architectures se transforment. Lorsqu’une décision passée doit être comprise, les équipes doivent **reconstruire les faits** à partir de sources partielles.

> **Le constat :** Cette reconstruction est coûteuse, incertaine et dépendante d’un système qui n'existe plus dans son état d'origine.

---

## ✅ Le principe Horizon

### **Capturer les faits une fois, au bon moment**

Horizon capture **l’état factuel d’une décision au moment exact de son exécution**, sous la forme d’un **Decision Snapshot Artifact**.

* **Données réellement consommées :** L'intégralité des entrées à T0.
* **État de la Logique :** La version exacte du modèle et sa configuration.
* **Contexte :** L'identité du système et l'horodatage précis.
* **Indépendance :** Généré en temps réel, il ne dépend pas de l’évolution future du système.

---

## 📦 Decision Snapshot Artifact

L’Artefact est un **objet auto-contenu** qui permet d’établir les faits sans reconstitution. Il inclut :

* **Métadonnées d’exécution :** ID unique et horodatage UTC précis.
* **Snapshot Data :** Les entrées brutes vues par le système à T0.
* **Model State :** Le hash du modèle et les seuils actifs.
* **Output :** Le résultat et ses codes de raison (*reason codes*).
* **Intégrité :** Signature cryptographique assurant l'immuabilité.

---

## 🔐 Un support factuel, pas une contrainte

Horizon n’impose aucune narration et n’automatise aucun jugement. Les équipes conservent **le même contrôle qu’aujourd’hui** sur ce qui est consigné, interprété ou communiqué.

👉 La seule différence est opérationnelle : **les faits sont déjà là.**

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

L’adoption commence par une **entretien d’acceptabilité** :

1. Évaluer l’adéquation technique et organisationnelle.
2. Définir les périmètres pertinents.
3. Décider explicitement d’une adoption (ou non).

### **[ Réserver un entretien d'acceptabilité ]**

---

## ❓ FAQ

* **Est-ce un système d’audit ?** Non. C’est une infrastructure de capture factuelle.
* **Est-ce une explication automatique ?** Non. L’interprétation reste humaine.
* **Perd-on de la flexibilité ?** Non. Le contrôle est inchangé, seul l'effort diminue.

---

---

# 🇬🇧 English Version: Horizon

## 🧠 Horizon

### **Decision Snapshot Infrastructure**

### **Making automated decisions durable over time**

Automated systems make decisions that have long-term consequences. Yet the factual state behind those decisions quickly disappears as systems evolve.

Horizon is an **infrastructure** that preserves the **factual state of a decision at the exact moment it is executed**, allowing teams to rely on it later **without depending on the original system**.

* 👉 Facts are captured at execution time.
* 👉 Institutional control remains unchanged.
* 👉 Operational cost is dramatically reduced.

### **[ Book an Acceptability Discussion ]**

*Horizon integrates into existing systems. Adoption starts with an acceptability discussion, not an imposed rule.*

---

## 🎯 Facts before reconstruction

Teams already assemble decision records today: logs, databases, configurations, models, internal documents.

Horizon **does not redefine what the record is**. It **removes the friction of producing its factual components**.

* 👉 What changes is not the content of the record.
* 👉 It is the cost of assembling it.

---

## ❓ The operational problem

### **Automated decisions do not survive the systems that produced them**

In real-world environments, everything moves: data evolves, rules change, models are retrained, and architectures move on. When a past decision must be understood, teams are forced to **reconstruct facts** from partial sources.

> **The reality:** This reconstruction is costly, uncertain, and dependent on a system that no longer exists in its original state.

---

## ✅ The Horizon principle

### **Capture facts once, at the right moment**

Horizon captures the **factual state of a decision at execution time**, producing a **Decision Snapshot Artifact**.

* **Data Actually Consumed:** The complete raw inputs at T0.
* **Logic State:** The exact model version and configuration.
* **Context:** System identity and precise UTC timestamp.
* **Independence:** Generated in real-time; independent from future system evolution.

---

## 📦 Decision Snapshot Artifact

The Artifact is a **self-contained object** that establishes facts without reconstruction. It includes:

* **Execution Metadata:** Unique ID and precise UTC timestamp.
* **Snapshot Data:** Raw inputs exactly as seen by the system at T0.
* **Model State:** Model hash and active thresholds.
* **Decision Output:** Final result and actionable reason codes.
* **Integrity:** Cryptographic signature ensuring non-alteration.

---

## 🔐 Factual support, not institutional constraint

Horizon does not impose narratives or automate judgment. Teams retain **the same control as today** over what enters the record, what is interpreted, and what is communicated.

👉 The difference is operational: **the facts already exist.**

---

## 🎯 What changes in practice

| Before | With Horizon |
| --- | --- |
| Reconstructed facts | **Captured facts** |
| High effort | **Marginal cost** |
| Legacy dependency | **Temporal independence** |
| Long investigations | **Immediate access** |
| Factual uncertainty | **Immutable factual base** |

---

## 🚀 How to start

### **Demonstration is possible. Reconstruction is not.**

Horizon can be demonstrated on any live system (test, sandbox, demo). What cannot be simulated is the capture of **past executions**.

Adoption starts with an **acceptability discussion**:

1. Assess technical and organizational fit.
2. Define relevant scopes.
3. Explicitly decide on adoption (or non-adoption).

### **[ Book an Acceptability Discussion ]**

---

## ❓ FAQ

* **Is this an audit system?** No. It is a factual capture infrastructure.
* **Is interpretation automated?** No. Interpretation remains human.
* **Does this reduce flexibility?** No. Control is unchanged; effort is reduced.

---

