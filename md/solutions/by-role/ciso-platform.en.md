---
title: Give AI agents autonomy without giving the model authority
description: Knowledge separates what an agent decides to do from what it is authorized to do. Governed actions can require independent policy authorization at the tool boundary, with an audit trail that records exactly what authorized each execution.
locale: en
kicker: Solutions - For CISO and Platform Teams
---

Your organization is deploying AI agents that will investigate cases, gather evidence and take real business actions. Your job is to enable that without letting the model become the authority on what is allowed.

Before agents, an application traversed known code paths, called known APIs, under known permissions. Every path could be reasoned about statically. With a decision-making agent, the action taken emerges from the model's reasoning at runtime. The path is dynamic.

The question you need to answer :

> *How do I give an AI agent autonomy without giving the model authority ?*

Knowledge separates the two.

**The model proposes. Policy authorizes. Your architecture enforces.**

## Why classic controls are not enough on their own

You already have IAM, RBAC, API gateways, service accounts, OAuth. Those controls answer *who can call*.

They do not answer *whether this specific business action should happen*, given the current policy state, the current context, and the identity of the human on whose behalf the agent is acting.

Consider a support agent tool :

| Layer | What it decides |
|---|---|
| **IAM / RBAC** | The service account for the support agent CAN call the refund API. |
| **API gateway** | The request is well-formed and rate-limited. |
| **Business policy** | Refund of €40 on TX-456, for a Gold-tier customer, delayed-shipment reason, under current refund policy v12, acting for hum-alice - **is this specific action authorized ?** |

IAM knows who. Policy knows whether. Knowledge is that policy layer, sitting alongside the identity and network controls you already have.

## Separate intention from authority

```
Agent
  |  understands, investigates, proposes
  ↕
Knowledge
  |  applies policy, resolves precedence
  |  determines: allow / approval required / block
  ↓
Enforcement point
  |  verifies authorization matches the exact proposed action
  ↓
Business API
```

The agent may propose. Knowledge determines authority. The enforcement point verifies both, at the tool boundary, before the underlying action can execute.

## Make policy authorization enforceable

A policy decision on its own is advisory. For governed actions, Knowledge can issue authorization evidence bound to the exact operation the agent proposes.

A verdict authorizing :

```
refund
transaction = TX-456
amount = €40
actor = SupportAgent-17
```

cannot be reused to execute :

```
amount = €4,000
transaction = TX-999
a different agent principal
an expired action
```

The enforcement point (tool wrapper, MCP interceptor, custom code) verifies the authorization and the operation match before the business API is called. On any mismatch, the underlying action does not run.

Full technical model at [Enforcement](/product/enforcement).

## Give every agent team the same governance primitive

Platform teams get a second problem when multiple teams start shipping agents. Without a standard, each team builds its own control layer :

```
Agent A         Agent B          Agent C
policy in       policy in a      policy in
prompts         JSON config      Python code

custom          different        different
approval flow   audit format     rate limits

custom logs     custom logs      custom logs
```

Platform gets to review a different governance model on every project. With Knowledge as the standard primitive :

```
              Knowledge
                 ↓
       common decision interface
       common authorization evidence
       common enforcement pattern
       common audit semantics

Agent A ─┐
Agent B ─┼→ same governance surface
Agent C ─┘
```

Not every rule has to be centralized. But every rule-governed decision follows the same governance pattern. Reviews, audits and incident response become work you do once, not per team.

## Reconstruct authorization, not just activity

Classic logs answer *what happened* :

```
POST /refund/execute
200 OK
service = agent-service
14:32:18
```

Knowledge answers *what authorized it* :

```
Agent          : SupportAgent-17
Acting for     : hum-alice (authenticated: false)
Action         : refund TX-456 €40

Policy         : Refund Policy v12
Winning rule   : R-771 v7
Cited rules    : R-182 v3, R-771 v7
Human override : None

Authorization  : signed, bound, timestamped
Decided at     : 2026-03-15T09:12:00Z
Expires at     : 2026-03-15T09:13:00Z
```

Not derived from logs. The exact policy state and authorization evidence, frozen at decision time. When the audit is a policy question ("who authorized this action, under what rules, at what time"), the record is deterministic.

Full audit story at [Auditability](/product/auditability).

## Clear security boundaries. No magic claims.

Being explicit about limits is part of the security contract, not a caveat.

| Boundary | What Knowledge does not guarantee |
|---|---|
| **API bypass** | Knowledge cannot protect an API the agent can reach around the enforcement point. Your network and IAM decide whether that path exists. |
| **Delegation** | Knowledge does not automatically prove that the human identity claimed by an agent actually delegated authority. The `on_behalf_of` claim is authenticated only when a delegation token or identity binding backs it. |
| **Fact provenance** | Signing a policy decision does not prove every input fact was truthful. Facts fed to Knowledge are hashed for audit but not authenticated per field. Fact provenance is a separate control. |
| **Replay** | Exactly-once semantics require replay protection at the enforcement point. Knowledge sets an expiry ; the spent-verdicts store is your responsibility to enable for exactly-once operations. |

Complete threat model at [Enforcement](/product/enforcement) and [Security](/security).

## Deploy inside your security model

| Layer | Details |
|---|---|
| **Deployment shapes** | SaaS (Asplenz-hosted, fastest to start), private cloud / VPC (in your account, you control network placement and residency), on-premise (no external runtime dependency beyond Postgres and your LLM provider). |
| **Data residency** | Configurable per deployment shape. |
| **Security certifications** | SOC 2 and ISO 27001 program begins with the design-partner cohort. Today's security controls are documented at [/security](/security). We do not claim what we do not have. |
| **Threat model** | Trust boundaries, incident response and deployment guidance for network isolation of business APIs are documented and reviewable. |

Detailed keys inventory, rotation stories and network isolation guidance at [Security](/security).

## Evaluate one governed agent action

Start with one action you are not comfortable letting an agent execute on model judgment alone. Wrap it. Verify the authorization behavior in shadow mode. Cut over to enforcement when the audit trail meets your bar.

**[Security](/security)** &nbsp; · &nbsp; **[Talk to us](/contact) for a technical evaluation**

## Related

| Read next | Why |
|---|---|
| [Product](/product) | The decision loop for rule-governed AI agents |
| [Enforcement](/product/enforcement) | Cryptographic model, adoption paths, complete trust boundaries |
| [Auditability](/product/auditability) | Consultation freeze, replay, tamper-evidence |
| [Security](/security) | Enterprise controls, keys inventory, deployment topologies |
