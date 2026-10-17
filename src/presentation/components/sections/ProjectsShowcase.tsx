import React from 'react';
import { ShellCard } from '../ui/ShellCard';
import { useGitHubRepos } from '../../../application/hooks/useGitHubRepos';
import { IconMobile, IconBot, IconCode, IconStar, IconFork } from '../ui/Icons';
import type { ProjectCategory } from '../../../@types/github';

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'chatbots', label: 'Chatbots & Automação' },
  { id: 'clean', label: 'Clean Code & Web' },
  { id: 'mobile', label: 'Mobile & SQLite' }
];

export const ProjectsShowcase: React.FC = () => {
  const { projects, totalCount, selectedCategory, setSelectedCategory } = useGitHubRepos();

  const renderProjectIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'mobile':
        return <IconMobile size={22} color="var(--cyan)" />;
      case 'chatbots':
        return <IconBot size={22} color="var(--flame)" />;
      default:
        return <IconCode size={22} color="var(--indigo)" />;
    }
  };

  return (
    <section className="projects-section" id="projetos" style={{ paddingBlock: 50 }}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Código Aberto & Entregas</span>
          <h2 className="section-title">Repositórios em Destaque no GitHub</h2>
          <p className="section-sub">
            Conectados em tempo real ao perfil @brunoemferreira ({totalCount} repositórios públicos).
          </p>
        </div>

        {/* Filter Scrollable Tabs (Mobile First) */}
        <div
          className="filter-scroll"
          style={{
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            paddingBottom: 14,
            marginBottom: 24,
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              style={{
                flexShrink: 0,
                padding: '7px 18px',
                borderRadius: 'var(--r-pill)',
                background: selectedCategory === cat.id ? 'var(--flame)' : 'var(--bg-shell)',
                color: selectedCategory === cat.id ? '#fff' : 'var(--text-soft)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedCategory === cat.id ? '0 4px 14px var(--flame-glow)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map(project => (
            <ShellCard key={project.id} className="project-shell-card">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: 'var(--bg-shell)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {renderProjectIcon(project.category)}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-soft)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        <IconStar size={14} color="#f59e0b" />
                        {project.stars}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        <IconFork size={14} color="var(--text-soft)" />
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', fontWeight: 700, marginBottom: 8, wordBreak: 'break-word' }}>
                    {project.name}
                  </h4>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-soft)', lineHeight: 1.55, marginBottom: 16 }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.72rem',
                          padding: '3px 8px',
                          borderRadius: 6,
                          background: 'var(--bg-shell)',
                          color: 'var(--text-soft)',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 14,
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.82rem'
                  }}
                >
                  <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>
                    {project.language}
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--flame)',
                      textDecoration: 'none',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    Ver Código ↗
                  </a>
                </div>
              </div>
            </ShellCard>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 640px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
