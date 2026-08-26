---
title: Overrides, approbations, pauses
description: Les trois mécanismes d'exception gouvernés que Knowledge offre, et quand chacun est le bon outil.
locale: fr
kicker: Docs / Concepts - Stable
---

Les rules sont la valeur par défaut. Quand un cas doit passer malgré le default, Knowledge expose trois mécanismes gouvernés distincts - chacun avec un lifecycle et une forme d'audit différents.

## Approval (`apr-`)

Une **Approval** est un objet de gouvernance créé quand une rule retourne `require_approval`. Elle représente une requête pour qu'un decider humain autorise une opération spécifique.

**Forme :**

```json
{
  "id": "apr-abc123",
  "requester": "agn-rm-copilot",
  "requester_principal": "hum-marie",
  "intended_action": "refund.execute",
  "intended_resource": "TX-456",
  "intended_parameters": { "amount_eur": 400 },
  "triggers": [
    { "rule_id": "rul-refund-over-100",
      "rule_version_id": "rv-abc",
      "reason": "amount_eur > 100" }
  ],
  "status": "pending",
  "decider": null,
  "decision": null,
  "decided_at": null,
  "grants": []
}
```

**Lifecycle** : une approbation par opération. Plusieurs rules déclenchantes deviennent entrées dans `triggers[]`, mais un seul bouton « Approve » dans l'UI les résout collectivement. Sur approbation, le decider peut optionnellement attacher un `Override` via `grants[]`.

**Sémantique de fire** : le body de l'approval ship toujours avec la forme d'opération exacte (`intended_action`, `intended_resource`, `intended_parameters`) pour que le decider sache précisément ce qu'il autorise.

## Override (`ovr-`)

Un **Override** est une autorisation ongoing pour un set de rules d'être neutralisées sur un scope borné. Contrairement à une approval (per-opération), un override peut couvrir plusieurs opérations futures qui tombent dans son scope.

**Types** :

- **Type 1 - Exception standing.** Créée manuellement par un admin pour autoriser en permanence une exception scoped (rare, high-friction).
- **Type 2 - Time-bounded.** Idem, mais avec un `expires_at`.
- **Type 3 - Grantée par approval.** La plus commune. Une `Approval` décide yes et crée simultanément un override qui couvre « opérations de ce genre » dans un scope borné.

**Champ mandatory** : `applies_to_scope`. Les overrides ne sont jamais blanket ; ils spécifient toujours le scope à l'intérieur duquel ils autorisent l'exception.

**Versioning** : symétrique à Rule. Chaque changement d'override écrit un nouveau `OverrideVersion` (`ovv-`) et les consultations pinne la version qu'elles ont appliquée.

**Ce que les overrides peuvent et ne peuvent pas faire** :

- Les overrides neutralisent une règle (font qu'elle ne fire pas). Ils ne convertissent jamais un `blocked` hard en `allowed` plus large.
- Les overrides n'affectent pas les règles `absolute_ban` (bypass est impossible par design).
- Une règle avec `derogation_allowed = false` ne peut pas être overridée.

## Pause (`pau-`)

Une **Pause** est une suspension admin temporelle d'une rule ou d'un target. Deux modes :

- **`paused`** - la règle est cachée du moteur ; elle ne fire pas du tout.
- **`observe`** - la règle fire mais son verdict est traité comme advisory (pas enforcé). Utile pour validation shadow.

**Strictement permissif** : une Pause ne convertit jamais `allow` en `block`. Elle affaiblit ou suspend seulement.

**Différence avec Override** : un override autorise des exceptions à une règle qui continue d'exister. Une pause suspend la règle elle-même.

**Différence avec un status de rule** : `Rule.status = paused` (terminologie retirée) est l'ancienne façon. Pause est une entité séparée avec son propre actor, reason, et expiry.

## L'opposé (deferred) : Signal

Un **Signal** serait un *activator* de rule : une règle silencieuse par défaut qui fire sur une condition temporelle ou contextuelle. Sémantiquement l'opposé de Pause. Spécifié dans `docs/specs/signal-entity-v1.md` mais explicitement **pas dans V5** ; ne modélisez pas votre intégration dessus.

## Choisir parmi les trois

| Situation | Utiliser |
|---|---|
| Opération one-off a besoin d'un sign-off manuel | Approval |
| Approval accordée, on veut que les opérations similaires suivantes passent | Approval avec un grant Override Type 3 |
| Une règle a fired au mauvais moment, besoin de la faire taire maintenant | Pause (mode `paused`) |
| Une règle est nouvelle, on veut voir ce qu'elle ferait avant enforcement | Pause (mode `observe`) |
| Une exception standing de scope (client VIP, tenant sandbox) | Override Type 1 |
| Idem, mais bornée dans le temps | Override Type 2 |

## Surface d'audit

Chaque mécanisme écrit un `Event` (`evt-`). Les consultations enregistrent les overrides et pauses en vigueur au moment de décision pour que le replay reflète le set exact d'exceptions qui s'appliquaient.

## Related

- [Verdicts et decisions](/docs/concepts/verdicts-and-decisions) - comment overrides + pauses affectent le verdict.
- [/v1/approvals](/docs/api-reference/approvals) - l'endpoint approval.
- [Emergency response](/docs/guides/emergency-response) - kill-switch via Pause `paused`.
