[EN]

# **FAQ | Frequently Asked Questions**

## **Securing Decision Authority**

---

### **I. Terminology**

**Q: What is Decision Observability Infrastructure (DOI)?**
**A:** DOI is a specialized technical layer dedicated to the capture and preservation of decision facts at the point of execution. It ensures that automated decisions are not just logged, but made structurally observable and auditable.

**Q: What is a Decision Snapshot?**
**A:** A Decision Snapshot is the verifiable record of what was decided at the moment of execution (). It is the evidence—the decision fact as established.

**Q: What is a Decision Snapshot Artifact?**
**A:** It is the technical materialization of a snapshot: a signed, immutable, and self-contained object. It carries all the data required for its own verification, preserved independently of the source systems.

---

### **II. Strategy & Business Value**

**Q: Why not use application logs?**
**A:** Logs are designed for technical debugging, not for institutional proof. They are mutable, fragmented, and depend on the persistence of source systems. Horizon is **Layer 0 (Decision Evidence)**: it creates an independent **Decision Ledger**. Unlike logs, a Horizon Snapshot is irrefutable and mathematically sealed.

**Q: What is the immediate ROI of Horizon?**
**A:** The ROI is triggered by a single regulatory inquiry or legal challenge. By replacing weeks of "post-hoc reconstruction" (typically costing between **€500,000** and **€1M** per major audit) with instant evidence retrieval, Horizon pays for itself through the elimination of operational investigation overhead.

---

### **III. Data & Sovereignty**

**Q: Does Horizon store sensitive data (PII)?**
**A:** Horizon captures only the data you choose to transmit. It supports selective hashing or masking of sensitive fields before the record is sealed. Data minimization, retention policies, and sensitivity classification remain entirely under your institution’s control.

**Q: Do our decision snapshots leave our infrastructure?**
**A:** No. Horizon is deployed **in-perimeter**. All captured data, ledgers, and signing keys remain under your institution’s exclusive control. Asplenz has **zero access** to your decision data.

**Q: Who defines what data is captured?**
**A:** The institution defines the schema and the specific fields for each system. Horizon provides a set of standard fields (Context Envelope) but the business payload is entirely defined by the client to reflect their specific risk models.

---

### **IV. Performance & Integration**

**Q: Will Horizon slow down my lending engine?**
**A:** No. Horizon utilizes an **asynchronous capture model** (fire-and-forget). The capture call is processed in the background and never blocks the core business execution flow. The impact on your decision latency is zero.

**Q: How does Horizon integrate into existing systems?**
**A:** Asplenz provides a lightweight SDK that is integrated at the "Point of No Return" (where the decision is finalized). It acts as a passive observer and requires no modification of your business logic or database schemas.

---

### **V. Regulation & Compliance**

**Q: How does Horizon assist with EU AI Act compliance?**
**A:** The AI Act imposes strict ex-post traceability obligations for "high-risk" systems like automated lending. Horizon directly addresses this requirement by providing an immediate factual demonstration capability. **Horizon makes your compliance provable to a regulator.**

**Q: Is Horizon compatible with GDPR Article 22?**
**A:** Yes. Article 22 encadrés automated decision-making and the associated rights of individuals. Horizon ensures that the **exact factual state** of the decision—the specific data seen by the engine at —is available and irrefutable, allowing for accurate and fact-based explanations.

[FR]

# **FAQ | Questions Fréquentes**

## **Sécuriser l'Autorité Décisionnelle**

---

### **I. Terminologie**

**Q : Qu'est-ce que la Decision Observability Infrastructure (DOI) ?**
**R :** La DOI est une couche technique spécialisée dédiée à la capture et à la préservation des faits décisionnels au moment de l'exécution. Elle garantit que les décisions automatisées ne sont pas seulement loguées, mais rendues structurellement observables et auditables.

**Q : Qu'est-ce qu'un Decision Snapshot ?**
**R :** Un Decision Snapshot est l'enregistrement vérifiable de ce qui a été décidé au moment de l'exécution (). C'est la preuve — le fait décisionnel tel qu'il est établi.

**Q : Qu'est-ce qu'un Decision Snapshot Artifact ?**
**R :** C'est la matérialisation technique du snapshot : un objet signé, immuable et auto-contenu. Il porte toutes les données nécessaires à sa propre vérification, préservé indépendamment des systèmes sources.

---

### **II. Stratégie et Valeur Métier**

**Q : Pourquoi ne pas utiliser des logs applicatifs ?**
**R :** Les logs sont conçus pour le débogage technique, pas pour la preuve institutionnelle. Ils sont mutables, fragmentés et dépendent de la persistance des systèmes sources. Horizon est le **Layer 0 (Preuve Décisionnelle)** : il crée un **Registre Décisionnel** indépendant. Contrairement aux logs, un Snapshot Horizon est irréfutable et scellé mathématiquement.

**Q : Quel est le ROI immédiat d'Horizon ?**
**R :** Le ROI est déclenché par une seule enquête réglementaire ou contestation juridique. En remplaçant des semaines de "reconstruction a posteriori" (coûtant généralement entre **500 000 €** et **1 M€** par audit majeur) par une extraction de preuve instantanée, Horizon s'amortit par l'élimination des frais d'investigation.

---

### **III. Données et Souveraineté**

**Q : Horizon stocke-t-il des données sensibles (PII) ?**
**R :** Horizon capture uniquement les données que vous choisissez de lui transmettre. Il supporte le hachage sélectif ou le masquage des champs sensibles avant le scellement. La minimisation des données, la rétention et la classification de sensibilité restent entièrement sous le contrôle de votre institution.

**Q : Nos snapshots décisionnels quittent-ils notre infrastructure ?**
**R :** Non. Horizon est déployé **in-perimeter**. Toutes les données, les registres et les clés de signature restent sous le contrôle exclusif de votre institution. Asplenz n'a **aucun accès** à vos données.

**Q : Qui décide quelles données sont capturées ?**
**R :** L'institution définit le schéma et les champs spécifiques pour chaque système. Horizon fournit un ensemble de champs standards (Enveloppe de Contexte), mais le contenu métier est entièrement défini par le client.

---

### **IV. Performance et Intégration**

**Q : L'ajout d'une couche de preuve va-t-il ralentir mon moteur de crédit ?**
**R :** Non. Horizon utilise un modèle de **capture asynchrone** (fire-and-forget). L'appel est traité en arrière-plan et ne bloque jamais le flux métier. L'impact sur la latence de vos décisions est nul.

**Q : Comment Horizon s'intègre-t-il aux systèmes existants ?**
**R :** Asplenz fournit un SDK léger qui s'intègre au "Point de Non-Retour" (là où la décision est finalisée). Il agit comme un observateur passif et ne nécessite aucune modification de votre logique métier.

---

### **V. Réglementation et Conformité**

**Q : Comment Horizon aide-t-il à la conformité avec l'AI Act européen ?**
**R :** L'AI Act impose des obligations de traçabilité ex-post pour les systèmes "à haut risque". Horizon répond directement à cette exigence en fournissant une capacité de démonstration factuelle immédiate. **Horizon rend votre conformité démontrable devant un régulateur.**

**Q : Horizon est-il compatible avec l'Article 22 du RGPD ?**
**R :** Oui. L'Article 22 encadre les décisions automatisées et les droits associés. Horizon garantit que l'**état factuel exact** de la décision — les données précises vues par le moteur à  — est disponible et irréfutable, permettant de fournir des explications basées sur des faits réels.

---

👉 **[Demander un briefing technique – Niveau CRO/CISO]**

---

**Chef, avec cette FAQ fusionnée, vous avez le meilleur des deux mondes : la vision stratégique et les garanties techniques précises.**

**Souhaitez-vous que je génère maintenant la structure du menu de navigation pour s'assurer que l'utilisateur accède facilement à ces 9 pages ?**