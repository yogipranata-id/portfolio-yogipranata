"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  SiPhp, SiLaravel, SiHtml5, SiCss, SiBootstrap, SiReact, SiNextdotjs, SiTailwindcss, SiJavascript,
  SiMysql, SiGit, SiVercel, SiGithub, SiFigma
} from "react-icons/si";
import { FaCode, FaMicrosoft } from "react-icons/fa";
import { Users, Brain, Zap, MessageSquare, ShieldCheck, RefreshCw } from "lucide-react";

type SkillItem = {
  name: string;
  icon?: React.ReactNode;
};

type SkillCategory = {
  titleKey: string;
  descKey: string;
  skills: SkillItem[];
  accentColor: string;
  gridSpan?: string;
};

const skillCategories: SkillCategory[] = [
  {
    titleKey: "webDev",
    descKey: "webDevDesc",
    accentColor: "240,192,90",
    gridSpan: "md:col-span-2",
    skills: [
      { name: "PHP", icon: <SiPhp size={16} color="#777BB4" /> },
      { name: "Laravel", icon: <SiLaravel size={16} color="#FF2D20" /> },
      { name: "JavaScript", icon: <SiJavascript size={16} color="#F7DF1E" /> },
      { name: "React.js", icon: <SiReact size={16} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={16} color="#FFFFFF" /> },
      { name: "HTML", icon: <SiHtml5 size={16} color="#E34F26" /> },
      { name: "CSS", icon: <SiCss size={16} color="#1572B6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={16} color="#06B6D4" /> },
      { name: "Bootstrap", icon: <SiBootstrap size={16} color="#7952B3" /> },
      { name: "MySQL", icon: <SiMysql size={16} color="#4479A1" /> },
    ],
  },
  {
    titleKey: "tools",
    descKey: "toolsDesc",
    accentColor: "168,85,247",
    skills: [
      { name: "Git", icon: <SiGit size={16} color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub size={16} color="#FFFFFF" /> },
      { name: "VS Code", icon: <FaCode size={16} color="#007ACC" /> },
      { name: "Vercel", icon: <SiVercel size={16} color="#FFFFFF" /> },
      { name: "Figma", icon: <SiFigma size={16} color="#F24E1E" /> },
      { name: "Ms. Office", icon: <FaMicrosoft size={16} color="#D83B01" /> },
    ],
  },
  {
    titleKey: "personalSkills",
    descKey: "personalSkillsDesc",
    accentColor: "240,192,90",
    skills: [
      { name: "Teamwork", icon: <Users size={16} className="text-amber-400" /> },
      { name: "Problem Solving", icon: <Brain size={16} className="text-amber-400" /> },
      { name: "Quick Learner", icon: <Zap size={16} className="text-amber-400" /> },
      { name: "Communicative", icon: <MessageSquare size={16} className="text-amber-400" /> },
      { name: "Responsible", icon: <ShieldCheck size={16} className="text-amber-400" /> },
      { name: "Adaptive", icon: <RefreshCw size={16} className="text-amber-400" /> },
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
      className={`relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/80 p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_0_1px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.12)] dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-white/20 ${className}`}
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
        <p className="text-sm uppercase tracking-[0.35em] text-[#D97706] dark:text-[#F0C05A]">
          {t("label")}
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
          {t("heading")}
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
          {t("description")}
        </p>
      </motion.div>

      {/* Bento-style grid: 2 columns on desktop */}
      <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <GlowCard
            key={category.titleKey}
            accentColor={category.accentColor}
            delay={index * 0.1}
            className={category.gridSpan || ""}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t(category.titleKey)}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {t(category.descKey)}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-4 py-2 text-sm text-slate-700 transition-all duration-300 hover:border-[#D97706]/40 hover:bg-[#D97706]/10 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-[#F0C05A]/30 dark:hover:bg-[#F0C05A]/5 dark:hover:text-white dark:hover:shadow-[0_0_12px_rgba(240,192,90,0.08)]"
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