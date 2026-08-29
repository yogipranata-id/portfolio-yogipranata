import { type ReactNode } from "react";

type CaseStudySectionProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export default function CaseStudySection({
  icon,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-[#D97706] dark:bg-[#F0C05A]/10 dark:text-[#F0C05A]">
          {icon}
        </span>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}
