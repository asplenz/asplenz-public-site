---
title: Keep policy authority when AI agents start making business decisions
description: AI agents can investigate cases, gather evidence and recommend or execute actions. Knowledge keeps the rules that determine what is allowed, blocked or requires human approval under Compliance governance, outside the model.
locale: en
kicker: Solutions - For compliance officers
---

Your organization is starting to deploy AI agents into work that used to be done by humans following procedures.

Before agents, Compliance could govern the procedure, the controls, the approval hierarchy, the training and the audit trail around the humans. The decisions were made by people who could be trained on the policy and observed acting on it.

With agents, the same question surfaces on every deployment :

> *Who determines what the agent is allowed to decide ?*

This page is about how Compliance keeps that authority when the agent, rather than a human or an existing business system, participates in the decision.

## Keep policy outside the model

The AI team can decide how the agent investigates a case, which tools it uses, what evidence it gathers. Compliance keeps authority over the deterministic rules that govern the outcome.

| AI Product owns | Compliance owns |
|---|---|
| Agent behavior | Policy content |
| Tools and integrations | Thresholds, conditions, scope |
| Investigation and orchestration | Precedence between rules |
| Fact acquisition | Approval requirements |
| Agent UX and error handling | Exceptions and their scope |
| Deployment and observability | Effective dates and amendments |

Knowledge is the surface where the Compliance column lives. It is not a place engineers ship policy to. It is a place Compliance edits directly, without engineering as a gatekeeper.

## Decide where AI autonomy ends

Not every governed decision should be automated. Knowledge lets policy determine, per rule and per scope, when the agent may proceed, when it must stop, and when authority must return to a human.

| Severity | What the agent does |
|---|---|
| **Allow** | The agent proceeds. The decision is deterministic and traceable. |
| **Require approval** | The agent may prepare the recommendation, but a human decider owns the outcome. Knowledge creates a first-class Approval record with the triggering rules, the intent and the approver. Decision surfaces via back-office UI, Slack modal, or webhook callback. |
| **Block** | The agent stops. The tool boundary refuses to execute the underlying action. |
| **Absolute ban** | Same as block, and cannot be overridden even with an approval. |

Compliance decides the autonomy boundary at the rule level. That boundary is enforceable at the tool boundary, not a note in a document. See [Enforcement](/product/enforcement) for the mechanism.

## Change policy independently

Rules are objects Compliance can author and amend without a coordinated release cycle. Each rule carries a business-view :

```
Single-name concentration

Applies to      : Singapore, Equity
Rule            : Post-trade exposure > 12%
Outcome         : REQUIRE APPROVAL
Effective       : 1 October 2026
Rationale       : Updated concentration policy per MAS guidance
Approved by     : Head of Wealth Compliance
Previous version: pinned to consultations from before this date
```

Change the threshold. Save. The next agent consultation uses the new value. The previous version is preserved so any past decision still points at the exact policy of its day.

Policy changes can be governed independently of agent releases when the new rule uses context the agent can already acquire. When a rule requires a new field, the agent's `required_context` loop learns to fetch it. See [Progressive context](/product/progressive-context).

## Explain every governed decision

*"Show me the decision on this case, and why it was made."*

The answer is a business-view of the frozen state at decision time :

```
Decision       : BLOCKED
Case           : C-18273
Decided at     : 15 March 2026, 09:12 UTC

Policy at time : Client Suitability v7

Applicable rules :
  R-182 v4  (allow)
  R-291 v2  (require approval)
  R-817 v6  (block)

Winning rule   : R-817 v6
Reason         : Higher precedence prohibition

Human override : None
```

Not an approximation. Not derived from logs. The exact rules, versions, precedence and overrides in force at decision time. See [Auditability](/product/auditability) for how the reconstruction works.

## Preserve why policy changed, not just what changed

Two audit histories, kept in one place. Compliance teams need both.

| Policy history | Decision history |
|---|---|
| Why did we introduce this rule ? | Which rule version applied on this case ? |
| Who approved the amendment ? | Which rules fired ? Which were neutralised by an override ? |
| Why did the threshold move ? | Which rule won precedence, and why ? |
| Under what regulatory driver ? | What was the human approval, if any ? |

Every policy amendment writes a governance act (actor, date, rationale). Every decision writes a Consultation. Neither history is stitched together after the fact ; both are preserved as the decisions and amendments happen.

## Govern policy as it evolves

Three lightweight controls Knowledge runs while policy grows :

| Control | What it surfaces |
|---|---|
| **Coherence checks at write time** | AI-assisted authoring checks can flag potential duplicates, tensions or contradictions for human review. They do not determine runtime policy outcomes ; the deterministic engine does. |
| **Coverage insight** | See which rules drive most decisions, which rarely apply, and where approvals or blocks concentrate. Helps identify rules that no longer earn their keep. |
| **Effective-date preview** | Verify how a proposed rule change would have altered past decisions before you activate it. |

## Where Knowledge's responsibility ends

- **Enforcement everywhere in the firm.** Knowledge governs the decisions that consume its API. A workflow that hardcodes its own policy logic is invisible to Knowledge. Discovery and adoption of the governed layer is a change-management effort, not a technical guarantee.
- **The judgment inside approval decisions.** `approval_required` verdicts still need a human decider. Knowledge routes the case efficiently ; it does not remove the responsibility.
- **Free-text policy interpretation.** Knowledge produces the verdict deterministically from structured `{scope, condition, severity}` triples. If your rules today only exist as free text in a document, you still need to translate them into that structured form. Knowledge accepts CSV, Excel, DMN or API input.

## Start with one policy area

Pick one policy area your agents are already touching, or about to touch. Formalize the rules in Knowledge. Run in shadow mode against your current process. Measure parity. Cut over when the numbers land.

**[What is Knowledge ?](/docs/what-is-knowledge)** &nbsp; · &nbsp; **[Talk to us](/contact)**

## Related

| Read next | Why |
|---|---|
| [Product](/product) | The decision loop for rule-governed AI agents |
| [Auditability](/product/auditability) | How historical reconstruction works : Consultation, RuleVersion, precedence trace |
| [Enforcement](/product/enforcement) | The signed envelope, PEP model and four-actor trust chain |
| [Progressive context](/product/progressive-context) | How rules requiring new fields propagate without breaking consumers |
