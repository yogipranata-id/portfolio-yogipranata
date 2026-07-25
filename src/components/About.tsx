"use client";

import { motion } from "framer-motion";

export default function About() {
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
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
            Dedikasi untuk terus berkembang.
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Saya adalah lulusan D3 Manajemen Informatika dari Universitas Riau dengan fokus 
            kuat pada pengembangan web dan pelayanan IT. Saya memiliki rekam jejak dalam merancang 
            dan membangun sistem aplikasi web menggunakan PHP, Laravel, Next.js, HTML, CSS, dan Bootstrap, 
            yang dipadukan dengan pengalaman langsung menangani <i>customer inquiry</i> serta 
            penyelesaian masalah (<i>troubleshooting</i>) platform digital.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            Didorong oleh rasa ingin tahu yang besar, saya adalah pembelajar cepat 
            (<i>fast learner</i>) yang tanggap dan sangat mudah beradaptasi dengan lingkungan 
            kerja maupun teknologi baru. Saya terbiasa berkolaborasi dalam tim, komunikatif, 
            dan selalu antusias merancang solusi teknologi yang efisien, skalabel, serta berdampak positif.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            Saya sangat terbuka terhadap peluang <i>freelance</i>, magang, maupun 
            posisi <i>entry-level</i> di bidang teknologi. Fokus saya adalah selalu memberikan 
            solusi yang tidak hanya berfungsi dengan baik, namun juga berpusat pada kepuasan pengguna.
          </p>
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
              <p className="mt-1 text-sm text-slate-400">Pengalaman Kerja</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">3</h3>
              <p className="mt-1 text-sm text-slate-400">Sertifikasi</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">2+</h3>
              <p className="mt-1 text-sm text-slate-400">Tahun Coding</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}