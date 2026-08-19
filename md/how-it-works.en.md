---
title: How Knowledge works
description: A governed policy layer callable via REST. Your applications, workflows and AI agents send a context. Knowledge returns a deterministic verdict with cited rules and a replayable audit trail.
locale: en
kicker: The mental model
---

Knowledge is a governed policy layer. Callers send a context ; Knowledge evaluates the applicable rules against that context and returns a deterministic verdict.

## The three boxes

```pipeline
Your callers | Application | Workflow | BPM | AI agent
Knowledge | Policy layer | Rules, versioning | Audit trail
Your system of record | Execution | Persistence
```

Knowledge does not own data. It does not orchestrate flows. It does not execute actions. It answers one question, deterministically :

> Given this context, what does the policy say ?

## The contract - one endpoint

Callers POST a context to `/resolve` :

```
POST /knowledge/v1/resolve
{
  "action_type": "sp_offer_eligibility",
  "context": {
    "asset_class": "structured_product",
    "client": {"classification": "retail"},
    "structured_products": {
      "product": {"complexity": "highly_complex"}
    }
  }
}
```

Knowledge responds with one of three shapes.

**Complete decision** - every leaf the applicable rules need is present :

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

**Incomplete** - some rule needs a leaf the caller has not yet supplied :

```
{
  "operation_status": "incomplete",
  "required_context": ["client.classification"]
}
```

The caller fetches the missing leaf (from a CRM, a KYC vendor, an LLM extraction, or a follow-up question to the user) and re-calls with the enriched context.

**Approval required** - a rule fires that gates on human authorisation :

```
{
  "verdict": "approval_required",
  "cited_rules": [...],
  "consultation_id": "cns-..."
}
```

## What "governed" means

| Aspect | What it means |
|---|---|
| **Versioning** | Every rule has a `RuleVersion` - an immutable snapshot of its verdict-affecting fields. Consultations pin the exact version used, so replay years later is exact. |
| **Audit** | Every `/resolve` call produces a `Consultation` row with the context, the cited rules, and a `normative_hash` that acts as a snapshot key. |
| **Override workflow** | When a rule requires approval, the approval is a first-class entity with the granting decider, the applies-to scope, and the audit trail. The engine re-consults after the approval, verdict flips deterministically. |
| **Policy authorship in the UI** | Rules live in a registry that compliance officers can edit without engineering - subject to versioning + governance. |

## What Knowledge is not

| Not this | Why |
|---|---|
| **Not a workflow engine** | Knowledge answers "what does the policy say" ; your BPM or agent answers "what should happen next". They coexist. |
| **Not a KYC vendor** | Knowledge does not verify identity or run PEP screening. It consumes the vendor's result and applies the composite decision (Verify result + product eligibility + jurisdiction + commercial policy + exceptions). |
| **Not a RAG on your policy documents** | RAG retrieves relevant text. Knowledge produces a deterministic verdict with cited rules and replayable state. See the [AI agents page](/ai-agents) for the full contrast. |
| **Not a rip-and-replace** | Knowledge inserts alongside your existing stack in one of several patterns. See [how it fits your stack](/stack). |

## The lifecycle of a decision

1. Caller assembles context (from a form, an API, a tool call, an LLM extraction).
2. Caller POSTs `/resolve` with `action_type` + `context`.
3. Knowledge evaluates the applicable rules, returns verdict or `required_context`.
4. Caller acts on the verdict (execute, escalate, refuse, ask the user for more).
5. Every call is logged as a `Consultation` with the state snapshot.
6. Years later, a regulator asks about a specific decision - one query reconstructs the exact rule state and cited output.

## Related

| Read next | Why |
|---|---|
| [AI agents](/ai-agents) | How an agent uses `/resolve` as a tool |
| [Works with your stack](/stack) | The five insertion patterns |
| [Pilot](/pilot) | How to start with one decision |
