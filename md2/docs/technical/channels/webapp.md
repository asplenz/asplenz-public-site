# Webapp Channel

The webapp provides a visual interface for viewing streams, inspecting facts, and verifying chain integrity.

---

## Use Cases

| Scenario | Description |
|----------|-------------|
| **Timeline Review** | Browse the decision history of a stream |
| **Audit Support** | Show auditors the proof timeline |
| **Chain Verification** | Verify integrity with one click |
| **Fact Inspection** | View full details of any sealed fact |

---

## Accessing the Webapp

Navigate to your Horizon instance:

```
https://horizon.yourcompany.com
```

Or for local development:

```
http://localhost:5173
```

---

## Features

### Stream Browser

View all streams for your tenant:

1. Log in with your credentials
2. Your streams are loaded automatically
3. See a list of all streams with their current head fact

| Column | Description |
|--------|-------------|
| `stream_id` | Click to view the timeline |
| `head_fact_id` | Most recent fact in the stream |
| `head_sealed_at` | When the last fact was sealed |
| `created_at` | When the stream was created |

### Timeline View

Visual representation of a stream's fact chain:

- Facts displayed in chronological order
- Each fact shows its key metadata
- Full `custom_payload` available for inspection
- Hash chain links visible

### Chain Verification

One-click integrity verification:

1. Open a stream's timeline
2. Click **Verify Chain**
3. See the result: ✅ Valid or ❌ Invalid

If valid, you'll see: `Valid (47 facts verified)`

If tampered, you'll see the specific fact where the chain broke.

### Fact Details

Click any fact to see:

| Field | Description |
|-------|-------------|
| `fact_id` | Unique identifier |
| `actor` | Who created the fact |
| `sealed_at` | Authoritative timestamp |
| `custom_payload` | Full business data |
| `fact_hash` | Cryptographic fingerprint |
| `prev_hash` | Link to previous fact |
| `attachments_manifest` | Sealed file references |

---

## Viewing vs. Sealing

The webapp is primarily a **viewer**, not a sealing interface.

| Action | Supported |
|--------|-----------|
| Browse streams | ✅ |
| View facts | ✅ |
| Verify chain | ✅ |
| Inspect payloads | ✅ |
| Seal new facts | Use API or Email |

For sealing facts, use the [API Channel](api.md) or [Email Channel](email.md).

---

## Audit Workflow

When working with auditors:

1. **Identify the stream** — Search by tenant and stream ID
2. **Show the timeline** — Visual proof of the decision sequence
3. **Verify integrity** — Click Verify Chain to prove no tampering
4. **Inspect specific facts** — Drill into any decision
5. **Export if needed** — Create a proof bundle via API

---

## Security

| Feature | Description |
|---------|-------------|
| Read-only by default | Webapp doesn't modify data |
| Tenant isolation | Only see your tenant's streams |
| No local storage | Facts remain on server |

---

## Guarantees

The webapp displays facts exactly as sealed. The same guarantees apply:

| Guarantee | Description |
|-----------|-------------|
| Accurate display | Facts shown as stored |
| Real-time verification | Chain integrity checked on demand |
| Tamper evidence | Any modification is detectable |

---

## Next

- [API Channel](api.md) — For programmatic sealing
- [Email Channel](email.md) — For email-based sealing
- [Guarantees](../guarantees.md) — What Horizon proves
