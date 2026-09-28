import { Award, FileText } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { demoCertificateCards, mediaHeroImage } from "../media-data";
import { MediaHero } from "../media-ui";

export const metadata = pageMetadata({
  title: "Certificates",
  description:
    "View demo certificate placeholders that avoid unverified certification or compliance claims.",
  path: "/media/certificates"
});

export default function CertificatesPage() {
  return (
    <>
      <MediaHero
        eyebrow="Certificates"
        title="Certificate presentation reserved for verified documents."
        description="No genuine certificate documents were found in the supplied ZIP. This page uses clearly labelled demo certificate cards and makes no certification, compliance, issuer, number, or date claims."
        image={mediaHeroImage}
        imageAlt="Premium trade and logistics editorial media visual"
      />

      <section className="section-spacing bg-white">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
            Certificate Documents
          </p>
          <h2 className="heading-lg mt-4">Demo presentation without real certificate claims.</h2>
          <p className="body-copy mt-5">
            Genuine certificates require verified files and approved metadata.
            Since none were supplied, the cards below are placeholders only and
            do not represent actual certification status.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {demoCertificateCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-slate-200 bg-white p-8 shadow-soft"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-brand-teal">
                <Award aria-hidden="true" className="h-6 w-6" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
                Illustrative Demo Certificate
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-brand-navy">
                {card.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-md border border-slate-200 bg-brand-background px-4 py-3 text-sm font-semibold text-slate-700">
                <FileText aria-hidden="true" className="h-5 w-5 text-brand-teal" />
                No certificate file supplied
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
