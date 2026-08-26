---
title: Quickstart - governed tool in Python
description: Five minutes hands-on. Install the runtime, decorate one function, see enforcement fire on a tampered call.
locale: en
kicker: Docs - Getting started
---

Five minutes. Ends with a real signed_verdict verification and a working `binding_mismatch` refusal.

## Prerequisites

- A running Knowledge deployment (design-partner tier). If you do not have one, [contact us](/pilot).
- An agent API key for the tenant you want to consult. Passed as `AGENT_API_KEY` env var below.
- Python 3.11+ available.

## Install

```bash
pip install fastapi uvicorn                      # for the demo service
pip install -e path/to/knowledge-runtime         # the Python SDK (editable from monorepo)
```

(PyPI publication of `knowledge-runtime` is a follow-up. For now, install from the monorepo checkout.)

## Configure

```python
from knowledge_runtime import configure

configure(
    knowledge_url="https://knowledge.your-deployment.com",
    tenant_slug="acme-bank",
    api_key=os.environ["AGENT_API_KEY"],
)
```

## Decorate a function

```python
from knowledge_runtime import governed_tool

@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    security_irrelevant=["reason"],
)
def refund_customer(tx: str, amount: int, reason: str = "") -> dict:
    # Actual business call - only reached AFTER Knowledge signs off
    return call_refund_api(tx, amount)
```

That is the whole integration. The decorator :

1. Registers the tool with the runtime at import time.
2. Wraps the function so a direct call triggers `/resolve` → verify signed_verdict → check bindings → execute.
3. Preserves `__wrapped__` so tool-schema generators (LangChain, LlamaIndex, MCP) see the intended signature.

## Try the happy path

```python
result = refund_customer(tx="TX-456", amount=40)
# {"tx": "TX-456", "amount": 40, "provider_ref": "re_...", ...}
```

Under the hood :

1. Wrapper calls `/knowledge/v1/resolve` with `action_type="refund.execute"`, `context.scope={tx: "TX-456"}`, `context.metrics={amount: 40}`.
2. Knowledge returns a verdict + `signed_verdict` JWS envelope.
3. Wrapper fetches the JWKS from `/knowledge/v1/tenants/acme-bank/jwks` (cached, 5 min TTL).
4. Wrapper verifies signature, expiry, outcome, and bindings against the actual call args.
5. All checks pass → the function body runs → the refund API is called.

## Try a tampered call

The `@governed_tool` verifies bindings between what Knowledge signed and what the caller passed. To see enforcement fire, simulate the "attacker escalates amount after consulting" attack :

```python
# Consult Knowledge for a small amount (40 EUR)
resolved = client.post("/knowledge/v1/resolve", json={
    "action_type": "refund.execute",
    "context": {"scope": {"tx": "TX-456"}, "metrics": {"amount": 40}},
}).json()

# Attempt to use the resulting signed_verdict for a LARGE amount (4000 EUR)
# by manually calling the wrapper with a different value :
try:
    refund_customer(tx="TX-456", amount=4000)  # NOT 40
except VerdictVerificationError as e:
    assert e.code == "binding_mismatch"
    print(f"Refused : {e}")
```

The wrapper always re-consults Knowledge with the current args, so this specific attack pattern is symmetric ; the strongest tampering proof lives in the runtime unit tests (`test_governed_tool.py::test_decorator_end_to_end_amount_tampered`) which use a stub Knowledge that deliberately signs a mismatched envelope.

## Guard-rails

Import-time linting :

```python
from knowledge_runtime import lint_bindings
for warning in lint_bindings(refund_customer):
    print(warning)
# governed_tool "refund_customer" : arg "reason" is neither in `bind`,
# `resource`, nor `security_irrelevant`. Confirm this argument does not
# affect authorization.
```

In your test suite :

```python
from knowledge_runtime import verify_binding_completeness

verify_binding_completeness(
    refund_customer,
    sample_call={"tx": "TX-456", "amount": 40, "reason": "duplicate"},
    variations={"amount": 4000, "tx": "TX-999", "reason": "test"},
    build_resolve_body=<your body-builder>,
)
```

Asserts that mutating a bound arg changes the resolve body and mutating an unbound one does not.

## What if no verdict signing key is configured (advisory-only deployment) ?

The runtime raises `VerdictVerificationError(code="malformed_token")` at call time with a message pointing at the deployment configuration. Advisory-only deployments should NOT use `@governed_tool` ; they should call `/check` or `/resolve` directly and act on the verdict advisorily.

## Next

- **[Quickstart : MCP proxy in 5 minutes](/docs/quickstart-mcp-proxy)** - same enforcement, MCP transport.
- **[Enforcement](/product/enforcement)** - the full model, the four-actor trust chain, adoption paths.
- **[Integrations](/product/integrations)** - framework compatibility matrix.
