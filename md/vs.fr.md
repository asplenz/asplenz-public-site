---
title: Knowledge vs un rules engine traditionnel
description: Quand Knowledge et un rules engine résolvent des problèmes qui se chevauchent, et quand ils en résolvent de différents. Les propriétés spécifiques que Knowledge ajoute par-dessus l'évaluation de règles.
locale: fr
kicker: Positionnement
ctaLabel: Devenir design partner
ctaHref: /pilot
---

Si vous construisez une nouvelle couche de décision, la vraie question n'est pas « Knowledge ou Camunda DMN ou Drools ou un moteur maison ? » — mais « qu'est-ce que Knowledge fait qu'un rules engine seul ne fait pas ? »

Cette page trace la frontière.

## Ce qu'un rules engine vous donne

Tout rules engine crédible (moteurs DMN, Drools, OpenRules, un moteur in-house bien construit) fournit quatre choses :

- **Un modèle de règles** — une façon structurée d'exprimer de la logique IF-THEN, des tables de décision, de la priorité.
- **Un évaluateur** — prend un ensemble de faits, retourne un résultat.
- **Versioning des règles elles-mêmes** — vous savez quelle règle était active à quel moment.
- **Logs d'évaluations** — un enregistrement qu'une règle a matché contre un cas.

Pour un large éventail de problèmes d'automation, ça suffit. Si vos appelants savent déjà exactement quels faits envoyer, et que le résultat est une décision self-contained que personne n'a à reproduire des années plus tard, un rules engine est le bon outil.

## Ce que Knowledge ajoute par-dessus

Knowledge est construit pour la classe de décisions où les quatre points ci-dessus sont nécessaires mais pas suffisants. Cinq propriétés que Knowledge fournit qu'un rules engine seul ne fournit pas :

### 1. L'appelant n'encode pas l'arbre de dépendances

Avec un rules engine, l'appelant doit savoir quels faits envoyer. Si les règles applicables changent, chaque appelant doit être mis à jour pour envoyer les nouveaux faits requis.

Knowledge inverse ça. L'appelant envoie le contexte qu'il a. Knowledge retourne soit le verdict, soit **`required_context`** — les champs dont les policies applicables ont encore besoin. À mesure que les policies évoluent, les appelants continuent de marcher sans changement parce que l'arbre de dépendances vit dans Knowledge, pas dans chaque appelant.

Pour l'onboarding, les flux agent et les décisions multi-étapes, ça élimine une classe de couplage que les rules engines laissent en place.

### 2. Les faits portent leur provenance

Dans un rules engine, un fait est une valeur. Dans Knowledge, un fait est une valeur plus sa provenance :

```
{ "value": "verified",
  "source": "IDV_vendor",
  "verification_status": "verified",
  "confidence": 0.94 }
```

Les règles peuvent exiger un statut de vérification minimum ou restreindre les sources acceptables. Ça veut dire qu'une règle peut exprimer « l'identité doit être vérifiée par un vendor KYC, pas asserted par l'utilisateur » de manière déclarative, plutôt qu'en plomberie côté appelant.

Pour les flux AI-driven où le même fait peut venir d'une extraction LLM, d'un système de record ou de l'utilisateur directement, cette distinction est ce qui sépare un input probabiliste d'un input signé.

### 3. L'état normatif est capturé, pas juste le log

Un rules engine enregistre « la règle X a matché sur le cas Y au temps T ». Ce log vous dit ce qui s'est passé sur le moment. Il ne vous laisse pas nécessairement reproduire la décision exacte des mois plus tard, une fois que les règles, la précédence, les overrides et la configuration de scope ont tous évolué.

Knowledge écrit une Consultation qui pin les identifiants exacts de **RuleVersion**, la **règle dominante**, la **trace de précédence**, les **targets résolues**, le **scope utilisé**, et un **`normative_hash`** couvrant tout l'état normatif. Étant donné un `consultation_id`, la décision peut être reconstruite exactement — pas « le texte de la règle au moment du fire » mais tout l'état qui a produit le résultat. Voir [Gouvernance](/governance) pour le tableau complet.

### 4. Une interface policy, plusieurs appelants

Un rules engine vit typiquement à l'intérieur d'un système (un workflow, une application, un agent). Knowledge est conçu pour être appelé par plusieurs : formulaires web, apps mobiles, systèmes back-office, workflows, agents IA. La même couche policy répond à la même question de la même façon indépendamment de l'appelant.

Ça compte quand une firme a plus d'un canal qui exécute la même décision. Ça retire la dérive qui apparaît quand la même règle doit être ré-implémentée par appelant.

### 5. La décision est cryptographiquement enforcée à une frontière distincte de l'appelant

Les rules engines retournent des verdicts consultatifs. L'appelant peut les ignorer. Knowledge retourne chaque décision comme **artefact d'autorisation signé** (JWS ES256) qu'un Policy Enforcement Point en aval vérifie avant que l'action sous-jacente ne s'exécute. La signature est bindée à l'opération exacte (action, actor, resource, parameters), pour qu'un verdict autorisant `refund_execute(TX-456, 40 EUR)` ne puisse pas être réutilisé pour une autre transaction, un montant plus élevé, ou une action différente.

La conséquence : l'enforcement vit à la frontière du tool, pas dans la discrétion de l'appelant. Un agent qui hallucine, un workflow qui a un bug, ou un script qui saute le check ne peut pas exécuter une action gouvernée, parce que la frontière d'enforcement refuse sans verdict signé correspondant. Voir [Enforcement](/enforcement) pour le modèle complet, la chaîne de confiance à quatre acteurs, et les chemins d'adoption (décorateur SDK, proxy MCP, PEP custom).

## Quand un rules engine est le bon choix

Utilisez un rules engine (Camunda DMN, Drools, un moteur maison) quand :

- La décision est self-contained à l'intérieur d'un système.
- L'appelant peut énumérer les faits requis à l'avance.
- Vous n'avez pas besoin de reproduire l'état évalué exact des mois plus tard, seulement le texte de la règle.
- La provenance des faits ne fait pas partie de la décision.

Vous n'avez pas besoin de Knowledge pour ces cas. L'ajouter serait de l'over-engineering.

## Quand Knowledge est le bon choix

Choisissez Knowledge quand au moins un des points suivants s'applique :

- **Plusieurs appelants** — la même décision est demandée depuis plus d'une surface (application, workflow, agent, formulaire, file back-office), et vous ne voulez pas que chacune ré-implémente la policy.
- **Décisions progressives** — l'appelant commence avec un contexte partiel et a besoin de savoir ce qu'il doit obtenir ensuite, idéalement sans hard-coder l'arbre de dépendances.
- **Audit gouverné** — les décisions doivent être reproductibles dans leur état complet (règles, overrides, précédence, scope) des années après avoir été prises.
- **Agents IA** — un agent probabiliste a besoin d'une frontière policy déterministe à appeler avant d'exécuter.
- **Règles provenance-sensibles** — le résultat de la règle dépend de comment un fait a été obtenu (vérifié vs asserted, vendor vs extraction LLM).
- **Enforcement à la frontière** — les actions automatisées doivent être authorized de façon prouvée par la policy avant de s'exécuter, pas authorized par la promesse de l'appelant d'avoir checké. C'est là qu'un verdict signé plus un Policy Enforcement Point devient un contrôle de sécurité, pas une convention.

Un seul des cas ci-dessus suffit à déplacer la décision vers Knowledge. Les autres viennent en bonus.

## Peuvent-ils coexister ?

Oui, et c'est souvent le chemin pragmatique. Un rules engine existant continue de gérer son scope ; Knowledge gouverne un nouveau domaine de policy, un contrôle spécifique, ou une décision qui va au-delà de ce pour quoi le moteur a été conçu. Voir [Votre stack](/stack) pour les cinq patterns d'adoption (Overlay, Gate, Shadow, Selective routing, Primary) et comment ils se combinent.

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le contrat `/resolve` derrière les propriétés ci-dessus |
| [Enforcement](/enforcement) | Le verdict signé, le modèle de confiance à quatre acteurs, chemins d'adoption |
| [Gouvernance](/governance) | Ce que « l'état normatif » contient et comment le replay reconstruit une décision historique |
| [Votre stack](/stack) | Les cinq patterns pour adopter Knowledge à côté d'un rules engine existant |
| [Design partner](/pilot) | Trois places founding, une décision production, pricing founding-customer |
