import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { processIcon, type services } from "./service-data";

type Service = (typeof services)[number];

export function ServicesHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = ""
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="container-page flex min-h-[500px] items-center py-20 sm:py-24">
        <div className="hero-copy-panel max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} service`}
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
          {service.title}
        </h2>
        <p className="mt-3 leading-7 text-slate-600">{service.intro}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition group-hover:text-brand-teal">
          View service
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon;
  const ProcessIcon = processIcon;

  return (
    <>
      <ServicesHero
        eyebrow={service.eyebrow}
        title={`${service.title} Services`}
        description={service.intro}
        image={service.image}
        imageAlt={`${service.title} service visual`}
      />

      <section className="section-spacing bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-teal-50 text-brand-teal">
              <Icon aria-hidden="true" className="h-7 w-7" />
            </span>
            <h2 className="heading-lg mt-6">Service overview</h2>
            <p className="body-copy mt-5">{service.overview}</p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft">
            <Image
              src={service.image}
              alt={`${service.title} visual`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Process
            </p>
            <h2 className="heading-lg mt-4">A simple coordination flow.</h2>
            <p className="body-copy mt-5">
              These steps are illustrative demo content and should be replaced
              with approved internal workflows when available.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1"
              >
                <ProcessIcon aria-hidden="true" className="h-6 w-6 text-brand-teal" />
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-teal">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Benefits & Principles
            </p>
            <h2 className="heading-lg mt-4">Helpful service principles.</h2>
            <p className="body-copy mt-5">
              These points describe a responsible content direction without
              making unverifiable operational guarantees.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {service.principles.map((principle) => (
              <article
                key={principle}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h3 className="font-display text-xl font-bold text-brand-navy">
                  {principle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Illustrative demo principle for future approved service copy.
                </p>
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
                  Contact Us
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold">
                  Discuss {service.title.toLowerCase()} requirements.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  Send an enquiry through the contact page so approved business
                  details can be collected before a tailored response is prepared.
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
