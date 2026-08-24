"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import type { Locale } from "@/data/content";

export function ProjectCard({ project, index, locale, action }: { project: Project; index: number; locale: Locale; action: string }) {
  const detailPath = locale === "tr" ? `/tr/projeler/${project.slug}` : `/projects/${project.slug}`;
  return <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.5, delay: index * 0.12 }}>
    <Link href={detailPath} className="group block rounded-2xl border border-neutral-200 p-5 transition-shadow hover:shadow-xl">
      <div className="flex items-start justify-between text-[11px] font-regular tracking-[0.18em]"><span>{project.id}</span><span className="text-[#e63946]">{project.year}</span></div>
      <div className="my-12 flex aspect-[4/3] items-center justify-center rounded-xl" style={{ backgroundColor: project.color }}></div>
      <h3 className="text-2xl font-semibold tracking-[-0.05em]">{project.title}</h3><p className="mt-3 min-h-12 text-sm leading-relaxed text-neutral-600">{project.description}</p>
      <span className="mt-6 inline-block text-sm font-semibold group-hover:text-[#e63946]">{action} <span className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
    </Link>
  </motion.article>;
}
