### [EN]

# **Foundations | Part 2: Decision Evidence Implementation**

## **Instantiating Layer 0 with Horizon**

---

### **From Framework to Infrastructure**

While the *Automated Decision Authority Framework* defines the rules for integrity, **Horizon** provides the physical infrastructure to enforce them. As the reference implementation of **Layer 0**, Horizon is designed to be a passive, high-performance observer that captures decision facts without interfering with the primary business logic.

---

### **1. The Non-Blocking Capture Pattern**

The most critical requirement for a Layer 0 is **operational neutrality**. Horizon must not slow down the lending engine or introduce new points of failure in the decision path.

To achieve this, Horizon utilizes an **asynchronous, "fire-and-forget" pattern**. The capture call is offloaded to a background process, ensuring that the customer's credit response time remains unaffected.

```python
# Integration at the Point of No Return
# The business decision is finalized, then evidence is sealed.

horizon.capture(
    input=application_data,    # Raw financials, scores, context
    output=credit_decision,   # Approved/Rejected + Terms
    system_ref="lending_v2.1" # The specific authority version
)

# Business flow continues instantly
send_response_to_customer(credit_decision)

```

---

### **2. Deployment Archetypes: Total Sovereignty**

Horizon is an **in-perimeter** solution. To maintain absolute evidence sovereignty, no data ever leaves the institution's secure environment. It adapts to existing architectures through two primary archetypes:

* **Embedded (SDK):** For high-frequency environments where microsecond latency is a requirement.
* **Service (API):** For cloud-native microservices architectures requiring a centralized evidence ledger.

**Security Guarantee:** Horizon requires no external network access to sign, seal, or verify snapshots. The institution remains the sole owner of the cryptographic keys and the resulting ledger.

---

### **3. The "System_Ref" Authority**

A Decision Snapshot is only as valuable as the context of its authority. Horizon enforces the inclusion of a `System_Ref`—a unique identifier for the specific version of the logic, model, or rule-set that was in power at the moment of execution.

This ensures that five years after a decision, the bank can identify exactly which "version of the truth" was applied, even if the source code or the AI model has long since evolved.

---

### **4. Passive Observation vs. Active Validation**

Horizon does not sit *in* the critical path; it sits *beside* it.

* **It does not validate:** Horizon does not decide if a loan should be granted.
* **It does not transform:** It records data exactly as consumed and produced.
* **It is fault-tolerant:** If the capture layer experiences a disruption, the core business engine continues to function. Evidence is decoupled from execution to protect continuity.

---

---

---

### [FR]

# **Fondations | Partie 2 : Implémentation de la Preuve Décisionnelle**

## **Instancier le Layer 0 avec Horizon**

---

### **Du Cadre à l'Infrastructure**

Alors que le *Cadre de l'Autorité Décisionnelle Automatisée* définit les règles d'intégrité, **Horizon** fournit l'infrastructure physique pour les appliquer. En tant qu'implémentation de référence du **Layer 0**, Horizon est conçu pour être un observateur passif de haute performance qui capture les faits décisionnels sans interférer avec la logique métier primaire.

---

### **1. Le Modèle de Capture Non-Bloquant**

L'exigence la plus critique pour un Layer 0 est la **neutralité opérationnelle**. Horizon ne doit pas ralentir le moteur de crédit ni introduire de nouveaux points de défaillance dans le flux de décision.

Pour ce faire, Horizon utilise un **modèle asynchrone ("fire-and-forget")**. L'appel de capture est déporté vers un processus d'arrière-plan, garantissant que le temps de réponse au client reste inchangé.

[Image d'une architecture de capture de données asynchrone et non-bloquante dans l'ingénierie logicielle]

```python
# Intégration au Point de Non-Retour
# La décision métier est finalisée, puis la preuve est scellée.

horizon.capture(
    input=application_data,    # Données financières, scores, contexte
    output=credit_decision,   # Approuvé/Refusé + Conditions
    system_ref="lending_v2.1" # La version spécifique de l'autorité
)

# Le flux métier continue instantanément
envoyer_reponse_au_client(credit_decision)

```

---

### **2. Archétypes de Déploiement : Souveraineté Totale**

Horizon est une solution **in-perimeter**. Pour maintenir une souveraineté absolue sur la preuve, aucune donnée ne quitte l'environnement sécurisé de l'institution. Il s'adapte aux architectures existantes via deux archétypes principaux :

* **SDK Embarqué :** Pour les environnements à haute fréquence où la latence se compte en microsecondes.
* **Service (API) :** Pour les architectures de microservices cloud-native nécessitant un registre de preuves centralisé.

**Garantie de Sécurité :** Horizon ne nécessite aucun accès réseau externe pour signer, sceller ou vérifier les snapshots. L'institution reste l'unique propriétaire des clés cryptographiques et du registre résultant.

---

### **3. L'Autorité du "System_Ref"**

Un Snapshot Décisionnel n'a de valeur que par le contexte de son autorité. Horizon impose l'inclusion d'une `System_Ref` — un identifiant unique de la version spécifique de la logique, du modèle ou des règles qui faisaient autorité au moment de l'exécution.

Cela garantit que cinq ans après une décision, la banque peut identifier exactement quelle "version de la vérité" a été appliquée, même si le code source ou le modèle d'IA a évolué depuis longtemps.

---

### **4. Observation Passive vs Validation Active**

Horizon ne se situe pas *dans* le chemin critique ; il se situe *à côté*.

* **Il ne valide pas :** Horizon ne décide pas si un prêt doit être accordé.
* **Il ne transforme pas :** Il enregistre les données exactement telles qu'elles ont été consommées et produites.
* **Il est tolérant aux pannes :** Si la couche de capture subit une interruption, le moteur métier continue de fonctionner. La preuve est découplée de l'exécution pour protéger la continuité.

