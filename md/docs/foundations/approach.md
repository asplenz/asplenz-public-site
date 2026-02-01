# The Horizon Approach

## A Proof Infrastructure, Not a Decision System

Horizon takes a fundamentally different approach to decision accountability.

Most enterprise software tries to **control** decisions — enforcing workflows, requiring approvals, blocking unauthorized actions. These systems assume decisions will follow prescribed paths.

Horizon does not control anything.

Instead, Horizon provides **proof infrastructure**: a technical layer that seals facts as they are declared, timestamps them authoritatively, and guarantees their integrity over time.

---

## The Core Principle

> **Horizon seals. The client interprets.**

Horizon does not understand the facts it records. It does not know what an "approval" is, what "compliance" means, or whether a decision was correct.

A fact, for Horizon, is simply:

*Something that was declared or observed by an identified actor, at a given moment.*

Horizon:

- Assigns no meaning to facts
- Imposes no causal order
- Draws no conclusions
- Makes no judgments

All interpretation — workflow logic, compliance assessment, responsibility attribution — happens **outside Horizon**. This separation is intentional and fundamental.

---

## Why Passive?

Horizon is designed to be **strictly passive**. It:

- Issues no authorizations
- Expresses no refusals
- Evaluates no rules
- Qualifies no responsibility

This passivity is not a limitation. It is the source of Horizon's evidentiary value.

When a system makes decisions, its outputs can be challenged as:

- Incorrect
- Biased
- Improperly configured
- Subject to interpretation

When a system merely **witnesses** and **seals**, its outputs are factual records, not opinions.

Horizon acts as a **neutral technical witness** — independent of operational systems and human actors. This neutrality ensures that evidence produced by Horizon cannot be requalified as a decision, an approval, a sanction, or a control mechanism.

---

## The Single Source of Truth for Time

One of Horizon's most important design decisions is its handling of time.

Every fact receives a `sealed_at` timestamp — the moment Horizon received, canonicalized, and sealed the fact. This timestamp is:

- **Assigned by Horizon**, not declared by the client
- **Immutable** — cannot be altered after sealing
- **Authoritative** — the only timestamp with evidentiary value

Any other time — when an action was performed, when an email was sent, when a decision was made — is:

- Provided by the client
- Stored in the fact's payload
- **Declarative and contestable**

This distinction matters. When someone claims "I approved this at 2:30 PM", that claim can be disputed. When Horizon shows "This fact was sealed at 2:47 PM", that is cryptographic proof.

---

## No Causal Enforcement

Horizon does not impose any causal order on facts.

It is perfectly valid for an execution fact to be sealed before an approval fact. This is not an error — it is **factual information**.

If an operator acted before approval was captured, Horizon records exactly that. The sequence of sealing times tells the truth about when Horizon received each declaration.

Horizon guarantees only:

- The order of sealing
- The integrity of the chain

Causality, compliance, and fault are matters for human or regulatory analysis — **outside Horizon**.

---

## Facts and Evaluations

A client can submit a fact as an **evaluation** of another existing fact.

Horizon records this relationship:

- The evaluation fact references the fact it evaluates
- Horizon **knows** this fact was submitted "as an evaluation"
- Horizon **does not interpret** the content of the evaluation

This distinction is declarative:

- The client qualifies a fact as an evaluation
- The client provides the meaning (compliant, non-compliant, etc.) in the payload
- Horizon merely seals the relationship and the declared content

This allows structuring proof — explicitly linking evaluations to facts — **without Horizon producing any judgment itself**.

---

## What Horizon Is Not

These absences are intentional and structural:

| Horizon is not... | Because... |
|-------------------|------------|
| A decision engine | It records decisions, it doesn't make them |
| A workflow tool | It doesn't control the order or logic of steps |
| An approval system | It records approvals, it doesn't grant them |
| An active compliance tool | It preserves evidence, it doesn't evaluate compliance |
| Governance software | It provides proof, it doesn't enforce policies |

---

## The Black Box Paradigm

**Horizon is the black box for critical decisions.**

Like an aircraft's flight recorder, Horizon:

- Captures what happens, as it happens
- Does not interfere with operations
- Provides indisputable evidence after the fact
- Enables independent verification

It does not pilot the action. It guarantees that when sensitive decisions are made, **the facts exist**, are **dated**, and can be **verified independently** — years later, without access to the original systems.

---

**Next:** [How It Works](/foundations/how-it-works) — The technical model behind Horizon
