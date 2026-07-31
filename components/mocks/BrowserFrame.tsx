import { cn } from '@/lib/cn'

export function BrowserFrame({
  url,
  brand,
  children,
  className,
}: {
  url: string
  brand?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl',
        className,
      )}
    >
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" aria-hidden />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" aria-hidden />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" aria-hidden />
          </div>
          <div className="flex-1 truncate rounded border border-gray-200 bg-white px-3 py-1 text-xs text-gray-500">
            {url}
          </div>
          {brand && (
            <div className="hidden text-xs font-medium text-gray-600 sm:inline">{brand}</div>
          )}
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  )
}
