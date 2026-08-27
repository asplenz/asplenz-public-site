---
title: knowledge-runtime (Python)
description: The reference Policy Enforcement Point SDK - governed_tool decorator, verify_verdict, JWKS cache, guard-rails.
locale: en
kicker: Docs / SDK reference - Stable
---

`knowledge-runtime` is the Python SDK that turns any function into a Policy Enforcement Point (PEP). It handles signature verification, binding checks, JWKS caching, and the /resolve loop.

## Install

```bash
pip install knowledge-runtime
```

Depends on `httpx`, `python-jose` (ES256), `pydantic` (v2). Python 3.10+.

## Configure

```python
from knowledge_runtime import KnowledgeClient

client = KnowledgeClient(
    base_url="https://knowledge.asplenz.com/tnt-acme",
    api_key=os.environ["KNOWLEDGE_API_KEY"],
    jwks_cache_ttl_seconds=300,
    default_verdict_ttl_seconds=60,
)
```

One client instance per tenant. Thread-safe. Reuse across the process.

## The `@governed_tool` decorator

The primary interface.

```python
from knowledge_runtime import governed_tool

@governed_tool(
    action="refund.execute",
    resource="tx",              # arg name that carries the resource
    bind=["amount"],            # arg names that become parameter bindings
    client=client,
    on_behalf_of=lambda: current_user_id(),
)
def refund_customer(tx: str, amount: int, reason: str = ""):
    return refund_api.execute(tx, amount, reason=reason)
```

**On each call** :

1. Extract `(tx, amount)` from the call arguments.
2. Call `client.check(action="refund.execute", resource=tx, parameters={"amount": amount}, on_behalf_of=...)`.
3. If verdict is `allowed`, verify the signature, verify bindings match, then invoke the wrapped function.
4. If verdict is `blocked`, raise `KnowledgePolicyBlocked(verdict)`.
5. If verdict is `approval_required`, raise `KnowledgeApprovalRequired(consultation_id, approval_id)`.

The wrapped function only runs if enforcement authorised it.

## Guard-rails

The decorator refuses to start if configuration is incoherent. Fail-loud, not fail-silent :

- `bind=["amount"]` but the function has no `amount` parameter -> `ConfigurationError` at import time.
- `resource="tx"` but `tx` is not a positional or keyword arg -> `ConfigurationError`.
- `client=None` and no default client set -> `ConfigurationError`.

## verify_verdict (low-level)

For custom PEP code that does not fit the decorator :

```python
from knowledge_runtime import verify_verdict

payload = verify_verdict(
    jws=signed_verdict_string,
    jwks_url="https://knowledge.asplenz.com/tnt-acme/v1/jwks",
    expected_actor="agn-rm-copilot",
    expected_action="refund.execute",
    expected_resource="TX-456",
    expected_bindings={"amount": 40},
    max_age_seconds=60,
)
```

Returns the decoded claims dict on success. Raises typed errors :

- `SignatureInvalid`
- `ExpiredVerdict`
- `BindingMismatch(field, expected, got)`
- `KidNotFound(kid)`

## /resolve loop with fetcher registry

```python
from knowledge_runtime import resolve_with_fetchers

fetchers = {
    "client.classification": crm.get_classification,
    "client.knowledge_experience_level": crm.get_ke_level,
    "solicitation.type": lambda ctx: llm_extract(ctx["conversation"], "solicitation_type"),
}

result = resolve_with_fetchers(
    client=client,
    action="structured_note.propose",
    resource=product_id,
    initial_context={"client.id": {"value": client_id, "source": "crm"}},
    fetchers=fetchers,
    max_rounds=8,
    on_behalf_of=user_id,
)
```

Returns the final complete result (with signed_verdict) or raises `TooManyResolveRounds` if `max_rounds` is exhausted.

## JWKS cache

Automatic. First verification per tenant fetches the JWKS, subsequent verifications reuse the cached keys until TTL expires. On `KidNotFound`, the cache force-refreshes once before giving up (handles rotation).

## Spent-verdict store (exactly-once)

```python
from knowledge_runtime.spent import RedisSpentStore

store = RedisSpentStore(redis_url="redis://localhost:6379")

@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    client=client,
    spent_store=store,
)
def refund_customer(tx: str, amount: int):
    ...
```

The store records `{iss, consultation_id}` on each authorised call. A replay within TTL is rejected with `VerdictAlreadySpent`.

Store implementations : `RedisSpentStore`, `InMemorySpentStore` (dev only), or your own `SpentStore` implementation.

## Testing helpers

```python
from knowledge_runtime.testing import fake_verdict, InMemoryKnowledgeClient

fake = InMemoryKnowledgeClient(tenant_slug="tnt-test")
fake.set_verdict("refund.execute", "TX-*", verdict="allowed")

@governed_tool(action="refund.execute", resource="tx", bind=["amount"], client=fake)
def refund_customer(tx: str, amount: int):
    return f"refunded {amount} on {tx}"

assert refund_customer("TX-1", amount=40) == "refunded 40 on TX-1"
```

## Repo pointer

Source : `apps/knowledge/src/knowledge-runtime/` in the monorepo. Test suite (24 tests) : `apps/knowledge/src/knowledge-runtime/tests/`.

## Related

- [Quickstart : governed tool](/docs/quickstart-governed-tool) - 5-minute hands-on.
- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - what the SDK verifies.
- [Wrap your own MCP server with enforcement](/docs/guides/wrap-your-own-mcp-server-with-enforcement) - if your stack is MCP, apply the same `verify_verdict` primitive at the tool-call interceptor.
