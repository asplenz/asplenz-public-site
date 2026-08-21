---
title: Sécurité et enterprise readiness
description: Standards, contrôles et formes de déploiement. Assez pour répondre aux premières questions ; parlez-nous pour le reste.
locale: fr
kicker: Modèle de sécurité
ctaLabel: Discutons sécurité avec nous
ctaHref: mailto:contact@asplenz.com
contactEmail: contact@asplenz.com
---

Knowledge est conçu pour être déployé dans des environnements régulés — les contrôles standards sont résumés ci-dessous. Pour un questionnaire de sécurité, une revue spécifique à un déploiement, ou une exigence de contrôle particulière, [écrivez-nous](mailto:contact@asplenz.com).

## Authentification

Les callers machine s'authentifient avec des API keys envoyées en `X-API-Key`. Les utilisateurs humains s'authentifient à travers l'UI back-office avec un flow de cookie de session.

Le SSO (OIDC) et le provisioning d'identité (SCIM) sont supportés au niveau plateforme et peuvent être scopés à l'onboarding pour les déploiements qui en ont besoin.

## Autorisation

L'accès est role-based et scopé par tenant. Les rôles standards couvrent l'autorship de policy, la décision, la consommation et l'administration. Les opérations sensibles (comme la rotation de clés ou les intégrations system-level) ne sont jamais impliquées par un rôle et doivent être accordées explicitement.

## Isolation de tenant

Chaque entité gouvernée est scopée à un tenant. Les requêtes filtrent sur tenant au niveau du service ; le moteur ne voit jamais de données d'un autre tenant. L'accès cross-tenant n'est pas possible via l'API.

## Chiffrement

Les données sensibles stockées (credentials de services externes, clés de signature, secrets) sont chiffrées au repos. Le chiffrement en transit est géré par le proxy ou le load balancer en amont, standard pour les déploiements enterprise.

## Audit

Chaque mutation d'une entité gouvernée et chaque décision que le moteur produit est enregistrée avec le principal et l'état au moment. Voir [Gouvernance](/governance) pour ce qu'une record de décision contient et comment elle peut être rejouée.

## Delivery webhook

Les payloads de webhook sortants sont cryptographiquement signés pour que les consommateurs puissent vérifier l'origine et l'intégrité.

## Options de déploiement

| Forme | Où ça tourne |
|---|---|
| **SaaS** | Hébergé par Asplenz. Le plus rapide à démarrer |
| **Cloud privé / VPC** | Déployé dans votre compte cloud. Vous contrôlez le placement réseau, les backups et la résidence |
| **On-premise** | Déployé sur une infrastructure que vous opérez |

Le moteur n'a aucune dépendance externe au runtime au-delà d'un store relationnel standard et, quand la couche de reasoning est utilisée, d'un fournisseur LLM que vous configurez.

## Certifications et périmètre de déploiement

- **Certifications formelles (SOC 2, ISO 27001)** : le programme démarre pendant la cohorte design-partner. Aujourd'hui, les contrôles ci-dessus définissent la posture de sécurité.
- **Résidence des données** : configurable selon la forme de déploiement. Le SaaS tourne dans une région fixe ; le VPC et l'on-prem vous donnent un contrôle total.
- **Rétention d'audit** : configurée par déploiement. La plateforme préserve les records d'audit ; les fenêtres de rétention sont à vous de fixer.

## Discutons sécurité avec nous

Pour des questionnaires de sécurité détaillés, des revues spécifiques à un déploiement ou des exigences de contrôle particulières, écrivez à [contact@asplenz.com](mailto:contact@asplenz.com).

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Gouvernance](/governance) | La surface d'autorship, versioning et approbation protégée par les contrôles de cette page |
| [Developers](/developers) | La surface API à laquelle les contrôles d'authentification et d'autorisation s'appliquent |
| [Design partner](/pilot) | Trois places founding, une décision production, pricing founding-customer |
