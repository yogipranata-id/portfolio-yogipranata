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
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0C05A]/10 text-[#F0C05A]">
          {icon}
        </span>

        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}
