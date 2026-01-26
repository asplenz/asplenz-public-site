'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MailIcon, CalendarIcon } from '../components/icons'

export default function ContactPage() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1A5187] hover:underline mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.contact?.backToHome || 'Back to home'}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.contact?.title || 'Discuss your use case'}
          </h1>

          <p className="text-lg text-gray-700 mb-2">
            {t.contact?.intro}
          </p>
          <p className="text-gray-600 mb-12">
            {t.contact?.introDetail}
          </p>

          <hr className="border-gray-200 mb-12" />

          {/* Option 1 - Schedule a Briefing */}
          <div className="mb-12">
            <h2 className="text-sm text-gray-500 uppercase tracking-wide mb-4">Option 1</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <CalendarIcon className="w-8 h-8 mb-4 text-[#1A5187]" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t.contact?.scheduleTitle}
              </h3>
              <p className="text-gray-700 mb-6">
                {t.contact?.scheduleDescription}
              </p>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex gap-2">
                  <span className="text-gray-500 w-20">{t.contact?.scheduleScope}:</span>
                  <span className="text-gray-700">{t.contact?.scheduleScopeItems?.join(', ')}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500 w-20">{t.contact?.scheduleAudience}:</span>
                  <span className="text-gray-700">{t.contact?.scheduleAudienceItems?.join(', ')}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500 w-20">{t.contact?.scheduleFormat}:</span>
                  <span className="text-gray-700">{t.contact?.scheduleFormatValue}</span>
                </div>
              </div>

              <a
                href="https://app.cal.eu/asplenz/institutional-acceptability?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-colors"
              >
                {t.contact?.scheduleButton}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <hr className="border-gray-200 mb-12" />

          {/* Option 2 - Send an Email */}
          <div>
            <h2 className="text-sm text-gray-500 uppercase tracking-wide mb-4">Option 2</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <MailIcon className="w-8 h-8 mb-4 text-[#1A5187]" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t.contact?.emailTitle}
              </h3>
              <p className="text-gray-700 mb-6">
                {t.contact?.emailDescription}
              </p>

              <a
                href="mailto:contact@asplenz.com"
                className="inline-flex items-center gap-2 text-[#1A5187] font-medium hover:underline"
              >
                contact@asplenz.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
