[VERSION EN]

### **Engineering Perspective**

For CTOs and system architects responsible for reliable systems and long-term integrity.

**The reality of your role**

You design systems that must evolve.

They change, scale, are patched, reconfigured, and operated by many hands. They must allow correction, rollback, override, and deletion to remain usable. Yet you are often asked to prove, after the fact, what those systems did and why.

Your challenge is not execution. It is producing proof from systems that cannot be frozen.

**Where Horizon fits**

Horizon provides a separate infrastructure for proof.

It does not participate in execution. It does not validate flows. It does not enforce models or workflows. It receives declared facts and seals them outside your operational systems, so proof does not depend on the mutability of production infrastructure.

Horizon exists to resolve a structural conflict: systems that act cannot also be their own immutable record.

**What Horizon provides to Engineering**

* A passive API to declare facts
* No dependency in the execution path
* No imposed schema or workflow
* Append-only integrity handled externally
* Nothing more.

**What Horizon does not do**

* Does not validate actions
* Does not store secrets or business data
* Does not replace logs or observability tools
* Does not impose runtime constraints

Horizon is not an operational component. It is an external evidence layer.

**After an incident, you can establish**

Using Horizon, you can verify:

* What was declared by your systems or operators
* When it was sealed
* Whether it was altered afterward

Without hardening logs, freezing databases, or rebuilding audit pipelines.

**Why this matters for Engineering**

Building systems that act is already complex. Building systems that must also prove their own past creates a conflict of responsibility.

Horizon removes that burden. By externalizing proof, you keep operational systems flexible while ensuring that declared facts remain verifiable over time.

**What Horizon changes**

Before Horizon:

* Proof is embedded in mutable systems
* Integrity relies on access control
* Architects carry the burden of immutability

With Horizon:

* Proof is externalized
* Integrity is verifiable independently
* Responsibility for immobility is removed from production systems

**Next**

**View how facts are sealed**
This example shows how a declared fact is sealed, timestamped, and appended to an immutable chain, without impacting system execution.

**Editorial note (do not display)**
This page intentionally avoids: claims of performance or scalability, promises of security, overlap with logging or observability products. It exists to let engineering leaders see Horizon as a structural separation, not another moving part.

---

[VERSION FR]

### **Perspective Engineering**

Pour les CTO et architectes système responsables de la fiabilité des systèmes et de l'intégrité à long terme.

**La réalité de votre rôle**

Vous concevez des systèmes qui doivent évoluer.

Ils changent, montent en charge, sont patchés, reconfigurés et opérés par de nombreuses mains. Ils doivent permettre la correction, le rollback, l'override et la suppression pour rester utilisables. Pourtant, on vous demande souvent de prouver, après coup, ce que ces systèmes ont fait et pourquoi.

Votre défi n'est pas l'exécution. C'est de produire des preuves à partir de systèmes qui ne peuvent pas être figés.

**Où Horizon se situe**

Horizon fournit une infrastructure de preuve séparée.

Il ne participe pas à l'exécution. Il ne valide pas les flux. Il n'impose ni modèles ni workflows. Il reçoit les faits déclarés et les scelle en dehors de vos systèmes opérationnels, de sorte que la preuve ne dépend pas de la mutabilité de l'infrastructure de production.

Horizon existe pour résoudre un conflit structurel : les systèmes qui agissent ne peuvent pas être en même temps leur propre enregistrement immuable.

**Ce que Horizon apporte à l'Engineering**

* Une API passive pour déclarer des faits
* Aucune dépendance dans le chemin d'exécution
* Aucun schéma ou workflow imposé
* Une intégrité append-only gérée de manière externe
* Rien de plus.

**Ce que Horizon ne fait pas**

* Ne valide pas les actions
* Ne stocke pas de secrets ou de données métier
* Ne remplace pas les logs ou les outils d'observabilité
* N'impose pas de contraintes au runtime

Horizon n'est pas un composant opérationnel. C'est une couche de preuve externe.

**Après un incident, vous pouvez établir**

En utilisant Horizon, vous pouvez vérifier :

* Ce qui a été déclaré par vos systèmes ou opérateurs
* Quand cela a été scellé
* Si cela a été altéré par la suite

Sans durcir les logs, figer les bases de données ou reconstruire des pipelines d'audit.

**Pourquoi cela compte pour l'Engineering**

Construire des systèmes qui agissent est déjà complexe. Construire des systèmes qui doivent également prouver leur propre passé crée un conflit de responsabilité.

Horizon supprime ce fardeau. En externalisant la preuve, vous maintenez la flexibilité des systèmes opérationnels tout en garantissant que les faits déclarés restent vérifiables dans le temps.

**Ce que Horizon change**

Avant Horizon :

* La preuve est intégrée dans des systèmes mutables
* L'intégrité repose sur le contrôle d'accès
* Les architectes portent le fardeau de l'immuabilité

Avec Horizon :

* La preuve est externalisée
* L'intégrité est vérifiable indépendamment
* La responsabilité de l'immobilité est retirée des systèmes de production

**Suivant**

**Voir comment les faits sont scellés**
Cet exemple montre comment un fait déclaré est scellé, horodaté et ajouté à une chaîne immuable, sans impact sur l'exécution du système.

**Note éditoriale (ne pas afficher)**
Cette page évite intentionnellement : les affirmations de performance ou de scalabilité, les promesses de sécurité, le chevauchement avec les produits de logging ou d'observabilité. Elle existe pour permettre aux leaders techniques de voir Horizon comme une séparation structurelle, pas comme une pièce mobile supplémentaire.