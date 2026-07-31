import { BrowserFrame } from './BrowserFrame'
import {
  Building2, Wallet, LineChart, Layers,
  KeyRound, Palette, LayoutGrid, ShieldCheck,
} from 'lucide-react'

type TenantRow = {
  name: string
  consultations: string
  llmCostEur: string
  engineOnly: string
}

const TENANTS: TenantRow[] = [
  { name: 'Demo Bank Asia', consultations: '12,340', llmCostEur: '31.20', engineOnly: '86%' },
  { name: 'HK Private Bank', consultations: '8,102', llmCostEur: '18.45', engineOnly: '89%' },
  { name: 'SG Wealth Advisors', consultations: '15,876', llmCostEur: '52.10', engineOnly: '81%' },
  { name: 'Meridian Family Office', consultations: '3,204', llmCostEur: '9.85', engineOnly: '84%' },
]

// Daily consultations for the last 14 days (last value = today)
const DAILY = [820, 1050, 1180, 1320, 1220, 1450, 1680, 1610, 1890, 2050, 2210, 2080, 2450, 2850]

export function OemDashboardMock() {
  return (
    <BrowserFrame url="app.your-brand.com/operator/finops" brand="Your Brand">
      <div className="grid grid-cols-[auto_1fr] gap-0">
        <aside className="hidden w-40 shrink-0 border-r border-gray-100 bg-gray-50 p-3 md:block">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-gray-900">
            <div className="h-5 w-5 rounded bg-primary" />
            Your Brand
          </div>
          <nav className="space-y-1 text-xs">
            <SideItem icon={<LayoutGrid className="h-3.5 w-3.5" />} label="Tenants" />
            <SideItem icon={<LineChart className="h-3.5 w-3.5" />} label="FinOps" active />
            <SideItem icon={<KeyRound className="h-3.5 w-3.5" />} label="API keys" />
            <SideItem icon={<Palette className="h-3.5 w-3.5" />} label="Branding" />
          </nav>
        </aside>

        <div className="min-w-0 p-4 md:p-5">
          <div className="mb-4 flex items-baseline justify-between">
            <h4 className="text-sm font-semibold text-gray-900">FinOps overview</h4>
            <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
              This month · 4 tenants
            </span>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-2 md:grid-cols-4">
            <KpiTile
              icon={<Layers className="h-3.5 w-3.5" />}
              label="Consultations"
              value="39,522"
              delta="+18%"
              positive
            />
            <KpiTile
              icon={<ShieldCheck className="h-3.5 w-3.5" />}
              label="Engine-only ratio"
              value="84%"
              delta="+2 pts"
              positive
            />
            <KpiTile
              icon={<Wallet className="h-3.5 w-3.5" />}
              label="LLM cost"
              value="€111.60"
              delta="+€14"
            />
            <KpiTile
              icon={<LineChart className="h-3.5 w-3.5" />}
              label="Cache hit"
              value="42%"
              delta="+5 pts"
              positive
            />
          </div>

          <div className="mb-5 rounded-md border border-gray-200 bg-white p-3">
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                Consultations · last 14 days
              </span>
              <span className="text-[10px] font-mono text-gray-600">
                today <span className="font-semibold text-primary-strong">2,850</span>
              </span>
            </div>
            <ConsultationsChart data={DAILY} />
          </div>

          <div className="overflow-hidden rounded-md border border-gray-200">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  <th className="px-3 py-1.5 text-left">Tenant</th>
                  <th className="px-3 py-1.5 text-right">Consultations</th>
                  <th className="px-3 py-1.5 text-right">LLM cost</th>
                  <th className="px-3 py-1.5 text-right">Engine-only %</th>
                </tr>
              </thead>
              <tbody>
                {TENANTS.map((t) => (
                  <tr key={t.name} className="border-b border-gray-100 last:border-b-0">
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2 truncate">
                        <Building2 className="h-3.5 w-3.5 shrink-0 text-primary-strong" />
                        <span className="truncate font-medium text-gray-900">{t.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-right font-mono text-gray-700">{t.consultations}</td>
                    <td className="px-3 py-2 text-right font-mono text-gray-700">€{t.llmCostEur}</td>
                    <td className="px-3 py-2 text-right font-mono text-success-strong">{t.engineOnly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[10px] text-gray-500">
            Engine-only % = share of consultations handled deterministically, without any LLM call. Only the remaining share incurs LLM cost.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 px-5 py-2.5 text-[11px] text-gray-600">
        Confidentiality wall : you see aggregates and cost, never tenant compliance content.
      </div>
    </BrowserFrame>
  )
}

function ConsultationsChart({ data }: { data: number[] }) {
  const W = 400
  const H = 60
  const PAD = 4
  const max = Math.max(...data)
  const stepX = (W - PAD * 2) / (data.length - 1)
  const points = data.map((v, i) => {
    const x = PAD + i * stepX
    const y = H - PAD - ((v / max) * (H - PAD * 2))
    return { x, y }
  })

  // Smooth path using simple cubic bezier
  const linePath = points
    .map((p, i, arr) => {
      if (i === 0) return `M ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
      const prev = arr[i - 1]
      const cx1 = prev.x + (p.x - prev.x) / 2
      const cx2 = p.x - (p.x - prev.x) / 2
      return `C ${cx1.toFixed(1)} ${prev.y.toFixed(1)}, ${cx2.toFixed(1)} ${p.y.toFixed(1)}, ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
    })
    .join(' ')

  const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${H - PAD} L ${points[0].x.toFixed(1)} ${H - PAD} Z`

  const lastPoint = points[points.length - 1]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartGradient)" />
      <path d={linePath} fill="none" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastPoint.x} cy={lastPoint.y} r={2.6} fill="#4f46e5" />
      <circle cx={lastPoint.x} cy={lastPoint.y} r={5.5} fill="#4f46e5" fillOpacity="0.15" />
    </svg>
  )
}

function KpiTile({
  icon,
  label,
  value,
  delta,
  positive,
}: {
  icon: React.ReactNode
  label: string
  value: string
  delta?: string
  positive?: boolean
}) {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-2.5">
      <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
        {icon}
        {label}
      </div>
      <div className="mt-1 flex items-baseline gap-1.5">
        <div className="text-sm font-bold text-gray-900">{value}</div>
        {delta && (
          <div
            className={
              'text-[10px] font-semibold ' +
              (positive ? 'text-success-strong' : 'text-gray-500')
            }
          >
            {delta}
          </div>
        )}
      </div>
    </div>
  )
}

function SideItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <div
      className={
        'flex items-center gap-2 rounded px-2 py-1.5 ' +
        (active ? 'bg-primary text-white' : 'text-gray-700')
      }
    >
      {icon}
      <span>{label}</span>
    </div>
  )
}
