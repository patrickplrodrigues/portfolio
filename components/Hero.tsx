"use client";

import { motion } from "framer-motion";
import { data } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: "10rem",
        paddingBottom: "6rem",
        maxWidth: 1100,
        margin: "0 auto",
        padding: "10rem 3rem 6rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
      }}
    >
      <div>
        <motion.div {...fadeUp(0.1)}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent2)",
              border: "0.5px solid rgba(126,240,192,0.3)",
              padding: "4px 10px",
              borderRadius: 2,
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent2)",
                animation: "pulse 2s infinite",
              }}
            />
            {data.tagline}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}
        >
          {data.name.split(" ")[0]}
          <br />
          <span style={{ color: "var(--accent)" }}>{data.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.1rem",
            color: "var(--muted)",
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          {data.role}
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          style={{
            fontSize: 14,
            color: "var(--muted)",
            lineHeight: 1.8,
            maxWidth: 420,
            marginBottom: "2.5rem",
          }}
        >
          {data.description}
        </motion.p>

        <motion.div {...fadeUp(0.5)} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              padding: "10px 22px",
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.06em",
              textDecoration: "none",
              borderRadius: 2,
              background: "var(--accent)",
              color: "#0a0a0b",
              fontWeight: 500,
              transition: "background 0.2s",
            }}
          >
            Get in touch
          </a>
          <a
            href="#experience"
            style={{
              padding: "10px 22px",
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.06em",
              textDecoration: "none",
              borderRadius: 2,
              background: "transparent",
              color: "var(--text)",
              border: "0.5px solid var(--border2)",
              transition: "border-color 0.2s",
            }}
          >
            View work
          </a>
        </motion.div>
      </div>

      {/* Stack grid */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "0.75rem",
          }}
        >
          Tech stack
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
          }}
        >
          {data.stack.map((item) => (
            <div
              key={item.name}
              style={{
                background: "var(--bg3)",
                border: item.highlight
                  ? "0.5px solid rgba(200,240,96,0.25)"
                  : "0.5px solid var(--border)",
                borderRadius: 4,
                padding: "10px 12px",
                fontSize: 12,
                color: item.highlight ? "var(--accent)" : "var(--muted)",
                transition: "all 0.2s",
                cursor: "default",
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
