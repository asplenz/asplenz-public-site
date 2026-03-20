<!-- lang: en -->

# Knowledge for Legal and Compliance Teams

Legal and compliance teams need to document policy decisions, enforce regulatory constraints, and produce structured evidence for auditors. Knowledge provides the registry to do this systematically.

---

## The Challenge

- Policy decisions are recorded in emails, meeting notes, and scattered documents
- Compliance constraints exist in regulatory texts but are not machine-enforceable
- When auditors ask for evidence, teams spend days assembling it manually
- AI tools used by the organization operate without awareness of compliance requirements
- No structured way to prove that constraints were checked before actions were taken

---

## How Knowledge Helps

### Extract Rules from Existing Policy Documents

Your legal team already has rules in policy documents, compliance frameworks, and regulatory interpretations. Knowledge extracts them automatically:

```
> "Extract rules from ./policies and ./compliance-docs for the Privacy scope"
```

```
Scanning ./policies, ./compliance-docs...
  > 4 invariant candidates  (e.g., "Personal data processing requires documented legal basis")
  > 8 rule candidates       (e.g., "Privacy impact assessment required for new processing activities")
  > 3 decision candidates   (e.g., "GDPR data retention limit set to 36 months for customer records")
  > 2 duplicates skipped
```

You review in the dashboard and approve what's correct. Regulatory requirements become invariants, operational directives become rules. [See how extraction works →](/product/how-it-works#start-from-what-you-have)

### Document Policy Decisions

Record every compliance decision with full context:

```
Decision: "GDPR data retention limit set to 36 months for customer records"
  Context: "Legal review of GDPR Art. 5(1)(e) and sector-specific guidance"
  Reasoning: "36 months balances legitimate business interest against minimization"
  Author: legal-team
  Tags: [gdpr, data-retention, privacy]
```

Link decisions to the constraints they create:

```
Decision: "36-month retention for customer records"
    creates > Invariant: "No customer data retained beyond 36 months"
    creates > Rule: "Automated deletion pipeline must run monthly"
```

Six months later, when someone asks "why 36 months?", the answer is one search away - with the regulatory reasoning attached.

### Encode Regulatory Constraints

Turn regulatory requirements into machine-readable invariants:

```
Invariant: "Personal data processing requires documented legal basis"
  Rationale: "GDPR Art. 6 - no processing without lawful basis"
  requires_approval: true

Invariant: "Data transfers outside EU require adequacy decision or SCCs"
  Rationale: "GDPR Art. 44-49"

Rule: "Privacy impact assessment required for new data processing activities"
  Severity: MANDATORY
```

These constraints are checked automatically - by AI agents before they act, by the Verifier before code ships.

### Give AI Agents Your Compliance Context

When an AI agent works on code that touches regulated data, it queries Knowledge first:

```
Agent starts a task in the data-processing namespace
Agent > knowledge_resolve(scope="Privacy", namespace="data-processing")
  > Returns 8 applicable entries: 2 invariants, 3 decisions, 2 rules, 1 override

Agent > knowledge_check(scope="Privacy", action="Add user analytics tracking")
  > Conflict: inv-3b1c "Personal data processing requires documented legal basis"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-3b1c",
    intended_action="Add analytics tracking for user behavior",
    justification="Legitimate interest basis, PIA completed ref DOC-2024-47"
  )
  > Pending, waiting for legal review

Legal team reviews in dashboard > Approve with conditions
  > Override created: "PIA completed, limited to aggregated data"
  > Agent proceeds, reference recorded
```

The agent does not bypass compliance. It reads the constraints from the same registry your legal team maintains.

### Produce Structured Evidence

When an auditor asks "how do you ensure AI systems comply with your data governance policies?":

| Auditor Question | Knowledge Answer |
|-----------------|------------------|
| "What constraints exist?" | Export invariant and rule registry |
| "Who set these constraints?" | Each entry has author + timestamp |
| "Were constraints checked before deployment?" | Reference traces with status |
| "Who approved this exception?" | Approval chain: request > decision > override |
| "What changed and when?" | Event timeline with full attribution |

This is not a manual report. It is a structured export from a live registry.

### Gate High-Risk Actions

For actions that require legal review:

```
Engineer: deploys feature with new data collection
  > Verifier: conflict with invariant "Privacy impact required"
  > PR blocked

Engineer: creates approval request with justification
  > Legal team reviews > approves with conditions
  > Override created: "PIA completed, ref DOC-2024-47"
  > PR passes
```

### CI Compliance Checks

The Verifier runs in your pipeline and checks that code changes address applicable compliance constraints:

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

The coding agent generates an Implementation Report as `.knowledge/report.md`, committed alongside the code. The Verifier validates citations, overrides, and mandatory entries. With semantic analysis enabled, it evaluates the actual code diff against each constraint. [See the full Verifier flow →](/product/how-it-works#cicd-verifier)

---

## Day-to-Day Workflow

### For Legal Counsel

1. **Define invariants**: encode regulatory requirements as machine-enforceable constraints
2. **Set rules**: define compliance directives (PIA requirements, retention policies, consent standards)
3. **Review approvals**: approve or reject exception requests from engineers and AI agents
4. **Monitor events**: track policy changes and compliance status in the event timeline
5. **Export evidence**: generate structured reports for regulators and auditors

### For Compliance Officers

1. **Extract existing rules**: ask your AI agent to extract rules from policy documents to populate the registry
2. **Review drafts**: approve extracted constraints, reject noise, edit as needed
3. **Attach external checkers**: add scripts or webhooks for dynamic verification (consent checks, data residency validation)
4. **Browse references**: verify that constraints are being followed across the organization
5. **Generate reports**: export compliance evidence for regulatory filings

### For Engineers

1. **Before coding**: AI agent queries Knowledge via `knowledge_resolve` and `knowledge_check`
2. **During coding**: agent follows compliance rules and records decisions
3. **In the commit**: agent generates `.knowledge/report.md` citing applicable constraints
4. **CI runs**: Verifier checks compliance (citations + semantic analysis + external checkers)

---

## Use Cases in Legal/Compliance

### Data Privacy (GDPR)

- Invariants for data processing constraints (legal basis, retention, transfers)
- Rules for privacy impact assessments and data mapping
- Approval gates for new processing activities
- Decision history linking regulatory interpretation to operational controls

### Contract and IP Management

- Decisions recording licensing and contract interpretations
- Rules for IP attribution requirements in generated content
- Invariants for prohibited uses of third-party IP
- Reference traces proving compliance with licensing terms

### Corporate Governance

- Decisions documenting board resolutions and policy changes
- Rules for approval thresholds and delegation of authority
- Invariants for separation-of-duties requirements
- Event timeline for governance audit trail

### AI Governance

- Map to EU AI Act requirements (see [AI Act Compliance](/compliance/ai-act))
- Invariants for AI system risk controls
- Rules for model validation and monitoring
- Approval workflows for high-risk AI deployments

---

## What It Replaces

| Before | With Knowledge |
|--------|---------------|
| Policy decisions in emails and meeting notes | Immutable decisions with regulatory context and reasoning |
| Compliance constraints in unstructured regulatory texts | Machine-readable invariants enforced by agents and CI |
| Days of manual evidence assembly for auditors | Structured export from a live registry |
| Email threads for compliance approvals | Approval workflows with role verification and override tracking |
| Spreadsheets tracking policy compliance | Automated Verifier in CI with semantic analysis |
| "Ask legal, they'll tell you what the policy is" | Searchable registry with full decision chains |

---

## Get Started

1. [Create your account](/docs/getting-started)
2. Create scopes for your compliance domains (Privacy, Contracts, Corporate Governance)
3. Ask your AI agent to extract rules from `./policies` and `./compliance-docs` for the Privacy scope
4. Review and approve extracted drafts, then refine with manual entries
5. Connect AI agents via MCP for real-time constraint checking
6. Add the Verifier to your CI pipeline

[Getting Started →](/docs/getting-started) · [AI Act Compliance →](/compliance/ai-act) · [Pricing →](/pricing)

---
---

<!-- lang: fr -->

# Knowledge pour les equipes Juridique et Conformite

Les equipes juridiques et de conformite ont besoin de documenter les decisions de politique, appliquer les contraintes reglementaires et produire des preuves structurees pour les auditeurs. Knowledge fournit le registre pour faire cela systematiquement.

---

## Le defi

- Les decisions de politique sont enregistrees dans des emails, des notes de reunion et des documents disperses
- Les contraintes de conformite existent dans des textes reglementaires mais ne sont pas applicables par les machines
- Quand les auditeurs demandent des preuves, les equipes passent des jours a les assembler manuellement
- Les outils IA utilises par l'organisation operent sans connaissance des exigences de conformite
- Pas de moyen structure de prouver que les contraintes ont ete verifiees avant que les actions soient prises

---

## Comment Knowledge aide

### Extraire les regles des documents de politique existants

Votre equipe juridique a deja des regles dans les documents de politique, les frameworks de conformite et les interpretations reglementaires. Knowledge les extrait automatiquement :

```
> "Extrais les règles depuis ./policies et ./compliance-docs pour le scope Privacy"
```

```
Scanning ./policies, ./compliance-docs...
  > 4 candidats invariant  (ex. "Personal data processing requires documented legal basis")
  > 8 candidats rule       (ex. "Privacy impact assessment required for new processing activities")
  > 3 candidats decision   (ex. "GDPR data retention limit set to 36 months for customer records")
  > 2 doublons ignores
```

Vous reviewez dans le dashboard et approuvez ce qui est correct. Les exigences reglementaires deviennent des invariants, les directives operationnelles deviennent des rules. [Voir comment fonctionne l'extraction →](/product/how-it-works#start-from-what-you-have)

### Documenter les decisions de politique

Enregistrez chaque decision de conformite avec son contexte complet :

```
Decision: "Limite de retention GDPR fixee a 36 mois pour les dossiers clients"
  Context: "Revue juridique de l'Art. 5(1)(e) du GDPR et directives sectorielles"
  Reasoning: "36 mois equilibre l'interet commercial legitime contre la minimisation"
  Author: legal-team
  Tags: [gdpr, data-retention, privacy]
```

Liez les decisions aux contraintes qu'elles creent :

```
Decision: "Retention de 36 mois pour les dossiers clients"
    creates > Invariant: "Aucune donnee client conservee au-dela de 36 mois"
    creates > Rule: "Le pipeline de suppression automatique doit tourner mensuellement"
```

Six mois plus tard, quand quelqu'un demande "pourquoi 36 mois ?", la reponse est a une recherche pres - avec le raisonnement reglementaire attache.

### Encoder les contraintes reglementaires

Transformez les exigences reglementaires en invariants lisibles par les machines :

```
Invariant: "Le traitement de donnees personnelles necessite une base juridique documentee"
  Rationale: "GDPR Art. 6 - pas de traitement sans base licite"
  requires_approval: true

Invariant: "Les transferts de donnees hors UE necessitent une decision d'adequation ou des CCT"
  Rationale: "GDPR Art. 44-49"

Rule: "Analyse d'impact sur la vie privee requise pour les nouvelles activites de traitement"
  Severity: MANDATORY
```

Ces contraintes sont verifiees automatiquement - par les agents IA avant d'agir, par le Verifier avant que le code soit deploye.

### Donner le contexte conformite aux agents IA

Quand un agent IA travaille sur du code qui touche a des donnees reglementees, il interroge Knowledge d'abord :

```
L'agent demarre une tache dans le namespace data-processing
Agent > knowledge_resolve(scope="Privacy", namespace="data-processing")
  > Retourne 8 entrees applicables : 2 invariants, 3 decisions, 2 rules, 1 override

Agent > knowledge_check(scope="Privacy", action="Ajouter un tracking analytics utilisateur")
  > Conflit : inv-3b1c "Le traitement de donnees personnelles necessite une base juridique"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-3b1c",
    intended_action="Ajouter un tracking analytics du comportement utilisateur",
    justification="Base d'interet legitime, PIA completee ref DOC-2024-47"
  )
  > En attente, revue juridique requise

L'equipe juridique review dans le dashboard > Approuve avec conditions
  > Override cree : "PIA completee, limite aux donnees aggregees"
  > L'agent procede, reference enregistree
```

L'agent ne contourne pas la conformite. Il lit les contraintes depuis le meme registre que votre equipe juridique maintient.

### Produire des preuves structurees

Quand un auditeur demande "comment assurez-vous que les systemes IA respectent vos politiques de gouvernance des donnees ?" :

| Question de l'auditeur | Reponse Knowledge |
|------------------------|-------------------|
| "Quelles contraintes existent ?" | Export du registre d'invariants et rules |
| "Qui a defini ces contraintes ?" | Chaque entree a un auteur + timestamp |
| "Les contraintes ont-elles ete verifiees avant le deploiement ?" | Traces de references avec statut |
| "Qui a approuve cette exception ?" | Chaine d'approbation : demande > decision > override |
| "Qu'est-ce qui a change et quand ?" | Timeline d'evenements avec attribution complete |

Ce n'est pas un rapport manuel. C'est un export structure depuis un registre vivant.

### Bloquer les actions a haut risque

Pour les actions qui necessitent une revue juridique :

```
Ingenieur : deploie une fonctionnalite avec une nouvelle collecte de donnees
  > Verifier : conflit avec l'invariant "Analyse d'impact requise"
  > PR bloquee

Ingenieur : cree une demande d'approbation avec justification
  > L'equipe juridique review > approuve avec conditions
  > Override cree : "PIA completee, ref DOC-2024-47"
  > PR passe
```

### Checks de conformite CI

Le Verifier s'execute dans votre pipeline et verifie que les changements de code adressent les contraintes de conformite applicables :

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

L'agent de coding genere un Implementation Report sous forme de `.knowledge/report.md`, committe avec le code. Le Verifier valide les citations, overrides et entrees mandatory. Avec l'analyse semantique activee, il evalue le diff reel du code contre chaque contrainte. [Voir le flux complet du Verifier →](/product/how-it-works#cicd-verifier)

---

## Workflow au quotidien

### Pour les juristes

1. **Definir les invariants** : encoder les exigences reglementaires comme contraintes applicables par les machines
2. **Definir les rules** : directives de conformite (exigences PIA, politiques de retention, standards de consentement)
3. **Reviewer les approbations** : approuver ou rejeter les demandes d'exception des ingenieurs et agents IA
4. **Surveiller les evenements** : suivre les changements de politique et le statut de conformite dans la timeline
5. **Exporter les preuves** : generer des rapports structures pour les regulateurs et auditeurs

### Pour les responsables conformite

1. **Extraire les règles existantes** : demander à votre agent IA d'extraire les règles depuis les documents de politique pour peupler le registre
2. **Reviewer les brouillons** : approuver les contraintes extraites, rejeter le bruit, editer si necessaire
3. **Attacher des external checkers** : scripts ou webhooks pour verification dynamique (checks de consentement, validation de residence des donnees)
4. **Parcourir les references** : verifier que les contraintes sont suivies dans l'organisation
5. **Generer des rapports** : exporter les preuves de conformite pour les declarations reglementaires

### Pour les ingenieurs

1. **Avant de coder** : l'agent IA interroge Knowledge via `knowledge_resolve` et `knowledge_check`
2. **Pendant le coding** : l'agent suit les rules de conformite et enregistre les decisions
3. **Dans le commit** : l'agent genere `.knowledge/report.md` citant les contraintes applicables
4. **Le CI tourne** : le Verifier verifie la conformite (citations + analyse semantique + external checkers)

---

## Cas d'usage en juridique/conformite

### Protection des donnees (GDPR)

- Invariants pour les contraintes de traitement des donnees (base juridique, retention, transferts)
- Rules pour les analyses d'impact et la cartographie des donnees
- Gates d'approbation pour les nouvelles activites de traitement
- Historique de decisions liant l'interpretation reglementaire aux controles operationnels

### Gestion des contrats et de la PI

- Decisions enregistrant les interpretations de licences et contrats
- Rules pour les exigences d'attribution de PI dans le contenu genere
- Invariants pour les utilisations interdites de PI tierce
- Traces de references prouvant la conformite aux termes de licence

### Gouvernance d'entreprise

- Decisions documentant les resolutions du conseil et les changements de politique
- Rules pour les seuils d'approbation et la delegation d'autorite
- Invariants pour les exigences de separation des fonctions
- Timeline d'evenements pour la piste d'audit de gouvernance

### Gouvernance IA

- Mapper aux exigences du EU AI Act (voir [Conformite AI Act](/compliance/ai-act))
- Invariants pour les controles de risque des systemes IA
- Rules pour la validation et le monitoring des modeles
- Workflows d'approbation pour les deploiements IA a haut risque

---

## Ce que ca remplace

| Avant | Avec Knowledge |
|-------|---------------|
| Decisions de politique dans des emails et notes de reunion | Decisions immuables avec contexte reglementaire et raisonnement |
| Contraintes de conformite dans des textes reglementaires non structures | Invariants lisibles par les machines appliques par les agents et le CI |
| Des jours d'assemblage manuel de preuves pour les auditeurs | Export structure depuis un registre vivant |
| Fils d'emails pour les approbations de conformite | Workflows d'approbation avec verification de role et suivi des overrides |
| Tableurs de suivi de conformite aux politiques | Verifier automatise en CI avec analyse semantique |
| "Demandez au juridique, ils vous diront quelle est la politique" | Registre recherchable avec chaines de decisions completes |

---

## Commencer

1. [Creer votre compte](/docs/getting-started)
2. Creer des scopes pour vos domaines de conformite (Privacy, Contracts, Corporate Governance)
3. Demander à votre agent IA d'extraire les règles depuis `./policies` et `./compliance-docs` pour le scope Privacy
4. Reviewer et approuver les brouillons extraits, puis affiner avec des entrees manuelles
5. Connecter les agents IA via MCP pour le controle de contraintes en temps reel
6. Ajouter le Verifier a votre pipeline CI

[Commencer →](/docs/getting-started) · [Conformite AI Act →](/compliance/ai-act) · [Tarifs →](/pricing)
