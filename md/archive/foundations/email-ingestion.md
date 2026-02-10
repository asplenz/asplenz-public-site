# Spécification — Architecture du module d'ingestion Email (Horizon v2)

## 1. Objet

Définir l'architecture complète du module d'ingestion email de Horizon :

* la capture de facts via email,
* la gestion des pièces jointes,
* les métadonnées de provenance,
* l'architecture de déploiement,
* les garanties probantes.

---

## 2. Principes doctrinaux (non négociables)

* Horizon est **strictement append-only**
* Horizon **ne clôture jamais** un stream
* Horizon **ne définit aucun type de fact**
* Horizon **n'interprète jamais le contenu**
* Horizon **ne juge ni l'identité, ni la légitimité, ni la causalité**
* Horizon **scelle**, le client **interprète**

> **Dans Horizon, la preuve porte sur l'existence d'un artefact à un instant donné,
> pas sur sa signification, son interprétation ou sa qualité.**

---

## 3. Portée

### Inclus

* Ingestion SMTP d'emails
* Création d'un Fact par email
* Scellement (`sealed_at_ms`)
* Chaînage déclaratif entre facts
* Gestion des pièces jointes (hash + manifest)
* Métadonnées de provenance email
* Intégrité cryptographique
* Auditabilité complète

### Exclus

* Toute UI décisionnelle
* Toute logique d'approbation / refus
* Toute interprétation métier
* Toute visualisation (viewer)
* Toute validation de conformité
* Stockage physique des pièces jointes (hash-only)

---

## 4. Architecture — Service séparé (adapter pattern)

### Principe

Le module email est un **adaptateur**, pas du core Horizon. `horizon-mail` est un client Horizon qui appelle l'API exactement comme n'importe quel autre client. Horizon ne sait pas (et ne doit pas savoir) que le fact vient d'un email.

```
┌─────────────┐       ┌──────────────────┐
│  Email SMTP │──────▶│  horizon-mail  │
└─────────────┘       │  (adaptateur)    │
                      └────────┬─────────┘
                               │ POST /v2/facts
                               ▼
                      ┌──────────────────┐
                      │  horizon-seal     │
                      │  (core)          │
                      └──────────────────┘
```

### Justification

| Critère | Intégré dans horizon-seal | Service séparé (retenu) |
|---------|--------------------------|--------------------------|
| Doctrine | Mélange adapter + core | Horizon reste pur |
| Déploiement | SMTP dans le même pod | Scalable indépendamment |
| Sécurité | Surface SMTP dans le core | Isolation réseau SMTP |
| Dépendances | aiosmtpd dans le core | Dépendances isolées |
| Tests | Tests SMTP dans la CI core | CI séparée |
| Failure mode | Crash SMTP = crash API | Crash SMTP ≠ crash API |
| Réutilisabilité | Aucune | Patron réutilisable (Slack, webhook, etc.) |

### Structure

```
horizon-mail/
├── src/
│   ├── main.py                  # aiosmtpd server entry point
│   ├── config.py                # HORIZON_API_URL, HORIZON_API_KEY, etc.
│   ├── smtp_handler.py          # SMTP handler → parse email
│   ├── email_parser.py          # Email → SealFactRequest mapping
│   ├── horizon_client.py        # HTTP client → POST /v2/facts
│   ├── ack_sender.py            # SMTP reply → "Fact sealed – ID: ..."
│   └── tenant_resolver.py       # From domain → tenant_id mapping
├── Dockerfile
├── requirements.txt
└── tests/
```

### Ce que horizon-mail NE fait PAS

* N'accède pas à la DB Horizon
* Ne calcule pas de hash chain
* Ne signe pas de bundles
* N'interprète pas le contenu
* Ne valide pas l'identité

Il transforme un email en appel API. Rien de plus.

---

## 5. Adresse email Horizon

### Format

```
facts@<horizon-domain>
```

### Propriétés techniques

* SMTP sécurisé
* TLS obligatoire
* SPF / DKIM / DMARC validés
* Journalisation complète des headers
* Message source hashé sans altération

---

## 6. Déclenchement

* **Chaque email reçu produit exactement un Fact**
* Aucun regroupement implicite
* Aucun rejet pour raison sémantique

---

## 7. Flux d'exécution

```
1. Email reçu (SMTP)
2. smtp_handler.py → parse MIME
3. email_parser.py → construit le request body
   - actor = From header (adresse email)
   - stream_id = résolu depuis In-Reply-To / Message-ID
   - parent_fact_id = résolu depuis In-Reply-To ou body markers
   - custom_payload = { source, subject, body, email: { provenance } }
   - attachments = manifest SHA-256 des pièces jointes
4. tenant_resolver.py → domaine expéditeur → tenant_id
5. horizon_client.py → POST /v2/facts
6. Horizon scelle le fact (sealed_at_ms, fact_hash, prev_hash)
7. ack_sender.py → email de réponse avec fact_id
```

---

## 8. Rattachement à un Stream

Chaque Fact **appartient obligatoirement à un `stream_id`**.

### Création du stream (premier email)

Lorsqu'un email **ne référence aucun Fact existant** :

* `horizon-mail` génère un `stream_id` dérivé du `Message-ID` (hashé, préfixé `stream-mail-`)
* Le stream est créé implicitement par Horizon lors du premier fact

### Rattachement au stream existant

Un email est rattaché à un stream existant si :

* il référence un Fact Horizon via :
  * `In-Reply-To`
  * `References`
* ou s'il contient explicitement un Fact ID Horizon dans le corps

---

## 9. Contenu scellé du Fact

Les éléments suivants sont scellés **tels que reçus**, sans interprétation :

| Élément          | Rôle                        |
| ---------------- | --------------------------- |
| Headers SMTP     | Preuve de provenance        |
| From             | Acteur déclarant (opaque)   |
| To / CC          | Contexte                    |
| Subject          | Texte libre                 |
| Body (text/html) | Payload opaque              |
| Attachments      | Manifest scellé             |
| `sealed_at_ms`   | Temps Horizon (autoritatif) |

---

## 10. Métadonnées de provenance (contestabilité)

Pour garantir la **contestabilité** et l'**auditabilité** en cas de litige, `horizon-mail` enrichit le `custom_payload` avec les métadonnées de provenance email.

### Champs de provenance

```json
{
  "source": "email",
  "subject": "Incident requalification",
  "body": "Incident is now major",
  "email": {
    "headers_hash": "sha256_des_headers_bruts",
    "message_id": "<msg-001@company.com>",
    "from": "John Doe <john@company.com>",
    "to": "facts@horizon.company",
    "cc": "manager@company.com",
    "date": "Tue, 27 Jan 2026 14:00:00 +0000",
    "authentication_results": "dkim=pass; spf=pass",
    "dkim_signature": "v=1; a=rsa-sha256; d=company.com",
    "received_chain_hash": "sha256_de_la_chaine_received"
  }
}
```

### Détail des champs

| Champ | Description | Valeur probante |
|-------|-------------|-----------------|
| `source` | Type de source (`"email"`) | Identification du canal |
| `headers_hash` | SHA-256 des headers SMTP bruts | Preuve d'intégrité des headers |
| `message_id` | Message-ID SMTP | Identifiant unique du message |
| `from` | Header From complet | Acteur déclaré (avec display name) |
| `to` / `cc` | Destinataires | Contexte de diffusion |
| `date` | Date déclarée par le client email | Déclaratif uniquement |
| `authentication_results` | DKIM / SPF / DMARC | Authentification technique |
| `dkim_signature` | Signature DKIM | Preuve cryptographique d'origine |
| `received_chain_hash` | SHA-256 de la chaîne Received | Traçabilité du routage |

> **Note** : Ces métadonnées sont dans `custom_payload` — Horizon les scelle sans les interpréter. C'est `horizon-mail` (l'adaptateur) qui les structure.

---

## 11. Temporalité

### `sealed_at_ms` (obligatoire)

* Assigné par Horizon
* Epoch milliseconds
* Seul timestamp **autoritatif et vérifiable**

### Temps déclarés par le client

* Placés exclusivement dans `custom_payload`
* Exemples : `email.date`
* **Jamais interprétés par Horizon**

> **Règle canonique :**
> `sealed_at_ms` fonde la preuve.
> Tout autre temps est déclaratif.

---

## 12. Identification de l'acteur

### Source

```
From: user@company.com
```

### Règles

* Acteur traité comme **opaque** (adresse email extraite)
* DKIM/SPF inclus dans `custom_payload.email` comme preuve technique
* Horizon **ne juge pas l'identité**

---

## 13. Chaînage des Facts

### Principe

Le chaînage est **purement déclaratif**.

Horizon :

* ne déduit rien,
* ne valide rien,
* ne corrige rien.

### Méthodes reconnues

#### a) Reply email (prioritaire)

* `In-Reply-To` contenant un fact_id Horizon
* `References`

→ `parent_fact_id` = Fact Horizon référencé

#### b) Référence explicite dans le corps

Formats reconnus :

```
Parent-Fact-ID: fact_8f3a92c1e4b7
```

```
Ref: fact_8f3a92c1e4b7
```

### Règles strictes

* Aucun chaînage implicite
* Aucune inférence
* Aucun rejet sémantique
* `In-Reply-To` a priorité sur les marqueurs du corps

Si la référence est invalide :

* le Fact est scellé **sans parent**
* une notification hors preuve peut être émise
* **aucune annotation n'est ajoutée au Fact**

### Branches et ordre

* Plusieurs Facts peuvent partager le même parent
* Toutes les branches sont valides factuellement
* Horizon garantit uniquement l'ordre de scellement (`sealed_at_ms`) et l'intégrité de la chaîne (`fact_hash`, `prev_hash`)
* Horizon **n'impose aucune causalité**

---

## 14. Gestion des pièces jointes par email

### 14.1 Principe fondamental

Les pièces jointes sont des **artefacts rattachés à un fact scellé**.
Elles ne constituent jamais la preuve primaire.

### 14.2 Réception

Lorsqu'un email contenant une ou plusieurs pièces jointes est reçu :

1. `horizon-mail` reçoit **physiquement** l'email complet (headers, body, attachments).
2. Chaque pièce jointe est extraite **sans modification**.
3. Aucune analyse sémantique n'est effectuée.

### 14.3 Calcul et normalisation

Pour chaque pièce jointe reçue, `horizon-mail` calcule immédiatement :

* `sha256` : empreinte binaire exacte (octet par octet)
* `size_bytes` : taille du fichier
* `content_type` : type MIME déclaré (non interprété)
* `filename` : nom tel que reçu

Aucune transformation n'est appliquée :

* pas de normalisation,
* pas de ré-encodage,
* pas d'ouverture du fichier.

### 14.4 Attachment Manifest (obligatoire)

Horizon maintient un champ structuré `attachments_manifest` sur chaque Fact.

#### Format canonique

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

> **Note architecturale** : `attachments_manifest` est un champ structuré du Fact (pas dans `custom_payload`). C'est de la métadonnée d'intégrité, pas du contenu métier. Horizon "sait" qu'un artefact existe et peut vérifier son intégrité, sans interpréter son contenu.

### 14.5 Scellement et temporalité

* Le fact est scellé avec un `sealed_at_ms` assigné par Horizon.
* Le hash de la pièce jointe est figé à cet instant.
* **La preuve est acquise dès le scellement**, indépendamment de la politique de stockage.

### 14.6 Politique de stockage

La politique de stockage est **globale au déploiement**, jamais par fact.
Elle n'apparaît pas dans le manifest scellé.

#### Politique A — Stored (option)

* Le fichier est stocké dans un object storage externe.
* Le stockage est hors base de données.
* Le fichier peut être restitué.
* Son intégrité est vérifiable à tout moment par recomputation du hash.

#### Politique B — Hashed-only (retenue par défaut)

* Le fichier est reçu, hashé, puis supprimé.
* Horizon ne conserve **que** le manifest scellé.
* Horizon prouve qu'**un fichier précis a existé** à l'instant T.
* Horizon ne permet **pas** la relecture du contenu.
* Toute tentative de substitution ultérieure est détectable.

### 14.7 Valeur probante exacte du hash

Le hash permet d'établir que :

* un fichier **a existé**,
* il était **rattaché à un fact précis**,
* il **ne peut pas être substitué** a posteriori sans détection.

Le hash **ne permet pas** :

* de reconstruire le fichier,
* de prouver son sens,
* de prouver sa validité ou sa pertinence.

### 14.8 Cas des fichiers texte

Un fichier texte est traité comme un fichier binaire.

Conséquences :

* un caractère différent produit un hash différent,
* un encodage différent produit un hash différent,
* un simple "Save As" peut changer le hash.

**Seule une copie binaire stricte préservera le hash.**

### 14.9 Cas limites

#### Pièce jointe trop volumineuse

* Le fact est scellé.
* La pièce est rejetée.
* Le manifest n'inclut pas la pièce rejetée.

#### Pièce jointe corrompue

* Même comportement.
* Aucune modification du fact.

Ces événements sont traités **hors preuve**.

### 14.10 Ce que Horizon ne fera jamais

* Lire ou interpréter le contenu
* Qualifier la valeur du document
* Vérifier la conformité du fichier
* Empêcher l'envoi d'une pièce jointe
* Décider si la pièce est "suffisante"

---

## 15. Modèle de Fact — v2 (email complet)

```json
{
  "fact_id": "fact_8f3a92c1e4b7",
  "stream_id": "stream-mail-a91c2e",
  "tenant_id": "acme-corp",
  "actor": "user@company.com",
  "sealed_at_ms": 1706361129000,
  "parent_fact_id": "fact_123abc",
  "custom_payload": {
    "source": "email",
    "subject": "Incident requalification",
    "body": "Incident is now major",
    "email": {
      "headers_hash": "def456...",
      "message_id": "<msg-001@company.com>",
      "from": "John Doe <user@company.com>",
      "to": "facts@horizon.company",
      "cc": "manager@company.com",
      "date": "Tue, 27 Jan 2026 14:12:09 +0000",
      "authentication_results": "dkim=pass; spf=pass",
      "dkim_signature": "v=1; a=rsa-sha256; d=company.com",
      "received_chain_hash": "abc789..."
    }
  },
  "attachments_manifest": [
    {
      "filename": "evidence.png",
      "sha256": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
      "size_bytes": 48213,
      "content_type": "image/png"
    }
  ],
  "fact_hash": "hash_current_64chars...",
  "prev_hash": "hash_previous_64chars..."
}
```

---

## 16. Mapping tenant_id

### Configuration

```
TENANT_MAP=company.com:acme-corp,partner.com:partner-tenant
```

### Règles

* Le domaine expéditeur est extrait du header `From`
* Le mapping est case-insensitive
* Si le domaine n'est pas mappé, le domaine lui-même est utilisé comme `tenant_id`
* La liste des domaines autorisés est configurable via `ALLOWED_DOMAINS`

---

## 17. Réponse automatique Horizon (ACK)

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

> L'email de réponse est **hors preuve**.
> Le format ISO est accepté ici uniquement.

---

## 18. Audit ultérieur — scénario canonique

### Vérification d'un fact

1. Un auditeur consulte le fact par son `fact_id`.
2. Horizon retourne le fact complet, incluant `sealed_at_ms`, `fact_hash`, `prev_hash`.
3. L'intégrité de la chaîne est vérifiable via `POST /v2/streams/{stream_id}/verify`.

### Vérification d'une pièce jointe

1. Un auditeur demande : *"Quel fichier était joint à ce fact ?"*
2. Horizon prouve qu'un fichier de hash `H` existait à `sealed_at_ms`.
3. L'organisation doit fournir un fichier dont le hash correspond à `H`.
4. Si le hash diffère : ce n'est pas le même fichier, la substitution est détectée.

---

## 19. Erreurs & incidents (hors preuve)

### Principes

* Aucun Fact n'est modifié
* Aucun Fact n'est rejeté pour raison métier
* Les incidents sont traités **en dehors de la preuve**

### Cas

| Situation                | Comportement               |
| ------------------------ | -------------------------- |
| Email illisible          | Bounce SMTP                |
| Parent invalide          | Fact scellé sans parent    |
| Pièce jointe trop lourde | Fact scellé, pièce rejetée |
| Spam suspect             | Fact scellé + signalement  |
| Domaine non autorisé     | Email rejeté (SMTP)        |

---

## 20. Sécurité & conformité

### Garanties

* Append-only strict
* Hash chain par stream
* Intégrité vérifiable
* Séparation preuve / interprétation

### Protections

* Anti-spam
* Rate limiting
* Quotas par domaine
* Allowlist expéditeurs (`ALLOWED_DOMAINS`)
* TLS obligatoire
* Validation DKIM/SPF/DMARC

---

## 21. Déploiement

### Docker Compose

```yaml
horizon-mail:
  build: ./horizon-mail
  ports:
    - "2525:2525"
  environment:
    - HORIZON_API_URL=http://horizon-seal:8080
    - HORIZON_API_KEY=${SEAL_API_KEY}
    - INGEST_SMTP_PORT=2525
    - INGEST_ALLOWED_DOMAINS=company.com
    - TENANT_MAP=company.com:acme-corp
  depends_on:
    - horizon-seal
  profiles:
    - mail
```

### Production

* `horizon-mail` est déployable indépendamment
* Peut être répliqué horizontalement
* Le crash de `horizon-mail` n'affecte pas `horizon-seal`
* Le patron est réutilisable pour d'autres sources (Slack, webhook, etc.)

---

## 22. Résumé exécutif

| Aspect | Décision |
| ------ | -------- |
| Architecture | Service séparé (adapter pattern) |
| Réception email | Toujours |
| Hash calculé | Toujours |
| Manifest scellé | Toujours (champ structuré) |
| Provenance email | Scellée dans custom_payload |
| Stockage fichier | Hash-only (configurable) |
| Preuve d'existence | Toujours |
| Preuve de contenu | Seulement si stocké |
| Accès DB Horizon | Jamais (appel API uniquement) |

---

## 23. Doctrine

> **Horizon does not preserve documents to prove their meaning.
> It preserves cryptographic evidence that a specific artefact existed at a specific time and cannot be silently replaced later.**

> **Horizon scelle. Le client interprète.**
