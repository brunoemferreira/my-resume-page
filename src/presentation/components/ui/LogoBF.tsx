import React from 'react';

interface LogoBFProps {
  size?: number;
  className?: string;
}

export const LogoBF: React.FC<LogoBFProps> = ({ size = 38, className = '' }) => {
  return (
    <div
      className={`bf-logo-container ${className}`}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
      aria-label="Logo Bruno Ferreira (BF)"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 8px var(--flame-glow))' }}
      >
        <defs>
          <linearGradient id="bfLinearGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#f47626" />
            <stop offset="100%" stopColor="#ff8c45" />
          </linearGradient>
        </defs>
        {/* Outer Squircle with glowing stroke */}
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="22"
          stroke="url(#bfLinearGradient)"
          strokeWidth="4"
          fill="var(--bg-ink)"
        />
        {/* Letter B geometric modern line */}
        <path
          d="M26 28 H46 C54 28 58 32 58 38 C58 43 54 46 48 48 C56 50 60 55 60 62 C60 70 53 72 44 72 H26 Z"
          fill="none"
          stroke="url(#bfLinearGradient)"
          strokeWidth="6.5"
          strokeLinejoin="round"
        />
        <path
          d="M26 50 H46"
          stroke="url(#bfLinearGradient)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Intersecting Letter F */}
        <path
          d="M54 28 H78"
          stroke="#ff8c45"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <path
          d="M54 48 H72"
          stroke="#ff8c45"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
