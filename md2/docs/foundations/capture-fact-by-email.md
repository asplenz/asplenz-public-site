# Spécification — Capture de Facts via Email (Horizon v2)

## 1. Objectif

Permettre la **création, le scellement, le chaînage et la vérifiabilité cryptographique de facts** à partir d’emails, **sans intégration logicielle**, **sans interface décisionnelle**, et **sans logique métier**.

L’email est utilisé comme **vecteur de déclaration de faits**, jamais comme outil de validation, d’approbation ou de gouvernance.

---

## 2. Principes doctrinaux (non négociables)

* Horizon est **strictement append-only**
* Horizon **ne clôture jamais** un stream
* Horizon **ne définit aucun type de fact**
* Horizon **n’interprète jamais le contenu**
* Horizon **ne juge ni l’identité, ni la légitimité, ni la causalité**
* Horizon **scelle**, le client **interprète**

---

## 3. Portée

### Inclus

* Ingestion SMTP d’emails
* Création d’un Fact par email
* Scellement (`sealed_at_ms`)
* Chaînage déclaratif entre facts
* Gestion des pièces jointes
* Intégrité cryptographique
* Auditabilité complète

### Exclus

* Toute UI décisionnelle
* Toute logique d’approbation / refus
* Toute interprétation métier
* Toute visualisation (viewer)
* Toute validation de conformité

---

## 4. Adresse email Horizon

### Format

```
facts@<horizon-domain>
```

### Propriétés techniques

* SMTP sécurisé
* TLS obligatoire
* SPF / DKIM / DMARC validés
* Journalisation complète des headers
* Message source conservé (ou hashé) sans altération

---

## 5. Déclenchement

* **Chaque email reçu produit exactement un Fact**
* Aucun regroupement implicite
* Aucun rejet pour raison sémantique

---

## 6. Rattachement à un Stream

Chaque Fact **appartient obligatoirement à un `stream_id`**.

### Création du stream (premier email)

Lorsqu’un email **ne référence aucun Fact existant** :

* Horizon crée un nouveau `stream_id`
* Le `stream_id` est :

  * soit généré par Horizon,
  * soit dérivé du `Message-ID` initial (hashé / normalisé)

### Rattachement au stream existant

Un email est rattaché à un stream existant si :

* il référence un Fact Horizon via :

  * `In-Reply-To`
  * `References`
* ou s’il contient explicitement un `Fact ID` Horizon dans le corps

---

## 7. Contenu scellé du Fact

Les éléments suivants sont scellés **tels que reçus**, sans interprétation :

| Élément          | Rôle                        |
| ---------------- | --------------------------- |
| Headers SMTP     | Preuve de provenance        |
| From             | Acteur déclarant (opaque)   |
| To / CC          | Contexte                    |
| Subject          | Texte libre                 |
| Body (text/html) | Payload opaque              |
| Attachments      | Preuves jointes             |
| `sealed_at_ms`   | Temps Horizon (autoritatif) |

---

## 8. Temporalité

### `sealed_at_ms` (obligatoire)

* Assigné par Horizon
* Epoch milliseconds
* Seul timestamp **autoritatif et vérifiable**

### Temps déclarés par le client

* Placés exclusivement dans `custom_payload`
* Exemples : `submitted_at_ms`, `email_date`
* **Jamais interprétés par Horizon**

> **Règle canonique :**
> `sealed_at_ms` fonde la preuve.
> Tout autre temps est déclaratif.

---

## 9. Génération du Fact ID

### Propriétés

* Unique globalement
* Non prédictible
* Stable
* Généré par Horizon

### Exemple

```
fact_8f3a92c1e4b7
```

---

## 10. Réponse automatique Horizon (ACK)

### Déclenchement

Après scellement réussi du Fact.

### Email de réponse

**Sujet**

```
Fact sealed – ID: fact_8f3a92c1e4b7
```

**Corps**

```
Your email has been sealed as a Horizon fact.

Fact ID: fact_8f3a92c1e4b7
Sealed at (Horizon): 2026-01-27T14:12:09Z
Proof reference: https://horizon.company/records/fact_8f3a92c1e4b7

This message does not imply approval, validation, or authorization.
```

> L’email est **hors preuve**.
> Le format ISO est accepté ici uniquement.

---

## 11. Chaînage des Facts

### Principe

Le chaînage est **purement déclaratif**.

Horizon :

* ne déduit rien,
* ne valide rien,
* ne corrige rien.

---

### Méthodes reconnues

#### a) Reply email (prioritaire)

* `In-Reply-To`
* `References`

➡️ `parent_fact_id` = Fact Horizon référencé

#### b) Référence explicite dans le corps

Formats reconnus :

```
Parent-Fact-ID: fact_8f3a92c1e4b7
```

```
Ref: fact_8f3a92c1e4b7
```

---

### Règles strictes

* ❌ Aucun chaînage implicite
* ❌ Aucune inférence
* ❌ Aucun rejet sémantique

Si la référence est invalide :

* le Fact est scellé **sans parent**
* une notification hors preuve peut être émise
* **aucune annotation n’est ajoutée au Fact**

---

## 12. Branches et ordre

### Branches

* Plusieurs Facts peuvent partager le même parent
* Toutes les branches sont valides factuellement

### Ordre

Horizon garantit uniquement :

* l’ordre de scellement (`sealed_at_ms`)
* l’intégrité de la chaîne (`fact_hash`, `prev_hash`)

Horizon **n’impose aucune causalité**.

---

## 13. Pièces jointes

### Traitement

* Hash SHA-256
* Manifest scellé avec le Fact
* Stockage blob ou hash-only (configurable)

### Manifest

| Champ       | Exemple      |
| ----------- | ------------ |
| filename    | evidence.png |
| hash_sha256 | abc123…      |
| size        | 238 KB       |
| mime_type   | image/png    |

---

## 14. Identification de l’acteur

### Source

```
From: user@company.com
```

### Règles

* Acteur traité comme **opaque**
* DKIM/SPF peuvent être inclus comme preuve technique
* Horizon **ne juge pas l’identité**

---

## 15. Modèle de Fact — v2 (email)

```json
{
  "fact_id": "fact_8f3a92c1e4b7",
  "stream_id": "stream_a91c2e",
  "actor": "user@company.com",
  "sealed_at_ms": 1706361129000,
  "parent_fact_id": "fact_123abc",
  "custom_payload": {
    "subject": "Incident requalification",
    "body": "Incident is now major",
    "submitted_at_ms": 1706361120000,
    "email": {
      "headers_hash": "def456..."
    }
  },
  "attachments_manifest": [
    {
      "filename": "evidence.png",
      "hash_sha256": "abc123..."
    }
  ],
  "fact_hash": "hash_current",
  "prev_hash": "hash_previous"
}
```

---

## 16. Erreurs & incidents (hors preuve)

### Principes

* Aucun Fact n’est modifié
* Aucun Fact n’est rejeté pour raison métier
* Les incidents sont traités **en dehors de la preuve**

### Cas

| Situation                | Comportement               |
| ------------------------ | -------------------------- |
| Email illisible          | Bounce SMTP                |
| Parent invalide          | Fact scellé sans parent    |
| Pièce jointe trop lourde | Fact scellé, pièce rejetée |
| Spam suspect             | Fact scellé + signalement  |

---

## 17. Sécurité & conformité

### Garanties

* Append-only strict
* Hash chain par stream
* Intégrité vérifiable
* Séparation preuve / interprétation

### Protections

* Anti-spam
* Rate limiting
* Quotas par domaine
* Allowlist expéditeurs (optionnelle)

---

## 18. Bonnes pratiques (non contraignantes)

* 1 email = 1 fait
* Reply pour chaînage
* Sujet descriptif
* Expéditeurs limités
* Attachments pertinents uniquement

---

## 19. Résumé exécutif

> **Cette spécification définit un protocole append-only, passif et juridiquement défendable pour transformer un email en fact scellé, sans workflow, sans validation et sans interprétation.**

**Horizon scelle.
Le client interprète.**

---
