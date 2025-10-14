'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Recycle, Globe } from 'lucide-react';

// Custom SVG components inspired by the user-provided image
const LeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17 8C8 10 5.5 16.5 5.5 16.5S9 12 17 8z" /></svg>
);
const SproutIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M7 20h10v-2H7v2zm0-4h10v-2H7v2zm5-12a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" /><path d="M12 14a6 6 0 0 0-6-6h.5a6.5 6.5 0 0 1 11 0H18a6 6 0 0 0-6 6z" /></svg>
);
const HandsHoldingPlantIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className}>
    <path d="M57.32,29.13a3.39,3.39,0,0,0-4.59-1.39,33.23,33.23,0,0,1-13.88-3.69V15.5a3.5,3.5,0,0,0-7,0v5.59a33.23,33.23,0,0,1-13.88,3.69,3.39,3.39,0,0,0-4.59,1.39,3.5,3.5,0,0,0,1.39,4.59,40.14,40.14,0,0,0,17.08,4.5V52.5a3.5,3.5,0,0,0,7,0V38.22a40.14,40.14,0,0,0,17.08-4.5A3.5,3.5,0,0,0,57.32,29.13Z" />
    <path d="M32 2a8 8 0 00-8 8c0 2.21 1.79 4 4 4s4-1.79 4-4a8 8 0 00-8-8zM36 12a4 4 0 01-8 0c0-2.21 1.79-4 4-4s4 1.79 4 4z" opacity=".8"/>
  </svg>
);
const SolarPanelIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M4 4h16v14H4z" opacity="0.4" />
        <path d="M4 6h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" />
        <path d="M6 4V2h2v2zm4 0V2h2v2zm4 0V2h2v2z" />
    </svg>
);
const WindMillIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 12a2 2 0 100-4 2 2 0 000 4zm0 0L4 4l.7-2.8 2.8.7L12 12zm0 0l8 8-2.8.7-.7-2.8L12 12zm0 0l-8 8 .7 2.8 2.8-.7L12 12z" />
        <path d="M12 14v8h-2v-8h2z" opacity="0.6"/>
    </svg>
);
const EcoLightbulbIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12,2A7,7,0,0,0,5,9c0,2.38,1.19,4.47,3,5.74V17a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14.74c1.81-1.27,3-3.36,3-5.74A7,7,0,0,0,12,2Zm1.19,10.22-1.91.95.46-2.13-1.54-1.5.2.14,2.14-.36L12,7.24l.95,1.94,2.14.36-1.54,1.5.46,2.13-1.91-.95.2-.14Z"/>
    </svg>
);
const EcoHouseIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 3L2 12h3v8h14v-8h3L12 3zm2.5 11.5c-1 0-1.5-.5-1.5-1.5v-1h-2v1c0 1-.5 1.5-1.5 1.5S8 14 8 13v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2c0 1-.5 1.5-1.5 1.5z" />
    </svg>
);

const icons = [
  { Icon: LeafIcon, className: 'text-primary' },
  { Icon: Recycle, className: 'text-green-500' },
  { Icon: SproutIcon, className: 'text-sky-400' },
  { Icon: HandsHoldingPlantIcon, className: 'text-slate-400' },
  { Icon: EcoLightbulbIcon, className: 'text-yellow-400' },
  { Icon: SolarPanelIcon, className: 'text-orange-400' },
  { Icon: SproutIcon, className: 'text-lime-500' },
  { Icon: Globe, className: 'text-blue-500' },
  { Icon: WindMillIcon, className: 'text-stone-500' },
  { Icon: EcoHouseIcon, className: 'text-teal-400' },
];

const BUBBLE_COUNT = 30;

type Bubble = {
  id: number;
  Icon: React.ElementType;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  className: string;
};

export function Background() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const generatedBubbles = Array.from({ length: BUBBLE_COUNT }).map((_, i) => {
      const { Icon, className } = icons[i % icons.length];
      return {
        id: i,
        Icon,
        className,
        size: Math.random() * 50 + 20, // 20px to 70px
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 20 + 20, // 20s to 40s
        delay: Math.random() * -40, // Start at a random point in animation
      };
    });
    setBubbles(generatedBubbles);
  }, [isClient]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden">
      <div className="relative h-full w-full" id="bubble-container">
        {bubbles.map(({ id, Icon, top, left, size, duration, delay, className }) => (
          <BubbleItem
            key={id}
            id={id}
            Icon={Icon}
            top={top}
            left={left}
            size={size}
            duration={duration}
            delay={delay}
            className={className}
            mousePosition={mousePosition}
          />
        ))}
      </div>
    </div>
  );
}

const BubbleItem = ({ id, Icon, top, left, size, duration, delay, className, mousePosition }: Bubble & { mousePosition: { x: number, y: number } }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { x, y } = mousePosition;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2));
    const proximity = Math.max(0, 1 - distance / 300); // 300px radius of influence

    const scale = 1 + proximity * 1.2; // Scale up to 2.2x
    const opacity = (Math.random() * 0.1) + 0.05 + proximity * 0.5; // Base opacity + proximity boost

    setStyle({
      transform: `scale(${scale})`,
      opacity: Math.min(opacity, 1),
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
    });

  }, [mousePosition]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top,
        left,
        width: `${size}px`,
        height: `${size}px`,
        animation: `float ${duration}s ${delay}s linear infinite`,
        willChange: 'transform',
        ...style
      }}
    >
      <Icon className={cn("w-full h-full", className)} />
    </div>
  );
};
