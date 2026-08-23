"use client";
import { motion } from "framer-motion";
import { copy, type Locale } from "@/data/content";
import type { BussinesCard } from "@/data/bussines";
import { ArrowUpRight } from "lucide-react";

export function BussinesSlider({ locale, cards }: { locale: Locale; cards: BussinesCard[] }) {
  const text = copy[locale].business;
  const marqueeCards = cards.length > 0 ? [...cards, ...cards] : [];

  return (
    <section className="py-14 text-center overflow-hidden border-y border-neutral-200">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
      >
        <h2 className="text-7xl font-semibold mb-16">
          {text.titleBefore}
          <span className="text-[#E73C29]">{text.titleHighlight}</span>
          {text.titleAfter}
        </h2>
      </motion.div>

      <div className="group relative w-full overflow-hidden marquee-container pt-8 pb-2">
        <div className="flex relative w-max gap-6 animate-scroll marquee-track group-hover:[animation-play-state:paused]">
          {marqueeCards.map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              className="flex-none h-90 w-96 overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-4"
            >
              <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        className="w-full pt-12 flex flex-row justify-center px-16 items-center"
      >
        <button className="group flex flex-row items-center gap-2 font-regular text-4xl cursor-pointer transition-colors duration-300">
          <span className="relative">
            {text.cta}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#29282D] transition-all duration-300 group-hover:w-full" />
          </span>
          <ArrowUpRight
            size={48}
            strokeWidth={1.5}
            className="transition-transform duration-300 ease-in-out group-hover:rotate-[45deg] group-hover:translate-x-1"
          />
        </button>
      </motion.div>
    </section>
  );
}
