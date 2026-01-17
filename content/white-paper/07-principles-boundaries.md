# 🇫🇷 Principes et Limites

### Définir ce qu’est la preuve à l’exécution — et ce qu’elle n’est pas

Les principes suivants définissent les fondations conceptuelles de Horizon et les limites au sein desquelles l’infrastructure opère. Ils ne constituent pas des prescriptions de gouvernance ou de prise de décision. Ils décrivent les contraintes structurelles observées dans les systèmes de décision automatisés et les conditions dans lesquelles une certitude factuelle peut exister durablement.

---

### Principe 1 — La preuve n’existe qu’au moment de l’exécution

Une décision devient un fait à l’instant même où elle est exécutée. À cet instant précis :

* des entrées spécifiques sont consommées,
* une logique spécifique est appliquée,
* dans un contexte d’exécution spécifique,
* produisant un résultat spécifique.

Une fois ce moment passé, l’état factuel d’origine n’existe plus dans son intégralité au sein du système. Toute tentative ultérieure d'établir ce qui s'est passé repose sur la reconstruction. La preuve à l’exécution ne peut donc être produite qu'au moment de l'exécution. Elle ne peut être recréée après coup sans perte ni interprétation.

### Principe 2 — Les faits et les interprétations doivent rester distincts

La preuve à l’exécution établit les faits, pas le sens. Les faits décrivent :

* ce qui a été exécuté,
* avec quelles données,
* dans quelles conditions,
* et avec quel résultat.

L’interprétation, l’évaluation et le jugement peuvent suivre — mais ils surviennent dans une couche temporelle différente. Confondre les faits et l’interprétation introduit de l’ambiguïté et un biais de rétrospective. Les séparer préserve l’état réel des connaissances de l’institution au moment de l’action.

### Principe 3 — La reconstruction n’est pas une preuve

La reconstruction assemble des récits a posteriori. Elle peut soutenir la compréhension, l’explication ou l’apprentissage. Elle ne préserve pas l’état factuel qui existait au moment de l’exécution.
La reconstruction dépend :

* des traces survivantes,
* de systèmes évolutifs,
* de données partielles,
* et d’une interprétation rétrospective.

Il s’agit de limites structurelles, et non de défauts de mise en œuvre. Là où une certitude factuelle est requise, la reconstruction ne peut servir de fondation.

---

### Limite 1 — Horizon n’explique pas les décisions

Horizon ne fournit ni explications, ni justifications, ni interprétations. Il ne :

* juge pas la pertinence,
* n'attribue pas de responsabilité,
* n'évalue pas les résultats.

Son rôle s’arrête à la déclaration et à la préservation des faits. L’interprétation reste une activité humaine et institutionnelle.

### Limite 2 — Horizon n’est pas un système d’audit ou de monitoring

Horizon n’est pas : une plateforme d’observabilité, un outil de monitoring ou d’alerte, un SIEM, un moteur de workflow ou un système de décision.
Ces outils répondent à des questions différentes. Horizon comble une lacune structurelle : l’absence de registres factuels durables, produits à l’exécution, pour les décisions automatisées.

### Limite 3 — Horizon n’impose pas de posture institutionnelle

Horizon ne définit pas quelles décisions importent, ce qui doit être examiné, comment les conclusions doivent être tirées ou ce qui doit être communiqué. Ces choix restent institutionnels et contextuels.
La preuve à l’exécution contraint la reconstruction, pas le pouvoir discrétionnaire. L’organisation conserve l’entière maîtrise du périmètre, de l’interprétation, de l’articulation et de la communication.

---

### Principe d'infrastructure — Neutralité par conception

Horizon opère comme une couche d’infrastructure. Il s’intègre aux côtés des systèmes existants sans interférer avec la logique de décision, les structures de gouvernance ou l’autorité organisationnelle. L’infrastructure n’encode ni politique ni intention. Elle garantit que des états factuels d’exécution existent lorsqu’ils sont nécessaires.

### Limite temporelle — Indépendance vis-à-vis de l’évolution du système

La preuve à l’exécution doit rester exploitable au-delà du cycle de vie du système qui l’a produite. Les Artefacts de Snapshot Décisionnel sont donc conçus pour être auto-contenus, vérifiables et indépendants de l’état futur du système. Ils restent utilisables même si les modèles sont ré-entraînés, les configurations modifiées, les architectures refondues ou les systèmes décommissionnés.

### Limite opérationnelle — Réduire l’effort, pas redéfinir le dossier

Horizon ne modifie pas ce que les organisations choisissent d'enregistrer. Il modifie l'effort requis pour établir l'état factuel. En capturant la preuve à l'exécution, le coût de la reconstruction a posteriori est réduit, la coordination entre équipes est minimisée et la dépendance vis-à-vis des systèmes hérités diminue. Ce qui change n’est pas le contenu du dossier, c’est le coût pour l’assembler, le conserver et y accéder au fil du temps.

---

### Résumé

Horizon repose sur un ensemble limité de principes et des limites strictes. Il capture les faits à l'exécution, les préserve indépendamment de l'évolution du système, sépare les faits de l'interprétation et laisse le contrôle institutionnel inchangé. Au sein de ces limites, la preuve à l'exécution devient durable, exploitable et efficace — sans prescrire de gouvernance, de jugement ou d'intention.

---

---

# 🇬🇧 Principles & Boundaries

### Defining what execution-time evidence is — and what it is not

The following principles define the conceptual foundations of Horizon and the boundaries within which it operates. They are not prescriptions for governance or decision-making. They describe structural constraints observed in automated decision systems and the conditions under which factual certainty can exist over time.

---

### Principle 1 — Evidence exists only at execution time

A decision becomes a fact at the moment it is executed. At that moment:

* specific inputs are consumed,
* specific logic is applied,
* under a specific execution context,
* producing a specific outcome.

Once this moment has passed, the original factual state no longer exists as a whole within the system. Any later attempt to establish what happened relies on reconstruction. Execution-time evidence can therefore only be produced at execution time. It cannot be recreated afterward without loss or interpretation.

### Principle 2 — Facts and interpretations must remain distinct

Execution-time evidence establishes facts, not meaning. Facts describe:

* what was executed,
* with what data,
* under which conditions,
* and with what result.

Interpretation, assessment, and judgment may follow — but they occur in a different temporal layer. Conflating facts with interpretation introduces ambiguity and hindsight bias. Separating them preserves the institution’s actual state of knowledge at the moment of action.

### Principle 3 — Reconstruction is not evidence

Reconstruction assembles narratives after the fact. It may support understanding, explanation, or learning. It does not preserve the factual state that existed at execution time.
Reconstruction depends on:

* surviving traces,
* evolving systems,
* partial data,
* and retrospective interpretation.

These are structural limitations, not implementation flaws. Where factual certainty is required, reconstruction cannot serve as the foundation.

---

### Boundary 1 — Horizon does not explain decisions

Horizon does not provide explanations, justifications, or interpretations. It does not:

* assess correctness,
* assign responsibility,
* or evaluate outcomes.

Its role ends with the declaration and preservation of facts. Interpretation remains a human and institutional activity.

### Boundary 2 — Horizon is not an audit or monitoring system

Horizon is not: an observability platform, a monitoring or alerting tool, a SIEM, a workflow engine, or a decision system.
Those tools answer different questions. Horizon addresses a structural gap: the absence of durable, execution-time factual records for automated decisions.

### Boundary 3 — Horizon does not impose institutional posture

Horizon does not define which decisions matter, what must be examined, how conclusions should be drawn, or what should be communicated. These choices remain institutional and contextual.
Execution-time evidence constrains reconstruction, not discretion. The organization retains full control over scope, interpretation, articulation, and communication.

---

### Infrastructure principle — Neutrality by design

Horizon operates as an infrastructure layer. It integrates alongside existing systems without interfering with decision logic, governance structures, or organizational authority. The infrastructure does not encode policy or intent. It ensures that factual execution states exist when they are needed.

### Temporal boundary — Independence from system evolution

Execution-time evidence must remain usable beyond the lifecycle of the system that produced it. Decision Snapshot Artifacts are therefore designed to be self-contained, verifiable, and independent of future system state. They remain usable even if models are retrained, configurations change, architectures are refactored, or systems are decommissioned.

### Operational boundary — Reducing effort, not redefining records

Horizon does not change what organizations choose to record. It changes the effort required to establish factual state. By capturing execution-time evidence, the cost of post-hoc reconstruction is reduced, cross-team coordination is minimized, and dependency on legacy systems decreases. What changes is not the content of the record, but the cost of assembling, retaining, and accessing it over time.

---

### Summary

Horizon is built on a limited set of principles and strict boundaries. It captures facts at execution time, preserves them independently of system evolution, separates facts from interpretation, and leaves institutional control unchanged. Within these boundaries, execution-time evidence becomes durable, usable, and operationally efficient — without prescribing governance, judgment, or intent.