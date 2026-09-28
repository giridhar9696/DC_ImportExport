type PageHeadingProps = {
  title: string;
  description?: string;
};

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
          DC Imports & Exports
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold text-brand-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {description ?? "Content for this section will be added in the next implementation phase."}
        </p>
      </div>
    </section>
  );
}
