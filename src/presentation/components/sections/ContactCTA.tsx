import React from 'react';
import { ShellCard } from '../ui/ShellCard';
import { ButtonNest } from '../ui/ButtonNest';
import { useClipboard } from '../../../application/hooks/useClipboard';
import { PROFILE_INFO } from '../../../infrastructure/data/profileData';
import { IconMail, IconCheck, IconWhatsApp, IconLinkedIn } from '../ui/Icons';

export const ContactCTA: React.FC = () => {
  const { copied, copy } = useClipboard();

  return (
    <section className="contact-cta-section" id="contato" style={{ paddingBlock: 60 }}>
      <div className="container">
        <ShellCard>
          <div style={{ textAlign: 'center', padding: 'clamp(20px, 4vw, 40px) 16px' }}>
            <span className="section-eyebrow" style={{ textAlign: 'center', display: 'inline-block' }}>
              Vamos Conversar
            </span>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, margin: '8px 0 16px', lineHeight: 1.2 }}>
              Pronto para transformar sua esteira com <span className="gradient-text">Chatbots & Código Limpo</span>?
            </h2>

            <p style={{ color: 'var(--text-soft)', fontSize: '1rem', maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.65 }}>
              Disponível para novos desafios profissionais, desenvolvimento de contatos inteligentes de alta escala na plataforma Blip e arquitetura de software orientada a Clean Code.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 24 }}>
              <ButtonNest href={PROFILE_INFO.whatsappUrl} external style={{ paddingBlock: 12 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <IconWhatsApp size={18} />
                  Conversar no WhatsApp ({PROFILE_INFO.phone})
                </span>
              </ButtonNest>

              <ButtonNest href={PROFILE_INFO.linkedinUrl} external variant="ghost" style={{ paddingBlock: 12 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <IconLinkedIn size={18} />
                  Conectar no LinkedIn ↗
                </span>
              </ButtonNest>

              <button
                type="button"
                onClick={() => copy(PROFILE_INFO.email)}
                className="btn-uy3 btn-ghost-uy3"
                style={{
                  padding: '6px 20px',
                  borderRadius: 'var(--r-pill)',
                  fontWeight: 600,
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8
                }}
              >
                {copied ? (
                  <>
                    <IconCheck size={18} color="#22c55e" />
                    <span>E-mail Copiado!</span>
                  </>
                ) : (
                  <>
                    <IconMail size={18} />
                    <span>Copiar E-mail ({PROFILE_INFO.email})</span>
                  </>
                )}
              </button>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              🔒 Conexão segura protegida contra ataques comuns (OWASP Frontend & CSP).
            </div>
          </div>
        </ShellCard>
      </div>
    </section>
  );
};
