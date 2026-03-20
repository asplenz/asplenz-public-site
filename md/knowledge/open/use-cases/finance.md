<!-- lang: en -->

# Knowledge for Financial Services

Financial institutions face regulatory requirements that demand traceability, auditability, and human oversight of automated decision-making. Knowledge provides the infrastructure to document, enforce, and prove compliance - from model risk management to AI governance.

---

## The Challenge

- Regulators want proof that constraints were enforced, not just documented
- Model risk management requires traceable decision chains from risk identification to control implementation
- Audit teams need structured evidence, not wiki pages and email threads
- Compliance officers must demonstrate human oversight of high-risk automated decisions
- AI agents and automated systems act without awareness of risk controls

Traditional approaches - wikis, spreadsheets, email approvals - produce evidence that is scattered, incomplete, and expensive to reconstruct.

---

## How Knowledge Helps

### Extract Rules from Existing Risk Frameworks

Your risk team already has rules in policy documents, model governance frameworks, and compliance runbooks. Knowledge extracts them automatically:

```
> "Extract rules from ./risk-policies and ./model-docs for the Model Governance scope"
```

```
Scanning ./risk-policies, ./model-docs...
  > 6 invariant candidates  (e.g., "No model deployed without validation committee sign-off")
  > 9 rule candidates       (e.g., "All model changes require back-testing on 24 months")
  > 4 decision candidates   (e.g., "Switched credit scoring from logistic regression to gradient boosting")
  > 2 duplicates skipped
```

You review in the dashboard and approve what's correct. In minutes, scattered policy documents become a structured registry. [See how extraction works →](/product/how-it-works#start-from-what-you-have)

### Model Risk Controls

Codify model governance requirements as invariants and rules:

```
Invariant: "No model deployed to production without validation committee sign-off"
  requires_approval: true
  min_role_to_decide: tech-lead

Rule (mandatory): "All model changes require back-testing on 24 months of data"
  severity: MANDATORY

Rule (advisory): "Prefer ensemble methods over single models for credit scoring"
  severity: ADVISORY
```

When an AI agent or engineer attempts to deploy a model, Knowledge flags violations *before* deployment.

### Traceable Decision Chains

Every decision links to its consequences:

```
Decision: "Switch credit scoring from logistic regression to gradient boosting"
  Context: "False positive rate of 18% unacceptable for SME lending"
  Reasoning: "Gradient boosting reduces FPR to 7% on backtesting data"
  Author: risk-analytics-team
    |
    creates > Rule: "Gradient boosting models require quarterly recalibration"
    creates > Invariant: "No credit score change > 50 points without human review"
    supersedes > Decision: "Use logistic regression for all scoring" (2019)
```

When an auditor asks "why did you change the scoring model?", the answer is one query away - not a week of investigation.

### Give AI Agents Your Risk Context

When an AI agent works on risk-related code, it queries Knowledge first:

```
Agent starts a task in the credit-risk namespace
Agent > knowledge_resolve(scope="Model Governance", namespace="credit-risk")
  > Returns 11 applicable entries: 3 invariants, 4 decisions, 3 rules, 1 override

Agent > knowledge_check(scope="Model Governance", action="Deploy credit model v2.3")
  > Conflict: inv-8a3f "No model deployed without validation committee"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-8a3f",
    intended_action="Deploy credit model v2.3",
    justification="Backtested on 36 months, FPR improved 60%"
  )
  > Pending, waiting for tech-lead

Committee reviews in dashboard > Approve
  > Override auto-created with conditions
  > Agent proceeds, reference recorded
```

The entire chain - check, conflict, request, approval, override, deployment trace - is one connected timeline.

### Regulatory Audit Trail

Knowledge produces audit-ready artifacts:

| What Regulators Ask | What Knowledge Provides |
|---------------------|------------------------|
| "How are AI decisions governed?" | Invariant and rule registry with version history |
| "Who approved this model change?" | Approval chain: request > decision > override |
| "Was this change reviewed by a human?" | Approval workflow with role verification |
| "What constraints applied at deployment time?" | Normative hash + reference traces |
| "Can you prove the agent checked before acting?" | Reference with status (followed/diverged) and context |

### CI Compliance Checks

The Verifier runs in your pipeline and checks that code changes address applicable risk constraints:

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

The coding agent generates an Implementation Report as `.knowledge/report.md`, committed alongside the code. The Verifier validates citations, overrides, and mandatory entries. With semantic analysis enabled, it evaluates the actual code diff against each constraint. [See the full Verifier flow →](/product/how-it-works#cicd-verifier)

---

## Day-to-Day Workflow

### For Risk Analysts

1. **Before modeling**: AI agent queries Knowledge via `knowledge_resolve` and `knowledge_check`
2. **During development**: agent follows model governance rules and records decisions
3. **Before deployment**: agent generates `.knowledge/report.md` citing applicable constraints
4. **CI runs**: Verifier checks compliance (citations + semantic analysis + external checkers)

### For Risk Officers

1. **Define invariants**: codify non-negotiable risk controls (model deployment gates, exposure limits)
2. **Set rules**: define model governance standards (validation cadence, back-testing requirements)
3. **Attach external checkers**: add scripts or webhooks for dynamic verification (position limits, exposure checks)
4. **Review approvals**: approve or reject model deployment requests from agents and engineers
5. **Export evidence**: generate structured audit reports for regulators

### For Auditors

1. **Browse scopes**: see Model Governance, Credit Risk, Market Risk, AML at a glance
2. **Read invariants**: understand what constraints govern automated decisions
3. **Trace decisions**: follow the chain from risk appetite change to model update to deployment
4. **Verify compliance**: check reference traces proving constraints were checked

---

## Use Cases in Finance

### Credit Risk

- Invariants for credit decision boundaries (max exposure, minimum documentation)
- Rules for model validation cadence and methodology
- Approval gates for credit limit changes above threshold
- Decision history linking risk appetite changes to model updates

### Trading and Market Risk

- Invariants for position limits and hedging requirements
- Rules for pre-trade compliance checks
- Reference traces proving risk limits were checked before execution
- Override mechanism for emergency situations with full audit trail

### Anti-Money Laundering (AML)

- Invariants for screening requirements (no transaction without sanctions check)
- Rules for enhanced due diligence thresholds
- Decision records for risk rating changes with justification
- Event timeline for regulatory reporting

### AI Governance (EU AI Act)

- Map AI systems to scopes (one scope per high-risk system)
- Codify Article 14 human oversight requirements as approval-gated invariants
- Export event logs and reference traces for Article 12 compliance
- Generate compliance reports per deployment via the CI Verifier

---

## What It Replaces

| Before | With Knowledge |
|--------|---------------|
| Model governance rules in PDF policy documents | Structured invariants and rules that agents query in real-time |
| Risk decisions in committee meeting minutes | Immutable decisions with context, reasoning, and links |
| Audit evidence assembled manually over days | Structured export from a live registry |
| Email threads for model deployment approvals | Approval workflows with role verification and override tracking |
| Spreadsheets tracking compliance status | Automated Verifier in CI with semantic analysis |
| "Ask the risk team, they'll know" | Searchable registry with full decision chains |

---

## Get Started

1. [Create your account](/docs/getting-started)
2. Create scopes for your risk domains (Model Governance, Credit Risk, Market Risk, AML)
3. Ask your AI agent to extract rules from `./risk-policies` and `./model-docs` for the Model Governance scope
4. Review extracted drafts and approve the ones that are correct
5. Connect your AI agents via MCP
6. Add the Verifier to your CI pipeline

[Getting Started →](/docs/getting-started) · [AI Act Compliance →](/compliance/ai-act) · [Pricing →](/pricing)

---
---

<!-- lang: fr -->

# Knowledge pour les Services Financiers

Les institutions financieres font face a des exigences reglementaires qui demandent tracabilite, auditabilite et supervision humaine des decisions automatisees. Knowledge fournit l'infrastructure pour documenter, appliquer et prouver la conformite - de la gestion des risques modeles a la gouvernance IA.

---

## Le defi

- Les regulateurs veulent la preuve que les contraintes ont ete appliquees, pas seulement documentees
- La gestion des risques modeles exige des chaines de decisions tracables de l'identification du risque a l'implementation du controle
- Les equipes d'audit ont besoin de preuves structurees, pas de pages wiki et de fils d'emails
- Les responsables conformite doivent demontrer la supervision humaine des decisions automatisees a haut risque
- Les agents IA et systemes automatises agissent sans connaissance des controles de risque

Les approches traditionnelles - wikis, tableurs, approbations par email - produisent des preuves dispersees, incompletes et couteuses a reconstituer.

---

## Comment Knowledge aide

### Extraire les regles des frameworks de risque existants

Votre equipe risque a deja des regles dans les documents de politique, les frameworks de gouvernance modeles et les runbooks de conformite. Knowledge les extrait automatiquement :

```
> "Extrais les règles depuis ./risk-policies et ./model-docs pour le scope Model Governance"
```

```
Scanning ./risk-policies, ./model-docs...
  > 6 candidats invariant  (ex. "No model deployed without validation committee sign-off")
  > 9 candidats rule       (ex. "All model changes require back-testing on 24 months")
  > 4 candidats decision   (ex. "Switched credit scoring from logistic regression to gradient boosting")
  > 2 doublons ignores
```

Vous reviewez dans le dashboard et approuvez ce qui est correct. En quelques minutes, des documents de politique disperses deviennent un registre structure. [Voir comment fonctionne l'extraction →](/product/how-it-works#start-from-what-you-have)

### Controles des risques modeles

Codifiez les exigences de gouvernance modeles comme invariants et rules :

```
Invariant: "Aucun modele deploye en production sans validation du comite"
  requires_approval: true
  min_role_to_decide: tech-lead

Rule (mandatory): "Tout changement de modele necessite un back-testing sur 24 mois"
  severity: MANDATORY

Rule (advisory): "Privilegier les methodes d'ensemble pour le scoring credit"
  severity: ADVISORY
```

Quand un agent IA ou un ingenieur tente de deployer un modele, Knowledge signale les violations *avant* le deploiement.

### Chaines de decisions tracables

Chaque decision est liee a ses consequences :

```
Decision: "Passer le scoring credit de la regression logistique au gradient boosting"
  Context: "Taux de faux positifs de 18% inacceptable pour le pret PME"
  Reasoning: "Le gradient boosting reduit le FPR a 7% sur les donnees de back-test"
  Author: risk-analytics-team
    |
    creates > Rule: "Les modeles gradient boosting necessitent une recalibration trimestrielle"
    creates > Invariant: "Pas de changement de score credit > 50 points sans revue humaine"
    supersedes > Decision: "Utiliser la regression logistique pour tout le scoring" (2019)
```

Quand un auditeur demande "pourquoi avez-vous change le modele de scoring ?", la reponse est a une requete pres - pas une semaine d'investigation.

### Donner le contexte risque aux agents IA

Quand un agent IA travaille sur du code lie au risque, il interroge Knowledge d'abord :

```
L'agent demarre une tache dans le namespace credit-risk
Agent > knowledge_resolve(scope="Model Governance", namespace="credit-risk")
  > Retourne 11 entrees applicables : 3 invariants, 4 decisions, 3 rules, 1 override

Agent > knowledge_check(scope="Model Governance", action="Deployer le modele credit v2.3")
  > Conflit : inv-8a3f "Aucun modele deploye sans validation du comite"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-8a3f",
    intended_action="Deployer le modele credit v2.3",
    justification="Back-teste sur 36 mois, FPR ameliore de 60%"
  )
  > En attente, tech-lead requis

Le comite review dans le dashboard > Approuve
  > Override auto-cree avec conditions
  > L'agent procede, reference enregistree
```

La chaine complete - verification, conflit, demande, approbation, override, trace de deploiement - est une seule timeline connectee.

### Piste d'audit reglementaire

Knowledge produit des artefacts prets pour l'audit :

| Ce que demandent les regulateurs | Ce que fournit Knowledge |
|----------------------------------|--------------------------|
| "Comment sont gouvernees les decisions IA ?" | Registre d'invariants et rules avec historique de versions |
| "Qui a approuve ce changement de modele ?" | Chaine d'approbation : demande > decision > override |
| "Ce changement a-t-il ete revu par un humain ?" | Workflow d'approbation avec verification de role |
| "Quelles contraintes s'appliquaient au moment du deploiement ?" | Hash normatif + traces de references |
| "Pouvez-vous prouver que l'agent a verifie avant d'agir ?" | Reference avec statut (suivi/diverge) et contexte |

### Checks de conformite CI

Le Verifier s'execute dans votre pipeline et verifie que les changements de code adressent les contraintes de risque applicables :

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

L'agent de coding genere un Implementation Report sous forme de `.knowledge/report.md`, committe avec le code. Le Verifier valide les citations, overrides et entrees mandatory. Avec l'analyse semantique activee, il evalue le diff reel du code contre chaque contrainte. [Voir le flux complet du Verifier →](/product/how-it-works#cicd-verifier)

---

## Workflow au quotidien

### Pour les analystes risque

1. **Avant la modelisation** : l'agent IA interroge Knowledge via `knowledge_resolve` et `knowledge_check`
2. **Pendant le developpement** : l'agent suit les rules de gouvernance modeles et enregistre les decisions
3. **Avant le deploiement** : l'agent genere `.knowledge/report.md` citant les contraintes applicables
4. **Le CI tourne** : le Verifier verifie la conformite (citations + analyse semantique + external checkers)

### Pour les responsables risque

1. **Definir les invariants** : codifier les controles de risque non-negociables (gates de deploiement modeles, limites d'exposition)
2. **Definir les rules** : standards de gouvernance modeles (cadence de validation, exigences de back-testing)
3. **Attacher des external checkers** : scripts ou webhooks pour verification dynamique (limites de position, checks d'exposition)
4. **Reviewer les approbations** : approuver ou rejeter les demandes de deploiement modeles
5. **Exporter les preuves** : generer des rapports d'audit structures pour les regulateurs

### Pour les auditeurs

1. **Parcourir les scopes** : voir Model Governance, Credit Risk, Market Risk, AML d'un coup d'oeil
2. **Lire les invariants** : comprendre quelles contraintes gouvernent les decisions automatisees
3. **Tracer les decisions** : suivre la chaine du changement d'appetit au risque jusqu'au deploiement
4. **Verifier la conformite** : consulter les traces de references prouvant que les contraintes ont ete verifiees

---

## Cas d'usage en finance

### Risque credit

- Invariants pour les limites de decisions credit (exposition max, documentation minimale)
- Rules pour la cadence et la methodologie de validation modeles
- Gates d'approbation pour les changements de limites credit au-dessus du seuil
- Historique de decisions liant les changements d'appetit au risque aux mises a jour modeles

### Trading et risque de marche

- Invariants pour les limites de position et exigences de couverture
- Rules pour les checks de conformite pre-trade
- Traces de references prouvant que les limites de risque ont ete verifiees avant execution
- Mecanisme d'override pour situations d'urgence avec piste d'audit complete

### Anti-blanchiment (AML)

- Invariants pour les exigences de screening (aucune transaction sans verification sanctions)
- Rules pour les seuils de due diligence renforcee
- Enregistrements de decisions pour les changements de notation de risque avec justification
- Timeline d'evenements pour le reporting reglementaire

### Gouvernance IA (EU AI Act)

- Mapper les systemes IA aux scopes (un scope par systeme a haut risque)
- Codifier les exigences de supervision humaine de l'Article 14 comme invariants avec approbation
- Exporter les logs d'evenements et traces de references pour la conformite Article 12
- Generer des rapports de conformite par deploiement via le CI Verifier

---

## Ce que ca remplace

| Avant | Avec Knowledge |
|-------|---------------|
| Regles de gouvernance modeles dans des PDFs de politique | Invariants et rules structures que les agents interrogent en temps reel |
| Decisions risque dans des PVs de comite | Decisions immuables avec contexte, raisonnement et liens |
| Preuves d'audit assemblees manuellement en plusieurs jours | Export structure depuis un registre vivant |
| Fils d'emails pour les approbations de deploiement modeles | Workflows d'approbation avec verification de role et suivi des overrides |
| Tableurs de suivi de conformite | Verifier automatise en CI avec analyse semantique |
| "Demande a l'equipe risque, ils sauront" | Registre recherchable avec chaines de decisions completes |

---

## Commencer

1. [Creer votre compte](/docs/getting-started)
2. Creer des scopes pour vos domaines de risque (Model Governance, Credit Risk, Market Risk, AML)
3. Demander à votre agent IA d'extraire les règles depuis `./risk-policies` et `./model-docs` pour le scope Model Governance
4. Reviewer les brouillons extraits et approuver ceux qui sont corrects
5. Connecter vos agents IA via MCP
6. Ajouter le Verifier a votre pipeline CI

[Commencer →](/docs/getting-started) · [Conformite AI Act →](/compliance/ai-act) · [Tarifs →](/pricing)
