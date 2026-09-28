import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { mediaHeroImage, photoGallery } from "../media-data";
import { MediaHero } from "../media-ui";

export const metadata = pageMetadata({
  title: "Photos",
  description:
    "View a responsive gallery of verified supplied images for trade, logistics, workplace, and documentation themes.",
  path: "/media/photos"
});

export default function PhotosPage() {
  return (
    <>
      <MediaHero
        eyebrow="Photos"
        title="Verified visual assets for trade and logistics storytelling."
        description="A responsive gallery using only supplied ZIP images. Captions are clearly illustrative demo content and do not claim real events, locations, clients, dates, or achievements."
        image={mediaHeroImage}
        imageAlt="Premium trade and logistics editorial media visual"
      />

      <section className="section-spacing bg-white">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
            Photo Gallery
          </p>
          <h2 className="heading-lg mt-4">Curated imagery from supplied assets.</h2>
          <p className="body-copy mt-5">
            The gallery organizes verified assets into useful visual themes for a
            corporate trading website. These are demo visuals only and should be
            replaced or approved before any real-world publication.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-brand-background">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {photoGallery.map((photo, index) => (
            <article
              key={photo.src}
              className={`group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-brand-navy">
                  {photo.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{photo.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
