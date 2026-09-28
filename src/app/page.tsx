import { ArrowRight, ClipboardCheck, FileText, Globe2, PackageCheck, Ship, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EquipmentFanCarousel } from "@/components/ui/equipment-fan-carousel";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Home",
  description:
    "DC Imports & Exports demo corporate website for international trade, logistics, sourcing, documentation, and enquiries.",
  path: "/"
});

const serviceCards = [
  {
    title: "Import",
    description:
      "Illustrative demo content for inbound trade coordination, supplier communication, and shipment planning.",
    href: "/services",
    image: "/assets/home-import-export.png",
    icon: PackageCheck
  },
  {
    title: "Export",
    description:
      "Illustrative demo content for outbound cargo movement, customer coordination, and market-ready trade workflows.",
    href: "/services",
    image: "/assets/home-hero-ship.png",
    icon: Ship
  },
  {
    title: "Logistics",
    description:
      "Illustrative demo content for freight movement, transport planning, and connected supply chain visibility.",
    href: "/services",
    image: "/assets/home-logistics.png",
    icon: Truck
  },
  {
    title: "Sourcing",
    description:
      "Illustrative demo content for product discovery, vendor conversations, and practical procurement support.",
    href: "/services",
    image: "/assets/home-sourcing.png",
    icon: Globe2
  },
  {
    title: "Documentation",
    description:
      "Illustrative demo content for trade paperwork, document readiness, and process-aligned coordination.",
    href: "/services",
    image: "/assets/home-documentation.png",
    icon: FileText
  }
];

const whyItems = [
  "Clear communication across trade touchpoints",
  "Structured workflows for import and export movement",
  "Practical coordination from sourcing to documentation",
  "Professional presentation for international market conversations"
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 -z-10">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/assets/home-hero-ship.png" aria-label="Cargo ship at sea">
            <source src="/assets/home-cargo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="container-page flex min-h-[640px] items-center py-20 sm:py-24 lg:min-h-[720px]">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-white">
              International Trade Coordination
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Connecting Markets. Moving Possibilities.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white sm:text-xl">
              Demo home page copy for DC Imports & Exports, presenting a polished
              foundation for import, export, logistics, sourcing, and trade
              documentation services.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/services">Explore Services</Button>
              <Button
                href="/contact-us"
                variant="secondary"
                className="border-white/40 bg-white/95 !text-brand-teal"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft sm:min-h-[460px]">
            <Image
              src="/assets/home-global-trade.png"
              alt="Aerial view of a busy international port"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Company Introduction
            </p>
            <h2 className="heading-lg mt-4">
              A focused digital presence for global trade conversations.
            </h2>
            <p className="body-copy mt-5">
              This illustrative demo section introduces DC Imports & Exports with
              a concise, professional tone suitable for an international trading
              company. Detailed company history, leadership information, and
              verified operational details can be added in the next content phase.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-brand-navy transition hover:text-brand-teal"
            >
              About Us
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Services Overview
            </p>
            <h2 className="heading-lg mt-4">
              Core trade services prepared for detailed page content.
            </h2>
            <p className="body-copy mt-5">
              The following cards use illustrative demo copy and supplied visual
              assets. They are ready to be replaced or expanded with approved
              service descriptions.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} service visual`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal-50 text-brand-teal">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-brand-navy">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Why Choose Us
            </p>
            <h2 className="heading-lg mt-4">
              Built for clarity across global trade workflows.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyItems.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
              >
                <ClipboardCheck aria-hidden="true" className="h-6 w-6 text-brand-teal" />
                <p className="mt-4 text-base font-semibold leading-7 text-brand-navy">
                  {item}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Illustrative demo content only.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing overflow-hidden bg-brand-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-teal">Equipment Range</p>
            <h2 className="heading-lg mt-4">Built around the equipment that keeps cargo moving.</h2>
            <p className="body-copy mt-5">Explore a practical range of handling, transport, and industrial equipment supporting global trade operations.</p>
          </div>
          <EquipmentFanCarousel />
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="overflow-hidden rounded-lg bg-brand-navy px-6 py-12 text-white shadow-soft sm:px-10 lg:px-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-teal-100">
                  Contact Us
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Start a trade conversation with DC Imports & Exports.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                  Share your enquiry through the contact page. This call-to-action
                  uses demo copy and is ready for approved business messaging.
                </p>
              </div>
              <Button href="/contact-us" className="bg-white !text-brand-teal hover:bg-slate-100">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
