import { Building2, Clock, FileText, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "./contact-form";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Use the local demo enquiry form to explore contact categories for DC Imports & Exports.",
  path: "/contact-us"
});

const contactHeroImage =
  "/assets/dc ie/stitch_dc_imports_brand_photography/corporate_interior_photography_small_international_business_team_having_an/screen.png";

const contactDetails = [
  {
    title: "Email",
    icon: Mail,
    text: "Illustrative Demo Contact Detail",
    note: "No verified email address has been supplied."
  },
  {
    title: "Phone",
    icon: Phone,
    text: "Illustrative Demo Contact Detail",
    note: "No verified phone number has been supplied."
  },
  {
    title: "Office / Location",
    icon: MapPin,
    text: "Illustrative Demo Contact Detail",
    note: "No verified address, city, or map location has been supplied."
  },
  {
    title: "Business Hours",
    icon: Clock,
    text: "Illustrative Demo Contact Detail",
    note: "No verified business hours have been supplied."
  }
];

const enquiryTypes = [
  {
    title: "Import Enquiry",
    text: "Illustrative demo category for inbound trade questions and information-gathering."
  },
  {
    title: "Export Enquiry",
    text: "Illustrative demo category for outbound trade conversations and shipment context."
  },
  {
    title: "Logistics",
    text: "Illustrative demo category for transport, handoff, and coordination questions."
  },
  {
    title: "Sourcing",
    text: "Illustrative demo category for product discovery and supplier communication topics."
  },
  {
    title: "Documentation",
    text: "Illustrative demo category for trade document readiness and organization."
  },
  {
    title: "General Enquiry",
    text: "Illustrative demo category for broad questions that do not fit another group."
  }
];

export default function ContactUsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={contactHeroImage}
            alt="Business team discussing an international trade enquiry"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.9),rgba(11,31,58,0.68),rgba(11,31,58,0.3))]" />
        </div>
        <div className="container-page flex min-h-[540px] items-center py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">
              Contact Us
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
              Start a clear trade enquiry conversation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              Use this demo contact page to explore how enquiries could be
              collected for DC Imports & Exports. No real contact details,
              routing, email service, CRM, or database connection is configured.
            </p>
            <a
              href="#contact-form"
              className="mt-9 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600"
            >
              Go to Contact Form
            </a>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Contact Purpose
            </p>
            <h2 className="heading-lg mt-4">
              A structured enquiry page for approved business follow-up.
            </h2>
            <p className="body-copy mt-5">
              This page is designed to gather enquiry context in a professional
              format without presenting unverified company contact details as
              real. All submitted data remains in the browser demo interaction.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-brand-background p-6 shadow-soft">
            <Building2 aria-hidden="true" className="h-8 w-8 text-brand-teal" />
            <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">
              Demo-safe communication
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The form and contact cards are placeholders for a future verified
              setup. They avoid invented addresses, phone numbers, email
              recipients, map locations, and service integrations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm />

          <aside className="space-y-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
                Contact Information
              </p>
              <h2 className="heading-lg mt-4">Illustrative contact details.</h2>
              <p className="body-copy mt-5">
                Because no verified details were supplied, these cards are
                labelled as demo placeholders and do not represent real contact
                channels.
              </p>
            </div>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <article
                  key={detail.title}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"
                >
                  <Icon aria-hidden="true" className="h-5 w-5 text-brand-teal" />
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-navy">
                    {detail.title}
                  </h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-brand-teal">
                    {detail.text}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail.note}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Business Enquiry Types
            </p>
            <h2 className="heading-lg mt-4">
              Example categories for organizing conversations.
            </h2>
            <p className="body-copy mt-5">
              These categories are illustrative demo labels only. They help show
              how future enquiries could be sorted without claiming service
              availability, pricing, timelines, or operational commitments.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {enquiryTypes.map((type) => (
              <article
                key={type.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
              >
                <FileText aria-hidden="true" className="h-6 w-6 text-brand-teal" />
                <h3 className="mt-4 font-display text-xl font-bold text-brand-navy">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{type.text}</p>
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
                  Next Steps
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Continue exploring DC Imports & Exports.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  Review the Services page for demo service categories or visit
                  About to understand the company content framework before
                  submitting a more focused enquiry.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/services" className="bg-white text-brand-navy hover:bg-slate-100">
                  View Services
                </Button>
                <Link
                  href="/about"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-teal hover:text-teal-100"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
