# Specification — Proof Bundles (Horizon v2)

## 1. Objet

Definir le systeme de Proof Bundles : snapshots signes d'un stream a un instant donne, transportables et verificables independamment.

---

## 2. Principes doctrinaux

* Un bundle est un **snapshot signe**, pas une cloture.
* Le stream **reste ouvert** apres creation d'un bundle — il peut toujours recevoir de nouveaux facts.
* Un bundle **ne modifie jamais** les facts qu'il reference.
* Un bundle est **verificable independamment** de l'instance Horizon qui l'a produit.
* Horizon **ne decide pas** quand un bundle est "suffisant" — c'est une politique operationnelle.

> **Un bundle prouve l'etat d'un stream a un instant. Il ne le fige pas.**

---

## 3. Contenu d'un bundle

Un Proof Bundle contient :

| Champ | Type | Description |
|-------|------|-------------|
| `bundle_id` | TEXT | Identifiant unique (`bundle-{uuid}`) |
| `stream_id` | TEXT | Stream capture |
| `tenant_id` | TEXT | Tenant proprietaire |
| `bundle_version` | INTEGER | Version incrementale par stream (>= 1) |
| `head_fact_id` | TEXT | Dernier fact inclus |
| `head_hash` | TEXT (64 chars) | Hash du head fact au moment du snapshot |
| `facts_manifest` | LIST[TEXT] | Liste ordonnee des `fact_id` inclus |
| `attachments_manifest` | LIST[AttachmentRef] | Toutes les pieces jointes referencees |
| `created_at_ms` | INTEGER | Timestamp de creation (epoch ms) |
| `signature` | TEXT | Signature Ed25519 (base64) |
| `signature_alg` | TEXT | Algorithme (`ed25519`) |
| `key_id` | TEXT | Identifiant de la cle de signature |

### Ce qu'un bundle contient

* **Manifest** : liste des `fact_id` inclus (references, pas contenu inline)
* **Attachments** : manifest agrege de toutes les pieces jointes
* **Snapshot point** : `head_fact_id` + `head_hash` — point de coupure

### Ce qu'un bundle ne contient PAS

* Le contenu des facts (pas de duplication)
* Les cles privees
* Les facts futurs (post-snapshot)

---

## 4. Signature

### Algorithme

Ed25519 — signature deterministe, rapide, audit-grade.

### Processus de signature

```
1. Construire le payload (tous les champs sauf signature)
2. Serialiser en canonical JSON (cles triees, pas d'espaces, UTF-8)
3. Signer avec Ed25519 (cle privee)
4. Encoder la signature en base64
```

### Payload signe

```json
{
  "bundle_id": "bundle-...",
  "stream_id": "stream-...",
  "tenant_id": "acme-corp",
  "bundle_version": 1,
  "head_fact_id": "fact-...",
  "head_hash": "64chars...",
  "facts_manifest": ["fact-1", "fact-2", "fact-3"],
  "attachments_manifest": [...],
  "created_at_ms": 1706361129000
}
```

Le canonical JSON garantit que le meme payload produit toujours la meme signature.

### Gestion des cles

| Variable | Description |
|----------|-------------|
| `HORIZON_PRIVATE_KEY_PEM` | Cle privee Ed25519 (PEM) |
| `HORIZON_PUBLIC_KEY_PEM` | Cle publique Ed25519 (PEM) |
| `HORIZON_KEY_ID` | Identifiant de la cle (defaut: `horizon-default-key`) |

---

## 5. Versionnement

* Chaque stream a sa propre sequence de versions.
* La premiere version est `1`.
* Chaque nouveau bundle incremente la version de `+1`.
* Contrainte d'unicite : `UNIQUE (stream_id, bundle_version)`.
* Un bundle de version N **inclut tous les facts** du stream au moment de sa creation (racine -> head).

---

## 6. Declenchement

### 6.1 On-demand (API)

```
POST /v2/bundles
{
  "stream_id": "stream-..."
}
```

Le client decide quand creer un bundle. Aucune contrainte.

### 6.2 Automatique (every_n_facts)

#### Principe

Apres chaque scellement de fact, Horizon verifie si le nombre de facts non bundled atteint le seuil configure. Si oui, un bundle est cree automatiquement.

#### Configuration

```
SEAL_BUNDLE_EVERY_N_FACTS=10
```

* `0` ou absent = desactive (defaut)
* `N > 0` = bundle automatique tous les N facts non bundled

#### Logique

```
total_facts = nombre de facts dans le stream
bundled_facts = nombre de facts dans le dernier bundle (ou 0)
unbundled = total_facts - bundled_facts

si unbundled >= threshold:
    creer un bundle automatiquement
```

#### Proprietes

* Le bundle automatique est **identique** a un bundle on-demand — meme format, meme signature.
* Le declenchement est **synchrone** (dans la meme transaction que le seal).
* Si la creation du bundle echoue (ex: cle manquante), le fact est quand meme scelle — l'erreur est loguee mais ne bloque pas l'ingestion.
* Le seuil est **global** (meme valeur pour tous les streams).

---

## 7. Verification

### 7.1 Verification de la signature d'un bundle

```
1. Reconstruire le payload signe (tous les champs sauf signature)
2. Serialiser en canonical JSON
3. Decoder la signature (base64)
4. Verifier avec la cle publique Ed25519
```

Si la verification echoue : le bundle a ete altere.

### 7.2 Verification de la chaine d'un stream

```
POST /v2/streams/{stream_id}/verify
```

Verifie l'integrite de la hash chain (fact_hash / prev_hash) independamment des bundles.

---

## 8. API

### 8.1 Creer un bundle

```
POST /v2/bundles
```

**Request**

```json
{
  "stream_id": "stream-...",
  "bundle_id": "bundle-custom-id"
}
```

`bundle_id` est optionnel (genere automatiquement si absent).

**Response** `200`

```json
{
  "bundle_id": "bundle-...",
  "stream_id": "stream-...",
  "tenant_id": "acme-corp",
  "bundle_version": 1,
  "head_fact_id": "fact-...",
  "head_hash": "64chars...",
  "facts_manifest": ["fact-1", "fact-2"],
  "attachments_manifest": [],
  "created_at_ms": 1706361129000,
  "signature": "base64...",
  "signature_alg": "ed25519",
  "key_id": "horizon-default-key"
}
```

### 8.2 Recuperer un bundle

```
GET /v2/bundles/{bundle_id}
```

### 8.3 Lister les bundles d'un stream

```
GET /v2/streams/{stream_id}/bundles?limit=100&offset=0
```

### 8.4 Verifier la chaine d'un stream

```
POST /v2/streams/{stream_id}/verify
```

**Response**

```json
{
  "valid": true,
  "facts_verified": 42
}
```

---

## 9. Schema DB

```sql
CREATE TABLE IF NOT EXISTS proof_bundles (
    bundle_id TEXT NOT NULL PRIMARY KEY,
    stream_id TEXT NOT NULL,
    tenant_id TEXT NOT NULL,

    bundle_version INTEGER NOT NULL,

    head_fact_id TEXT NOT NULL,
    head_hash TEXT NOT NULL,

    facts_manifest_json TEXT NOT NULL,
    attachments_manifest_json TEXT NOT NULL DEFAULT '[]',

    created_at_ms INTEGER NOT NULL,

    signature TEXT NOT NULL,
    signature_alg TEXT NOT NULL DEFAULT 'ed25519',
    key_id TEXT NOT NULL,

    CHECK (bundle_version >= 1),
    CHECK (created_at_ms > 1577836800000),
    CHECK (created_at_ms < 4102444800000),
    CHECK (length(head_hash) = 64),

    FOREIGN KEY (stream_id) REFERENCES streams(stream_id),
    FOREIGN KEY (head_fact_id) REFERENCES facts(fact_id),

    UNIQUE (stream_id, bundle_version)
);
```

---

## 10. Invariants (normatifs)

* Un bundle **ne modifie jamais** les facts qu'il reference.
* Un bundle **ne ferme jamais** un stream.
* Un bundle **inclut toujours** tous les facts du stream (racine -> head) au moment de sa creation.
* La signature **couvre** tous les champs du bundle sauf la signature elle-meme.
* Le canonical JSON est **deterministe** : meme payload = meme signature.
* Le `bundle_version` est **strictement croissant** par stream.
* Un bundle **sans facts** est interdit (`facts_manifest` non vide).
* Le declenchement automatique **ne bloque jamais** le scellement d'un fact.

---

## Doctrine

> **A bundle proves what existed. It does not decide what matters.**
>
> **Horizon scelle. Le client interprete.**
