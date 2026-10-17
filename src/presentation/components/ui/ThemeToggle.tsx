import React from 'react';
import { useTheme } from '../../../application/hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="theme-toggle-btn"
      aria-label={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      title={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      style={{
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: 'var(--bg-shell)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-main)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '1.05rem',
        transition: 'transform 0.25s var(--ease), border-color 0.25s ease'
      }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};
