[English Version]

# Understanding Horizon Proofs

Informative · Public

Explain how Horizon evidence is produced and how it can be read — with a concrete example — without redefining its meaning.

This document complements Proof Semantics.
It does not redefine what a Horizon proof means.
It explains how Horizon produces evidence and how that evidence can be examined.

---

## Sealing – How Horizon seals facts

A fact in Horizon is simply something declared by an identified actor, at a given moment. When a fact is declared (during a crisis, an exception, or normal operations), Horizon treats this declaration as a technical event to be sealed.

The sealing process follows a fixed sequence. First, the declaration is received from a technical channel (API, email, or system integration). Horizon does not inspect, validate, or interpret its content.

Horizon then assigns a single authoritative timestamp, called sealed_at. This timestamp represents the moment the declaration was sealed by Horizon. It is the only time reference asserted by the system.

The declared content is stored as fully opaque data. Horizon does not impose a schema, enforce structure, or extract meaning from the payload.

The fact is then cryptographically hashed and signed. Its integrity becomes tamper-evident.

Finally, the fact is appended to an immutable chain, linked to the previous fact within the same stream. This append-only construction ensures that facts cannot be altered or removed without detection.

Facts are appended to a Facts Stream. A stream has no business state. It has no opening or closing. It does not represent a workflow, a decision lifecycle, or a process state.

At any point in time, additional facts may be declared and appended to the same stream. Horizon records that a relationship was declared and seals it, without interpreting its meaning.

Throughout this process, Horizon does not decide what the fact means. It does not assess correctness, legitimacy, causality, or outcome. All interpretation remains external to Horizon.

---

## Reading a proof – Timeline example

This section illustrates how Horizon evidence can be examined once facts have been sealed. The example below shows a post-incident timeline, ordered by sealing time (sealed_at).

| Time | Actor | Payload | Hash |
|------|-------|---------|------|
| 08:30:00 | monitoring@ | metric=memory_usage, threshold=95% | ✓ a1b2c3...d4e5f6 |
| 08:32:00 | ops-lead@ | action=stop_service, target=payment-gateway-eu-west-1 | ✓ b2c3d4...e5f6a7 |
| 08:33:00 | cto@ | message=Proceed with controlled shutdown. | ✓ c3d4e5...f6a7b8 |
| 08:35:02 | ops-lead@ | method=kubectl_drain, result=service_stopped | ✓ d4e5f6...a7b8c9 |
| 08:40:00 | monitoring@ | observation=service_stopped, error_rate=0% | ✓ e5f6a7...b8c9d0 |

Proof Bundle · 5 facts · Signed

This example illustrates one way to examine sealed facts; it does not imply any interpretation beyond what is defined in Proof Semantics.

### What the timeline shows:

- that certain declarations existed,
- who declared them (as attributed),
- when Horizon sealed them,
- that they belong to the same stream.

### What the timeline does not show:

- whether the declarations are true,
- whether they were authorized,
- whether actions occurred as described,
- whether one fact caused another,
- whether a decision was correct or legitimate.

The timeline does not explain events. It does not reconstruct intent. It does not assign responsibility. It simply exposes sealed facts, in a verifiable order.

Horizon shows what was declared. You draw the conclusions. Any conclusion (operational, legal, or ethical) must be derived outside Horizon, using external context, rules, and judgment.

---

## Relationship to Proof Semantics

This document does not alter the meaning of Horizon evidence. The semantic scope and limits of Horizon proofs are defined exclusively in Proof Semantics. If a reader interprets a timeline, a stream, or a proof bundle as asserting intent, correctness, authorization, or responsibility, that interpretation is external to Horizon and not supported by the evidence itself.

See [Proof Semantics](/proof-semantic) for the canonical definition.

---

## Summary

Horizon produces evidence by sealing declared facts. It exposes those facts in a structured, verifiable form. Understanding how Horizon seals and presents facts helps readers examine evidence correctly: without attributing meaning that Horizon does not provide.

---

[Version française]

# Comprendre les preuves Horizon

Informatif · Public

Expliquer comment les preuves Horizon sont produites et comment elles peuvent être lues — avec un exemple concret — sans en redéfinir le sens.

Ce document complète Proof Semantics.
Il ne redéfinit pas la signification d'une preuve Horizon.
Il explique comment Horizon produit des preuves et comment ces preuves peuvent être examinées.

---

## Le scellement – Comment Horizon scelle les faits

Un fait dans Horizon est simplement une chose déclarée par un acteur identifié, à un moment donné. Lorsqu'un fait est déclaré (pendant une crise, une exception ou des opérations normales), Horizon traite cette déclaration comme un événement technique à sceller.

Le processus de scellement suit une séquence fixe. D'abord, la déclaration est reçue via un canal technique (API, e-mail ou intégration système). Horizon n'inspecte pas, ne valide pas et n'interprète pas son contenu.

Horizon assigne ensuite un horodatage unique qui fait foi, nommé sealed_at. Cet horodatage représente le moment où la déclaration a été scellée par Horizon. C'est la seule référence temporelle affirmée par le système.

Le contenu déclaré est stocké sous forme de données totalement opaques. Horizon n'impose pas de schéma, n'applique pas de structure et n'extrait aucun sens de la charge utile.

Le fait est ensuite haché et signé cryptographiquement. Son intégrité devient détectable en cas d'altération.

Enfin, le fait est ajouté à une chaîne immuable, lié au fait précédent au sein du même flux. Cette construction par ajout seul garantit que les faits ne peuvent être modifiés ou supprimés sans être détectés.

Les faits sont ajoutés à un Flux de Faits. Un flux n'a pas d'état métier. Il n'a pas d'ouverture ni de fermeture. Il ne représente pas un workflow, un cycle de vie de décision ou un état de processus.

À tout moment, des faits supplémentaires peuvent être déclarés et ajoutés au même flux. Horizon enregistre qu'une relation a été déclarée et la scelle, sans interpréter sa signification.

Tout au long de ce processus, Horizon ne décide pas de ce que le fait signifie. Il n'évalue pas l'exactitude, la légitimité, la causalité ou le résultat. Toute interprétation reste externe à Horizon.

---

## Lire une preuve – Exemple de chronologie

Cette section illustre comment les preuves Horizon peuvent être examinées une fois les faits scellés. L'exemple ci-dessous montre une chronologie post-incident, ordonnée par heure de scellement (sealed_at).

| Heure | Acteur | Charge utile | Hash |
|-------|--------|--------------|------|
| 08:30:00 | monitoring@ | metric=memory_usage, threshold=95% | ✓ a1b2c3...d4e5f6 |
| 08:32:00 | ops-lead@ | action=stop_service, target=payment-gateway-eu-west-1 | ✓ b2c3d4...e5f6a7 |
| 08:33:00 | cto@ | message=Proceed with controlled shutdown. | ✓ c3d4e5...f6a7b8 |
| 08:35:02 | ops-lead@ | method=kubectl_drain, result=service_stopped | ✓ d4e5f6...a7b8c9 |
| 08:40:00 | monitoring@ | observation=service_stopped, error_rate=0% | ✓ e5f6a7...b8c9d0 |

Dossier de preuve · 5 faits · Signé

Cet exemple illustre une façon d'examiner les faits scellés ; il n'implique aucune interprétation au-delà de ce qui est défini dans Proof Semantics.

### Ce que la chronologie montre :

- que certaines déclarations ont existé,
- qui les a déclarées (selon l'attribution),
- quand Horizon les a scellées,
- qu'elles appartiennent au même flux.

### Ce que la chronologie ne montre pas :

- si les déclarations sont vraies,
- si elles ont été autorisées,
- si les actions se sont produites comme décrit,
- si un fait a causé un autre,
- si une décision était correcte ou légitime.

La chronologie n'explique pas les événements. Elle ne reconstruit pas l'intention. Elle n'assigne pas de responsabilité. Elle expose simplement des faits scellés, dans un ordre vérifiable.

Horizon montre ce qui a été déclaré. Vous tirez les conclusions. Toute conclusion (opérationnelle, juridique ou éthique) doit être dérivée hors d'Horizon, en utilisant le contexte externe, les règles et le jugement.

---

## Relation avec Proof Semantics

Ce document ne modifie pas le sens des preuves Horizon. La portée sémantique et les limites des preuves Horizon sont définies exclusivement dans Proof Semantics. Si un lecteur interprète une chronologie, un flux ou un dossier de preuve comme affirmant une intention, une exactitude, une autorisation ou une responsabilité, cette interprétation est externe à Horizon et n'est pas étayée par la preuve elle-même.

Voir [Sémantique de la Preuve](/proof-semantic) pour la définition canonique.

---

## Résumé

Horizon produit des preuves en scellant des faits déclarés. Il expose ces faits sous une forme structurée et vérifiable. Comprendre comment Horizon scelle et présente les faits aide les lecteurs à examiner les preuves correctement : sans attribuer un sens que Horizon ne fournit pas.
