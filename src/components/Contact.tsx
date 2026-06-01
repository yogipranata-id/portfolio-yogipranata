"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl sm:p-16"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
          <MessageSquare size={32} />
        </div>

        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Mari Bekerja Sama
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Saya selalu terbuka untuk mendiskusikan project pembuatan website, 
          ide-ide menarik, maupun peluang karir sebagai Web Developer. 
          Jangan ragu untuk menyapa!
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:yogi.pranata0021@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
          >
            <Mail size={20} />
            Kirim Email
          </a>
          
          <a
            href="https://www.linkedin.com/in/yogi-pranata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-white/10"
          >
            <FaLinkedin size={20} />
            LinkedIn Profile
          </a>
        </div>
      </motion.div>
    </section>
  );
}
