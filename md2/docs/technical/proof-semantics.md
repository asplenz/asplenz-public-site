# Proof Semantics

**Understanding What Horizon Proves**

**Audience:** Legal · Compliance · Architects · Auditors

This document defines the semantic boundaries of Horizon evidence. It explains what a sealed fact proves, what it does not prove, and how to interpret proof artifacts.

---

## What a Sealed Fact Proves

A sealed fact provides cryptographic proof of three things:

| Proven | Description |
|--------|-------------|
| **Existence** | A declaration with this exact content existed |
| **Timestamp** | It was sealed at `sealed_at` (Horizon's clock, not yours) |
| **Attribution** | It was attributed to `actor` by the sealing system |

These three properties are guaranteed by the hash chain, cryptographic signatures, and Horizon's authoritative timestamping.

---

## What a Sealed Fact Does NOT Prove

| Not Proven | Explanation |
|------------|-------------|
| **Truth** | The content may be false. Horizon seals declarations, not reality. |
| **Intent** | Horizon cannot prove what the actor meant or intended. |
| **Legitimacy** | The actor may not have been authorized to make this declaration. |
| **Causality** | Horizon cannot prove cause-and-effect between facts. |
| **Completeness** | There may be other facts that were never sealed. |

A fact stating "Service restored at 14:00" proves that someone declared this at a specific time. It does not prove the service was actually restored.

### The Legal Distinction

> **Horizon guarantees the reality of the recording, not the truth of the content.**

| Horizon Guarantees | Horizon Does Not Guarantee |
|--------------------|----------------------------|
| A declaration was made | The declaration is accurate |
| It was recorded at time T | The described event occurred |
| It was attributed to actor A | Actor A is telling the truth |
| The record has not been altered | The record is complete |

This distinction protects both Horizon and its users: Horizon is a **witness to declarations**, not a **validator of claims**.

---

## Time Semantics

### Authoritative Timestamp

`sealed_at` is assigned by Horizon when the fact is received and sealed. It represents:
- **When Horizon sealed it** — not when the event occurred
- **When the declaration reached Horizon** — not when it was written

### What Time Does NOT Represent

| Does Not Represent | Example |
|--------------------|---------|
| Event time | "Outage started" was sealed 2 hours after the outage began |
| Decision time | A decision made in a meeting was sealed later that day |
| Client system time | The sending system's clock is irrelevant |

### Backdating Prevention

Because Horizon assigns the timestamp, clients cannot:
- Seal a fact with yesterday's date
- Insert a fact between two existing facts
- Alter the apparent chronology

---

## Actor Attribution

### What `actor` Means

The `actor` field identifies who or what is attributed with the declaration:
- It is provided by the sealing system, not verified by Horizon
- It reflects attribution as declared, not as authenticated

### Attribution vs. Authentication

| Aspect | Horizon's Role |
|--------|----------------|
| Attribution | Records who was declared as the actor |
| Authentication | Not enforced — your system authenticates before sealing |

If your system seals a fact with `actor: "ceo@company.com"`, Horizon records this attribution. It does not verify that the CEO actually made this declaration.

### Email Channel Attribution

For facts sealed via email:
- `actor` is the sender's email address
- DKIM/SPF authentication status is recorded as metadata
- Horizon records authentication status, it does not enforce it

---

## Stream Semantics

### What a Stream Represents

A stream is a logical grouping of facts. It has no inherent meaning:
- You decide what a stream represents (an incident, a process, an entity)
- Horizon does not interpret stream semantics
- Different streams are independent hash chains

### Chain Independence

Facts in different streams are not cryptographically linked. If you need to prove ordering across streams, timestamps provide the only ordering evidence.

---

## Legal and Regulatory Context

### Horizon as a Witness

Horizon acts as a **neutral witness**:
- It records declarations exactly as received
- It does not interpret, validate, or qualify content
- It provides cryptographic proof of when and what was declared

### Evidentiary Value

The evidentiary value depends on your context:
- The cryptographic proof is mathematically verifiable
- The business meaning depends on your processes and controls
- Legal admissibility varies by jurisdiction and context

### Compliance Positioning

Horizon supports compliance requirements by providing:
- Immutable audit trail of declarations
- Authoritative timestamps from a neutral system
- Tamper-evident chain that detects modification
- Exportable proof bundles for external verification

What Horizon does **not** replace:
- Business process controls
- Access management and authentication
- Decision validation logic
- Regulatory interpretation

---

## Interpretation Boundary

### Your Data, Your Meaning

`custom_payload` is opaque to Horizon. You define:
- What fields it contains
- What they mean
- How to interpret them

Horizon stores your payload exactly as provided, without parsing or validating its contents.

### No Business Logic

Horizon does not:
- Enforce schemas on your payload
- Validate that required fields are present
- Check consistency between facts
- Interpret relationships between facts

These are your responsibilities. Horizon is infrastructure, not business logic.

---

## Summary

| Dimension | Horizon Proves | Horizon Does Not Prove |
|-----------|----------------|------------------------|
| Content | Exact content was declared | Content is true or accurate |
| Time | When Horizon sealed it | When the event occurred |
| Actor | Who was attributed | Who actually authored it |
| Order | Sequence within a stream | Causality between facts |
| Integrity | No tampering occurred | Completeness of the record |

Horizon is a **proof infrastructure**. It provides the cryptographic foundation for accountability. The business meaning of that accountability is yours to define.

---

## Next

- [Auditor's Guide](../compliance/auditor-guide.md) — Independent verification protocol
- [Security & Sovereignty](../security/sovereignty.md) — Architecture and deployment
- [Guarantees](guarantees.md) — Technical guarantees in detail

---

---

# Sémantique des Preuves

**Comprendre ce qu'Horizon prouve**

**Audience :** Juridique · Conformité · Architectes · Auditeurs

Ce document définit les frontières sémantiques des preuves Horizon. Il explique ce qu'un fait scellé prouve, ce qu'il ne prouve pas, et comment interpréter les artéfacts de preuve.

---

## Ce qu'un fait scellé prouve

Un fait scellé fournit une preuve cryptographique de trois choses :

| Prouvé | Description |
|--------|-------------|
| **Existence** | Une déclaration avec ce contenu exact a existé |
| **Horodatage** | Elle a été scellée à `sealed_at` (l'horloge d'Horizon, pas la vôtre) |
| **Attribution** | Elle a été attribuée à `actor` par le système de scellement |

Ces trois propriétés sont garanties par la chaîne de hachage, les signatures cryptographiques et l'horodatage autoritaire d'Horizon.

---

## Ce qu'un fait scellé NE prouve PAS

| Non prouvé | Explication |
|------------|-------------|
| **Véracité** | Le contenu peut être faux. Horizon scelle des déclarations, pas la réalité. |
| **Intention** | Horizon ne peut pas prouver ce que l'acteur voulait dire ou avait l'intention de faire. |
| **Légitimité** | L'acteur n'était peut-être pas autorisé à faire cette déclaration. |
| **Causalité** | Horizon ne peut pas prouver les liens de cause à effet entre les faits. |
| **Exhaustivité** | Il peut y avoir d'autres faits qui n'ont jamais été scellés. |

Un fait déclarant « Service rétabli à 14h00 » prouve que quelqu'un a déclaré cela à un moment précis. Il ne prouve pas que le service a été effectivement rétabli.

### La distinction juridique

> **Horizon garantit la réalité de l'enregistrement, pas la vérité du contenu.**

| Horizon garantit | Horizon ne garantit pas |
|------------------|-------------------------|
| Une déclaration a été faite | La déclaration est exacte |
| Elle a été enregistrée à l'instant T | L'événement décrit s'est produit |
| Elle a été attribuée à l'acteur A | L'acteur A dit la vérité |
| L'enregistrement n'a pas été altéré | L'enregistrement est complet |

Cette distinction protège à la fois Horizon et ses utilisateurs : Horizon est un **témoin des déclarations**, pas un **validateur des affirmations**.

---

## Sémantique temporelle

### Horodatage autoritaire

`sealed_at` est attribué par Horizon lorsque le fait est reçu et scellé. Il représente :
- **Quand Horizon l'a scellé** — pas quand l'événement s'est produit
- **Quand la déclaration a atteint Horizon** — pas quand elle a été rédigée

### Ce que le temps NE représente PAS

| Ne représente pas | Exemple |
|-------------------|---------|
| L'heure de l'événement | « Panne commencée » a été scellé 2 heures après le début de la panne |
| L'heure de la décision | Une décision prise en réunion a été scellée plus tard dans la journée |
| L'heure du système client | L'horloge du système émetteur est sans importance |

### Prévention de l'antidatage

Parce qu'Horizon attribue l'horodatage, les clients ne peuvent pas :
- Sceller un fait avec la date d'hier
- Insérer un fait entre deux faits existants
- Altérer la chronologie apparente

---

## Attribution de l'acteur

### Ce que signifie `actor`

Le champ `actor` identifie qui ou quoi est attribué à la déclaration :
- Il est fourni par le système de scellement, non vérifié par Horizon
- Il reflète l'attribution telle que déclarée, non telle qu'authentifiée

### Attribution vs. Authentification

| Aspect | Rôle d'Horizon |
|--------|----------------|
| Attribution | Enregistre qui a été déclaré comme acteur |
| Authentification | Non imposée — votre système authentifie avant de sceller |

Si votre système scelle un fait avec `actor: "pdg@entreprise.com"`, Horizon enregistre cette attribution. Il ne vérifie pas que le PDG a réellement fait cette déclaration.

### Attribution par canal email

Pour les faits scellés par email :
- `actor` est l'adresse email de l'expéditeur
- Le statut d'authentification DKIM/SPF est enregistré comme métadonnée
- Horizon enregistre le statut d'authentification, il ne l'impose pas

---

## Sémantique des streams

### Ce qu'un stream représente

Un stream est un regroupement logique de faits. Il n'a pas de signification intrinsèque :
- Vous décidez ce qu'un stream représente (un incident, un processus, une entité)
- Horizon n'interprète pas la sémantique des streams
- Différents streams sont des chaînes de hachage indépendantes

### Indépendance des chaînes

Les faits dans différents streams ne sont pas liés cryptographiquement. Si vous devez prouver l'ordre entre les streams, les horodatages fournissent la seule preuve d'ordre.

---

## Contexte juridique et réglementaire

### Horizon comme témoin

Horizon agit comme un **témoin neutre** :
- Il enregistre les déclarations exactement telles que reçues
- Il n'interprète pas, ne valide pas, ne qualifie pas le contenu
- Il fournit une preuve cryptographique de quand et quoi a été déclaré

### Valeur probatoire

La valeur probatoire dépend de votre contexte :
- La preuve cryptographique est mathématiquement vérifiable
- La signification métier dépend de vos processus et contrôles
- L'admissibilité juridique varie selon la juridiction et le contexte

### Positionnement conformité

Horizon soutient les exigences de conformité en fournissant :
- Une piste d'audit immuable des déclarations
- Des horodatages autoritaires d'un système neutre
- Une chaîne inviolable qui détecte les modifications
- Des bundles de preuves exportables pour vérification externe

Ce qu'Horizon ne **remplace pas** :
- Les contrôles des processus métier
- La gestion des accès et l'authentification
- La logique de validation des décisions
- L'interprétation réglementaire

---

## Frontière d'interprétation

### Vos données, votre signification

`custom_payload` est opaque pour Horizon. Vous définissez :
- Quels champs il contient
- Ce qu'ils signifient
- Comment les interpréter

Horizon stocke votre payload exactement tel que fourni, sans analyser ni valider son contenu.

### Pas de logique métier

Horizon ne fait pas :
- Imposer des schémas sur votre payload
- Valider que les champs requis sont présents
- Vérifier la cohérence entre les faits
- Interpréter les relations entre les faits

Ce sont vos responsabilités. Horizon est une infrastructure, pas une logique métier.

---

## Résumé

| Dimension | Horizon prouve | Horizon ne prouve pas |
|-----------|----------------|----------------------|
| Contenu | Le contenu exact a été déclaré | Le contenu est vrai ou exact |
| Temps | Quand Horizon l'a scellé | Quand l'événement s'est produit |
| Acteur | Qui a été attribué | Qui en est réellement l'auteur |
| Ordre | La séquence dans un stream | La causalité entre les faits |
| Intégrité | Aucune altération n'a eu lieu | L'exhaustivité de l'enregistrement |

Horizon est une **infrastructure de preuve**. Il fournit la fondation cryptographique pour la responsabilité. La signification métier de cette responsabilité vous appartient.

---

## Étapes suivantes

- [Guide de l'auditeur](../compliance/auditor-guide.md) — Protocole de vérification indépendante
- [Sécurité & Souveraineté](../security/sovereignty.md) — Architecture et déploiement
- [Garanties](guarantees.md) — Garanties techniques en détail
