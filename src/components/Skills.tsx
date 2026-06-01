"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Web Development",
    description: "Teknologi utama untuk membangun sistem dan tampilan website.",
    skills: ["PHP", "Laravel", "HTML", "CSS", "Bootstrap", "React.js", "Next.js", "Tailwind", "JavaScript"],
  },
  {
    title: "Tools & Interests",
    description: "Tools pendukung development dan minat teknologi lainnya.",
    skills: ["MySQL", "Git", "VS Code", "Vercel", "Web3", "Crypto"],
  },
  {
    title: "Soft Skills & Languages",
    description: "Kemampuan komunikasi, interpersonal, dan bahasa.",
    skills: ["Communication", "Customer Satisfaction", "Customer Support", "Bahasa Indonesia", "English"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          Skills
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          Teknologi yang saya gunakan
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-slate-300">
          Saya menggunakan beberapa teknologi dalam proses pengembangan website,
          mulai dari frontend, backend, database, hingga tools pendukung
          development.
        </p>
      </motion.div>

      <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
          >
            <h3 className="text-xl font-bold text-white">{category.title}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {category.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}