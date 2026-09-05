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
      <div className="gradient-divider mb-16" />

      {/* ── ATAS: PENGALAMAN KERJA ── */}
      <div className="relative z-10 mb-16">
        <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-600/30 bg-amber-500/10 text-[#D97706] dark:border-[#F0C05A]/20 dark:bg-[#F0C05A]/10 dark:text-[#F0C05A]">
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
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-[#D97706]/50 before:to-amber-700/20 dark:before:from-[#F0C05A]/50 last:before:hidden"
            >
              {/* Animated dot */}
              <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-[#F8FAFC] bg-[#D97706] dark:border-[#0A0A0B] dark:bg-[#F0C05A]">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#D97706] opacity-20 dark:bg-[#F0C05A]" />
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white/85 p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_0_1px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.1)] dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-[#F0C05A]/30 dark:hover:bg-white/[0.07] dark:hover:shadow-[0_8px_30px_rgba(240,192,90,0.06)]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h4>
                    <p className="mt-1 font-medium text-[#D97706] dark:text-[#F0C05A]">
                      {job.company}
                    </p>
                  </div>
                  <span className="inline-block whitespace-nowrap rounded-full bg-slate-200/80 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-300">
                    {job.type}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {job.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                </div>

                <ul className="mt-5 list-inside space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {job.points.map((point: string, idx: number) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D97706] dark:bg-[#F0C05A]" />
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
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-600/30 bg-amber-500/10 text-[#D97706] dark:border-amber-600/20 dark:bg-amber-600/10 dark:text-amber-500">
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
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-slate-200/90 bg-white/85 p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_0_1px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.1)] dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-amber-500/30 dark:hover:bg-white/[0.07] dark:hover:shadow-[0_8px_30px_rgba(240,192,90,0.06)]"
              >
                <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                <p className="mt-1 text-sm font-medium text-[#D97706] dark:text-amber-500">
                  {edu.institution}
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
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
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-400">
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
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-slate-200/90 bg-white/85 p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_0_1px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(251,146,60,0.1)] dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-orange-400/30 dark:hover:bg-white/[0.07] dark:hover:shadow-[0_8px_30px_rgba(251,146,60,0.06)]"
              >
                <h4 className="font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                <p className="mt-1 text-sm text-orange-600 dark:text-orange-400">{cert.issuer}</p>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
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
                      className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-600 transition-all duration-300 hover:bg-orange-500/20 hover:shadow-md dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm dark:bg-black/80"
            onClick={closeCert}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0A0A0B]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-white/10">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {activeCert.title}
                </h3>
                <button
                  onClick={closeCert}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                  aria-label="Tutup"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-black/20">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 disabled:opacity-30 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {t("page")} <span className="font-bold text-slate-900 dark:text-white">{currentImageIndex + 1}</span> {t("of")} {activeCert.urls.length}
                    </span>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => Math.min(activeCert.urls.length - 1, prev + 1))}
                      disabled={currentImageIndex === activeCert.urls.length - 1}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 disabled:opacity-30 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
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
