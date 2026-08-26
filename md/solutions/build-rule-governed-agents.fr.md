---
title: Construire des agents rule-governed
description: Vous construisez l'agent. Les experts métier définissent les rules. Knowledge donne à ces rules une policy authority indépendante, exécutable et gouvernée - pour que vous arrêtiez de réinventer storage de rules, versioning, approbations, audit et enforcement à chaque engagement.
locale: fr
kicker: Solutions - Construire des agents rule-governed
---

Vous construisez des agents pour des clients enterprise. Vous connaissez le film.

Le client veut automatiser une équipe de 15 analystes qui traite des exceptions d'onboarding, ou réconcilie des paiements cassés, ou trie des queries compliance. Vous démarrez la discovery. Vous découvrez que les analystes utilisent :

```text
procedure.pdf
+
matrix.xlsx
+
"normalement dans ce cas on fait X"
+
email de Compliance
+
leur expérience
```

Vous devez décider où vivent les rules dans l'agent que vous livrez.

> *When your agent project discovers business rules, don't bury them in the agent. Put them in Knowledge.*

## Le moment où Knowledge appartient à votre architecture

Vous avez mappé le process. Vous avez formalisé la décision. Vous avez une decision table, un set de clauses if-then, une matrice de policy. Vous êtes à un commit d'écrire :

```python
if pep and risk == "HIGH":
    require_approval()
elif client_type == "COMPANY" and jurisdiction in RESTRICTED:
    require_beneficial_owner()
elif ...
```

ou de le dropper dans le prompt de l'agent, un config JSON, ou un workflow engine.

C'est le moment. Chaque chemin d'ici crée un trou rule-shaped dans ce que vous livrez :

- Rules enterrées dans le code agent -> Compliance ne peut pas les gouverner indépendamment.
- Rules dans les prompts -> l'interprétation du LLM dérive, et la reconstruction d'audit devient de l'archéologie de prompt.
- Rules dans un nouveau config bespoke -> vous rebuild versioning, approbations, audit trail, et enforcement à chaque engagement.
- Rules dans un BRMS existant -> possible sur des process industrialisés, overkill sur la long tail qui n'a jamais justifié un projet BRMS.

Knowledge est la cinquième option : une policy authority indépendante de l'agent, qui ship avec tout ce que vous auriez sinon rebuild.

## Ce que vous arrêtez de réinventer à chaque engagement

| Capability | Sans Knowledge | Avec Knowledge |
|---|---|---|
| Storage de rules | DB ad-hoc, config file, JSON | Structuré, typé, tenant-scoped |
| Versioning + immuabilité | Vous le buildez | RuleVersion pinnée par consultation |
| Workflow d'approbation | UI custom + intégration Slack | Entité Approval first-class + webhooks |
| Audit trail | Vous buildez le schema et le reader | Record Consultation avec precedence trace |
| Authorization signée | Vous ne le faites pas | Enveloppe JWS ES256, JWKS-verifiable |
| Progressive context | Vous hardcodez la liste de champs | `/resolve` retourne `required_context` |
| Mode shadow / advisory | Branching custom | Flag de config, même code path |
| Kill switch d'urgence | Redéploiement | Pause via API |

Chacune de ces capabilities est une semaine de travail quand vous la buildez. Knowledge les ship stables.

## L'argument que vous ajoutez à votre propre pitch

Les clients enterprise poussent quand un agent prend des actions qu'ils ne peuvent pas gouverner. Vous connaissez déjà les objections :

> *« Comment auditons-nous ce que l'agent a décidé ? »*
> *« Comment savons-nous que Compliance a signé off sur cette rule ? »*
> *« Que se passe-t-il quand la policy change ; on redéploie l'agent ? »*
> *« Comment prouvons-nous à un régulateur six mois plus tard ? »*

Avec Knowledge dans votre architecture, vous avez une réponse en une ligne :

> *Nos agents séparent le raisonnement probabiliste des décisions policy déterministes. Compliance conserve la gouvernance des rules indépendamment de l'agent. Chaque action porte une preuve cryptographique qui la lie aux versions de rule exactes qui l'ont autorisée.*

C'est un talking point qui vous permet de vendre un projet d'agent à une banque, un assureur, ou un payer healthcare. Sans lui, vous êtes de retour à *« faites confiance à notre prompt »*.

## L'effet plateforme à travers votre book of business

Vous construisez probablement des agents pour plus d'un client. Client A veut un agent KYC. Client B veut un agent wealth-exception. Client C veut un agent claims triage. Client D veut un agent d'approbations internes.

Sans standard, vous rebuild la couche rule-governed sur chaque projet.

Avec Knowledge :

```text
              Votre architecture

     Client A - agent KYC       ─┐
     Client B - agent wealth    ─┼─── Pattern Knowledge
     Client C - agent claims    ─┤    (même intégration à chaque fois)
     Client D - approbations    ─┘
```

Knowledge devient votre **pattern architectural standard pour les agents rule-governed**. Chaque engagement client démarre plus vite ; votre équipe arrête de résoudre les mêmes 8 problèmes from scratch.

## Ce que Knowledge n'est PAS

- **Pas un outil de policy digitization.** Vous et les SMEs de votre client formalisez les rules. Knowledge les accepte en CSV, Excel, DMN ou input API - mais le travail de discovery est le vôtre.
- **Pas un remplaçant pour les rules engines industrialisés.** Si le client a déjà FICO pour les décisions credit ou une plateforme custom pour la fraude, Knowledge n'y touche pas. Il cible la long tail de décisions régulées encore prises par des humains avec procédures + spreadsheets.
- **Pas un framework d'agent.** Amenez le vôtre : LangGraph, client MCP, orchestrator custom. Knowledge est la policy authority que ces agents consultent.

## Commencer

L'intégration minimum viable :

1. **Importer vos rules** en CSV ou Excel via l'UI back-office (voir [CSV import](/docs/api-reference/check) - le full CSV import ship au prochain sprint).
2. **Appeler `/resolve`** depuis votre agent quand il a besoin d'une décision. Handler `required_context` en fetchant les champs manquants.
3. **Wrapper les tools business** avec `@governed_tool` pour que les verdicts signés soient enforced à la frontière du tool. Voir [knowledge-runtime](/docs/sdk-reference/knowledge-runtime-python).
4. **Faire tourner en Shadow Mode** d'abord : Knowledge advise, le process humain décide toujours, vous mesurez la parité.
5. **Cutover vers enforcement** quand la parité est prouvée. Voir [Migrer d'advisory à enforcement](/docs/guides/migrate-from-advisory-to-enforcement).

C'est la forme. Le reste, c'est de la documentation.

## Co-delivery sur votre premier engagement Knowledge

Pas un programme partenaire formel. **Partner-assisted delivery** - si vous construisez un agent rule-governed pour un client en ce moment et Knowledge fit, nous travaillons aux côtés de votre équipe sur le pilote. Vous gardez la relation client. Nous vous aidons à réussir l'intégration Knowledge du premier coup.

Une fois le pattern normalisé (typiquement après 2-3 engagements), vous faites tourner les projets suivants indépendamment.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Enforcement](/product/enforcement) | Le modèle enveloppe signée + PEP que votre architecture va implémenter |
| [Progressive context](/product/progressive-context) | La boucle `/resolve` que votre agent va appeler |
| [knowledge-runtime (Python)](/docs/sdk-reference/knowledge-runtime-python) | Le SDK que vos agents Python vont utiliser |
| [MCP proxy](/docs/mcp-proxy/setup) | Enforcement transparent si vos agents parlent MCP |
| [Quickstart : governed tool](/docs/quickstart-governed-tool) | Hands-on de 5 minutes |
| [Parlez-nous](/contact) | Co-delivery sur votre premier engagement |
