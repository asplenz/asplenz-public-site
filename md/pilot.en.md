---
title: Start with one decision, not a transformation.
description: A Knowledge pilot models one painful decision, runs it alongside your existing system for 4–8 weeks, and measures the result against agreed criteria. Small ticket, small scope, real evidence before commit.
locale: en
kicker: How we start
ctaLabel: Book a scoping call
ctaHref: mailto:contact@asplenz.com
---

Buying Knowledge does not mean committing to a multi-year platform migration. Every early customer starts with a pilot - one decision, one scope, 4-8 weeks, measurable outcome. Expand only if the numbers justify it.

## The pilot in five steps

**1. Pick one painful decision.**
The one that gets escalated most, or the one that a new rule is about to require, or the one where audit prep is a nightmare. One decision. Not a domain, not a product line - one specific decision the compliance officer would rewrite tomorrow if they could.

**2. Model it in Knowledge.**
We work with your team to model the decision : the scope schema (which fields matter), the rules (with your existing thresholds), the audit shape. If a vertical pack already covers it (Wealth structured products, KYC onboarding), we install the pack and calibrate. If not, we author the rules from your current logic.

**3. Run it alongside your existing system.**
Shadow mode : every real decision your existing system makes is also computed by Knowledge in parallel. No impact on production. Verdicts are compared, discrepancies logged. Alternatively : gate mode on a subset of traffic, if you're comfortable with a controlled live deployment.

**4. Define measurable success criteria upfront.**
Before the pilot starts, we agree on the numbers that would justify expansion. Typical criteria :

| Criterion | What it measures |
|---|---|
| **Decision agreement** | Knowledge and your existing system agree on X% of cases. Discrepancies traced to (a) Knowledge missing a rule, (b) legacy bug, or (c) legitimate ambiguity |
| **Manual review reduction** | For cases Knowledge marks as complete deterministic verdicts, what % could bypass current manual review ? |
| **Implementation / change effort** | Time from "compliance asks for a new rule" to "rule live in Knowledge" vs same delay in your existing system |
| **Required-context accuracy** | For onboarding-style flows, does Knowledge's progressive collection ask fewer questions than your current form ? |
| **Audit reproducibility** | Can Knowledge reconstruct a specific decision from the pilot period with the exact rule state ? (Yes by design ; measurement is against how long your current system would take) |

**5. Decide whether to expand.**
If the numbers hit the criteria, expand : more decisions, more callers, more of your stack routing through Knowledge. If they don't, the pilot ends cleanly - we've cost you a few weeks of scoped work, no ongoing commitment.

## What we ask from you

| What | Detail |
|---|---|
| **A named business owner** | Who cares about the decision being piloted - typically the compliance officer, the head of a business line, or the head of AI product depending on the pain |
| **A named technical contact** | Who can plumb Knowledge into the caller (BPM, service, agent, form). We do most of the work but need one internal ally |
| **Access to a real decision stream** | Either historical (replay against last month's cases) or live (shadow mode on production traffic) |
| **Success criteria** | The numbers you'd want to measure, agreed before the pilot starts |

## What we provide

| What | Detail |
|---|---|
| **Working Knowledge instance** | Deployed in your environment (SaaS, VPC, or on-premise depending on your requirements) |
| **Pack installation and calibration** | If the pilot decision is covered by an existing vertical pack, we install and calibrate ; otherwise we author the rules with your compliance team |
| **Integration support** | Plumbing Knowledge into your caller (BPM, service, agent, form) |
| **Weekly review meetings** | Walk through discrepancies, adjust rules, tune the success criteria if needed |
| **Final report** | Measured against the agreed criteria, with a recommendation on expansion scope |

## Pricing

Pilot pricing is scoped per engagement. We work with you upfront to define the scope, the success criteria, and the price - no surprises. Ballpark : a pilot on a single decision runs in the low five-figure range, with a clean exit if the criteria are not met.

Book a scoping call to discuss your specific pain and get a scoped proposal.

[[cta]Book a scoping call](mailto:contact@asplenz.com)
