import React, { useRef } from 'react';
import { UY3BackgroundCanvas } from '../ui/UY3BackgroundCanvas';
import { ButtonNest } from '../ui/ButtonNest';
import { ShellCard } from '../ui/ShellCard';
import { useTypewriter } from '../../../application/hooks/useTypewriter';
import { useAnimatedCounter } from '../../../application/hooks/useAnimatedCounter';
import { PROFILE_INFO } from '../../../infrastructure/data/profileData';

const TYPEWRITER_TITLES = [
  'Especialista em Chatbots & Blip Platform',
  'Arquiteto de Software & Clean Architecture',
  'Engenheiro Fullstack (TypeScript / Node / .NET)',
  '18+ Anos de Excelência Técnica'
];

export const Hero: React.FC = () => {
  const typewriterText = useTypewriter(TYPEWRITER_TITLES);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const yearsCount = useAnimatedCounter(18, statsRef);
  const reposCount = useAnimatedCounter(51, statsRef);
  const postGradCount = useAnimatedCounter(4, statsRef);

  return (
    <section className="hero-section" id="hero" style={{ position: 'relative', overflow: 'hidden', paddingTop: 110, paddingBottom: 50 }}>
      {/* UY3 Native Interactive Canvas Particles */}
      <UY3BackgroundCanvas />

      {/* UY3 Ambient Orbs & Perspective Grid */}
      <div className="hero-bg-orbs" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </div>
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid-layout">
          {/* Left Column: Headlines & Callouts */}
          <div className="hero-text-col">
            <div className="eyebrow-pill">
              <span className="pulse-dot" />
              <span>18+ Anos de Engenharia · Blip Specialist · Clean Code</span>
            </div>

            <h1 className="hero-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 14 }}>
              Construindo a Infraestrutura Inteligente de <span className="gradient-text">Conversas e Código</span>.
            </h1>

            {/* Dynamic Typewriter Effect */}
            <div
              className="typewriter-box"
              style={{
                minHeight: '2.4em',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--cyan)',
                marginBottom: 16,
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: 4
              }}
            >
              <span>&gt; </span>
              <span>{typewriterText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: 2,
                  height: '1.2em',
                  background: 'var(--flame)',
                  animation: 'blinkCursor 0.8s infinite',
                  verticalAlign: 'middle'
                }}
              />
            </div>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-soft)', lineHeight: 1.65, marginBottom: 28, maxWidth: 580 }}>
              Desenvolvedor de contatos inteligentes na plataforma <strong>Blip</strong> e arquiteto de software. Atuação em esteiras complexas de crédito financeiro (FGTS e Consignado) para o <strong>Banco Pan</strong>, <strong>Banco Safra</strong> e <strong>UY3</strong> com TypeScript, Node.js e ecossistema .NET.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
              <ButtonNest href="#projetos" style={{ paddingBlock: 10 }}>
                Explorar Repositórios GitHub
              </ButtonNest>
              <ButtonNest href={PROFILE_INFO.linkedinUrl} external variant="ghost" style={{ paddingBlock: 10 }}>
                LinkedIn Oficial ↗
              </ButtonNest>
            </div>
          </div>

          {/* Right Column: Hero Profile Double-Bezel Card */}
          <div className="hero-card-col">
            <ShellCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div
                  style={{
                    width: 82,
                    height: 82,
                    borderRadius: 20,
                    overflow: 'hidden',
                    border: '2px solid var(--flame)',
                    boxShadow: '0 0 20px var(--flame-glow)',
                    flexShrink: 0,
                    background: 'var(--bg-ink)'
                  }}
                >
                  <img
                    src="/assets/images/profile.png"
                    alt={PROFILE_INFO.fullName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/profile.jpg';
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>
                    {PROFILE_INFO.name}
                  </h3>
                  <p style={{ color: 'var(--flame)', fontSize: '0.84rem', fontWeight: 600 }}>
                    Mid-level Chatbot Developer @ UY3
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-soft)' }}>
                    {PROFILE_INFO.location}
                  </span>
                </div>
              </div>

              {/* Animated Stat Badges */}
              <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div style={{ background: 'var(--bg-shell)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: '10px 14px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--flame)', lineHeight: 1.1 }}>
                    {yearsCount}+
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-soft)' }}>
                    Anos de Engenharia
                  </div>
                </div>

                <div style={{ background: 'var(--bg-shell)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: '10px 14px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--cyan)', lineHeight: 1.1 }}>
                    {reposCount}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-soft)' }}>
                    Repositórios GitHub
                  </div>
                </div>

                <div style={{ background: 'var(--bg-shell)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: '10px 14px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--indigo)', lineHeight: 1.1 }}>
                    {postGradCount}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-soft)' }}>
                    Pós-Graduações
                  </div>
                </div>

                <div style={{ background: 'var(--bg-shell)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: '10px 14px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--emerald)', lineHeight: 1.2 }}>
                    Clean
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-soft)' }}>
                    Architecture & TDD
                  </div>
                </div>
              </div>
            </ShellCard>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-title {
          font-size: 2.2rem;
        }
        @media (min-width: 640px) {
          .hero-title {
            font-size: 2.8rem;
          }
        }
        @media (min-width: 992px) {
          .hero-section {
            padding-top: 140px !important;
            padding-bottom: 70px !important;
          }
          .hero-grid-layout {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 48px;
            align-items: center;
          }
          .hero-title {
            font-size: 3.3rem;
          }
        }
      `}</style>
    </section>
  );
};
