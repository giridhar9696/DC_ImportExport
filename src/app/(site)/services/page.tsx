import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { ServiceCard, ServicesHero } from "./services-ui";
import { serviceHeroImage, services } from "./service-data";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore demo service categories for import, export, logistics, sourcing, documentation, and tariff enquiries.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero
        eyebrow="Our Services"
        title="Structured support for trade conversations."
        description="Illustrative demo content for DC Imports & Exports services, prepared for approved import, export, logistics, sourcing, and documentation details."
        image={serviceHeroImage}
        imageAlt="Container vessel docked at a logistics port"
      />

      <section className="section-spacing bg-white">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
            Service Overview
          </p>
          <h2 className="heading-lg mt-4">
            A clear service structure for international trade needs.
          </h2>
          <p className="body-copy mt-5">
            The services below use meaningful illustrative demo copy. They do not
            claim operational scale, guaranteed outcomes, certifications, or
            regulatory authority.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page">
          <div className="rounded-lg border border-slate-200 bg-brand-navy p-8 text-white shadow-soft sm:p-10 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">
                  Enquiry
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Share your service requirement.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  Use the contact page to begin a conversation. This CTA avoids
                  quoting prices, availability, or commitments until verified
                  business details are provided.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact-us" className="bg-white !text-brand-teal hover:bg-slate-100">
                  Contact Us
                </Button>
                <Link
                  href="/services/tariff"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-teal hover:text-teal-100"
                >
                  View Tariff Note
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
