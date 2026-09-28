import { BriefcaseBusiness, UserRound } from "lucide-react";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leadership",
  description:
    "View illustrative leadership placeholders for founder and management content at DC Imports & Exports.",
  path: "/about/leadership"
});

const profiles = [
  {
    section: "Founder",
    title: "Illustrative Demo Profile",
    description:
      "Founder information has not been supplied. This placeholder reserves space for an approved name, role, portrait, and biography.",
    icon: UserRound
  },
  {
    section: "Management",
    title: "Illustrative Demo Profile",
    description:
      "Management information has not been supplied. This placeholder reserves space for approved leadership details and responsibilities.",
    icon: BriefcaseBusiness
  }
];

export default function LeadershipPage() {
  return (
    <>
      <section className="section-spacing bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Leadership
            </p>
            <h1 className="heading-xl mt-4">
              Placeholder leadership structure for approved profiles.
            </h1>
            <p className="body-copy mt-5">
              No verified leadership names, titles, biographies, credentials, or
              portraits have been supplied. The sections below are clearly marked
              illustrative demo profiles.
            </p>
          </div>
          <div className="relative min-h-[340px] overflow-hidden rounded-lg border border-slate-200 shadow-soft">
            <Image
              src="/assets/about-leadership.png"
              alt="Business discussion in a corporate setting"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <article
                key={profile.section}
                className="rounded-lg border border-slate-200 bg-white p-8 shadow-soft"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-brand-teal">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-brand-teal">
                  {profile.section}
                </p>
                <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-navy">
                  {profile.title}
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  {profile.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
