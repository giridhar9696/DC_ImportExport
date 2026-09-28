import { Compass, Eye, Target } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Vision & Mission",
  description:
    "Review demo-safe vision, mission, and principles content for DC Imports & Exports.",
  path: "/about/vision-mission"
});

export default function VisionMissionPage() {
  return (
    <>
      <section className="section-spacing bg-white">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
            Vision & Mission
          </p>
          <h1 className="heading-xl mt-4">
            Direction and purpose for a future approved narrative.
          </h1>
          <p className="body-copy mt-5">
            The statements below are neutral illustrative demo copy only. They do
            not represent verified corporate commitments or operational claims.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-8 shadow-soft">
            <Eye aria-hidden="true" className="h-8 w-8 text-brand-teal" />
            <h2 className="mt-5 font-display text-3xl font-extrabold text-brand-navy">
              Vision
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Illustrative demo vision: to present a clear, professional, and
              globally aware trade presence that helps audiences understand the
              company at a glance.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-8 shadow-soft">
            <Target aria-hidden="true" className="h-8 w-8 text-brand-teal" />
            <h2 className="mt-5 font-display text-3xl font-extrabold text-brand-navy">
              Mission
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Illustrative demo mission: to structure import, export, logistics,
              sourcing, and documentation messages in a way that is concise,
              accessible, and ready for verified business detail.
            </p>
          </article>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Principles
            </p>
            <h2 className="heading-lg mt-4">Neutral demo values framework.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Clarity", "Responsiveness", "Professional Care"].map((value) => (
              <article
                key={value}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
              >
                <Compass aria-hidden="true" className="h-6 w-6 text-brand-teal" />
                <h3 className="mt-4 font-display text-xl font-bold text-brand-navy">
                  {value}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Illustrative demo principle for future approved brand and
                  operations messaging.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
