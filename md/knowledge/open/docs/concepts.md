<!-- lang: en -->

# Concepts

Knowledge organizes your team's decisions, constraints, and standards into five core entities. This page explains what each one is, why it exists, and how they work together.

---

## Scopes and Namespaces

**Scopes** organize knowledge by domain. **Namespaces** subdivide scopes for finer-grained structure.

A scope represents a domain or department — Engineering, Product, Operations, Security, Legal. Each scope contains its own decisions, invariants, rules, overrides, and events.

![Scope and namespace tree](/images/docs/knowledge-scope-tree-en.svg)

Namespaces subdivide a scope into sub-domains. Every scope starts with a `global` namespace. You can create additional namespaces to organize entries by team or area. Namespaces support up to two levels of nesting (e.g. `payments/stripe`).

API keys control access at the scope level: no access, reader, contributor, or admin.

**Tenants** represent organizations. Each tenant has its own scopes, entries, and API keys. Isolation is strict — a key from one tenant cannot access another tenant's data.

---

## Decisions

A **decision** records what was decided, by whom, when, and why — as an immutable historical fact.

> *"We chose PostgreSQL for all transactional data stores. We evaluated PostgreSQL, DynamoDB, and CockroachDB. PostgreSQL won on ACID guarantees without distributed complexity."*

Decisions capture four things: **what** was decided, the **context** that led to it, the **reasoning** behind the choice, and **who** made it (human, agent, or system).

Decisions are **immutable** — once created, they cannot be modified. If a decision is later revised, the new decision links to the old one via a `supersedes` relation. This preserves the full history of how thinking evolved.

Decisions can be created from the dashboard, the API, or by an AI agent via MCP (e.g. *"Record a decision: we chose Playwright for E2E testing"*).

### Why decisions matter

Without recorded decisions, teams spend time re-debating settled questions. New hires don't know *why* things are the way they are. Knowledge makes the reasoning searchable and permanent.

### Best practices

- **Record at decision time**, not retroactively — context and reasoning are freshest when the decision is made.
- **Include the alternatives considered** — "We evaluated X, Y, and Z" is more valuable than "We chose X."
- **Link to constraints** — if a decision creates a rule or invariant, link them so the reasoning is traceable.

---

## Invariants

An **invariant** is an absolute constraint — something that must never be violated. Invariants are the strongest enforcement mechanism in Knowledge.

> *"All public API endpoints must require authentication."*

Invariants are **blocking**: if an action conflicts with an active invariant, Knowledge reports a blocking conflict. The action should be stopped or an override must be obtained.

### How invariants are enforced

Invariants are checked at three points:

- **Compliance check** — an agent or human tests an intended action against the registry. If it conflicts with an invariant, Knowledge returns a blocking result.
- **CI Verifier** — checks PRs against active invariants. If an applicable invariant is not addressed in the PR's Implementation Report, the pipeline fails. For example, a PR that adds an API endpoint without mentioning the *"All endpoints require authentication"* invariant would be blocked.
- **MCP Agent** — the agent queries invariants before acting. If a conflict is detected, it stops and reports, or requests approval.

### Approval-gated invariants

Some invariants are too critical for anyone to bypass silently. When `requires_approval` is enabled, an exception requires human approval:

1. Agent detects conflict with invariant
2. Agent requests approval (with justification)
3. Human reviews in the dashboard (or via Slack notification)
4. If approved → an override is auto-created
5. Agent re-checks → conflict resolved → proceeds

This ensures human oversight for the most critical constraints.

### Best practices

- **Keep invariants few and critical** — if everything is an invariant, nothing is. Reserve them for constraints that should genuinely never be violated.
- **Write clear rationale** — explain *why* the constraint exists, not just restate it.
- **Review periodically** — invariants that no longer apply should be revoked, not left as noise.

---

## Rules

A **rule** is an active directive — a statement of what should be done. Unlike invariants (absolute blocks), rules can be mandatory or advisory, and they are versioned to track how standards evolve.

> *"All PRs must be reviewed by at least one team member before merging."*

### Severity levels

| Severity | Meaning | CI Behavior |
|----------|---------|-------------|
| **MANDATORY** | Must be followed | Verifier fails if uncited |
| **ADVISORY** | Should be followed | Verifier warns if uncited |

### Versioning

Rules change over time. When a rule is updated, Knowledge creates a new version while preserving the full history. Each version records who changed it, when, and why — your audit trail for how standards evolved.

For example, a rule might start as *"All PRs must be reviewed by one team member"* and later become *"...by two team members"* after a production incident. Both versions are preserved.

### Best practices

- **Distinguish mandatory from advisory** — not every guideline needs to block CI.
- **Version with change reasons** — a version without a reason is an incomplete audit trail.
- **Keep directives actionable** — "Code should be clean" is not enforceable. "All functions must have explicit return types" is.

---

## Overrides

An **override** is a governed exception to an invariant or rule. It documents that the organization knowingly deviated from a constraint, with justification and conditions.

> *"Health endpoint must be public for load balancer checks. Only applies to /health and /ready endpoints. Expires 2025-06-01."*

Overrides are **not workarounds**. They are explicit, documented exceptions that prove the organization acknowledged a constraint, evaluated the risk, and decided to deviate — with a clear paper trail.

### Temporary vs. permanent

| Type | Use Case | Behavior |
|------|----------|----------|
| **Temporary** | Hotfix, time-limited exception | Expires at a set date, then the constraint re-applies |
| **Permanent** | Deliberate long-term exception | Active until explicitly revoked |

Prefer temporary overrides. Permanent overrides should be rare and well-justified.

### How overrides affect compliance

When an override is active, the compliance check moves the target entry from "conflicts" to "overridden." The action is allowed, but the override is visible — it's not silent. The CI Verifier also recognizes overrides.

When an invariant has `requires_approval` enabled, overrides are created automatically after a human approves the exception through the approval workflow.

### Best practices

- **Always include justification** — an override without justification is a gap in your audit trail.
- **Use conditions** — "Only applies to /health endpoint" is more precise than overriding the entire invariant.
- **Review expired overrides** — they may indicate constraints that need updating.

---

## How They Work Together

![Entity relationship graph](/images/docs/knowledge-entity-graph-en.svg)

Links connect them into a navigable graph of organizational knowledge.

For API details, see the [Integrations](/docs/integrations) page (requires login).

---
---

<!-- lang: fr -->

# Concepts

Knowledge organise les décisions, contraintes et standards de votre équipe en cinq entités fondamentales. Cette page explique ce qu'est chacune, pourquoi elle existe, et comment elles fonctionnent ensemble.

---

## Scopes et Namespaces

Les **scopes** organisent les connaissances par domaine. Les **namespaces** subdivisent les scopes pour une structure plus fine.

Un scope représente un domaine ou département — Engineering, Product, Operations, Security, Legal. Chaque scope contient ses propres decisions, invariants, rules, overrides et events.

![Arborescence scope et namespaces](/images/docs/knowledge-scope-tree-fr.svg)

Les namespaces subdivisent un scope en sous-domaines. Chaque scope commence avec un namespace `global`. Vous pouvez créer des namespaces supplémentaires pour organiser les entrées par équipe ou domaine. Les namespaces supportent jusqu'à deux niveaux d'imbrication (ex. `payments/stripe`).

Les clés API contrôlent l'accès au niveau du scope : aucun accès, reader, contributor ou admin.

Les **tenants** représentent des organisations. Chaque tenant a ses propres scopes, entrées et clés API. L'isolation est stricte — une clé d'un tenant ne peut pas accéder aux données d'un autre.

---

## Decisions

Une **decision** enregistre ce qui a été décidé, par qui, quand et pourquoi — comme un fait historique immuable.

> *"On a choisi PostgreSQL pour tous les data stores transactionnels. On a évalué PostgreSQL, DynamoDB et CockroachDB. PostgreSQL l'a emporté sur les garanties ACID sans complexité distribuée."*

Les decisions capturent quatre choses : **ce qui** a été décidé, le **contexte** qui y a mené, le **raisonnement** derrière le choix, et **qui** l'a pris (humain, agent ou système).

Les decisions sont **immuables** — une fois créées, elles ne peuvent pas être modifiées. Si une décision est révisée, la nouvelle est liée à l'ancienne via une relation `supersedes`. Cela préserve l'historique complet de l'évolution de la réflexion.

Les decisions peuvent être créées depuis le dashboard, l'API, ou par un agent IA via MCP (ex. *"Enregistre une décision : on a choisi Playwright pour les tests E2E"*).

### Pourquoi les decisions comptent

Sans decisions enregistrées, les équipes perdent du temps à redébattre de questions déjà tranchées. Les nouveaux arrivants ne savent pas *pourquoi* les choses sont ainsi. Knowledge rend le raisonnement recherchable et permanent.

### Bonnes pratiques

- **Enregistrez au moment de la décision**, pas rétroactivement — le contexte et le raisonnement sont plus frais au moment de la décision.
- **Incluez les alternatives considérées** — "On a évalué X, Y et Z" est plus utile que "On a choisi X."
- **Liez aux contraintes** — si une decision crée une rule ou un invariant, liez-les pour que le raisonnement soit traçable.

---

## Invariants

Un **invariant** est une contrainte absolue — quelque chose qui ne doit jamais être violé. Les invariants sont le mécanisme d'enforcement le plus fort de Knowledge.

> *"Tous les endpoints API publics doivent exiger une authentification."*

Les invariants sont **bloquants** : si une action entre en conflit avec un invariant actif, Knowledge signale un conflit bloquant. L'action doit être stoppée ou un override doit être obtenu.

### Comment les invariants sont appliqués

Les invariants sont vérifiés à trois niveaux :

- **Compliance check** — un agent ou un humain teste une action envisagée contre le registre. Si elle entre en conflit avec un invariant, Knowledge retourne un résultat bloquant.
- **CI Verifier** — vérifie les PRs contre les invariants actifs. Si un invariant applicable n'est pas adressé dans l'Implementation Report de la PR, le pipeline échoue. Par exemple, une PR qui ajoute un endpoint API sans mentionner l'invariant *"All endpoints require authentication"* serait bloquée.
- **Agent MCP** — l'agent interroge les invariants avant d'agir. Si un conflit est détecté, il s'arrête et signale, ou demande une approbation.

### Invariants à approbation requise

Certains invariants sont trop critiques pour être contournés silencieusement. Quand `requires_approval` est activé, une exception nécessite une approbation humaine :

1. L'agent détecte un conflit avec un invariant
2. L'agent demande une approbation (avec justification)
3. L'humain review dans le dashboard (ou via notification Slack)
4. Si approuvé → un override est auto-créé
5. L'agent re-vérifie → conflit résolu → continue

Cela garantit une supervision humaine pour les contraintes les plus critiques.

### Bonnes pratiques

- **Gardez les invariants peu nombreux et critiques** — si tout est un invariant, rien ne l'est. Réservez-les aux contraintes qui ne doivent genuinement jamais être violées.
- **Rédigez un rationale clair** — expliquez le *pourquoi*, ne reformulez pas la contrainte.
- **Révisez périodiquement** — les invariants qui ne s'appliquent plus doivent être révoqués, pas laissés comme du bruit.

---

## Rules

Une **rule** est une directive active — un énoncé de ce qui doit être fait. Contrairement aux invariants (bloquants absolus), les rules peuvent être mandatory ou advisory, et elles sont versionnées pour suivre l'évolution des standards.

> *"Toutes les PRs doivent être revues par au moins un membre de l'équipe avant le merge."*

### Niveaux de sévérité

| Sévérité | Signification | Comportement CI |
|----------|---------------|-----------------|
| **MANDATORY** | Doit être suivie | Le Verifier échoue si non citée |
| **ADVISORY** | Devrait être suivie | Le Verifier avertit si non citée |

### Versioning

Les rules évoluent avec le temps. Quand une rule est mise à jour, Knowledge crée une nouvelle version tout en préservant l'historique complet. Chaque version enregistre qui l'a changée, quand et pourquoi — votre trace d'audit de l'évolution des standards.

Par exemple, une rule peut commencer par *"Toutes les PRs doivent être revues par un membre"* et devenir plus tard *"...par deux membres"* après un incident de production. Les deux versions sont préservées.

### Bonnes pratiques

- **Distinguez mandatory d'advisory** — pas chaque guideline ne doit bloquer le CI.
- **Versionnez avec des raisons de changement** — une version sans raison est une trace d'audit incomplète.
- **Gardez les directives actionnables** — "Le code doit être propre" n'est pas applicable. "Toutes les fonctions doivent avoir des types de retour explicites" l'est.

---

## Overrides

Un **override** est une exception gouvernée à un invariant ou une rule. Il documente que l'organisation a sciemment dévié d'une contrainte, avec justification et conditions.

> *"Le health endpoint doit être public pour les checks du load balancer. S'applique uniquement à /health et /ready. Expire le 2025-06-01."*

Les overrides ne sont **pas des contournements**. Ce sont des exceptions explicites et documentées qui prouvent que l'organisation a reconnu une contrainte, évalué le risque et décidé de dévier — avec une traçabilité complète.

### Temporary vs. permanent

| Type | Cas d'usage | Comportement |
|------|-------------|--------------|
| **Temporary** | Hotfix, exception limitée dans le temps | Expire à une date fixée, puis la contrainte se réapplique |
| **Permanent** | Exception délibérée à long terme | Actif jusqu'à révocation explicite |

Préférez les overrides temporaires. Les permanents doivent être rares et bien justifiés.

### Comment les overrides affectent la conformité

Quand un override est actif, le compliance check déplace l'entrée cible de "conflicts" vers "overridden." L'action est autorisée, mais l'override est visible — ce n'est pas silencieux. Le CI Verifier reconnaît aussi les overrides.

Quand un invariant a `requires_approval` activé, les overrides sont créés automatiquement après qu'un humain approuve l'exception via le workflow d'approbation.

### Bonnes pratiques

- **Incluez toujours une justification** — un override sans justification est une lacune dans votre trace d'audit.
- **Utilisez les conditions** — "S'applique uniquement à /health" est plus précis qu'overrider l'invariant entier.
- **Révisez les overrides expirés** — ils peuvent indiquer des contraintes à mettre à jour.

---

## Comment elles fonctionnent ensemble

![Graphe des relations entre entités](/images/docs/knowledge-entity-graph-fr.svg)

Les liens les connectent en un graphe navigable de connaissances organisationnelles.

Pour les détails API, voir la page [Intégrations](/docs/integrations) (connexion requise).
