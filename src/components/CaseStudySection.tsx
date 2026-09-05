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
    <section className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-md dark:bg-[#111113] dark:ring-white/10 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-300 transition-colors group-hover:bg-amber-500/10 group-hover:text-[#D97706] dark:group-hover:bg-[#F0C05A]/10 dark:group-hover:text-[#F0C05A]">
          {icon}
        </span>

        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
      </div>

      <div className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
        {children}
      </div>
    </section>
  );
}
