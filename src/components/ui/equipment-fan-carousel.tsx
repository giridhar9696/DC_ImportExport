"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assets";

const equipment = Array.from({ length: 11 }, (_, index) => assetPath(`/assets/equipment/equipment-${index + 1}.png`));

export function EquipmentFanCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % equipment.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  const rotate = (direction: -1 | 1) => setActive((current) => (current + direction + equipment.length) % equipment.length);

  return (
    <div className="equipment-fan relative mx-auto mt-12 h-[26rem] w-full max-w-6xl overflow-hidden sm:h-[34rem]">
      <div className="absolute inset-x-0 top-1/2 h-56 -translate-y-1/2 sm:h-72">
        {equipment.map((src, index) => {
          const offset = (index - active + equipment.length) % equipment.length;
          const position = offset <= 5 ? offset : offset - equipment.length;
          const isActive = position === 0;
          return (
            <div
              key={src}
              className="equipment-fan__card absolute left-1/2 top-1/2 h-44 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_18px_40px_rgba(11,31,58,0.2)] sm:h-64 sm:w-48"
              style={{
                zIndex: 20 - Math.abs(position),
                transform: `translate(-50%, -50%) translateX(${position * 7.5}rem) translateY(${Math.abs(position) * 0.75}rem) rotate(${position * 7}deg) scale(${isActive ? 1.08 : 0.88})`,
                opacity: Math.abs(position) > 4 ? 0 : isActive ? 1 : 0.78
              }}
            >
              <Image src={src} alt="Industrial equipment" fill sizes="(max-width: 640px) 128px, 192px" className="object-cover" priority={index < 3} />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-3">
        <button type="button" aria-label="Previous equipment image" onClick={() => rotate(-1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 bg-white/85 text-brand-navy shadow-sm backdrop-blur transition hover:bg-white">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        </button>
        <span className="rounded-full bg-brand-navy px-4 py-2 text-xs font-medium tracking-[0.16em] text-white">EQUIPMENT RANGE</span>
        <button type="button" aria-label="Next equipment image" onClick={() => rotate(1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/15 bg-white/85 text-brand-navy shadow-sm backdrop-blur transition hover:bg-white">
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
