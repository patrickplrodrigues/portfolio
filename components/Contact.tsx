"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { data } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "6rem 3rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionHeader num="05" title="Contact" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              color: "var(--text)",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s build something{" "}
            <span style={{ color: "var(--accent)" }}>great</span> together.
          </p>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 13,
              lineHeight: 1.8,
            }}
          >
            Open to the right conversations — remote, international, fintech, or
            enterprise. Feel free to reach out directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          {[
            { icon: "✉", label: data.email, href: `mailto:${data.email}` },
            {
              icon: "in",
              label: "linkedin.com/in/patrickplrodrigues",
              href: data.linkedin,
            },
            {
              icon: "/",
              label: "patrickrodrigues.vercel.app",
              href: data.website,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "var(--bg2)",
                border: "0.5px solid var(--border)",
                borderRadius: 4,
                padding: "14px 18px",
                textDecoration: "none",
                color: "var(--muted)",
                fontSize: 13,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border2)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "var(--bg3)",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <span style={{ flex: 1 }}>{item.label}</span>
              <span style={{ color: "var(--border2)", fontSize: 12 }}>↗</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
