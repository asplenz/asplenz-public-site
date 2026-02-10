# Spécification — Gestion des pièces jointes par Email (Horizon v2)

## 1. Objet

Définir comment Horizon traite les **pièces jointes reçues par email** afin de produire une **preuve factuelle, horodatée et vérifiable**, sans interprétation du contenu et sans requalification décisionnelle.

Cette spécification couvre :

* la réception des fichiers,
* le calcul des empreintes cryptographiques,
* le scellement,
* les politiques de stockage,
* la valeur probante exacte du hash.

---

## 2. Principe fondamental

> **Dans Horizon, la preuve porte sur l'existence d'un artefact à un instant donné,
> pas sur sa signification, son interprétation ou sa qualité.**

Les pièces jointes sont des **artefacts rattachés à un fact scellé**.
Elles ne constituent jamais la preuve primaire.

---

## 3. Réception des pièces jointes (Email)

Lorsqu'un email contenant une ou plusieurs pièces jointes est reçu :

1. Horizon reçoit **physiquement** l'email complet (headers, body, attachments).
2. Chaque pièce jointe est extraite **sans modification**.
3. Aucune analyse sémantique n'est effectuée.

Cette réception est un fait technique incontestable.

---

## 4. Calcul et normalisation

Pour chaque pièce jointe reçue, Horizon calcule immédiatement :

* `sha256` : empreinte binaire exacte (octet par octet),
* `size_bytes` : taille du fichier,
* `content_type` : type MIME déclaré (non interprété),
* `filename` : nom tel que reçu.

Aucune transformation n'est appliquée :

* pas de normalisation,
* pas de ré-encodage,
* pas d'ouverture du fichier.

---

## 5. Attachment Manifest (obligatoire)

Horizon génère un **attachments_manifest**, intégré au fact scellé.

### Format canonique

```json
{
  "attachments_manifest": [
    {
      "filename": "decision.txt",
      "sha256": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
      "size_bytes": 48213,
      "content_type": "text/plain"
    }
  ]
}
```

Quatre champs. Le hash SHA-256 est l'identifiant unique de l'artefact.

Le manifest est :

* inclus dans le fact,
* hashé,
* signé,
* chaîné (`fact_hash`, `prev_hash`).

---

## 6. Scellement et temporalité

* Le fact est scellé avec un `sealed_at_ms` assigné par Horizon.
* Le hash de la pièce jointe est figé à cet instant.
* **La preuve est acquise dès le scellement**, indépendamment de la politique de stockage.

---

## 7. Politiques de stockage (email)

La politique de stockage est **globale au déploiement**, jamais par fact.

Elle n'apparaît pas dans le manifest scellé.

### 7.1 Politique A — Stored (par défaut)

**Comportement**

* Le fichier est stocké dans un object storage externe.
* Le stockage est hors base de données.

**Valeur probante**

* Le fichier peut être restitué.
* Son intégrité est vérifiable à tout moment par recomputation du hash.

### 7.2 Politique B — Hashed-only (exception)

**Comportement**

* Le fichier est reçu, hashé, puis supprimé.
* Horizon ne conserve **que** le manifest scellé.

**Valeur probante**

* Horizon prouve qu'**un fichier précis a existé** à l'instant T.
* Horizon ne permet **pas** la relecture du contenu.
* Toute tentative de substitution ultérieure est détectable.

Cette politique implique une **perte volontaire de capacité de relecture**.

---

## 8. Valeur probante exacte du hash (point clé)

Le hash permet d'établir que :

* un fichier **a existé**,
* il était **rattaché à un fact précis**,
* il **ne peut pas être substitué** a posteriori sans détection.

Le hash **ne permet pas** :

* de reconstruire le fichier,
* de prouver son sens,
* de prouver sa validité ou sa pertinence.

---

## 9. Cas des fichiers texte

Un fichier texte est traité comme un fichier binaire.

Conséquences :

* un caractère différent produit un hash différent,
* un encodage différent produit un hash différent,
* un simple "Save As" peut changer le hash.

**Seule une copie binaire stricte préservera le hash.**

---

## 10. Audit ultérieur — scénario canonique

1. Un auditeur demande :
   *"Quel fichier était joint à ce fact ?"*

2. Horizon prouve :
   * qu'un fichier de hash `H` existait à `sealed_at_ms`.

3. L'organisation :
   * ne peut pas nier l'existence du fichier,
   * doit fournir un fichier dont le hash correspond à `H`.

4. Si le hash diffère :
   * ce n'est pas le même fichier,
   * la substitution est détectée.

---

## 11. Cas limites

### Pièce jointe trop volumineuse

* Le fact est scellé.
* La pièce est rejetée.
* Le manifest n'inclut pas la pièce rejetée.

### Pièce jointe corrompue

* Même comportement.
* Aucune modification du fact.

Ces événements sont traités **hors preuve**.

---

## 12. Ce que Horizon ne fera jamais

* Lire ou interpréter le contenu
* Qualifier la valeur du document
* Vérifier la conformité du fichier
* Empêcher l'envoi d'une pièce jointe
* Décider si la pièce est "suffisante"

---

## 13. Doctrine

> **Horizon does not preserve documents to prove their meaning.
> It preserves cryptographic evidence that a specific artefact existed at a specific time and cannot be silently replaced later.**

---

## 14. Résumé exécutif

| Aspect             | Décision Horizon    |
| ------------------ | ------------------- |
| Réception email    | Toujours            |
| Hash calculé       | Toujours            |
| Manifest scellé    | Toujours            |
| Stockage fichier   | Configurable        |
| Preuve d'existence | Toujours            |
| Preuve de contenu  | Seulement si stocké |
