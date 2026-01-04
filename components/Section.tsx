import type { ReactNode } from "react";
import { Container } from "@/components/Container";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, children }: SectionProps) {
  return (
    <section className="py-6 md:py-10">
      <Container>
        {(eyebrow || title) && (
          <header className="mb-6 md:mb-8">
            {eyebrow && (
              <div className="text-slate-600 text-xs uppercase tracking-[0.18em]">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-2 text-slate-900 tracking-tightish font-medium text-xl md:text-2xl leading-snug">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
