import { BrowserFrame } from './BrowserFrame'
import { Ban, Sparkles, FileText } from 'lucide-react'

export function HomeVerdictMock() {
  return (
    <BrowserFrame url="POST /v1/check" brand="Knowledge">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-gray-100 p-5 md:border-b-0 md:border-r">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            <FileText className="h-3 w-3" aria-hidden />
            Intended action
          </div>
          <p className="mb-4 text-sm text-gray-900">
            Buy 150 TSLA for Mrs Lim, conservative discretionary mandate ; post-trade equity 42% of NAV.
          </p>

          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            Context
          </div>
          <dl className="space-y-1 rounded-md bg-gray-50 p-3 font-mono text-[11px]">
            <MockRow k="jurisdiction" v="SG" />
            <MockRow k="client_classification" v="retail" />
            <MockRow k="mandate_type" v="conservative" />
            <MockRow k="asset_class" v="equity" />
            <MockRow k="equity_exposure_post" v="0.42" highlight />
            <MockRow k="single_name_post" v="0.18" highlight />
          </dl>
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            <Sparkles className="h-3 w-3" aria-hidden />
            Verdict
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-danger-soft px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-danger-strong">
            <Ban className="h-3.5 w-3.5" aria-hidden />
            Blocked
          </div>

          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            Winning rule
          </div>
          <div className="mb-4 rounded-md border border-gray-200 bg-white p-3">
            <div className="mb-1 font-mono text-[10px] text-primary-strong">rul-cd35e21cf145</div>
            <p className="text-xs text-gray-800 leading-snug">
              Conservative-profile mandates cap aggregate equity exposure at 40% of portfolio value.
            </p>
            <div className="mt-2 inline-flex rounded bg-warning-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-warning-strong">
              hard_block
            </div>
          </div>

          <div className="text-[10px] text-gray-500">
            Also cited : rul-f0ff5dd730ed (single-name cap)
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-600">
          <span>
            Consultation : <span className="font-mono text-primary-strong">cns-943f71bf6b6b</span>
          </span>
          <span>Latency : <span className="font-mono">4 ms</span> · deterministic · replayable</span>
        </div>
      </div>
    </BrowserFrame>
  )
}

function MockRow({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-gray-500">{k}</span>
      <span className={highlight ? 'font-semibold text-danger-strong' : 'text-gray-900'}>{v}</span>
    </div>
  )
}
