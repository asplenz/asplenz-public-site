'use client'

import { useLang } from '@/lib/LangContext'

export default function FaqPage() {
  const { lang } = useLang()

  const content = {
    en: {
      title: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'What is Horizon?',
          a: 'Horizon is a proof infrastructure that captures and seals business decisions as they happen, creating an immutable, cryptographically-secured timeline.'
        },
        {
          q: 'Can I delete or modify a sealed fact?',
          a: 'No. The append-only architecture means no mechanism exists to modify or delete sealed facts. This is an architectural constraint, not a policy.'
        },
        {
          q: 'What does Horizon store?',
          a: 'Horizon stores your declarations (custom_payload), actor identifiers, authoritative timestamps, and hash chain links. It does not interpret or validate your data.'
        },
        {
          q: 'Can Horizon prove that an event actually happened?',
          a: 'No. Horizon proves that someone declared something at a specific time. It\'s a witness to declarations, not to reality. The truth of declarations requires independent verification.'
        },
        {
          q: 'How do I verify a proof bundle?',
          a: 'Verification requires only the bundle and Horizon\'s public key. Recompute hashes, verify the chain linkage, and verify the Ed25519 signature. No network access to Horizon is needed.'
        },
        {
          q: 'What happens if Horizon ceases to exist?',
          a: 'Exported proof bundles remain valid and verifiable forever. They are self-contained and only require the public key for verification.'
        },
        {
          q: 'Is my data secure?',
          a: 'Yes. Data is tenant-isolated at the architectural level, encrypted in transit and at rest, and your custom_payload is opaque to Horizon: we don\'t parse or analyze it.'
        },
        {
          q: 'Can I use Horizon for regulatory compliance?',
          a: 'Horizon provides the cryptographic foundation for compliance (immutable audit trail, authoritative timestamps, tamper detection). Your compliance program defines how to use it.'
        },
        {
          q: 'What are the deployment options?',
          a: 'SaaS (Horizon-managed), On-Premise (your infrastructure), and Air-Gapped (no external connectivity). All options provide identical cryptographic guarantees.'
        },
        {
          q: 'How do I integrate Horizon?',
          a: 'Start with the First Seal guide to seal your first fact in 5 minutes. Then see the API Reference for complete endpoint documentation.'
        },
      ]
    },
    fr: {
      title: 'Questions Fréquentes',
      faqs: [
        {
          q: 'Qu\'est-ce qu\'Horizon ?',
          a: 'Horizon est une infrastructure de preuve qui capture et scelle les décisions métier au moment où elles se produisent, créant une timeline immuable et sécurisée cryptographiquement.'
        },
        {
          q: 'Puis-je supprimer ou modifier un fait scellé ?',
          a: 'Non. L\'architecture append-only signifie qu\'aucun mécanisme n\'existe pour modifier ou supprimer les faits scellés. C\'est une contrainte architecturale, pas une politique.'
        },
        {
          q: 'Que stocke Horizon ?',
          a: 'Horizon stocke vos déclarations (custom_payload), les identifiants d\'acteurs, les horodatages faisant autorité, et les liens de chaîne de hachage. Il n\'interprète ni ne valide vos données.'
        },
        {
          q: 'Horizon peut-il prouver qu\'un événement s\'est réellement produit ?',
          a: 'Non. Horizon prouve que quelqu\'un a déclaré quelque chose à un moment spécifique. C\'est un témoin des déclarations, pas de la réalité. La véracité des déclarations nécessite une vérification indépendante.'
        },
        {
          q: 'Comment vérifier un bundle de preuve ?',
          a: 'La vérification ne nécessite que le bundle et la clé publique d\'Horizon. Recalculez les hachages, vérifiez le chaînage, et vérifiez la signature Ed25519. Aucun accès réseau à Horizon n\'est nécessaire.'
        },
        {
          q: 'Que se passe-t-il si Horizon cesse d\'exister ?',
          a: 'Les bundles de preuve exportés restent valides et vérifiables pour toujours. Ils sont autonomes et ne nécessitent que la clé publique pour la vérification.'
        },
        {
          q: 'Mes données sont-elles sécurisées ?',
          a: 'Oui. Les données sont isolées par tenant au niveau architectural, chiffrées en transit et au repos, et votre custom_payload est opaque pour Horizon : nous ne l\'analysons pas.'
        },
        {
          q: 'Puis-je utiliser Horizon pour la conformité réglementaire ?',
          a: 'Horizon fournit la base cryptographique pour la conformité (piste d\'audit immuable, horodatages faisant autorité, détection d\'altération). Votre programme de conformité définit comment l\'utiliser.'
        },
        {
          q: 'Quelles sont les options de déploiement ?',
          a: 'SaaS (géré par Horizon), On-Premise (votre infrastructure), et Air-Gapped (aucune connectivité externe). Toutes les options fournissent des garanties cryptographiques identiques.'
        },
        {
          q: 'Comment intégrer Horizon ?',
          a: 'Commencez par le guide Premier Scellement pour sceller votre premier fait en 5 minutes. Puis consultez la Référence API pour la documentation complète des endpoints.'
        },
      ]
    }
  }

  const t = content[lang]

  return (
    <article className="prose">
      <h1>{t.title}</h1>

      <div className="space-y-6 mt-8">
        {t.faqs.map((faq, idx) => (
          <div key={idx} className="border border-[var(--border)] rounded-lg overflow-hidden">
            <div className="bg-[var(--bg-card)] px-4 py-3">
              <h3 className="text-[var(--text-primary)] font-semibold m-0">{faq.q}</h3>
            </div>
            <div className="px-4 py-3 bg-[var(--bg-secondary)]">
              <p className="text-[var(--text-secondary)] m-0 text-sm">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
