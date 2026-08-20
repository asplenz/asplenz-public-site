---
title: KYC / KYB - govern the admission decision without replacing your verification stack
description: Knowledge governs the admission policies around your existing verification stack. It determines what the policy requires; your applications, agents and vendors determine how to get it.
locale: en
kicker: Knowledge for KYC / KYB
ctaLabel: Become a design partner
ctaHref: /pilot
---

Onboarding is often described as "KYC" as if it were one thing. It is not. It's a stack.

| Layer | What it does |
|---|---|
| **Collect** | What the customer needs to provide (which fields, which documents, in what order) |
| **Verify** | That what they provided is valid (identity, address, screening, PEP, sanctions) |
| **Decide** | Whether to admit them (verification result + firm rules + jurisdictional policy + product policy + commercial policy + exceptions) |
| **Orchestrate** | The flow (retries, escalations, callbacks, SLAs) |

Your verification or compliance platform may already cover parts of all four layers. The boundary becomes interesting when the admission decision depends on policies that extend beyond the vendor's own verification domain - jurisdiction, product eligibility, risk appetite, commercial policy or firm-specific exceptions.

**Knowledge governs that decision layer.**

## What Knowledge does for onboarding

**Governs the composite admission decision.** Combines your vendor's verification result with your firm's policies (product eligibility, jurisdictional restrictions, commercial rules, exception matrices). Returns a deterministic verdict identifying the rules that determined it.

**Determines what context is required.** As the case is resolved, Knowledge tells the onboarding caller what information is still needed for the current decision, rather than encoding every possible information requirement upfront.

**Preserves the decision context.** Each consultation records the policy state and rules behind the outcome, providing a reproducible trail for later review.

## What Knowledge does NOT do

| Not that | Why |
|---|---|
| **Not IDV** | Knowledge does not verify identity, run OCR on documents, check faces, screen sanctions lists, or check PEP databases. Your existing vendor is better at that |
| **Not the verification workflow** | Knowledge does not orchestrate the retries and callbacks between your UI and the IDV vendor. Your workflow tool (or IDV vendor's built-in workflow) handles that |
| **Not the collection surface** | Knowledge governs the information requirements behind collection and the decision itself; your application or agent remains responsible for collecting the information |
| **Not a KYC RFP replacement** | If your issue is choosing between IDV vendors, Knowledge is not that decision. Pick your IDV vendor for its verification quality |

## Knowledge determines what the policy needs. Your existing stack determines how to get it.

Traditional onboarding encodes every possible information requirement upfront, then hides fields with conditional logic. Knowledge inverts that: the caller sends what it has, and Knowledge tells it what is still required for the applicable policies to resolve.

A KYB admission for a business customer, unfolded:

**Step 1.** The caller starts with the little it knows.

```
context: {
  "jurisdiction": { value: "FR", source: "caller" }
}
```

Knowledge responds:

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client_type",
      reason: "required by rul-kyb-fr-client-type",
      type: "enum",
      allowed_values: ["individual", "business"] }
  ] }
```

**Step 2.** The customer is a company. The caller re-calls `/resolve`.

```
context: {
  ...,
  "client_type": { value: "business", source: "caller" }
}
```

Knowledge responds:

```
{ operation_status: "incomplete",
  required_context: [
    { field: "legal_form",
      reason: "required by rul-kyb-fr-business",
      type: "enum",
      allowed_values: ["SAS", "SARL", "SA", "..."] },
    { field: "beneficial_ownership_structure",
      reason: "required by rul-kyb-fr-business",
      type: "enum",
      allowed_values: ["simple", "complex"] }
  ] }
```

**Step 3.** The caller adds legal form and beneficial ownership. Several policy branches that would have applied to individuals or to complex ownership structures are now irrelevant.

```
context: {
  ...,
  "legal_form": { value: "SAS", source: "company_registry" },
  "beneficial_ownership_structure": { value: "simple", source: "company_registry" }
}
```

Knowledge responds:

```
{ operation_status: "incomplete",
  required_context: [
    { field: "beneficial_owner_identity",
      reason: "required by rul-kyb-fr-sas-simple-owner",
      type: "string",
      source_requirement: "verified" }
  ] }
```

**Step 4.** The identity verification provider returns its result. The caller re-calls `/resolve`.

```
context: {
  ...,
  "beneficial_owner_identity": {
    value: "verified", source: "IDV_vendor", verification_status: "verified"
  },
  "pep_match": { value: false, source: "screening_vendor" }
}
```

Knowledge responds:

```
{ operation_status: "complete",
  verdict: "allowed",
  cited_rules: ["rul-kyb-fr-sas-simple-owner-verified"],
  consultation_id: "cns-..." }
```

The caller does not need to encode the complete dependency tree. As context arrives, Knowledge determines which policy branches remain relevant and which additional information is actually required to resolve the decision.

## Required doesn't mean "ask the customer"

Knowledge identifies the context required for the decision. The caller decides where to get it.

| Required context | Typical source |
|---|---|
| Customer country | Existing customer record, CRM |
| PEP status | Screening vendor, sanctions API |
| Business activity | Ask the customer, extract from documents |
| Existing relationship | Core banking or account system |
| Identity verification | IDV vendor |

**Your onboarding system should decide how to collect information. It shouldn't have to know why the policy requires it.**

## What this changes for AI-driven onboarding

An onboarding agent (chat, voice, in-app) calls Knowledge as a tool. As `required_context` arrives, the agent decides whether to fetch it from an internal system, call a verification vendor, or ask the customer directly.

The agent chooses **how** to collect information. Knowledge determines **what** the policy needs. This is the guardrail that lets a probabilistic agent take actions on top of a deterministic policy.

## Where Knowledge fits in a typical KYC stack

Depending on what your existing stack already owns, Knowledge inserts in different ways.

| Your current setup | Where Knowledge sits |
|---|---|
| **IDV vendor owns verify + workflow, you own admission** | Knowledge exposes the admission decision to the onboarding journey. It can be consulted progressively as context is collected and again when verification results become available |
| **Compliance platform owns verification + workflow + rules end-to-end** | Knowledge does not fit at the KYC layer. Possible entry above: the composite admission that combines KYC verdict + product eligibility + jurisdictional matrix + commercial exceptions - a decision the compliance platform doesn't own |
| **IDV vendor is verification-only, your platform owns collection + orchestration + decision** | Knowledge governs the decision; your platform continues to own the UI and orchestration |
| **Custom legacy admission logic patched over years** | Knowledge sits as an overlay, adds new rules or governs existing ones without touching the legacy code. Shadow-first is common - validate parity before going primary |

[Read the full stack-fit analysis](/stack)

## Progressive resolution: what to measure

For processes where significant information is currently collected "just in case", the ability to request information only when it becomes relevant creates an opportunity to reduce unnecessary collection and follow-up requests. The impact on completion rate and time-to-onboard is measured during a design-partner engagement, alongside decision agreement and audit reconstruction time.

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The mental model, the API contract, the audit surface |
| [Works with your stack](/stack) | How Knowledge fits IDV vendors, compliance platforms, custom builds and BPM tools |
| [AI agents](/ai-agents) | For AI-driven onboarding assistants that need to consult a deterministic policy source |
| [Design partner](/pilot) | Three founding slots, one production-relevant decision, founding-customer pricing |
