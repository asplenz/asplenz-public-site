<!-- lang: en -->

# CI Verifier

## Check every PR against your team's rules — automatically.

The Knowledge Verifier integrates into your CI/CD pipeline and checks pull requests against the normative state of your registry. Violations are caught before merge, not after deployment.

---

## How It Works

![CI Verifier flow](./knowledge-ci-verifier-flow-en.svg)

---

## Scope Mapping

You define which files map to which scopes and namespaces in your configuration. When a PR changes `src/payments/stripe.py`, the Verifier matches it against your patterns and fetches invariants and rules from the corresponding namespace.

```yaml
scope_mapping:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"
```

Patterns are matched in order — the first match wins. Use `**` as a catch-all to ensure every file is covered. Files that don't match any pattern are checked against the scope level (no namespace filter).

---

## Three Gating Modes

| Mode | Behavior | When to Use |
|------|----------|-------------|
| `report-only` | Posts compliance report, never blocks | Initial rollout, learning phase |
| `fail-on-blocking` | Fails if invariants are violated | Standard enforcement |
| `strict` | Fails on any violation (invariants + mandatory rules) | Regulated environments |

**Recommended rollout**: start with `report-only` for two weeks. Review the reports. When the team is comfortable, switch to `fail-on-blocking`. Move to `strict` when compliance is critical.

---

## Implementation Report

The coding agent (e.g. Claude Code) generates an Implementation Report as a `.knowledge/report.md` file committed alongside the code. The Verifier reads this file automatically.

![Implementation Report example](./knowledge-implementation-report-en.svg)

The Verifier parses these citations, validates entry IDs against the registry, and checks that all applicable constraints are addressed.

If the `.knowledge/report.md` file is missing from the commit, all applicable constraints are treated as "not cited" and evaluated according to the gating mode.

---

## What Gets Checked

### Invariants
Blocking constraints. If an invariant applies to the changed files' scope and isn't cited as FOLLOWED (or has an active override), the Verifier reports a conflict.

### Mandatory Rules
Active directives with MANDATORY severity. Uncited mandatory rules generate warnings in `fail-on-blocking` mode and failures in `strict` mode.

### Advisory Rules
Active directives with ADVISORY severity. Reported for awareness but never block the pipeline.

### Overrides
Active overrides are recognized. If a developer has a valid override for an invariant, the Verifier marks it as "overridden" rather than "violated."

### Semantic Analysis (optional)
When enabled, the Verifier goes beyond citation matching. It analyzes the actual code diff against each applicable constraint and evaluates whether the change respects or violates each one — with a confidence score and explanation. This catches violations that citation matching alone would miss.

### External Checkers
Some constraints can't be verified from code alone — for example, "PRs must have at least 2 approved reviewers" or "cloud budget must not exceed 10k/month." Constraints can have attached scripts or webhooks that collect dynamic data. The Verifier executes them automatically and evaluates the output against the constraint.

---

## CI Integration

### GitHub Actions

```yaml
- name: Knowledge Compliance Check
  run: |
    pip install knowledge-verifier
    knowledge-verifier \
      --config .knowledge-verifier.yml \
      --mode fail-on-blocking
  env:
    KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

GitHub Actions environment is auto-detected: PR number, changed files, and base branch are resolved automatically.

### GitLab CI

```yaml
compliance-check:
  stage: test
  script:
    - pip install knowledge-verifier
    - knowledge-verifier --config .knowledge-verifier.yml --mode fail-on-blocking
  variables:
    KNOWLEDGE_API_URL: $KNOWLEDGE_API_URL
    KNOWLEDGE_API_KEY: $KNOWLEDGE_API_KEY
```

### Local Execution

```bash
knowledge-verifier \
  --config .knowledge-verifier.yml \
  --mode report-only \
  --pr-number 142 \
  --repo-url https://github.com/org/repo
```

---

## Configuration

```yaml
# .knowledge-verifier.yml
knowledge_api:
  url: https://api.asplenz.com
  # API key via KNOWLEDGE_API_KEY env var

verification:
  mode: fail-on-blocking
  report_path: .knowledge/report.md
  scope_mapping:
    "src/payments/**": "Engineering/payments"
    "src/auth/**": "Engineering/auth"
    "infrastructure/**": "Operations"
    "**": "Engineering"

# Optional: AI-powered semantic analysis of the diff against constraints
semantic_analysis:
  enabled: false
  # See configuration docs for provider setup

# Optional: execute scripts/webhooks attached to constraints
external_checkers:
  enabled: true
  allowed_commands: ["gh", "python", "node", "bash"]

output:
  json: verifier-result.json
  markdown: verifier-report.md
```

> For self-hosted deployments, replace the URL with your instance address.

---

## Output

### Machine-readable (JSON)

The JSON output is consumed by the CI pipeline to set the PR status (pass/warn/fail). It also feeds into the Knowledge dashboard for compliance analytics, and can be used by custom integrations: Slack alerts on violations, automatic Jira tickets, aggregated compliance reports, or SIEM exports.

```json
{
  "verdict": "FAIL",
  "invariants": {
    "total": 3,
    "followed": 2,
    "violated": 1,
    "overridden": 0
  },
  "rules": {
    "mandatory": {"total": 5, "followed": 4, "diverged": 1},
    "advisory": {"total": 2, "followed": 1, "not_cited": 1}
  },
  "conflicts": [
    {
      "entry_id": "inv-a1b2c3",
      "constraint": "All API endpoints must require authentication",
      "status": "violated"
    }
  ],
  "semantic_findings": [
    {
      "entry_id": "inv-a1b2c3",
      "verdict": "violated",
      "confidence": 0.92,
      "explanation": "New endpoint /api/export has no auth middleware"
    }
  ],
  "checker_findings": [
    {
      "entry_id": "rul-d4e5f6",
      "verdict": "respected",
      "source": "script",
      "explanation": "PR has 2 approved reviews"
    }
  ]
}
```

### Human-readable (Markdown)

Posted as a PR comment:

![Verifier report example](./knowledge-verifier-report-github-en.svg)

---

## Why Not Just Code Review?

| Code Review | CI Verifier |
|-------------|-------------|
| Reviewer must remember all rules | Rules are checked automatically |
| Inconsistent across reviewers | Same checks every time |
| Easy to miss a constraint | Every applicable constraint is evaluated |
| No audit trail | Structured report for every PR |
| Doesn't scale with team size | Scales to any number of PRs |

The Verifier doesn't replace code review — it ensures that organizational constraints are checked consistently, so reviewers can focus on logic, design, and quality.

---

[CI/CD Setup Guide →](/docs/integrations/ci-verifier) · [Getting Started →](/docs/getting-started) · [Pricing →](/pricing)

---
---

<!-- lang: fr -->

# Verifier CI

## Vérifiez chaque PR contre les règles de votre équipe — automatiquement.

Le Knowledge Verifier s'intègre dans votre pipeline CI/CD et vérifie les pull requests contre l'état normatif de votre registre. Les violations sont détectées avant le merge, pas après le déploiement.

---

## Comment ça fonctionne

![Flow du Verifier CI](./knowledge-ci-verifier-flow-fr.svg)

---

## Scope Mapping

Vous définissez quels fichiers correspondent à quels scopes et namespaces dans votre configuration. Quand une PR modifie `src/payments/stripe.py`, le Verifier le matche contre vos patterns et récupère les invariants et rules du namespace correspondant.

```yaml
scope_mapping:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"
```

Les patterns sont évalués dans l'ordre — le premier match gagne. Utilisez `**` comme catch-all pour couvrir tous les fichiers. Les fichiers qui ne matchent aucun pattern sont vérifiés au niveau du scope (sans filtre de namespace).

---

## Trois modes de gating

| Mode | Comportement | Quand l'utiliser |
|------|-------------|-----------------|
| `report-only` | Poste le rapport de conformité, ne bloque jamais | Déploiement initial, phase d'apprentissage |
| `fail-on-blocking` | Échoue si des invariants sont violés | Enforcement standard |
| `strict` | Échoue sur toute violation (invariants + rules mandatory) | Environnements régulés |

**Déploiement recommandé** : commencez en `report-only` pendant deux semaines. Reviewez les rapports. Quand l'équipe est à l'aise, passez en `fail-on-blocking`. Passez en `strict` quand la conformité est critique.

---

## Implementation Report

L'agent de coding (ex. Claude Code) génère un Implementation Report sous forme de fichier `.knowledge/report.md` committé avec le code. Le Verifier lit ce fichier automatiquement.

![Exemple d'Implementation Report](./knowledge-implementation-report-fr.svg)

Le Verifier parse ces citations, valide les IDs d'entrées contre le registre, et vérifie que toutes les contraintes applicables sont adressées.

Si le fichier `.knowledge/report.md` est absent du commit, toutes les contraintes applicables sont traitées comme « non citées » et évaluées selon le mode de gating.

---

## Ce qui est vérifié

### Invariants
Contraintes bloquantes. Si un invariant s'applique au scope des fichiers modifiés et n'est pas cité comme FOLLOWED (ou n'a pas d'override actif), le Verifier signale un conflit.

### Rules Mandatory
Directives actives avec sévérité MANDATORY. Les rules mandatory non citées génèrent des warnings en mode `fail-on-blocking` et des échecs en mode `strict`.

### Rules Advisory
Directives actives avec sévérité ADVISORY. Signalées pour information mais ne bloquent jamais le pipeline.

### Overrides
Les overrides actifs sont reconnus. Si un développeur a un override valide pour un invariant, le Verifier le marque comme « overridden » plutôt que « violated ».

### Analyse sémantique (optionnelle)
Quand activée, le Verifier va au-delà du matching de citations. Il analyse le diff du code contre chaque contrainte applicable et évalue si le changement respecte ou viole chacune — avec un score de confiance et une explication. Cela détecte des violations que le matching de citations seul ne capturerait pas.

### External Checkers
Certaines contraintes ne peuvent pas être vérifiées à partir du code seul — par exemple, « Les PRs doivent avoir au moins 2 reviewers approuvés » ou « Le budget cloud ne doit pas dépasser 10k/mois ». Les contraintes peuvent avoir des scripts ou webhooks attachés qui collectent des données dynamiques. Le Verifier les exécute automatiquement et évalue le résultat contre la contrainte.

---

## Intégration CI

### GitHub Actions

```yaml
- name: Knowledge Compliance Check
  run: |
    pip install knowledge-verifier
    knowledge-verifier \
      --config .knowledge-verifier.yml \
      --mode fail-on-blocking
  env:
    KNOWLEDGE_API_URL: ${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: ${{ secrets.KNOWLEDGE_API_KEY }}
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

L'environnement GitHub Actions est auto-détecté : numéro de PR, fichiers modifiés et branche de base sont résolus automatiquement.

### GitLab CI

```yaml
compliance-check:
  stage: test
  script:
    - pip install knowledge-verifier
    - knowledge-verifier --config .knowledge-verifier.yml --mode fail-on-blocking
  variables:
    KNOWLEDGE_API_URL: $KNOWLEDGE_API_URL
    KNOWLEDGE_API_KEY: $KNOWLEDGE_API_KEY
```

### Exécution locale

```bash
knowledge-verifier \
  --config .knowledge-verifier.yml \
  --mode report-only \
  --pr-number 142 \
  --repo-url https://github.com/org/repo
```

---

## Configuration

```yaml
# .knowledge-verifier.yml
knowledge_api:
  url: https://api.asplenz.com
  # Clé API via la variable d'environnement KNOWLEDGE_API_KEY

verification:
  mode: fail-on-blocking
  report_path: .knowledge/report.md
  scope_mapping:
    "src/payments/**": "Engineering/payments"
    "src/auth/**": "Engineering/auth"
    "infrastructure/**": "Operations"
    "**": "Engineering"

# Optionnel : analyse sémantique du diff par IA contre les contraintes
semantic_analysis:
  enabled: false
  # Voir la documentation de configuration pour le setup du fournisseur

# Optionnel : exécuter des scripts/webhooks attachés aux contraintes
external_checkers:
  enabled: true
  allowed_commands: ["gh", "python", "node", "bash"]

output:
  json: verifier-result.json
  markdown: verifier-report.md
```

> Pour les déploiements self-hosted, remplacez l'URL par l'adresse de votre instance.

---

## Sorties

### Lisible par les machines (JSON)

La sortie JSON est consommée par le pipeline CI pour définir le statut de la PR (pass/warn/fail). Elle alimente aussi le dashboard Knowledge pour les analytics de conformité, et peut être utilisée par des intégrations custom : alertes Slack sur les violations, tickets Jira automatiques, rapports de conformité agrégés, ou exports SIEM.

```json
{
  "verdict": "FAIL",
  "invariants": {
    "total": 3,
    "followed": 2,
    "violated": 1,
    "overridden": 0
  },
  "rules": {
    "mandatory": {"total": 5, "followed": 4, "diverged": 1},
    "advisory": {"total": 2, "followed": 1, "not_cited": 1}
  },
  "conflicts": [
    {
      "entry_id": "inv-a1b2c3",
      "constraint": "Tous les endpoints API doivent exiger une authentification",
      "status": "violated"
    }
  ],
  "semantic_findings": [
    {
      "entry_id": "inv-a1b2c3",
      "verdict": "violated",
      "confidence": 0.92,
      "explanation": "Le nouvel endpoint /api/export n'a pas de middleware d'authentification"
    }
  ],
  "checker_findings": [
    {
      "entry_id": "rul-d4e5f6",
      "verdict": "respected",
      "source": "script",
      "explanation": "La PR a 2 reviews approuvés"
    }
  ]
}
```

### Lisible par les humains (Markdown)

Posté en commentaire de PR :

![Exemple de rapport Verifier](./knowledge-verifier-report-github-fr.svg)

---

## Pourquoi pas juste la code review ?

| Code Review | CI Verifier |
|-------------|-------------|
| Le reviewer doit se souvenir de toutes les règles | Les règles sont vérifiées automatiquement |
| Inconsistant entre les reviewers | Mêmes vérifications à chaque fois |
| Facile de rater une contrainte | Chaque contrainte applicable est évaluée |
| Pas de trace d'audit | Rapport structuré pour chaque PR |
| Ne scale pas avec la taille de l'équipe | Scale à n'importe quel nombre de PRs |

Le Verifier ne remplace pas la code review — il garantit que les contraintes organisationnelles sont vérifiées de manière cohérente, pour que les reviewers puissent se concentrer sur la logique, le design et la qualité.

---

[Guide CI/CD →](/docs/integrations/ci-verifier) · [Commencer →](/docs/getting-started) · [Tarifs →](/pricing)
