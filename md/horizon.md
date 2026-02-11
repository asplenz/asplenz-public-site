# [EN Version]

# Decision Proof Infrastructure for Accountable Organizations

**Proving human and automated decisions when accountability matters.**

When a decision is questioned months or years later, explanations are not enough.
**Proof must already exist.**

---

## Governance Defines Responsibility. Horizon Proves It.

Governance frameworks define policies, roles, oversight structures, and accountability models.

Horizon does not design governance.

Horizon records the **moment responsibility is assumed**.

Where governance defines *who should decide*,
Horizon proves *what was decided, by whom, and when*.

---

## Decisions Happen. Proof Doesn't Scale.

Every organization makes decisions that carry risk:
production incidents, emergency overrides, risk acceptances, deployment approvals, AI authorizations.

Some are automated. Some involve AI. Many are purely human.

The evidence scatters: an email here, a Slack message there, a verbal "yes" in a meeting, a Jira ticket never updated.

Multiply that across 50 systems, 20 decision-makers, 12 months.

When a regulator, a court, an auditor, or a board demands an answer:

> *Who authorized this? When? Under which authority? Can this be proven independently?*

Reconstruction does not scale.
Accountability does not tolerate reconstruction.

**A decision without proof, when challenged, cannot be defended.**

---

## The Solution

**Horizon is a decision proof infrastructure.**

It captures decisions as immutable, cryptographically sealed facts, whether they are made by a human, an automated system, or an AI agent.

Horizon does not govern decisions.
It governs the **evidence of decisions**.

Horizon allows organizations to:

* explicitly declare a decision and its context
* attribute it to a human or system authority
* seal it into an append-only proof chain
* generate an independently verifiable proof artifact
* export evidence for audit, litigation, or review

Once sealed, a decision cannot be altered, rewritten, or retroactively reconstructed.

---

## How Horizon Works

1. A decision is declared (approval, override, authorization, risk acceptance)
2. Horizon captures it via API, UI, or integration
3. The decision is cryptographically sealed (SHA-256 hash chain, Ed25519 signatures)
4. It is appended to an immutable proof chain
5. A proof artifact is generated and remains independently verifiable

No reconstruction. No retroactive justification. No interpretation.

---

## Separation of Layers

```
Board & Governance Design     → Advisory / Frameworks
Policies & Risk Models        → GRC / Internal Controls
Declared Decision Event       → Horizon
Operational Execution         → Client Systems

```

Horizon sits at the **decision moment**.

It is the infrastructure that transforms a declared decision into a durable, independent artifact of proof.

---

## Proof Is Not Logging

Logs record activity. Horizon records responsibility.

| Logs & tickets | Horizon |
| --- | --- |
| Operational traces | Independent system of record |
| Mutable / rotatable | Append-only, cryptographically signed |
| Context rebuilt later | Context sealed at declaration time |
| Owned by source systems | Independent evidence layer |
| For troubleshooting | For accountability |

Horizon introduces a **separation of powers** between decision-making and decision proof.

---

## What Horizon Is Not

Horizon is not a governance framework, a compliance methodology, a risk assessment model, a control system, a workflow engine, or a policy enforcement tool.

Horizon does not judge decision quality, validate regulatory compliance, interpret or score outcomes, recommend actions, or bias decisions.

Horizon does not replace governance.
It makes governance provable.

It records facts.

**Neutrality is what makes the evidence defensible.**

---

## One Proof Platform. Multiple Domains.

Horizon is a single evidence infrastructure. Modules are structured capture layers over the same proof chain.

| Module | Description |
| --- | --- |
| **AI Governance** | Proof of human decisions about AI systems. |
| **ForenAI** | Forensic proof of AI agent execution chains. |
| **Decision Gateway** | Structured capture of human decisions triggered by automation. |
| **Health** | Clinical decisions and post-decision facts with strict data minimization. |

Modules do not change the infrastructure. They structure how decisions enter the same immutable record.

---

## Beachhead: AI Accountability

AI systems amplify the proof problem: decisions scale instantly, context disappears quickly, responsibility becomes blurred.

Horizon provides evidence for:

* AI production approvals
* acceptance of residual AI risk
* documented human oversight
* overrides and emergency actions
* post-incident decisions

This is the missing **ex-post proof layer** required by the EU AI Act ([Articles 12](https://artificialintelligenceact.eu/article/12/), [14](https://artificialintelligenceact.eu/article/14/), [26](https://artificialintelligenceact.eu/article/26/)).

---

## Who Horizon Is For

Horizon is designed for roles that **carry responsibility**:

* Legal & Compliance
* Risk and AI governance owners
* Incident and crisis decision owners
* Internal Audit (as verifier)
* CTO / CIO and accountable executives

They are responsible for defending decisions.
Horizon provides the artifact that allows them to do so.

---

## Why Now

Three structural forces converge:

1. **Accountability-focused regulation** (EU AI Act, DORA, NIST AI RMF)
2. **Acceleration of automation and AI** across every regulated sector
3. **Rising litigation and executive liability**

Governance is no longer advisory. It is liability architecture.

Horizon is the infrastructure that makes that architecture defensible.

---

## Product Status

Horizon is live and demonstrable.

* Single cryptographic proof chain
* Append-only sealing
* Independently verifiable proof artifacts
* API-first architecture (~65 endpoints)
* Multi-tenant isolation
* Multiple decision domains already demonstrated

This is not a dashboard. This is **evidence infrastructure**.

---

## The Vision

Where accounting systems record money,
**Horizon records responsibility.**

Every accountable organization will need a system of record for decisions.

---

## See It In Action

If decisions in your organization can be questioned later, during an incident, an audit, an underwriting review, or litigation, Horizon is the proof layer you are missing.

**[Discuss Your Decision Architecture →]**


---

# [FR Version]

# Infrastructure de Preuve de Décision pour les Organisations Responsables

**Prouver les décisions humaines et automatisées lorsque la responsabilité est en jeu.**

Lorsqu'une décision est remise en question des mois ou des années plus tard, les explications ne suffisent pas.
**La preuve doit déjà exister.**

---

## La Gouvernance définit la Responsabilité. Horizon la prouve.

Les cadres de gouvernance définissent les politiques, les rôles, les structures de surveillance et les modèles de responsabilité.

Horizon ne conçoit pas la gouvernance.

Horizon enregistre le **moment où la responsabilité est assumée**.

Là où la gouvernance définit *qui doit décider*,
Horizon prouve *ce qui a été décidé, par qui, et quand*.

---

## Les décisions surviennent. La preuve ne passe pas à l'échelle.

Chaque organisation prend des décisions porteuses de risques :
incidents de production, dérogations d'urgence, acceptations de risques, approbations de déploiement, autorisations d'IA.

Certaines sont automatisées. D'autres impliquent l'IA. Beaucoup sont purement humaines.

Les preuves s'éparpillent : un e-mail ici, un message Slack là, un « oui » verbal en réunion, un ticket Jira jamais mis à jour.

Multipliez cela par 50 systèmes, 20 décideurs, 12 mois.

Lorsqu'un régulateur, un tribunal, un auditeur ou un conseil d'administration exige une réponse :

> *Qui a autorisé cela ? Quand ? Sous quelle autorité ? Cela peut-il être prouvé de manière indépendante ?*

La reconstruction ne passe pas à l'échelle.
La responsabilité (accountability) ne tolère pas la reconstruction.

**Une décision sans preuve, lorsqu'elle est contestée, ne peut être défendue.**

---

## La Solution

**Horizon est une infrastructure de preuve de décision.**

Il capture les décisions sous forme de faits immuables et scellés par cryptographie, qu'elles soient prises par un humain, un système automatisé ou un agent d'IA.

Horizon ne gouverne pas les décisions.
Il gouverne la **preuve des décisions**.

Horizon permet aux organisations de :

* déclarer explicitement une décision et son contexte
* l'attribuer à une autorité humaine ou système
* la sceller dans une chaîne de preuve en ajout uniquement (append-only)
* générer un artefact de preuve vérifiable de manière indépendante
* exporter les preuves pour audit, litige ou examen

Une fois scellée, une décision ne peut être modifiée, réécrite ou reconstruite rétroactivement.

---

## Comment fonctionne Horizon

1. Une décision est déclarée (approbation, dérogation, autorisation, acceptation de risque)
2. Horizon la capture via API, interface utilisateur ou intégration
3. La décision est scellée par cryptographie (chaîne de hachage SHA-256, signatures Ed25519)
4. Elle est ajoutée à une chaîne de preuve immuable
5. Un artefact de preuve est généré et reste vérifiable de manière indépendante

Pas de reconstruction. Pas de justification rétroactive. Pas d'interprétation.

---

## Séparation des Couches

```
Conseil & Design de Gouvernance  → Conseil / Cadres de référence
Politiques & Modèles de Risque   → GRC / Contrôles Internes
Événement de Décision Déclaré    → Horizon
Exécution Opérationnelle         → Systèmes Clients

```

Horizon se situe au **moment de la décision**.

C'est l'infrastructure qui transforme une décision déclarée en un artefact de preuve durable et indépendant.

---

## La Preuve n'est pas la Journalisation (Logging)

Les logs enregistrent l'activité. Horizon enregistre la responsabilité.

| Logs & tickets | Horizon |
| --- | --- |
| Traces opérationnelles | Système d'enregistrement indépendant |
| Mutables / volatiles | Ajout uniquement, signé par cryptographie |
| Contexte reconstruit après | Contexte scellé au moment de la déclaration |
| Détenus par les systèmes | Couche de preuve indépendante |
| Pour le dépannage | Pour la responsabilité (accountability) |

Horizon introduit une **séparation des pouvoirs** entre la prise de décision et la preuve de la décision.

---

## Ce qu'Horizon n'est pas

Horizon n'est pas un cadre de gouvernance, une méthodologie de conformité, un modèle d'évaluation des risques, un système de contrôle, un moteur de workflow ou un outil d'application de politiques.

Horizon ne juge pas la qualité des décisions, ne valide pas la conformité réglementaire, n'interprète pas et ne note pas les résultats, ne recommande pas d'actions et n'influence pas les décisions.

Horizon ne remplace pas la gouvernance.
Il rend la gouvernance prouvable.

Il enregistre des faits.

**C'est la neutralité qui rend la preuve défendable.**

---

## Une Plateforme de Preuve Unique. Domaines Multiples.

Horizon est une infrastructure de preuve unique. Les modules sont des couches de capture structurées sur la même chaîne de preuve.

| Module | Description |
| --- | --- |
| **AI Governance** | Preuve des décisions humaines concernant les systèmes d'IA. |
| **ForenAI** | Preuve forensique des chaînes d'exécution des agents d'IA. |
| **Decision Gateway** | Capture structurée des décisions humaines déclenchées par l'automatisation. |
| **Health** | Décisions cliniques et faits post-décision avec une minimisation stricte des données. |

Les modules ne changent pas l'infrastructure. Ils structurent la manière dont les décisions entrent dans le même enregistrement immuable.

---

## Tête de pont : La Responsabilité de l'IA (AI Accountability)

Les systèmes d'IA amplifient le problème de la preuve : les décisions passent à l'échelle instantanément, le contexte disparaît rapidement, la responsabilité devient floue.

Horizon fournit des preuves pour :

* les approbations de mise en production d'IA
* l'acceptation du risque résiduel de l'IA
* la surveillance humaine documentée
* les dérogations et actions d'urgence
* les décisions post-incident

Il s'agit de la **couche de preuve ex-post** manquante requise par l'IA Act de l'UE ([Articles 12](https://artificialintelligenceact.eu/article/12/), [14](https://artificialintelligenceact.eu/article/14/), [26](https://artificialintelligenceact.eu/article/26/)).

---

## À qui s'adresse Horizon

Horizon est conçu pour les rôles qui **portent la responsabilité** :

* Juridique & Conformité
* Responsables des risques et de la gouvernance de l'IA
* Responsables des décisions d'incident et de crise
* Audit interne (en tant que vérificateur)
* CTO / CIO et cadres responsables

Ils sont chargés de défendre les décisions.
Horizon fournit l'artefact qui leur permet de le faire.

---

## Pourquoi Maintenant

Trois forces structurelles convergent :

1. **Réglementations axées sur la responsabilité** (IA Act de l'UE, DORA, NIST AI RMF)
2. **Accélération de l'automatisation et de l'IA** dans tous les secteurs réglementés
3. **Augmentation des litiges et de la responsabilité des dirigeants**

La gouvernance n'est plus consultative. C'est une architecture de responsabilité civile et pénale.

Horizon est l'infrastructure qui rend cette architecture défendable.

---

## État du Produit

Horizon est opérationnel et démontrable.

* Chaîne de preuve cryptographique unique
* Scellement en ajout uniquement (append-only)
* Artefacts de preuve vérifiables de manière indépendante
* Architecture API-first (~65 points de terminaison)
* Isolation multi-tenant
* Plusieurs domaines de décision déjà démontrés

Ceci n'est pas un tableau de bord. C'est une **infrastructure de preuve**.

---

## La Vision

Là où les systèmes comptables enregistrent l'argent,
**Horizon enregistre la responsabilité.**

Toute organisation responsable aura besoin d'un système d'enregistrement pour ses décisions.

---

## Voyez-le en Action

Si les décisions au sein de votre organisation peuvent être remises en question plus tard, lors d'un incident, d'un audit, d'un examen de souscription ou d'un litige, Horizon est la couche de preuve qui vous manque.

**[Échanger sur votre architecture décisionnelle →]**


---

