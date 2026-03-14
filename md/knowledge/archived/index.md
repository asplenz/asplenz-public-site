### **English Version**

**Asplenz Knowledge** **Decision Governance for AI-Native Organizations**

Structure your decisions.

Let your agents check them.

Govern exceptions.

Trace everything.

*Make it operational in CI with Knowledge Verifier.*

---

**The problem Asplenz Knowledge solves** AI systems now generate code, modify infrastructure, and refactor architecture.

They move fast.

But they don’t know:

* Your architectural commitments
* Your non-negotiable security invariants
* Which exceptions were approved
* What must never change

Without a declared decision layer, AI systems operate on assumptions.

**Asplenz Knowledge makes your normative state explicit, structured, and consumable by systems.**

---

**The four building blocks** Knowledge organizes your decision surface into four types of entries.

**Decisions** Documented architectural choices and strategic commitments.

Immutable once recorded. Preserved with full reasoning and context.

*Example: “We use PostgreSQL for services requiring ACID guarantees.”*

**Invariants** Absolute constraints that must not be violated.

Security boundaries, compliance requirements, critical policies.

*Example: “All public API endpoints require authentication.”*

**Rules** Active implementation directives.

Versioned, configurable, mandatory or advisory.

*Example: “All new services must use structured logging.”*

**Overrides** Governed exceptions to rules or invariants.

Explicitly approved. Scoped. Time-bound when needed. Fully traceable.

*Example: “Service X temporarily exempt from logging rule until migration is complete.”*

---

**How systems use Knowledge** Knowledge is designed to be consumed by both humans and machines.

**Retrieve the applicable decision state** Systems can request the full normative context for a given scope:

* Active invariants
* Mandatory and advisory rules
* Relevant architectural decisions
* Active overrides
* Explicit relationships

This allows CI pipelines, dashboards, and internal tools to operate with accurate decision awareness.

**Evaluate a proposed action** An agent can ask if an action is compliant with the declared rules.

Knowledge returns one of three outcomes:

* **Allowed** * **Denied** * **Requires human approval** Knowledge does not enforce execution. It exposes the evaluation result. Your ecosystem decides how to respond.

---

**Human approval for critical actions** Some constraints require explicit human validation before they can be bypassed.

When an action triggers such a constraint:

1. The system signals that approval is required.
2. The designated approver is notified.
3. The human approves or rejects.
4. If approved, a scoped exception is recorded.
5. The action may proceed within declared boundaries.

The agent decides whether to proceed. The human decides whether to allow it. Knowledge records the entire process.

---

**Trace every usage** Every interaction with a declared decision can be recorded:

* Which entry was referenced
* In what context (PR, deployment, documentation)
* Whether it was followed, challenged, or overridden
* By whom

This creates a living map of decision usage across your organization. You gain visibility into compliance coverage, frequently challenged constraints, and patterns of architectural drift.

---

**Real-time decision awareness** When your normative state changes, connected systems can be notified. Agents and CI systems can react immediately. Your teams do not operate on outdated rules.

---

**From declaration to operational governance** Declaring rules is step one. To verify compliance automatically in CI, use:

**Knowledge Verifier (Premium Add-on)** Knowledge Verifier analyzes Pull Requests against your declared normative state. It resolves applicable scope, detects violations, validates override coverage, and checks required decision citations.

This transforms Knowledge from a registry into operational compliance infrastructure.

[Learn about Knowledge Verifier]

---

**What Knowledge is not** Knowledge is not:

* A wiki
* A code scanner
* A workflow engine
* A policy runtime that blocks execution
* A replacement for engineering judgment

**It is a structured decision layer for AI-driven systems.**

---

**What Knowledge replaces**

| Before | After |
| --- | --- |
| Architecture decisions in documents | Structured, versioned, queryable entries |
| Security rules in someone’s head | Explicit, checkable invariants |
| Exceptions in Slack threads | Governed, traceable overrides |
| “What did we decide about X?” | Structured queryable answer |
| Reviews without decision context | PRs evaluated against declared rules |

---

**Start declaring your decision surface** Govern decisions at AI speed.

[Start with Knowledge]

[See pricing]

[Talk to us]

**Asplenz Knowledge — operational decision governance for AI-native engineering.**

---

### **Version Française**

**Asplenz Knowledge** **Gouvernance des décisions pour les organisations natives de l'IA**

Structurez vos décisions.

Laissez vos agents les vérifier.

Gouvernez les exceptions.

Tracez tout.

*Rendez-le opérationnel dans votre CI avec Knowledge Verifier.*

---

**Le problème que résout Asplenz Knowledge** Les systèmes d'IA génèrent désormais du code, modifient l'infrastructure et refactorisent l'architecture.

Ils vont vite.

Mais ils ignorent :

* Vos engagements architecturaux
* Vos invariants de sécurité non négociables
* Quelles exceptions ont été approuvées
* Ce qui ne doit jamais changer

Sans une couche de décision déclarée, les systèmes d'IA opèrent sur des hypothèses.

**Asplenz Knowledge rend votre état normatif explicite, structuré et consommable par les machines.**

---

**Les quatre piliers** Knowledge organise votre surface décisionnelle en quatre types d'entrées.

**Décisions (Decisions)** Choix d'architecture et engagements stratégiques documentés.

Immuables une fois enregistrés. Préservés avec leur raisonnement et leur contexte complet.

*Exemple : « Nous utilisons PostgreSQL pour les services nécessitant des garanties ACID. »*

**Invariants** Contraintes absolues qui ne doivent pas être transgressées.

Limites de sécurité, exigences de conformité, politiques critiques.

*Exemple : « Tous les points de terminaison d'API publics requièrent une authentification. »*

**Règles (Rules)** Directives d'implémentation actives.

Versionnées, configurables, obligatoires ou indicatives.

*Exemple : « Tous les nouveaux services doivent utiliser des logs structurés. »*

**Dérogations (Overrides)** Exceptions gouvernées aux règles ou aux invariants.

Explicitement approuvées. Ciblées. Limitées dans le temps si nécessaire. Entièrement traçables.

*Exemple : « Le service X est temporairement exempté de la règle de logging jusqu'à la fin de sa migration. »*

---

**Comment les systèmes utilisent Knowledge** Knowledge est conçu pour être consommé aussi bien par les humains que par les machines.

**Récupérer l'état décisionnel applicable** Les systèmes peuvent demander le contexte normatif complet pour un périmètre donné :

* Invariants actifs
* Règles obligatoires et indicatives
* Décisions architecturales pertinentes
* Dérogations actives
* Relations explicites

Cela permet aux pipelines CI, aux tableaux de bord et aux outils internes d'opérer avec une connaissance exacte des décisions.

**Évaluer une action proposée** Un agent peut demander si une action est conforme aux règles déclarées.

Knowledge renvoie l'un des trois résultats suivants :

* **Autorisé (Allowed)** * **Refusé (Denied)** * **Nécessite une approbation humaine** Knowledge ne bloque pas l'exécution par lui-même. Il expose le résultat de l'évaluation. C'est votre écosystème qui décide de la réponse à apporter.

---

**Approbation humaine pour les actions critiques** Certaines contraintes nécessitent une validation humaine explicite avant de pouvoir être contournées.

Lorsqu'une action déclenche une telle contrainte :

1. Le système signale qu'une approbation est requise.
2. L'approvateur désigné est notifié.
3. L'humain approuve ou rejette.
4. Si l'action est approuvée, une exception ciblée est enregistrée.
5. L'action peut se poursuivre dans les limites déclarées.

L'agent décide s'il doit continuer. L'humain décide s'il l'autorise. Knowledge enregistre l'intégralité du processus.

---

**Tracer chaque utilisation** Chaque interaction avec une décision déclarée peut être enregistrée :

* Quelle entrée a été référencée
* Dans quel contexte (PR, déploiement, documentation)
* Si elle a été suivie, contestée ou contournée
* Par qui

Cela crée une cartographie vivante de l'utilisation des décisions dans votre organisation. Vous gagnez en visibilité sur la couverture de conformité, les contraintes fréquemment remises en question et les schémas de dérive architecturale.

---

**Connaissance des décisions en temps réel** Lorsque votre état normatif change, les systèmes connectés peuvent être notifiés. Les agents et les systèmes de CI peuvent réagir immédiatement. Vos équipes ne travaillent plus sur des règles obsolètes.

---

**De la déclaration à la gouvernance opérationnelle** Déclarer des règles est la première étape. Pour vérifier la conformité automatiquement dans la CI, utilisez :

**Knowledge Verifier (Add-on Premium)** Knowledge Verifier analyse les Pull Requests par rapport à votre état normatif déclaré. Il résout le périmètre applicable, détecte les violations d'invariants et de règles, valide la couverture des dérogations et vérifie les citations de décisions requises.

Cela transforme Knowledge d'un simple registre en une infrastructure de conformité opérationnelle.

[En savoir plus sur Knowledge Verifier]

---

**Ce que Knowledge n'est pas** Knowledge n'est pas :

* Un wiki
* Un scanner de code
* Un moteur de workflow
* Un runtime de politique qui bloque l'exécution
* Un substitut au jugement des ingénieurs

**C'est une couche de décision structurée pour les systèmes pilotés par l'IA.**

---

**Ce que Knowledge remplace**

| Avant | Après |
| --- | --- |
| Décisions d'architecture dans des documents | Entrées structurées, versionnées, interrogeables |
| Règles de sécurité dans la tête de quelqu'un | Invariants explicites et vérifiables |
| Exceptions dans des fils Slack | Dérogations gouvernées et traçables |
| « Qu'est-ce qu'on a décidé pour X ? » | Réponse structurée et interrogeable |
| Revues sans contexte décisionnel | PR évaluées face aux règles déclarées |

---

**Commencez à déclarer votre surface décisionnelle** Gouvernez vos décisions à la vitesse de l'IA.

[Démarrer avec Knowledge]

[Voir les tarifs]

[Nous contacter]

**Asplenz Knowledge — la gouvernance opérationnelle des décisions pour l'ingénierie IA.**

