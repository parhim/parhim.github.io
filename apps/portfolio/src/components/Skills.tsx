import styles from "./Skills.module.css";
import type { CSSProperties } from "react";
import type { AiEngineeringContent, CapabilityGroup } from "../content/types";

type SkillsProps = {
  groups: CapabilityGroup[];
  additional: string[];
  aiEngineering: AiEngineeringContent;
};

const CASE_STUDY_FIELDS: Array<{
  key: keyof AiEngineeringContent["caseStudy"];
  label: string;
}> = [
  { key: "problem", label: "Development problem" },
  { key: "workflowBefore", label: "Workflow before AI" },
  { key: "contextProvided", label: "Information supplied to models" },
  { key: "contextStructure", label: "How context was structured" },
  { key: "modelOutput", label: "What models generated" },
  { key: "testingAndReview", label: "Testing and review" },
  { key: "failureModes", label: "Failure modes observed" },
  { key: "humanResponsibility", label: "What humans remained responsible for" },
  { key: "result", label: "Observed result" },
];

export function Skills({ groups, additional, aiEngineering }: SkillsProps) {
  const { caseStudy } = aiEngineering;

  return (
    <section className="section section-alt" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div data-reveal>
          <p className="section-label">Skills</p>
          <h2 id="skills-heading">Technical capabilities</h2>
          <p className="section-intro">
            Grouped by how the work happens — individual technologies appear only when
            supported by experience.
          </p>
        </div>

        <ul className={styles.grid}>
          {groups.map((group, index) => (
            <li
              key={group.id}
              className={styles.group}
              data-reveal
              style={
                {
                  "--reveal-delay": `${Math.min(index, 5) * 50}ms`,
                } as CSSProperties
              }
            >
              <h3>{group.title}</h3>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className={`card ${styles.aiBlock}`} data-reveal>
          <h3>{aiEngineering.title}</h3>
          <p className={styles.aiCaseTitle}>{caseStudy.title}</p>
          <dl className={styles.aiCaseStudy}>
            {CASE_STUDY_FIELDS.map(({ key, label }) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{caseStudy[key]}</dd>
              </div>
            ))}
          </dl>
        </div>

        <details className={styles.additional} data-reveal>
          <summary>Additional experience</summary>
          <ul className={styles.additionalList}>
            {additional.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
