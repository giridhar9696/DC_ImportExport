"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { logoSrc } from "@/lib/logo";

const sectionGroups = navigation.filter((item) => item.children);

export function Header() {
  const isHome = usePathname() === "/";
  const textClass = isHome ? "text-white" : "text-brand-navy";
  const buttonClass = isHome
    ? "border-white/25 bg-white/10 hover:bg-white/25 hover:text-white"
    : "border-brand-navy/10 bg-white/35 hover:bg-white/75 hover:text-brand-teal";

  return (
    <header className={`${isHome ? "absolute inset-x-0 top-0" : "sticky top-0"} z-50 px-3 pt-3 sm:px-5`}>
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/30 bg-white/10 p-2 shadow-[0_12px_35px_rgba(11,31,58,0.12)] backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/" aria-label="DC Imports & Exports home" className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${buttonClass}`}>
            <Image src={logoSrc} alt="DC logo" width={56} height={56} priority sizes="56px" className="h-11 w-11 object-contain" />
          </Link>
          <nav aria-label="Primary navigation" className="flex min-w-0 flex-1 flex-wrap justify-center gap-1">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href ?? "#"} className={`inline-flex min-h-10 items-center rounded-full border px-3 text-[0.68rem] font-semibold uppercase tracking-[0.06em] transition sm:px-4 sm:text-xs ${textClass} ${buttonClass}`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div aria-label="Section navigation" className={`mt-2 flex gap-2 overflow-x-auto rounded-[1.5rem] border border-white/20 bg-white/10 px-2 py-2 scrollbar-none ${textClass}`}>
          {sectionGroups.map((group) => (
            <div key={group.label} className="flex shrink-0 items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-1">
              <span className="px-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] opacity-70">{group.label}</span>
              {group.children?.map((child) => (
                <Link key={child.href} href={child.href ?? "#"} className="rounded-full px-2.5 py-1.5 text-[0.68rem] font-medium transition hover:bg-white/25 hover:text-brand-teal">
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
