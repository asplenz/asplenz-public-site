---
title: Votre agent peut investiguer. La policy doit décider ce qu'il est autorisé à conclure.
description: Shippez un agent IA qui investigue les cas et prend des décisions métier gouvernées par des règles enterprise, sans laisser le modèle devenir l'autorité sur ce qui est autorisé.
locale: fr
kicker: Solutions - Pour équipes produit IA
---

Vous shippez un agent IA qui investigue des cas et aide à déterminer ce que le business devrait faire ensuite. Il est bon pour comprendre, rassembler des preuves, planifier. C'est pour ça que vous le shippez.

Mais dès que l'agent participe à une décision gouvernée par des règles enterprise, une question de review continue à bloquer le rollout :

> *On ne veut pas que le LLM devienne l'autorité sur ce qui est autorisé. Où vit la policy ?*

Les équipes commencent souvent par mettre la policy dans les prompts, la retrieval, le code de l'agent ou la logique des tools. Ça peut marcher pour les prototypes. Dès que l'agent lui-même participe à une décision métier régulée, la policy a besoin d'une autorité claire hors du modèle.

Knowledge est cette autorité. Le modèle investigue et raisonne ; une couche policy déterministe décide ce que l'agent est autorisé à conclure.

## Où ça s'applique, et où ça ne s'applique pas

**Si un service métier existant possède déjà la décision end-to-end, gardez-le.** Une API `refund_request()` qui contient déjà les règles, décide et exécute n'a pas besoin de Knowledge devant elle.

**Knowledge est pour la frontière de décision que l'agent introduit.** Quand l'agent investigue, rassemble des preuves et participe à une décision métier qui n'existait pas précédemment comme capability déterministe propre, c'est la nouvelle surface. La policy pour cette surface doit vivre hors du modèle.

## Le pattern

```
Votre agent
  |  comprend l'intention de l'utilisateur
  |  rassemble les faits (CRM, vendor, docs)
  |  investigue
  ↕
Knowledge   (couche policy déterministe, hors du modèle)
  |  règles applicables
  |  required_context si le cas n'est pas encore décidable
  |  précédence, overrides, verdict
  ↓
Wrapper de tool gouverné
  |  vérifie que la décision signée matche l'appel exact
  ↓
API métier
```

La double flèche entre agent et Knowledge est importante. L'agent n'envoie pas un contexte complet d'entrée et n'attend pas un verdict. Il envoie ce qu'il a ; Knowledge lui dit quels champs les règles applicables exigent encore ; l'agent les acquiert et re-consulte, jusqu'à ce qu'une décision soit atteinte.

## Ce que ça débloque

| Outcome | Ce que ça veut dire pour votre projet |
|---|---|
| **Shipper de l'autonomie que Compliance peut approuver** | L'équipe compliance possède et édite un fichier de règles avec des triples structurés `{scope, condition, severity}`. L'approbation ne dépend plus de faire confiance au prompt. |
| **Changer la policy sans redesigner l'agent** | Les changements de policy peuvent être gouvernés indépendamment des releases d'agent quand ils utilisent du contexte que l'agent peut déjà acquérir. Nouveau champ requis ? `required_context` dit à l'agent quoi fetch. Pas de redéploiement d'agent. |
| **Savoir pourquoi chaque décision gouvernée a été prise** | Chaque consultation écrit un record Consultation qui pin les versions de règles exactes, le trace de précédence et les overrides en vigueur au moment de la décision. Vous pouvez reconstruire les règles derrière la décision telles qu'elles existaient à ce moment-là. |
| **Empêcher le comportement du modèle de devenir l'autorité policy** | Le modèle peut proposer une action. Un modèle manipulé ne peut pas transformer sa propre interprétation de la policy en autorité : le tool gouverné exige toujours une décision policy valide liée à l'action proposée avant de tourner. |

## Progressive context - une partie first-class de la boucle agentique

Cette propriété est ce qui fait de Knowledge plus qu'un rules engine appelé à la fin de la pipeline. Elle fait de Knowledge une partie de la boucle agentique elle-même.

L'agent n'a pas besoin de connaître le schema de policy d'entrée. Il probe avec ce qu'il a ; Knowledge lui dit ce que les règles applicables exigent encore ; l'agent l'acquiert (lookup CRM, appel vendor, extraction LLM depuis le fichier du cas, question à l'utilisateur) et re-consulte.

```
Agent investigue
       ↕
Knowledge détermine
ce dont la policy a besoin ensuite
       ↓
détermination policy
       ↓
exécution gouvernée
```

Ça inverse la direction de dépendance. Vous pouvez construire un agent générique qui s'adapte à mesure que les policies évoluent, sans embarquer la connaissance du schema dans le code de l'agent.

Plus à [Progressive context](/product/progressive-context).

## De la décision policy à l'action enforced

Quand l'agent agit, une autorisation signée lie l'exécution à la décision policy exacte qui l'a permise. Deux lignes de code font marcher le wrapper :

```python
@governed_tool(action="refund.execute", resource="tx", bind=["amount"])
def refund_customer(tx: str, amount: int):
    return refund_api_legacy(tx, amount)
```

L'agent appelle `refund_customer(tx="TX-456", amount=40)` comme n'importe quelle autre fonction Python. Le wrapper consulte Knowledge, vérifie l'enveloppe signée, checke que les bindings matchent, exécute l'appel sous-jacent. Sur refus il raise une erreur typée que l'agent peut logger et communiquer.

Modèle complet à [Enforcement](/product/enforcement).

## Fonctionne avec la stack que vous avez déjà

Tools du serveur MCP, SDK Python, API REST, PEP custom. Amenez votre propre framework d'agent (LangGraph, client MCP, orchestrator custom).

Voir [Integrations](/product/integrations) pour les détails sur chaque chemin.

## Ce que Knowledge n'est pas

- **Pas un remplaçant pour les services de décision existants.** Si un service déterministe existant possède déjà la décision complète, gardez-le. Knowledge est pour les nouvelles frontières de décision créées quand les agents commencent à faire du travail qui exigeait précédemment un jugement policy humain.
- **Pas une défense contre le prompt injection.** C'est le travail de votre provider de modèle. Knowledge le complète : un modèle manipulé peut proposer une action, mais le tool gouverné refuse toujours sans une décision policy valide.
- **Pas du RAG sur vos documents policy.** Knowledge produit des verdicts déterministes à partir de règles formalisées, pas de texte retrouvé.

## Commencer par une décision gouvernée

Commencez par une décision que votre agent prend actuellement - ou une que vous n'êtes pas encore à l'aise de le laisser prendre. Wrappez-la. Faites-la tourner en shadow mode contre votre process actuel. Cutoverez vers l'enforcement quand la parité est prouvée.

**[Quickstart : governed tool en Python](/docs/quickstart-governed-tool)** &nbsp; · &nbsp; **[Quickstart : Knowledge comme serveur MCP](/docs/quickstart-knowledge-mcp)** &nbsp; · &nbsp; **[Parlez-nous](/contact)**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Product](/product) | La boucle de décision pour agents IA rule-governed |
| [Progressive context](/product/progressive-context) | La boucle `required_context` et l'inversion de dépendance |
| [Enforcement](/product/enforcement) | Le modèle enveloppe signée et PEP |
| [Integrations](/product/integrations) | Serveur MCP Knowledge, SDK Python, REST, chemins PEP custom |
