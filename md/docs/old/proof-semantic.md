# Proof Semantics

## What a Sealed Fact Proves — and What It Doesn’t

**Status:** Canonical · Public · Reference

**Applies to:** All Horizon deployments

---

### 1. Purpose of This Document

This document defines the semantic scope and limits of Horizon evidence.
It exists to:

* clarify what a sealed fact establishes as evidence,
* explicitly delimit what Horizon does not assert,
* prevent misinterpretation or requalification of Horizon evidence.

Horizon evidence is factual, declarative, and non-interpretive.
This document is a semantic responsibility boundary between:

* **Horizon** (integrity of evidence),
* and **Horizon clients** (truth, legitimacy, interpretation).

### 2. Core Semantic Principle

A Horizon proof establishes the existence of a declaration — nothing more.
It proves that:

* a declaration was received,
* it was sealed at a precise time,
* it was attributed as declared,
* it belongs to a stream of related facts.

It does not prove intent, legitimacy, correctness, causality, or outcome.

### 3. What a Sealed Fact Proves

A sealed fact proves, and only proves, that:

* a piece of information was declared,
* by the actor identified in the fact,
* and sealed by Horizon at `sealed_at`,
* without alteration after sealing.

This proof is:

* append-only,
* tamper-evident,
* independently verifiable.

### 4. What a Sealed Fact Does NOT Prove

A sealed fact does not prove:

* that the declaration is true,
* that the declaration reflects intent,
* that the declaration was authorized,
* that an action occurred at the declared time,
* that an action occurred at all,
* that one fact caused another,
* that responsibility or fault exists,
* that any policy, rule, or obligation was satisfied.

Horizon does not infer, compute, or assess meaning.

### 5. Time Semantics

Horizon assigns a single authoritative time: **`sealed_at`**.

`sealed_at` represents:

* the moment Horizon sealed the declaration,
* the moment from which the fact becomes provable.

Horizon does not assert:

* when an action actually occurred,
* when an observation was made,
* whether client clocks were synchronized.

Any client-provided timestamps:

* belong to the payload,
* are not authoritative,
* are not validated or reconciled by Horizon.

### 6. Actor Attribution Semantics

The actor field represents **declared attribution**.
Horizon:

* records attribution as provided through a technical channel (API, email, system integration),
* proves the provenance of the declaration via that channel.

Horizon does not prove:

* the biological identity of a human,
* the legitimacy of the actor,
* the authority or role associated with the declaration.

Responsibility for the truth, legitimacy, and authority of a declaration remains with the declaring party.

### 7. Stream Semantics

A stream is a container of related facts.
Horizon:

* does not define workflow steps,
* does not enforce order beyond sealing time,
* does not define completion or closure,
* does not infer process state.

Streams are never closed by Horizon. New facts may be appended at any time. Any notion of “process”, “decision”, or “outcome” is external to Horizon.

### 8. Fact Correlation and Causality

Relationships between facts within a stream (such as parent references or shared identifiers) are provided by client systems.
Horizon:

* does not infer causality,
* does not compute dependency,
* does not assert procedural sequence.

Any perceived sequence, dependency, or workflow is an interpretation external to Horizon and must not be attributed to Horizon itself.

### 9. Incomplete Streams and Silence

Horizon does not interpret the absence of facts.
If no additional fact is appended after a declaration:

* Horizon does not infer failure,
* does not infer success,
* does not infer abandonment,
* does not infer intent or negligence.

Silence, delay, or incompleteness are not evidence within Horizon. Interpretation of incomplete streams depends entirely on external context.

### 10. Interpretation Boundary

All interpretation happens outside Horizon.
Horizon evidence may be used by humans, organizations, auditors, courts, or regulators.

Horizon itself:

* does not interpret,
* does not recommend,
* does not conclude.

### 11. Legal and Regulatory Positioning

Horizon evidence is technical, factual, and neutral.
It does not constitute:

* a decision,
* an authorization,
* a sanction,
* a policy evaluation,
* a compliance assertion.

Horizon is a **witness**, not a judge.

### 12. Canonical Summary

Horizon produces evidence of declaration, not evidence of correctness or legitimacy. This principle governs all Horizon proofs.

### 13. What This Document Explicitly Prevents

* Misuse of Horizon as an approval system
* Requalification as governance or compliance tooling
* Attribution of responsibility to Horizon
* Over-interpretation during audits or investigations

> **Final Note:** If a reader concludes that Horizon decided, validated, authorized, or judged anything, then Horizon has been misinterpreted.

---

---

# Sémantique de la Preuve

## Ce qu'un Fait Scellé Prouve — et ce qu'il ne prouve pas

**Statut :** Canonique · Public · Référence

**S'applique à :** Tous les déploiements Horizon

---

### 1. Objet de ce document

Ce document définit la portée et les limites sémantiques des preuves produites par Horizon.
Il existe pour :

* clarifier ce qu'un fait scellé établit en tant que preuve,
* délimiter explicitement ce qu'Horizon n'affirme pas,
* prévenir toute mauvaise interprétation ou requalification des preuves Horizon.

La preuve Horizon est factuelle, déclarative et non interprétative.
Ce document constitue une frontière de responsabilité sémantique entre :

* **Horizon** (intégrité de la preuve),
* et les **clients Horizon** (vérité, légitimité, interprétation).

### 2. Principe sémantique central

Une preuve Horizon établit l'existence d'une déclaration — rien de plus.
Elle prouve que :

* une déclaration a été reçue,
* elle a été scellée à un instant précis,
* elle a été attribuée telle que déclarée,
* elle appartient à un flux de faits liés.

Elle ne prouve ni l'intention, ni la légitimité, ni l'exactitude, ni la causalité, ni le résultat.

### 3. Ce qu'un fait scellé prouve

Un fait scellé prouve, et prouve uniquement, que :

* une information a été déclarée,
* par l'acteur identifié dans le fait,
* et scellée par Horizon à l'instant `sealed_at`,
* sans altération après le scellement.

Cette preuve est :

* en ajout uniquement (append-only),
* infalsifiable (tamper-evident),
* vérifiable de manière indépendante.

### 4. Ce qu'un fait scellé ne prouve PAS

Un fait scellé ne prouve pas :

* que la déclaration est vraie,
* que la déclaration reflète une intention,
* que la déclaration était autorisée,
* qu'une action a eu lieu à l'heure déclarée,
* qu'une action a eu lieu tout court,
* qu'un fait a causé un autre fait,
* qu'une responsabilité ou une faute existe,
* qu'une politique, une règle ou une obligation a été satisfaite.

Horizon n'induit, ne calcule, ni n'évalue le sens des données.

### 5. Sémantique temporelle

Horizon attribue une heure unique faisant autorité : **`sealed_at`**.

`sealed_at` représente :

* l'instant où Horizon a scellé la déclaration,
* le moment à partir duquel le fait devient prouvable.

Horizon n'affirme pas :

* quand une action s'est réellement produite,
* quand une observation a été faite,
* si les horloges des clients étaient synchronisées.

Tout horodatage fourni par le client :

* appartient à la charge utile (payload),
* ne fait pas autorité,
* n'est ni validé ni réconcilié par Horizon.

### 6. Sémantique de l'attribution de l'acteur

Le champ "actor" représente une **attribution déclarée**.
Horizon :

* enregistre l'attribution telle qu'elle est fournie via un canal technique (API, email, intégration système),
* prouve la provenance de la déclaration via ce canal.

Horizon ne prouve pas :

* l'identité biologique d'un humain,
* la légitimité de l'acteur,
* l'autorité ou le rôle associé à la déclaration.

La responsabilité de la véracité, de la légitimité et de l'autorité d'une déclaration incombe exclusivement à la partie déclarante.

### 7. Sémantique des flux (Streams)

Un flux est un conteneur de faits liés.
Horizon :

* ne définit pas les étapes d'un workflow,
* n'impose pas d'ordre au-delà de l'heure de scellement,
* ne définit pas l'achèvement ou la clôture,
* n'induit pas l'état d'un processus.

Les flux ne sont jamais fermés par Horizon. De nouveaux faits peuvent être ajoutés à tout moment. Toute notion de « processus », de « décision » ou de « résultat » est externe à Horizon.

### 8. Corrélation des faits et causalité

Les relations entre les faits au sein d'un flux (telles que les références parentes ou les identifiants partagés) sont fournies par les systèmes clients.
Horizon :

* n'induit pas de causalité,
* ne calcule pas de dépendance,
* n'affirme pas de séquence procédurale.

Toute séquence, dépendance ou workflow perçu est une interprétation externe à Horizon et ne doit pas être attribué à Horizon lui-même.

### 9. Flux incomplets et silence

Horizon n'interprète pas l'absence de faits.
Si aucun fait supplémentaire n'est ajouté après une déclaration :

* Horizon n'induit pas un échec,
* n'induit pas un succès,
* n'induit pas un abandon,
* n'induit pas une intention ou une négligence.

Le silence, le délai ou le caractère incomplet ne constituent pas des preuves au sein d'Horizon. L'interprétation des flux incomplets dépend entièrement du contexte externe.

### 10. Frontière d'interprétation

Toute interprétation a lieu en dehors d'Horizon.
Les preuves Horizon peuvent être utilisées par des humains, des organisations, des auditeurs, des tribunaux ou des régulateurs.

Horizon lui-même :

* n'interprète pas,
* ne recommande pas,
* ne conclut pas.

### 11. Positionnement juridique et réglementaire

La preuve Horizon est technique, factuelle et neutre.
Elle ne constitue pas :

* une décision,
* une autorisation,
* une sanction,
* une évaluation de politique,
* une assertion de conformité.

Horizon est un **témoin**, pas un juge.

### 12. Résumé canonique

Horizon produit une preuve de déclaration, et non une preuve d'exactitude ou de légitimité. Ce principe régit toutes les preuves Horizon.

### 13. Ce que ce document empêche explicitement

* Le détournement d'Horizon comme système d'approbation
* La requalification en outil de gouvernance ou de conformité
* L'attribution de responsabilité à Horizon
* La sur-interprétation lors d'audits ou d'enquêtes

> **Note finale :** Si un lecteur conclut qu'Horizon a décidé, validé, autorisé ou jugé quoi que ce soit, alors Horizon a été mal interprété.