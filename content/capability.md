# Capability

## A factual evidence capability (in-perimeter)

### What it records

Two types of declared facts, strictly separated:

#### 1) Executions

An execution is *an irreversible act*:

- An automated decision applied
- A human authorization
- A continuation/suspension choice
- A publication, override, or acceptance

Executions record what happened, in declared context, at time T.

---

#### 2) Evaluations

An evaluation is *an organizational assessment at time T*:

- Severity classification
- Risk acceptance
- Declared basis
- Confidence level

**An evaluation does not authorize an action.**

It preserves state of knowledge and organizational stance at the time.

---

### How automated and human decisions become examinable as one

- Automated systems produce **declared executions**, each identified by a stable execution reference
- When a situation escalates, this reference is propagated through the organization's existing channels (alerts, tickets, consoles)
- Any human decision taken in response is recorded as a **declared evaluation**, explicitly linked to the original execution
- Subsequent actions may reference either or both, preserving a **single factual chain**

**Facts are linked by explicit references, not reconstructed through interfaces or workflows.**

---

### Properties

- **Append-only**: no edits, no deletes
- **Ordering**: explicit chronology
- **Integrity**: verifiable records
- **In-perimeter**: deployable on-prem/private cloud
- **Non-intrusive**: not in the critical execution path

---

### What it is NOT

- Not observability / monitoring
- Not SIEM
- Not workflow
- Not decision-making
- Not compliance automation

---

### Operational side-effect

In practice, these same facts are often used daily to avoid transaction reconstruction, without turning the capability into an operations tool.

[Discuss acceptability](/engage)
