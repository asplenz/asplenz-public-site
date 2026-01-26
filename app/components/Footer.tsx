'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Footer() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-center text-sm text-gray-500">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
