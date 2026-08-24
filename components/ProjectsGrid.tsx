import { copy, getProjects, type Locale } from "@/data/content";
import { ProjectCard } from "./ProjectCard";
export function ProjectsGrid({ locale }: { locale: Locale }) { const text = copy[locale].projects; const projects = getProjects(locale); return <section id="projeler" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
  <p className="text-[11px] font-semibold tracking-[0.2em] text-[#e63946]">{text.label}</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.065em] md:text-7xl">{text.title}</h2>
  <div className="mt-14 grid gap-5 md:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} locale={locale} action={text.action} />)}</div>
</section>; }
