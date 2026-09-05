"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

/**
 * Calculate the visual position of each carousel item relative to the active index.
 * Returns transform values (translateX, scale, zIndex, opacity) for the 3D perspective effect.
 */
function getItemStyle(index: number, activeIndex: number, total: number) {
  // Calculate shortest distance around the circular array
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  const absDiff = Math.abs(diff);

  if (absDiff === 0) {
    // Center (active) item
    return {
      translateX: "0px",
      scale: 1,
      zIndex: 10,
      opacity: 1,
      pointerEvents: "auto" as const,
    };
  } else if (absDiff === 1) {
    // Adjacent items (left/right of center)
    return {
      translateX: `${diff * 220}px`,
      scale: 0.72,
      zIndex: 8,
      opacity: 0.85,
      pointerEvents: "auto" as const,
    };
  } else if (absDiff === 2) {
    // Far items
    return {
      translateX: `${diff > 0 ? 360 : -360}px`,
      scale: 0.55,
      zIndex: 6,
      opacity: 0.3,
      pointerEvents: "auto" as const,
    };
  } else {
    // Hidden items (more than 2 away)
    return {
      translateX: `${diff > 0 ? 500 : -500}px`,
      scale: 0.4,
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none" as const,
    };
  }
}

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("Projects");

  const activeProject = featuredProjects[activeIndex];

  const goTo = useCallback((newIndex: number) => {
    setActiveIndex(newIndex);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="gradient-divider mb-16" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex items-end justify-between"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#D97706] dark:text-[#F0C05A]">
            {t("label")}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
            {t("description")}
          </p>
        </div>
      </motion.div>

      {/* 3D Carousel Album */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-10 mt-12"
      >
        {/* Carousel container */}
        <div className="relative mx-auto h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[380px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {featuredProjects.map((project, index) => {
              const style = getItemStyle(
                index,
                activeIndex,
                featuredProjects.length
              );

              return (
                <button
                  key={project.slug}
                  onClick={() => goTo(index)}
                  className="absolute left-1/2 top-1/2 w-[280px] sm:w-[380px] md:w-[480px]"
                  style={{
                    transform: `translate(calc(-50% + ${style.translateX}), -50%) scale(${style.scale})`,
                    zIndex: style.zIndex,
                    opacity: style.opacity,
                    pointerEvents: style.pointerEvents,
                    transition:
                      "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, z-index 0s",
                  }}
                  aria-label={`View ${project.title}`}
                >
                  <div
                    className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border shadow-2xl transition-all duration-500 ${
                      index === activeIndex
                        ? "border-[#D97706]/50 shadow-[0_20px_60px_rgba(217,119,6,0.15)] dark:border-[#F0C05A]/40 dark:shadow-[0_20px_60px_rgba(240,192,90,0.12)]"
                        : "border-slate-200/80 bg-white/80 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, 480px"
                      className="object-cover"
                      priority={index <= 2}
                    />
                    {/* Subtle gradient overlay for non-active items */}
                    {index !== activeIndex && (
                      <div className="absolute inset-0 bg-black/20 dark:bg-black/30" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Info below carousel */}
        <div className="relative mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-white">
                {activeProject.title}
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base dark:text-slate-400">
                {activeProject.description}
              </p>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {activeProject.demoUrl ? (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-[#D97706] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B45309] hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] dark:bg-[#F0C05A] dark:text-slate-950 dark:hover:bg-[#F5D078] dark:hover:shadow-[0_0_20px_rgba(240,192,90,0.3)]"
                  >
                    Live Demo
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <Link
                    href={`/projects/${activeProject.slug}`}
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-[#D97706] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B45309] hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] dark:bg-[#F0C05A] dark:text-slate-950 dark:hover:bg-[#F5D078] dark:hover:shadow-[0_0_20px_rgba(240,192,90,0.3)]"
                  >
                    {t("viewDetails")}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    />
                  </Link>
                )}

                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-[#D97706] hover:text-[#D97706] dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:border-[#F0C05A] dark:hover:text-[#F0C05A]"
                  >
                    <FaGithub size={16} />
                    {t("sourceCode")}
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {featuredProjects.map((project, index) => (
              <button
                key={project.slug}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[#D97706] dark:bg-[#F0C05A]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/40"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <span className="font-bold text-[#D97706] dark:text-[#F0C05A]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(featuredProjects.length).padStart(2, "0")}
          </p>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-slate-800 backdrop-blur-xl transition hover:border-[#D97706]/40 hover:bg-slate-100 hover:text-[#D97706] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-[#F0C05A]/40 dark:hover:bg-white/10 dark:hover:text-[#F0C05A]"
              aria-label="Previous project"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={goNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-slate-800 backdrop-blur-xl transition hover:border-[#D97706]/40 hover:bg-slate-100 hover:text-[#D97706] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-[#F0C05A]/40 dark:hover:bg-white/10 dark:hover:text-[#F0C05A]"
              aria-label="Next project"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}