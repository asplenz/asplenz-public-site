# Horizon — Configuration Specification

## 1. Principe

Horizon est **faiblement configurable par design**.
La configuration **n'influence jamais le sens des faits**, uniquement **la maniere technique dont la preuve est produite et operee**.

> **Configuration affects how proof is produced, never what it means.**

---

## 2. Perimetre de la configuration

### 2.1 Ce qui est configurable (autorise)

#### A. Capture & ingestion (technique)

* canaux actives : `api`, `email`, `ui_declaration`
* limites :
  * `max_payload_bytes` : taille max du `custom_payload`
  * `max_attachment_bytes` : taille max par piece jointe
* rate limiting / quotas par tenant
* idempotence (toujours activee en prod)

#### B. Canonicalisation & cryptographie

* algorithme de hash (ex. `sha256`)
* algorithme de signature (ex. `ed25519`)
* `key_id` actif (reference KMS/HSM)
* politique de rotation des cles

#### C. Bundling (checkpoint policy)

* strategie : `checkpoint`
* seuil : tous les `N` facts (`every_n_facts`)
* version de bundle (`bundle_v1`, `bundle_v2`)

> **Non configurable** : perimetre du bundle (toujours racine -> `head_hash`), choix des facts, ancrage.

#### D. Multi-tenant & isolation

* cles par tenant ou globales
* buckets d'object store par tenant
* politiques de retention (infra)

#### E. Adaptateurs (horizon-mail, horizon-ui)

Chaque adaptateur a sa propre configuration, independante du core.

##### Email (horizon-mail)

| Variable | Description | Defaut |
|----------|-------------|--------|
| `HORIZON_API_URL` | URL de l'API horizon-seal | `http://localhost:8080` |
| `HORIZON_API_KEY` | Cle d'authentification API | (vide) |
| `INGEST_SMTP_HOST` | Adresse d'ecoute SMTP | `0.0.0.0` |
| `INGEST_SMTP_PORT` | Port SMTP | `2525` |
| `TENANT_MAP` | Mapping domaine -> tenant_id | (vide) |
| `ALLOWED_DOMAINS` | Domaines autorises (whitelist) | (vide = tous) |
| `INGEST_MAX_ATTACHMENT_BYTES` | Taille max par piece jointe | `10485760` (10 MB) |
| `INGEST_ACK_FROM` | Adresse expediteur des ACK | `facts@horizon.company` |
| `INGEST_ACK_SMTP_HOST` | Serveur SMTP pour les ACK | (vide = desactive) |
| `INGEST_ACK_SMTP_PORT` | Port SMTP pour les ACK | `587` |
| `INGEST_LOG_LEVEL` | Niveau de log | `INFO` |

Format `TENANT_MAP` :

```
TENANT_MAP=company.com:acme-corp,partner.com:partner-tenant
```

Format `ALLOWED_DOMAINS` :

```
ALLOWED_DOMAINS=company.com,partner.com
```

Si `ALLOWED_DOMAINS` est vide, tous les domaines sont acceptes.

---

### 2.2 Ce qui n'est pas configurable (interdit)

* types de facts
* semantique des faits
* ordre causal
* cloture des streams
* regles metier (approval/execution)
* interpretation du `custom_payload`
* decisions de conformite/gouvernance

> **If it looks like business logic, it is not configurable in Horizon.**

---

## 3. Emplacement et gestion de la configuration

### 3.1 Source de verite : fichiers versionnes

La configuration est stockee comme **code d'infrastructure** dans des fichiers versionnes.

**Format normatif** : `.yaml` ou `.toml`

```
infra/
  env/
    dev.yaml
    staging.yaml
    prod.yaml
  bundling.yaml
  crypto.yaml
  limits.yaml
```

**Pourquoi des fichiers plutot que des variables d'environnement** :

* Versionnables dans Git avec historique complet
* Revue par PR avant deploiement
* Reproductibilite : un commit = une configuration exacte
* Auditabilite : qui a change quoi, quand
* Pour un produit qui parle de preuve et de tracabilite, la config doit etre tracable aussi

### 3.2 Injection au runtime

Les fichiers de configuration sont injectes au runtime via :

* variables d'environnement (override ponctuel), ou
* fichiers montes en lecture seule (ConfigMap / volume)

Les variables d'environnement sont un **mecanisme d'injection**, pas la source de verite.

### 3.3 Immutabilite au runtime

* Configuration **immutable au runtime**
* Changements **uniquement par deploiement**
* Aucune API de mutation de la configuration

### 3.4 Secrets

* Cles privees **hors config** :
  * KMS / HSM / Vault
* Les fichiers `.yaml/.toml` **ne contiennent jamais de secrets**

---

## 4. Gouvernance et audit

* La configuration est :
  * versionnee (Git),
  * revue (PR),
  * tracable (commit hash).

---

## 5. Exemple minimal de configuration

```yaml
bundling:
  strategy: checkpoint
  every_n_facts: 10

crypto:
  hash_alg: sha256
  signature_alg: ed25519
  key_id: hzn-key-prod-01

limits:
  max_payload_bytes: 32768
  max_attachment_bytes: 10485760
```

---

## 6. Invariants (normatifs)

* La configuration **ne modifie jamais** la signification des faits.
* La configuration **ne vit pas** dans la base de preuve.
* Les changements de configuration sont **deployes**, pas mutes.
* La preuve reste verifiable independamment de la configuration courante.

---

## Doctrine

> Horizon configuration is infrastructure code.
> It is versioned, immutable at runtime, and never stored in the evidence database.
