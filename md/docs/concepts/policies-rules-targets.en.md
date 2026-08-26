---
title: Policies, Rules and Targets
description: The three core aggregates Knowledge uses to model a governed decision layer.
locale: en
kicker: Docs / Concepts - Stable
---

Knowledge organises the governed decision layer around three aggregates : **Policy**, **Rule**, and **Target**. Understanding how they compose is the shortest path to reading any consultation output.

## Policy (`pol-`)

A Policy is the aggregate that groups related Rules and carries their governance history. Every Policy has :

- **Owner** and **approver chain** (who can amend it, who signs off amendments).
- **Governance log** - an ordered list of GovernanceNote entries (adoption, amendment, renewal, retirement acts) that surface as an amber header above the rule list in the registry UI.
- **Zero or more Rules**.

The engine never reads the governance log. It is human context that lets the LLM verdict prose reference *why* a rule fires.

Typical Policies in a wealth vertical : `Product eligibility`, `Client suitability`, `Cross-border distribution`, `Portfolio concentration`.

## Rule (`rul-`)

A Rule is one active directive. Every Rule has :

- **Statement** - the human-readable declaration.
- **Severity** - one of `absolute_ban` > `hard_block` > `require_approval` > `informative` > `allow`.
- **Effect** - the engine action, derived from severity.
- **Rows** - a list of `{scope, condition}` pairs (V5 model). Each row is one applicable combination.
- **Universal flag** - if true, the rule fires for every principal (no Target membership required).
- **fires_when_any** - multi-condition OR semantic (V5).
- **derogation_allowed** - can this rule be neutralised by an Override ?

The `scope` on each row is validated against the tenant's `scope_schema` (a JSON-Schema-like declaration of which dimensions exist and their allowed values).

**Immutability : RuleVersion.** Every time a rule's verdict-affecting fields change, a new `RuleVersion` (`rv-`) is written. Consultations pin the exact RuleVersion IDs they cited. A regulator asking "show me the rule text that applied 18 months ago" gets the exact RuleVersion of that day, not the current one.

## Target (`tgt-`)

A Target is a named audience receiving Rules. Two write paths :

- **Bulk-attach from Policy** - all rules of a policy attach to one target in one operation.
- **Cherry-pick** - one rule attaches to one or more targets.

A `TargetMember` (`tgm-`) links a principal to a target. A `TargetRuleAttachment` (`atr-`) links one rule to one target.

**Universal rules** bypass the Target mechanism entirely : `Rule.universal = true` means the rule fires for every principal, rendered as a virtual "Everyone" bucket in the UI (no real Target row exists).

## Composition example

A Policy `Product eligibility` in a wealth tenant :

- Owner : Head of Wealth Compliance.
- Governance log : "Adopted 2024-11-12", "Amended 2025-06-04 : added structured-note complexity band", "Renewed 2026-01-15".
- Rules :
  - `rul-elig-highly-complex-retail` : severity `hard_block`, rows `[{scope: {product_complexity: highly_complex, client_classification: retail}, condition: {notional_eur: gt, 0}}]`.
  - `rul-elig-large-notional-retail` : severity `require_approval`, rows `[{scope: {client_classification: retail}, condition: {notional_eur: gt, 50000}}]`.

Targets in the same tenant :
- `tgt-uk-rms` - RMs licensed in the UK (34 members). Both rules above attached via bulk-attach.
- `tgt-hnw-relationship-managers` - specialised RM cohort (12 members). Only `rul-elig-large-notional-retail` cherry-picked (they have a different notional threshold via override).

When RM alice@bank (member of `tgt-uk-rms`) triggers `/check`, the engine :
1. Resolves alice's targets.
2. Pulls all rules attached to those targets, plus universal rules.
3. Filters by the case's scope against each row's scope.
4. Evaluates conditions ; the dominating rule wins by severity.

## Related

- [Verdicts and decisions](/docs/concepts/verdicts-and-decisions) - how rules compose into a verdict.
- [Overrides, approvals, pauses](/docs/concepts/overrides-approvals-pauses) - how rules are neutralised or suspended.
- [Progressive context](/docs/concepts/progressive-context-resolution) - how `/resolve` derives what's still needed.
