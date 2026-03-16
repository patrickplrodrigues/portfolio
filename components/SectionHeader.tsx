"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "1rem",
        marginBottom: "3rem",
      }}
    >
      <span
        style={{
          fontSize: 11,
          letterSpacing: "0.1em",
          color: "var(--accent)",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {num}
      </span>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "1.8rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--text)",
        }}
      >
        {title}
      </h2>
      <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
    </motion.div>
  );
}
