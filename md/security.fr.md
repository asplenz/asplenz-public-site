---
title: Sécurité et enterprise readiness
description: Standards, contrôles, enforcement cryptographique et formes de déploiement. Assez pour répondre aux premières questions ; parlez-nous pour le reste.
locale: fr
kicker: Modèle de sécurité
ctaLabel: Discutons sécurité avec nous
ctaHref: mailto:contact@asplenz.com
contactEmail: contact@asplenz.com
---

Knowledge est conçu pour être déployé dans des environnements où le coût d'une autorisation fausse ou forgée est matériel. Les contrôles standards sont résumés ci-dessous. Pour un questionnaire de sécurité, une revue spécifique à un déploiement, ou une exigence de contrôle particulière, [écrivez-nous](mailto:contact@asplenz.com).

## Enforcement, pas seulement consultatif

Un moteur de règles consultatif retourne un verdict que vos systèmes peuvent ignorer. Knowledge émet en plus, sur chaque décision, un **artefact d'autorisation cryptographiquement signé** (JWS ES256) qu'une frontière d'enforcement en aval vérifie avant que l'action métier sous-jacente ne s'exécute.

- Chaque réponse `/resolve` et `/check` inclut une enveloppe signée contenant l'opération que la décision permet (action, actor, resource, parameters), le résultat, et l'état normatif du tenant au moment de la décision.
- Les signatures se vérifient offline contre un JWKS par tenant. Pas de round-trip vers Knowledge par vérification.
- La signature est bindée à l'opération exacte. Un verdict autorisant `refund_execute(TX-456, 40 EUR)` ne peut pas être réutilisé pour une autre transaction, un montant plus élevé, ou une action différente.
- Le claim `actor` est dérivé de l'authentification Knowledge du caller (binding API key vers principal), pas du body de requête. Un caller ne peut pas forger son propre subject.

Voir [Enforcement](/product/enforcement) pour le modèle de confiance complet et les chemins d'adoption.

## Authentification

Les callers machine s'authentifient avec des API keys envoyées en `X-API-Key`. Les utilisateurs humains s'authentifient à travers l'UI back-office avec un flow de cookie de session.

Le SSO (OIDC) et le provisioning d'identité (SCIM) sont supportés au niveau plateforme et peuvent être scopés à l'onboarding pour les déploiements qui en ont besoin.

## Autorisation

L'accès est role-based et scopé par tenant. Les rôles standards couvrent l'autorship de policy, la décision, la consommation et l'administration. Les opérations sensibles (comme la rotation de clés ou les intégrations system-level) ne sont jamais impliquées par un rôle et doivent être accordées explicitement.

## Isolation de tenant

Chaque entité gouvernée est scopée à un tenant. Les requêtes filtrent sur tenant au niveau du service ; le moteur ne voit jamais de données d'un autre tenant. L'accès cross-tenant n'est pas possible via l'API.

## Clés de signature

Deux keypairs distincts par tenant, tous deux ECDSA P-256 :

- **Clé de signature webhook** authentifie les payloads webhook sortants pour que les consommateurs vérifient l'origine et l'intégrité.
- **Clé de signature verdict** authentifie l'enveloppe signée retournée sur chaque décision `/resolve` et `/check`.

Les clés sont gardées séparées parce que les blast radii diffèrent. Une clé de signature verdict compromise permettrait à un attaquant de forger des autorisations pour des opérations arbitraires, ce qui est strictement plus large que forger des notifications. Même infrastructure KMS, même politique de rotation, matériel de clé privée séparé.

La rotation retire l'ancien `kid` du JWKS après que la fenêtre de recouvrement draine les verdicts signés en vol.

## Chiffrement

Les données sensibles stockées (credentials de services externes, clés de signature, secrets) sont chiffrées au repos. Le chiffrement en transit est géré par le proxy ou le load balancer en amont, standard pour les déploiements enterprise.

## Audit

Chaque mutation d'une entité gouvernée et chaque décision que le moteur produit est enregistrée avec le principal et l'état au moment. Les verdicts signés étendent la reconstruction d'audit : chaque exécution wrappée porte un artefact cryptographique citant les règles exactes qui l'ont autorisée, à un état policy précis, pour un principal agent précis, sur une ressource précise avec des paramètres précis. Voir [Auditability](/product/auditability) pour ce qu'une record de décision contient et comment elle peut être rejouée.

## Limites de confiance (ce que Knowledge ne fait pas)

Être explicite sur les limites est un contrôle en soi.

| Pas ceci | Responsabilité client |
|---|---|
| **Tous les chemins vers une API métier passent par un PEP** | Les politiques réseau et IAM doivent empêcher les agents d'atteindre les APIs non-wrappées directement. |
| **L'humain délégant est digne de confiance** | Les claims `on_behalf_of` non authentifiés sont exposés avec un flag explicite pour que les PEPs en aval ne les traitent pas comme autorité. |
| **Les faits assertés par le caller sont vrais** | Les faits injectés dans `/resolve` sont hashés pour audit mais pas authentifiés par champ. La provenance des faits est un contrôle séparé. |
| **Un verdict signé ne peut pas être rejoué** | La protection contre le replay est un store spent-verdicts côté PEP. À activer pour les opérations qui doivent s'exécuter exactement une fois. |
| **Un verdict signé survit à des délais arbitraires** | Les verdicts portent une expiry (60 secondes par défaut, configurable). Les flows longs re-consultent après approbation humaine. |

Voir [Enforcement](/product/enforcement) §Trust boundaries et [Trust model deep dive](/docs/security-compliance/trust-model) pour le modèle de confiance à quatre acteurs en entier.

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
| [Enforcement](/product/enforcement) | Le verdict signé et le modèle PEP, la chaîne de confiance à quatre acteurs, chemins d'adoption |
| [Auditability](/product/auditability) | La surface d'autorship, versioning et approbation protégée par les contrôles de cette page |
| [Integrations](/product/integrations) | La surface API à laquelle les contrôles d'authentification et d'autorisation s'appliquent |
| [Design partner](/design-partners) | Trois places founding, une décision production, pricing founding-customer |
