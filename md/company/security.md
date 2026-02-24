### **English Version**

**Security**

**Security and integrity are foundational to Asplenz products.** This page provides a high-level overview of our security posture.

---

**Data handling**

* All communication occurs over encrypted connections.
* Access to APIs requires authenticated credentials.
* Access control is role-based and scope-aware.
* Sensitive operations require appropriate authorization.

---

**Isolation**

* Knowledge and Evidence enforce logical isolation between scopes and tenants.
* Access to decision data is restricted according to defined roles and permissions.

---

**Integrity**

* **Knowledge** maintains versioned entries and traceable references.
* **Evidence** produces cryptographically verifiable proof artifacts designed for independent verification.

---

**Availability**
Systems are designed for high availability and operational continuity.

Failure modes are explicit:

* If Knowledge is unavailable, clients can define fail-open or fail-closed behavior in CI.
* Evidence verification can be performed independently using proof artifacts.

---

**Responsible disclosure**
Security concerns can be reported to:

**security@asplenz.com** We take responsible disclosure seriously and respond promptly to credible reports.

---

### **Version Française**

**Sécurité**

**La sécurité et l'intégrité sont les fondements des produits Asplenz.** Cette page présente un aperçu de notre posture de sécurité.

---

**Traitement des données**

* Toutes les communications s'effectuent via des connexions chiffrées.
* L'accès aux API nécessite des identifiants authentifiés.
* Le contrôle d'accès est basé sur les rôles (RBAC) et respecte les périmètres (scopes).
* Les opérations sensibles requièrent une autorisation appropriée.

---

**Isolation**

* Knowledge et Evidence imposent une isolation logique entre les périmètres et les clients (tenants).
* L'accès aux données décisionnelles est restreint selon les rôles et permissions définis.

---

**Intégrité**

* **Knowledge** maintient des entrées versionnées et des références traçables.
* **Evidence** génère des preuves cryptographiquement vérifiables, conçues pour une vérification indépendante.

---

**Disponibilité**
Les systèmes sont conçus pour une haute disponibilité et la continuité opérationnelle.

Les modes de défaillance sont explicites :

* Si Knowledge est indisponible, les clients peuvent définir un comportement "fail-open" ou "fail-closed" dans leur CI.
* La vérification d'Evidence peut être effectuée de manière indépendante à l'aide des artefacts de preuve.

---

**Divulgation responsable (Responsible disclosure)**
Les vulnérabilités ou problèmes de sécurité peuvent être signalés à :

**security@asplenz.com** Nous prenons la divulgation responsable très au sérieux et répondons rapidement aux rapports crédibles.