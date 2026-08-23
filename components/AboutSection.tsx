"use client";
import { motion } from "framer-motion";
import { copy, type Locale } from "@/data/content";

export function AboutSection({ locale }: { locale: Locale }) {
  const text = copy[locale].about;
  return <section id="hakkimizda" className="border-y border-neutral-200 px-6 py-24 md:px-10 md:py-36">
    <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }} className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
      <p className="text-[11px] font-black tracking-[0.2em] text-[#e63946]">{text.label}</p>
      <div><h2 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.06em] md:text-6xl">{text.title}</h2><p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600">{text.description}</p></div>
    </motion.div>
  </section>;
}
