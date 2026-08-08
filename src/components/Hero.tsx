"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

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
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      {/* Background blur effect */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute left-10 top-1/2 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            {t("badge")}
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            {t("greeting")}{" "}
            <span className="text-white">
              {t("name")}
            </span>
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-slate-200 md:text-2xl">
            {t("subtitle")}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {t("viewProjects")}
              <ArrowRight size={18} />
            </a>

            <a
              href="/CV-ATS-YogiPranata.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
            >
              <FileText size={18} />
              {t("viewCv")}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {t("contactMe")}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-slate-400">
            <a
              href="https://github.com/yogipranata-id"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:-translate-y-1 hover:text-cyan-400"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/yogi-pranata"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:-translate-y-1 hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:yogi.pranata0021@gmail.com"
              className="transition hover:-translate-y-1 hover:text-cyan-400"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right visual card — 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[380px] px-4 md:px-0"
          style={{ perspective: "1000px" }}
        >
          {/* Behind glow */}
          <div
            className="pointer-events-none absolute -inset-4 rounded-[2.5rem] opacity-0 blur-2xl transition-opacity duration-500"
            style={{
              opacity: isHovering ? 0.6 : 0,
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(34,211,238,0.25), rgba(139,92,246,0.15), transparent 70%)`,
            }}
          />

          {/* Card Shell */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-[3/4.2] w-full cursor-grab overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-slate-900/50"
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
              className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300"
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
              className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300"
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
                    <p className="text-xs font-semibold text-white">@yogipranataaaa_</p>
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
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-cyan-400 hover:bg-white/10 hover:text-cyan-400"
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