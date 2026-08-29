"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const t = useTranslations("Hero");
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 12;

    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = ((centerY - y) / centerY) * maxTilt;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  }, []);

  return (
    <section id="home" className="top-0 z-0 flex min-h-dvh items-center px-6 pb-12 pt-28 md:sticky">
      {/* Animated background orbs */}
      <div
        className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/15 blur-[100px]"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-amber-700/15 blur-[100px]"
        style={{ animation: "float-reverse 10s ease-in-out infinite" }}
      />
      <div
        className="absolute left-10 top-1/2 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]"
        style={{ animation: "float 12s ease-in-out infinite 2s" }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left content — staggered animation */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          <motion.h1 variants={fadeUp} className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl dark:text-white">
            {t("greeting")}{" "}
            <span className="text-slate-900 dark:text-white">
              {t("name")}
            </span>
          </motion.h1>

          <motion.h2 variants={fadeUp} className="mt-4 text-xl font-semibold text-slate-700 md:text-2xl dark:text-slate-200">
            {t("subtitle")}
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
            {t("description")}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#D97706] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#B45309] hover:shadow-[0_0_24px_rgba(217,119,6,0.35)] dark:bg-[#F0C05A] dark:text-slate-950 dark:hover:bg-[#F5D078] dark:hover:shadow-[0_0_24px_rgba(240,192,90,0.35)]"
            >
              {t("viewProjects")}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/CV-ATS-YogiPranata.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-500/10 px-6 py-3 font-semibold text-amber-700 transition-all duration-300 hover:bg-amber-500/20 hover:shadow-[0_0_20px_rgba(217,119,6,0.15)] dark:border-[#F0C05A]/30 dark:bg-[#F0C05A]/10 dark:text-[#F5D078] dark:hover:bg-[#F0C05A]/20"
            >
              <FileText size={18} />
              {t("viewCv")}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-800 transition-all duration-300 hover:border-[#D97706] hover:text-[#D97706] hover:shadow-[0_0_20px_rgba(217,119,6,0.1)] dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-[#F0C05A] dark:hover:text-[#F0C05A]"
            >
              {t("contactMe")}
            </a>
          </motion.div>

          {/* Social icons — staggered */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-5 text-slate-500 dark:text-slate-400">
            {[
              { href: "https://github.com/yogipranata-id", label: "GitHub", icon: <FaGithub size={24} /> },
              { href: "https://www.linkedin.com/in/yogi-pranata", label: "LinkedIn", icon: <FaLinkedin size={24} /> },
              { href: "mailto:yogi.pranata0021@gmail.com", label: "Email", icon: <Mail size={24} /> },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="transition-all duration-300 hover:-translate-y-1 hover:text-[#D97706] dark:hover:text-[#F0C05A] hover:drop-shadow-[0_0_8px_rgba(240,192,90,0.4)]"
                aria-label={social.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right visual card — 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[380px] px-4 md:px-0"
          style={{ perspective: "1000px" }}
        >
          {/* Behind glow */}
          <div
            className="pointer-events-none absolute -inset-4 rounded-[2.5rem] opacity-0 blur-2xl transition-opacity duration-500"
            style={{
              opacity: isHovering ? 0.6 : 0,
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(217,119,6,0.3), rgba(245,158,11,0.2), transparent 70%)`,
            }}
          />

          {/* Card Shell */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-[3/4.2] w-full cursor-grab overflow-hidden rounded-[2rem] border border-amber-500/25 bg-slate-950/80 shadow-[0_20px_50px_rgba(217,119,6,0.12)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(217,119,6,0.25)] dark:border-white/10 dark:bg-slate-900/50 dark:shadow-2xl dark:hover:shadow-[0_20px_60px_rgba(240,192,90,0.15)]"
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Background Image */}
            <Image
              src="/MyProfile.png"
              alt={t("name")}
              fill
              className="object-cover object-top"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />

            {/* Shine Effect */}
            <div
              className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
              style={{
                opacity: isHovering ? 0.15 : 0,
                background: `linear-gradient(
                  ${135 + tilt.rotateY * 2}deg,
                  rgba(255,255,255,0) 0%,
                  rgba(255,255,255,0.4) ${40 + tilt.glareX * 0.2}%,
                  rgba(255,255,255,0) 80%
                )`,
              }}
            />

            {/* Glare Effect */}
            <div
              className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
              style={{
                opacity: isHovering ? 0.1 : 0,
                background: `radial-gradient(
                  circle at ${tilt.glareX}% ${tilt.glareY}%,
                  rgba(255,255,255,0.35) 0%,
                  transparent 60%
                )`,
              }}
            />

            {/* Top Text content */}
            <div className="absolute top-8 left-8 z-10" style={{ transform: "translateZ(30px)" }}>
              <h3 className="text-2xl font-bold text-white tracking-wide md:text-3xl drop-shadow-lg">
                {t("name")}
              </h3>
              <p className="text-sm text-slate-300 font-medium mt-1.5 drop-shadow-lg">
                Web Developer
              </p>
            </div>

            {/* Bottom Status Panel */}
            <div className="absolute bottom-6 left-6 right-6 z-10" style={{ transform: "translateZ(40px)" }}>
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src="/profile.jpeg"
                      alt={t("name")}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Status & Username */}
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white">@yogipranataaaa</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact button */}
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-[#F0C05A] hover:bg-white/10 hover:text-[#F0C05A]"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}