---
title: Enforcement
description: A policy decision is only as strong as what stops the caller from ignoring it. Knowledge turns each decision into a cryptographic proof that an execution boundary can enforce.
locale: en
kicker: The enforcement contract
---

An agent that consults Knowledge and receives `blocked` can still call the underlying API. A rule engine that produces verdicts your systems consume advisorily is not an enforcement control. It is documentation.

Knowledge closes that gap by turning every decision into a **signed authorization artifact** that a downstream enforcement boundary verifies before the underlying operation runs.

> **An agent's intent is not authority. Governed actions require proof of policy authorization.**

## The signed decision

Every response from `/resolve` and `/check` carries a signed envelope containing three sections:

- **authorization** - the exact operation the decision permits: action, actor, resource, parameters. This is what a downstream verifier compares against the incoming call.
- **decision** - the outcome, the rules that determined it, and the normative state of the tenant at decision time.
- **context_hash** - a fingerprint of the full policy evaluation context, for audit reconstruction.

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

Signature: ECDSA P-256, verifiable offline against a public JWKS.

## Where enforcement lives

Four actors, each authenticated at a different layer:

```pipeline
Human Principal | Marie | Authenticated at UI/SSO, delegates to an agent
Agent Principal | support-agent-17 | Authenticated at the API layer, proposes an action
Knowledge | The policy authority | Renders the decision and signs the envelope
Enforcement boundary (PEP) | Tool wrapper or proxy | Verifies signature + bindings, runs the underlying API
Business API | refund_api | Trusts only the enforcement boundary
```

Knowledge tightens two edges of this chain: **Knowledge to enforcement boundary** (the signature) and **agent to enforcement boundary** (the binding check). The other edges depend on your own architecture. The signed verdict makes explicit which claims Knowledge authenticates and which claims the enforcement boundary must not blindly trust.

## Governance is a property of the tool, not an instruction to the agent

The typical model asks the agent to be well-behaved: *"remember to consult Knowledge before acting"*. That model breaks when the agent forgets, hallucinates, or is prompt-injected.

With signed verdicts, the enforcement boundary lives in the **tool the agent calls**, not in the agent's discretion. A governed tool cannot execute without a valid signed decision permitting this exact operation. Whether a tool is governed is a static, declarative fact about the tool, colocated with its implementation.

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["tx", "amount"],
)
def refund_customer(tx, amount):
    ...
```

Registered once. Enforced automatically. The agent calls `refund_customer(tx=102, amount=40)` normally. The runtime transparently consults Knowledge, verifies the signed verdict, checks bindings, and only then invokes the underlying implementation.

## Adoption paths

| Path | Fit | Client effort |
|---|---|---|
| **MCP proxy** | Agent stacks running MCP (Claude Desktop, Cursor, IDE plugins with an MCP server) | Insert the proxy in front of your MCP server. Zero code change on your tools. Enforcement is added by proxy insertion. |
| **SDK decorator** | Python or TypeScript backends exposing tools to agents | Install the runtime, add `@governed_tool` per tool. Hand-written wrappers not required. |
| **Custom PEP** | Any language, any framework, at your business API boundary | Verify the JWS envelope against Knowledge JWKS and compare bindings before executing. Small library, no framework dependency. |

The MCP proxy is the smoothest path for teams already running MCP. It ships as a drop-in that reads a registry file declaring which tools are governed. Your MCP server, your tools, and your host client remain unchanged.

## What Knowledge does not promise

The value proposition is **"we make enforcement possible, not automatic"**. Explicitly:

| Not this | Client responsibility |
|---|---|
| **Every path to a business API goes through a PEP** | Your network and IAM policies must prevent agents from reaching un-wrapped APIs directly. If the agent can bypass the wrapper, the signed verdict provides no enforcement. |
| **The delegating human is trustworthy** | The `on_behalf_of` claim is authenticated only when a delegation token or an identity binding backs it. When unauthenticated, PEPs must treat it as untrusted metadata. |
| **Caller-asserted facts are truthful** | Facts fed into `/resolve` (customer tier, KYC status, transaction age) are hashed for audit but not authenticated per field. Fact provenance is a separate concern. |
| **A signed verdict cannot be replayed** | Replay protection is a PEP-side spent-verdicts store. Enable it for operations that must execute exactly once. |
| **A signed verdict survives arbitrary delays** | Verdicts carry an expiry (default 60 seconds, configurable). Long-running flows re-consult after human approval. |

Being explicit here is the point: an enforcement primitive that hides its trust boundaries is worse than one that documents them.

## What a CISO gets

Adopting Knowledge signed verdicts adds four properties that are difficult to achieve with an advisory rules engine:

- **Provable authorization trace.** Every wrapped execution has a cryptographic artifact citing the exact rules that authorized it, at a specific policy state, for a specific agent principal, on a specific resource with specific parameters. Audit reconstruction is deterministic.
- **Sub-forgery hardened.** An agent cannot forge its principal by putting a different value in a JSON body. `actor` is derived from Knowledge's authentication of the caller, not from the request payload.
- **Tampered-in-transit detection.** Any modification of the signed envelope invalidates the signature. A stripped or edited verdict is rejected at the boundary.
- **Grant-vs-execution binding.** A signed verdict authorizing `refund_execute(TX-456, 40 EUR)` cannot be reused for a different transaction, a larger amount, or a different action. The binding is embedded in the signature.

Key rotation is standard: compromised keys are retired from JWKS, new verdicts sign under the new `kid`, the overlap window drains existing valid tokens.

## Three ideas to take away

**A verdict your caller can ignore is documentation. A signed verdict a downstream boundary refuses to accept without is enforcement.**

**Governance is a property of the tool, not an instruction to the agent.**

**Knowledge produces the proof. The client's execution boundary consumes it. The boundary between the two is where enforcement lives.**

## Related

| Read next | Why |
|---|---|
| [How it works](/how-it-works) | The mental model of `/resolve` and progressive resolution |
| [Security](/security) | The full trust model, key rotation, tenant isolation |
| [Works with your stack](/stack) | Insertion patterns, including the MCP proxy path |
| [Design partner](/pilot) | The founding-partner engagement |
