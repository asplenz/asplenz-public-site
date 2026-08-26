---
title: POST /v1/check
description: Endpoint verdict déterministe - contexte strict, pas de boucle required_context.
locale: fr
kicker: Docs / API reference - Stable
---

`/v1/check` produit un verdict déterministe à partir d'un contexte entièrement shaped. À utiliser quand le caller connaît la forme exacte de l'input à l'avance (OMS, claims platform, PEP custom derrière un contrat fixe).

Pour les callers agent-shaped qui assemblent le contexte à la volée, utilisez [`/v1/resolve`](/docs/api-reference/resolve).

## Requête

```
POST /tnt-acme/v1/check
X-API-Key: ak-live-...
X-Verdict-TTL: 60        (optionnel, secondes ; défaut : config tenant)
Content-Type: application/json
```

**Body :**

```json
{
  "action": "refund.execute",
  "resource": "TX-456",
  "scope": {
    "product_type": "customer_refund",
    "channel": "in_app"
  },
  "parameters": {
    "amount_eur": 40,
    "reason": "duplicate_charge"
  },
  "on_behalf_of": "hum-marie"
}
```

- **`action`** (required) - l'opération décidée.
- **`resource`** (required) - la ressource sur laquelle on agit.
- **`scope`** (required) - un dict validé contre le `scope_schema` du tenant. Chaque champ doit être reconnu.
- **`parameters`** (optionnel) - les paramètres de l'opération ; chaque champ fera partie des bindings signés.
- **`on_behalf_of`** (optionnel) - le principal humain pour le compte duquel l'agent appelle.

## Réponse - allowed / blocked / approval_required

```json
{
  "operation_status": "complete",
  "verdict": "allowed",
  "cited_rule_ids": ["rul-refund-under-100"],
  "cited_rule_version_ids": ["rv-abc"],
  "dominating_rule_id": "rul-refund-under-100",
  "precedence_trace": [
    { "rule_id": "rul-refund-under-100", "rule_version_id": "rv-abc",
      "severity": "allow", "scope_match": "exact", "reason": "fires" }
  ],
  "resolved_target_ids": ["tgt-agents-refund-team"],
  "consultation_id": "cns-abc123",
  "signed_verdict": "eyJhbGciOiJFUzI1NiIsInR5cCI6ImdvdmVybmVkK2p3cyIsImtpZCI6...",
  "context_hash": "sha256:9f2c..."
}
```

Le `signed_verdict` est un JWS compact. Voir [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) pour le layout d'enveloppe.

## Réponse - blocked

```json
{
  "operation_status": "complete",
  "verdict": "blocked",
  "cited_rule_ids": ["rul-refund-over-1000"],
  "dominating_rule_id": "rul-refund-over-1000",
  "signed_verdict": "eyJ...",
  "consultation_id": "cns-..."
}
```

L'enveloppe signée porte la décision deny. Les PEPs DEVRAIENT quand même vérifier la signature ; un verdict `blocked` signé est une preuve pour les logs et auditeurs que Knowledge a refusé, pas que le caller a silencieusement dropped l'opération.

## Réponse - approval_required

```json
{
  "operation_status": "complete",
  "verdict": "approval_required",
  "cited_rule_ids": ["rul-refund-over-100"],
  "signed_verdict": "eyJ...",
  "consultation_id": "cns-...",
  "approval": {
    "endpoint": "/tnt-acme/v1/approvals",
    "example_body": {
      "consultation_id": "cns-...",
      "requester_notes": "duplicate charge, customer complained"
    }
  }
}
```

Le caller crée une Approval via l'[endpoint approvals](/docs/api-reference/approvals). Le PEP retourne typiquement 202-Accepted à l'utilisateur avec une URL de status à poll.

## Erreurs

| Status | Code | Signification |
|---|---|---|
| 400 | `invalid_scope_field` | Un champ dans `scope` n'est pas dans le `scope_schema` du tenant |
| 400 | `invalid_scope_value` | Une valeur de champ n'est pas dans `allowed_values` |
| 401 | `missing_credentials` | Voir [Authentication](/docs/api-reference/authentication) |
| 403 | `principal_deactivated` | Le principal du caller a été désactivé |
| 422 | `insufficient_context` | Une rule a besoin d'un champ qui n'est pas présent ; utilisez `/resolve` à la place si c'est un cas commun |
| 500 | `signing_key_unavailable` | La clé de signing du verdict n'a pas pu être résolue ; check `docs/engineering/keys-guide.md` |

## Headers

- **Requête** :
  - `X-API-Key: ak-...` - auth required (ou cookie de session).
  - `X-Verdict-TTL: N` - override le TTL par défaut du tenant pour cet appel (secondes ; max 3600).
- **Réponse** :
  - `X-Verdict-TTL: N` - le TTL appliqué, en secondes.
  - `X-Consultation-Id: cns-...` - l'ID de consultation, aussi dans le body.

## Related

- [/v1/resolve](/docs/api-reference/resolve) - sibling tolérant qui retourne `required_context`.
- [/v1/consultations/{id}](/docs/api-reference/consultations) - fetch le record gelé complet.
- [Verdicts et decisions](/docs/concepts/verdicts-and-decisions) - échelle de severity + précédence.
- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - vérifier l'enveloppe.
