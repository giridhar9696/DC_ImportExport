"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, type NavItem } from "@/config/navigation";
import { logoSrc } from "@/lib/logo";

function DesktopDropdown({ item, isHome, isOpen, onToggle, onNavigate }: { item: NavItem; isHome: boolean; isOpen: boolean; onToggle: () => void; onNavigate: () => void }) {
  return (
    <div className="relative">
      <button type="button" aria-expanded={isOpen} onClick={onToggle} className={`inline-flex min-h-10 items-center gap-1 rounded-md px-2.5 text-xs font-semibold uppercase tracking-[0.06em] sm:px-3 sm:text-sm sm:tracking-[0.08em] ${isHome ? "text-white hover:bg-white/15 hover:text-teal-100 focus:bg-white/15 focus:text-teal-100" : "text-brand-navy hover:bg-brand-background hover:text-brand-teal focus:bg-brand-background focus:text-brand-teal"} transition`}>
        {item.label}
        <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute left-0 top-full z-30 min-w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-soft transition duration-200 ${isOpen ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-2 opacity-0"}`}>
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href ?? "#"}
            onClick={onNavigate}
            className="block rounded-md px-3 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-background hover:text-brand-teal focus:bg-brand-background focus:text-brand-teal"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  useEffect(() => setOpenMenu(null), [pathname]);
  const navText = isHome ? "text-white" : "text-brand-navy";
  const navHover = isHome
    ? "hover:bg-white/15 hover:text-teal-100 focus:bg-white/15 focus:text-teal-100"
    : "hover:bg-brand-background hover:text-brand-teal focus:bg-brand-background focus:text-brand-teal";

  return (
    <header className={`${isHome ? "absolute inset-x-0 top-0" : "sticky top-0"} z-50 border-b border-white/35 bg-white/10 shadow-[0_8px_30px_rgba(11,31,58,0.08)] backdrop-blur-md backdrop-saturate-150`}>
      <div className="container-page flex min-h-20 items-center gap-5 py-3 lg:min-h-24">
        <Link href="/" aria-label="DC Imports & Exports home" className="flex min-w-0 items-center">
          <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-md sm:h-16 sm:w-16">
            <Image
              src={logoSrc}
              alt="DC logo"
              fill
              priority
              sizes="(max-width: 640px) 64px, 80px"
              className="object-contain"
            />
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="ml-auto flex flex-wrap items-center justify-end gap-0.5"
        >
          {navigation.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} isHome={isHome} isOpen={openMenu === item.label} onToggle={() => setOpenMenu(openMenu === item.label ? null : item.label)} onNavigate={() => setOpenMenu(null)} />
            ) : (
              <Link
                key={item.href}
                href={item.href ?? "#"}
                className={`inline-flex min-h-10 items-center rounded-md px-2.5 text-xs font-semibold uppercase tracking-[0.06em] ${navText} transition sm:px-3 sm:text-sm sm:tracking-[0.08em] ${navHover}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
