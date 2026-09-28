import { ClipboardCheck, Container, ShieldCheck, Warehouse } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { assetPath } from "@/lib/assets";

export const metadata = pageMetadata({
  title: "Facility",
  description:
    "Explore illustrative facility content for trade, warehousing, documentation, and logistics workflows.",
  path: "/facility"
});

const heroImage =
  assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/industrial_architecture_photography_massive_high_bay_automated_warehouse/screen.png");

const introImage =
  assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/modern_logistics_warehousing_multi_tier_modern_logistics_distribution_center/screen.png");

const features = [
  {
    title: "Receiving & Dispatch Flow",
    icon: Container,
    text: "Illustrative demo content for showing how incoming and outgoing goods movement could be organized in a future verified facility narrative."
  },
  {
    title: "Storage Coordination",
    icon: Warehouse,
    text: "Illustrative demo content for presenting structured storage conversations without claiming any specific area, capacity, or equipment."
  },
  {
    title: "Documentation Touchpoints",
    icon: ClipboardCheck,
    text: "Illustrative demo content for connecting facility activity with document readiness, handoff notes, and communication checkpoints."
  },
  {
    title: "Careful Handling Principles",
    icon: ShieldCheck,
    text: "Illustrative demo content for describing a careful working approach without asserting certifications, standards, or guaranteed outcomes."
  }
];

const gallery = [
  {
    src: heroImage,
    title: "Warehouse Interior",
    alt: "High bay warehouse interior"
  },
  {
    src: introImage,
    title: "Logistics Center",
    alt: "Modern logistics distribution center"
  },
  {
    src: assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/industrial_documentary_photography_experienced_warehouse_and_port_logistics/screen.png"),
    title: "Operational Coordination",
    alt: "Warehouse and port logistics coordination"
  },
  {
    src: assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/industrial_port_photography_heavy_duty_container_gantry_cranes_towering_against/screen.png"),
    title: "Port Interface",
    alt: "Container gantry cranes at port"
  },
  {
    src: assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/maritime_cargo_operations_close_up_view_of_heavy_container_twistlocks_and/screen.png"),
    title: "Cargo Detail",
    alt: "Close view of cargo securing hardware"
  }
];

export default function FacilityPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt="Warehouse facility interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.9),rgba(11,31,58,0.68),rgba(11,31,58,0.28))]" />
        </div>
        <div className="container-page flex min-h-[540px] items-center py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">
              Facility
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
              A polished facility overview for trade and logistics support.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              Illustrative demo content for presenting DC Imports & Exports
              facility-related workflows. No addresses, capacities, equipment
              specifications, certifications, or operational claims are stated.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Facility Introduction
            </p>
            <h2 className="heading-lg mt-4">
              Designed as a content framework for verified facility details.
            </h2>
            <p className="body-copy mt-5">
              This section describes how a facility page can communicate receiving,
              storage coordination, documentation touchpoints, and shipment-facing
              workflows once approved information is available. The current copy
              is illustrative demo content only.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft">
            <Image
              src={introImage}
              alt="Modern logistics warehousing"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Facility Features
            </p>
            <h2 className="heading-lg mt-4">
              Illustrative capabilities for future approved content.
            </h2>
            <p className="body-copy mt-5">
              These feature cards are intentionally neutral. They describe useful
              content themes without asserting real facility size, location,
              machinery, service guarantees, or compliance status.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-teal-50 text-brand-teal">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Visual Gallery
            </p>
            <h2 className="heading-lg mt-4">
              Verified asset gallery for facility storytelling.
            </h2>
            <p className="body-copy mt-5">
              The images below are selected from the supplied ZIP assets and used
              as illustrative visuals only. They do not verify actual DC Imports
              & Exports facility locations, equipment, capacity, or operations.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <article
                key={item.src}
                className={`group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Illustrative demo visual from supplied assets.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="rounded-lg bg-brand-navy p-8 text-white shadow-soft sm:p-10 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">
                  Facility Enquiry
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold">
                  Share facility-related requirements.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  Use the contact page to provide context. Verified facility
                  details, availability, and service information should be shared
                  through approved business communication.
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
