---
title: For AI product teams
description: Give your AI agents a governed, deterministic policy decision before they act. Ship faster without giving the LLM final authority over regulated actions.
locale: en
kicker: Solutions - For AI product teams
---

You are shipping an AI agent that takes real actions in a regulated environment. The reviews block on the same question every time :

> *How do we know the LLM will not decide something the compliance team disagrees with ?*

The traditional answer is *"we will prompt-engineer the policy into the system prompt"*. That answer fails the moment the compliance team amends the policy, or a regulator asks *"show me the exact rule that authorized this refund"*, or a user finds an adversarial prompt that shifts the model's interpretation of the rules.

Knowledge lets you keep the agent flexible where it should be flexible (understanding, gathering, planning) and outside the model where the model should never be (final policy determination).

## The pattern

```
Your agent
  |  understands the user's intent
  |  gathers facts (CRM, vendor, docs)
  |  investigates
  v
Knowledge   (deterministic policy layer, outside the model)
  |  applicable rules, precedence, verdict
  v
Governed tool wrapper
  |  verifies the signed decision matches the exact call
  v
Business API
```

Two lines of code make the wrapper work :

```python
@governed_tool(action="refund.execute", resource="tx", bind=["amount"])
def refund_customer(tx: str, amount: int):
    return refund_api_legacy(tx, amount)
```

The agent calls `refund_customer(tx="TX-456", amount=40)` like any other Python function. The wrapper consults Knowledge, verifies the signed envelope, checks the bindings match, executes the underlying call. On refusal it raises a typed error the agent can log and communicate to the user.

## What this unblocks in your review process

**Compliance sign-off.** Instead of *"we hope the prompt is right"*, you show a rule file with structured `{scope, condition, severity}` triples. The compliance team edits it directly. The engineering team writes zero code when a rule changes.

**Regulator questions.** Every consultation writes a Consultation record with the exact rule versions, precedence trace, and cited overrides at decision time. *"Show me why this refund was authorized on 2026-03-15"* is a single API call.

**Adversarial robustness.** The model does not interpret policy. If a user prompt shifts the model's behavior, the model can propose an action, but the tool wrapper still refuses without a valid signed decision. The attack surface is the API key + IAM, not the prompt.

**Deployment decoupling.** Compliance adds a new required field (`beneficial_owner_verified`). Your agent auto-discovers it via `required_context`, fetches it through your existing field-fetcher registry, re-consults. No agent redeployment.

## Progressive context - a first-class part of the agentic loop

Not a form optimisation. When the agent has partial context, `/resolve` returns the fields still needed with schema and allowed_values. The agent decides how to acquire each (CRM lookup, vendor call, LLM extraction, user question), re-consults, iterates. See [Progressive context](/product/progressive-context).

The dependency direction inverts : your agent does not need to know the policy schema up front. It probes with what it has, Knowledge tells it what to acquire next.

## Integration matrix

| Your stack | Integration |
|---|---|
| MCP (Claude Desktop, Cursor, IDE plugins) | Asplenz MCP proxy in front of your existing MCP server. Zero code change. |
| Python (LangChain, LlamaIndex, custom) | `@governed_tool` decorator on tool functions. |
| Node.js / TypeScript backends | REST call to `/check` or `/resolve` + custom PEP. TypeScript SDK on roadmap Q4-2026. |
| Any language | REST call + JWKS verification (any JWS library). |

## What Knowledge does NOT do

- **Prompt injection defense** : that is your model provider's job.
- **RAG on your policy documents** : Knowledge produces deterministic verdicts with cited rules, not retrieved text.
- **Guarantee your agent cannot be bypassed** : if your network / IAM allows the agent to reach a business API directly, no signed verdict helps. Enforcement lives at the tool boundary, which you architect.

Explicit trust model at [/product/enforcement](/product/enforcement).

## Getting started

1. Read [Enforcement](/product/enforcement) for the model.
2. Read the [governed-tool quickstart](/docs/quickstart-governed-tool) - 5 minutes hands-on.
3. Or the [MCP proxy quickstart](/docs/quickstart-mcp-proxy) if your stack is MCP-based.
4. [Talk to us](/contact) about a design-partner engagement.

## Related

| Read next | Why |
|---|---|
| [Enforcement](/product/enforcement) | The signed envelope + PEP model |
| [Progressive context](/product/progressive-context) | The `required_context` loop and deployment decoupling |
| [Integrations](/product/integrations) | Compatibility matrix, MCP, SDK, REST |
