[EN]

# **Illustrative Scenario: The 180-Day Audit Challenge**

## **From Fragile Reconstruction to Factual Authority**

### **The Context**

Consider a major retail bank processing **50,000 automated credit applications per day**. Decisions are made by a complex engine integrating real-time debt ratios, third-party credit scores, and internal risk models.

**The Event:** 180 days after a specific loan rejection, a regulatory body (or a legal representative) challenges the decision, citing a potential bias or lack of transparency. The bank is required to prove the exact factual basis of that specific decision.

---

### **Scenario A: Post-hoc Reconstruction (Without Horizon)**

*The bank relies on traditional logs and database backups.*

1. **The Investigation Crisis:** The Risk team contacts IT. IT discovers that the production database has been updated 12 times since the decision. The original input data has been overwritten or archived in a cold-storage data lake.
2. **The Manual Excavation:** A "Task Force" of 6 people (Data Engineers, Risk Analysts, Legal) is formed. They spend 4 weeks attempting to correlate server logs with archived data extracts to "guess" what the system saw at .
3. **The Result - A Narrative:** The bank produces a 40-page report explaining what "likely happened."
4. **The Weakness:** The evidence is a **reconstruction**. It is subject to hindsight bias. The regulator notes that the bank cannot mathematically prove that the data used in the report is exactly what the engine consumed six months ago. **The responsibility for the proof implicitly falls back on the institution’s risk leadership.**

**Total Cost:** ~€450,000 in operational overhead.
**Result:** Residual regulatory fine for "Lack of Process Traceability."

---

### **Scenario B: Execution-time Evidence (With Horizon)**

*The bank has implemented Horizon as its Decision Ledger (Layer 0).*

1. **The Instant Retrieval:** The Internal Auditor enters the `Decision_ID` into the system. Horizon immediately retrieves the **Decision Snapshot** captured 180 days ago.
2. **The Factual Proof:** The snapshot contains the exact **Inputs**, the **System Reference** (the specific model version), and the **Output** as they existed at the Point of No Return.
3. **The Mathematical Seal:** The auditor runs a verification script. The **Integrity Seal** matches. It is mathematically proven that this record has not been altered since the moment of execution.
4. **The Result - A Fact:** The bank provides a 1-page certificate of evidence. The case is closed in 48 hours. **No interpretation is required. The evidence stands independently of any narrative.**

**Total Cost:** Near zero (Internal Audit time).
**Result:** Total Regulatory De-risking.

---

### **Operational Comparison**

| Metric | Scenario A (Reconstruction) | Scenario B (Horizon) |
| --- | --- | --- |
| **Time to Answer** | 8 - 12 Weeks | < 24 Hours |
| **Resource Mobilization** | Cross-functional Task Force | 1 Authorized Auditor |
| **Nature of Output** | Analytical Narrative (Probable) | Factual Proof (Certain) |
| **Data Integrity** | Fragile (Post-hoc correlation) | Absolute (Cryptographic seal) |
| **Institutional Risk** | High (Exposed to challenge) | Null (Sovereign authority) |

---

### **Conclusion**

This scenario demonstrates that **evidence cannot be retrofitted**.

Authority is established at execution time — or it is never established. By deploying Horizon as its Decision Ledger, the bank stops being a defendant trying to justify its past. It becomes an **Authority** capable of producing the truth on demand.

👉 **[Discuss This Audit Scenario →]**
👉 **[Explore the Technical Snapshot →]**

---

---

[FR]

# **Scénario Illustratif : Le défi de l'audit à J+180**

## **Du récit fragile à l'autorité factuelle**

### **Le Contexte**

Considérez une grande banque de détail traitant **50 000 demandes de crédit automatisées par jour**. Les décisions sont prises par un moteur complexe intégrant des ratios d'endettement en temps réel, des scores de crédit tiers et des modèles de risque internes.

**L'Événement :** 180 jours après un refus de prêt spécifique, un organisme de réglementation (ou un représentant juridique) conteste la décision, invoquant un biais potentiel ou un manque de transparence. La banque est tenue de prouver la base factuelle exacte de cette décision spécifique.

---

### **Scénario A : Reconstruction a posteriori (Sans Horizon)**

*La banque s'appuie sur les logs traditionnels et les sauvegardes de base de données.*

1. **La Crise d'Investigation :** L'équipe Risque contacte l'IT. L'IT découvre que la base de données de production a été mise à jour 12 fois depuis la décision. Les données d'entrée originales ont été écrasées ou archivées dans un data lake.
2. **L'Excavation Manuelle :** Une "Task Force" de 6 personnes est constituée. Ils passent 4 semaines à tenter de corréler les logs serveurs avec des extraits de données archivées pour « deviner » ce que le système a vu à .
3. **Le Résultat - Un Récit :** La banque produit un rapport de 40 pages expliquant ce qui s'est « probablement passé ».
4. **La Faiblesse :** La preuve est une **reconstruction**. Elle est sujette au biais de rétrospective. Le régulateur note que la banque ne peut pas prouver mathématiquement que les données utilisées dans le rapport sont exactement celles que le moteur a consommées il y a six mois. **La responsabilité de la preuve revient implicitement à la direction du risque.**

**Coût Total :** ~450 000 € en frais opérationnels.
**Résultat :** Amende réglementaire résiduelle pour « Manque de traçabilité des processus ».

---

### **Scénario B : Preuve à l'exécution (Avec Horizon)**

*La banque a implémenté Horizon comme son Registre Décisionnel (Decision Ledger).*

1. **L'Extraction Instantanée :** L'auditeur interne saisit l'identifiant de la décision (`Decision_ID`). Horizon récupère immédiatement le **Snapshot Décisionnel** capturé il y a 180 jours.
2. **La Preuve Factuelle :** Le snapshot contient les **Entrées** exactes, la **Référence Système** (version du modèle) et la **Sortie** telles qu'elles existaient au Point de Non-Retour.
3. **Le Sceau Mathématique :** L'auditeur exécute un script de vérification. Le **Sceau d'Intégrité** correspond. Il est prouvé mathématiquement que cet enregistrement n'a pas été modifié depuis son exécution.
4. **Le Résultat - Un Fait :** La banque fournit un certificat de preuve d'une page. L'affaire est classée en 48 heures. **Aucune interprétation n’est requise. La preuve existe indépendamment de tout récit.**

**Coût Total :** Presque nul (temps de l'auditeur interne).
**Résultat :** Désensibilisation totale du risque réglementaire.

---

### **Comparaison Opérationnelle**

| Métrique | Scénario A (Reconstruction) | Scénario B (Horizon) |
| --- | --- | --- |
| **Délai de Réponse** | 8 - 12 Semaines | < 24 Heures |
| **Mobilisation Ressources** | Task Force Transverse | 1 Auditeur Autorisé |
| **Nature du Résultat** | Récit Analytique (Probable) | Preuve Factuelle (Certaine) |
| **Intégrité des Données** | Fragile (Corrélation a posteriori) | Absolue (Sceau cryptographique) |
| **Risque Institutionnel** | Élevé (Exposé à la contestation) | Nul (Autorité souveraine) |

---

### **Conclusion**

Ce scénario démontre que **la preuve ne peut pas être reconstruite après coup**.

L’autorité se construit à l’exécution — ou elle ne se construit jamais. En déployant Horizon comme son Registre Décisionnel, la banque cesse d'être un défendeur tentant de justifier son passé. Elle devient une **Autorité** capable de produire la vérité sur demande.

👉 **[Discuter de ce Scénario d'Audit →]**
👉 **[Explorer le Snapshot Technique →]**

