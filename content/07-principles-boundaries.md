### 2. English Version

# Principles & Boundaries

## Principles, boundaries, and non-goals

**Reconstruction is valuable, until it becomes the object of contestation.** These principles are not design preferences. They exist because, in formal examination contexts, flexibility becomes a liability: evidence must be created at the moment of execution, not rebuilt later.

We use the term **Execution Evidence Infrastructure (EEI)** to describe this capability: a dedicated evidence layer that creates examinable facts at execution time, independently of later audits, investigations, or reconstructions. (Descriptive, non-normative terminology.)

---

### Non-negotiable principles

1. **Evidence at time T** (point of no return)
Prevents retrospective reconstruction from becoming "the evidence" by producing facts when the action occurs.
2. **Append-only** records
Eliminates ambiguity about edits, deletions, or rewrites. Evidence can be trusted without relying on narratives.
3. **Agnostic to agent** (human or machine)
Preserves a single factual chain across automated decisions and human interventions, with no handoff gap.
4. **Non-intrusive** (no gating, no decision influence)
Ensures evidence capture does not act as a control point. It is designed to avoid altering outcomes or workflows, and to minimize overhead. The evidence layer stays observational.
5. **Strict separation** : execution vs evaluation
Keeps "what happened" distinct from "what was assessed," so later examination can separate action from interpretation.
6. **Independent verification** (including offline)
Integrity can be checked from exported evidence artefacts (case bundles) without trusting the producing systems, and without requiring access to the vendor or runtime when scrutiny is highest.

---

### Clear non-goals

These non-goals are deliberate. They preserve Horizon's role as an evidence layer, orthogonal to operational tooling, so evidence remains stable even as systems evolve.

* Not an investigation platform
* Not observability or SIEM
* Not a case-management workflow
* Not a compliance tool
* Not a "single pane of glass" for operations

---

### Why logs + tickets are not equivalent

Logs and tickets can support reconstruction. They do not create immutable, ordered, declared evidence at time T. When scrutiny is case-specific, the question is no longer "what usually happens," but "what exactly happened here," and reconstruction itself becomes contestable.

---

### 3. Version Française

# Principes & Limites

## Principes, périmètres et objectifs exclus

**La reconstruction est précieuse, jusqu’à ce qu’elle devienne l’objet de la contestation.** Ces principes ne sont pas des préférences de conception. Ils existent car, dans les contextes d'examen formel, la flexibilité devient une vulnérabilité : la preuve doit être créée au moment de l’exécution, et non reconstruite a posteriori.

Nous utilisons le terme **Infrastructure de Preuve d’Exécution (EEI)** pour décrire ce dispositif : une couche de preuve dédiée qui crée des faits examinables au moment de l’exécution, indépendamment des audits, enquêtes ou reconstructions ultérieurs. (Terminologie descriptive et non normative.)

---

### Principes non négociables

1. **La preuve à l'instant T** (point de non-retour)
Empêche la reconstruction rétrospective de devenir « la preuve » en produisant des faits au moment même où l'action survient.
2. **Registres en ajout exclusif** (append-only)
Élimine toute ambiguïté concernant les modifications, les suppressions ou les réécritures. La preuve peut être considérée comme fiable sans dépendre de récits a posteriori.
3. **Agnostique vis-à-vis de l'agent** (humain ou machine)
Préserve une chaîne factuelle unique entre les décisions automatisées et les interventions humaines, sans rupture de continuité.
4. **Non-intrusivité** (pas de filtrage, aucune influence sur la décision)
Garantit que la capture de la preuve n'agit pas comme un point de contrôle. Le dispositif est conçu pour ne modifier ni les résultats ni les flux de travail, et pour minimiser la charge système. La couche de preuve reste purement observationnelle.
5. **Séparation stricte** : exécution vs évaluation
Distingue « ce qui s'est passé » de « ce qui a été évalué », afin que l'examen ultérieur puisse séparer l'action de son interprétation.
6. **Vérification indépendante** (y compris hors ligne)
L'intégrité peut être vérifiée à partir d'artefacts de preuve exportés (dossiers de preuves) sans avoir à accorder sa confiance aux systèmes d'origine, et sans nécessiter d'accès au fournisseur ou à l'environnement d'exécution au moment où l'examen est le plus critique.

---

### Objectifs exclus délibérément

Ces exclusions sont volontaires. Elles préservent le rôle d'Horizon en tant que couche de preuve, orthogonale aux outils opérationnels, afin que la preuve reste stable même lorsque les systèmes évoluent.

* Ni plateforme d'enquête
* Ni observabilité ou SIEM
* Ni flux de gestion de dossiers (case-management)
* Ni outil de conformité
* Ni console de supervision opérationnelle unique

---

### Pourquoi les logs et les tickets ne sont pas équivalents

Les logs et les tickets facilitent la reconstruction. Ils ne créent pas une preuve déclarée, ordonnée et immuable à l'instant T. Lorsqu'un examen porte sur un cas spécifique, la question n'est plus « que se passe-t-il habituellement », mais « que s'est-il passé exactement ici », et la reconstruction elle-même devient alors contestable.

---
