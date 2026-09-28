import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { logoSrc } from "@/lib/logo";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Facility", href: "/facility" },
  { label: "Careers", href: "/careers" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contact-us" }
];

const socialItems = [
  { label: "LinkedIn", icon: Linkedin },
  { label: "Facebook", icon: Facebook },
  { label: "X", icon: Twitter }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Footer() {
  return (
    <footer
      className="border-t border-white/20 bg-brand-navy bg-cover bg-center text-white"
      style={{ backgroundImage: `linear-gradient(rgba(11,31,58,0.82),rgba(11,31,58,0.9)),url('${basePath}/assets/quick-link-ship.png')` }}
    >
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr_0.9fr] lg:py-14">
        <div>
          <div className="flex items-center gap-4">
            <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-md bg-white">
              <Image src={logoSrc} alt="DC logo" fill sizes="56px" className="object-contain" />
            </span>
            <div>
              <p className="font-display text-2xl font-semibold leading-tight text-white">
                DC Imports & Exports
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.14em] text-slate-200">
                Connecting Markets. Moving Possibilities.
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-200">
            Illustrative corporate website foundation for international trade,
            logistics, media, careers, and enquiry content.
          </p>
          <div aria-label="Social media placeholders" className="mt-6 flex gap-3">
            {socialItems.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-brand-navy transition hover:border-brand-teal hover:text-brand-teal"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Quick Links</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Contact</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-teal" />
              <span>Illustrative demo address placeholder</span>
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-teal" />
              <span>Illustrative demo phone placeholder</span>
            </p>
            <p className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-teal" />
              <span>Illustrative demo email placeholder</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5">
        <div className="container-page flex flex-col gap-2 text-xs font-medium text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} DC Imports & Exports. All rights reserved.</p>
          <p>Demo website foundation.</p>
        </div>
      </div>
    </footer>
  );
}
