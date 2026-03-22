<!-- lang: fr -->

# Agents IA et MCP

Knowledge expose des outils via le Model Context Protocol (MCP). Tout agent compatible MCP peut interroger le registre, vérifier la conformité, enregistrer des décisions et demander des approbations.

---

## Mise en place

### 1. Configurer MCP

Ajoutez dans votre `.mcp.json` :

```json
{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer kn_..."
      }
    }
  }
}
```

### 2. Lancez votre agent

Les outils MCP sont automatiquement disponibles. Asplenz fournit des templates de system prompts pour que les agents les utilisent correctement dès le départ.

### 3. Surveillez dans le dashboard

Chaque requête, vérification, approbation et référence apparaît dans la timeline d'événements. Reviewez le comportement des agents en temps réel ou auditez a posteriori.

---

## Outils MCP disponibles

### Avant d'agir

| Outil | Usage |
|-------|-------|
| `knowledge_list_invariants` | Obtenir toutes les contraintes bloquantes d'un scope |
| `knowledge_list_rules` | Obtenir toutes les directives actives (mandatory + advisory) |
| `knowledge_check` | Tester une action envisagée contre l'état normatif |
| `knowledge_resolve` | Obtenir l'état normatif complet d'un scope/namespace |
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

---

## Comment les contraintes s'appliquent

### Invariants : arrêts stricts

Contraintes absolues qui bloquent les actions en violation. Si l'action envisagée par un agent entre en conflit avec un invariant, `knowledge_check` retourne un conflit et l'agent doit s'arrêter.

### Rules : directives actives

Directives qui orientent le comportement. Les rules mandatory doivent être suivies ; les rules advisory doivent être considérées. Les agents reçoivent les deux et peuvent expliquer quelles rules ont influencé leurs décisions.

### Portes d'approbation

Certains invariants nécessitent une approbation humaine avant de procéder. L'agent appelle `knowledge_request_approval`, Knowledge notifie les personnes concernées via webhook (Slack, Teams, ou tout système externe) avec une signature ECDSA. L'agent peut fournir un `callback_url` pour être notifié automatiquement quand la décision est prise - sans polling.

---

## Exemple : workflow complet

```
Agent : Je dois ajouter un nouvel endpoint API pour le traitement des paiements.

1. knowledge_resolve(scope="Engineering", namespace="payments")
   --> 14 entrées applicables : 2 invariants, 5 decisions, 6 rules, 1 override

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

## Agents compatibles

Knowledge fonctionne avec tout agent compatible MCP : agents de coding, agents finance, agents compliance, agents opérations. La même API est disponible en REST pour les intégrations custom, les pipelines CI et les scripts.

---

## En savoir plus

- [Commencer →](/docs/getting-started)
- [Comment fonctionne Knowledge →](/product/how-it-works)
- [Extraction automatique →](/docs/extraction)
- [Référence API →](/docs/integrations/api-reference)


<!-- lang: en -->

# AI Agents and MCP

Knowledge exposes tools through the Model Context Protocol (MCP). Any MCP-compatible agent can query the registry, check compliance, record decisions, and request approvals.

---

## Setup

### 1. Configure MCP

Add to your `.mcp.json`:

```json
{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer kn_..."
      }
    }
  }
}
```

### 2. Launch your agent

The MCP tools are automatically available. Asplenz provides system prompt templates so agents use them correctly out of the box.

### 3. Monitor in the dashboard

Every query, check, approval, and reference appears in the event timeline. Review agent behavior in real time or audit historically.

---

## Available MCP Tools

### Before acting

| Tool | Purpose |
|------|---------|
| `knowledge_list_invariants` | Get all blocking constraints for a scope |
| `knowledge_list_rules` | Get all active directives (mandatory + advisory) |
| `knowledge_check` | Test an intended action against the normative state |
| `knowledge_resolve` | Get the full normative state for a scope/namespace |
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

---

## How Constraints Apply

### Invariants: Hard Stops

Absolute constraints that block violating actions. If an agent's intended action conflicts with an invariant, `knowledge_check` returns a conflict and the agent must stop.

### Rules: Active Guidance

Directives that shape behavior. Mandatory rules must be followed; advisory rules should be considered. Agents receive both and can explain which rules influenced their decisions.

### Approval Gates

Some invariants require human approval before proceeding. The agent calls `knowledge_request_approval`, Knowledge notifies the right people via webhook (Slack, Teams, or any external system) with an ECDSA signature. The agent can provide a `callback_url` to be notified automatically when the decision is made - no polling needed.

---

## Example: Full Workflow

```
Agent: I need to add a new API endpoint for payment processing.

1. knowledge_resolve(scope="Engineering", namespace="payments")
   --> 14 applicable entries: 2 invariants, 5 decisions, 6 rules, 1 override

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

## Compatible Agents

Knowledge works with any MCP-compatible agent: coding agents, finance agents, compliance agents, operations agents. The same API is available via REST for custom integrations, CI pipelines, and scripts.

---

## Learn More

- [Getting Started →](/docs/getting-started)
- [How Knowledge Works →](/product/how-it-works)
- [Automatic Extraction →](/docs/extraction)
- [API Reference →](/docs/integrations/api-reference)
