---
title: Enforcement
description: Transformez chaque décision policy en autorisation signée que la frontière du tool peut faire respecter. La gouvernance devient une propriété du tool, pas une instruction à l'agent.
locale: fr
kicker: Produit - Enforcement
---

Un verdict consultatif est de la documentation. Un agent qui consulte Knowledge et reçoit `blocked` peut toujours appeler l'API sous-jacente. C'est le vide que Knowledge comble.

Chaque réponse de `/check` et `/resolve` porte une **enveloppe d'autorisation signée** (JWS ES256) qu'un Policy Enforcement Point en aval vérifie avant que l'action métier ne s'exécute. La signature bind à l'opération exacte - action, actor, resource, parameters - pour qu'un verdict autorisant `refund_execute(TX-456, 40 EUR)` ne puisse pas être réutilisé pour un montant plus élevé ou une autre transaction.

> **L'intention d'un agent n'est pas une autorité. Les actions gouvernées exigent une preuve d'autorisation policy.**

## L'enveloppe signée

Chaque décision porte trois sections plus des metadata de timing :

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

Signature : ECDSA P-256. Vérifiable offline contre un document JWKS par tenant. Walkthrough concept complet à [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) ; source spec à `docs/specs/signed-verdict-v1.md` dans le monorepo.

## La chaîne de confiance à quatre acteurs

```
Human Principal   ->   Agent Principal   ->   Knowledge   ->   PEP   ->   Business API
(Marie)                (support-agent-17)      (PDP)         (wrapper)    (refund_api)
```

- **Human Principal** : authentifié UI/SSO. Owner de l'acte de délégation.
- **Agent Principal** : authentifié niveau API. Sa clé API bind à un `principal_id` dans Knowledge.
- **Knowledge** : rend la décision et signe l'enveloppe.
- **PEP** : le wrapper qui vérifie signature + bindings, exécute l'API sous-jacente en cas de succès.
- **Business API** : ne fait confiance qu'au PEP.

Knowledge durcit deux arêtes de cette chaîne : **Knowledge vers PEP** (la signature) et **agent vers PEP** (le binding check). Les autres arêtes dépendent de votre architecture. Le verdict signé rend explicite quels claims Knowledge authentifie et quels claims le PEP ne doit pas croire aveuglément.

## Trois chemins d'adoption

| Chemin | Cas d'usage | Effort client |
|---|---|---|
| **MCP proxy** | Stacks agentiques utilisant MCP (Claude Desktop, Cursor, plugins IDE avec serveur MCP) | Insérer le proxy devant votre serveur MCP. Zéro changement de code sur vos tools. |
| **SDK Python décorateur** | Backends Python exposant des tools à des agents | Installer `knowledge-runtime`, ajouter `@governed_tool(action, resource, bind)` par tool. |
| **PEP custom** | N'importe quel langage, framework, à la frontière de votre API métier | Vérifier l'enveloppe JWS contre le JWKS Knowledge et comparer les bindings avant d'exécuter. Petite librairie, sans dépendance framework. |

Le MCP proxy est le chemin le plus fluide pour les équipes déjà en MCP. Livré en drop-in qui lit un fichier de registry déclarant quels tools sont gouvernés. Votre serveur MCP, vos implémentations de tools, votre client host restent inchangés.

## Ce que Knowledge ne promet pas

Être explicite ici fait partie du contrat d'enforcement, ce n'est pas un disclaimer.

- **Tous les chemins vers une API métier passent par un PEP** : vos politiques réseau et IAM doivent empêcher les agents d'atteindre les APIs non-wrappées directement. Si l'agent peut contourner le wrapper, le verdict signé n'apporte aucun enforcement.
- **L'humain délégant est digne de confiance** : le claim `on_behalf_of` est authentifié uniquement quand un token de délégation ou un binding d'identité le supporte. Sinon le PEP doit le traiter comme metadata non fiable.
- **Les faits assertés par le caller sont vrais** : les faits injectés dans `/resolve` sont hashés pour audit mais pas authentifiés par champ. La provenance des faits est orthogonale.
- **Un verdict signé ne peut pas être rejoué** : la protection contre le replay est un store spent-verdicts côté PEP. À activer pour les opérations qui doivent s'exécuter exactement une fois.
- **Un verdict signé survit à des délais arbitraires** : les verdicts portent une expiry (60 secondes par défaut, configurable). Les flows longs re-consultent après approbation humaine.

## Ce que ça change pour vous

- **Trace d'autorisation prouvable.** Chaque exécution wrappée porte un artefact cryptographique citant les règles exactes qui l'ont autorisée, à un état policy précis, pour un principal agent précis, sur une ressource précise avec des paramètres précis. La reconstruction d'audit est déterministe.
- **Forge de subject bloquée.** Un agent ne peut pas forger son principal en mettant une valeur différente dans un JSON body. Le claim `actor` est dérivé de l'authentification Knowledge du caller, pas du payload de requête.
- **Détection de tampering en transit.** Toute modification de l'enveloppe signée invalide la signature.
- **Binding grant vs exécution.** Un verdict signé autorisant une opération ne peut pas être réutilisé pour une autre. Le binding est embarqué dans la signature.

## Statut - shipped 2026-08

M1 à M4bis complets. 121 tests. CI verte. Disponible aujourd'hui en déploiements design-partner ; la certification production (SOC 2, ISO 27001) démarre avec la cohorte design-partner.

**[Quickstart 5 min](/docs/quickstart-governed-tool)** &nbsp; · &nbsp; **[Setup MCP proxy](/docs/quickstart-mcp-proxy)** &nbsp; · &nbsp; **[Parlons-en](/pilot)**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Auditability](/product/auditability) | La surface d'audit que l'enveloppe signée alimente |
| [Integrations](/product/integrations) | MCP + SDK Python + spec JWKS |
| [Security](/security) | Modèle de confiance, inventaire des clés, politique de rotation |
