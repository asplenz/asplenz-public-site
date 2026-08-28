---
title: Migrer d'advisory à enforcement
description: Un playbook en trois étapes pour activer l'enforcement dur sans casser le trafic. Le mode de déploiement vit sur le PEP, pas sur Knowledge.
locale: fr
kicker: Docs / Guides - Stable
---

Activer l'enforcement de signed verdict en production n'est pas booléen. Ce playbook couvre une migration en trois étapes qui laisse valider la parité avant que la frontière tool commence à refuser des appels.

**Le mode de déploiement vit sur le PEP, pas sur Knowledge.** Knowledge retourne toujours le même verdict pour le même contexte. Il ne bloque jamais, ne tourne jamais en "shadow mode" lui-même. Le PEP (votre wrapper de tool, votre intercepteur MCP, votre code custom) est celui qui décide s'il faut adviser, orchestrer une approval, ou refuser l'appel. Chaque étape ci-dessous est un changement côté PEP ; rien ne change côté Knowledge pendant la migration.

## Étape 1 : advisory (shadow)

**Objectif** : Knowledge est consulté + le verdict est vérifié, mais le PEP ne refuse pas. Vous mesurez la parité contre la logique actuelle.

**Setup** :

- Le PEP appelle `/check` ou `/resolve`, vérifie la signature, checke les bindings.
- Sur un verdict outcome autre que `allowed` : log l'intended refusal dans logs structurés + un dashboard monitoring, puis invoque l'API downstream quand même.
- Sur un bind mismatch : pareil - log + proceed.

**Exemple de config** avec `knowledge-runtime` (`require_outcome_allowed=False` skip le check outcome tout en gardant signature + bindings vérifiés) :

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    require_outcome_allowed=False,
)
def refund_customer(tx: str, amount: int):
    return refund_api.execute(tx, amount)
```

Ou avec la primitive bas-niveau quand vous voulez le contrôle total :

```python
try:
    claims = verify_verdict(
        token=signed,
        jwks_url=JWKS_URL,
        expected_bindings=expected,
        require_outcome_allowed=False,
    )
    outcome = claims["decision"]["outcome"]
    if outcome != "allowed":
        log.info("would_have_blocked", extra={"outcome": outcome, ...})
except VerdictVerificationError as e:
    log.warning("verdict_verify_failed", extra={"code": e.code})
# Proceed avec l'appel wrappé dans les deux cas en Étape 1
return refund_api.execute(tx, amount)
```

**Ce qu'il faut mesurer** :

- **False positives** : appels que Knowledge aurait bloqués mais qui étaient du business légitime. Ce sont des erreurs de policy ; fix dans le back-office (ajuster le threshold, ajouter un override, retirer la rule).
- **False negatives** : appels que Knowledge a autorisés mais qui étaient réellement risqués. Ce sont des gaps de rules ; ajouter de nouvelles rules.
- **True positives** : appels que Knowledge a bloqués correctement. C'est la valeur que vous achetez.

**Critère de sortie** : false-positive rate sous votre tolérance (target : zéro sur les chemins critiques).

## Étape 2 : approval workflow

**Objectif** : les verdicts Knowledge `approval_required` deviennent de vraies approval requests au lieu d'être ignorés. La review humaine attrape les edge cases restants avant l'enforcement dur.

**Setup** : toujours côté PEP. Le code applicatif inspecte le verdict et orchestre :

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    require_outcome_allowed=False,
)
def refund_customer(tx: str, amount: int) -> RefundOutcome:
    verdict = get_last_verdict()  # inspecte ce que le decorator a récupéré
    if verdict.outcome == "blocked":
        raise PermissionError("refund refused by policy")
    if verdict.outcome == "approval_required":
        approval_id = create_approval(
            action="refund.execute",
            justification="...",
            context=verdict.context,
        )
        return {"status": "pending_approval", "approval_id": approval_id}
    return refund_api.execute(tx, amount)
```

L'approval elle-même est créée par votre code qui appelle `POST /v1/approvals` avec le même `context` que celui qui a produit le verdict. Knowledge re-dérive les rules couvertes depuis ce contexte (voir [reference approvals](/docs/api-reference/approvals)).

**Ce qui change pour les users** : les triggers de policy auparavant invisibles deviennent des approval requests. Routez-les via Slack / email / UI back-office. Les deciders apprennent quels cas sont edge et lesquels sont de vrais risques.

**Critère de sortie** : le volume d'approvals se stabilise à un rythme soutenable (proxy pour : la calibration est bonne et les users comprennent le flow).

## Étape 3 : hard enforcement

**Objectif** : le PEP refuse sur tout verdict autre que `allowed`. Les callers ne doivent pas envoyer des opérations qui seraient refusées.

**Setup** : behavior par défaut de `@governed_tool` — `require_outcome_allowed=True` (le défaut). Le decorator raise `VerdictVerificationError(code="outcome_not_allowed")` sur `blocked` ou `approval_required`.

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
)
def refund_customer(tx: str, amount: int):
    return refund_api.execute(tx, amount)
```

**Quand skipper des étapes** :

- **Déploiements greenfield** : allez direct en Étape 3. Pas de behavior legacy à préserver.
- **Flows existants compliance-critical** : run toujours les trois étapes. Skipper le shadow c'est apprendre les problèmes de parité en trafic prod.

## Rollback

Chaque étape est un changement de config PEP, pas de redeploy code requis. Flip le flag `require_outcome_allowed` de votre PEP (ou l'équivalent dans votre intercepteur custom) via env var :

```python
require_outcome_allowed = os.environ.get("PEP_ENFORCE", "true") == "true"
```

Settez `PEP_ENFORCE=false` pour downgrader instantanément en advisory pendant un incident. Knowledge continue d'émettre des signed verdicts (audit trail préservé), le PEP arrête juste de refuser.

## Observabilité pendant la migration

Metrics à watcher (tous enregistrés côté PEP ; Knowledge lui-même n'a pas de notion d'enforcement mode) :

- `pep_calls_total{action, outcome, mode}` - volume global.
- `pep_would_have_blocked_total{action, rule}` - signal shadow.
- `pep_approvals_created_total{action}` - volume approval workflow.

Alertez sur : croissance soutenue de `would_have_blocked` (la compliance a raison, les callers ont tort) ; SLA d'approval breachés (besoin de plus de deciders ou de meilleure calibration).

## Répétez sur staging

Avant de flipper les étapes en prod, faites un load test sur staging dans le mode cible. Vérifiez que la latency + les sémantiques de refusal matchent les attentes.

## Related

- [Emergency response](/docs/guides/emergency-response) - si vous devez désactiver l'enforcement vite.
- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - ce que le PEP fait à chaque mode.
- [Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses) - le modèle du workflow approval.
