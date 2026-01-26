[Version anglaise]

# Horizon — Proof Model

**Decision Evidence Infrastructure**

## 1. What Horizon Is

**Horizon is Decision Evidence Infrastructure.**

It produces independent, append-only, verifiable evidence that **decision-related facts were declared**, by a declared actor, and sealed at a precise moment in time.

Horizon exists to replace fragile, post-incident reconstructions with **factually sealed records** that can be verified independently.

Horizon is designed for situations where decisions are:

* urgent or exceptional,
* human or semi-human,
* judged *after the fact* (incident review, audit, regulator inquiry).

---

## 2. What Horizon Is Not

Horizon is **strictly passive**.

It is **not**:

* a decision engine,
* a workflow or approval system,
* a governance or compliance tool,
* a security control,
* a logging or observability system.

Horizon does not:

* decide,
* approve or reject,
* block or allow,
* enforce rules,
* interpret meaning,
* assign responsibility.

These absences are **intentional guarantees**, not missing features.

---

## 3. The Append-Only Proof Model

Horizon is built on a simple, immutable model composed of **Streams** and **Facts**.

### Stream

A **Stream** groups a sequence of related facts over time.

* Streams are **never closed** by Horizon.
* New facts can be appended at any time, even long after an incident.
* Any notion of “completion” or “workflow end” is **external to Horizon**.

### Fact

A **Fact** is a declared piece of information, sealed by Horizon.

Each fact includes:

* a declared actor,
* a client-defined payload (opaque to Horizon),
* a cryptographic hash,
* a signature,
* a Horizon-assigned timestamp.

Facts are:

* append-only,
* immutable,
* cryptographically chained.

Horizon never modifies or reorders facts once sealed.

---

## 4. Time Semantics: `sealed_at`

Horizon assigns a single authoritative time to each fact: **`sealed_at`**.

`sealed_at` represents:

* the moment Horizon received and sealed the declaration,
* the moment from which the fact becomes provable.

Horizon does **not** assert:

* when an action actually occurred,
* when an observation was made,
* whether timestamps declared by clients are accurate.

Any client-provided time information belongs in the **payload** and is not authoritative.

---

## 5. Neutrality and Non-Interpretation

Horizon is intentionally neutral.

It does not:

* infer intent,
* infer causality,
* infer authorization,
* infer responsibility,
* infer correctness.

Horizon records **that something was declared**, not **what it means**.

All interpretation, judgment, or qualification happens **outside Horizon**, by humans, organizations, or regulators.

This neutrality ensures Horizon cannot be requalified as:

* a decision system,
* an authorization system,
* a disciplinary or governance tool.

---

## 6. What Horizon Proves

Horizon can produce verifiable proof that:

* a fact was declared,
* by a declared actor,
* at a precise sealing time,
* within a given stream of related facts,
* without alteration after sealing.

This proof is:

* append-only,
* tamper-evident,
* independently verifiable.

---

## 7. What Horizon Never Proves

Horizon does **not** prove:

* that a decision was correct,
* that a decision was authorized,
* that an action should have been taken,
* that an action actually occurred at a given real-world time,
* that one fact caused another,
* that responsibility or fault exists.

Horizon provides **evidence of declaration**, not evidence of legitimacy, intent, or outcome correctness.

---

## 8. Positioning Summary

Horizon is the **black box of critical decisions**.

It does not pilot action.
It does not explain behavior.
It does not judge outcomes.

It guarantees that **facts exist**, are **sealed**, and can be **verified** when scrutiny begins.

---

### Canonical Definition (Reference)

> **Horizon is Decision Evidence Infrastructure:**
> independent infrastructure that seals verifiable facts related to decisions, without interpreting, enforcing, or governing them.

---

**Document status:**
Canonical · Public · Stable · Reference version

[version FR]
Voici une traduction précise et fidèle du document de référence de **Horizon**. Le ton a été conservé pour rester neutre, technique et factuel.

---

Ceci est le document de référence public canonique pour Horizon.
Il est rédigé pour être stable, précis et dénué d'arguments marketing.
Il peut être publié en l'état (page web ou PDF).

# Horizon — Modèle de Preuve

### Infrastructure de Preuve de Décision

## 1. Ce qu’est Horizon

Horizon est une **Infrastructure de Preuve de Décision** (Decision Evidence Infrastructure).
Il produit des preuves indépendantes, en ajout uniquement (*append-only*) et vérifiables, attestant que des faits liés à une décision ont été déclarés par un acteur identifié et scellés à un instant précis.

Horizon existe pour remplacer les reconstructions post-incident fragiles par des enregistrements factuels scellés, vérifiables de manière indépendante.
Horizon est conçu pour les situations où les décisions sont :

* Urgentes ou exceptionnelles ;
* Humaines ou semi-humaines ;
* Jugées après coup (revue d'incident, audit, enquête réglementaire).

## 2. Ce qu’Horizon n’est pas

Horizon est strictement **passif**.
Il n'est **pas** :

* Un moteur de décision ;
* Un système de flux de travail (*workflow*) ou d'approbation ;
* Un outil de gouvernance ou de conformité ;
* Un contrôle de sécurité ;
* Un système de journalisation (*logging*) ou d'observabilité.

Horizon ne fait **pas** :

* Décider ;
* Approuver ou rejeter ;
* Bloquer ou autoriser ;
* Appliquer des règles ;
* Interpréter le sens ;
* Attribuer des responsabilités.

Ces absences sont des **garanties délibérées**, et non des fonctionnalités manquantes.

## 3. Le modèle de preuve "Append-Only"

Horizon repose sur un modèle simple et immuable composé de **Flux** (*Streams*) et de **Faits** (*Facts*).

### Flux (Stream)

Un Flux regroupe une séquence de faits liés dans le temps.

* Les Flux ne sont jamais fermés par Horizon.
* De nouveaux faits peuvent être ajoutés à tout moment, même longtemps après un incident.
* Toute notion de « complétion » ou de « fin de workflow » est externe à Horizon.

### Fait (Fact)

Un Fait est une information déclarée, scellée par Horizon. Chaque fait inclut :

* Un acteur déclaré ;
* Une charge utile (*payload*) définie par le client (opaque pour Horizon) ;
* Un hachage cryptographique ;
* Une signature ;
* Un horodatage attribué par Horizon.

Les Faits sont :

* En ajout uniquement (*append-only*) ;
* Immuables ;
* Chaînés cryptographiquement.

Horizon ne modifie ni ne réordonne jamais les faits une fois qu'ils sont scellés.

## 4. Sémantique temporelle : `sealed_at`

Horizon attribue une heure unique et autoritaire à chaque fait : **`sealed_at`**.
`sealed_at` représente :

* L'instant où Horizon a reçu et scellé la déclaration ;
* Le moment à partir duquel le fait devient prouvable.

Horizon ne certifie **pas** :

* Le moment où une action a réellement eu lieu ;
* Le moment où une observation a été faite ;
* La véracité des horodatages déclarés par les clients.

Toute information temporelle fournie par le client appartient à la charge utile et n'est pas considérée comme faisant autorité par Horizon.

## 5. Neutralité et non-interprétation

Horizon est intentionnellement neutre. Il n'induit aucune :

* Intention ;
* Causalité ;
* Autorisation ;
* Responsabilité ;
* Exactitude.

Horizon enregistre qu'une chose a été déclarée, et non sa signification. Toute interprétation, jugement ou qualification intervient en dehors d'Horizon, par des humains, des organisations ou des régulateurs.

Cette neutralité garantit qu'Horizon ne peut être requalifié en :

* Système de décision ;
* Système d'autorisation ;
* Outil disciplinaire ou de gouvernance.

## 6. Ce qu’Horizon prouve

Horizon peut produire la preuve vérifiable que :

* Un fait a été déclaré ;
* Par un acteur déclaré ;
* À un moment de scellement précis ;
* Au sein d'un flux donné de faits liés ;
* Sans altération après le scellement.

Cette preuve est **infalsifiable** et **vérifiable indépendamment**.

## 7. Ce qu’Horizon ne prouve jamais

Horizon ne prouve **pas** :

* Qu'une décision était correcte ;
* Qu'une décision était autorisée ;
* Qu'une action aurait dû être entreprise ;
* Qu'une action a réellement eu lieu à une heure donnée dans le monde réel ;
* Qu'un fait a causé un autre fait ;
* Que la responsabilité ou la faute est établie.

Horizon fournit une preuve de **déclaration**, et non une preuve de légitimité, d'intention ou de justesse du résultat.

## 8. Résumé du positionnement

Horizon est la **boîte noire** des décisions critiques.

* Il ne pilote pas l'action.
* Il n'explique pas le comportement.
* Il ne juge pas les résultats.

Il garantit que les faits existent, sont scellés et peuvent être vérifiés lorsque l'examen commence.

> **Définition Canonique (Référence)**
> Horizon est une Infrastructure de Preuve de Décision : une infrastructure indépendante qui scelle des faits vérifiables liés aux décisions, sans les interpréter, les imposer ou les gouverner.

**Statut du document :**
Canonique · Public · Stable · Version de référence

