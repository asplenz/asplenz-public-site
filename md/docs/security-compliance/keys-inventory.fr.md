---
title: Keys inventory
description: Chaque clé cryptographique dans un déploiement Knowledge, son purpose, algorithme, storage, et story de rotation.
locale: fr
kicker: Docs / Security & compliance - Stable
---

Un déploiement Knowledge ship avec quatre clés cryptographiques. Cette page les énumère pour security review. La source canonique vit à `docs/engineering/keys-guide.md` dans le monorepo ; cette page mirror ce contenu pour référence.

## Clé 1 : Verdict signing

**Purpose** : signer chaque enveloppe de réponse `/check` et `/resolve` pour que les PEPs downstream puissent vérifier l'authenticité et détecter le tampering.

**Algorithme** : ECDSA P-256 (JWS ES256).

**Storage aujourd'hui (Option B)** : une keypair deployment-wide à `${DATA_DIR}/keys/verdict-signing.json`. Mode de fichier de clé privée `0600`, owned par le user process API.

**Storage roadmap (Option C)** : keypair per-tenant, générée à la provisioning du tenant. Le format `kid` `tnt-<slug>:<epoch>` supporte déjà les deux modes ; le resolver fait fallback deployment-wide quand aucune clé per-tenant n'existe.

**Rotation** : planifiée (annuelle par défaut) ou on-demand ; la fenêtre d'overlap garde les verdicts signés en vol vérifiables. Rotation d'urgence (zero-overlap) supportée. Voir [Rotate signing keys](/docs/guides/rotate-signing-keys).

**Dissémination publique** : `GET /v1/tenants/{slug}/jwks`. Les vieilles clés sont retenues pour toujours pour que la vérification cold-storage marche.

**Impact compromission** : un attaquant avec la clé privée peut forger des verdicts signés. Blast radius : tous les tenants sous Option B ; tenant unique sous Option C. Rotate immédiatement + révoquer JWKS stale + flag les Consultations signées pendant la fenêtre de compromission.

## Clé 2 : Encryption at rest (KEK)

**Purpose** : encrypter les colonnes sensibles at rest (secrets de clé API, metadata de principal, secrets webhook).

**Algorithme** : Fernet (AES-128-CBC + HMAC-SHA256), MultiFernet pour rotation graceful.

**Storage** : un seul keyring deployment-wide à `${DATA_DIR}/keys/kek.json`. Mode de fichier de clé privée `0600`.

**Rotation** : append une nouvelle clé à la tête du keyring ; les vieilles clés restent pour décryption des lignes existantes. Un job de migration re-encrypte les lignes avec la nouvelle clé. Zéro downtime.

**Dissémination publique** : jamais.

**Impact compromission** : un attaquant avec le KEK peut décrypter tout dans le déploiement. Rotate immédiatement + re-encrypt toutes les lignes + rotate chaque credential que le KEK protégeait (car ils sont maintenant considérés exposés).

## Clé 3 : Secret JWT de session

**Purpose** : signer les JWTs de session émis par le flow de login de l'UI back-office, et le pont de session OAuth utilisé par `knowledge-mcp`.

**Algorithme** : HS256 (HMAC-SHA256).

**Storage** : un seul secret 32-byte deployment-wide à `${DATA_DIR}/keys/session-jwt.secret`. Aussi chargé par `knowledge-mcp` pour vérification de callback OAuth.

**Rotation** : émettre un nouveau secret ; les sessions existantes deviennent invalides à la prochaine vérification (effet log-out). Les users re-login.

**Dissémination publique** : jamais.

**Impact compromission** : un attaquant peut forger des JWTs de session pour impersonner n'importe quel user. Rotate + force-logout tous les users + investiguer la fenêtre de compromission.

## Clé 4 : Webhook signing

**Purpose** : signer les livraisons de webhook outbound pour que les subscribers puissent vérifier l'authenticité.

**Algorithme** : ECDSA P-256 (enveloppe de déploiement custom, voir `docs/engineering/webhooks-guide.md`).

**Storage** : une keypair deployment-wide à `${DATA_DIR}/keys/webhook-signing.json`. Mode de fichier de clé privée `0600`.

**Dissémination publique** : les subscribers fetch la clé publique à `GET /v1/webhook-public-key` ou depuis la documentation.

**Rotation** : même pattern de fenêtre d'overlap que le signing des verdicts. Retenir les vieilles clés publiques pour vérifier les payloads webhook archivés.

**Impact compromission** : un attaquant peut forger des livraisons webhook aux subscribers, déclenchant potentiellement des side effects non autorisés sur leurs systèmes. Rotate + notifier tous les subscribers avec des subscriptions webhook actives.

## Où les clés vivent

| Clé | Fichier | Mode | Owner |
|---|---|---|---|
| Verdict signing | `${DATA_DIR}/keys/verdict-signing.json` | 0600 | User process API |
| KEK | `${DATA_DIR}/keys/kek.json` | 0600 | User process API |
| Session JWT | `${DATA_DIR}/keys/session-jwt.secret` | 0600 | User process API |
| Webhook signing | `${DATA_DIR}/keys/webhook-signing.json` | 0600 | User process API |

Pour les déploiements VPC / on-prem, `${DATA_DIR}` est typiquement un volume persistant monté + snapshot backup selon votre policy. Pour SaaS, Asplenz gère le storage selon ses contrôles de sécurité documentés à [/security](/security).

## Related

- [Rotate signing keys](/docs/guides/rotate-signing-keys) - guide opérationnel.
- [Trust model deep dive](/docs/security-compliance/trust-model) - ce que chaque clé protège.
- [/v1/jwks](/docs/api-reference/jwks) - dissémination de clé publique pour verdict signing.
- **Source canonique dans le monorepo** : `apps/knowledge/docs/engineering/keys-guide.md`.
