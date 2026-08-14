"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-24">
      <div className="gradient-divider mb-16" />

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[100px]"
        style={{ animation: "float 10s ease-in-out infinite" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        {/* Card with animated gradient border */}
        <div className="relative overflow-hidden rounded-3xl p-[1px]">
          {/* Rotating gradient border */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "conic-gradient(from 0deg, rgba(240,192,90,0.3), rgba(245,208,120,0.3), rgba(240,192,90,0.1), rgba(245,208,120,0.3), rgba(240,192,90,0.3))",
              animation: "spin 8s linear infinite",
            }}
          />

          {/* Inner card */}
          <div className="relative rounded-3xl bg-[#0A0A0B] p-8 text-center sm:p-16">
            {/* Floating icon */}
            <motion.div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F0C05A]/20 bg-[#F0C05A]/10 text-[#F0C05A]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <MessageSquare size={32} />
            </motion.div>

            <h2 className="text-3xl font-bold text-white md:text-5xl">
              {t("heading")}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:yogi.pranata0021@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-[#F0C05A] px-8 py-4 font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-[#F5D078] hover:shadow-[0_0_30px_rgba(240,192,90,0.35)]"
              >
                <Mail size={20} />
                {t("sendEmail")}
              </a>

              <a
                href="https://www.linkedin.com/in/yogi-pranata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                <FaLinkedin size={20} />
                {t("linkedIn")}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
