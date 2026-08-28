---
title: Quand les agents prennent des décisions métier, la policy doit rester l'autorité
description: Knowledge laisse les agents IA investiguer et rassembler le contexte pendant que des règles déterministes font la détermination policy. L'autorisation signée laisse la frontière du tool faire respecter exactement ce que cette décision permet.
locale: fr
kicker: Produit - Enforcement
---

## Quand un agent IA prend la décision métier

Certains agents font plus qu'orchestrer des workflows ou appeler des fonctions métier prédéfinies. Ils investiguent un cas, rassemblent les preuves, consultent les règles métier, et décident ce que l'organisation devrait faire.

Un agent claims peut décider d'approuver une réclamation. Un agent support peut déterminer à quelle compensation un client a droit. Un agent financial-services peut décider si une requête peut procéder de façon autonome ou requiert une approbation humaine.

Dans ces systèmes, le LLM peut investiguer et rassembler le contexte. L'organisation peut ne pas vouloir que le modèle lui-même soit l'autorité finale sur la policy.

Knowledge sépare les deux.

> **L'IA investigue. Knowledge fait la détermination policy.**

## Pourquoi une décision policy n'est pas la même chose qu'un enforcement

Knowledge dit à l'agent ce que la policy dit. Mais si l'agent est responsable du respect de cette décision, le contrôle reste advisory.

Considérez un flow refund gouverné. Knowledge évalue le cas et retourne ALLOWED pour un petit refund sur TX-456, ou BLOCKED pour un plus grand sur TX-999. L'agent, détenant la décision, pourrait quand même l'ignorer ou en diverger :

```
Knowledge  :  refund TX-456 €40      ->   ALLOWED
Agent      :  refund TX-456 €4,000

Knowledge  :  refund TX-999          ->   BLOCKED
Agent      :  appelle l'API refund quand même
```

Un verdict advisory est de la documentation. Enforcement fait que la frontière du tool refuse elle-même les actions qui n'ont pas été autorisées par l'opération exacte que Knowledge a vue.

## Ce que Enforcement change

Transforme la détermination policy en autorisation que la frontière d'exécution peut vérifier.

```pipeline
L'IA investigue | Rassemble faits, preuves, contexte
Knowledge décide | Verdict déterministe avec règles citées
Autorisation signée | Enveloppe liant l'opération exacte
La frontière du tool enforce | Le PEP vérifie avant exécution
```

Chaque réponse de `/check` et `/resolve` porte une enveloppe d'autorisation signée (JWS ES256). Un Policy Enforcement Point en aval vérifie la signature et les bindings d'opération exacts (action, actor, resource, parameters) avant de faire tourner l'API métier sous-jacente.

> **L'intention d'un agent n'est pas une autorité. Les actions gouvernées requièrent une preuve d'autorisation policy.**

## Comment fonctionne l'autorisation signée

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

- **Human Principal** : authentifié à UI/SSO. Owns l'acte de délégation.
- **Agent Principal** : authentifié à la couche API. Sa clé API bind à un `principal_id` dans Knowledge.
- **Knowledge** : rend la décision et signe l'enveloppe.
- **PEP** : le wrapper qui vérifie signature + bindings, fait tourner l'API sous-jacente sur succès.
- **Business API** : ne trust que le PEP.

Knowledge durcit deux arêtes de cette chaîne : **Knowledge vers PEP** (la signature) et **agent vers PEP** (le check de binding). Les autres arêtes dépendent de votre architecture. Le verdict signé rend explicite quels claims Knowledge authentifie et lesquels le PEP ne doit pas trust aveuglément.

## Trois chemins d'adoption

| Chemin | Fit | Effort client |
|---|---|---|
| **Intercepteur de tool call MCP** | Stacks d'agent tournant MCP (Claude Desktop, Cursor, plugins IDE avec serveur MCP) | Wrapper les tool calls à travers votre serveur MCP avec `verify_verdict` avant exécution. Exemple de référence dans le monorepo à copier et adapter. |
| **Décorateur SDK Python** | Backends Python exposant des tools aux agents | Installer `knowledge-runtime`, ajouter `@governed_tool(action, resource, bind)` par tool. |
| **PEP custom** | N'importe quel langage, n'importe quel framework, à la frontière de votre API métier | Vérifier l'enveloppe JWS contre Knowledge JWKS et comparer les bindings avant d'exécuter. Petite librairie, aucune dépendance de framework. |

Pour les équipes tournant déjà MCP, le pattern d'intercepteur est le fit naturel. La primitive `verify_verdict` reste stable ; la glue MCP s'adapte à votre framework, transport et modèle d'auth.

## Ce que Knowledge ne promet PAS

Être explicite ici fait partie du contrat d'enforcement, pas une caveat.

- **Chaque chemin vers une API métier passe par un PEP** : vos policies réseau et IAM doivent empêcher les agents d'atteindre des APIs non-wrappées directement. Si l'agent peut bypass le wrapper, le verdict signé ne fournit aucun enforcement.
- **L'humain délégant est trustworthy** : le claim `on_behalf_of` est authentifié uniquement quand un token de délégation ou un identity binding le supporte. Sinon le PEP doit le traiter comme metadata non-trusted.
- **Les facts assertés par le caller sont vrais** : les facts injectés dans `/resolve` sont hashés pour audit mais pas authentifiés par champ. La provenance des facts est orthogonale.
- **Un verdict signé ne peut pas être rejoué** : la protection replay est un store spent-verdicts côté PEP. À activer pour les opérations qui doivent s'exécuter exactement une fois.
- **Un verdict signé survit à des délais arbitraires** : les verdicts portent une expiry (défaut 60 secondes, configurable). Les flows long-running re-consultent après approbation humaine.

## Ce que ça change pour vous

- **Trace d'autorisation prouvable.** Chaque exécution wrappée a un artefact cryptographique citant les règles exactes qui l'ont autorisée, à un état policy précis, pour un principal agent précis, sur une ressource précise avec des paramètres précis. La reconstruction d'audit est déterministe.
- **Durci contre la sub-forgery.** Un agent ne peut pas forger son principal en mettant une valeur différente dans un body JSON. Le claim `actor` est dérivé de l'authentification Knowledge du caller, pas du payload de requête.
- **Détection du tampering-in-transit.** Toute modification de l'enveloppe signée invalide la signature.
- **Binding grant-vs-execution.** Un verdict signé autorisant une opération ne peut pas être réutilisé pour une autre. Le binding est embarqué dans la signature.

## Status - shipped 2026-08

M1 à M4bis complets. 121 tests. CI vert. Disponible aujourd'hui dans les déploiements design-partner ; certification production (SOC 2, ISO 27001) démarre avec la cohorte design-partner.

**[Quickstart 5 min](/docs/quickstart-governed-tool)** &nbsp; · &nbsp; **[Knowledge comme serveur MCP](/docs/quickstart-knowledge-mcp)** &nbsp; · &nbsp; **[Discuter de votre use case](/contact)**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Product](/product) | La boucle de décision pour agents IA rule-governed |
| [Auditability](/product/auditability) | La surface d'audit que l'enveloppe signée alimente |
| [Integrations](/product/integrations) | MCP + SDK Python + spec JWKS |
| [Security](/security) | Modèle de confiance, inventaire des clés, policy de rotation |
