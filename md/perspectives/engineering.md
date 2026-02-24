# Engineering Perspective

> Route: /perspectives/engineering

**For CTOs, system architects, and engineering leaders responsible for reliable systems and governed agent workflows.**

## The reality of your role

Your teams ship fast. Your agents ship faster.

AI coding agents generate PRs, refactor services, add dependencies, configure infrastructure. They follow instructions -- but not necessarily yours. Your architecture decisions live in Confluence pages nobody reads. Your security constraints are implicit. Your exceptions are invisible.

You don't have an execution problem. You have a governance problem.

## Where Knowledge fits

Knowledge provides a structured, queryable source of truth for your technical decisions.

It doesn't replace your tools. It doesn't block your agents. It gives them a system to consult before acting -- and gives you a system to verify what they did.

## What Knowledge provides to Engineering

- Architecture decisions -- structured, versioned, with reasoning
- Security invariants -- explicit, checkable by agents and CI
- Active rules -- configurable directives that agents follow
- Governed overrides -- exceptions that are approved, time-limited, traceable
- Human approvals -- for critical actions that need a checkpoint
- Usage references -- which rules were followed, diverged, by whom
- Real-time propagation -- agents learn about rule changes immediately

## What Knowledge does not do

- Does not block deployments (unless your CI calls `check()` and acts on it)
- Does not replace code review
- Does not make decisions for you
- Does not generate code

## After a PR, you can establish

Using Knowledge, you can verify:

- Which architecture decisions the agent consulted
- Which invariants were verified
- Which rules were followed or diverged (and why)
- Whether an approval was requested and by whom it was granted
- The complete Implementation Report with `knowledge://` references

Without asking the agent. Without reading Slack history. Without guessing.

## When proof matters

Some engineering decisions carry legal weight: production go-live, security exceptions, compliance overrides.

For those, Asplenz offers **Evidence** -- a cryptographic proof layer that seals decisions as immutable, independently verifiable facts. Evidence is separate from Knowledge. It exists for when accountability is questioned, not just governance.

## What Knowledge changes

| Before | After |
|---|---|
| Decisions are scattered across Confluence, Slack, and heads | Decisions are structured, versioned, and queryable |
| Agents code without context | Agents check rules before generating code |
| Exceptions are invisible | Exceptions are governed and approved |
| Reviews lack reasoning | Reviews include Implementation Reports with full traceability |

## Next

**Start free** -- Install the MCP server, create your first scope, and record your first decision.

---

## FR

# Perspective Engineering

> Route: /perspectives/engineering

**Pour les CTO, architectes systeme et leaders engineering responsables de systemes fiables et de workflows d'agents gouvernes.**

## La realite de votre role

Vos equipes livrent vite. Vos agents livrent encore plus vite.

Les agents de coding IA generent des PR, refactorent des services, ajoutent des dependances, configurent l'infrastructure. Ils suivent des instructions -- mais pas necessairement les votres. Vos decisions d'architecture vivent dans des pages Confluence que personne ne lit. Vos contraintes de securite sont implicites. Vos exceptions sont invisibles.

Vous n'avez pas un probleme d'execution. Vous avez un probleme de gouvernance.

## Ou Knowledge se situe

Knowledge fournit une source de verite structuree et interrogeable pour vos decisions techniques.

Il ne remplace pas vos outils. Il ne bloque pas vos agents. Il leur donne un systeme a consulter avant d'agir -- et il vous donne un systeme pour verifier ce qu'ils ont fait.

## Ce que Knowledge apporte a l'Engineering

- Decisions d'architecture -- structurees, versionnees, avec raisonnement
- Invariants de securite -- explicites, verifiables par les agents et le CI
- Regles actives -- directives configurables que les agents suivent
- Overrides gouvernes -- exceptions approuvees, limitees dans le temps, tracables
- Approbations humaines -- pour les actions critiques qui necessitent un checkpoint
- References d'usage -- quelles regles ont ete suivies, contournees, par qui
- Propagation temps reel -- les agents apprennent les changements de regles immediatement

## Ce que Knowledge ne fait pas

- Ne bloque pas les deploiements (sauf si votre CI appelle `check()` et agit en consequence)
- Ne remplace pas la code review
- Ne prend pas de decisions a votre place
- Ne genere pas de code

## Apres une PR, vous pouvez etablir

En utilisant Knowledge, vous pouvez verifier :

- Quelles decisions d'architecture l'agent a consultees
- Quels invariants ont ete verifies
- Quelles regles ont ete suivies ou contournees (et pourquoi)
- Si une approbation a ete demandee et par qui elle a ete accordee
- L'Implementation Report complet avec les references `knowledge://`

Sans interroger l'agent. Sans lire l'historique Slack. Sans deviner.

## Quand la preuve compte

Certaines decisions engineering ont un poids juridique : mise en production, exceptions securite, derogations de conformite.

Pour celles-ci, Asplenz propose **Evidence** -- une couche de preuve cryptographique qui scelle les decisions comme des faits immuables et verifiables de maniere independante. Evidence est separe de Knowledge. Il existe pour quand la redevabilite est remise en question, pas juste la gouvernance.

## Ce que Knowledge change

| Avant | Apres |
|---|---|
| Les decisions sont dispersees entre Confluence, Slack et les tetes | Les decisions sont structurees, versionnees et interrogeables |
| Les agents codent sans contexte | Les agents verifient les regles avant de generer du code |
| Les exceptions sont invisibles | Les exceptions sont gouvernees et approuvees |
| Les reviews manquent de raisonnement | Les reviews incluent des Implementation Reports avec tracabilite complete |

## Suivant

**Commencer gratuitement** -- Installez le serveur MCP, creez votre premier scope et enregistrez votre premiere decision.
