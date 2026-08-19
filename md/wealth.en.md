---
title: Wealth - governing structured-product distribution
description: Product eligibility. Client suitability. Cross-border rules. Concentration limits. All held in one governed layer that your OMS, mobile app and RM copilot consult.
locale: en
kicker: Vertical proof - Wealth
ctaLabel: Book a scoping call
ctaHref: /pilot
---

Structured product distribution is a composite decision. Product eligibility (retail vs accredited, complexity band, K&E level), suitability (risk tolerance, loss capacity, investment objectives), cross-border rules (RM location vs client residence, solicited vs reverse enquiry), and concentration (single name, underlying class, aggregate SP allocation) - all mix in every offer.

Today that composite lives in a mix of code, workflows and spreadsheets. Every product launch, every new jurisdiction, every regulatory update means finding and updating the logic in multiple places.

## What Knowledge does for a wealth manager

Knowledge holds the composite decision in one governed layer. Your OMS, your mobile RM app, your compliance dashboard and any AI copilot all consult the same source.

**One decision, many callers.** The same "can I offer this product to this client" question, asked from the OMS at trade time, from the mobile app pre-trade, from the RM copilot mid-conversation, and from the compliance dashboard for audit - one policy source answers all four.

**Four seeded policies, thirteen rules.**

| Policy | What it governs |
|---|---|
| **Product eligibility** | Retail vs highly-complex product, large notional retail approval, target-market alignment |
| **Client suitability** | K&E gate on complex products, risk-tolerance mismatch escalation, documented reverse-enquiry allow |
| **Cross-border distribution** | Solicited outreach into restricted jurisdictions blocked, booking-centre mismatch above threshold escalates |
| **Portfolio concentration** | Single-name post-trade above 30% escalates, above 50% blocks, aggregate SP allocation caps on conservative mandates |

Each threshold is a pattern shipped with a realistic default. The bank's compliance officer calibrates the exact value against firm policy.

## The four canonical decisions

An RM copilot or an OMS asks Knowledge one of four questions.

| Question asked | Verdict Knowledge returns |
|---|---|
| **Can I offer this product to this client ?** | Blocks retail on highly-complex products ; requires approval on large notionals |
| **Is this trade suitable for this client ?** | Gates complex products against K&E levels ; escalates risk-tolerance mismatches |
| **Cross-border : can I solicit this client from this location ?** | Blocks solicited outreach into restricted jurisdictions ; allows documented reverse enquiries |
| **Portfolio concentration : is this trade within limits ?** | Escalates single-name concentration above 30% ; blocks above 50% |

Each verdict comes with the cited rule and a replayable audit key.

## What the pack ships

| Component | What it is |
|---|---|
| **Scope schema** | The vocabulary the decision layer uses (product complexity, risk rating, client experience level, solicitation type, booking centre, RM location, post-trade exposure) |
| **Four policies + thirteen rules** | Realistic default thresholds, ready for the bank's compliance officer to calibrate |
| **Reference integration** | A working script showing an RM copilot calling `/resolve` for the four canonical decisions |
| **Operator playbook** | The runbook to install, calibrate and rehearse the pack |

## What the bank owns, what Asplenz ships

Asplenz ships the ontology and the pattern rules with realistic defaults. The bank's compliance function owns the interpretation of every threshold - what does "large notional" mean at this firm, which jurisdictions are restricted, which risk-tolerance mismatch triggers escalation. The pack does not ship regulatory interpretation ; it gives the bank a working shape to calibrate.

## Deployment options

The wealth pack inserts into an existing wealth stack in one of several ways.

| Insertion point | How it works |
|---|---|
| **Behind the OMS** (gate) | The OMS calls Knowledge before routing an order. Blocking verdicts stop bad trades pre-execution |
| **Alongside a legacy engine** (shadow → selective routing) | Knowledge runs in shadow, discrepancies surface for review, then transitions to primary for the SP scope only |
| **Greenfield decision layer** (primary) | For a new product line or new market entry - no legacy to work around |

[Read how Knowledge fits your stack](/stack)

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The mental model, the API contract, the audit surface |
| [AI agents](/ai-agents) | How an RM copilot or trading agent calls Knowledge as a tool |
| [Pilot](/pilot) | Run one of the four decisions in shadow for 4-8 weeks, measure decision agreement against your existing logic |
