---
title: Enforcement
description: Turn each policy decision into a signed authorization the tool boundary can enforce. Governance becomes a property of the tool, not an instruction to the agent.
locale: en
kicker: Product - Enforcement
---

An advisory verdict is documentation. An agent that consults Knowledge and receives `blocked` can still call the underlying API. This is the gap Knowledge closes.

Every response from `/check` and `/resolve` carries a **signed authorization envelope** (JWS ES256) that a downstream Policy Enforcement Point verifies before the underlying business action runs. The signature binds to the exact operation - action, actor, resource, parameters - so a verdict authorizing `refund_execute(TX-456, 40 EUR)` cannot be reused for a larger amount or a different transaction.

> **An agent's intent is not authority. Governed actions require proof of policy authorization.**

## The signed envelope

Every decision carries three sections plus timing metadata :

```
signed_verdict:
  authorization:
    action: refund_execute
    actor: principal:agent:support-agent-17
    on_behalf_of: principal:human:marie@bank.com
    on_behalf_of_authenticated: true
    resource: TX-456
    parameters:
      amount_eur: 40
  decision:
    outcome: allowed
    dominating_rule_id: rul-refund-under-100
    cited_rule_version_ids: [rv-r1, rv-r2, rv-r7]
    normative_hash: sha256:9f2a...
  context_hash: sha256:f4c1...
  issued_at: 1787500000
  expires_at: 1787500060
```

Signature : ECDSA P-256. Verifiable offline against a per-tenant JWKS document. Full concept walkthrough at [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) ; source spec at `docs/specs/signed-verdict-v1.md` in the monorepo.

## The four-actor trust chain

```
Human Principal   ->   Agent Principal   ->   Knowledge   ->   PEP   ->   Business API
(Marie)                (support-agent-17)      (PDP)         (wrapper)    (refund_api)
```

- **Human Principal** : authenticated at UI/SSO. Owns the delegation act.
- **Agent Principal** : authenticated at the API layer. Its API key binds to a `principal_id` in Knowledge.
- **Knowledge** : renders the decision and signs the envelope.
- **PEP** : the wrapper that verifies signature + bindings, runs the underlying API on success.
- **Business API** : trusts only the PEP.

Knowledge tightens two edges of this chain : **Knowledge to PEP** (the signature) and **agent to PEP** (the binding check). The other edges depend on your architecture. The signed verdict makes explicit which claims Knowledge authenticates and which the PEP must not blindly trust.

## Three adoption paths

| Path | Fit | Client effort |
|---|---|---|
| **MCP proxy** | Agent stacks running MCP (Claude Desktop, Cursor, IDE plugins with an MCP server) | Insert the proxy in front of your MCP server. Zero code change on your tools. |
| **Python SDK decorator** | Python backends exposing tools to agents | Install `knowledge-runtime`, add `@governed_tool(action, resource, bind)` per tool. |
| **Custom PEP** | Any language, any framework, at your business API boundary | Verify the JWS envelope against Knowledge JWKS and compare bindings before executing. Small library, no framework dependency. |

The MCP proxy is the smoothest path for teams already running MCP. Ships as a drop-in that reads a registry file declaring which tools are governed. Your MCP server, your tool implementations, your host client all stay unchanged.

## What Knowledge does not promise

Being explicit here is part of the enforcement contract, not a caveat.

- **Every path to a business API goes through a PEP** : your network and IAM policies must prevent agents from reaching un-wrapped APIs directly. If the agent can bypass the wrapper, the signed verdict provides no enforcement.
- **The delegating human is trustworthy** : the `on_behalf_of` claim is authenticated only when a delegation token or an identity binding backs it. Otherwise the PEP must treat it as untrusted metadata.
- **Caller-asserted facts are truthful** : facts fed into `/resolve` are hashed for audit but not authenticated per field. Fact provenance is orthogonal.
- **A signed verdict cannot be replayed** : replay protection is a PEP-side spent-verdicts store. Enable for operations that must execute exactly once.
- **A signed verdict survives arbitrary delays** : verdicts carry an expiry (default 60 seconds, configurable). Long-running flows re-consult after human approval.

## What this changes for you

- **Provable authorization trace.** Every wrapped execution has a cryptographic artifact citing the exact rules that authorized it, at a specific policy state, for a specific agent principal, on a specific resource with specific parameters. Audit reconstruction is deterministic.
- **Sub-forgery hardened.** An agent cannot forge its principal by putting a different value in a JSON body. The `actor` claim is derived from Knowledge's authentication of the caller, not from the request payload.
- **Tampered-in-transit detection.** Any modification of the signed envelope invalidates the signature.
- **Grant-vs-execution binding.** A signed verdict authorizing one operation cannot be reused for another. The binding is embedded in the signature.

## Status - shipped 2026-08

M1 through M4bis complete. 121 tests. CI green. Available today in design-partner deployments ; production certification (SOC 2, ISO 27001) starts with the design-partner cohort.

**[Quickstart 5 min](/docs/quickstart-governed-tool)** &nbsp; · &nbsp; **[MCP proxy setup](/docs/quickstart-mcp-proxy)** &nbsp; · &nbsp; **[Talk to us](/pilot)**

## Related

| Read next | Why |
|---|---|
| [Auditability](/product/auditability) | The audit surface the signed envelope powers |
| [Integrations](/product/integrations) | MCP + Python SDK + JWKS spec |
| [Security](/security) | Trust model, keys inventory, rotation policy |
