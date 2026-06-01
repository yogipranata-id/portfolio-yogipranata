"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Customer Happiness",
    company: "Assist.id",
    date: "Feb 2026 - Apr 2026",
    location: "Pekanbaru Kota, Riau",
    description: "Paid internship. Bertindak sebagai titik kontak utama untuk memastikan kepuasan pengguna. Mengelola keluhan, memberikan panduan fitur sistem, serta menjadi jembatan umpan balik berharga antara pengguna dan tim internal.",
  },
  {
    role: "Software Engineer Intern",
    company: "ADIMULIA GROUP (PT. Surya Agrolika Reksa)",
    date: "Jul 2025 - Agu 2025",
    location: "Kuantan Singingi, Riau",
    description: "Membantu transformasi digital data absensi di Departemen K3ML. Melakukan riset, merancang prototipe mobile (Flutter), lalu mengembangkan dan mengimplementasikan Aplikasi Web Berbasis Geotagging untuk manajemen data terpusat.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
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
            Saat ini saya sedang menempuh pendidikan D3 Manajemen Informatika di Universitas Riau. 
            Saya terus mengembangkan kemampuan secara mandiri melalui berbagai <i>personal projects</i> 
            dan terbiasa mempelajari teknologi baru dengan cepat.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            Saya sangat terbuka terhadap peluang <i>freelance</i>, magang, maupun posisi <i>entry-level</i> 
            di bidang teknologi. Fokus saya adalah selalu memberikan solusi yang tidak hanya berfungsi 
            dengan baik, namun juga berpusat pada kepuasan pengguna.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">4+</h3>
              <p className="mt-1 text-sm text-slate-400">Project Web</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">D3</h3>
              <p className="mt-1 text-sm text-slate-400">Informatika</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">2+</h3>
              <p className="mt-1 text-sm text-slate-400">Pengalaman</p>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col justify-center gap-6"
        >
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-sm font-medium text-cyan-400">{exp.company}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {exp.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}