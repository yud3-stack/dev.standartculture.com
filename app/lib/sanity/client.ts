import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // CDN is fine for this site (no live preview/drafts yet). Switch to
  // false if content needs to show up the instant it's published.
  useCdn: true,
});

type SanityFetchOptions<QueryParams> = {
  query: string;
  params?: QueryParams;
  /** Seconds before Next.js revalidates this fetch. false disables ISR. */
  revalidate?: number | false;
};

export async function sanityFetch<T, QueryParams = Record<string, unknown>>({
  query,
  params = {} as QueryParams,
  revalidate = 60,
}: SanityFetchOptions<QueryParams>): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate },
  });
}
