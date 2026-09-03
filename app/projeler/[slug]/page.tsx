import { ProjectDetail } from "@/components/ProjectDetail";
import { sanityFetch } from "@/app/lib/sanity/client";
import { allProjectsQuery } from "@/app/lib/sanity/queries";

export async function generateStaticParams() {
  const projects = await sanityFetch<{ slug?: string }[]>({
    query: allProjectsQuery,
    params: { locale: "tr" },
  });

  return projects
    .filter((project) => project.slug)
    .map(({ slug }) => ({ slug: slug as string }));
}

export default async function TurkishProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectDetail locale="tr" slug={slug} />;
}
