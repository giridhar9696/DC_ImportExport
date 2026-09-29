import Link from "next/link";

export function SectionNav({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <nav aria-label="Page sections" className="sticky top-3 z-30 mx-auto -mt-7 max-w-5xl px-3 sm:-mt-8">
      <div className="flex gap-2 overflow-x-auto rounded-full border border-white/30 bg-white/70 p-2 shadow-soft backdrop-blur-md scrollbar-none">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-brand-navy/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-navy transition hover:bg-brand-teal hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
