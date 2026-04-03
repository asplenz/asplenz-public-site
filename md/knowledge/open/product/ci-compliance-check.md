<!-- lang: en -->

# CI Compliance Check

## Check every PR against your team's rules — automatically.

Your AI agent reads the PR diff and checks it against the applicable decisions, invariants, and rules in Knowledge — before merge. Asplenz provides the prompt. Your agent does the analysis.

---

## How It Works

1. A PR is opened or updated
2. CI triggers your AI agent with the Asplenz CI check prompt
3. The agent reads the PR diff
4. The agent calls `knowledge_resolve` for each applicable scope to fetch constraints
5. The agent analyzes the diff against each constraint
6. The agent posts a compliance report as a PR comment and exits pass or fail

---

## Two Ways to Run It

### With your local AI agent

Your agent runs inside your CI pipeline. It reads the diff locally and calls Knowledge via MCP.

```
> "Check the diff of this PR against Knowledge for the Engineering scope"
  → The agent calls knowledge_resolve, analyzes the diff, and reports violations
```

Your source code stays local. Only the Knowledge tool calls go to the API.

### With the Asplenz remote agent

Send the PR diff to the Knowledge platform via API. Asplenz's agent performs the check and returns a structured verdict.

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    curl -X POST https://api.asplenz.com/knowledge/v1/verify/diff \
      -H "Authorization: Bearer $KNOWLEDGE_API_KEY" \
      -H "Content-Type: application/json" \
      -d '{
        "scope_id": "<scope_id>",
        "diff": "${{ steps.get_diff.outputs.diff }}"
      }'
  env:
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

In both cases, the report includes any conflicting invariants or rules, their severity, and whether an approval can unblock the action.

---

## Scope Mapping

You tell the agent which files map to which Knowledge scopes. When a PR changes `src/payments/stripe.py`, the agent fetches invariants and rules from the `Engineering/payments` scope.

```yaml
scope_mapping:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"
```

Patterns are matched in order — the first match wins. Use `**` as a catch-all to ensure every file is covered.

---

## Three Gating Modes

The agent posts a compliance report as a PR comment and exits with a pass or fail result. Your CI pipeline acts on that result to allow or block the merge. The gating mode controls what the agent reports as a failure.

| Mode | Agent result | When to Use |
|------|----------|-------------|
| `report-only` | Always passes. Posts report for visibility only. | Initial rollout, learning phase |
| `fail-on-blocking` | Fails if any invariant is violated. | Standard enforcement |
| `strict` | Fails on any violation (invariants + mandatory rules). | Regulated environments |

**Recommended rollout**: start with `report-only` for two weeks. Review the reports. When the team is comfortable, switch to `fail-on-blocking`. Move to `strict` when compliance is critical.

---

## What Gets Checked

### Invariants
Blocking constraints. If an invariant applies to the changed files' scope and isn't addressed, the agent reports a conflict.

### Mandatory Rules
Active directives with MANDATORY severity. Uncited mandatory rules generate warnings in `fail-on-blocking` mode and failures in `strict` mode.

### Advisory Rules
Active directives with ADVISORY severity. Reported for awareness but never block the pipeline.

### Overrides
Active overrides are recognized. If a valid override exists for an invariant, the agent marks it as "overridden" rather than "violated."

---

## Why Not Just Code Review?

| Code Review | CI Compliance Check |
|-------------|---------------------|
| Reviewer must remember all rules | Rules are checked automatically |
| Inconsistent across reviewers | Same checks every time |
| Easy to miss a constraint | Every applicable constraint is evaluated |
| No audit trail | Structured report for every PR |
| Doesn't scale with team size | Scales to any number of PRs |

The compliance check doesn't replace code review — it ensures organizational constraints are checked consistently, so reviewers can focus on logic, design, and quality.

---

[Getting Started →](/docs/getting-started) · [Pricing →](/pricing)

---
---

<!-- lang: fr -->

# Vérification CI

## Vérifiez chaque PR contre les règles de votre équipe — automatiquement.

Votre agent IA lit le diff de la PR et le vérifie contre les decisions, invariants et rules applicables dans Knowledge — avant le merge. Asplenz fournit le prompt. Votre agent fait l'analyse.

---

## Comment ça fonctionne

1. Une PR est ouverte ou mise à jour
2. La CI déclenche votre agent IA avec le prompt CI d'Asplenz
3. L'agent lit le diff de la PR
4. L'agent appelle `knowledge_resolve` pour chaque scope applicable afin de récupérer les contraintes
5. L'agent analyse le diff contre chaque contrainte
6. L'agent poste un rapport de conformité en commentaire de PR et sort en pass ou fail

---

## Deux façons de l'exécuter

### Avec votre agent IA local

Votre agent s'exécute dans votre pipeline CI. Il lit le diff localement et appelle Knowledge via MCP.

```
> "Vérifie le diff de cette PR contre Knowledge pour le scope Engineering"
  → L'agent appelle knowledge_resolve, analyse le diff et signale les violations
```

Votre code source reste local. Seuls les appels aux outils Knowledge vont vers l'API.

### Avec l'agent Asplenz

Envoyez le diff de la PR à la plateforme Knowledge via l'API. L'agent d'Asplenz effectue la vérification et retourne un verdict structuré.

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    curl -X POST https://api.asplenz.com/knowledge/v1/verify/diff \
      -H "Authorization: Bearer $KNOWLEDGE_API_KEY" \
      -H "Content-Type: application/json" \
      -d '{
        "scope_id": "<scope_id>",
        "diff": "${{ steps.get_diff.outputs.diff }}"
      }'
  env:
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
```

Dans les deux cas, le rapport inclut les invariants ou rules en conflit, leur sévérité, et si une approbation peut débloquer l'action.

---

## Scope Mapping

Vous indiquez à l'agent quels fichiers correspondent à quels scopes Knowledge. Quand une PR modifie `src/payments/stripe.py`, l'agent récupère les invariants et rules du scope `Engineering/payments`.

```yaml
scope_mapping:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"
```

Les patterns sont évalués dans l'ordre — le premier match gagne. Utilisez `**` comme catch-all pour couvrir tous les fichiers.

---

## Trois modes de gating

L'agent poste un rapport de conformité en commentaire de PR et sort avec un résultat pass ou fail. Votre pipeline CI agit sur ce résultat pour autoriser ou bloquer le merge. Le mode de gating contrôle ce que l'agent rapporte comme échec.

| Mode | Résultat de l'agent | Quand l'utiliser |
|------|-------------|-----------------|
| `report-only` | Toujours pass. Poste le rapport pour visibilité uniquement. | Déploiement initial, phase d'apprentissage |
| `fail-on-blocking` | Fail si un invariant est violé. | Enforcement standard |
| `strict` | Fail sur toute violation (invariants + rules mandatory). | Environnements régulés |

**Déploiement recommandé** : commencez en `report-only` pendant deux semaines. Reviewez les rapports. Quand l'équipe est à l'aise, passez en `fail-on-blocking`. Passez en `strict` quand la conformité est critique.

---

## Ce qui est vérifié

### Invariants
Contraintes bloquantes. Si un invariant s'applique au scope des fichiers modifiés et n'est pas adressé, l'agent signale un conflit.

### Rules Mandatory
Directives actives avec sévérité MANDATORY. Les rules mandatory non adressées génèrent des warnings en mode `fail-on-blocking` et des échecs en mode `strict`.

### Rules Advisory
Directives actives avec sévérité ADVISORY. Signalées pour information mais ne bloquent jamais le pipeline.

### Overrides
Les overrides actifs sont reconnus. Si un override valide existe pour un invariant, l'agent le marque comme « overridden » plutôt que « violated ».

---

## Pourquoi pas juste la code review ?

| Code Review | Vérification CI |
|-------------|-----------------|
| Le reviewer doit se souvenir de toutes les règles | Les règles sont vérifiées automatiquement |
| Inconsistant entre les reviewers | Mêmes vérifications à chaque fois |
| Facile de rater une contrainte | Chaque contrainte applicable est évaluée |
| Pas de trace d'audit | Rapport structuré pour chaque PR |
| Ne scale pas avec la taille de l'équipe | Scale à n'importe quel nombre de PRs |

La vérification CI ne remplace pas la code review — elle garantit que les contraintes organisationnelles sont vérifiées de manière cohérente, pour que les reviewers puissent se concentrer sur la logique, le design et la qualité.

---

[Commencer →](/docs/getting-started) · [Tarifs →](/pricing)
