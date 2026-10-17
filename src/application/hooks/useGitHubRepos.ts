import { useEffect, useState } from 'react';
import type { ProjectCategory, ProjectEntity } from '../../@types/github';
import { githubService } from '../../infrastructure/api/githubClient';
import { FALLBACK_PROJECTS } from '../../infrastructure/data/fallbackProjects';

export const useGitHubRepos = () => {
  const [projects, setProjects] = useState<ProjectEntity[]>(FALLBACK_PROJECTS);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  useEffect(() => {
    let isMounted = true;

    githubService.getFeaturedProjects()
      .then(data => {
        if (isMounted) {
          setProjects(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setProjects(FALLBACK_PROJECTS);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProjects = projects.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return {
    projects: filteredProjects,
    totalCount: projects.length,
    isLoading,
    selectedCategory,
    setSelectedCategory
  };
};
