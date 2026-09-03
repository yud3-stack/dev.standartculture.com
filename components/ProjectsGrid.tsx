import Link from "next/link";
import { copy, type Locale } from "@/data/content";
import { ProjectCard } from "./ProjectCard";

type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  year: number;
  category: string;
  color: string;
};

export function ProjectsGrid({
  locale,
  projects,
}: {
  locale: Locale;
  projects: {
    id: number;
    slug: {
      tr?: {
        current?: string;
      };
      en?: {
        current?: string;
      };
    };
    title: {
      tr?: string;
      en?: string;
    };
    description: {
      tr?: string;
      en?: string;
    };
    year: number;
    category: {
      tr?: string;
      en?: string;
    };
    color: string;
  }[];
}) {
  const text = copy[locale].projects;
  const projectsPath = locale === "tr" ? "/tr/projeler" : "/projects";

  return (
    <section
      id="projeler"
      className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#e63946]">
            {text.label}
          </p>

          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.065em] md:text-7xl">
            {text.title}
          </h2>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {projects.map((project, index) => {
          const normalizedProject = {
          id: project.id,

          slug:
            project.slug?.[locale]?.current ??
            project.slug?.en?.current ??
            project.slug?.tr?.current ??
            "",

          title:
            project.title?.[locale] ??
            project.title?.en ??
            project.title?.tr ??
            "",

          description:
            project.description?.[locale] ??
            project.description?.en ??
            project.description?.tr ??
            "",

          year: project.year,

          category:
            project.category?.[locale] ??
            project.category?.en ??
            project.category?.tr ??
            "",

          color: project.color,
        };

          return (
            <ProjectCard
              key={project.id}
              project={normalizedProject}
              index={index}
              locale={locale}
              action={text.action}
            />
          );
        })}
      </div>

      <div className="flex flex-row justify-end items-center pt-8 px-4">
        <Link
          href={projectsPath}
          className="group inline-flex w-fit items-center gap-2 pb-1 text-sm font-semibold text-[#29282D]"
        >
          {text.viewAll}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}