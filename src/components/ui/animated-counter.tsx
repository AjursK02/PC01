'use client';
import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/use-in-view';

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({ to, duration = 2.5, decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView<HTMLSpanElement>();

  useEffect(() => {
    if (!isInView) {
      setCount(0); // Reset when not in view
      return;
    }

    let start: number | null = null;
    const end = to;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      
      const easedProgress = 1 - Math.pow(1 - progress, 5); 

      const currentCount = easedProgress * end;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
}
