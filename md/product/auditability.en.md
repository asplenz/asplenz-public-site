---
title: Auditability
description: Reconstruct the exact policy state behind a historical decision, years later. Deterministic replay, not an approximation.
locale: en
kicker: Product - Auditability
---

Two questions a regulator can ask about a decision from 18 months ago that a classic rules engine cannot cleanly answer :

> *Show me the exact rules that produced this decision, in the exact version they had at decision time, with the exact precedence and overrides in force that day.*

> *Show me why this specific rule fired here and did not fire on a similar-looking case last week.*

Knowledge's audit surface is designed so those answers are one query away, deterministic, and cryptographically verifiable when signed verdicts are enabled.

## Every decision writes a Consultation

Every `/check` and `/resolve` call that produces a verdict writes a `Consultation` row that freezes :

- **The context sent** by the caller (all facts, their sources, their verification status)
- **The applicable rule versions** at that instant (`cited_rule_version_ids` - immutable snapshots)
- **The dominating rule** and the precedence trace that led to it
- **The overrides in force** and how they neutralised or shaped the outcome
- **The scope schema** in effect for that tenant
- **A normative hash** - SHA-256 aggregate of the cited rule versions + active overrides + precedence configuration + universal-rule flags

Given a `consultation_id`, the decision can be reconstructed **exactly** - not from log inference, from frozen state.

## Immutable versioning by design

Every change to a verdict-affecting field on a Rule creates a new `RuleVersion`. Prior versions are never rewritten. A Consultation that cited an earlier version keeps pointing to that exact version, forever. Same shape for `OverrideVersion`.

**Historical decisions remain tied to the normative policy state that produced them.** A rule edited today does not silently change the verdict of a decision made last quarter.

## The precedence trace

Auditors and regulators do not just want to know *which* rule fired. They want to know *why that rule and not the other*. The precedence trace records :

- The full list of **candidate rules** considered at scope pre-filter
- The **neutralised rules** and the override that neutralised each
- The **effective rules** left after neutralisation
- The **winning rule** and the precedence field that broke the tie (severity, priority, specificity)
- The **effect** and **enforcement mode** of the winning rule

Rendered as a structured JSON alongside the verdict. Also renderable in prose via `/reason` for a compliance officer who wants human narration.

## Governance log per Policy

Every Policy carries a `governance_log` : an ordered list of `GovernanceNote` entries recording the adoption, amendment, renewal or retirement acts, each with actor + date + rationale. The engine never reads this log ; it is the human context that explains *why* a rule exists. Rendered in the registry UI as an amber header above the rule list.

Distinct from the technical audit trail (Consultation, Event, RuleVersion) which the engine does read.

## Approvals and overrides as first-class governed objects

Not workflow annotations, not hidden branches. Both are queryable, versioned, and tied to the Consultation they resolved :

- **Approval** : one row per operation, records the triggering rules, the requester, the decider, the outcome, the decision comment. Includes the optional `override_id` if the approval granted a scope-bounded exception.
- **Override** : first-class entity with its own version chain, applies within a declared scope for a declared time window, cited by every Consultation whose verdict it shaped.

## Cryptographic signature (when signed-verdict is enabled)

When the deployment has verdict signing configured, every audit-relevant field of the decision (action, actor, resource, parameters, outcome, cited rule versions, normative hash) is included in a JWS ES256 envelope signed by the tenant's private key. See [Enforcement](/product/enforcement).

This adds to the audit story :

- **Tamper-evidence** : any modification of the recorded decision fields invalidates the signature.
- **Externally verifiable** : an auditor can verify a decision from cold storage, years later, against the tenant's JWKS, without any dependency on Knowledge being live.
- **Non-repudiation** : the tenant cannot later claim *"Knowledge did not say that"* - the signature proves the exact decision produced at the exact time.

## What replay actually returns

Given a `consultation_id`, Knowledge reconstructs :

- The context that was sent (with fact provenance)
- The applicable rules and the verdict each produced
- The precedence walk that led to the dominating rule
- The overrides and approvals that shaped the outcome
- The exact rule and override versions in effect at that moment
- The normative hash for external verification
- (When signed-verdict enabled) the JWS envelope + the public key the receiving party would verify against

Retention policy is a deployment concern, not a limitation of the model. As long as the Consultation is retained, the reconstruction reads the frozen state.

## Related

| Read next | Why |
|---|---|
| [Enforcement](/product/enforcement) | Signed verdicts + the four-actor trust chain |
| [Progressive context](/product/progressive-context) | How the input side of the audit trail is populated |
| [Governance](/governance) | The authorship + versioning + approval surface in depth |
