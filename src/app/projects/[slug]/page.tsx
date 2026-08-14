import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Target,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Code,
  Images,
} from "lucide-react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import CaseStudySection from "@/components/CaseStudySection";
import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";

const ScreenshotGallery = dynamic(() => import("@/components/ScreenshotGallery"), {
  loading: () => (
    <div className="flex h-[300px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <span className="animate-pulse text-sm font-medium text-slate-400">Loading gallery...</span>
    </div>
  ),
});
import AnimatedSection from "@/components/AnimatedSection";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: "article",
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations("ProjectDetail");

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      {/* ── Hero Section ── */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 transition hover:text-[#F0C05A]"
        >
          <ArrowLeft size={18} />
          {t("back")}
        </Link>

        {/* Hero content — animates on page load */}
        <AnimatedSection>
          <div className="mt-10">
            <span className="rounded-full border border-[#F0C05A]/20 bg-[#F0C05A]/10 px-4 py-2 text-sm text-[#F5D078]">
              {project.role}
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F0C05A] px-6 py-3 font-semibold text-black transition hover:bg-[#F5D078]"
              >
                <Code size={18} />
                {t("sourceCode")}
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold transition hover:border-[#F0C05A]"
                >
                  <ExternalLink size={18} />
                  {t("liveDemo")}
                </a>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Hero image — slight delay after content */}
        <AnimatedSection delay={0.2}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 md:mt-16 md:rounded-3xl">
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={800}
              className="w-full object-cover"
              priority
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Case Study Sections ── */}
      <section className="mx-auto max-w-6xl space-y-6 px-4 pb-16 sm:space-y-8 sm:px-6 md:pb-24">
        {/* Objective */}
        {project.objective && (
          <AnimatedSection>
            <CaseStudySection icon={<Target size={20} />} title={t("objective")}>
              <p className="leading-8 text-slate-300">{project.objective}</p>
            </CaseStudySection>
          </AnimatedSection>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <AnimatedSection>
            <CaseStudySection
              icon={<CheckCircle2 size={20} />}
              title={t("features")}
            >
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#F0C05A]"
                    />
                    <span className="leading-7 text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CaseStudySection>
          </AnimatedSection>
        )}

        {/* Challenges & Solutions — side by side di desktop */}
        {(project.challenges || project.solutions) && (
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <AnimatedSection>
                <CaseStudySection
                  icon={<AlertTriangle size={20} />}
                  title={t("challenges")}
                >
                  <ul className="space-y-3">
                    {project.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                        <span className="leading-7 text-slate-300">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CaseStudySection>
              </AnimatedSection>
            )}

            {/* Solutions — slight stagger after Challenges */}
            {project.solutions && project.solutions.length > 0 && (
              <AnimatedSection delay={0.15}>
                <CaseStudySection
                  icon={<Lightbulb size={20} />}
                  title={t("solutions")}
                >
                  <ul className="space-y-3">
                    {project.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F0C05A]" />
                        <span className="leading-7 text-slate-300">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CaseStudySection>
              </AnimatedSection>
            )}
          </div>
        )}
      </section>

      {/* ── Screenshot Gallery ── */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
          <AnimatedSection>
            <CaseStudySection
              icon={<Images size={20} />}
              title={t("screenshots")}
            >
              <ScreenshotGallery
                screenshots={project.screenshots}
                projectTitle={project.title}
              />
            </CaseStudySection>
          </AnimatedSection>
        </section>
      )}
    </main>
  );
}