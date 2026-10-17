import React from 'react';
import { LogoBF } from '../ui/LogoBF';
import { PROFILE_INFO } from '../../../infrastructure/data/profileData';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '36px 0 80px',
        textAlign: 'center',
        fontSize: '0.84rem',
        color: 'var(--text-soft)',
        background: 'var(--bg-ink)'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <LogoBF size={32} />

        <p style={{ fontWeight: 600, color: 'var(--text-main)' }}>
          © {new Date().getFullYear()} {PROFILE_INFO.fullName} · Todos os direitos reservados.
        </p>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', maxWidth: 540 }}>
          Construído com React, TypeScript, Clean Architecture, Mobile-First e Efeitos Interativos de Fundo inspirados na UY3.
        </p>

        <div style={{ display: 'flex', gap: 18, marginTop: 4 }}>
          <a
            href={PROFILE_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-soft)', textDecoration: 'none' }}
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-soft)', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={PROFILE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-soft)', textDecoration: 'none' }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
