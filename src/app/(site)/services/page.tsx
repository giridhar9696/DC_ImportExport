import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionNav } from "@/components/ui/section-nav";
import { pageMetadata } from "@/lib/seo";
import { serviceHeroImage, services } from "./service-data";
import { ServicesHero } from "./services-ui";

export const metadata = pageMetadata({ title: "Services", description: "A single-page overview of illustrative trade services.", path: "/services" });
const navItems = [...services.map((service) => ({ label: service.title, href: `#${service.slug}` })), { label: "Contact", href: "#services-contact" }];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero eyebrow="Our Services" title="Structured support for trade conversations." description="Illustrative demo content for DC Imports & Exports services, prepared for approved import, export, logistics, sourcing, and documentation details." image={serviceHeroImage} imageAlt="Container vessel docked at a logistics port" />
      <SectionNav items={navItems} />
      <section className="section-spacing scroll-mt-24 bg-white"><div className="container-page max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Services overview</p><h2 className="heading-lg mt-4">A clear service structure for international trade needs.</h2><p className="body-copy mt-5">The sections below use meaningful illustrative demo copy. They do not claim operational scale, guaranteed outcomes, certifications, or regulatory authority.</p></div></section>
      {services.map((service, index) => { const Icon = service.icon; return <section id={service.slug} key={service.slug} className={`section-spacing scroll-mt-24 ${index % 2 ? "bg-brand-background" : "bg-white"}`}><div className="container-page grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]"><div className={`relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft ${index % 2 ? "lg:order-2" : ""}`}><Image src={service.image} alt={`${service.title} service visual`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div><div className={index % 2 ? "lg:order-1" : ""}><div className="flex items-center gap-4"><span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-brand-teal"><Icon aria-hidden="true" className="h-6 w-6" /></span><p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">0{index + 1} / {service.eyebrow}</p></div><h2 className="heading-lg mt-5">{service.title}</h2><p className="body-copy mt-5">{service.overview}</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{service.principles.map((principle) => <div key={principle} className="border-t border-brand-teal/40 pt-3"><h3 className="text-sm font-bold text-brand-navy">{principle}</h3><p className="mt-2 text-xs leading-5 text-slate-600">Illustrative demo principle.</p></div>)}</div></div></div></section>; })}
      <section id="services-contact" className="section-spacing scroll-mt-24 bg-white"><div className="container-page"><div className="rounded-lg bg-brand-navy p-8 text-white shadow-soft sm:p-10 lg:p-12"><p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">Service enquiry</p><h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Share your trade requirement.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-200">Use the contact page to begin a conversation. This CTA avoids quoting prices, availability, or commitments until verified business details are provided.</p><Button href="/contact-us" className="mt-7 bg-white !text-brand-teal hover:bg-slate-100">Contact Us</Button></div></div></section>
    </>
  );
}
