---
title: Verdicts et decisions
description: Comment les rules se composent en un verdict, l'échelle de severity, la précédence, et ce qu'une Consultation enregistre.
locale: fr
kicker: Docs / Concepts - Stable
---

Chaque appel `/check` ou `/resolve` produit un **verdict** déterminé par les rules qui fire sur le cas. Cette page parcourt le modèle.

## L'échelle de severity

Les verdicts sortent de cinq niveaux de severity, classés du plus fort en premier :

| Severity | Verdict | Ce que le caller fait |
|---|---|---|
| `absolute_ban` | `blocked` | Refuse. Ne peut pas être overridé. |
| `hard_block` | `blocked` | Refuse. Overridable par un `Override` scope-bounded si `derogation_allowed`. |
| `require_approval` | `approval_required` | Route vers approver humain. |
| `informative` | `allowed` (avec warning) | Procède. Logue les fires informatifs. |
| `allow` | `allowed` | Procède. |

Le verdict d'une consultation est l'effet de la **rule dominante** : la rule qui a fired avec la severity la plus forte. Les égalités sont cassées par le `precedence_trace` (voir plus bas).

## Deux endpoints d'écriture

- **`/v1/check`** - contexte strict. Le caller envoie un contexte complet et typé ; Knowledge évalue et retourne le verdict. Mauvaise forme ? 422. Champ manquant que la règle exige ? Erreur, pas une boucle `required_context`. À utiliser pour les tools qui connaissent déjà la forme complète de l'appel (OMS, claims platform, PEP custom).

- **`/v1/resolve`** - contexte tolérant. Le caller envoie ce qu'il a ; Knowledge itère avec `required_context`. À utiliser pour les agents (callers LLM) qui assemblent le contexte à la volée. Voir [Progressive context](/docs/concepts/progressive-context-resolution).

Les deux endpoints produisent le même record Consultation et la même enveloppe signée.

## Ce qui fire

Le moteur considère une règle **applicable** au cas si :

1. Le principal caller est membre d'un des Targets de la règle (ou la règle est `universal`).
2. La règle a une row dont le `scope` matche le `scope` du cas.
3. La `condition` de cette row évalue true sur le cas.

Plusieurs rules peuvent fire sur le même cas. Celle avec la severity la plus forte domine ; les autres sont loggées dans le trace et leurs statements peuvent être cités dans la prose du verdict.

## Tie-breakers de précédence

Quand deux rules retourneraient la même severity, Knowledge picke un dominateur en utilisant un ordre de précédence explicite :

1. Severity la plus forte.
2. Match de scope le plus long (scope plus spécifique gagne sur scope plus large).
3. Règle la plus jeune (adoptée le plus récemment prend précédence).
4. Tie-break déterministe par rule ID (rare, mais évite le non-déterminisme).

Le trace ordonné complet est capturé sur la Consultation comme `precedence_trace` pour que n'importe quel reader puisse reconstruire pourquoi *cette* règle a gagné et pas l'autre.

## Le record Consultation

Chaque consultation écrit une ligne `Consultation` (`cns-`) portant :

- `cited_entry_ids` - les rules fired par ID.
- `cited_rule_version_ids` - les snapshots RuleVersion exacts pinnés au moment de décision.
- `dominating_rule_id` - la règle gagnante.
- `precedence_trace` - la liste candidate ordonnée et le trail de tie-break.
- `resolved_target_ids` - à quels targets le principal appartenait à ce moment.
- `scope_used` - le scope effectif évalué.
- `verdict` - le verdict résolu.
- `signed_verdict` - l'enveloppe JWS ES256.
- `normative_hash` - un hash de l'état gelé ; quiconque lit le record plus tard peut vérifier qu'il est inchangé.

Fetch-la à tout moment :

```
GET /knowledge/v1/consultations/cns-abc123
```

La réponse rend l'état gelé exactement tel qu'il était au moment de décision. Le texte de règle a changé depuis ? Peu importe - `cited_rule_version_ids` pointe sur le snapshot immuable.

## Enveloppe signée

Chaque verdict est signé. La frontière du tool vérifie la signature et refuse sur binding mismatch. Voir [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) pour le modèle complet.

## Prose de verdict (LLM-rendered)

Si le tenant a `knowledge-ai` activé, le verdict peut être rendu comme prose humainement-lisible citant les entrées governance log et le rationale. **La prose n'est pas autoritative** ; le verdict déterministe du moteur l'est. Le LLM est un renderer, pas un juge.

## Related

- [Signed verdicts et PEP](/docs/concepts/signed-verdicts-and-pep) - comment la frontière du tool fait respecter le verdict.
- [Progressive context](/docs/concepts/progressive-context-resolution) - la boucle `/resolve`.
- [/v1/check](/docs/api-reference/check) - l'endpoint strict.
- [/v1/resolve](/docs/api-reference/resolve) - l'endpoint tolérant.
- [/v1/consultations/{id}](/docs/api-reference/consultations) - fetch un record de consultation.
