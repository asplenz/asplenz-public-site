# 🇫🇷 Décisions Automatisées

### Comprendre la nature du processus décisionnel automatisé

Les décisions automatisées sont de plus en plus intégrées aux systèmes opérationnels. Elles déterminent des résultats qui peuvent avoir des effets durables sur les individus, les organisations et les institutions.

Une décision automatisée n'est pas un simple résultat en sortie. C'est le produit d'une exécution concrète qui survient à un instant précis, dans des conditions spécifiques. Comprendre la nature d'une décision automatisée est un prérequis pour comprendre pourquoi son état factuel ne peut être reconstruit de manière fiable a posteriori.

---

### Les composantes d'une décision automatisée

Une décision automatisée est composée de plusieurs éléments qui déterminent conjointement son résultat.

**Les données d'entrée**
Elles consistent en l'information disponible pour le système au moment de l'exécution. Cela peut inclure :

* des données fournies par l'utilisateur,
* des signaux contextuels,
* des sources de données externes,
* des variables dérivées ou calculées.
Ces entrées ne sont pas statiques. Elles évoluent continuellement et peuvent ne plus exister sous la même forme après l'exécution.

**La logique de décision**
Elle définit la manière dont les entrées sont traitées. Elle peut prendre la forme de :

* règles déterministes,
* modèles statistiques,
* modèles d'apprentissage automatique (Machine Learning),
* systèmes hybrides combinant plusieurs approches.
Cette logique est elle-même versionnée, configurée et sujette à modification dans le temps.

**Le contexte d'exécution**
Il inclut :

* l'identité du système,
* les paramètres de configuration,
* les seuils actifs,
* l'environnement d'exécution,
* les dépendances actives au moment de l'exécution.
Ce contexte est rarement capturé dans son intégralité par les mécanismes de journalisation (logs) conventionnels, alors qu'il affecte matériellement la décision.

**Le résultat (Output)**
C'est le produit du système au moment de l'exécution. Il peut être binaire ou continu, final ou intermédiaire. C'est souvent le seul élément conservé durablement. À lui seul, le résultat ne décrit ni comment, ni pourquoi il a été produit.

---

### La décision automatisée comme fait d'exécution

Une décision automatisée est un fait d'exécution. Elle existe à un instant précis, lorsque :

1. des données spécifiques ont été consommées,
2. une logique spécifique a été appliquée,
3. dans un contexte spécifique,
4. pour produire un résultat spécifique.

Une fois ce moment passé, l'état d'exécution original n'existe plus dans le système global. Ce qu'il en reste sont des traces.

---

### Pourquoi la reconstruction est structurellement fragile

Parce que les décisions automatisées dépendent de multiples composantes volatiles, les reconstruire a posteriori est structurellement fragile. En pratique :

* les données d'entrée peuvent avoir changé ou disparu,
* les modèles peuvent avoir été ré-entraînés,
* les configurations peuvent avoir évolué,
* les environnements d'exécution peuvent ne plus exister.

Les logs et les traces capturent des fragments d'activité, pas l'état d'exécution complet. La reconstruction nécessite donc : de l'inférence, de l'interprétation et des hypothèses formulées avec la connaissance du résultat final. Ce n'est pas un défaut d'implémentation, c'est une limite structurelle de la reconstruction a posteriori.

---

### Les logs ne sont pas des preuves d'exécution

Les journaux traditionnels (logs) sont conçus pour l'observabilité et le débogage. Ils :

* sont distribués entre plusieurs systèmes,
* ne sont pas garantis complets,
* sont souvent soumis à rotation ou échantillonnage,
* ne sont pas liés cryptographiquement au moment de l'exécution.

Par conséquent, les logs peuvent soutenir une investigation, mais ils ne peuvent établir de manière fiable l'état factuel d'une décision au moment exact où elle a été exécutée. La preuve d'exécution nécessite une approche différente.

---

### La nécessité d'une capture au moment de l'exécution

Si une décision automatisée est un fait d'exécution, alors préserver ce fait exige de le capturer au moment où il survient, et non de le reconstruire plus tard. Cela implique :

* de capturer toutes les composantes pertinentes simultanément,
* de les lier à un instant précis dans le temps,
* de les préserver indépendamment de l'évolution future du système.

C’est le rôle d’une Infrastructure de Snapshot Décisionnel.

---

### Indépendance vis-à-vis du système source

Pour qu'une preuve d'exécution reste exploitable dans le temps, elle ne doit pas dépendre de la survie ou de la stabilité du système source. Les faits d'exécution doivent rester accessibles même si :

* le système de décision est modifié,
* l'architecture est refondue,
* le modèle est remplacé,
* ou le système est décommissionné.

Cette indépendance ne peut être atteinte par la reconstruction. Elle nécessite des enregistrements factuels auto-contenus.

---

### Un contrôle institutionnel inchangé

La capture de preuves au moment de l'exécution ne change pas qui décide, interprète ou communique. L'institution conserve l'entière maîtrise de :

* quelles décisions sont examinées,
* comment les faits sont interprétés,
* quelles conclusions en sont tirées,
* et ce qui est divulgué.

La preuve d'exécution n'impose pas de récit. Elle fournit une base factuelle stable sur laquelle le jugement institutionnel peut s'exercer.

---

### Implications opérationnelles

La complexité des décisions automatisées ne crée pas seulement un risque conceptuel. Elle crée un coût opérationnel. Lorsque les faits ne sont pas capturés à l'exécution :

* les investigations durent plus longtemps,
* plusieurs équipes doivent se coordonner,
* les systèmes hérités (legacy) doivent être consultés,
* et l'incertitude s'accumule.

Capturer la preuve à l'exécution réduit l'effort requis pour établir l'état factuel lorsqu'il est nécessaire. Ce qui change n'est pas le contenu du dossier, c'est le coût pour l'assembler, le conserver et y accéder.

---

### Résumé

Les décisions automatisées sont des événements d'exécution complexes composés d'éléments volatils. Une fois exécutées, leur état factuel d'origine ne peut être reconstruit de manière fiable à partir des seules traces. Préserver cet état nécessite de le capturer au moment de l'exécution, sous une forme qui survit à l'évolution du système. C'est pourquoi les décisions automatisées requièrent une Infrastructure de Snapshot Décisionnel.

---

---

# 🇬🇧 Automated Decisions

### Understanding the nature of automated decision-making

Automated decisions are increasingly embedded in operational systems. They determine outcomes that can have durable effects on individuals, organizations, and institutions.

An automated decision is not a single output. It is the result of a concrete execution that occurs at a specific moment in time, under specific conditions. Understanding what an automated decision is is a prerequisite to understanding why its factual state cannot be reliably reconstructed after the fact.

---

### The components of an automated decision

An automated decision is composed of multiple elements that jointly determine its outcome.

**Input data**
Input data consists of the information available to the system at execution time. This may include:

* user-provided data,
* contextual signals,
* external data sources,
* derived or computed variables.
These inputs are not static. They evolve continuously and may not exist in the same form after execution.

**Decision logic**
The decision logic defines how inputs are processed. It may take the form of:

* deterministic rules,
* statistical models,
* machine learning models,
* hybrid systems combining several approaches.
This logic is itself versioned, configured, and subject to change over time.

**Execution context**
The execution context includes:

* the system identity,
* configuration parameters,
* thresholds,
* runtime environment,
* dependencies active at execution time.
This context is rarely captured in full by conventional logging mechanisms, yet it materially affects the decision.

**Output**
The output is the result produced by the system at execution time. It may be binary or continuous, final or intermediate, and is often the only element that is durably retained. On its own, the output does not describe how or why it was produced.

---

### Automated decisions as execution-time facts

An automated decision is a fact of execution. It exists at a precise moment, when:

1. specific data was consumed,
2. specific logic was applied,
3. under a specific context,
4. to produce a specific outcome.

Once this moment has passed, the original execution state no longer exists in the system as a whole. What remains are traces.

---

### Why reconstruction is structurally fragile

Because automated decisions depend on multiple volatile components, reconstructing them after the fact is structurally fragile. In practice:

* input data may have changed or disappeared,
* models may have been retrained,
* configurations may have evolved,
* execution environments may no longer exist.

Logs and traces capture fragments of activity, not the full execution state. Reconstruction therefore requires: inference, interpretation, and assumptions made with knowledge of the outcome. This is not a failure of implementation. It is a structural limitation of post-hoc reconstruction.

---

### Logs are not execution-time evidence

Traditional logs are designed for observability and debugging. They:

* are distributed across systems,
* are not guaranteed to be complete,
* are often rotated or sampled,
* and are not cryptographically bound to execution time.

As a result, logs can support investigation, but they cannot reliably establish the factual state of a decision at the moment it was executed. Execution-time evidence requires a different approach.

---

### The need for execution-time capture

If an automated decision is a fact of execution, then preserving that fact requires capturing it when it occurs, not reconstructing it later. This implies:

* capturing all relevant components together,
* binding them to a precise moment in time,
* preserving them independently of future system evolution.

This is the role of a Decision Snapshot Infrastructure.

---

### Independence from the source system

For execution-time evidence to remain usable over time, it must not depend on the continued existence or stability of the source system. Execution-time facts must remain accessible even if:

* the decision system is modified,
* the architecture is refactored,
* the model is replaced,
* or the system is decommissioned.

This independence cannot be achieved through reconstruction. It requires self-contained factual records.

---

### Institutional control remains unchanged

Capturing execution-time evidence does not change who decides, interprets, or communicates. The institution retains full control over:

* which decisions are examined,
* how facts are interpreted,
* what conclusions are drawn,
* and what is disclosed.

Execution-time evidence does not impose a narrative. It provides a stable factual base upon which institutional judgment can be exercised.

---

### Operational implications

The complexity of automated decisions does not only create conceptual risk. It creates operational cost. When facts are not captured at execution time:

* investigations take longer,
* multiple teams must coordinate,
* legacy systems must be consulted,
* and uncertainty accumulates.

Capturing execution-time evidence reduces the effort required to establish factual state when it is needed. What changes is not the content of the record. It is the cost of assembling, retaining, and accessing it.

---

### Summary

Automated decisions are complex, execution-time events composed of volatile elements. Once executed, their original factual state cannot be reliably reconstructed from traces alone. Preserving that state requires capturing it at execution time, in a form that survives system evolution. This is why automated decisions require a Decision Snapshot Infrastructure.