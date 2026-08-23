import { AboutSection } from "./AboutSection";
import { BussinesSlider } from "./BussinesSlider";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { ProjectsGrid } from "./ProjectsGrid";
import type { Locale } from "@/data/content";

export function HomePage({ locale }: { locale: Locale }) {
  return <><Navbar locale={locale} /><main><Hero locale={locale} /><AboutSection locale={locale} /><BussinesSlider locale={locale}/><ProjectsGrid locale={locale} /><ContactSection locale={locale} /></main><Footer locale={locale} /></>;
}
