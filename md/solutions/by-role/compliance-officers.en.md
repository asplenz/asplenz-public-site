---
title: For compliance officers
description: Own the rules, edit them directly, watch them fire in real cases, and reconstruct any decision years later. No coordination sprint with engineering to change a threshold.
locale: en
kicker: Solutions - For compliance officers
---

Two frustrations that surface in every compliance team using a rules engine at scale :

> *"We asked engineering to change the concentration limit from 15% to 12% three months ago. It is now in the sprint after next. Meanwhile our RMs are still using the old threshold in their diligence."*

> *"A regulator asked us for the exact rule that produced a decision from 18 months ago. We can reproduce the decision, but we cannot reproduce the rule text of that period - it was updated twice since."*

Knowledge is built so both frustrations disappear.

## You edit the rules directly. Engineering does not gate you.

Rules live in the Knowledge back-office UI as structured objects with :

- **Statement** - human-readable declaration of what the rule says
- **Scope** - which cases it applies to, expressed as `{jurisdiction: SG, asset_class: equity}` fields against your tenant's `scope_schema`
- **Condition** - the numeric or enum gate, as `{field, op, threshold}` triples (e.g. `{post_trade_single_name_pct, gt, 15}`)
- **Severity** - `absolute_ban`, `hard_block`, `require_approval`, `informative`, `allow`
- **Effect** - the engine action derived from severity
- **Rationale + governance log** - free-text explanation of *why* the rule exists

Change the threshold in the UI. Save. The next `/check` call uses the new value. No release cycle. The old value is preserved in `RuleVersion` so any consultation from before the change still points at the exact rule text of that day.

## Every change writes a governance act

The `governance_log` on each Policy records adoption, amendment, renewal, retirement acts. Every entry carries actor + date + rationale. Auditors see who changed what and why, without asking you to reconstruct git history.

The engine never reads the log ; it is the human context. Rendered in the registry UI as an amber header above the rule list so anyone opening the Policy sees the story.

## Regulator questions are one query away

*"Show me the decision on case ID X"* :

```
GET /knowledge/v1/consultations/cns-abc123
```

Returns the full frozen state at decision time - the context sent, the rule versions cited, the dominating rule, the precedence trace, the overrides in force, the normative hash. Not an approximation.

*"Show me the rule text that applied here"* : each `cited_rule_version_id` in the response points at an immutable `RuleVersion`. Fetch it, see the exact statement and condition of that day.

*"Show me why this rule fired here and not on that other similar case"* : the `precedence_trace` records the full candidate list, which rules were neutralised by overrides, and which precedence field broke the tie.

## Coherence checks catch drift at write time

Every rule create or update triggers an automatic coherence check :

- **Exact-duplicate** : a semantically identical rule already exists (embedding similarity)
- **Tension** : the new rule interacts non-obviously with an existing one
- **Contradiction** : the new rule would fire opposite verdicts to an existing one on the same case (LLM check)

Warnings surface in the UI before you save. Not a blocker ; a nudge.

## Coverage : who fires, who does not

Every fire of every rule is recorded on a `Consultation`. Query :

- Which rules fired most in the last quarter ?
- Which rules have not fired in 6 months (candidate for retirement) ?
- Which cases blocked, which allowed, which required approval ?

The data is in the Consultation table today. A dedicated coverage UI is on the roadmap ; for now, the SQL is direct.

## Approvals as first-class governed objects

`approval_required` is a verdict, not a workflow annotation. When a rule returns it, an `Approval` entity is created with :

- The triggering rules (as `triggers[]`)
- The requester + the requested intent
- The approver (or approver role)
- The decision + comment
- Optionally, the `Override` the approval granted (Type 3, scope-bounded exception)

Decide via the back-office UI, Slack modal, or webhook callback. Every decision writes to the audit trail alongside the original Consultation.

## What you cannot do (honestly)

- **Guarantee your rules are enforced everywhere in your firm.** Knowledge governs the decisions that consume its API. A workflow that hardcodes its own logic is invisible to Knowledge. Discovery + adoption is a change-management problem, not a technical one.
- **Eliminate the need for judgment.** `approval_required` verdicts still need a human decider. Knowledge routes efficiently ; it does not remove the responsibility.
- **Prove that the model interpreting a rule statement is correct.** Knowledge produces the verdict deterministically from the structured `{scope, condition, severity}` - the free-text statement is informative, not authoritative. If your rules only exist as free text in a document, you still need to translate them into the structured form.

## Getting started

1. Read [Auditability](/product/auditability) for the full audit story.
2. Read the [what-is-knowledge](/docs/what-is-knowledge) primer for the vocabulary.
3. [Talk to us](/contact) about a design-partner engagement in your vertical.

## Related

| Read next | Why |
|---|---|
| [Auditability](/product/auditability) | Consultation, RuleVersion, precedence trace deep dive |
| [Progressive context](/product/progressive-context) | How rules requiring new fields propagate without breaking consumers |
| [Enforcement](/product/enforcement) | The signed envelope story - the CISO angle on the same product |
