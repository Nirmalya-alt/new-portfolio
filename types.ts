export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills' | 'design' | 'product';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name
}

export interface UserProfile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  location: string;
  avatarUrl: string;
  socials: SocialLink[];
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}