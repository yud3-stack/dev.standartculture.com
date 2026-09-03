import Image from "next/image";
import type { MediaCard } from "@/app/lib/sanity/queries";

export function LogoSlider({ logos }: { logos: MediaCard[] }) {
  if (!logos || logos.length === 0) return null;

  return (
    <section className="py-16 overflow-hidden border-y border-neutral-200">
      <div className="marquee-container relative w-full overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="flex-none flex items-center justify-center h-16 w-32"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={64}
                className="h-full w-full object-contain grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}