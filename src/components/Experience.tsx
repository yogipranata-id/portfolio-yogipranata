"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const workExperience = [
  {
    role: "Customer Happiness",
    company: "Assist.id",
    type: "Paid Internship",
    date: "Feb 2026 - Apr 2026",
    location: "Pekanbaru Kota, Riau",
    points: [
      "Bertindak sebagai titik kontak utama untuk memastikan kepuasan pengguna platform SaaS klinik dan rumah sakit.",
      "Mengelola keluhan pelanggan, memberikan panduan penggunaan fitur sistem, serta memastikan penyelesaian masalah secara tepat waktu.",
      "Menjadi jembatan umpan balik antara pengguna dan tim pengembang internal untuk peningkatan produk.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "ADIMULIA GROUP (PT. Surya Agrolika Reksa)",
    type: "Internship",
    date: "Jul 2025 - Agu 2025",
    location: "Kuantan Singingi, Riau",
    points: [
      "Membantu transformasi digital data absensi di Departemen K3ML dari pencatatan manual ke sistem terpusat.",
      "Melakukan riset kebutuhan, merancang prototipe mobile (Flutter), lalu mengembangkan Aplikasi Web Berbasis Geotagging.",
      "Mengimplementasikan algoritma Haversine untuk validasi lokasi absensi secara real-time.",
    ],
  },
];

const education = [
  {
    degree: "D3 Manajemen Informatika",
    institution: "Universitas Riau",
    date: "2023 - 2026",
    location: "Pekanbaru, Riau",
  },
  {
    degree: "SMA (Ilmu Pengetahuan Sosial)",
    institution: "SMAN 1 Peranap",
    date: "2020 - 2023",
    location: "Indragiri Hulu, Riau",
  },
];

const certifications = [
  {
    title: "IDCamp Connect Roadshow - Riau",
    issuer: "Dicoding Indonesia",
    date: "Nov 2025",
    type: "Event Participant",
    certUrls: ["/certificates/idcamp-connect-roadshow.png"],
  },
  {
    title: "Web3 on Campus - Certificate of Appreciation 2025",
    issuer: "IDNFT | Web3 Education and Adoption Center",
    date: "Oct 2025",
    type: "Event Participant",
    certUrls: ["/certificates/web3-on-campus.png"],
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026 - Jan 2029",
    type: "Course",
    certUrls: ["/certificates/belajar-dasar-ai.png", "/certificates/belajar-dasar-ai2.png"],
  },
];

type CertModal = {
  title: string;
  urls: string[];
} | null;

export default function Experience() {
  const [activeCert, setActiveCert] = useState<CertModal>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeCert = useCallback(() => setActiveCert(null), []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCert();
    };
    if (activeCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [activeCert, closeCert]);

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute left-10 bottom-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          Experience
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          Perjalanan Profesional
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-slate-300">
          Pengalaman kerja, pendidikan, dan sertifikasi yang membentuk kemampuan
          saya sebagai seorang Web Developer.
        </p>
      </motion.div>

      {/* Work Experience */}
      <div className="relative z-10 mt-12 space-y-6">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-lg font-semibold text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
            <Briefcase size={18} />
          </span>
          Pengalaman Kerja
        </motion.h3>

        {/* Timeline */}
        <div className="relative ml-4 border-l-2 border-white/10 pl-8 space-y-8">
          {workExperience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#050816]" />

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.07]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-sm font-medium text-cyan-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    {exp.type}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {exp.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-7 text-slate-300"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education & Certifications — side by side */}
      <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-2">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10 text-purple-400">
              <GraduationCap size={18} />
            </span>
            Pendidikan
          </h3>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-purple-400/30 hover:bg-white/[0.07]"
              >
                <h4 className="font-bold text-white">{edu.degree}</h4>
                <p className="mt-1 text-sm font-medium text-purple-400">
                  {edu.institution}
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {edu.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {edu.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
              <Award size={18} />
            </span>
            Sertifikasi & Pelatihan
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
              >
                <h4 className="font-bold text-white">{cert.title}</h4>
                <p className="mt-1 text-sm text-emerald-400">{cert.issuer}</p>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {cert.date}
                    </span>
                    <span>{cert.type}</span>
                  </div>

                  <button
                    onClick={() => {
                      setActiveCert({
                        title: cert.title,
                        urls: cert.certUrls,
                      });
                      setCurrentImageIndex(0);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300 transition hover:bg-emerald-400/20"
                  >
                    <Eye size={12} />
                    Lihat Sertifikat
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeCert}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f24]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <h3 className="text-lg font-bold text-white">
                  {activeCert.title}
                </h3>
                <button
                  onClick={closeCert}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Tutup"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/20">
                  <Image
                    src={activeCert.urls[currentImageIndex]}
                    alt={`${activeCert.title} - Halaman ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Carousel Controls */}
                {activeCert.urls.length > 1 && (
                  <div className="mt-5 flex items-center justify-between px-2">
                    <button
                      onClick={() => setCurrentImageIndex((prev) => Math.max(0, prev - 1))}
                      disabled={currentImageIndex === 0}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="text-sm font-medium text-slate-400">
                      Halaman <span className="text-white">{currentImageIndex + 1}</span> dari {activeCert.urls.length}
                    </span>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => Math.min(activeCert.urls.length - 1, prev + 1))}
                      disabled={currentImageIndex === activeCert.urls.length - 1}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
                      aria-label="Next page"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
