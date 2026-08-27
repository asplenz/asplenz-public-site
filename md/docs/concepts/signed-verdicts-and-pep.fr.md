---
title: Verdicts signés et PEP
description: L'enveloppe JWS ES256 que Knowledge retourne, et comment un Policy Enforcement Point la vérifie et la lie à l'opération exacte.
locale: fr
kicker: Docs / Concepts - Stable
---

Knowledge n'exécute pas l'action métier. Il retourne un **verdict signé** qu'un **Policy Enforcement Point (PEP)** en aval vérifie avant d'exécuter l'appel sous-jacent. Cette page explique le modèle.

## L'enveloppe

Chaque réponse `/check` et `/resolve` inclut un champ `signed_verdict` : un JWS compact (JSON Web Signature) produit avec ECDSA P-256 (ES256). Il a trois parties jointes par des points :

```
<protected-header-b64>.<claims-b64>.<signature-b64>
```

**Protected header** :

```json
{
  "alg": "ES256",
  "typ": "governed+jws",
  "kid": "tnt-acme:2026-01"
}
```

Le `kid` identifie le tenant + l'epoch de signing. Il résout vers une clé publique à l'endpoint JWKS du tenant.

**Claims** (le payload) :

```json
{
  "iss": "https://knowledge.asplenz.com/tnt-acme",
  "iat": 1737849600,
  "exp": 1737849660,
  "authorization": {
    "actor": "agn-rm-copilot",
    "action": "refund.execute",
    "resource": "TX-456",
    "parameters": { "amount_eur": 40 }
  },
  "decision": {
    "verdict": "allowed",
    "cited_rule_version_ids": ["rv-abc", "rv-def"],
    "dominating_rule_id": "rul-refund-under-100"
  },
  "context_hash": "sha256:9f2c...",
  "consultation_id": "cns-abc123",
  "on_behalf_of": "hum-marie",
  "on_behalf_of_authenticated": false
}
```

La signature couvre header + claims. Toute modification invalide la signature.

## Le contrat PEP

Un PEP est n'importe quel composant qui wrappe une API métier et vérifie les verdicts avant d'exécuter. Exemples concrets dans ce codebase :

- **Décorateur `@governed_tool`** dans `knowledge-runtime` (Python).
- **Intercepteur de tool call MCP** utilisant `verify_verdict` devant un serveur MCP (voir le guide plus bas pour le pattern).
- **Code custom** que vous écrivez dans n'importe quel langage.

Chaque PEP effectue les mêmes six checks à la réception :

1. **Vérification de signature** avec la clé publique JWKS.
2. **Check `exp`** - rejette les verdicts expirés (`nbf` si présent).
3. **Binding d'actor** - l'actor de l'opération matche `authorization.actor` (issu de l'authentification Knowledge, pas du payload du caller).
4. **Binding d'action** - l'`action` déclarée du tool matche.
5. **Binding de resource** - la `resource` de l'opération matche.
6. **Bindings de parameters** - pour chaque champ bind déclaré, la valeur de l'opération matche la valeur signée (ou tombe dans la range signée).

Si un check échoue, le PEP refuse avec une erreur typée (`signature_invalid`, `expired`, `binding_mismatch`, ...) et n'invoque jamais l'API métier sous-jacente.

## Pourquoi ça attrape replay + injection

- **Même appel, montant différent** : le binding `parameters.amount_eur` ne matche pas. Refusé.
- **Même appel, resource différente** : le binding `resource` ne matche pas. Refusé.
- **Même appel, actor différent via injection body** : l'`actor` de Knowledge dans les claims vient de la propre authentification de Knowledge ; un body malicieux ne peut pas forcer un actor différent.
- **Même appel, une heure plus tard** : `exp` dans le passé. Refusé.

## Ce que le PEP ne garantit PAS

- **Replay dans le TTL.** Si le même verdict est soumis deux fois dans son TTL pour la même opération, la signature est valide les deux fois. Pour les opérations exactement-une-fois, ajoutez un **store spent-verdicts** (un set de `{iss, consultation_id}` déjà brûlés).
- **Chemins d'atteinte alternatifs.** Si votre réseau / IAM laisse l'agent atteindre l'API métier directement sans passer par le PEP, aucun verdict signé n'aide. Le PEP possède la frontière du tool ; il ne police pas tout le réseau.
- **Trustworthiness de `on_behalf_of`.** Le champ `on_behalf_of_authenticated` vous dit si la délégation est supportée par un identity binding (true) ou est metadata assertée par le caller (false). Le PEP devrait durcir l'autorisation quand `false`.

## TTL

Défaut 60 secondes. Configurable :

- Par tenant : `verdict_ttl_seconds` dans la config tenant.
- Par appel : header `X-Verdict-TTL: 30` sur la requête `/check` ou `/resolve`.

TTLs courts (quelques secondes) réduisent la fenêtre de replay ; TTLs longs (minutes) accommodent les APIs métier lentes. Pickez par opération.

## Gestion des clés

Les clés de signing vivent à `${DATA_DIR}/keys/verdict-signing.json` (une seule clé deployment-wide aujourd'hui, per-tenant supportée par le stub resolver). Flow de rotation à [Rotate signing keys](/docs/guides/rotate-signing-keys).

Endpoint JWKS (par tenant) :

```
GET /knowledge/v1/tenants/{slug}/jwks
```

Cached côté client par `knowledge-runtime` pour 5 minutes par défaut.

## Related

- [Page produit Enforcement](/product/enforcement) - la vue story-level.
- [Verdicts et decisions](/docs/concepts/verdicts-and-decisions) - ce qui est dans le bloc decision.
- [Modèle de confiance à quatre acteurs](/docs/concepts/four-actor-trust-model) - qui signe, qui vérifie, ce que chaque arête garantit.
- [/v1/jwks](/docs/api-reference/jwks) - le contrat endpoint JWKS.
- [`knowledge-runtime` Python](/docs/sdk-reference/knowledge-runtime-python) - le PEP de référence.
- [Wrapper votre propre serveur MCP avec enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement) - le pattern PEP pour tool calls MCP.
