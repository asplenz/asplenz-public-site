**Version FR**

# 🧠 Hero section

### **Figer chaque décision automatisée telle qu’elle a réellement eu lieu**

Chaque décision produite par un système automatisé génère un **snapshot auto-contenu**,
capturé **au moment exact de l’exécution**, puis **signé et vérifiable**.

👉 Aucune reconstitution.
👉 Aucune simulation.
👉 Aucun dépendance au système source.

**[ Demander un exemple d'artefact ]**  **[ Demander une démo ]**

![Image](https://td-mainsite-cdn.tutorialsdojo.com/wp-content/uploads/2024/05/Automated-RDS-Snapshot-Management-for-Improved-Data-Security-Image-1.png)

![Image](https://blog.quarkslab.com/resources/2019-09-09-execution-trace-analysis/dfg1.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AC6NdkpITyE-a2NvwQcoz3g.jpeg)

![Image](https://cdn.comparitech.com/wp-content/uploads/2019/03/digital-signatures-2.jpg)

---

## 🎯 Le fait avant l'interprétation.

**Cette infrastructure n'explique pas les décisions. Elle les préserve.**

---

## ❓ Le constat

### Une décision automatisée disparaît au moment où elle est prise

Dans la majorité des systèmes :

* les données évoluent
* les règles changent
* les modèles sont mis à jour
* les contextes d’exécution ne sont pas figés

Une fois la décision produite, **son état réel n’existe plus**.

👉 Il ne reste que des reconstructions partielles.

---

## ✅ Notre principe

### Capturer l’instant d’exécution — pas l’expliquer après coup

Nous produisons, pour chaque décision automatisée, un **artefact factuel** qui capture :

* ce qui a été exécuté
* avec quelles données
* dans quel contexte
* et quel résultat a été produit

Cet artefact est généré **en ligne**, **sans dépendre du futur état du système**.

---

## 📦 Contenu de l’artefact décisionnel

Chaque snapshot est un objet complet qui contient cinq couches de données :

### 🔹 Métadonnées d’exécution (EXECUTION RECORD)

* **Identifiant unique** de l'exécution et **horodatage UTC** précis.
* Identité du système source et version exacte de l'acteur (système expert, IA).

### 🔹 Snapshot des données (SNAPSHOT DATA)

* **Données brutes telles que vues par le système à l’instant T0.**
* Toutes les variables d’entrée ayant servi au calcul (revenus, dette, âge, etc.).
* *C'est ce qui permet de s'affranchir de l'historisation des bases de données.*

### 🔹 État du modèle et de la logique (MODEL STATE)

* Empreinte numérique (**hash**) du modèle et version de la configuration.
* Paramètres et seuils (thresholds) actifs au moment précis de la décision.

### 🔹 Résultat de la décision (OUTPUT)

* Résultat final (Accordé / Refusé) et scores de confiance.
* **Codes de motifs (reason codes)** expliquant factuellement la sortie du système.

### 🔹 Intégrité & Chaîne de confiance (INTEGRITY)

* **Signature cryptographique Ed25519** garantissant la non-altération.
* Chaînage séquentiel (**hash précédent**) rendant toute suppression détectable.

👉 **L'artefact est auto-contenu : il contient la preuve et les données nécessaires à sa propre vérification.**

→ Lire la définition formelle de l'*Artefact de Persistance Décisionnelle*

---

## 🔐 Une preuve technique, pas une interprétation

* aucune hypothèse a posteriori
* aucune simulation
* aucune approximation

L’artefact ne **raconte pas pourquoi**.
Il **atteste de ce qui s’est réellement produit**.

L’artefact est auto-contenu, signé et vérifiable.
**Il peut être consulté et interprété sans connaissance du système ayant produit la décision.**

---

## 🔁 Après la décision

Une fois capturé, le snapshot peut être :

* conservé
* transmis
* vérifié
* relu
* analysé

👉 Sans accès au système d’origine
👉 Sans dépendre de versions futures
👉 Sans rejouer l’exécution

---

## ⚙️ Pensé comme une infrastructure

* s’intègre aux systèmes existants
* compatible règles, scoring, IA
* capture synchrone ou asynchrone
* gouvernance des durées de conservation
* contrôle d’accès et sécurité intégrés

---

## 🎯 Ce que cela change fondamentalement

| Avant                 | Après            |
| --------------------- | ---------------- |
| Décision éphémère     | Décision figée   |
| Traces partielles     | Artefact complet |
| Reconstitution        | Attestation      |
| Dépendance au système | Indépendance     |
| Incertitude           | Intégrité        |

---

## 🗣️ Phrase clé

> *« Nous ne reconstruisons pas les décisions automatisées.
> Nous conservons l’instant exact où elles ont été prises. »*

---

## 🚀 Call to action

### Rendre chaque décision automatisée vérifiable par défaut

* consulter un artefact réel
* tester sur un flux existant
* évaluer l’impact technique

**[ Demander un example d'artefact ]**
**[ Demander une démo ]**

---

### (Optionnel) Mini-FAQ

**Est-ce un système d’audit ?**
Non. C’est une capture factuelle de l’exécution.

**Est-ce une explication ?**
Non. C’est une attestation.

**Est-ce dépendant du système source ?**
Non. L’artefact est autonome.

** English version**

**EN Version**

# 🧠 Hero section

### **Freeze every automated decision exactly as it occurred**

Every decision produced by an automated system generates a **self-contained snapshot**, captured at the **exact moment of execution**, then **signed and verifiable**.

👉 No reconstruction.
👉 No simulation.
👉 No dependency on the source system.

**[ Request an artifact sample ]**  **[ Request a demo ]**

---

## 🎯 Facts over Interpretation.

**This infrastructure does not explain decisions. It preserves them.**

---

## ❓ The Problem

### An automated decision vanishes the moment it is made

In most systems:

* data evolves
* rules change
* models are updated
* execution contexts are not frozen

Once a decision is produced, **its real state no longer exists**.

👉 All that remains are partial reconstructions.

---

## ✅ Our Principle

### Capture the moment of execution — don't explain it after the fact

For every automated decision, we produce a **factual artifact** that captures:

* what was executed
* with which data
* in what context
* and what result was produced

This artifact is generated **inline**, **without depending on the future state of the system**.

---

## 📦 Decision Artifact Content

Each snapshot includes:

### 🔹 Execution Metadata


* Unique execution ID and precise UTC timestamp.
* System identity and actor versioning.


### 🔹 Snapshot Data (Inputs at T0)


* **Raw data seen by the system at the exact moment of decision.**
* All variables used for the calculation (income, debt, age, etc.).


### 🔹 Model & Logic State


* Model hash and configuration versioning.
* Active thresholds and parameters at T0.


### 🔹 Decision Output


* Final result and confidence scores.
* **Actionable reason codes** explaining the outcome.


### 🔹 Integrity & Chain of Trust


* Cryptographic Ed25519 signature.
* Sequential chaining (`prev_hash`) to prevent deletion or alteration.


👉 The artifact is **self-contained** and **independently actionable**.

→ Read the formal definition of the *Decision Snapshot Artifact*

---

## 🔐 Technical proof, not interpretation

* no post-hoc assumptions
* no simulation
* no approximation

The artifact **does not tell "why"**.
It **attests to what actually happened**.

The artifact is self-contained, signed, and verifiable.
**It can be consulted and interpreted without any knowledge of the system that produced the decision.**

---

## 🔁 After the Decision

Once captured, the snapshot can be:

* preserved
* transmitted
* verified
* reviewed
* analyzed

👉 Without access to the original system
👉 Without depending on future versions
👉 Without replaying the execution

---

## ⚙️ Built as Infrastructure

* integrates with existing systems
* compatible with rules, scoring, and AI
* synchronous or asynchronous capture
* retention policy governance
* integrated access control and security

---

## 🎯 The Fundamental Shift

| Before | After |
| --- | --- |
| Ephemeral decision | Frozen decision |
| Partial traces | Complete artifact |
| Reconstruction | Attestation |
| System dependency | Independence |
| Uncertainty | Integrity |

---

## 🗣️ Key Quote

> *"We do not reconstruct automated decisions.
> We preserve the exact moment they were taken."*

---

## 🚀 Call to Action

### Make every automated decision verifiable by default

* view a real artifact
* test on an existing flow
* assess technical impact

**[ Request an artifact sample ]**
**[ Request a demo ]**

---

### (Optional) Mini-FAQ

**Is this an audit system?**
No. It is a factual capture of the execution.

**Is this an explanation?**
No. It is an attestation.

**Is it dependent on the source system?**
No. The artifact is autonomous.

