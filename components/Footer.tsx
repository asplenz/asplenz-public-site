import Link from 'next/link'
import Image from 'next/image'
import { t, type Locale } from '@/lib/i18n'

const YEAR = 2026

export function Footer({ locale }: { locale: Locale }) {
  const messages = t(locale)
  const base = `/${locale}`

  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="mb-2 flex items-center gap-2 font-semibold text-gray-900">
            <Image
              src="/images/log2_normal.png"
              alt="Asplenz"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span>{messages.brand}</span>
          </div>
          <p className="text-sm text-gray-600">{messages.footer.tagline}</p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-900">
            {messages.nav.product}
          </h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link href={`${base}/product`} className="hover:text-gray-900">{messages.nav.product}</Link></li>
            <li><Link href={`${base}/use-cases`} className="hover:text-gray-900">{messages.nav.use_cases}</Link></li>
            <li><Link href={`${base}/oem`} className="hover:text-gray-900">{messages.nav.oem}</Link></li>
            <li><Link href={`${base}/ecosystem`} className="hover:text-gray-900">{messages.nav.ecosystem}</Link></li>
            <li><Link href={`${base}/pricing`} className="hover:text-gray-900">{messages.nav.pricing}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-900">
            {messages.footer.legal}
          </h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link href={`${base}/company`} className="hover:text-gray-900">{messages.nav.company}</Link></li>
            <li><span className="text-gray-400">{messages.footer.privacy}</span></li>
            <li><span className="text-gray-400">{messages.footer.terms}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-6 py-4 text-center text-xs text-gray-500">
        © {YEAR} Asplenz. {messages.footer.rights}
      </div>
    </footer>
  )
}
