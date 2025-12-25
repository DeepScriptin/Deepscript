export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum PageState {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  PORTFOLIO = '/portfolio',
  BLOG = '/blog',
  CONTACT = '/contact',
}
