import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1">
      <h2 className="font-display text-xl font-bold text-brand-navy">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{children}</p>
    </article>
  );
}
