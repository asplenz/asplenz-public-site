### 2. English Version

# Horizon: Technical Capabilities

## A factual evidence infrastructure (intra-perimeter)

### What it records

Two types of declared facts, strictly separated:

#### 1) Executions

An execution is **an irreversible act**:

* An automated decision applied
* A human authorization
* A choice to continue or suspend
* A publication, override, or acceptance

Executions record what happened, in a declared context, at time T.

---

#### 2) Evaluations

An evaluation is **an organizational assessment at time T**:

* Severity classification
* Risk acceptance
* Declared basis
* Confidence level

**An evaluation does not authorize an action.** It preserves the state of knowledge and organizational stance at the time of execution.

---

### Contexts where this applies

This infrastructure is agnostic to the decision source. It applies whenever a specific decision or action may later require case-by-case examination.

#### AI-assisted decisions

AI-assisted systems increasingly inform or produce decisions. When those decisions are later examined by Risk, Audit, Legal, or regulators, the question is not only about model performance, but about **what actually happened in that specific case**.

The same approach captures executions and evaluations from AI-assisted workflows at execution time, immutably, before any question arises. This supports a shift from outcome-based testing (the "right" answer) to **behavior-based examinability**: what did the system see, evaluate, and decide, and when?

Asplenz Horizon does not replace AI governance frameworks such as the EU AI Act or CDMC. It provides the **evidence layer** that allows those frameworks to be demonstrated in real, case-by-case examinations.

#### Automated decision workflows

Risk engines, eligibility rules, throttling, and automated outcomes are recorded as declared executions. Optional evaluations preserve the organizational stance at time T.

#### Human-in-the-loop escalations

When automated outcomes escalate to humans, the original execution reference is propagated through existing channels: alerts, tickets, or consoles. Human decisions are recorded as evaluations linked to the triggering execution, preserving a single factual chain.

---

### How automated and human decisions become examinable as one

* Automated systems produce **declared executions**, each identified by a stable execution reference.
* When a situation escalates, this reference is propagated through the organization's existing channels.
* Any human decision taken in response is recorded as a **declared evaluation**, explicitly linked to the original execution.
* Subsequent actions may reference either or both, preserving a **single factual chain**.

**Facts are linked by explicit references, not reconstructed through interfaces or workflows.**

---

### Properties

* **Append-only** : no edits, no deletes.
* **Ordering** : explicit chronology.
* **Integrity** : verifiable records.
* **Intra-perimeter** : deployable on-premise or in private cloud.
* **Non-intrusive** : not in the critical execution path.

---

### What it is NOT

* Not observability or monitoring.
* Not SIEM.
* Not a workflow tool.
* Not a decision-making system.
* Not compliance automation.

(See also: Principles)

---

**Operational side-effect**
In practice, these same facts are often used daily to avoid transaction reconstruction, without turning the infrastructure into an operations tool.

---

### Deployment

Horizon is designed to operate entirely within an institution's trust perimeter.

Horizon can be deployed in different modalities depending on institutional constraints and integration preferences. These modalities do not change the conceptual scope of Horizon: they affect how execution evidence is produced and managed operationally, not what Horizon exists to establish.

The choice of deployment modality is addressed during technical discussions and depends on performance, isolation, and operational requirements.

**Technical documentation** describing deployment modes, integration boundaries, and performance considerations is available upon request: contact@asplenz.com

---

### Common questions

* We already capture execution-time facts and generate artefacts automatically. Why is this not sufficient?

---

### 3. Version Française 

# Horizon: Capacités Techniques

## Une infrastructure de preuve factuelle (intra-périmètre)

### Ce qu'il consigne

Deux types de faits déclarés, strictement séparés :

#### 1) Les exécutions

Une exécution est **un acte irréversible** :

* Une décision automatisée appliquée
* Une autorisation humaine
* Un choix de poursuite ou de suspension
* Une publication, un passage outre (override) ou une acceptation

Les exécutions consignent ce qui s'est produit, dans un contexte déclaré, à l'instant T.

---

#### 2) Les évaluations

Une évaluation est **une appréciation organisationnelle à l'instant T** :

* Classification de sévérité
* Acceptation de risque
* Fondement déclaré
* Niveau de confiance

**Une évaluation n'autorise pas une action.** Elle préserve l'état des connaissances et la posture de l'organisation au moment de l'exécution.

---

### Contextes d'application

Ce dispositif est agnostique vis-à-vis de la source de décision. Il s'applique dès lors qu'une décision ou une action spécifique peut nécessiter un examen ultérieur au cas par cas.

#### Décisions assistées par l'IA

Les systèmes assistés par l'IA informent ou produisent de plus en plus de décisions. Lorsque ces décisions sont examinées ultérieurement par les Risques, l'Audit, le Juridique ou les régulateurs, la question ne porte pas seulement sur la performance du modèle, mais sur **ce qui s'est réellement passé dans ce cas précis**.

Cette approche capture les exécutions et les évaluations des flux d'IA au moment de l'exécution, de manière immuable. Cela permet de passer d'un test basé sur le résultat (la « bonne » réponse) à une **examinabilité comportementale** : qu'est-ce que le système a vu, évalué et décidé, et à quel moment ?

Asplenz Horizon ne remplace pas les cadres de gouvernance de l'IA (tels que l'IA Act de l'UE ou CDMC). Il fournit la **couche de preuve** qui permet de démontrer l'application de ces cadres lors d'examens réels et individuels.

#### Flux de décisions automatisés

Les moteurs de risques, les règles d'éligibilité, le throttling et les résultats automatisés sont consignés en tant qu'exécutions déclarées. Des évaluations optionnelles préservent la posture organisationnelle à l'instant T.

#### Escalades vers l'humain (Human-in-the-loop)

Lorsque des résultats automatisés font l'objet d'une escalade humaine, la référence d'exécution d'origine est propagée via les canaux existants : alertes, tickets ou consoles. Les décisions humaines sont consignées comme des évaluations liées à l'exécution déclencheuse, préservant ainsi une chaîne factuelle unique.

---

### Unification de l'examen des décisions humaines et automatisées

* Les systèmes automatisés produisent des **exécutions déclarées**, chacune identifiée par une référence d'exécution stable.
* En cas d'escalade, cette référence est transmise via les canaux existants de l'organisation.
* Toute décision humaine prise en réponse est consignée comme une **évaluation déclarée**, explicitement liée à l'exécution d'origine.
* Les actions subséquentes peuvent se référer à l'un, à l'autre ou aux deux, préservant une **chaîne factuelle unique**.

**Les faits sont liés par des références explicites, et non reconstruits via des interfaces ou des flux de travail.**

---

### Propriétés

* **Ajout exclusif (Append-only)** : ni modification, ni suppression.
* **Séquençage** : chronologie explicite.
* **Intégrité** : registres vérifiables.
* **Intra-périmètre** : déploiement sur site (on-premise) ou sur cloud privé.
* **Non-intrusif** : hors du chemin critique d'exécution.

---

### Ce que ceci n'est PAS

* Ni observabilité, ni monitoring.
* Ni SIEM.
* Ni outil de gestion de flux (workflow).
* Ni système de prise de décision.
* Ni automatisation de la conformité.

(Voir aussi : Principes)

---

**Effet collatéral opérationnel**
En pratique, ces mêmes faits sont souvent utilisés quotidiennement pour éviter la reconstruction de transactions, sans pour autant transformer l'infrastructure en un outil opérationnel.

---

### Déploiement

Horizon est conçu pour fonctionner entièrement dans le périmètre de confiance de l'institution.

Horizon peut être déployé selon différentes modalités en fonction des contraintes institutionnelles et des préférences d'intégration. Ces modalités ne modifient pas la portée conceptuelle de Horizon : elles affectent la manière dont la preuve d'exécution est produite et gérée opérationnellement, et non ce que Horizon a vocation à établir.

Le choix de la modalité de déploiement est abordé lors des discussions techniques et dépend des exigences de performance, d'isolation et d'exploitation.

**La documentation technique** décrivant les modes de déploiement, les limites d'intégration et les considérations de performance est disponible sur demande : contact@asplenz.com

---

### Questions fréquentes

* Nous capturons déjà des faits au moment de l'exécution et générons des artefacts automatiquement. Pourquoi cela ne suffit-il pas ?

---

