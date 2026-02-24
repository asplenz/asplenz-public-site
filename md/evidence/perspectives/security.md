# Security Perspective

> Route: /evidence/perspectives/security

> This perspective is about **Evidence**, Asplenz's proof infrastructure. Looking for **Knowledge** (agent guardrails & decision governance)? [Go to Knowledge](/knowledge)

**For CISOs and security teams responsible for post-incident integrity.**

## The reality of your role

You operate in environments where compromise is assumed.

Attackers escalate privileges. Logs are erased, altered, or selectively preserved. By the time the incident is contained, traces are already incomplete.

Your challenge is not detection. It is establishing which facts still exist after the systems have been touched.

## Where Evidence fits

Evidence provides a passive, external layer of proof.

It does not detect attacks. It does not block actions. It does not secure infrastructure. It records declared facts outside the execution path and seals them in a way that makes later modification detectable, even if the originating systems are fully compromised.

Evidence exists to preserve post-incident integrity, not to prevent incidents.

## What Evidence provides to Security

- A passive channel to declare security-relevant facts
- Evidence sealed independently from security tooling
- Append-only integrity that survives administrative access
- Proof that remains verifiable after system compromise

Nothing more.

## What Evidence does not do

- Does not prevent or detect attacks
- Does not replace SIEM, EDR, or logging platforms
- Does not harden infrastructure
- Does not qualify intent or responsibility

Evidence is not part of the defensive stack. It is the witness that remains when defenses fail.

## After an incident, you can establish

Using Evidence, you can verify:

- Which facts were declared before, during, or after the incident
- When those facts were sealed
- Whether any trace was altered afterward

You no longer depend solely on logs that may have been cleaned or reconstructed.

## Why this matters for Security

Security tools operate inside the system they protect. When that system is compromised, their output becomes suspect.

Evidence introduces an external point of truth. It does not claim immunity. It provides detectability of tampering, which is the only property that survives total compromise.

This shifts post-incident discussions from "what do we believe?" to "what can we verify?".

## What Evidence changes

| Before | After |
|---|---|
| Traces are mutable | Facts are sealed externally |
| Integrity is assumed | Integrity is verifiable |
| Forensics depends on trust | Forensics starts from proof, not belief |

## Next

**View how facts are sealed** -- This example shows a post-incident timeline composed of sealed facts, their timestamps, and their integrity hashes, exactly as reviewed during security forensics.

---

## FR

# Perspective Securite

> Route: /evidence/perspectives/security

> Cette perspective concerne **Evidence**, l'infrastructure de preuve d'Asplenz. Vous cherchez **Knowledge** (guardrails agents & gouvernance decisionnelle) ? [Aller a Knowledge](/knowledge)

**Pour les RSSI et les equipes de securite responsables de l'integrite post-incident.**

## La realite de votre role

Vous operez dans des environnements ou la compromission est presumee.

Les attaquants pratiquent l'escalade de privileges. Les logs sont effaces, alteres ou preserves selectivement. Au moment ou l'incident est maitrise, les traces sont deja incompletes.

Votre defi n'est pas la detection. Il s'agit d'etablir quels faits existent encore apres que les systemes ont ete touches.

## Ou Evidence se situe

Evidence fournit une couche de preuve passive et externe.

Il ne detecte pas les attaques. Il ne bloque pas les actions. Il ne securise pas l'infrastructure. Il enregistre les faits declares en dehors du chemin d'execution et les scelle de maniere a rendre toute modification ulterieure detectable, meme si les systemes d'origine sont totalement compromis.

Evidence existe pour preserver l'integrite post-incident, non pour prevenir les incidents.

## Ce que Evidence apporte a la Securite

- Un canal passif pour declarer des faits pertinents pour la securite
- Des preuves scellees independamment des outils de securite
- Une integrite append-only qui survit aux acces administratifs
- Une preuve qui reste verifiable apres la compromission du systeme

Rien de plus.

## Ce que Evidence ne fait pas

- Ne previent ni ne detecte les attaques
- Ne remplace pas les plateformes SIEM, EDR ou de journalisation
- Ne durcit pas l'infrastructure
- Ne qualifie ni l'intention ni la responsabilite

Evidence ne fait pas partie de la stack defensive. C'est le temoin qui reste quand les defenses echouent.

## Apres un incident, vous pouvez etablir

En utilisant Evidence, vous pouvez verifier :

- Quels faits ont ete declares avant, pendant ou apres l'incident
- Quand ces faits ont ete scelles
- Si une trace quelconque a ete alteree par la suite

Vous ne dependez plus uniquement de logs qui pourraient avoir ete nettoyes ou reconstruits.

## Pourquoi cela compte pour la Securite

Les outils de securite operent a l'interieur du systeme qu'ils protegent. Lorsque ce systeme est compromis, leur sortie devient suspecte.

Evidence introduit un point de verite externe. Il ne pretend pas a l'immunite. Il offre une detectabilite de l'alteration, qui est la seule propriete survivant a une compromission totale.

Cela deplace les discussions post-incident de "que croyons-nous ?" a "que pouvons-nous verifier ?".

## Ce que Evidence change

| Avant | Apres |
|---|---|
| Les traces sont mutables | Les faits sont scelles de maniere externe |
| L'integrite est presumee | L'integrite est verifiable |
| La forensique depend de la confiance | La forensique part de la preuve, non de la croyance |

## Suivant

**Voir comment les faits sont scelles** -- Cet exemple montre une chronologie post-incident composee de faits scelles, de leurs horodatages et de leurs hachages d'integrite, exactement telle qu'examinee lors d'une analyse forensique de securite.
