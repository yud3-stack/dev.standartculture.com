import { HomePage } from "@/components/HomePage";
import { sanityFetch } from "@/app/lib/sanity/client";
import { homepageQuery, type HomepageData } from "@/app/lib/sanity/queries";

export default async function Home() {
  const data = await sanityFetch<HomepageData>({
    query: homepageQuery,
    params: { locale: "en" },
  });

  return <HomePage locale="en" data={data} />;
}