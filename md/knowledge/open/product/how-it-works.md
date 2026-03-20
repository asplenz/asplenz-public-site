<!-- lang: fr -->

# Comment fonctionne Knowledge

Knowledge est un registre de décisions qui connecte humains, agents IA et pipelines CI à une source de vérité unique pour les contraintes organisationnelles.

---

## L'idée centrale

Les organisations prennent des décisions. Ces décisions produisent des contraintes. Ces contraintes doivent être appliquées. Aujourd'hui, les décisions vivent dans des wikis, les contraintes dans la tête des gens, et l'application est manuelle. Knowledge change ça en extrayant ce qui existe déjà, en structurant les décisions, en rendant les contraintes lisibles par les machines, et en automatisant leur application.

---

## Quatre types d'entrées, un seul registre

### Decisions

Une **decision** est un choix enregistré avec son contexte, son raisonnement et son auteur. Certaines decisions produisent des règles ou des contraintes. D'autres sont des actions ponctuelles ou des changements d'état — un changement de fournisseur cloud, un choix technique pour un cas spécifique, une réponse à un incident. Dans tous les cas, la decision est un fait historique immuable : elle documente ce qui a été décidé, pas ce qui doit être fait ensuite. Si une décision doit être révisée, elle peut être remplacée par une nouvelle décision liée à l'originale.

```json
{
  "decision": "Utiliser PostgreSQL pour tous les data stores transactionnels",
  "context": "Évaluation de PostgreSQL, DynamoDB et CockroachDB",
  "reasoning": "Garanties ACID sans complexité distribuée",
  "author": "sarah.chen",
  "tags": ["database", "infrastructure"]
}
```

Knowledge ne bloque pas la création de decisions contradictoires — c'est un fait historique, on l'enregistre tel quel. Mais un check de cohérence (on-demand ou nightly) détecte les tensions et doublons par similarité sémantique, avec des actions pour résoudre chaque finding.

### Invariants

Un **invariant** est une contrainte absolue — quelque chose qui ne doit jamais être violé. Les invariants sont bloquants : si une action entre en conflit avec un invariant, l'action est stoppée.

Les invariants sont immuables comme les decisions. Si une contrainte doit évoluer, l'invariant actuel est archivé et un nouvel invariant le **supersede** via un lien explicite. L'ancien reste consultable pour l'audit. Pour les cas exceptionnels, un **override** permet de déroger temporairement sans modifier l'invariant lui-même.

```json
{
  "constraint": "Tous les endpoints API publics doivent exiger une authentification",
  "rationale": "Baseline sécurité — aucune exception sans approbation explicite",
  "requires_approval": true
}
```

Les invariants répondent à la question : **« Qu'est-ce qui ne doit jamais arriver ? »**

### Rules

Une **rule** est une directive active — quelque chose qui doit être suivi. Les rules sont **versionnées** : quand les exigences changent, une nouvelle version est créée sous le même identifiant tandis que l'historique complet est préservé. L'API retourne toujours la version en vigueur — tous les agents voient la même directive au même moment.

Comme les invariants, les rules supportent les **overrides** pour les exceptions gouvernées. Pour les changements fondamentaux (pas une simple évolution), une rule peut aussi être **supersedée** par une nouvelle rule distincte.

Les rules ont deux niveaux de sévérité :
- **Mandatory** : doit être suivie ; les violations bloquent les checks CI
- **Advisory** : devrait être suivie ; les violations génèrent des avertissements

```json
{
  "directive": "Toutes les PRs doivent être revues par au moins un membre de l'équipe",
  "severity": "MANDATORY"
}
```

Les rules répondent à la question : **« Que devons-nous faire ? »**

### Overrides

Un **override** est une exception gouvernée — une dérogation explicite et approuvée à une rule ou un invariant. Les overrides ne sont pas des contournements. Ce sont des preuves documentées que l'organisation a reconnu une contrainte, décidé d'y déroger, et enregistré pourquoi.

```json
{
  "target": "rule:rul-9c2a",
  "justification": "Le gateway de paiement legacy nécessite REST — migration gRPC prévue au Q3",
  "conditions": "S'applique uniquement au service payment-gateway-v2",
  "expires": "2026-09-30",
  "approved_by": "sarah.chen"
}
```

Un override ne peut pas être modifié — il peut être révoqué et recréé si les conditions changent.

---

## Scopes et organisation

Knowledge est organisé en **scopes** — des domaines comme Engineering, Product, Operations ou Security. Chaque scope contient ses propres decisions, invariants et rules. Au sein d'un scope, les **namespaces** permettent une subdivision plus fine (ex : `payments`, `auth`, `infra`).

![Scopes et namespaces](./knowledge-scopes-tree.svg)

Pour les organisations multi-entités, les **tenants** assurent l'isolation. Un groupe peut avoir des tenants par filiale, chacun avec ses propres scopes et entrées.

---

## Partez de ce que vous avez déjà

Vos règles existantes peuvent être extraites automatiquement à partir de vos différents documents tels que les fichiers README, les docs d'architecture, les runbooks, le code source, les fichiers CLAUDE.md, etc.

### Extraction depuis le code source

Un prompt Asplenz permet à votre agent IA (Claude Code, Cursor) d'analyser votre codebase localement et d'enregistrer les règles détectées dans Knowledge via MCP. Le code ne quitte jamais votre machine, seules les règles extraites sont envoyées au registre.

### Extraction depuis les documents

Uploadez vos documents dans Knowledge via l'API d'ingestion. Knowledge les analyse et génère des drafts typés.

### Validation humaine

Rien n'est publié sans validation. Chaque extraction génère un **draft** visible dans le dashboard : approuver, rejeter ou éditer. La déduplication sémantique élimine les doublons, ce qui permet de ré-extraire régulièrement sans polluer le registre.

---

## Cinq interfaces, une seule source de vérité

### Dashboard web

Les humains parcourent les scopes, lisent les decisions, passent en revue les drafts et approbations, et recherchent dans le registre. Le dashboard affiche :
- Cartes KPI (compteurs d'entrées par type)
- Drafts d'extraction avec workflow approuver/rejeter
- Pages scope avec onglets (Decisions, Invariants, Rules, Overrides, Approvals, Events, References)
- Recherche full-text avec filtres type/scope
- Vérificateur de conformité (tester une action envisagée contre les contraintes)

### API REST

L'interface programmatique directe au registre. Toutes les autres interfaces (MCP, Bot, Verifier) en sont des clients. Authentification par clé API, permissions granulaires.

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/check \
  -H "Authorization: Bearer kn_..." \
  -d '{"scope_id": "scp-...", "intended_action": "Déployer vendredi soir"}'
```

### MCP pour les agents IA

Les agents IA se connectent via MCP et interagissent en langage naturel. Knowledge expose un ensemble d'outils que les agents appellent avant, pendant et après leurs actions.

**Vérifier avant d'agir :**

```
Utilisateur : "Est-ce que je peux déployer vendredi soir ?"
Agent → knowledge_check(scope="Engineering", intended_action="Déployer vendredi soir")
Knowledge → Conflit : invariant inv-8a3f "Pas de déploiement le vendredi après 16h UTC"
Agent : "Non — bloqué par l'invariant inv-8a3f. L'équipe a une politique no-deploy le vendredi."
```

**Résoudre le contexte avant de coder :**

```
L'agent démarre une tâche dans le namespace payments
Agent → knowledge_resolve(scope="Engineering", namespace="payments")
Knowledge → Retourne 14 entrées applicables : 2 invariants, 5 decisions, 6 rules, 1 override
L'agent sait maintenant : PostgreSQL obligatoire, pas de dépendances AGPL, gRPC pour les nouveaux
  services, override REST actif pour payment-gateway-v2
```

**Enregistrer une décision après l'avoir prise :**

```
Utilisateur : "On prend Redis pour le cache de sessions plutôt que Memcached"
Agent → knowledge_record(scope="Engineering", type="decision",
        decision="Redis pour le cache de sessions",
        reasoning="Pub/sub natif, meilleures options de persistance")
Knowledge → Créé dec-4f2a, lié à la rule existante rul-7b1c (stratégie de cache)
```

Les agents peuvent chercher, vérifier la conformité, résoudre le contexte applicable, enregistrer des decisions, demander des approbations et enregistrer des traces d'usage — le tout via le même protocole.

Quand un agent demande une approbation, Knowledge peut notifier les personnes concernées via **webhook** (Slack, Teams, ou tout système externe) avec une signature ECDSA pour garantir l'authenticité. L'agent peut fournir un `callback_url` pour être notifié automatiquement quand l'approbation est traitée — sans polling.

### Bot Slack & Teams

Le Knowledge Bot permet de capturer des entrées directement depuis Slack ou Teams :

- Créez une decision, rule ou invariant depuis n'importe quel canal via un raccourci
- Transformez un message en entrée Knowledge structurée en un clic
- Consultez les entrées du registre dans un dashboard intégré

### Verifier CI/CD

Le Verifier s'exécute dans votre pipeline CI et analyse le diff de chaque PR contre l'état normatif du registre. Une IA évalue si les changements respectent ou violent chaque contrainte applicable.

**Une PR qui passe :**

```
PR #142 : "Ajouter un endpoint de health avec auth JWT"
  → Le Verifier résout le scope Engineering (3 invariants, 2 rules mandatory)
  → L'IA analyse le diff contre chaque contrainte
  → inv-a1b2 "Tous les endpoints doivent exiger une auth" : RESPECTÉ (confiance : 0.95)
  → Verdict : PASS ✓
```

**Une PR qui échoue :**

```
PR #143 : "Ajouter une librairie PDF sous licence AGPL"
  → Le Verifier résout le scope Engineering
  → L'IA détecte une violation : inv-2b1c "Pas de dépendances sous licence AGPL"
  → Aucun override actif pour cet invariant
  → Verdict : FAIL ✗
```

Trois modes : `report-only`, `fail-on-blocking`, `strict`.

---

## Sécurité et contrôle d'accès

- **Clés API** avec permissions : chaque clé a un ensemble spécifique d'opérations autorisées
- **Hiérarchie de rôles** : developer → senior-dev → tech-lead → admin
- **Accès par scope** : les clés peuvent être restreintes à des scopes spécifiques
- **Isolation tenant** : les déploiements multi-tenant assurent une séparation complète des données

Pour le détail, voir [Sécurité →](/docs/security).

---

## Prêt à essayer ?

Créez votre premier scope et extrayez vos premières règles en 2 minutes.

[Commencer →](/docs/getting-started) · [Voir les tarifs →](/pricing)



<!-- lang: en -->

# How Knowledge Works

Knowledge is a decision registry that connects humans, AI agents, and CI pipelines to a single source of truth for organizational constraints.

---

## The Core Idea

Organizations make decisions. Those decisions produce constraints. Constraints must be enforced. Today, decisions live in wikis, constraints live in people's heads, and enforcement is manual. Knowledge changes this by extracting what already exists, making decisions structured, constraints machine-readable, and enforcement automatic.

---

## Four Entry Types, One Registry

### Decisions

A **decision** is a recorded choice with its context, reasoning, and author. Some decisions produce rules or constraints. Others are one-time actions or state changes — switching cloud providers, a technical choice for a specific case, a response to an incident. In all cases, the decision is an immutable historical fact: it documents what was decided, not what should be done next. If a decision needs to be revised, it can be superseded by a new decision linked to the original.

```json
{
  "decision": "Use PostgreSQL for all transactional data stores",
  "context": "Evaluated PostgreSQL, DynamoDB, and CockroachDB",
  "reasoning": "ACID guarantees without distributed complexity",
  "author": "sarah.chen",
  "tags": ["database", "infrastructure"]
}
```

Knowledge does not block the creation of contradictory decisions — they are historical facts, recorded as-is. But a coherence check (on-demand or nightly) detects tensions and duplicates via semantic similarity, with actions to resolve each finding.

### Invariants

An **invariant** is an absolute constraint — something that must never be violated. Invariants are blocking: if an action conflicts with an invariant, the action is stopped.

Invariants are immutable like decisions. If a constraint needs to evolve, the current invariant is archived and a new invariant **supersedes** it via an explicit link. The old one remains available for audit. For exceptional cases, an **override** allows a temporary deviation without modifying the invariant itself.

```json
{
  "constraint": "All public API endpoints must require authentication",
  "rationale": "Security baseline — no exceptions without explicit approval",
  "requires_approval": true
}
```

Invariants answer the question: **"What must never happen?"**

### Rules

A **rule** is an active directive — something that should be followed. Rules are **versioned**: when requirements change, a new version is created under the same identifier while the full history is preserved. The API always returns the current version — all agents see the same directive at the same time.

Like invariants, rules support **overrides** for governed exceptions. For fundamental changes (not just incremental evolution), a rule can also be **superseded** by a new, distinct rule.

Rules have two severity levels:
- **Mandatory**: must be followed; violations block CI checks
- **Advisory**: should be followed; violations generate warnings

```json
{
  "directive": "All PRs must be reviewed by at least one team member",
  "severity": "MANDATORY"
}
```

Rules answer the question: **"What should we do?"**

### Overrides

An **override** is a governed exception — an explicit, approved deviation from a rule or invariant. Overrides are not workarounds. They are documented proof that the organization acknowledged a constraint, decided to deviate, and recorded why.

```json
{
  "target": "rule:rul-9c2a",
  "justification": "Legacy payment gateway requires REST — gRPC migration planned for Q3",
  "conditions": "Applies only to payment-gateway-v2 service",
  "expires": "2026-09-30",
  "approved_by": "sarah.chen"
}
```

An override cannot be modified — it can be revoked and recreated if conditions change.

---

## Scopes and Organization

Knowledge is organized into **scopes** — domains like Engineering, Product, Operations, or Security. Each scope contains its own decisions, invariants, and rules. Within a scope, **namespaces** allow further subdivision (e.g., `payments`, `auth`, `infra`).

![Scopes and namespaces](./knowledge-scopes-tree.svg)

For multi-entity organizations, **tenants** provide isolation. A holding company can have subsidiary tenants, each with their own scopes and entries.

---

## Start from What You Have

Your existing rules can be extracted automatically from your various documents such as README files, architecture docs, runbooks, source code, CLAUDE.md files, etc.

### Extraction from Source Code

An Asplenz prompt enables your AI agent (Claude Code, Cursor) to analyze your codebase locally and record detected rules into Knowledge via MCP. The code never leaves your machine, only the extracted rules are sent to the registry.

### Extraction from Documents

Upload your documents into Knowledge via the Ingestion API. Knowledge analyzes them and generates typed drafts.

### Human Review

Nothing is published without validation. Each extraction generates a **draft** visible in the dashboard: approve, reject, or edit. Semantic deduplication filters out duplicates, so you can re-extract regularly without polluting the registry.

---

## Five Interfaces, One Source of Truth

### Web Dashboard

Humans browse scopes, read decisions, review pending drafts and approvals, and search the registry. The dashboard shows:
- KPI cards (entry counts by type)
- Extraction drafts with approve/reject workflow
- Scope pages with tabs (Decisions, Invariants, Rules, Overrides, Approvals, Events, References)
- Full-text search with type/scope filters
- Compliance checker (test an intended action against constraints)

### REST API

The direct programmatic interface to the registry. All other interfaces (MCP, Bot, Verifier) are clients of this API. Authentication via API key, with granular per-key permissions.

```bash
curl -X POST https://api.asplenz.com/knowledge/v1/check \
  -H "Authorization: Bearer kn_..." \
  -d '{"scope_id": "scp-...", "intended_action": "Deploy on Friday evening"}'
```

### MCP for AI Agents

AI agents connect via MCP and interact using natural language. Knowledge exposes a set of tools that agents call before, during, and after acting.

**Check before acting:**

```
User: "Can I deploy on Friday evening?"
Agent → knowledge_check(scope="Engineering", intended_action="Deploy on Friday evening")
Knowledge → Conflict: invariant inv-8a3f "No Friday deploys after 16:00 UTC"
Agent: "No — blocked by invariant inv-8a3f. The team has a no-Friday-deploy policy."
```

**Resolve context before coding:**

```
Agent starts a task in the payments namespace
Agent → knowledge_resolve(scope="Engineering", namespace="payments")
Knowledge → Returns 14 applicable entries: 2 invariants, 5 decisions, 6 rules, 1 override
Agent now knows: PostgreSQL required, no AGPL deps, gRPC for new services,
  REST override active for payment-gateway-v2
```

**Record a decision after making one:**

```
User: "Let's use Redis for session caching instead of Memcached"
Agent → knowledge_record(scope="Engineering", type="decision",
        decision="Redis for session caching",
        reasoning="Native pub/sub, better persistence options")
Knowledge → Created dec-4f2a, linked to existing rule rul-7b1c (caching strategy)
```

Agents can search, check compliance, resolve applicable context, record decisions, request approvals, and record usage traces — all through the same protocol.

When an agent requests an approval, Knowledge can notify the right people via **webhook** (Slack, Teams, or any external system) with an ECDSA signature to guarantee authenticity. The agent can provide a `callback_url` to be notified automatically when the approval is resolved — no polling needed.

### Slack & Teams Bot

The Knowledge Bot lets you capture entries directly from Slack or Teams:

- Create a decision, rule, or invariant from any channel via a shortcut
- Turn a message into a structured Knowledge entry in one click
- Browse the registry entries in an integrated dashboard

### CI/CD Verifier

The Verifier runs in your CI pipeline and analyzes the diff of each PR against the normative state of the registry. An AI evaluates whether the changes respect or violate each applicable constraint.

**A PR that passes:**

```
PR #142: "Add health endpoint with JWT auth"
  → Verifier resolves Engineering scope (3 invariants, 2 mandatory rules)
  → AI analyzes the diff against each constraint
  → inv-a1b2 "All endpoints must require auth": RESPECTED (confidence: 0.95)
  → Verdict: PASS ✓
```

**A PR that fails:**

```
PR #143: "Add AGPL-licensed PDF library"
  → Verifier resolves Engineering scope
  → AI detects a violation: inv-2b1c "No AGPL-licensed dependencies"
  → No active override for this invariant
  → Verdict: FAIL ✗
```

Three modes: `report-only`, `fail-on-blocking`, `strict`.

---

## Security and Access Control

- **API keys** with permissions: each key has a specific set of allowed operations
- **Role hierarchy**: developer → senior-dev → tech-lead → admin
- **Scope-level access**: keys can be restricted to specific scopes
- **Tenant isolation**: multi-tenant deployments ensure complete data separation

For a detailed breakdown, see [Security →](/docs/security).

---

## Ready to Try?

Create your first scope and extract your first rules in 2 minutes.

[Get Started →](/docs/getting-started) · [View Pricing →](/pricing)
