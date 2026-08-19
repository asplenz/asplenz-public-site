---
title: KYC / KYB - governing the decision layer, not replacing IDV
description: Knowledge sits above your identity verification vendor. It holds the composite admission decision - verification result, business rules, jurisdictional policy, firm-specific requirements. Progressive collection replaces "ask for everything just in case".
locale: en
kicker: Vertical proof - KYC / KYB
ctaLabel: Book a scoping call
ctaHref: /pilot
---

Onboarding is often described as "KYC" as if it were one thing. It is not. It's a stack.

| Layer | What it does |
|---|---|
| **Collect** | What the customer needs to provide (which fields, which documents, in what order) |
| **Verify** | That what they provided is valid (identity, address, screening, PEP, sanctions) |
| **Decide** | Whether to admit them (verification result + firm rules + jurisdictional policy + product policy + commercial policy + exceptions) |
| **Orchestrate** | The flow (retries, escalations, callbacks, SLAs) |

Your IDV vendor does an excellent job on **verify**. Some also cover parts of **collect** and **orchestrate**. Very few own **decide** - the composite admission logic that combines verification result with your firm's policies. That composite typically lives in code, in workflow gateways, or in scattered exception spreadsheets.

Knowledge sits in the **decide** box.

## What Knowledge does for onboarding

**Governs the composite admission decision.** Combines your vendor's verification result with your firm's policies (product eligibility, jurisdictional restrictions, commercial rules, exception matrices). Returns one deterministic verdict with cited rules.

**Enables progressive collection.** The engine tells your onboarding UI what field is needed next for the current decision - not everything a form designer pre-decided "just in case". Your onboarding asks for information that actually affects this specific customer's decision path.

**Replays every decision.** Regulator asks about an admission from 2 years ago. One query reconstructs the exact policy state, cited rule, and verification result at that moment.

## What Knowledge does NOT do

| Not that | Why |
|---|---|
| **Not IDV** | Knowledge does not verify identity, run OCR on documents, check faces, screen sanctions lists, or check PEP databases. Your existing vendor is better at that |
| **Not the verification workflow** | Knowledge does not orchestrate the retries and callbacks between your UI and the IDV vendor. Your workflow tool (or IDV vendor's built-in workflow) handles that |
| **Not a KYC RFP replacement** | If your issue is choosing between IDV vendors, Knowledge is not that decision - pick your IDV vendor for its verification quality |

## Where Knowledge fits in a typical KYC stack

Depending on what your existing vendor already owns, Knowledge inserts in different ways.

| Your current setup | Where Knowledge sits |
|---|---|
| **IDV vendor owns verify + workflow, you own admission** | Knowledge holds the admission decision as a REST endpoint your onboarding UI calls after the IDV vendor returns. Progressive collection asks for the next field based on the current partial verdict |
| **Compliance platform owns verification + workflow + rules end-to-end** | Knowledge does not fit at the KYC layer. Possible entry above : the composite admission that combines KYC verdict + product eligibility + jurisdictional matrix + commercial exceptions - a decision the compliance platform doesn't own |
| **IDV vendor is verification-only, your platform owns collection + orchestration + decision** | Knowledge holds the collect + decide boxes ; your platform continues to own the UI and orchestration |
| **Custom legacy admission logic patched over years** | Knowledge sits as an overlay, adds new rules or governs existing ones without touching the legacy code. Shadow-first is common - validate parity before going primary |

[Read the full stack-fit analysis](/stack)

## The progressive collection pattern

Traditional forms ask for everything up front. Knowledge inverts this : the caller sends the minimal context it has, Knowledge returns `required_context` telling it what's next.

Simplified flow :

```
1. Customer starts onboarding - jurisdiction: FR
   Caller sends {jurisdiction: FR} to /resolve
   Knowledge returns : required_context = [client_type]

2. Caller asks the customer : are you an individual or a business ?
   Customer answers : business
   Caller sends {jurisdiction: FR, client_type: business}
   Knowledge returns : required_context = [beneficial_owner_structure, revenue_band]

3. And so on, until Knowledge returns a complete verdict.
```

Each customer sees only the fields that matter for THEIR situation. Fewer questions, higher completion rate, and - critically - no "why do I need to provide this" support ticket because we asked "just in case".

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The mental model, the API contract, the audit surface |
| [Works with your stack](/stack) | How Knowledge fits IDV vendors, compliance platforms, custom builds and BPM tools |
| [AI agents](/ai-agents) | For AI-driven onboarding assistants that need to consult a deterministic policy source |
| [Pilot](/pilot) | Model one admission decision, run it in shadow for 4-8 weeks against your existing logic |
