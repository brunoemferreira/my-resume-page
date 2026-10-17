import React, { useRef } from 'react';
import { useUY3Particles } from '../../../application/hooks/useUY3Particles';
import { useTheme } from '../../../application/hooks/useTheme';

export const UY3BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useUY3Particles(canvasRef, containerRef, theme);

  return (
    <div
      ref={containerRef}
      className="uy3-bg-wrapper"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          pointerEvents: 'auto'
        }}
      />
    </div>
  );
};
