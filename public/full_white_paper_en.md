# Decision Snapshot Infrastructure - Full White Paper

---

# Evidence must exist before questions.

A factual evidence layer for regulated institutions. Designed to capture and preserve, at the moment of execution, exactly what systems do and evaluate, without interfering with the operational flow.

> **This infrastructure does not explain decisions. It preserves them.**
> *It provides the immutable factual basis upon which any interpretation or justification can be safely built.*

This paper establishes the **Decision Snapshot Artifact** as the foundational object of a **Decision Snapshot Infrastructure**, before examining why reconstruction fails and what execution-time evidence enables in practice.

---

**Reading path**

1. **Approach** : What is this infrastructure and why does it exist?
2. **Illustrative scenario** : Two possible worlds: reconstruction vs examination.
3. **The Mechanism** : What does it record and how?
4. **Automated decisions** : Why automated decisions create a specific evidence problem.
5. **Contact** : Two ways to engage.

---

---

# Decision Snapshot Infrastructure

Automated decision systems produce outcomes that have lasting consequences. Yet the factual state that led to those decisions rarely survives the evolution of the systems that produced them.

Over time, models are retrained, rules are updated, data sources change, and architectures are replaced. When past decisions must be understood, organizations are forced to **reconstruct reality after the fact**, using partial and heterogeneous sources.

This reconstruction is fragile by nature.

## Evidence vs Reconstruction

In most automated systems, factual evidence is not produced at execution time. Instead, the past is inferred later from logs, databases, configurations, and human recollections.

As systems evolve, this "memory" becomes distributed, incomplete, and contested. Different teams reconstruct different versions of what happened, often with no shared factual baseline.

**Reconstruction is not evidence.**
It is an approximation built under constraints that did not exist at execution time.

## The Core Principle: Capture at the Point of No Return

**Evidence should be created at the point of no return - when the decision becomes irreversible.**

At that moment, the system:

* has consumed specific inputs,
* applied a specific logic or model,
* operated under a specific configuration,
* and produced a concrete outcome.

Once that moment has passed, the original factual state cannot be recreated with certainty.

A Decision Snapshot Infrastructure exists to capture that state **once**, **as it was**, **when it occurred**.

## What Is a Fact (in this context)

In this context, a *fact* is not an interpretation, a justification, or an explanation.

A fact is a **signed and recorded act of execution**, captured at the exact moment the decision is produced.

It includes:

* what data was actually consumed,
* which logic or model version was applied,
* under which execution context,
* and what output was generated.

Facts are declared, not inferred.

## Illustrative Scenario

Consider a loan approval decision produced by an automated system.

At execution time, the system:

* receives a specific set of applicant data,
* applies a given model version and configuration,
* and outputs an approval decision.

That decision may later be questioned, revised, or even deemed incorrect from a business or policy perspective.

**This does not change the fact of what was executed.**

A Decision Snapshot does **not** legitimize or justify the outcome. It does **not** assert that the decision was correct. It establishes only one thing: **what the system actually did, with what it had, at that moment.**

## From Principle to Infrastructure

A Decision Snapshot Infrastructure is **not an audit tool**, **not an analytics platform**, and **not a governance process**.

It is a **foundational technical layer** whose sole role is to ensure that factual execution states exist independently of system evolution.

It:

* integrates alongside existing decision systems,
* captures execution states without interfering with decision logic,
* produces immutable, self-contained records,
* and remains neutral to how those records are later interpreted or used.

The infrastructure does not decide what matters. It ensures that facts are available when they do.

## Institutional Contexts

Organizations already exercise discretion over:

* what enters an official record,
* how facts are interpreted,
* what is communicated internally or externally.

A Decision Snapshot Infrastructure **does not change this control**.

What it changes is the **operational burden** of establishing facts when they are needed. The institutional latitude remains the same. The effort required to support it is reduced.

## Operational Implications

The primary impact of a Decision Snapshot Infrastructure is operational. It does not create new obligations. It removes recurring costs associated with reconstructing the past.

Concretely, it reduces:

* the effort required to establish factual state post-execution,
* cross-team coordination during reviews, incidents, or inquiries,
* dependency on legacy systems, configurations, and former teams.

**The content of the record does not change.**
**The cost of assembling, retaining, and accessing it does.**

## Principles & Boundaries

A Decision Snapshot Infrastructure is intentionally bounded.

It:

* does not explain decisions,
* does not automate interpretation,
* does not enforce governance rules,
* does not replace human judgment.

Its responsibility ends where interpretation begins.

## Availability Over Time

Systems change. Organizations evolve. Teams move on.

Decision Snapshots are designed to outlive the systems that produced them. They remain:

* readable,
* verifiable,
* and independent of the continued existence of the source system.

## Acceptability Dialogue

Because this infrastructure touches execution reality, its adoption cannot be abstract. Acceptability must be assessed in context: technical, organizational, and institutional.

This is why adoption begins with an **acceptability dialogue**, not with a generic demonstration or theoretical endorsement.

---

---

# Evidence vs Reconstruction

### The difference between execution-time evidence and post-hoc reconstruction

Many systems claim to "prove" what happened. Most merely reconstruct. The distinction between **evidence** and **reconstruction** is often blurred in operational and institutional systems. **Asplenz Horizon is specifically designed to bypass the need for reconstruction.**

---

### What Reconstruction is

Reconstruction is the process of assembling an explanation **after** a decision has been executed. It typically relies on:

* logs
* dashboards
* tickets
* alerts
* interviews
* human memory

**Reconstruction produces a narrative.**

---

### Why Reconstruction is unreliable

Reconstruction fails structurally, not accidentally. Indeed:

* **Systems evolve:** configurations, models, and log rotations change over time.
* **Signals disappear:** original data points are lost, and interpretations begin to diverge.
* **Asymmetric adverse interpretation:** The examination occurs when the outcome is already known. Without anchored evidence, the organization is exposed to a judgment based on information it did not yet have at the time of action (hindsight bias).

Reconstruction explains what **might** have happened. It does not preserve what actually **existed**.

---

### Chronology vs Narrative

Reconstruction often attempts to merge yesterday's knowledge and today's insights into a single narrative. **Horizon separates these facts:** what was done (execution) remains frozen at Time T, while later assessments (delayed evaluations) are recorded at their own declaration date. This ensures the institution's defense rests on its actual state of knowledge at the moment of action.

---

### What Execution-time Evidence is

Execution-time evidence is a record created **at the exact moment** a decision is executed. It preserves:

* input data present at the time
* evaluations produced
* active configuration
* the resulting outcome
* the sequencing of these facts

This record is available **before** the examination begins.

---

### What Asplenz Horizon changes

Horizon does not improve reconstruction; it eliminates the need for it in specific cases by ensuring that:

* a decision leaves behind an immutable artifact at the time of execution.
* the artifact is preserved independently of the system's evolution.
* subsequent examination does not require reassembling scattered fragments.

**Horizon produces evidence, not explanations.**

---

### Posture and Scope

The purpose of this argument is not to deny the utility of retrospective analysis, but to strip it of its function as evidence where the requirement for certainty is absolute.

* **Replacing Narrative with Fact:** Horizon makes reconstruction redundant for establishing the technical and decisional reality of a case. Where Horizon operates, one no longer "tells the story" of what must have happened; one produces the evidence of what actually occurred.
* **Securing the Core:** Horizon does not aim for total exhaustivity (capturing "everything"). It enables the institution to capture what it defines as **institutionally examinable**, focusing on the pivot points where its accountability is at stake.
* **Establishing Factual Authority:** Horizon does not dictate "Truth" in a moral or legal sense; it provides the immutable technical artifact that makes the facts indisputable.

**Horizon is not a support tool for reconstruction. It is the infrastructure that makes reconstruction unnecessary within the organization's critical perimeter.**

---

### Summary

Reconstruction assembles narratives after the fact. Evidence is established before questions arise. **Asplenz Horizon was developed to preserve execution-time evidence so that subsequent examination does not depend on reconstruction alone.**

---

---

# Illustrative Scenario

## A concrete illustration of execution-time evidence versus reconstruction

This scenario is intentionally generic. It does not describe a specific organization, product, or regulatory context.

Its purpose is to illustrate, in concrete terms, the structural difference between:

* decisions whose factual state must be reconstructed after the fact, and
* decisions whose factual state was captured at execution time.

The quality, correctness, or legitimacy of the decision itself is **not** evaluated here.

---

## The context

An automated decision system produces decisions that have durable effects.

At the moment of execution, the system:

* consumes specific input data,
* applies a given logic or model,
* operates under a concrete configuration,
* and produces an outcome.

Some time later, the organization must answer a question about that decision. The difference between the two worlds below lies not in the decision itself, but in whether the factual state of execution still exists.

---

## Two possible worlds

### World A - Reconstruction

In this world, no execution-time evidence was captured when the decision was made. When the decision is later examined, the organization must reconstruct what happened using:

* logs,
* database states,
* configuration repositories,
* monitoring tools,
* tickets and incident reports,
* and human recollection.

The factual state of the decision is inferred after the fact. Different teams may reconstruct different versions of what happened, depending on which sources are still available, how systems have evolved, and which interpretations are applied. The result is a narrative assembled under uncertainty.

---

### World B - Execution-time evidence

In this world, the factual state of the decision was captured at the moment of execution. This implies that an execution-time evidence mechanism - such as a **Decision Snapshot Infrastructure** - was already in place.

When the decision is later examined:

* the input data actually used is available,
* the exact logic or model state is known,
* the execution context is preserved,
* and the produced outcome is recorded.

The factual state does not need to be inferred. It already exists.

---

## What changes between the two worlds

The decision itself may be identical in both worlds. What changes is the **availability of facts**.

In World A:

* facts must be reconstructed,
* interpretations are unavoidable,
* and uncertainty accumulates over time.

In World B:

* facts are examined directly,
* interpretation is separated from execution,
* and the state of knowledge at the moment of action is preserved.

From an operational perspective, this also means:

> **Less effort is required to establish, retain, and access factual state when it is needed.**

The difference is not institutional intent. It is operational cost.

---

## What this scenario does *not* assess

This scenario does **not** assess:

* whether the decision was correct or incorrect,
* whether the policy or model was appropriate,
* whether a different outcome would have been preferable.

A decision captured at execution time may later be challenged, revised, or overturned. Execution-time evidence does **not** legitimize the decision. It does **not** justify the outcome.

It establishes only one thing: **what the system actually did, with what it had, at that moment.**

---

## Institutional control remains unchanged

In both worlds, the institution retains full control over:

* what is examined,
* how facts are interpreted,
* what conclusions are drawn,
* and what is communicated.

Execution-time evidence does not impose a narrative. It does not automate judgment. It provides a stable factual base upon which institutional discretion can be exercised.

---

## Why this distinction matters

Institutions rarely fail because they cannot decide. They fail because, over time, they can no longer **demonstrate** what actually happened.

The absence of execution-time evidence does not prevent action. It increases the cost, uncertainty, and fragility of later examination. This scenario illustrates why preserving facts at execution time fundamentally changes the organization's relationship to its own past decisions.

---

## Summary

The difference between the two worlds is not the decision itself. It is whether the factual state of execution:

* must be reconstructed under uncertainty, or
* already exists as an immutable record.

A Decision Snapshot Infrastructure makes the second world possible.

---

---

# Horizon: Technical Capabilities

This section describes the core technical capabilities of Horizon. It details what is captured, how, and the structural properties that ensure facts remain actionable over time, regardless of system evolution.

## What Horizon Captures

Horizon captures **Decision Snapshot Artifacts** at the exact moment a decision becomes irreversible. Each snapshot consists of declared facts produced at execution time, rather than post-hoc reconstructions. These facts are organized into two complementary categories:

### 1. Executions

An execution is an irreversible act by which an automated system produces an outcome. It specifically captures:

* **The data actually consumed** at time T0.
* **The applied logic** (rules, model, configuration).
* **The execution context.**
* **The produced outcome.**

The execution constitutes the primary fact, frozen in time. Once declared, it can neither be modified nor reconstituted.

### 2. Evaluations

An evaluation is a declaration produced after the execution (human analysis, business review, technical audit). Each evaluation is:

* **Explicitly timestamped.**
* **Linked to a specific execution.**
* **Distinct from the execution fact.**

This separation prevents confusion between what was known at the time of action and what was understood or judged later. It structurally eliminates **hindsight bias**.

---

## Application Contexts

* **AI-Assisted Decisions:** Horizon captures the data actually seen by the model and the exact model version at T0, preventing erroneous post-hoc inferences.
* **Automated Decision Flows:** Horizon captures every pivot point. Each decision becomes an autonomous fact, traceable over time without dependence on the future state of the pipeline.
* **Human-in-the-loop Escalations:** Horizon clearly distinguishes the initial automated decision from subsequent human interventions and arbitrations.

---

## Core Technical Properties

* **Self-contained:** Each artifact contains all elements necessary for its comprehension without relying on external systems.
* **Append-only:** Snapshots cannot be modified or deleted once created.
* **Explicit Sequencing:** The order of decisions is verifiable, making any alteration or deletion detectable.
* **Cryptographic Integrity:** Every artifact is signed, guaranteeing its authenticity and immutability.
* **Non-intrusive:** Horizon does not interfere with the execution of the decision itself.

### Durability and Independence

Artifacts are designed to outlive the systems that produced them. Even if the model is replaced, the architecture overhauled, or the source system decommissioned, the facts remain **readable, verifiable, and actionable**.

---

## Operational Value and Control

Horizon does not change what the organization chooses to record; it radically reduces the effort required to establish the factual state. It decreases the cost of fact-finding and the dependency on legacy systems.

**Horizon does not impose a narrative.** It does not automate judgment or define interpretations. The organization retains full control over how facts are examined and communicated. Horizon simply provides the **stable factual base** required for institutional discretion.

---

## Why Existing Traces Are Insufficient

Standard logs and metrics are fragmented, dependent on evolving systems, and do not guarantee integrity over time. They are useful for observability but insufficient for establishing indisputable facts. Horizon addresses a different structural need: the **sovereign preservation of execution facts**.

---

---

# Automated Decisions

### Understanding the nature of automated decision-making

Automated decisions are increasingly embedded in operational systems. They determine outcomes that can have durable effects on individuals, organizations, and institutions.

An automated decision is not a single output. It is the result of a concrete execution that occurs at a specific moment in time, under specific conditions. Understanding what an automated decision is is a prerequisite to understanding why its factual state cannot be reliably reconstructed after the fact.

---

### The components of an automated decision

An automated decision is composed of multiple elements that jointly determine its outcome.

**Input data**
Input data consists of the information available to the system at execution time. This may include:

* user-provided data,
* contextual signals,
* external data sources,
* derived or computed variables.
These inputs are not static. They evolve continuously and may not exist in the same form after execution.

**Decision logic**
The decision logic defines how inputs are processed. It may take the form of:

* deterministic rules,
* statistical models,
* machine learning models,
* hybrid systems combining several approaches.
This logic is itself versioned, configured, and subject to change over time.

**Execution context**
The execution context includes:

* the system identity,
* configuration parameters,
* thresholds,
* runtime environment,
* dependencies active at execution time.
This context is rarely captured in full by conventional logging mechanisms, yet it materially affects the decision.

**Output**
The output is the result produced by the system at execution time. It may be binary or continuous, final or intermediate, and is often the only element that is durably retained. On its own, the output does not describe how or why it was produced.

---

### Automated decisions as execution-time facts

An automated decision is a fact of execution. It exists at a precise moment, when:

1. specific data was consumed,
2. specific logic was applied,
3. under a specific context,
4. to produce a specific outcome.

Once this moment has passed, the original execution state no longer exists in the system as a whole. What remains are traces.

---

### Why reconstruction is structurally fragile

Because automated decisions depend on multiple volatile components, reconstructing them after the fact is structurally fragile. In practice:

* input data may have changed or disappeared,
* models may have been retrained,
* configurations may have evolved,
* execution environments may no longer exist.

Logs and traces capture fragments of activity, not the full execution state. Reconstruction therefore requires: inference, interpretation, and assumptions made with knowledge of the outcome. This is not a failure of implementation. It is a structural limitation of post-hoc reconstruction.

---

### Logs are not execution-time evidence

Traditional logs are designed for observability and debugging. They:

* are distributed across systems,
* are not guaranteed to be complete,
* are often rotated or sampled,
* and are not cryptographically bound to execution time.

As a result, logs can support investigation, but they cannot reliably establish the factual state of a decision at the moment it was executed. Execution-time evidence requires a different approach.

---

### The need for execution-time capture

If an automated decision is a fact of execution, then preserving that fact requires capturing it when it occurs, not reconstructing it later. This implies:

* capturing all relevant components together,
* binding them to a precise moment in time,
* preserving them independently of future system evolution.

This is the role of a Decision Snapshot Infrastructure.

---

### Independence from the source system

For execution-time evidence to remain usable over time, it must not depend on the continued existence or stability of the source system. Execution-time facts must remain accessible even if:

* the decision system is modified,
* the architecture is refactored,
* the model is replaced,
* or the system is decommissioned.

This independence cannot be achieved through reconstruction. It requires self-contained factual records.

---

### Institutional control remains unchanged

Capturing execution-time evidence does not change who decides, interprets, or communicates. The institution retains full control over:

* which decisions are examined,
* how facts are interpreted,
* what conclusions are drawn,
* and what is disclosed.

Execution-time evidence does not impose a narrative. It provides a stable factual base upon which institutional judgment can be exercised.

---

### Operational implications

The complexity of automated decisions does not only create conceptual risk. It creates operational cost. When facts are not captured at execution time:

* investigations take longer,
* multiple teams must coordinate,
* legacy systems must be consulted,
* and uncertainty accumulates.

Capturing execution-time evidence reduces the effort required to establish factual state when it is needed. What changes is not the content of the record. It is the cost of assembling, retaining, and accessing it.

---

### Summary

Automated decisions are complex, execution-time events composed of volatile elements. Once executed, their original factual state cannot be reliably reconstructed from traces alone. Preserving that state requires capturing it at execution time, in a form that survives system evolution. This is why automated decisions require a Decision Snapshot Infrastructure.

---

---

# Institutional Contexts

### Where execution-time evidence becomes institutionally critical

Automated decisions increasingly operate within environments where accountability, reviewability, and the durability of facts are essential. These environments are referred to as **institutional contexts** - not because they impose a single governance model, but because they require the ability to establish what actually happened at execution time, independent of any subsequent interpretation.

Execution-time evidence is not specific to any single function. It becomes relevant wherever organizations must reliably answer factual questions about past decisions.

---

### Beyond audit and compliance

Institutional contexts are often associated with audit, compliance, or regulatory oversight. These are important use cases, but they are not the only ones. Execution-time evidence also supports:

* internal reviews and post-incident analysis (post-mortems),
* cross-team coordination (engineering, data, operations, risk),
* information requests from clients or partners,
* long-term accountability within evolving systems.

The shared requirement across these contexts is not compliance per se. It is the need for a stable factual foundation that does not depend on reconstruction.

---

### The limits of retrospective narratives

In institutional settings, retrospective analysis is often treated as evidence. However, retrospective analysis:

* assembles narratives after the outcome is known,
* relies on partial and evolving sources,
* and is inherently subject to interpretation and hindsight bias.

Narratives can support understanding, but they do not establish factual certainty. Where institutional accountability is at stake, this distinction matters.

---

### Execution-time evidence as institutional foundation

Execution-time evidence establishes facts before examination begins. It anchors:

1. what data was available,
2. what logic was applied,
3. under what conditions,
4. and what outcome was produced.

This anchoring does not dictate interpretation or judgment. It provides a shared factual base upon which different institutional functions can rely. Audit, legal review, governance, and technical investigation can all refer to the same facts - without requiring the same conclusions.

---

### An infrastructure, not an institutional prescription

A Decision Snapshot Infrastructure does not impose an institutional posture. It does not define:

* what should be examined,
* which decisions matter,
* how conclusions should be drawn,
* or what should be communicated.

These choices remain institutional and contextual. The role of the infrastructure is limited and precise: to ensure that factual execution states exist, independently of system evolution, when they are needed.

---

### Control remains institutional

Capturing execution-time evidence does not centralize authority. Institutions retain full control over:

* the scope of examination,
* how facts are interpreted,
* the articulation of responsibility,
* and external communication.

Execution-time evidence constrains reconstruction, not discretion. It reduces uncertainty without reducing institutional latitude.

---

### Operational impact across institutional functions

In practice, institutional contexts are also operational contexts. When execution-time evidence does not exist:

* establishing facts requires coordination across teams,
* legacy systems must be accessed or revived,
* assumptions must be negotiated,
* and effort increases over time.

Conversely, execution-time evidence:

* reduces the effort required to establish factual state,
* shortens review cycles,
* and limits dependency on past systems and configurations.

What changes is not the institutional role. It is the operational cost of fulfilling it.

---

### Why this matters over time

Institutional accountability does not stop when systems change. Models are replaced. Architectures are refactored. Teams move on.

Execution-time evidence ensures that past decisions remain examinable without requiring the original system to still exist. This durability is essential wherever institutional accountability extends beyond the lifecycle of technical components.

---

### Summary

Institutional contexts require more than retrospective narratives. They require factual certainty that survives time, system evolution, and organizational change. A Decision Snapshot Infrastructure provides this certainty by preserving execution-time evidence - without prescribing interpretation, governance, or institutional posture.

---

---

# Principles & Boundaries

### Defining what execution-time evidence is - and what it is not

The following principles define the conceptual foundations of Horizon and the boundaries within which it operates. They are not prescriptions for governance or decision-making. They describe structural constraints observed in automated decision systems and the conditions under which factual certainty can exist over time.

---

### Principle 1 - Evidence exists only at execution time

A decision becomes a fact at the moment it is executed. At that moment:

* specific inputs are consumed,
* specific logic is applied,
* under a specific execution context,
* producing a specific outcome.

Once this moment has passed, the original factual state no longer exists as a whole within the system. Any later attempt to establish what happened relies on reconstruction. Execution-time evidence can therefore only be produced at execution time. It cannot be recreated afterward without loss or interpretation.

### Principle 2 - Facts and interpretations must remain distinct

Execution-time evidence establishes facts, not meaning. Facts describe:

* what was executed,
* with what data,
* under which conditions,
* and with what result.

Interpretation, assessment, and judgment may follow - but they occur in a different temporal layer. Conflating facts with interpretation introduces ambiguity and hindsight bias. Separating them preserves the institution's actual state of knowledge at the moment of action.

### Principle 3 - Reconstruction is not evidence

Reconstruction assembles narratives after the fact. It may support understanding, explanation, or learning. It does not preserve the factual state that existed at execution time.
Reconstruction depends on:

* surviving traces,
* evolving systems,
* partial data,
* and retrospective interpretation.

These are structural limitations, not implementation flaws. Where factual certainty is required, reconstruction cannot serve as the foundation.

---

### Boundary 1 - Horizon does not explain decisions

Horizon does not provide explanations, justifications, or interpretations. It does not:

* assess correctness,
* assign responsibility,
* or evaluate outcomes.

Its role ends with the declaration and preservation of facts. Interpretation remains a human and institutional activity.

### Boundary 2 - Horizon is not an audit or monitoring system

Horizon is not: an observability platform, a monitoring or alerting tool, a SIEM, a workflow engine, or a decision system.
Those tools answer different questions. Horizon addresses a structural gap: the absence of durable, execution-time factual records for automated decisions.

### Boundary 3 - Horizon does not impose institutional posture

Horizon does not define which decisions matter, what must be examined, how conclusions should be drawn, or what should be communicated. These choices remain institutional and contextual.
Execution-time evidence constrains reconstruction, not discretion. The organization retains full control over scope, interpretation, articulation, and communication.

---

### Infrastructure principle - Neutrality by design

Horizon operates as an infrastructure layer. It integrates alongside existing systems without interfering with decision logic, governance structures, or organizational authority. The infrastructure does not encode policy or intent. It ensures that factual execution states exist when they are needed.

### Temporal boundary - Independence from system evolution

Execution-time evidence must remain usable beyond the lifecycle of the system that produced it. Decision Snapshot Artifacts are therefore designed to be self-contained, verifiable, and independent of future system state. They remain usable even if models are retrained, configurations change, architectures are refactored, or systems are decommissioned.

### Operational boundary - Reducing effort, not redefining records

Horizon does not change what organizations choose to record. It changes the effort required to establish factual state. By capturing execution-time evidence, the cost of post-hoc reconstruction is reduced, cross-team coordination is minimized, and dependency on legacy systems decreases. What changes is not the content of the record, but the cost of assembling, retaining, and accessing it over time.

---

### Summary

Horizon is built on a limited set of principles and strict boundaries. It captures facts at execution time, preserves them independently of system evolution, separates facts from interpretation, and leaves institutional control unchanged. Within these boundaries, execution-time evidence becomes durable, usable, and operationally efficient - without prescribing governance, judgment, or intent.

---

---

# Clarifications

### Addressing common misunderstandings about execution-time evidence

This section clarifies recurring points of confusion that arise when discussing execution-time evidence and Decision Snapshot Infrastructure. These clarifications do not introduce new principles. They ensure that previously stated concepts are interpreted correctly and applied within their intended scope.

---

### Clarification 1 - Evidence versus explanation

Execution-time evidence establishes facts, not explanations. A Decision Snapshot:

* declares what was executed,
* with what data,
* under which conditions,
* and with what outcome.

It does not:

* explain why a decision was made,
* justify its correctness,
* or assign responsibility.

Explanation, interpretation, and judgment remain human and institutional activities.

### Clarification 2 - Reconstruction is not evidence

Reconstruction assembles narratives after execution using: logs, traces, configuration repositories, human recollection, and retrospective interpretation. Reconstruction may support learning and analysis. It does not preserve the factual state that existed at execution time. This limitation is structural, not methodological. Where factual certainty is required, reconstruction cannot serve as evidence.

### Clarification 3 - Simulation versus execution-time capture

Execution-time evidence cannot be simulated retroactively. If no evidence was captured when a decision was executed, it cannot be recreated later without interpretation.
This does not mean that Horizon cannot be demonstrated. Horizon capture can be demonstrated on any live system, including:

* test environments,
* sandbox systems,
* and demonstration setups.

In those cases, Horizon captures the factual state of that execution. What cannot be simulated is the capture of past executions that never produced evidence at the time they occurred.

### Clarification 4 - Horizon does not replace reconstruction entirely

Horizon does not aim to eliminate reconstruction as an analytical practice. Reconstruction remains useful for: understanding system behavior, exploring alternative explanations, or learning from incidents.
What Horizon removes is the need to rely on reconstruction as a source of facts. Reconstruction may inform interpretation; it does not establish factual certainty.

### Clarification 5 - Institutional control remains unchanged

Capturing execution-time evidence does not centralize authority or impose interpretation. The institution retains full control over:

* which decisions are examined,
* how facts are interpreted,
* what conclusions are drawn,
* and what is communicated internally or externally.

Horizon records factual state. Institutional discretion governs its use.

---

### Clarification 6 - Why these distinctions matter operationally

These distinctions are not purely conceptual. When execution-time evidence does not exist:

* establishing factual state requires coordination across teams,
* legacy systems must be accessed or revived,
* assumptions must be negotiated,
* and effort increases over time.

Execution-time evidence reduces the effort required to establish factual state, support institutional review, and answer questions about past decisions. What changes is not the content of the record. It is the cost of assembling, retaining, and accessing it.

### Clarification 7 - Horizon is infrastructure, not a method

Horizon is not a methodology, framework, or governance prescription. It operates as an infrastructure layer:

* capturing execution-time facts,
* preserving them independently of system evolution,
* without interfering with decision logic or institutional processes.

The infrastructure enables factual durability. It does not define intent or policy.

---

### Summary

Execution-time evidence exists only when it is produced at execution time. It establishes facts without explanation, survives system evolution, and reduces reliance on reconstruction as a source of truth. Horizon captures these facts. Institutions retain full control over their interpretation and use.

---

---

# Glossary

**Decision Snapshot**
A Decision Snapshot is the complete factual state of an automated decision at the moment it becomes irreversible. It represents what existed at execution time - not what is later inferred or reconstructed.

**Decision Snapshot Artifact**
A Decision Snapshot Artifact is a self-contained, immutable, and verifiable record that captures a Decision Snapshot. It contains all information required to establish the factual state of a decision without relying on external systems.

**Decision Snapshot Infrastructure**
Decision Snapshot Infrastructure is the technical infrastructure designed to capture, preserve, and verify Decision Snapshot Artifacts at execution time. It operates independently of the lifecycle or evolution of the source system.

**Execution-Time Evidence**
Execution-Time Evidence is factual evidence produced at the exact moment a decision is executed. It contrasts with post-hoc reconstruction, which relies on inference and retrospective interpretation.

**Execution-Time Capture**
Execution-Time Capture is the act of recording execution-time evidence at the moment of decision execution. It is a prerequisite for producing non-reconstructive evidence.

**Evidence**
Evidence is a factual declaration of what existed at a specific moment in time. Evidence is established through execution-time capture and does not depend on later interpretation or reconstruction.

**Reconstruction**
Reconstruction is the post-hoc process of assembling a narrative about what might have happened using partial sources. Reconstruction relies on inference, interpretation, and retrospective knowledge.

**Reconstruction Effort**
Reconstruction Effort refers to the operational process of attempting to infer past decision states from logs, traces, configurations, and human recollection. Reconstruction effort is inherently uncertain and increases as systems evolve.

**Operational Effort**
Operational Effort is the cumulative time, coordination, and resources required to establish the factual state of a past decision. Execution-time evidence reduces operational effort by eliminating the need for reconstruction.

**Execution Context**
Execution Context is the full set of technical and systemic conditions under which a decision is executed. It may include system identity, runtime configuration, active dependencies, thresholds, and environmental conditions.

**Source System**
The Source System is the technical system that executes the decision. Decision Snapshot Artifacts are designed to remain usable even if the source system changes or is decommissioned.

**Evidence Independence**
Evidence Independence is the property by which execution-time evidence remains usable without access to the source system or its future state.

**Point of No Return**
The Point of No Return is the moment at which a decision becomes irreversible and produces durable effects. Execution-time capture must occur at or before this point.

**Completeness**
Completeness is the property that all relevant inputs, context, logic state, and outputs present at execution time are included in the artifact.

**Temporal Integrity**
Temporal Integrity ensures that the artifact is cryptographically bound to the exact moment of execution.

**Immutability**
Immutability is the guarantee that a Decision Snapshot Artifact cannot be modified, amended, or deleted after creation.

**Ordering**
Ordering ensures that the position of a decision within a sequence of executions is explicit and verifiable.

**Authenticity**
Authenticity guarantees that the origin and integrity of a Decision Snapshot Artifact can be cryptographically verified.

**Verifiability**
Verifiability is the ability to independently validate the integrity, authenticity, and completeness of an artifact without relying on the source system.

**Attestation**
Attestation is the formal declaration of a factual execution state through a signed Decision Snapshot Artifact.

**Interpretation**
Interpretation is the human or institutional process of assigning meaning, responsibility, or judgment to factual evidence. Interpretation occurs after execution-time evidence is established.

**Institutional Control**
Institutional Control is the principle that capturing execution-time evidence does not alter an organization's authority over interpretation, judgment, scope of examination, or communication.

**Artifact Lifecycle**
Artifact Lifecycle describes the sequence of states a Decision Snapshot Artifact goes through after creation, including verification, retention, access control, archival, or deletion. The artifact lifecycle is independent of the source system lifecycle.

**Log**
A Log is a system-generated record designed for observability or debugging. Logs are partial, distributed, and not guaranteed to represent complete execution-time evidence.

**Trace**
A Trace is a record of execution flow across system components. Traces support observability but do not constitute execution-time evidence.

**Decision Record**
A Decision Record is a generic collection of information describing a decision. Decision records are not necessarily self-contained, immutable, or verifiable and should not be conflated with Decision Snapshot Artifacts.

**Demonstration Environment**
A Demonstration Environment is any live system (test, sandbox, or demo) where execution-time capture can be observed. Evidence captured in such environments reflects the factual state of that execution only.

---

---

# Horizon Availability

### Current stage

Horizon exists as an implemented MVP. It is currently offered through intra-perimeter capability validation deployments with a limited number of institutions.

These deployments are intentionally bounded. They are designed to allow institutions to examine the capability itself, rather than to initiate platform adoption.

---

### What this stage enables

At this stage, Horizon allows institutions to:

* preserve execution and evaluation facts at the moment they occur
* operate the capability within their own trust perimeter
* examine how such facts can be reviewed, relied upon, and verified over time
* assess whether this approach is institutionally acceptable in their context

The focus is on working with real facts, produced by real systems, rather than on demonstrations or simulated examples.

---

### Scope of the validation deployments

A validation deployment focuses on:

* a defined subset of execution and evaluation points
* observation and examination of preserved facts over a bounded period
* institutional learning and internal assessment

Reaching a conclusion, including the conclusion that the capability should not be pursued, is considered a valid and useful outcome of this stage.

---

### How this fits the overall approach

Horizon is deliberately introduced after conceptual clarity, but before institutional commitment. The product exists in order to make the discussion concrete.

The pace and scope of any engagement remain controlled.

---

---

# The Decision Snapshot Artifact

*This page defines the canonical and authoritative definition of a Decision Snapshot Artifact.*

## Definition

A **Decision Snapshot Artifact** is a self-contained, immutable record that captures the complete factual state of a decision at the moment it becomes irreversible.

It is not a log entry.
It is not a trace.
It is not a report generated after the fact.

It is the **institutional declaration of record**, by the decision-making system itself, of what existed - inputs, context, evaluation, and output - at the point of no return.

The Decision Snapshot Artifact does not describe a decision.
**It is the decision, fixed in time.**

*(Hereafter referred to as the "Snapshot Artifact")*

---

## Invariant Properties

A Decision Snapshot Artifact guarantees five properties that **cannot be altered after creation**.

These properties are not implementation choices.
They are **non-negotiable invariants**.

| Property | Guarantee |
| --- | --- |
| **Completeness** | Contains all inputs, context, evaluations, and outputs that were present at decision time - nothing must be fetched elsewhere. |
| **Temporal Integrity** | Timestamp is cryptographically bound to the record - the moment of execution cannot be disputed. |
| **Immutability** | Once written, the artifact cannot be modified, amended, or deleted. |
| **Ordering** | Position in the decision sequence is explicit and verifiable - what came before, what came after. |
| **Authenticity** | Cryptographically signed - origin and integrity are provable. |

---

## Why Self-Contained

A Decision Snapshot Artifact carries everything required to establish what occurred **within itself**.

* **No external dependencies** - It does not rely on databases, APIs, or systems that may change or disappear.
* **No reconstruction required** - The examiner does not need to query other sources to understand what happened.
* **No interpretation required to establish facts** - The facts are declared, not inferred.

This means:

> **Two years later, the artifact alone is sufficient to answer:**
> *"What did the system see, evaluate, and decide at that moment?"*

If understanding the decision requires fetching data from elsewhere,
it is **not** a Decision Snapshot Artifact -
it is a **pointer to a reconstruction**.

---

## Why It Survives the Source System

Systems evolve. Models are retrained. Configurations are updated.
Teams move on. Vendors change. Systems are decommissioned.

A Decision Snapshot Artifact is explicitly designed to **outlive its source**.

| Source system reality | Artifact guarantee |
| --- | --- |
| Model is retrained monthly | Artifact contains the model hash and version at T0. |
| Configuration is updated | Artifact contains the full configuration state at T0. |
| Database schema changes | Artifact contains the snapshot data, not a foreign key. |
| System is decommissioned | Artifact remains readable and verifiable independently. |
| Vendor relationship ends | Artifact has no runtime dependency on the vendor. |

The Snapshot Artifact does not ask the source system:
*"What did you do?"*

**It is the record of what was done.**

---

## The Core Principle: Evidence Independence

Evidence that depends on the continued existence, availability,
or cooperation of the source system **is not evidence**.

It is a promise to reconstruct.

A Decision Snapshot Artifact makes no such promise.
**It is the evidence.**
