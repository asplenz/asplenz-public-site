### English Version 

# Automated Decisions

### Why automation creates a specific evidence problem

Automated systems execute decisions continuously, at a sustained pace and without direct human intervention. In these environments, the original execution context is inherently fleeting. By the time a decision is examined, the input data, the specific configuration, or the exact state of the model that produced it have often already disappeared or evolved.

Activity logs and traditional observability capture technical activity and performance aggregates. They are not designed to preserve the decisional context as it existed at the precise moment of the action.

**Asplenz Horizon enables the institution to bridge this gap by securing execution-time evidence for targeted automated decisions. Horizon does not seek to explain models or evaluate outcomes: it enables the safeguarding of the state of facts and knowledge that led to the execution.**

---

### The automated decision boundary

An automated decision is considered at the point where:

* inputs are evaluated
* rules or models are applied
* 

**Asplenz Horizon operates at this boundary.** It does not observe upstream data generation. It does not observe downstream impact.

---

### Examples of automated decisions

Automated decisions with material effects include:

* fraud detection
* ranking and allocation
* pricing and regulation of flows (throttling)
* content moderation
* access control

---

### Why evidence is lost in automated systems

In automated environments:

* inputs are transient
* models are retrained
* parameters drift
* configurations are overwritten
* execution context is ephemeral

By the time a decision is questioned, the system that produced it may no longer exist in the same state. Logs show activity. Metrics show aggregates. **Neither preserves decision context.**

---

### The execution-time artefact

For each selected automated decision, Horizon preserves an immutable artefact containing:

* execution timestamp and strict ordering guarantees
* observed inputs as seen by the decision system
* rule set or model identifier
* configuration state and thresholds
* evaluation signals present at execution time
* output produced

**Independence from system lifecycle**
This artefact exists independently of the system that produced it. It does not depend on model retraining, log retention, dashboards, or human memory.

---

### What Asplenz Horizon does not attempt (by design)

Combining evidence preservation with active interpretation introduces institutional risk. Asplenz Horizon avoids this by remaining strictly neutral. It does not attempt to:

* Explain why a model behaved as it did or justify outcomes;
* Assess bias, fairness, or correctness of decisions;
* Provide counterfactuals or enforce governance;
* Replace monitoring or technical observability.

**Horizon preserves facts as well as interpretations declared by the organization, without ever generating its own analysis. Any evaluation of the quality or relevance of the decision occurs outside the infrastructure.**

---

### Summary

Automation accelerates decision-making. It also accelerates evidence loss. Automated decisions require execution-time evidence because reconstruction becomes unreliable as systems evolve.

**Asplenz Horizon ensures that, when examination is required, immutable decision artefacts already exist.**

---

### Version Française

# Décisions Automatisées

### Pourquoi l'automatisation crée un problème de preuve spécifique

Les systèmes automatisés exécutent des décisions en continu, à une cadence soutenue et sans intervention humaine directe. Dans ces environnements, le contexte d'exécution d'origine est par nature fugace. Au moment où une décision est examinée, les données d'entrée, la configuration précise ou l'état exact du modèle qui l'a produite ont souvent déjà disparu ou évolué.

Les journaux d'activité (logs) et l'observabilité traditionnelle capturent l'activité technique et des agrégats de performance. Ils ne sont pas conçus pour préserver le contexte décisionnel tel qu'il existait au moment précis de l'action.

**Asplenz Horizon permet à l'institution de combler cette lacune en sécurisant la preuve au moment de l'exécution pour des décisions automatisées ciblées. Horizon ne cherche ni à expliquer les modèles, ni à évaluer les résultats : il permet de sanctuariser l'état des faits et des connaissances qui ont conduit à l'exécution.**

---

### Le périmètre de la décision automatisée

Une décision automatisée est considérée au point précis où :

* les données d'entrée sont évaluées
* les règles ou les modèles sont appliqués
* Un résultat est produit et l'action est engagée

**Asplenz Horizon opère à cette frontière.** Il n'observe ni la génération des données en amont, ni l'impact opérationnel en aval.

---

### Exemples de décisions automatisées

Les décisions automatisées ayant des effets matériels incluent :

* la détection de fraude
* le classement et l'allocation
* la tarification et la régulation de flux
* la modération de contenu
* le contrôle d'accès

---

### Pourquoi la preuve se perd dans les systèmes automatisés

Dans les environnements automatisés :

* les données d'entrée sont transitoires
* les modèles sont réentraînés
* les paramètres dérivent (drift)
* les configurations sont écrasées
* le contexte d'exécution est éphémère

Au moment où une décision est remise en question, le système qui l'a produite peut ne plus exister dans le même état. Les logs montrent l'activité. Les métriques montrent des agrégats. **Aucun des deux ne préserve le contexte de la décision.**

---

### L'artefact au moment de l'exécution

Pour chaque décision automatisée sélectionnée, Horizon préserve un artefact immuable contenant :

* l'horodatage de l'exécution et des garanties strictes de séquençage
* les données d'entrée telles qu'observées par le système de décision
* l'identifiant du jeu de règles ou du modèle
* l'état de la configuration et les seuils
* les signaux d'évaluation présents au moment de l'exécution
* le résultat produit

**Indépendance vis-à-vis du cycle de vie des systèmes**
Cet artefact existe indépendamment du système qui l'a produit. Il ne dépend ni du réentraînement des modèles, ni de la rétention des logs, ni des tableaux de bord, ni de la mémoire humaine.

---

### Ce que Asplenz Horizon ne tente pas (par conception)

Combiner la préservation de la preuve avec l'interprétation active introduit un risque institutionnel. Asplenz Horizon évite cela en restant strictement neutre. Il ne tente pas de :

* Expliquer pourquoi un modèle s'est comporté ainsi ou justifier les résultats ;
* Évaluer les biais, l'équité ou la justesse des décisions ;
* Fournir des scénarios contrefactuels ou imposer une gouvernance ;
* Remplacer le monitoring ou l'observabilité technique.

**Horizon préserve les faits ainsi que les interprétations déclarées par l'organisation, sans jamais générer sa propre analyse. Toute évaluation de la qualité ou de la pertinence de la décision intervient en dehors de l'infrastructure.**

---

### Résumé

L'automatisation accélère la prise de décision. Elle accélère également la perte de preuve. Les décisions automatisées exigent une preuve au moment de l'exécution car la reconstruction devient peu fiable à mesure que les systèmes évoluent.

**Asplenz Horizon garantit que, lorsqu'un examen est requis, des artefacts de décision immuables existent déjà.**