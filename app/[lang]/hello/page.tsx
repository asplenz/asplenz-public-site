import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export default function HelloPage({
  params: _params,
}: {
  params: { lang: Language };
}) {
  // Page actuellement en français uniquement - params disponible pour future i18n
  return (
    <div className="min-h-screen bg-[#0b0f17] text-[#e5e7eb]">
      <div className="max-w-[1100px] mx-auto px-[18px] py-7">
        {/* NAV */}
        <div className="flex justify-between items-center gap-3.5 flex-wrap">
          <div className="font-bold tracking-wide">ASPLENZ <span className="text-[#9ca3af]">/ Horizon</span></div>
          <div className="flex gap-2.5 flex-wrap">
            <a className="inline-block px-3.5 py-2.5 border border-[#1f2937] rounded-xl text-[#60a5fa]" href="#how">Comment ça marche</a>
            <a className="inline-block px-3.5 py-2.5 border border-[#1f2937] rounded-xl text-[#60a5fa]" href="#usecases">Cas d&apos;usage</a>
            <a className="inline-block px-3.5 py-2.5 bg-[#60a5fa] text-[#08101d] border-transparent rounded-xl font-bold" href="#demo">Demander une démo</a>
          </div>
        </div>

        {/* HERO */}
        <section className="pt-14 pb-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
          <div>
            <div className="text-[#9ca3af] text-sm uppercase tracking-widest">Decision evidence • Regulated infrastructure</div>
            <h1 className="mt-2.5 mb-3 text-4xl lg:text-[44px] leading-tight font-bold">Quand une décision devient contestée, vos logs ne suffisent plus.</h1>
            <p className="text-[#9ca3af] text-lg leading-relaxed mb-4">
              <strong className="text-[#e5e7eb]">Horizon</strong> capture les faits décisionnels <strong className="text-[#e5e7eb]">au moment de l&apos;exécution</strong> et les rend
              <strong className="text-[#e5e7eb]"> immutables</strong>, <strong className="text-[#e5e7eb]">vérifiables</strong> et <strong className="text-[#e5e7eb]">auditables</strong>, indépendamment des systèmes source.
            </p>

            <div className="flex gap-2.5 flex-wrap mb-3.5">
              <span className="inline-flex gap-2 items-center px-2.5 py-1.5 border border-[#1f2937] rounded-full text-[13px] text-[#9ca3af]">Banques systémiques</span>
              <span className="inline-flex gap-2 items-center px-2.5 py-1.5 border border-[#1f2937] rounded-full text-[13px] text-[#9ca3af]">PSP &amp; paiements</span>
              <span className="inline-flex gap-2 items-center px-2.5 py-1.5 border border-[#1f2937] rounded-full text-[13px] text-[#9ca3af]">Market exchanges</span>
              <span className="inline-flex gap-2 items-center px-2.5 py-1.5 border border-[#1f2937] rounded-full text-[13px] text-[#9ca3af]">Clearing &amp; CCP</span>
            </div>

            <div className="flex gap-2.5 flex-wrap">
              <a className="inline-block px-3.5 py-2.5 bg-[#60a5fa] text-[#08101d] border-transparent rounded-xl font-bold" href="#demo">Voir si Horizon est pertinent pour votre cas</a>
              <a className="inline-block px-3.5 py-2.5 border border-[#1f2937] rounded-xl text-[#60a5fa]" href="#faq">Lire la FAQ</a>
            </div>

            <p className="mt-3 text-[13px] text-[#9ca3af] leading-snug">
              Horizon ne décide pas à votre place. Il enregistre <em>ce qui a été décidé</em>, <em>quand</em>, <em>sur quelles bases</em>, de manière opposable.
            </p>
          </div>

          {/* SIDE CTA */}
          <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4 lg:sticky lg:top-4" id="demo">
            <h3 className="mb-2 text-base font-bold">Demander une démo (15-30 min)</h3>
            <p className="mb-3.5 text-[#9ca3af] text-sm leading-snug">
              On qualifie rapidement : <strong className="text-[#e5e7eb]">quelle décision critique</strong> ? <strong className="text-[#e5e7eb]">quelle pression</strong> (audit, incident, remediation) ?
              Et si Horizon peut réduire votre risque.
            </p>

            <form>
              <input className="w-full px-3 py-2.5 rounded-xl border border-[#1f2937] bg-[#0b1220] text-[#e5e7eb] mb-2.5" placeholder="Email pro" />
              <input className="w-full px-3 py-2.5 rounded-xl border border-[#1f2937] bg-[#0b1220] text-[#e5e7eb] mb-2.5" placeholder="Organisation (banque, PSP, exchange...)" />
              <input className="w-full px-3 py-2.5 rounded-xl border border-[#1f2937] bg-[#0b1220] text-[#e5e7eb] mb-3" placeholder="Use case (ex: payment rejection, margin call...)" />
              <button type="button" className="inline-block px-3.5 py-2.5 bg-[#60a5fa] text-[#08101d] border-transparent rounded-xl font-bold">Envoyer</button>
              <p className="mt-2.5 text-[13px] text-[#9ca3af]">
                Ou contactez-nous : <a href="mailto:sales@asplenz.com" className="text-[#60a5fa]">sales@asplenz.com</a>
              </p>
            </form>
          </div>
        </section>

        {/* PROBLEM */}
        <section>
          <h2 className="mt-10 mb-3 text-[28px] font-bold">Le problème</h2>
          <p className="text-[#9ca3af]">
            Dans les infrastructures régulées, une décision automatisée peut déclencher un effet systémique :
            rejet d&apos;un paiement, appel de marge, suspension de participant, blocage AML, activation d&apos;un coupe-circuit, etc.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-3.5">
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Reconstruction fragile</strong>
              <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                <li>logs dispersés / formats hétérogènes</li>
                <li>états de règles &amp; modèles qui évoluent</li>
                <li>données sources expirées / purgées</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Réponse lente</strong>
              <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                <li>6 équipes mobilisées</li>
                <li>semaines pour &quot;expliquer&quot;</li>
                <li>mais difficile de &quot;prouver&quot;</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Risque juridique</strong>
              <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                <li>contentieux, sanctions, réputation</li>
                <li>récits contradictoires</li>
                <li>preuves dépendantes des SI métiers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section>
          <h2 className="mt-10 mb-3 text-[28px] font-bold">Ce que fait Horizon</h2>
          <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
            <p className="text-lg leading-relaxed">
              Horizon transforme une décision éphémère en <strong>fait durable</strong> :
              un enregistrement horodaté, normalisé et vérifiable, qui décrit la décision et son contexte essentiel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3">
              <div>
                <strong>Horizon capture</strong>
                <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                  <li>la décision (résultat, action, statut)</li>
                  <li>les entrées pertinentes (features / signaux / seuils)</li>
                  <li>la provenance (système, version, acteur)</li>
                  <li>l&apos;horodatage &amp; l&apos;intégrité (preuves cryptographiques si souhaité)</li>
                </ul>
              </div>
              <div>
                <strong>Horizon permet</strong>
                <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                  <li>audit &amp; inspection sans dépendre du SI source</li>
                  <li>remediation plus rapide et défendable</li>
                  <li>cohérence cross-systèmes (règles, modèles, humain)</li>
                  <li>réduction du risque &quot;on ne peut pas prouver&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IT IS NOT */}
        <section>
          <h2 className="mt-10 mb-3 text-[28px] font-bold">Ce que Horizon n&apos;est pas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Pas un moteur de décision</strong>
              <p className="text-[#9ca3af] mt-1">Horizon n&apos;exécute aucune règle et ne &quot;prend&quot; aucune décision.</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Pas une plateforme de gouvernance</strong>
              <p className="text-[#9ca3af] mt-1">Il ne remplace ni GRC, ni SIEM, ni data lake.</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Pas un outil d&apos;explicabilité</strong>
              <p className="text-[#9ca3af] mt-1">Il ne &quot;rationalise&quot; pas : il conserve le fait et son contexte.</p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section id="usecases">
          <h2 className="mt-10 mb-3 text-[28px] font-bold">Cas d&apos;usage où Horizon est immédiatement rentable</h2>
          <p className="text-[#9ca3af]">
            Horizon est plus efficace quand il est déployé sur <strong className="text-[#e5e7eb]">1 à 3 classes de décisions critiques</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3.5">
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>PSP / Paiements</strong>
              <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                <li>rejets &amp; retours (raison, seuil, signal)</li>
                <li>blocages AML / sanctions / fraud</li>
                <li>résolution de contestations clients / marchands</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Market exchange</strong>
              <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                <li>suspension instrument / participant</li>
                <li>circuit breakers &amp; garde-fous microstructure</li>
                <li>enquêtes post-incident &amp; reporting</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Clearing / CCP</strong>
              <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                <li>appels de marge &amp; intraday risk</li>
                <li>haircuts / stress triggers</li>
                <li>disputes de contreparties &amp; evidence packs</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Banque systémique</strong>
              <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                <li>scoring / refus / conditions</li>
                <li>limites, overrides, exceptions</li>
                <li>défense en inspection &amp; litige</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW */}
        <section id="how">
          <h2 className="mt-10 mb-3 text-[28px] font-bold">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>1) Instrumenter le point de décision</strong>
              <p className="text-[#9ca3af] mt-1">Un &quot;tap&quot; au moment où la décision est rendue (service, rule engine, workflow humain).</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>2) Normaliser le fait</strong>
              <p className="text-[#9ca3af] mt-1">Schéma décisionnel stable : décision, contexte, provenance, versions, horodatage.</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>3) Préserver et rendre vérifiable</strong>
              <p className="text-[#9ca3af] mt-1">Stockage append-only + contrôles d&apos;intégrité + export &quot;evidence pack&quot; pour audit/litige.</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4 mt-3.5">
            <strong>Résultat : une source de vérité &quot;preuve&quot;</strong>
            <p className="text-[#9ca3af] mt-1">
              Vous pouvez répondre à : &quot;Qu&apos;a-t-on décidé ? Quand ? Sur quelles bases ? Quelle version ? Qui/quel système ?&quot;
              Sans reconstruction fragile, et sans dépendre du SI opérationnel.
            </p>
          </div>
        </section>

        {/* OUTCOMES */}
        <section>
          <h2 className="mt-10 mb-3 text-[28px] font-bold">Résultats attendus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Audit plus rapide</strong>
              <p className="text-[#9ca3af] mt-1">Moins de semaines d&apos;enquête, plus de faits vérifiables.</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Moins de risque</strong>
              <p className="text-[#9ca3af] mt-1">Réduction du risque juridique &quot;impossible à prouver&quot;.</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Remediation efficace</strong>
              <p className="text-[#9ca3af] mt-1">Evidence packs réutilisables, cohérents et opposables.</p>
            </div>
          </div>
        </section>

        {/* SECURITY / DEPLOYMENT */}
        <section>
          <h2 className="mt-10 mb-3 text-[28px] font-bold">Sécurité &amp; déploiement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Déploiement</strong>
              <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                <li>on-prem / cloud privé (selon contraintes)</li>
                <li>intégration progressive par use case</li>
                <li>contrôles d&apos;accès &amp; séparation des rôles</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Gouvernance des données</strong>
              <ul className="mt-2.5 pl-4 text-[#9ca3af] leading-relaxed list-disc">
                <li>minimisation : garder l&apos;essentiel probatoire</li>
                <li>rétention configurable</li>
                <li>chiffrement &amp; traçabilité des accès</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px bg-[#1f2937] my-8"></div>

        {/* FINAL CTA */}
        <section>
          <h2 className="mt-10 mb-3 text-[28px] font-bold">La question n&apos;est pas &quot;pourquoi Horizon&quot;. C&apos;est &quot;quelle décision critique voulez-vous pouvoir prouver ?&quot;</h2>
          <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
            <p className="text-[#9ca3af]">
              Si vous avez déjà vécu un audit difficile, un incident, ou une remediation plan, Horizon peut devenir votre
              couche de preuve. On commence par un use case, pas par une plateforme.
            </p>
            <div className="flex gap-2.5 flex-wrap mt-3">
              <a className="inline-block px-3.5 py-2.5 bg-[#60a5fa] text-[#08101d] border-transparent rounded-xl font-bold" href="#demo">Demander une démo</a>
              <a className="inline-block px-3.5 py-2.5 border border-[#1f2937] rounded-xl text-[#60a5fa]" href="#faq">Voir les questions fréquentes</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="mt-10 mb-3 text-[28px] font-bold">FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Pourquoi ne pas faire ça avec des logs ?</strong>
              <p className="text-[#9ca3af] mt-1">Les logs sont utiles, mais souvent dispersés, reconstitués, et dépendants du SI source. Horizon vise une preuve décisionnelle autonome, stable et exploitable.</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Horizon stocke-t-il des données sensibles ?</strong>
              <p className="text-[#9ca3af] mt-1">Horizon peut être configuré pour minimiser les données (hash, champs essentiels, références), selon les contraintes internes et régulatoires.</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Est-ce un projet lourd ?</strong>
              <p className="text-[#9ca3af] mt-1">La bonne approche est ciblée : 1 use case critique, instrumentation au point de décision, puis extension. Éviter &quot;capturer tout&quot;.</p>
            </div>
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#1f2937] rounded-2xl p-4">
              <strong>Qui est sponsor interne ?</strong>
              <p className="text-[#9ca3af] mt-1">Souvent une coalition Legal/Compliance/Risk/Audit. IT exécute, mais le besoin est probatoire et réglementaire.</p>
            </div>
          </div>
        </section>

        <p className="mt-8 mb-2.5 text-[13px] text-[#9ca3af]" id="thanks">
          © Asplenz. Horizon, Decision Evidence.
        </p>
      </div>
    </div>
  );
}
