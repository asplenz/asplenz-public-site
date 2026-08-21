---
title: Automatisez les décisions routinières. Préparez le reste pour review humaine.
description: Straight-through approval pour les cas que votre policy sait décider. Escalation review-ready pour les cas qui exigent du jugement humain. Une couche policy décide lequel est lequel.
locale: fr
kicker: Pour les workflows d'approbation
ctaLabel: Devenir design partner
ctaHref: /pilot
---

La plupart des files d'approbation ne sont pas pleines de cas qui exigent du vrai jugement. Elles sont pleines de décisions routinières que la policy applicable sait déjà traiter, et de cas qui arrivent incomplets — où l'approver passe du temps à courir après l'information manquante avant de pouvoir décider.

Knowledge adresse les deux.

## La question de screening

> **Combien de requêtes votre équipe review chaque mois, et quel pourcentage est approuvé sans exiger de vrai jugement ?**

Si la réponse dépasse 60-70%, les cas routiniers dominent le calendrier du reviewer. Ce sont des cas qu'une couche policy peut résoudre de manière déterministe. Ce qui reste arrive au reviewer avec moins de bruit et plus de contexte.

## Deux résultats économiques

| Résultat | Ce que ça veut dire |
|---|---|
| **Décisions straight-through** | Les cas que la policy peut décider de manière déterministe ne sont plus dans la file de review. Le reviewer les voit uniquement en audit, pas dans son inbox |
| **Escalation review-ready** | Les cas qui exigent du jugement humain arrivent avec un dossier de décision complet : tout le contexte requis assemblé, toutes les règles applicables citées, la raison de l'escalation explicite. Le reviewer ouvre une seule page, pas un fil de back-and-forth |

Le second résultat compte parce qu'il neutralise l'objection *« nous ne voulons pas automatiser nos approvals »*. Gardez la décision humaine. Arrêtez juste de faire courir l'humain après des cas incomplets.

## Niveaux de maturité : la courbe d'adoption

Vous n'avez pas à démarrer à l'automation complète. Le même produit supporte un chemin d'adoption gradué :

| Niveau | Ce que fait Knowledge | Rôle humain |
|---|---|---|
| **1. Assist** | Récupère le contexte manquant (depuis les systèmes ou le requester), assemble un dossier complet | Le reviewer décide sur un dossier complet |
| **2. Recommend** | Ci-dessus, plus applique les règles et retourne un verdict recommandé avec règles citées | Le reviewer valide ou override |
| **3. Route** | Ci-dessus, plus classifie chaque cas (auto vs escalate vs block) | Le reviewer ne voit que les cas escaladés |
| **4. Decide** | Ci-dessus, plus prend la décision déterministe lui-même, enregistrée avec l'état normatif et la trace de consultation | Le reviewer gère les exceptions et les audits |

**Vous n'avez pas à démarrer au niveau 4.** La plupart des engagements démarrent à Assist ou Recommend, puis montent au fur et à mesure que le policy owner voit l'accord de décision que Knowledge atteint dans ses propres données. Ce qui distingue Knowledge au niveau 4 d'un rules engine classique n'est pas qu'il décide — c'est que chaque décision automatisée reste reproductible contre l'état exact de la policy qui l'a produite (voir [Gouvernance](/governance)).

## Un exemple concret : change management

Une change request arrive dans ServiceNow. Un agent (automation Jira, bot custom, LLM connecté via MCP, ce que l'org utilise) appelle Knowledge avant que la requête n'entre dans la file du CAB.

```
POST /knowledge/v1/resolve
{
  "action_type": "change_approval",
  "context": {
    "change.risk": { "value": "low", "source": "change_form" },
    "change.window": { "value": "standard", "source": "change_form" },
    "change.rollback_documented": { "value": true, "source": "change_form" }
  }
}
```

**Cas A — Knowledge renvoie `allowed` :**

```
{ operation_status: "complete",
  verdict: "allowed",
  cited_rules: ["rul-cab-standard-low-risk-preauthorized"],
  consultation_id: "cns-..." }
```

L'agent auto-approuve le change, enregistre la consultation, notifie le requester. Le CAB ne le voit jamais.

**Cas B — Knowledge renvoie `incomplete` :**

```
{ operation_status: "incomplete",
  required_context: [
    { field: "change.rollback_tested",
      reason: "required by rul-cab-medium-risk-rollback",
      type: "boolean" }
  ] }
```

L'agent cherche la réponse dans CI/CD, dans les trailers de commit git, dans le ticket de release. Si aucun ne répond, il demande au requester directement. Puis rappelle `/resolve`.

**Cas C — Knowledge renvoie `approval_required` :** c'est le verdict au niveau API que Knowledge utilise pour signaler *« ce cas doit atteindre votre processus d'approbation »*. La policy n'esquive pas la décision humaine — elle lui passe le cas, avec le dossier de décision complet.

```
{ operation_status: "complete",
  verdict: "approval_required",
  cited_rules: ["rul-cab-medium-risk-manual-approval"],
  consultation_id: "cns-..." }
```

L'agent route le cas vers le CAB **avec le dossier de décision complet** : requête d'origine, tout le contexte assemblé (depuis les systèmes et le requester), règles qui ont rendu ce cas soumis au jugement humain. Le membre du CAB ouvre une seule page, décide, passe au suivant.

## Où ça s'applique

Le même pattern s'applique à tout workflow avec un backlog de requêtes routées à travers une approbation humaine :

| Workflow | Les cas routiniers qui remplissent la file |
|---|---|
| **IT change management** | Changes standards à faible risque, catégories pre-authorised |
| **Approbation de dépenses** | Spend sous seuil, T&E policy-compliant |
| **Achats / bons de commande** | Vendor approuvé + montant sous seuil |
| **Service requests** | Accès à des ressources standards, provisioning role-based |
| **Refund et gestion de dispute** | Refunds sous seuil, raisons de dispute standards |
| **Requêtes RH** | Congés standards, notes de frais, changements de rôle dans la bande |

## En quoi c'est différent d'un moteur de workflow

Un moteur de workflow (ServiceNow, Jira, Camunda) peut router une requête et la gater sur une étape d'approbation. Il ne peut pas décider si le cas est routinier ou judgment-heavy — cette décision doit être prise explicitement quelque part.

Aujourd'hui ce « quelque part » est souvent un mélange de seuils hard-codés, de tribal knowledge et du jugement du reviewer appliqué à échelle. Knowledge le met dans une couche de décision gouvernée :

- Le seuil pour auto-approval est une règle, pas un commentaire dans la config du workflow.
- L'état de la policy au moment de la décision est capturé, donc une décision de plusieurs mois peut être reproduite.
- Les raisons pour lesquelles un cas exige du jugement humain sont explicites et citées sur l'escalation.

Voir [Comparer](/vs) pour la comparaison complète vs un moteur de workflow ou rules engine.

## Forme de déploiement

Deux patterns d'adoption fittent naturellement ce use case (voir [Votre stack](/stack) pour le tableau complet) :

| Pattern | Où Knowledge se place |
|---|---|
| **Gate** | Les requêtes arrivent sur Knowledge avant d'entrer dans la file d'approbation. Les cas straight-through sautent la file, les cas escaladés arrivent déjà qualifiés |
| **Overlay** | Le workflow existant continue de tourner. Knowledge est appelé depuis la task d'approbation, décide route vs escalate, attache le dossier de décision pour le reviewer |

Les deux préservent le moteur de workflow existant et les rôles reviewer existants.

## À quoi ressemble un engagement design-partner ici

Un scope borné — un type d'approval spécifique dans une équipe spécifique — modélisé avec vos policy owners, tournant à côté du processus actuel pendant huit semaines. Ce qu'on mesure ensemble à la fin :

- **Pourcentage de cas résolus straight-through** vs encore routés à un reviewer.
- **Temps jusqu'à la décision** pour les cas routés (dossier complet vs back-and-forth actuel).
- **Temps reviewer récupéré** — combien du calendrier du reviewer l'automation a libéré.
- **Temps de reconstruction d'audit** pour une décision historique.

Voir [Design partner](/pilot) pour comment l'engagement est scopé.

## Deux niveaux du même mot

« Approval » apparaît à deux niveaux dans Knowledge et ça vaut la peine de les nommer :

- **Votre processus d'approbation** — le workflow que votre organisation opère (CAB, expense approver, comité procurement). Cette page parle de la forme de ce processus et de où Knowledge s'y insère.
- **`approval_required` (un verdict)** — la valeur que Knowledge renvoie quand les règles applicables exigent explicitement du jugement humain. C'est la surface API qui route un cas vers votre processus d'approbation. Knowledge peut soit le lever comme une `ApprovalRequest` first-class gérée à l'intérieur de Knowledge (le décideur signe dans l'UI back-office), soit le repasser à l'appelant pour que celui-ci route vers un processus externe existant (CAB, ticketing, workflow).

Les deux ne sont pas des concepts en concurrence. Le verdict est le mécanisme, le processus est ce vers quoi il route.

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le contrat `/resolve` derrière la décision auto vs escalate |
| [Agents IA](/ai-agents) | Comment un agent appelle Knowledge avant de router vers un reviewer |
| [Votre stack](/stack) | Les patterns Gate et Overlay en détail |
| [Design partner](/pilot) | Trois places founding, un flux d'approval production, pricing founding-customer |
