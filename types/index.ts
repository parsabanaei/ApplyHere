// User types
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// Resume types
export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  linkedin?: string;
  website?: string;
  github?: string;
  portfolio?: string;
  brandingStatement?: string;
  summary: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  city: string;
  state: string;
  graduationYear: string;
  gpa?: string;
  coursework?: string[];
  honors?: string[];
  relevantProjects?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  startDate: string;
  endDate?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  year: string;
  licenseNumber?: string;
  expirationDate?: string;
}

export interface Award {
  id: string;
  name: string;
  organization: string;
  year: string;
  description?: string;
}

export interface VolunteerExperience {
  id: string;
  role: string;
  organization: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  publication: string;
  date: string;
  doi?: string;
}

export interface Presentation {
  id: string;
  title: string;
  event: string;
  date: string;
  description?: string;
}

export interface ProfessionalMembership {
  id: string;
  organization: string;
  memberSince: string;
  role?: string;
}

export interface Language {
  id: string;
  language: string;
  proficiency: "Native" | "Fluent" | "Professional" | "Intermediate" | "Basic";
}

export interface TechnicalProficiencies {
  programming: string[];
  software: string[];
  systems: string[];
  tools: string[];
}

export interface Resume {
  id: string;
  personalInfo: PersonalInfo;
  coreCompetencies: string[];
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  certifications: Certification[];
  awards: Award[];
  volunteer: VolunteerExperience[];
  publications: Publication[];
  presentations: Presentation[];
  memberships: ProfessionalMembership[];
  languages: Language[];
  technicalProficiencies?: TechnicalProficiencies;
  interests?: string[];
  updatedAt: Date;
}

// Job Application types
export type ApplicationStatus =
  | "wishlist"
  | "applied"
  | "interviewing"
  | "offer"
  | "rejected"
  | "accepted";

export interface JobApplication {
  id: string;
  jobTitle: string;
  company: string;
  companyLogo?: string;
  status: ApplicationStatus;
  dateApplied: Date;
  salary?: string;
  location?: string;
  jobUrl?: string;
  notes?: string;
  contacts?: Contact[];
  tags?: string[];
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

// Interview Prep types
export interface InterviewQuestion {
  id: string;
  question: string;
  category: "behavioral" | "technical" | "situational" | "general";
  sampleAnswer?: string;
  reviewed: boolean;
}

export interface InterviewTip {
  id: string;
  title: string;
  description: string;
  category: "appearance" | "communication" | "preparation" | "follow-up";
}

export interface CompanyResearch {
  id: string;
  company: string;
  notes: string;
  culture?: string;
  recentNews?: string[];
  competitors?: string[];
  questions?: string[];
}

// Template types
export type TemplateType =
  | "thank-you"
  | "follow-up"
  | "networking"
  | "acceptance"
  | "decline";

export interface Template {
  id: string;
  type: TemplateType;
  title: string;
  content: string;
  placeholders: string[];
  customizable: boolean;
}

// Company Insight types
export interface CompanyInsight {
  id: string;
  companyName: string;
  logo?: string;
  industry: string;
  description: string;
  culture: string;
  recentNews: string;
  employees?: string;
  founded?: string;
  headquarters?: string;
  website?: string;
}

// Job Alert types
export interface JobAlert {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  salary?: string;
  postedDate: Date;
  jobType: "full-time" | "part-time" | "contract" | "internship";
  remote: boolean;
  description: string;
  requirements: string[];
  benefits?: string[];
  tags: string[];
}

// Cover Letter types
export interface CoverLetter {
  id: string;
  resumeId: string;
  content: string;
  companyName?: string;
  position?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Keyword Comparison types
export interface KeywordMatch {
  keyword: string;
  inResume: boolean;
  inJobDescription: boolean;
}

export interface ComparisonResult {
  matchPercentage: number;
  matchingKeywords: string[];
  missingKeywords: string[];
  suggestions: string[];
}

// Dashboard Stats types
export interface DashboardStats {
  totalApplications: number;
  activeApplications: number;
  interviews: number;
  offers: number;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: "application" | "interview" | "offer" | "rejection";
  title: string;
  company: string;
  date: Date;
}

// Theme types
export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

// Auth types
export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

