import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjects } from "@/data/content";

export function generateStaticParams() { return getProjects("tr").map(({ slug }) => ({ slug })); }
export default async function TurkishProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <ProjectDetail locale="tr" slug={slug} />; }
