---
title: Multi-tenant setup
description: Faire tourner plusieurs tenants isolés sur un déploiement Knowledge.
locale: fr
kicker: Docs / Guides - Stable
---

Knowledge est multi-tenant par design. Un déploiement peut servir plusieurs tenants isolés (organisations clientes, business units, environnements). Ce guide parcourt le modèle et les étapes opérationnelles.

## Garanties d'isolation

- **Surface API** : chaque route est tenant-scoped (`/tnt-slug/v1/...`). Les lectures cross-tenant via clé API sont impossibles ; elles requièrent une session Platform admin avec scope target explicite.
- **Data** : toutes les tables row-level portent `tenant_id`. Les queries l'enforcent à la couche ORM.
- **JWKS** : endpoint JWKS per-tenant. Les vérificateurs cachent les clés par tenant.
- **Rules + Policies** : ne peuvent pas cross tenants. Copier un policy pack du tenant A au tenant B est une action opérateur délibérée.
- **Consultations** : archivées per-tenant. Les fenêtres de rétention sont per-tenant.

## Ce qui est deployment-wide aujourd'hui (Option B)

- **Clé de signing des verdicts** : une seule keypair ES256 pour tout le déploiement. `kid` inclut toujours tenant + epoch pour que la migration vers per-tenant soit non-cassante.
- **KEK (encryption at rest)** : un seul keyring Fernet pour tout le déploiement.
- **Secret JWT de session** : un seul secret HMAC, partagé avec `knowledge-mcp`.
- **Clé de signing des webhooks** : une seule keypair ECDSA P-256.

La migration vers per-tenant est sur la roadmap, non-cassante (voir [Rotate signing keys](/docs/guides/rotate-signing-keys)).

## Créer un tenant

```bash
knowledge-admin tenant create \
  --slug tnt-acme \
  --display-name "Acme Corp" \
  --scope-schema ./scope-schema.acme.json \
  --owner-email compliance@acme.example
```

Comportement :

- Provisionne la ligne tenant.
- Enregistre le scope schema contre lequel chaque row de rule est validée.
- Crée le principal admin initial + émet une clé API (imprimée une fois).
- Émet un Event de setup tenant.

## Installer un decision pack

Chaque vertical a un decision pack canonique dans le monorepo :

```bash
knowledge-admin pack install \
  --tenant tnt-acme \
  --pack src/knowledge-verticals/wealth/policy-packs/structured-products
```

Comportement :

- Lit `pack.yaml` pour les définitions de policy + rule.
- Merge les ajouts de scope required dans le scope schema du tenant.
- Crée les policies + rules avec les thresholds calibrés du tenant (si un fichier de calibration est fourni).
- Enregistre le champ `source_requirement` où pertinent.

## Provisionner principals et targets

Deux paths :

- **Manuel** via l'UI back-office ou la CLI admin.
- **SCIM 2.0** via l'endpoint `/v1/scim` (voir `docs/engineering/scim.md`).

Chaque principal humain ou agent appartient à exactement un tenant. Les memberships de target (lignes `TargetMember`) déterminent quelles rules s'appliquent.

## Configurer les webhooks (per-tenant)

Les approvals, verdicts, et events peuvent fire des webhooks. Configurez per-tenant :

```bash
knowledge-admin webhook create \
  --tenant tnt-acme \
  --event approval.pending \
  --url https://ops.acme.example/knowledge/webhook
```

Le webhook est signé avec la clé ECDSA P-256 deployment-wide. Vérifiez selon `docs/engineering/webhooks-guide.md`.

## Considérations de forme de déploiement

- **Postgres partagé, API partagée** : le plus simple. Isolation row-level.
- **API partagée, schemas Postgres per-tenant** : isolation plus forte, plus d'overhead opérationnel.
- **Déploiement per-tenant** : isolation totale, certifications per-tenant. Les formes VPC / on-prem opèrent typiquement ainsi.

Pickez selon votre posture de compliance. Les design partners démarrent typiquement sur infrastructure partagée et migrent à mesure que leur volume + exigences de certification grandissent.

## Conventions de naming

- Slugs tenant : `tnt-<kebab>` (tout lowercase). Utilisé dans les URLs et kid.
- Principals humains : `hum-<hex12>`.
- Principals agent : `agn-<hex12>`.
- Rules : `rul-<hex12>` (ou `rul-<pack>-<intent>` dans les packs seedés).
- Targets : `tgt-<hex12>` (ou `tgt-<role>` dans les packs seedés).

## Related

- [Authentication](/docs/api-reference/authentication) - binding principal + tenant.
- [Keys inventory](/docs/security-compliance/keys-inventory) - ce qui est deployment-wide aujourd'hui.
- [Deployment shapes](/docs/security-compliance/deployment-shapes) - topologies SaaS, VPC, on-prem.
