## [EN Version] - Decision Proof Infrastructure

### Decision Proof Infrastructure for Accountable Organizations

**Proving human and automated decisions when accountability matters.**

When a decision is questioned months or years later, explanations are not enough. **Proof must already exist.**

#### Governance Defines Responsibility. Horizon Proves It.

Governance frameworks define policies, roles, oversight structures, and accountability models.

* **Horizon does not design governance.**
* **Horizon records the moment responsibility is assumed.**

Where governance defines *who should* decide, Horizon proves *what* was decided, *by whom*, and *when*.

#### Decisions Happen. Proof Doesn't Scale.

Every organization makes decisions that carry risk: production incidents, emergency overrides, risk acceptances, deployment approvals, AI authorizations.

* **The evidence scatters:** an email here, a Slack message there, a verbal "yes" in a meeting, a Jira ticket never updated.
* **The scale is impossible:** Multiply that across 50 systems, 20 decision-makers, 12 months.

When a regulator, a court, an auditor, or a board demands an answer: *Who authorized this? When? Under which authority? Can this be proven independently?*

**Reconstruction does not scale. Accountability does not tolerate reconstruction.**
A decision without proof, when challenged, cannot be defended.

---

#### The Solution

Horizon is a **decision proof infrastructure**. It captures decisions as immutable, cryptographically sealed facts, whether they are made by a human, an automated system, or an AI agent.

Horizon allows organizations to:

* **Explicitly declare** a decision and its context.
* **Attribute it** to a human or system authority.
* **Seal it** into an append-only proof chain.
* **Generate** an independently verifiable proof artifact.

---

#### Two Kinds of Facts. One Proof Chain.

Horizon preserves two categories of declared facts:

1. **Decisions:** Facts that engage responsibility (Go-live, risk acceptance, override).
2. **Evaluations:** Facts that follow (Monitoring results, compliance checks, assessments).

| Time | Fact Type | Record |
| --- | --- | --- |
| **T0** | Decision | Production go-live approved for credit model V2.5 |
| **T1** | Evaluation | No anomaly detected after 24 hours |
| **T2** | Evaluation | Minor drift on parameter X relative to threshold — verdict: PASS |

---

#### Proof Is Not Logging

| Logs & Tickets | Horizon |
| --- | --- |
| Operational traces | Independent system of record |
| Mutable / Rotatable | Append-only, cryptographically signed |
| Context rebuilt later | Context sealed at declaration time |
| For troubleshooting | For accountability |

**Horizon introduces a separation of powers between decision-making and decision proof.**

---

#### The Vision

Where accounting systems record money, **Horizon records responsibility.**
If decisions in your organization can be questioned later, Horizon is the proof layer you are missing.

**[Discuss Your Decision Architecture →]**

---

## [FR Version] - Infrastructure de Preuve

### Infrastructure de Preuve de Décision pour les Organisations Responsables

**Prouver les décisions humaines et automatisées lorsque la responsabilité est en jeu.**

Lorsqu'une décision est remise en question des mois ou des années plus tard, les explications ne suffisent pas. **La preuve doit déjà exister.**

#### La Gouvernance définit la Responsabilité. Horizon la prouve.

Les cadres de gouvernance définissent les politiques, les rôles et les modèles de redevabilité.

* **Horizon ne conçoit pas la gouvernance.**
* **Horizon enregistre le moment où la responsabilité est assumée.**

Là où la gouvernance définit *qui doit* décider, Horizon prouve *ce qui a été décidé*, *par qui*, et *quand*.

#### Les décisions s'accumulent. La preuve ne suit pas.

Chaque organisation prend des décisions porteuses de risques : incidents de production, dérogations d'urgence, acceptations de risques, approbations d'IA.

* **Les preuves s'éparpillent :** un e-mail ici, un Slack là, un ticket Jira jamais mis à jour.
* **Le volume est ingérable :** Multipliez cela par 50 systèmes, 20 décideurs, 12 mois.

Lorsqu'un régulateur, un tribunal ou un conseil d'administration exige une réponse : *Qui a autorisé cela ? Sous quelle autorité ? Cela peut-il être prouvé de manière indépendante ?*

**La reconstruction n'est pas viable. La redevabilité ne tolère pas la reconstruction.**
Une décision sans preuve, lorsqu'elle est contestée, ne peut être défendue.

---

#### La Solution

Horizon est une **infrastructure de preuve de décision**. Il capture les décisions sous forme de faits immuables et scellés par cryptographie (humains ou IA).

Horizon permet aux organisations de :

* **Déclarer explicitement** une décision et son contexte.
* **L'attribuer** à une autorité humaine ou système.
* **La sceller** dans une chaîne de preuve en ajout uniquement (*append-only*).
* **Générer** un artefact de preuve vérifiable de manière indépendante.

---

#### Deux types de faits. Une seule chaîne de preuve.

1. **Décisions :** Les faits qui engagent la responsabilité (Mise en prod, dérogation).
2. **Évaluations :** Les faits qui suivent (Monitoring, contrôles, constats).

| Temps | Type de fait | Enregistrement |
| --- | --- | --- |
| **T0** | Décision | Mise en production approuvée pour le modèle de crédit V2.5 |
| **T1** | Évaluation | Aucune anomalie détectée après 24 heures |
| **T2** | Évaluation | Légère dérive du paramètre X par rapport au seuil — verdict : PASS |

---

#### La Preuve n'est pas la Journalisation

| Logs & Tickets | Horizon |
| --- | --- |
| Traces opérationnelles | Système d'enregistrement indépendant |
| Mutables / Soumis à rotation | Ajout uniquement, signé par cryptographie |
| Contexte reconstruit après | Contexte scellé au moment de la déclaration |
| Pour le dépannage | Pour la redevabilité |

**Horizon introduit une séparation des pouvoirs entre la prise de décision et la preuve de la décision.**

---

#### Tête de pont : La Responsabilité de l'IA

Les systèmes d'IA amplifient le besoin de preuve. Horizon fournit la couche de preuve *ex-post* requise par le **Règlement sur l'IA (AI Act) de l'UE (Art. 12, 14, 26)** pour :

* Les approbations de mise en production d'IA.
* La surveillance humaine documentée.
* Les décisions post-incident.

---

#### La Vision

Là où les systèmes comptables enregistrent l'argent, **Horizon enregistre la responsabilité.**
Si les décisions de votre organisation peuvent être remises en question — lors d'un incident, d'un audit ou d'un litige — Horizon est la couche de preuve qui vous manque.

**[Discutons de votre architecture de preuve →]**

