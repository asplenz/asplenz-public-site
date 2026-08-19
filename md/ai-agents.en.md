---
title: "Your AI agent can retrieve information and call tools. But should it interpret your business policy before taking an action ?"
description: Knowledge exposes /resolve as a tool the agent calls whenever it needs a deterministic verdict - cited rules, replayable audit, no policy hallucination.
locale: en
kicker: For AI teams
ctaLabel: See a working reference integration
ctaHref: /wealth
---

The moment an agent moves from answering questions to taking actions - approving a refund, admitting a client, binding a policy, executing a trade - Legal and Compliance freeze the production rollout. A probabilistic policy interpreter is not signable. Every action needs a verdict that is deterministic, cited, and replayable years later.

Knowledge gives your agent that verdict, as a tool it calls.

## The pattern

```agent-toolbelt
input: Customer intent (chat, voice, email)
agent: Agent framework (Claude, GPT, LangGraph, MCP, custom)
tool: CRM lookup | Get customer facts
tool: Order / policy lookup | Get object facts
tool: KYC vendor result | Get verification state
tool*: Knowledge /resolve | Policy authority
tool: Execute / Slack / Email |
```

The agent stays probabilistic in conversation and context extraction. Knowledge makes the **decision boundary** deterministic - verdict, cited rules, replayable state.

## Progressive collection lets the agent stop asking "just in case"

When the agent doesn't yet have all the context Knowledge needs, `/resolve` returns what's missing.

```
Agent calls /resolve with partial context
      { action_type: "sp_offer_eligibility",
        context: { asset_class: "structured_product" } }

Knowledge responds
      { operation_status: "incomplete",
        required_context: ["client.classification",
                           "structured_products.product.complexity"] }

Agent knows exactly what to fetch next
      via CRM tool, product-master tool, or a follow-up
      question to the user

Agent re-calls /resolve with the enriched context
      → verdict + cited_rules
```

The agent asks the user only what THIS decision needs, not everything a prompt template pre-decided.

## RAG vs Knowledge

| | RAG | Knowledge |
|---|---|---|
| Question | "What does the policy say ?" | "What is the policy decision for this explicit context ?" |
| Output | Relevant text + LLM interpretation | Deterministic verdict + cited rules |
| Variance | LLM re-interprets on every call | Same context = same output |
| Replayable | No - interpretation drifts | Yes - snapshot key reconstructs exact state |
| Compliance-signable | No | Yes |
| Fits inside an agent | Yes, as a retrieval tool | Yes, as a decision tool |

**We do not claim to make your whole agent chain deterministic.** The LLM still interprets the user, still extracts context, still chooses which tool to call. Knowledge holds one specific frontier : the moment of "does policy allow this action". At that frontier the answer is deterministic, cited, replayable. Everything upstream can stay LLM-driven.

## Three audiences

| Who | What Knowledge unblocks |
|---|---|
| **Head of AI Product** | Your agent works in prototype ; Legal blocks the move to production. Adding Knowledge as one tool unlocks the autonomous action rate - the KPI your programme is measured on |
| **VP Engineering / CTO** | Policy encoded in prompts and RAG corpuses is untestable, un-versionable, silently drifting. Knowledge exposes policy as a proper service with REST API, versioned RuleVersion, replayable Consultations, deterministic evaluation |
| **Chief Compliance Officer** | Not the buyer, but the stakeholder whose blocker matters. Consultation + normative_hash + RuleVersion pinning gives you the audit reconstruction your regulator requires. The sign-off you've been unable to give becomes possible |

## Land and expand - AI is the trigger, Knowledge is not an AI product

Prospects often enter Knowledge to secure one agent for one decision. Six months in, the same policy layer is called by the web form, the BPM, the mobile app and the back-office - because the policy source is the same.

```fanout
source: Knowledge | one policy
caller: Agent Support
caller: Web portal
caller: Mobile app
caller: BPM (batch claims)
caller: Back-office ops queue
```

Knowledge stops being "guardrail for the agent" and becomes the tenant's shared policy layer. AI was the buying trigger. Knowledge is not an AI product - it works the same whether the caller is Claude or a Java service.

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The API contract, the audit surface, the mental model |
| [Wealth](/wealth) | Reference integration script showing an RM copilot calling Knowledge for 4 canonical structured-product decisions |
| [Pilot](/pilot) | Start with one agent, one decision, shadow mode for 4-8 weeks. Measure decision agreement against your current logic |
