import { describe, expect, test } from "bun:test";
import { portfolio } from "../content/portfolio";

const REQUIRED_STRING_FIELDS: Array<[string, string]> = [
  ["person.name", portfolio.person.name],
  ["person.brandName", portfolio.person.brandName],
  ["person.email", portfolio.person.email],
  ["person.resumeHref", portfolio.person.resumeHref],
  ["person.canonicalUrl", portfolio.person.canonicalUrl],
  ["person.centralMessage", portfolio.person.centralMessage],
  ["person.supportingMessage", portfolio.person.supportingMessage],
  ["person.roleBadge", portfolio.person.roleBadge],
];

describe("portfolio content validation", () => {
  test("required person fields are non-empty", () => {
    for (const [path, value] of REQUIRED_STRING_FIELDS) {
      expect(value.trim().length, `${path} must not be empty`).toBeGreaterThan(0);
    }
  });

  test("nav, experience, projects, and education are populated", () => {
    expect(portfolio.nav.length).toBe(4);
    expect(portfolio.nav.map((n) => n.id)).toEqual([
      "experience",
      "projects",
      "skills",
      "contact",
    ]);
    expect(portfolio.experience.length).toBeGreaterThan(0);
    expect(portfolio.projects.length).toBeGreaterThan(0);
    expect(portfolio.education.length).toBeGreaterThan(0);
    expect(portfolio.capabilities.length).toBeGreaterThan(0);
  });

  test("featured Orca experience exists with progression and impact bullets", () => {
    const orca = portfolio.experience.find((e) => e.id === "orca");
    expect(orca).toBeDefined();
    expect(orca?.featured).toBe(true);
    expect(orca?.startDate).toBe("Aug 2024");
    expect(orca?.logoSrc).toBe("/images/logos/orca.png");
    expect(orca?.progression?.from).toBe("Senior Software Engineer");
    expect(orca?.progression?.to).toBe("Engineering Manager");
    expect(orca?.endDate).toBe("Jul 2026");
    expect(orca?.impactBullets?.length ?? 0).toBeGreaterThan(3);
    expect(orca?.accordions?.length ?? 0).toBeGreaterThan(2);
  });

  test("OpenHaus appears as spotlight experience directly after Orca", () => {
    const openhaus = portfolio.experience.find((e) => e.id === "openhaus");
    const orcaIndex = portfolio.experience.findIndex((e) => e.id === "orca");
    const openhausIndex = portfolio.experience.findIndex((e) => e.id === "openhaus");
    expect(openhaus).toBeDefined();
    expect(openhaus?.featured).toBe(false);
    expect(openhaus?.spotlight).toBe(true);
    expect(openhaus?.endDate).toBe("2024");
    expect(openhaus?.logoSrc).toBe("/images/logos/openhaus.png");
    expect(openhaus?.roles).toContain("Technical Founder · Part time");
    expect(openhaus?.highlights?.length ?? 0).toBeGreaterThan(2);
    expect(openhausIndex).toBe(orcaIndex + 1);
  });

  test("PsyFi highlights PsyOptions protocol work", () => {
    const psyfi = portfolio.experience.find((e) => e.id === "psyfi");
    expect(psyfi).toBeDefined();
    expect(psyfi?.summary).toContain("PsyOptions");
    expect(psyfi?.highlights?.some((h) => h.includes("PsyOptions"))).toBe(true);
  });

  test("Orca includes condensed accordions and management evidence", () => {
    const orca = portfolio.experience.find((e) => e.id === "orca");
    const accordionIds = orca?.accordions?.map((a) => a.id) ?? [];
    expect(accordionIds).toEqual(["team-product", "technical", "analytics"]);
    expect(orca?.managementEvidence?.bullets.length ?? 0).toBeGreaterThan(4);
    expect(orca?.teamSize).toContain("cross functional");
  });

  test("social links include github and linkedin", () => {
    expect(portfolio.social.some((s) => s.id === "github")).toBe(true);
    expect(portfolio.social.some((s) => s.id === "linkedin")).toBe(true);
  });

  test("projects have required fields and valid weights", () => {
    for (const project of portfolio.projects) {
      expect(project.name.trim().length).toBeGreaterThan(0);
      expect(project.summary.trim().length).toBeGreaterThan(0);
      expect(project.problem.trim().length).toBeGreaterThan(0);
      expect(project.contribution.trim().length).toBeGreaterThan(0);
      expect(["primary", "secondary", "archive"]).toContain(project.weight);
      expect(project.technologies.length).toBeGreaterThan(0);
    }
  });

  test("primary projects are limited to five case studies", () => {
    const primary = portfolio.projects.filter((p) => p.weight === "primary");
    expect(primary.length).toBe(5);
    expect(primary.map((p) => p.id)).toEqual([
      "tx-sender",
      "orca-liquidity-retention",
      "openhaus",
      "armada",
      "wize-env",
    ]);
  });

  test("lookingFor paragraph is populated", () => {
    expect(portfolio.lookingFor).toContain("Engineering Manager");
    expect(portfolio.lookingFor).not.toContain("staff");
  });

  test("AI engineering content uses a concrete case study", () => {
    expect(portfolio.aiEngineering.title).toBe("AI accelerated engineering workflow");
    expect(portfolio.aiEngineering.caseStudy.problem.length).toBeGreaterThan(20);
    expect(portfolio.aiEngineering.caseStudy.result.length).toBeGreaterThan(20);
  });

  test("broken content records: empty link hrefs are not present", () => {
    for (const project of portfolio.projects) {
      for (const link of project.links) {
        expect(link.href.trim().length, `${project.id} link`).toBeGreaterThan(0);
        expect(link.href.startsWith("http") || link.href.startsWith("/")).toBe(true);
      }
    }
  });

  test("resume path is a PDF", () => {
    expect(portfolio.person.resumeHref.endsWith(".pdf")).toBe(true);
  });

  test("canonical domain is parhim.dev", () => {
    expect(portfolio.person.canonicalUrl).toContain("parhim.dev");
  });

  test("role badge references Orca and Aug 2024", () => {
    expect(portfolio.person.roleBadge).toContain("Orca");
    expect(portfolio.person.roleBadge).toContain("Aug 2024");
    expect(portfolio.person.roleBadge).not.toContain("Present");
  });
});
