"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { data } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "6rem 3rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionHeader num="02" title="Experience" />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {data.experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: "var(--bg2)",
              border: exp.active
                ? "0.5px solid rgba(200,240,96,0.3)"
                : "0.5px solid var(--border)",
              borderRadius: 4,
              padding: "1.75rem 2rem",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "1.5rem",
              transition: "border-color 0.2s",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: exp.active ? "var(--accent)" : "var(--border2)",
                marginTop: 6,
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--text)",
                  }}
                >
                  {exp.company}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {exp.period} · {exp.location}
                </span>
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: "var(--accent2)",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {exp.role}
              </div>

              <ul style={{ listStyle: "none" }}>
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    style={{
                      color: "var(--muted)",
                      fontSize: 13,
                      padding: "3px 0 3px 1rem",
                      position: "relative",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--border2)",
                      }}
                    >
                      —
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: "1rem",
                }}
              >
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      padding: "3px 8px",
                      borderRadius: 2,
                      background: "var(--bg3)",
                      border: "0.5px solid var(--border)",
                      color: "var(--muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
