import Link from "next/link";
import { Container } from "@/components/Container";

const footerLinks = [
  { href: "/approach", label: "Approach" },
  { href: "/illustrative-scenario", label: "Illustrative scenario" },
  { href: "/capability", label: "Capability" },
  { href: "/product-status", label: "Product status" },
  { href: "/principles", label: "Principles" },
  { href: "/clarifications", label: "Clarifications" },
  { href: "/institutional-contexts", label: "Institutional contexts" },
  { href: "/engage", label: "Engage" }
];

export function Footer({ closingLine }: { closingLine?: string }) {
  return (
    <footer className="border-t border-slate-200/70 py-10">
      <Container>
        <div className="space-y-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 no-underline hover:no-underline hover:text-slate-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <div className="text-sm text-slate-600">© {new Date().getFullYear()} Horizon</div>
            <div className="text-sm text-slate-500">
              {closingLine ? closingLine : "Evidence at execution time, before questions arise."}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
