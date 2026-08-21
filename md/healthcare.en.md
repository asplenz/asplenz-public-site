---
title: One governed policy layer for healthcare coverage, claims and approval decisions.
description: Knowledge evaluates your organization's encoded healthcare policies, identifies the context still required to reach a decision, and returns a governed verdict — without replacing your claims platform, clinical systems or workflows.
locale: en
kicker: Knowledge for Healthcare
ctaLabel: Become a design partner
ctaHref: /pilot
---

Healthcare decisions rarely depend on a single rule.

Whether a payer or TPA is assessing coverage, processing a claim, handling an approval request or deciding whether a case needs human review, the outcome can depend on a combination of member eligibility, benefit design, provider conditions, service rules, documentation requirements, plan limits, exclusions and exceptions.

Those policies often need to be applied across multiple systems and decision points.

Knowledge gives payers and TPAs a governed policy layer that their claims platforms, workflows, operational teams and AI systems can consult — without replacing the systems already handling the process.

## What Knowledge does for healthcare

**One policy layer, many decision points.** Claims platforms, approval workflows, operational teams, customer-service applications and AI agents can consult the same governed policy source instead of implementing the decision logic independently.

**Resolves policy-driven cases deterministically.** Knowledge evaluates the context against the policies your organization has encoded and returns a governed verdict with the rules that determined it.

**Identifies what is still needed to decide.** When the available context is not sufficient, Knowledge returns `required_context` identifying the specific information the applicable policies still require.

**Separates deterministic cases from cases requiring judgment.** Encoded policies can determine when a case can be resolved from the available facts and when it must be escalated for human review.

**Makes decisions traceable.** Each consultation records the policy state and rules behind the verdict, allowing historical decisions to be reconstructed later.

## The policy patterns Knowledge can represent

Healthcare organizations operate under different regulatory frameworks, plan structures and operating models. Knowledge does not prescribe those policies.

It provides a governed way to encode and evaluate the recurring decision patterns behind them.

| Policy pattern | What it governs |
|---|---|
| **Eligibility and coverage** | Whether the member, policy, benefit or service falls within the applicable coverage conditions |
| **Information completeness** | Which information or documentation is required before the applicable policies can reach a verdict |
| **Plan and benefit conditions** | Limits, exclusions, network conditions, benefit-specific requirements and other plan rules |
| **Claims and approval rules** | The organization's encoded conditions for resolving a claim or approval request |
| **Exceptions and escalation** | When an exception applies or the encoded policies require additional review |
| **Human-review routing** | When a case cannot or should not be resolved automatically and must be sent to an appropriate reviewer |

Your organization owns the actual policy content. Knowledge provides the governed decision layer through which those policies are evaluated.

## The decisions Knowledge can support

A claims platform, approval workflow, operational application or AI agent can ask Knowledge questions such as :

| Question | What Knowledge returns |
|---|---|
| **Does this case meet the encoded coverage conditions ?** | A deterministic verdict based on the applicable eligibility, benefit, provider and service rules |
| **Is there enough information to reach a decision ?** | Either a complete verdict or `required_context` identifying what the applicable policies still need |
| **Do any plan limits, exclusions or exceptions apply ?** | The resulting verdict and the specific rules that determined it |
| **Can this case be resolved from encoded policy, or does it require human review ?** | A deterministic verdict or `approval_required` when the organization's rules require escalation |

Knowledge determines what the encoded policy says.

Your claims platform, workflow, agent or reviewer determines what happens next.

## The caller doesn't need to know the whole decision tree

In many decision systems, the caller needs to know upfront which information a particular decision path requires.

That creates coupling between the policy and the systems collecting the information.

Knowledge removes that dependency.

The caller provides the context it already has. Knowledge determines whether the applicable policies can resolve the decision and, if not, which additional context is required.

For example, a healthcare claim or approval request might initially contain :

```
context: {
  "member_plan": { value: "PLAN-A", source: "eligibility_system" },
  "service_code": { value: "SERVICE-123", source: "claims_platform" },
  "provider_id": { value: "PROVIDER-456", source: "provider_directory" }
}
```

The applicable policies may require additional information before reaching a verdict.

Knowledge responds :

```
{
  "operation_status": "incomplete",
  "required_context": [
    { "field": "supporting_documentation_status",
      "reason": "required by applicable benefit policy" },
    { "field": "provider_network_status",
      "reason": "required by applicable coverage policy" }
  ]
}
```

The existing system decides how to obtain that information — from another system, from the provider, from the member, or through an AI agent.

It then calls Knowledge again with the enriched context.

```
{
  "operation_status": "complete",
  "verdict": "approval_required",
  "cited_rules": [
    "applicable-benefit-rule",
    "human-review-rule"
  ],
  "consultation_id": "cns-..."
}
```

The existing workflow can now route the case to the appropriate reviewer with the policy-relevant context already assembled.

Knowledge did not collect the information, orchestrate the workflow or make the operational action.

It determined what the encoded policy required and returned the corresponding verdict.

## Reduce unnecessary review without removing human judgment

Not every healthcare decision should be automated.

The objective is to distinguish cases that can be resolved from explicit policy from those that genuinely require human judgment. For each incoming case, Knowledge produces one of three outcomes :

```outcomes
source: Knowledge evaluates the case
outcome: incomplete + required_context | The applicable policies still need specific information. The existing system obtains it (from a source system, a provider, an AI agent or the member) and re-calls Knowledge
outcome: complete + deterministic verdict | The encoded policies resolve the case without human review. The existing workflow acts on the verdict
outcome: complete + approval_required | The encoded policies explicitly route the case to human review. The workflow escalates with the policy-relevant context already assembled
```

This can reduce unnecessary review workload while allowing the organization to explicitly govern which cases must remain with human reviewers.

For TPAs operating across multiple payers and plans, the same model can also keep different policy sets governed separately while exposing a consistent decision interface to the systems processing cases.

## Designed for existing healthcare stacks

Knowledge is not a claims platform, clinical system or workflow engine.

It sits alongside them.

| Existing component | How Knowledge fits |
|---|---|
| **Claims platform** | Calls Knowledge at defined decision points while continuing to own claims processing and execution |
| **Payer / TPA workflow** | Uses Knowledge verdicts and `required_context` to determine how the existing workflow proceeds |
| **National or regional exchange** | Continues to transport and standardize transactions ; Knowledge operates where the payer or TPA still owns policy decisioning |
| **Clinical systems** | Remain the source of clinical information ; Knowledge can consume relevant structured context when an encoded policy requires it |
| **AI agents** | Can gather context and orchestrate work while consulting Knowledge for deterministic policy verdicts |
| **Legacy decision logic** | Can coexist with Knowledge through overlay, gate, shadow or selective-routing adoption patterns |

[Read how Knowledge fits your stack](/stack)

## Five ways to introduce Knowledge

| Situation | Adoption pattern | How it works |
|---|---|---|
| **Existing decision capability, new policies to govern** | Overlay | Existing outcomes become part of the context while Knowledge evaluates additional governed policies |
| **A selected decision needs a governed control** | Gate | The existing system obtains a Knowledge verdict before deciding how the process continues |
| **Need to validate against current logic first** | Shadow | Knowledge evaluates the same cases in parallel without affecting production decisions |
| **New plan, product, market or decision domain** | Selective routing | Knowledge handles the new decision scope while existing flows remain unchanged |
| **Greenfield platform or service** | Primary | Knowledge becomes the policy decision layer from the beginning |

This allows an organization to start with one decision rather than replacing its existing healthcare infrastructure.

## What Asplenz provides, what your organization owns

Asplenz provides the policy infrastructure : the decision model, versioning, deterministic evaluation, progressive context resolution and audit surface.

Your organization owns the policies encoded in it and determines how Knowledge's verdicts are used.

**Knowledge evaluates the policies your organization has encoded. It does not diagnose patients, recommend treatment, determine medical necessity or replace clinical judgment.**

It also does not execute operational actions. Your organization remains responsible for its policies and for whether a Knowledge verdict results in automated processing, a request for additional information, escalation or human review.

## Where we are starting

We are exploring Healthcare with payers and TPAs that operate policy-heavy coverage, claims and approval processes — particularly where existing platforms already work but decision logic is difficult to govern, requires unnecessary review, depends on incomplete information, or needs to become safely accessible to AI-driven workflows.

The initial focus is on organizations in the GCC and Asian insurance markets operating complex multi-plan or multi-payer environments.

Rather than replacing the claims stack, the goal is simple :

**Start with one difficult decision. Encode the applicable policy. Run Knowledge alongside the existing process. Measure what changes.**

## What comes next

| Read next | Why |
|---|---|
| [Reviews & Approvals](/automate-approvals) | Separate cases that policy can resolve from cases that genuinely require human judgment |
| [Ask Less](/ask-less) | Use `required_context` to obtain only the information a particular decision path actually needs |
| [AI agents](/ai-agents) | Let AI-driven workflows consult deterministic policy without putting policy interpretation in the LLM |
| [How Knowledge works](/how-it-works) | The `/resolve` contract, policy governance and audit model |
| [Works with your stack](/stack) | Overlay, Gate, Shadow, Selective Routing and Primary adoption patterns |
| [Design partner](/pilot) | Start with one production-relevant decision and measurable success criteria |
