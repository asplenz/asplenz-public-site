Voici les deux versions de votre White Paper, débarrassées de tout commentaire éditorial et alignées sur la terminologie finale.

---

# 📄 White Paper — Infrastructure de Snapshot Décisionnel

## L'Infrastructure de Snapshot Décisionnel

Les systèmes de décision automatisés produisent des résultats aux conséquences durables. Pourtant, l'état factuel ayant conduit à ces décisions survit rarement à l'évolution des systèmes qui les ont produites.

Au fil du temps, les modèles sont ré-entraînés, les règles sont mises à jour, les sources de données changent et les architectures sont remplacées. Lorsque des décisions passées doivent être comprises, les organisations sont contraintes de **reconstruire la réalité a posteriori**, à partir de sources partielles et hétérogènes.

Cette reconstruction est, par nature, fragile.

## Preuve vs Reconstruction

Dans la plupart des systèmes automatisés, la preuve factuelle n'est pas produite au moment de l'exécution. Au lieu de cela, le passé est déduit plus tard à partir de logs, de bases de données, de configurations et de souvenirs humains.

À mesure que les systèmes évoluent, cette « mémoire » devient distribuée, incomplète et contestée. Différentes équipes reconstruisent des versions divergentes de ce qui s'est passé, souvent sans socle factuel commun.

👉 **La reconstruction n'est pas une preuve.**
C'est une approximation construite sous des contraintes qui n'existaient pas au moment de l'exécution.

## Le principe central : Capturer au Point de Non-Retour

**La preuve doit être créée au point de non-retour — le moment où la décision devient irréversible.**

À cet instant précis, le système :

* a consommé des entrées spécifiques,
* a appliqué une logique ou un modèle spécifique,
* a opéré sous une configuration spécifique,
* et a produit un résultat concret.

Une fois ce moment passé, l'état factuel d'origine ne peut plus être recréé avec certitude.

Une Infrastructure de Snapshot Décisionnel existe pour capturer cet état **une fois**, **tel qu'il était**, **au moment où il s'est produit**.

## Ce qu'est un fait (dans ce contexte)

Dans ce contexte, un *fait* n'est ni une interprétation, ni une justification, ni une explication.

Un fait est un **acte d'exécution signé et enregistré**, capturé à l'instant exact où la décision est produite.

Il inclut :

* les données réellement consommées,
* la version de la logique ou du modèle appliquée,
* le contexte d'exécution exact,
* le résultat généré.

Les faits sont déclarés ; ils ne sont pas déduits.

## Scénario illustratif

Considérons une décision d'octroi de prêt produite par un système automatisé.

À l'exécution, le système reçoit un ensemble spécifique de données du demandeur, applique une version et une configuration de modèle données, et émet une décision d'approbation. Cette décision peut plus tard être remise en question, révisée ou même jugée incorrecte d'un point de vue métier ou politique.

👉 **Cela ne change pas le fait de ce qui a été exécuté.**

Un Snapshot Décisionnel ne légitime ni ne justifie le résultat. Il n'affirme pas que la décision était correcte. Il établit une seule chose : **ce que le système a réellement fait, avec ce qu'il avait, à cet instant précis.**

## Du principe à l'infrastructure

Une Infrastructure de Snapshot Décisionnel n'est **ni un outil d'audit**, **ni une plateforme d'analyse**, **ni un processus de gouvernance**.

C'est une **couche technique fondamentale** dont le seul rôle est de garantir que les états factuels d'exécution existent indépendamment de l'évolution des systèmes.

Elle :

* s'intègre aux côtés des systèmes de décision existants,
* capture les états d'exécution sans interférer avec la logique de décision,
* produit des enregistrements immuables et auto-contenus,
* reste neutre quant à la manière dont ces enregistrements sont ultérieurement utilisés.

L'infrastructure ne décide pas de ce qui importe. Elle garantit que les faits sont disponibles quand ils importent.

## Contextes institutionnels

Les organisations exercent déjà leur pouvoir discrétionnaire sur :

* ce qui entre dans un dossier officiel,
* comment les faits sont interprétés,
* ce qui est communiqué en interne ou en externe.

Une Infrastructure de Snapshot Décisionnel **ne modifie pas ce contrôle**.

Ce qu'elle change, c'est la **charge opérationnelle** liée à l'établissement des faits lorsqu'ils sont nécessaires. La latitude institutionnelle reste la même ; l'effort requis pour la soutenir est réduit.

## Implications opérationnelles

L'impact principal d'une Infrastructure de Snapshot Décisionnel est opérationnel. Elle ne crée pas de nouvelles obligations, elle supprime les coûts récurrents associés à la reconstruction du passé.

Concrètement, elle réduit :

* l'effort requis pour établir l'état factuel après l'exécution,
* la coordination entre équipes lors de révisions, d'incidents ou d'enquêtes,
* la dépendance vis-à-vis des systèmes hérités, des configurations passées et des anciennes équipes.

👉 **Le contenu du dossier ne change pas.**
👉 **Le coût pour l'assembler, le conserver et y accéder change.**

## Principes et limites

Une Infrastructure de Snapshot Décisionnel est intentionnellement délimitée.

Elle :

* n'explique pas les décisions,
* n'automatise pas l'interprétation,
* n'impose pas de règles de gouvernance,
* ne remplace pas le jugement humain.

Sa responsabilité s'arrête là où l'interprétation commence.

## Disponibilité dans le temps

Les systèmes changent. Les organisations évoluent. Les équipes se renouvellent.

Les Snapshots Décisionnels sont conçus pour survivre aux systèmes qui les ont produits. Ils restent :

* lisibles,
* vérifiables,
* et indépendants de la survie du système source.

## Dialogue d'acceptabilité

Parce que cette infrastructure touche à la réalité de l'exécution, son adoption ne peut être abstraite. L'acceptabilité doit être évaluée en contexte : technique, organisationnel et institutionnel.

C'est pourquoi l'adoption commence par un **dialogue d'acceptabilité**, et non par une démonstration générique ou une approbation théorique.

---

---

# 🇬🇧 White Paper — Decision Snapshot Infrastructure

## Decision Snapshot Infrastructure

Automated decision systems produce outcomes that have lasting consequences. Yet the factual state that led to those decisions rarely survives the evolution of the systems that produced them.

Over time, models are retrained, rules are updated, data sources change, and architectures are replaced. When past decisions must be understood, organizations are forced to **reconstruct reality after the fact**, using partial and heterogeneous sources.

This reconstruction is fragile by nature.

## Evidence vs Reconstruction

In most automated systems, factual evidence is not produced at execution time. Instead, the past is inferred later from logs, databases, configurations, and human recollections.

As systems evolve, this “memory” becomes distributed, incomplete, and contested. Different teams reconstruct different versions of what happened, often with no shared factual baseline.

👉 **Reconstruction is not evidence.**
It is an approximation built under constraints that did not exist at execution time.

## The Core Principle: Capture at the Point of No Return

**Evidence should be created at the point of no return — when the decision becomes irreversible.**

At that moment, the system:

* has consumed specific inputs,
* applied a specific logic or model,
* operated under a specific configuration,
* and produced a concrete outcome.

Once that moment has passed, the original factual state cannot be recreated with certainty.

A Decision Snapshot Infrastructure exists to capture that state **once**, **as it was**, **when it occurred**.

## What Is a Fact (in this context)

In this context, a *fact* is not an interpretation, a justification, or an explanation.

A fact is a **signed and recorded act of execution**, captured at the exact moment the decision is produced.

It includes:

* what data was actually consumed,
* which logic or model version was applied,
* under which execution context,
* and what output was generated.

Facts are declared, not inferred.

## Illustrative Scenario

Consider a loan approval decision produced by an automated system.

At execution time, the system:

* receives a specific set of applicant data,
* applies a given model version and configuration,
* and outputs an approval decision.

That decision may later be questioned, revised, or even deemed incorrect from a business or policy perspective.

👉 **This does not change the fact of what was executed.**

A Decision Snapshot does **not** legitimize or justify the outcome. It does **not** assert that the decision was correct. It establishes only one thing: **what the system actually did, with what it had, at that moment.**

## From Principle to Infrastructure

A Decision Snapshot Infrastructure is **not an audit tool**, **not an analytics platform**, and **not a governance process**.

It is a **foundational technical layer** whose sole role is to ensure that factual execution states exist independently of system evolution.

It:

* integrates alongside existing decision systems,
* captures execution states without interfering with decision logic,
* produces immutable, self-contained records,
* and remains neutral to how those records are later interpreted or used.

The infrastructure does not decide what matters. It ensures that facts are available when they do.

## Institutional Contexts

Organizations already exercise discretion over:

* what enters an official record,
* how facts are interpreted,
* what is communicated internally or externally.

A Decision Snapshot Infrastructure **does not change this control**.

What it changes is the **operational burden** of establishing facts when they are needed. The institutional latitude remains the same. The effort required to support it is reduced.

## Operational Implications

The primary impact of a Decision Snapshot Infrastructure is operational. It does not create new obligations. It removes recurring costs associated with reconstructing the past.

Concretely, it reduces:

* the effort required to establish factual state post-execution,
* cross-team coordination during reviews, incidents, or inquiries,
* dependency on legacy systems, configurations, and former teams.

👉 **The content of the record does not change.**
👉 **The cost of assembling, retaining, and accessing it does.**

## Principles & Boundaries

A Decision Snapshot Infrastructure is intentionally bounded.

It:

* does not explain decisions,
* does not automate interpretation,
* does not enforce governance rules,
* does not replace human judgment.

Its responsibility ends where interpretation begins.

## Availability Over Time

Systems change. Organizations evolve. Teams move on.

Decision Snapshots are designed to outlive the systems that produced them. They remain:

* readable,
* verifiable,
* and independent of the continued existence of the source system.

## Acceptability Dialogue

Because this infrastructure touches execution reality, its adoption cannot be abstract. Acceptability must be assessed in context: technical, organizational, and institutional.

This is why adoption begins with an **acceptability dialogue**, not with a generic demonstration or theoretical endorsement.

<-- link to engagement page-->

