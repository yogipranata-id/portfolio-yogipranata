"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { InlineWordReveal } from "@/components/ui/inline-word-reveal";

/** Strip HTML tags from a string to get plain text for word-by-word reveal */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="relative z-10 rounded-t-[2.5rem] bg-[#FAFAF9] shadow-[0_-20px_60px_rgba(0,0,0,0.04)] transition-colors duration-300 dark:bg-[#0A0A0B] dark:shadow-[0_-20px_60px_rgba(0,0,0,0.6)]"
    >
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* Gradient divider */}
        <div className="gradient-divider mb-16" />

        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]"
          style={{ animation: "float 10s ease-in-out infinite" }}
        />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">

          {/* Left Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-tr from-white to-amber-50/30 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:bg-white/5 dark:shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/profile.jpeg"
                  alt="Yogi Pranata"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: "center 18%" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Decorative elements behind image */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-amber-600/15 blur-[50px] dark:bg-amber-700/20" />
            <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-amber-400/20 blur-[50px] dark:bg-[#F0C05A]/20" />
          </motion.div>

          {/* Right Side: Text Content with Word-by-Word Reveal */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D97706] dark:text-[#F0C05A]"
            >
              {t("label")}
            </motion.p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              <InlineWordReveal className="leading-tight text-slate-950 dark:text-white" delay={0}>
                {t("heading")}
              </InlineWordReveal>
            </h2>

            <p className="mt-6 leading-8">
              <InlineWordReveal className="leading-8 text-slate-700 dark:text-slate-300" delay={0.1}>
                {stripHtml(t.raw("p1") as string)}
              </InlineWordReveal>
            </p>

            <p className="mt-5 leading-8">
              <InlineWordReveal className="leading-8 text-slate-700 dark:text-slate-300" delay={0.15}>
                {stripHtml(t.raw("p2") as string)}
              </InlineWordReveal>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}