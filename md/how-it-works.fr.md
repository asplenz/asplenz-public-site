---
title: Comment fonctionne Knowledge
description: Une couche de policy gouvernée appelable via REST. Les appelants envoient le contexte qu'ils ont. Knowledge détermine si la policy peut résoudre la décision, et sinon, quel contexte est encore requis.
locale: fr
kicker: Le modèle mental
---

Knowledge est une couche de policy gouvernée. Les appelants envoient le contexte qu'ils ont, et Knowledge répond à deux questions :

> Étant donné ce que je sais, la policy peut-elle déterminer le résultat ?
>
> Sinon, qu'a-t-elle besoin de savoir ensuite ?

**L'appelant n'a pas besoin de connaître l'arbre de dépendances de la policy. Knowledge, si.**

## Les quatre boîtes

```pipeline
Appelants | Applications, workflows, formulaires, agents IA | Collecter le contexte, orchestrer
Knowledge | Policies, règles, précédence, overrides | Résoudre, gouverner, signer
Frontière d'enforcement | Wrapper de tool, MCP proxy, PEP custom | Vérifier le verdict signé à la frontière d'exécution
Systèmes de record | CRM, OMS, systèmes core, APIs opérationnelles | Stocker, exécuter
```

Knowledge ne possède pas vos données client. Il n'orchestre pas votre workflow. Il n'exécute pas l'action métier. Il rend la décision et signe l'enveloppe ; la frontière d'enforcement est ce qui empêche un caller d'ignorer la réponse.

## Le contrat de résolution central

La plupart des intégrations démarrent avec `/resolve`. Les appelants POSTent une intention et le contexte qu'ils ont actuellement. Chaque champ dans `context` est un `Fact` qui porte la valeur brute et sa provenance (`source` est requis ; `verification_status` et `confidence` sont optionnels).

```
POST /knowledge/v1/resolve
{
  "action_type": "sp_offer_eligibility",
  "context": {
    "asset_class": { "value": "structured_product", "source": "caller" },
    "product.complexity": { "value": "highly_complex", "source": "product_master" }
  }
}
```

**Knowledge répond dans l'un de deux états : complete ou incomplete.**

Si l'opération est incomplete, la réponse identifie le contexte encore requis pour que les policies applicables se résolvent. Chaque entrée porte le champ, la raison pour laquelle il est nécessaire, son type schema, et toute contrainte utilisable par l'appelant pour construire une requête de suivi :

```
{
  "operation_status": "incomplete",
  "required_context": [
    { "field": "client.classification",
      "reason": "required by rul-sp-elig-highly-complex-retail",
      "type": "enum",
      "allowed_values": ["retail", "professional", "accredited"] }
  ]
}
```

Si l'opération est complete, la réponse retourne le verdict métier applicable, les règles qui l'ont déterminé, la référence à la consultation, et une enveloppe signée qu'une frontière d'enforcement en aval peut vérifier :

```
{
  "operation_status": "complete",
  "verdict": "blocked",
  "cited_rules": ["rul-sp-elig-highly-complex-retail-block"],
  "dominating_rule_id": "rul-sp-elig-highly-complex-retail-block",
  "consultation_id": "cns-abc123",
  "normative_hash": "sha256:...",
  "signed_verdict": "eyJhbGciOiJFUzI1NiIsImtpZCI6..."
}
```

`verdict` est le résultat métier. Selon les règles applicables il peut être `allowed`, `blocked`, `approval_required`, `observe`, ou d'autres valeurs définies par la policy. Que la décision requière ou non une autorisation humaine est un résultat métier, pas une forme de réponse séparée.

`signed_verdict` est une enveloppe JWS contenant l'opération exacte permise (action, actor, resource, parameters), le résultat, et l'état normatif au moment de la décision. Une frontière d'enforcement en aval la vérifie contre le JWKS de Knowledge avant que l'action sous-jacente ne s'exécute. Voir [Enforcement](/enforcement) pour le modèle complet.

## Résolution progressive en pratique

À mesure que le contexte devient plus spécifique, les branches de policy non pertinentes disparaissent et Knowledge n'identifie plus que le contexte encore capable d'affecter le résultat.

**Appel 1.** L'appelant envoie ce qu'il a :

```
context: {
  "product.complexity": { value: "highly_complex", source: "product_master" }
}
```

Knowledge répond :

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.classification",
      reason: "required by rul-sp-elig-highly-complex",
      type: "enum",
      allowed_values: ["retail", "professional", "accredited"] }
  ] }
```

**Appel 2.** L'appelant ajoute la classification.

```
context: {
  ...,
  "client.classification": { value: "professional", source: "CRM" }
}
```

Knowledge répond :

```
{ operation_status: "incomplete",
  required_context: [
    { field: "client.knowledge_experience",
      reason: "required by rul-sp-elig-complex-professional-ke",
      type: "enum",
      allowed_values: ["insufficient", "sufficient"] }
  ] }
```

**Appel 3.** L'appelant ajoute le niveau K&E.

```
context: {
  ...,
  "client.knowledge_experience": { value: "insufficient", source: "client_dossier" }
}
```

Knowledge répond :

```
{ operation_status: "complete",
  verdict: "blocked",
  cited_rules: ["rul-sp-elig-complex-professional-ke"],
  consultation_id: "cns-..." }
```

## « Required » ne veut pas dire « une autre question »

Si Knowledge identifie `client.classification` comme encore requis, l'appelant décide où l'obtenir.

| D'où le contexte peut venir |
|---|
| Déjà disponible dans le dossier client ou le CRM |
| Calculé ailleurs dans les propres systèmes de l'appelant |
| Retourné par un vendor de vérification ou de screening |
| Extrait par un agent IA depuis un document ou une conversation existants |
| Réellement inconnu - demander à l'utilisateur |

**Knowledge détermine ce que la policy exige. L'appelant détermine comment l'obtenir.**

## Ce que « gouverné » veut dire

| Aspect | Ce que ça veut dire |
|---|---|
| **État de policy versionné** | Les changements affectant le verdict créent un état normatif immuable, pour qu'une décision reste liée à la version de policy utilisée au moment de l'évaluation |
| **Trace de décision** | Chaque consultation enregistre le contexte, les règles applicables, le résultat et l'état normatif derrière l'évaluation |
| **Approbations et overrides** | L'autorisation humaine et les exceptions sont des objets gouvernés explicites, pas des branches de workflow cachées |
| **Autorship gouvernée** | Les propriétaires de policy autorisés peuvent gérer les règles indépendamment des applications consommatrices, avec des changements gouvernés et versionnés |

Les décisions historiques restent liées à l'état normatif de la policy qui les a produites, permettant le replay et l'audit déterministes.

## Ce que Knowledge n'est pas

| Pas ça | Pourquoi |
|---|---|
| **Pas un moteur de workflow** | Knowledge détermine le résultat de la policy ; votre workflow ou agent détermine comment porter le processus plus loin. Ils coexistent |
| **Pas un vendor KYC** | Knowledge ne vérifie pas l'identité ni ne lance de PEP screening. Il consomme le résultat du vendor et applique la décision composite (résultat Verify + éligibilité produit + juridiction + policy commerciale + exceptions) |
| **Pas un RAG sur vos docs policy** | RAG retrouve du texte pertinent. Knowledge produit un verdict déterministe avec règles citées et une trace de décision reproductible. Voir la [page Agents IA](/ai-agents) pour le contraste complet |
| **Pas un rip-and-replace** | Knowledge s'insère à côté de votre stack existant selon plusieurs patterns. Voir [comment ça s'insère](/stack) |

## Le cycle de vie d'une décision

```lifecycle
step: L'appelant assemble le contexte actuellement disponible
step: POST /resolve avec action_type + context
step: Knowledge classe les règles applicables contre le contexte
branch-left-label: Incomplete
branch-left-1: required_context retourné
branch-left-2: L'appelant récupère, dérive ou demande le contexte manquant
branch-left-loop: Retour à /resolve
branch-right-label: Complete
branch-right-1: verdict + cited_rules + consultation_id + signed_verdict
branch-right-2: Frontière d'enforcement vérifie signature + bindings contre l'appel entrant
branch-right-3: L'appelant agit sur le verdict vérifié (exécuter · refuser · escalader · demander approbation · continuer)
end: Consultation préservée pour audit et replay
```

## Trois idées à retenir

**Knowledge détermine ce que la policy exige. Vos systèmes déterminent comment obtenir le contexte et exécuter le résultat.**

**L'appelant n'a pas besoin de connaître l'arbre de dépendances de la policy. Knowledge, si.**

**La complétude est transversale. Le résultat appartient à l'opération.**

## Voir aussi

| À lire ensuite | Pourquoi |
|---|---|
| [Agents IA](/ai-agents) | Comment un agent utilise `/resolve` comme tool |
| [Enforcement](/enforcement) | Le verdict signé, le modèle de confiance à quatre acteurs, chemins d'adoption |
| [Fonctionne avec votre stack](/stack) | Les cinq patterns d'insertion |
| [Design partner](/pilot) | L'engagement founding-partner : trois places sur une décision production |
