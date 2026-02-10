# The Problem

## Why Critical Decisions Are Vulnerable

In modern organizations, critical decisions happen constantly. An operator stops a production service. A manager approves an emergency change. A system executes an action based on human input.

These decisions share common characteristics:

- **Urgent** — they cannot wait for ideal processes
- **Exceptional** — they fall outside standard workflows
- **Human** — they involve judgment, context, and accountability
- **Informal** — they happen via email, chat, phone calls, or verbal exchanges

When everything goes well, no one asks questions.

When something goes wrong, everyone asks the same question: **What exactly happened?**

---

## The Reconstruction Problem

After an incident, organizations attempt to reconstruct reality. They gather:

- **Human memories** — unreliable, biased, incomplete
- **Isolated emails** — fragments of a larger conversation
- **Application logs** — technical artifacts that require interpretation
- **Partial narratives** — stories that serve different interests

This reconstruction is inherently fragile. It happens *after the fact*, under pressure, with incomplete information. It is vulnerable to:

- **Memory decay** — people forget details within hours
- **Interpretation disputes** — the same log entry means different things to different people
- **Missing context** — critical information was never recorded
- **Motivated reasoning** — narratives shift to protect individuals or teams

The result: **truth becomes a matter of opinion**.

---

## The Accountability Gap

Organizations invest heavily in systems that control decisions:

- Approval workflows
- Access management
- Compliance checklists
- Audit trails

But these systems share a fundamental limitation: **they only work when decisions follow the expected path**.

Real decisions often don't. They happen in exceptions, escalations, and emergencies — precisely when controls are bypassed or unavailable.

This creates an accountability gap:

| What organizations need | What they actually have |
|------------------------|------------------------|
| Proof of what was declared | Logs that require interpretation |
| Immutable evidence | Records that can be modified |
| Independent verification | Self-reported narratives |
| Cryptographic certainty | "Trust me" documentation |

---

## The Cost of Uncertainty

When organizations cannot answer "what happened" with certainty, they face:

**Regulatory exposure** — Regulators don't accept "we think" or "probably". They require evidence.

**Legal vulnerability** — In disputes, the party with better documentation wins. Reconstruction is not documentation.

**Operational paralysis** — Teams become risk-averse, slowing down legitimate decisions to create paper trails.

**Cultural erosion** — When accountability is uncertain, trust erodes. People protect themselves instead of solving problems.

---

## What's Missing

The problem is not that organizations lack systems. It's that existing systems are designed for **control**, not **evidence**.

Control systems answer: "Is this allowed?"

Evidence systems answer: "What actually happened?"

These are fundamentally different questions. The first is about permission. The second is about truth.

Organizations need a system that:

- Captures facts **at the moment they are declared**, not reconstructed later
- Produces evidence that is **immutable** and **independently verifiable**
- Operates **passively**, without becoming another control layer
- Works **where decisions actually happen**, not where processes assume they happen

This is the problem Horizon was designed to solve.

---

**Next:** [The Horizon Approach](/foundations/approach) — How we solve this differently
