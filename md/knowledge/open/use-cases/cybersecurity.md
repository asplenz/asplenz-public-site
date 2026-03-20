<!-- lang: en -->

# Knowledge for Cybersecurity

AI agents are operating on your infrastructure: scanning vulnerabilities, remediating incidents, generating code, deploying services. They act fast - but they don't know your security policies, your pentest boundaries, or your incident response playbooks.

Knowledge gives your security team a structured registry where invariants, rules, and decisions are captured once and enforced everywhere - by every agent, every pipeline, every time.

---

## The Problem

Your security rules exist. They're just not where agents can find them:

- ISO 27001 controls in a PDF no one opens
- Incident response playbooks in Confluence, last updated 18 months ago
- Pentest boundaries agreed in a Slack thread
- Post-mortem decisions buried in Jira tickets
- Code security rules scattered across READMEs and PR comments

When an AI agent remediates a production incident at 3am, it doesn't check any of these. It acts on its training - not on your policies.

---

## How Knowledge Solves This

### Extract Rules from Existing Security Sources

Your team already has security rules - they're just not structured. Knowledge extracts them automatically:

```
> "Extract rules from ./policies and ./runbooks for the Security scope"
```

```
Scanning ./policies, ./runbooks, ./post-mortems...
  > 7 invariant candidates  (e.g., "Never log PII data")
  > 10 rule candidates       (e.g., "npm dependencies must be audited before merge")
  > 6 decision candidates    (e.g., "Ransomware playbook v3 approved 2024-11-12")
  > 3 duplicates skipped
```

Sources that produce the best results:
- Security policies and standards (ISO 27001, SOC 2 controls)
- Incident response runbooks and playbooks
- Resolved vulnerability tickets - every fix is an implicit rule
- PRs rejected for security reasons - a mine of undocumented invariants
- Slack #security - decisions made in real time during incidents

The CISO reviews and approves. The security registry is built from actual practices, not from a theoretical document that's never updated. [See how extraction works →](/product/how-it-works#start-from-what-you-have)

### Security Guardrails for Coding Agents

AI agents generating code must respect your security invariants:

```
Invariant: "Never log PII data"
Invariant: "All external connections go through the API Gateway"
Invariant: "Secrets must never transit as plaintext in environment variables"
Rule: "npm dependencies must be audited before merge" (MANDATORY)
Rule: "SQL queries must use parameterized statements" (MANDATORY)
```

Agents query Knowledge before writing code. The CI Verifier flags violations if generated code conflicts with a declared constraint.

### Give AI Agents Your Security Context

When an AI agent operates on your infrastructure, it queries Knowledge first:

```
Agent starts an incident remediation task
Agent > knowledge_resolve(scope="Security", namespace="incident-response")
  > Returns 12 applicable entries: 4 invariants, 3 decisions, 4 rules, 1 override

Agent > knowledge_check(scope="Security", action="Restart nginx on prod-web-03")
  > Conflict: inv-7c3d "No remediation action on production without human approval"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-7c3d",
    intended_action="Restart nginx on prod-web-03",
    justification="Service unresponsive after memory leak, P1 incident INC-2026-0412"
  )
  > Pending, waiting for CISO

CISO approves in dashboard
  > Override auto-created with conditions
  > Agent proceeds, reference recorded
```

Every interaction is recorded. Every constraint check is traceable.

### Governed Incident Response

An agent analyzing logs and proposing remediation actions must operate within strict boundaries:

```
Invariant: "No remediation action on production without human approval"
Rule: "Isolate the host before any forensic analysis" (MANDATORY)
Rule: "Notify the CISO within 30 minutes for any P1 incident" (MANDATORY)
Decision: "Ransomware playbook v3 - approved 2024-11-12"
```

Every decision made during the incident is traced - who approved what, which rule was consulted, which exception was created and by whom. This is exactly what an auditor or regulator asks for after an incident.

### Controlled Pentest and Vulnerability Scanning

Autonomous scanning agents must know the authorized perimeter:

```
Invariant: "Scan perimeter limited to assets declared in the registry"
Invariant: "No active scanning on production during business hours"
Rule: "Any vulnerability with CVSS >= 9.0 escalated immediately to CISO" (MANDATORY)
Override: "Production scan authorized 2026-03-15 02:00-05:00 - approved by CISO"
```

The Override with TTL is particularly suited here - a temporary, traceable authorization that automatically expires. No risk of forgetting to revoke it.

### Agent-to-Agent Governance

When multiple agents operate on the same infrastructure, Knowledge prevents conflicts:

```
Agent A (scanner): "I want to scan 10.0.1.0/24"
  > knowledge_check: OK, within declared perimeter

Agent B (deployer): "I want to deploy service-x to production"
  > knowledge_check: BLOCKED - "No deployments during active scan window"

Agent C (remediator): "I want to restart nginx on prod-web-03"
  > knowledge_check: REQUIRES APPROVAL - "No remediation on prod without human approval"
  > knowledge_request_approval > CISO approves > proceed
```

### CI Compliance Checks

The Verifier runs in your pipeline and checks that code changes address applicable security constraints:

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

The coding agent generates an Implementation Report as `.knowledge/report.md`, committed alongside the code. The Verifier validates citations, overrides, and mandatory entries. With semantic analysis enabled, it evaluates the actual code diff against each constraint. [See the full Verifier flow →](/product/how-it-works#cicd-verifier)

---

## NIS2 and ISO 27001 Compliance

Knowledge maps directly to the traceability requirements of NIS2 and ISO 27001:

| Requirement | Knowledge Feature |
|------------|-------------------|
| Risk management measures (NIS2 Art. 21) | Invariants codify security controls, rules enforce operational measures |
| Incident handling (NIS2 Art. 21.2b) | Decisions trace every action during incidents, approval workflows gate critical actions |
| Supply chain security (NIS2 Art. 21.2d) | Rules enforce dependency auditing, CI Verifier flags non-compliant code |
| Policies on cryptography (NIS2 Art. 21.2h) | Invariants enforce encryption standards, overrides trace exceptions |
| Access control (ISO 27001 A.9) | Role-based access, approval workflows, override governance |
| Operations security (ISO 27001 A.12) | Rules version operational procedures, event timeline traces changes |
| Incident management (ISO 27001 A.16) | Full decision trail with timestamps, approvals, and references |
| Compliance (ISO 27001 A.18) | Registry queryable at any point in time - audit-ready by design |

---

## Day-to-Day Workflow

### For the CISO

1. **Define invariants**: codify non-negotiable security controls (production access, data handling, encryption)
2. **Review extracted rules**: approve, reject, or edit security rules surfaced by extraction
3. **Approve overrides**: authorize temporary exceptions (pentest windows, emergency access)
4. **Monitor events**: track agent compliance and security decisions in the event timeline
5. **Export evidence**: produce compliance reports for auditors - structured data, not PDF screenshots

### For the SecOps Team

1. **Declare rules**: set security standards as rules (dependency auditing, code scanning requirements)
2. **Attach external checkers**: add scripts or webhooks for dynamic verification (vulnerability scan status, certificate expiry)
3. **Use the bot**: post a security decision in #security, the bot detects and structures it
4. **Review CI reports**: check Verifier reports on security-related PRs
5. **Create overrides**: time-limited exceptions for maintenance and testing windows

### For the Security Auditor

1. **Browse scopes**: see Security, Incident Response, Compliance at a glance
2. **Read invariants**: understand what constraints govern agent actions on infrastructure
3. **Trace decisions**: follow the chain from incident to remediation to approval
4. **Verify compliance**: query the registry for all active constraints at any date

---

## What It Replaces

| Before | With Knowledge |
|--------|---------------|
| Security policies in PDFs | Typed, searchable invariants and rules |
| Playbooks in Confluence | Versioned rules with change history |
| Pentest boundaries in Slack | Invariants with traceable overrides |
| Post-incident "what happened?" | Structured decision trail with timestamps |
| Manual compliance evidence gathering | Registry queryable at any point in time |
| Agents acting without security context | Pre-flight constraint checking on every action |

---

## Get Started

1. [Create your account](/docs/getting-started)
2. Create a Security scope
3. Ask your AI agent to extract rules from `./policies` and `./runbooks` for the Security scope
4. Review and approve the extracted rules in the dashboard
5. Connect your AI agents via MCP
6. Add the Verifier to your CI pipeline

[Getting Started →](/docs/getting-started) · [AI Act Compliance →](/compliance/ai-act) · [Pricing →](/pricing)

---
---

<!-- lang: fr -->

# Knowledge pour la Cybersecurite

Les agents IA operent sur votre infrastructure : scan de vulnerabilites, remediation d'incidents, generation de code, deploiement de services. Ils agissent vite - mais ils ne connaissent pas vos politiques de securite, vos perimetres de pentest, ni vos playbooks de reponse aux incidents.

Knowledge donne a votre equipe securite un registre structure ou les invariants, rules et decisions sont captures une fois et appliques partout - par chaque agent, chaque pipeline, a chaque fois.

---

## Le probleme

Vos regles de securite existent. Elles ne sont simplement pas la ou les agents peuvent les trouver :

- Les controles ISO 27001 dans un PDF que personne n'ouvre
- Les playbooks de reponse aux incidents dans Confluence, mis a jour il y a 18 mois
- Les perimetres de pentest convenus dans un thread Slack
- Les decisions post-mortem enterrees dans des tickets Jira
- Les regles de securite du code dispersees dans des READMEs et commentaires de PR

Quand un agent IA remedie un incident de production a 3h du matin, il ne consulte aucun de ces documents. Il agit selon son entrainement - pas selon vos politiques.

---

## Comment Knowledge resout ce probleme

### Extraire les regles des sources de securite existantes

Votre equipe a deja des regles de securite - elles ne sont simplement pas structurees. Knowledge les extrait automatiquement :

```
> "Extrais les règles depuis ./policies et ./runbooks pour le scope Security"
```

```
Scanning ./policies, ./runbooks, ./post-mortems...
  > 7 candidats invariant  (ex. "Never log PII data")
  > 10 candidats rule       (ex. "npm dependencies must be audited before merge")
  > 6 candidats decision    (ex. "Ransomware playbook v3 approved 2024-11-12")
  > 3 doublons ignores
```

Sources qui produisent les meilleurs resultats :
- Politiques et standards de securite (ISO 27001, controles SOC 2)
- Runbooks et playbooks de reponse aux incidents
- Tickets de vulnerabilites resolus - chaque correctif est une regle implicite
- PRs rejetees pour raisons de securite - une mine d'invariants non documentes
- Slack #security - decisions prises en temps reel pendant les incidents

Le CISO review et approuve. Le registre de securite est construit a partir de pratiques reelles, pas d'un document theorique jamais mis a jour. [Voir comment fonctionne l'extraction →](/product/how-it-works#start-from-what-you-have)

### Garde-fous de securite pour les agents de coding

Les agents IA qui generent du code doivent respecter vos invariants de securite :

```
Invariant: "Ne jamais logger de donnees PII"
Invariant: "Toutes les connexions externes passent par l'API Gateway"
Invariant: "Les secrets ne doivent jamais transiter en clair dans les variables d'environnement"
Rule: "Les dependances npm doivent etre auditees avant merge" (MANDATORY)
Rule: "Les requetes SQL doivent utiliser des statements parametres" (MANDATORY)
```

Les agents interrogent Knowledge avant d'ecrire du code. Le CI Verifier signale les violations si le code genere entre en conflit avec une contrainte declaree.

### Donner le contexte securite aux agents IA

Quand un agent IA opere sur votre infrastructure, il interroge Knowledge d'abord :

```
L'agent demarre une tache de remediation d'incident
Agent > knowledge_resolve(scope="Security", namespace="incident-response")
  > Retourne 12 entrees applicables : 4 invariants, 3 decisions, 4 rules, 1 override

Agent > knowledge_check(scope="Security", action="Redemarrer nginx sur prod-web-03")
  > Conflit : inv-7c3d "Pas d'action de remediation en production sans approbation humaine"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-7c3d",
    intended_action="Redemarrer nginx sur prod-web-03",
    justification="Service injoignable apres fuite memoire, incident P1 INC-2026-0412"
  )
  > En attente, CISO requis

Le CISO approuve dans le dashboard
  > Override auto-cree avec conditions
  > L'agent procede, reference enregistree
```

Chaque interaction est enregistree. Chaque verification de contrainte est tracable.

### Reponse aux incidents gouvernee

Un agent qui analyse les logs et propose des actions de remediation doit operer dans des limites strictes :

```
Invariant: "Pas d'action de remediation en production sans approbation humaine"
Rule: "Isoler l'hote avant toute analyse forensique" (MANDATORY)
Rule: "Notifier le CISO dans les 30 minutes pour tout incident P1" (MANDATORY)
Decision: "Playbook ransomware v3 - approuve 2024-11-12"
```

Chaque decision prise pendant l'incident est tracee - qui a approuve quoi, quelle regle a ete consultee, quelle exception a ete creee et par qui. C'est exactement ce qu'un auditeur ou regulateur demande apres un incident.

### Pentest et scan de vulnerabilites controles

Les agents de scan autonomes doivent connaitre le perimetre autorise :

```
Invariant: "Perimetre de scan limite aux assets declares dans le registre"
Invariant: "Pas de scan actif en production pendant les heures ouvrees"
Rule: "Toute vulnerabilite avec CVSS >= 9.0 escaladee immediatement au CISO" (MANDATORY)
Override: "Scan production autorise 2026-03-15 02:00-05:00 - approuve par le CISO"
```

L'Override avec TTL est particulierement adapte ici - une autorisation temporaire et tracable qui expire automatiquement. Pas de risque d'oublier de la revoquer.

### Gouvernance agent-a-agent

Quand plusieurs agents operent sur la meme infrastructure, Knowledge previent les conflits :

```
Agent A (scanner) : "Je veux scanner 10.0.1.0/24"
  > knowledge_check : OK, dans le perimetre declare

Agent B (deployer) : "Je veux deployer service-x en production"
  > knowledge_check : BLOQUE - "Pas de deploiement pendant une fenetre de scan active"

Agent C (remediateur) : "Je veux redemarrer nginx sur prod-web-03"
  > knowledge_check : APPROBATION REQUISE - "Pas de remediation en prod sans approbation humaine"
  > knowledge_request_approval > Le CISO approuve > proceder
```

### Checks de conformite CI

Le Verifier s'execute dans votre pipeline et verifie que les changements de code adressent les contraintes de securite applicables :

```yaml
# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml
```

L'agent de coding genere un Implementation Report sous forme de `.knowledge/report.md`, committe avec le code. Le Verifier valide les citations, overrides et entrees mandatory. Avec l'analyse semantique activee, il evalue le diff reel du code contre chaque contrainte. [Voir le flux complet du Verifier →](/product/how-it-works#cicd-verifier)

---

## Conformite NIS2 et ISO 27001

Knowledge se mappe directement aux exigences de tracabilite de NIS2 et ISO 27001 :

| Exigence | Fonctionnalite Knowledge |
|----------|--------------------------|
| Mesures de gestion des risques (NIS2 Art. 21) | Les invariants codifient les controles de securite, les rules appliquent les mesures operationnelles |
| Gestion des incidents (NIS2 Art. 21.2b) | Les decisions tracent chaque action pendant les incidents, les workflows d'approbation gatent les actions critiques |
| Securite de la chaine d'approvisionnement (NIS2 Art. 21.2d) | Les rules imposent l'audit des dependances, le CI Verifier signale le code non conforme |
| Politiques de cryptographie (NIS2 Art. 21.2h) | Les invariants imposent les standards de chiffrement, les overrides tracent les exceptions |
| Controle d'acces (ISO 27001 A.9) | Acces base sur les roles, workflows d'approbation, gouvernance des overrides |
| Securite des operations (ISO 27001 A.12) | Les rules versionnent les procedures operationnelles, la timeline d'evenements trace les changements |
| Gestion des incidents (ISO 27001 A.16) | Piste de decisions complete avec horodatages, approbations et references |
| Conformite (ISO 27001 A.18) | Registre interrogeable a tout moment - pret pour l'audit par conception |

---

## Workflow au quotidien

### Pour le CISO

1. **Definir les invariants** : codifier les controles de securite non-negociables (acces production, gestion des donnees, chiffrement)
2. **Reviewer les regles extraites** : approuver, rejeter ou editer les regles de securite surfacees par l'extraction
3. **Approuver les overrides** : autoriser les exceptions temporaires (fenetres de pentest, acces d'urgence)
4. **Surveiller les evenements** : suivre la conformite des agents et les decisions de securite dans la timeline
5. **Exporter les preuves** : produire des rapports de conformite pour les auditeurs - donnees structurees, pas de captures d'ecran de PDF

### Pour l'equipe SecOps

1. **Declarer les rules** : fixer les standards de securite comme rules (audit des dependances, exigences de scan de code)
2. **Attacher des external checkers** : scripts ou webhooks pour verification dynamique (statut de scan de vulnerabilites, expiration de certificats)
3. **Utiliser le bot** : poster une decision de securite dans #security, le bot la detecte et la structure
4. **Reviewer les rapports CI** : verifier les rapports du Verifier sur les PRs liees a la securite
5. **Creer des overrides** : exceptions a duree limitee pour les fenetres de maintenance et de test

### Pour l'auditeur securite

1. **Parcourir les scopes** : voir Security, Incident Response, Compliance d'un coup d'oeil
2. **Lire les invariants** : comprendre quelles contraintes gouvernent les actions des agents sur l'infrastructure
3. **Tracer les decisions** : suivre la chaine de l'incident a la remediation a l'approbation
4. **Verifier la conformite** : interroger le registre pour toutes les contraintes actives a n'importe quelle date

---

## Ce que ca remplace

| Avant | Avec Knowledge |
|-------|---------------|
| Politiques de securite dans des PDF | Invariants et rules types et recherchables |
| Playbooks dans Confluence | Rules versionnees avec historique de changements |
| Perimetres de pentest dans Slack | Invariants avec overrides tracables |
| Post-incident "que s'est-il passe ?" | Piste de decisions structuree avec horodatages |
| Collecte manuelle de preuves de conformite | Registre interrogeable a tout moment |
| Agents agissant sans contexte securite | Verification pre-vol des contraintes a chaque action |

---

## Commencer

1. [Creer votre compte](/docs/getting-started)
2. Creer un scope Security
3. Demander à votre agent IA d'extraire les règles depuis `./policies` et `./runbooks` pour le scope Security
4. Reviewer et approuver les regles extraites dans le dashboard
5. Connecter vos agents IA via MCP
6. Ajouter le Verifier a votre pipeline CI

[Commencer →](/docs/getting-started) · [Conformite AI Act →](/compliance/ai-act) · [Tarifs →](/pricing)
