"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const t = useTranslations("Projects");

  const goTo = useCallback(
    (newIndex: number, dir: number) => {
      setDirection(dir);
      setActiveIndex(newIndex);
    },
    []
  );

  const goPrev = () => {
    const newIndex =
      activeIndex === 0 ? featuredProjects.length - 1 : activeIndex - 1;
    goTo(newIndex, -1);
  };

  const goNext = () => {
    const newIndex =
      activeIndex === featuredProjects.length - 1 ? 0 : activeIndex + 1;
    goTo(newIndex, 1);
  };

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          {t("label")}
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          {t("heading")}
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-slate-300">
          {t("description")}
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative z-10 mt-12">
        {/* Main carousel area */}
        <div className="relative overflow-hidden rounded-3xl">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? 300 : -300,
                  scale: 0.8,
                  opacity: 0,
                }),
                center: {
                  x: 0,
                  scale: 1,
                  opacity: 1,
                },
                exit: (dir: number) => ({
                  x: dir > 0 ? -300 : 300,
                  scale: 0.8,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 28 },
                scale: { type: "spring", stiffness: 200, damping: 28 },
                opacity: { duration: 0.3 },
              }}
            >
              <ProjectCard project={featuredProjects[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {featuredProjects.map((project, index) => (
              <button
                key={project.slug}
                onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-cyan-400"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project counter */}
          <p className="text-sm text-slate-400">
            <span className="font-bold text-cyan-400">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(featuredProjects.length).padStart(2, "0")}
          </p>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-400"
              aria-label="Previous project"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={goNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-400"
              aria-label="Next project"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}