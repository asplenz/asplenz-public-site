---
title: Product
description: AI agents can investigate, gather information and propose an action. When the decision is governed by business or compliance rules, those rules should not have to live inside the model. Knowledge gives them an independent policy authority the agent consults, and issues authorization the tool boundary can enforce.
locale: en
kicker: Product
---

AI agents can investigate a case, gather information and propose an action. But when the decision is governed by business or compliance rules, those rules should not have to live inside the model.

Knowledge gives those decisions an independent policy authority. The agent gathers the facts. Knowledge evaluates the applicable rules, determines when more context is needed, returns a deterministic decision, and can issue authorization that the execution boundary can enforce.

## How Knowledge works

```lifecycle
step: Agent receives a task
step: Gathers available context
step: Knowledge evaluates policy
branch-left-label: Needs more context
branch-left-1: Knowledge returns required fields with schema
branch-left-2: Agent retrieves from CRM, vendor, LLM extraction or user
branch-left-loop: Loop back to Knowledge
branch-right-label: Decision
branch-right-1: allowed  /  approval required  /  blocked
branch-right-2: Signed authorization envelope
branch-right-3: Tool boundary verifies signature and bindings
end: Action executes
```

The loop is the product. Each step is designed so the agent does what it is good at (investigating, gathering, orchestrating) while the rules stay in a governed layer the compliance function can own.

## What each part of the loop does

Four capabilities materialize the loop. Each one has its own page ; this section is the map.

**Progressive context** - the answer to *needs more context ?* Knowledge tells the caller which fields the applicable rules still require, with schema and allowed values. The caller acquires them (from CRM, vendor, LLM extraction, or the user) and re-consults, until a verdict can be reached. Policies can change without changing every caller. See [Progressive context](/product/progressive-context).

**The verdict itself** - the deterministic outcome (`allowed`, `approval_required`, `blocked`). Produced from the encoded policy, not from LLM interpretation. Every fired rule is cited by the exact `RuleVersion` in force at decision time. See [Verdicts and decisions](/docs/concepts/verdicts-and-decisions) for the severity ladder and precedence tie-breakers.

**Enforcement** - Knowledge signs every verdict as a JWS envelope binding the exact operation authorized. A Policy Enforcement Point (SDK decorator, MCP proxy, custom code) verifies the signature and checks bindings before the tool executes. An agent that hallucinates or a bug that skips the check cannot execute the underlying action, because the boundary refuses without a matching signed verdict. See [Enforcement](/product/enforcement).

**Auditability** - every consultation writes a Consultation record freezing the exact rule versions cited, the precedence trace, the overrides applied, and the normative hash. A regulator asking *"show me why this decision was made on 2026-03-15"* is one API call. See [Auditability](/product/auditability).

**Integrations** - the surfaces through which agents, tools and existing systems connect to Knowledge : MCP proxy, Python SDK (`knowledge-runtime`), REST API, JWKS endpoint per tenant, webhooks, SSO / SCIM. See [Integrations](/product/integrations).

## Where Knowledge fits

**Knowledge adds a governed policy layer for rule-driven decisions that AI agents need to make.** It works with the agent frameworks, enterprise systems and decision infrastructure you already use.

| Works with | How Knowledge fits |
|---|---|
| **Your agent stack** | Use LangGraph, MCP, a custom orchestrator or your existing agent platform. Knowledge provides the independent policy authority for decisions governed by business rules. |
| **Your policy formalization process** | Domain experts and implementation teams can bring formalized rules into Knowledge through CSV, Excel, DMN or API, then govern, test and evolve them independently of the agent. |
| **Your existing decision systems** | Keep FICO, existing rules engines and specialized platforms where they already work. Knowledge gives you a path for rule-governed decisions that are still handled through procedures, spreadsheets and human expertise. |

## Bringing Knowledge into your stack

Three natural entry points depending on who is doing the work.

| If you are | Start here |
|---|---|
| **Building agents for enterprise clients** | [Build rule-governed agents](/solutions/build-rule-governed-agents) - the integrator angle : what you stop reinventing per engagement, the argument you add to your own pitch, the platform effect across your book of business. |
| **The enterprise team deploying an agent** | [Design partner](/pilot) - co-delivery engagement : one production-relevant decision, run in shadow mode against your existing process, converted to a founding-customer contract if the numbers land. |
| **Looking for the technical surface** | [Docs](/docs) - quickstarts, API reference, MCP proxy setup, security and compliance deep dives. |

## Related

| Read next | Why |
|---|---|
| [Enforcement](/product/enforcement) | The signed envelope and PEP model, four-actor trust chain, adoption paths |
| [Progressive context](/product/progressive-context) | The `/resolve` loop, dependency inversion, why policy changes ship without touching the caller |
| [Auditability](/product/auditability) | Consultation, RuleVersion, precedence trace, cold-storage replay |
| [Integrations](/product/integrations) | MCP proxy, Python SDK, REST, JWKS, deployment shapes |
| [Docs](/docs) | Implementation-level reference |
| [Solutions](/solutions/build-rule-governed-agents) | Why this matters for someone in your role |
