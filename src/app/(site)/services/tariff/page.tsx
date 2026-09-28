import Image from "next/image";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { tariffCategories, tariffImage } from "../service-data";

export const metadata = pageMetadata({
  title: "Tariff",
  description:
    "View illustrative tariff categories for enquiry planning without prices, rates, duties, or regulatory claims.",
  path: "/services/tariff"
});

export default function TariffPage() {
  return (
    <>
      <section className="section-spacing bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Tariff
            </p>
            <h1 className="heading-xl mt-4">
              Illustrative tariff categories for enquiry planning.
            </h1>
            <p className="body-copy mt-5">
              Any tariff information shown on this page is illustrative demo
              content only. It is not an actual quotation, current tariff
              schedule, duty table, tax statement, regulatory instruction, or
              binding commercial offer.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 shadow-soft">
            <Image
              src={tariffImage}
              alt="Trade documents on a desk"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
              Example Categories
            </p>
            <h2 className="heading-lg mt-4">A clean structure without prices or rates.</h2>
            <p className="body-copy mt-5">
              The table below shows example service categories only. No prices,
              duties, taxes, official fees, validity dates, or regulatory claims
              are provided.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
            <div className="hidden grid-cols-[1.1fr_0.8fr_1.4fr] gap-4 border-b border-slate-200 bg-brand-navy px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white md:grid">
              <span>Category</span>
              <span>Basis</span>
              <span>Note</span>
            </div>
            {tariffCategories.map((item) => (
              <article
                key={item.category}
                className="grid gap-3 border-b border-slate-200 px-6 py-5 last:border-b-0 md:grid-cols-[1.1fr_0.8fr_1.4fr] md:gap-4"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-teal md:hidden">
                    Category
                  </p>
                  <h3 className="font-display text-lg font-bold text-brand-navy">
                    {item.category}
                  </h3>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-teal md:hidden">
                    Basis
                  </p>
                  <p className="text-sm font-semibold text-slate-700">{item.basis}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-teal md:hidden">
                    Note
                  </p>
                  <p className="text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-page">
          <div className="rounded-lg bg-brand-navy p-8 text-white shadow-soft sm:p-10 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">
                  Contact Us
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold">
                  Request an enquiry-based discussion.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  Contact DC Imports & Exports to share context. Any formal
                  pricing or tariff information must come from approved business
                  communication, not this demo page.
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
