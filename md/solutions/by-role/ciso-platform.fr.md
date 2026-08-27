---
title: Donnez aux agents IA de l'autonomie sans donner l'autorité au modèle
description: Knowledge sépare ce que l'agent décide de faire de ce qu'il est autorisé à faire. Les actions gouvernées peuvent exiger une autorisation policy indépendante à la frontière du tool, avec un trail d'audit qui enregistre exactement ce qui a autorisé chaque exécution.
locale: fr
kicker: Solutions - Pour CISO et équipes Platform
---

Votre organisation déploie des agents IA qui vont investiguer des cas, rassembler des preuves et prendre des actions métier réelles. Votre job est de permettre ça sans laisser le modèle devenir l'autorité sur ce qui est autorisé.

Avant les agents, une application traversait des chemins de code connus, appelait des APIs connues, sous des permissions connues. Chaque chemin pouvait être raisonné statiquement. Avec un agent décisionnel, l'action prise émerge du raisonnement du modèle au runtime. Le chemin est dynamique.

La question à laquelle vous devez répondre :

> *Comment donner à un agent IA de l'autonomie sans donner l'autorité au modèle ?*

Knowledge sépare les deux.

**Le modèle propose. La policy autorise. Votre architecture enforce.**

## Pourquoi les contrôles classiques ne suffisent pas seuls

Vous avez déjà IAM, RBAC, API gateways, service accounts, OAuth. Ces contrôles répondent à *qui peut appeler*.

Ils ne répondent pas à *si cette action métier spécifique devrait arriver*, étant donné l'état policy courant, le contexte courant, et l'identité de l'humain pour le compte duquel l'agent agit.

Considérez un tool d'agent support :

| Couche | Ce qu'elle décide |
|---|---|
| **IAM / RBAC** | Le service account de l'agent support PEUT appeler l'API refund. |
| **API gateway** | La requête est bien formée et rate-limited. |
| **Business policy** | Refund de €40 sur TX-456, pour un client Gold, raison delayed-shipment, sous la refund policy v12 courante, agissant pour hum-alice - **cette action spécifique est-elle autorisée ?** |

IAM sait qui. La policy sait si. Knowledge est cette couche policy, à côté des contrôles d'identité et réseau que vous avez déjà.

## Séparer intention et autorité

```
Agent
  |  comprend, investigue, propose
  ↕
Knowledge
  |  applique la policy, résout la précédence
  |  détermine : allow / approval required / block
  ↓
Point d'enforcement
  |  vérifie que l'autorisation matche l'action proposée exacte
  ↓
API métier
```

L'agent peut proposer. Knowledge détermine l'autorité. Le point d'enforcement vérifie que les deux matchent, à la frontière du tool, avant que l'action sous-jacente ne puisse s'exécuter.

## Rendre l'autorisation policy enforceable

Une décision policy seule est advisory. Pour les actions gouvernées, Knowledge peut émettre une preuve d'autorisation liée à l'opération exacte que l'agent propose.

Un verdict autorisant :

```
refund
transaction = TX-456
amount = €40
actor = SupportAgent-17
```

ne peut pas être réutilisé pour exécuter :

```
amount = €4,000
transaction = TX-999
un principal agent différent
une action expirée
```

Le point d'enforcement (wrapper de tool, proxy MCP, code custom) vérifie que l'autorisation et l'opération matchent avant que l'API métier ne soit appelée. Sur n'importe quel mismatch, l'action sous-jacente ne tourne pas.

Modèle technique complet à [Enforcement](/product/enforcement).

## Donner à chaque équipe agent la même primitive de gouvernance

Les équipes Platform ont un second problème quand plusieurs équipes commencent à shipper des agents. Sans standard, chaque équipe construit sa propre couche de contrôle :

```
Agent A         Agent B          Agent C
policy dans     policy dans      policy dans
les prompts     config JSON      code Python

flow            format d'audit   rate limits
d'approval      différent        différents
custom

logs custom     logs custom      logs custom
```

Platform doit reviewer un modèle de gouvernance différent sur chaque projet. Avec Knowledge comme primitive standard :

```
              Knowledge
                 ↓
    interface de décision commune
    preuve d'autorisation commune
    pattern d'enforcement commun
    sémantique d'audit commune

Agent A ─┐
Agent B ─┼→ même surface de gouvernance
Agent C ─┘
```

Toutes les règles n'ont pas à être centralisées. Mais chaque décision rule-governed suit le même pattern de gouvernance. Reviews, audits et incident response deviennent du travail que vous faites une fois, pas par équipe.

## Reconstruire l'autorisation, pas juste l'activité

Les logs classiques répondent à *ce qui s'est passé* :

```
POST /refund/execute
200 OK
service = agent-service
14:32:18
```

Knowledge répond à *ce qui l'a autorisé* :

```
Agent           : SupportAgent-17
Acting for      : hum-alice (authenticated: false)
Action          : refund TX-456 €40

Policy          : Refund Policy v12
Règle gagnante  : R-771 v7
Règles citées   : R-182 v3, R-771 v7
Override humain : Aucun

Autorisation    : signée, bound, timestampée
Décidé le       : 2026-03-15T09:12:00Z
Expire le       : 2026-03-15T09:13:00Z
```

Pas dérivé des logs. L'état policy exact et la preuve d'autorisation, gelés au moment de décision. Quand l'audit est une question policy (« qui a autorisé cette action, sous quelles règles, à quel moment »), le record est déterministe.

Histoire d'audit complète à [Auditability](/product/auditability).

## Frontières de sécurité claires. Pas de claims magiques.

Être explicite sur les limites fait partie du contrat de sécurité, pas une caveat.

| Frontière | Ce que Knowledge ne garantit pas |
|---|---|
| **Bypass API** | Knowledge ne peut pas protéger une API que l'agent peut atteindre en contournant le point d'enforcement. Votre réseau et IAM décident si ce chemin existe. |
| **Délégation** | Knowledge ne prouve pas automatiquement que l'identité humaine claimed par un agent a réellement délégué l'autorité. Le claim `on_behalf_of` n'est authentifié que quand un token de délégation ou un identity binding le supporte. |
| **Fact provenance** | Signer une décision policy ne prouve pas que chaque fact d'input était vrai. Les facts fournis à Knowledge sont hashés pour audit mais pas authentifiés par champ. La fact provenance est un contrôle séparé. |
| **Replay** | La sémantique exactly-once exige une protection de replay au point d'enforcement. Knowledge set une expiry ; le store spent-verdicts est votre responsabilité à activer pour les opérations exactly-once. |

Modèle de menace complet à [Enforcement](/product/enforcement) et [Security](/security).

## Déployer dans votre modèle de sécurité

| Couche | Détails |
|---|---|
| **Formes de déploiement** | SaaS (hosté par Asplenz, le plus rapide à démarrer), cloud privé / VPC (dans votre compte, vous contrôlez le placement réseau et la résidence), on-premise (aucune dépendance externe au runtime au-delà de Postgres et votre provider LLM). |
| **Résidence des données** | Configurable par forme de déploiement. |
| **Certifications sécurité** | Le programme SOC 2 et ISO 27001 démarre avec la cohorte design-partner. Les contrôles de sécurité d'aujourd'hui sont documentés à [/security](/security). Nous ne claim pas ce que nous n'avons pas. |
| **Modèle de menace** | Frontières de confiance, incident response et guidance de déploiement pour l'isolation réseau des APIs métier sont documentés et reviewable. |

Inventaire de clés détaillé, stories de rotation et guidance d'isolation réseau à [Security](/security).

## Évaluer une action agent gouvernée

Commencez par une action que vous n'êtes pas à l'aise de laisser un agent exécuter sur le jugement du modèle seul. Wrappez-la. Vérifiez le comportement d'autorisation en shadow mode. Cutoverez vers l'enforcement quand le trail d'audit atteint votre bar.

**[Security](/security)** &nbsp; · &nbsp; **[Parlez-nous](/contact) pour une évaluation technique**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Product](/product) | La boucle de décision pour agents IA rule-governed |
| [Enforcement](/product/enforcement) | Modèle cryptographique, chemins d'adoption, frontières de confiance complètes |
| [Auditability](/product/auditability) | Gel de Consultation, replay, tamper-evidence |
| [Security](/security) | Contrôles enterprise, inventaire des clés, topologies de déploiement |
