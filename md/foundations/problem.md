# The Problem

> Route: /foundations/problem

## Decisions live everywhere, and nowhere

Today, organizational decisions live nowhere in particular. They appear in fragments — scattered across Slack, email, Confluence, Jira, meetings, and verbal agreements. The action itself is executed elsewhere still: in a terminal, a cloud console, an automated system, or increasingly, by an AI agent.

On the moment, this dispersion is not a problem. Teams understand each other, the decision flows, the organization moves forward.

## Two problems, not one

The difficulty appears in two distinct moments.

**The governance gap — before the action.**
AI agents now make hundreds of implementation decisions per day. Which framework to use. Which dependency to add. Whether to follow the existing pattern or diverge. They act fast, but they act without organizational memory. The architecture decisions are in Confluence. The security constraints are in someone's head. The exceptions were discussed in Slack three months ago. The agent doesn't know any of this.

The result: code that works but violates unstated constraints. Dependencies that introduce legal risk. Patterns that contradict architecture choices nobody documented. Drift that compounds silently.

**The proof gap — after the decision.**
When something goes wrong — an incident, an audit, a regulatory inquiry — the organization must establish what was decided, by whom, and when. But the evidence is scattered. Messages in Slack, emails written after the fact, tickets modified multiple times, logs designed for diagnostics. Reconstruction replaces proof. And reconstruction, however rigorous, is never equivalent to proof.

## The common root

Both problems share the same root: **decisions are not treated as first-class organizational assets.**

They are not structured. They are not versioned. They are not queryable. They are not traceable. They are not provable.

They exist as ephemeral conversations — and when the conversation ends, the decision becomes invisible.

## What this costs

For engineering: agents that ignore constraints, architecture drift, repeated debates, incidents from invisible rules.

For compliance: audits that become investigations, individuals personally exposed, accountability that depends on narrative.

For the organization: decisions that cannot be governed before they happen, and cannot be proven after.

---

## FR

# Le Problème

> Route: /foundations/problem

## Les décisions vivent partout, et nulle part

Aujourd'hui, les décisions organisationnelles ne vivent nulle part en particulier. Elles apparaissent par fragments — dispersées entre Slack, email, Confluence, Jira, réunions et accords verbaux. L'action elle-même s'exécute ailleurs encore : dans un terminal, une console cloud, un système automatisé, ou de plus en plus, par un agent IA.

Sur le moment, cette dispersion n'est pas un problème. Les équipes se comprennent, la décision circule, l'organisation avance.

## Deux problèmes, pas un

La difficulté apparaît à deux moments distincts.

**Le déficit de gouvernance — avant l'action.**
Les agents IA prennent désormais des centaines de décisions d'implémentation par jour. Quel framework utiliser. Quelle dépendance ajouter. S'il faut suivre le pattern existant ou diverger. Ils agissent vite, mais sans mémoire organisationnelle. Les décisions d'architecture sont dans Confluence. Les contraintes de sécurité sont dans la tête de quelqu'un. Les exceptions ont été discutées sur Slack il y a trois mois. L'agent ne sait rien de tout ça.

Le résultat : du code qui fonctionne mais viole des contraintes non exprimées. Des dépendances qui introduisent un risque juridique. Des patterns qui contredisent des choix d'architecture que personne n'a documentés. Du drift qui s'accumule en silence.

**Le déficit de preuve — après la décision.**
Quand quelque chose tourne mal — un incident, un audit, une demande réglementaire — l'organisation doit établir ce qui a été décidé, par qui, et quand. Mais les preuves sont dispersées. Des messages dans Slack, des emails écrits après coup, des tickets modifiés plusieurs fois, des logs conçus pour le diagnostic. La reconstruction remplace la preuve. Et la reconstruction, aussi rigoureuse soit-elle, n'est jamais équivalente à la preuve.

## La racine commune

Les deux problèmes partagent la même racine : **les décisions ne sont pas traitées comme des actifs organisationnels de premier ordre.**

Elles ne sont pas structurées. Elles ne sont pas versionnées. Elles ne sont pas interrogeables. Elles ne sont pas traçables. Elles ne sont pas prouvables.

Elles existent comme des conversations éphémères — et quand la conversation se termine, la décision devient invisible.

## Ce que ça coûte

Pour l'engineering : des agents qui ignorent les contraintes, du drift d'architecture, des débats répétés, des incidents liés à des règles invisibles.

Pour la conformité : des audits qui deviennent des enquêtes, des individus personnellement exposés, une redevabilité qui dépend du récit.

Pour l'organisation : des décisions qui ne peuvent être ni gouvernées avant qu'elles arrivent, ni prouvées après.
