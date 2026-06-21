export type IconKey =
  | "arrowRight"
  | "arrowUpRight"
  | "badgeCheck"
  | "brain"
  | "briefcase"
  | "calendar"
  | "cloud"
  | "code"
  | "cpu"
  | "download"
  | "external"
  | "github"
  | "globe"
  | "graduation"
  | "layers"
  | "linkedin"
  | "mail"
  | "mapPin"
  | "menu"
  | "school"
  | "shield"
  | "sparkles"
  | "users"
  | "wrench"
  | "close";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconKey;
  handle?: string;
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  currentEmployer: {
    name: string;
    url?: string;
  };
  yearsOfExperience: string;
  location: string;
  email?: string;
  resumeUrl?: string;
  summary: string[];
  socials: SocialLink[];
};

export type ProficiencyLevel = "proficient" | "intermediate" | "leadership";

export type SkillGroup = {
  id: string;
  level: ProficiencyLevel;
  title: string;
  description: string;
  icon: IconKey;
  skills: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issuedOn: string;
  expiresOn?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  category: "cloud" | "ai-ml" | "language" | "education" | "facilitation";
};

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startYear?: string;
  endYear?: string | "Present";
  status: "in-progress" | "completed";
  notes?: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
  highlights?: string[];
  stack?: string[];
};

export type Strength = {
  id: string;
  title: string;
  description: string;
  icon: IconKey;
};

export type PageMeta = {
  id: string;
  title: string;
  eyebrow: string;
  heading: string;
  description?: string;
};

export type Stat = {
  label: string;
  value: string;
  hint?: string;
};

export type CaseImage = {
  src: string;
  alt: string;
  placeholder?: boolean;
};

export type CaseShape =
  | "Workflow automation"
  | "Custom CRM"
  | "Internal ops tool"
  | "Approvals & documents";

export type CaseStudy = {
  id: string;
  industry: string;
  shape: CaseShape;
  before: string;
  built: string;
  outcome: { value: string; label: string };
  beforeImage: CaseImage;
  afterImage: CaseImage;
  /** 4–6 mono items rendered as a quiet chip strip under the case header. */
  stack?: string[];
  companyName?: string;
  companyUrl?: string;
  verified?: boolean;
};

export type ProcessPhase = {
  id: string;
  title: string;
  body: string;
};
