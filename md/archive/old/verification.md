# Verification Guide

## Verifying a Horizon Proof Bundle

**Status:** Canonical · Public · Reference

**Audience:** Auditors · External reviewers · Security teams · Legal experts

**Applies to:** All Horizon deployments

---

### 1. Purpose of This Document

This document explains how Horizon evidence can be verified and what such verification guarantees.
It defines:

* what a Horizon proof bundle contains,
* what is cryptographically verifiable,
* how tampering is detected,
* and the limits of verification.

This guide does not explain how Horizon is implemented internally. It explains what can be independently checked.

### 2. What Is a Horizon Proof Bundle

A proof bundle is a verifiable artifact produced by Horizon that packages:

* a set of sealed facts,
* their cryptographic hashes,
* their chaining information,
* and a Horizon signature.

A bundle represents the state of a stream at a given point in time. Bundles are immutable once issued.

### 3. Contents of a Proof Bundle

A Horizon proof bundle includes, at minimum:

* `bundle_id`
* `bundle_version`
* a list or manifest of facts
* the `head_hash` of the stream at bundle time
* a cryptographic signature
* a reference to the signing key (`key_id` or equivalent)

Optionally, a bundle may reference:

* attachments manifests,
* external evidence objects.

### 4. What Verification Checks

Verification of a Horizon proof bundle consists of four independent checks.

#### 4.1 Signature Verification

The bundle signature is verified using the public key corresponding to the declared signing key.
This establishes that:

* the bundle was produced by Horizon,
* the bundle content has not been altered since signing.

#### 4.2 Fact Hash Verification

For each fact in the bundle:

* the fact payload is hashed,
* the computed hash is compared to the stored `fact_hash`.

This establishes that each fact has not been modified after sealing.

#### 4.3 Hash Chain Verification

Facts are linked using a hash chain (`prev_hash` → `fact_hash`).
Verification recomputes the chain and confirms that:

* each fact correctly references the previous one,
* the final computed hash matches the bundle `head_hash`.

This establishes:

* append-only ordering,
* tamper evidence across the entire stream segment.

#### 4.4 Bundle Consistency Verification

The verifier checks that:

* the bundle references the correct stream,
* the set of facts is complete up to `head_hash`,
* no fact is missing, reordered, or duplicated.

### 5. What Verification Proves

Successful verification proves that:

* the bundle was produced by Horizon,
* the included facts were sealed by Horizon,
* the facts have not been altered since sealing,
* the ordering of facts is append-only and intact.

Verification establishes integrity and authenticity of the evidence.

### 6. What Verification Does NOT Prove

Verification does not prove:

* that the declared facts are true,
* that the declared actors are legitimate,
* that actions occurred as described,
* that timestamps reflect real-world occurrence,
* that the stream is complete,
* that no other facts exist outside the bundle.

Verification validates evidence integrity, not evidence meaning.

### 7. Verification Scope and Independence

Verification can be performed:

* by Horizon systems,
* by client systems,
* by third-party auditors,
* by regulators or courts.

No access to Horizon internal systems is required, provided that:

* the proof bundle,
* and the corresponding public verification material are available.

### 8. Handling of Incomplete or Partial Bundles

A proof bundle reflects the stream up to a specific point in time.
The absence of later facts:

* does not indicate failure,
* does not indicate success,
* does not indicate abandonment.

Verification does not infer completeness.

### 9. Key Management and Trust Assumptions

Verification assumes:

* the authenticity of the Horizon public signing key,
* correct key distribution or trust anchoring.

Verification does not:

* assess key governance,
* assess Horizon operational security,
* assess client security posture.

### 10. Legal Interpretation Boundary

Verification establishes technical integrity, not legal qualification.
A verified bundle:

* is not a decision,
* is not an authorization,
* is not a compliance assertion,
* is not a determination of responsibility.

Interpretation remains the responsibility of organizations, auditors, courts, or regulators.

### 11. Canonical Summary

Verification confirms that Horizon evidence is intact and authentic. It does not confirm what the evidence means.

### 12. Status and Stability

This document defines the stable verification semantics of Horizon. Any future evolution of Horizon must remain consistent with the guarantees described here.

---

---

# Guide de vérification

## Vérifier un faisceau de preuves Horizon

**Statut :** Canonique · Public · Référence

**Audience :** Auditeurs · Reviseurs externes · Équipes sécurité · Experts juridiques

**S'applique à :** Tous les déploiements Horizon

---

### 1. Objet de ce document

Ce document explique comment les preuves Horizon peuvent être vérifiées et ce qu'une telle vérification garantit.
Il définit :

* ce qu'un faisceau de preuves Horizon contient,
* ce qui est vérifiable par cryptographie,
* comment les altérations sont détectées,
* et les limites de la vérification.

Ce guide n'explique pas comment Horizon est implémenté en interne. Il explique ce qui peut être contrôlé de manière indépendante.

### 2. Qu'est-ce qu'un faisceau de preuves Horizon

Un faisceau de preuves (*proof bundle*) est un artefact vérifiable produit par Horizon qui regroupe :

* un ensemble de faits scellés,
* leurs hachages cryptographiques,
* leurs informations de chaînage,
* et une signature Horizon.

Un faisceau représente l'état d'un flux à un instant donné. Les faisceaux sont immuables une fois émis.

### 3. Contenu d'un faisceau de preuves

Un faisceau de preuves Horizon comprend, au minimum :

* `bundle_id`
* `bundle_version`
* une liste ou un manifeste des faits
* le `head_hash` (hachage de tête) du flux au moment du faisceau
* une signature cryptographique
* une référence à la clé de signature (`key_id` ou équivalent)

Optionnellement, un faisceau peut référencer :

* des manifestes de pièces jointes,
* des objets de preuve externes.

### 4. Ce que la vérification contrôle

La vérification d'un faisceau de preuves Horizon consiste en quatre contrôles indépendants.

#### 4.1 Vérification de la signature

La signature du faisceau est vérifiée à l'aide de la clé publique correspondant à la clé de signature déclarée.
Cela établit que :

* le faisceau a été produit par Horizon,
* le contenu du faisceau n'a pas été altéré depuis sa signature.

#### 4.2 Vérification du hachage des faits

Pour chaque fait du faisceau :

* la charge utile (payload) du fait est hachée,
* le hachage calculé est comparé au `fact_hash` stocké.

Cela établit que chaque fait n'a pas été modifié après son scellement.

#### 4.3 Vérification de la chaîne de hachage

Les faits sont liés à l'aide d'une chaîne de hachage (`prev_hash` → `fact_hash`).
La vérification recalcule la chaîne et confirme que :

* chaque fait référence correctement le précédent,
* le hachage final calculé correspond au `head_hash` du faisceau.

Cela établit :

* l'ordre chronologique en ajout uniquement (append-only),
* la détection d'altération sur l'ensemble du segment de flux.

#### 4.4 Vérification de la cohérence du faisceau

Le vérificateur contrôle que :

* le faisceau référence le bon flux,
* l'ensemble des faits est complet jusqu'au `head_hash`,
* aucun fait n'est manquant, réordonné ou dupliqué.

### 5. Ce que la vérification prouve

Une vérification réussie prouve que :

* le faisceau a été produit par Horizon,
* les faits inclus ont été scellés par Horizon,
* les faits n'ont pas été altérés depuis leur scellement,
* l'ordre des faits est en ajout uniquement et intact.

La vérification établit l'intégrité et l'authenticité de la preuve.

### 6. Ce que la vérification ne prouve PAS

La vérification ne prouve pas :

* que les faits déclarés sont vrais,
* que les acteurs déclarés sont légitimes,
* que les actions se sont déroulées comme décrit,
* que les horodatages reflètent la réalité du monde réel,
* que le flux est complet,
* qu'aucun autre fait n'existe en dehors du faisceau.

La vérification valide l'intégrité de la preuve, pas sa signification.

### 7. Portée et indépendance de la vérification

La vérification peut être effectuée :

* par les systèmes Horizon,
* par les systèmes clients,
* par des auditeurs tiers,
* par des régulateurs ou des tribunaux.

Aucun accès aux systèmes internes d'Horizon n'est requis, à condition que :

* le faisceau de preuves,
* et le matériel de vérification public correspondant soient disponibles.

### 8. Traitement des faisceaux incomplets ou partiels

Un faisceau de preuves reflète le flux jusqu'à un point précis dans le temps.
L'absence de faits ultérieurs :

* n'indique pas un échec,
* n'indique pas un succès,
* n'indique pas un abandon.

La vérification n'induit pas la complétude.

### 9. Gestion des clés et hypothèses de confiance

La vérification suppose :

* l'authenticité de la clé de signature publique d'Horizon,
* une distribution correcte des clés ou un ancrage de confiance.

La vérification ne permet pas :

* d'évaluer la gouvernance des clés,
* d'évaluer la sécurité opérationnelle d'Horizon,
* d'évaluer la posture de sécurité du client.

### 10. Frontière d'interprétation juridique

La vérification établit l'intégrité technique, pas la qualification juridique.
Un faisceau vérifié :

* n'est pas une décision,
* n'est pas une autorisation,
* n'est pas une assertion de conformité,
* n'est pas une détermination de responsabilité.

L'interprétation reste de la responsabilité des organisations, des auditeurs, des tribunaux ou des régulateurs.

### 11. Résumé canonique

La vérification confirme que la preuve Horizon est intacte et authentique. Elle ne confirme pas ce que la preuve signifie.

### 12. Statut et stabilité

Ce document définit la sémantique de vérification stable d'Horizon. Toute évolution future d'Horizon doit rester cohérente avec les garanties décrites ici.