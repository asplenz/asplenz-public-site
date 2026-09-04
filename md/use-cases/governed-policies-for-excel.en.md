---
title: Keep Excel. Move critical policy out of the spreadsheet.
description: Governed policies for Excel bring policy decisions into the workbooks your teams already use, and keep them aligned when the policy, the case, or the reference data around them changes.
locale: en
kicker: Governed policies for Excel
ctaLabel: Discuss your use case
ctaHref: /contact
---

Your teams keep Excel : the layout, the rows, the formulas, the shared workbooks. What changes : the rule that decides whether an operation is compliant no longer lives inside the workbook. It lives in Knowledge, versioned and current, and Excel consults it when the governed decision is evaluated. Excel stays where the case data is. Knowledge holds the policy. The two meet inside the cell that renders the verdict.

![Knowledge for Excel hero view showing four rows with distinct verdicts](/images/knowledge-for-excel/01-hero.png)

*Illustrative data. Company names, products and amounts are fictional and used for demonstration purposes only.*

## Two problems, one solution

**Policy duplication.** Critical rules get copied into formulas, VBA and local scripts. When the policy changes, every implementation has to follow. Some don't. Audit findings follow.

**Decisions become stale.** Even when the policy has not changed, the facts it applies to can. A client rating changes. An issuer enters a restricted list. A transaction changes status. A workbook can continue showing yesterday's answer unless the decision is evaluated again.

Governed policies for Excel address both. The formula asks Knowledge what the applicable policy determines given the current facts. When the relevant inputs change, the decision can be evaluated again.

## How it works for the user

In the workbook they already use, the user adds one formula :

```
=KNOWLEDGE.RESOLVE("order.book_structured_product", A1:H2)
```

where `A1:H2` holds the case data (client segment, product complexity, amount, and so on). The cell displays a verdict paired with a short human reason drawn from the winning rule :

| Icon | Cell text | Meaning |
|---|---|---|
| green check | **ALLOWED** | The applicable policy authorises the operation. |
| orange triangle | **APPROVAL_REQUIRED - Complex on accredited** | The applicable policy requires an approval before the operation. |
| orange clock | **APPROVAL_PENDING - Complex on accredited** | A colleague in the same scope has already submitted an approval request for the same context. |
| red cross | **BLOCKED - Restricted issuer** | The applicable policy forbids the operation. |

Clicking the cell opens a native Excel card with the full rule statement, its version at decision time, the consultation id, and the cryptographically signed fingerprint of the decision.

## When things change, the decision follows

A Knowledge decision depends on three independent inputs. Any of them can change ; the decision follows on the next workbook calculation.

**Policy.** Compliance edits and approves a new rule version in Knowledge. Previously allowed cases become approval-required or blocked under the new policy, without editing a single formula in any workbook. Motivations for a version bump include internal policy tightening, product launches, or a regulatory change interpreted by Compliance / Legal into the firm's own approved policy.

**Case data.** A cell in the row changes. The RM raises the notional from 450k to 550k. The row moves from ALLOWED to APPROVAL_REQUIRED without any change to the policy or the reference data.

**Reference data.** An external fact the row consults changes. Compliance adds an issuer to the restricted list. Client risk rating gets reclassified from medium to high. Sanctions status changes. The workbook picks up the new fact from the source that owns it, and the row re-evaluates.

![Same row, before and after an issuer enters the restricted list. ALLOWED at 14:31, BLOCKED - Restricted issuer at 14:32.](/images/knowledge-for-excel/02-before-after-restricted.png)

Same row, same policy, same formula. Between 14:31 and 14:32 the compliance-owned restricted list changed. The updated reference data triggered a new evaluation. No policy logic had to be changed in the workbook.

## Regulation changes. Your policy follows.

When a regulatory change requires Compliance or Legal to update an internal policy, the new rule is reviewed, approved and given an effective date in Knowledge. Workbooks consulting that policy use the new version without embedding a new copy of the rule.

Knowledge does not interpret regulatory texts automatically. The authority inside Knowledge is always the policy your organisation has approved. Compliance / Legal translate the external requirement into an internal policy version. Knowledge holds and executes that version. This is what makes the audit trail defensible.

**Change the policy once. Not every spreadsheet.**

## From decision to approval, without leaving Excel

When Knowledge returns `APPROVAL_REQUIRED`, the RM opens the Knowledge panel inside Excel. The case context is pre-filled from the cell. The justification textarea is editable. One click submits the request. The cell moves to `APPROVAL_PENDING` immediately, so another user resolving the same governed case can see that an approval is already in progress. The compliance officer decides in the back-office. If approved, the cell moves to `ALLOWED` on the next refresh, with the resulting Override recorded and dated.

![Approval submission panel with pre-filled context and justification](/images/knowledge-for-excel/03-approval-panel.png)

Every consultation and every approval submitted via Knowledge becomes an audit line tied to the case context, the user, the rule that triggered it, and the rule version at decision time.

## Reconstruct any decision precisely

Every decision is tied to the context, policy version and rule that applied at the time. You can explain why the same case was allowed yesterday and blocked today.

![Consultation detail page in the Knowledge back-office](/images/knowledge-for-excel/04-consultation-detail.png)

Timestamp precise to the second. Rule cited with its version. Full context sent. Cryptographic signature. You can reconstruct both decisions from the context and policy state recorded at the time.

## Which rules belong in Knowledge ?

Not every formula or business rule in a spreadsheet should move to Knowledge. A useful test is :

> **Would this rule still exist if this spreadsheet did not ?**

| Logic | Candidate for Knowledge ? |
|---|---|
| Calculate duration from cash flows | No — spreadsheet calculation |
| Highlight an incomplete cell | No — workbook behavior |
| Retail structured-product transactions above EUR 500k require compliance review | Yes — organizational policy |

The test identifies a candidate, not a mandatory move. Knowledge is most relevant when a rule represents organizational policy and needs its own approval, versioning, effective dates or historical audit trail. Everything else can stay where it is.

## Where teams can use it

These are examples. Knowledge evaluates your organisation's policies ; it does not provide the underlying KYC, suitability or risk policy.

| Team | Where it fits | Example decision |
|---|---|---|
| **Front office** | Structured product booking, order entry | Suitability based on client segment, product complexity and notional. |
| **Compliance** | Periodic client review, exception review | Escalation when client risk or review conditions require it. |
| **Operations** | Exception release monitoring, post-trade breaks | Benign reasons (system error, custodian holiday) versus sensitive ones (VIP facility, large notional) get different paths. |

## Under the hood

**Custom function.** `KNOWLEDGE.RESOLVE(action_type, context_range)` returns the verdict as a native Excel Entity Value. Companion variants exist for batch and streaming evaluation. Cells re-evaluate when their inputs change, so a workbook that receives updated case data or reference data from an external source picks up the new decision on the next calculation.

**Deployed centrally through Microsoft 365. No per-user installation required.** The add-in is installed once by your tenant admin ; end users see it in Excel automatically. Available for Excel on the web and Excel Desktop for Windows. Users authenticate with their existing Microsoft 365 account through Entra ID.

## Current scope

**Available today**

- The custom functions above.
- The native Excel entity card with rule, version, consultation id and signature.
- The side panel with approval submission and pending list.
- Approval deduplication across users in the same scope.
- SSO through Entra ID.
- Centralised install via Microsoft 365 tenant admin.

**Current boundaries**

- A workbook that is closed when a policy or reference-data change occurs does not re-evaluate on its own ; re-evaluation happens on the next open.
- Knowledge does not proactively push notifications to every downstream system ; each consumer asks Knowledge on its own cadence.
- Knowledge does not automatically identify the full population of open cases across the firm that a new policy version affects.
- Actions performed outside Knowledge are not captured by Knowledge.

## Discuss your workbook

If you have a spreadsheet whose policy you would want to govern this way, or a regulatory change coming up that will require updating rules in many places, we would rather see it than describe it in the abstract.

[[cta]Discuss your use case](/contact)
