'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Recycle, Globe, Leaf } from 'lucide-react';

// --- Eco-themed icons ---
const LeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17 8C8 10 5.5 16.5 5.5 16.5S9 12 17 8z" />
  </svg>
);
const SproutIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 20h10v-2H7v2zm0-4h10v-2H7v2zm5-12a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" />
    <path d="M12 14a6 6 0 0 0-6-6h.5a6.5 6.5 0 0 1 11 0H18a6 6 0 0 0-6 6z" />
  </svg>
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
  { Icon: LeafIcon },
  { Icon: Recycle },
  { Icon: Leaf },
  { Icon: SproutIcon },
  { Icon: HandsHoldingPlantIcon },
  { Icon: EcoLightbulbIcon },
  { Icon: SolarPanelIcon },
  { Icon: SproutIcon },
  { Icon: Globe },
  { Icon: WindMillIcon },
  { Icon: EcoHouseIcon },
];

const BUBBLE_COUNT = 15;

type Bubble = {
  id: number;
  Icon: React.ElementType;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
};

export function Background() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const generatedBubbles = Array.from({ length: BUBBLE_COUNT }).map((_, i) => {
      const { Icon } = icons[i % icons.length];
      return {
        id: i,
        Icon,
        size: Math.random() * 70 + 80, // 20–60px
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 25 + 15, // 15–40s
        delay: Math.random() * -40,
      };
    });
    setBubbles(generatedBubbles);
  }, [isClient]);

  return (
    <>
      {/* Background gradient layer */}
      <div className="fixed inset-0 -z-20 h-full w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black" />
      {/* bg-gradient-to-b from-white via-white to-gray-50 */}
      {/* bg-gradient-to-b from-gray-900 via-gray-800 to-black */}

      {/* Floating icons layer (above background but below content) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <style jsx global>{`
          @keyframes randomFloat {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            25% {
              transform: translate(25px, -30px) rotate(15deg);
            }
            50% {
              transform: translate(-20px, 20px) rotate(-10deg);
            }
            75% {
              transform: translate(10px, -25px) rotate(20deg);
            }
            100% {
              transform: translate(0, 0) rotate(0deg);
            }
          }
        `}</style>

        {bubbles.map(({ id, Icon, top, left, size, duration, delay }) => (
          <div
            key={id}
            style={{
              position: 'absolute',
              top,
              left,
              width: `${size}px`,
              height: `${size}px`,
              animation: `randomFloat ${duration}s ${delay}s ease-in-out infinite`,
              opacity: 0.1 + Math.random() * 0.5,
              filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))',
            }}
          >
            <Icon className={cn('w-full h-full text-white')} />
          </div>
        ))}
      </div>
    </>
  );
}
