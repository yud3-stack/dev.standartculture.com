import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjects } from "@/data/content";

export function generateStaticParams() { return getProjects("en").map(({ slug }) => ({ slug })); }
export default async function EnglishProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <ProjectDetail locale="en" slug={slug} />; }
