---
title: Automate routine decisions. Prepare the rest for human review.
description: Straight-through approval for the cases your policy can decide. Review-ready escalation for the cases that need human judgment. One policy layer decides which is which.
locale: en
kicker: For approval-heavy workflows
ctaLabel: Become a design partner
ctaHref: /pilot
---

Most approval queues are not full of cases that need real judgment. They are full of routine decisions the applicable policy already knows how to handle, and cases that arrive incomplete — where the approver spends time chasing missing information before they can decide.

**Knowledge doesn't replace your approval process. It reduces what needs to reach it — and helps the cases that still need judgment arrive with the context and policy rationale needed to decide.**

## The screening questions

Two questions we ask early in a design-partner conversation :

- **How many requests does your team review every month, and what percentage are ultimately approved without requiring real judgment ?**
- **How much reviewer time does each case consume before the actual judgment is made ?**

The first exposes the straight-through opportunity — the cases the policy could resolve without a human. The second exposes the review-ready opportunity — the preparation and information-chasing that swallows a reviewer's time before the actual decision. Two economic surfaces, two savings.

## Two economic outcomes

| Outcome | What it means |
|---|---|
| **Straight-through decisions** | Cases the policy can decide deterministically no longer sit in a review queue. The reviewer sees them only in audit, not in their inbox |
| **Review-ready escalation** | Cases that need human judgment arrive with a complete decision file : all required context assembled, all applicable rules cited, the reason for escalation explicit. The reviewer opens one page, not a back-and-forth thread |

The second outcome matters because it neutralises the objection *"we do not want to automate our approvals"*. Keep the human decision. Just stop making the human chase incomplete cases.

## Adoption levels : how much authority you give the workflow

Knowledge does the same thing at every adoption level : it returns `required_context` or a `verdict` with cited rules. What changes across levels is **how much authority your workflow acts with on Knowledge's response**.

| Level | What your workflow does with Knowledge's response | Reviewer role |
|---|---|---|
| **1. Prepare** | Uses `required_context` to build a complete case file — assembled from systems, agent extraction or the requester | Reviewer decides on a complete case |
| **2. Recommend** | Presents Knowledge's verdict and cited rules to the reviewer as a recommendation | Reviewer validates or overrides |
| **3. Route** | Uses the verdict to classify each case — `allowed` skips the queue, `approval_required` escalates, `blocked` denies | Reviewer only sees escalated cases |
| **4. Execute** | Auto-proceeds for cases Knowledge returns `allowed`, records the consultation for audit | Reviewer handles exceptions and audits |

**Most engagements begin at Prepare or Recommend** and move up as the policy owner sees the decision agreement Knowledge achieves in their own data. What distinguishes Knowledge from a plain rules engine at level 4 is not that the workflow can auto-execute — it is that every executed decision remains reproducible against the exact policy state that produced it (see [Governance](/governance)).

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

The ServiceNow workflow is configured to let `allowed` cases proceed to execution without CAB review, and to record the consultation for audit. Knowledge itself does not approve or execute — it provides the governed verdict the workflow acts on. The CAB never sees the case.

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

**This second mechanic is what makes review-ready escalation possible.** A traditional workflow engine can route a request to an approver. Only a policy layer can say *"before this reaches anyone, here is what the applicable rules still need"* — and let the caller assemble that information from systems, agent extraction or the requester, without hard-coding a fixed question tree.

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
| **Credit and lending review** | Standard-tier applications matching the credit policy |
| **Underwriting** | Standard risk profiles within the underwriter's mandate |
| **KYC / KYB exception review** | Exceptions on paths the policy already accommodates |
| **Investment or product approval** | Standard-mandate positions within pre-authorised limits |
| **Compliance exceptions** | Recurring exception categories with an established rationale |
| **Security exceptions** | Standard access, firewall or bypass requests matching policy |
| **Recruitment screening** | Candidates whose profile matches an approved role template |

The strongest fit is not necessarily the workflow with the highest volume — it is the one where the equation **volume × reviewer cost × proportion of deterministic cases × cost of delay** produces the largest number. A hundred CAB reviews consuming senior engineers can dominate ten thousand expense-claim validations.

## How this differs from a workflow engine

A workflow engine (ServiceNow, Jira, Camunda) can encode conditions that determine whether a case proceeds directly or reaches an approver. The question is where that decision logic should live when it becomes complex, frequently changed, reused across multiple workflows, or needs independent governance and replay.

**Knowledge separates the decision logic from the workflow that acts on it.** The workflow keeps orchestrating the process. Knowledge holds the policy that decides which cases are routine, which require judgment, and what context they need — as governed, versioned, auditable rules rather than as workflow-config conditions :

- The threshold that determines auto vs escalate is a rule, not a condition in the workflow config.
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
