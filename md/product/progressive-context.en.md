---
title: Progressive context
description: A component of the agentic loop. The caller sends what it has, Knowledge tells it what is still needed to reach a verdict. Policy changes ship without redeploying consumers.
locale: en
kicker: Product - Progressive context
---

Traditional decision systems require the calling application to know upfront what information a decision may require. Applications therefore tend to collect a predefined set of fields before submitting a case, even when only a subset is relevant to the decision at hand. As rules evolve, these data requirements can also change, creating dependencies between policy logic and the applications that consume it.

Progressive Context removes that upfront requirement. A decision can start with the information already available and progressively request only the additional context needed for the specific case, until a decision can be reached.

Two dependency-direction properties follow from this :

**Direction 1 - the caller sends what it has, Knowledge tells it what is still needed.** Instead of the agent shipping the full context up-front (and failing when a field is missing or wrong), the agent iterates : `/resolve` returns `required_context` with schema + allowed_values + format for each missing field, the agent acquires it, re-consults, until the verdict is reached.

**Direction 2 - policies can change without changing every caller.** The agent does not need to know the policy schema in advance. It sends what it has (potentially nothing), Knowledge dictates the next required fields. **When policies change - new field, renamed field, new required condition - the agent auto-adapts.** No consumer redeployment.

## The API contract

```
POST /knowledge/v1/resolve
{
  "action_type": "sp_offer_eligibility",
  "context": {
    "product.complexity": { "value": "highly_complex", "source": "product_master" }
  }
}
```

Response when more context is needed :

```
{
  "operation_status": "incomplete",
  "required_context": [
    {
      "field": "client.classification",
      "reason": "required by rul-sp-elig-highly-complex",
      "type": "enum",
      "allowed_values": ["retail", "professional", "accredited"]
    }
  ]
}
```

Response when a verdict is reached :

```
{
  "operation_status": "complete",
  "verdict": "blocked",
  "cited_rules": [...],
  "consultation_id": "cns-...",
  "normative_hash": "sha256:...",
  "signed_verdict": "eyJhbGc..."
}
```

## Where the fields come from

Knowledge tells the caller *what* is needed. The caller decides *how* to obtain it : already available in the customer record or CRM, computed elsewhere in the caller's own systems, returned by a verification or screening provider, extracted by an AI agent from an existing document or conversation, or genuinely unknown, in which case ask the user.

**Knowledge determines what the policy needs. The caller determines how to get it.**

## Two-stage algorithm

Under the hood, `/resolve` runs the two-stage algorithm from `docs/specs/knowledge-resolve-spec-v1.md` :

**Stage 1 - scope narrowing.** Which rules apply cannot yet be determined because scope-narrowing fields are missing. Returns the fields that would move rules from `undetermined` to `applicable` (parallel minimum, all at once).

**Stage 2 - condition evaluation.** Applicable rules are known, but the condition inputs (`{field, op, threshold}` inputs) are missing. Returns those.

The caller sees a flat list of `required_context` items ; the two stages are transparent. Each item carries schema metadata (`type`, `allowed_values`, `min`, `max`, `format`, `description`) sourced from the tenant's `scope_schema`, so the caller can construct valid queries without a separate lookup.

## Change rules without rewriting your applications

Traditionally, applications are built around the information a decision engine expects. When those requirements change, the applications consuming the decision may need to change too. With Progressive Context, callers can start with what they have and retrieve additional information only when it is required.

Concrete example. Today the caller sends `[jurisdiction, client_class, asset_class, ticker, amount]`. Compliance adds a new rule that needs `beneficial_owner_verified`. With a hardcoded caller, the new field is not sent, the rule cannot evaluate, verdict is wrong or partial.

With `required_context`, the flow becomes :

1. Caller sends what it has.
2. Knowledge returns `"missing: beneficial_owner_verified"` with schema `{type: boolean, source_requirement: verified}`.
3. Caller looks up its **fetcher registry** for that field.
4. Fetcher calls the KYC vendor, acquires the value.
5. Caller re-consults with the enriched context.
6. Verdict is reached.

**No caller redeployment.** The only change is a one-line addition to the fetcher registry the day the compliance team decides to require the new field.

In architectural terms, the dependency between the caller and the policy's context requirements is inverted : the policy declares what it needs, the caller no longer declares what it can send.

The registry can be as simple as a Python dict :

```python
FETCHERS = {
    "beneficial_owner_verified": kyc_vendor.check,
    "portfolio_exposure_pct":    portfolio_service.exposure_of,
    "risk_score":                risk_engine.score_of,
    # ...
}

def acquire(field, context):
    return FETCHERS[field](context)
```

Or read from a config file, or discovered via a Knowledge-hosted `/v1/field-fetchers` endpoint (roadmap - see `FIELD-FETCHER-REGISTRY` in `docs/engineering/backlog-summary.md`).

## Fact provenance

Every context field is a `Fact` object carrying the raw value plus provenance :

```
{
  "value": "verified",
  "source": "IDV_vendor",
  "verification_status": "verified",
  "confidence": 0.94
}
```

Rules can require a minimum `verification_status` or restrict `acceptable_sources`. That means a rule can express *"identity must be verified by a KYC vendor, not asserted by the user"* declaratively, rather than as caller-side plumbing.

For AI-driven flows where the same fact can come from an LLM extraction, a system of record or the user directly, this distinction is what separates a probabilistic input from an authoritative one.

## What this changes at the organisational level

- **Compliance and product teams stop blocking each other.** Compliance adds a new required field to a rule ; the caller's team adds a one-line fetcher entry. No coordinated release.
- **Onboarding new agents becomes cheaper.** A new agent does not need to know the tenant's full context schema. It probes with what it has, Knowledge tells it what to acquire.
- **Deprecation of fields is graceful.** Compliance removes a field from a rule ; the caller keeps sending it (harmless) or removes the fetcher entry (also harmless).

## Related

| Read next | Why |
|---|---|
| [What is Knowledge ?](/docs/what-is-knowledge) | The full mental model of `/resolve` with a worked example |
| [Enforcement](/product/enforcement) | Every verdict, whether complete or via progressive resolution, can be signed |
| [Auditability](/product/auditability) | Consultation records the progressive-resolution path |
