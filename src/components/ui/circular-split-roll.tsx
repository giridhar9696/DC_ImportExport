"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assets";

const equipment = Array.from({ length: 11 }, (_, index) => ({
  id: index,
  title: `Equipment ${String(index + 1).padStart(2, "0")}`,
  image: assetPath(`/assets/equipment/equipment-${index + 1}.png`)
}));

export default function CircularSplitRoll() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % equipment.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: -1 | 1) => {
    setActive((current) => (current + direction + equipment.length) % equipment.length);
  };

  return (
    <div className="relative mx-auto mt-12 min-h-[28rem] w-full max-w-6xl overflow-hidden rounded-3xl border border-brand-navy/10 bg-white/55 p-5 shadow-soft backdrop-blur-sm sm:min-h-[34rem] sm:p-8">
      <div className="grid min-h-[24rem] items-center gap-6 lg:grid-cols-2">
        <div className="relative hidden h-[24rem] lg:block">
          {equipment.map((item, index) => {
            const offset = (index - active + equipment.length) % equipment.length;
            const position = offset <= 5 ? offset : offset - equipment.length;
            return (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2 origin-center whitespace-nowrap text-center font-display text-[clamp(1.5rem,3vw,3.5rem)] font-medium tracking-[-0.04em] text-brand-navy transition duration-700"
                style={{
                  transform: `translate(-50%, -50%) translate(${position * -1.2}rem, ${Math.abs(position) * 2.5 - 5}rem) rotate(${position * -5}deg) scale(${position === 0 ? 1 : 0.72})`,
                  opacity: Math.abs(position) > 4 ? 0 : position === 0 ? 1 : 0.2,
                  zIndex: 20 - Math.abs(position)
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>

        <div className="relative h-[22rem] sm:h-[26rem]">
          {equipment.map((item, index) => {
            const offset = (index - active + equipment.length) % equipment.length;
            const position = offset <= 5 ? offset : offset - equipment.length;
            const focused = position === 0;
            return (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2 h-44 w-32 overflow-hidden rounded-2xl border border-white/80 bg-[#f5f2eb] shadow-[0_24px_50px_rgba(11,31,58,0.2)] transition duration-700 sm:h-60 sm:w-44"
                style={{
                  transform: `translate(-50%, -50%) translate(${position * 5.5}rem, ${Math.abs(position) * 0.8}rem) rotate(${position * 7}deg) scale(${focused ? 1.08 : 0.78})`,
                  opacity: Math.abs(position) > 4 ? 0 : focused ? 1 : 0.55,
                  zIndex: 20 - Math.abs(position)
                }}
              >
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 128px, 176px" className="object-cover" priority={index < 3} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-3 sm:bottom-7">
        <button type="button" aria-label="Previous equipment image" onClick={() => move(-1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 bg-white/70 text-brand-navy shadow-sm backdrop-blur transition hover:bg-white">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        </button>
        <span className="rounded-full border border-brand-navy/10 bg-brand-navy/80 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white backdrop-blur-sm">EQUIPMENT RANGE</span>
        <button type="button" aria-label="Next equipment image" onClick={() => move(1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 bg-white/70 text-brand-navy shadow-sm backdrop-blur transition hover:bg-white">
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
