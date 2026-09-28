"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, type NavItem } from "@/config/navigation";
import { logoSrc } from "@/lib/logo";

function DesktopDropdown({ item, isHome }: { item: NavItem; isHome: boolean }) {
  return (
    <div className="group relative">
      <button className={`inline-flex min-h-12 items-center gap-1 rounded-md px-4 text-sm font-semibold uppercase tracking-[0.08em] ${isHome ? "text-white hover:bg-white/15 hover:text-teal-100 focus:bg-white/15 focus:text-teal-100" : "text-brand-navy hover:bg-brand-background hover:text-brand-teal focus:bg-brand-background focus:text-brand-teal"} transition`}>
        {item.label}
        <ChevronDown aria-hidden="true" className="h-4 w-4" />
      </button>
      <div className="invisible absolute left-0 top-full z-30 min-w-56 translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href ?? "#"}
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
  const isHome = usePathname() === "/";
  const navText = isHome ? "text-white" : "text-brand-navy";
  const navHover = isHome
    ? "hover:bg-white/15 hover:text-teal-100 focus:bg-white/15 focus:text-teal-100"
    : "hover:bg-brand-background hover:text-brand-teal focus:bg-brand-background focus:text-brand-teal";

  return (
    <header className={`${isHome ? "absolute inset-x-0 top-0" : "sticky top-0"} z-50 border-b border-white/30 bg-black/20 shadow-[0_8px_30px_rgba(11,31,58,0.06)] backdrop-blur-xl backdrop-saturate-150`}>
      <div className="container-page flex min-h-20 items-center justify-between gap-5 py-3 lg:min-h-24">
        <Link href="/" aria-label="DC Imports & Exports home" className="flex min-w-0 items-center">
          <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-md bg-white/80 sm:h-16 sm:w-16">
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

      </div>

      <div className="border-t border-white/35">
        <nav
          aria-label="Primary navigation"
          className="container-page flex min-h-14 flex-wrap items-center justify-center gap-1 py-2"
        >
          {navigation.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} isHome={isHome} />
            ) : (
              <Link
                key={item.href}
                href={item.href ?? "#"}
                className={`inline-flex min-h-12 items-center rounded-md px-4 text-sm font-semibold uppercase tracking-[0.08em] ${navText} transition ${navHover}`}
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
