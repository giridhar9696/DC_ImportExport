import { PlaySquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { demoVideoCards, mediaHeroImage } from "../media-data";
import { MediaHero } from "../media-ui";

export const metadata = pageMetadata({
  title: "Videos",
  description:
    "Review demo video showcase cards prepared for future approved DC Imports & Exports media files.",
  path: "/media/videos"
});

export default function VideosPage() {
  return (
    <>
      <MediaHero
        eyebrow="Videos"
        title="Video showcase prepared for future approved media."
        description="No actual video files were found in the supplied ZIP, so this page uses clearly labelled illustrative demo video cards without fake playable URLs or embedded external media."
        image={mediaHeroImage}
        imageAlt="Premium trade and logistics editorial media visual"
      />

      <section className="section-spacing bg-white">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
            Video Library
          </p>
          <h2 className="heading-lg mt-4">Demo video concepts without fabricated files.</h2>
          <p className="body-copy mt-5">
            These cards show how a video library could be structured once real
            approved video assets are supplied. They are not playable and do not
            reference external or nonexistent media.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {demoVideoCards.map((video) => (
            <article
              key={video.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-brand-teal">
                <PlaySquare aria-hidden="true" className="h-6 w-6" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
                Illustrative Demo Video
              </p>
              <h2 className="mt-3 font-display text-xl font-bold text-brand-navy">
                {video.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{video.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page">
          <div className="rounded-lg bg-brand-navy p-8 text-white shadow-soft sm:p-10 lg:p-12">
            <h2 className="font-display text-3xl font-extrabold">Share approved video material.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-200">
              When verified video files become available, this page can be wired
              to real assets. For now, contact the company through the enquiry page.
            </p>
            <Button href="/contact-us" className="mt-6 bg-white !text-brand-teal hover:bg-slate-100">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
