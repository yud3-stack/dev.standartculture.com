import { groq } from "next-sanity";
import type { Locale } from "@/data/content";

export type { Locale } from "@/data/content";
export type SanityQueryParams = { locale: Locale };

export type MediaCard = { id: string; src: string; alt: string };

export type HomepageData = {
  hero: {
    words: string[];
    description: string;
    cta: string;
    categories: { label: string; image: { src: string; alt: string } }[];
  };
  about: {
    label: string;
    title: string;
    description: string;
  };
  business: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    cta: string;
    images: MediaCard[];
  };
  references: {
    logos: MediaCard[];
  };
  selectedWork: {
    eyebrow: string;
    title: string;
    action: string;
    viewAll: string;
    allProjectsPage: { title: string; description: string };
    projects: {
      id: number;
      slug: {
        tr?: { current?: string };
        en?: { current?: string };
      };
      title: { tr?: string; en?: string };
      description: { tr?: string; en?: string };
      year: number;
      category: { tr?: string; en?: string };
      color: string;
    }[];
  };
};

export const homepageQuery = groq`
*[_type == "homepage"][0]{
  "hero": {
    "words": [hero.words.word1[$locale], hero.words.word2[$locale], hero.words.word3[$locale], hero.words.word4[$locale]],
    "description": hero.description[$locale],
    "cta": hero.ctaText[$locale],
    "categories": hero.categories[] | order(order asc) { "label": label[$locale], "image": { "src": image.asset->url, "alt": image.alt } }
  },
  "about": { "label": about.label[$locale], "title": about.title[$locale], "description": about.description[$locale] },
  "business": {
    "titleBefore": business.titleBefore[$locale], "titleHighlight": business.titleHighlight[$locale], "titleAfter": business.titleAfter[$locale], "cta": business.cta[$locale],
    "images": business.images[]{ "id": _key, "src": asset->url, "alt": alt }
  },
  "references": { "logos": references.logos[]{ "id": _key, "src": asset->url, "alt": alt } },
  "selectedWork": {
    "eyebrow": selectedWork.eyebrow[$locale], "title": selectedWork.title[$locale], "action": selectedWork.action[$locale], "viewAll": selectedWork.viewAll[$locale],
    "allProjectsPage": { "title": selectedWork.allProjectsPage.title[$locale], "description": selectedWork.allProjectsPage.description[$locale] },
    "projects": selectedWork.projects[]->{ "id": order, "slug": slug, "title": title, "description": description, year, "category": category, color }
  }
}
`;

export const siteSettingsQuery = groq`
*[_type == "siteSettings"][0]{
  contactEmail,
  "footerLocation": footerLocation[$locale],
  "nav": { "about": nav.about[$locale], "projects": nav.projects[$locale], "contact": nav.contact[$locale] }
}
`;

export const allProjectsQuery = groq`
*[_type == "project"] | order(order asc) {
  "id": order,
  "slug": slug[$locale].current,
  "title": title[$locale],
  "description": description[$locale],
  year,
  "category": category[$locale],
  "services": services[]{"text": @[$locale]}.text,
  color
}
`;

export const projectBySlugQuery = groq`
*[_type == "project" && slug[$locale].current == $slug][0]{
  "id": order,
  "title": title[$locale],
  "description": description[$locale],
  year,
  "category": category[$locale],
  "services": services[]{"text": @[$locale]}.text,
  color,
  "coverImage": coverImage.asset->url,
  "gallery": gallery[]{ "src": asset->url, alt }
}
`;

export const projectNavQuery = groq`
*[_type == "project"] | order(order asc) { "slug": slug[$locale].current, order }
`;
