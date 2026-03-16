<!-- lang: en -->

# AI Agent Integration

## Give your agents the context they're missing.

When an AI agent writes code, reviews a PR, or makes a deployment decision, it acts without knowledge of your team's architectural choices, compliance requirements, or operational rules. It does its best — and you review after the fact, hoping to catch violations.

Knowledge closes that gap. Agents query your decision registry before acting, not after.

---

## The Problem with Post-Hoc Review

![Post-hoc review workflow](./knowledge-posthoc-workflow.svg)

The agent doesn't know that your team decided to use PostgreSQL for transactional data, that all API endpoints must require authentication, or that deployments to production require a staging step. It discovers these constraints when you reject its work.

---

## Pre-Flight Constraint Checking

With Knowledge, the workflow becomes:

![Pre-flight workflow](./knowledge-preflight-workflow.svg)

Every action is informed. Every constraint check is recorded. Every compliance question has a structured answer.

---

## MCP Integration

Knowledge exposes 9 tools through the Model Context Protocol (MCP), compatible with Claude Code, Cursor, and any MCP client.

### Before acting

| Tool | Purpose |
|------|---------|
| `knowledge_list_invariants` | Get all blocking constraints for a scope |
| `knowledge_list_rules` | Get all active directives (mandatory + advisory) |
| `knowledge_check` | Test an intended action against the normative state |
| `knowledge_request_approval` | Request human approval for gated actions |
| `knowledge_get_approval_status` | Check if approval was granted |

### After acting

| Tool | Purpose |
|------|---------|
| `knowledge_record_reference` | Record that a constraint was followed or diverged from |
| `knowledge_record` | Capture a new decision with context and reasoning |

### Anytime

| Tool | Purpose |
|------|---------|
| `knowledge_query` | Search the registry by keywords, type, scope |
| `knowledge_resolve` | Get the full normative state for a scope |

---

## Example: Agent Workflow

```
Agent: I need to add a new API endpoint for payment processing.

1. knowledge_list_invariants(scope="Engineering")
   --> "All API endpoints must require authentication"
   --> "No eventual consistency for financial transactions"

2. knowledge_check(scope="Engineering", action="Add REST endpoint for payment processing")
   --> No conflicts. Proceed.

3. Agent writes the endpoint with authentication middleware and PostgreSQL.

4. knowledge_record_reference(
     entry_id="inv-a1b2c3",
     context_type="pull_request",
     context_ref="PR #142",
     compliance="followed"
   )

5. knowledge_record(
     scope="Engineering",
     decision="Added /api/payments endpoint using REST with bearer auth",
     context="Payment team requested payment initiation API",
     reasoning="Followed existing REST convention per Engineering rules"
   )
```

The agent acted with full context. The compliance trail is automatic.

---

## How Constraints Apply

### Invariants — Hard Stops
Absolute constraints that block violating actions. If an agent's intended action conflicts with an invariant, the compliance check returns a conflict and the agent stops.

### Rules — Active Guidance
Directives that shape behavior. Mandatory rules must be followed; advisory rules should be considered. Agents receive both and can explain which rules influenced their decisions.

### Approval Gates
Some invariants require human approval before proceeding. The agent requests approval, Knowledge notifies the right people via ECDSA-signed webhook (Slack, Teams, or any external system), and the agent is notified automatically when the decision is made. The entire exchange is recorded.

---

## Audit Trail

Every agent interaction with Knowledge generates structured data:

| Event | What's Recorded |
|-------|----------------|
| Constraint query | Scope, timestamp, entries returned |
| Compliance check | Action, conflicts, result |
| Approval request | Entry, justification, status |
| Reference | Entry cited, context (PR, commit, deploy), compliance status |
| Decision recorded | Full decision with context and reasoning |

When an auditor asks "what constraints governed this AI-generated code?", the answer is a database query.

---

## Setup

### 1. Configure MCP

Add to your `.mcp.json`:

```json
{
  "mcpServers": {
    "knowledge": {
      "command": "python",
      "args": ["-m", "src.knowledge-mcp.server"],
      "env": {
        "KNOWLEDGE_API_URL": "http://localhost:8090",
        "KNOWLEDGE_API_KEY": "kn_..."
      }
    }
  }
}
```

> For hosted Asplenz, replace `KNOWLEDGE_API_URL` with your instance URL (e.g. `https://api.asplenz.com`).

### 2. Launch your agent

The MCP tools are automatically available. Asplenz provides system prompt templates so agents use them correctly out of the box.

### 3. Monitor in the dashboard

Every query, check, approval, and reference appears in the event timeline. Review agent behavior in real time or audit historically.

---

## Compatible Agents

Knowledge works with any MCP-compatible client:

- **Claude Code** — full MCP support, recommended workflow
- **Cursor** — MCP integration for IDE-based agents
- **Custom agents** — any client implementing the MCP protocol

The same API that agents use is available via REST for custom integrations, CI pipelines, and scripts.

---

[MCP Setup Guide →](/docs/integrations/claude-mcp) · [API Reference →](/docs/integrations/api-reference) · [Getting Started →](/docs/getting-started)

---
---

<!-- lang: fr -->

# Intégration des Agents IA

## Donnez à vos agents le contexte qui leur manque.

Quand un agent IA écrit du code, review une PR ou prend une décision de déploiement, il agit sans connaître les choix d'architecture de votre équipe, les exigences de conformité ou les règles opérationnelles. Il fait de son mieux — et vous reviewez après coup, en espérant détecter les violations.

Knowledge comble ce gap. Les agents interrogent votre registre de décisions avant d'agir, pas après.

---

## Le problème du review a posteriori

![Workflow de review a posteriori](./knowledge-posthoc-workflow.svg)

L'agent ne sait pas que votre équipe a décidé d'utiliser PostgreSQL pour les données transactionnelles, que tous les endpoints API doivent exiger une authentification, ou que les déploiements en production nécessitent un passage par staging. Il découvre ces contraintes quand vous rejetez son travail.

---

## Vérification pré-action

Avec Knowledge, le workflow devient :

![Workflow pré-action](./knowledge-preflight-workflow.svg)

Chaque action est informée. Chaque vérification de contrainte est enregistrée. Chaque question de conformité a une réponse structurée.

---

## Intégration MCP

Knowledge expose 9 outils via le Model Context Protocol (MCP), compatibles avec Claude Code, Cursor, et tout client MCP.

### Avant d'agir

| Outil | Usage |
|-------|-------|
| `knowledge_list_invariants` | Obtenir toutes les contraintes bloquantes d'un scope |
| `knowledge_list_rules` | Obtenir toutes les directives actives (mandatory + advisory) |
| `knowledge_check` | Tester une action envisagée contre l'état normatif |
| `knowledge_request_approval` | Demander une approbation humaine pour les actions gatées |
| `knowledge_get_approval_status` | Vérifier si l'approbation a été accordée |

### Après avoir agi

| Outil | Usage |
|-------|-------|
| `knowledge_record_reference` | Enregistrer qu'une contrainte a été suivie ou divergée |
| `knowledge_record` | Capturer une nouvelle décision avec contexte et raisonnement |

### À tout moment

| Outil | Usage |
|-------|-------|
| `knowledge_query` | Rechercher dans le registre par mots-clés, type, scope |
| `knowledge_resolve` | Obtenir l'état normatif complet d'un scope |

---

## Exemple : Workflow d'un agent

```
Agent : Je dois ajouter un nouvel endpoint API pour le traitement des paiements.

1. knowledge_list_invariants(scope="Engineering")
   --> "Tous les endpoints API doivent exiger une authentification"
   --> "Pas de cohérence éventuelle pour les transactions financières"

2. knowledge_check(scope="Engineering", action="Ajouter un endpoint REST pour le traitement des paiements")
   --> Aucun conflit. Procéder.

3. L'agent écrit l'endpoint avec middleware d'authentification et PostgreSQL.

4. knowledge_record_reference(
     entry_id="inv-a1b2c3",
     context_type="pull_request",
     context_ref="PR #142",
     compliance="followed"
   )

5. knowledge_record(
     scope="Engineering",
     decision="Ajout de l'endpoint /api/payments en REST avec bearer auth",
     context="L'équipe paiement a demandé une API d'initiation de paiement",
     reasoning="Convention REST existante suivie selon les rules Engineering"
   )
```

L'agent a agi avec le contexte complet. La trace de conformité est automatique.

---

## Comment les contraintes s'appliquent

### Invariants — Arrêts stricts
Contraintes absolues qui bloquent les actions en violation. Si l'action envisagée par un agent entre en conflit avec un invariant, la vérification de conformité retourne un conflit et l'agent s'arrête.

### Rules — Directives actives
Directives qui orientent le comportement. Les rules mandatory doivent être suivies ; les rules advisory doivent être considérées. Les agents reçoivent les deux et peuvent expliquer quelles rules ont influencé leurs décisions.

### Portes d'approbation
Certains invariants nécessitent une approbation humaine avant de procéder. L'agent demande l'approbation, Knowledge notifie les personnes concernées via webhook signé ECDSA (Slack, Teams, ou tout système externe), et l'agent est notifié automatiquement quand la décision est prise. L'échange complet est enregistré.

---

## Trace d'audit

Chaque interaction d'un agent avec Knowledge génère des données structurées :

| Événement | Ce qui est enregistré |
|-----------|----------------------|
| Requête de contraintes | Scope, horodatage, entrées retournées |
| Vérification de conformité | Action, conflits, résultat |
| Demande d'approbation | Entrée, justification, statut |
| Référence | Entrée citée, contexte (PR, commit, deploy), statut de conformité |
| Décision enregistrée | Décision complète avec contexte et raisonnement |

Quand un auditeur demande « quelles contraintes gouvernaient ce code généré par IA ? », la réponse est une requête en base de données.

---

## Mise en place

### 1. Configurer MCP

Ajoutez dans votre `.mcp.json` :

```json
{
  "mcpServers": {
    "knowledge": {
      "command": "python",
      "args": ["-m", "src.knowledge-mcp.server"],
      "env": {
        "KNOWLEDGE_API_URL": "http://localhost:8090",
        "KNOWLEDGE_API_KEY": "kn_..."
      }
    }
  }
}
```

> Pour Asplenz hébergé, remplacez `KNOWLEDGE_API_URL` par l'URL de votre instance (ex : `https://api.asplenz.com`).

### 2. Lancez votre agent

Les outils MCP sont automatiquement disponibles. Asplenz fournit des templates de system prompts pour que les agents les utilisent correctement dès le départ.

### 3. Surveillez dans le dashboard

Chaque requête, vérification, approbation et référence apparaît dans la timeline d'événements. Reviewez le comportement des agents en temps réel ou auditez a posteriori.

---

## Agents compatibles

Knowledge fonctionne avec tout client compatible MCP :

- **Claude Code** — support MCP complet, workflow recommandé
- **Cursor** — intégration MCP pour les agents en IDE
- **Agents custom** — tout client implémentant le protocole MCP

La même API utilisée par les agents est disponible en REST pour les intégrations custom, les pipelines CI et les scripts.

---

[Guide MCP →](/docs/integrations/claude-mcp) · [Référence API →](/docs/integrations/api-reference) · [Commencer →](/docs/getting-started)
