import React from 'react';
import { ShellCard } from '../ui/ShellCard';
import { SKILL_CATEGORIES } from '../../../infrastructure/data/profileData';
import {
  IconAI,
  IconBackend,
  IconOOP,
  IconDatabase,
  IconReact,
  IconCloud
} from '../ui/Icons';

export const SkillsMatrix: React.FC = () => {
  const renderCategoryIcon = (id: string) => {
    switch (id) {
      case 'chatbots':
        return <IconAI size={26} color="var(--flame)" />;
      case 'backend':
        return <IconBackend size={26} color="var(--cyan)" />;
      case 'architecture':
        return <IconOOP size={26} color="var(--indigo)" />;
      case 'database':
        return <IconDatabase size={26} color="var(--flame)" />;
      case 'frontend':
        return <IconReact size={26} color="var(--cyan)" />;
      case 'devops':
        return <IconCloud size={26} color="var(--indigo)" />;
      default:
        return <IconBackend size={26} color="var(--flame)" />;
    }
  };

  return (
    <section className="skills-section" id="skills" style={{ paddingBlock: 50 }}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Domínio Técnico & Ferramental</span>
          <h2 className="section-title">Stack & Competências Principais</h2>
          <p className="section-sub">
            18+ anos construindo desde sistemas legados até automações modernas de IA conversacional.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map(category => (
            <ShellCard key={category.id} className="skill-shell-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'var(--bg-shell)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {renderCategoryIcon(category.id)}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700 }}>
                  {category.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      background: 'var(--bg-shell)',
                      border: '1px solid var(--border-subtle)',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: '0.82rem',
                      color: 'var(--text-main)',
                      fontWeight: 500
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ShellCard>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
