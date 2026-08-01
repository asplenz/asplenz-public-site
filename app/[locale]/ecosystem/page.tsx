import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  ArrowDown,
  BookOpen,
  Sparkles,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { isLocale, type Locale } from '@/lib/i18n'
import {
  getEcosystemContent,
  type EcosystemContent,
  type EcosystemHeroCategory,
  type EcosystemHeroCategoryIcon,
  type EcosystemPlatformRow,
  type EcosystemTogetherBlock,
  type EcosystemArchitecture,
} from '@/content/ecosystem'
import { cn } from '@/lib/cn'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const t = getEcosystemContent(params.locale as Locale)
  return {
    title: 'Ecosystem',
    description: t.hero.highlight,
  }
}

export default function EcosystemPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getEcosystemContent(locale)

  return (
    <>
      <Hero t={t} />
      <TableSection t={t} />
      <FitSection t={t} />
      <ArchitectureSection t={t} />
      <PhilosophySection t={t} />
    </>
  )
}

const HERO_ICONS: Record<EcosystemHeroCategoryIcon, LucideIcon> = {
  decisions: Zap,
  workflow: Workflow,
  governance: BookOpen,
  lifecycle: Users,
}

function Hero({ t }: { t: EcosystemContent }) {
  return (
    <section className="border-b border-gray-100 bg-gradient-to-b from-primary-soft/40 to-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-strong">
            {t.hero.eyebrow}
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            {t.hero.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-800 md:text-xl">
            {t.hero.lead}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 md:text-base">
            {t.hero.categoriesLead}
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-4">
          {t.hero.categories.map((cat) => (
            <HeroCategoryChip key={cat.icon} category={cat} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-primary bg-white p-6 text-left shadow-sm md:p-7">
          <p className="text-lg font-semibold text-gray-900 md:text-xl">
            {t.hero.highlight}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-700">
          {t.hero.outro}
        </p>
      </div>
    </section>
  )
}

function HeroCategoryChip({ category }: { category: EcosystemHeroCategory }) {
  const Icon = HERO_ICONS[category.icon]
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-strong">
        <Icon className="h-4 w-4" aria-hidden />
      </div>
      <span className="text-sm font-semibold leading-snug text-gray-900 md:text-[15px]">
        {category.label}
      </span>
    </div>
  )
}

function TableSection({ t }: { t: EcosystemContent }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {t.tableSection.heading}
        </h2>

        <div className="hidden overflow-hidden rounded-2xl border border-gray-200 md:block">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-1/5 border-b border-gray-200 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  {t.tableSection.columns.product}
                </th>
                <th className="w-1/5 border-b border-gray-200 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  {t.tableSection.columns.purpose}
                </th>
                <th className="w-2/5 border-b border-gray-200 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  {t.tableSection.columns.models}
                </th>
                <th className="w-1/5 border-b border-gray-200 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  {t.tableSection.columns.useCases}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.tableSection.rows.map((row) => (
                <PlatformTableRow key={row.name} row={row} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:hidden">
          {t.tableSection.rows.map((row) => (
            <PlatformMobileCard key={row.name} row={row} columns={t.tableSection.columns} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlatformTableRow({ row }: { row: EcosystemPlatformRow }) {
  return (
    <tr
      className={cn(
        'align-top text-sm text-gray-800',
        row.isKnowledge ? 'bg-primary-soft/40' : 'bg-white',
      )}
    >
      <td className="border-b border-gray-100 px-4 py-4 font-semibold text-gray-900">
        <div className="flex items-start gap-2">
          {row.isKnowledge && (
            <Sparkles
              className="mt-0.5 h-4 w-4 shrink-0 text-primary-strong"
              aria-hidden
            />
          )}
          <span>{row.name}</span>
        </div>
      </td>
      <td className="border-b border-gray-100 px-4 py-4">{row.purpose}</td>
      <td className="border-b border-gray-100 px-4 py-4">{row.models}</td>
      <td className="border-b border-gray-100 px-4 py-4">{row.useCases}</td>
    </tr>
  )
}

function PlatformMobileCard({
  row,
  columns,
}: {
  row: EcosystemPlatformRow
  columns: EcosystemContent['tableSection']['columns']
}) {
  return (
    <article
      className={cn(
        'rounded-2xl border p-5 shadow-sm',
        row.isKnowledge
          ? 'border-primary/40 bg-primary-soft/40 ring-1 ring-primary/20'
          : 'border-gray-200 bg-white',
      )}
    >
      <header className="mb-3 flex items-start gap-2">
        {row.isKnowledge && (
          <Sparkles className="mt-1 h-4 w-4 shrink-0 text-primary-strong" aria-hidden />
        )}
        <h3 className="text-base font-bold text-gray-900">{row.name}</h3>
      </header>
      <dl className="space-y-3 text-sm text-gray-800">
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            {columns.purpose}
          </dt>
          <dd className="mt-0.5">{row.purpose}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            {columns.models}
          </dt>
          <dd className="mt-0.5">{row.models}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            {columns.useCases}
          </dt>
          <dd className="mt-0.5">{row.useCases}</dd>
        </div>
      </dl>
    </article>
  )
}

function FitSection({ t }: { t: EcosystemContent }) {
  return (
    <section className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {t.fitSection.heading}
        </h2>
        <div className="mb-10 max-w-2xl space-y-1 text-lg text-gray-800">
          {t.fitSection.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {t.fitSection.blocks.map((block) => (
            <TogetherCard key={block.id} block={block} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TogetherCard({ block }: { block: EcosystemTogetherBlock }) {
  return (
    <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-bold tracking-tight text-gray-900">
        <span className="text-gray-600">+ </span>
        {block.partner}
      </h3>
      <p className="text-sm leading-relaxed text-gray-800">
        {block.partnerRole}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-gray-800">
        <span className="font-semibold text-primary-strong">Knowledge : </span>
        {block.knowledgeRole}
      </p>
      {block.contrast && (
        <div className="mt-4 grid gap-2 rounded-xl bg-gray-50 p-4 sm:grid-cols-2">
          <p className="text-xs leading-snug text-gray-700">
            {block.contrast.partnerQuestion}
          </p>
          <p className="text-xs leading-snug text-gray-900 font-medium">
            {block.contrast.knowledgeQuestion}
          </p>
        </div>
      )}
      {block.body.length > 0 && (
        <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-800">
          {block.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
    </article>
  )
}

function ArchitectureSection({ t }: { t: EcosystemContent }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {t.architectureSection.heading}
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-gray-700">
          {t.architectureSection.lead}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {t.architectureSection.items.map((item) => (
            <ArchitectureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArchitectureCard({ item }: { item: EcosystemArchitecture }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
      <header className="mb-5">
        <h3 className="text-lg font-bold tracking-tight text-gray-900">
          {item.title}
        </h3>
      </header>
      <div className="flex flex-col items-center">
        {item.nodes.map((node, i) => (
          <div key={`${item.id}-${i}`} className="flex flex-col items-center">
            <div
              className={cn(
                'w-full min-w-[220px] max-w-xs rounded-xl border px-5 py-3 text-center text-sm font-semibold shadow-sm',
                node.emphasis
                  ? 'border-primary/50 bg-white text-primary-strong ring-1 ring-primary/20'
                  : 'border-gray-200 bg-white text-gray-900',
              )}
            >
              {node.label}
            </div>
            {i < item.nodes.length - 1 && (
              <ArrowConnector emphasis={node.emphasis || item.nodes[i + 1].emphasis} />
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

function ArrowConnector({ emphasis }: { emphasis?: boolean }) {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <div
        className={cn(
          'h-4 w-px',
          emphasis ? 'bg-primary/60' : 'bg-gray-300',
        )}
      />
      <ArrowDown
        className={cn(
          'h-4 w-4',
          emphasis ? 'text-primary' : 'text-gray-400',
        )}
      />
    </div>
  )
}

function PhilosophySection({ t }: { t: EcosystemContent }) {
  return (
    <section className="border-t border-gray-100 bg-gradient-to-b from-white to-primary-soft/30">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-strong">
            {t.philosophy.eyebrow}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.philosophy.heading}
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 md:mt-10 md:grid-cols-4 md:gap-4">
          {t.philosophy.lines.map((line) => (
            <HeroCategoryChip key={line.icon} category={line} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-primary bg-white p-6 text-left shadow-sm md:p-8">
          <p className="text-xl font-semibold text-gray-900 md:text-2xl">
            {t.philosophy.highlight}
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl space-y-2 text-center text-base leading-relaxed text-gray-700">
          {t.philosophy.closing.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
