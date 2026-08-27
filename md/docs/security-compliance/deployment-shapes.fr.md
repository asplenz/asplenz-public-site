---
title: Deployment shapes
description: SaaS, VPC, on-prem - ce qui change à travers les topologies.
locale: fr
kicker: Docs / Security & compliance - Stable
---

Knowledge ship dans trois formes de déploiement. Pickez selon les exigences de résidence des données, la posture de compliance, et l'appétit opérationnel.

## SaaS (hosté par Asplenz)

**Où ça tourne** : infrastructure managée par Asplenz dans une région choisie.

**Qui l'opère** : SRE Asplenz.

**Ce que vous obtenez** :
- Time-to-first-decision le plus rapide. La provisioning se fait en minutes, pas en semaines.
- Upgrades rolling, patches, et monitoring inclus.
- Les certifications suivent (tier design-partner aujourd'hui ; SOC 2 + ISO 27001 à mesure que la cohorte mûrit).

**Ce à quoi vous renoncez** :
- Les données quittent physiquement votre périmètre (SaaS provider = Asplenz).
- La posture de certification est celle d'Asplenz, pas la vôtre ; les réponses d'audit citent les contrôles Asplenz.

**Suitable for** : POCs, équipes sans blockers de compliance sur SaaS externe, verticals où la data n'est pas elle-même régulée (orchestration de tools agent, ops internes).

**Isolation** : multi-tenant row-level par défaut. Infrastructure per-tenant disponible pour les plans enterprise.

## Cloud privé / VPC

**Où ça tourne** : votre compte cloud (AWS, Azure, GCP, ...).

**Qui l'opère** : conjointement. Asplenz fournit le tooling de déploiement ; vous ownez le compte et son IAM.

**Ce que vous obtenez** :
- Les données ne quittent jamais votre VPC.
- Vous contrôlez les policies réseau, IAM, security groups, et audit logs.
- La posture de compliance hérite de vos contrôles.

**Ce à quoi vous renoncez** :
- Overhead opérationnel : vous patchez, upgradez, monitorez.
- Les releases rolling requièrent votre acknowledgement.

**Suitable for** : verticals régulés (banking, healthcare) où résidence + contrôle sont contractuels. Toute org avec des pratiques cloud mûres.

**Provisioning** : Asplenz ship des modules Terraform pour AWS + Azure + GCP. Le déploiement prend des heures à des jours selon vos review cycles.

**Data plane vs control plane** : votre VPC fait tourner les deux. Aucun call-home management plane.

## On-premise

**Où ça tourne** : infrastructure que vous opérez (bare metal, data centre privé, environnement air-gapped).

**Qui l'opère** : vous.

**Ce que vous obtenez** :
- Contrôle complet. Les données ne quittent jamais votre infrastructure.
- Air-gap possible (aucune dépendance réseau à Asplenz).

**Ce à quoi vous renoncez** :
- Overhead opérationnel complet. Vous gérez tout.
- Les cycles de support sont plus longs (moins de signaux de télémétrie vers Asplenz).

**Suitable for** : environnements air-gapped (défense, réseaux restreints) ; juridictions avec des exigences strictes on-prem-only.

**Dépendances runtime** :
- Postgres 15+ (managé ou self-hosted).
- Votre provider LLM (Anthropic, OpenAI, ...) si vous activez la capability optionnelle de prose de verdict. Sinon aucune dépendance LLM.

**Tout le reste** : bundlé dans la distribution Knowledge.

## Comparaison des shapes

| Dimension | SaaS | VPC | On-prem |
|---|---|---|---|
| Time to first decision | Minutes | Heures-jours | Jours-semaines |
| Résidence des données | Région Asplenz | Votre VPC | Votre infra |
| Héritage de certification | Celui d'Asplenz | Vôtre | Vôtre |
| Overhead opérationnel | Aucun | Modéré | Complet |
| Cadence d'upgrade | Rolling (Asplenz) | Vous approuvez | Vous contrôlez |
| Air-gap possible | Non | Non | Oui |
| Isolation per-tenant | Row-level défaut ; per-tenant disponible | Row-level défaut ; per-tenant disponible | Row-level défaut ; per-tenant disponible |

## Ce qui est identique à travers les shapes

- **Surface API** : identique. Les callers ne savent pas quelle shape ils hit.
- **Verdicts signés + JWKS** : enveloppe identique, kid per-tenant.
- **Surface d'audit** : forme de Consultation identique.
- **Modèle d'enforcement** : le PEP fait le même travail indépendamment de la shape.

La différence est où vivent les serveurs et qui les opère - pas ce que fait le software.

## Commencer

1. Lisez [Security](/security) - les contrôles actuels d'Asplenz.
2. Lisez [Keys inventory](/docs/security-compliance/keys-inventory) - ce qu'il y a dans le déploiement.
3. [Parlez-nous](/contact) avec vos exigences compliance / procurement ; nous scope la shape et le timeline ensemble.

## Related

- [Multi-tenant setup](/docs/guides/multi-tenant-setup) - opérer plusieurs tenants sur un déploiement.
- [Compliance posture](/docs/security-compliance/compliance-posture) - certifications + tier design-partner.
- [Keys inventory](/docs/security-compliance/keys-inventory) - storage de clé par shape.
