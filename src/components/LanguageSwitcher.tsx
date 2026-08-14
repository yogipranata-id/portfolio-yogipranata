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
      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:border-[#F0C05A]/50 hover:bg-white/10 hover:text-white disabled:opacity-50"
      aria-label="Switch language"
    >
      <Globe size={16} className="text-[#F0C05A]" />
      <span className="uppercase">{locale}</span>
    </button>
  );
}
