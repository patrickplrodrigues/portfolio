"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { data } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      style={{ padding: "6rem 3rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionHeader num="04" title="Education" />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {data.education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: "var(--bg2)",
              border: "0.5px solid var(--border)",
              borderRadius: 4,
              padding: "1.5rem 2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              gap: "2rem",
              transition: "border-color 0.2s",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                {edu.school}
              </div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>
                {edu.degree}
              </div>
            </div>
            <span
              style={{
                fontSize: 11,
                padding: "4px 10px",
                background: "rgba(126,240,192,0.07)",
                border: "0.5px solid rgba(126,240,192,0.2)",
                borderRadius: 2,
                color: "var(--accent2)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {edu.period}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
