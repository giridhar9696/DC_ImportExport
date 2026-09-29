"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assets";

const equipment = Array.from({ length: 11 }, (_, index) => ({
  id: index,
  image: assetPath(`/assets/equipment/equipment-${index + 1}.png`)
}));

export default function ThreeDCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % equipment.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: -1 | 1) => setActive((current) => (current + direction + equipment.length) % equipment.length);

  return (
    <div className="relative mx-auto mt-12 w-full max-w-6xl overflow-hidden rounded-3xl border border-brand-navy/10 bg-white/45 p-4 shadow-soft backdrop-blur-[2px] sm:p-8">
      <div className="relative flex h-[23rem] items-center justify-center [perspective:1100px] sm:h-[30rem]">
        {equipment.map((item, index) => {
          const rawOffset = (index - active + equipment.length) % equipment.length;
          const offset = rawOffset > equipment.length / 2 ? rawOffset - equipment.length : rawOffset;
          const visible = Math.abs(offset) <= 3;
          const focused = offset === 0;
          return (
            <article
              key={item.id}
              className="absolute left-1/2 top-1/2 h-52 w-36 overflow-hidden rounded-2xl border border-white/80 bg-[#f5f2eb] shadow-[0_24px_50px_rgba(11,31,58,0.22)] transition duration-700 ease-out sm:h-72 sm:w-52"
              style={{
                transform: `translate(-50%, -50%) translateX(calc(${offset} * min(6.5rem, 22vw))) translateZ(${focused ? 40 : -Math.abs(offset) * 80}px) rotateY(${offset * -18}deg) scale(${focused ? 1.08 : 0.78})`,
                opacity: visible ? (focused ? 1 : 0.62) : 0,
                zIndex: 20 - Math.abs(offset),
                pointerEvents: visible ? "auto" : "none"
              }}
            >
              <Image src={item.image} alt="Industrial equipment" fill sizes="(max-width: 640px) 144px, 208px" className="object-cover" priority={index < 3} />
            </article>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-3">
        <button type="button" aria-label="Previous equipment image" onClick={() => move(-1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 bg-white/75 text-brand-navy shadow-sm transition hover:bg-white"><ArrowLeft aria-hidden="true" className="h-4 w-4" /></button>
        <span className="rounded-full border border-brand-navy/10 bg-brand-navy/80 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white">EQUIPMENT RANGE</span>
        <button type="button" aria-label="Next equipment image" onClick={() => move(1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 bg-white/75 text-brand-navy shadow-sm transition hover:bg-white"><ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
