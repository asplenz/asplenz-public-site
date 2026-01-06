import { Container } from "@/components/Container";

export function Footer({ closingLine }: { closingLine?: string }) {
  return (
    <footer className="border-t border-slate-200/70 py-10">
      <Container>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Horizon</div>
          <div className="text-sm text-slate-500">
            {closingLine ? closingLine : "Evidence at execution time, before questions arise."}
          </div>
        </div>
      </Container>
    </footer>
  );
}
