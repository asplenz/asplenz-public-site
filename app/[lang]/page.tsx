import { getDictionary } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/config'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Problem from '@/app/components/Problem'
import Consequence from '@/app/components/Consequence'
import WhatIs from '@/app/components/WhatIs'
import Produces from '@/app/components/Produces'
import EvidenceEval from '@/app/components/EvidenceEval'
import NotIs from '@/app/components/NotIs'
import Relationship from '@/app/components/Relationship'
import Assurance from '@/app/components/Assurance'
import Deployment from '@/app/components/Deployment'
import Users from '@/app/components/Users'
import When from '@/app/components/When'
import Philosophy from '@/app/components/Philosophy'
import CTA from '@/app/components/CTA'
import Contact from '@/app/components/Contact'


export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen">
      <Header lang={lang} dict={dict} />

      <main>
        <Hero dict={dict} />
        <Problem dict={dict} />
        <Consequence dict={dict} />
        <WhatIs dict={dict} />
        <Produces dict={dict} />
        <EvidenceEval dict={dict} />
        <NotIs dict={dict} />
        <Relationship dict={dict} />
        <Assurance dict={dict} />
        <Deployment dict={dict} />
        <Users dict={dict} />
        <When dict={dict} />
        <Philosophy dict={dict} />
        <CTA dict={dict} />
        <Contact dict={dict} />
      </main>

      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <p>© 2025 Horizon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
