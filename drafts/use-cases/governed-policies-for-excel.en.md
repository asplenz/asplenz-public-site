---
title: Keep Excel. Move critical policy out of the spreadsheet.
description: When compliance, risk, legal or business policies are implemented directly in spreadsheet formulas or macros, every workbook can become its own copy of the policy. Knowledge lets Excel consume governed policy decisions while users continue working in the spreadsheets they already use.
locale: en
kicker: Use case
ctaLabel: Discuss your use case
ctaHref: /contact
---

Business teams rely on spreadsheets for calculations, analysis and workflows. That is not the problem.

The problem starts when spreadsheets also implement compliance, risk, legal or business policies directly in formulas, macros or configuration. When the underlying policy changes, an organization may need to identify where it has been implemented, update local copies, and reconstruct which version applied to any past decision.

Knowledge gives that class of rules an independent lifecycle — approval, versioning, effective dates, exceptions, auditability — and lets spreadsheets consume the resulting decisions in place.

## The propagation problem

```
                Company policy
                      |
        +-------------+-------------+
        |             |             |
        v             v             v
   Excel A        Excel B       Excel C

   > EUR 500k     > EUR 500k    > EUR 500k
   formula        VBA           formula
```

When the policy changes :

- Which workbooks contain it ?
- Have they all been updated ?
- Who approved the change ?
- Which version applied to a decision six months ago ?

Existing spreadsheet controls typically track the file — its ownership, its versions, its lineage. The organizational policy that the file implements is a separate object with its own approval, version and effective-date lifecycle. That object needs its own governed authority.

## What Knowledge provides for a spreadsheet

A workbook calls Knowledge with the case context (client type, product, amount, jurisdiction, whatever the policy takes as input). Knowledge determines the applicable rules, resolves precedence, and returns a governed decision : `ALLOWED`, `APPROVAL_REQUIRED`, `BLOCKED` — plus the cited rule, its current version, its effective-since date, the consultation id.

The spreadsheet displays the decision alongside the case. The user sees why the decision came out that way without leaving Excel.

```
Structured Product Suitability

Client        Retail
Product       Structured Note
Amount        EUR 450,000

--------------------------------

APPROVAL_REQUIRED

Rule          LARGE_NOTIONAL
Rule version  v18
Effective     28 Aug 2026
Consultation  cns-abc123
```

The policy lives in Knowledge. The spreadsheet consumes the decision.

## Change the policy once. Not every spreadsheet.

Suppose three different workbooks — a trade-suitability sheet, a client-review sheet, an exception-monitoring dashboard — all consult the same suitability policy.

**Before** — the threshold is EUR 500k, defined once in Knowledge :

```
SUITABILITY.LARGE_NOTIONAL
Amount > EUR 500k -> APPROVAL_REQUIRED
```

Compliance modifies the rule and approves the change. Knowledge writes a new rule version, effective from the approved date.

**After** — refresh the spreadsheets :

```
                     Knowledge
                       v18
                        |
        +---------------+---------------+
        |               |               |
        v               v               v
     Excel A         Excel B         Excel C
```

All three see the new version simultaneously. No local threshold to redistribute, no macro to update, no risk that one workbook missed the memo.

The same signed decision reaches every workbook, and every workbook agrees on what the current policy says.

## Reconstruct any past decision

The audit question is not *what does the policy say today*, but *what did it say when this specific decision was made*.

Take a transaction from 14 March 2025 :

```
Retail client, structured product, EUR 450,000
Decision : ALLOWED
```

Knowledge shows :

```
Policy         Structured Product Suitability
Rule           LARGE_NOTIONAL
Rule version   v17
Threshold      EUR 500,000
Effective at   14 March 2025
Consultation   cns-91827
```

Same case today with the updated policy :

```
Decision       APPROVAL_REQUIRED
Rule version   v18
Threshold      EUR 400,000
Effective      28 Aug 2026
```

Two different verdicts, both correct — because they cite the version of the rule that applied at their respective times. That is the audit surface an EUC control framework typically does not carry on its own : the file was reviewed and approved, but the organizational policy applicable to a specific decision at a specific date lives in Knowledge.

## A useful test for what belongs in Knowledge

Not every business rule inside a spreadsheet is a candidate. Knowledge is designed for rules that represent organizational policy independent of the spreadsheet implementing them.

A practical test :

> **Would this rule still exist if this spreadsheet did not ?**

| Logic in the workbook | Candidate for Knowledge ? |
|---|---|
| `Duration = SUM(cashflow * time) / price` | No. Intrinsic to the calculation. |
| Highlight a cell yellow if empty | No. UI of the workbook. |
| Round to nearest currency unit | No. Presentation. |
| "Retail + structured product + notional > EUR 500k → compliance review" | Yes. Organizational policy. |
| "Products flagged high-risk cannot be sold to clients whose risk tolerance is low" | Yes. Suitability rule. |
| "SG jurisdiction requires signed dealer attestation before execution" | Yes. Regulatory rule. |

The test identifies a **candidate**, not a mandatory move. The organization decides whether the rule deserves an independent authority based on : how many applications share it, whether it changes without touching implementing code, whether an auditor needs to reconstruct past applications of it.

Knowledge is the authority for the policies you choose. Everything else stays where it is.

## The architecture

The underlying principle is not specific to Excel :

> **Some organizational policies deserve an authority independent of the applications that consume them.** Put the authoritative policy outside the consumer, and let the consumer — an AI agent, an existing application, or a spreadsheet — ask Knowledge for the governed decision.

For teams with an existing End-User Computing (EUC) control framework, Knowledge governs a different object than the framework does : the framework tracks the spreadsheet artefact, Knowledge tracks the organizational policy the artefact relies on. The two are complementary in principle. Whether they should be integrated in practice is a scoping question.

## Where this fits in your stack

- **Excel Web + Desktop** through a lightweight bridge or an internal broker service, sized for your gateway, auth and deployment posture. The concrete integration path is decided as part of a scoping conversation because IT constraints vary widely.
- **Historical audit** lives in the Knowledge back-office UI (Consultation detail page), not inside the spreadsheet. Compliance and risk officers read historical decisions there ; the workbook is for live application.
- **No replacement of existing spreadsheet controls.** Knowledge complements them by governing the organizational policy, not the file.

## Discuss your use case

Are critical business or compliance rules embedded in your spreadsheets today ? Do you know which workbooks implement a given policy, whether they all apply the same version, and what version applied to a decision made months ago ?

**[Discuss your use case](/contact)**
