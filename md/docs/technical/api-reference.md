# API Reference

Base URL: `https://api.horizon.example.com` (or your self-hosted instance)

All requests use JSON. All timestamps are in milliseconds (Unix epoch) with ISO 8601 representation.

---

## Authentication

Include your API key in the `X-API-Key` header:

```http
X-API-Key: your-api-key-here
```

---

## Endpoints Overview

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/streams/{stream_id}/facts` | POST | Seal a new fact |
| `/streams/{stream_id}/facts` | GET | List facts in a stream |
| `/streams/{stream_id}/bundles` | POST | Create proof bundle |
| `/streams/{stream_id}/bundles` | GET | List bundles for a stream |
| `/streams/{stream_id}/verify` | POST | Verify chain integrity |
| `/facts/{fact_id}` | GET | Get a single fact |
| `/bundles/{bundle_id}` | GET | Get a single bundle |
| `/streams` | GET | List all streams |
| `/health` | GET | Health check |

---

## Seal a Fact

Creates a new fact in a stream. If the stream doesn't exist, it is created automatically.

```http
POST /streams/{stream_id}/facts
Content-Type: application/json
```

### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `actor` | string | Yes | Who is making this declaration |
| `custom_payload` | object | Yes | Your business data (opaque to Horizon) |
| `client_ref` | string | No | Idempotency key (prevents duplicates) |

### Example Request

```json
{
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "decision": "Approve emergency maintenance",
    "justification": "Memory leak confirmed",
    "affected_systems": ["api-server-01", "api-server-02"]
  },
  "client_ref": "incident-2024-01-26-approval-001"
}
```

### Example Response

```json
{
  "fact_id": "fact-01HRX7G2NB",
  "stream_id": "incident-2024-01-26",
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "sealed_at_ms": 1706284801000,
  "sealed_at_iso": "2024-01-26T12:00:01.000Z",
  "custom_payload": {
    "decision": "Approve emergency maintenance",
    "justification": "Memory leak confirmed",
    "affected_systems": ["api-server-01", "api-server-02"]
  },
  "fact_hash": "a1b2c3d4e5f6...",
  "prev_hash": "9f8e7d6c5b4a...",
  "parent_fact_id": "fact-01HRX7F1MA"
}
```

### Idempotency

If you provide `client_ref`, Horizon ensures exactly-once sealing:
- First request: fact is created
- Subsequent requests with same `client_ref`: original fact is returned

This is safe for retries in unreliable network conditions.

---

## List Facts (Timeline)

Returns all facts in a stream, in chain order.

```http
GET /streams/{stream_id}/facts?limit=100&offset=0
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | integer | 100 | Max facts to return (1-1000) |
| `offset` | integer | 0 | Number of facts to skip |

### Example Response

```json
{
  "facts": [
    {
      "fact_id": "fact-01HRX7F1MA",
      "sealed_at_ms": 1706284800000,
      "sealed_at_iso": "2024-01-26T12:00:00.000Z",
      "actor": "system:monitoring",
      "custom_payload": { "alert": "Memory usage at 95%" }
    },
    {
      "fact_id": "fact-01HRX7G2NB",
      "sealed_at_ms": 1706284801000,
      "sealed_at_iso": "2024-01-26T12:00:01.000Z",
      "actor": "ops-lead@acme-corp.com",
      "custom_payload": { "decision": "Approve emergency maintenance" }
    }
  ],
  "count": 2
}
```

---

## Create Proof Bundle

Creates a signed, exportable snapshot of the stream.

```http
POST /streams/{stream_id}/bundles
Content-Type: application/json
```

### Example Request

```json
{}
```

No request body required. The tenant is inferred from your API key.

### Example Response

```json
{
  "bundle_id": "bundle-01HRX8ABC",
  "stream_id": "incident-2024-01-26",
  "bundle_version": 1,
  "head_fact_id": "fact-01HRX7G2NB",
  "head_hash": "a1b2c3d4e5f6...",
  "facts_manifest": ["fact-01HRX7F1MA", "fact-01HRX7G2NB"],
  "created_at_ms": 1706284900000,
  "created_at_iso": "2024-01-26T12:01:40.000Z",
  "signature": "base64-encoded-signature...",
  "signature_alg": "ed25519",
  "key_id": "horizon-key-001"
}
```

---

## Verify Chain Integrity

Verifies that the hash chain is intact.

```http
POST /streams/{stream_id}/verify
```

### Example Response (Valid)

```json
{
  "valid": true,
  "facts_verified": 47
}
```

### Example Response (Tampered)

```json
{
  "valid": false,
  "facts_verified": 23,
  "error": "Hash chain broken at fact-01HRX8XYZ"
}
```

---

## Get a Single Fact

Retrieves a specific fact by its ID.

```http
GET /facts/{fact_id}
```

### Example Response

```json
{
  "fact_id": "fact-01HRX7G2NB",
  "stream_id": "incident-2024-01-26",
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "sealed_at_ms": 1706284801000,
  "sealed_at_iso": "2024-01-26T12:00:01.000Z",
  "custom_payload": {
    "decision": "Approve emergency maintenance"
  },
  "fact_hash": "a1b2c3d4e5f6...",
  "prev_hash": "9f8e7d6c5b4a...",
  "parent_fact_id": "fact-01HRX7F1MA"
}
```

---

## List Bundles

Returns all proof bundles created for a stream.

```http
GET /streams/{stream_id}/bundles
```

### Example Response

```json
{
  "bundles": [
    {
      "bundle_id": "bundle-01HRX8ABC",
      "bundle_version": 1,
      "head_fact_id": "fact-01HRX7G2NB",
      "facts_count": 5,
      "created_at_iso": "2024-01-26T12:01:40.000Z"
    },
    {
      "bundle_id": "bundle-01HRX9DEF",
      "bundle_version": 2,
      "head_fact_id": "fact-01HRX8XYZ",
      "facts_count": 12,
      "created_at_iso": "2024-01-26T14:30:00.000Z"
    }
  ],
  "count": 2
}
```

---

## Get a Single Bundle

Retrieves a specific proof bundle with full details.

```http
GET /bundles/{bundle_id}
```

### Example Response

```json
{
  "bundle_id": "bundle-01HRX8ABC",
  "stream_id": "incident-2024-01-26",
  "tenant_id": "acme-corp",
  "bundle_version": 1,
  "head_fact_id": "fact-01HRX7G2NB",
  "head_hash": "a1b2c3d4e5f6...",
  "facts_manifest": ["fact-01HRX7F1MA", "fact-01HRX7G2NB"],
  "created_at_ms": 1706284900000,
  "created_at_iso": "2024-01-26T12:01:40.000Z",
  "signature": "base64-encoded-signature...",
  "signature_alg": "ed25519",
  "key_id": "horizon-key-001"
}
```

### Export with Facts

To export the bundle with all fact data included (for offline verification):

```http
GET /bundles/{bundle_id}?include_facts=true
```

---

## List Streams

Returns all streams for your tenant (inferred from API key).

```http
GET /streams
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | integer | 100 | Max streams to return (1-1000) |
| `offset` | integer | 0 | Number of streams to skip |

### Example Response

```json
{
  "streams": [
    {
      "stream_id": "incident-2024-01-26",
      "facts_count": 47,
      "first_fact_at_iso": "2024-01-26T08:30:00.000Z",
      "last_fact_at_iso": "2024-01-26T14:45:00.000Z"
    },
    {
      "stream_id": "incident-2024-01-25",
      "facts_count": 12,
      "first_fact_at_iso": "2024-01-25T10:00:00.000Z",
      "last_fact_at_iso": "2024-01-25T11:30:00.000Z"
    }
  ],
  "count": 2
}
```

---

## Health Check

Returns the API health status.

```http
GET /health
```

### Example Response

```json
{
  "status": "healthy",
  "version": "2.1.0",
  "timestamp_iso": "2024-01-26T15:00:00.000Z"
}
```

---

## Error Responses

All errors follow a consistent format:

```json
{
  "error": "VALIDATION_ERROR",
  "message": "actor is required"
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Invalid request payload |
| `NOT_FOUND` | 404 | Resource not found |
| `UNAUTHORIZED` | 401 | Missing or invalid API key |
| `INTERNAL_ERROR` | 500 | Server error |

---

## Rate Limits

| Tier | Requests/minute | Burst |
|------|-----------------|-------|
| Standard | 1,000 | 100 |
| Enterprise | Custom | Custom |

Rate limit headers are included in all responses:
- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

---

## Next

- [Integration Guide](integration-guide.md) — Step-by-step integration examples
- [API Channel Details](channels/api.md) — Advanced API usage patterns
