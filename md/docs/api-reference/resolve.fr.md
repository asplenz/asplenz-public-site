---
title: POST /v1/resolve
description: Endpoint verdict progressif - contexte tolérant, retourne required_context quand insuffisant.
locale: fr
kicker: Docs / API reference - Stable
---

`/v1/resolve` est le sibling tolérant de [`/v1/check`](/docs/api-reference/check). Il accepte du contexte partiel et retourne soit :

- **`complete`** - un verdict signé (`allowed` / `blocked` / `approval_required`).
- **`incomplete`** - un array `required_context` listant les champs encore nécessaires.

Le caller fetche, re-submit. Voir [Résolution progressive de contexte](/docs/concepts/progressive-context-resolution) pour l'algorithme.

## Requête

```
POST /tnt-acme/v1/resolve
X-API-Key: ak-live-...
X-Verdict-TTL: 60
Content-Type: application/json
```

**Body :**

```json
{
  "action": "structured_note.propose",
  "resource": "product-STRAT-2026-04",
  "scope": {
    "asset_class": "equity",
    "product_type": "structured_note"
  },
  "context": {
    "client.id": { "value": "cli-9f2c", "source": "crm" },
    "client.classification": { "value": "retail", "source": "crm" }
  },
  "on_behalf_of": "hum-marie"
}
```

- **`action`** / **`resource`** (required) - même sémantique que `/check`.
- **`scope`** (required) - le scope initial ; peut être élargi à mesure que le contexte arrive.
- **`context`** (required) - map de `field -> { value, source, ... }`. Chaque champ est validé contre le scope_schema à la réception.
- **`on_behalf_of`** (optionnel) - claim de délégation.

Chaque valeur de champ de contexte porte la provenance :

```json
{
  "value": "insufficient",
  "source": "crm",
  "verification_status": "verified",
  "as_of": "2026-08-14T09:00:00Z"
}
```

`source` fait partie de `context_hash` (bound dans l'enveloppe signée). Les fetchers devraient toujours le set.

## Réponse - incomplete

```json
{
  "operation_status": "incomplete",
  "required_context": [
    {
      "field": "client.knowledge_experience_level",
      "reason": "required by rul-sp-elig-complex-ke-gate",
      "type": "enum",
      "allowed_values": ["insufficient", "sufficient"]
    },
    {
      "field": "solicitation.type",
      "reason": "required by rul-sp-crossborder-solicited",
      "type": "enum",
      "allowed_values": ["solicited", "reverse_enquiry"]
    }
  ],
  "provisional_context": {
    "client.classification": "retail"
  }
}
```

`provisional_context` renvoie les champs que Knowledge a acceptés (utile pour détecter les typos de nom de champ côté client). Pas de champ `signed_verdict` sur les réponses `incomplete`.

## Réponse - complete

Même forme que la réponse complete de `/check`, plus :

```json
{
  "operation_status": "complete",
  "verdict": "approval_required",
  ...
  "required_context_history": [
    { "round": 1, "fields": ["client.classification", "solicitation.type"] },
    { "round": 2, "fields": ["client.knowledge_experience_level"] }
  ]
}
```

Le `required_context_history` enregistre combien de rounds ont été nécessaires. Utile pour l'observabilité (chaînes longues suggèrent des fetchers manquants).

## Erreurs

| Status | Code | Signification |
|---|---|---|
| 400 | `invalid_context_shape` | Un champ de contexte n'a pas `value` |
| 400 | `unknown_scope_field` | Un champ de scope n'est pas dans le `scope_schema` du tenant |
| 401 | `missing_credentials` | Voir [Authentication](/docs/api-reference/authentication) |
| 429 | `too_many_rounds` | Cap server-side sur les rounds par consultation atteint (défaut 12) ; probablement un fetcher registry qui ne populate jamais un champ required |

## Pattern fetcher

La boucle caller canonique :

```python
ctx = initial_context
for round_num in range(MAX_ROUNDS):
    resp = knowledge.resolve(action, resource, scope, ctx, on_behalf_of=user_id)
    if resp["operation_status"] == "complete":
        return resp
    for req in resp["required_context"]:
        ctx[req["field"]] = fetch_field(req["field"], ctx)
raise ContextResolutionTooManyRounds()
```

## Related

- [Résolution progressive de contexte](/docs/concepts/progressive-context-resolution) - l'algorithme + pattern fetcher.
- [/v1/check](/docs/api-reference/check) - sibling strict.
- [Bring your own tools to MCP proxy](/docs/guides/bring-your-own-tools-to-mcp-proxy) - pattern fetcher en production.
