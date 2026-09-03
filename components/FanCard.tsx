"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { MediaAsset } from "@/data/fanCards";

type FanCardProps = { index: number; color?: string; image?: MediaAsset; label: string };
const rotations = [-18, -9, 0, 9, 18];
const xOffsets = [-320, -160, 0, 160, 320];

export function FanCard({ index, image, label }: FanCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const rotation = rotations[index] * (isMobile ? 0.5 : 1);
  const x = xOffsets[index] * (isMobile ? 0.55 : 1);
  const isCenterCard = index === 2;
  const fanDelay = isCenterCard ? 0 : 0.45 + Math.abs(index - 2) * 0.12;
  const restingY = -45;
  return (
    <motion.article
      aria-label={label}
      initial={{ opacity: 0, y: 120, rotate: 0, x: 0 }}
      animate={{ opacity: 1, y: restingY, rotate: rotation, x }}
      whileHover={{ y: restingY - 8, boxShadow: "0 28px 48px rgba(0,0,0,0.22)" }}
      transition={{ type: "spring", stiffness: 80, damping: 14, delay: fanDelay }}
      className="absolute bottom-[80px] left-1/2 ml-[-50px] aspect-square w-[100px] overflow-hidden rounded-2xl shadow-[0_18px_35px_rgba(0,0,0,0.16)] sm:ml-[-80px] sm:w-[160px] lg:ml-[-100px] lg:w-[200px]"
    >
      {image && <img src={image.src} alt={image.alt} className="h-full w-full object-scale-down" />}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/25 to-transparent p-4 text-[10px] font-bold tracking-[0.15em] text-white">{label}</div>
    </motion.article>
  );
}