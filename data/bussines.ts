import "server-only";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "./content";

export type BussinesCard = { id: number; src: string; alt: string };

const mediaDirectory = join(process.cwd(), "public", "media", "bussines");
const imagePattern = /^image-(\d+)\.webp$/i;

/** Creates one card per image-#id.webp file; images are indexed at build time. */
export function getBussinesCards(locale: Locale): BussinesCard[] {
  try {
    return readdirSync(mediaDirectory)
      .map((fileName) => ({ fileName, match: fileName.match(imagePattern) }))
      .filter((entry): entry is { fileName: string; match: RegExpMatchArray } => entry.match !== null)
      .sort((first, second) => Number(first.match[1]) - Number(second.match[1]))
      .map(({ fileName, match }) => ({
        id: Number(match[1]),
        src: `/media/bussines/${fileName}`,
        alt: locale === "tr" ? `StandArt Culture çalışma ${match[1]}` : `StandArt Culture work ${match[1]}`,
      }));
  } catch {
    return [];
  }
}
