import styles from "./Projects.module.css";
import type { CSSProperties } from "react";
import type { Project } from "../content/types";
import { track } from "../lib/analytics";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  const primary = projects.filter((p) => p.weight === "primary");
  const secondary = projects.filter((p) => p.weight === "secondary");
  const archive = projects.filter((p) => p.weight === "archive");

  return (
    <section className="section section-alt" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div data-reveal>
          <p className="section-label">Selected projects</p>
          <h2 id="projects-heading">Case studies with ownership and outcomes</h2>
          <p className="section-intro">
            Ranked by user or business impact, technical complexity, ownership, and product
            thinking.
          </p>
        </div>

        <div className={styles.list}>
          {primary.map((project, index) => (
            <ProjectCase key={project.id} project={project} index={index} />
          ))}
        </div>

        {secondary.length > 0 ? (
          <div className={styles.group}>
            <h3 className={styles.groupTitle} data-reveal>
              Additional selected work
            </h3>
            <div className={styles.secondaryGrid}>
              {secondary.map((project, index) => (
                <ProjectCase
                  key={project.id}
                  project={project}
                  compact
                  index={index}
                />
              ))}
            </div>
          </div>
        ) : null}

        {archive.length > 0 ? (
          <details className={styles.archive} data-reveal>
            <summary>Earlier projects ({archive.length})</summary>
            <div className={styles.archiveList}>
              {archive.map((project) => (
                <ProjectCase key={project.id} project={project} compact />
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCase({
  project,
  compact = false,
  index = 0,
}: {
  project: Project;
  compact?: boolean;
  index?: number;
}) {
  const delay = Math.min(index, 3) * 70;
  return (
    <article
      className={`${styles.case} ${compact ? styles.compact : ""}`}
      id={`project-${project.id}`}
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      <div className={styles.caseBody}>
        <div className={styles.caseHeader}>
          <h3>{project.name}</h3>
          {project.relatedCompany ? (
            <p className={styles.company}>{project.relatedCompany}</p>
          ) : null}
          <p className={styles.summary}>{project.summary}</p>
        </div>

        <dl className={styles.fields}>
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>My contribution</dt>
            <dd>{project.contribution}</dd>
          </div>
          {compact ? (
            <div>
              <dt>Approach</dt>
              <dd>
                <ul>
                  {project.approach.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ) : null}
          <div>
            <dt>Outcome</dt>
            <dd>
              <ul>
                {project.outcome.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="tag-row">
          {project.technologies.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        {project.links.length > 0 ? (
          <ul className={styles.links}>
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("project_link_click", {
                      project: project.id,
                      label: link.label,
                    })
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {project.imageSrc && !compact ? (
        <figure className={styles.figure}>
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? ""}
            width={640}
            height={400}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ) : null}
    </article>
  );
}
