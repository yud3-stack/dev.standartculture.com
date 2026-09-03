import { groq } from "next-sanity";
import type { Locale } from "@/data/content";

export type SanityQueryParams = { locale: Locale };

/**
 * Every text field below is stored as { tr, en }. Passing $locale lets us
 * project straight down to a flat string with field[$locale], so the
 * fetched shape matches what copy[locale] already looks like today.
 */

export const homepageQuery = groq`
*[_type == "homepage"][0]{
  "hero": {
    "words": {
      "word1": hero.words.word1[$locale],
      "word2": hero.words.word2[$locale],
      "word3": hero.words.word3[$locale],
      "word4": hero.words.word4[$locale]
    },
    "description": hero.description[$locale],
    "ctaText": hero.ctaText[$locale],
    "categories": hero.categories[] | order(order asc) {
      "label": label[$locale],
      "image": image.asset->url,
      "alt": image.alt,
      order
    }
  },
  "about": {
    "label": about.label[$locale],
    "title": about.title[$locale],
    "description": about.description[$locale]
  },
  "business": {
    "titleBefore": business.titleBefore[$locale],
    "titleHighlight": business.titleHighlight[$locale],
    "titleAfter": business.titleAfter[$locale],
    "cta": business.cta[$locale],
    "images": business.images[]{
      "src": asset->url,
      alt
    }
  },
  "references": {
    "logos": references.logos[]{
      "src": asset->url,
      alt
    }
  },
  "selectedWork": {
    "eyebrow": selectedWork.eyebrow[$locale],
    "title": selectedWork.title[$locale],
    "action": selectedWork.action[$locale],
    "viewAll": selectedWork.viewAll[$locale],
    "allProjectsPage": {
      "title": selectedWork.allProjectsPage.title[$locale],
      "description": selectedWork.allProjectsPage.description[$locale]
    },
    "projects": selectedWork.projects[]->{
      "id": order,
      "slug": slug[$locale].current,
      "title": title[$locale],
      "description": description[$locale],
      year,
      "category": category[$locale],
      color
    }
  }
}
`;

export const siteSettingsQuery = groq`
*[_type == "siteSettings"][0]{
  contactEmail,
  "footerLocation": footerLocation[$locale],
  "nav": {
    "about": nav.about[$locale],
    "projects": nav.projects[$locale],
    "contact": nav.contact[$locale]
  }
}
`;

/** Full project list — powers /projects and /tr/projeler. */
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

/** Single project detail page. */
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
  "gallery": gallery[]{
    "src": asset->url,
    alt
  }
}
`;

/**
 * Lightweight list used to compute the "next project" link and to build
 * generateStaticParams — avoids pulling full project bodies just for that.
 */
export const projectNavQuery = groq`
*[_type == "project"] | order(order asc) {
  "slug": slug[$locale].current,
  order
}
`;
