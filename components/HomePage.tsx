import { AboutSection } from "./AboutSection";
import { BussinesSlider } from "./BussinesSlider";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { ProjectsGrid } from "./ProjectsGrid";
import type { Locale } from "@/data/content";
import { getBussinesCards } from "@/data/bussines";
import { LogoSlider } from "./LogoSlider";

export function HomePage({ locale }: { locale: Locale }) {
  const bussinesCards = getBussinesCards(locale);
  return <><Navbar locale={locale} /><main><Hero locale={locale} /><AboutSection locale={locale} /><BussinesSlider locale={locale} cards={bussinesCards} /><LogoSlider /><ProjectsGrid locale={locale} /><ContactSection locale={locale} /></main><Footer locale={locale} /></>;
}
