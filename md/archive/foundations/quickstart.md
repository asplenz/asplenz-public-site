# Quickstart — Seal a Fact in 5 Minutes

**Audience:** CTO · Staff Engineer · SRE

---

## Project Structure

```
horizon/
├── horizon-seal/              # Python backend
│   ├── src/
│   │   ├── api/v2/            # FastAPI routes & schemas
│   │   ├── domain/            # Domain models (Fact, Stream, Bundle)
│   │   ├── repositories/      # SQLite persistence
│   │   ├── services/          # Business logic
│   │   └── core/shared/       # Hashing, signing
│   ├── tests/                 # pytest tests
│   ├── requirements.txt       # Python dependencies
│   ├── environment.yml        # Conda environment
│   └── run_server.py          # Server entry point
├── docs/                      # Documentation
│   └── foundations/           # Core concepts
├── start-seal.bat             # Windows startup script
├── start-seal.sh              # Linux/Mac startup script
└── .env                       # Environment variables (optional)
```

**Working directory:** All commands assume you are in the `horizon/` root directory.

**Conda environment:** `horizon-seal` (Python 3.11)

```bash
# First time setup
cd horizon-seal
conda env create -f environment.yml

# Activate manually (scripts do this automatically)
conda activate horizon-seal
```

**Database:** SQLite file at `horizon-seal/horizon_seal.sqlite` (created automatically on first run)

---

## Start Horizon

```bash
# Windows
start-seal.bat

# Linux/Mac
./start-seal.sh

# Or with Docker
make up-sync
```

Horizon is now running at `http://localhost:8080`

---

## One Endpoint

```
POST /streams/{stream_id}/facts
Content-Type: application/json
```

A stream is identified by `stream_id`. If the stream does not exist, Horizon creates it implicitly when the first fact is sealed.

## One Request

```json
{
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  }
}
```

## One Response

```json
{
  "fact_id": "fact-01HRX7G2NB",
  "stream_id": "incident-2024-01-26",
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "sealed_at_ms": 1706284801000,
  "sealed_at_iso": "2024-01-26T12:00:01.000Z",
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  },
  "fact_hash": "a1b2c3d4e5f6...",
  "prev_hash": "9f8e7d6c5b4a...",
  "parent_fact_id": "fact-01HRX7F1MA"
}
```

---

## What Happened

1. Horizon assigned `sealed_at_ms` (authoritative timestamp)
2. Horizon computed `fact_hash` from a deterministic representation of the fact
3. Horizon chained to previous fact via `prev_hash`
4. Horizon stored the fact (append-only)

Horizon did not interpret `custom_payload`. That's your data.

---

## View the Timeline

```
GET /streams/{stream_id}/facts
```

Returns all facts in chain order:

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
      "custom_payload": { "action": "stop_service", "context": "Memory leak confirmed" }
    }
  ],
  "count": 2
}
```

This is your proof timeline. Each fact is sealed, hashed, and chained.

---

## Idempotency

Add `client_ref` to make the request idempotent:

```json
{
  "actor": "ops-lead@acme-corp.com",
  "client_ref": "incident-2024-01-26-stop-001",
  "custom_payload": { ... }
}
```

Same `client_ref` → same fact returned. No duplicate sealing.

---

## Create a Proof Bundle

When you need a signed, exportable proof package:

```
POST /streams/{stream_id}/bundles
Content-Type: application/json
```

No request body required.

Response:

```json
{
  "bundle_id": "bundle-01HRX8ABC",
  "bundle_version": 1,
  "facts_manifest": ["fact-01HRX7F1MA", "fact-01HRX7G2NB"],
  "created_at_ms": 1706284900000,
  "created_at_iso": "2024-01-26T12:01:40.000Z",
  "signature": "base64...",
  "signature_alg": "ed25519",
  "key_id": "horizon-key-001"
}
```

The bundle is signed with Ed25519. It can be exported and verified independently.

---

## Storage Guarantees

| Property | Guarantee |
|----------|-----------|
| Append-only | Facts cannot be modified or deleted |
| Hash chain | Each fact links to previous via `prev_hash` |
| Tamper detection | Recompute hashes to detect modification |
| Tenant isolation | Facts scoped by `tenant_id` |
| Proof authority | `sealed_at_ms` assigned by Horizon |

---

## What Horizon Does Not Do

- **No interpretation** — `custom_payload` is opaque
- **No workflow** — No states, no transitions, no approvals
- **No validation** — Your payload, your schema
- **No business logic** — Seal facts, nothing else

---

## Verify Chain Integrity

```
POST /streams/{stream_id}/verify
```

Returns `{ "valid": true, "facts_verified": 2 }` if hash chain is intact.

Verification recomputes hashes. It does not interpret facts or assert correctness.

---

## API Reference

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/streams/{stream_id}/facts` | POST | Seal a new fact |
| `/streams/{stream_id}/facts` | GET | List facts (timeline) |
| `/streams/{stream_id}/bundles` | POST | Create proof bundle |
| `/streams/{stream_id}/bundles` | GET | List bundles |
| `/streams/{stream_id}/verify` | POST | Verify chain integrity |
| `/facts/{fact_id}` | GET | Get single fact |
| `/bundles/{bundle_id}` | GET | Get single bundle |
| `/health` | GET | Health check |

Full API documentation: `http://localhost:8080/docs`
