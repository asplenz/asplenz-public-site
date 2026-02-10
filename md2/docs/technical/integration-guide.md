# Integration Guide

This guide walks you through integrating Horizon into your application.

---

## Prerequisites

- API key (provided during onboarding)
- HTTP client in your language of choice

---

## Step 1: Identify What to Seal

Horizon seals **facts** — atomic declarations that you want to prove later.

**Good candidates for sealing:**
- Decisions (approvals, rejections, escalations)
- AI recommendations and their context
- Human overrides of automated systems
- Compliance-relevant events
- Audit trail entries

**Not typically sealed:**
- High-frequency telemetry (use logs instead)
- Temporary state (use a database instead)
- Large binary files (seal the hash, store the file elsewhere)

---

## Step 2: Design Your Payload Schema

The `custom_payload` field accepts any JSON object. Design a schema that captures the information you'll need for audits.

**Example: AI Recommendation System**

```json
{
  "custom_payload": {
    "type": "RECOMMENDATION",
    "model_id": "gpt-4-turbo",
    "model_version": "2024-01-15",
    "input_summary": "Customer requested loan modification",
    "recommendation": "Approve with conditions",
    "confidence": 0.87,
    "conditions": ["Income verification required", "Property appraisal pending"]
  }
}
```

**Example: Human Override**

```json
{
  "custom_payload": {
    "type": "OVERRIDE",
    "original_recommendation": "fact-01HRX7F1MA",
    "override_decision": "Reject",
    "justification": "Customer has outstanding disputes",
    "risk_flags": ["DISPUTE_ACTIVE", "INCOME_UNVERIFIED"]
  }
}
```

---

## Step 3: Choose Your Stream Strategy

**Option A: One stream per case/entity**
```
/streams/loan-12345/facts
/streams/loan-67890/facts
```
- Pros: Easy to export complete case history
- Cons: Many streams to manage

**Option B: One stream per category**
```
/streams/loan-decisions/facts
/streams/fraud-alerts/facts
```
- Pros: Fewer streams, easier monitoring
- Cons: Must filter by entity in queries

**Option C: Hybrid**
```
/streams/loan-12345/facts          # High-value cases
/streams/bulk-approvals-2024-01/facts  # Batch operations
```

---

## Step 4: Implement Sealing

### Python Example

```python
import requests

HORIZON_URL = "https://api.horizon.example.com"
API_KEY = "your-api-key"

def seal_decision(stream_id: str, actor: str, decision: dict, client_ref: str = None):
    """Seal a decision fact into Horizon."""
    response = requests.post(
        f"{HORIZON_URL}/streams/{stream_id}/facts",
        headers={
            "Content-Type": "application/json",
            "X-API-Key": API_KEY
        },
        json={
            "actor": actor,
            "custom_payload": decision,
            "client_ref": client_ref  # For idempotency
        }
    )
    response.raise_for_status()
    return response.json()

# Usage
fact = seal_decision(
    stream_id="loan-12345",
    actor="credit-officer@acme-corp.com",
    decision={
        "type": "APPROVAL",
        "amount": 50000,
        "terms": "36 months at 5.9%"
    },
    client_ref="loan-12345-approval-v1"
)

print(f"Sealed: {fact['fact_id']} at {fact['sealed_at_iso']}")
```

### JavaScript/Node.js Example

```javascript
const HORIZON_URL = "https://api.horizon.example.com";
const API_KEY = "your-api-key";

async function sealDecision(streamId, actor, decision, clientRef = null) {
  const response = await fetch(`${HORIZON_URL}/streams/${streamId}/facts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY
    },
    body: JSON.stringify({
      actor: actor,
      custom_payload: decision,
      client_ref: clientRef
    })
  });

  if (!response.ok) {
    throw new Error(`Seal failed: ${response.status}`);
  }

  return response.json();
}

// Usage
const fact = await sealDecision(
  "loan-12345",
  "credit-officer@acme-corp.com",
  {
    type: "APPROVAL",
    amount: 50000,
    terms: "36 months at 5.9%"
  },
  "loan-12345-approval-v1"
);

console.log(`Sealed: ${fact.fact_id} at ${fact.sealed_at_iso}`);
```

---

## Step 5: Handle Retries with Idempotency

Network failures happen. Use `client_ref` to ensure exactly-once sealing:

```python
import time

def seal_with_retry(stream_id, actor, decision, client_ref, max_retries=3):
    """Seal with automatic retry and idempotency."""
    for attempt in range(max_retries):
        try:
            return seal_decision(stream_id, actor, decision, client_ref)
        except requests.RequestException as e:
            if attempt == max_retries - 1:
                raise
            time.sleep(2 ** attempt)  # Exponential backoff
```

With `client_ref`, retried requests return the same fact — no duplicates.

---

## Step 6: Verify and Export

### Periodic Verification

Run integrity checks on your streams:

```python
def verify_stream(stream_id: str) -> bool:
    """Verify chain integrity."""
    response = requests.post(
        f"{HORIZON_URL}/streams/{stream_id}/verify",
        headers={"X-API-Key": API_KEY}
    )
    result = response.json()
    return result["valid"]
```

### Create Proof Bundle for Audit

```python
def create_bundle(stream_id: str) -> dict:
    """Create exportable proof bundle."""
    response = requests.post(
        f"{HORIZON_URL}/streams/{stream_id}/bundles",
        headers={"X-API-Key": API_KEY}
    )
    return response.json()
```

---

## Best Practices

### 1. Seal at Decision Time

Seal immediately when the decision is made, not later in a batch process:

```python
# Good: Seal immediately
approval = approve_loan(application)
seal_decision(stream_id, actor, approval)  # ← Right after

# Bad: Seal later
approvals = process_batch(applications)
for a in approvals:
    seal_decision(...)  # ← Delayed, less trustworthy
```

### 2. Include Context

Capture enough context to understand the decision later:

```python
# Good: Rich context
seal_decision(stream_id, actor, {
    "type": "RECOMMENDATION",
    "decision": "Approve",
    "inputs_considered": ["credit_score", "income", "employment"],
    "model_version": "v2.3.1",
    "threshold_used": 0.75
})

# Bad: Minimal context
seal_decision(stream_id, actor, {
    "approved": True
})
```

### 3. Use Meaningful Actors

The `actor` field should identify who or what made the decision:

```python
# Human decisions
actor = "jane.doe@acme-corp.com"

# AI systems
actor = "system:recommendation-engine-v2"

# Automated rules
actor = "rule:auto-approve-under-1000"
```

### 4. Design for Auditability

Think about the questions auditors will ask:
- "Show me all decisions for this customer"
- "Who approved this and when?"
- "What information was available at decision time?"

Design your payloads and streams to answer these questions easily.

---

## Next Steps

1. [API Reference](api-reference.md) — Complete endpoint documentation
2. [Guarantees](guarantees.md) — Understand what Horizon proves
3. [API Channel](channels/api.md) — Advanced patterns and use cases
