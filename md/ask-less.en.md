---
title: Ask less. Decide with what actually matters.
description: Collect only the information each decision requires. Progressive resolution replaces "ask everything just in case".
locale: en
kicker: For customer-facing journeys
ctaLabel: Become a design partner
ctaHref: /pilot
---

Most customer-facing journeys collect information before knowing what the decision will actually need. The form asks everything a policy MIGHT require, at the cost of length, friction and abandonment. Only a fraction of the fields collected changes the outcome for any given customer.

**Knowledge inverts the pattern.** The caller sends the context it has, and Knowledge tells it what is still required to resolve the current decision. As the journey progresses, irrelevant policy branches fall away and only the fields that actually matter for this customer are requested.

## The screening questions

Two questions we ask early in a design-partner conversation :

- **What is the current completion rate of the journey, and where do most abandons happen?**
- **Of the fields you collect today, what percentage genuinely change the decision for a given customer?**

The first exposes the friction cost. The second exposes the collection waste. Both are addressable by the same mechanic.

## Two economic outcomes

| Outcome | What it means |
|---|---|
| **Lower friction** | Customers see only the fields the applicable policies actually need for their situation. Fewer irrelevant questions, less form fatigue, higher completion at the same policy strictness |
| **Faster time-to-decision** | No follow-up requests for information that turned out not to matter, no rework when a rule change makes yesterday's collection insufficient. The journey ends as soon as the policy can resolve |

The customer never sees Knowledge. They see fewer, more relevant questions.

## The mechanic

Every step of the journey is a `/resolve` call with the context collected so far :

1. The caller sends what it already knows.
2. Knowledge returns either the verdict (if the applicable policies can resolve with what is there), or `required_context` — the specific fields still needed.
3. The caller obtains those fields, then re-calls `/resolve`.
4. As context becomes more specific, policy branches that would have applied to other customer situations become irrelevant. The remaining `required_context` shrinks accordingly.

The dependency tree lives inside Knowledge. The caller never has to encode which fields are needed under which conditions.

## A concrete example : business account opening

A small-business customer starts opening an account. The onboarding UI knows only the jurisdiction so far.

**Call 1.**

```
context: { "jurisdiction": { value: "FR", source: "caller" } }
```

Knowledge responds :

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client_type",
      reason: "required by rul-kyb-fr-client-type",
      type: "enum",
      allowed_values: ["individual", "business"] }
  ] }
```

The UI asks : *individual or business ?* Customer answers business.

**Call 2.**

```
context: {
  ...,
  "client_type": { value: "business", source: "caller" }
}
```

Knowledge responds :

```
{ operation_status: "incomplete",
  required_context: [
    { field: "legal_form", ... },
    { field: "beneficial_ownership_structure", ... }
  ] }
```

Notice what did NOT come back : nothing about individual-onboarding paths (PEP checks calibrated for personal accounts, source-of-wealth for high-net-worth individuals, etc.). Those branches are no longer applicable, so their required fields are not requested.

**Call 3.** Customer provides SAS + simple ownership. The pool of applicable rules narrows further. Knowledge identifies only what those specific rules still require : beneficial owner identity.

The onboarding UI never asked about a shareholder pyramid because the policy for a SAS with simple ownership doesn't require it. A customer with a complex holding structure would have seen those questions instead.

## Required doesn't mean "ask the customer"

Knowledge identifies the context required for the decision. The caller decides where to get it.

| Where the context can come from |
|---|
| Already in the customer record, CRM or existing account |
| Returned by an existing verification, screening or credit-bureau provider |
| Extracted by an AI assistant from documents or a conversation |
| Retrieved from a public registry (companies register, sanctions list) |
| Genuinely unknown — ask the customer |

**Knowledge determines what the policy needs. The caller determines how to get it.** For most fields, asking the customer is the last resort, not the first.

## Where this applies

The same mechanic applies to any customer-facing journey that collects information before deciding :

| Journey | The information that is often collected too soon |
|---|---|
| **KYC / KYB onboarding** | Documents, ownership structure, source-of-funds — much of it not needed for this customer's actual admission decision |
| **Loan or credit application** | Full financials collected upfront when the policy could pre-qualify with a partial view |
| **Insurance application** (auto, home, life, professional) | Full underwriting questions asked when a simpler risk profile applies |
| **Account opening** (retail, business, brokerage) | Product-specific disclosures asked before the product mix is even chosen |
| **Merchant onboarding** (payments, marketplace) | Business documents required regardless of the merchant's category or volume |
| **Subscription eligibility** (regulated products, professional-only offers) | Suitability questions asked before the offer is even shown to the customer |
| **Patient enrollment / program eligibility** ([Healthcare](/healthcare)) | Full clinical questionnaires asked upfront when the program or authorization path only requires a subset for this patient |

The strongest fit is a journey where the equation **completion rate × customer value × marginal cost of each additional question × cost of a lost customer** is significant, and where the current form asks the same set of questions to customers whose decisions actually require different subsets.

## Deployment shape

Two adoption patterns fit customer-facing journeys (see [Works with your stack](/stack) for the full picture) :

| Pattern | Where Knowledge sits |
|---|---|
| **Primary** | The journey is built greenfield around `/resolve`. Each step calls Knowledge to determine what context the policy still requires. The journey decides whether to retrieve it from an existing source or ask the customer |
| **Overlay** | An existing form or funnel keeps running. Knowledge is called at each transition to determine whether the current context is enough to resolve, or whether the next field is genuinely needed. Fields the policy does not require can be hidden or skipped |

Both preserve the existing onboarding architecture (the UI, the funnel analytics, the vendors called for verification).

## What a design partner engagement looks like here

One bounded scope — a specific journey in a specific product line — modelled with your policy owners, run alongside the current onboarding for eight weeks. What we measure together at the end :

- **Field-reduction ratio** — how many fields the current form asks vs how many were actually needed to resolve the decisions in the sample.
- **Time-to-onboard delta** — median completion time on the new journey vs the current one.
- **Completion-rate lift** — customers who reach a decision vs current abandonment rate at each stage.
- **Follow-up requests avoided** — cases where the current process would have re-contacted the customer for a field the new one either fetched from a system or did not require at all.

See [Design partner](/pilot) for how the engagement is scoped.

## What comes next

| Read next | Why |
|---|---|
| [KYC / KYB](/kyc) | A concrete vertical where this pattern applies to admission decisions |
| [How Knowledge works](/how-it-works) | The `/resolve` contract behind the shrinking `required_context` |
| [Reviews & Approvals](/automate-approvals) | The internal-approval sibling of the same mechanic |
| [Design partner](/pilot) | Three founding slots, one production-relevant journey, founding-customer pricing |
