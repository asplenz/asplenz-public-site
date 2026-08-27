---
title: Let RM copilots investigate opportunities. Keep suitability and distribution policy outside the model.
description: When an AI copilot helps determine whether a structured product can be proposed to a client, it may need product, client, portfolio and jurisdiction context. Knowledge lets the copilot gather that context progressively while deterministic policy determines what is allowed, blocked or requires human approval.
locale: en
kicker: Knowledge for Wealth
ctaLabel: Explore a design partnership
ctaHref: /pilot
---

## The new decision boundary a wealth-management copilot introduces

An RM asks the AI copilot :

> *"Could we show the client this autocall ?"*

Before agents, the RM would open a distribution memo, check a matrix, look at the portfolio, mentally combine target-market alignment with client classification and cross-border rules, and either propose the product or escalate.

With an AI copilot participating, that determination gets built by the model. Product eligibility, suitability, cross-border, and concentration are still governed by policy. But the copilot is now navigating them itself.

The question is not *how do we centralize every wealth rule*. It is :

> **Now that the copilot participates in this determination, where does the policy authority live ?**

Knowledge separates the two. The copilot investigates, gathers context, prepares the proposal. Knowledge determines what the copilot is allowed to conclude.

## Already have eligibility and suitability engines ? Keep them.

Knowledge does not require moving every Wealth rule into a new platform. Existing eligibility, suitability, OMS and compliance services can remain authoritative where they already own a decision cleanly.

**Knowledge becomes useful where the new copilot creates a decision boundary that does not already exist as a single callable business capability.** The composite *"can I propose this specific product to this specific client, given the current context ?"* is often that boundary. It combines product, client, portfolio and jurisdiction information in a way that no single existing engine may hold end-to-end.

## The composite decision the copilot navigates

```
                    PRODUCT
                  eligibility
                       |
CLIENT --- suitability +----- CROSS-BORDER
                       |      solicitation, booking centre
                       |
                  PORTFOLIO
                 concentration
                       |
                       v

           CAN THE RM PROPOSE THIS ?
```

Each of the four inputs may already have its own system of record : product master, CRM, suitability engine, portfolio engine, jurisdictional data. Knowledge does not replace them. It reads what they hold, applies the wealth policy that governs the composite, and returns a deterministic decision the copilot and the RM can act on.

## Progressive context : the copilot investigates as policy asks

This is the operational shape that makes wealth interesting for an agent copilot.

The copilot does not need to fetch 47 fields up front. It starts with what it has ; Knowledge tells it what the applicable rules still need ; the copilot acquires each field (CRM lookup, portfolio call, LLM extraction from the RM conversation, question to the RM), re-consults, iterates until a decision is reached.

**Step 1.** The copilot calls `/resolve` with what it already has (asset class, product type).

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.classification",
      reason: "required by rul-sp-elig-highly-complex",
      type: "enum",
      allowed_values: ["retail", "professional", "accredited"] },
    { field: "solicitation.type",
      reason: "required by rul-sp-crossborder-solicited",
      type: "enum",
      allowed_values: ["solicited", "reverse_enquiry"] }
  ] }
```

**Step 2.** The copilot fetches classification from the CRM and infers solicitation type from the RM conversation, then re-calls `/resolve`.

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.knowledge_experience_level",
      reason: "required by rul-sp-elig-complex-ke-gate",
      type: "enum",
      allowed_values: ["insufficient", "sufficient"] }
  ] }
```

**Step 3.** The copilot fetches K&E level from the client dossier, then re-calls `/resolve`.

```
{ operation_status: "complete",
  verdict: "approval_required",
  cited_rules: ["rul-sp-elig-highly-complex-retail-notional",
                "rul-sp-crossborder-solicited-restricted"],
  signed_verdict: "eyJhbGciOiJFUzI1NiIsInR5cCI6ImdvdmVybmVkK2p3cyIsImtpZCI6...",
  consultation_id: "cns-..." }
```

The copilot does not encode which question comes next. Policy tells it. When compliance amends a rule and it starts requiring a new field, the copilot's next `/resolve` learns to fetch it. See [Progressive context](/product/progressive-context).

## Four questions the copilot should not answer from model judgment alone

Beyond the composite *"can I propose this ?"* decision, there are four related determinations the copilot may need. Each is a case where the deterministic policy authority should sit outside the model.

| Question | What policy determines |
|---|---|
| **Can I offer this product to this client ?** | Retail vs highly-complex product, large-notional retail approval, target-market alignment |
| **Is this trade suitable for this client ?** | K&E gate on complex products, risk-tolerance mismatch escalation, documented reverse-enquiry allow |
| **Cross-border : can I solicit this client from this location ?** | Solicited outreach into restricted jurisdictions blocked, booking-centre mismatch above threshold escalates |
| **Portfolio concentration : is this trade within limits ?** | Single-name post-trade escalation and block thresholds, aggregate SP allocation caps on conservative mandates |

If your OMS or pre-trade engine already owns any of these decisions end-to-end, keep it there. Where the copilot introduces a new boundary the existing systems do not cleanly cover, Knowledge governs it.

## Compliance owns the policies delegated to Knowledge

Policies governing the copilot's decision boundary can be versioned, approved and evolved independently of the copilot. Rules that remain owned by existing systems stay there.

Where Knowledge holds a rule, it lives in the back-office UI as a business-view object : scope (jurisdiction, asset class, client segment), conditions and thresholds, severity (allow / require approval / block / absolute ban), effective dates, rationale, approver. Compliance amends the threshold ; the next `/resolve` uses the new value. Prior consultations still point at the exact rule of their day, via immutable RuleVersion. See [Auditability](/product/auditability).

## Start without replacing what already works

A wealth engagement typically inserts Knowledge in one of four ways.

| Insertion point | How it works |
|---|---|
| **Existing decision keeps its authority** | If OMS, pre-trade engine or suitability engine already owns a decision cleanly, no change. Knowledge does not sit in that path. |
| **Overlay** | Existing eligibility or suitability results become part of the context Knowledge evaluates. Add a new policy domain, jurisdiction or agent-driven decision without migrating the underlying engine. |
| **Shadow** | Knowledge evaluates the copilot's composite decision in parallel with the existing process. Compare outcomes for a defined window before giving Knowledge authority. |
| **New decision boundary** | The copilot's *"can I propose this ?"* decision runs on Knowledge from day one. Existing engines remain the authority for the flows they already own. |

Knowledge is not a migration project.

## Wealth decision pack

For a design-partner engagement, Asplenz ships a working starting point Compliance can calibrate against the firm's own policies :

| Component | What it is |
|---|---|
| **Scope schema** | The vocabulary the decision layer uses : product complexity, risk rating, client experience level, solicitation type, booking centre, RM location, post-trade exposure |
| **Four policy templates + example rules** | A working decision model with illustrative thresholds, ready for calibration |
| **Reference RM-copilot integration** | A working script showing the copilot calling `/resolve` progressively through the composite decision |
| **Calibration playbook** | The runbook Compliance and the engineering team use to install, calibrate and rehearse |

**Knowledge evaluates the institution's encoded policy. It does not replace the institution's regulatory judgment or execute the resulting business action.** The pack does not ship regulatory interpretation ; it gives the bank a working shape to calibrate.

## Start with one RM decision

Pick one decision your RM copilot needs to make that is currently governed by human interpretation, fragmented procedures or custom agent logic. Run it in shadow mode against the current process. Cut over when parity and audit are proven.

**[Explore a design partnership](/pilot)** &nbsp; · &nbsp; **[Talk to us](/contact)**

## Related

| Read next | Why |
|---|---|
| [For AI product teams](/solutions/by-role/ai-product-teams) | The RM copilot angle : agent-side integration |
| [For compliance officers](/solutions/by-role/compliance-officers) | The compliance-side angle : rule ownership, coverage, approvals |
| [Progressive context](/product/progressive-context) | The `/resolve` loop the copilot navigates |
| [Enforcement](/product/enforcement) | Signed verdicts, PEP, four-actor trust chain |
| [Auditability](/product/auditability) | Regulator questions : Consultation, RuleVersion, precedence trace |
