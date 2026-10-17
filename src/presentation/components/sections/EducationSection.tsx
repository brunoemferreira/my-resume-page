import React from 'react';
import { ShellCard } from '../ui/ShellCard';
import { EDUCATION_LIST, CERTIFICATIONS } from '../../../infrastructure/data/profileData';
import { IconStudent, IconBook } from '../ui/Icons';

export const EducationSection: React.FC = () => {
  return (
    <section className="education-section" id="formacao" style={{ paddingBlock: 50 }}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Evolução Contínua</span>
          <h2 className="section-title">Formação Acadêmica & Certificações</h2>
          <p className="section-sub">
            4 Pós-Graduações especializadas em Inteligência Artificial, TypeScript, Backend e Arquitetura.
          </p>
        </div>

        {/* Post-Graduations Grid */}
        <div className="edu-grid" style={{ marginBottom: 36 }}>
          {EDUCATION_LIST.map(edu => (
            <ShellCard key={edu.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {edu.degree}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>
                  {edu.period}
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.08rem', fontWeight: 700, marginBottom: 4 }}>
                {edu.field}
              </h4>
              <p style={{ color: 'var(--text-soft)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                <IconStudent size={16} color="var(--cyan)" />
                {edu.institution}
              </p>
            </ShellCard>
          ))}
        </div>

        {/* Certifications Badges */}
        <div className="section-head" style={{ marginBottom: 20 }}>
          <span className="section-eyebrow">Validação Técnica</span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800 }}>
            Certificações & Selos Oficiais
          </h3>
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS.map(cert => (
            <div
              key={cert.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '12px 16px',
                background: 'var(--bg-shell)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-lg)'
              }}
            >
              {cert.badgeImg ? (
                <div style={{ width: 44, height: 44, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={cert.badgeImg}
                    alt={cert.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ) : (
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconBook size={20} color="var(--indigo)" />
                </div>
              )}
              <div>
                <h5 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {cert.name}
                </h5>
                {cert.issuer && (
                  <span style={{ fontSize: '0.78rem', color: 'var(--flame)' }}>
                    {cert.issuer}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 640px) {
          .edu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
