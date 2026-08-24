import Link from "next/link";
import Image from "next/image";
import { copy, type Locale } from "@/data/content";

export function Navbar({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const prefix = locale === "tr" ? "/tr" : "";
  const switchHref = locale === "tr" ? "/" : "/tr";
  const switchLabel = locale === "tr" ? "EN" : "TR";
  return (
    <header className="mx-auto flex w-full  items-center justify-between px-6 py-7 md:px-10">
      {/* max-w-7xl */}
      <Link href={prefix || "/"} className="shrink-0" aria-label="StandArt Culture home page">
        <Image src="/Logo.svg" alt="StandArt Culture" width={258} height={42} priority className="h-auto w-[155px] sm:w-[180px]" />
      </Link>
      <nav className="flex items-center gap-4 text-xs font-regular text-[#29282D] uppercase tracking-[0.12em] sm:gap-8">
        <Link href={`${prefix}/#hakkimizda`} className="navbar-link transition-colors">{text.nav.about}</Link>
        <Link href={`${prefix}/#projeler`} className="navbar-link transition-colors">{text.nav.projects}</Link>
        <Link href={`${prefix}/#iletisim`} className="navbar-link transition-colors">{text.nav.contact}</Link>
        <Link href={switchHref} className="rounded-full border border-[#29282D]/25 px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] transition-colors hover:border-[#E73C29] hover:text-[#E73C29]" aria-label={`Switch to ${switchLabel === "TR" ? "Turkish" : "English"}`}>{switchLabel}</Link>
      </nav>
    </header>
  );
}
