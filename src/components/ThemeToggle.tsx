"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/80 bg-slate-100/80 text-slate-400 dark:border-white/10 dark:bg-white/5"
        aria-hidden="true"
      >
        <div className="h-4 w-4" />
      </div>
    );
  }

  return (
    <AnimatedThemeToggler
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={(newTheme) => setTheme(newTheme)}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/80 bg-slate-100/80 text-slate-700 transition hover:border-[#D97706]/50 hover:bg-slate-200/80 hover:text-[#D97706] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D97706] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-[#F0C05A]/50 dark:hover:bg-white/10 dark:hover:text-[#F0C05A] dark:focus-visible:ring-[#F0C05A] [&_svg]:size-4 [&_svg]:text-[#D97706] dark:[&_svg]:text-[#F0C05A]"
      aria-label="Toggle theme"
    />
  );
}
