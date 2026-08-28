---
title: Let onboarding agents collect what they need. Keep the admission decision deterministic.
description: AI-driven onboarding changes how customer information can be collected. An agent can search internal systems, call verification providers and ask the customer only when necessary. Knowledge determines what the applicable policy requires and whether the resulting case can proceed, without replacing your IDV, screening or workflow stack.
locale: en
kicker: Knowledge for KYC / KYB
ctaLabel: Discuss your use case
ctaHref: /contact
---

Customer admission is being reshaped by AI-driven investigation. An onboarding agent can search internal systems, call verification providers, extract facts from documents, and ask the customer only when nothing else is available. That flexibility is powerful. It also raises a policy question :

> **The agent can gather information. Who decides whether the resulting case can be admitted ?**

Knowledge separates the two. The agent determines *how* to collect what a case needs. Knowledge determines *what* the policy requires and whether the case can proceed.

## KYC isn't one thing

Onboarding is often described as "KYC" as if it were a single product category. It is a stack of layers, each typically owned by a different tool.

| Layer | What it does | Typically owned by |
|---|---|---|
| **Collect** | What the customer needs to provide (which fields, which documents, in what order) | Onboarding UI or agent |
| **Verify** | That what they provided is valid (identity, address, screening, PEP, sanctions) | IDV vendor, screening vendor |
| **Decide** | Whether to admit them (verification result + firm rules + jurisdictional policy + product policy + commercial policy + exceptions) | Firm's admission policy |
| **Orchestrate** | The flow (retries, escalations, callbacks, SLAs) | Workflow tool, BPM |

Knowledge sits on **Decide**. The other three layers stay in the tools already good at them.

## The admission decision Knowledge can own

The Decide layer is where the composite happens. Multiple inputs combine into one determination : *do we admit this customer for this relationship or product ?*

| Input | What it contributes to the admission decision |
|---|---|
| **Identity verification** (IDV vendor) | The person or entity is who they claim to be |
| **Screening** (sanctions, PEP) | Restricted-party check |
| **Product eligibility** | The product the customer is applying for fits their profile |
| **Jurisdiction** | Rules that apply given the customer's country and the firm's regulatory footprint |
| **Commercial policy** | Firm-specific rules on acceptable customers |
| **Risk appetite** | Firm's tolerance thresholds and escalation rules |
| **Exceptions** | Case-specific approvals or overrides |

Together they resolve to one determination : **admit, review, or block**. That composite is often a decision no single existing tool owns end-to-end. It is what Knowledge can hold.

## Let the policy drive the investigation

Progressive Context makes the admission decision an active loop rather than a static form. The caller (an agent, an onboarding platform, a workflow node) sends what it has. Knowledge determines what the applicable rules still require. The caller acquires it and re-consults. The loop converges to a decision.

A KYB admission for a French business customer :

**Round 1.** The caller sends `jurisdiction: FR`. Knowledge asks for `client_type` (individual or business).

**Round 2.** The caller adds `client_type: business`. Knowledge now asks for `legal_form` and `beneficial_ownership_structure`.

**Round 3.** The caller retrieves `legal_form: SAS` and `beneficial_ownership_structure: simple` from the company registry. Several policy branches that would have applied to individuals or to complex ownership structures are now irrelevant. Knowledge asks for `beneficial_owner_identity` with `source_requirement: verified`.

**Round 4.** The IDV vendor verifies. The screening vendor returns `pep_match: false`. The caller re-consults.

**Result.** `allowed`. Cited rule : `rul-kyb-fr-sas-simple-owner-verified`. Signed authorization issued for account opening.

The caller does not encode the complete dependency tree. As context arrives, Knowledge determines which policy branches remain relevant and which additional information is actually required. See [Progressive context](/product/progressive-context) for the mechanism.

## Knowledge determines what. Your stack determines how.

Knowledge identifies the context the applicable rules need. The caller (agent, application, workflow) decides where to get it.

| Required context | Typical source |
|---|---|
| Customer country | Existing customer record, CRM |
| PEP status | Screening vendor, sanctions API |
| Business activity | Extract from documents, or ask the customer |
| Existing relationship | Core banking or account system |
| Identity verification | IDV vendor |
| Beneficial owner structure | Company registry, articles of incorporation |

**Your onboarding system decides how to collect information. It does not need to know why the policy requires it.**

When an agent is on the caller side, the same separation gets sharper : the agent reasons about the cheapest, fastest or least intrusive way to obtain each requested field. Knowledge does not judge that choice. It only cares whether the value satisfies the policy once it arrives.

## What Knowledge can be in your KYC stack

Two shapes cover most KYC / KYB deployments.

| Shape | How it works |
|---|---|
| **Knowledge as the admission decision authority** | For a given onboarding flow, Knowledge determines allow / review / block from the collected verification results and firm policies. The onboarding platform acts on the outcome. |
| **Knowledge as a complement to what you already run** | For decisions the existing platform already produces, Knowledge can add a governed layer for specific cases : a firm-specific exception rule, a jurisdiction overlay, an approval workflow, an audit surface. |

KYC engagements often use both shapes at once.

## Insertion patterns

Onboarding stacks vary considerably. Common shapes :

| Setup | Where Knowledge sits |
|---|---|
| **IDV vendor owns verify + workflow ; the firm owns admission** | Knowledge exposes the admission decision to the onboarding journey. Consulted progressively as context is collected and again when verification results become available. |
| **Compliance platform owns verification + workflow + admission rules end-to-end** | Knowledge does not fit at the KYC layer. Possible entry above : the composite admission that combines KYC verdict + product eligibility + jurisdictional matrix + commercial exceptions, a determination the compliance platform typically does not carry. |
| **IDV vendor is verification-only ; the firm's platform owns collection + orchestration + decision** | Knowledge governs the decision. Your platform continues to own the UI and orchestration. |
| **Custom legacy admission logic accumulated over years** | Knowledge sits as an overlay, adds new rules or governs existing ones without touching the legacy code. Shadow mode is common : validate parity before Knowledge holds authority. |

## Make the admission decision enforceable

A policy decision on its own is advisory. For the account-opening action itself, Knowledge can issue signed authorization bound to the exact admission the policy resolved. The account-opening API or workflow node verifies the signature and refuses if the operation does not match what the policy authorized.

See [Enforcement](/product/enforcement) for the model.

## Reconstruct why a customer was admitted

Every consultation writes a Consultation record that freezes the applicable rule versions, the precedence trace, the overrides in force, and the exact context that was resolved. When a regulator asks *"why was this customer admitted on 2026-03-15 ?"* the answer is a business-view of the frozen state at decision time, not an approximation stitched together from logs.

See [Auditability](/product/auditability) for the mechanism.

## Start with one admission decision

Pick one admission decision your onboarding stack currently makes, or one your new onboarding agent needs to make, where the policy authority should live outside the model. Run it in shadow mode against the current process. Cut over when parity and audit meet your bar.

**[Discuss your use case](/contact)** &nbsp; · &nbsp; **[See pricing](/pricing)**

## Related

| Read next | Why |
|---|---|
| [For AI product teams](/solutions/by-role/ai-product-teams) | The team building the onboarding agent |
| [For compliance officers](/solutions/by-role/compliance-officers) | The compliance-side angle : rule ownership, audit, approvals |
| [Progressive context](/product/progressive-context) | The `/resolve` loop the onboarding caller navigates |
| [Enforcement](/product/enforcement) | Signed verdicts and PEP for the account-opening boundary |
| [Auditability](/product/auditability) | Consultation record, RuleVersion, precedence trace |
