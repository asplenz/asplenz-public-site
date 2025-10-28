export type Locale = 'fr' | 'en';

export const dict = {
  fr: {
    brand: 'Asplenz',
    hero_title: 'Validation continue et traçabilité de confiance pour l’IA',
    hero_lead: 'Nous aidons les entreprises à valider, tracer et prouver la fiabilité de leurs modèles d’IA, de manière continue et vérifiable.',
    hero_claim: 'La confiance dans l’IA ne se décrète pas, elle se démontre.',
    contact_btn: 'Planifier un échange',

    phases_title: 'Une validation continue en deux phases',
    p1_title: 'Phase 1 : Mise en place de la validation continue',
    p1_text: 'Objectif : structurer, documenter et exposer vos processus de validation IA de manière claire, reproductible et traçable.',
    p1_list_1: 'Vos outils et scripts existants',
    p1_list_2: 'Modules de validation Asplenz (fairness, dérive, robustesse, explicabilité)',
    p1_list_3: 'Approche mixte',
    p1_result: 'Résultat',
    p1_result_text: 'environnement de validation propre, auditable et prêt à automatiser.',

    p2_title: 'Phase 2 : Connexion pilote à la plateforme Asplenz Horizon',
    p2_text: 'Une fois les validations structurées et stabilisées, participation à une phase pilote (en développement).',
    p2_list_1: 'Collecte automatisée des validations',
    p2_list_2: 'Signature cryptographique et Trust Ledger',
    p2_list_3: 'Validation continue attestée',
    p2_list_4: 'Co‑conception du futur produit',
    p2_note: 'Accès pilote : réservé aux clients du programme Readiness. Non inclus dans l’offre standard.',

    cta_title: 'Engager une collaboration avec Asplenz',
    cta1_title: '1. Atelier « Diagnostic de validation IA »',
    cta1_text: 'Session exploratoire de 1 à 2 heures pour comprendre vos pratiques, identifier vos priorités et définir un plan d’action sur mesure.',
    cta1_deliverable: 'Livrable',
    cta1_btn: 'Planifier un appel',

    cta2_title: '2. Programme complet « AI Validation Readiness »',
    cta2_text: 'Accompagnement sur 4 à 6 semaines : audit, structuration, exposition des validations, blueprint et plan d’évolution.',
    cta2_deliverables: 'Livrables',
    cta2_btn: 'Demander une proposition',

    cta3_title: '3. Phase pilote Horizon (optionnelle)',
    cta3_text: 'Pour expérimenter la validation continue et la traçabilité cryptographique. Participation sur sélection, en collaboration directe avec Asplenz.',
    cta3_btn: 'Manifester votre intérêt',

    contact_title: 'Contact',
    contact_intro: 'Pour toute demande ou information :',
    contact_email: 'contact@asplenz.com',
    contact_or: 'ou utilisez le formulaire ci-dessous.',
    form_name: 'Nom',
    form_email: 'Email',
    form_company: 'Entreprise',
    form_message: 'Message',
    form_send: 'Envoyer',
    form_sending: 'Envoi en cours…',
    form_sent: 'Message envoyé. Nous revenons vers vous sous 48 h.',
    form_error: 'Erreur',
    form_policy: 'En soumettant ce formulaire vous acceptez que vos informations soient utilisées pour vous recontacter.',

    footer_rights: 'Tous droits réservés.'
  },
  en: {
    brand: 'Asplenz',
    hero_title: 'Continuous validation and trusted traceability for AI',
    hero_lead: 'We help enterprises validate, track and prove the reliability of their AI models in a continuous, verifiable way.',
    hero_claim: 'AI trust is not declared — it’s demonstrated.',
    contact_btn: 'Book a call',

    phases_title: 'A two‑phase approach to continuous validation',
    p1_title: 'Phase 1: Establish continuous validation',
    p1_text: 'Goal: structure, document, and expose your AI validation processes in a clear, reproducible, and traceable way.',
    p1_list_1: 'Your existing tools and scripts',
    p1_list_2: 'Asplenz validation modules (fairness, drift, robustness, explainability)',
    p1_list_3: 'Hybrid approach',
    p1_result: 'Outcome',
    p1_result_text: 'clean, auditable environment ready for automation.',

    p2_title: 'Phase 2: Pilot connection to Asplenz Horizon',
    p2_text: 'Once validations are structured and stable, participate in a pilot (in development).',
    p2_list_1: 'Automated collection of validations',
    p2_list_2: 'Cryptographic signing and Trust Ledger',
    p2_list_3: 'Attested continuous validation',
    p2_list_4: 'Co‑design of the future product',
    p2_note: 'Pilot access: limited to Readiness clients. Not part of the standard offer.',

    cta_title: 'Work with Asplenz',
    cta1_title: '1. Workshop “AI Validation Diagnostic”',
    cta1_text: 'A 1–2 hour exploratory session to understand your practices, identify priorities, and define a tailored plan.',
    cta1_deliverable: 'Deliverable',
    cta1_btn: 'Book a workshop',

    cta2_title: '2. Full “AI Validation Readiness” program',
    cta2_text: 'A 4–6 week engagement: audit, structuring, API exposure, blueprint and evolution plan.',
    cta2_deliverables: 'Deliverables',
    cta2_btn: 'Request a proposal',

    cta3_title: '3. Horizon pilot (optional)',
    cta3_text: 'Experiment with continuous validation and cryptographic traceability. Participation by selection, in direct collaboration with Asplenz.',
    cta3_btn: 'Express interest',

    contact_title: 'Contact',
    contact_intro: 'For any request or information:',
    contact_email: 'contact@asplenz.com',
    contact_or: 'or use the form below.',
    form_name: 'Name',
    form_email: 'Email',
    form_company: 'Company',
    form_message: 'Message',
    form_send: 'Send',
    form_sending: 'Sending…',
    form_sent: 'Message sent. We’ll get back to you within 48h.',
    form_error: 'Error',
    form_policy: 'By submitting this form you agree to be contacted regarding your request.',

    footer_rights: 'All rights reserved.'
  }
} as const;
