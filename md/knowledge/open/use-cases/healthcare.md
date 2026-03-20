<!-- lang: en -->

# Knowledge for Healthcare

Healthcare organizations deploying AI systems need rigorous documentation, human oversight, and audit trails. Knowledge provides the infrastructure to govern clinical AI, enforce protocol constraints, and meet regulatory requirements.

---

## The Challenge

- Clinical protocols and AI governance rules live in policy documents that no system reads
- AI-assisted diagnostic or treatment tools operate without structured awareness of clinical constraints
- Regulatory submissions require proof that AI systems were governed throughout their lifecycle
- Audit trails for AI decisions are manual and incomplete
- Changes to clinical protocols must cascade to all systems that depend on them

---

## How Knowledge Helps

### Extract Rules from Clinical Protocols

Your clinical governance team already has rules in protocol documents, standard operating procedures, and compliance runbooks. Knowledge extracts them automatically:

```
> "Extract rules from ./protocols and ./sops for the Clinical AI scope"
```

```
Scanning ./protocols, ./sops...
  > 5 invariant candidates  (e.g., "No AI diagnostic without clinician review")
  > 7 rule candidates       (e.g., "AI triage scores must be recalibrated quarterly")
  > 3 decision candidates   (e.g., "Use ensemble model for sepsis risk prediction")
  > 1 duplicate skipped
```

You review in the dashboard and approve what's correct. Patient safety constraints become invariants, governance standards become rules. [See how extraction works →](/product/how-it-works#start-from-what-you-have)

### Codify Clinical Protocol Constraints

Turn clinical requirements into machine-enforceable invariants:

```
Invariant: "No AI-generated diagnostic suggestion without clinician review"
  Rationale: "Patient safety - all AI outputs in clinical context are advisory"
  requires_approval: false  (hard block, no override path)

Invariant: "Drug interaction alerts cannot be suppressed by AI agents"
  Rationale: "Regulatory requirement - safety alerts must always reach clinician"

Rule: "AI-assisted triage scores must be recalibrated quarterly"
  Severity: MANDATORY
```

When an AI agent processes clinical data, Knowledge enforces these constraints in real time.

### Document Decision Rationale

Record clinical AI decisions with full traceability:

```
Decision: "Use ensemble model for sepsis risk prediction"
  Context: "Single-model approach had 12% false negative rate"
  Reasoning: "Ensemble reduces FNR to 4% on validation cohort (n=12,400)"
  Author: clinical-ai-team
  Tags: [clinical, sepsis, model-selection]
    |
    creates > Rule: "Sepsis model requires validation on current quarter data"
    creates > Invariant: "No sepsis prediction without vital signs within 4 hours"
```

Six months later, when someone asks "why did we switch the sepsis model?", the answer is one search away.

### Give AI Agents Your Clinical Context

When an AI agent works in a clinical environment, it queries Knowledge first:

```
Agent starts a task in the diagnostics namespace
Agent > knowledge_resolve(scope="Clinical AI", namespace="diagnostics")
  > Returns 9 applicable entries: 3 invariants, 3 decisions, 2 rules, 1 override

Agent > knowledge_check(scope="Clinical AI", action="Generate radiology analysis")
  > Constraint: inv-4a2b "All AI diagnostic outputs require clinician sign-off"
  > Agent generates analysis but flags for review

Clinician reviews and approves
  > Reference recorded: "Followed inv-4a2b in case CAS-2024-892"
```

The agent does not bypass clinical oversight. It reads the constraints from the same registry your governance team maintains.

### CI Compliance Checks

The Verifier runs in your pipeline and checks that code changes address applicable clinical constraints:

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

The coding agent generates an Implementation Report as `.knowledge/report.md`, committed alongside the code. The Verifier validates citations, overrides, and mandatory entries. With semantic analysis enabled, it evaluates the actual code diff against each constraint. [See the full Verifier flow →](/product/how-it-works#cicd-verifier)

### Regulatory Audit Readiness

| Regulatory Need | Knowledge Feature |
|----------------|-------------------|
| FDA 21 CFR Part 11 (electronic records) | Immutable decisions, timestamped events, audit trail |
| EU MDR / AI Act | Invariants as risk controls, approval workflows, compliance reports |
| HIPAA audit trail | Event log with actor attribution, reference traces |
| Clinical trial governance | Decision history, protocol change tracking, version control on rules |

---

## Day-to-Day Workflow

### For Clinical AI Engineers

1. **Before coding**: AI agent queries Knowledge via `knowledge_resolve` and `knowledge_check`
2. **During development**: agent follows clinical governance rules and records decisions
3. **In the commit**: agent generates `.knowledge/report.md` citing applicable constraints
4. **CI runs**: Verifier checks compliance (citations + semantic analysis + external checkers)

### For Clinical Governance Officers

1. **Define invariants**: codify patient safety constraints (clinician review, alert thresholds)
2. **Set rules**: define AI governance standards (validation cadence, recalibration requirements)
3. **Attach external checkers**: add scripts or webhooks for dynamic verification (model performance monitoring, data freshness)
4. **Review approvals**: approve or reject AI deployment requests
5. **Export evidence**: generate structured audit reports for regulatory submissions

### For Auditors and Regulators

1. **Browse scopes**: see Clinical AI, Health IT, Data Governance at a glance
2. **Read invariants**: understand what constraints govern AI-assisted decisions
3. **Trace decisions**: follow the chain from clinical need to model selection to deployment
4. **Verify compliance**: check reference traces proving patient safety constraints were enforced

---

## Use Cases in Healthcare

### Clinical AI Governance

- Invariants for patient safety constraints (human review, alert thresholds)
- Rules for model validation and monitoring cadence
- Approval gates for deploying AI models to clinical environments
- Decision history for model selection with clinical justification

### Drug Development

- Decisions documenting trial protocol choices with regulatory context
- Rules for data handling and analysis methodology
- Invariants for safety reporting requirements
- Event timeline for GCP (Good Clinical Practice) audit trail

### Health IT Operations

- Deployment rules for clinical systems (change windows, rollback requirements)
- Invariants for data integrity (no modification of clinical records by AI)
- Rules for system access and authentication standards
- CI Verifier for health IT code changes

### Interoperability and Data Governance

- Decisions for data standard adoption (HL7 FHIR, DICOM)
- Rules for data quality requirements in AI training sets
- Invariants for consent-based data access
- Reference traces proving compliance per data use

---

## What It Replaces

| Before | With Knowledge |
|--------|---------------|
| Clinical protocols in PDF documents nobody queries | Structured invariants enforced by AI agents in real time |
| AI governance decisions in committee minutes | Immutable decisions with context, reasoning, and traceability |
| Manual audit evidence for regulatory submissions | Structured export from a live registry |
| Email threads for AI deployment approvals | Approval workflows with role verification and override tracking |
| Spreadsheets tracking clinical AI compliance | Automated Verifier in CI with semantic analysis |
| "Ask Dr. Chen, she led that initiative" | Searchable registry with full decision chains |

---

## Get Started

1. [Create your account](/docs/getting-started)
2. Create scopes for your domains (Clinical AI, Health IT, Data Governance)
3. Ask your AI agent to extract rules from `./protocols` and `./sops` for the Clinical AI scope
4. Review extracted drafts - approve patient safety constraints as invariants
5. Connect AI agents via MCP for real-time constraint checking
6. Add the Verifier to your CI pipeline

[Getting Started →](/docs/getting-started) · [AI Act Compliance →](/compliance/ai-act) · [Pricing →](/pricing)

---
---

<!-- lang: fr -->

# Knowledge pour la Sante

Les organisations de sante qui deploient des systemes IA ont besoin d'une documentation rigoureuse, d'une supervision humaine et de pistes d'audit. Knowledge fournit l'infrastructure pour gouverner l'IA clinique, appliquer les contraintes de protocole et repondre aux exigences reglementaires.

---

## Le defi

- Les protocoles cliniques et regles de gouvernance IA vivent dans des documents de politique que aucun systeme ne lit
- Les outils de diagnostic ou traitement assistes par IA operent sans connaissance structuree des contraintes cliniques
- Les soumissions reglementaires exigent la preuve que les systemes IA ont ete gouvernes tout au long de leur cycle de vie
- Les pistes d'audit pour les decisions IA sont manuelles et incompletes
- Les changements de protocoles cliniques doivent se propager a tous les systemes qui en dependent

---

## Comment Knowledge aide

### Extraire les regles des protocoles cliniques

Votre equipe de gouvernance clinique a deja des regles dans les documents de protocole, les procedures operationnelles standard et les runbooks de conformite. Knowledge les extrait automatiquement :

```
> "Extrais les règles depuis ./protocols et ./sops pour le scope Clinical AI"
```

```
Scanning ./protocols, ./sops...
  > 5 candidats invariant  (ex. "No AI diagnostic without clinician review")
  > 7 candidats rule       (ex. "AI triage scores must be recalibrated quarterly")
  > 3 candidats decision   (ex. "Use ensemble model for sepsis risk prediction")
  > 1 doublon ignore
```

Vous reviewez dans le dashboard et approuvez ce qui est correct. Les contraintes de securite patient deviennent des invariants, les standards de gouvernance deviennent des rules. [Voir comment fonctionne l'extraction →](/product/how-it-works#start-from-what-you-have)

### Codifier les contraintes de protocole clinique

Transformez les exigences cliniques en invariants applicables par les machines :

```
Invariant: "Aucune suggestion diagnostique generee par IA sans revue du clinicien"
  Rationale: "Securite patient - tous les outputs IA en contexte clinique sont consultatifs"
  requires_approval: false  (blocage dur, pas de chemin d'override)

Invariant: "Les alertes d'interaction medicamenteuse ne peuvent pas etre supprimees par les agents IA"
  Rationale: "Exigence reglementaire - les alertes de securite doivent toujours atteindre le clinicien"

Rule: "Les scores de triage assistes par IA doivent etre recalibres trimestriellement"
  Severity: MANDATORY
```

Quand un agent IA traite des donnees cliniques, Knowledge applique ces contraintes en temps reel.

### Documenter le raisonnement des decisions

Enregistrez les decisions IA cliniques avec une tracabilite complete :

```
Decision: "Utiliser un modele d'ensemble pour la prediction du risque de sepsis"
  Context: "L'approche modele unique avait un taux de faux negatifs de 12%"
  Reasoning: "L'ensemble reduit le FNR a 4% sur la cohorte de validation (n=12 400)"
  Author: clinical-ai-team
  Tags: [clinical, sepsis, model-selection]
    |
    creates > Rule: "Le modele sepsis necessite une validation sur les donnees du trimestre courant"
    creates > Invariant: "Pas de prediction sepsis sans signes vitaux dans les 4 heures"
```

Six mois plus tard, quand quelqu'un demande "pourquoi a-t-on change le modele sepsis ?", la reponse est a une recherche pres.

### Donner le contexte clinique aux agents IA

Quand un agent IA travaille en environnement clinique, il interroge Knowledge d'abord :

```
L'agent demarre une tache dans le namespace diagnostics
Agent > knowledge_resolve(scope="Clinical AI", namespace="diagnostics")
  > Retourne 9 entrees applicables : 3 invariants, 3 decisions, 2 rules, 1 override

Agent > knowledge_check(scope="Clinical AI", action="Generer une analyse radiologique")
  > Contrainte : inv-4a2b "Tous les outputs diagnostiques IA necessitent la validation du clinicien"
  > L'agent genere l'analyse mais la signale pour revue

Le clinicien review et approuve
  > Reference enregistree : "Suivi inv-4a2b dans le cas CAS-2024-892"
```

L'agent ne contourne pas la supervision clinique. Il lit les contraintes depuis le meme registre que votre equipe de gouvernance maintient.

### Supervision humaine pour l'IA a haut risque

Pour les systemes IA qui influencent les decisions cliniques, le workflow d'approbation garantit qu'aucun output IA n'atteint une decision clinique sans supervision humaine.

### Checks de conformite CI

Le Verifier s'execute dans votre pipeline et verifie que les changements de code adressent les contraintes cliniques applicables :

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

L'agent de coding genere un Implementation Report sous forme de `.knowledge/report.md`, committe avec le code. Le Verifier valide les citations, overrides et entrees mandatory. Avec l'analyse semantique activee, il evalue le diff reel du code contre chaque contrainte. [Voir le flux complet du Verifier →](/product/how-it-works#cicd-verifier)

### Pret pour l'audit reglementaire

| Besoin reglementaire | Fonctionnalite Knowledge |
|---------------------|--------------------------|
| FDA 21 CFR Part 11 (enregistrements electroniques) | Decisions immuables, evenements horodates, piste d'audit |
| EU MDR / AI Act | Invariants comme controles de risque, workflows d'approbation, rapports de conformite |
| Piste d'audit HIPAA | Log d'evenements avec attribution d'acteur, traces de references |
| Gouvernance des essais cliniques | Historique de decisions, suivi des changements de protocole, versionning des rules |

---

## Workflow au quotidien

### Pour les ingenieurs IA clinique

1. **Avant de coder** : l'agent IA interroge Knowledge via `knowledge_resolve` et `knowledge_check`
2. **Pendant le developpement** : l'agent suit les rules de gouvernance clinique et enregistre les decisions
3. **Dans le commit** : l'agent genere `.knowledge/report.md` citant les contraintes applicables
4. **Le CI tourne** : le Verifier verifie la conformite (citations + analyse semantique + external checkers)

### Pour les responsables de gouvernance clinique

1. **Definir les invariants** : codifier les contraintes de securite patient (revue clinicien, seuils d'alerte)
2. **Definir les rules** : standards de gouvernance IA (cadence de validation, exigences de recalibration)
3. **Attacher des external checkers** : scripts ou webhooks pour verification dynamique (monitoring de performance modele, fraicheur des donnees)
4. **Reviewer les approbations** : approuver ou rejeter les demandes de deploiement IA
5. **Exporter les preuves** : generer des rapports d'audit structures pour les soumissions reglementaires

### Pour les auditeurs et regulateurs

1. **Parcourir les scopes** : voir Clinical AI, Health IT, Data Governance d'un coup d'oeil
2. **Lire les invariants** : comprendre quelles contraintes gouvernent les decisions assistees par IA
3. **Tracer les decisions** : suivre la chaine du besoin clinique a la selection de modele au deploiement
4. **Verifier la conformite** : consulter les traces de references prouvant que les contraintes de securite patient ont ete appliquees

---

## Cas d'usage en sante

### Gouvernance IA clinique

- Invariants pour les contraintes de securite patient (revue humaine, seuils d'alerte)
- Rules pour la cadence de validation et monitoring des modeles
- Gates d'approbation pour le deploiement de modeles IA en environnement clinique
- Historique de decisions pour la selection de modeles avec justification clinique

### Developpement de medicaments

- Decisions documentant les choix de protocole d'essai avec contexte reglementaire
- Rules pour la gestion des donnees et la methodologie d'analyse
- Invariants pour les exigences de reporting de securite
- Timeline d'evenements pour la piste d'audit GCP (Good Clinical Practice)

### Operations IT sante

- Regles de deploiement pour les systemes cliniques (fenetres de changement, exigences de rollback)
- Invariants pour l'integrite des donnees (pas de modification des dossiers cliniques par l'IA)
- Rules pour les standards d'acces et d'authentification des systemes
- CI Verifier pour les changements de code IT sante

### Interoperabilite et gouvernance des donnees

- Decisions pour l'adoption de standards de donnees (HL7 FHIR, DICOM)
- Rules pour les exigences de qualite des donnees dans les jeux d'entrainement IA
- Invariants pour l'acces aux donnees base sur le consentement
- Traces de references prouvant la conformite par utilisation de donnees

---

## Ce que ca remplace

| Avant | Avec Knowledge |
|-------|---------------|
| Protocoles cliniques dans des PDF que personne n'interroge | Invariants structures appliques par les agents IA en temps reel |
| Decisions de gouvernance IA dans des PVs de comite | Decisions immuables avec contexte, raisonnement et tracabilite |
| Preuves d'audit manuelles pour les soumissions reglementaires | Export structure depuis un registre vivant |
| Fils d'emails pour les approbations de deploiement IA | Workflows d'approbation avec verification de role et suivi des overrides |
| Tableurs de suivi de conformite IA clinique | Verifier automatise en CI avec analyse semantique |
| "Demandez au Dr. Chen, c'est elle qui a mene cette initiative" | Registre recherchable avec chaines de decisions completes |

---

## Commencer

1. [Creer votre compte](/docs/getting-started)
2. Creer des scopes pour vos domaines (Clinical AI, Health IT, Data Governance)
3. Demander à votre agent IA d'extraire les règles depuis `./protocols` et `./sops` pour le scope Clinical AI
4. Reviewer les brouillons extraits - approuver les contraintes de securite patient comme invariants
5. Connecter les agents IA via MCP pour le controle de contraintes en temps reel
6. Ajouter le Verifier a votre pipeline CI

[Commencer →](/docs/getting-started) · [Conformite AI Act →](/compliance/ai-act) · [Tarifs →](/pricing)
