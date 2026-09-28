import { ArrowRight, BookOpen, Compass, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Learn about the demo corporate profile and content framework for DC Imports & Exports.",
  path: "/about"
});

const aboutLinks = [
  {
    title: "About Us",
    href: "/about",
    description:
      "A concise demo introduction to the company presence and trading focus."
  },
  {
    title: "Our History",
    href: "/about/history",
    description:
      "Illustrative timeline content prepared for verified company milestones later.",
    icon: BookOpen
  },
  {
    title: "Vision & Mission",
    href: "/about/vision-mission",
    description:
      "Neutral demo statements for direction, purpose, and working principles.",
    icon: Compass
  },
  {
    title: "Leadership",
    href: "/about/leadership",
    description:
      "Placeholder profile sections for founder and management information.",
    icon: UsersRound
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/about-hero-port.png"
            alt="Wide view of port infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.9),rgba(11,31,58,0.68),rgba(11,31,58,0.28))]" />
        </div>
        <div className="container-page flex min-h-[520px] items-center py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">
              About DC Imports & Exports
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
              A clear corporate foundation for international trade.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              Illustrative demo content for presenting DC Imports & Exports with
              a professional tone. Verified company details can be added when
              supplied.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Company Introduction
            </p>
            <h2 className="heading-lg mt-4">
              Connecting market conversations with disciplined trade coordination.
            </h2>
            <p className="body-copy mt-5">
              This page uses clearly labelled demo copy to establish the About
              section structure. It does not state real company history,
              capabilities, certifications, locations, leadership identities, or
              operating claims.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft">
            <Image
              src="/assets/about-office.png"
              alt="Modern corporate office interior"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Explore The Section
            </p>
            <h2 className="heading-lg mt-4">
              About pages ready for verified content.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutLinks.map((item) => {
              const Icon = item.icon ?? Compass;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-teal-50 text-brand-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition group-hover:text-brand-teal">
                    View page
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
