---
title: Automatisez les décisions routinières. Préparez le reste pour review humaine.
description: Straight-through approval pour les cas que votre policy sait décider. Escalation review-ready pour les cas qui exigent du jugement humain. Une couche policy décide lequel est lequel.
locale: fr
kicker: Pour les workflows d'approbation
ctaLabel: Devenir design partner
ctaHref: /pilot
---

La plupart des files d'approbation ne sont pas pleines de cas qui exigent du vrai jugement. Elles sont pleines de décisions routinières que la policy applicable sait déjà traiter, et de cas qui arrivent incomplets — où l'approver passe du temps à courir après l'information manquante avant de pouvoir décider.

**Knowledge ne remplace pas votre processus d'approbation. Il réduit ce qui doit y arriver — et aide les cas qui exigent encore du jugement à arriver avec le contexte et la justification policy nécessaires pour décider.**

## Les questions de screening

Deux questions que nous posons tôt dans une conversation design-partner :

- **Combien de requêtes votre équipe review chaque mois, et quel pourcentage est approuvé sans exiger de vrai jugement ?**
- **Combien de temps reviewer chaque cas consomme-t-il avant que le jugement réel soit fait ?**

La première expose l'opportunité straight-through — les cas que la policy pourrait résoudre sans humain. La seconde expose l'opportunité review-ready — la préparation et la chasse à l'information qui grignotent le temps d'un reviewer avant la décision réelle. Deux surfaces économiques, deux économies.

## Deux résultats économiques

| Résultat | Ce que ça veut dire |
|---|---|
| **Décisions straight-through** | Les cas que la policy peut décider de manière déterministe ne sont plus dans la file de review. Le reviewer les voit uniquement en audit, pas dans son inbox |
| **Escalation review-ready** | Les cas qui exigent du jugement humain arrivent avec un dossier de décision complet : tout le contexte requis assemblé, toutes les règles applicables citées, la raison de l'escalation explicite. Le reviewer ouvre une seule page, pas un fil de back-and-forth |

Le second résultat compte parce qu'il neutralise l'objection *« nous ne voulons pas automatiser nos approvals »*. Gardez la décision humaine. Arrêtez juste de faire courir l'humain après des cas incomplets.

## Niveaux d'adoption : combien d'autorité vous donnez au workflow

Knowledge fait la même chose à chaque niveau d'adoption : il retourne `required_context` ou un `verdict` avec règles citées. Ce qui change à travers les niveaux, c'est **combien d'autorité votre workflow s'accorde en agissant sur la réponse de Knowledge**.

| Niveau | Ce que fait votre workflow avec la réponse de Knowledge | Rôle du reviewer |
|---|---|---|
| **1. Prepare** | Utilise `required_context` pour construire un dossier complet — assemblé depuis les systèmes, l'extraction agent ou le requester | Le reviewer décide sur un dossier complet |
| **2. Recommend** | Présente le verdict de Knowledge et les règles citées au reviewer comme recommandation | Le reviewer valide ou override |
| **3. Route** | Utilise le verdict pour classifier chaque cas — `allowed` saute la file, `approval_required` escalade, `blocked` refuse | Le reviewer ne voit que les cas escaladés |
| **4. Execute** | Auto-avance pour les cas où Knowledge renvoie `allowed`, enregistre la consultation pour l'audit | Le reviewer gère les exceptions et les audits |

**La plupart des engagements démarrent à Prepare ou Recommend** puis montent au fur et à mesure que le policy owner voit l'accord de décision que Knowledge atteint dans ses propres données. Ce qui distingue Knowledge d'un rules engine classique au niveau 4 n'est pas que le workflow peut auto-exécuter — c'est que chaque décision exécutée reste reproductible contre l'état exact de la policy qui l'a produite (voir [Gouvernance](/governance)).

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

Le workflow ServiceNow est configuré pour laisser les cas `allowed` passer à l'exécution sans review CAB, et pour enregistrer la consultation pour l'audit. Knowledge lui-même n'approuve ni n'exécute — il fournit le verdict gouverné sur lequel le workflow agit. Le CAB ne voit jamais le cas.

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

**C'est ce second mécanisme qui rend possible l'escalation review-ready.** Un moteur de workflow traditionnel peut router une requête vers un approver. Seule une couche policy peut dire *« avant que ceci n'atteigne qui que ce soit, voici ce que les règles applicables exigent encore »* — et laisser l'appelant assembler cette information depuis les systèmes, l'extraction agent ou le requester, sans hard-coder un arbre de questions fixe.

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
| **Credit et lending review** | Dossiers standard-tier qui matchent la policy de crédit |
| **Underwriting** | Profils de risque standards dans le mandat de l'underwriter |
| **Review d'exception KYC / KYB** | Exceptions sur des chemins que la policy accommode déjà |
| **Approbation investment ou produit** | Positions standard-mandate dans des limites pre-authorised |
| **Exceptions compliance** | Catégories d'exception récurrentes avec un rationale établi |
| **Exceptions sécurité** | Requêtes standards d'accès, firewall ou bypass qui matchent la policy |
| **Screening recrutement** | Candidats dont le profil match un template de rôle approuvé |

Le meilleur fit n'est pas nécessairement le workflow au plus haut volume — c'est celui où l'équation **volume × coût du reviewer × proportion de cas déterministes × coût du délai** produit le plus grand nombre. Cent CAB reviews qui consomment des senior engineers peuvent dominer dix mille validations de notes de frais.

## En quoi c'est différent d'un moteur de workflow

Un moteur de workflow (ServiceNow, Jira, Camunda) peut encoder des conditions qui déterminent si un cas passe directement ou atteint un approver. La question est où cette logique de décision devrait vivre quand elle devient complexe, fréquemment changée, réutilisée à travers plusieurs workflows, ou a besoin d'une gouvernance et d'un replay indépendants.

**Knowledge sépare la logique de décision du workflow qui agit dessus.** Le workflow continue d'orchestrer le processus. Knowledge tient la policy qui décide quels cas sont routiniers, lesquels exigent du jugement, et quel contexte ils ont besoin — comme règles gouvernées, versionnées, auditables plutôt que comme conditions de config workflow :

- Le seuil qui détermine auto vs escalate est une règle, pas une condition dans la config workflow.
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
