---
title: Migrate from advisory to enforcement
description: A three-stage playbook for turning on hard enforcement without breaking traffic. Deployment mode lives on the PEP, not on Knowledge.
locale: en
kicker: Docs / Guides - Stable
---

Turning on signed-verdict enforcement in production is not a boolean. This playbook covers a three-stage migration that lets you validate parity before the tool boundary starts refusing calls.

**Deployment mode lives on the PEP, not on Knowledge.** Knowledge always returns the same verdict for the same context. It never blocks, never runs in "shadow mode" itself. The PEP (your tool wrapper, your MCP interceptor, your custom code) is the party that decides whether to advise, orchestrate an approval, or refuse the call. Every stage below is a PEP-side change ; nothing on Knowledge changes across the migration.

## Stage 1 : advisory (shadow)

**Goal** : Knowledge is consulted + the verdict is verified, but the PEP does not refuse. You measure parity against the current logic.

**Setup** :

- The PEP calls `/check` or `/resolve`, verifies the signature, checks bindings.
- On a verdict outcome other than `allowed` : log the intended refusal to structured logs + a monitoring dashboard, then invoke the downstream API anyway.
- On a bind mismatch : same - log + proceed.

**Config example** with `knowledge-runtime` (`require_outcome_allowed=False` skips the outcome check while keeping signature + bindings verified) :

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    require_outcome_allowed=False,
)
def refund_customer(tx: str, amount: int):
    return refund_api.execute(tx, amount)
```

Or with the lower-level primitive when you want full control :

```python
try:
    claims = verify_verdict(
        token=signed,
        jwks_url=JWKS_URL,
        expected_bindings=expected,
        require_outcome_allowed=False,
    )
    outcome = claims["decision"]["outcome"]
    if outcome != "allowed":
        log.info("would_have_blocked", extra={"outcome": outcome, ...})
except VerdictVerificationError as e:
    log.warning("verdict_verify_failed", extra={"code": e.code})
# Proceed with the wrapped call either way in Stage 1
return refund_api.execute(tx, amount)
```

**What to measure** :

- **False positives** : calls Knowledge would have blocked but that were legitimate business. These are policy errors ; fix in the back-office (adjust threshold, add an override, retire the rule).
- **False negatives** : calls Knowledge allowed but that were actually risky. These are rule gaps ; add new rules.
- **True positives** : calls Knowledge correctly blocked. These are the value you're buying.

**Exit criteria** : false-positive rate below your tolerance (target : zero in critical paths).

## Stage 2 : approval workflow

**Goal** : Knowledge verdicts of `approval_required` become real approval requests instead of being ignored. Human review catches remaining edge cases before hard enforcement.

**Setup** : still on the PEP side. Application code inspects the verdict and orchestrates :

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    require_outcome_allowed=False,
)
def refund_customer(tx: str, amount: int) -> RefundOutcome:
    verdict = get_last_verdict()  # inspect what the decorator retrieved
    if verdict.outcome == "blocked":
        raise PermissionError("refund refused by policy")
    if verdict.outcome == "approval_required":
        approval_id = create_approval(
            action="refund.execute",
            justification="...",
            context=verdict.context,
        )
        return {"status": "pending_approval", "approval_id": approval_id}
    return refund_api.execute(tx, amount)
```

The approval itself is created by your code calling `POST /v1/approvals` with the same `context` that produced the verdict. Knowledge re-derives the covered rules from that context (see [approvals reference](/docs/api-reference/approvals)).

**What changes for users** : previously-invisible policy triggers now become approval requests. Route them via Slack / email / back-office UI. Deciders learn which cases are edge and which are real risks.

**Exit criteria** : approval volume stabilises at a sustainable rate (proxy for : the calibration is right and users understand the flow).

## Stage 3 : hard enforcement

**Goal** : PEP refuses on any verdict other than `allowed`. Callers must not send operations that would be refused.

**Setup** : default `@governed_tool` behavior — `require_outcome_allowed=True` (the default). The decorator raises `VerdictVerificationError(code="outcome_not_allowed")` on `blocked` or `approval_required`.

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
)
def refund_customer(tx: str, amount: int):
    return refund_api.execute(tx, amount)
```

**When to skip stages** :

- **Greenfield deployments** : go straight to Stage 3. No legacy behaviour to preserve.
- **Compliance-critical existing flows** : always run all three stages. Skipping shadow means learning parity issues in production traffic.

## Rollback

Every stage is a PEP config change, no code redeploy required. Flip your PEP's `require_outcome_allowed` flag (or the equivalent in your custom interceptor) via env var :

```python
require_outcome_allowed = os.environ.get("PEP_ENFORCE", "true") == "true"
```

Set `PEP_ENFORCE=false` to instantly downgrade to advisory in an incident. Knowledge continues emitting signed verdicts (audit trail preserved), the PEP just stops refusing.

## Observability during migration

Metrics to watch (all recorded PEP-side ; Knowledge itself has no notion of enforcement mode) :

- `pep_calls_total{action, outcome, mode}` - overall volume.
- `pep_would_have_blocked_total{action, rule}` - shadow signal.
- `pep_approvals_created_total{action}` - approval workflow volume.

Alert on : sustained `would_have_blocked` growth (compliance is right, callers are wrong) ; approval SLA breaches (need more deciders or better calibration).

## Rehearse on staging

Before flipping stages in production, run a load test on staging in the target mode. Verify latency + refusal semantics match expectations.

## Related

- [Emergency response](/docs/guides/emergency-response) - if you need to disable enforcement fast.
- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - what the PEP does at each mode.
- [Overrides, approvals, pauses](/docs/concepts/overrides-approvals-pauses) - the approval workflow model.
