import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  ClipboardList,
  Handshake,
  MessageSquareText,
  Sprout,
  UsersRound
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { assetPath } from "@/lib/assets";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Explore demo-safe careers content and illustrative opportunity categories at DC Imports & Exports.",
  path: "/careers"
});

const heroImage =
  assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/corporate_culture_photography_a_group_of_dynamic_diverse_young_indian_logistics/screen.png");

const workplaceImage =
  assetPath("/assets/dc ie/stitch_dc_imports_brand_photography/corporate_interior_photography_small_international_business_team_having_an/screen.png");

const workCards = [
  {
    title: "Trade-Focused Work",
    icon: BriefcaseBusiness,
    text: "Illustrative demo content for candidates interested in import, export, logistics, sourcing, and documentation workflows."
  },
  {
    title: "Structured Communication",
    icon: MessageSquareText,
    text: "Illustrative demo content showing how clear updates and careful handoffs could support professional trade coordination."
  },
  {
    title: "Collaborative Environment",
    icon: UsersRound,
    text: "Illustrative demo content only. This does not claim verified company culture, team size, employment benefits, or policies."
  },
  {
    title: "Professional Learning",
    icon: BookOpenCheck,
    text: "Illustrative demo content for future approved learning narratives, without promising training programs or career outcomes."
  }
];

const principles = [
  {
    title: "Learning & Development",
    icon: Sprout,
    text: "Illustrative demo principle for presenting a workplace that values continued learning once verified policies are supplied."
  },
  {
    title: "Collaboration",
    icon: Handshake,
    text: "Illustrative demo principle for describing respectful coordination across trade, documentation, and customer-facing tasks."
  },
  {
    title: "Responsibility",
    icon: ClipboardList,
    text: "Illustrative demo principle for showing careful ownership of communication, follow-through, and process awareness."
  },
  {
    title: "Professional Growth",
    icon: ArrowRight,
    text: "Illustrative demo principle only. It does not promise promotions, salary growth, employee benefits, or guaranteed advancement."
  }
];

const opportunities = [
  {
    title: "Import & Export Operations",
    description:
      "Illustrative demo opportunity for work connected to shipment coordination, trade communication, and process follow-up.",
    bullets: [
      "Support organized import/export communication",
      "Track demo workflow checkpoints",
      "Coordinate information for internal review"
    ]
  },
  {
    title: "Logistics Coordination",
    description:
      "Illustrative demo opportunity for candidates interested in transport, warehouse, and movement-related coordination.",
    bullets: [
      "Prepare movement status summaries",
      "Assist with handoff communication",
      "Maintain clear coordination notes"
    ]
  },
  {
    title: "Documentation Support",
    description:
      "Illustrative demo opportunity for document-oriented trade support without implying legal, customs, or regulatory advisory work.",
    bullets: [
      "Organize document checklists",
      "Track version-ready information",
      "Support structured record preparation"
    ]
  },
  {
    title: "Business Development",
    description:
      "Illustrative demo opportunity for communication and enquiry support related to future market conversations.",
    bullets: [
      "Prepare enquiry summaries",
      "Support professional follow-up",
      "Organize demo prospect communication"
    ]
  }
];

export default function CareersPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt="Professional logistics team in a corporate setting"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.9),rgba(11,31,58,0.68),rgba(11,31,58,0.3))]" />
        </div>
        <div className="container-page flex min-h-[560px] items-center py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">
              Careers
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
              Explore career opportunities in trade coordination.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              This Careers page uses illustrative demo content for a corporate
              website concept. It does not state current vacancies, hiring
              guarantees, benefits, locations, salaries, or employment conditions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#opportunities"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600"
              >
                Explore Opportunities
              </a>
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
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Why Work With Us
            </p>
            <h2 className="heading-lg mt-4">
              A demo careers framework for professional trade roles.
            </h2>
            <p className="body-copy mt-5">
              The cards below describe themes someone might consider when
              exploring a career in import-export work. They are illustrative
              only and should be replaced with verified workplace information
              before publication.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft">
            <Image
              src={workplaceImage}
              alt="Small business team in a modern office"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="container-page mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-teal-50 text-brand-teal">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Career Principles
            </p>
            <h2 className="heading-lg mt-4">
              Illustrative principles for future careers content.
            </h2>
            <p className="body-copy mt-5">
              These principles are demo-safe content themes. They are not
              verified company policies, employee benefits, development programs,
              or employment promises.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <article
                  key={principle.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-brand-teal" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-brand-navy">
                    {principle.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{principle.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="opportunities" className="section-spacing scroll-mt-32 bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Current Opportunities
            </p>
            <h2 className="heading-lg mt-4">
              Demo opportunity categories, not live vacancies.
            </h2>
            <p className="body-copy mt-5">
              No real vacancies have been supplied. The cards below are clearly
              labelled illustrative demo opportunities and do not include salary,
              location, experience requirements, deadlines, or employment terms.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {opportunities.map((role) => (
              <article
                key={role.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
              >
                <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
                  Demo Opportunity
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">
                  {role.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{role.description}</p>
                <div className="mt-5">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-navy">
                    Example responsibilities
                  </p>
                  <ul className="mt-3 space-y-2">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:text-brand-teal"
                >
                  Enquire About This Role
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
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
                  Application Enquiry
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Start with a demo careers enquiry.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  Interested candidates can use the Contact Us page to share a
                  general enquiry. This demo website does not provide a real
                  recruitment email, phone number, portal, or application form.
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
