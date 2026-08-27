---
title: Migrate from advisory to enforcement
description: A three-stage playbook for turning on hard enforcement without breaking traffic.
locale: en
kicker: Docs / Guides - Stable
---

Turning on signed-verdict enforcement in production is not a boolean. This playbook covers a three-stage migration that lets you validate parity before the tool boundary starts refusing calls.

## Stage 1 : advisory-only (shadow mode)

**Goal** : Knowledge consults + logs but does not refuse. You measure parity against the current logic.

**Setup** :

- Deploy the PEP with `enforcement_mode: advisory`.
- On every intercepted call, the PEP calls `/check` or `/resolve`, verifies the signature, checks bindings.
- On a refusal that would have blocked : log the intended refusal to structured logs + a monitoring dashboard, then invoke the downstream API anyway.
- On a bind mismatch : same - log + proceed.

**Config example** (`knowledge-runtime`) :

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    client=client,
    enforcement_mode="advisory",
)
def refund_customer(tx: str, amount: int):
    return refund_api.execute(tx, amount)
```

**What to measure** :

- **False positives** : calls Knowledge would have blocked but that were legitimate business. These are policy errors ; fix in the back-office (adjust threshold, add an override, retire the rule).
- **False negatives** : calls Knowledge allowed but that were actually risky. These are rule gaps ; add new rules.
- **True positives** : calls Knowledge correctly blocked. These are the value you're buying.

**Exit criteria** : false-positive rate below your tolerance (target : zero in critical paths).

## Stage 2 : soft-fail (approval workflow)

**Goal** : Knowledge refuses convert to `approval_required` at the PEP layer, not hard refusal. Human review catches remaining edge cases before enforcement.

**Setup** :

- `enforcement_mode: approval_workflow`.
- On refusal, PEP creates an Approval via `/v1/approvals` and returns 202-Accepted to the caller with a status URL.
- Downstream call waits (or polls) for approval.
- On approve, verdict re-issued as `allowed` (via the Type-3 Override grant).

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    client=client,
    enforcement_mode="approval_workflow",
)
def refund_customer(tx: str, amount: int):
    ...
```

**What changes for users** : previously-invisible policy triggers now become approval requests. Route them via Slack / email / back-office UI. Deciders learn which cases are edge and which are real risks.

**Exit criteria** : approval volume stabilises at a sustainable rate (proxy for : the calibration is right and users understand the flow).

## Stage 3 : hard enforcement

**Goal** : refusals are terminal. Callers must not send operations that would be refused.

**Setup** :

- `enforcement_mode: enforce`.
- Refusals raise typed errors ; callers must handle them (retry with different parameters, escalate to human, abandon).

```python
@governed_tool(
    action="refund.execute",
    resource="tx",
    bind=["amount"],
    client=client,
    enforcement_mode="enforce",
)
def refund_customer(tx: str, amount: int):
    ...
```

**When to skip stages** :

- **Greenfield deployments** : go straight to Stage 3. No legacy behaviour to preserve.
- **Compliance-critical existing flows** : always run all three stages. Skipping shadow means learning parity issues in production traffic.

## Rollback

Every stage is a config change, no code redeploy required (with `knowledge-runtime` :

```python
client = KnowledgeClient(..., default_enforcement_mode=os.environ["KNOWLEDGE_ENFORCEMENT"])
```

Set `KNOWLEDGE_ENFORCEMENT=advisory` to instantly downgrade in an incident. The signed verdict is still emitted (audit trail preserved), just not blocking.

## Observability during migration

Metrics to watch :

- `governed_tool_calls_total{action, verdict, mode}` - overall volume.
- `governed_tool_would_have_blocked_total{action, rule}` - shadow signal.
- `governed_tool_approvals_created_total{action}` - approval workflow volume.

Alert on : sustained `would_have_blocked` growth (compliance is right, callers are wrong) ; approval SLA breaches (need more deciders or better calibration).

## Rehearse on staging

Before flipping stages in production, run a load test on staging in the target mode. Verify latency + refusal semantics match expectations.

## Related

- [Emergency response](/docs/guides/emergency-response) - if you need to disable enforcement fast.
- [Signed verdicts and PEP](/docs/concepts/signed-verdicts-and-pep) - what the PEP does at each mode.
- [Overrides, approvals, pauses](/docs/concepts/overrides-approvals-pauses) - the approval workflow model.
