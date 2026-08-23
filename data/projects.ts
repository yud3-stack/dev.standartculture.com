export type Project = {
  id: string; slug: string; title: string; description: string; year: string;
  category: string; services: string[]; images: string[]; color: string;
};

export const projects: Project[] = [
  { id: "01", slug: "kultur-sanat", title: "Kültür & Sanat", description: "Kültür kurumları için yeni nesil dijital kimlik ve deneyim tasarımı.", year: "2026", category: "Marka Kimliği", services: ["Strateji", "Görsel Kimlik", "Dijital Tasarım"], images: [], color: "#E63946" },
  { id: "02", slug: "sehir-hafizasi", title: "Şehir Hafızası", description: "Kent hikâyelerini görünür kılan kapsayıcı dijital arşiv deneyimi.", year: "2025", category: "Kültürel Platform", services: ["Araştırma", "UX/UI", "İçerik"], images: [], color: "#F4A261" },
  { id: "03", slug: "yeni-sahne", title: "Yeni Sahne", description: "Bağımsız performans sanatçılarını bir araya getiren yaratıcı buluşma noktası.", year: "2025", category: "Kültür Programı", services: ["Kürasyon", "Kampanya", "Web Tasarım"], images: [], color: "#6D4C8D" },
];
