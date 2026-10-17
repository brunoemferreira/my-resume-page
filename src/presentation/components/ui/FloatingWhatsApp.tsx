import React from 'react';
import { PROFILE_INFO } from '../../../infrastructure/data/profileData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={PROFILE_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-floating-btn"
      aria-label="Conversar com Bruno Ferreira no WhatsApp"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.6-4.6a8.4 8.4 0 1 1 15.4-4.3Z" />
        <path d="M8.9 9.1c.2 2.4 2.4 4.6 4.8 4.9l.9-1.2 1.7.8-.3 1.3c-2.9.6-6.9-3.4-6.3-6.3l1.3-.3.8 1.7-.9.9" />
      </svg>
      <span>Fale Comigo</span>
    </a>
  );
};
