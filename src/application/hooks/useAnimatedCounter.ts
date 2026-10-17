import { useEffect, useState, type RefObject } from 'react';

export const useAnimatedCounter = (
  target: number,
  ref: RefObject<HTMLElement | null>,
  duration = 1400
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startTime: number | null = null;
    let animationFrame: number;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          animationFrame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [target, ref, duration]);

  return count;
};
