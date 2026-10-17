import type { IGitHubService } from '../../domain/contracts/IGitHubService';
import type { GitHubRepoResponse, ProjectEntity } from '../../@types/github';
import { StorageCache } from '../cache/storageCache';
import { FALLBACK_PROJECTS } from '../data/fallbackProjects';

export class GitHubService implements IGitHubService {
  private static CACHE_KEY = 'github_featured_repos';
  private static API_URL = 'https://api.github.com/users/brunoemferreira/repos?per_page=100';

  public async getFeaturedProjects(): Promise<ProjectEntity[]> {
    // 1. Try cache
    const cached = StorageCache.get<ProjectEntity[]>(GitHubService.CACHE_KEY);
    if (cached && Array.isArray(cached) && cached.length > 0) {
      return cached;
    }

    // 2. Fetch from GitHub API with safety timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      const response = await fetch(GitHubService.API_URL, {
        signal: controller.signal,
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        return FALLBACK_PROJECTS;
      }

      const remoteRepos: GitHubRepoResponse[] = await response.json();
      const repoMap = new Map<string, GitHubRepoResponse>();
      remoteRepos.forEach(r => repoMap.set(r.name.toLowerCase(), r));

      // 3. Merge curated projects with live stats
      const merged: ProjectEntity[] = FALLBACK_PROJECTS.map(curated => {
        const live = repoMap.get(curated.name.toLowerCase());
        if (!live) return curated;

        return {
          ...curated,
          stars: typeof live.stargazers_count === 'number' ? live.stargazers_count : curated.stars,
          forks: typeof live.forks_count === 'number' ? live.forks_count : curated.forks,
          description: this.sanitizeText(live.description) || curated.description
        };
      });

      // 4. Cache results for 1 hour (3600000ms)
      StorageCache.set(GitHubService.CACHE_KEY, merged, 3600000);
      return merged;
    } catch {
      // In case of rate limit, timeout, or offline: return safe fallback
      return FALLBACK_PROJECTS;
    }
  }

  private sanitizeText(input: string | null | undefined): string {
    if (!input) return '';
    return input.replace(/[<>]/g, '').trim().slice(0, 300);
  }
}

export const githubService = new GitHubService();
