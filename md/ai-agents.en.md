---
title: "Your AI agent can retrieve information and call tools. But should it interpret your business policy before taking an action?"
description: Knowledge is a governed policy interface an agent calls before acting. It returns either the decision or the context still required to reach one, with the rules that determined the outcome.
locale: en
kicker: For AI teams
ctaLabel: See a working reference integration
ctaHref: /wealth
---

The moment an agent moves from answering questions to taking governed business actions, a new question appears: who determines whether the action is allowed?

Letting the LLM interpret policy from documents or prompts makes that decision difficult to make deterministic, testable and auditable.

**Knowledge gives the agent a governed policy interface it can call before acting.**

## Knowledge isn't an AI decision-maker

Knowledge is a **governed policy service** that AI agents - and conventional software - can call. It is not an AI product. It works the same whether the caller is Claude, GPT, a Java service or a workflow task.

**For agents this matters more than for conventional software.** A conventional application's decision path is defined by code that reviewers can read directly; an agent's decision path is defined by the LLM at runtime, which is precisely where the policy boundary needs to be pinned outside the model. Knowledge externalizes that boundary so the agent can reason freely while the decision stays deterministic, versioned and auditable.

## The pattern

```agent-toolbelt
input: Customer intent (chat, voice, email)
agent: Agent framework (Claude, GPT, LangGraph, MCP, custom)
tool: CRM lookup | Get customer facts
tool: Order / policy lookup | Get object facts
tool: KYC vendor result | Get verification state
tool*: Knowledge /resolve | Governed policy decision
tool: Execute / Slack / Email |
```

## Knowledge gives the agent either the decision, or tells it what it still needs to know

`/resolve` responds in one of two states:

- **Complete** - the agent receives the verdict, the rules that determined it, and a consultation reference for audit.
- **Incomplete** - the agent receives `required_context`: the fields the applicable policies still need. The agent obtains that context and calls `/resolve` again.

**The agent decides how to obtain the context. Knowledge determines what the policy requires.**

The agent may retrieve the missing context from an internal system (CRM, product master, verification vendor), derive it from an existing document or conversation, or ask the user when necessary. Which source it picks is an agent-side choice, not a Knowledge concern.

## A concrete boundary: before executing a refund

A customer-service agent is asked to refund a 2,000 EUR transaction. Before executing, it calls `/resolve`.

```
POST /knowledge/v1/resolve
{
  "action_type": "refund_execute",
  "context": {
    "customer.tier": { value: "standard", source: "CRM" },
    "transaction.amount_eur": { value: 2000, source: "core_banking" },
    "transaction.age_days": { value: 3, source: "core_banking" }
  }
}
```

**Case A - Knowledge returns `approval_required`:**

```
{ operation_status: "complete",
  verdict: "approval_required",
  cited_rules: ["rul-refund-above-threshold"],
  consultation_id: "cns-..." }
```

The agent does **not** execute the refund. It creates an approval request, informs the customer that the case is being reviewed, and hands off to the human decision path.

**Case B - same intent, 40 EUR transaction, Knowledge returns `allowed`:**

```
{ operation_status: "complete",
  verdict: "allowed",
  cited_rules: ["rul-refund-standard"],
  consultation_id: "cns-..." }
```

The agent executes the refund API.

The agent chose how to interpret intent, gather context and communicate. Knowledge determined what the policy required for the action.

## Deterministic where it matters. Probabilistic where it helps.

The LLM can still interpret intent, extract context, choose tools and manage the conversation. Knowledge governs one specific boundary: resolving explicit business policy against explicit context.

**Let the agent reason. Don't make it invent the policy.**

## RAG vs Knowledge

RAG and Knowledge answer different questions. The comparison:

| | RAG | Knowledge |
|---|---|---|
| **Primary purpose** | Retrieve relevant knowledge for model reasoning | Resolve an explicit business policy |
| **Output** | Retrieved context interpreted by a model | Structured policy outcome |
| **Decision semantics** | Determined by the model or application using the retrieved content | Explicitly encoded in governed rules |
| **Determinism** | Model interpretation can vary | Same context + same policy state = same outcome |
| **Audit focus** | What information was retrieved and generated | Which policy state and rules determined the outcome |
| **Agent role** | Knowledge / reasoning tool | Governed decision tool |

Both can coexist in an agent: RAG for retrieval and reasoning support, Knowledge for the decision boundary where the outcome needs to be deterministic and auditable.

## Three audiences

| Who | What Knowledge addresses |
|---|---|
| **Head of AI Product** | Move agents beyond read-only assistance while keeping governed business decisions outside probabilistic model interpretation |
| **VP Engineering / CTO** | Stop relying on prompts and retrieved documents as the executable representation of business policy. Expose governed policy through a versioned decision API instead |
| **Chief Compliance Officer** | A defined decision boundary: explicit policy rules, deterministic evaluation and a trace of the policy state behind each outcome |

## One policy layer can serve more than the agent

You may introduce Knowledge for one agent and one governed decision. The same policy layer can later serve applications, workflows and operational systems that need the same policy capabilities.

```fanout
source: Knowledge | one policy layer
caller: Agent Support
caller: Web portal
caller: Mobile app
caller: BPM (batch claims)
caller: Back-office ops queue
```

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The API contract, the audit surface, the mental model |
| [Wealth](/wealth) | Reference integration script showing an RM copilot calling Knowledge for structured-product decisions |
| [Design partner](/pilot) | Three founding slots, one production-relevant decision, founding-customer pricing |
