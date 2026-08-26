---
title: GET /v1/tenants/{slug}/jwks
description: Endpoint JWKS pour vérification offline des verdicts signés.
locale: fr
kicker: Docs / API reference - Stable
---

L'endpoint JWKS (JSON Web Key Set) publie les clés publiques qu'un Policy Enforcement Point utilise pour vérifier les verdicts signés. Scoping per-tenant pour que les clés puissent rotate indépendamment.

## Requête

```
GET /v1/tenants/tnt-acme/jwks
```

Aucune authentification requise. Les endpoints JWKS sont publics par design (ils publient seulement des clés publiques).

## Réponse

```json
{
  "keys": [
    {
      "kid": "tnt-acme:2026-01",
      "kty": "EC",
      "crv": "P-256",
      "x": "Kk8H_..._9Yq",
      "y": "F5Zj4_..._P8w",
      "alg": "ES256",
      "use": "sig",
      "not_before": "2026-01-01T00:00:00Z",
      "not_after": null
    },
    {
      "kid": "tnt-acme:2025-07",
      "kty": "EC",
      "crv": "P-256",
      "x": "...",
      "y": "...",
      "alg": "ES256",
      "use": "sig",
      "not_before": "2025-07-01T00:00:00Z",
      "not_after": "2026-01-08T00:00:00Z"
    }
  ]
}
```

- `kid` identifie uniquement chaque clé ; matche le `kid` dans le protected header JWS.
- `not_before` / `not_after` bornent la validité de la clé. Les clés passé leur `not_after` continuent d'être publiées pour que les verdicts historiques restent vérifiables.
- Les vieilles clés sont retenues pour toujours (voir le guide de rotation) pour que l'audit cold-storage marche.

## Caching

**Côté client** : le SDK Python `knowledge-runtime` cache la réponse JWKS pour 5 minutes par défaut. Configurable via `KnowledgeClient(jwks_cache_ttl_seconds=...)`.

**Côté serveur** : la réponse inclut `Cache-Control: public, max-age=300, immutable` pour le set de clés spécifique. Quand la rotation arrive, un nouveau query parameter d'URL JWKS peut buster le cache (convention `?v=2`).

## Vérification cold-storage

Pour vérifier un verdict signé d'il y a des années :

1. Extraire le `kid` du protected header JWS.
2. Fetch le JWKS archivé (Knowledge les préserve pour toujours).
3. Matcher le `kid` à une clé dans le set.
4. Vérifier la signature ES256.
5. Optionnellement cross-checker `iat` / `exp` pour la fenêtre de temps - mais dépasser `exp` n'invalide pas l'évidence historique, seulement la propriété « toujours valide pour agir dessus ».

Ça marche depuis cold storage sans que Knowledge soit en ligne, à condition que le JWKS ait été archivé à côté des verdicts.

## Quand les clés rotate

Deux mécanismes :

- **Planifiée** : nouvelle clé à chaque epoch (défaut : annuel). Ancienne clé gardée dans le JWKS avec `not_after` set. Toutes les nouvelles signatures utilisent le nouveau `kid`.
- **Urgence** : clé compromise ; nouvelle clé émise immédiatement, `not_after` de l'ancienne set à « now » mais retenue pour vérification historique. Les verdicts signés en vol sous l'ancienne clé sont refusés par policy à la couche PEP (voir [Rotate signing keys](/docs/guides/rotate-signing-keys)).

## Erreurs

| Status | Code | Signification |
|---|---|---|
| 404 | `tenant_not_found` | Slug n'existe pas |
| 500 | `no_keys_configured` | Le tenant n'a pas de clés de signing ; appeler l'endpoint de setup |

## Related

- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - format d'enveloppe que le JWKS vérifie.
- [Rotate signing keys](/docs/guides/rotate-signing-keys) - guide de rotation opérationnel.
- [`knowledge-runtime` Python](/docs/sdk-reference/knowledge-runtime-python) - cache JWKS built-in.
