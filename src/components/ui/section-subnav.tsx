import Link from "next/link";

type SectionSubnavItem = { label: string; href: string };

export function SectionSubnav({ items }: { items: SectionSubnavItem[] }) {
  return (
    <nav aria-label="Section navigation" className="flex gap-2 overflow-x-auto rounded-2xl border border-brand-navy/10 bg-white/35 p-2 shadow-sm backdrop-blur-md scrollbar-none">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-brand-navy/10 bg-white/45 px-4 py-2 text-sm font-medium text-brand-navy transition hover:bg-white/80 hover:text-brand-teal">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
