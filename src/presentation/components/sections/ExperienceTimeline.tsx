import React from 'react';
import { ShellCard } from '../ui/ShellCard';
import { CAREER_HISTORY } from '../../../infrastructure/data/profileData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section className="timeline-section" id="experiencia" style={{ paddingBlock: 50 }}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Trajetória Profissional</span>
          <h2 className="section-title">Experiência na Prática</h2>
          <p className="section-sub">
            Soluções para grandes bancos, infraestrutura de crédito e automação conversacional.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {CAREER_HISTORY.map(item => (
            <ShellCard key={item.id} className="timeline-shell-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: item.color === 'flame' ? 'var(--flame)' : item.color === 'cyan' ? 'var(--cyan)' : 'var(--indigo)'
                    }}
                  >
                    {item.tag} · {item.period}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, marginTop: 4 }}>
                    {item.role}
                  </h3>
                  <div style={{ color: 'var(--flame)', fontWeight: 600, fontSize: '0.92rem' }}>
                    {item.company}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-soft)',
                    background: 'var(--bg-shell)',
                    padding: '4px 12px',
                    borderRadius: 'var(--r-pill)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {item.location}
                </span>
              </div>

              <p style={{ color: 'var(--text-soft)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: item.highlights ? 12 : 0 }}>
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <ul style={{ paddingLeft: 20, color: 'var(--text-soft)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} style={{ marginBottom: 6 }}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </ShellCard>
          ))}
        </div>
      </div>
    </section>
  );
};
