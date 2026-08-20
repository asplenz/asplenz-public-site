---
title: Asplenz Knowledge - the governed policy layer for your applications, workflows and AI agents
description: When compliance logic is scattered across your stack, every change becomes harder to control. Knowledge brings decision logic into one governed policy layer, without replacing what already runs.
locale: en

hero:
  kicker: Policy layer for compliance decisions
  headline: When compliance logic is scattered across your stack,
  headlineItalic: every change becomes harder to control.
  sub: Knowledge brings decision logic into one governed policy layer, without replacing your existing stack. Applications, workflows and AI agents provide the context they have. Knowledge determines what the policy requires, what is still needed to reach a verdict, and what decision applies.
  ctaPrimary: Become a design partner
  ctaPrimaryHref: /pilot
  ctaSecondary: See how it works
  ctaSecondaryHref: /how-it-works

problem:
  kicker: ""
  title: "Does this sound familiar?"
  items:
    - A policy change means finding every workflow, application and spreadsheet where the logic was copied.
    - Your onboarding asks for information "just in case" - even when most of it never affects the decision.
    - Cases that could be resolved deterministically still end up in manual review.
    - A regulator asks you to reproduce a decision from 18 months ago, and reconstructing the exact policy version takes weeks.
    - Your AI agent works - until Legal asks how you guarantee which policy it will apply before taking action.

transition:
  text: "Different symptoms. Same underlying problem: the policy that determines a decision is coupled to the systems that collect information, orchestrate the process or execute the action."

change:
  kicker: What Knowledge changes
  title: One governed policy layer. Many callers.
  sub: Your applications, workflows and AI agents send a context. Knowledge returns a deterministic verdict with the rules that determined it and a replayable audit trail.
  cards:
    - title: One layer, many callers
      desc: Web forms, mobile apps, back-office systems, workflows and AI agents can all consult the same governed policy layer. Policy logic no longer has to be reimplemented by every caller.
    - title: Deterministic verdicts
      desc: Same context, same policy state, same decision. Each verdict identifies the rules that determined it. No LLM variance at the decision boundary.
    - title: Replayable audit
      desc: Each consultation records the normative policy state behind the decision, so historical decisions can be traced back to the rules and policy state that produced them.
    - title: Progressive collection
      desc: Knowledge determines what additional context is required to reach the current decision - so callers don't need to collect information merely "just in case".
  ctaLabel: Read how it works
  ctaHref: /how-it-works

stack:
  kicker: Works with your existing stack
  title: No rip-and-replace. Five modes to choose from.
  sub: Knowledge does not replace your workflow engine, your KYC vendor, your OMS or your legacy decision code. It inserts alongside them.
  cards:
    - question: Already have a decision engine?
      mode: Overlay
      desc: Feed existing decisions and context into Knowledge to apply additional governed policy without replacing the underlying engine.
    - question: Need to enforce a new control?
      mode: Gate
      desc: Put Knowledge before execution for a selected decision or policy. The existing system remains in place; Knowledge governs whether the action can proceed.
    - question: Want to validate first?
      mode: Shadow
      desc: Knowledge evaluates the same cases in parallel without controlling the production decision. Compare outcomes before giving it authority.
    - question: Launching a new domain?
      mode: Selective routing
      desc: Knowledge handles the new flow, the rest stays on the legacy. No impact on today's flows, full control on the new one.
    - question: Building something new?
      mode: Primary
      desc: Knowledge is the decision layer from day one. Install a vertical pack, calibrate the thresholds, working in weeks.
  ctaLabel: Read how Knowledge fits your stack
  ctaHref: /stack

proof:
  kicker: Built for real decision domains
  title: See Knowledge applied to concrete compliance decisions.
  cards:
    - name: Wealth
      subtitle: Structured Products distribution
      desc: Product eligibility, client suitability, cross-border rules, portfolio concentration. Four policies, thirteen rules and a working reference integration.
      ctaLabel: See the Wealth walkthrough
      ctaHref: /wealth
    - name: KYC / KYB
      subtitle: Onboarding decisions
      desc: Progressive information requirements, jurisdictional rules, PEP and sanctions outcomes, source-of-wealth requirements and escalation decisions - while keeping existing identity and verification providers in place.
      ctaLabel: See the KYC walkthrough
      ctaHref: /kyc

pilot:
  kicker: The founding cohort
  title: Bring us one decision to solve. Founding status comes with it.
  desc: Bring one decision that is difficult to change, automate or audit today. Knowledge runs against success criteria agreed upfront, in an adoption pattern that fits your existing stack. Founding-customer pricing, direct product influence, clean exit if the numbers don't land. Three engagements in the founding cohort.
  ctaLabel: See the design-partner engagement
  ctaHref: /pilot
---

The structured content above powers the home page composition.
This body is intentionally minimal - every home section is data-driven.
