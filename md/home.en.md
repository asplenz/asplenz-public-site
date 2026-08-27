---
title: Asplenz Knowledge - governed policy infrastructure for AI decision-making agents
description: Let agents decide. Keep policy authority outside the model. Knowledge lets AI agents gather context and act on rule-governed business decisions without making the final policy determination themselves.
locale: en
kicker: Governed policy infrastructure for AI decision-making agents
---

# Let agents decide. Keep policy authority outside the model.

Knowledge lets AI agents gather context and act on rule-governed business decisions without making the final policy determination themselves. Decisions are deterministic, auditable, and can be enforced at the tool boundary with signed authorization.

**[See how enforcement works](/product/enforcement)** &nbsp; · &nbsp; **[Talk to us](/contact)**

---

## How it works

```
Agent
   |  understands the case, extracts information,
   |  investigates, gathers evidence
   v
Knowledge
   |  determines applicable rules, identifies missing context,
   |  resolves precedence, returns policy decision
   |  ->  allowed  /  approval_required  /  blocked
   v
Human decision  (when required)
   |  exercises judgment on approval_required
   v
Enforcement point  (tool wrapper, MCP interceptor, custom PEP)
   |  verifies signed authorization matches the operation
   v
Business tool  (Stripe, core banking, EMR, ...)
```

**AI investigates. Knowledge decides. The tool boundary enforces.**

"Knowledge decides" means Knowledge makes the **policy determination** - which rules apply, what the deterministic verdict is, whether human authorization is required. The agent decides everything else : what to investigate, what evidence to gather, how to communicate with the user. The tool boundary is where the policy decision becomes an executable outcome.

---

## Where governed decisions matter

Four situations where a decision deserves its own governed lifecycle, distinct from the system that consumes it.

**Agent Decisioning**
AI agents that investigate a case (customer refund, KYC file, insurance claim, admission request) and make a rule-governed business decision from partial context. The agent orchestrates the investigation ; Knowledge determines the outcome deterministically. See [For AI product teams](/ai-agents).

**Review-Ready Gate**
Catch deterministic defects before scarce human reviewers see them. When a case reaches a compliance officer, everything that could be decided by rules already was ; only judgment cases arrive. See [For compliance officers](/automate-approvals).

**Progressive Journeys**
A component of the agentic loop, not a form optimization. The caller sends what it has, Knowledge returns the fields the applicable policies still need, the caller acquires them (from a system, a vendor, an extraction, or the user) and re-consults. Policy changes ship without redeploying consumers - the caller auto-discovers the new required fields.

**Decision Replay**
Reconstruct the exact policy state behind a historical decision, years later. Each Consultation freezes the applicable rules, overrides, precedence and normative hash at decision time. The audit surface is deterministic, not an approximation.

---

## Real, not vaporware

```python
from knowledge_runtime import governed_tool

@governed_tool(action="refund.execute", resource="tx", bind=["amount"])
def refund_customer(tx, amount):
    return refund_api_legacy(tx, amount)
```

The agent proposes the action. Knowledge decides. The tool executes only with a valid signed authorization that binds to this exact operation. Shipped 2026-08. Python SDK + MCP server + JWS ES256.

**[Quickstart 5 min](/docs/quickstart-governed-tool)** &nbsp; · &nbsp; **[Knowledge as MCP server](/docs/quickstart-knowledge-mcp)** &nbsp; · &nbsp; **[Enforcement spec](/product/enforcement)**

---

## Where it fits with your existing stack

Already have Drools, IBM ODM, DMN, ServiceNow, or a custom rules engine ? **Keep them where they fit.**

Knowledge is not a replacement for the enterprise-wide rules landscape. It is for a specific class of decisions - those that deserve their own governed policy authority, independent of the systems that consume them : agents that need progressive context resolution, approvals with explicit human/machine boundaries, reproducible policy state for regulator-grade audit, or actions that require cryptographically verifiable authorization at the tool boundary.

**Knowledge sits alongside, not on top.** See the [insertion patterns](/product/integrations) : Overlay (add governed policy around a legacy engine), Gate (require a signed verdict before selected actions), Shadow (parallel evaluation without production authority), Selective routing (new scope on Knowledge, rest on legacy), Primary (greenfield). See [Integrations](/product/integrations) for the MCP, Python SDK and REST surfaces.

---

## Give governed policies an independent lifecycle

Some business decisions should not belong to the application, workflow, or agent executing them. Knowledge gives those decisions an independent governed lifecycle : author, approve, version and replay policies independently of the systems that consume them - whether one caller or many.

The lifecycle stays operational through :

- **Explicit authorship** with owner, approver chain and governance log per Policy
- **Immutable versioning** on every verdict-affecting rule change (RuleVersion snapshots)
- **Governed approvals** for verdicts that require human judgment - `approval_required` is a first-class verdict, not a workflow annotation
- **Overrides and pauses** as governed objects, not hidden branches
- **Signed authorization** so a downstream enforcement boundary can prove the policy decision that authorized an action (with the honest caveat that architectural placement of the PEP is the client's responsibility)

**[How Knowledge fits your firm](/pilot)** &nbsp; · &nbsp; **[The auditability model](/product/auditability)**

---

## Design partner - founding cohort Q4 2026

Working with three founding partners on production-relevant decisions. One production-relevant decision, Shadow mode first, measurable success criteria agreed up front. Founding-customer pricing. Direct product influence. Clean exit if the numbers do not land.

**One slot filled** (wealth vertical, structured products distribution). **Two slots open** - one prioritised for teams that build AI agents making rule-governed decisions, one flexible.

**[Apply as design partner](/pilot)** &nbsp; · &nbsp; **[contact@asplenz.com](mailto:contact@asplenz.com)**

---

**Asplenz Knowledge.** Governed policy infrastructure for AI decision-making agents. For rule-governed decisions that should remain deterministic, auditable, and outside the model.
