"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const t = useTranslations("Navbar");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 80;
      setScrolled(isScrolled);

      // Reset condition when reaching the top or scrolling significantly
      if (!isScrolled) {
        setIsOpen(false);
      } else if (Math.abs(currentScrollY - lastScrollY) > 15) {
        setIsOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "experience", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navItems = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("skills"), href: "#skills" },
    { label: t("experience"), href: "#experience" },
    { label: t("projects"), href: "#projects" },
    { label: t("contact"), href: "#contact" },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    
    // For Home, scroll to very top since Hero is sticky
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* ── Top transparent navbar (visible at top of page) ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            className="fixed left-0 top-0 z-40 w-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
              <a href="#" className="text-lg font-bold tracking-wide text-white">
                Yogi<span className="text-[#F0C05A]">.dev</span>
              </a>

              {/* Desktop nav links */}
              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`rounded-xl px-4 py-2 text-sm transition-colors duration-200 ${
                      activeSection === item.href
                        ? "text-[#F0C05A] font-medium"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Language switcher (desktop) */}
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>

              {/* Mobile toggle */}
              <button
                className="rounded-xl border border-white/10 p-2 text-white transition hover:bg-white/10 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ── Floating Pill Navbar (Appears on scroll - Top Center) ── */}
      <AnimatePresence mode="wait">
        {scrolled && (
          <div className="fixed left-0 right-0 top-5 z-50 flex w-full justify-center pointer-events-none">
            <motion.div
              key="floating-pill-container"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="pointer-events-auto flex flex-col items-center"
            >
              {!isOpen ? (
                /* State 1: Closed Pill Button (Wide pill centered at top with hamburger icon) */
                <motion.button
                  key="closed-pill"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(true)}
                  className="flex h-11 w-64 items-center justify-center rounded-full border border-white/15 bg-[#0A0A0B]/80 text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-[#F0C05A]/40 hover:bg-[#0A0A0B]/90 hover:shadow-amber-500/10 sm:w-80"
                  aria-label="Open navigation menu"
                >
                  <Menu size={18} className="text-slate-300" />
                </motion.button>
              ) : (
                /* State 2: Expanded Horizontal Pill Navbar (Links Center, Lang Right) */
                <motion.div
                  key="open-pill"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                  className="flex w-max items-center justify-center rounded-full border border-white/15 bg-[#0A0A0B]/95 px-2 py-2 shadow-2xl backdrop-blur-xl md:px-4 md:py-2"
                >
                  {/* Mobile Close Button (Since links are in dropdown below) */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-20 items-center justify-center text-slate-300 hover:text-white md:hidden"
                    aria-label="Close navigation"
                  >
                    <X size={18} />
                  </button>

                  {/* Nav Links in Center (Desktop) */}
                  <div className="hidden items-center md:flex">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                          activeSection === item.href
                            ? "bg-white/10 text-[#F0C05A] font-medium"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Right side: Language Switcher */}
                  <div className="flex items-center shrink-0 border-l border-white/10 pl-3 ml-2 md:pl-4 md:ml-3">
                    <LanguageSwitcher />
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Mobile Dropdown when scrolled & isOpen ── */}
      <AnimatePresence>
        {scrolled && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed left-4 right-4 top-20 z-50 rounded-2xl border border-white/10 bg-[#0A0A0B]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`rounded-xl px-4 py-2.5 text-sm transition ${
                    activeSection === item.href
                      ? "bg-white/10 text-[#F0C05A] font-medium"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu (when at top, not scrolled) ── */}
      <AnimatePresence>
        {isOpen && !scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed left-4 right-4 top-[72px] z-50 rounded-2xl border border-white/10 bg-[#0A0A0B]/95 p-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`rounded-xl px-4 py-3 text-sm transition ${
                    activeSection === item.href
                      ? "bg-white/10 text-[#F0C05A] font-medium"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 border-t border-white/10 pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}