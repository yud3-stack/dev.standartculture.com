import { copy, type Locale } from "@/data/content";
export function Footer({ locale }: { locale: Locale }) { return <footer className="mx-auto flex max-w-7xl justify-between px-6 py-8 text-xs font-bold text-neutral-500 md:px-10"><span>© 2026 StandArt Culture</span><span>{copy[locale].footerLocation}</span></footer>; }
