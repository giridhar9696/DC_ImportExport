import { ArrowRight, BookOpen, Compass, UsersRound } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionNav } from "@/components/ui/section-nav";
import { assetPath } from "@/lib/assets";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "About", description: "A single-page overview of DC Imports & Exports.", path: "/about" });

const sections = [
  { label: "About", href: "#company" },
  { label: "History", href: "#history" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#about-contact" }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 -z-10"><Image src={assetPath("/assets/about-hero-port.png")} alt="Wide view of port infrastructure" fill priority sizes="100vw" className="object-cover" /></div>
        <div className="container-page flex min-h-[520px] items-center py-20 sm:py-24"><div className="hero-copy-panel max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">About DC Imports & Exports</p><h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">A clear corporate foundation for international trade.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">Illustrative demo content for presenting DC Imports & Exports with a professional tone. Verified company details can be added when supplied.</p></div></div>
      </section>
      <SectionNav items={sections} />

      <section id="company" className="section-spacing scroll-mt-24 bg-white"><div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">About the company</p><h2 className="heading-lg mt-4">Connecting market conversations with disciplined trade coordination.</h2><p className="body-copy mt-5">This page uses clearly labelled demo copy to establish the About section structure. It does not state real company history, capabilities, certifications, locations, leadership identities, or operating claims.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Who we are", "What we do"].map((title) => <div key={title} className="border-l-2 border-brand-teal pl-4"><h3 className="font-display text-xl font-bold text-brand-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">Illustrative content placeholder for approved company information.</p></div>)}</div></div><div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft"><Image src={assetPath("/assets/about-office.png")} alt="Modern corporate office interior" fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" /></div></div></section>

      <section id="history" className="section-spacing scroll-mt-24 bg-brand-background"><div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Our history</p><h2 className="heading-lg mt-4">A timeline ready for verified milestones.</h2><p className="body-copy mt-5">No factual company milestones were supplied, so this editable timeline stays clearly illustrative.</p></div><div className="relative border-l border-brand-teal/30 pl-7">{["Foundation", "Growth", "Today"].map((title, index) => <article key={title} className="relative pb-8 last:pb-0"><span className="absolute -left-[2.1rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal text-xs font-bold text-white">{index + 1}</span><p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">Editable milestone</p><h3 className="mt-2 font-display text-2xl font-bold text-brand-navy">{title}</h3><p className="mt-2 leading-7 text-slate-600">Illustrative placeholder for an approved company milestone and supporting context.</p></article>)}</div></div></section>

      <section id="vision" className="section-spacing scroll-mt-24 bg-white"><div className="container-page"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Vision & mission</p><h2 className="heading-lg mt-4">A thoughtful framework for future approved direction.</h2></div><div className="mt-10 grid gap-6 md:grid-cols-3">{[{ title: "Vision", icon: Compass }, { title: "Mission", icon: BookOpen }, { title: "Working principles", icon: UsersRound }].map(({ title, icon: Icon }) => <article key={title} className="border-t-2 border-brand-teal bg-brand-background p-6"><Icon aria-hidden="true" className="h-7 w-7 text-brand-teal" /><h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">{title}</h3><p className="mt-3 leading-7 text-slate-600">Neutral demo statements for direction, purpose, and responsible trade communication.</p></article>)}</div></div></section>

      <section id="leadership" className="section-spacing scroll-mt-24 bg-brand-background"><div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"><div className="relative min-h-[380px] overflow-hidden rounded-lg border border-slate-200 shadow-soft"><Image src={assetPath("/assets/about-leadership.png")} alt="Illustrative leadership workspace" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" /></div><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Leadership</p><h2 className="heading-lg mt-4">Leadership information can be added with approved profiles.</h2><p className="body-copy mt-5">No real names, credentials, achievements, or positions are claimed here. This section is ready for verified founder and management information.</p><div className="mt-8 space-y-4"><div className="border-b border-slate-200 pb-4"><h3 className="font-display text-xl font-bold text-brand-navy">Founder profile</h3><p className="mt-1 text-sm text-slate-600">Editable placeholder for approved profile content.</p></div><div className="border-b border-slate-200 pb-4"><h3 className="font-display text-xl font-bold text-brand-navy">Management profile</h3><p className="mt-1 text-sm text-slate-600">Editable placeholder for approved profile content.</p></div></div></div></div></section>

      <section id="about-contact" className="section-spacing scroll-mt-24 bg-white"><div className="container-page"><div className="rounded-lg bg-brand-navy p-8 text-white shadow-soft sm:p-10 lg:p-12"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">Get in touch</p><h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Continue the conversation with DC Imports & Exports.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-200">Use the contact page for an enquiry. This demo CTA makes no claims about availability or response times.</p><Button href="/contact-us" className="mt-7 bg-white !text-brand-teal hover:bg-slate-100">Contact Us <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></Button></div></div></section>
    </>
  );
}
