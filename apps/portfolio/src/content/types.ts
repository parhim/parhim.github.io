/**
 * Portfolio content types.
 * Update content in portfolio.ts — keep presentation components free of hard-coded copy.
 *
 * Missing facts use the token TODO_PORTFOLIO so they are easy to find and replace.
 */

export type ExternalLink = {
  label: string;
  href: string;
  /** Analytics event name when clicked */
  analyticsEvent?:
    | "project_link_click"
    | "sdk_github_click"
    | "sdk_npm_click"
    | "sdk_crates_click"
    | "sdk_whirlpools_pr_click"
    | "github_click"
    | "linkedin_click";
};

export type SocialLink = {
  id: "github" | "linkedin" | "email";
  label: string;
  href: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type RoleProgression = {
  from: string;
  to: string;
  fromStart?: string;
  fromEnd?: string;
  toStart?: string;
  toEnd?: string;
};

export type ExperienceAccordion = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  links?: ExternalLink[];
};

export type ManagementEvidence = {
  title: string;
  bullets: string[];
};

export type ExperienceEntry = {
  id: string;
  company: string;
  companyUrl?: string;
  location: string;
  /** ISO-ish display range; never invent dates */
  startDate: string;
  endDate: string;
  roles: string[];
  progression?: RoleProgression;
  summary: string;
  featured: boolean;
  /** Elevated timeline card — shown between featured role and standard timeline */
  spotlight?: boolean;
  logoSrc?: string;
  /** Outcome-first bullets shown on featured cards */
  impactBullets?: string[];
  accordions?: ExperienceAccordion[];
  /** People-management responsibilities with evidence */
  managementEvidence?: ManagementEvidence;
  highlights?: string[];
  technologies?: string[];
  teamSize?: string;
};

export type ProjectWeight = "primary" | "secondary" | "archive";

export type Project = {
  id: string;
  name: string;
  summary: string;
  problem: string;
  contribution: string;
  approach: string[];
  outcome: string[];
  technologies: string[];
  links: ExternalLink[];
  imageSrc?: string;
  imageAlt?: string;
  weight: ProjectWeight;
  relatedCompany?: string;
};

export type CapabilityGroup = {
  id: string;
  title: string;
  items: string[];
};

export type EducationEntry = {
  id: string;
  institution: string;
  institutionUrl?: string;
  degree: string;
  startYear: string;
  endYear: string;
  awards?: string[];
  logoSrc?: string;
  /** Optional dark-mode variant when the light logo lacks contrast */
  logoSrcDark?: string;
};

export type AiCaseStudy = {
  title: string;
  problem: string;
  workflowBefore: string;
  contextProvided: string;
  contextStructure: string;
  modelOutput: string;
  testingAndReview: string;
  failureModes: string;
  humanResponsibility: string;
  result: string;
};

export type AiEngineeringContent = {
  title: string;
  caseStudy: AiCaseStudy;
};

export type PersonProfile = {
  name: string;
  shortName: string;
  /** Site brand shown in the header mark (e.g. parhim) */
  brandName: string;
  location: string;
  /** Optional second location line (e.g. current city) */
  currentLocation?: string;
  email: string;
  centralMessage: string;
  /** Supporting sentence below the hero headline */
  supportingMessage: string;
  /** Current role shown as a badge in the hero */
  roleBadge: string;
  photoSrc: string;
  photoAlt: string;
  resumeHref: string;
  resumeFilename: string;
  canonicalUrl: string;
};

export type PortfolioContent = {
  person: PersonProfile;
  social: SocialLink[];
  nav: NavItem[];
  experience: ExperienceEntry[];
  projects: Project[];
  capabilities: CapabilityGroup[];
  additionalExperience: string[];
  aiEngineering: AiEngineeringContent;
  lookingFor: string;
  education: EducationEntry[];
};
