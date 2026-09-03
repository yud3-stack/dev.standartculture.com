"use client";

import { useState } from "react";
import { SplashScreen } from "./SplashScreen";

export function SiteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && (
        <SplashScreen onComplete={() => setSplashDone(true)} />
      )}

      {splashDone && children}
    </>
  );
}