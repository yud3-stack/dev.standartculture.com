import { sanityFetch } from "@/app/lib/sanity/client";
import { allProjectsQuery } from "@/app/lib/sanity/queries";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ProjectCard } from "./ProjectCard";
import { copy, type Locale } from "@/data/content";

type SanityProject = {
  id: number;
  slug?: string;
  title?: string;
  description?: string;
  year?: number;
  category?: string;
  services?: string[];
  color?: string;
};

export async function AllProjectsPage({ locale }: { locale: Locale }) {
  const text = copy[locale].projects;
  const projects = await sanityFetch<SanityProject[]>({
    query: allProjectsQuery,
    params: { locale },
  });

  const normalizedProjects = projects.map((project) => ({
    id: project.id,
    slug: project.slug ?? "",
    title: project.title ?? "",
    description: project.description ?? "",
    year: project.year ?? 0,
    category: project.category ?? "",
    services: project.services ?? [],
    images: [],
    color: project.color ?? "#e5e5e5",
  }));

  const switchHref = locale === "tr" ? "/projects" : "/tr/projeler";

  return (
    <>
      <Navbar locale={locale} switchHref={switchHref} />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-36 md:pt-24">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#e63946]">
          {text.label}
        </p>
        <div className="mt-5 max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-[-0.065em] md:text-8xl">
            {text.allTitle}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-neutral-600">
            {text.allDescription}
          </p>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {normalizedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              locale={locale}
              action={text.action}
            />
          ))}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
