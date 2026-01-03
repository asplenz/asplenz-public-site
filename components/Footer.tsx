import { Container } from "@/components/Container";

export function Footer({ closingLine }: { closingLine?: string }) {
  return (
    <footer className="border-t border-slate-200/70 py-10">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Horizon</div>
          <div className="text-sm text-slate-700">
            {closingLine ? closingLine : "Signals may suggest. Evidence must already exist."}
          </div>
        </div>
      </Container>
    </footer>
  );
}
