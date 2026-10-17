import React from 'react';

interface ShellCardProps {
  children: React.ReactNode;
  className?: string;
  coreClassName?: string;
  style?: React.CSSProperties;
}

export const ShellCard: React.FC<ShellCardProps> = ({
  children,
  className = '',
  coreClassName = '',
  style
}) => {
  return (
    <div className={`shell ${className}`} style={style}>
      <div className={`core ${coreClassName}`}>
        {children}
      </div>
    </div>
  );
};
