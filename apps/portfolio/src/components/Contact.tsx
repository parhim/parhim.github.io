import styles from "./Contact.module.css";
import type { EducationEntry, PersonProfile, SocialLink } from "../content/types";
import { track } from "../lib/analytics";
import { EducationLogo } from "./EducationLogo";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

type ContactProps = {
  person: PersonProfile;
  social: SocialLink[];
  education: EducationEntry[];
  lookingFor: string;
};

function SocialIcon({ id }: { id: string }) {
  switch (id) {
    case "github":
      return <GitHubIcon className={styles.socialIcon} />;
    case "linkedin":
      return <LinkedInIcon className={styles.socialIcon} />;
    case "email":
      return <MailIcon className={styles.socialIcon} />;
    default:
      return null;
  }
}

export function Contact({ person, social, education, lookingFor }: ContactProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.stack} data-reveal>
            <p className="section-label">Contact</p>
            <h2 id="contact-heading">Let&apos;s talk about the work</h2>
            <p className={styles.lead}>
              Open to hands on Engineering Manager, Tech Lead Manager, Engineering Lead,
              Senior Product Engineer, and early stage technical leadership roles.
            </p>

            <div className={styles.lookingFor} data-reveal>
              <h3 className={styles.lookingForTitle}>What I am looking for</h3>
              <p>{lookingFor}</p>
            </div>

            <div className={styles.actions}>
              <a
                className="btn btn-primary btn-lg"
                href={`mailto:${person.email}`}
                onClick={() => track("contact_click", { source: "footer_email" })}
              >
                <MailIcon className={styles.btnIcon} />
                Email {person.email}
              </a>
              <a
                className="btn btn-secondary btn-lg"
                href={person.resumeHref}
                download={person.resumeFilename}
                onClick={() => track("resume_download", { source: "footer" })}
              >
                <DownloadIcon className={styles.btnIcon} />
                Download resume
              </a>
            </div>

            <ul className={styles.social}>
              {social.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={link.id === "email" ? undefined : "_blank"}
                    rel={link.id === "email" ? undefined : "noopener noreferrer"}
                    onClick={() => {
                      if (link.id === "github")
                        track("github_click", { source: "footer" });
                      if (link.id === "linkedin")
                        track("linkedin_click", { source: "footer" });
                      if (link.id === "email")
                        track("contact_click", { source: "footer_social" });
                    }}
                  >
                    <SocialIcon id={link.id} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {education.length > 0 ? (
            <div className={styles.education} data-reveal>
              {education.map((entry) => (
                <div key={entry.id} className={styles.eduItem}>
                  {entry.logoSrc || entry.logoSrcDark ? (
                    <EducationLogo
                      entry={entry}
                      width={40}
                      height={40}
                      className={styles.eduLogo}
                    />
                  ) : (
                    <span aria-hidden="true" />
                  )}
                  <div>
                    <p className={styles.eduInstitution}>
                      {entry.institutionUrl ? (
                        <a
                          href={entry.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {entry.institution}
                        </a>
                      ) : (
                        entry.institution
                      )}
                    </p>
                    <p className={styles.eduDegree}>
                      {entry.degree} ({entry.startYear}–{entry.endYear})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <p className={styles.copy}>
            © {year} {person.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
