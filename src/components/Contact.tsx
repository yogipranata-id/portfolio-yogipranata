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
          <div className="relative rounded-3xl bg-white p-8 text-center shadow-2xl transition-colors duration-300 dark:bg-[#0A0A0B] sm:p-16">
            {/* Floating icon */}
            <motion.div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-600/30 bg-amber-500/10 text-[#D97706] dark:border-[#F0C05A]/20 dark:bg-[#F0C05A]/10 dark:text-[#F0C05A]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <MessageSquare size={32} />
            </motion.div>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl dark:text-white">
              {t("heading")}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:yogi.pranata0021@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D97706] px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#B45309] hover:shadow-[0_0_30px_rgba(217,119,6,0.35)] dark:bg-[#F0C05A] dark:text-slate-950 dark:hover:bg-[#F5D078] dark:hover:shadow-[0_0_30px_rgba(240,192,90,0.35)]"
              >
                <Mail size={20} />
                {t("sendEmail")}
              </a>

              <a
                href="https://www.linkedin.com/in/yogi-pranata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100/80 px-8 py-4 font-bold text-slate-800 transition-all duration-300 hover:scale-105 hover:bg-slate-200 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
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
