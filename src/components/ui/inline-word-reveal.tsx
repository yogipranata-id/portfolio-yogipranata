"use client";

import { useRef, type FC, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface InlineWordRevealProps {
  children: string;
  className?: string;
  /** Delay in seconds before the animation starts after entering view */
  delay?: number;
}

/**
 * Inspired by Magic UI's TextReveal, but designed for inline use within
 * existing layouts (no sticky/tall container). Reveals text word-by-word
 * with a staggered fade-in animation when the element scrolls into view.
 */
export const InlineWordReveal: FC<InlineWordRevealProps> = ({
  children,
  className,
  delay = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  if (typeof children !== "string") {
    throw new Error("InlineWordReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <InlineWord key={i} index={i} isInView={isInView} delay={delay}>
          {word}
        </InlineWord>
      ))}
    </span>
  );
};

interface InlineWordProps {
  children: ReactNode;
  index: number;
  isInView: boolean;
  delay: number;
}

const InlineWord: FC<InlineWordProps> = ({ children, index, isInView, delay }) => {
  return (
    <span className="relative inline-block mx-[0.15em]">
      {/* Ghost text for layout */}
      <span className="opacity-20">{children}</span>
      {/* Animated revealed text */}
      <motion.span
        className="absolute left-0 top-0 text-current"
        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 8, filter: "blur(4px)" }
        }
        transition={{
          duration: 0.5,
          delay: delay + index * 0.04,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
