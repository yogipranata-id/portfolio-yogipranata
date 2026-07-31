"use client";

import { motion } from "framer-motion";
import {
  SiPhp, SiLaravel, SiHtml5, SiCss, SiBootstrap, SiReact, SiNextdotjs, SiTailwindcss, SiJavascript,
  SiMysql, SiGit, SiVercel
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

type SkillItem = {
  name: string;
  icon?: React.ReactNode;
};

type SkillCategory = {
  title: string;
  description: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    description: "Teknologi utama untuk membangun sistem dan tampilan website.",
    skills: [
      { name: "PHP", icon: <SiPhp size={16} color="#777BB4" /> },
      { name: "Laravel", icon: <SiLaravel size={16} color="#FF2D20" /> },
      { name: "HTML", icon: <SiHtml5 size={16} color="#E34F26" /> },
      { name: "CSS", icon: <SiCss size={16} color="#1572B6" /> },
      { name: "Bootstrap", icon: <SiBootstrap size={16} color="#7952B3" /> },
      { name: "React.js", icon: <SiReact size={16} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={16} color="#FFFFFF" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={16} color="#06B6D4" /> },
      { name: "JavaScript", icon: <SiJavascript size={16} color="#F7DF1E" /> },
    ],
  },
  {
    title: "Tools",
    description: "Tools pendukung development yang biasa saya gunakan sehari-hari.",
    skills: [
      { name: "MySQL", icon: <SiMysql size={16} color="#4479A1" /> },
      { name: "Git", icon: <SiGit size={16} color="#F05032" /> },
      { name: "VS Code", icon: <FaCode size={16} color="#007ACC" /> },
      { name: "Vercel", icon: <SiVercel size={16} color="#FFFFFF" /> },
    ],
  },
  {
    title: "Soft Skills & Languages",
    description: "Kemampuan komunikasi, interpersonal, dan bahasa.",
    skills: [
      { name: "Communication" },
      { name: "Customer Satisfaction" },
      { name: "Customer Support" },
      { name: "Bahasa Indonesia" },
      { name: "English" },
    ],
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
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:bg-white/10 hover:text-white"
                >
                  {skill.icon && <span className="transition-transform group-hover:scale-110">{skill.icon}</span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}