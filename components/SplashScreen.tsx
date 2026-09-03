"use client";

import { useState } from "react";

type SplashScreenProps = {
  onComplete: () => void;
};

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleVideoEnd = () => {
    setIsExiting(true);

    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#E73C29] transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/media/video/logo-anim-white.webm"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="h-auto w-auto max-w-[17vw] object-contain"
      />
    </div>
  );
}