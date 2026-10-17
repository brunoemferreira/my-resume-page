export interface GitHubRepoResponse {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  updated_at: string;
}

export type ProjectCategory = 'all' | 'chatbots' | 'clean' | 'mobile';

export interface ProjectEntity {
  id: string;
  name: string;
  title: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  forks: number;
  tags: string[];
  category: ProjectCategory;
  isPinned?: boolean;
}
