"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function MotionSection({ id, className, children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24 scroll-mt-28", className)}
    >
      {children}
    </motion.section>
  );
}
