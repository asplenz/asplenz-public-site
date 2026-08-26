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

**PEP (Policy Enforcement Point)** - the client-side wrapper (Python decorator, MCP proxy, custom code) that verifies the signed envelope before executing a business action. Lives in your infrastructure, not Knowledge's.

## Where Knowledge fits in your stack

Knowledge is **not** :

- A replacement for the whole enterprise rules landscape (Drools, IBM ODM, DMN, ServiceNow, custom engines). Keep those where they fit.
- A workflow engine. Your workflow orchestrates the process ; Knowledge governs specific decision points inside it.
- A KYC vendor. It consumes the KYC result and applies the composite decision.
- A RAG on your policy documents. It produces deterministic verdicts with cited rules, not retrieved text.

Knowledge is **for a specific class of decisions** :

- Decisions an AI agent takes autonomously that need rule-governed, deterministic outcomes.
- Decisions that must remain reproducible for regulator-grade audit years later.
- Decisions that need explicit approval semantics (`approval_required` as a first-class verdict).
- Decisions whose execution requires cryptographically verifiable authorization at the tool boundary.

## Services + ports

| Service | Port | Purpose |
|---|---|---|
| `knowledge-api` | 8090 | Registry, engine, /check, /reason writer |
| `knowledge-ai` | 8091 | Reasoning + prose rendering (uses an LLM you configure) |
| `asplenz-finops` | 8092 | LLM cost breakdown per tenant |
| `knowledge-ui` | 3002 | Registry back-office |
| `mock-ui` | 3004 | Demo workstation (per tenant) |
| `knowledge-email` | 8093 | Postmark inbound handler |
| `knowledge-slack` | 8094 | Slack integration |
| `knowledge-mcp` | n/a | Python MCP server (stdio) |
| `knowledge-mcp-proxy` | 8006 | Governance proxy in front of a customer MCP server |

Health endpoint on every HTTP service : `/health`.

## Next

- **[Quickstart : governed tool in Python](/docs/quickstart-governed-tool)** - 5 minutes.
- **[Quickstart : MCP proxy in 5 minutes](/docs/quickstart-mcp-proxy)** - 5 minutes.
- **[Enforcement](/product/enforcement)** - deeper on the signed envelope model.
- **[Progressive context](/product/progressive-context)** - deeper on the required_context loop.
