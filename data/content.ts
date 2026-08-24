import { projects as trProjects, type Project } from "./projects";

export type Locale = "en" | "tr";

export const copy = {
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact" },
    hero: { words: ["Taking", "culture", "into", "the", "future."], description: "We bring art, culture and creative projects together through digital experiences.", cta: "Explore our projects" },
    about: { label: "ABOUT", title: "The digital home of culture, art and creativity.", description: "StandArt Culture is an independent creative agency that brings ideas, people and institutions together around the transformative power of culture." },
    projects: { label: "PROJECTS", title: "Our Work", action: "Explore" },
    contact: { label: "CONTACT", titleBefore: "Have an idea?",titleHighlight:"Let’s talk.", description: "We are here to help make a new story visible." },
    footerLocation: "Samsun",
    business: {
      titleBefore: "We ",
      titleHighlight: "scale",
      titleAfter: " business",
      cta: "Get in touch",
      cards: [
        { color: "bg-orange-400" },
        { color: "bg-blue-500" },
        { color: "bg-emerald-500" },
        { color: "bg-pink-500" },
        { color: "bg-purple-500" },
        { color: "bg-amber-500" },
      ],
    }
  },
  tr: {
    nav: { about: "Hakkımızda", projects: "Projeler", contact: "İletişim" },
    hero: { words: ["Kültürü", "geleceğe", "taşıyoruz."], description: "Sanat, kültür ve yaratıcı projeleri dijital deneyimlerle buluşturuyoruz.", cta: "Projelerimizi İncele" },
    about: { label: "HAKKIMIZDA", title: "Kültürün, sanatın ve yaratıcılığın dijital adresi.", description: "StandArt Culture; fikirleri, insanları ve kurumları kültürün dönüştürücü gücü etrafında buluşturan bağımsız bir yaratıcı ajanstır." },
    projects: { label: "PROJELER", title: "Çalışmalarımız", action: "İncele" },
    contact: { label: "İLETİŞİM", titleBefore: "Bir fikriniz mi var?",titleHighlight:"Konuşalım.", description: "Yeni bir hikâyeyi birlikte görünür kılmak için buradayız." },
    footerLocation: "Samsun",
    business: {
      titleBefore: "İşinizi ",
      titleHighlight: "büyütüyoruz",
      titleAfter: "",
      cta: "Hizmet Alın",
      cards: [
        { color: "bg-orange-400" },
        { color: "bg-blue-500" },
        { color: "bg-emerald-500" },
        { color: "bg-pink-500" },
        { color: "bg-purple-500" },
        { color: "bg-amber-500" },
      ],
    },
  },
} as const;

const enProjects: Project[] = [
  { id: "01", slug: "culture-arts", title: "Culture & Arts", description: "Next-generation digital identity and experience design for cultural institutions.", year: "2026", category: "Brand Identity", services: ["Strategy", "Visual Identity", "Digital Design"], images: [], color: "#E63946" },
  { id: "02", slug: "city-memory", title: "City Memory", description: "An inclusive digital archive that brings urban stories into view.", year: "2025", category: "Cultural Platform", services: ["Research", "UX/UI", "Content"], images: [], color: "#F4A261" },
  { id: "03", slug: "new-stage", title: "New Stage", description: "A creative meeting point for independent performance artists.", year: "2025", category: "Cultural Programme", services: ["Curation", "Campaign", "Web Design"], images: [], color: "#6D4C8D" },
];

export function getProjects(locale: Locale) { return locale === "en" ? enProjects : trProjects; }
