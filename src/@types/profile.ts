export interface CareerItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
  tag: string;
  color: 'flame' | 'cyan' | 'indigo' | 'emerald';
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  isPostGrad: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  badgeImg?: string;
  issuer?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}
