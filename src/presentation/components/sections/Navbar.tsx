import React, { useState } from 'react';
import { LogoBF } from '../ui/LogoBF';
import { ButtonNest } from '../ui/ButtonNest';
import { ThemeToggle } from '../ui/ThemeToggle';
import { PROFILE_INFO } from '../../../infrastructure/data/profileData';

export const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className="nav-host">
        <nav className="nav-pill" aria-label="Navegação Principal">
          {/* Brand Logo with BF Monogram */}
          <a
            href="#hero"
            className="brand-logo"
            aria-label="Bruno Ferreira - Ir para o início"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.15rem'
            }}
          >
            <LogoBF size={36} />
            <span style={{ letterSpacing: '-0.01em' }}>Bruno Ferreira</span>
          </a>

          {/* Desktop Nav Links */}
          <ul
            className="desktop-nav-links"
            style={{
              display: 'none',
              listStyle: 'none',
              gap: 22,
              alignItems: 'center'
            }}
          >
            <li><a href="#hero" className="nav-link-item">Início</a></li>
            <li><a href="#projetos" className="nav-link-item">Projetos GitHub</a></li>
            <li><a href="#skills" className="nav-link-item">Stack</a></li>
            <li><a href="#experiencia" className="nav-link-item">Carreira</a></li>
            <li><a href="#formacao" className="nav-link-item">Formação</a></li>
            <li><a href="#contato" className="nav-link-item">Contato</a></li>
          </ul>

          {/* Action Group */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ThemeToggle />

            <div className="desktop-cta-btn">
              <ButtonNest href={PROFILE_INFO.whatsappUrl} external>
                Falar no WhatsApp
              </ButtonNest>
            </div>

            {/* Mobile Hamburger Burger */}
            <button
              onClick={toggleDrawer}
              type="button"
              className="burger-btn"
              aria-label={isDrawerOpen ? 'Fechar menu móvel' : 'Abrir menu móvel'}
              aria-expanded={isDrawerOpen}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 5,
                width: 38,
                height: 38,
                background: 'var(--bg-shell)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 10,
                cursor: 'pointer',
                padding: 9
              }}
            >
              <span style={{ display: 'block', height: 2, width: '100%', background: 'var(--text-main)', borderRadius: 2 }} />
              <span style={{ display: 'block', height: 2, width: '100%', background: 'var(--text-main)', borderRadius: 2 }} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {isDrawerOpen && (
        <div
          className="mobile-drawer-overlay"
          style={{
            position: 'fixed',
            top: 72,
            left: 14,
            right: 14,
            background: 'var(--pill-nav-bg)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 20,
            padding: 20,
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            zIndex: 89,
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
          }}
        >
          <a href="#hero" onClick={closeDrawer} className="mobile-nav-link">Início</a>
          <a href="#projetos" onClick={closeDrawer} className="mobile-nav-link">Projetos GitHub (51 repos)</a>
          <a href="#skills" onClick={closeDrawer} className="mobile-nav-link">Stack & Domínio</a>
          <a href="#experiencia" onClick={closeDrawer} className="mobile-nav-link">Carreira (UY3, Blip, Indra)</a>
          <a href="#formacao" onClick={closeDrawer} className="mobile-nav-link">Formação & Certificações</a>
          <a href="#contato" onClick={closeDrawer} className="mobile-nav-link">Contato Direto</a>
          <div style={{ marginTop: 8 }}>
            <ButtonNest href={PROFILE_INFO.whatsappUrl} external className="w-full" style={{ width: '100%', justifyContent: 'center' }}>
              Conversar no WhatsApp
            </ButtonNest>
          </div>
        </div>
      )}

      <style>{`
        .nav-link-item {
          color: var(--text-soft);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link-item:hover {
          color: var(--flame);
        }
        .mobile-nav-link {
          color: var(--text-main);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: 10px;
          background: var(--bg-shell);
          transition: background-color 0.2s;
        }
        .mobile-nav-link:hover {
          background: var(--bg-surface-hover);
          color: var(--flame);
        }
        @media (min-width: 992px) {
          .desktop-nav-links {
            display: flex !important;
          }
          .burger-btn {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .desktop-cta-btn {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
