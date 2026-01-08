import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Horizon",
  description:
    "Evidence must exist before questions. A factual evidence capability that observes and preserves, at execution time, what systems actually do and evaluate."
};

const readingPath = [
  { href: "/approach", label: "Approach", description: "What is this capability and why does it exist?" },
  { href: "/illustrative-scenario", label: "Illustrative scenario", description: "Two possible worlds: reconstruction vs examination" },
  { href: "/capability", label: "Capability", description: "What does it record and how?" },
  { href: "/product-status", label: "Product status", description: "Current maturity and validation approach" },
  { href: "/principles", label: "Principles", description: "Non-negotiable constraints and clear non-goals" },
  { href: "/clarifications", label: "Clarifications", description: "Questions and clarifications" },
  { href: "/use-cases", label: "Use cases", description: "Market infrastructures and systemic banks" },
  { href: "/engage", label: "Engage", description: "Schedule an acceptability discussion" }
];

export default function HomePage() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className={prose.h1}>Evidence must exist before questions.</h1>
            <p className={prose.lead}>
              A factual evidence capability for regulated institutions, designed to observe and preserve,
              at execution time, what systems actually do and evaluate.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-slate-600 text-xs uppercase tracking-[0.18em] mb-4">
              Reading path
            </div>
            <ol className="space-y-3">
              {readingPath.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group block rounded-xl p-4 -mx-4 no-underline hover:no-underline hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-slate-400 text-sm tabular-nums">{index + 1}.</span>
                      <div>
                        <span className="text-slate-900 font-medium group-hover:text-blue-700">
                          {item.label}
                        </span>
                        <span className="text-slate-500 ml-2 text-sm">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
