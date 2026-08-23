import type { Locale } from "./content";

export type MediaAsset = {
  src: string;
  alt: string;
};

export type FanCardContent = {
  id: string;
  label: string;
  color: string;
  image?: MediaAsset;
};

// `image` is deliberately optional: colour remains the fallback until an image is added.
// This shape can be returned unchanged from a future CMS or admin-panel API.
export const fanCards: Record<Locale, FanCardContent[]> = {
  en: [
    { id: "culture", label: "CULTURE", color: "#e63946",  image: { src: "/media/fan-cards/culture.jpg", alt: "Culture artwork",}},
    { id: "stories", label: "STORIES", color: "#f4a261", image: { src: "/media/fan-cards/stories.jpg", alt: "Culture artwork",} },
    { id: "art", label: "ART", color: "#167a74", image: { src: "/media/fan-cards/art.jpg", alt: "Culture artwork",} },
    { id: "creativity", label: "CREATIVITY", color: "#6d4c8d", image: { src: "/media/fan-cards/creativity.jpg", alt: "Culture artwork",} },
    { id: "community", label: "COMMUNITY", color: "#dc5272", image: { src: "/media/fan-cards/communty.jpg", alt: "Culture artwork",} },
  ],
  tr: [
    { id: "culture", label: "KÜLTÜR", color: "#e63946" },
    { id: "stories", label: "HİKÂYE", color: "#f4a261" },
    { id: "art", label: "SANAT", color: "#167a74" },
    { id: "creativity", label: "YARATICILIK", color: "#6d4c8d" },
    { id: "community", label: "TOPLULUK", color: "#dc5272" },
  ],
};
