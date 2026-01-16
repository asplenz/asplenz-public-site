### 2. English Version

# Clarifications

This page addresses common questions raised when considering whether a decision evidence capability should exist within an organization. It focuses on scope, governance implications, and institutional consequences, not on product features or commercial terms.

---

## 1. What problem does Horizon actually solve?

**Asplenz Horizon eliminates the need to reconstruct facts after a decision is questioned.**

Today, when a decision is examined, companies pull logs from multiple systems, search emails, and reconcile timelines manually. Horizon preserves existing factual artefacts at decision time, so examination relies on **presentation**, not reconstruction. This shifts examination from a reactive activity to a property of execution itself.

## 2. Does Horizon decide anything or influence decisions?

**No.**
Horizon does not make decisions, recommend actions, or replace business logic. It only observes and preserves what already happened.

## 3. How are implementation details addressed?

This documentation focuses on conceptual acceptability and institutional boundaries. Specific implementation details (interfaces, integration mechanisms, access control, performance) are intentionally not specified here. These aspects are defined during a bounded acceptability discussion, once the capability is deemed conceptually acceptable and the organization’s constraints are known.

## 4. We already have observability and logging. Why is this different?

Observability and logging are designed to support reconstruction. Horizon addresses a different question: whether **declared, examinable facts** existed at execution time, before any investigation was required. Improving observability reduces the cost of reconstruction but does not remove it as a dependency. **Horizon is concerned with situations where reconstruction itself becomes the object of examination.**

## 5. We already generate artefacts automatically. Why is this not sufficient?

The distinction Horizon makes is not about whether data exists, but about **when a fact becomes institutionally declared**. In most architectures, artefacts are assembled post-hoc after a question is raised. Asplenz Horizon ensures facts are explicitly declared at execution time, with their scope and structure defined in advance, and preserved independently of any later investigation.

## 6. Does Horizon force companies to log more decisions?

**No.**
Horizon does not define what should be logged or expand the decision surface. It only consolidates facts already produced (logs, files, tickets) that are currently fragmented.

## 7. Does Horizon create new legal or regulatory exposure?

**Not by design.**
Scope, integration, and retention are company-controlled. Horizon does not publish to regulators. While clearer evidence can make weaknesses visible, most relevant facts already exist in fragmented archives today. Horizon changes **when** and **how consistently** existing facts are accessible, preventing decisions from being assessed based on competing reconstructed narratives.

## 8. Could Horizon records be subpoenaed or discovered?

Horizon records are subject to the same legal processes as any other internal company data (emails, logs, databases). Horizon does not introduce new categories of data or special legal status. It preserves evidence under the same rules governing discovery, subpoenas, and legal holds.

## 9. Does Horizon record every decision in the company?

**No.**
Integration is selective. Companies explicitly choose which systems are covered. Adoption typically starts with one high-pain or high-scrutiny area. Horizon is not an omniscient recorder: it is a **deliberately scoped evidence layer**.

## 10. Can Horizon be limited to high-risk decisions only?

**Yes.**
The choice of scope reflects organizational priorities, not product constraints. Typical starting points include regulatory decisions, automated approvals, or compliance-critical workflows.

## 11. Does Horizon replace logging or audit tools?

**No.**
It sits above them, acting as an evidence layer that correlates, stabilizes, and preserves.

## 12. Does Horizon only matter after something goes wrong?

**No.**
Horizon matters before anything goes wrong, because evidence must exist **before questions arise**. The capability is exercised at execution time.

## 13. How is Horizon different from just improving logging?

Logging improves observation. Horizon establishes evidence at execution time. Improved logging still leaves companies with fragmented sources and heavy reconstruction work.

## 14. Does Horizon record human decisions and overrides?

Only if the company chooses to integrate those points. If human artefacts already exist (tickets, approvals), Horizon can preserve them as facts.

## 15. Could Horizon increase individual accountability?

Horizon increases **factual clarity**. Whether this leads to changes in accountability depends on governance rules and organizational culture. These outcomes are determined by how evidence is used, not by the existence of the evidence layer itself.

## 16. Does Horizon lock companies into rigid narratives?

Horizon grounds interpretation in a shared factual baseline. This applies symmetrically to the organization and the examiner. Horizon does not interpret intent or quality: it anchors human interpretation to stable facts.

## 17. Who typically uses Horizon?

Horizon is designed for internal use by functions such as Internal Audit, Risk Management, Legal, and Compliance. External parties may review outputs only if the company decides or is required to disclose them.

## 18. What happens if a company decides not to retain certain evidence?

Retention, deletion, and scope are entirely determined by the company’s governance choices. The organization retains **full sovereignty** over what is retained, for how long, and for what purpose.

---

### Final note

Horizon does not force truth or change decisions. It answers one question reliably: **"What facts already existed at the moment this decision was made?"** Whether that capability should exist is an **institutional choice**, not a technical one.

---

### 3. Version Française

# Clarifications

Cette page répond aux questions courantes soulevées lors de l'évaluation de l'opportunité d'intégrer un dispositif de preuve décisionnelle au sein d'une organisation. Elle se concentre sur le périmètre, les enjeux de gouvernance et les conséquences institutionnelles, plutôt que sur les fonctionnalités du produit ou les conditions commerciales.

---

## 1. Quel problème Horizon résout-il réellement ?

**Asplenz Horizon élimine le besoin de reconstruire les faits après qu'une décision a été remise en question.**

Aujourd'hui, lorsqu'une décision est examinée, les entreprises extraient des logs de multiples systèmes, fouillent des courriels et réconcilient manuellement des chronologies. Horizon préserve les artefacts factuels existants au moment de la décision. Ainsi, l'examen repose sur la **présentation** de faits, et non sur leur reconstruction. Cela transforme l'examen, d'une activité réactive en une propriété intrinsèque de l'exécution.

## 2. Horizon décide-t-il de quoi que ce soit ou influence-t-il les décisions ?

**Non.**
Horizon ne prend pas de décisions, ne recommande aucune action et ne remplace pas la logique métier. Il se contente d'observer et de préserver ce qui s'est déjà produit.

## 3. Comment les détails de mise en œuvre sont-ils abordés ?

Cette documentation se concentre sur l'acceptabilité conceptuelle et les limites institutionnelles. Les questions relatives à l'instanciation du dispositif (interfaces, mécanismes d'intégration, contrôle d'accès, performance) ne sont pas spécifiées ici. Ces aspects sont définis lors d'une discussion d'acceptabilité délimitée, une fois que le dispositif est jugé conceptuellement acceptable et que les contraintes d'architecture et de sécurité de l'organisation sont connues.

## 4. Nous avons déjà de l'observabilité et des logs. En quoi est-ce différent ?

L'observabilité et les logs sont conçus pour faciliter la reconstruction. Horizon répond à une question différente : est-ce que des **faits déclarés et examinables** existaient au moment de l'exécution, avant que toute enquête ou explication ne soit requise ? Améliorer l'observabilité réduit le coût de la reconstruction mais ne l'élimine pas en tant que dépendance. **Horizon s'adresse aux situations où la reconstruction elle-même devient l'objet de l'examen.**

## 5. Nous générons déjà des artefacts automatiquement. Pourquoi cela ne suffit-il pas ?

La distinction établie par Horizon ne porte pas sur l'existence des données, mais sur **le moment où un fait devient institutionnellement déclaré**. Dans la plupart des architectures, les artefacts sont assemblés a posteriori, une fois qu'une question a été soulevée. Asplenz Horizon garantit que les faits sont explicitement déclarés au moment de l'exécution, avec un périmètre et une structure définis à l'avance, et préservés indépendamment de toute enquête ultérieure.

## 6. Horizon force-t-il les entreprises à tracer plus de décisions ?

**Non.**
Horizon ne définit pas ce qui doit être tracé et n'étend pas la surface de décision. Il se contente de consolider des faits déjà produits (logs, fichiers, tickets) qui sont actuellement fragmentés.

## 7. Horizon crée-t-il de nouvelles expositions juridiques ou réglementaires ?

**Pas par conception.**
Le périmètre, l'intégration et la rétention sont contrôlés par l'entreprise. Horizon ne publie rien vers les régulateurs. Si une preuve plus claire peut rendre des faiblesses visibles, la plupart des faits pertinents existent déjà aujourd'hui dans des archives fragmentées. Horizon modifie **le moment** et **la cohérence** avec lesquels les faits existants sont accessibles, évitant ainsi que des décisions ne soient évaluées sur la base de récits reconstruits contradictoires.

## 8. Les registres Horizon peuvent-ils faire l'objet d'une communication de pièces ?

Les registres Horizon sont soumis aux mêmes processus juridiques que toute autre donnée interne (courriels, logs, bases de données). Horizon n'introduit pas de nouvelles catégories de données ou de statut juridique spécial. Il préserve les preuves selon les mêmes règles régissant la communication de pièces (discovery), les injonctions et le secret professionnel.

## 9. Horizon enregistre-t-il chaque décision de l'entreprise ?

**Non.**
L'intégration est sélective. Les entreprises choisissent explicitement les systèmes couverts. L'adoption commence généralement par une zone de forte tension ou de contrôle intensif. Horizon n'est pas un enregistreur omniscient : c'est une **couche de preuve au périmètre délibérément restreint**.

## 10. Horizon peut-il être limité aux seules décisions à haut risque ?

**Oui.**
Le choix du périmètre reflète les priorités organisationnelles, et non les contraintes du produit. Les points de départ types incluent les décisions réglementaires, les approbations automatisées ou les flux critiques pour la conformité.

## 11. Horizon remplace-t-il les outils de logging ou d'audit ?

**Non.**
Il se situe au-dessus d'eux, agissant comme une couche de preuve qui corrèle, stabilise et préserve.

## 12. Horizon n'est-il utile qu'en cas de problème ?

**Non.**
Horizon est utile avant que tout problème ne survienne, car la preuve doit exister **avant que les questions ne surgissent**. Le dispositif est actionné au moment de l'exécution.

## 13. Quelle est la différence avec une simple amélioration du logging ?

Le logging améliore l'observation. Horizon établit la preuve au moment de l'exécution. Même amélioré, le logging laisse les entreprises face à des sources fragmentées et un travail de reconstruction lourd.

## 14. Horizon enregistre-t-il les décisions humaines et les passages outre ?

Uniquement si l'entreprise choisit d'intégrer ces points. Si des artefacts humains existent déjà (tickets, approbations), Horizon peut les préserver en tant que faits.

## 15. Horizon pourrait-il accroître la responsabilité individuelle ?

Horizon accroît la **clarté factuelle**. Le fait que cela mène à des changements en matière de responsabilité dépend des règles de gouvernance et de la culture organisationnelle. Ces résultats sont déterminés par l'usage de la preuve, et non par l'existence même de la couche de preuve.

## 16. Horizon enferme-t-il les entreprises dans des récits rigides ?

Horizon fonde l'interprétation sur un socle factuel commun. Cela s'applique symétriquement à l'organisation et à l'examinateur. Horizon n'interprète ni l'intention ni la qualité : il ancre l'interprétation humaine sur des faits stables.

## 17. Qui utilise généralement Horizon ?

Horizon est conçu pour un usage interne par des fonctions telles que l'Audit Interne, la Gestion des Risques, le Juridique et la Conformité. Des tiers ne peuvent consulter les résultats que si l'entreprise décide ou est tenue de les divulguer.

## 18. Que se passe-t-il si une entreprise décide de ne pas conserver certaines preuves ?

La rétention, la suppression et le périmètre sont exclusivement déterminés par les choix de gouvernance de l'entreprise. L'organisation conserve sa **pleine souveraineté** sur ce qui est conservé, pour quelle durée et à quelle fin.

---

### Note finale

Horizon n'impose pas de vérité et ne modifie pas les décisions. Il répond de manière fiable à une seule question : **« Quels faits existaient déjà au moment où cette décision a été prise ? »** Le fait que ce dispositif doive exister est un **choix institutionnel**, et non technique.

---
