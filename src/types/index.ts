export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  status: string;
  titles: string[];
  aboutBio: string;
  careerObjective: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'Tools';
  level: number;
  icon: string;
  status?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  featured: boolean;
  badge: string;
  image?: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  duration: string;
  type: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  score: string;
  period: string;
  status: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  badge: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  date: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}
