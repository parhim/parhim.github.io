import { useEffect, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { portfolio } from "./content/portfolio";
import { useActiveSection } from "./hooks/useActiveSection";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { useTheme } from "./hooks/useTheme";
import { track } from "./lib/analytics";

const SECTION_IDS = ["experience", "projects", "skills", "contact"];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  useRevealOnScroll();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id], footer[id]");
    const seen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (!id || seen.has(id)) continue;
          seen.add(id);
          track("section_view", { section: id });
        }
      },
      { threshold: 0.35 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const nav = useMemo(() => portfolio.nav, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        person={portfolio.person}
        nav={nav}
        theme={theme}
        activeSection={activeSection}
        onToggleTheme={toggleTheme}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <main id="main">
        <Hero person={portfolio.person} social={portfolio.social} />
        <Experience entries={portfolio.experience} />
        <Projects projects={portfolio.projects} />
        <Skills
          groups={portfolio.capabilities}
          additional={portfolio.additionalExperience}
          aiEngineering={portfolio.aiEngineering}
        />
      </main>
      <Contact
        person={portfolio.person}
        social={portfolio.social}
        education={portfolio.education}
        lookingFor={portfolio.lookingFor}
      />
    </>
  );
}
