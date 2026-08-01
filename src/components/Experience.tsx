"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Experience() {
  const t = useTranslations("Experience");

  // Arrays must be fetched from translations since they contain translated content
  const workExperience = t.raw("work");
  const education = t.raw("education");
  const certifications = t.raw("certifications");

  // State for image carousel inside the modal
  const [activeCert, setActiveCert] = useState<{
    title: string;
    urls: string[];
  } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeCert = () => {
    setActiveCert(null);
    setCurrentImageIndex(0);
  };

  // Prevent background scrolling when modal is open
  if (typeof window !== "undefined") {
    if (activeCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Background Glow */}
      <div className="absolute left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute right-10 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* ── ATAS: PENGALAMAN KERJA ── */}
      <div className="relative z-10 mb-16">
        <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
            <Briefcase size={18} />
          </span>
          {t("workTitle")}
        </h3>

        <div className="space-y-6">
          {workExperience.map((job: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:h-full before:w-[2px] before:bg-white/10 last:before:hidden"
            >
              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-[#050816] bg-cyan-400" />

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.07]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white">{job.role}</h4>
                    <p className="mt-1 font-medium text-cyan-400">
                      {job.company}
                    </p>
                  </div>
                  <span className="inline-block whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                    {job.type}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {job.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                </div>

                <ul className="mt-5 list-inside space-y-2 text-sm leading-relaxed text-slate-300">
                  {job.points.map((point: string, idx: number) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── BAWAH: PENDIDIKAN & SERTIFIKASI (Side-by-side) ── */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-2">
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
            {t("educationTitle")}
          </h3>

          <div className="space-y-4">
            {education.map((edu: any, index: number) => (
              <motion.div
                key={index}
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
            {t("certTitle")}
          </h3>

          <div className="space-y-4">
            {certifications.map((cert: any, index: number) => (
              <motion.div
                key={index}
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

                  {(cert.certUrls && cert.certUrls.length > 0) && (
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
                      {t("viewCert")}
                    </button>
                  )}
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
                    alt={`${activeCert.title} - ${t("page")} ${currentImageIndex + 1}`}
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
                      {t("page")} <span className="text-white">{currentImageIndex + 1}</span> {t("of")} {activeCert.urls.length}
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
