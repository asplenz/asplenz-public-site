'use client'

import { useState } from 'react'

type ContactProps = {
  dict: any
}

export default function Contact({ dict }: ContactProps) {
  const email = dict.contact?.email ?? 'contact@asplenz.com'
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // fallback: sélection manuelle si clipboard indisponible
      const el = document.getElementById('contact-email') as HTMLInputElement | null
      el?.select()
      document.execCommand('copy')
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#001F5C] mb-6">
          {dict.contact?.title ?? 'Email'}
        </h2>

       
        <div className="mx-auto max-w-xl rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <input
              id="contact-email"
              readOnly
              value={email}
              className="w-full rounded border border-gray-200 px-4 py-3 text-gray-900"
              aria-label="Contact email"
            />

            <button
              type="button"
              onClick={copyEmail}
              className="px-5 py-3 bg-[#001F5C] text-white font-medium rounded hover:bg-opacity-90 transition-all"
            >
              {copied ? dict.contact?.copied ?? 'Copied' : dict.contact?.copy ?? 'Copy email'}
            </button>
          </div>

        
                   
        </div>
      </div>
    </section>
  )
}
