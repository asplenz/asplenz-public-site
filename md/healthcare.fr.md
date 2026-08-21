---
title: Une couche de policy gouvernée pour les décisions healthcare de couverture, claims et approbation.
description: Knowledge évalue les policies healthcare encodées par votre organisation, identifie le contexte encore requis pour atteindre une décision, et retourne un verdict gouverné — sans remplacer votre claims platform, vos systèmes cliniques ni vos workflows.
locale: fr
kicker: Knowledge pour le Healthcare
ctaLabel: Devenir design partner
ctaHref: /pilot
---

Les décisions healthcare dépendent rarement d'une seule règle.

Qu'un payer ou TPA évalue une couverture, traite un claim, gère une demande d'approbation ou décide si un cas requiert une review humaine, le résultat peut dépendre d'une combinaison d'éligibilité membre, de benefit design, de conditions provider, de règles de service, d'exigences de documentation, de plan limits, d'exclusions et d'exceptions.

Ces policies doivent souvent être appliquées à travers plusieurs systèmes et points de décision.

Knowledge donne aux payers et TPAs une couche de policy gouvernée que leurs claims platforms, workflows, équipes opérationnelles et systèmes IA peuvent consulter — sans remplacer les systèmes qui gèrent déjà le processus.

## Ce que Knowledge apporte au healthcare

**Une couche de policy, plusieurs points de décision.** Claims platforms, workflows d'approbation, équipes opérationnelles, applications customer-service et agents IA peuvent consulter la même source policy gouvernée au lieu d'implémenter la logique de décision indépendamment.

**Résout les cas policy-driven de manière déterministe.** Knowledge évalue le contexte contre les policies encodées par votre organisation et retourne un verdict gouverné avec les règles qui l'ont déterminé.

**Identifie ce qui manque encore pour décider.** Quand le contexte disponible n'est pas suffisant, Knowledge retourne `required_context` identifiant l'information spécifique dont les policies applicables ont encore besoin.

**Sépare les cas déterministes des cas qui exigent du jugement.** Les policies encodées peuvent déterminer quand un cas peut être résolu à partir des faits disponibles et quand il doit être escaladé pour review humaine.

**Rend les décisions traçables.** Chaque consultation enregistre l'état de policy et les règles derrière le verdict, permettant aux décisions historiques d'être reconstruites plus tard.

## Les patterns de policy que Knowledge peut représenter

Les organisations healthcare opèrent sous différents frameworks réglementaires, structures de plans et modèles opérationnels. Knowledge ne prescrit pas ces policies.

Il fournit une façon gouvernée d'encoder et d'évaluer les patterns de décision récurrents qui les sous-tendent.

| Pattern de policy | Ce qu'il gouverne |
|---|---|
| **Éligibilité et couverture** | Si le membre, la policy, le benefit ou le service rentre dans les conditions de couverture applicables |
| **Complétude de l'information** | Quelle information ou documentation est requise avant que les policies applicables puissent rendre un verdict |
| **Conditions de plan et de benefit** | Limits, exclusions, conditions réseau, exigences spécifiques par benefit et autres règles de plan |
| **Règles de claims et d'approbation** | Les conditions encodées par l'organisation pour résoudre un claim ou une demande d'approbation |
| **Exceptions et escalation** | Quand une exception s'applique ou quand les policies encodées exigent une review additionnelle |
| **Routing vers review humaine** | Quand un cas ne peut ou ne doit pas être résolu automatiquement et doit être envoyé à un reviewer approprié |

Votre organisation possède le contenu policy réel. Knowledge fournit la couche de décision gouvernée à travers laquelle ces policies sont évaluées.

## Les décisions que Knowledge peut supporter

Une claims platform, un workflow d'approbation, une application opérationnelle ou un agent IA peut poser à Knowledge des questions telles que :

| Question | Ce que Knowledge retourne |
|---|---|
| **Ce cas satisfait-il les conditions de couverture encodées ?** | Un verdict déterministe basé sur les règles applicables d'éligibilité, de benefit, de provider et de service |
| **Y a-t-il assez d'information pour prendre une décision ?** | Soit un verdict complete, soit `required_context` identifiant ce dont les policies applicables ont encore besoin |
| **Des plan limits, exclusions ou exceptions s'appliquent-ils ?** | Le verdict résultant et les règles spécifiques qui l'ont déterminé |
| **Ce cas peut-il être résolu à partir de la policy encodée, ou requiert-il une review humaine ?** | Un verdict déterministe ou `approval_required` quand les règles de l'organisation exigent l'escalation |

Knowledge détermine ce que la policy encodée dit.

Votre claims platform, workflow, agent ou reviewer détermine ce qui se passe ensuite.

## L'appelant n'a pas besoin de connaître tout l'arbre de décision

Dans beaucoup de systèmes de décision, l'appelant doit savoir d'entrée quelle information un chemin de décision particulier exige.

Cela crée du couplage entre la policy et les systèmes qui collectent l'information.

Knowledge retire cette dépendance.

L'appelant fournit le contexte qu'il a déjà. Knowledge détermine si les policies applicables peuvent résoudre la décision et, sinon, quel contexte additionnel est requis.

Par exemple, un claim healthcare ou une demande d'approbation peut initialement contenir :

```
context: {
  "member_plan": { value: "PLAN-A", source: "eligibility_system" },
  "service_code": { value: "SERVICE-123", source: "claims_platform" },
  "provider_id": { value: "PROVIDER-456", source: "provider_directory" }
}
```

Les policies applicables peuvent exiger de l'information additionnelle avant de rendre un verdict.

Knowledge répond :

```
{
  "operation_status": "incomplete",
  "required_context": [
    { "field": "supporting_documentation_status",
      "reason": "required by applicable benefit policy" },
    { "field": "provider_network_status",
      "reason": "required by applicable coverage policy" }
  ]
}
```

Le système existant décide comment obtenir cette information — depuis un autre système, depuis le provider, depuis le membre, ou à travers un agent IA.

Il rappelle ensuite Knowledge avec le contexte enrichi.

```
{
  "operation_status": "complete",
  "verdict": "approval_required",
  "cited_rules": [
    "applicable-benefit-rule",
    "human-review-rule"
  ],
  "consultation_id": "cns-..."
}
```

Le workflow existant peut maintenant router le cas vers le reviewer approprié avec le contexte policy-relevant déjà assemblé.

Knowledge n'a pas collecté l'information, orchestré le workflow ni pris l'action opérationnelle.

Il a déterminé ce que la policy encodée exigeait et retourné le verdict correspondant.

## Réduire les reviews inutiles sans supprimer le jugement humain

Toutes les décisions healthcare ne devraient pas être automatisées.

L'objectif est de distinguer les cas qui peuvent être résolus à partir d'une policy explicite de ceux qui exigent réellement un jugement humain. Pour chaque cas entrant, Knowledge produit un de trois outcomes :

```outcomes
source: Knowledge évalue le cas
outcome: incomplete + required_context | Les policies applicables ont encore besoin d'information spécifique. Le système existant l'obtient (depuis un système source, un provider, un agent IA ou le membre) et rappelle Knowledge
outcome: complete + verdict déterministe | Les policies encodées résolvent le cas sans review humaine. Le workflow existant agit sur le verdict
outcome: complete + approval_required | Les policies encodées routent explicitement le cas vers review humaine. Le workflow escalade avec le contexte policy-relevant déjà assemblé
```

Cela peut réduire la charge de review inutile tout en permettant à l'organisation de gouverner explicitement quels cas doivent rester chez les reviewers humains.

Pour les TPAs opérant à travers plusieurs payers et plans, le même modèle peut aussi maintenir différents ensembles de policies gouvernés séparément tout en exposant une interface de décision cohérente aux systèmes qui traitent les cas.

## Conçu pour les stacks healthcare existants

Knowledge n'est pas une claims platform, un système clinique ni un moteur de workflow.

Il se place à côté d'eux.

| Composant existant | Comment Knowledge s'insère |
|---|---|
| **Claims platform** | Appelle Knowledge à des points de décision définis tout en continuant à posséder le processing des claims et l'exécution |
| **Workflow payer / TPA** | Utilise les verdicts Knowledge et `required_context` pour déterminer comment le workflow existant se poursuit |
| **Exchange national ou régional** | Continue à transporter et standardiser les transactions ; Knowledge opère là où le payer ou TPA possède encore le decisioning policy |
| **Systèmes cliniques** | Restent la source d'information clinique ; Knowledge peut consommer le contexte structuré pertinent quand une policy encodée l'exige |
| **Agents IA** | Peuvent collecter le contexte et orchestrer le travail tout en consultant Knowledge pour des verdicts policy déterministes |
| **Logique de décision legacy** | Peut coexister avec Knowledge à travers les patterns d'adoption overlay, gate, shadow ou selective-routing |

[Voir comment Knowledge s'insère dans votre stack](/stack)

## Cinq façons d'introduire Knowledge

| Situation | Pattern d'adoption | Comment ça marche |
|---|---|---|
| **Capacité de décision existante, nouvelles policies à gouverner** | Overlay | Les résultats existants deviennent une partie du contexte pendant que Knowledge évalue des policies gouvernées additionnelles |
| **Une décision sélectionnée a besoin d'un contrôle gouverné** | Gate | Le système existant obtient un verdict Knowledge avant de décider comment le processus se poursuit |
| **Besoin de valider contre la logique actuelle d'abord** | Shadow | Knowledge évalue les mêmes cas en parallèle sans affecter les décisions production |
| **Nouveau plan, produit, marché ou domaine de décision** | Selective routing | Knowledge gère le nouveau scope de décision pendant que les flux existants restent inchangés |
| **Plateforme ou service greenfield** | Primary | Knowledge devient la couche de décision policy dès le début |

Cela permet à une organisation de démarrer par une décision plutôt que de remplacer son infrastructure healthcare existante.

## Ce qu'Asplenz fournit, ce que votre organisation possède

Asplenz fournit l'infrastructure policy : le modèle de décision, le versioning, l'évaluation déterministe, la résolution progressive de contexte et la surface d'audit.

Votre organisation possède les policies encodées dedans et détermine comment les verdicts de Knowledge sont utilisés.

**Knowledge évalue les policies que votre organisation a encodées. Il ne diagnostique pas les patients, ne recommande pas de traitement, ne détermine pas la nécessité médicale et ne remplace pas le jugement clinique.**

Il n'exécute pas non plus d'actions opérationnelles. Votre organisation reste responsable de ses policies et de savoir si un verdict Knowledge résulte en un traitement automatisé, une demande d'information additionnelle, une escalation ou une review humaine.

## Où nous démarrons

Nous explorons le Healthcare avec des payers et TPAs qui opèrent des processus policy-heavy de couverture, claims et approbation — particulièrement là où les plateformes existantes fonctionnent déjà mais où la logique de décision est difficile à gouverner, requiert une review inutile, dépend d'information incomplète, ou doit devenir accessible en sécurité à des workflows AI-driven.

Le focus initial est sur des organisations dans les marchés d'assurance GCC et asiatiques opérant des environnements complexes multi-plan ou multi-payer.

Plutôt que de remplacer le claims stack, l'objectif est simple :

**Commencez par une décision difficile. Encodez la policy applicable. Faites tourner Knowledge à côté du processus existant. Mesurez ce qui change.**

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Revues & approbations](/automate-approvals) | Séparer les cas que la policy peut résoudre des cas qui exigent réellement un jugement humain |
| [Demandez moins](/ask-less) | Utiliser `required_context` pour n'obtenir que l'information dont un chemin de décision particulier a réellement besoin |
| [Agents IA](/ai-agents) | Laisser les workflows AI-driven consulter une policy déterministe sans mettre l'interprétation de policy dans le LLM |
| [Comment fonctionne Knowledge](/how-it-works) | Le contrat `/resolve`, la gouvernance de policy et le modèle d'audit |
| [Fonctionne avec votre stack](/stack) | Les patterns d'adoption Overlay, Gate, Shadow, Selective Routing et Primary |
| [Design partner](/pilot) | Démarrer par une décision production avec des critères de succès mesurables |
