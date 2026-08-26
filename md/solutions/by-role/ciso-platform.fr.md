---
title: Pour CISO / platform
description: Preuve cryptographique que chaque action gouvernée a été autorisée par la policy. Une chaîne de confiance à quatre acteurs qui documente ses propres limites. Reconstitution d'audit qui survit au cold storage.
locale: fr
kicker: Solutions - Pour CISO / platform
---

Votre organisation déploie des agents IA. Votre job est de répondre à trois questions avant que ça n'arrive :

> *Comment j'audite ce que l'agent a réellement décidé ?*

> *Comment j'empêche l'agent d'agir hors de son scope autorisé ?*

> *Comment je prouve ça à un régulateur, six mois plus tard, sans scramble ?*

Knowledge répond aux deux premières directement et à la troisième structurellement.

## Preuve cryptographique à la frontière du tool

Chaque réponse `/check` et `/resolve` embarque une enveloppe JWS ES256 signée par la clé privée du tenant. Les Policy Enforcement Points en aval (wrappers de tool, proxy MCP, code custom) vérifient la signature et contrôlent que l'opération matche les bindings avant d'exécuter l'API métier sous-jacente.

Concrètement, un verdict autorisant `refund_execute(TX-456, 40 EUR)` :

- Ne peut pas être rejoué pour `refund_execute(TX-456, 4000 EUR)` - le binding `amount` ne matche pas, le PEP refuse avec `binding_mismatch`
- Ne peut pas être rejoué pour `refund_execute(TX-999, 40 EUR)` - le binding `resource` ne matche pas
- Ne peut pas être forgé avec un `actor` différent via injection JSON body - l'actor est dérivé de l'authentification Knowledge du caller, jamais du payload de requête
- Ne peut pas être vérifié passé son `expires_at` - défaut 60 secondes, configurable par tenant + par appel

La spec complète à [/product/enforcement](/product/enforcement).

## La chaîne de confiance à quatre acteurs

```
Human Principal   ->   Agent Principal   ->   Knowledge   ->   PEP   ->   Business API
```

Knowledge durcit deux arêtes de cette chaîne :

- **Knowledge -> PEP** : vérification de signature
- **Agent -> PEP** : check de binding contre l'opération signée

Les autres arêtes dépendent de votre architecture. Le modèle de confiance est explicite à [/product/enforcement](/product/enforcement) §Trust boundaries pour que votre équipe review voie exactement ce que Knowledge garantit et ne garantit pas.

## Ce que Knowledge ne garantit PAS (documenté, pas caché)

- **Tous les chemins vers une API métier passent par un PEP.** Si votre réseau / IAM permet à l'agent d'atteindre une API métier directement, aucun verdict signé n'aide. **C'est votre responsabilité d'architecture.**
- **L'humain délégant est digne de confiance.** Le claim `on_behalf_of` est authentifié uniquement quand un token de délégation ou un binding d'identité le supporte. `on_behalf_of_authenticated: false` est un cas commun ; le PEP doit le traiter comme metadata non fiable.
- **Les faits assertés par le caller sont vrais.** Les facts injectés dans `/resolve` sont hashés pour audit mais pas authentifiés par champ. La provenance des facts est orthogonale.
- **Un verdict signé ne peut pas être rejoué dans son TTL.** La protection contre le replay est un store spent-verdicts côté PEP. À activer pour les opérations exactement-une-fois.

Être explicite sur ces limites fait partie du contrat d'enforcement. Une histoire signed-verdict qui cache ses limites est pire qu'une qui les nomme.

## Surface d'audit qui survit au cold storage

Chaque consultation écrit un record Consultation qui fige les versions exactes de rules, le trace de précédence, les overrides, et le normative hash au moment de décision. Les verdicts signés ajoutent la tamper-evidence cryptographique : un auditeur peut vérifier une décision depuis cold storage des années plus tard, contre le JWKS du tenant, sans aucune dépendance à Knowledge étant en ligne.

- **Trace d'autorisation prouvable.** Chaque exécution wrappée a un artefact cryptographique citant les rules exactes qui l'ont autorisée, à un état policy précis, pour un principal agent précis, sur une ressource précise avec des paramètres précis.
- **Non-répudiation.** Le tenant ne peut pas plus tard prétendre *"Knowledge n'a pas dit ça"* - la signature prouve la décision exacte produite au moment exact.
- **Replay déterministe.** Pas par inférence de logs. À partir d'un état gelé.

L'histoire d'audit complète à [/product/auditability](/product/auditability).

## Inventaire des clés (honnête)

Knowledge ship avec quatre clés cryptographiques par déploiement, documentées à `docs/engineering/keys-guide.md` :

- **Webhook signing** (ECDSA P-256, deployment-wide) - stable
- **Encryption at rest / KEK** (Fernet AES-128-CBC + HMAC-SHA256, deployment-wide, rotation MultiFernet) - stable
- **Session JWT secret** (HS256, deployment-wide, partagée avec knowledge-mcp) - stable
- **Verdict signing** (ECDSA P-256, per-tenant comme planifié) - Option B deployment-wide aujourd'hui, Option C per-tenant est un upgrade path non-cassant

Les stories de rotation par clé sont documentées ; la rotation KEK est graceful avec zéro downtime via MultiFernet. La rotation verdict-signing retire l'ancien `kid` du JWKS après que la fenêtre de recouvrement draine les verdicts signés en vol.

## Posture compliance

État actuel, honnête :

- **SOC 2 + ISO 27001** : programme démarre avec la cohorte design-partner. Aujourd'hui, les contrôles sécurité documentés à [/security](/security) définissent la posture.
- **Résidence des données** : configurable selon la forme de déploiement. SaaS tourne dans une région fixe ; VPC et on-prem vous donnent contrôle total.
- **Rétention d'audit** : configurée par déploiement. La plateforme préserve les records d'audit ; les fenêtres de rétention sont à vous de fixer.
- **Modèle de menace** : chaîne de confiance à quatre acteurs entièrement documentée ; réponse d'incident par clé documentée ; guidance de déploiement pour isolation réseau des APIs métier documentée.

Nous ne prétendons pas ce que nous n'avons pas. Le tier design-partner est production-grade pour design partners ; les certifications complètes ship au fur et à mesure que la cohorte mûrit.

## Formes de déploiement

- **SaaS** (hosté par Asplenz) : le plus rapide à démarrer ; les certifications suivent
- **Cloud privé / VPC** : déployé dans votre compte cloud ; vous contrôlez tout
- **On-premise** : déployé sur infrastructure que vous opérez ; aucune dépendance externe au runtime au-delà de Postgres + votre provider LLM

Voir [Integrations](/product/integrations) §Formes de déploiement.

## Commencer

1. Lisez [Enforcement](/product/enforcement) - le modèle en profondeur.
2. Lisez [Security](/security) - la posture compliance.
3. Lisez `docs/engineering/keys-guide.md` dans le monorepo - l'inventaire complet des clés.
4. [Parlez-nous](/contact) pour une évaluation technique.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Enforcement](/product/enforcement) | Modèle cryptographique, chemins d'adoption, limites de confiance |
| [Auditability](/product/auditability) | Gel de Consultation, replay, tamper-evidence |
| [Security](/security) | Contrôles enterprise, clés, topologies de déploiement |
