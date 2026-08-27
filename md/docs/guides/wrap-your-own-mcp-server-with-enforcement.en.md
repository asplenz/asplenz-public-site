---
title: Wrap your own MCP server with enforcement
description: Add signed-verdict enforcement to your own MCP server by checking each tool call against Knowledge before executing it. Pattern + reference example.
locale: en
kicker: Docs / Guides - Stable
---

If your agent uses an MCP server with tools you own (customer refund, order cancellation, ticket creation, ...), you can add policy enforcement in front of those tools without changing how the agent interacts with them : the tool schema stays identical, the agent calls the same names, but each invocation is gated by a `verify_verdict` check against a signed decision from Knowledge.

This guide describes the pattern. Asplenz does not ship a supported proxy component - MCP transports, framework versions, and auth models vary too much for a one-size solution. A working reference implementation lives in the monorepo at `src/knowledge-mcp-proxy/` ; treat it as a starting point to copy and adapt to your stack.

## The pattern

For each tool invocation the agent makes :

1. **Extract the intended action** from the tool name and arguments (e.g. `refund_customer(tx="TX-456", amount=40)` → `action="refund.execute"`, `resource="TX-456"`, `parameters={"amount_eur": 40}`).
2. **Consult Knowledge** with `POST /knowledge/v1/resolve` using those bindings as `action_type` + `context`. Extract `signed_verdict` from the response.
3. **Verify** the signed verdict with `verify_verdict()` from `knowledge-runtime`, passing the same bindings as `expected_bindings`. Any mismatch is refused.
4. **Execute** the underlying tool only if verification passes. Otherwise return a structured MCP error carrying the refusal code.

## Minimal example

Assume you already have an MCP server whose handler dispatches on tool name. Add an interceptor that runs before the handler :

```python
from knowledge_runtime import verify_verdict, VerdictVerificationError
import httpx, os

KNOWLEDGE_URL = os.environ["KNOWLEDGE_URL"]
TENANT_SLUG = os.environ["TENANT_SLUG"]
API_KEY = os.environ["AGENT_API_KEY"]
JWKS_URL = f"{KNOWLEDGE_URL}/knowledge/v1/tenants/{TENANT_SLUG}/jwks"

# Map each MCP tool to a Knowledge action + which args bind.
TOOL_POLICY = {
    "refund_customer": {
        "action": "refund.execute",
        "resource_arg": "tx",
        "bind_args": ["amount"],
    },
    "cancel_order": {
        "action": "order.cancel",
        "resource_arg": "order_id",
        "bind_args": [],
    },
    # Tools not listed here pass through unchecked (read-only, non-governed).
}

async def intercept(tool_name: str, args: dict, run_underlying):
    policy = TOOL_POLICY.get(tool_name)
    if policy is None:
        return await run_underlying(tool_name, args)

    # 1. Extract bindings.
    action = policy["action"]
    resource = args.get(policy["resource_arg"]) if policy["resource_arg"] else None
    parameters = {b: args[b] for b in policy["bind_args"] if b in args}

    # 2. Consult Knowledge.
    async with httpx.AsyncClient(timeout=10.0) as client:
        resp = await client.post(
            f"{KNOWLEDGE_URL}/knowledge/v1/resolve",
            headers={"X-API-Key": API_KEY},
            json={
                "action_type": action,
                "context": {
                    "scope": {policy["resource_arg"]: resource} if resource else {},
                    "metrics": parameters,
                },
            },
        )
    if resp.status_code != 200:
        return mcp_error("knowledge_unreachable", resp.text[:200])
    signed = (resp.json() or {}).get("signed_verdict")
    if not signed:
        return mcp_error("unsigned_verdict", "advisory-only deployment")

    # 3. Verify against the args we are about to execute with.
    expected = {"action": action}
    if resource is not None:
        expected["resource"] = str(resource)
    for b in policy["bind_args"]:
        expected[f"parameters.{b}"] = args[b]

    try:
        verify_verdict(token=signed, jwks_url=JWKS_URL, expected_bindings=expected)
    except VerdictVerificationError as e:
        return mcp_error(e.code, str(e))

    # 4. Execute the real tool.
    return await run_underlying(tool_name, args)
```

`mcp_error` returns whatever your MCP framework expects for a tool-call error - typically an `isError: true` content block with a typed message.

## What Knowledge protects against

- **Agent skips Knowledge** - the agent tries to invoke the tool without going through `/resolve`. Impossible because the interceptor sits on the only exposed path.
- **Agent tampers with args between consult and execute** - `verify_verdict` compares the token's `authorization.parameters.*` claims against the actual call args. Mismatch → `binding_mismatch`.
- **Agent replays an expired verdict** - `expired` code.
- **Agent forges a verdict** - fails signature verification (`bad_signature`) or JWKS lookup (`unknown_kid`).

What Knowledge does NOT protect against : a compromised tool sending different args to Knowledge than what it then executes with. The interceptor and executor share the same process ; if the process is fully compromised, the trust boundary is broken.

## Reference implementation

The `src/knowledge-mcp-proxy/` directory in the monorepo has a working version of this pattern, including :

- YAML config with `tools:` mapping (name → `action` + `resource` + `bind`).
- Handling for both `stdio` and `streamable-http` MCP transports.
- Pass-through mode for non-governed tools.
- Test suite covering happy path and refusal cases.

Copy it, strip the parts you do not need, adapt the config shape and error format to your existing MCP framework. It is not a supported Asplenz component ; it is a starting point.

## What lives in Knowledge, what lives in your code

| Concern | Owner |
|---|---|
| Rule authoring, verdict computation, signing | Knowledge |
| JWKS distribution | Knowledge |
| `verify_verdict()` primitive (signature + bindings + expiry check) | `knowledge-runtime` SDK |
| MCP transport handling, tool schema, config mapping, error format | Your interceptor |
| Executing the underlying tool | Your code |

Keep the MCP glue thin. The security-critical work is the `verify_verdict` call ; everything else is transport wiring you can shape to your stack.

## Related

| Read next | Why |
|---|---|
| [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) | The JWS envelope, what claims it carries, why bindings work |
| [Four-actor trust model](/docs/concepts/four-actor-trust-model) | Where the interceptor sits in the trust chain |
| [Quickstart : governed tool in Python](/docs/quickstart-governed-tool) | The equivalent pattern for non-MCP Python tools |
