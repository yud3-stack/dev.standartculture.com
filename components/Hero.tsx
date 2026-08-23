"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FanCard } from "./FanCard";
import { copy, type Locale } from "@/data/content";
import { fanCards } from "@/data/fanCards";

export function Hero({ locale }: { locale: Locale }) {
  const text = copy[locale].hero;
  return (
    <section className="relative isolate mx-auto flex min-h-[650px] max-w-7xl flex-col items-center overflow-hidden px-6 pb-12 pt-8 text-center md:min-h-[720px] md:px-10 md:pb-16 md:pt-12">
      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        <p className="mb-6 text-[11px] font-regular tracking-[0.2em] text-[#E73C29]">STANDART CULTURE</p>
        <h1 className="max-w-4xl text-5xl text-[#29282D] font-bold leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
          {text.words.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.15 + index * 0.16 }}
              className="mr-[0.23em] inline-block last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#29282D]">{text.description}</p>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 top-[220px] z-0 flex h-[260px] items-end justify-center px-6 sm:top-[280px] sm:h-[390px] sm:px-28 md:top-[300px]">
        {fanCards[locale].map((card, index) => <FanCard key={card.id} index={index} {...card} />)}
      </div>
      <div className="relative z-10 mt-auto pt-16 sm:pt-24">
        <Link href="#projeler" className="inline-flex rounded-full bg-[#fff] px-6 shadow-[0_3px_15px_rgba(0,0,0,0.16)] py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">{text.cta}</Link>
      </div>
    </section>
  );
}
