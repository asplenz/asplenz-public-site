---
title: Authentification
description: Comment Knowledge authentifie les callers d'API - clés API, cookies de session, binding de principal.
locale: fr
kicker: Docs / API reference - Stable
---

Knowledge authentifie chaque appel d'API. Il y a deux mécanismes supportés.

## Clés API (M2M)

**Header** :

```
X-API-Key: ak-live-a1b2c3d4e5f6...
```

Émises dans l'UI back-office par-principal. Chaque clé est liée à exactement un principal ID (human ou agent) et son tenant. Le principal authentifié est celui que Knowledge écrit dans le champ `authorization.actor` du verdict signé.

**Format** : `ak-{env}-{secret}` où `{env}` est `live` ou `test`. Le préfixe est significatif pour Knowledge ; le secret est 32 bytes de base64 URL-safe.

**Scope** : une clé API hérite des memberships de targets de son principal. Les rules attachées à ces targets s'appliquent. Les rules universal s'appliquent toujours.

**Rotation** : émettez une nouvelle clé d'abord, déployez le caller avec la nouvelle clé, révoquez l'ancienne. Il n'y a pas de période de grâce soft-delete ; la révocation est immédiate.

**Où stocker** : variable d'environnement, secret manager, ou vault. Jamais dans le code.

## Cookies de session (UI browser)

Set par le flow de login de l'UI back-office (`auth_session`). Porte un JWT de session signé (HS256, secret deployment-wide).

**S'applique à** : routes de l'UI back-office seulement. Les endpoints API acceptent `X-API-Key` OU cookie de session ; les callers browser utilisent le cookie automatiquement.

**TTL** : 8 heures par défaut, configurable par tenant.

**Logout** : `POST /auth/logout` clear la session côté serveur.

## Le principal authentifié

Chaque appel authentifié résout à un record principal avec :

- `id` (`hum-*` ou `agn-*`)
- `tenant_id`
- `email` (humans seulement)
- `display_name`
- `target_memberships` (via lignes `TargetMember`)

C'est ce qui apparaît dans `authorization.actor` sur le verdict signé, dans `Consultation.caller_principal_id`, et dans chaque ligne `Event`.

## on_behalf_of (délégation)

Un agent (`agn-*`) peut passer `on_behalf_of: "hum-marie"` dans le body de `/check` ou `/resolve`. Ce claim est copié verbatim dans l'enveloppe signée avec un flag :

- `on_behalf_of_authenticated: true` - Knowledge a vérifié la délégation (via un binding d'identité déclaré sur le record principal de l'agent).
- `on_behalf_of_authenticated: false` - Knowledge a signé le claim tel quel sans vérification.

Les PEPs DEVRAIENT traiter `_authenticated: false` comme metadata non fiable.

## Multi-tenant

Chaque clé API est liée à un tenant. Les requêtes hit la surface API du tenant :

```
POST https://knowledge.asplenz.com/tnt-acme/v1/check
                                    ~~~~~~~
                                    tenant slug dans le path
```

Les lectures cross-tenant sont impossibles via clé API ; elles requièrent une session Platform admin avec scope tenant explicite.

## Erreurs

| Code | Signification | Fix |
|---|---|---|
| 401 `missing_credentials` | Pas de `X-API-Key` et pas de cookie de session | Ajouter le header |
| 401 `invalid_key` | Format de clé invalide ou révoqué | Rotate |
| 403 `tenant_mismatch` | La clé appartient à un tenant différent | Vérifier l'URL |
| 403 `principal_deactivated` | Le principal a été désactivé | Réactiver ou ré-émettre |

## Related

- [/v1/check](/docs/api-reference/check) - endpoint verdict déterministe.
- [/v1/resolve](/docs/api-reference/resolve) - endpoint verdict progressif.
- [Modèle de confiance à quatre acteurs](/docs/concepts/four-actor-trust-model) - ce que le principal authentifié représente.
- [Multi-tenant setup](/docs/guides/multi-tenant-setup) - opérer plusieurs tenants sur un déploiement.
