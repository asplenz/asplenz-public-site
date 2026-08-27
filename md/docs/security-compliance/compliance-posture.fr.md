---
title: Compliance posture
description: État honnête des certifications, résidence des données, rétention, et modèle de menace. Ce qui ship aujourd'hui, ce qui est sur la roadmap.
locale: fr
kicker: Docs / Security & compliance - Stable
---

Cette page indique la posture de compliance actuelle d'Asplenz. Écrite pour les security reviewers, équipes procurement, et auditeurs évaluant la plateforme.

## Certifications

**Aujourd'hui** : tier design-partner. Les contrôles de sécurité documentés à [/security](/security) définissent la baseline opérationnelle. Pas encore de certification SOC 2 ou ISO 27001 formelle.

**Roadmap** : programme SOC 2 Type II + ISO 27001 démarre avec la cohorte design-partner. Timing suit les commitments customers (les tenants design-partner informent quels contrôles ont besoin d'evidence documentée en premier).

**Ce que ça veut dire pratiquement** :

- Les déploiements SaaS design-partner portent les contrôles Asplenz comme baseline. Suffisant pour la plupart des pilotes B2B.
- Les équipes procurement enterprise requérant une certification formelle devraient plan pour les shapes VPC / on-prem où la posture hérite de leurs propres contrôles.
- Les design partners obtiennent l'accès à la même rigueur opérationnelle que le programme de certification requiert ; la certification est la documentation de ce qui tourne déjà.

## Résidence des données

**SaaS** : configurable par région. La région par défaut est par contrat. La data ne quitte pas la région.

**VPC** : votre compte cloud, votre région. Aucune data ne quitte votre périmètre.

**On-prem** : votre infrastructure, votre contrôle.

## Rétention

**Consultations** : configurable par tenant. Rétention par défaut 7 ans (alignement réglementaire). Les vieux records peuvent être archivés vers du storage moins cher tout en restant vérifiables contre le JWKS archivé.

**Events (audit trail)** : même rétention que les consultations.

**Verdicts signés** : embarqués dans le record Consultation ; la rétention suit.

**JWKS (clés publiques)** : retenues pour toujours. La vérification cold-storage dépend des clés archivées ; les supprimer casse l'audit historique.

**État principal + rule** : retenu pendant qu'actif. Les principals désactivés + rules retirées retenus selon la policy tenant (défaut 7 ans).

**Données personnelles** : Knowledge stocke les identifiants de principal (email, display name) et les contextes de consultation. Les requêtes de right-to-erasure sont handled en anonymisant le record principal + rédigeant les champs personnels du `context_snapshot` de la consultation, tout en préservant `authorization.actor` pour l'intégrité d'audit.

## Modèle de menace

Documenté à [Trust model deep dive](/docs/security-compliance/trust-model). Chaîne à quatre acteurs, menaces edge-by-edge + mitigations.

## Data-in-transit

- **Tout le trafic API** : TLS 1.3 minimum. HSTS enforcé. HTTP/2 supporté.
- **Webhooks outbound** : TLS 1.2 minimum (limité par la capacité subscriber).
- **Service-to-service interne** : mTLS entre les composants internes de Knowledge en production.

## Data-at-rest

- Tables row-level encryptées via KEK (voir [Keys inventory](/docs/security-compliance/keys-inventory) Clé 2).
- Colonnes sensibles (secrets de clé API, secrets webhook, PII de principal) encryptées per-field.
- Encryption filesystem-level + policies de backup de volume par shape de déploiement.

## Access control (personnel Asplenz)

**SaaS** :
- L'accès aux données customer restreint aux SRE on-call + engineers produit investiguant activement un incident.
- Chaque accès à data customer est loggé dans un audit trail dédié.
- Aucun accès de routine ; les queries requièrent un ticket justifié.

**VPC / on-prem** : Asplenz n'a aucun accès runtime. Le support est on-demand via votre channel de choix.

## Incident response

**SLA** :
- Critical (data breach, integrity compromise) : acknowledgement 1 heure, updates hourly.
- High (dégradation de service) : acknowledgement 4 heures, updates 4 heures.
- Standard : jour ouvré suivant.

**Notification** : customers SaaS notifiés dans les 24 heures d'un incident matériel confirmé affectant leur tenant. VPC / on-prem : votre propre équipe opérationnelle lead ; Asplenz supporte sur demande.

## Sub-processors (SaaS)

Liste actuelle :
- **Provider cloud** : AWS (région par contrat).
- **CDN / edge** : Cloudflare (pour les endpoints du site public + JWKS seulement).
- **Providers LLM** : Anthropic (Claude) comme primary. Configurable par tenant.
- **Observability** : OpenTelemetry Collector + backend par environnement Asplenz.
- **Email** : Postmark pour les emails transactionnels.

Les changements de sub-processor notifiés 30 jours à l'avance aux customers SaaS avec plans enterprise actifs.

## VPC / on-prem : aucun sub-processor

Le déploiement tourne dans votre infrastructure avec vos dépendances. Les sub-processors hosted par Asplenz sont irrelevant.

## Ce que nous ne claim PAS

Nous ne claim pas la certification SOC 2 ou ISO 27001 aujourd'hui. Nous ne claim pas la compliance HIPAA / PCI aujourd'hui (la plateforme peut supporter des déploiements HIPAA-aligned sur VPC / on-prem avec BAAs appropriés mais le programme de certification n'est pas ouvert).

Si votre procurement requiert ces certifications, plan pour l'engagement design-partner pour les séquencer - ou déployez en VPC / on-prem où vos certifications s'appliquent.

## Related

- [Page Security](/security) - contrôles opérationnels actuels.
- [Trust model](/docs/security-compliance/trust-model) - ce qu'un verdict signé garantit.
- [Keys inventory](/docs/security-compliance/keys-inventory) - matériel cryptographique.
- [Deployment shapes](/docs/security-compliance/deployment-shapes) - trade-offs SaaS vs VPC vs on-prem.
