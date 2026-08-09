"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, "")) || 0;
  const hasPlus = target.includes("+");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = duration / numericTarget;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= numericTarget) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  return (
    <span ref={ref} className="text-3xl font-bold text-white md:text-4xl">
      {count}{hasPlus ? "+" : ""}{suffix}
    </span>
  );
}

export default function About() {
  const t = useTranslations("About");

  const stats = [
    { value: "2+", label: t("statWork") },
    { value: "3", label: t("statCert") },
    { value: "2+", label: t("statCoding") },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Gradient divider at top */}
      <div className="gradient-divider mb-16" />

      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]"
        style={{ animation: "float 10s ease-in-out infinite" }}
      />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center"
        >
          <div className="grid w-full grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl transition-all duration-500 hover:border-transparent hover:bg-white/[0.08]"
              >
                {/* Gradient border on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(34,211,238,0.3), rgba(168,85,247,0.3))",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                    borderRadius: "1rem",
                  }}
                />
                <AnimatedCounter target={stat.value} />
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}