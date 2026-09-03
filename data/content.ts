import { projects as trProjects, type Project } from "./projects";

export type Locale = "en" | "tr";

export const copy = {
  en: {
    nav: { about: "About Us", projects: "Out Works", contact: "Contact" },
    hero: { words: ["Make", "them", "look", "twice"], description: "Smart ideas, bold design and social experiences built to make your brand impossible to ignore.", cta: "Explore our work" },
    about: { label: "ABOUT US", title: "Not just made to look good. Made to mean something.", description: "We combine strategy, creativity and culture to build brands people notice, remember and want to be part of." },
    projects: { label: "SELECTED WORK", title: "Ideas made real.", action: "Explore", viewAll: "Our works", allTitle: "All Projects", allDescription: "Explore the cultural identities, digital experiences and creative platforms we have brought to life." },
    contact: { label: "LET'S MAKE SOMETHING BETTER", titleBefore: "Your brand has more to say.",titleHighlight:"Let's make them listen.", description: "Have an idea, a challenge or something completely new in mind? Let's make it worth looking at." },
    footerLocation: "Samsun",
    business: {
      titleBefore: "Make it",
      titleHighlight: " worth ",
      titleAfter: " noticing.",
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
    nav: { about: "Hakkımızda", projects: "Çalışmalarımız", contact: "İletişim" },
    hero: { words: ["İki", "kez", "bakmalarını", "sağlayın."], description: "Akıllı fikirler, cesur tasarım ve sosyal deneyimler, markanızın göz ardı edilmesini imkansız hale getirmek için tasarlandı.", cta: "Çalışmalarımızı keşfedin" },
    about: { label: "HAKKIMIZDA", title: "Sadece güzel görünmek için yapılmadı. Bir anlam ifade etmesi için yapıldı.", description: "Strateji, yaratıcılık ve kültürü birleştirerek insanların dikkatini çeken, hatırladığı ve bir parçası olmak istediği markalar yaratıyoruz." },
    projects: { label: "SEÇİLMİŞ ÇALIŞMALAR", title: "Hayaller gerçeğe dönüştü.", action: "İncele", viewAll: "Çalışmalarımız", allTitle: "Tüm Projeler", allDescription: "Hayata geçirdiğimiz kültürel kimlikleri, dijital deneyimleri ve yaratıcı platformları keşfedin." },
    contact: { label: "DAHA İYİSİNİ YAPALIM", titleBefore: "Markanızın söyleyecek daha çok şeyi var.",titleHighlight:"Dinlemelerini sağlayalım.", description: "Aklında bir fikir, bir meydan okuma veya tamamen yeni bir şey mi var? Gel, onu fark edilmeye değer kılalım." },
    footerLocation: "Samsun",
    business: {
      titleBefore: "Fark edilmeye ",
      titleHighlight: "değer",
      titleAfter: " kıl.",
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
