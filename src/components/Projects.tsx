"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

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
          Projects
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          Featured Projects
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-slate-300">
          Berikut beberapa project yang pernah saya kerjakan. Untuk project yang
          belum dihosting, saya menampilkan tampilan UI, case study, dan source
          code. Sedangkan project yang sudah online juga memiliki tombol live
          demo.
        </p>
      </motion.div>

      <div className="relative z-10 mt-12 grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}