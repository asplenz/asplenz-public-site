# **Horizon – An Implementation of DOI**

## **Instantiating Decision Observability**

While **Decision Observability Infrastructure (DOI)** defines the category, **Horizon** serves as the reference implementation. Horizon is designed as a passive, high-performance **infrastructure layer** that integrates into critical systems to automate the production and cryptographic sealing of **Decision Snapshots**.

---

### **1. Core Principle: The Passive Observer**

Horizon operates as a non-intrusive observer of decision-making systems. It does not interfere with, validate, or modify the decision flow. It captures the factual state at the **Point of No Return** — the exact moment a decision is finalized and about to be externalized — and preserves it as immutable evidence.

* **Zero Logic Risk:** Horizon cannot alter the outcome or the path of a decision.
* **Preservation Focus:** Horizon ensures that even if the source system is modified or decommissioned, the evidence remains intact and accessible.
* **Fault Tolerance:** If the observability layer is interrupted, the core execution flow remains unaffected.

---

### **2. Integration: Capturing the Point of No Return**

Integrating Horizon requires a single call at the decision point. It is designed for minimal footprint: no middleware changes, no schema modifications, and no workflow redesign.

#### **Single Integration Point**

```python
# At the moment the decision is made
horizon.capture(
    input=application_data,
    output=decision_result,
    system_ref="lending_core_v2.1"
)

# Business flow continues immediately
send_decision_to_applicant(decision_result)

```

**The call is asynchronous and strictly non-blocking.** Business continuity is prioritized: the execution flow proceeds immediately without waiting for persistence, ensuring zero impact on transaction latency.

#### **What You Provide**

| **Element** | **Description** |
| --- | --- |
| **Input** | The exact data consumed by the decision logic. |
| **Output** | The final result produced by the system. |
| **System Reference** | Identifier and version of the system that made the decision. |

> **Note on Evaluation:** The `system_ref` identifies the authority that made the decision. Compliance or policy evaluation is considered a separate observation, captured independently when required. This preserves the purity of the original execution fact.

---

### **3. Key Technical Capabilities**

| **Capability** | **Mechanism** | **Outcome** |
| --- | --- | --- |
| **Tamper-Evidence** | Cryptographic sealing + Hash linking. | Any alteration of the record or its chronology is immediately detectable. |
| **Authenticity** | Digital signatures. | The origin of every snapshot is verified and irrefutable. |
| **Determinism** | Canonical serialization. | The same input and context will always produce an identical cryptographic signature. |
| **Independence** | Self-contained records. | The evidence survives system migrations or source system decommissioning. |

---

### **4. Deployment Flexibility**

Horizon is deployed **in-perimeter**, ensuring total data sovereignty. It adapts to your existing infrastructure through two modes:

* **Embedded Library:** For high-performance or edge environments, with local persistence.
* **Centralized Service:** For cloud-native microservices, with API-based capture.

**No data ever leaves your organization’s perimeter.**

---

### **5. Isolation by Design**

Horizon does not sit in the critical decision path. Its design strictly adheres to the following constraints:

* **No Validation:** It does not approve or block decisions.
* **No Transformation:** It does not modify the captured data.
* **Zero Latency Impact:** The non-blocking architecture ensures that business operations continue unhindered. Horizon prioritizes system availability, ensuring that even in the unlikely event of a capture failure, the business logic remains unaffected.

---

---

# **Horizon – Une implémentation de la DOI**

## **Instancier l'observabilité décisionnelle**

Alors que l'**Infrastructure d'Observabilité Décisionnelle (DOI)** définit la catégorie, **Horizon** en constitue l'implémentation de référence. Horizon est conçu comme une **couche d'infrastructure** passive et performante qui s'intègre aux systèmes critiques pour automatiser la production et le scellement cryptographique des **Snapshots de décision**.

---

### **1. Principe fondamental : l'observateur passif**

Horizon opère comme un observateur non intrusif des systèmes décisionnels. Il n'interfère pas avec le flux de décision, ne le valide pas et ne le modifie pas. Il capture l'état factuel au **Point de non-retour** — l'instant précis où une décision est finalisée et sur le point d'être externalisée — et le préserve comme une preuve immuable.

* **Un risque logique nul :** Horizon ne peut modifier ni l'issue, ni le cheminement d'une décision.
* **Focus sur la préservation :** Horizon garantit que même si le système source est modifié ou déclassé, la preuve reste intacte et accessible.
* **Tolérance aux pannes :** Si la couche d'observabilité est interrompue, le flux d'exécution principal reste inchangé.

---

### **2. Intégration : Capturer le Point de non-retour**

L'intégration d'Horizon nécessite un appel unique au point de décision. Il est conçu pour une empreinte minimale : aucun changement de middleware, aucune modification de schéma et aucune refonte de vos processus métier.

#### **Point d'intégration unique**

```python
# Au moment où la décision est prise
horizon.capture(
    input=donnees_application,
    output=resultat_decision,
    system_ref="lending_core_v2.1"
)

# Le flux métier continue immédiatement
notifier_decision_client(resultat_decision)

```

**L'appel est asynchrone et strictement non bloquant.** La continuité du flux métier est systématiquement privilégiée : l'exécution se poursuit immédiatement sans attendre la persistance de la preuve, garantissant un impact nul sur la latence des transactions.

#### **Ce que vous fournissez**

| **Élément** | **Description** |
| --- | --- |
| **Entrées (Input)** | Les données exactes consommées par la logique de décision. |
| **Sortie (Output)** | Le résultat final produit par le système. |
| **Référence Système** | Identifiant et version du système ayant pris la décision. |

> **Note sur l'évaluation :** Le `system_ref` identifie l'autorité qui a pris la décision. L'évaluation de conformité est considérée comme une observation séparée, capturée indépendamment si nécessaire. Cela préserve la pureté du fait d'exécution original.

---

### **3. Capacités techniques clés**

| **Capacité** | **Mécanisme** | **Résultat** |
| --- | --- | --- |
| **Preuve d'altération** | Scellement cryptographique + Chaînage de hash. | Toute modification de l'enregistrement ou de sa chronologie est immédiatement détectable. |
| **Authenticité** | Signatures numériques. | L'origine de chaque snapshot est vérifiée et irréfutable. |
| **Déterminisme** | Sérialisation canonique. | Une même entrée et un même contexte produiront toujours une signature identique. |
| **Indépendance** | Enregistrements autonomes. | La preuve survit aux migrations ou au déclassement du système source. |

---

### **4. Flexibilité de déploiement**

Horizon est déployé **dans votre périmètre (in-perimeter)**, garantissant une souveraineté totale des données. Il s'adapte à votre infrastructure via deux modes :

* **Bibliothèque embarquée :** Pour les environnements haute performance ou "edge", avec persistance locale.
* **Service centralisé :** Pour les microservices cloud-native, avec capture via API.

**Aucune donnée ne quitte le périmètre de votre organisation.**

---

### **5. Isolation par conception**

Horizon ne se situe pas sur le chemin critique de la décision. Sa conception respecte strictement les contraintes suivantes :

* **Pas de validation :** Il n'approuve ni ne bloque les décisions.
* **Pas de transformation :** Il ne modifie pas les données capturées.
* **Impact nul sur la latence :** L'architecture non bloquante garantit que les opérations métier ne sont jamais entravées. Horizon privilégie la disponibilité du système source, s'assurant que même dans l'éventualité rare d'un échec de capture, la logique métier reste inchangée.

---
