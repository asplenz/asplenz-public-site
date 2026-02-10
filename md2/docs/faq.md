# Frequently Asked Questions

---

## Integration

### Can I update or delete a sealed fact?

**No.** The append-only property is an architectural constraint, not a policy. There is no mechanism in Horizon to modify or remove a sealed fact. If you need to correct a previous declaration, seal a new fact that references and supersedes it — the original remains in the chain.

### What if my API call fails mid-request?

Use the `client_ref` field for idempotency. If you retry with the same `client_ref`, Horizon returns the existing fact rather than creating a duplicate. This makes retries safe and predictable.

### Can I seal multiple facts in one request?

No. One fact per request. Chain integrity requires sequential sealing — each fact must reference the previous fact's hash. Bulk operations would break this guarantee.

### What should go in `custom_payload`?

Anything you want to prove was declared. Horizon treats it as opaque JSON — it stores your payload exactly as provided without parsing, validating, or interpreting it. Structure it however makes sense for your use case.

### Is there a size limit on facts?

Yes. Payload size limits apply per fact. Check the [API Reference](technical/api-reference.md) for current limits.

### How do I create a stream?

Streams are created implicitly when you seal the first fact. Just POST to `/streams/{your-stream-id}/facts` — if the stream doesn't exist, it's created automatically.

---

## Security & Architecture

### Can someone backdate a fact?

**No.** The `sealed_at` timestamp is assigned by Horizon when the fact is received, not by the client. There is no mechanism to specify a past timestamp. The chain structure also prevents inserting facts between existing ones.

### Can Horizon read my business data?

**No.** The `custom_payload` field is opaque to Horizon. It is stored exactly as provided, never parsed, never indexed, never interpreted. Horizon has no understanding of what your payload contains.

### Can other tenants access my facts?

**No.** All data is strictly scoped by `tenant_id` at the architectural level. Tenant A cannot list, read, or verify Tenant B's streams or facts. Each tenant has independent hash chains.

### What if Horizon itself is compromised?

Proof bundles are self-verifiable. Anyone with the bundle and Horizon's public key can independently verify the signature and hash chain without access to Horizon systems. The cryptographic proof exists outside Horizon.

### Can I run Horizon on my own infrastructure?

Yes. Horizon supports three deployment models:
- **SaaS** — Horizon-managed infrastructure
- **On-Premise** — Your infrastructure, your control
- **Air-Gapped** — No external connectivity, fully offline verification

All deployment options provide identical cryptographic guarantees.

### What cryptographic algorithms does Horizon use?

- **Hashing:** SHA-256
- **Signatures:** Ed25519

These are industry-standard algorithms with no known vulnerabilities.

---

## Proof Semantics

### Does Horizon prove that what I seal is true?

**No.** Horizon proves that a declaration was made at a specific time by a declared actor. It does not validate, verify, or assess the truthfulness of the content. If you seal "Service restored at 14:00", Horizon proves you declared this — not that the service was actually restored.

### Does the `actor` field prove who really made the decision?

**No.** The `actor` field is attribution as declared by your system, not authentication by Horizon. If your system seals a fact with `actor: "ceo@company.com"`, Horizon records this attribution. It does not verify that the CEO actually made the declaration.

Your system is responsible for authentication before sealing.

### Can I prove that one fact caused another?

**No.** Horizon proves sequence (Fact A was sealed before Fact B), not causality. The fact that A precedes B does not prove A caused B. Causal relationships must be established through external analysis and context.

### Is a sealed fact legally admissible?

**It depends on jurisdiction and context.** Horizon provides mathematically verifiable cryptographic proof of:
- What was declared
- When it was sealed (authoritative timestamp)
- That it hasn't been modified

Legal admissibility varies by jurisdiction. The cryptographic integrity is provable; the legal interpretation is context-dependent.

### What's the difference between `sealed_at` and when the event happened?

`sealed_at` is when Horizon sealed the declaration, not when the underlying event occurred. If an outage started at 08:00 but the fact was sealed at 10:00, `sealed_at` is 10:00. The event time might be in your `custom_payload`, but only `sealed_at` is authoritative.

---

## Verification

### Can I verify a proof bundle without access to Horizon?

**Yes.** Bundles are self-contained. With the bundle and Horizon's public key, you can:
1. Verify the bundle signature
2. Recompute all fact hashes
3. Verify the hash chain continuity
4. Confirm the head hash matches

No network access to Horizon is required.

### What does it mean if verification fails?

If any verification step fails, tampering has been detected:
- **Signature fails:** Bundle was modified after signing
- **Hash mismatch:** A fact was altered after sealing
- **Chain break:** A fact was inserted, removed, or reordered

A failed verification means the evidence cannot be trusted.

### Does successful verification prove the stream is complete?

**No.** Verification proves the integrity of what's in the bundle. It cannot prove that other facts don't exist outside the bundle, or that all relevant facts were sealed. Completeness is your responsibility.

### How do I get Horizon's public key?

| Deployment | Key Location |
|------------|--------------|
| SaaS | Published at `.well-known/horizon-public-key` |
| On-Premise | Provided during deployment |
| Air-Gapped | Delivered via secure channel |

---

## Channels

### Can I seal facts by email?

**Yes.** Send an email to your designated Horizon address. The email headers, body, and attachment hashes are sealed with the same cryptographic guarantees as API-sealed facts.

### What exactly gets sealed from an email?

- Email headers (From, To, Subject, Date, Message-ID)
- Email body (text content)
- Attachment manifest (filename, SHA-256 hash, size) — **not the file content**
- DKIM/SPF authentication status (recorded, not enforced)

### Are files stored by Horizon?

**No.** Only the SHA-256 hash of each attachment is sealed. This proves a specific file existed at seal time without Horizon ever storing the file. You retain the files; Horizon retains the proof.

### Can I seal facts from the webapp?

**No.** The webapp is for viewing and verifying, not sealing. Facts are sealed via API or Email. The webapp provides:
- Stream browser
- Timeline viewer
- Chain verification
- Bundle export

---

## Streams & Organization

### What should a stream represent?

Whatever makes sense for your use case. Common patterns:
- **Incident:** `incident-2024-01-26`
- **Process:** `loan-application-12345`
- **Entity:** `customer-acme-corp`
- **Session:** `ai-conversation-xyz`

Horizon doesn't interpret stream semantics — you define the meaning.

### Can I close a stream?

**No.** Streams have no state — they're not open or closed. A stream is simply a container for facts. You can stop sealing to a stream, but it remains available for new facts indefinitely.

### Are facts in different streams linked?

**No.** Each stream has an independent hash chain. Facts in Stream A are not cryptographically linked to facts in Stream B. If you need to prove ordering across streams, timestamps provide the only evidence.

---

## Next

- [Core Concepts](technical/core-concepts.md) — Streams, Facts, and Bundles
- [Proof Semantics](technical/proof-semantics.md) — What sealed facts prove
- [API Reference](technical/api-reference.md) — Endpoints and payloads
- [Auditor's Guide](compliance/auditor-guide.md) — Verification protocol
