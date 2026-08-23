import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({
  src: [
    { path: "../fonts/HelveticaNeueThin.otf", weight: "100", style: "normal" },
    { path: "../fonts/HelveticaNeueLight.otf", weight: "300", style: "normal" },
    { path: "../fonts/HelveticaNeueRoman.otf", weight: "400", style: "normal" },
    { path: "../fonts/HelveticaNeueMedium.otf", weight: "500", style: "normal" },
    { path: "../fonts/HelveticaNeueBold.otf", weight: "700", style: "normal" },
    { path: "../fonts/HelveticaNeueHeavy.otf", weight: "800", style: "normal" },
    { path: "../fonts/HelveticaNeueBlack.otf", weight: "900", style: "normal" },
    { path: "../fonts/HelveticaNeueItalic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/HelveticaNeueBoldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StandArt Culture | Taking culture into the future",
  description: "Digital experiences for art, culture and creative projects.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "any" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={helveticaNeue.variable}><body cz-shortcut-listen="false">{children}</body></html>;
}
