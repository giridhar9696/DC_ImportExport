import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { assetPath } from "@/lib/assets";

export const metadata = pageMetadata({
  title: "History",
  description:
    "Explore an illustrative company history timeline prepared for verified DC Imports & Exports milestones.",
  path: "/about/history"
});

const timeline = [
  {
    label: "Demo Phase",
    title: "Company foundation story placeholder",
    description:
      "Illustrative demo content for a future verified origin story. No actual founding date or founder claim is supplied here."
  },
  {
    label: "Demo Phase",
    title: "Trade operations narrative placeholder",
    description:
      "Illustrative demo content for describing process maturity once approved business details are available."
  },
  {
    label: "Demo Phase",
    title: "Growth and market presence placeholder",
    description:
      "Illustrative demo content only. This does not claim markets served, client names, awards, certifications, or volume."
  }
];

export default function HistoryPage() {
  return (
    <>
      <section className="section-spacing bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Our History
            </p>
            <h1 className="heading-xl mt-4">
              A timeline prepared for verified company milestones.
            </h1>
            <p className="body-copy mt-5">
              The entries below are labelled illustrative demo content. They are
              placeholders for real history once dates, milestones, and approved
              company facts are provided.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft">
            <Image
              src={assetPath("/assets/about-history.png")}
              alt="Archival style trade documentation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 md:grid-cols-[180px_1fr]"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-teal">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-3xl font-extrabold text-brand-navy">
                    0{index + 1}
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-navy">
                    {item.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
