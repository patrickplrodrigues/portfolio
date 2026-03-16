"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { data } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "6rem 3rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionHeader num="03" title="Skills" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "0.5px solid var(--border)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {data.skills.map((group) => (
          <div
            key={group.category}
            style={{ background: "var(--bg2)", padding: "1.5rem" }}
          >
            <div
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              {group.category}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {group.items.map((item) => (
                <span
                  key={item.name}
                  style={{
                    fontSize: 12,
                    padding: "4px 10px",
                    borderRadius: 2,
                    background: item.main
                      ? "rgba(200,240,96,0.05)"
                      : "var(--bg3)",
                    border: item.main
                      ? "0.5px solid rgba(200,240,96,0.3)"
                      : "0.5px solid var(--border)",
                    color: item.main ? "var(--accent)" : "var(--muted)",
                  }}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
