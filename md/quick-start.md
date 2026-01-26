# Quickstart — Seal a Fact in 5 Minutes

**Audience:** CTO · Staff Engineer · SRE

---

## One Endpoint

```
POST /v2/streams/{stream_id}/facts
Content-Type: application/json

```

A stream is identified by `stream_id`. If the stream does not exist, Horizon creates it implicitly when the first fact is sealed.

## One Request

```json
{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  }
}

```

In production deployments, `tenant_id` is typically derived from authentication context rather than provided in the payload.

## One Response

```json
{
  "fact_id": "fact-01HRX7G2NB",
  "stream_id": "stream-034",
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "sealed_at_ms": 1706284801000,
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  },
  "fact_hash": "a1b2c3d4e5f6...",
  "prev_hash": "9f8e7d6c5b4a...",
  "parent_fact_id": "fact-01HRX7F1MA"
}

```

---

## What Happened

1. Horizon assigned `sealed_at_ms` (authoritative timestamp)
2. Horizon computed `fact_hash` from a deterministic representation of the fact
3. Horizon chained to previous fact via `prev_hash`
4. Horizon stored the fact (append-only)

Horizon did not interpret `custom_payload`. That's your data.

---

## Idempotency

Add `client_ref` to make the request idempotent:

```json
{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "client_ref": "incident-2024-01-26-stop-001",
  "custom_payload": { ... }
}

```

Same `client_ref` → same fact returned. No duplicate sealing.

---

## Storage Guarantees

| Property | Guarantee |
| --- | --- |
| Append-only | Facts cannot be modified or deleted |
| Hash chain | Each fact links to previous via `prev_hash` |
| Tamper detection | Recompute hashes to detect modification |
| Tenant isolation | Facts scoped by `tenant_id` |
| Proof authority | `sealed_at_ms` assigned by Horizon |

---

## What Horizon Does Not Do

* **No interpretation** — `custom_payload` is opaque
* **No workflow** — No states, no transitions, no approvals
* **No validation** — Your payload, your schema
* **No business logic** — Seal facts, nothing else

---

## Verify Chain Integrity

```
POST /v2/streams/{stream_id}/verify

```

Returns `{ "valid": true }` if hash chain is intact.

Verification recomputes hashes and signatures. It does not interpret facts or assert correctness.

---

---

# Guide de démarrage rapide — Sceller un fait en 5 minutes

**Audience :** CTO · Staff Engineer · SRE

---

## Un seul point de terminaison (Endpoint)

```
POST /v2/streams/{stream_id}/facts
Content-Type: application/json

```

Un flux est identifié par `stream_id`. Si le flux n'existe pas, Horizon le crée implicitement lors du scellement du premier fait.

## Une seule requête

```json
{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  }
}

```

Dans les déploiements en production, le `tenant_id` est généralement dérivé du contexte d'authentification plutôt que fourni dans la charge utile.

## Une seule réponse

```json
{
  "fact_id": "fact-01HRX7G2NB",
  "stream_id": "stream-034",
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "sealed_at_ms": 1706284801000,
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  },
  "fact_hash": "a1b2c3d4e5f6...",
  "prev_hash": "9f8e7d6c5b4a...",
  "parent_fact_id": "fact-01HRX7F1MA"
}

```

---

## Ce qu'il s'est passé

1. Horizon a attribué `sealed_at_ms` (horodatage faisant autorité)
2. Horizon a calculé `fact_hash` à partir d'une représentation déterministe du fait
3. Horizon a lié le fait au précédent via `prev_hash`
4. Horizon a stocké le fait (en ajout uniquement / append-only)

Horizon n'a pas interprété `custom_payload`. Ce sont vos données.

---

## Idempotence

Ajoutez `client_ref` pour rendre la requête idempotente :

```json
{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "client_ref": "incident-2024-01-26-stop-001",
  "custom_payload": { ... }
}

```

Même `client_ref` → même fait retourné. Pas de double scellement.

---

## Garanties de stockage

| Propriété | Garantie |
| --- | --- |
| Ajout uniquement (Append-only) | Les faits ne peuvent être ni modifiés ni supprimés |
| Chaîne de hachage | Chaque fait est lié au précédent via `prev_hash` |
| Détection d'altération | Recalcul des hachages pour détecter toute modification |
| Isolation des tenants | Les faits sont cloisonnés par `tenant_id` |
| Autorité de preuve | `sealed_at_ms` est attribué par Horizon |

---

## Ce qu'Horizon ne fait pas

* **Aucune interprétation** — `custom_payload` est opaque
* **Aucun workflow** — Pas d'états, pas de transitions, pas d'approbations
* **Aucune validation** — Votre charge utile, votre schéma
* **Aucune logique métier** — Scelle les faits, rien d'autre

---

## Vérifier l'intégrité de la chaîne

```
POST /v2/streams/{stream_id}/verify

```

Retourne `{ "valid": true }` si la chaîne de hachage est intacte.

La vérification recalcule les hachages et les signatures. Elle n'interprète pas les faits et ne se prononce pas sur leur exactitude.
