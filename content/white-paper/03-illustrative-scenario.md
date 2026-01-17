# 🇫🇷 Scénario Illustratif

## Une illustration concrète de la preuve à l’exécution face à la reconstruction

Ce scénario est volontairement générique. Il ne décrit pas une organisation, un produit ou un contexte réglementaire spécifique.

Son objectif est d’illustrer, en termes concrets, la différence structurelle entre :

* des décisions dont l’état factuel doit être reconstruit a posteriori, et
* des décisions dont l’état factuel a été capturé au moment de l’exécution.

La qualité, la justesse ou la légitimité de la décision elle-même **n'est pas** évaluée ici.

---

## Le contexte

Un système de décision automatisé produit des décisions ayant des effets durables.

Au moment de l'exécution, le système :

* consomme des données d'entrée spécifiques,
* applique une logique ou un modèle donné,
* opère sous une configuration concrète,
* et produit un résultat.

Quelque temps plus tard, l’organisation doit répondre à une question concernant cette décision. La différence entre les deux mondes ci-dessous ne réside pas dans la décision elle-même, mais dans la persistance — ou non — de l’état factuel de l’exécution.

---

## Deux mondes possibles

### Monde A — La Reconstruction

Dans ce monde, aucune preuve n’a été capturée au moment où la décision a été prise. Lorsque la décision est examinée plus tard, l’organisation doit reconstruire ce qui s’est passé en utilisant :

* des journaux (logs),
* des états de bases de données,
* des référentiels de configuration,
* des outils de monitoring,
* des tickets et rapports d'incidents,
* et la mémoire humaine.

L’état factuel de la décision est déduit après coup. Différentes équipes peuvent reconstruire des versions divergentes de l’événement, selon les sources disponibles, l’évolution des systèmes et les interprétations appliquées. Le résultat est un récit assemblé sous le signe de l’incertitude.

---

### Monde B — La Preuve à l’exécution

Dans ce monde, l’état factuel de la décision a été capturé au moment exact de l’exécution. Cela implique qu’un mécanisme de preuve — tel qu’une **Infrastructure de Snapshot Décisionnel** — était déjà en place.

Lorsque la décision est examinée plus tard :

* les données d’entrée réellement utilisées sont disponibles,
* l’état exact de la logique ou du modèle est connu,
* le contexte d’exécution est préservé,
* et le résultat produit est enregistré.

L’état factuel n’a pas besoin d’être déduit. Il existe déjà.

---

## Ce qui change entre les deux mondes

La décision peut être identique dans les deux mondes. Ce qui change, c’est la **disponibilité des faits**.

Dans le Monde A :

* les faits doivent être reconstruits,
* l’interprétation est inévitable pour combler les vides,
* l’incertitude s’accumule avec le temps.

Dans le Monde B :

* les faits sont examinés directement,
* l’interprétation est séparée de l’exécution,
* l’état de connaissance au moment de l’action est préservé.

D’un point de vue opérationnel, cela signifie :

> **Moins d’efforts sont requis pour établir, conserver et accéder à l’état factuel lorsqu’il est nécessaire.**

La différence n’est pas une intention institutionnelle. C’est un coût opérationnel.

---

## Ce que ce scénario n’évalue pas

Ce scénario n’évalue **pas** :

* si la décision était correcte ou incorrecte,
* si la politique ou le modèle était approprié,
* si un résultat différent aurait été préférable.

Une décision capturée à l’exécution peut plus tard être contestée, révisée ou annulée. La preuve à l’exécution ne légitime pas la décision. Elle ne justifie pas le résultat.

Elle établit une seule chose : **ce que le système a réellement fait, avec ce qu’il avait, à cet instant précis.**

---

## Le contrôle institutionnel reste inchangé

Dans les deux mondes, l’institution conserve le plein contrôle sur :

* ce qui est examiné,
* la manière dont les faits sont interprétés,
* les conclusions qui en sont tirées,
* et ce qui est communiqué.

La preuve à l’exécution n’impose pas de récit. Elle n’automatise pas le jugement. Elle fournit une base factuelle stable sur laquelle le pouvoir discrétionnaire de l’institution peut s’exercer.

---

## Pourquoi cette distinction est cruciale

Les institutions échouent rarement parce qu’elles ne peuvent pas décider. Elles échouent parce que, avec le temps, elles ne peuvent plus **démontrer** ce qui s’est réellement passé.

L’absence de preuve à l’exécution n’empêche pas l’action, mais elle augmente le coût, l’incertitude et la fragilité de l’examen ultérieur. Ce scénario illustre pourquoi la préservation des faits au moment de l’exécution change fondamentalement la relation d’une organisation avec ses propres décisions passées.

---

## Résumé

La différence entre les deux mondes n'est pas la décision elle-même. C'est la nature de l'état factuel de l'exécution :

* doit-il être reconstruit dans l'incertitude, ou
* existe-t-il déjà sous la forme d'un enregistrement immuable ?

Une Infrastructure de Snapshot Décisionnel rend le second monde possible.

---

---

# 🇬🇧 Illustrative Scenario

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

### World A — Reconstruction

In this world, no execution-time evidence was captured when the decision was made. When the decision is later examined, the organization must reconstruct what happened using:

* logs,
* database states,
* configuration repositories,
* monitoring tools,
* tickets and incident reports,
* and human recollection.

The factual state of the decision is inferred after the fact. Different teams may reconstruct different versions of what happened, depending on which sources are still available, how systems have evolved, and which interpretations are applied. The result is a narrative assembled under uncertainty.

---

### World B — Execution-time evidence

In this world, the factual state of the decision was captured at the moment of execution. This implies that an execution-time evidence mechanism — such as a **Decision Snapshot Infrastructure** — was already in place.

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

The absence of execution-time evidence does not prevent action. It increases the cost, uncertainty, and fragility of later examination. This scenario illustrates why preserving facts at execution time fundamentally changes the organization’s relationship to its own past decisions.

---

## Summary

The difference between the two worlds is not the decision itself. It is whether the factual state of execution:

* must be reconstructed under uncertainty, or
* already exists as an immutable record.

A Decision Snapshot Infrastructure makes the second world possible.

