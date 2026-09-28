import type { ReactNode } from "react";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function Hero({ eyebrow, title, description, actions }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-teal" />
      <div className="container-page grid min-h-[560px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        <div className="relative hidden min-h-[360px] overflow-hidden rounded-lg border border-slate-200 bg-brand-background shadow-soft lg:block">
          <div className="absolute inset-x-8 top-12 h-24 rounded-md border border-teal-100 bg-white" />
          <div className="absolute left-10 right-10 top-44 h-1 bg-brand-teal" />
          <div className="absolute bottom-12 left-8 right-8 grid grid-cols-3 gap-4">
            <div className="h-24 rounded-md border border-slate-200 bg-white" />
            <div className="h-24 rounded-md border border-slate-200 bg-white" />
            <div className="h-24 rounded-md border border-slate-200 bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
