'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import { MailIcon, CalendarIcon } from './icons'

export default function CTA() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section id="contact" className="py-20 px-6 bg-[#1A5187]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.cta.title}
        </h2>

        <p className="text-lg text-white/80 mb-10">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@asplenz.com"
            className="flex items-center gap-2 px-6 py-3 bg-white text-[#1A5187] font-medium rounded hover:bg-gray-100 transition-all"
          >
            <MailIcon className="w-5 h-5" />
            {t.cta.emailButton}
          </a>
          <a
            href="https://app.cal.eu/asplenz/institutional-acceptability?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-[#1A5187] transition-all"
          >
            <CalendarIcon className="w-5 h-5" />
            {t.cta.calButton}
          </a>
        </div>
      </div>
    </section>
  )
}
