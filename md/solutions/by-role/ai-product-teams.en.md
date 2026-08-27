---
title: Your agent can investigate. Policy should decide what it's allowed to conclude.
description: Ship an AI agent that investigates cases and makes business decisions governed by enterprise rules, without letting the model become the authority on what is allowed.
locale: en
kicker: Solutions - For AI product teams
---

You are shipping an AI agent that investigates cases and helps determine what the business should do next. It is good at understanding, gathering evidence, planning. That is why you are shipping it.

But once the agent participates in a decision governed by enterprise rules, one review question keeps blocking the rollout :

> *We don't want the LLM to become the authority on what is allowed. Where does the policy live ?*

Teams often start by putting policy into prompts, retrieval, agent code or tool logic. That can work for prototypes. Once the agent itself participates in a regulated business decision, policy needs a clear authority outside the model.

Knowledge is that authority. The model investigates and reasons ; a deterministic policy layer decides what the agent is allowed to conclude.

## Where this applies, and where it doesn't

**If an existing business service already owns the decision end-to-end, keep using it.** A `refund_request()` API that already contains the rules, decides, and executes does not need Knowledge in front of it.

**Knowledge is for the decision boundary the agent introduces.** When the agent investigates, gathers evidence and participates in a business decision that did not previously exist as a clean deterministic capability, that is the new surface. Policy for that surface needs to live outside the model.

## The pattern

```
Your agent
  |  understands the user's intent
  |  gathers facts (CRM, vendor, docs)
  |  investigates
  ↕
Knowledge   (deterministic policy layer, outside the model)
  |  applicable rules
  |  required_context if the case is not yet decidable
  |  precedence, overrides, verdict
  ↓
Governed tool wrapper
  |  verifies the signed decision matches the exact call
  ↓
Business API
```

The double arrow between agent and Knowledge is important. The agent does not send a full context up front and wait for a verdict. It sends what it has ; Knowledge tells it which fields the applicable rules still need ; the agent acquires them and re-consults, until a decision is reached.

## What this unblocks

| Outcome | What that means for your project |
|---|---|
| **Ship autonomy Compliance can approve** | The compliance team owns and edits a rule file with structured `{scope, condition, severity}` triples. Approval no longer depends on trusting the prompt. |
| **Change policy without redesigning the agent** | Policy changes can be governed independently of agent releases when they use context the agent can already acquire. New required field ? `required_context` tells the agent what to fetch. No agent redeploy. |
| **Know why every governed decision was made** | Every consultation writes a Consultation record that pins the exact rule versions, precedence trace and overrides in force at decision time. You can reconstruct the rules behind the decision as they existed at the time. |
| **Prevent model behavior from becoming policy authority** | The model can propose an action. A manipulated model cannot turn its own interpretation of policy into authority : the governed tool still requires a valid policy decision bound to the proposed action before it runs. |

## Progressive context - a first-class part of the agentic loop

This one property is what makes Knowledge more than a rule engine called at the end of the pipeline. It makes Knowledge part of the agentic loop itself.

The agent does not need to know the policy schema up front. It probes with what it has ; Knowledge tells it what the applicable rules still need ; the agent acquires it (CRM lookup, vendor call, LLM extraction from the case file, user question) and re-consults.

```
Agent investigates
       ↕
Knowledge determines
what policy needs next
       ↓
policy determination
       ↓
governed execution
```

That inverts the dependency direction. You can build a generic agent that adapts as policies evolve, without shipping schema knowledge into the agent code.

More at [Progressive context](/product/progressive-context).

## From policy decision to enforced action

When the agent acts, signed authorization binds the execution to the exact policy decision that permitted it. Two lines of code make the wrapper work :

```python
@governed_tool(action="refund.execute", resource="tx", bind=["amount"])
def refund_customer(tx: str, amount: int):
    return refund_api_legacy(tx, amount)
```

The agent calls `refund_customer(tx="TX-456", amount=40)` like any other Python function. The wrapper consults Knowledge, verifies the signed envelope, checks the bindings match, executes the underlying call. On refusal it raises a typed error the agent can log and communicate.

Full model at [Enforcement](/product/enforcement).

## Works with the stack you already have

MCP server tools, Python SDK, REST API, custom PEP. Bring your own agent framework (LangGraph, MCP client, custom orchestrator).

See [Integrations](/product/integrations) for the details on each path.

## What Knowledge is not

- **Not a replacement for existing decision services.** If an existing deterministic service already owns the complete decision, keep it there. Knowledge is for the new decision boundaries created when agents begin doing work that previously required human policy judgment.
- **Not prompt injection defense.** That is your model provider's job. Knowledge complements it : a manipulated model may propose an action, but the governed tool still refuses without a valid policy decision.
- **Not RAG on your policy documents.** Knowledge produces deterministic verdicts from formalized rules, not retrieved text.

## Start with one governed decision

Start with one decision your agent currently makes - or one you are not yet comfortable letting it make. Wrap it. Run it in shadow mode against your current process. Cut over to enforcement when parity is proven.

**[Quickstart : governed tool in Python](/docs/quickstart-governed-tool)** &nbsp; · &nbsp; **[Quickstart : Knowledge as MCP server](/docs/quickstart-knowledge-mcp)** &nbsp; · &nbsp; **[Talk to us](/contact)**

## Related

| Read next | Why |
|---|---|
| [Product](/product) | The decision loop for rule-governed AI agents |
| [Progressive context](/product/progressive-context) | The `required_context` loop and dependency inversion |
| [Enforcement](/product/enforcement) | The signed envelope and PEP model |
| [Integrations](/product/integrations) | MCP, Python SDK, REST, custom PEP paths |
