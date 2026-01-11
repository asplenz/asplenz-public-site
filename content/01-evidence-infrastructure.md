###  English Version

# Evidence Infrastructure

## From reconstruction to decision evidence

This section explains how to read and understand Horizon. It covers the problem being addressed, the core principle, and what "fact" means in this context.

Most systems are built to operate. Few are built to be examined later.

When a specific transaction, incident, or decision is scrutinized, organizations often discover that their "memory" is distributed across tools and teams, and that the past must be reconstructed before it can even be discussed.

This approach is about one thing: ensuring that examinable facts exist **at execution time**, so that later examination relies on facts already constituted, not on correlation and interpretation assembled under pressure.

---

### The failure mode

When a case is questioned, teams typically rely on:

* Logs fragmented across multiple systems
* Dashboards that reflect current state, not past execution
* Tickets, emails, documents, and post-mortems written later
* Human memory and informal explanations

This creates a predictable pattern:

* Timelines are rebuilt from heterogeneous traces
* Context is inferred after the fact
* Multiple "versions" of what happened emerge
* Explanations remain contestable because the reconstruction is contestable

(See: Evidence vs reconstruction)

---

### The shift

Under scrutiny, the question changes from:

"How does the system usually behave?"

to:

**"What exactly happened in this specific case, and what facts existed at that moment?"**

At that point, the cost is not only time. It is also governance: the organization loses the ability to ground discussions in a shared factual baseline.

---

### Core principle

**Evidence should be created at the point of no return: the moment an action becomes irreversible, institutionally binding, or materially consequential.**

Examination may happen later. But evidence must exist before questions arise.

---

### What "fact" means here

In this context, a "fact" is not business truth or regulatory correctness. It is:

> *a signed and recorded act or declaration, produced by a system or a human actor, regardless of its business truth or regulatory correctness.*

The objective is not to "explain" the past with better narratives. It is to preserve what was declared and executed, **immutably and in order**, so discussion starts from stable facts.

---

### What this is (and is not)

* This is an evidence approach: it preserves executions and declared evaluations at execution time.
* It is a passive observation layer: it does not interfere with the operational path of the systems it monitors.
* It does not replace observability, SIEM, audit tools, or case management.
* It does not decide, validate, optimize, or enforce.
* It applies equally to automated workflows and human-in-the-loop decisions: what matters is the point of no return.

---

### Scope and control

The company decides which decisions, actions, or processes are within scope. Integration is selective by design.

* Adoption typically starts with one high-pain or high-scrutiny area
* Companies explicitly choose which systems are covered
* Asplenz Horizon does not expand the decision surface

---

### Retention and governance

Retention, deletion, and scope are entirely determined by the company's governance choices.

* Retention policies remain company-controlled
* Deletion rules are respected
* Scope limits are enforced

As with any other system, the company retains **full sovereignty** over what is retained, for how long, and for what purpose.

---

### Legal considerations

Horizon records are subject to the same legal processes as any other internal company data.

Asplenz does not introduce new categories of data, new disclosure obligations, or special legal status. Horizon preserves evidence that already exists elsewhere in the organization, under the same rules governing discovery, subpoenas, legal holds, and privilege.

---

### Common questions

* We already have observability, logging, and audit trails. Why is this different?

---

### Version Française 

# Infrastructure de preuve

## De la reconstruction à la preuve décisionnelle

Cette section détaille la lecture et la compréhension d'Horizon. Elle traite du problème adressé, du principe fondamental et de la définition d'un « fait » dans ce contexte.

La plupart des systèmes sont conçus pour opérer. Peu sont conçus pour être examinés ultérieurement.

Lorsqu'une transaction, un incident ou une décision spécifique est scruté, les organisations découvrent souvent que leur « mémoire » est répartie entre différents outils et équipes. Le passé doit alors être reconstruit avant même de pouvoir être discuté.

Cette approche repose sur un objectif unique : garantir que des faits examinables existent **au moment de l’exécution**. Ainsi, l’examen ultérieur s’appuie sur des faits déjà constitués, et non sur une corrélation ou une interprétation assemblée sous pression.

---

### Le mode de défaillance

Lorsqu'un dossier est remis en question, les équipes s'appuient généralement sur :

* Des journaux (logs) fragmentés entre plusieurs systèmes
* Des tableaux de bord reflétant l'état actuel et non l'exécution passée
* Des tickets, courriels, documents et rapports d'incidents rédigés a posteriori
* La mémoire humaine et des explications informelles

Cela génère un schéma prévisible :

* Les chronologies sont rebâties à partir de traces hétérogènes
* Le contexte est déduit après coup
* Plusieurs « versions » de l'événement émergent
* Les explications restent contestables car la reconstruction elle-même est contestable

(Voir : Preuve vs reconstruction)

---

### Le basculement

Sous le regard de l'auditeur ou du régulateur, la question change :

« Comment le système se comporte-t-il habituellement ? »

devient :

**« Que s’est-il passé exactement dans ce cas précis, et quels faits existaient à cet instant ? »**

À ce stade, le coût n'est pas seulement temporel. Il est aussi politique : l'organisation perd sa capacité à fonder ses discussions sur un socle factuel commun.

---

### Principe fondamental

**La preuve doit être créée au point de non-retour : l’instant où une action devient irréversible, engageante pour l’institution ou lourde de conséquences matérielles.**

L'examen peut avoir lieu plus tard. Mais la preuve doit exister avant l'interrogation.

---

### La définition du « fait »

Dans ce contexte, un « fait » n'est ni une vérité métier, ni une conformité réglementaire. C'est :

> *un acte ou une déclaration signé et consigné, produit par un système ou un acteur humain, indépendamment de sa justesse métier ou de sa validité réglementaire.*

L'objectif n'est pas d'expliquer le passé avec de meilleurs récits. Il s'agit de préserver ce qui a été déclaré et exécuté, **de manière immuable et ordonnée**, afin que la discussion débute sur des faits stables.

---

### Ce que ceci est (et n'est pas)

* C'est une approche de la preuve : elle préserve les exécutions et les évaluations déclarées au moment de l'action.
* C'est une couche d'observation passive : elle n'interfère pas avec le chemin critique des systèmes qu'elle monitore.
* Elle ne remplace pas l'observabilité, le SIEM, les outils d'audit ou la gestion de dossiers (case management).
* Elle ne décide pas, ne valide pas, n'optimise pas et ne contraint pas.
* Elle s'applique aussi bien aux flux automatisés qu'aux décisions humaines : seul importe le point de non-retour.

---

### Périmètre et contrôle

L'entreprise décide quels processus, actions ou décisions entrent dans le périmètre. L'intégration est sélective par conception.

* L'adoption commence généralement par une zone de forte tension ou de contrôle intensif.
* Les entreprises choisissent explicitement les systèmes couverts.
* Asplenz Horizon n'étend pas la surface de décision.

---

### Rétention et gouvernance

La rétention, la suppression et le périmètre sont exclusivement déterminés par les choix de gouvernance de l'entreprise.

* Les politiques de rétention restent sous le contrôle de l'entreprise.
* Les règles de suppression sont respectées.
* Les limites de périmètre sont appliquées.

Comme pour tout autre système, l'entreprise conserve sa **pleine souveraineté** sur ce qui est conservé, pour quelle durée et à quelle fin.

---

### Considérations juridiques

Les registres Horizon sont soumis aux mêmes processus juridiques que toute autre donnée interne de l'entreprise.

Asplenz n'introduit pas de nouvelles catégories de données, de nouvelles obligations de divulgation ou de statut juridique spécial. Horizon préserve des preuves qui existent déjà ailleurs dans l'organisation, selon les mêmes règles régissant la communication de pièces, les injonctions, les gels juridiques et le secret professionnel.

---

### Questions fréquentes

* Nous disposons déjà d'observabilité, de logs et de pistes d'audit. En quoi est-ce différent ?

