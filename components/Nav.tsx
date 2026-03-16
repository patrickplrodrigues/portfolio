"use client";

import { motion } from "framer-motion";
import { data } from "@/lib/data";

const links = ["About", "Experience", "Skills", "Education", "Contact"];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 3rem",
        background: "rgba(10,10,11,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: "-0.02em",
          color: "var(--accent)",
        }}
      >
        PR/
      </span>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${data.email}`}
        style={{
          display: "inline-block",
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
        onMouseEnter={(e) =>
          ((e.target as HTMLElement).style.background = "#d8ff70")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLElement).style.background = "var(--accent)")
        }
      >
        Hire me
      </a>
    </motion.nav>
  );
}
