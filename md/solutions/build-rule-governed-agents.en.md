---
title: Build rule-governed agents
description: You build the agent. Domain experts define the rules. Knowledge gives those rules an independent, executable and governed policy authority - so you stop reinventing rule storage, versioning, approvals, audit and enforcement on every engagement.
locale: en
kicker: Solutions - Build rule-governed agents
---

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

## The moment Knowledge belongs in your architecture

You've mapped the process. You've formalized the decision. You have a decision table, a set of if-then clauses, a policy matrix. You're one commit away from writing :

```python
if pep and risk == "HIGH":
    require_approval()
elif client_type == "COMPANY" and jurisdiction in RESTRICTED:
    require_beneficial_owner()
elif ...
```

or dropping it into your agent's prompt, a JSON config, or a workflow engine.

That's the moment. Every path from here creates a rule-shaped hole in what you deliver :

- Rules buried in agent code -> Compliance can't govern them independently.
- Rules in prompts -> the LLM's interpretation drifts, and audit reconstruction becomes prompt archaeology.
- Rules in a new bespoke config -> you rebuild versioning, approvals, audit trail, and enforcement on every engagement.
- Rules in an existing BRMS -> possible on industrialized processes, overkill on the long tail that never justified a BRMS project.

Knowledge is the fifth option : a policy authority independent of the agent, that ships with everything you would otherwise rebuild.

## What you stop reinventing on every engagement

| Capability | Without Knowledge | With Knowledge |
|---|---|---|
| Rule storage | Ad-hoc DB, config file, JSON | Structured, typed, tenant-scoped |
| Versioning + immutability | You build it | RuleVersion pinned per consultation |
| Approval workflow | Custom UI + Slack integration | First-class Approval entity + webhooks |
| Audit trail | You build the schema and the reader | Consultation record with precedence trace |
| Signed authorization | You don't | JWS ES256 envelope, JWKS-verifiable |
| Progressive context | You hardcode the field list | `/resolve` returns `required_context` |
| Shadow / advisory mode | Custom branching | Config flag, same code path |
| Emergency kill switch | Redeploy | Pause via API |

Each of these is a week of work when you build it. Knowledge ships them stable.

## The argument you add to your own pitch

Enterprise clients push back when an agent takes actions they can't govern. You already know the objections :

> *"How do we audit what the agent decided?"*
> *"How do we know Compliance signed off on this rule?"*
> *"What happens when the policy changes ; do we redeploy the agent?"*
> *"How do we prove to a regulator six months later?"*

With Knowledge in your architecture, you have a one-line answer :

> *Our agents separate probabilistic reasoning from deterministic policy decisions. Compliance keeps governance of the rules independently of the agent. Every action carries a cryptographic proof binding it to the exact rule versions that authorized it.*

That's a talking point that lets you sell an agent project to a bank, an insurer, or a healthcare payer. Without it you're back to *"trust our prompt"*.

## The platform effect across your book of business

You are probably building agents for more than one client. Client A wants a KYC agent. Client B wants a wealth-exception agent. Client C wants a claims triage agent. Client D wants an internal approvals agent.

Without a standard, you rebuild the rule-governed layer on each project.

With Knowledge :

```text
              Your architecture

     Client A - KYC agent      ─┐
     Client B - wealth agent   ─┼─── Knowledge pattern
     Client C - claims agent   ─┤    (same integration each time)
     Client D - approvals      ─┘
```

Knowledge becomes your **standard architectural pattern for rule-governed agents**. Every client engagement starts faster ; your team stops solving the same 8 problems from scratch.

## What Knowledge is not

- **Not a policy digitization tool.** You and your client's SMEs formalize the rules. Knowledge accepts them as CSV, Excel, DMN or API input - but the discovery work is yours.
- **Not a replacement for industrialized rules engines.** If the client already has FICO for credit decisions or a custom platform for fraud, Knowledge doesn't touch those. It targets the long tail of regulated decisions still made by humans with procedures + spreadsheets.
- **Not an agent framework.** Bring your own : LangGraph, MCP client, custom orchestrator. Knowledge is the policy authority those agents consult.

## Getting started

The minimum viable integration :

1. **Import your rules** as CSV or Excel via the back-office UI (see [CSV import](/docs/api-reference/check) - full CSV import ships in the next sprint).
2. **Call `/resolve`** from your agent when it needs a decision. Handle `required_context` by fetching the missing fields.
3. **Wrap the business-side tools** with `@governed_tool` so signed verdicts are enforced at the tool boundary. See [knowledge-runtime](/docs/sdk-reference/knowledge-runtime-python).
4. **Run in Shadow Mode** first : Knowledge advises, the human process still decides, you measure parity.
5. **Cut over to enforcement** when parity is proven. See [Migrate from advisory to enforcement](/docs/guides/migrate-from-advisory-to-enforcement).

That's the shape. Everything else is documentation.

## Co-delivery on your first Knowledge engagement

Not a formal partner program. **Partner-assisted delivery** - if you're building a rule-governed agent for a client right now and Knowledge fits, we work alongside your team on the pilot. You keep the client relationship. We help you get the Knowledge integration right the first time.

Once the pattern is normalized (typically after 2-3 engagements), you run subsequent projects independently.

## Related

| Read next | Why |
|---|---|
| [Enforcement](/product/enforcement) | The signed envelope + PEP model your architecture will implement |
| [Progressive context](/product/progressive-context) | The `/resolve` loop your agent calls into |
| [knowledge-runtime (Python)](/docs/sdk-reference/knowledge-runtime-python) | The SDK your Python-based agents will use |
| [MCP proxy](/docs/mcp-proxy/setup) | Transparent enforcement if your agents speak MCP |
| [Quickstart : governed tool](/docs/quickstart-governed-tool) | 5-minute hands-on |
| [Talk to us](/contact) | Co-delivery on your first engagement |
