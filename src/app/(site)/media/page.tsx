import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { mediaHeroImage, mediaSections } from "./media-data";
import { MediaHero } from "./media-ui";
import { SectionSubnav } from "@/components/ui/section-subnav";

export const metadata = pageMetadata({
  title: "Media",
  description:
    "Browse demo-safe media sections for photos, videos, press, brochure, and certificates.",
  path: "/media"
});

export default function MediaPage() {
  return (
    <>
      <MediaHero
        eyebrow="Media"
        title="Media resources prepared for approved company content."
        description="A polished media center for DC Imports & Exports using verified supplied imagery and demo-safe layouts for future photos, videos, press, brochure, and certificate materials."
        image={mediaHeroImage}
        imageAlt="Premium trade and logistics editorial media visual"
      />

      <section className="bg-brand-background py-4">
        <div className="container-page">
          <SectionSubnav items={mediaSections.map((section) => ({ label: section.title, href: section.href }))} />
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
            Media Overview
          </p>
          <h2 className="heading-lg mt-4">Organized access to visual and document sections.</h2>
          <p className="body-copy mt-5">
            Each card links to a dedicated media page. Where verified files do
            not exist, the section uses clearly labelled illustrative demo states
            rather than fabricated media or downloads.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mediaSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={section.image}
                    alt={`${section.title} media visual`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-teal-50 text-brand-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-bold text-brand-navy">
                    {section.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">{section.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition group-hover:text-brand-teal">
                    View section
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page">
          <div className="rounded-lg bg-brand-navy p-8 text-white shadow-soft sm:p-10 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">
                  Media Enquiry
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold">
                  Request approved media information.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  Use the Contact Us page for media-related enquiries. This demo
                  section does not publish unverified documents, press coverage,
                  certificates, or external links.
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
