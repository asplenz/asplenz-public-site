'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/cn'

export function LangSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname()

  const swapLocale = (target: Locale) => {
    const parts = pathname.split('/')
    if (parts.length > 1 && (locales as readonly string[]).includes(parts[1])) {
      parts[1] = target
      return parts.join('/') || '/'
    }
    return `/${target}${pathname}`
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-gray-200 p-1 text-xs">
      {locales.map((loc) => {
        const active = loc === current
        return (
          <Link
            key={loc}
            href={swapLocale(loc)}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'rounded px-2 py-1 font-medium uppercase transition-colors',
              active
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
            )}
          >
            {loc}
          </Link>
        )
      })}
    </div>
  )
}
