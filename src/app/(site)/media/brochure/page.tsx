import { BookOpen, FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { mediaSections } from "../media-data";

export const metadata = pageMetadata({
  title: "Brochure",
  description:
    "View a demo brochure preview state for future approved DC Imports & Exports PDF materials.",
  path: "/media/brochure"
});

export default function BrochurePage() {
  const brochureImage = mediaSections.find((section) => section.title === "Brochure")?.image;

  return (
    <>
      <section className="section-spacing bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Brochure
            </p>
            <h1 className="heading-xl mt-4">Demo brochure preview without a fabricated PDF.</h1>
            <p className="body-copy mt-5">
              No actual brochure PDF was found in the supplied ZIP. This page
              presents a clearly labelled preview state and does not create a
              fake download URL, file, or document.
            </p>
          </div>
          {brochureImage ? (
            <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft">
              <Image
                src={brochureImage}
                alt="Business journal style brochure preview visual"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
            <BookOpen aria-hidden="true" className="h-8 w-8 text-brand-teal" />
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-brand-teal">
              Demo Brochure Preview
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-brand-navy">
              Company brochure area reserved for approved materials.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              This section can later display a verified brochure PDF using its
              exact supplied filename. Until then, it avoids downloads and keeps
              the page honest about the missing asset.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-slate-200 bg-brand-background px-4 py-3 text-sm font-semibold text-slate-700">
              <FileText aria-hidden="true" className="h-5 w-5 text-brand-teal" />
              No brochure PDF supplied
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page">
          <div className="rounded-lg bg-brand-navy p-8 text-white shadow-soft sm:p-10 lg:p-12">
            <h2 className="font-display text-3xl font-extrabold">Request brochure information.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-200">
              Use the Contact Us page to ask about approved company materials.
              This demo page does not publish unverified documents.
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
