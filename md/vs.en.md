---
title: Knowledge vs a traditional rules engine
description: When Knowledge and a rules engine solve overlapping problems, and when they solve different ones. The specific properties Knowledge adds on top of rule evaluation.
locale: en
kicker: Positioning
ctaLabel: Become a design partner
ctaHref: /pilot
---

If you are building a new decision layer, the reasonable question is not "Knowledge or Camunda DMN or Drools or a home-grown engine?" — but "what does Knowledge do that a rules engine on its own does not?"

This page maps the boundary.

## What a rules engine gives you

Any credible rules engine (DMN engines, Drools, OpenRules, a well-built in-house engine) provides four things:

- **A rule model** — some structured way to express IF-THEN logic, decision tables, priority.
- **An evaluator** — takes a fact set, returns an outcome.
- **Versioning of the rules themselves** — you can tell what rule was active at what time.
- **Logs of evaluations** — a record that a rule fired against a case.

For a wide range of automation problems this is enough. If your callers already know exactly what facts to send, and the outcome is a self-contained decision that no one has to reproduce years later, a rules engine is the right tool.

## Where Knowledge adds properties on top

Knowledge is built for the class of decisions where the four points above are necessary but not sufficient. Four properties Knowledge provides that a plain rules engine does not:

### 1. The caller does not encode the dependency tree

With a rules engine, the caller must know which facts to send. If the applicable rules change, every caller has to be updated to send the newly required facts.

Knowledge inverts that. The caller sends the context it has. Knowledge returns either the verdict or **`required_context`** — the fields the applicable policies still need. As policies evolve, callers keep working without change because the dependency tree lives inside Knowledge, not inside each caller.

For onboarding, agent flows and multi-step decisions, this eliminates a class of coupling that rules engines leave in place.

### 2. Facts carry provenance

In a rules engine, a fact is a value. In Knowledge, a fact is a value plus its provenance:

```
{ "value": "verified",
  "source": "IDV_vendor",
  "verification_status": "verified",
  "confidence": 0.94 }
```

Rules can require a minimum verification status or restrict acceptable sources. That means a rule can express "identity must be verified by a KYC vendor, not asserted by the user" declaratively, rather than as caller-side plumbing.

For AI-driven flows where the same fact can come from an LLM extraction, a system of record or the user directly, this distinction is what separates a probabilistic input from a signed one.

### 3. The normative state is captured, not just the log

A rules engine records "rule X fired on case Y at time T". That log tells you what happened at the moment. It does not necessarily let you reproduce the exact decision months later, once the rules, precedence, overrides and scope configuration have all evolved.

Knowledge writes a Consultation that pins the exact **RuleVersion** identifiers, the **dominating rule**, the **precedence trace**, the **resolved targets**, the **scope used**, and a **`normative_hash`** covering the whole normative state. Given a `consultation_id`, the decision can be reconstructed exactly — not "the rule text at fire time" but the whole state that produced the outcome. See [Governance](/governance) for the full picture.

### 4. One policy interface, many callers

A rules engine typically lives inside one system (a workflow, an application, an agent). Knowledge is designed to be called by many: web forms, mobile apps, back-office systems, workflows, AI agents. The same policy layer answers the same question the same way regardless of the caller.

This matters when a firm has more than one channel executing the same decision. It removes the drift that appears when the same rule has to be re-implemented per caller.

## When a rules engine is the right choice

Use a rules engine (Camunda DMN, Drools, a home-grown one) when:

- The decision is self-contained inside one system.
- The caller can enumerate the required facts up front.
- You do not need to reproduce the exact evaluated state months later, only the rule text.
- Provenance of facts is not part of the decision.

You do not need Knowledge for these. Adding it would be over-engineering.

## When Knowledge is the right choice

Reach for Knowledge when at least one of these applies:

- **Multiple callers** — the same decision is asked from more than one surface (application, workflow, agent, form, back-office queue), and you do not want each of them to reimplement the policy.
- **Progressive decisions** — the caller starts with partial context and needs to know what to obtain next, ideally without hard-coding the dependency tree.
- **Governed audit** — decisions must be reproducible in full state (rules, overrides, precedence, scope) years after they were made.
- **AI agents** — a probabilistic agent needs a deterministic policy boundary to call before executing.
- **Provenance-sensitive rules** — the rule outcome depends on how a fact was obtained (verified vs asserted, vendor vs LLM extraction).

Any one of the five is enough to move the decision to Knowledge. The other four come along at no extra cost.

## Can they coexist?

Yes, and this is often the pragmatic path. An existing rules engine keeps handling its scope; Knowledge governs a new policy domain, a specific control, or a decision extending beyond what the engine was designed for. See [Your stack](/stack) for the five adoption patterns (Overlay, Gate, Shadow, Selective routing, Primary) and how they combine.

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The `/resolve` contract behind the four properties above |
| [Governance](/governance) | What "normative state" contains and how replay reconstructs a historical decision |
| [Your stack](/stack) | The five patterns for adopting Knowledge alongside an existing rules engine |
| [Design partner](/pilot) | Three founding slots, one production-relevant decision, founding-customer pricing |
