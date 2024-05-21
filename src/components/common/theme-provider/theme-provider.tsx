"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

function ThemeProviderComponent({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // config.autoAddCss = false
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default ThemeProviderComponent;
