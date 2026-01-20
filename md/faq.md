# FAQ - Questions fréquentes / Frequently Asked Questions

---

## Français

### Terminologie

**Q: Qu'est-ce que la Decision Observability Infrastructure ?**
A: Une infrastructure d'observabilité décisionnelle est une couche technique qui produit des Decision Snapshots au moment de l'exécution. Elle rend les décisions automatisées observables et auditables.

**Q: Qu'est-ce qu'un Decision Snapshot ?**
A: Un Decision Snapshot est l'enregistrement vérifiable de ce qui a été décidé au moment de l'exécution. C'est la preuve — le fait décisionnel tel qu'il est établi.

**Q: Qu'est-ce qu'un Decision Snapshot Artifact ?**
A: Un Decision Snapshot Artifact est la matérialisation technique du Decision Snapshot : un objet signé, immuable et auto-contenu, préservé indépendamment des systèmes sources.

### Général

**Q: Pourquoi ne pas faire ça avec des logs ?**
A: Les logs sont utiles, mais souvent dispersés, reconstitués, et dépendants du SI source. Horizon vise une preuve décisionnelle autonome, stable et exploitable.

**Q: Quel périmètre pour commencer ?**
A: La bonne approche est ciblée : un use case critique, instrumentation au point de décision, puis extension progressive. Éviter "capturer tout".

### Données & Intégration

**Q: Horizon stocke-t-il des données sensibles ?**
A: Horizon n'ingère pas les flux de données opérationnels. Il préserve les faits décisionnels déclarés au moment de l'exécution, selon des schémas et périmètres définis par l'institution. La minimisation des données, la rétention et la classification de sensibilité restent entièrement sous contrôle institutionnel.

**Q: Comment le contenu d'un snapshot décisionnel est-il défini ?**
A: Horizon définit un ensemble de champs standards. Chaque institution définit les champs spécifiques au système et fournit le schéma utilisé pour alimenter le snapshot décisionnel.

**Q: Qui décide quelles données sont capturées ?**
A: Horizon ne décide pas de ce qui est pertinent. Les clients définissent le schéma et les données fournies pour chaque système.

**Q: Comment Horizon s'intègre-t-il aux systèmes existants ?**
A: Asplenz fournit un SDK léger qui s'intègre au point de décision de l'institution. Les détails d'intégration sont discutés au cas par cas pour refléter les contraintes système, les exigences de sécurité et le contexte institutionnel. La documentation technique est disponible sur demande.

### Positionnement

**Q: Horizon influence-t-il ou participe-t-il à la prise de décision ?**
A: Non. Horizon est un composant d'infrastructure passif. Il observe et enregistre les données d'exécution des décisions, mais n'évalue ni ne prend jamais de décision.

**Q: Horizon est-il lié à des cadres réglementaires spécifiques ?**
A: Non. Horizon est une infrastructure technique agnostique aux régimes réglementaires. Il produit des artefacts signés au moment de l'exécution que les institutions peuvent utiliser dans leurs propres processus réglementaires.

---

## English

### Terminology

**Q: What is Decision Observability Infrastructure?**
A: A Decision Observability Infrastructure is a technical layer that produces Decision Snapshots at execution time. It makes automated decisions observable and auditable.

**Q: What is a Decision Snapshot?**
A: A Decision Snapshot is the verifiable record of what was decided at execution time. It is the evidence — the decision fact as established.

**Q: What is a Decision Snapshot Artifact?**
A: A Decision Snapshot Artifact is the technical materialization of the Decision Snapshot: a signed, immutable, and self-contained object, preserved independently of source systems.

### General

**Q: Why not do this with logs?**
A: Logs are useful, but often scattered, reconstructed, and dependent on source IS. Horizon aims for autonomous, stable and usable decision evidence.

**Q: What is the recommended scope to start with?**
A: The right approach is targeted: one critical use case, instrumentation at the decision point, then gradual extension. Avoid "capture everything".

### Data & Integration

**Q: Does Horizon store sensitive data?**
A: Horizon does not ingest operational data flows. It preserves declared decision facts at execution time, according to schemas and boundaries defined by the institution. Data minimization, retention, and sensitivity classification remain fully under institutional control.

**Q: How is the content of a decision snapshot defined?**
A: Horizon defines a set of standard fields. Each institution defines system-specific fields and provides the schema used to populate the decision snapshot.

**Q: Who decides what data is captured?**
A: Horizon does not decide what is relevant. Clients define the schema and the data provided for each system.

**Q: How does Horizon integrate into existing systems?**
A: Asplenz provides a lightweight SDK that is integrated at the institution's decision point. Integration details are discussed on a case-by-case basis to reflect system constraints, security requirements, and institutional context. Technical documentation is available upon request.

### Positioning

**Q: Does Horizon influence or participate in decision-making?**
A: No. Horizon is a passive infrastructure component. It observes and records decision execution data, but never evaluates or makes decisions.

**Q: Is Horizon tied to specific regulatory frameworks?**
A: No. Horizon is a technical infrastructure agnostic to regulatory regimes. It produces signed execution-time artifacts that institutions may use within their own regulatory processes.
