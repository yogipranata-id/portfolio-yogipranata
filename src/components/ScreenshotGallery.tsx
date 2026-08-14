"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
  // Best practice: lightbox harus bisa dioperasikan via keyboard
  // Escape → tutup, Arrow Left/Right → navigasi
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
      {/* ── Thumbnail Grid ── */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((src, index) => (
          <button
            key={src}
            onClick={() => openLightbox(index)}
            className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 transition hover:border-[#F0C05A]/40"
          >
            <Image
              src={src}
              alt={`${projectTitle} screenshot ${index + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
              <span className="scale-0 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition duration-300 group-hover:scale-100">
                View
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous button */}
            {screenshots.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Image — scale animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative mx-4 max-h-[85vh] max-w-[95vw] md:mx-16 md:max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[lightboxIndex!]}
                alt={`${projectTitle} screenshot ${lightboxIndex! + 1}`}
                width={1400}
                height={800}
                className="max-h-[85vh] rounded-xl object-contain"
                priority
              />

              {/* Counter */}
              <p className="mt-4 text-center text-sm text-slate-400">
                {lightboxIndex! + 1} / {screenshots.length}
              </p>
            </motion.div>

            {/* Next button */}
            {screenshots.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
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
