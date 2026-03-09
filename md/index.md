# [Version FR]

## Hero

**Tag:** Gouvernance agentique

**Headline:** Exposez vos règles à vos agents.
*Tracez comment ils les ont suivies.*

**Sub:** Knowledge est le registre que vos agents interrogent avant d'agir.

**CTAs:** [Démarrer gratuitement → /contact] [Voir comment ça marche → #how]

---

## Hero Card — Agent Finance / Risk

1. 📋 `knowledge_list_invariants` · scope: "finance" / ns: "risk" · **Max 5% par émetteur**
2. 📐 `knowledge_list_rules` · scope: "finance" / ns: "pricing" · **Benchmark EUR mid-swap - OBLIGATOIRE**
3. 🔍 Vérification exposition · Actuelle : 4,2% + demandé +2% | Résultante : 6,2% > limite 5%
4. ⚠️ Décision agent · Achat non recommandé · **Invariant finance/risk consulté**
5. ✓ `knowledge_record` · Choix documenté · **dec-d2c9e8e8fa1b**

---

## Le problème

**Tag:** Le problème

**Titre:** Vous déployez des agents IA. Comment connaissent-ils vos règles ?

**Sub:** Vos règles métier sont éparpillées dans des PDFs, des e-mails ou des "system prompts" que personne ne maintient. Résultat : vos agents opèrent sans contexte normatif fiable — et vous n'avez aucun moyen de le vérifier.

**Grille 2×2 :**

| Q | R |
| --- | --- |
| Comment mes agents connaissent-ils nos conventions de pricing ? | Elles sont dans un prompt rédigé il y a 6 mois, potentiellement obsolète et non versionné. |
| Comment savoir si un agent a tenu compte de nos limites de risque ? | Vous ne pouvez pas le prouver. Les logs existent, mais la décision n'est pas liée à la règle. |
| Si une règle change, comment mettre à jour tous mes agents ? | Vous modifiez chaque prompt manuellement — en espérant n'en oublier aucun. |
| Mon auditeur demande la preuve de conformité de nos agents IA. | Vous n'avez aucune piste d'audit liant les décisions des agents aux règles en vigueur au moment des faits. |

---

## Comment ça marche

**Tag:** Comment ça marche

**Titre:** Un registre. Quatre types d'entrées.

**Sub:** Knowledge centralise vos règles dans un registre vivant, versionné et interrogeable en temps réel par n'importe quel agent ou LLM.

### 4 Concepts

1. **Invariants** (rouge) — Contraintes absolues
Des règles non négociables que vos agents doivent consulter avant d'agir. Elles définissent les limites que votre organisation ne souhaite jamais franchir.
*Ex : "Exposition maximale de 5% par émetteur."*
2. **Règles** (bleu) — Directives actives
Des conventions opérationnelles obligatoires ou indicatives. Versionnées, datées, avec auteur identifié. Mises à jour en un point, propagées à tous les agents.
*Ex : "Utiliser la courbe EUR mid-swap pour le pricing obligataire."*
3. **Décisions** (vert) — Choix documentés
Des enregistrements immuables de choix significatifs — avec contexte de la demande, raisonnement appliqué et conclusion. Consultables via `knowledge_query`.
*Ex : "Achat TotalEnergies +2% non recommandé — invariant de concentration consulté."*
4. **Dérogations (Overrides)** (orange) — Exceptions formelles
Une exception documentée à une règle ou un invariant — avec approbateur nommé, justification et expiration automatique. Pas un contournement : une exception tracée.
*Ex : "Dérogation temporaire 1h — achat à 6,2% approuvé par le CIO."*

---

## AI Act

**Tag:** Conformité

**Titre:** Conçu pour l'AI Act européen

**Sub:** Knowledge répond nativement aux exigences des systèmes IA à haut risque — pas comme une fonctionnalité ajoutée, mais par design.

| Article | Titre | Description |
| --- | --- | --- |
| Article 14 | Supervision humaine | Le mécanisme de dérogation formelle est une implémentation directe de la supervision humaine requise par le règlement. |
| Article 13 | Transparence | Invariants et règles versionnés. Un régulateur peut consulter l'état exact du registre à n'importe quel point dans le temps. |
| Article 15 | Robustesse | Contrairement à un prompt sujet à l'oubli contextuel, chaque consultation est tracée via API — une piste d'audit intrinsèque à chaque action. |

---

## Tarifs

**Tag:** Tarifs

**Titre:** Commencez gratuitement

**Sub:** Une offre gratuite pour explorer, des plans entreprise pour déployer à l'échelle.

### Starter — Gratuit

* 1 scope / 3 namespaces
* 3 utilisateurs / 10 agents
* 10 000 appels / mois
* Historique 30 jours
* API REST & MCP

### Team — 299 €/mois

* Scopes & namespaces illimités
* 500 000 appels / mois
* Historique illimité
* Dérogations & approbations
* Graphe de dépendances

---

---

# [Version EN]

## Hero

**Tag:** Agentic governance

**Headline:** Expose your rules to your agents.
*Trace how they followed them.*

**Sub:** Knowledge is the registry your agents query before acting.

**CTAs:** [Get started free → /contact] [See how it works → #how]

---

## Hero Card — Agent Finance / Risk

1. 📋 `knowledge_list_invariants` · scope: "finance" / ns: "risk" · **Max 5% per issuer**
2. 📐 `knowledge_list_rules` · scope: "finance" / ns: "pricing" · **EUR mid-swap benchmark - MANDATORY**
3. 🔍 Exposure check · Current: 4.2% + requested +2% | Result: 6.2% > limit 5%
4. ⚠️ Agent decision · Purchase not recommended · **finance/risk invariant consulted**
5. ✓ `knowledge_record` · Choice documented · **dec-d2c9e8e8fa1b**

---

## The problem

**Tag:** The problem

**Title:** You deploy AI agents. How do they know your rules?

**Sub:** Your business rules are buried in PDFs, emails, or system prompts that nobody maintains. Result: your agents operate without a reliable normative context — and you have no way to verify it.

**2×2 Grid:**

| Q | A |
| --- | --- |
| How do my agents know our pricing conventions? | They're in a system prompt written 6 months ago, potentially obsolete and unversioned. |
| How do I know if an agent followed our risk limits? | You can't prove it. Logs exist, but the decision isn't linked to the rule. |
| If a rule changes, how do I update all my agents? | You edit each prompt manually — hoping you miss none. |
| My auditor asks for proof of AI agent compliance. | You have no audit trail linking agent decisions to the rules in force at the time. |

---

## How it works

**Tag:** How it works

**Title:** One registry. Four entry types.

**Sub:** Knowledge centralizes your rules in a living, versioned registry queryable in real time by any agent or LLM.

### 4 Concepts

1. **Invariants** (red) — Absolute constraints
Non-negotiable rules your agents must consult before acting. They define the limits your organization never wants to cross.
*e.g. "Maximum exposure of 5% per issuer."*
2. **Rules** (blue) — Active directives
Mandatory or advisory operational conventions. Versioned, dated, with identified author. Updated in one place, propagated to all agents.
*e.g. "Use EUR mid-swap curve for bond pricing."*
3. **Decisions** (green) — Documented choices
Immutable records of significant choices — with request context, applied reasoning, and conclusion. Queryable via `knowledge_query`.
*e.g. "TotalEnergies +2% purchase not recommended — concentration invariant consulted."*
4. **Overrides** (orange) — Formal exceptions
A documented waiver from a rule or invariant — with named approver, justification, and automatic expiry. Not a workaround: a traced exception.
*e.g. "1h temporary exception — 6.2% purchase approved by CIO."*

---

## AI Act

**Tag:** Compliance

**Title:** Designed for the European AI Act

**Sub:** Knowledge structurally addresses the requirements of high-risk AI systems — not as an added feature, but by design.

| Article | Title | Description |
| --- | --- | --- |
| Article 14 | Human Oversight | The formal override mechanism is a direct implementation of the human supervision required by the regulation. |
| Article 13 | Transparency | Versioned rules and invariants. A regulator can consult the exact state of the registry at any point in time. |
| Article 15 | Robustness | Unlike a prompt subject to contextual forgetting, every consultation is traced via API — a native audit trail for every action. |

---

## Pricing

**Tag:** Pricing

**Title:** Start for free

**Sub:** A free tier to explore, enterprise plans to deploy at scale.

### Starter — Free

* 1 scope / 3 namespaces
* 3 users / 10 agents
* 10,000 calls / month
* 30-day history
* REST API & MCP

### Team — €299/month

* Unlimited scopes & namespaces
* 500,000 calls / month
* Unlimited history
* Overrides & approvals
* Dependency graph


