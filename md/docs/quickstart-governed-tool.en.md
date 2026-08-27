---
title: Quickstart - governed tool in Python
description: Two patterns to wrap a Python tool with signed-verdict enforcement. Pattern A verifies a verdict handed to you. Pattern B lets the tool consult Knowledge itself.
locale: en
kicker: Docs - Getting started
---

Two patterns, same page. Pick the one that matches where in the chain your code sits.

| Pattern | Use it when |
|---|---|
| **A - `verify_verdict`** | Something upstream (the agent, a proxy, an orchestrator) already consulted Knowledge and hands the signed verdict to your tool. Your job is to verify it against what the caller is asking for, then execute. |
| **B - `@governed_tool`** | Your tool owns the Knowledge call. It re-consults on every invocation. The agent never sees a token. |

## Prerequisites

- A running Knowledge deployment. [Contact us](/pilot) if you do not have one.
- Python 3.11+.
- Pattern B needs an API key for the tenant. Pattern A does not - verification uses only the public JWKS.

## Install

```bash
pip install -e path/to/knowledge-runtime
```

PyPI publication is a follow-up.

---

## Pattern A - verify a verdict you receive

### The primitive

```python
from knowledge_runtime import verify_verdict, VerdictVerificationError

JWKS_URL = "https://knowledge.acme-bank.com/knowledge/v1/tenants/acme-bank/jwks"

def refund_customer(tx: str, amount: int, signed_verdict: str):
    try:
        verify_verdict(
            token=signed_verdict,
            jwks_url=JWKS_URL,
            expected_bindings={
                "action": "refund.execute",
                "resource": tx,
                "parameters.amount_eur": amount,
            },
        )
    except VerdictVerificationError as e:
        raise PermissionError(f"refund refused ({e.code})") from e

    return call_refund_api(tx, amount)
```

`expected_bindings` is built from the actual call args. If the token attests to something different from what the caller is asking for, verification fails and the tool never executes.

### Demo 1 - normal flow

The agent consults Knowledge for a 40 EUR refund, then calls the tool with the matching amount.

```python
verdict = agent_calls_knowledge(action="refund.execute", tx="TX-456", amount=40)
refund_customer(tx="TX-456", amount=40, signed_verdict=verdict)
# Refund executes.
```

### Demo 2 - the agent skips Knowledge and hallucinates a verdict

The agent bypasses `/resolve` and fabricates a token - say the base64 of an LLM-invented JSON.

```python
hallucinated = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9..."  # made up

refund_customer(tx="TX-456", amount=40, signed_verdict=hallucinated)
# PermissionError : refund refused (bad_signature)
```

Depending on how far the token strays from valid JWS, you get `malformed_token` or `bad_signature`. Either way the tool body never runs.

### Demo 3 - the agent consults for 40 EUR but calls the tool with 4000 EUR

The agent gets a real verdict for 40, then tries to reuse it for 4000.

```python
verdict_for_40 = agent_calls_knowledge(action="refund.execute", tx="TX-456", amount=40)
refund_customer(tx="TX-456", amount=4000, signed_verdict=verdict_for_40)
# PermissionError : refund refused (binding_mismatch)
```

`expected_bindings["parameters.amount_eur"]` is 4000 (built from the actual call arg). The token carries 40. Mismatch, refused.

---

## Pattern B - decorate a tool and let it self-consult

### Configure

```python
from knowledge_runtime import configure

configure(
    knowledge_url="https://knowledge.acme-bank.com",
    tenant_slug="acme-bank",
    api_key=os.environ["AGENT_API_KEY"],
)
```

### Decorate

```python
from knowledge_runtime import governed_tool

@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
)
def refund_customer(tx: str, amount: int, reason: str = "") -> dict:
    return call_refund_api(tx, amount)
```

### Normal flow

```python
refund_customer(tx="TX-456", amount=40)
```

At each call, the decorator :

1. POSTs `/knowledge/v1/resolve` with `action_type="refund.execute"`, resource `TX-456`, `parameters.amount=40`.
2. Extracts `signed_verdict` from the response.
3. Verifies signature + expected bindings against the call args.
4. On success, runs the function body.

Because the decorator itself builds the resolve request from the current call args, escalation attacks like Pattern A / Demo 3 do not apply : the verdict is always for the args you actually passed. Pattern B protects against the tool being executed without a Knowledge decision. It does NOT protect the Knowledge call itself from being fed bad args by a compromised tool.

---

## Errors

Both patterns raise `VerdictVerificationError` with a machine-readable `.code` :

| Code | Cause |
|---|---|
| `malformed_token` | The JWS could not be parsed. Also raised in Pattern B if `/resolve` returned no `signed_verdict` (advisory-only deployment). |
| `unknown_kid` | The JWKS did not contain the token's `kid` even after refresh. |
| `bad_signature` | The signature did not verify against any known key. |
| `expired` | The current time is past `expires_at`. |
| `outcome_not_allowed` | Verdict outcome is `blocked` or `approval_required`, not `allowed`. |
| `binding_mismatch` | One expected binding did not match the token. `.details` carries the failing key. |
| `actor_mismatch` | The token's `actor` does not match the authenticated caller principal. |
| `on_behalf_of_unauthenticated` | The caller relies on `on_behalf_of` but the flag says it was not authenticated. |
| `jwks_fetch_failed` | HTTP error fetching the JWKS document. |

## Where is the public key

The verifying public key lives in a JWKS document served by Knowledge itself :

```
GET https://knowledge.<your-deployment>/knowledge/v1/tenants/<slug>/jwks
```

Standard JWKS format. Rotation is transparent : when a token arrives with an unknown `kid`, the runtime refetches the JWKS once and retries.

- **Pattern A** : pass the URL to `verify_verdict(..., jwks_url=...)`.
- **Pattern B** : `configure()` derives the URL from `knowledge_url + tenant_slug`. Override with `jwks_url=` if the deployment routes JWKS through a different host.

The runtime caches the JWKS for 5 minutes by default.

---

## Next

- **[Wrap your own MCP server with enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement)** - the same `verify_verdict` primitive, applied to tools exposed over MCP.
- **[Enforcement](/product/enforcement)** - the full model, the four-actor trust chain, adoption paths.
