# 🇫🇷 Clarifications

### Lever les malentendus courants sur la preuve à l’exécution

Cette section clarifie les points de confusion récurrents qui surviennent lors des discussions sur la preuve à l’exécution et l’infrastructure de snapshot décisionnel. Ces clarifications n'introduisent pas de nouveaux principes. Elles garantissent que les concepts précédemment énoncés sont interprétés correctement et appliqués dans leur périmètre prévu.

---

### Clarification 1 — Preuve versus explication

La preuve à l’exécution établit les faits, pas les explications. Un Snapshot Décisionnel :

* déclare ce qui a été exécuté,
* avec quelles données,
* dans quelles conditions,
* et avec quel résultat.

Il ne cherche pas à :

* expliquer pourquoi une décision a été prise,
* justifier sa justesse,
* ou attribuer une responsabilité.

L'explication, l'interprétation et le jugement restent des activités humaines et institutionnelles.

### Clarification 2 — La reconstruction n’est pas une preuve

La reconstruction assemble des récits après l'exécution en utilisant : des journaux (logs), des traces, des référentiels de configuration, la mémoire humaine et une interprétation rétrospective. La reconstruction peut soutenir l'apprentissage et l'analyse. Elle ne préserve pas l'état factuel qui existait au moment de l'exécution. Cette limite est structurelle, et non méthodologique. Là où une certitude factuelle est requise, la reconstruction ne peut servir de preuve.

### Clarification 3 — Simulation versus capture à l’exécution

La preuve à l'exécution ne peut être simulée rétroactivement. Si aucune preuve n'a été capturée au moment où une décision a été exécutée, elle ne peut être recréée plus tard sans interprétation.
Cela ne signifie pas que Horizon ne peut pas être démontré. La capture Horizon peut être démontrée sur n'importe quel système actif, incluant :

* des environnements de test,
* des systèmes sandbox,
* et des configurations de démonstration.

Dans ces cas, Horizon capture l'état factuel de cette exécution spécifique. Ce qui ne peut être simulé, c'est la capture d'exécutions passées qui n'ont jamais produit de preuve au moment où elles ont eu lieu.

### Clarification 4 — Horizon ne remplace pas entièrement la reconstruction

Horizon ne vise pas à éliminer la pratique analytique de la reconstruction. La reconstruction reste utile pour : comprendre le comportement du système, explorer des explications alternatives ou apprendre des incidents.
Ce que Horizon supprime, c'est la nécessité de s'appuyer sur la reconstruction comme source de faits. La reconstruction peut éclairer l'interprétation ; elle n'établit pas la certitude factuelle.

### Clarification 5 — Le contrôle institutionnel reste inchangé

La capture de preuves à l'exécution ne centralise pas l'autorité et n'impose pas d'interprétation. L'institution conserve l'entière maîtrise de :

* quelles décisions sont examinées,
* comment les faits sont interprétés,
* quelles conclusions en sont tirées,
* et ce qui est communiqué en interne ou en externe.

Horizon enregistre l'état factuel. Le pouvoir discrétionnaire de l'institution gouverne son utilisation.

---

### Clarification 6 — Pourquoi ces distinctions importent opérationnellement

Ces distinctions ne sont pas purement conceptuelles. Lorsque la preuve à l'exécution n'existe pas :

* établir l'état factuel nécessite une coordination entre les équipes,
* les systèmes hérités (legacy) doivent être accédés ou réactivés,
* des hypothèses doivent être négociées,
* et l'effort augmente avec le temps.

La preuve à l'exécution réduit l'effort requis pour établir l'état factuel, soutenir l'examen institutionnel et répondre aux questions sur les décisions passées. Ce qui change n'est pas le contenu du dossier, c'est le coût pour l'assembler, le conserver et y accéder.

### Clarification 7 — Horizon est une infrastructure, pas une méthode

Horizon n'est ni une méthodologie, ni un cadre de travail, ni une prescription de gouvernance. Il opère comme une couche d'infrastructure qui :

* capture les faits à l'exécution,
* les préserve indépendamment de l'évolution du système,
* sans interférer avec la logique de décision ou les processus institutionnels.

L'infrastructure permet la durabilité factuelle. Elle ne définit ni l'intention, ni la politique.

---

### Résumé

La preuve à l'exécution n'existe que lorsqu'elle est produite au moment de l'exécution. Elle établit les faits sans explication, survit à l'évolution du système et réduit la dépendance à la reconstruction comme source de vérité. Horizon capture ces faits. Les institutions conservent le plein contrôle sur leur interprétation et leur usage.

---

---

# 🇬🇧 Clarifications

### Addressing common misunderstandings about execution-time evidence

This section clarifies recurring points of confusion that arise when discussing execution-time evidence and Decision Snapshot Infrastructure. These clarifications do not introduce new principles. They ensure that previously stated concepts are interpreted correctly and applied within their intended scope.

---

### Clarification 1 — Evidence versus explanation

Execution-time evidence establishes facts, not explanations. A Decision Snapshot:

* declares what was executed,
* with what data,
* under which conditions,
* and with what outcome.

It does not:

* explain why a decision was made,
* justify its correctness,
* or assign responsibility.

Explanation, interpretation, and judgment remain human and institutional activities.

### Clarification 2 — Reconstruction is not evidence

Reconstruction assembles narratives after execution using: logs, traces, configuration repositories, human recollection, and retrospective interpretation. Reconstruction may support learning and analysis. It does not preserve the factual state that existed at execution time. This limitation is structural, not methodological. Where factual certainty is required, reconstruction cannot serve as evidence.

### Clarification 3 — Simulation versus execution-time capture

Execution-time evidence cannot be simulated retroactively. If no evidence was captured when a decision was executed, it cannot be recreated later without interpretation.
This does not mean that Horizon cannot be demonstrated. Horizon capture can be demonstrated on any live system, including:

* test environments,
* sandbox systems,
* and demonstration setups.

In those cases, Horizon captures the factual state of that execution. What cannot be simulated is the capture of past executions that never produced evidence at the time they occurred.

### Clarification 4 — Horizon does not replace reconstruction entirely

Horizon does not aim to eliminate reconstruction as an analytical practice. Reconstruction remains useful for: understanding system behavior, exploring alternative explanations, or learning from incidents.
What Horizon removes is the need to rely on reconstruction as a source of facts. Reconstruction may inform interpretation; it does not establish factual certainty.

### Clarification 5 — Institutional control remains unchanged

Capturing execution-time evidence does not centralize authority or impose interpretation. The institution retains full control over:

* which decisions are examined,
* how facts are interpreted,
* what conclusions are drawn,
* and what is communicated internally or externally.

Horizon records factual state. Institutional discretion governs its use.

---

### Clarification 6 — Why these distinctions matter operationally

These distinctions are not purely conceptual. When execution-time evidence does not exist:

* establishing factual state requires coordination across teams,
* legacy systems must be accessed or revived,
* assumptions must be negotiated,
* and effort increases over time.

Execution-time evidence reduces the effort required to establish factual state, support institutional review, and answer questions about past decisions. What changes is not the content of the record. It is the cost of assembling, retaining, and accessing it.

### Clarification 7 — Horizon is infrastructure, not a method

Horizon is not a methodology, framework, or governance prescription. It operates as an infrastructure layer:

* capturing execution-time facts,
* preserving them independently of system evolution,
* without interfering with decision logic or institutional processes.

The infrastructure enables factual durability. It does not define intent or policy.

---

### Summary

Execution-time evidence exists only when it is produced at execution time. It establishes facts without explanation, survives system evolution, and reduces reliance on reconstruction as a source of truth. Horizon captures these facts. Institutions retain full control over their interpretation and use.