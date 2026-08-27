---
title: Laissez votre agent investiguer. Ne le faites pas l'autorité policy.
description: Quand un agent doit rassembler des preuves et prendre une décision métier gouvernée par des règles enterprise, gardez ces règles hors du modèle. Knowledge donne à la décision une policy authority indépendante et déterministe que les experts métier peuvent gouverner.
locale: fr
kicker: Solutions - Construire des agents rule-governed
---

## La situation enterprise-agent

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

Vous devez décider où vivent les règles dans l'agent que vous livrez.

> *When your agent project discovers business rules, don't bury them in the agent. Put them in Knowledge.*

## Knowledge a-t-il sa place ici ?

Tous les agents n'ont pas besoin de Knowledge. Avant de décider, demandez qui prend la décision métier.

**Cas 1 : un service existant possède déjà la décision.**

```pipeline
Agent | Appelle la fonction existante
refund_request() | Service métier existant
Système métier | Possède règles, décision, exécution
```

Gardez-le. Knowledge n'ajoute pas de valeur sur un chemin qu'une API déterministe existante possède déjà proprement.

**Cas 2 : l'agent doit construire la décision.**

```pipeline
Agent | Investigue le cas, rassemble les preuves
Knowledge | La policy authority applique les règles
Décision | allowed / approval required / blocked
Agent | Agit sur la décision
```

L'agent fait maintenant plus que choisir un tool. Il rassemble du contexte, distingue les décisions autonomes des approbations humaines, et a besoin d'un endroit où vivent indépendamment les règles qui gouvernent son action. C'est là que Knowledge s'insère.

## Le moment où Knowledge entre dans l'architecture

Le moment où Knowledge appartient à votre architecture est quand l'agent, plutôt qu'un service métier existant, doit utiliser des règles métier pour déterminer ce qui devrait se passer.

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

- **Règles enterrées dans le code agent** - Compliance ne peut pas les gouverner indépendamment.
- **Règles dans les prompts** - l'interprétation du LLM dérive, et la reconstruction d'audit devient de l'archéologie de prompt.
- **Règles dans un nouveau config bespoke** - vous rebuild versioning, approbations, audit trail et enforcement à chaque engagement.
- **Règles dans un BRMS existant** - si le moteur existant possède déjà cette décision proprement, gardez-la là. Knowledge existe pour la frontière de décision que l'agent introduit et qui n'existait pas précédemment comme capability déterministe propre.

Knowledge est la cinquième option : une policy authority indépendante de l'agent, qui ship avec tout ce que vous auriez sinon rebuild.

## Ce que vous arrêtez de rebuild

Le problème n'est pas d'implémenter un check de règle. C'est de transformer ce check en capability enterprise gouvernée.

Vous démarrez avec :

```python
if risk == "HIGH":
    require_approval()
```

Puis vous découvrez que le client a besoin de :

```text
versioning
ownership
approbations
dates d'effet
audit
replay
shadow mode
enforcement
```

Chaque agent rule-governed finit par avoir besoin de tout ça. Ce que vous assemblez from scratch sur votre premier engagement, Knowledge le ship stable :

| Capability | Sans Knowledge | Avec Knowledge |
|---|---|---|
| Storage de règles | DB ad-hoc, config file, JSON | Structuré, typé, tenant-scoped |
| Versioning + immuabilité | Vous le buildez | RuleVersion pinnée par consultation |
| Workflow d'approbation | UI custom + intégration Slack | Entité Approval first-class + webhooks |
| Audit trail | Vous buildez le schema et le reader | Record Consultation avec precedence trace |
| Autorisation signée | Vous ne le faites pas | Enveloppe JWS ES256, JWKS-verifiable |
| Progressive context | Vous hardcodez la liste de champs | `/resolve` retourne `required_context` |
| Mode shadow / advisory | Branching custom | Flag de config, même code path |
| Kill switch d'urgence | Redéploiement | Pause via API |

## Ce que ça vous permet de dire à votre client

Les clients enterprise poussent quand un agent prend des actions qu'ils ne peuvent pas gouverner. Vous connaissez déjà les objections :

> *« Comment auditons-nous ce que l'agent a décidé ? »*
>
> *« Comment savons-nous que Compliance a signé off sur cette règle ? »*
>
> *« Que se passe-t-il quand la policy change ? On redéploie l'agent ? »*
>
> *« Comment prouvons-nous à un régulateur six mois plus tard ? »*

Avec Knowledge dans votre architecture, vous avez une réponse en une ligne :

> **Nos agents investiguent. Vos policies décident. Votre équipe compliance garde l'autorité sur les règles.**

Puis la preuve quand vous en avez besoin :

> Quand l'agent agit, une autorisation signée peut lier l'exécution à la décision policy exacte qui l'a permise.

La première phrase vend. La deuxième prouve.

## Standardiser le pattern à travers vos engagements

Vous construisez probablement des agents pour plus d'un client. Client A veut un agent KYC. Client B veut un agent wealth-exception. Client C veut un agent claims triage. Client D veut un agent d'approbations internes.

Sans standard, vous rebuild la couche rule-governed sur chaque projet. Avec Knowledge :

```text
              Votre architecture

     Client A - agent KYC       ─┐
     Client B - agent wealth    ─┼─── Pattern Knowledge
     Client C - agent claims    ─┤    (même intégration à chaque fois)
     Client D - approbations    ─┘
```

Knowledge devient votre pattern architectural standard pour les agents rule-governed. Chaque engagement client démarre plus vite ; votre équipe arrête de résoudre le même set de problèmes from scratch. Au-delà de la gouvernance, c'est un argument économique : la couche rule-governed devient une partie productisée de votre architecture de delivery. Ramp plus rapide, meilleures marges, crédibilité enterprise plus forte.

## Où Knowledge s'insère, et où il ne s'insère pas

**Vous avez déjà un rules engine ? Gardez-le là où il possède la décision.**

Knowledge est utile quand le nouvel agent introduit une frontière de décision qui n'existe pas déjà proprement dans votre architecture, en particulier quand l'agent doit rassembler le contexte progressivement, distinguer les décisions autonomes des approbations humaines, et porter l'autorisation policy dans l'exécution du tool.

| Situation | Où mettre les règles |
|---|---|
| Capability métier déterministe existante possède déjà la décision (credit scoring dans FICO, détection de fraude dans un moteur maison, ticketing dans ServiceNow) | Gardez-la. Knowledge ne touche pas aux décisions qu'un moteur existant possède proprement. |
| L'agent crée une nouvelle frontière de décision (investigue un cas, rassemble des preuves, décide autonome vs approval vs block) | Knowledge. C'est la surface de décision qui n'existait pas avant que les agents ne fassent partie de l'architecture. |
| Les règles existent dans des procédures, spreadsheets ou la tête de l'analyste | Knowledge, quand vous donnez ces règles à un agent. L'agent ne peut les respecter que si elles sont formalisées quelque part qu'il peut consulter. |
| Vous voulez hardcoder les règles dans l'agent parce que ça a l'air plus rapide | Vous reviendrez sur cette décision dans les six mois. Voir « Ce que vous arrêtez de rebuild » plus haut. |

## Démarrer un engagement

L'intégration minimum viable :

1. **Importer vos règles** en CSV ou Excel via l'UI back-office. Voir [CSV import](/docs/api-reference/check).
2. **Appeler `/resolve`** depuis votre agent quand il a besoin d'une décision. Handler `required_context` en fetchant les champs manquants.
3. **Wrapper les tools business** avec `@governed_tool` pour que les verdicts signés soient enforced à la frontière du tool. Voir [knowledge-runtime](/docs/sdk-reference/knowledge-runtime-python).
4. **Faire tourner en Shadow Mode** d'abord : Knowledge advise, le process humain décide toujours, vous mesurez la parité.
5. **Cutover vers enforcement** quand la parité est prouvée. Voir [Migrer d'advisory à enforcement](/docs/guides/migrate-from-advisory-to-enforcement).

C'est la forme. Le reste, c'est de la documentation.

## Co-delivery sur votre premier engagement Knowledge

Pas un programme partenaire formel. **Partner-assisted delivery.** Si vous construisez un agent rule-governed pour un client en ce moment et Knowledge fit, nous travaillons aux côtés de votre équipe sur le pilote. Vous gardez la relation client. Nous vous aidons à réussir l'intégration Knowledge du premier coup.

Une fois le pattern normalisé de votre côté, vous faites tourner les projets suivants indépendamment.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Product](/product) | La boucle de décision pour agents IA rule-governed |
| [Enforcement](/product/enforcement) | Le modèle enveloppe signée et PEP que votre architecture va implémenter |
| [Progressive context](/product/progressive-context) | La boucle `/resolve` que votre agent va appeler |
| [knowledge-runtime (Python)](/docs/sdk-reference/knowledge-runtime-python) | Le SDK que vos agents Python vont utiliser |
| [Wrapper votre propre serveur MCP](/docs/guides/wrap-your-own-mcp-server-with-enforcement) | Pattern d'enforcement si vos agents parlent MCP |
| [Parlez-nous](/contact) | Co-delivery sur votre premier engagement |
