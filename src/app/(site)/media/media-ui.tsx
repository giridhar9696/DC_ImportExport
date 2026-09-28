import Image from "next/image";

export function MediaHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = ""
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.9),rgba(11,31,58,0.68),rgba(11,31,58,0.3))]" />
      </div>
      <div className="container-page flex min-h-[500px] items-center py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
