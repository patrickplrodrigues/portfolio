"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { data } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "6rem 3rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionHeader num="01" title="About" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {data.about.map((para, i) => (
            <p
              key={i}
              style={{
                color: "var(--muted)",
                marginBottom: "1rem",
                lineHeight: 1.9,
              }}
            >
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--border)",
            border: "0.5px solid var(--border)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              style={{ background: "var(--bg2)", padding: "1.5rem" }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
