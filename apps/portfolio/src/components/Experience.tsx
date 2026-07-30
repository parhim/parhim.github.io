import styles from "./Experience.module.css";
import type { CSSProperties } from "react";
import type { ExperienceEntry } from "../content/types";
import { track } from "../lib/analytics";

type ExperienceProps = {
  entries: ExperienceEntry[];
};

export function Experience({ entries }: ExperienceProps) {
  const featured = entries.find((e) => e.featured);
  const spotlight = entries.filter((e) => e.spotlight && !e.featured);
  const others = entries.filter((e) => !e.featured && !e.spotlight);

  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div data-reveal>
          <p className="section-label">Experience</p>
          <h2 id="experience-heading">Leadership with technical depth</h2>
          <p className="section-intro">
            Hands on Engineering Manager who owns discovery through delivery — from
            zero to one founder work to Solana product leadership, analytics, and public
            developer tooling.
          </p>
        </div>

        {featured ? <FeaturedExperience entry={featured} /> : null}

        {spotlight.length > 0 ? (
          <div className={styles.spotlightGroup}>
            {spotlight.map((entry) => (
              <SpotlightExperience key={entry.id} entry={entry} />
            ))}
          </div>
        ) : null}

        <ol className={styles.timeline}>
          {others.map((entry, index) => (
            <TimelineEntry key={entry.id} entry={entry} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeaturedExperience({ entry }: { entry: ExperienceEntry }) {
  return (
    <article
      className={`card ${styles.featured}`}
      aria-labelledby={`${entry.id}-heading`}
      data-reveal
    >
      <div className={styles.featuredHeader}>
        <div className={styles.companyRow}>
          {entry.logoSrc ? (
            <img
              src={entry.logoSrc}
              alt=""
              width={48}
              height={48}
              className={styles.logo}
              loading="lazy"
            />
          ) : null}
          <div>
            <h3 id={`${entry.id}-heading`}>
              {entry.companyUrl ? (
                <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer">
                  {entry.company}
                </a>
              ) : (
                entry.company
              )}
              <span className={styles.roleTitle}>
                {" "}
                · {entry.progression?.to ?? entry.roles[entry.roles.length - 1]}
              </span>
            </h3>
            {entry.progression ? (
              <p className={styles.progression}>
                {entry.progression.from}
                <span aria-hidden="true"> → </span>
                {entry.progression.to}
              </p>
            ) : (
              <p className={styles.progression}>{entry.roles.join(" · ")}</p>
            )}
            {entry.teamSize ? (
              <p className={styles.teamSize}>
                {entry.teamSize} · {entry.location}
              </p>
            ) : (
              <p className={styles.teamSize}>{entry.location}</p>
            )}
          </div>
        </div>
        <div className={styles.featuredMeta}>
          <p>
            {entry.startDate} — {entry.endDate}
          </p>
        </div>
      </div>

      <p className={styles.featuredSummary}>{entry.summary}</p>

      {entry.impactBullets && entry.impactBullets.length > 0 ? (
        <ul className={styles.impactBullets}>
          {entry.impactBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {entry.managementEvidence ? (
        <div className={styles.managementEvidence}>
          <h4>{entry.managementEvidence.title}</h4>
          <ul>
            {entry.managementEvidence.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {entry.accordions && entry.accordions.length > 0 ? (
        <div className={styles.accordions}>
          {entry.accordions.map((section) => (
            <details key={section.id} className={styles.accordion}>
              <summary>{section.title}</summary>
              <div className={styles.accordionBody}>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul>
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
                {section.links && section.links.length > 0 ? (
                  <ul className={styles.linkRow}>
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (link.analyticsEvent) {
                              track(link.analyticsEvent, { label: link.label });
                            }
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function SpotlightExperience({ entry }: { entry: ExperienceEntry }) {
  return (
    <article
      className={`card ${styles.spotlight}`}
      aria-labelledby={`${entry.id}-heading`}
      data-reveal
    >
      <div className={styles.spotlightHeader}>
        <div className={styles.companyRow}>
          {entry.logoSrc ? (
            <img
              src={entry.logoSrc}
              alt=""
              width={44}
              height={44}
              className={styles.logo}
              loading="lazy"
            />
          ) : null}
          <div>
            <h3 id={`${entry.id}-heading`}>
              {entry.companyUrl ? (
                <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer">
                  {entry.company}
                </a>
              ) : (
                entry.company
              )}
              <span className={styles.roleTitle}> · {entry.roles.join(" · ")}</span>
            </h3>
            <p className={styles.teamSize}>
              {entry.startDate} — {entry.endDate} · {entry.location}
            </p>
          </div>
        </div>
      </div>

      <p className={styles.featuredSummary}>{entry.summary}</p>

      {entry.highlights && entry.highlights.length > 0 ? (
        <ul className={styles.impactBullets}>
          {entry.highlights.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {entry.technologies && entry.technologies.length > 0 ? (
        <details className={styles.techToggle}>
          <summary>Technologies</summary>
          <div className="tag-row">
            {entry.technologies.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </details>
      ) : null}
    </article>
  );
}

function TimelineEntry({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const delay = Math.min(index, 4) * 60;
  return (
    <li
      className={styles.timelineItem}
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      <div className={styles.timelineMeta}>
        <p className={styles.dates}>
          {entry.startDate} — {entry.endDate}
        </p>
        <p className={styles.location}>{entry.location}</p>
      </div>
      <div className={styles.timelineBody}>
        <div className={styles.companyRow}>
          {entry.logoSrc ? (
            <img
              src={entry.logoSrc}
              alt=""
              width={36}
              height={36}
              className={styles.logo}
              loading="lazy"
            />
          ) : null}
          <div>
            <h3>
              {entry.companyUrl ? (
                <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer">
                  {entry.company}
                </a>
              ) : (
                entry.company
              )}
            </h3>
            <p className={styles.role}>{entry.roles.join(" · ")}</p>
          </div>
        </div>
        <p>{entry.summary}</p>
        {entry.highlights && entry.highlights.length > 0 ? (
          <ul>
            {entry.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}
        {entry.technologies && entry.technologies.length > 0 ? (
          <details className={styles.techToggle}>
            <summary>Technologies</summary>
            <div className="tag-row">
              {entry.technologies.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </li>
  );
}
