"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
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
            My Portfolio
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Hi, saya{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Yogi Pranata
            </span>
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-slate-200 md:text-2xl">
            Computer Science Fresh Graduate • Web Development • Web3 & Crypto Enthusiast
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            Lulusan D3 Manajemen Informatika yang berfokus pada pengembangan web
            dan pelayanan IT. Siap berkontribusi membangun solusi digital yang
            efisien dan berdampak.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
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

        {/* Right visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col items-center rounded-[1.5rem] border border-white/10 bg-[#080c1f]/80 p-6">
              
              {/* Profile Picture */}
              <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-cyan-400/20 bg-cyan-400/10">
                <Image 
                  src="/profile.jpeg" 
                  alt="Yogi Pranata"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-sm text-cyan-300">Current Status</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Computer Science Fresh Graduate
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-2xl font-bold text-white">4+</h4>
                    <p className="mt-1 text-sm text-slate-400">Projects</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-2xl font-bold text-white">D3</h4>
                    <p className="mt-1 text-sm text-slate-400">Manajemen Informatika di Universitas Riau</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="mb-3 text-sm text-slate-400">Tech Stack</p>

                  <div className="flex flex-wrap gap-2">
                    {["PHP", "Laravel", "MySQL", "React", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}