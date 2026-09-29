"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { logoSrc } from "@/lib/logo";

export function Header() {
  const isHome = usePathname() === "/";
  const textClass = isHome ? "text-white" : "text-brand-navy";
  const buttonClass = isHome
    ? "border-white/25 bg-white/10 hover:bg-white/25 hover:text-white"
    : "border-brand-navy/10 bg-white/35 hover:bg-white/75 hover:text-brand-teal";

  return (
    <header className={`${isHome ? "absolute inset-x-0 top-0" : "sticky top-0"} z-50 px-3 pt-3 sm:px-5`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2">
        <Link href="/" aria-label="DC Imports & Exports home" className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full border shadow-[0_8px_25px_rgba(11,31,58,0.12)] backdrop-blur-md ${buttonClass}`}>
          <Image src={logoSrc} alt="DC logo" width={72} height={72} priority sizes="72px" className="h-14 w-14 object-contain" />
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap justify-center gap-2">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href ?? "#"} className={`inline-flex min-h-10 items-center rounded-full border px-3 text-[0.68rem] font-semibold uppercase tracking-[0.06em] shadow-[0_8px_25px_rgba(11,31,58,0.1)] backdrop-blur-md transition sm:px-4 sm:text-xs ${textClass} ${buttonClass}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
