---
title: How policy is governed in Knowledge
description: Authorship, versioning, approvals, overrides and audit. The mechanics behind every verdict Knowledge returns.
locale: en
kicker: Governance model
ctaLabel: Become a design partner
ctaHref: /pilot
---

Every verdict Knowledge returns is produced against a specific policy state and recorded with the rules and configuration that determined the outcome. This page describes how that state is authored, versioned, changed and reconstructed later.

## The lifecycle of a rule

A rule moves through a small set of governed states.

| State | Meaning |
|---|---|
| **Draft** | The rule is being authored or edited. The engine does not evaluate it |
| **Active** | The rule is available to the engine. Verdicts can be produced against it |
| **Archived** | The rule is retired. The engine no longer evaluates it, but historical Consultations that cited an earlier version can still be replayed |

An active rule also carries an `is_enabled` toggle. Disabling an active rule hides it from the engine without archiving it, which is useful during incident response or when a threshold is being recalibrated.

## Immutable versioning

Every change to a verdict-affecting field of a rule creates a new **RuleVersion**. Prior versions are never rewritten.

Consultations that cited an earlier version keep pointing to that exact version. Rendering the decision later reads the frozen state, not the current one. The same is true of Overrides, which carry a symmetric **OverrideVersion**.

**Historical decisions remain tied to the normative policy state that produced them.**

## Approvals and overrides

When a rule fires with a verdict of `approval_required`, an **ApprovalRequest** is created as a first-class governed object. It carries the triggering rules, the requester, the decider and its status (pending, approved, rejected). Overrides are the reverse: authorisations granted in advance by a decider to bypass a defined set of constraints within a scope, recorded as governed objects with their own versioning.

Approvals and overrides are consultable and auditable objects, not hidden workflow branches.

## What a consultation captures

Every `/resolve` call that produces a verdict writes a **Consultation** record. The record captures the elements that made the decision reproducible:

| Field | What it captures |
|---|---|
| `cited_rule_version_ids` | The exact rule versions that participated in the evaluation |
| `dominating_rule_id` | The rule whose verdict prevailed under the applicable precedence |
| `precedence_trace` | The ordering used to reach the dominating rule |
| `resolved_target_ids` | The audiences the resolver walked to gather applicable rules |
| `scope_used` | The scope predicate values that matched at evaluation time |
| `cited_override_version_ids` | The override versions that neutralised or shaped the outcome |
| `normative_hash` | A snapshot key of the normative state that produced the verdict |

Replaying a historical decision reads these fields and reconstructs the exact evaluation.

## Normative policy state

The `normative_hash` recorded on a consultation is a snapshot of the elements that would change the verdict if any of them were modified:

- The versions of the rules that participated in the evaluation
- The versions of any overrides that neutralised or shaped the outcome
- The precedence configuration in force at evaluation time
- The scope schema definitions the evaluation matched against
- Universal-rule flags in force at evaluation time

Anything not in that set (for example a rule that was inapplicable to the case, or a change to a rule that came after the consultation) does not affect the recorded verdict.

## The policy governance log

Every Policy aggregate carries a `governance_log` of structured governance acts: adoption, amendment, renewal, retirement. These entries are the record of *why* a rule exists at a firm, distinct from the runtime behaviour of the rule itself.

The engine never reads the governance log. The reasoning layer surfaces it as context when a verdict is rendered in prose ("this rule was amended on <date> following <act>"), but it never becomes part of the deterministic verdict.

## Who can change what

Rule and override authorship is scoped by role. In a typical deployment:

- Policy owners can author, version and publish rules within a policy domain they own
- Deciders can grant approvals and overrides within their authority scope
- Consumers (applications, workflows, agents) can consult the policy layer but cannot modify it

The specific role model is configurable per deployment. See [security](/security) for the deployment-side controls.

## What replay actually gives you

Given a `consultation_id`, Knowledge can reconstruct:

- The context that was sent
- The rules that were applicable and the verdict they produced
- The precedence and target resolution that led to the dominating rule
- The overrides and approvals that shaped the outcome
- The exact rule and override versions in effect at that moment

As long as the consultation is retained by the deployment, the reconstruction reads the frozen state. Retention policy is a deployment concern, not a limitation of the model.

## What comes next

| Read next | Why |
|---|---|
| [How Knowledge works](/how-it-works) | The runtime contract behind these governance mechanics |
| [Security](/security) | How authorship roles, tenant isolation and audit are enforced at the deployment layer |
| [Design partner](/pilot) | Three founding slots, one production-relevant decision, founding-customer pricing |
