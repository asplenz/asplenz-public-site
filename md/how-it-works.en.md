---
title: How Knowledge works
description: A governed policy layer callable via REST. Callers send the context they have. Knowledge determines whether the policy can resolve the decision, and if not, what context is still required.
locale: en
kicker: The mental model
---

Knowledge is a governed policy layer. Callers send the context they have, and Knowledge answers two questions:

> Given what I know, can the policy determine the outcome?
>
> If not, what does it need to know next?

**The caller doesn't need to know the policy's dependency tree. Knowledge does.**

## The three boxes

```pipeline
Callers | Applications, workflows, forms, AI agents | Collect context, orchestrate
Knowledge | Policies, rules, precedence, overrides | Resolve, govern, explain
Systems of record | CRM, OMS, core systems, operational APIs | Store, execute
```

Knowledge does not own your customer data. It does not orchestrate your workflow. It does not execute the business action.

## The core resolution contract

Most integrations start with `/resolve`. Callers POST an intent and the context they currently have. Each field in `context` is a `Fact` carrying the raw value and its provenance (`source` is required; `verification_status` and `confidence` are optional).

```
POST /knowledge/v1/resolve
{
  "action_type": "sp_offer_eligibility",
  "context": {
    "asset_class": { "value": "structured_product", "source": "caller" },
    "product.complexity": { "value": "highly_complex", "source": "product_master" }
  }
}
```

**Knowledge responds in one of two states: complete or incomplete.**

If the operation is incomplete, the response identifies the context still required for the applicable policies to resolve. Each entry carries the field, the reason it is needed, its schema type, and any constraints the caller can use to build a follow-up query:

```
{
  "operation_status": "incomplete",
  "required_context": [
    { "field": "client.classification",
      "reason": "required by rul-sp-elig-highly-complex-retail",
      "type": "enum",
      "allowed_values": ["retail", "professional", "accredited"] }
  ]
}
```

If the operation is complete, the response returns the applicable business verdict, the rules that determined it, and the reference to the consultation:

```
{
  "operation_status": "complete",
  "verdict": "blocked",
  "cited_rules": ["rul-sp-elig-highly-complex-retail-block"],
  "dominating_rule_id": "rul-sp-elig-highly-complex-retail-block",
  "consultation_id": "cns-abc123",
  "normative_hash": "sha256:..."
}
```

`verdict` is the business outcome. Depending on the applicable rules it may be `allowed`, `blocked`, `approval_required`, `observe`, or other values defined by the policy. Whether the decision needs human authorization is a business outcome, not a separate response shape.

## Progressive resolution in practice

As context becomes more specific, irrelevant policy branches fall away and Knowledge identifies only the context still capable of affecting the outcome.

**Call 1.** The caller sends what it has:

```
context: {
  "product.complexity": { value: "highly_complex", source: "product_master" }
}
```

Knowledge responds:

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.classification",
      reason: "required by rul-sp-elig-highly-complex",
      type: "enum",
      allowed_values: ["retail", "professional", "accredited"] }
  ] }
```

**Call 2.** The caller adds classification.

```
context: {
  ...,
  "client.classification": { value: "professional", source: "CRM" }
}
```

Knowledge responds:

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.knowledge_experience",
      reason: "required by rul-sp-elig-complex-professional-ke",
      type: "enum",
      allowed_values: ["insufficient", "sufficient"] }
  ] }
```

**Call 3.** The caller adds K&E level.

```
context: {
  ...,
  "client.knowledge_experience": { value: "insufficient", source: "client_dossier" }
}
```

Knowledge responds:

```
{ operation_status: "complete",
  verdict: "blocked",
  cited_rules: ["rul-sp-elig-complex-professional-ke"],
  consultation_id: "cns-..." }
```

## Required context is not necessarily another question

If Knowledge identifies `client.classification` as still required, the caller decides how to obtain it.

| Where the context can come from |
|---|
| Already available in the customer record or CRM |
| Computed elsewhere in the caller's own systems |
| Returned by a verification or screening provider |
| Extracted by an AI agent from an existing document or conversation |
| Genuinely unknown - ask the user |

**Knowledge determines what the policy needs. The caller determines how to get it.**

## What "governed" means

| Aspect | Meaning |
|---|---|
| **Versioned policy state** | Verdict-affecting changes create immutable normative state, so a decision remains tied to the policy version used at evaluation time |
| **Decision trace** | Each consultation records the context, applicable rules, outcome and normative state behind the evaluation |
| **Approvals and overrides** | Human authorization and exceptions are explicit governed objects rather than hidden workflow branches |
| **Governed authorship** | Authorized policy owners can manage rules independently from consuming applications, with changes governed and versioned |

Historical decisions remain tied to the normative policy state that produced them, enabling deterministic replay and audit.

## What Knowledge is not

| Not this | Why |
|---|---|
| **Not a workflow engine** | Knowledge determines the policy outcome; your workflow or agent determines how to carry the process forward. They coexist |
| **Not a KYC vendor** | Knowledge does not verify identity or run PEP screening. It consumes the vendor's result and applies the composite decision (Verify result + product eligibility + jurisdiction + commercial policy + exceptions) |
| **Not a RAG on your policy documents** | RAG retrieves relevant text. Knowledge produces a deterministic verdict with cited rules and a reproducible decision trace. See the [AI agents page](/ai-agents) for the full contrast |
| **Not a rip-and-replace** | Knowledge inserts alongside your existing stack in one of several patterns. See [how it fits your stack](/stack) |

## The lifecycle of a decision

```lifecycle
step: Caller assembles the context currently available
step: POST /resolve with action_type + context
step: Knowledge classifies applicable rules against the context
branch-left-label: Incomplete
branch-left-1: required_context returned
branch-left-2: Caller retrieves, derives or asks for the missing context
branch-left-loop: Loop back to /resolve
branch-right-label: Complete
branch-right-1: verdict + cited_rules + consultation_id
branch-right-2: Caller acts on the verdict (execute · refuse · escalate · request approval · continue)
end: Consultation preserved for audit and replay
```

## Three ideas to take away

**Knowledge determines what the policy requires. Your systems determine how to obtain the context and execute the outcome.**

**The caller doesn't need to know the policy's dependency tree. Knowledge does.**

**Completeness is cross-cutting. The outcome belongs to the operation.**

## Related

| Read next | Why |
|---|---|
| [AI agents](/ai-agents) | How an agent uses `/resolve` as a tool |
| [Works with your stack](/stack) | The five insertion patterns |
| [Design partner](/pilot) | The founding-partner engagement: three slots on one production-relevant decision |
