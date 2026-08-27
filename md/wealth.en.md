---
title: Let AI-powered wealth workflows investigate suitability. Keep distribution policy outside the model.
description: When AI capabilities behind your wealth applications help determine whether a structured product can be proposed to a client, they may need product, client, portfolio and jurisdiction context. Knowledge lets them gather that context progressively while deterministic policy determines what is allowed, blocked or requires human approval.
locale: en
kicker: Knowledge for Wealth
ctaLabel: Explore a design partnership
ctaHref: /pilot
---

## The new decision boundary an AI-powered wealth workflow introduces

An RM is in their workstation, in the middle of a client conversation. They select a structured note candidate and click **"Check suitability"**.

Before agents, that button either called a fixed suitability engine or triggered a manual desk review. The determination was owned end-to-end by a single system or a human process.

With an AI service participating behind the button, the determination now gets built by the model. It fetches product data, reads the client profile, extracts facts from the conversation and the case file, and constructs the composite view : product eligibility, suitability, cross-border, concentration.

The RM sees a native application result.

| Outcome | What the workstation shows |
|---|---|
| **Suitable** | Client meets the applicable requirements. |
| **Additional information required** | Please obtain updated K&E level for this product complexity. |
| **Compliance review required** | Booking-centre mismatch with jurisdiction ; escalate to Compliance. |

They do not need to know an agent ran behind the workstation. The workstation, the CRM, the order-entry UI stay exactly as they are.

The question is not *how do we centralize every wealth rule*. It is :

> **Now that an AI capability behind the workstation participates in this determination, where does the policy authority live ?**

Knowledge separates the two. The AI service investigates, gathers context, prepares the case. Knowledge determines what the AI capability is allowed to conclude before the workstation surfaces the outcome.

## What Knowledge can be in your stack

Two shapes cover most Wealth deployments.

| Shape | How it works |
|---|---|
| **Knowledge as the decision authority** | For a given workflow, Knowledge owns the policy determination end-to-end. The AI service asks Knowledge, gets a deterministic verdict, the workstation acts on it. |
| **Knowledge as a complement to what you already run** | For decisions an existing engine already produces, Knowledge can add a governed layer on top : an extra check on high-risk operations, an approval workflow, or an audit surface, without replacing the underlying engine. |

Wealth engagements often use both shapes at once.

## The composite decision the AI capability navigates

Four dimensions typically shape the *"can we propose this ?"* determination.

| Dimension | What it contributes to the decision |
|---|---|
| **Product** | Eligibility (retail vs highly-complex, target-market alignment, notional bands) |
| **Client** | Suitability (K&E level, risk tolerance, loss capacity, investment objectives) |
| **Cross-border** | Jurisdictional rules (solicitation type, booking centre vs client residence) |
| **Portfolio** | Concentration and exposure limits (single-name, aggregate SP allocation) |

Each of the four inputs may already have its own system of record : product master, CRM, suitability engine, portfolio engine, jurisdictional data. Knowledge does not replace them. It reads what they hold, applies the wealth policy that governs the composite, and returns a deterministic decision the workstation can act on.

## Progressive context : the AI service investigates as policy asks

This is the operational shape that makes wealth interesting for an AI capability sitting behind a workstation.

The AI service does not need to fetch 47 fields up front. It starts with what it has ; Knowledge tells it what the applicable rules still need ; the service acquires each field (CRM lookup, portfolio call, LLM extraction from the case file, question surfaced back through the workstation), re-consults, iterates until a decision is reached.

**Step 1.** The AI service calls `/resolve` with what it already has (asset class, product type).

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

**Step 2.** The service fetches classification from the CRM and infers solicitation type from the case context, then re-calls `/resolve`.

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.knowledge_experience_level",
      reason: "required by rul-sp-elig-complex-ke-gate",
      type: "enum",
      allowed_values: ["insufficient", "sufficient"] }
  ] }
```

**Step 3.** The service fetches K&E level from the client dossier, then re-calls `/resolve`.

```
{ operation_status: "complete",
  verdict: "approval_required",
  cited_rules: ["rul-sp-elig-highly-complex-retail-notional",
                "rul-sp-crossborder-solicited-restricted"],
  signed_verdict: "eyJhbGciOiJFUzI1NiIsInR5cCI6ImdvdmVybmVkK2p3cyIsImtpZCI6...",
  consultation_id: "cns-..." }
```

The service does not encode which question comes next. Policy tells it. When compliance amends a rule and it starts requiring a new field, the next `/resolve` learns to fetch it, and only the fetcher needs to be added on the workstation-backend side. See [Progressive context](/product/progressive-context).

## Four questions the AI capability should not answer from model judgment alone

Beyond the composite *"can we propose this ?"* decision, there are four related determinations the AI service may need. Each is a case where the deterministic policy authority should sit outside the model.

| Question | What policy determines |
|---|---|
| **Can we offer this product to this client ?** | Retail vs highly-complex product, large-notional retail approval, target-market alignment |
| **Is this trade suitable for this client ?** | K&E gate on complex products, risk-tolerance mismatch escalation, documented reverse-enquiry allow |
| **Cross-border : can we solicit this client from this location ?** | Solicited outreach into restricted jurisdictions blocked, booking-centre mismatch above threshold escalates |
| **Portfolio concentration : is this trade within limits ?** | Single-name post-trade escalation and block thresholds, aggregate SP allocation caps on conservative mandates |

If your OMS or pre-trade engine already owns any of these decisions end-to-end, keep it there. Where the AI capability introduces a new boundary the existing systems do not cleanly cover, Knowledge governs it.

## Compliance owns the policies delegated to Knowledge

Policies governing the AI capability's decision boundary can be versioned, approved and evolved independently of the AI service. Rules that remain owned by existing systems stay there.

Where Knowledge holds a rule, it lives in the back-office UI as a business-view object : scope (jurisdiction, asset class, client segment), conditions and thresholds, severity (allow / require approval / block / absolute ban), effective dates, rationale, approver. Compliance amends the threshold ; the next `/resolve` uses the new value. Prior consultations still point at the exact rule of their day, via immutable RuleVersion. See [Auditability](/product/auditability).

## Insertion patterns

A wealth engagement typically inserts Knowledge in one of four ways.

| Pattern | How it works |
|---|---|
| **Existing decision keeps its authority** | If an OMS, pre-trade engine or suitability engine already owns a decision, Knowledge does not sit in that path. |
| **Overlay** | Existing eligibility or suitability results become part of the context Knowledge evaluates. Add a new policy domain, jurisdiction or agent-driven decision without migrating the underlying engine. |
| **Shadow** | Knowledge evaluates the composite decision in parallel with the existing process. Compare outcomes for a defined window before giving Knowledge authority. |
| **New decision boundary** | The workstation's *"can we propose this ?"* determination runs on Knowledge from day one. Existing engines remain the authority for the flows they already own. |

## Wealth decision pack

For a design-partner engagement, Asplenz ships a working starting point Compliance can calibrate against the firm's own policies :

| Component | What it is |
|---|---|
| **Scope schema** | The vocabulary the decision layer uses : product complexity, risk rating, client experience level, solicitation type, booking centre, RM location, post-trade exposure |
| **Four policy templates + example rules** | A working decision model with illustrative thresholds, ready for calibration |
| **Reference AI-service integration** | A working script showing the service behind a wealth workflow calling `/resolve` progressively through the composite decision |
| **Calibration playbook** | The runbook Compliance and the engineering team use to install, calibrate and rehearse |

**Knowledge evaluates the institution's encoded policy. It does not replace the institution's regulatory judgment or execute the resulting business action.** The pack does not ship regulatory interpretation ; it gives the bank a working shape to calibrate.

## Start with one workstation decision

Pick one decision your AI service behind the workstation needs to make that is currently governed by human interpretation, fragmented procedures or custom agent logic. Run it in shadow mode against the current process. Cut over when parity and audit are proven.

**[Explore a design partnership](/pilot)** &nbsp; · &nbsp; **[Talk to us](/contact)**

## Related

| Read next | Why |
|---|---|
| [For AI product teams](/solutions/by-role/ai-product-teams) | The team building the AI capability behind the workstation |
| [For compliance officers](/solutions/by-role/compliance-officers) | The compliance-side angle : rule ownership, coverage, approvals |
| [Progressive context](/product/progressive-context) | The `/resolve` loop the AI service navigates |
| [Enforcement](/product/enforcement) | Signed verdicts, PEP, four-actor trust chain |
| [Auditability](/product/auditability) | Regulator questions : Consultation, RuleVersion, precedence trace |
