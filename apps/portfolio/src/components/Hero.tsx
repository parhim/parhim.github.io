import styles from "./Hero.module.css";
import type { PersonProfile, SocialLink } from "../content/types";
import { track } from "../lib/analytics";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MapPinIcon } from "./icons";

type HeroProps = {
  person: PersonProfile;
  social: SocialLink[];
};

export function Hero({ person, social }: HeroProps) {
  const github = social.find((s) => s.id === "github");
  const linkedin = social.find((s) => s.id === "linkedin");

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-heading">
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.copy} animate-in`}>
          <h1 id="hero-heading" className={styles.name}>
            {person.name}
          </h1>
          <p className={styles.message}>{person.centralMessage}</p>
          <p className={styles.supporting}>{person.supportingMessage}</p>
          <p className={styles.role}>{person.roleBadge}</p>
          <p className={styles.meta}>
            <MapPinIcon className={styles.metaIcon} />
            {person.location}
          </p>
          {person.currentLocation ? (
            <p className={styles.currentLocation}>{person.currentLocation}</p>
          ) : null}

          <div className={styles.actions}>
            <a className="btn btn-primary btn-lg" href="#experience">
              Review leadership experience
            </a>
            <a className="btn btn-secondary btn-lg" href="#projects">
              View selected case studies
            </a>
            <a
              className="btn btn-secondary btn-lg"
              href={person.resumeHref}
              download={person.resumeFilename}
              onClick={() => track("resume_download", { source: "hero" })}
            >
              <DownloadIcon className={styles.btnIcon} />
              Download résumé
            </a>
          </div>

          <ul className={styles.social}>
            {github ? (
              <li>
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("github_click", { source: "hero" })}
                >
                  <GitHubIcon className={styles.socialIcon} />
                  GitHub
                </a>
              </li>
            ) : null}
            {linkedin ? (
              <li>
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("linkedin_click", { source: "hero" })}
                >
                  <LinkedInIcon className={styles.socialIcon} />
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <figure className={`${styles.figure} animate-in-delayed`}>
          <img
            src={person.photoSrc}
            alt={person.photoAlt}
            width={360}
            height={450}
            decoding="async"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
