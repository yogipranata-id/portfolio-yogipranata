"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ScreenshotGalleryProps = {
  screenshots: string[];
  projectTitle: string;
};

export default function ScreenshotGallery({
  screenshots,
  projectTitle,
}: ScreenshotGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;

  // ── Navigation handlers ──
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? screenshots.length - 1 : lightboxIndex - 1
    );
  }, [lightboxIndex, screenshots.length]);

  const goToNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === screenshots.length - 1 ? 0 : lightboxIndex + 1
    );
  }, [lightboxIndex, screenshots.length]);

  // ── Keyboard navigation ──
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    // Prevent body scroll saat lightbox terbuka
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, goToPrevious, goToNext]);

  if (screenshots.length === 0) return null;

  return (
    <>
      {/* ── View Screenshots Trigger ── */}
      <button
        onClick={() => openLightbox(0)}
        className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 py-16 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#F0C05A]/30 dark:hover:bg-[#F0C05A]/5"
      >
        <div className="absolute inset-0 opacity-10 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-30 group-hover:grayscale-0">
          <Image
            src={screenshots[0]}
            alt="Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-50/80 dark:bg-[#111113]/90" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-900/5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md dark:bg-white/10 dark:ring-white/10">
            <Images size={28} className="text-slate-700 dark:text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">View Project Screenshots</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Gallery of {screenshots.length} images
            </p>
          </div>
        </div>
      </button>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Top Bar with Counter and Close */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-gradient-to-b from-black/60 to-transparent">
              <span className="text-sm font-medium text-white/80">
                {lightboxIndex! + 1} / {screenshots.length}
              </span>
              <button
                onClick={closeLightbox}
                className="rounded-full bg-white/10 p-2.5 text-white transition-all hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Previous button */}
            {screenshots.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 z-10 rounded-full bg-white/10 p-3.5 text-white transition-all hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/50 md:left-8"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Image — smooth scale and fade animation */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative mx-4 flex max-h-[85vh] max-w-[95vw] flex-col items-center justify-center md:mx-16 md:max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[lightboxIndex!]}
                alt={`${projectTitle} screenshot ${lightboxIndex! + 1}`}
                width={1920}
                height={1080}
                className="max-h-[85vh] rounded-lg object-contain shadow-2xl ring-1 ring-white/10"
                priority
              />
            </motion.div>

            {/* Next button */}
            {screenshots.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 z-10 rounded-full bg-white/10 p-3.5 text-white transition-all hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/50 md:right-8"
                aria-label="Next screenshot"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
