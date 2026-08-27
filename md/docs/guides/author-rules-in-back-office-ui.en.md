---
title: Author rules in the back-office UI
description: How compliance and SME authors create, amend and test rules without touching the API. The visual authoring path from empty policy to first fire.
locale: en
kicker: Docs / Guides - Stable
---

The Knowledge API is the source of truth. The back-office UI is a visual surface on top of it, designed for compliance officers, subject-matter experts and product owners who want to author and amend rules without writing code or CSV.

This guide walks through the authoring flow. It assumes you have back-office access with an authoring role.

## Where authoring happens

The back-office UI groups authoring around two objects :

- **Policy** : the aggregate that holds a set of related rules. Every rule belongs to exactly one policy.
- **Rule** : a single directive. Its scope, condition, severity, rationale and effective dates all live here.

The registry view lists policies. Opening a policy shows its rules, its governance log (adoption, amendment, renewal acts), and its ownership.

## Create a policy

From the registry view, choose *New policy*. Fill in :

- **Name** : a human-readable identifier (e.g. *Refund policy*)
- **Owner** : the accountable role or person
- **Approver chain** : who signs off amendments
- **Rationale** : why this policy exists

Saving records the adoption act in the policy's governance log.

## Add a rule

From an open policy, choose *New rule*. The author view exposes :

| Field | What it does |
|---|---|
| **Statement** | Human-readable declaration of what the rule says. Compliance and reviewers read this first. |
| **Scope** | Where the rule applies : action, actor role, jurisdiction, product, or any other dimension your tenant's scope schema defines. |
| **Condition** | The numeric or enum gate. Structured as `field / operator / value`. Example : `amount_eur > 500`. |
| **Severity** | `allow` / `informative` / `require_approval` / `hard_block` / `absolute_ban`. Determines what the engine does when the rule fires. |
| **Effective dates** | Optional `not_before` and `not_after`. Governs when the rule is in force. |
| **Rationale** | Free-text explanation of *why* the rule exists (regulatory driver, internal decision, prior incident). Rendered above the rule for anyone reading it later. |
| **Approvers** | Who must sign off before the rule becomes active. |

Saving writes a first `RuleVersion`. The rule is now authored but not yet active if approval is required.

## Preview against a sample case

Before publishing, use the *Preview* pane :

- Enter a sample context (a few fields, matching what your callers actually send)
- The UI shows what verdict the rule would return, and what other rules in the same policy would fire alongside it
- The precedence trace is displayed : which rule would win, and why

The preview does not write a Consultation. It is authoring-time only.

## Publish through the approval workflow

If the policy requires approval, the rule enters a *pending* state. The named approvers see it in their queue. They can :

- **Approve** : the rule activates. A new immutable `RuleVersion` is recorded. Existing consultations still point at previous versions.
- **Request changes** : the rule returns to draft with the reviewer's comment.
- **Reject** : the rule is discarded ; the governance log records the rejection.

Every state transition is logged with actor, timestamp and comment.

## Amend an existing rule

Opening a live rule and clicking *Amend* creates a new draft based on the current version. Change the threshold, tighten the scope, update the rationale. Save and route to approval as before.

When the amendment is approved, a new `RuleVersion` is written. All future consultations pin the new version. Past consultations keep pointing at the version that applied at their time.

## Watch the rule fire

After the rule is live, open the *Coverage* view. For any window of time :

- How often has the rule been evaluated ?
- How often has it fired ?
- On which cases has it been dominating ?
- Which cases were blocked, allowed, approval-required ?

The Coverage view helps identify rules that no longer earn their keep (never fire), rules that fire far more than expected (too broad), and rules that regularly conflict with overrides (candidate for amendment).

## Retire a rule

When a rule should no longer apply going forward, choose *Retire*. The rule is marked inactive : new consultations do not consider it. The rule and all its past versions remain in the record, so historical consultations still resolve to the state they saw. The governance log captures the retirement act.

## What the API sees, what the UI sees

Everything you do in the UI is a call to the Knowledge API. A rule authored visually looks identical to a rule imported from CSV. The two paths can coexist : a policy can be seeded from CSV and then amended in the UI, or authored in the UI and later exported.

Some teams use the UI for compliance-owned rules and the CSV import for high-volume rules that live in an external policy repository. Both are supported.

## Related

| Read next | Why |
|---|---|
| [Quickstart : create your first policy](/docs/quickstart-first-policy) | The API-side equivalent of the flow above |
| [Policies, rules and targets](/docs/concepts/policies-rules-targets) | The concept model behind the author fields |
| [Overrides, approvals, pauses](/docs/concepts/overrides-approvals-pauses) | The governance mechanisms that sit alongside rule authoring |
| [Validate before you enforce](/docs/guides/validate-before-you-enforce) | How to test rules against real cases in shadow mode |
