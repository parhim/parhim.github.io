import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import type { NavItem, PersonProfile } from "../content/types";
import { track } from "../lib/analytics";
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from "./icons";

type HeaderProps = {
  person: PersonProfile;
  nav: NavItem[];
  theme: "light" | "dark";
  activeSection: string | null;
  onToggleTheme: () => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function Header({
  person,
  nav,
  theme,
  activeSection,
  onToggleTheme,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#top"
          className={styles.mark}
          onClick={onCloseMenu}
          aria-label={`${person.brandName} — home`}
        >
          <span className={styles.markName} aria-hidden="true">
            <span className={styles.prompt}>&gt;</span>
            parhim.dev
            <span className={styles.cursor} />
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {nav.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={isActive ? styles.active : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a
            className={`btn btn-ghost ${styles.resume}`}
            href={person.resumeHref}
            download={person.resumeFilename}
            onClick={() => track("resume_download", { source: "header" })}
          >
            <DownloadIcon className={styles.btnIcon} />
            Resume
          </a>
          <button
            type="button"
            className={styles.themeBtn}
            onClick={onToggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark theme" : "Switch to light theme"
            }
            aria-pressed={theme === "dark"}
          >
            <span aria-hidden="true" className={styles.iconWrap}>
              {theme === "light" ? (
                <MoonIcon className={styles.icon} />
              ) : (
                <SunIcon className={styles.icon} />
              )}
            </span>
            <span className="sr-only">
              Current theme: {theme}. Activate to switch.
            </span>
          </button>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={onToggleMenu}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className={styles.iconWrap}>
              {menuOpen ? (
                <CloseIcon className={styles.icon} />
              ) : (
                <MenuIcon className={styles.icon} />
              )}
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : true}
      >
        <nav aria-label="Mobile">
          <ul className={styles.mobileList}>
            {nav.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onCloseMenu}
                    aria-current={isActive ? "true" : undefined}
                    className={isActive ? styles.active : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
