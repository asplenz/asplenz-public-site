---
title: GET /v1/consultations/{id}
description: Fetch le record gelé d'une consultation passée.
locale: fr
kicker: Docs / API reference - Stable
---

Chaque `/check` et `/resolve` écrit un `Consultation` (`cns-`). Cet endpoint le lit back, exactement tel qu'il était au moment de décision.

## Requête

```
GET /tnt-acme/v1/consultations/cns-abc123
X-API-Key: ak-live-...
```

## Réponse

```json
{
  "id": "cns-abc123",
  "tenant_id": "tnt-acme",
  "caller_principal_id": "agn-rm-copilot",
  "on_behalf_of": "hum-marie",
  "on_behalf_of_authenticated": false,
  "requested_at": "2026-08-14T09:12:33Z",
  "action": "refund.execute",
  "resource": "TX-456",
  "scope_used": {
    "product_type": "customer_refund",
    "channel": "in_app"
  },
  "parameters": {
    "amount_eur": 40,
    "reason": "duplicate_charge"
  },
  "context_hash": "sha256:9f2c...",
  "context_snapshot": {
    "client.id": { "value": "cli-9f2c", "source": "crm" }
  },
  "cited_entry_ids": ["rul-refund-under-100"],
  "cited_rule_version_ids": ["rv-abc"],
  "dominating_rule_id": "rul-refund-under-100",
  "precedence_trace": [...],
  "resolved_target_ids": ["tgt-agents-refund-team"],
  "verdict": "allowed",
  "signed_verdict": "eyJ...",
  "signing_kid": "tnt-acme:2026-01",
  "signing_epoch": "2026-01",
  "verdict_ttl_seconds": 60,
  "expired_at": "2026-08-14T09:13:33Z",
  "required_context_history": [],
  "normative_hash": "sha256:a3c8..."
}
```

Champs clés :

- **`cited_rule_version_ids`** - les snapshots RuleVersion immuables pinnés. Fetch-les pour voir le texte de règle exact de ce jour.
- **`precedence_trace`** - la liste candidate complète et le trail de tie-break.
- **`context_snapshot`** - l'enveloppe de contexte entière telle que soumise (accumulation post-fetcher pour `/resolve`).
- **`normative_hash`** - hash de l'état gelé ; vérifier que le record n'a pas été tampered.
- **`signed_verdict`** - le JWS de cet appel, vérifiable contre JWKS.

## Playbook régulateur

*« Montrez-moi la décision sur ce cas. »*

```
GET /v1/consultations/cns-abc123
```

*« Montrez-moi le texte de règle qui s'appliquait. »*

```
GET /v1/rule-versions/rv-abc
```

La réponse RuleVersion inclut le statement exact, les rows de condition, la severity, et la metadata de ce jour.

*« Montrez-moi pourquoi cette règle a gagné et pas cette autre similaire. »*

Regardez `precedence_trace` dans la consultation. Il enregistre chaque règle candidate considérée, la qualité du scope match, et le champ de tie-break qui a décidé.

*« Prouvez que le record n'a pas été modifié. »*

Recompute le `normative_hash` depuis les champs du record et compare. Ou vérifiez le `signed_verdict` contre le JWKS archivé au `signing_kid`.

## Endpoint list

```
GET /tnt-acme/v1/consultations?actor=agn-rm-copilot&since=2026-08-01&verdict=blocked&limit=100
```

Query parameters :

- `actor` - filtrer par caller principal.
- `since` / `until` - bornes de date ISO 8601.
- `action` - filtrer par nom d'action.
- `verdict` - `allowed`, `blocked`, `approval_required`.
- `dominating_rule_id` - toutes consultations où cette règle était dominante.
- `limit` (défaut 50, max 1000).
- `cursor` - curseur de pagination opaque.

Réponse :

```json
{
  "items": [ ... ],
  "next_cursor": "eyJ..."
}
```

## Erreurs

| Status | Code | Signification |
|---|---|---|
| 404 | `consultation_not_found` | ID n'existe pas dans ce tenant |
| 403 | `cross_tenant_forbidden` | La consultation appartient à un tenant différent |

## Related

- [Verdicts et decisions](/docs/concepts/verdicts-and-decisions) - ce que chaque champ signifie.
- [Page produit Auditability](/product/auditability) - la vue story-level.
- [/v1/rule-versions/{id}](/docs/api-reference/rule-versions) - fetch le texte de règle gelé.
