"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoaderThree } from "@/components/ui/loader";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove loading screen from DOM after 3.5s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              y: "-100%", 
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0B]"
          >
            {/* The Custom Spider Loader */}
            <div className="relative flex flex-col items-center justify-center gap-6">
              <LoaderThree />
              
              {/* Magic UI Number Ticker */}
              <div className="flex items-end font-mono text-4xl font-bold text-[#F0C05A] drop-shadow-[0_0_10px_rgba(240,192,90,0.5)]">
                <NumberTicker 
                  value={100} 
                  startValue={0}
                  delay={0.2}
                  className="text-[#F0C05A] dark:text-[#F0C05A]"
                />
                <span className="mb-1 ml-1 text-2xl text-[#F0C05A]/80">%</span>
              </div>
              
              {/* Subtle pulsing loading text */}
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="mt-4 text-sm font-medium tracking-[0.3em] text-slate-400 uppercase text-center"
              >
                Open
                <br />Yogi Pranata <br />
                Portfolio 2026
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </>
  );
}
