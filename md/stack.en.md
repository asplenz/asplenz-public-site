---
title: Works with your existing stack
description: No rip-and-replace. Knowledge inserts alongside what you have - as a gate, an overlay, a shadow validator, a selective router, or the primary decision layer for new domains.
locale: en
kicker: Five adoption modes
ctaLabel: Discuss which mode fits you
ctaHref: /pilot
---

Knowledge does not replace your workflow engine, your KYC vendor, your OMS or your legacy decision code. It inserts alongside them, in one of five patterns. Pick the mode that matches where you are today.

---

## Already have a decision engine ? - Gate or Overlay

You have something running today. Alloy, a custom rules engine, decision code embedded in your OMS, a legacy admission system. It works, but you need to add new rules, govern existing ones, or add audit - without displacing what runs.

**Gate.** Knowledge sits between the caller and the existing system. Requests hit Knowledge first ; blocking verdicts stop the flow pre-execution. Non-blocking flows pass through to the existing system unchanged. New rules are added in Knowledge without touching the legacy.

**Overlay.** Knowledge sits after the existing decision. The legacy computes its verdict ; Knowledge can add compliance rules, produce audit trails, or govern exceptions on top. Overlay is common when the legacy is untouchable (regression risk, tribal knowledge, re-certification cost).

Both patterns are **additive** - no change to the code that runs today.

---

## Want to validate first ? - Shadow

You want Knowledge to run alongside your existing decision layer for a period, without affecting live traffic. Every call goes to both systems. Verdicts are compared. Discrepancies surface for review.

This is how risk-averse organisations onboard a new decision layer. After 4-8 weeks of parallel run, the discrepancies analysis tells you two things :
- Where Knowledge and the existing system agree (typically 80-95% on stable domains)
- Where they diverge - and which one is right (surprisingly often, the divergences surface pre-existing bugs in the legacy)

Once the discrepancies are understood and the confidence is high enough, Knowledge shifts from shadow to gate or primary.

---

## Launching a new domain ? - Selective routing

You have an existing system that handles today's flows. But a new product line, a new market entry, a new customer segment requires decisions the existing system was not designed for.

Selective routing directs the new flow to Knowledge while leaving the rest of the system on the legacy. Same tenant, same customers, same OMS - but the new flow's decisions come from Knowledge.

This is a low-risk way to introduce Knowledge : no impact on today's flows, full control on the new one, easy rollback if needed.

---

## Building something new ? - Primary

Greenfield. A new product, a new startup, a new business unit, a new customer-facing surface where nothing exists yet. Knowledge is the decision layer from day one.

Primary is the simplest pattern because there's no legacy to work around. It's also where the pack model shines : install a vertical pack (Wealth, KYC, whatever ships next), calibrate the thresholds, and you have a working decision layer in weeks.

---

## The five patterns at a glance

| Your situation | Pattern | Risk profile | Typical timeline |
|---|---|---|---|
| Legacy engine untouchable, need to add rules | Overlay | Low | 4-8 weeks |
| Legacy engine touchable, want to gate live | Gate | Low-medium | 6-10 weeks |
| Want zero-risk validation before commit | Shadow | Very low | 4-8 weeks shadow, then transition |
| New market / new product line | Selective routing | Low | 6-12 weeks |
| Greenfield build | Primary | N/A (no legacy) | 4-8 weeks |

## What Knowledge does NOT require

| What stays in place | How Knowledge coexists |
|---|---|
| **Your workflow engine** | Knowledge is called from workflow tasks. No replacement of Camunda, Signavio, Appian, Pega |
| **Your IDV vendor** | Knowledge is called after the verification result. No vendor swap |
| **Your OMS** | Knowledge is called from the OMS at the decision point. No OMS replacement |
| **Your legacy core** | Knowledge sits as an overlay or a gate. No mainframe rewrite |

Every deployment pattern is additive. Your existing systems keep running. Knowledge adds a governed layer where you need it.

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The mental model behind these patterns |
| [Wealth](/wealth) | An example where Knowledge sits as a gate behind an OMS |
| [KYC / KYB](/kyc) | An example where Knowledge overlays or replaces the admission-decision box in a KYC stack |
| [AI agents](/ai-agents) | A specific case of primary or gate for agent-driven flows |
| [Pilot](/pilot) | How a shadow-run pilot is scoped and measured |
