---
title: What is Knowledge ?
description: Two minutes on the mental model, the vocabulary and where Knowledge fits in your stack.
locale: en
kicker: Docs - Getting started
---

**Knowledge is governed policy infrastructure for AI decision-making agents.** It is a small set of services that answer one question with a deterministic, auditable, cryptographically signable verdict :

> *Given the current context, does this policy allow this action ?*

## The mental model in one paragraph

An agent (or any caller) sends a proposed action and the context it currently has. Knowledge determines which rules apply, evaluates them, and returns a verdict : `allowed`, `blocked`, `approval_required`, `observe`. The rules that fired are cited. The state of policy at decision time is frozen and signed. A downstream Policy Enforcement Point verifies the signed envelope before the underlying business action runs.

> **AI investigates. Knowledge decides. The tool boundary enforces.**

## What "Knowledge decides" means

*Not* : Knowledge makes the whole business decision.

*Yes* : Knowledge makes the **policy determination** - which rules apply, what the deterministic verdict is, whether human authorization is required. The agent decides everything else (what to investigate, what evidence to gather, how to communicate). The tool boundary is where the policy decision becomes an executable outcome.

## Vocabulary

**Policy** - the aggregate that holds a set of related Rules plus a `governance_log` of adoption / amendment / renewal acts. Every Policy has an owner and an approver chain.

**Rule** - an active directive with a severity (`absolute_ban`, `hard_block`, `require_approval`, `informative`, `allow`), a structured scope, and optionally condition rows (`{field, op, threshold}` triples) that must fire for the rule to apply.

**Target** - a named audience receiving rules. Replaces the retired V2 `Namespace` concept.

**Consultation** - the audit record of one `/check` or `/resolve` call. Freezes the context sent, the rule versions cited, the dominating rule, the precedence trace, the scope used, the verdict and the normative hash.

**Verdict** - one of `allowed`, `blocked`, `approval_required`, `observe`, `not_covered`. The outcome the caller receives.

**Signed verdict** - the JWS envelope wrapping a decision so a downstream Policy Enforcement Point can verify it. Optional per deployment. See [Enforcement](/product/enforcement).

**Progressive context** - the mechanism by which a caller sends what it has and Knowledge returns the fields still needed to reach a verdict. See [Progressive context](/product/progressive-context).

**PEP (Policy Enforcement Point)** - the client-side wrapper (Python decorator, MCP tool-call interceptor, custom code) that verifies the signed envelope before executing a business action. Lives in your infrastructure, not Knowledge's.

## Where Knowledge fits in your stack

Knowledge is designed for a specific class of decisions :

- Decisions an AI agent takes autonomously that need rule-governed, deterministic outcomes.
- Decisions that must remain reproducible for regulator-grade audit years later.
- Decisions that need explicit approval semantics (`approval_required` as a first-class verdict).
- Decisions whose execution requires cryptographically verifiable authorization at the tool boundary.

Adjacent categories (workflow orchestration, deterministic rule scoring, retrieval over documents, identity verification) have their own dedicated tools. Knowledge sits alongside them.

## The surfaces you interact with

Knowledge exposes a small set of surfaces. Which one matters depends on your role.

| Surface | Who uses it | For what |
|---|---|---|
| **Knowledge API** | Agents, applications, workflows | Consult a decision (`/check`, `/resolve`), fetch consultations, create approvals |
| **Back-office UI** | Compliance officers, product owners | Author policies and rules, review coverage, resolve approvals |
| **Python SDK** | Backend teams | Wrap tools with `@governed_tool` so signed verdicts are enforced before execution |
| **MCP interceptor** | Agent stacks running MCP | Enforcement pattern at the MCP tool-call boundary. Reference example in the monorepo, adapt to your MCP stack. |
| **JWKS endpoint** | Enforcement points | Public keys for verifying signed verdicts offline |

The underlying deployment (SaaS, private cloud, on-premise) is opaque to callers. Endpoints are versioned paths ; substitute your tenant's base URL.

## Next

- **[Quickstart : governed tool in Python](/docs/quickstart-governed-tool)** - 5 minutes.
- **[Quickstart : Knowledge as an MCP server](/docs/quickstart-knowledge-mcp)** - 5 minutes.
- **[Enforcement](/product/enforcement)** - deeper on the signed envelope model.
- **[Progressive context](/product/progressive-context)** - deeper on the required_context loop.
