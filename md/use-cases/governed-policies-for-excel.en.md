---
title: Keep Excel. Move critical policy out of the spreadsheet.
description: When business, risk or compliance policies are implemented directly in spreadsheet formulas or macros, every workbook can become its own copy of the policy. Knowledge lets Excel use governed policy decisions while teams keep working in the spreadsheets they already use.
locale: en
kicker: Governed policies for Excel
ctaLabel: Discuss your use case
ctaHref: /contact
---

Business teams rely on spreadsheets for calculations, analysis and workflows. That is not the problem.

The problem starts when a spreadsheet also becomes the authority for a business, risk or compliance policy.

A threshold is embedded in a formula. An eligibility rule lives in VBA. An approval requirement is copied across several workbooks.

When the policy changes, which spreadsheets contain it ? Have they all been updated ? And months later, can you prove which version produced a particular decision ?

Knowledge moves selected policies out of the spreadsheet and gives them their own governed lifecycle — while users continue working in Excel.

## The propagation problem

A policy can quickly become many local implementations.

```
                 Company policy
                       |
          +------------+------------+
          |            |            |
          v            v            v
       Excel A      Excel B      Excel C

       > EUR 500k   > EUR 500k   > EUR 500k
       formula      VBA          formula
```

When that policy changes :

- Where is it implemented ?
- Have all copies been updated ?
- Who approved the new rule ?
- When did it become effective ?
- Which version applied to a past decision ?

The policy has its own lifecycle : ownership, approval, versions, effective dates, exceptions and decision history.

Knowledge makes that lifecycle explicit.

## Use governed policy decisions directly from Excel

The spreadsheet provides the facts of the case. Knowledge determines which policy and rules apply and returns the governed decision.

```
Structured Product Suitability

Client        Retail
Product       Structured Note
Amount        EUR 450,000

--------------------------------

APPROVAL REQUIRED

Rule          LARGE_NOTIONAL
Rule version  v18
Effective     28 Aug 2026
Consultation  cns-abc123
```

The user gets the result in Excel, alongside the work they are already doing.

The policy itself lives in Knowledge.

## Change the policy once. Not every spreadsheet.

Suppose three workbooks rely on the same suitability policy :

- a trade-suitability workbook
- a client-review workbook
- an exception-monitoring workbook

The current policy says :

```
SUITABILITY.LARGE_NOTIONAL

Retail client
Structured product
Amount > EUR 500,000

-> APPROVAL REQUIRED
```

Compliance approves a change.

```
v17                 v18

EUR 500,000   ->    EUR 400,000
                    APPROVED
                    Effective 28 Aug 2026
```

Knowledge records the new version and its effective date.

The workbooks continue consulting Knowledge :

```
                      Knowledge
                         v18
                          |
              +-----------+-----------+
              |           |           |
              v           v           v
           Excel A     Excel B     Excel C
```

No local threshold needs to be redistributed across those workbooks.

Each workbook consults the same effective policy instead of maintaining its own copy of the rule.

## Know which policy produced the decision

The audit question is not only :

**What does the policy say today ?**

It is also :

**What policy applied when this decision was made ?**

Consider a transaction from 14 March 2025 :

```
Client        Retail
Product       Structured Product
Amount        EUR 450,000

Decision      ALLOWED
```

Knowledge records the policy state behind that decision :

```
Policy        Structured Product Suitability
Rule          LARGE_NOTIONAL
Rule version  v17
Threshold     EUR 500,000
Effective at  14 March 2025
Consultation  cns-91827
```

Under today's policy, the same case produces :

```
Decision      APPROVAL REQUIRED
Rule version  v18
Threshold     EUR 400,000
Effective     28 Aug 2026
```

Two different decisions, both correct — because each is tied to the rule version that applied at that time.

## What belongs in Knowledge ?

Not every formula or business rule in a spreadsheet should move to Knowledge.

A useful test is :

> **Would this rule still exist if this spreadsheet did not ?**

| Logic | Candidate for Knowledge ? |
|---|---|
| Calculate duration from cash flows | No — spreadsheet calculation |
| Highlight an incomplete cell | No — workbook behavior |
| Retail structured-product transactions above EUR 500k require compliance review | Yes — organizational policy |

The test identifies a candidate, not a mandatory move.

Knowledge is most relevant when a rule represents organizational policy and needs its own approval, versioning, effective dates or historical audit trail.

Everything else can stay where it is.

## Keep working in Excel

Knowledge does not require business teams to replace their spreadsheets or move calculations and analysis into a new application.

Excel remains the working environment.

Selected business, risk and compliance policies are evaluated through Knowledge, with their governance and decision history maintained independently.

Enterprise integrations can be adapted to existing authentication, network and deployment requirements.

## Discuss your use case

Are business, risk or compliance rules embedded in critical spreadsheets today ?

When one of those policies changes, can you identify where it is applied — and prove which version produced a decision months later ?

**[Discuss your use case](/contact)**
