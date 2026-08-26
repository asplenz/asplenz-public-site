---
title: Wealth - one governed policy layer for structured-product distribution
description: Product eligibility. Client suitability. Cross-border distribution. Concentration limits. One governed layer that your OMS, RM applications, compliance systems and AI copilots consult, with cryptographic proof at the tool boundary.
locale: en
kicker: Knowledge for Wealth
ctaLabel: Become a design partner
ctaHref: /pilot
---

Structured-product distribution is a composite decision. Product eligibility (retail vs accredited, complexity band, K&E level), suitability (risk tolerance, loss capacity, investment objectives), cross-border rules (RM location vs client residence, solicited vs reverse enquiry), and concentration (single name, underlying class, aggregate SP allocation) all mix in every offer.

When these decisions are implemented across OMS logic, workflows, compliance tools and spreadsheets, every product launch, new jurisdiction or policy change requires coordinating changes across multiple systems. Knowledge holds the composite decision in one governed policy layer that every caller consults, and returns a signed verdict the tool boundary can enforce.

## What Knowledge does for a wealth manager

**One policy layer, many decision points.** Whether eligibility is checked by the OMS at trade time, by a mobile RM application before an offer, by an AI copilot during a client conversation, or by Compliance during a review, each caller consults the same governed policy layer.

**Cryptographic proof at every consultation.** Every `/check` and `/resolve` returns a JWS ES256 envelope binding the exact `{actor, action, resource, parameters}` that were authorized. A downstream Policy Enforcement Point (an OMS pre-trade gate, a governed refund tool, an MCP proxy in front of an RM copilot) verifies the signature and refuses on binding mismatch. See [Enforcement](/product/enforcement).

**Four policy templates, thirteen example rules.**

| Policy | What it governs |
|---|---|
| **Product eligibility** | Retail vs highly-complex product, large notional retail approval, target-market alignment |
| **Client suitability** | K&E gate on complex products, risk-tolerance mismatch escalation, documented reverse-enquiry allow |
| **Cross-border distribution** | Solicited outreach into restricted jurisdictions blocked, booking-centre mismatch above threshold escalates |
| **Portfolio concentration** | Single-name post-trade above a threshold escalates, above a higher threshold blocks, aggregate SP allocation caps on conservative mandates |

The pack provides a working decision model with illustrative thresholds. Firm-specific thresholds, restricted jurisdictions, classifications and approval requirements are calibrated against the institution's own policies.

## Four decisions modelled in the pack

An RM copilot or an OMS asks Knowledge one of four questions.

| Question asked | What Knowledge returns |
|---|---|
| **Can I offer this product to this client?** | Blocks retail on highly-complex products ; requires approval on large notionals |
| **Is this trade suitable for this client?** | Gates complex products against K&E levels ; escalates risk-tolerance mismatches |
| **Cross-border: can I solicit this client from this location?** | Blocks solicited outreach into restricted jurisdictions ; allows documented reverse enquiries |
| **Portfolio concentration: is this trade within limits?** | Escalates single-name concentration above the escalation threshold ; blocks above the block threshold |

Each verdict identifies the rules that determined the outcome, freezes the exact rule versions used, and returns a signed envelope citing them.

## Progressive context : the copilot does not need the whole decision tree

Traditional rules engines require every caller to know the exact fields needed for every decision. Knowledge inverts that : the caller sends the context it has, and Knowledge identifies what context is still required to reach a verdict.

An RM copilot asking whether a structured note can be proposed to a client :

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

The copilot does not need to encode which question comes next. Knowledge derives the required context from the policies that become applicable as the case is resolved. See [Progressive context](/product/progressive-context).

## Compliance owns the rules. Engineering does not gate them.

Every threshold, every jurisdiction list, every K&E gate lives in the Knowledge back-office UI as a structured `{scope, condition, severity}` object. Compliance edits it directly. The next consultation uses the new value. Prior consultations still point at the exact rule text of their day, via immutable `RuleVersion` records. See [Auditability](/product/auditability).

## What the pack ships

| Component | What it is |
|---|---|
| **Scope schema** | The vocabulary the decision layer uses (product complexity, risk rating, client experience level, solicitation type, booking centre, RM location, post-trade exposure) |
| **Four policy templates + thirteen example rules** | A working decision model with illustrative thresholds, ready for the institution's compliance team to calibrate |
| **Reference integration** | A working script showing an RM copilot calling `/resolve` for the four modelled decisions |
| **Operator playbook** | The runbook to install, calibrate and rehearse the pack |

## What the bank owns, what Asplenz ships

Asplenz ships the ontology and the rule patterns with illustrative thresholds. The bank's compliance function owns the interpretation of every threshold - what "large notional" means at this firm, which jurisdictions are restricted, which risk-tolerance mismatch triggers escalation.

**Knowledge evaluates the institution's encoded policy ; it does not replace the institution's regulatory judgement or execute the resulting business action.** The pack does not ship regulatory interpretation ; it gives the bank a working shape to calibrate.

## Deployment options

The wealth pack inserts into an existing wealth stack in one of several ways.

| Insertion point | How it works |
|---|---|
| **Existing eligibility engine** (Overlay) | Existing eligibility results become part of the context evaluated by Knowledge. Add a new policy domain, jurisdiction or control without migrating the underlying engine |
| **Behind the OMS** (Gate) | The OMS calls Knowledge before routing an order. Blocking verdicts stop bad trades pre-execution |
| **Alongside a legacy engine** (Shadow) | Knowledge evaluates the same cases in parallel without controlling the production decision. Compare outcomes before giving it authority |
| **New product line or new market** (Selective routing) | The existing decision layer handles today's flows ; Knowledge handles the new flow, with no impact on today's decisions |
| **Greenfield decision layer** (Primary) | No legacy to work around. Knowledge is the decision layer from day one, typical for a new business unit or a greenfield surface |

## What comes next

| Read next | Why |
|---|---|
| [Enforcement](/product/enforcement) | Signed verdicts, PEP, four-actor trust chain |
| [Auditability](/product/auditability) | Regulator questions in one query : Consultation, RuleVersion, precedence trace |
| [For AI product teams](/solutions/by-role/ai-product-teams) | The RM copilot angle : agent-side integration |
| [For compliance officers](/solutions/by-role/compliance-officers) | The compliance-side angle : rule ownership, coverage, approvals |
| [Design partner](/pilot) | Three founding slots, one production-relevant decision, founding-customer pricing |
