---
title: Migrer d'advisory à enforcement
description: Un playbook en trois étapes pour turn on hard enforcement sans casser le trafic.
locale: fr
kicker: Docs / Guides - Stable
---

Turn on signed-verdict enforcement en production n'est pas un boolean. Ce playbook couvre une migration en trois étapes qui vous laisse valider la parité avant que la frontière du tool commence à refuser les appels.

## Étape 1 : advisory-only (shadow mode)

**Goal** : Knowledge consulte + logue mais ne refuse pas. Vous mesurez la parité contre la logique actuelle.

**Setup** :

- Déployez le PEP avec `enforcement_mode: advisory`.
- Sur chaque appel intercepté, le PEP appelle `/check` ou `/resolve`, vérifie la signature, checke les bindings.
- Sur un refus qui aurait bloqué : loguez le refus intended dans les logs structurés + un dashboard de monitoring, puis invoquez l'API downstream quand même.
- Sur un bind mismatch : idem - log + procède.

**Config example** (`knowledge-runtime`) :

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    client=client,
    enforcement_mode="advisory",
)
def refund_customer(tx: str, amount: int):
    return refund_api.execute(tx, amount)
```

**Ce qu'il faut mesurer** :

- **False positives** : appels que Knowledge aurait bloqués mais qui étaient légitimes. Ce sont des erreurs de policy ; fix dans le back-office (ajuster threshold, ajouter un override, retirer la rule).
- **False negatives** : appels que Knowledge a allowed mais qui étaient en fait risqués. Ce sont des gaps de rule ; ajoutez de nouvelles rules.
- **True positives** : appels que Knowledge a correctement bloqués. C'est la valeur que vous achetez.

**Critère de sortie** : taux de false-positive sous votre tolérance (target : zéro dans les critical paths).

## Étape 2 : soft-fail (approval workflow)

**Goal** : les refus de Knowledge se convertissent en `approval_required` à la couche PEP, pas en refus hard. La review humaine attrape les edge cases restants avant l'enforcement.

**Setup** :

- `enforcement_mode: approval_workflow`.
- Sur refus, le PEP crée une Approval via `/v1/approvals` et retourne 202-Accepted au caller avec une URL de status.
- L'appel downstream attend (ou poll) l'approbation.
- Sur approve, verdict re-émis comme `allowed` (via le grant Override Type 3).

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    client=client,
    enforcement_mode="approval_workflow",
)
def refund_customer(tx: str, amount: int):
    ...
```

**Ce qui change pour les users** : les triggers de policy précédemment invisibles deviennent maintenant des requêtes d'approbation. Routez-les via Slack / email / UI back-office. Les deciders apprennent quels cas sont edge et lesquels sont de vrais risques.

**Critère de sortie** : le volume d'approbations se stabilise à un taux soutenable (proxy pour : la calibration est bonne et les users comprennent le flow).

## Étape 3 : hard enforcement

**Goal** : les refus sont terminaux. Les callers ne doivent pas envoyer d'opérations qui seraient refusées.

**Setup** :

- `enforcement_mode: enforce`.
- Les refus raise des erreurs typées ; les callers doivent les handler (retry avec des parameters différents, escalate vers humain, abandon).

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    client=client,
    enforcement_mode="enforce",
)
def refund_customer(tx: str, amount: int):
    ...
```

**Quand skip des étapes** :

- **Déploiements greenfield** : allez directement à l'Étape 3. Aucun comportement legacy à préserver.
- **Flows existants compliance-critical** : faites toujours tourner les trois étapes. Skip shadow signifie apprendre les problèmes de parité en trafic production.

## Rollback

Chaque étape est un changement de config, pas de redéploiement de code requis (avec `knowledge-runtime` :

```python
client = KnowledgeClient(..., default_enforcement_mode=os.environ["KNOWLEDGE_ENFORCEMENT"])
```

Set `KNOWLEDGE_ENFORCEMENT=advisory` pour downgrader instantanément dans un incident. Le verdict signé est toujours émis (trail d'audit préservé), juste pas bloquant.

## Observability pendant la migration

Metrics à watcher (voir [Config reference](/docs/mcp-proxy/config-reference) pour le proxy MCP) :

- `governed_tool_calls_total{action, verdict, mode}` - volume global.
- `governed_tool_would_have_blocked_total{action, rule}` - signal shadow.
- `governed_tool_approvals_created_total{action}` - volume workflow d'approbation.

Alertez sur : croissance soutenue de `would_have_blocked` (compliance a raison, callers ont tort) ; breaches SLA d'approbation (besoin de plus de deciders ou meilleure calibration).

## Répéter sur staging

Avant de flipper les étapes en production, faites tourner un load test sur staging dans le mode target. Vérifiez que la latence + sémantique de refus matche les attentes.

## Related

- [Emergency response](/docs/guides/emergency-response) - si vous avez besoin de désactiver l'enforcement rapidement.
- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - ce que le PEP fait à chaque mode.
- [Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses) - le modèle workflow d'approval.
