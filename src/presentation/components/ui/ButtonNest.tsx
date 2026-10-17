import React from 'react';

interface ButtonNestProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ButtonNest: React.FC<ButtonNestProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  external = false,
  className = '',
  style
}) => {
  const btnClass = variant === 'primary' ? 'btn-uy3' : 'btn-uy3 btn-ghost-uy3';

  const content = (
    <>
      <span>{children}</span>
      <span className="nest" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${btnClass} ${className}`}
        style={style}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${btnClass} ${className}`} style={style} type="button">
      {content}
    </button>
  );
};
