---
title: Let your agent investigate. Don't make it the policy authority.
description: When an agent must gather evidence and make a business decision governed by enterprise rules, keep those rules outside the model. Knowledge gives the decision an independent, deterministic policy authority that domain experts can govern.
locale: en
kicker: Solutions - Build rule-governed agents
---

## The enterprise-agent situation

You build agents for enterprise clients. You know how the story goes.

The client wants to automate a team of 15 analysts who process onboarding exceptions, or reconcile broken payments, or triage compliance queries. You start the discovery. You find that the analysts use :

```text
procedure.pdf
+
matrix.xlsx
+
"normalement dans ce cas on fait X"
+
email from Compliance
+
their experience
```

You have to decide where the rules live in the agent you deliver.

> *When your agent project discovers business rules, don't bury them in the agent. Put them in Knowledge.*

## Does Knowledge belong here ?

Not every agent needs Knowledge. Before deciding, ask who takes the business decision.

**Case 1 : an existing service already owns the decision.**

```pipeline
Agent | Calls the existing function
refund_request() | Existing business service
Business system | Owns rules, decision, execution
```

Keep it. Knowledge does not add value on a path an existing deterministic API already owns cleanly.

**Case 2 : the agent must construct the decision.**

```pipeline
Agent | Investigates case, gathers evidence
Knowledge | Policy authority applies rules
Decision | allowed / approval required / blocked
Agent | Acts on the decision
```

The agent is now doing more than choosing a tool. It is gathering context, distinguishing autonomous decisions from human approvals, and needs a place where the rules that govern its action live independently. That is where Knowledge fits.

## The moment Knowledge enters the architecture

The moment Knowledge belongs in your architecture is when the agent, rather than an existing business service, must use business rules to determine what should happen.

You have mapped the process. You have formalized the decision. You have a decision table, a set of if-then clauses, a policy matrix. You are one commit away from writing :

```python
if pep and risk == "HIGH":
    require_approval()
elif client_type == "COMPANY" and jurisdiction in RESTRICTED:
    require_beneficial_owner()
elif ...
```

or dropping it into your agent's prompt, a JSON config, or a workflow engine.

That is the moment. Every path from here creates a rule-shaped hole in what you deliver :

- **Rules buried in agent code** - Compliance cannot govern them independently.
- **Rules in prompts** - the LLM's interpretation drifts, and audit reconstruction becomes prompt archaeology.
- **Rules in a new bespoke config** - you rebuild versioning, approvals, audit trail and enforcement on every engagement.
- **Rules in an existing BRMS** - if the existing engine already owns this decision cleanly, keep it there. Knowledge exists for the decision boundary the agent introduces that did not previously exist as a clean deterministic capability.

Knowledge is the fifth option : a policy authority independent of the agent, that ships with everything you would otherwise rebuild.

## What you stop rebuilding

The problem is not implementing one rule check. It is turning that rule check into a governed enterprise capability.

You start with :

```python
if risk == "HIGH":
    require_approval()
```

Then you discover the client needs :

```text
versioning
ownership
approvals
effective dates
audit
replay
shadow mode
enforcement
```

Every rule-governed agent eventually needs all of it. What you assemble from scratch on your first engagement, Knowledge ships stable :

| Capability | Without Knowledge | With Knowledge |
|---|---|---|
| Rule storage | Ad-hoc DB, config file, JSON | Structured, typed, tenant-scoped |
| Versioning + immutability | You build it | RuleVersion pinned per consultation |
| Approval workflow | Custom UI + Slack integration | First-class Approval entity + webhooks |
| Audit trail | You build the schema and the reader | Consultation record with precedence trace |
| Signed authorization | You don't | JWS ES256 envelope, JWKS-verifiable |
| Progressive context | You hardcode the field list | `/resolve` returns `required_context` |
| Shadow / advisory mode | Custom branching | `require_outcome_allowed=False` on the PEP, Knowledge unchanged |
| Emergency kill switch | Redeploy | Pause via API |

## What this lets you tell your client

Enterprise clients push back when an agent takes actions they cannot govern. You already know the objections :

> *"How do we audit what the agent decided ?"*
>
> *"How do we know Compliance signed off on this rule ?"*
>
> *"What happens when the policy changes ? Do we redeploy the agent ?"*
>
> *"How do we prove to a regulator six months later ?"*

With Knowledge in your architecture, you have a one-line answer :

> **Our agents investigate. Your policies decide. Your compliance team retains authority over the rules.**

Then the proof point when you need it :

> When the agent acts, signed authorization can bind execution to the exact policy decision that permitted it.

The first line sells. The second line proves.

## Standardize the pattern across engagements

You are probably building agents for more than one client. Client A wants a KYC agent. Client B wants a wealth-exception agent. Client C wants a claims triage agent. Client D wants an internal approvals agent.

Without a standard, you rebuild the rule-governed layer on each project. With Knowledge :

```text
              Your architecture

     Client A - KYC agent      ─┐
     Client B - wealth agent   ─┼─── Knowledge pattern
     Client C - claims agent   ─┤    (same integration each time)
     Client D - approvals      ─┘
```

Knowledge becomes your standard architectural pattern for rule-governed agents. Every client engagement starts faster ; your team stops solving the same set of problems from scratch. Beyond governance, that is an economic argument : the rule-governed layer becomes a productized part of your delivery architecture. Faster ramp, better margins, stronger enterprise credibility.

## Where Knowledge fits, and where it doesn't

**Already have a rules engine ? Keep it where it owns the decision.**

Knowledge is useful when the new agent introduces a decision boundary that does not already exist cleanly in your architecture, especially when the agent must progressively gather context, distinguish autonomous decisions from human approvals, and carry policy authorization into tool execution.

| Situation | Where to put the rules |
|---|---|
| Existing deterministic business capability already owns the decision (credit scoring in FICO, fraud detection in an in-house engine, ticketing in ServiceNow) | Keep it. Knowledge does not touch decisions an existing engine owns cleanly. |
| The agent creates a new decision boundary (investigate a case, gather evidence, decide autonomous vs approval vs block) | Knowledge. This is the decision surface that did not exist before agents were part of the architecture. |
| Rules exist in procedures, spreadsheets or the analyst's head | Knowledge, when you are giving those rules to an agent. The agent can only respect them if they are formalized somewhere it can consult. |
| You want to hardcode the rules in the agent because it feels faster | You will be revisiting this decision within six months. See "What you stop rebuilding" above. |

## Start one engagement

The minimum viable integration :

1. **Import your rules** as CSV or Excel via the back-office UI. See [CSV import](/docs/api-reference/check).
2. **Call `/resolve`** from your agent when it needs a decision. Handle `required_context` by fetching the missing fields.
3. **Wrap the business-side tools** with `@governed_tool` so signed verdicts are enforced at the tool boundary. See [knowledge-runtime](/docs/sdk-reference/knowledge-runtime-python).
4. **Run in Shadow Mode** first : Knowledge advises, the human process still decides, you measure parity.
5. **Cut over to enforcement** when parity is proven. See [Migrate from advisory to enforcement](/docs/guides/migrate-from-advisory-to-enforcement).

That is the shape. Everything else is documentation.

## Co-delivery on your first Knowledge engagement

Not a formal partner program. **Partner-assisted delivery.** If you are building a rule-governed agent for a client right now and Knowledge fits, we work alongside your team on the pilot. You keep the client relationship. We help you get the Knowledge integration right the first time.

Once the pattern is normalized on your side, you run subsequent projects independently.

## Related

| Read next | Why |
|---|---|
| [Product](/product) | The decision loop for rule-governed AI agents |
| [Enforcement](/product/enforcement) | The signed envelope and PEP model your architecture will implement |
| [Progressive context](/product/progressive-context) | The `/resolve` loop your agent calls into |
| [knowledge-runtime (Python)](/docs/sdk-reference/knowledge-runtime-python) | The SDK your Python-based agents will use |
| [Wrap your own MCP server](/docs/guides/wrap-your-own-mcp-server-with-enforcement) | Enforcement pattern if your agents speak MCP |
| [Talk to us](/contact) | Co-delivery on your first engagement |
