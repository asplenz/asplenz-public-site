[Version anglaise]

# Horizon seals declared facts.

Horizon is a neutral, append-only infrastructure that seals security and crisis facts as they are declared, without deciding, approving, or interfering with response operations.

- Capture facts during real incidents, not after
- Independent, cryptographically verifiable evidence
- No workflow, no approval, no operational friction

---

**Horizon is Decision Evidence Infrastructure.**
It produces verifiable facts about decisions without interpreting, enforcing, or governing them.

---

## When facts can no longer be proven post-incident

**During a major security incident:**

- decisions are urgent,
- channels are informal,
- approvals are verbal,
- actions happen before documentation.

**Weeks later, the questions arrive:**

- Who knew what, and when?
- What was declared, and by whom?
- Which decisions were taken under pressure?
- What evidence actually exists?

At that point, reality is reconstructed from emails, chat logs, partial system traces, and human memory.

That reconstruction is fragile.

---

## How Horizon seals facts

1. A fact is declared by an actor
2. Horizon processes the declaration
3. The fact is hashed and signed
4. A sealed_at timestamp is assigned
5. The fact is appended to an immutable chain

Horizon does not decide what this fact means.
It only proves that it was declared and sealed at that moment.

---

## Post-incident timeline

Timeline ordered by sealing time (sealed_at)

| Time | Actor | Payload | Sealed |
|------|-------|---------|--------|
| ... | ... | ... | ✓ |

Proof Bundle · 5 facts · Signed

Horizon shows what was declared. You draw the conclusions.

---

## How Horizon seals facts

A fact is simply something declared by an identified actor, at a given moment.

**When a fact is declared**, during a crisis, an exception, or normal operations, Horizon:

- assigns a single authoritative timestamp (sealed_at),
- stores the content as fully opaque data,
- cryptographically links it to the previous fact.

**Facts are appended to a Facts Stream:**

- append-only by construction,
- with no business state,
- no opening or closing,
- and no imposed causality.

Later, additional facts may be declared as evaluations of previous facts.

**Horizon:**

- records the declared relationship,
- seals the evaluation,
- does not interpret its meaning.

Compliance, legitimacy, responsibility, or fault are always external to Horizon.

*Horizon produces structured, verifiable evidence. Without producing judgment.*

---

## Built for scrutiny, whenever it happens.

After an incident, Horizon allows you to show:

- what was declared,
- by whom,
- when Horizon received proof of it,
- in what factual sequence,
- and which evaluations were later declared.

*Without log interpretation. Without narrative reconstruction.*

---

## Why CISOs rely on Horizon

- Incidents escape ideal workflows
- Reality is judged after the fact
- Personal and organizational exposure is real
- Logs are necessary but insufficient

*Horizon provides independent evidence, not explanations.*

---

## Who else relies on it?

Horizon aligns security, engineering, risk, and legal around facts.

**Engineering / CTO**
Append-only, API, non-intrusive, no runtime impact.

**Risk**
Traceability of exceptions, continuity, after-the-fact clarity.

**Legal**
No qualification, no decision, neutral and opposable facts.

---

## What Horizon is not

- Not a SIEM
- Not a SOAR
- Not an IR platform
- Not a compliance engine
- Not a decision system

Horizon complements them by recording what they cannot guarantee.

---

**Horizon provides indisputable evidence of what was declared during a security incident, by whom, and when it was sealed.**

*The system of record for incident facts.*

---

[Version française]

# Horizon scelle les faits déclarés.

Horizon est une infrastructure neutre, append-only, qui scelle les faits de sécurité et de crise au moment où ils sont déclarés, sans décider, sans approuver et sans interférer avec les opérations de réponse.

- Capturer les faits pendant l'incident, pas après
- Preuve indépendante, vérifiable cryptographiquement
- Aucun workflow, aucune approbation, aucune friction opérationnelle

---

**Horizon est une Infrastructure de Preuve Décisionnelle.**
Il produit des faits vérifiables sur les décisions, sans les interpréter, les imposer ou les gouverner.

---

## Quand les faits ne peuvent plus être prouvés post-incident

**Pendant un incident majeur :**

- les décisions sont urgentes,
- les canaux sont informels,
- les validations sont verbales,
- les actions précèdent la documentation.

**Quelques semaines plus tard, les questions arrivent :**

- Qui savait quoi, et quand ?
- Qu'est-ce qui a été déclaré, et par qui ?
- Quelles décisions ont été prises sous pression ?
- Quelle preuve existe réellement ?

À ce stade, la réalité est reconstruite à partir d'emails, de logs de chat, de traces système partielles et de la mémoire humaine.

Cette reconstruction est fragile.

---

## Comment Horizon scelle les faits

1. Un fait est déclaré par un acteur
2. Horizon traite la déclaration
3. Le fait est hashé et signé
4. Un timestamp sealed_at est attribué
5. Le fait est ajouté à une chaîne immuable

Horizon ne décide pas ce que ce fait signifie.
Il prouve seulement qu'il a été déclaré et scellé à ce moment.

---

## Timeline post-incident

Timeline ordonnée par temps de scellement (sealed_at)

| Heure | Acteur | Payload | Scellé |
|-------|--------|---------|--------|
| ... | ... | ... | ✓ |

Proof Bundle · 5 faits · Signé

Horizon montre ce qui a été déclaré. Vous tirez les conclusions.

---

## Comment Horizon scelle les faits

Un fait est simplement quelque chose déclaré par un acteur identifié, à un moment donné.

**Quand un fait est déclaré**, pendant une crise, une exception ou des opérations normales, Horizon :

- attribue un horodatage unique faisant autorité (sealed_at),
- stocke le contenu comme donnée entièrement opaque,
- le lie cryptographiquement au fait précédent.

**Les faits sont ajoutés à un Flux de Faits (Facts Stream) :**

- append-only par construction,
- sans état métier,
- sans ouverture ni fermeture,
- et sans causalité imposée.

Plus tard, des faits supplémentaires peuvent être déclarés comme évaluations de faits précédents.

**Horizon :**

- enregistre la relation déclarée,
- scelle l'évaluation,
- n'interprète pas sa signification.

Conformité, légitimité, responsabilité ou faute sont toujours externes à Horizon.

*Horizon produit des preuves structurées et vérifiables. Sans produire de jugement.*

---

## Conçu pour l'examen, quel que soit le moment.

Après un incident, Horizon vous permet de montrer :

- ce qui a été déclaré,
- par qui,
- quand Horizon en a reçu la preuve,
- dans quelle séquence factuelle,
- et quelles évaluations ont été déclarées par la suite.

*Sans interprétation de logs. Sans reconstruction narrative.*

---

## Pourquoi les RSSI font confiance à Horizon

- Les incidents échappent aux workflows idéaux
- La réalité est jugée après coup
- L'exposition personnelle et organisationnelle est réelle
- Les logs sont nécessaires mais insuffisants

*Horizon fournit des preuves indépendantes, pas des explications.*

---

## Qui d'autre s'appuie dessus ?

Horizon aligne sécurité, engineering, risque et juridique autour des faits.

**Engineering / CTO**
Append-only, API, non-intrusif, sans impact runtime.

**Risk**
Traçabilité des exceptions, continuité, clarté après coup.

**Juridique**
Aucune qualification, aucune décision, faits neutres et opposables.

---

## Ce qu'Horizon n'est pas

- Pas un SIEM
- Pas un SOAR
- Pas une plateforme IR
- Pas un moteur de conformité
- Pas un système de décision

Horizon les complète en enregistrant ce qu'ils ne peuvent pas garantir.

---

**Horizon fournit une preuve incontestable de ce qui a été déclaré pendant un incident de sécurité, par qui, et quand cela a été scellé.**

*Le system of record des faits d'incident.*
