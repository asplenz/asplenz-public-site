---
title: Explain a decision using the policy that existed when it was made
description: Rules change. Exceptions expire. Precedence evolves. Knowledge preserves the normative state behind each decision so compliance and audit teams can reconstruct exactly what applied, what won, and why.
locale: en
kicker: Product - Auditability
---

## When compliance asks about a decision from 18 months ago

A customer was rejected 18 months ago. Compliance, internal audit or a regulator asks the question every organization eventually faces :

> *Why was this customer rejected ?*

The decision log answers with what happened at the operational layer :

```
decision   = REJECTED
rule       = R-182
timestamp  = 2025-02-14T09:12:00Z
```

The natural next step is to look up rule R-182. But R-182 may have been modified several times since 2025-02-14. And overrides may have been in force at that moment that are no longer visible today, or overrides may be active now that were not in force at the time.

What the current view of R-182 shows is not necessarily what the decision was actually based on.

And R-182 may not even have been the winning rule. Several rules likely applied simultaneously :

```
R-182  →  ALLOW
R-431  →  REVIEW
R-817  →  BLOCK

precedence rule  →  R-817 wins
```

The real question is not *what does R-182 say today ?* It is :

> **Can you reconstruct the policy decision as it was actually made, not explain it using today's policy ?**

## The reconstruction problem

In many architectures, reconstructing a historical decision requires stitching together several sources :

```
decision logs           what was written to storage
+
rule versions           which rules existed at that instant
+
overrides               what exceptions were active
+
context                 what facts were available
+
approvals               what human decisions had been recorded
+
precedence config       how ties were broken
=
decision as it happened
```

Each of these lives in a different system, often with its own retention policy. The reconstruction is doable, but expensive, and fragile.

Knowledge treats reconstruction as a native property of each decision, not a downstream engineering effort.

## What Knowledge preserves for each decision

Every `/check` and `/resolve` call that produces a verdict writes a `Consultation` row that freezes :

- **The context sent** by the caller - all facts, their sources, their verification status
- **The applicable rule versions** at that instant (immutable snapshots)
- **The dominating rule** and the precedence trace that led to it
- **The overrides in force** and how they neutralised or shaped the outcome
- **The scope schema** in effect for that tenant
- **A normative hash** - SHA-256 aggregate of the cited rule versions + active overrides + precedence configuration + universal-rule flags

Given a `consultation_id`, the decision can be reconstructed **exactly**. Not from log inference. From frozen state.

## Replay a decision

Given a consultation ID, Knowledge returns the decision as it happened :

```
Decision                 :  BLOCKED
Consultation             :  cns-9a8b7c
Decided at               :  2025-02-14T09:12:00Z

Applicable rule versions :
  R-182 v4  (severity: informative)
  R-291 v7  (severity: hard_block)
  R-817 v2  (severity: absolute_ban)

Overrides in force       :
  none

Dominating rule          :  R-817 v2
Precedence tie-broken by :  severity (absolute_ban > hard_block > informative)

Context at decision      :
  jurisdiction    = FR
  client_type     = individual
  pep_match       = true                        (source: screening_vendor)
  risk_score      = 0.83                        (source: risk_engine)

Approval trail           :  none required
Normative hash           :  sha256:9f2a...
```

Everything the reconstruction needs is in one query, populated from state that was frozen at decision time. Rule R-817 is now on v4 in production ; the Consultation still returns v2 because that is what applied.

## Explain both the policy and the decision

Two different questions carry very different answers. Knowledge separates them so each has a first-class surface.

| Question | Where it lives | What it explains |
|---|---|---|
| **Why did the organization adopt this policy ?** | The Policy's `governance_log` - an ordered list of adoption, amendment, renewal and retirement acts, each with actor, date and rationale. | The policy's own history : who changed it, when, why. Regulatory driver, internal decision, exception process. Never read by the engine. Rendered in the registry UI as an amber header above the rule list. |
| **Why did this specific case get this outcome ?** | The Consultation - rule versions cited, precedence trace, overrides, context, approvals. Read by the engine at replay time. | The decision's technical history : what rules applied, what won, why, on what context. |

The governance log answers *"why does this rule exist ?"* The Consultation answers *"why did this rule fire on this case ?"* Compliance teams need both, from the same audit surface.

## How replay stays deterministic across years

| Property | What it means for replay |
|---|---|
| **Immutable versioning by design** | Every change to a `Rule` creates a new `RuleVersion`. Prior versions are never rewritten. A Consultation that cited an earlier version keeps pointing to that exact version, forever. Same shape for `OverrideVersion`. |
| **Precedence trace stored, not derived** | The full candidate list, neutralised rules, effective set, winning rule and tie-breaking field are stored on the Consultation itself. Rendered as structured JSON alongside the verdict, or as prose via `/reason` for human narration. Not recomputed at replay time. |
| **Approvals and overrides as first-class objects** | Both are queryable, versioned, and tied to the Consultation they resolved. An `Approval` records the triggering rules, requester, decider, outcome, decision comment. An `Override` has its own version chain and applies within a declared scope for a declared time window. |
| **Retention as a deployment choice** | Consultations, rule versions and events are retained per the tenant's configured policy. As long as the Consultation is retained, the reconstruction reads the frozen state. |

## Cryptographic verification (when signed-verdict is enabled)

When the deployment has verdict signing configured, every audit-relevant field of the decision (action, actor, resource, parameters, outcome, cited rule versions, normative hash) is included in a JWS ES256 envelope signed by the tenant's private key. See [Enforcement](/product/enforcement).

This adds to the audit story :

- **Tamper-evident.** Any modification of the recorded decision fields invalidates the signature.
- **Independently verifiable.** An auditor can verify a decision from cold storage, years later, against the tenant's JWKS, without any dependency on Knowledge being live.

## Related

| Read next | Why |
|---|---|
| [Enforcement](/product/enforcement) | Signed verdicts and the four-actor trust chain |
| [Progressive context](/product/progressive-context) | How the context side of the audit trail is populated |
| [Overrides, approvals, pauses](/docs/concepts/overrides-approvals-pauses) | The authorship, versioning and approval surface in depth |
| [Product](/product) | The decision loop for rule-governed AI agents |
