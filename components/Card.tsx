import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function Card({ title, description, children }: CardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6">
      <div className="space-y-2">
        <div className="text-slate-900 tracking-tightish font-medium text-base md:text-lg">
          {title}
        </div>
        {description && (
          <div className="text-slate-700 text-sm leading-relaxed">{description}</div>
        )}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
