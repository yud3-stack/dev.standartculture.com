import { copy, type Locale } from "@/data/content";
export function ContactSection({ locale }: { locale: Locale }) { 
    const text = copy[locale].contact;
    return(
        <section id="iletisim" className="bg-[#e63946] px-6 py-24 text-center text-white md:px-10 md:py-36">
            <div className="mx-auto max-w-3xl">
                <p className="text-[11px] font-semibold tracking-[0.2em]">{text.label}</p>
                <h2 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-7xl"><span className="font-normal">{text.titleBefore}</span><br/> {text.titleHighlight}</h2>
                <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/85">{text.description}</p>
                <a className="mt-10 inline-block  pb-1 text-xl font-bold transition-opacity hover:opacity-70 md:text-2xl" href="mailto:info@standartculture.com">info@standartculture.com</a>
            </div>
        </section>
    )
}
