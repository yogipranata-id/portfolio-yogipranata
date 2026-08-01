"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center"
        >
          <div className="grid w-full grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">2+</h3>
              <p className="mt-1 text-sm text-slate-400">{t("statWork")}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">3</h3>
              <p className="mt-1 text-sm text-slate-400">{t("statCert")}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">2+</h3>
              <p className="mt-1 text-sm text-slate-400">{t("statCoding")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}