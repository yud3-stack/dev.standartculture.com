import "server-only";
import { readdirSync } from "node:fs";
import { join } from "node:path";

export type LogoCard = { id: number; src: string; alt: string };

const mediaDirectory = join(process.cwd(), "public", "media", "logos");
const imagePattern = /^image-(\d+)\.svg$/i;

/** Creates one logo card per image-#id.svg file in public/media/logos. */
export function getLogoCards(): LogoCard[] {
  try {
    return readdirSync(mediaDirectory)
      .map((fileName) => ({ fileName, match: fileName.match(imagePattern) }))
      .filter((entry): entry is { fileName: string; match: RegExpMatchArray } => entry.match !== null)
      .sort((first, second) => Number(first.match[1]) - Number(second.match[1]))
      .map(({ fileName, match }) => ({
        id: Number(match[1]),
        src: `/media/logos/${fileName}`,
        alt: `Client logo ${match[1]}`,
      }));
  } catch {
    return [];
  }
}