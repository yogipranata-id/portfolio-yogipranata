"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
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
  titleKey: string;
  descKey: string;
  skills: SkillItem[];
  accentColor: string;
};

const skillCategories: SkillCategory[] = [
  {
    titleKey: "webDev",
    descKey: "webDevDesc",
    accentColor: "34,211,238",
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
    titleKey: "tools",
    descKey: "toolsDesc",
    accentColor: "168,85,247",
    skills: [
      { name: "MySQL", icon: <SiMysql size={16} color="#4479A1" /> },
      { name: "Git", icon: <SiGit size={16} color="#F05032" /> },
      { name: "VS Code", icon: <FaCode size={16} color="#007ACC" /> },
      { name: "Vercel", icon: <SiVercel size={16} color="#FFFFFF" /> },
    ],
  },
  {
    titleKey: "softSkills",
    descKey: "softSkillsDesc",
    accentColor: "52,211,153",
    skills: [
      { name: "Communication" },
      { name: "Customer Satisfaction" },
      { name: "Customer Support" },
      { name: "Bahasa Indonesia" },
      { name: "English" },
    ],
  },
];

function GlowCard({
  children,
  accentColor,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  accentColor: string;
  className?: string;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 ${className}`}
    >
      {/* Mouse-tracking glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${accentColor},0.12), transparent 60%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="gradient-divider mb-16" />
      
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]"
        style={{ animation: "float-reverse 10s ease-in-out infinite" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-[#F0C05A]">
          {t("label")}
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          {t("heading")}
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-slate-300">
          {t("description")}
        </p>
      </motion.div>

      <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, index) => (
          <GlowCard
            key={category.titleKey}
            accentColor={category.accentColor}
            delay={index * 0.15}
          >
            <h3 className="text-xl font-bold text-white">{t(category.titleKey)}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {t(category.descKey)}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white hover:shadow-[0_0_12px_rgba(34,211,238,0.08)]"
                >
                  {skill.icon && <span className="transition-transform duration-300 group-hover:scale-125">{skill.icon}</span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}