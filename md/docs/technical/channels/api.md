# API Channel

The API channel is designed for programmatic integration with your systems.

---

## Use Cases

| Scenario | Description |
|----------|-------------|
| **Backend Integration** | Seal decisions from your application servers |
| **AI/ML Pipelines** | Capture model recommendations and their context |
| **Automation Systems** | Record automated decisions and rule executions |
| **Batch Processing** | Seal high-volume decisions efficiently |

---

## Characteristics

| Property | Value |
|----------|-------|
| Protocol | HTTPS / REST |
| Format | JSON |
| Authentication | API Key |
| Latency | < 100ms typical |
| Throughput | 1,000+ facts/minute |

---

## Integration Patterns

### Pattern 1: Synchronous Sealing

Seal the fact as part of your decision flow:

```
User Request → Your System → Decision → Seal Fact → Response
```

**Pros:** Fact is sealed before response is sent
**Cons:** Adds latency to user request

```python
def process_loan_application(application):
    decision = evaluate_application(application)

    # Seal synchronously
    fact = seal_decision(
        stream_id=f"loan-{application.id}",
        actor=get_current_user(),
        decision=decision
    )

    # Include fact_id in response
    return {
        "status": decision.status,
        "horizon_fact_id": fact["fact_id"]
    }
```

### Pattern 2: Asynchronous Sealing

Seal in a background queue:

```
User Request → Your System → Decision → Queue → Response
                                          ↓
                                    Background: Seal Fact
```

**Pros:** No added latency
**Cons:** Small delay before fact is sealed

```python
from your_queue import enqueue

def process_loan_application(application):
    decision = evaluate_application(application)

    # Queue for async sealing
    enqueue("seal_fact", {
        "stream_id": f"loan-{application.id}",
        "actor": get_current_user(),
        "decision": decision,
        "client_ref": f"loan-{application.id}-decision-{uuid()}"
    })

    return {"status": decision.status}

# Background worker
def seal_fact_worker(job):
    seal_decision(**job)
```

### Pattern 3: Event-Driven Sealing

Seal based on domain events:

```python
from your_events import subscribe

@subscribe("LoanApproved")
def on_loan_approved(event):
    seal_decision(
        stream_id=f"loan-{event.loan_id}",
        actor=event.approved_by,
        decision={
            "type": "APPROVAL",
            "amount": event.amount,
            "terms": event.terms
        },
        client_ref=f"loan-{event.loan_id}-approved-{event.timestamp}"
    )
```

---

## Idempotency Deep Dive

### Why Idempotency Matters

Network failures, timeouts, and retries are inevitable. Without idempotency, you might seal duplicate facts:

```
Request 1 → Horizon (sealed) → Response lost
Request 1 (retry) → Horizon (sealed again!) → Response received

Result: Same decision sealed twice ❌
```

### How `client_ref` Works

With `client_ref`, Horizon returns the existing fact instead of creating a duplicate:

```
Request 1 (client_ref="abc") → Horizon (sealed) → Response lost
Request 1 (client_ref="abc") → Horizon (returns existing) → Response received

Result: Same decision sealed once ✅
```

### Generating `client_ref`

The key should be **deterministic** for the same logical decision:

```python
# Good: Deterministic from business context
client_ref = f"loan-{loan_id}-approval-{decision_version}"

# Good: Deterministic from event
client_ref = f"event-{event_id}"

# Bad: Random (defeats the purpose)
client_ref = str(uuid.uuid4())  # Different on retry!
```

---

## Error Handling

### Transient Errors (Retry)

| HTTP Status | Meaning | Action |
|-------------|---------|--------|
| 429 | Rate limited | Wait and retry |
| 500 | Server error | Retry with backoff |
| 502, 503, 504 | Gateway/unavailable | Retry with backoff |

### Permanent Errors (Don't Retry)

| HTTP Status | Meaning | Action |
|-------------|---------|--------|
| 400 | Invalid request | Fix the request |
| 401 | Unauthorized | Check API key |
| 404 | Not found | Check resource ID |

### Retry Implementation

```python
import time
import random

def seal_with_retry(stream_id, actor, decision, client_ref, max_retries=5):
    """Seal with exponential backoff and jitter."""
    for attempt in range(max_retries):
        try:
            return seal_decision(stream_id, actor, decision, client_ref)
        except requests.HTTPError as e:
            if e.response.status_code in [400, 401, 404]:
                raise  # Don't retry permanent errors
            if attempt == max_retries - 1:
                raise

            # Exponential backoff with jitter
            delay = (2 ** attempt) + random.uniform(0, 1)
            time.sleep(delay)
```

---

## Batch Sealing

For high-volume scenarios, seal facts concurrently:

```python
import concurrent.futures

def seal_batch(facts):
    """Seal multiple facts concurrently."""
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        futures = [
            executor.submit(
                seal_with_retry,
                fact["stream_id"],
                fact["actor"],
                fact["decision"],
                fact["client_ref"]
            )
            for fact in facts
        ]
        return [f.result() for f in futures]
```

---

## Monitoring

### Key Metrics to Track

| Metric | Purpose |
|--------|---------|
| `horizon.seal.latency` | Response time for seal requests |
| `horizon.seal.errors` | Error rate by type |
| `horizon.seal.retries` | Retry rate (indicates network issues) |
| `horizon.seal.daily_count` | Volume for capacity planning |

### Health Check

```python
def check_horizon_health():
    """Verify Horizon is reachable."""
    try:
        response = requests.get(
            f"{HORIZON_URL}/health",
            headers={"X-API-Key": API_KEY},
            timeout=5
        )
        return response.status_code == 200
    except:
        return False
```

---

## Security Considerations

### API Key Management

- Store API keys in secrets management (not in code)
- Rotate keys periodically
- Use different keys for different environments

### Payload Security

- Don't include PII in `custom_payload` unless required
- Consider hashing sensitive values before sealing
- Remember: sealed facts are immutable

### Network Security

- Always use HTTPS
- Verify TLS certificates
- Consider IP allowlisting for production

---

## Next

- [API Reference](../api-reference.md) — Complete endpoint documentation
- [Guarantees](../guarantees.md) — What Horizon proves
