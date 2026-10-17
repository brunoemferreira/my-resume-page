import type { ProjectEntity } from '../../@types/github';

export interface IGitHubService {
  getFeaturedProjects(): Promise<ProjectEntity[]>;
}
