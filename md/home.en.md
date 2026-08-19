---
title: Asplenz Knowledge - the governed policy layer for your applications, workflows and AI agents
description: When compliance logic spreads across workflows, applications and spreadsheets, every policy change becomes harder to maintain, test and audit. Knowledge centralizes decision logic in one governed layer - without replacing your stack.
locale: en

hero:
  kicker: Policy layer for compliance decisions
  headline: When compliance logic spreads across workflows, applications and spreadsheets,
  headlineItalic: every policy change becomes harder to maintain, test and audit.
  sub: Knowledge centralizes that decision logic in one governed layer - without replacing your existing stack. Applications, workflows and AI agents can ask Knowledge what information is required and what decision applies.
  ctaPrimary: Book a 30-min conversation
  ctaPrimaryHref: /pilot
  ctaSecondary: See how it works
  ctaSecondaryHref: /how-it-works

problem:
  kicker: ""
  title: "Does this sound familiar ?"
  items:
    - A policy change means finding every workflow, application and spreadsheet where the logic was copied.
    - Your onboarding asks for information "just in case" - even when most of it never affects the decision.
    - Half of your review queue is cases a rule could have decided.
    - A regulator asks you to reproduce a decision from 18 months ago, and reconstructing the exact policy version takes weeks.
    - Your AI agent works - until Legal blocks it from taking action, because a probabilistic policy interpreter is not signable.

change:
  kicker: What Knowledge changes
  title: One governed policy layer. Many callers.
  sub: Your applications, workflows and AI agents send a context. Knowledge returns a deterministic verdict with the exact rule applied and a replayable audit trail.
  cards:
    - title: One policy, many callers
      desc: Web forms, mobile apps, back-office queues, BPM tools, AI agents - all consult the same source. Change once, propagates.
    - title: Deterministic verdicts
      desc: Same input, same output. Every decision cites the rule that fired. No LLM variance at the decision boundary.
    - title: Replayable audit
      desc: Every consultation is stored with a snapshot key that reconstructs the exact policy state, years later. Answering a regulator takes seconds, not weeks.
    - title: Progressive collection
      desc: Knowledge tells the caller what information is still needed for the current decision. No more asking "just in case".
  ctaLabel: Read how it works
  ctaHref: /how-it-works

stack:
  kicker: Works with your existing stack
  title: No rip-and-replace. Five modes to choose from.
  sub: Knowledge does not replace your workflow engine, your KYC vendor, your OMS or your legacy decision code. It inserts alongside them.
  cards:
    - question: Already have a decision engine ?
      mode: Gate or Overlay
      desc: Knowledge adds new rules or governs existing ones without changing what runs today. Blocking verdicts stop bad decisions pre-execution.
    - question: Want to validate first ?
      mode: Shadow
      desc: Knowledge computes verdicts in parallel with your existing system, discrepancies surface for review. Zero risk to production.
    - question: Launching a new domain ?
      mode: Selective routing
      desc: Knowledge handles the new flow, the rest stays on the legacy. No impact on today's flows, full control on the new one.
    - question: Building something new ?
      mode: Primary
      desc: Knowledge is the decision layer from day one. Install a vertical pack, calibrate the thresholds, working in weeks.
  ctaLabel: Read how Knowledge fits your stack
  ctaHref: /stack

proof:
  kicker: Vertical proof today
  title: Real decisions modelled and running.
  cards:
    - name: Wealth
      subtitle: Structured Products distribution
      desc: Product eligibility, client suitability, cross-border rules, portfolio concentration. Four policies, thirteen rules, working reference integration.
      ctaLabel: See the Wealth walkthrough
      ctaHref: /wealth
    - name: KYC / KYB
      subtitle: Onboarding decisions
      desc: Progressive collection, jurisdictional rules, PEP and sanctions gating, source-of-wealth documentation. Sits above your IDV vendor.
      ctaLabel: See the KYC walkthrough
      ctaHref: /kyc

pilot:
  kicker: Start small
  title: Start with one decision, not a transformation programme.
  desc: Pick one painful decision. Model it in Knowledge. Run it alongside your existing system. Measure the result. Decide whether to expand.
  ctaLabel: See how a pilot works
  ctaHref: /pilot
---

The structured content above powers the home page composition.
This body is intentionally minimal - every home section is data-driven.
