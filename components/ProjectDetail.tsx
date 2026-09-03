import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/app/lib/sanity/client";
import {
  allProjectsQuery,
  projectBySlugQuery,
  type Locale,
} from "@/app/lib/sanity/queries";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type SanityProject = {
  id: number;
  slug?: string;
  title?: string;
  description?: string;
  year?: number;
  category?: string;
  services?: string[];
  color?: string;
  coverImage?: string;
  gallery?: { src?: string; alt?: string }[];
};

const detailCopy = {
  en: {
    project: "PROJECT",
    about: "ABOUT THE PROJECT",
    year: "YEAR",
    category: "CATEGORY",
    services: "SERVICES",
    back: "← Back to projects",
    next: "Next project →",
  },
  tr: {
    project: "PROJE",
    about: "PROJE HAKKINDA",
    year: "YIL",
    category: "KATEGORİ",
    services: "HİZMETLER",
    back: "← Projelere dön",
    next: "Sonraki Proje →",
  },
} as const;

export async function ProjectDetail({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const [project, projects] = await Promise.all([
    sanityFetch<SanityProject | null>({
      query: projectBySlugQuery,
      params: { locale, slug },
    }),
    sanityFetch<SanityProject[]>({
      query: allProjectsQuery,
      params: { locale },
    }),
  ]);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects.length > 0 && index >= 0
    ? projects[(index + 1) % projects.length]
    : undefined;
  const text = detailCopy[locale];
  const prefix = locale === "tr" ? "/tr" : "";
  const projectBase = locale === "tr" ? "/tr/projeler" : "/projects";
  const services = project.services ?? [];
  const switchHref = locale === "tr" ? `/projects/${project.slug ?? slug}` : `/tr/projeler/${project.slug ?? slug}`;

  return (
    <>
      <Navbar locale={locale} switchHref={switchHref} />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pt-24">
        <p className="text-[11px] font-normal tracking-[0.2em] text-[#E73C29]">
          {text.project} {project.id}
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.07em] md:text-8xl">
          {project.title ?? ""}
        </h1>

        {project.description && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {project.description}
          </p>
        )}

        <div
          className="mt-16 flex aspect-[16/8] items-center justify-center rounded-2xl"
          style={{ backgroundColor: project.color ?? "#e5e5e5" }}
        />

        <section className="mt-24 grid gap-10 md:grid-cols-[1fr_2fr]">
          <p className="text-[13px] font-normal tracking-[.2em] text-[#E73C29]">
            {text.about}
          </p>

          <div>
            {project.description && (
              <p className="max-w-2xl leading-relaxed text-neutral-600">
                {project.description}
              </p>
            )}
          </div>
        </section>

        <div className="mt-24 grid gap-5 md:grid-cols-2">
          <div
            className="aspect-[4/3] rounded-2xl opacity-85"
            style={{ backgroundColor: project.color ?? "#e5e5e5" }}
          />
          <div className="aspect-[4/3] rounded-2xl bg-neutral-200" />
        </div>

        <dl className="mt-20 grid gap-8 border-y border-neutral-200 py-8 sm:grid-cols-3">
          <div>
            <dt className="text-[10px] font-semibold tracking-[.18em] text-[#e63946]">
              {text.year}
            </dt>
            <dd className="mt-3 font-bold">{project.year ?? ""}</dd>
          </div>

          <div>
            <dt className="text-[10px] font-semibold tracking-[.18em] text-[#e63946]">
              {text.category}
            </dt>
            <dd className="mt-3 font-bold">{project.category ?? ""}</dd>
          </div>

          <div>
            <dt className="text-[10px] font-semibold tracking-[.18em] text-[#e63946]">
              {text.services}
            </dt>
            <dd className="mt-3 font-bold">{services.join(", ")}</dd>
          </div>
        </dl>

        <nav className="mt-16 flex items-center justify-between text-sm font-bold">
          <Link href={`${prefix}/#projeler`}>{text.back}</Link>

          {nextProject?.slug && (
            <Link
              className="text-[#e63946]"
              href={`${projectBase}/${nextProject.slug}`}
            >
              {text.next}
            </Link>
          )}
        </nav>
      </main>

      <Footer locale={locale} />
    </>
  );
}
