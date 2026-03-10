# [Version FR]

---

## 1. Hero

**Tag:** Gouvernance agentique

**Headline:** Vos règles existent déjà.
*Vos agents ne les connaissent pas.*

**Sub:** Knowledge extrait vos règles implicites, les formalise dans un registre vivant, et les impose à chaque action de vos agents — avec traçabilité bout en bout.

**CTAs:** [Démarrer gratuitement → /contact] [Voir comment ça marche → #how]

---

## 2. Hero Card — Agent Finance / Risk

1. 📋 `knowledge_list_invariants` · scope: "finance" / ns: "risk" · **Max 5% par émetteur**
2. 📐 `knowledge_list_rules` · scope: "finance" / ns: "pricing" · **Benchmark EUR mid-swap - OBLIGATOIRE**
3. 🔍 Vérification exposition · Actuelle : 4,2% + demandé +2% | Résultante : 6,2% > limite 5%
4. ⛔ Décision agent · Achat bloqué · **Invariant finance/risk imposé**
5. ✓ `knowledge_record` · Choix documenté · **dec-d2c9e8e8fa1b**

---

## 3. Le problème

**Tag:** Le problème

**Titre:** Vous déployez des agents IA. Comment connaissent-ils vos règles ?

**Sub:** Vos règles métier sont éparpillées dans des PDFs, des e-mails, des wikis ou des "system prompts" que personne ne maintient. Résultat : vos agents opèrent sans contexte normatif fiable — et vous n'avez aucun moyen de le prouver.

**Grille 2×2 :**

| Q | R |
| --- | --- |
| Comment mes agents connaissent-ils nos conventions de pricing ? | Elles sont dans un prompt rédigé il y a 6 mois, potentiellement obsolète et non versionné. |
| Comment savoir si un agent a tenu compte de nos limites de risque ? | Vous ne pouvez pas le prouver. Les logs existent, mais la décision n'est pas liée à la règle. |
| Si une règle change, comment mettre à jour tous mes agents ? | Vous modifiez chaque prompt manuellement — en espérant n'en oublier aucun. |
| Mon auditeur demande la preuve de conformité de nos agents IA. | Vous n'avez aucune piste d'audit liant les décisions des agents aux règles en vigueur au moment des faits. |

---

## 4. Trois niveaux — un seul produit

**Tag:** Comment ça marche

**Titre:** Voir. Formaliser. Imposer.

**Sub:** Knowledge est une progression, pas un monolithe. Chaque niveau apporte une valeur autonome — chaque étape débloque la suivante.

### Niveau 1 — Distill · Voir

**Tag:** Extraction automatique

**Titre:** Rendez visible ce qui est tacite

**Desc:** Vos règles existent déjà — dans vos repos, vos PRs, vos docs, vos threads Slack. Distill les analyse via LLM et génère des drafts typés : invariants candidats, règles candidates (mandatory/advisory), décisions candidates.

**Fonctionnalités :**
- **Sources multiples** : repos Git, PRs + threads, PDFs, Excel, README, Notion — via connecteurs natifs ou API de stream (texte brut + métadonnées)
- **Détection de doublons** : si un draft ressemble à une entrée existante, Distill propose automatiquement une relation `REPLACES`
- **Détection de contradictions** : Distill identifie les tensions sémantiques entre drafts et génère `IN_TENSION_WITH` avec explication LLM
- **Workflow de validation** : approve / reject / edit avant publication. Rien n'entre dans le registre sans validation humaine
- **Re-run à J+90** : les drafts sont comparés aux règles actives. Si contradiction, Knowledge signale l'obsolescence et propose `REPLACES` ou `IN_TENSION_WITH`

**Déploiement :** pipeline CI, lancé manuellement ou à intervalle régulier. Zéro friction développeur.

**Persona :** CTO, équipe produit, compliance officers. La valeur remonte sans friction descendante.

**Illustration :**
```
Repos Git ─┐
PRs        ─┤
Notion     ─┤──→ Distill (LLM) ──→ Drafts typés ──→ Validation humaine ──→ Registre
Excel      ─┤                        • Invariants candidats
PDFs       ─┘                        • Règles candidates
                                     • Décisions candidates
                                     • Relations détectées
```

---

### Niveau 2 — Knowledge · Formaliser

**Tag:** Registre vivant

**Titre:** Un registre structuré, versionné, interrogeable

**Desc:** Les drafts validés deviennent des entrées formelles dans un registre vivant. Quatre types d'entrées, organisées par scopes et namespaces, reliées par un graphe de dépendances.

#### 4 Concepts

1. **Invariants** (rouge) — Contraintes absolues
Des limites non négociables. Bloquantes : si un agent les viole, l'action est stoppée. Certaines requièrent une approbation humaine avant toute dérogation.
*Ex : "Exposition maximale de 5% par émetteur."*

2. **Règles** (bleu) — Directives actives
Conventions opérationnelles mandatory ou advisory. Versionnées : quand une règle évolue, l'historique complet est conservé.
*Ex : "Utiliser la courbe EUR mid-swap pour le pricing obligataire."*

3. **Décisions** (vert) — Choix documentés
Enregistrements immutables de choix significatifs — avec contexte, raisonnement, auteur et horodatage. La raison d'être de chaque règle.
*Ex : "Achat TotalEnergies +2% non recommandé — invariant de concentration consulté."*

4. **Dérogations (Overrides)** (orange) — Exceptions formelles
Exception documentée à une règle ou un invariant — avec approbateur nommé, justification, conditions et expiration. Pas un contournement : une exception gouvernée.
*Ex : "Dérogation temporaire 1h — achat à 6,2% approuvé par le CIO."*

#### Scopes & Namespaces

**Titre:** Organisez vos règles à la granularité de votre organisation

**Desc:** Chaque scope se subdivise en namespaces — pour organiser vos règles par domaine métier et affiner les permissions par équipe ou par agent. Un agent de pricing ne charge que les règles du namespace pricing, pas l'intégralité du scope finance.

**Bénéfices :**
- ✓ Résolution déterministe : à scope et namespace identiques, tous les agents obtiennent exactement les mêmes règles.
- ✓ Permissions granulaires : un agent peut avoir accès en lecture seule au namespace risk et en écriture sur pricing.
- ✓ Moindre privilège : chaque agent ne charge que ce dont il a besoin — pas l'intégralité du scope.

**Code :**
```
scope: "finance"
  namespace: "pricing"    → benchmarks, courbes
  namespace: "risk"       → limites, VaR, exposition
  namespace: "compliance" → réglementaire, reporting
  namespace: "operations" → validations, process

scope: "engineering"
  namespace: "security"      → secrets, accès, CVE
  namespace: "architecture"  → patterns, décisions
  namespace: "cicd"          → déploiement, gates
```

#### Graphe de dépendances

**Titre:** Naviguez d'une règle à la décision qui la justifie

**Desc:** Knowledge maintient automatiquement les relations entre toutes les entités du registre. Chaque directive est ancrée dans le choix qui l'a fondée — chaque exception est documentée et traçable.

**Relations :**
- `Rule` — DEPENDS_ON → quelle décision justifie cette directive ?
- `Override` — OVERRIDES → quelle exception suspend cette directive, quand et pourquoi ?
- `Decision` — REPLACES → ce choix en remplace-t-il un précédent ?
- `Rule` — IN_TENSION_WITH → ces deux directives se contredisent-elles ?

**Image :** knowledge-graph-demo.svg

---

### Niveau 3 — MCP · Imposer

**Tag:** Imposition agentique

**Titre:** Chaque agent vérifie, chaque action est tracée

**Desc:** Le registre ne sert à rien s'il n'est pas consulté. Le niveau 3 fait de Knowledge un guard rail structurel : les invariants sont injectés à chaque prompt, les références sont enregistrées automatiquement, les décisions sont documentées en fin de session. L'agent ne peut pas oublier vos règles.

#### Mécanisme d'imposition — Hooks Claude Code

**Desc:** Trois hooks transforment Knowledge d'un registre passif en un mécanisme d'imposition déterministe — indépendant du LLM, exécuté à chaque interaction.

| Hook | Déclencheur | Action | Effet |
| --- | --- | --- | --- |
| `UserPromptSubmit` | Chaque prompt utilisateur | Injecte `list_invariants` + `list_rules` frais | L'agent connaît les règles à chaque interaction — pas seulement au début de la session |
| `PostToolUse` (async) | Après chaque appel d'outil | Appelle `record_reference` automatiquement | La traçabilité est déterministe — indépendante du LLM |
| `Stop` | Fin de session | Appelle `record` pour documenter le choix final | Chaque session produit une décision structurée |

**Résultat :** la gouvernance n'est pas une suggestion dans le system prompt — c'est un mécanisme injecté dans le runtime de l'agent.

#### Flow d'imposition

```
Utilisateur envoie un prompt
    │
    ▼
Hook UserPromptSubmit
    → list_invariants(scope) — contraintes fraîches
    → list_rules(scope) — directives fraîches
    │
    ▼
Agent planifie son action
    │
    ├── Bloqué par invariant → STOP, rapport
    ├── Requiert approbation → DEMANDE, ATTEND
    └── Autorisé → EXÉCUTE
    │
    ▼
Hook PostToolUse (async)
    → record_reference(entry_id, status="followed")
    │
    ▼
Hook Stop
    → record(decision, context, reasoning)
    │
    ▼
Trail complet : règles consultées → action exécutée → décision documentée
```

#### Intégrations

| Intégration | Mécanisme | Niveau d'imposition |
| --- | --- | --- |
| 🤖 Claude (MCP) | Claude Teams & Enterprise | Hooks + MCP — imposition complète |
| 💻 Claude Code | Agent de coding autonome | Hooks natifs — imposition par défaut |
| ⚙️ GitHub Actions | CI/CD — Knowledge Verifier | Gate bloquant — pas de merge sans conformité |
| 🔌 API REST | Tout LLM, tout framework | Consultation API — imposition à intégrer |

**Code Python :**
```python
# 1. Consulter les invariants — scope + namespace ciblés
inv = knowledge.list_invariants(
    scope="finance", namespace="risk"
)

# 2. Consulter les règles de pricing
rules = knowledge.list_rules(
    scope="finance", namespace="pricing"
)

# 3. Documenter le choix avec contexte et raisonnement
knowledge.record(
    scope="finance",
    decision="Achat TotalEnergies non recommandé",
    context="Demande +2%, résultante 6.2%",
    reasoning="Invariant finance/risk max 5% consulté"
)

# 4. Tracer la référence à l'invariant
knowledge.record_reference(
    entry_id=inv_id,
    status="followed",
    context_type="agent_session"
)
```

---

## 5. Cas d'usage

**Tag:** Cas d'usage

**Titre:** Pour tous vos agents et copilotes

**Sub:** Knowledge s'intègre dans tous les contextes où des LLM opèrent au nom de votre organisation — qu'ils agissent de manière autonome ou en assistance d'un humain.

| Type | Icône | Titre | Description |
| --- | --- | --- | --- |
| Agent autonome | 🏦 | Finance & Trading | Limites d'exposition, benchmarks de pricing, règles de conformité réglementaire. Chaque choix documenté et lié à la règle qui l'a imposé. |
| Agent autonome | 💻 | Agents de coding | Claude Code, Cursor et vos pipelines CI/CD partagent le même registre d'architecture et de sécurité. Les hooks imposent les règles à chaque prompt. |
| Agent autonome | ⚙️ | Pipelines CI/CD | Le Verifier bloque les PRs non conformes. Aucun merge sans Implementation Report citant les entrées applicables. |
| Agent autonome | 💬 | LLM conversationnels | Vos assistants Claude Teams ou Enterprise appliquent automatiquement les règles de communication, de confidentialité et de conformité via MCP. |
| Copilote — assistance humaine | 🏥 | Santé & Pharma | Dosages, contre-indications, protocoles cliniques. Le copilote impose les invariants médicaux. La décision finale reste humaine — Knowledge trace ce qui a été consulté. |
| Copilote — assistance humaine | ⚖️ | Juridique & Contractuel | Clauses obligatoires, plafonds de responsabilité, niveaux d'approbation requis. Le copilote impose les invariants contractuels et trace la conformité. |

---

## 6. Différenciation

**Tag:** Pourquoi Knowledge

**Titre:** Au-delà du system prompt

**Sub:** Un system prompt configure un agent. Knowledge impose les règles à tous vos agents — avec traçabilité, versioning et responsabilisation.

| Critère | System Prompt | ✦ Knowledge |
| --- | --- | --- |
| Source des règles | Rédigé manuellement | Extrait automatiquement (Distill) puis validé |
| Mise à jour | Manuelle, par instance | Une règle modifiée, tous les agents mis à jour |
| Imposition | Suggestion oubliable | Hook injecté — indépendant du LLM |
| Traçabilité | Aucune | Chaque consultation enregistrée et auditable |
| Mémoire contextuelle | Peut être oublié en long contexte | Réinjecté à chaque prompt (hook UserPromptSubmit) |
| Exceptions | Pas de mécanisme formel | Override documenté, approuvé, expirable |
| Partage | Une seule instance | Tous agents, tous utilisateurs, tous LLM |
| Granularité | Monolithique | Scopes & namespaces — résolution déterministe |
| Preuve de conformité | Intention déclarée | Exécution tracée et auditable |
| Obsolescence | Invisible | Distill re-run détecte les contradictions à J+90 |

---

## 7. AI Act

**Tag:** Conformité

**Titre:** Conçu pour l'AI Act européen

**Sub:** Knowledge répond nativement aux exigences des systèmes IA à haut risque — pas comme une fonctionnalité ajoutée, mais par design.

| Article | Titre | Ce que Knowledge fournit |
| --- | --- | --- |
| Article 9 | Gestion des risques | Invariants = contrôles de risques codifiés. Distill détecte l'obsolescence. Compliance check évalue en temps réel. |
| Article 11 | Documentation technique | Décisions immutables avec contexte et raisonnement. Registre structuré, consultable, exportable. |
| Article 12 | Tenue de registres | Events, references, normative hash — logging automatique de chaque interaction agent. |
| Article 13 | Transparence | Invariants et règles versionnés. État du registre consultable à n'importe quel point dans le temps. |
| Article 14 | Supervision humaine | Workflow d'approbation. Dérogations formelles. Hooks d'imposition. Rôles et permissions. |
| Article 15 | Robustesse | Imposition via hooks — indépendante du LLM. Piste d'audit intrinsèque à chaque action. |

**CTA :** [En savoir plus sur l'AI Act → /compliance/ai-act]

---

## 8. Observabilité (à venir)

**Tag:** Bientôt disponible

**Titre:** Voyez comment vos agents utilisent vos règles

**Sub:** Un dashboard de gouvernance agentique — pas juste des logs, mais des métriques de conformité actionnables.

**Métriques prévues :**
- Quels agents consultent quelles règles — et à quelle fréquence
- Taux de `followed` vs `diverged` — par scope, par agent, par règle
- Règles les plus sollicitées — signale les points de friction
- Règles jamais consultées — signal d'obsolescence ou défaut d'adoption
- Signal Distill — contradictions détectées lors des re-runs

---

## 9. Tarifs

**Tag:** Tarifs

**Titre:** Commencez par voir. Évoluez vers l'imposition.

**Sub:** Chaque niveau apporte une valeur autonome. Pas de lock-in — montez quand le besoin se confirme.

### Distill — Gratuit

*Voir : rendez visible ce qui est tacite*

* Extraction depuis repos Git, PRs, docs
* Drafts typés : invariants, règles, décisions candidats
* Détection de doublons et contradictions
* Workflow de validation (approve / reject / edit)
* 1 scope / 3 namespaces
* 3 utilisateurs
* Communauté (GitHub)

### Knowledge — 299 €/mois

*Formaliser : un registre vivant, validé, versionné*

Tout le plan Distill, plus :

* Scopes & namespaces illimités
* Registre structuré avec 4 types d'entrées
* Graphe de dépendances et relations typées
* Dérogations & workflow d'approbation
* Historique illimité et timeline d'événements
* Verifier CI/CD — gate de conformité
* Re-run Distill à J+90 (détection d'obsolescence)
* Support email prioritaire

### Enterprise — Sur devis

*Imposer : gouvernance bout en bout avec traçabilité AI Act*

Tout le plan Knowledge, plus :

* Hooks Claude Code pré-configurés (UserPromptSubmit, PostToolUse, Stop)
* Intégration MCP complète (Claude Teams & Enterprise)
* Dashboard d'observabilité agentique
* Multi-tenant (holding → filiales)
* SSO & SCIM
* Déploiement on-premise
* SLA garanti
* Support AI Act dédié et audit tiers
* Connecteurs Distill personnalisés (Notion, Confluence, SharePoint)

---

## 10. CTA final

**Tag:** Prêt à démarrer ?

**Titre:** Vos règles existent déjà. Il est temps que vos agents les connaissent.

**Corps:** Commencez par Distill — rendez visible ce qui est tacite. Puis formalisez dans un registre vivant. Puis imposez à chaque action de vos agents.

**CTAs:** [Démarrer gratuitement → /contact] [Lire la documentation → /knowledge/docs]

---
---

# [Version EN]

---

## 1. Hero

**Tag:** Agentic governance

**Headline:** Your rules already exist.
*Your agents don't know them.*

**Sub:** Knowledge extracts your implicit rules, formalizes them in a living registry, and enforces them on every agent action — with end-to-end traceability.

**CTAs:** [Get started free → /contact] [See how it works → #how]

---

## 2. Hero Card — Agent Finance / Risk

1. 📋 `knowledge_list_invariants` · scope: "finance" / ns: "risk" · **Max 5% per issuer**
2. 📐 `knowledge_list_rules` · scope: "finance" / ns: "pricing" · **EUR mid-swap benchmark - MANDATORY**
3. 🔍 Exposure check · Current: 4.2% + requested +2% | Result: 6.2% > limit 5%
4. ⛔ Agent decision · Purchase blocked · **finance/risk invariant enforced**
5. ✓ `knowledge_record` · Choice documented · **dec-d2c9e8e8fa1b**

---

## 3. The problem

**Tag:** The problem

**Title:** You deploy AI agents. How do they know your rules?

**Sub:** Your business rules are buried in PDFs, emails, wikis, or system prompts that nobody maintains. Result: your agents operate without a reliable normative context — and you have no way to prove it.

**2×2 Grid:**

| Q | A |
| --- | --- |
| How do my agents know our pricing conventions? | They're in a system prompt written 6 months ago, potentially obsolete and unversioned. |
| How do I know if an agent followed our risk limits? | You can't prove it. Logs exist, but the decision isn't linked to the rule. |
| If a rule changes, how do I update all my agents? | You edit each prompt manually — hoping you miss none. |
| My auditor asks for proof of AI agent compliance. | You have no audit trail linking agent decisions to the rules in force at the time. |

---

## 4. Three levels — one product

**Tag:** How it works

**Title:** See. Formalize. Enforce.

**Sub:** Knowledge is a progression, not a monolith. Each level delivers standalone value — each step unlocks the next.

### Level 1 — Distill · See

**Tag:** Automatic extraction

**Title:** Make the implicit visible

**Desc:** Your rules already exist — in your repos, PRs, docs, Slack threads. Distill analyzes them via LLM and generates typed drafts: candidate invariants, candidate rules (mandatory/advisory), candidate decisions.

**Features:**
- **Multiple sources**: Git repos, PRs + threads, PDFs, Excel, README, Notion — via native connectors or stream API (plain text + metadata)
- **Duplicate detection**: if a draft resembles an existing entry, Distill automatically proposes a `REPLACES` relation
- **Contradiction detection**: Distill identifies semantic tensions between drafts and generates `IN_TENSION_WITH` with LLM explanation
- **Validation workflow**: approve / reject / edit before publication. Nothing enters the registry without human validation
- **Re-run at D+90**: drafts are compared against active rules. If contradiction, Knowledge flags obsolescence and proposes `REPLACES` or `IN_TENSION_WITH`

**Deployment:** CI pipeline, triggered manually or at regular intervals. Zero developer friction.

**Persona:** CTO, product team, compliance officers. Value flows up without top-down friction.

**Illustration:**
```
Git repos ──┐
PRs         ─┤
Notion      ─┤──→ Distill (LLM) ──→ Typed drafts ──→ Human validation ──→ Registry
Excel       ─┤                        • Candidate invariants
PDFs        ─┘                        • Candidate rules
                                      • Candidate decisions
                                      • Detected relations
```

---

### Level 2 — Knowledge · Formalize

**Tag:** Living registry

**Title:** A structured, versioned, queryable registry

**Desc:** Validated drafts become formal entries in a living registry. Four entry types, organized by scopes and namespaces, connected through a dependency graph.

#### 4 Concepts

1. **Invariants** (red) — Absolute constraints
Non-negotiable limits. Blocking: if an agent violates one, the action is stopped. Some require human approval before any override.
*e.g. "Maximum exposure of 5% per issuer."*

2. **Rules** (blue) — Active directives
Mandatory or advisory operational conventions. Versioned: when a rule evolves, the full history is preserved.
*e.g. "Use EUR mid-swap curve for bond pricing."*

3. **Decisions** (green) — Documented choices
Immutable records of significant choices — with context, reasoning, author, and timestamp. The rationale behind every rule.
*e.g. "TotalEnergies +2% purchase not recommended — concentration invariant consulted."*

4. **Overrides** (orange) — Formal exceptions
A documented exception to a rule or invariant — with named approver, justification, conditions, and expiry. Not a workaround: a governed exception.
*e.g. "1h temporary exception — 6.2% purchase approved by CIO."*

#### Scopes & Namespaces

**Title:** Organize your rules at your organization's granularity

**Desc:** Each scope subdivides into namespaces — to organize rules by business domain and refine permissions per team or agent. A pricing agent only loads the pricing namespace rules, not the entire finance scope.

**Benefits:**
- ✓ Deterministic resolution: at identical scope and namespace, all agents get exactly the same rules.
- ✓ Granular permissions: an agent can have read-only access to the risk namespace and write on pricing.
- ✓ Least privilege: each agent only loads what it needs — not the entire scope.

**Code:**
```
scope: "finance"
  namespace: "pricing"    → benchmarks, curves
  namespace: "risk"       → limits, VaR, exposure
  namespace: "compliance" → regulatory, reporting
  namespace: "operations" → validations, process

scope: "engineering"
  namespace: "security"      → secrets, access, CVE
  namespace: "architecture"  → patterns, decisions
  namespace: "cicd"          → deployment, gates
```

#### Dependency graph

**Title:** Navigate from a rule to the decision that justifies it

**Desc:** Knowledge automatically maintains relationships between all registry entities. Every directive is anchored to the choice that founded it — every exception is documented and traceable.

**Relations:**
- `Rule` — DEPENDS_ON → which decision justifies this directive?
- `Override` — OVERRIDES → which exception suspends this directive, when and why?
- `Decision` — REPLACES → does this choice replace a previous one?
- `Rule` — IN_TENSION_WITH → do these two directives contradict each other?

**Image:** knowledge-graph-demo.svg

---

### Level 3 — MCP · Enforce

**Tag:** Agentic enforcement

**Title:** Every agent checks, every action is traced

**Desc:** A registry is useless if it's not consulted. Level 3 makes Knowledge a structural guard rail: invariants are injected at every prompt, references are recorded automatically, decisions are documented at session end. The agent cannot forget your rules.

#### Enforcement mechanism — Claude Code Hooks

**Desc:** Three hooks transform Knowledge from a passive registry into a deterministic enforcement mechanism — LLM-independent, executed at every interaction.

| Hook | Trigger | Action | Effect |
| --- | --- | --- | --- |
| `UserPromptSubmit` | Every user prompt | Injects fresh `list_invariants` + `list_rules` | Agent knows the rules at every interaction — not just at session start |
| `PostToolUse` (async) | After each tool call | Calls `record_reference` automatically | Traceability is deterministic — LLM-independent |
| `Stop` | Session end | Calls `record` to document the final choice | Every session produces a structured decision |

**Result:** governance is not a suggestion in the system prompt — it's a mechanism injected into the agent runtime.

#### Enforcement flow

```
User sends a prompt
    │
    ▼
Hook UserPromptSubmit
    → list_invariants(scope) — fresh constraints
    → list_rules(scope) — fresh directives
    │
    ▼
Agent plans its action
    │
    ├── Blocked by invariant → STOP, report
    ├── Requires approval → REQUEST, WAIT
    └── Allowed → EXECUTE
    │
    ▼
Hook PostToolUse (async)
    → record_reference(entry_id, status="followed")
    │
    ▼
Hook Stop
    → record(decision, context, reasoning)
    │
    ▼
Complete trail: rules consulted → action executed → decision documented
```

#### Integrations

| Integration | Mechanism | Enforcement level |
| --- | --- | --- |
| 🤖 Claude (MCP) | Claude Teams & Enterprise | Hooks + MCP — full enforcement |
| 💻 Claude Code | Autonomous coding agent | Native hooks — enforcement by default |
| ⚙️ GitHub Actions | CI/CD — Knowledge Verifier | Blocking gate — no merge without compliance |
| 🔌 REST API | Any LLM, any framework | API consultation — enforcement to integrate |

**Python code:**
```python
# 1. Query invariants — targeted scope + namespace
inv = knowledge.list_invariants(
    scope="finance", namespace="risk"
)

# 2. Query pricing rules
rules = knowledge.list_rules(
    scope="finance", namespace="pricing"
)

# 3. Document the choice with context and reasoning
knowledge.record(
    scope="finance",
    decision="TotalEnergies purchase not recommended",
    context="Request +2%, result 6.2%",
    reasoning="Invariant finance/risk max 5% consulted"
)

# 4. Trace the reference to the invariant
knowledge.record_reference(
    entry_id=inv_id,
    status="followed",
    context_type="agent_session"
)
```

---

## 5. Use cases

**Tag:** Use cases

**Title:** For all your agents and copilots

**Sub:** Knowledge integrates into any context where LLMs operate on behalf of your organization — whether acting autonomously or assisting a human.

| Type | Icon | Title | Description |
| --- | --- | --- | --- |
| Autonomous agent | 🏦 | Finance & Trading | Exposure limits, pricing benchmarks, regulatory compliance rules. Every choice documented and linked to the rule that enforced it. |
| Autonomous agent | 💻 | Coding agents | Claude Code, Cursor, and your CI/CD pipelines share the same architecture and security registry. Hooks enforce rules at every prompt. |
| Autonomous agent | ⚙️ | CI/CD pipelines | The Verifier blocks non-compliant PRs. No merge without an Implementation Report citing applicable entries. |
| Autonomous agent | 💬 | Conversational LLMs | Your Claude Teams or Enterprise assistants automatically apply your organization's communication, confidentiality, and compliance rules via MCP. |
| Copilot — human assistance | 🏥 | Healthcare & Pharma | Dosages, contraindications, clinical protocols. The copilot enforces medical invariants. Final decision stays human — Knowledge traces what was consulted. |
| Copilot — human assistance | ⚖️ | Legal & Contractual | Mandatory clauses, liability caps, required approval levels. The copilot enforces contractual invariants and traces compliance. |

---

## 6. Differentiation

**Tag:** Why Knowledge

**Title:** Beyond the system prompt

**Sub:** A system prompt configures one agent. Knowledge enforces rules across all your agents — with traceability, versioning, and accountability.

| Criterion | System Prompt | ✦ Knowledge |
| --- | --- | --- |
| Rule source | Written manually | Extracted automatically (Distill) then validated |
| Updates | Manual, per instance | One rule changed, all agents updated |
| Enforcement | Forgettable suggestion | Injected hook — LLM-independent |
| Traceability | None | Every consultation recorded and auditable |
| Contextual memory | Can be forgotten in long context | Re-injected at every prompt (UserPromptSubmit hook) |
| Exceptions | No formal mechanism | Override documented, approved, expirable |
| Sharing | Single instance | All agents, all users, all LLMs |
| Granularity | Monolithic | Scopes & namespaces — deterministic resolution |
| Compliance proof | Declared intent | Traced and auditable execution |
| Obsolescence | Invisible | Distill re-run detects contradictions at D+90 |

---

## 7. AI Act

**Tag:** Compliance

**Title:** Designed for the European AI Act

**Sub:** Knowledge natively addresses the requirements of high-risk AI systems — not as an added feature, but by design.

| Article | Title | What Knowledge provides |
| --- | --- | --- |
| Article 9 | Risk management | Invariants = codified risk controls. Distill detects obsolescence. Compliance check evaluates in real time. |
| Article 11 | Technical documentation | Immutable decisions with context and reasoning. Structured, queryable, exportable registry. |
| Article 12 | Record-keeping | Events, references, normative hash — automatic logging of every agent interaction. |
| Article 13 | Transparency | Versioned rules and invariants. Registry state consultable at any point in time. |
| Article 14 | Human oversight | Approval workflow. Formal overrides. Enforcement hooks. Roles and permissions. |
| Article 15 | Robustness | Enforcement via hooks — LLM-independent. Native audit trail for every action. |

**CTA:** [Learn more about AI Act compliance → /compliance/ai-act]

---

## 8. Observability (coming soon)

**Tag:** Coming soon

**Title:** See how your agents use your rules

**Sub:** An agentic governance dashboard — not just logs, but actionable compliance metrics.

**Planned metrics:**
- Which agents query which rules — and how often
- `followed` vs `diverged` rate — by scope, agent, and rule
- Most queried rules — highlights friction points
- Never-queried rules — obsolescence signal or adoption gap
- Distill signal — contradictions detected during re-runs

---

## 9. Pricing

**Tag:** Pricing

**Title:** Start by seeing. Scale to enforcing.

**Sub:** Each level delivers standalone value. No lock-in — upgrade when the need is confirmed.

### Distill — Free

*See: make the implicit visible*

* Extraction from Git repos, PRs, docs
* Typed drafts: candidate invariants, rules, decisions
* Duplicate and contradiction detection
* Validation workflow (approve / reject / edit)
* 1 scope / 3 namespaces
* 3 users
* Community support (GitHub)

### Knowledge — €299/month

*Formalize: a living, validated, versioned registry*

Everything in Distill, plus:

* Unlimited scopes & namespaces
* Structured registry with 4 entry types
* Dependency graph and typed relations
* Overrides & approval workflow
* Unlimited history and event timeline
* CI/CD Verifier — compliance gate
* Distill re-run at D+90 (obsolescence detection)
* Priority email support

### Enterprise — Custom

*Enforce: end-to-end governance with AI Act traceability*

Everything in Knowledge, plus:

* Pre-configured Claude Code hooks (UserPromptSubmit, PostToolUse, Stop)
* Full MCP integration (Claude Teams & Enterprise)
* Agentic observability dashboard
* Multi-tenant (holding → subsidiaries)
* SSO & SCIM
* On-premise deployment
* Guaranteed SLA
* Dedicated AI Act support and third-party audit
* Custom Distill connectors (Notion, Confluence, SharePoint)

---

## 10. Final CTA

**Tag:** Ready to start?

**Title:** Your rules already exist. It's time your agents knew them.

**Body:** Start with Distill — make the implicit visible. Then formalize in a living registry. Then enforce on every agent action.

**CTAs:** [Get started free → /contact] [Read the docs → /knowledge/docs]
