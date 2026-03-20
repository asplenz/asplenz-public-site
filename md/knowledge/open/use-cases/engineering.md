<!-- lang: en -->

# Knowledge for Engineering Teams

Engineering teams make hundreds of decisions. Knowledge captures them, enforces the constraints they produce, and gives AI agents the context to work within your team's standards.

---

## The Challenge

- Architecture Decision Records decay in wikis nobody searches
- AI agents write code without knowing your standards
- Deployment rules exist in Slack messages and people's heads
- When someone asks "why did we choose X?", the answer is lost or reconstructed from memory
- CI pipelines check syntax and tests, but not organizational constraints

---

## How Knowledge Helps

### Extract What You Already Have

Your team already has rules in your READMEs, CLAUDE.md, runbooks, architecture docs, and source code. Your AI agent (Claude Code, Cursor) connects via MCP, scans all of them, identifies decisions, constraints, and directives, whether explicit or embedded in code, and creates typed drafts for review

> "Extract rules from ./docs, ./CLAUDE.md, and ./src (README.md files) for the Engineering scope"

```
Scanning ./docs, ./src, ./CLAUDE.md...
  > 8 invariant candidates  (e.g., "All endpoints must require authentication")
  > 11 rule candidates       (e.g., "Use conventional commits")
  > 5 decision candidates    (e.g., "Chose PostgreSQL over DynamoDB")
  > 3 duplicates skipped
```

You review in the dashboard and approve what's correct. In minutes, scattered documentation becomes a structured registry. [See how extraction works →](/product/how-it-works#start-from-what-you-have)

### Capture Decisions That Stick

Decisions are recorded by whoever makes them: a tech lead in the dashboard, an AI agent via MCP after a discussion, or the extraction pipeline from existing docs. Each decision includes context, reasoning, author, and timestamp. Decisions are immutable and searchable.

```
Decision: "Use FastAPI for all new Python backend services"
  Context: "Evaluated Flask, Django REST, and FastAPI"
  Reasoning: "FastAPI provides native async, OpenAPI generation, and Pydantic validation"
  Author: sarah.chen
  Tags: [architecture, python, backend]
```

Link decisions to the rules and invariants they create:

```
Decision: "Use FastAPI for all new backend services"
    creates > Rule: "New services must use FastAPI unless exempted"
```

Six months later, when someone asks "why FastAPI?", the answer is one search away.

### Give AI Agents Your Team's Context

When Claude or Cursor works on your code, it queries Knowledge first:

```
Engineer: "Add a new endpoint for user profiles"

Claude > knowledge_resolve(scope="Engineering", namespace="api")
  > Returns 14 applicable entries: 2 invariants, 5 decisions, 6 rules, 1 override

Claude > knowledge_check(scope="Engineering", action="Add REST endpoint for user profiles")
  > No conflicts. Proceed.

Claude writes the endpoint following all constraints
  > Generates .knowledge/report.md citing inv-8a3f and rul-2b7c
  > Records a reference: "Followed inv-8a3f and rul-2b7c in PR #142"
```

The agent does not guess your standards. It reads them from the same registry your team maintains.

### Enforce Deployment Rules

Codify deployment constraints as invariants:

```
Invariant: "No production deployment on Friday after 16:00 UTC"
Invariant: "All deployments require PR approval from at least one team member"
Rule: "Database migrations require tech-lead sign-off" (requires_approval: true)
```

When an agent or CI pipeline tries to deploy, Knowledge flags violations and requires approval for gated actions.

### CI Compliance Checks

The Verifier runs in your pipeline and checks that PRs address applicable constraints:

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

The coding agent (e.g. Claude Code) generates an Implementation Report as `.knowledge/report.md`, committed alongside the code:

```markdown
## Implementation Report
- inv-8a3f: All endpoints require auth - followed
- rul-2b7c: Use FastAPI - followed
- rul-6f8e: PR approval required - followed
```

The Verifier validates that cited IDs exist, overrides are active, and mandatory entries are addressed.

With **semantic analysis** enabled, the Verifier also evaluates the code diff against each constraint, catching violations that citation matching alone would miss.

With **external checkers**, constraints that cannot be verified from code alone (e.g. "PRs must have at least 2 approved reviewers") are verified via attached scripts or webhooks that collect dynamic data.

Result: PASS, WARN, or FAIL. [See the full Verifier flow →](/product/how-it-works#cicd-verifier)

---

## Day-to-Day Workflow

### For Engineers

1. **Before coding**: AI agent queries Knowledge via `knowledge_resolve` and `knowledge_check`
2. **During coding**: agent follows rules and records decisions it makes
3. **In the commit**: agent generates `.knowledge/report.md` citing relevant entries
4. **CI runs**: Verifier checks compliance (citations + semantic analysis + external checkers)

### For Tech Leads

1. **Define rules**: set team standards as rules (mandatory or advisory)
2. **Set invariants**: codify non-negotiable constraints
3. **Attach external checkers**: add scripts or webhooks to constraints that need dynamic verification
4. **Review approvals**: approve or reject exception requests from agents and engineers
5. **Monitor events**: track normative changes in the event timeline

### For New Engineers

1. **Browse scopes**: see Engineering, Product, Operations at a glance
2. **Read invariants**: understand what must never be violated
3. **Search decisions**: "why did we choose PostgreSQL?" - instant answer with context
4. **Follow the graph**: trace from rule to decision to context

---

## What It Replaces

| Before | With Knowledge |
|--------|---------------|
| Rules scattered across docs nobody reads | Automatic extraction into a structured registry |
| Architecture Decision Records in Git | Structured decisions with links and search |
| Deployment rules in Slack | Machine-readable invariants |
| Standards in wiki pages | Versioned rules that agents can query |
| Manual PR compliance review | Automated Verifier in CI with semantic analysis |
| "Ask Sarah, she remembers" | Searchable registry with full context |

---

## Get Started

1. [Create your account](/docs/getting-started)
2. Create an Engineering scope
3. Ask your AI agent to extract rules from `./docs` for the Engineering scope
4. Review and approve the drafts in the dashboard
5. Connect Claude via MCP
6. Add the Verifier to one repository

[Getting Started](/docs/getting-started) · [How it Works](/product/how-it-works) · [Pricing](/pricing)

---
---

<!-- lang: fr -->

# Knowledge pour les equipes Engineering

Les equipes engineering prennent des centaines de decisions. Knowledge les capture, applique les contraintes qu'elles produisent, et donne aux agents IA le contexte pour travailler dans le cadre des standards de votre equipe.

---

## Le defi

- Les Architecture Decision Records se degradent dans des wikis que personne ne consulte
- Les agents IA ecrivent du code sans connaitre vos standards
- Les regles de deploiement vivent dans des messages Slack et dans la tete des gens
- Quand quelqu'un demande "pourquoi a-t-on choisi X ?", la reponse est perdue ou reconstruite de memoire
- Les pipelines CI verifient la syntaxe et les tests, mais pas les contraintes organisationnelles

---

## Comment Knowledge aide

### Extraire ce que vous avez deja

Votre équipe dispose déjà de règles dans ses fichiers README, ses CLAUDE.md, ses manuels opérationnels, ses documents d'architecture et son code source. Votre agent IA (Claude Code, Cursor) se connecte via MCP, les analyse tous afin d'identifier les décisions, les contraintes et les directives, qu'elles soient explicites ou intégrées au code, et génère des ébauches structurées pour revue

> "Extrais les règles depuis ./docs, ./CLAUDE.md et ./src (fichiers README.md) pour le scope Engineering"

```
Scanning ./docs, ./src, ./CLAUDE.md...
  > 8 candidats invariant  (ex. "All endpoints must require authentication")
  > 11 candidats rule       (ex. "Use conventional commits")
  > 5 candidats decision    (ex. "Chose PostgreSQL over DynamoDB")
  > 3 doublons ignores
```

Vous reviewez dans le dashboard et approuvez ce qui est correct. En quelques minutes, de la documentation dispersee a un registre structure. [Voir comment fonctionne l'extraction →](/product/how-it-works#start-from-what-you-have)

### Capturer les decisions qui durent

Les decisions sont enregistrees par celui qui les prend : un tech lead dans le dashboard, un agent IA via MCP apres une discussion, ou le pipeline d'extraction depuis les docs existantes. Chaque decision inclut le contexte, le raisonnement, l'auteur et le timestamp. Les decisions sont immuables et recherchables.

```
Decision: "Use FastAPI for all new Python backend services"
  Context: "Evaluated Flask, Django REST, and FastAPI"
  Reasoning: "FastAPI provides native async, OpenAPI generation, and Pydantic validation"
  Author: sarah.chen
  Tags: [architecture, python, backend]
```

Liez les decisions aux rules et invariants qu'elles creent :

```
Decision: "Use FastAPI for all new backend services"
    creates > Rule: "New services must use FastAPI unless exempted"
```

Six mois plus tard, quand quelqu'un demande "pourquoi FastAPI ?", la reponse est a une recherche pres.

### Donner le contexte de votre equipe aux agents IA

Quand Claude ou Cursor travaille sur votre code, il interroge Knowledge d'abord :

```
Ingenieur : "Ajouter un nouvel endpoint pour les profils utilisateurs"

Claude > knowledge_resolve(scope="Engineering", namespace="api")
  > Retourne 14 entrees applicables : 2 invariants, 5 decisions, 6 rules, 1 override

Claude > knowledge_check(scope="Engineering", action="Ajouter un endpoint REST pour les profils")
  > Aucun conflit. Proceder.

Claude ecrit l'endpoint en suivant toutes les contraintes
  > Genere .knowledge/report.md citant inv-8a3f et rul-2b7c
  > Enregistre une reference : "Suivi inv-8a3f et rul-2b7c dans PR #142"
```

L'agent ne devine pas vos standards. Il les lit depuis le meme registre que votre equipe maintient.

### Appliquer les regles de deploiement

Codifiez les contraintes de deploiement comme invariants :

```
Invariant: "Pas de deploiement en production le vendredi apres 16:00 UTC"
Invariant: "Tous les deploiements necessitent une approbation PR d'au moins un membre"
Rule: "Les migrations DB necessitent la validation du tech-lead" (requires_approval: true)
```

Quand un agent ou un pipeline CI tente de deployer, Knowledge signale les violations et exige une approbation pour les actions gatees.

### Checks de conformite CI

Le Verifier s'execute dans votre pipeline et verifie que les PRs adressent les contraintes applicables :

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

L'agent de coding (ex. Claude Code) genere un Implementation Report sous forme de `.knowledge/report.md`, committe avec le code :

```markdown
## Implementation Report
- inv-8a3f: All endpoints require auth - followed
- rul-2b7c: Use FastAPI - followed
- rul-6f8e: PR approval required - followed
```

Le Verifier valide que les IDs cites existent, que les overrides sont actifs, et que toutes les entrees mandatory sont adressees.

Avec l'**analyse semantique** activee, le Verifier evalue aussi le diff du code contre chaque contrainte, detectant des violations que le matching de citations seul ne capturerait pas.

Avec les **external checkers**, les contraintes qui ne peuvent pas etre verifiees depuis le code seul (ex. "Les PRs doivent avoir au moins 2 reviewers approuves") sont verifiees via des scripts ou webhooks attaches qui collectent des donnees dynamiques.

Resultat : PASS, WARN ou FAIL. [Voir le flux complet du Verifier →](/product/how-it-works#cicd-verifier)

---

## Workflow au quotidien

### Pour les ingenieurs

1. **Avant de coder** : l'agent IA interroge Knowledge via `knowledge_resolve` et `knowledge_check`
2. **Pendant le coding** : l'agent suit les rules et enregistre les decisions qu'il prend
3. **Dans le commit** : l'agent genere `.knowledge/report.md` citant les entrees pertinentes
4. **Le CI tourne** : le Verifier verifie la conformite (citations + analyse semantique + external checkers)

### Pour les tech leads

1. **Definir les rules** : fixer les standards de l'equipe comme rules (mandatory ou advisory)
2. **Definir les invariants** : codifier les contraintes non-negociables
3. **Attacher des external checkers** : ajouter des scripts ou webhooks aux contraintes qui necessitent une verification dynamique
4. **Reviewer les approbations** : approuver ou rejeter les demandes d'exception des agents et ingenieurs
5. **Surveiller les events** : suivre les changements normatifs dans la timeline d'evenements

### Pour les nouveaux ingenieurs

1. **Parcourir les scopes** : voir Engineering, Product, Operations d'un coup d'oeil
2. **Lire les invariants** : comprendre ce qui ne doit jamais etre viole
3. **Chercher les decisions** : "pourquoi PostgreSQL ?" - reponse instantanee avec contexte
4. **Suivre le graphe** : tracer de la rule a la decision au contexte

---

## Ce que ca remplace

| Avant | Avec Knowledge |
|-------|---------------|
| Regles dispersees dans des docs que personne ne lit | Extraction automatique dans un registre structure |
| Architecture Decision Records dans Git | Decisions structurees avec liens et recherche |
| Regles de deploiement dans Slack | Invariants lisibles par les machines |
| Standards dans des pages wiki | Rules versionnees que les agents peuvent interroger |
| Review manuelle de conformite des PRs | Verifier automatise en CI avec analyse semantique |
| "Demande a Sarah, elle s'en souvient" | Registre recherchable avec contexte complet |

---

## Commencer

1. [Creer votre compte](/docs/getting-started)
2. Creer un scope Engineering
3. Demander à votre agent IA d'extraire les règles depuis `./docs` pour le scope Engineering
4. Reviewer et approuver les brouillons dans le dashboard
5. Connecter Claude via MCP
6. Ajouter le Verifier a un depot

[Commencer](/docs/getting-started) · [Comment ca fonctionne](/product/how-it-works) · [Tarifs](/pricing)
