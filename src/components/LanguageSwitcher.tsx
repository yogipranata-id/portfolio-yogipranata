"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/config";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale: Locale = locale === "id" ? "en" : "id";
    startTransition(async () => {
      await setUserLocale(nextLocale);
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="flex items-center gap-1.5 rounded-full border border-slate-300/80 bg-slate-100/80 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-[#D97706]/50 hover:bg-slate-200/80 hover:text-slate-900 disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-[#F0C05A]/50 dark:hover:bg-white/10 dark:hover:text-white"
      aria-label="Switch language"
    >
      <Globe size={16} className="text-[#D97706] dark:text-[#F0C05A]" />
      <span className="uppercase">{locale}</span>
    </button>
  );
}
