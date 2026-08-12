"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Gradient divider at top */}
      <div className="gradient-divider mb-16" />

      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]"
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
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
            {/* Hover Gradient Border */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, rgba(34,211,238,0.5), rgba(168,85,247,0.5))",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
                padding: "1px",
              }}
            />
            <Image
              src="/profile.jpeg"
              alt="Yogi Pranata"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Decorative elements behind image */}
          <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-purple-500/20 blur-[50px]" />
          <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-[50px]" />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            {t("label")}
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("heading")}
          </h2>

          <p
            className="mt-6 leading-8 text-slate-300"
            dangerouslySetInnerHTML={{ __html: t.raw("p1") }}
          />

          <p
            className="mt-5 leading-8 text-slate-300"
            dangerouslySetInnerHTML={{ __html: t.raw("p2") }}
          />

          <p
            className="mt-5 leading-8 text-slate-300"
            dangerouslySetInnerHTML={{ __html: t.raw("p3") }}
          />
        </motion.div>
        
      </div>
    </section>
  );
}