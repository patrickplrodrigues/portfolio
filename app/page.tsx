import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", margin: "0 3rem" }} />
        <About />
        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", margin: "0 3rem" }} />
        <Experience />
        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", margin: "0 3rem" }} />
        <Skills />
        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", margin: "0 3rem" }} />
        <Education />
        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", margin: "0 3rem" }} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
