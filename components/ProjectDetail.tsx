import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects, type Locale } from "@/data/content";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const detailCopy = {
  en: { project: "PROJECT", about: "ABOUT THE PROJECT", heading: "A cultural experience that lives in the digital world.", body: "By bringing different disciplines together, we built a powerful and accessible narrative at every touchpoint.", year: "YEAR", category: "CATEGORY", services: "SERVICES", back: "← Back to projects", next: "Next project →" },
  tr: { project: "PROJE", about: "PROJE HAKKINDA", heading: "Dijital dünyada yaşayan bir kültür deneyimi.", body: "Farklı disiplinleri bir araya getirerek, her temas noktasında güçlü ve erişilebilir bir anlatı kurduk.", year: "YIL", category: "KATEGORİ", services: "HİZMETLER", back: "← Projelere dön", next: "Sonraki Proje →" },
} as const;

export function ProjectDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const projects = getProjects(locale);
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const nextProject = projects[(index + 1) % projects.length];
  const text = detailCopy[locale];
  const prefix = locale === "tr" ? "/tr" : "";
  const projectBase = locale === "tr" ? "/tr/projeler" : "/projects";

  return <><Navbar locale={locale} /><main className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pt-24"><p className="text-[11px] font-black tracking-[0.2em] text-[#e63946]">{text.project} {project.id}</p><h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.07em] md:text-8xl">{project.title}</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600">{project.description}</p>
    <div className="mt-16 flex aspect-[16/8] items-center justify-center rounded-2xl" style={{ backgroundColor: project.color }}><span className="text-4xl font-black tracking-[-.07em] text-white md:text-7xl">{project.title}</span></div>
    <section className="mt-24 grid gap-10 md:grid-cols-[1fr_2fr]"><p className="text-[11px] font-black tracking-[.2em] text-[#e63946]">{text.about}</p><div><h2 className="text-4xl font-black leading-[1] tracking-[-.06em] md:text-6xl">{text.heading}</h2><p className="mt-7 max-w-2xl leading-relaxed text-neutral-600">{project.description} {text.body}</p></div></section>
    <div className="mt-24 grid gap-5 md:grid-cols-2"><div className="aspect-[4/3] rounded-2xl opacity-85" style={{ backgroundColor: project.color }} /><div className="aspect-[4/3] rounded-2xl bg-neutral-200" /></div>
    <dl className="mt-20 grid gap-8 border-y border-neutral-200 py-8 sm:grid-cols-3">{[[text.year, project.year], [text.category, project.category], [text.services, project.services.join(", ")]].map(([term, value]) => <div key={term}><dt className="text-[10px] font-black tracking-[.18em] text-[#e63946]">{term}</dt><dd className="mt-3 font-bold">{value}</dd></div>)}</dl>
    <nav className="mt-16 flex items-center justify-between text-sm font-bold"><Link href={`${prefix}/#projeler`}>{text.back}</Link><Link className="text-[#e63946]" href={`${projectBase}/${nextProject.slug}`}>{text.next}</Link></nav></main><Footer locale={locale} /></>;
}
