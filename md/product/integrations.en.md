---
title: Add governed decisioning without rebuilding your agent stack
description: Keep your agents, tools, business APIs, identity systems and existing rule engines. Knowledge plugs into the decision path where policy needs an independent authority.
locale: en
kicker: Product - Integrations
---

## Where Knowledge fits

You have already assembled a stack : an agent runtime, tools, business APIs, identity, observability, possibly one or more existing rule engines. The question this page answers is not *what endpoints do we offer*, but *where does Knowledge go in what you already run, and how much has to change*.

The answer : very little.

**Before Knowledge :**

```pipeline
AI Agent | Investigates, decides
Agent Runtime | Orchestrates tool calls
Tools | Execute directly
Business API | Trusts the caller
```

**With Knowledge :**

```pipeline
AI Agent | Investigates, gathers context
Agent Runtime | Orchestrates tool calls
Tool boundary | Consults Knowledge, verifies signed decision
Business API | Executes only if authorized
```

Knowledge does not replace your agent runtime or your business systems. It adds a governed policy decision, and where required, an enforcement point at the tool boundary. Everything upstream and everything downstream stays as it is.

## Choose your integration path

Three architectural choices depending on what your stack already looks like. Same underlying model, different insertion points.

### Already use MCP ?

**MCP proxy.** The proxy sits between the MCP host (Claude Desktop, Cursor, IDE plugins) and your existing MCP server. It reads a config declaring which tools are governed. On each `tools/call`, the proxy consults Knowledge, verifies the signed decision, then forwards only if authorized. Your MCP server, your tool implementations and the host client all stay unchanged.

Best fit for teams already running MCP. Drop-in insertion, no code change.

### Your tools are Python functions ?

**Python SDK - `knowledge-runtime`.** Wrap selected tools with a decorator :

```python
from knowledge_runtime import governed_tool

@governed_tool(action="refund.execute", resource="tx", bind=["amount"])
def refund(tx: str, amount: int):
    return refund_api.execute(tx, amount)
```

The decorator consults Knowledge on each call, verifies the signed decision, and only runs the underlying function if the operation was authorized. Structurally compatible with LangChain, LlamaIndex and custom Python runtimes.

### Custom architecture ?

**REST API + custom PEP.** Any language, any framework. Your runtime calls Knowledge's REST endpoints, verifies the returned JWS envelope against Knowledge's public JWKS, then decides in your own enforcement layer whether to invoke the business API.

Best fit when your agent stack is not Python or MCP, or when you want complete control over where policy evaluation and enforcement happen.

## Keep your existing business systems

Knowledge does not require centralizing every rule in your organization. It gives the decisions you choose to govern an independent policy authority, and coexists cleanly with everything else.

| Existing system | How Knowledge coexists |
|---|---|
| **Existing rule engines** (FICO, ODM, ServiceNow, custom) | Knowledge governs the decisions you route to it. Your existing engines continue to handle credit scoring, fraud, ticketing, or whichever domain they already own. |
| **CRM, core banking, ERP** | Untouched. Knowledge only reads context the caller sends it and returns a decision. It does not sit in the data path of your systems of record. |
| **Business APIs** | Reached only through the tool boundary that verifies the signed decision. No changes to the business API itself. |
| **Workflow engines** (Camunda, Temporal, n8n) | Knowledge can be called as one step in a workflow, or embedded inside a governed agent that runs within the workflow. Either shape works. |

Two patterns cover most integrations :

- **Knowledge owns the decision** — for a new class of agentic decisions that needs an independent policy authority.
- **Knowledge coexists with domain engines** — some decisions naturally stay in ODM / FICO / ServiceNow / custom code, and Knowledge governs the ones that were previously handled through procedures, spreadsheets or human judgment.

## Fit into your enterprise infrastructure

| Layer | What Knowledge integrates with |
|---|---|
| **Identity** | OIDC login for the back-office UI. SCIM 2.0 for user and group provisioning. Identity binding to unify a person across auth mechanisms. |
| **Observability** | Structured JSON logs on every service, propagated `X-Request-Id` for correlation, an `Event` row per governed-entity mutation queryable for audit or SIEM shipment. |
| **Deployment** | SaaS (Asplenz-hosted), private cloud / VPC (in your account, you control network, backup, residency), or on-premise (no external runtime dependency beyond Postgres and, when reasoning is used, your LLM provider). |
| **Security** | Per-tenant JWKS for JWS verification, API keys with `X-API-Key`, webhook signature public key at a well-known URL. |

## Available today

| Surface | Status |
|---|---|
| **MCP proxy** | Available |
| **Python SDK** (`knowledge-runtime`) | Available |
| **REST API + JWKS** | Available |
| **OIDC + SCIM** | Available |
| **TypeScript, Java, OpenAI adapter** | [Talk to us](/pilot) if this is on your path |

## Explore the API

Three endpoints do most of the work in an agent integration :

- `POST /v1/resolve` - determine policy from available context, get back what is still needed if incomplete
- `POST /v1/check` - evaluate with a full context, strict input contract
- `POST /v1/approvals` - route decisions that require human authority

Full endpoint reference, request and response schemas at [API reference](/docs/api-reference/authentication). OpenAPI spec at `/api/openapi-v3.json`.

## Related

| Read next | Why |
|---|---|
| [Enforcement](/product/enforcement) | The signed envelope and PEP model the integration paths implement |
| [Quickstart : governed tool](/docs/quickstart-governed-tool) | Five-minute hands-on with the Python decorator |
| [MCP proxy setup](/docs/mcp-proxy/setup) | Five-minute hands-on with the MCP proxy |
| [Deployment shapes](/docs/security-compliance/deployment-shapes) | SaaS, VPC, on-premise details |
| [Security](/security) | Trust model, keys inventory, network boundaries |
