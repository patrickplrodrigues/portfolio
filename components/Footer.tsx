export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--border)",
        padding: "2rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 11,
        color: "var(--muted)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <span>© {new Date().getFullYear()} Patrick Rodrigues</span>
      <span>Built with Next.js 15 · Deployed on Vercel</span>
    </footer>
  );
}
