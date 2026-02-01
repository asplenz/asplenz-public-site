# Email Channel

The email channel allows your team to seal facts by simply sending an email.

---

## Use Cases

| Scenario | Description |
|----------|-------------|
| **Field Decisions** | Capture approvals from mobile devices |
| **Urgent Situations** | Record decisions when systems are unavailable |
| **Executive Approvals** | Enable non-technical stakeholders to create proof |
| **Audit Trail** | Seal email communications as evidence |

---

## How It Works

```
Your Email Client → Horizon Email Address → Fact Sealed
                                              ↓
                          Confirmation Reply ←
```

1. Send an email to your Horizon email address
2. Horizon extracts the content and metadata
3. Horizon seals it as a fact with cryptographic proof
4. You receive a confirmation with the `fact_id`

---

## Sending a Fact

**To:** `facts@horizon.yourcompany.com`

**Subject:** Your decision summary

**Body:** The full declaration you want to seal

**Attachments:** Optional files (their hashes are sealed)

### Example

```
To: facts@horizon.yourcompany.com
Subject: Approve emergency maintenance for API-01

I authorize the emergency maintenance window for API-01.

Justification:
- Memory leak confirmed by monitoring at 14:00
- Service degradation affecting customers
- Approved by on-call lead (myself)

Next steps:
1. Restart service at 15:00
2. Monitor for 30 minutes
3. Close incident if stable
```

---

## Confirmation Reply

After sealing, you receive an automatic confirmation:

```
Subject: Fact sealed – ID: fact-01HRX7G2NB

Your email has been sealed as a Horizon fact.

Fact ID: fact-01HRX7G2NB
Sealed at: 2024-01-26T14:12:09Z

This confirmation does not imply approval or validation.
Horizon records facts as declared, without interpretation.
```

---

## What Gets Sealed

| Element | Description | Sealed |
|---------|-------------|--------|
| **From** | Your email address (the actor) | ✅ |
| **Subject** | Email subject line | ✅ |
| **Body** | Full email content | ✅ |
| **Date** | When you sent the email | ✅ (as metadata) |
| **Attachments** | File hashes and names | ✅ |
| **Email Headers** | Technical provenance data | ✅ |

---

## Attachments

When you attach files to your email:

1. Horizon computes the cryptographic hash of each file
2. The hash is sealed in the fact's `attachments_manifest`
3. The file itself is not stored (hash-only by default)

This proves that **a specific file existed at that moment**. If someone later produces a different file, the hash won't match.

### What's in the manifest

```json
{
  "attachments_manifest": [
    {
      "filename": "evidence.pdf",
      "sha256": "9f86d081884c7d659a2feaa0...",
      "size_bytes": 48213,
      "content_type": "application/pdf"
    }
  ]
}
```

---

## Linking to Existing Streams

### Reply to an Existing Fact

If your email is a **reply** to a Horizon confirmation email, the new fact is automatically linked to the original stream.

### Explicit Reference

Include a fact reference in your email body:

```
Parent-Fact-ID: fact-01HRX7F1MA
```

The new fact will be chained to the referenced fact.

---

## Authentication & Security

| Protection | Description |
|------------|-------------|
| **DKIM/SPF/DMARC** | Verified and sealed as metadata |
| **TLS** | Required for transmission |
| **Domain Allowlist** | Only authorized domains can seal |
| **Tenant Mapping** | Email domain → tenant_id |

Your email's authentication status is captured in the sealed metadata, providing provenance evidence.

---

## Guarantees

All email-sealed facts receive the **same guarantees** as API-sealed facts:

| Guarantee | Email Channel |
|-----------|---------------|
| Append-only | ✅ |
| Hash chain | ✅ |
| Authoritative timestamp | ✅ |
| Signed bundles | ✅ |
| Tamper detection | ✅ |

---

## What Horizon Does NOT Do

| Not Done | Explanation |
|----------|-------------|
| Read content | Your email body is opaque |
| Validate decisions | Horizon doesn't judge |
| Check attachments | Files are hashed, not analyzed |
| Authenticate identity | DKIM/SPF status is recorded, not enforced |

Horizon is a neutral witness. It seals what you send, exactly as you send it.

---

## Best Practices

### 1. Be Specific

Write clear, complete declarations:

```
Good: "I approve the $50,000 budget increase for Project Alpha,
       effective Q2 2024, as discussed in yesterday's meeting."

Bad:  "Approved."
```

### 2. Include Context

Future auditors won't have your context. Capture:
- What you're deciding
- Why you're deciding it
- What information you had

### 3. Keep a Copy

Store your Horizon confirmation emails. The `fact_id` is your reference for audits.

---

## Next

- [API Channel](api.md) — For programmatic integration
- [Webapp Channel](webapp.md) — For visual timeline access
- [Guarantees](../guarantees.md) — What Horizon proves
