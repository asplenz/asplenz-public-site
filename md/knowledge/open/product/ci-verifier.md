<!-- lang: en -->

# CI Compliance Review

## Check every PR against your team's rules — using your AI agent.

When a PR is opened, your CI pipeline invokes an AI agent. The agent reads your scope mapping, fetches the applicable invariants and rules from Knowledge via MCP, analyzes the diff, and posts a compliance report as a PR comment.

There is no separate binary to install. Asplenz provides the MCP server, the Knowledge platform, and the recommended prompt. You bring the agent.

---

## How It Works

1. A PR is opened or updated
2. CI invokes your AI agent with the PR diff and the recommended prompt
3. The agent reads `.knowledge/config.yml` to determine which scopes apply to the changed files
4. If the config file is absent, the agent infers relevant scopes from the file paths and diff content
5. The agent calls Knowledge MCP tools to fetch invariants and rules for those scopes
6. The agent analyzes the diff against each constraint
7. The agent posts a structured report as a PR comment and exits with the appropriate status code

---

## Scope Mapping

Create a `.knowledge/config.yml` file at the root of your repository:

```yaml
# .knowledge/config.yml
scopes:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"
```

Patterns are matched in order — the first match wins. Use `**` as a catch-all to ensure every file is covered.

Keep this file in version control. When you refactor (rename a module, restructure directories), update the mapping in the same PR — the agent will use the updated config immediately.

**If the file is missing**, the agent infers which scopes are relevant based on the file paths and the nature of the changes. Inference works well for standard project structures but is less precise than explicit mapping.

---

## What Gets Checked

The agent evaluates each applicable constraint against the diff:

**Invariants** — Non-negotiable constraints. A violated invariant blocks the PR (exit code 1).

**Rules** — Directives with MANDATORY or ADVISORY severity. Violations are reported; whether they block depends on how you configure the agent step.

**Overrides** — Active overrides fetched from Knowledge are respected. An invariant with a valid override is reported as "overridden" rather than "violated."

---

## CI Integration

Asplenz provides a recommended prompt. Pass it to your agent of choice in CI.

### GitHub Actions (Claude)

```yaml
- name: Knowledge Compliance Review
  uses: anthropics/claude-code-action@beta
  with:
    prompt: |
      Review this PR for compliance with the team's Knowledge registry.

      Changed files: ${{ steps.changed-files.outputs.all }}
      PR diff: ${{ steps.diff.outputs.diff }}

      1. Read .knowledge/config.yml for scope mapping. If absent, infer scopes from the changed files.
      2. Use Knowledge MCP tools to fetch invariants and rules for the applicable scopes.
      3. Analyze the diff against each constraint.
      4. Post a structured compliance report as a PR comment.
      5. Exit with code 1 if any invariants are violated.
    mcp_config: |
      {
        "knowledge": {
          "url": "https://mcp.asplenz.com/knowledge",
          "headers": { "Authorization": "Bearer ${{ secrets.KNOWLEDGE_API_KEY }}" }
        }
      }
```

The agent handles scope resolution, constraint fetching, and analysis. No additional configuration required.

---

## The Compliance Report

The agent posts a comment on the PR with:

- A pass / warn / fail verdict
- A list of applicable constraints with their status (followed, violated, overridden, not addressed)
- A brief explanation for each finding
- The scopes that were checked

---

## Why This Approach

Running compliance review through an AI agent rather than a static checker means the analysis is semantic, not just syntactic. The agent understands *why* a constraint exists and can evaluate whether the spirit of the rule is respected — not just whether a keyword is present.

| Static checker | Agent-based review |
|---|---|
| Pattern matching only | Understands intent and context |
| Requires precise rule encoding | Works with natural-language constraints |
| No judgment on partial compliance | Can distinguish "addressed" from "ignored" |
| Fixed output format | Produces explanations reviewers can act on |

---

[Getting Started →](/docs/getting-started) · [AI Agents & MCP →](/docs/ai-agents) · [Pricing →](/pricing)

---
---

<!-- lang: fr -->

# Revue de conformité CI

## Vérifiez chaque PR contre les règles de votre équipe — via votre agent IA.

Quand une PR est ouverte, votre pipeline CI invoque un agent IA. L'agent lit votre mapping de scopes, récupère les invariants et rules applicables depuis Knowledge via MCP, analyse le diff, et poste un rapport de conformité en commentaire de PR.

Aucun binaire à installer. Asplenz fournit le serveur MCP, la plateforme Knowledge, et le prompt recommandé. Vous apportez l'agent.

---

## Comment ça fonctionne

1. Une PR est ouverte ou mise à jour
2. La CI invoque votre agent IA avec le diff de la PR et le prompt recommandé
3. L'agent lit `.knowledge/config.yml` pour déterminer quels scopes s'appliquent aux fichiers modifiés
4. Si le fichier de config est absent, l'agent infère les scopes pertinents depuis les chemins de fichiers et le contenu du diff
5. L'agent appelle les outils MCP Knowledge pour récupérer les invariants et rules de ces scopes
6. L'agent analyse le diff contre chaque contrainte
7. L'agent poste un rapport structuré en commentaire de PR et sort avec le code de statut approprié

---

## Mapping de scopes

Créez un fichier `.knowledge/config.yml` à la racine de votre dépôt :

```yaml
# .knowledge/config.yml
scopes:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"
```

Les patterns sont évalués dans l'ordre — le premier match gagne. Utilisez `**` comme catch-all pour couvrir tous les fichiers.

Versionnez ce fichier. Lors d'un refactoring (renommer un module, restructurer les répertoires), mettez à jour le mapping dans la même PR — l'agent utilisera la config mise à jour immédiatement.

**Si le fichier est absent**, l'agent infère quels scopes sont pertinents en se basant sur les chemins de fichiers et la nature des changements. L'inférence fonctionne bien pour les structures de projets standards, mais est moins précise qu'un mapping explicite.

---

## Ce qui est vérifié

L'agent évalue chaque contrainte applicable contre le diff :

**Invariants** — Contraintes non-négociables. Un invariant violé bloque la PR (code de sortie 1).

**Rules** — Directives avec sévérité MANDATORY ou ADVISORY. Les violations sont rapportées ; si elles bloquent dépend de la configuration de votre step agent.

**Overrides** — Les overrides actifs récupérés depuis Knowledge sont respectés. Un invariant avec un override valide est rapporté comme « overridden » plutôt que « violated ».

---

## Intégration CI

Asplenz fournit un prompt recommandé. Passez-le à l'agent de votre choix en CI.

### GitHub Actions (Claude)

```yaml
- name: Knowledge Compliance Review
  uses: anthropics/claude-code-action@beta
  with:
    prompt: |
      Revue cette PR pour la conformité avec le registre Knowledge de l'équipe.

      Fichiers modifiés : ${{ steps.changed-files.outputs.all }}
      Diff de la PR : ${{ steps.diff.outputs.diff }}

      1. Lis .knowledge/config.yml pour le mapping de scopes. Si absent, infère les scopes depuis les fichiers modifiés.
      2. Utilise les outils MCP Knowledge pour récupérer les invariants et rules des scopes applicables.
      3. Analyse le diff contre chaque contrainte.
      4. Poste un rapport de conformité structuré en commentaire de PR.
      5. Sors avec le code 1 si des invariants sont violés.
    mcp_config: |
      {
        "knowledge": {
          "url": "https://mcp.asplenz.com/knowledge",
          "headers": { "Authorization": "Bearer ${{ secrets.KNOWLEDGE_API_KEY }}" }
        }
      }
```

L'agent gère la résolution des scopes, la récupération des contraintes et l'analyse. Aucune configuration supplémentaire requise.

---

## Le rapport de conformité

L'agent poste un commentaire sur la PR avec :

- Un verdict pass / warn / fail
- La liste des contraintes applicables avec leur statut (followed, violated, overridden, not addressed)
- Une brève explication pour chaque finding
- Les scopes qui ont été vérifiés

---

## Pourquoi cette approche

Faire passer la revue de conformité par un agent IA plutôt qu'un checker statique signifie que l'analyse est sémantique, pas juste syntaxique. L'agent comprend *pourquoi* une contrainte existe et peut évaluer si l'esprit de la règle est respecté — pas seulement si un mot-clé est présent.

| Checker statique | Revue par agent |
|---|---|
| Pattern matching uniquement | Comprend l'intention et le contexte |
| Nécessite un encodage précis des règles | Fonctionne avec des contraintes en langage naturel |
| Pas de jugement sur la conformité partielle | Distingue « adressé » de « ignoré » |
| Format de sortie fixe | Produit des explications actionnables |

---

[Commencer →](/docs/getting-started) · [Agents IA & MCP →](/docs/ai-agents) · [Tarifs →](/pricing)
