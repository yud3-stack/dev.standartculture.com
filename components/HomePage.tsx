import { AboutSection } from "./AboutSection";
import { BussinesSlider } from "./BussinesSlider";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { ProjectsGrid } from "./ProjectsGrid";
import { LogoSlider } from "./LogoSlider";
import type { Locale } from "@/data/content";
import type { HomepageData } from "@/app/lib/sanity/queries";

export function HomePage({ locale, data }: { locale: Locale; data: HomepageData }) {
  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero data={data.hero} />
        <AboutSection data={data.about} />
        <BussinesSlider data={data.business} />
        <LogoSlider logos={data.references.logos} />
        <ProjectsGrid
          locale={locale}
          projects={data.selectedWork.projects}
        /><ProjectsGrid
          locale={locale}
          projects={data.selectedWork.projects}
        />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}