import { Newspaper } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { demoPressItems, mediaHeroImage } from "../media-data";
import { MediaHero } from "../media-ui";

export const metadata = pageMetadata({
  title: "Press",
  description:
    "Review illustrative press item cards reserved for future verified DC Imports & Exports announcements.",
  path: "/media/press"
});

export default function PressPage() {
  return (
    <>
      <MediaHero
        eyebrow="Press"
        title="Press layout reserved for verified company news."
        description="No verified press releases or media coverage were supplied, so this page uses clearly labelled illustrative demo press items without fake outlets, dates, achievements, or article links."
        image={mediaHeroImage}
        imageAlt="Premium trade and logistics editorial media visual"
      />

      <section className="section-spacing bg-white">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
            Press Items
          </p>
          <h2 className="heading-lg mt-4">A polished structure for approved announcements.</h2>
          <p className="body-copy mt-5">
            These cards demonstrate a future press layout. They do not claim real
            coverage, partnerships, awards, announcements, publication dates, or
            media organization names.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {demoPressItems.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
            >
              <Newspaper aria-hidden="true" className="h-7 w-7 text-brand-teal" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
                Illustrative Demo Press Item
              </p>
              <h2 className="mt-3 font-display text-xl font-bold text-brand-navy">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
