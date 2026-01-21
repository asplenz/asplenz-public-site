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

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.contact?.title || 'Contact Asplenz'}
          </h1>

          <p className="text-lg text-gray-700 mb-10">
            {t.contact?.intro || 'Horizon is designed for regulated institutions evaluating decision evidence infrastructure. We welcome inquiries from risk, compliance, and technical leaders.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Schedule a Call */}
            <a
              href="https://app.cal.eu/asplenz/institutional-acceptability?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#1A5187] text-white rounded-lg hover:bg-[#143d66] transition-all group"
            >
              <CalendarIcon className="w-8 h-8 mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                {t.contact?.scheduleTitle || 'Schedule a Briefing'}
              </h2>
              <p className="text-white/80 text-sm mb-4">
                {t.contact?.scheduleDescription || 'Book a 30-minute technical or risk briefing with our team.'}
              </p>
              <span className="inline-flex items-center gap-2 font-medium group-hover:underline">
                {t.contact?.scheduleButton || 'Choose a time'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@asplenz.com"
              className="p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#1A5187] transition-all group"
            >
              <MailIcon className="w-8 h-8 mb-4 text-[#1A5187]" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {t.contact?.emailTitle || 'Send an Email'}
              </h2>
              <p className="text-gray-700 text-sm mb-4">
                {t.contact?.emailDescription || 'For general inquiries or if you prefer written communication.'}
              </p>
              <span className="inline-flex items-center gap-2 text-[#1A5187] font-medium group-hover:underline">
                contact@asplenz.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-500 text-center">
            {t.contact?.note || 'We typically respond within 24-48 hours on business days.'}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
