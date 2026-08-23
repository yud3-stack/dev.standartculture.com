import "server-only";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "./content";

export type BussinesCard = { id: number; src: string; alt: string };

const mediaDirectory = join(process.cwd(), "public", "media", "bussines");
const imagePattern = /^image-(\d+)\.webp$/i;

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Creates one card per image-#id.webp file; images are indexed at build time. */
export function getBussinesCards(locale: Locale): BussinesCard[] {
  try {
    const cards = readdirSync(mediaDirectory)
      .map((fileName) => ({ fileName, match: fileName.match(imagePattern) }))
      .filter((entry): entry is { fileName: string; match: RegExpMatchArray } => entry.match !== null)
      .sort((first, second) => Number(first.match[1]) - Number(second.match[1]))
      .map(({ fileName, match }) => ({
        id: Number(match[1]),
        src: `/media/bussines/${fileName}`,
        alt: locale === "tr" ? `StandArt Culture çalışma ${match[1]}` : `StandArt Culture work ${match[1]}`,
      }));

    return shuffle(cards);
  } catch {
    return [];
  }
}