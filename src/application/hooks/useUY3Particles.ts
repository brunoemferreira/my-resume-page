import { useEffect, type RefObject } from 'react';
import type { ThemeMode } from '../../@types/theme';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export const useUY3Particles = (
  canvasRef: RefObject<HTMLCanvasElement | null>,
  containerRef: RefObject<HTMLElement | null>,
  theme: ThemeMode
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // UY3 Original Palette parameters
    const isDark = theme === 'dark';
    const GLOW = isDark ? [150, 64, 20] : [220, 100, 30];
    const DOT = isDark ? [236, 150, 92] : [210, 85, 20];
    const LINE = isDark ? [236, 150, 92] : [210, 85, 20];
    const DOT_A = isDark ? 0.60 : 0.45;
    const LINE_A = isDark ? 0.28 : 0.20;
    const LINK = 160;
    const LINE_W = 1.2;
    const SPEED = reduceMotion ? 0.1 : 0.34;
    const REPULSE = 95;

    let cw = 0;
    let ch = 0;
    let DPR = 1;
    let glows: CanvasGradient[] = [];
    let parts: Particle[] = [];
    let animationFrameId: number;
    let lastW = 0;

    const buildCornerGlow = () => {
      glows = [];
      const R = Math.min(cw, ch) * 0.85;
      const corners = [[0, 0], [cw, 0], [0, ch], [cw, ch]];
      for (let i = 0; i < corners.length; i++) {
        const g = ctx.createRadialGradient(
          corners[i][0], corners[i][1], 0,
          corners[i][0], corners[i][1], R
        );
        g.addColorStop(0, `rgba(${GLOW[0]},${GLOW[1]},${GLOW[2]},${isDark ? 0.28 : 0.14})`);
        g.addColorStop(0.55, `rgba(${GLOW[0]},${GLOW[1]},${GLOW[2]},${isDark ? 0.06 : 0.03})`);
        g.addColorStop(1, `rgba(${GLOW[0]},${GLOW[1]},${GLOW[2]},0)`);
        glows.push(g);
      }
    };

    // UY3 edge-bias: U-shaped distribution to leave center text breathable
    const EDGE_BIAS = 0.62;
    const EDGE_POW = 2.2;
    const spawnX = () => {
      if (Math.random() > EDGE_BIAS) return Math.random() * cw;
      const d = Math.pow(Math.random(), EDGE_POW) * (cw * 0.5);
      return Math.random() < 0.5 ? d : cw - d;
    };

    const targetCount = () => {
      return Math.round(Math.min(110, Math.max(34, (cw * ch) / 15000)));
    };

    const spawn = (x?: number, y?: number): Particle => {
      const ang = Math.random() * 6.2832;
      const sp = SPEED * (0.4 + Math.random() * 0.9);
      return {
        x: x ?? spawnX(),
        y: y ?? Math.random() * ch,
        vx: Math.cos(ang) * sp,
        vy: Math.sin(ang) * sp,
        r: 1.3 + Math.random() * 1.5
      };
    };

    const makeParticles = () => {
      const n = targetCount();
      parts = [];
      for (let i = 0; i < n; i++) {
        parts.push(spawn());
      }
    };

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      cw = container.clientWidth || window.innerWidth;
      ch = container.clientHeight || 700;
      canvas.width = Math.round(cw * DPR);
      canvas.height = Math.round(ch * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      buildCornerGlow();

      if (Math.abs(cw - lastW) > 1 || parts.length === 0) {
        lastW = cw;
        makeParticles();
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Pointer events
    let mx = -9999;
    let my = -9999;

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;

      // Publish UY3 style --light-x / --light-y
      const lx = (e.clientX / window.innerWidth).toFixed(3);
      const ly = (e.clientY / window.innerHeight).toFixed(3);
      document.documentElement.style.setProperty('--light-x', lx);
      document.documentElement.style.setProperty('--light-y', ly);
    };

    const onPointerLeave = () => {
      mx = -9999;
      my = -9999;
    };

    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      for (let j = 0; j < 4; j++) {
        parts.push(spawn(clickX, clickY));
      }
      const max = targetCount() + 35;
      while (parts.length > max) parts.shift();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave, { passive: true });
    canvas.addEventListener('click', onClick, { passive: true });

    // Visibility pause (battery & performance)
    let isPaused = false;
    const onVisibilityChange = () => {
      isPaused = document.visibilityState === 'hidden';
      if (!isPaused) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const render = () => {
      if (isPaused) return;

      ctx.clearRect(0, 0, cw, ch);

      // 1. Draw corner glows
      for (let i = 0; i < glows.length; i++) {
        ctx.fillStyle = glows[i];
        ctx.fillRect(0, 0, cw, ch);
      }

      const M = 30; // toroidal wrap margin
      const len = parts.length;

      // 2. Update and draw particles
      for (let i = 0; i < len; i++) {
        const p = parts[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < -M) p.x = cw + M;
        else if (p.x > cw + M) p.x = -M;
        if (p.y < -M) p.y = ch + M;
        else if (p.y > ch + M) p.y = -M;

        // Mouse repulse physics
        if (mx > -1000) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPULSE && dist > 0.1) {
            const force = (1 - dist / REPULSE) * 2.2;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${DOT[0]},${DOT[1]},${DOT[2]},${DOT_A})`;
        ctx.fill();

        // 3. Connect close particles
        for (let j = i + 1; j < len; j++) {
          const p2 = parts[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK) {
            const alpha = (1 - dist / LINK) * LINE_A;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${LINE[0]},${LINE[1]},${LINE[2]},${alpha})`;
            ctx.lineWidth = LINE_W;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('click', onClick);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [canvasRef, containerRef, theme]);
};
