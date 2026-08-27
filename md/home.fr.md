---
title: Asplenz Knowledge - infrastructure policy gouvernée pour agents IA de décision
description: Laissez les agents décider. Gardez l'autorité policy hors du modèle. Knowledge permet aux agents IA de collecter le contexte et d'agir sur des décisions métier gouvernées par des règles sans faire eux-mêmes la détermination policy finale.
locale: fr
kicker: Infrastructure policy gouvernée pour agents IA de décision
---

# Laissez les agents décider. Gardez l'autorité policy hors du modèle.

Knowledge permet aux agents IA de collecter le contexte et d'agir sur des décisions métier gouvernées par des règles sans faire eux-mêmes la détermination policy finale. Les décisions sont déterministes, auditables, et peuvent être enforcées à la frontière du tool avec autorisation signée.

**[Voir comment l'enforcement fonctionne](/product/enforcement)** &nbsp; · &nbsp; **[Parlons-en](/contact)**

---

## Comment ça marche

```
Agent
   |  comprend le cas, extrait l'information,
   |  investigue, rassemble les preuves
   v
Knowledge
   |  détermine les règles applicables, identifie le contexte manquant,
   |  résout la précédence, retourne la décision policy
   |  ->  allowed  /  approval_required  /  blocked
   v
Décision humaine  (quand requise)
   |  exerce le jugement sur approval_required
   v
Point d'enforcement  (wrapper de tool, intercepteur MCP, PEP custom)
   |  vérifie que l'autorisation signée correspond à l'opération
   v
Business tool  (Stripe, core banking, EMR, ...)
```

**AI investigates. Knowledge decides. The tool boundary enforces.**

*"Knowledge décide"* veut dire que Knowledge fait la **détermination policy** - quelles règles s'appliquent, quel est le verdict déterministe, si une autorisation humaine est requise. L'agent décide de tout le reste : ce qu'il investigue, quelles preuves il rassemble, comment il communique avec l'utilisateur. La frontière du tool est où la décision policy devient un résultat exécutable.

---

## Où les décisions gouvernées comptent

Quatre situations où une décision mérite son propre cycle de vie gouverné, distinct du système qui la consomme.

**Agent Decisioning**
Agents IA qui investiguent un cas (remboursement client, dossier KYC, réclamation assurance, demande d'admission) et prennent une décision métier gouvernée par règles à partir d'un contexte partiel. L'agent orchestre l'investigation ; Knowledge détermine le résultat de façon déterministe. Voir [Pour équipes produit IA](/ai-agents).

**Review-Ready Gate**
Attrapez les défauts déterministes avant qu'ils atteignent les reviewers humains rares. Quand un cas arrive à un compliance officer, tout ce qui pouvait être décidé par règles l'a déjà été ; seuls les cas de jugement arrivent. Voir [Pour compliance officers](/automate-approvals).

**Progressive Journeys**
Un composant de la boucle agentique, pas une optimisation de formulaire. Le caller envoie ce qu'il a, Knowledge retourne les champs dont les policies applicables ont encore besoin, le caller les acquiert (depuis un système, un vendor, une extraction, ou l'utilisateur) et re-consulte. Les changements de policy shippent sans redéploiement des consumers - le caller auto-découvre les nouveaux champs requis.

**Decision Replay**
Reconstruisez l'état policy exact derrière une décision historique, des années plus tard. Chaque Consultation fige les règles applicables, les overrides, la précédence et le normative hash au moment de décision. La surface d'audit est déterministe, pas une approximation.

---

## Réel, pas vaporware

```python
from knowledge_runtime import governed_tool

@governed_tool(action="refund.execute", resource="tx", bind=["amount"])
def refund_customer(tx, amount):
    return refund_api_legacy(tx, amount)
```

L'agent propose l'action. Knowledge décide. Le tool s'exécute uniquement avec une autorisation signée valide qui bind à cette opération exacte. Shipped 2026-08. SDK Python + serveur MCP + JWS ES256.

**[Quickstart 5 min](/docs/quickstart-governed-tool)** &nbsp; · &nbsp; **[Knowledge comme serveur MCP](/docs/quickstart-knowledge-mcp)** &nbsp; · &nbsp; **[Spec Enforcement](/product/enforcement)**

---

## Comment ça s'insère dans votre stack existant

Vous avez déjà Drools, IBM ODM, DMN, ServiceNow, ou un moteur de règles custom ? **Gardez-les où ils font sens.**

Knowledge n'est pas un remplacement du paysage rules engines de l'entreprise. C'est pour une classe spécifique de décisions - celles qui méritent leur propre autorité policy gouvernée, indépendante des systèmes qui les consomment : agents qui ont besoin de résolution progressive de contexte, approbations avec frontières humain/machine explicites, état policy reproductible pour audit de niveau régulateur, ou actions qui nécessitent une autorisation cryptographiquement vérifiable à la frontière du tool.

**Knowledge s'insère à côté, pas au-dessus.** Voir les [patterns d'insertion](/product/integrations) : Overlay (ajouter une policy gouvernée autour d'un moteur legacy), Gate (exiger un verdict signé avant certaines actions), Shadow (évaluation parallèle sans autorité en production), Selective routing (nouveau scope sur Knowledge, reste sur legacy), Primary (greenfield). Voir [Integrations](/product/integrations) pour les surfaces MCP, SDK Python et REST.

---

## Donnez aux policies gouvernées un cycle de vie indépendant

Certaines décisions métier ne devraient pas appartenir à l'application, au workflow, ou à l'agent qui les exécute. Knowledge donne à ces décisions un cycle de vie gouverné indépendant : rédiger, approuver, versionner et rejouer les policies indépendamment des systèmes qui les consomment - qu'il y ait un seul caller ou plusieurs.

Le cycle de vie reste opérationnel via :

- **Authorship explicite** avec owner, chaîne d'approbateurs et governance log par Policy
- **Versioning immuable** à chaque changement de règle affectant le verdict (snapshots RuleVersion)
- **Approbations gouvernées** pour les verdicts qui exigent le jugement humain - `approval_required` est un verdict first-class, pas une annotation de workflow
- **Overrides et pauses** comme objets gouvernés, pas des branches cachées
- **Autorisation signée** pour qu'une frontière d'enforcement en aval puisse prouver la décision policy qui a autorisé une action (avec le caveat honnête que le placement architectural du PEP est la responsabilité du client)

**[Comment Knowledge s'insère chez vous](/pilot)** &nbsp; · &nbsp; **[Le modèle d'auditability](/product/auditability)**

---

## Design partner - cohorte founding Q4 2026

Nous travaillons avec trois partenaires founding sur des décisions production-relevantes. Une décision production-relevante, mode Shadow d'abord, critères de succès mesurables convenus d'entrée. Pricing founding-customer. Influence produit directe. Sortie propre si les chiffres ne tombent pas.

**Une place remplie** (vertical wealth, distribution produits structurés). **Deux places ouvertes** - une priorisée pour équipes qui construisent des agents IA de décision gouvernée, une flexible.

**[Postuler comme design partner](/pilot)** &nbsp; · &nbsp; **[contact@asplenz.com](mailto:contact@asplenz.com)**

---

**Asplenz Knowledge.** Infrastructure policy gouvernée pour agents IA de décision. Pour les décisions gouvernées par des règles qui doivent rester déterministes, auditables, et hors du modèle.
