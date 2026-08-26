---
title: Keys inventory
description: Every cryptographic key in a Knowledge deployment, its purpose, algorithm, storage, and rotation story.
locale: en
kicker: Docs / Security & compliance - Stable
---

A Knowledge deployment ships with four cryptographic keys. This page enumerates them for security review. The canonical source lives at `docs/engineering/keys-guide.md` in the monorepo ; this page mirrors that content for reference.

## Key 1 : Verdict signing

**Purpose** : sign every `/check` and `/resolve` response envelope so downstream PEPs can verify authenticity and detect tampering.

**Algorithm** : ECDSA P-256 (JWS ES256).

**Storage today (Option B)** : one deployment-wide keypair at `${DATA_DIR}/keys/verdict-signing.json`. Private key file mode `0600`, owned by the API process user.

**Storage roadmap (Option C)** : per-tenant keypair, generated on tenant provisioning. The `kid` format `tnt-<slug>:<epoch>` already supports both modes ; the resolver falls back deployment-wide when no per-tenant key exists.

**Rotation** : scheduled (yearly by default) or on-demand ; overlap window keeps in-flight signed verdicts verifiable. Emergency (zero-overlap) rotation supported. See [Rotate signing keys](/docs/guides/rotate-signing-keys).

**Public dissemination** : `GET /v1/tenants/{slug}/jwks`. Old keys are retained forever so cold-storage verification works.

**Compromise impact** : an attacker with the private key can forge signed verdicts. Blast radius : all tenants under Option B ; single tenant under Option C. Rotate immediately + revoke stale JWKS + flag Consultations signed during the compromise window.

## Key 2 : Encryption at rest (KEK)

**Purpose** : encrypt sensitive columns at rest (API key secrets, principal metadata, webhook secrets).

**Algorithm** : Fernet (AES-128-CBC + HMAC-SHA256), MultiFernet for graceful rotation.

**Storage** : one deployment-wide keyring at `${DATA_DIR}/keys/kek.json`. Private key file mode `0600`.

**Rotation** : append a new key at the head of the keyring ; old keys stay for decryption of existing rows. A migration job re-encrypts rows with the new key. Zero downtime.

**Public dissemination** : never.

**Compromise impact** : an attacker with the KEK can decrypt everything in the deployment. Rotate immediately + re-encrypt all rows + rotate every credential the KEK protected (as they are now considered exposed).

## Key 3 : Session JWT secret

**Purpose** : sign session JWTs issued by the back-office UI login flow, and the OAuth session bridge used by `knowledge-mcp`.

**Algorithm** : HS256 (HMAC-SHA256).

**Storage** : one deployment-wide 32-byte secret at `${DATA_DIR}/keys/session-jwt.secret`. Also loaded by `knowledge-mcp` for OAuth callback verification.

**Rotation** : issue a new secret ; existing sessions become invalid on next verification (log out effect). Users re-login.

**Public dissemination** : never.

**Compromise impact** : an attacker can forge session JWTs to impersonate any user. Rotate + force-logout all users + investigate the compromise window.

## Key 4 : Webhook signing

**Purpose** : sign outbound webhook deliveries so subscribers can verify authenticity.

**Algorithm** : ECDSA P-256 (custom deployment envelope, see `docs/engineering/webhooks-guide.md`).

**Storage** : one deployment-wide keypair at `${DATA_DIR}/keys/webhook-signing.json`. Private key file mode `0600`.

**Public dissemination** : subscribers fetch the public key at `GET /v1/webhook-public-key` or from documentation.

**Rotation** : same overlap-window pattern as verdict signing. Retain old public keys for verifying archived webhook payloads.

**Compromise impact** : an attacker can forge webhook deliveries to subscribers, potentially triggering unauthorised side effects on their systems. Rotate + notify all subscribers with active webhook subscriptions.

## Where keys live

| Key | File | Mode | Owner |
|---|---|---|---|
| Verdict signing | `${DATA_DIR}/keys/verdict-signing.json` | 0600 | API process user |
| KEK | `${DATA_DIR}/keys/kek.json` | 0600 | API process user |
| Session JWT | `${DATA_DIR}/keys/session-jwt.secret` | 0600 | API process user |
| Webhook signing | `${DATA_DIR}/keys/webhook-signing.json` | 0600 | API process user |

For VPC / on-prem deployments, `${DATA_DIR}` is typically a mounted persistent volume + snapshot backed up per your policy. For SaaS, Asplenz manages the storage per its security controls documented at [/security](/security).

## Related

- [Rotate signing keys](/docs/guides/rotate-signing-keys) - operational guide.
- [Trust model deep dive](/docs/security-compliance/trust-model) - what each key protects.
- [/v1/jwks](/docs/api-reference/jwks) - public key dissemination for verdict signing.
- **Canonical source in monorepo** : `apps/knowledge/docs/engineering/keys-guide.md`.
