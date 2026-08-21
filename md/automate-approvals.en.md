---
title: Automate routine decisions. Prepare the rest for human review.
description: Straight-through approval for the cases your policy can decide. Review-ready escalation for the cases that need human judgment. One policy layer decides which is which.
locale: en
kicker: For approval-heavy workflows
ctaLabel: Become a design partner
ctaHref: /pilot
---

Most approval queues are not full of cases that need real judgment. They are full of routine decisions the applicable policy already knows how to handle, and cases that arrive incomplete — where the approver spends time chasing missing information before they can decide.

Knowledge addresses both.

## The screening question

> **How many requests does your team review every month, and what percentage are ultimately approved without requiring real judgment ?**

If the answer sits above 60-70%, the routine cases dominate the reviewer's calendar. Those are the cases a policy layer can resolve deterministically. What is left arrives at the reviewer with less noise and more context.

## Two economic outcomes

| Outcome | What it means |
|---|---|
| **Straight-through decisions** | Cases the policy can decide deterministically no longer sit in a review queue. The reviewer sees them only in audit, not in their inbox |
| **Review-ready escalation** | Cases that need human judgment arrive with a complete decision file : all required context assembled, all applicable rules cited, the reason for escalation explicit. The reviewer opens one page, not a back-and-forth thread |

The second outcome matters because it neutralises the objection *"we do not want to automate our approvals"*. Keep the human decision. Just stop making the human chase incomplete cases.

## Maturity levels : the adoption ladder

You don't have to start at full automation. The same product supports a graduated adoption path :

| Level | What Knowledge does | Human role |
|---|---|---|
| **1. Assist** | Fetches missing context (from systems or the requester), assembles a complete case file | Reviewer decides on a complete case |
| **2. Recommend** | Above, plus applies the rules and returns a recommended verdict with cited rules | Reviewer validates or overrides |
| **3. Route** | Above, plus classifies each case (auto vs escalate vs block) | Reviewer only sees escalated cases |
| **4. Decide** | Above, plus takes the deterministic decision itself, recorded with normative state and consultation trace | Reviewer handles exceptions and audits |

**You don't have to start at level 4.** Most engagements begin at Assist or Recommend, then move up as the policy owner sees the decision agreement Knowledge achieves in their own data. What distinguishes Knowledge at level 4 from a plain rules engine is not that it decides — it is that every automated decision remains reproducible against the exact policy state that produced it (see [Governance](/governance)).

## A concrete example : change management

A change request arrives in ServiceNow. An agent (Jira automation, custom bot, MCP-connected LLM, whatever the org uses) calls Knowledge before the request enters the CAB queue.

```
POST /knowledge/v1/resolve
{
  "action_type": "change_approval",
  "context": {
    "change.risk": { "value": "low", "source": "change_form" },
    "change.window": { "value": "standard", "source": "change_form" },
    "change.rollback_documented": { "value": true, "source": "change_form" }
  }
}
```

**Case A — Knowledge returns `allowed` :**

```
{ operation_status: "complete",
  verdict: "allowed",
  cited_rules: ["rul-cab-standard-low-risk-preauthorized"],
  consultation_id: "cns-..." }
```

The agent auto-approves the change, records the consultation, notifies the requester. The CAB never sees it.

**Case B — Knowledge returns `incomplete` :**

```
{ operation_status: "incomplete",
  required_context: [
    { field: "change.rollback_tested",
      reason: "required by rul-cab-medium-risk-rollback",
      type: "boolean" }
  ] }
```

The agent looks for the answer in CI/CD, in the git commit trailers, in the release ticket. If none of them answer, it asks the requester directly. Then re-calls `/resolve`.

**Case C — Knowledge returns `approval_required` :** this is the API-level verdict Knowledge uses to signal *"this case must reach your approval process"*. The policy does not skip the human decision — it hands the case off to it, with the complete decision file.

```
{ operation_status: "complete",
  verdict: "approval_required",
  cited_rules: ["rul-cab-medium-risk-manual-approval"],
  consultation_id: "cns-..." }
```

The agent routes the case to the CAB **with the complete decision file** : original request, all context assembled (from systems and from the requester), rules that made this require human judgment. The CAB member opens one page, decides, and moves on.

## Where this applies

The same pattern applies to any workflow with a backlog of requests routed through human approval :

| Workflow | The routine cases that swallow the queue |
|---|---|
| **IT change management** | Standard low-risk changes, pre-authorised categories |
| **Expense approvals** | Under-threshold spend, policy-compliant T&E |
| **Procurement / PO** | Approved-vendor + under-threshold amount |
| **Service requests** | Access to standard resources, role-based provisioning |
| **Refund and dispute resolution** | Under-threshold refunds, standard dispute reasons |
| **HR requests** | Standard time off, expense claims, role changes within band |

## How this differs from a workflow engine

A workflow engine (ServiceNow, Jira, Camunda) can route a request and gate it on an approval step. It cannot decide whether the case is routine or judgment-heavy — that decision has to be made explicitly somewhere.

Today that "somewhere" is often a mix of hard-coded thresholds, tribal knowledge and the reviewer's judgment applied at scale. Knowledge puts it in one governed decision layer :

- The threshold for auto-approval is a rule, not a comment in the workflow config.
- The policy state at the time of the decision is captured, so a decision months old can be reproduced.
- The reasons a case requires human judgment are explicit and cited on the escalation.

See [Compare](/vs) for the full comparison vs a plain workflow engine or rules engine.

## Deployment shape

Two adoption patterns fit this use case naturally (see [Your stack](/stack) for the full picture) :

| Pattern | Where Knowledge sits |
|---|---|
| **Gate** | Requests hit Knowledge before entering the approval queue. Straight-through cases skip the queue, escalated cases arrive already qualified |
| **Overlay** | The existing workflow keeps running. Knowledge is called from the approval task, decides route vs escalate, attaches the decision file for the reviewer |

Both preserve the existing workflow engine and the existing reviewer roles.

## What a design partner engagement looks like here

One bounded scope — a specific approval type in a specific team — modelled with your policy owners, run alongside the current process for eight weeks. What we measure together at the end :

- **Percentage of cases resolved straight-through** vs still routed to a reviewer.
- **Time to decision** for the routed cases (complete file vs current back-and-forth).
- **Reviewer time recovered** — how much of the reviewer's calendar the automation freed.
- **Audit reconstruction time** for a historical decision.

See [Design partner](/pilot) for how the engagement is scoped.

## Two levels of the same word

"Approval" appears at two levels in Knowledge and it is worth naming them :

- **Your approval process** — the workflow your organisation runs (CAB, expense approver, procurement committee). This page is about the shape of that process and where Knowledge fits.
- **`approval_required` (a verdict)** — the value Knowledge returns when the applicable rules explicitly require human judgment. It is the API surface that routes a case to your approval process. Knowledge can either raise it as a first-class `ApprovalRequest` handled inside Knowledge (the decider signs in the back-office UI), or hand it back to the caller so the caller routes to an existing external process (CAB, ticketing, workflow).

The two are not competing concepts. The verdict is the mechanism, the process is what it routes to.

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The `/resolve` contract behind the auto vs escalate decision |
| [AI agents](/ai-agents) | How an agent calls Knowledge before routing to a reviewer |
| [Your stack](/stack) | The Gate and Overlay patterns in detail |
| [Design partner](/pilot) | Three founding slots, one production-relevant approval flow, founding-customer pricing |
