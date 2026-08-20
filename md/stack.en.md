---
title: Works with your existing stack
description: Add governed policy where you need it. Keep the systems that already work.
locale: en
kicker: Five adoption patterns
ctaLabel: Become a design partner
ctaHref: /pilot
---

Knowledge coexists with your workflow engine, verification providers, OMS and existing decision logic. Governed policy can be added around the parts that need it without replacing what already runs.

**These patterns are not mutually exclusive.** A deployment can use Overlay for one policy domain, Gate for a specific action boundary, Shadow for a scope still being validated and Primary for a new business unit, all at the same time. They are building blocks that combine and evolve, not five fixed architectures.

---

**Already have a decision engine ? Good. Keep it.** A custom rules engine, decision code embedded in your OMS, a legacy admission system — you can add new rules, govern additional policies, or produce a governed decision trace around it without replacing what already runs.

## Overlay : Add governed policy around the existing decision

Keep the existing decision as an input. Knowledge evaluates additional policies, exceptions or controls around it and produces its own governed decision trace. Useful when replacing the legacy logic would carry disproportionate regression, certification or migration risk.

## Gate : Require a Knowledge verdict before selected actions

Keep the existing decision path, but require a Knowledge verdict before a selected action can proceed. Knowledge governs a defined set of policies or controls ; a blocking verdict prevents execution. The underlying system remains in place.

Both patterns preserve the existing decision implementation. Integration is limited to introducing Knowledge at the appropriate decision boundary rather than migrating the legacy policy logic upfront.

---

## Shadow : Validate before granting authority

You want Knowledge to evaluate production-relevant cases in parallel with your existing decision layer, without controlling the live outcome.

**Knowledge has no authority over the production outcome.** Its verdict is computed but does not control what actually happens. The comparison answers two practical questions :

- Where do Knowledge and the existing system agree ?
- Where they disagree, what explains the difference - missing policy coverage, different interpretation, incomplete context, or an issue in the existing implementation ?

Once the comparison is understood and the confidence is high enough, Knowledge can transition to Gate, Overlay, Selective Routing or Primary for the scope in question.

---

## Selective routing : Move some decisions, not the whole estate

You have an existing system that handles today's flows. Route a clearly bounded scope to Knowledge - a new product, jurisdiction, customer segment, policy domain or channel - while existing decisions remain on the legacy system.

Same tenant, same customers, same downstream systems. Only the decisions in the selected scope come from Knowledge. No impact on today's flows, full control on the scoped one, rollback available if needed.

Selective routing is often the most sellable pattern because it turns a potentially large migration into a bounded, measurable scope.

---

## Primary : Build a new decision layer from scratch

Greenfield. A new product line, a new business unit, a new customer-facing surface where no decision layer exists yet. Knowledge is the decision layer from day one.

Primary is the cleanest architecture because there is no legacy decision layer to migrate. Where a relevant policy pack exists, it provides a starting model that the firm's policy owners can calibrate rather than starting from an empty ruleset.

---

## The patterns can evolve

A deployment often moves through more than one pattern over its life :

- **Shadow → Selective routing → Primary** for a scope you initially validate in parallel, then take live for a bounded segment, then extend.
- **Overlay + Gate** side by side, one governing additional policies around the legacy, another controlling execution of specific actions.
- **Legacy + Overlay indefinitely** when the underlying engine is stable and the governed policy layer is what needs to keep evolving.

The right pattern for a scope today is not necessarily the right pattern six months later. Knowledge is designed to be re-scoped without re-engineering.

## An AI agent in front of the legacy

An AI agent operating in an existing environment often needs Knowledge without touching the legacy at all. It calls the CRM, calls the legacy core for the current state, and calls `/resolve` for the governed policy decision before executing. The legacy remains the system of record ; Knowledge governs the decision boundary in front of it.

This is a specific case of the patterns above (typically Gate or Selective routing at the agent level), not a sixth mode. See [AI agents](/ai-agents) for the full pattern.

## Adoption pattern matrix

| Your situation | Pattern | Knowledge authority | Existing decision logic |
|---|---|---|---|
| Add governed policy around the legacy | **Overlay** | Additional policy layer | Preserved |
| Prevent selected actions unless policy allows | **Gate** | Veto at selected boundary | Preserved |
| Compare before granting authority | **Shadow** | None | Authoritative |
| Move one bounded scope first | **Selective routing** | Authoritative for selected scope | Authoritative elsewhere |
| New decision domain | **Primary** | Authoritative | None / not used |

## What stays in place

| What stays in place | How Knowledge coexists |
|---|---|
| **Your workflow engine** | Your workflow continues to orchestrate the process ; it calls Knowledge at the decision points you choose |
| **Your verification providers** | Verification providers continue to verify identity and screening signals. Knowledge can consume those results as context when the policy requires them |
| **Your OMS** | Your OMS remains the system responsible for order management and execution. Knowledge can be consulted at selected policy decision boundaries |
| **Legacy core systems** | Legacy systems remain in place. Knowledge can govern selected policies around them without requiring their decision logic to be migrated upfront |

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The mental model behind these patterns |
| [Wealth](/wealth) | An example where Knowledge governs structured-product decisions inside an existing wealth stack |
| [KYC / KYB](/kyc) | An example where Knowledge governs the admission decision around an existing verification stack |
| [AI agents](/ai-agents) | A specific case where Knowledge sits in front of the legacy for agent-driven flows |
| [Design partner](/pilot) | Three founding slots, one production-relevant decision, founding-customer pricing |
