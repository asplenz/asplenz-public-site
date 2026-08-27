---
title: Emergency response
description: Kill switch, rotation de clé, downgrade d'enforcement - les quatre chemins d'escalation pour un incident Knowledge.
locale: fr
kicker: Docs / Guides - Stable
---

Tout déploiement Knowledge a éventuellement un incident. Cette page énumère les quatre leviers que vous avez, quand chacun est approprié, et comment l'invoquer.

## Levier 1 : Pause une rule (mode `paused`)

**Utiliser quand** : une seule rule misbehave (false positives, mauvais threshold, scope target unintended) et vous voulez la faire taire pendant le root-cause.

**Invoquer via UI** :

Back-office -> Rules -> `rul-...` -> Pause -> Mode : `paused` -> Reason.

**Invoquer via API** :

```bash
curl -X POST /tnt-acme/v1/rules/rul-abc/pause \
  -H "X-API-Key: ak-admin-..." \
  -d '{
    "mode": "paused",
    "reason": "false-positive spike, incident IR-2026-08-42",
    "expires_at": "2026-08-15T12:00:00Z"
  }'
```

**Effet** : la rule est cachée du moteur immédiatement. Les nouvelles consultations ne la fire pas. Les consultations historiques la citent toujours (audit inchangé). Les overrides et changements de rule restent possibles pendant la pause.

**Reversal** : delete la ligne de pause ou attendez `expires_at`.

## Levier 2 : Pause un target (mode `paused`)

**Utiliser quand** : les rules d'un target entier fire incorrectement (ex. mauvais déploiement de scope schema, un target avec membership malformé).

Même forme que le Levier 1 mais scoped à un Target :

```bash
curl -X POST /tnt-acme/v1/targets/tgt-abc/pause \
  -H "X-API-Key: ak-admin-..." \
  -d '{ "mode": "paused", "reason": "..." }'
```

**Effet** : toutes les rules attachées à ce target sont cachées. Les universal rules fire toujours.

## Levier 3 : Downgrade enforcement mode

**Utiliser quand** : les refus côté PEP bloquent du trafic légitime, et vous ne pouvez pas encore identifier quelle rule est le coupable.

**Avec `knowledge-runtime`** : set la variable d'env et redémarrez le process PEP.

```bash
# Sur chaque host PEP :
export KNOWLEDGE_ENFORCEMENT=advisory
systemctl restart my-pep-service
```

**Avec un intercepteur MCP** : flip le flag advisory de votre intercepteur (ou set `require_outcome_allowed=False` sur l'appel `verify_verdict`) pour qu'un verdict `require_approval` / `blocked` soit loggé au lieu d'être refusé. Redémarrez le process.

**Effet** : Knowledge consulte toujours, les verdicts enregistrent toujours, mais les refus ne terminent plus les appels. Le business continue ; le signal de compliance est préservé pour l'analyse post-incident.

**Quand NE PAS utiliser** : si l'incident est une compromission (clé de signing leakée, serveur MCP upstream compromis). Downgrader l'enforcement retire la protection dont vous avez le plus besoin.

## Levier 4 : Rotate une clé compromise

**Utiliser quand** : compromission suspectée de clé privée.

Voir [Rotate signing keys](/docs/guides/rotate-signing-keys) pour le flow de rotation d'urgence (zero-overlap).

Étapes additionnelles au-delà de ce guide :

- **Révoquer chaque clé API émise pendant la fenêtre de compromission** (elles peuvent aussi avoir été capturées).
- **Refresh JWKS à chaque PEP** (force refresh via admin endpoint ou redémarrage de process).
- **Énumérer les consultations signées pendant la fenêtre de compromission** pour annotation d'audit :

```bash
curl "/tnt-acme/v1/consultations?since=2026-08-14T00:00:00Z&signing_kid=tnt-acme:2026-01" \
  -H "X-API-Key: ak-admin-..." \
  | jq '.items[] | {id, requested_at, verdict}'
```

Marquez-les comme « signées sous clé compromise » dans votre surface d'audit. Les données de Consultation elles-mêmes restent valides (l'état policy à ce moment est toujours correctement gelé), mais la garantie de signature est dégradée pour cette fenêtre.

## Matrice d'escalation

| Symptôme | Premier levier | Si ça ne marche pas |
|---|---|---|
| Une rule bloque trop | Pause rule | Downgrade enforcement |
| Target entier misbehave | Pause target | Downgrade enforcement |
| Plusieurs rules fire incorrectement (mauvais seed / deploy) | Downgrade enforcement | Roll back deployment |
| Compromission clé de signing | Rotate urgence | Notify tous les customers |
| Service Knowledge down | Attendre / restart | Fallback rule PEP (`on_knowledge_unreachable: allow` si pré-configuré) |
| Clés API leakées | Révoquer via UI | Rotate chaque clé en bulk |

## Post-incident

Après chaque incident :

1. **Enregistrer ce qui s'est passé** sur le governance log de la Policy (entrée `GovernanceNote`).
2. **Ajouter un coherence check** qui aurait attrapé ça au moment d'écriture (si applicable).
3. **Post-mortem** avec la cohorte design-partner - les patterns appris dans un déploiement aident tout le monde.

## Related

- [Rotate signing keys](/docs/guides/rotate-signing-keys) - deep dive rotation de clé.
- [Migrer d'advisory à enforcement](/docs/guides/migrate-from-advisory-to-enforcement) - l'échelle de mode.
- [Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses) - l'entité Pause.
