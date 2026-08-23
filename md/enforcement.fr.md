---
title: Enforcement
description: Une décision policy ne vaut que ce qui empêche le caller de l'ignorer. Knowledge transforme chaque décision en une preuve cryptographique qu'une frontière d'exécution peut faire respecter.
locale: fr
kicker: Le contrat d'enforcement
---

Un agent qui consulte Knowledge et reçoit `blocked` peut toujours appeler l'API sous-jacente. Un moteur de règles qui produit des verdicts que vos systèmes consomment de manière consultative n'est pas un contrôle d'enforcement. C'est de la documentation.

Knowledge comble ce vide en transformant chaque décision en **artefact d'autorisation signé** qu'une frontière d'exécution en aval vérifie avant que l'opération sous-jacente ne s'exécute.

> **L'intention d'un agent n'est pas une autorité. Les actions gouvernées exigent une preuve d'autorisation policy.**

## La décision signée

Chaque réponse de `/resolve` et `/check` transporte une enveloppe signée contenant trois sections :

- **authorization** - l'opération exacte que la décision permet : action, actor, resource, parameters. C'est ce qu'un vérificateur en aval compare à l'appel entrant.
- **decision** - le résultat, les règles qui l'ont déterminé, l'état normatif du tenant au moment de la décision.
- **context_hash** - une empreinte du contexte d'évaluation policy complet, pour la reconstruction d'audit.

```
signed_verdict:
  authorization:
    action: refund_execute
    actor: principal:agent:support-agent-17
    on_behalf_of: principal:human:marie@bank.com
    on_behalf_of_authenticated: true
    resource: TX-456
    parameters:
      amount_eur: 40
  decision:
    outcome: allowed
    dominating_rule_id: rul-refund-under-100
    cited_rule_version_ids: [rv-r1, rv-r2, rv-r7]
    normative_hash: sha256:9f2a...
  context_hash: sha256:f4c1...
  issued_at: 1787500000
  expires_at: 1787500060
```

Signature : ECDSA P-256, vérifiable offline contre un JWKS public.

## Où vit l'enforcement

Quatre acteurs, chacun authentifié à une couche différente :

```pipeline
Human Principal | Marie | Authentifiée UI/SSO, délègue à un agent
Agent Principal | support-agent-17 | Authentifié niveau API, propose une action
Knowledge | L'autorité policy | Rend la décision et signe l'enveloppe
Enforcement boundary (PEP) | Wrapper de tool ou proxy | Vérifie signature + bindings, exécute l'API sous-jacente
Business API | refund_api | Fait confiance uniquement à la frontière d'enforcement
```

Knowledge durcit deux arêtes de cette chaîne : **Knowledge vers frontière d'enforcement** (la signature) et **agent vers frontière d'enforcement** (le check de binding). Les autres arêtes dépendent de votre propre architecture. Le verdict signé rend explicite quels claims Knowledge authentifie et quels claims la frontière d'enforcement ne doit pas croire aveuglément.

## La gouvernance est une propriété du tool, pas une instruction à l'agent

Le modèle habituel demande à l'agent d'être discipliné : *"pense à consulter Knowledge avant d'agir"*. Ce modèle casse quand l'agent oublie, hallucine ou est prompt-injecté.

Avec les verdicts signés, la frontière d'enforcement vit dans **le tool que l'agent appelle**, pas dans la discrétion de l'agent. Un tool gouverné ne peut pas s'exécuter sans décision signée valide autorisant cette opération exacte. Qu'un tool soit gouverné est un fait statique et déclaratif à propos du tool, colocalisé avec son implémentation.

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["tx", "amount"],
)
def refund_customer(tx, amount):
    ...
```

Enregistré une fois. Enforcé automatiquement. L'agent appelle `refund_customer(tx=102, amount=40)` normalement. Le runtime consulte Knowledge de manière transparente, vérifie le verdict signé, contrôle les bindings, et seulement ensuite invoque l'implémentation sous-jacente.

## Chemins d'adoption

| Chemin | Cas d'usage | Effort client |
|---|---|---|
| **MCP proxy** | Stacks agentiques utilisant MCP (Claude Desktop, Cursor, plugins IDE avec serveur MCP) | Insérer le proxy devant votre serveur MCP. Zéro changement de code sur vos tools. L'enforcement est ajouté par insertion du proxy. |
| **Décorateur SDK** | Backends Python ou TypeScript exposant des tools à des agents | Installer le runtime, ajouter `@governed_tool` par tool. Pas de wrappers écrits à la main. |
| **PEP custom** | N'importe quel langage, n'importe quel framework, à la frontière de votre API métier | Vérifier l'enveloppe JWS contre le JWKS Knowledge et comparer les bindings avant d'exécuter. Petite librairie, pas de dépendance framework. |

Le MCP proxy est le chemin le plus fluide pour les équipes déjà en MCP. Il est livré en drop-in qui lit un fichier de registry déclarant quels tools sont gouvernés. Votre serveur MCP, vos tools, et votre client host restent inchangés.

## Ce que Knowledge ne promet pas

La proposition de valeur est **"we make enforcement possible, not automatic"**. Explicitement :

| Pas ceci | Responsabilité client |
|---|---|
| **Tous les chemins vers une API métier passent par un PEP** | Vos politiques réseau et IAM doivent empêcher les agents d'atteindre les APIs non-wrappées directement. Si l'agent peut contourner le wrapper, le verdict signé n'apporte aucun enforcement. |
| **L'humain délégant est digne de confiance** | Le claim `on_behalf_of` est authentifié uniquement quand un token de délégation ou un binding d'identité le supporte. Quand non authentifié, les PEPs doivent le traiter comme metadata non fiable. |
| **Les faits assertés par le caller sont vrais** | Les faits injectés dans `/resolve` (tier client, statut KYC, âge transaction) sont hashés pour audit mais pas authentifiés par champ. La provenance des faits est une préoccupation séparée. |
| **Un verdict signé ne peut pas être rejoué** | La protection contre le replay est un store spent-verdicts côté PEP. À activer pour les opérations qui doivent s'exécuter exactement une fois. |
| **Un verdict signé survit à des délais arbitraires** | Les verdicts portent une expiry (60 secondes par défaut, configurable). Les flows longs re-consultent après approbation humaine. |

Être explicite ici est le point : une primitive d'enforcement qui cache ses limites de confiance est pire qu'une qui les documente.

## Ce qu'un CISO obtient

Adopter les verdicts signés Knowledge ajoute quatre propriétés difficiles à obtenir avec un moteur de règles consultatif :

- **Trace d'autorisation prouvable.** Chaque exécution wrappée dispose d'un artefact cryptographique citant les règles exactes qui l'ont autorisée, à un état policy précis, pour un principal agent précis, sur une ressource précise avec des paramètres précis. La reconstruction d'audit est déterministe.
- **Forge de subject bloquée.** Un agent ne peut pas forger son principal en mettant une valeur différente dans un JSON body. `actor` est dérivé de l'authentification Knowledge du caller, pas du payload de requête.
- **Détection de tampering en transit.** Toute modification de l'enveloppe signée invalide la signature. Un verdict tronqué ou édité est rejeté à la frontière.
- **Binding grant vs exécution.** Un verdict signé autorisant `refund_execute(TX-456, 40 EUR)` ne peut pas être réutilisé pour une autre transaction, un montant plus élevé, ou une action différente. Le binding est embarqué dans la signature.

La rotation des clés est standard : clés compromises retirées du JWKS, nouveaux verdicts signés sous le nouveau `kid`, la fenêtre de recouvrement draine les tokens valides existants.

## Trois idées à retenir

**Un verdict que votre caller peut ignorer est de la documentation. Un verdict signé qu'une frontière en aval refuse d'exécuter sans est de l'enforcement.**

**La gouvernance est une propriété du tool, pas une instruction à l'agent.**

**Knowledge produit la preuve. La frontière d'exécution du client la consomme. C'est à la frontière entre les deux que vit l'enforcement.**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Comment ça marche](/how-it-works) | Le modèle mental de `/resolve` et la résolution progressive |
| [Sécurité](/security) | Le modèle de confiance complet, rotation de clés, isolation tenant |
| [Fonctionne avec votre stack](/stack) | Patterns d'insertion, y compris le chemin MCP proxy |
| [Design partner](/pilot) | L'engagement founding-partner |
