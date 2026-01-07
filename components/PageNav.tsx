import Link from "next/link";

type PageNavProps = {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

export function PageNav({ prev, next }: PageNavProps) {
  return (
    <nav className="mt-12 pt-8 border-t border-slate-200/70 flex justify-between items-center">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-2 text-sm text-slate-600 no-underline hover:no-underline hover:text-slate-900"
        >
          <span className="text-slate-400 group-hover:text-slate-600">&larr;</span>
          <span>{prev.label}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex items-center gap-2 text-sm text-slate-600 no-underline hover:no-underline hover:text-slate-900"
        >
          <span>{next.label}</span>
          <span className="text-slate-400 group-hover:text-slate-600">&rarr;</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
