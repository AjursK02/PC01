'use client';

import { ArrowRight, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

export function HeroSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  // Array of local video paths from public folder
  const videos = [
    "/videos/video01.mp4",
    "/videos/video02.mp4",
    "/videos/video03.mp4",
    "/videos/video04.mp4"
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section ref={ref} className="relative min-h-[85vh] md:min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          key={currentVideo} // reloads video when source changes
          src={videos[currentVideo]}
          autoPlay
          loop={false} // false to allow switching to next video
          muted
          playsInline
          onEnded={handleVideoEnd} // switch to next video
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16 md:pt-0">
        <div className={cn("space-y-4 md:space-y-6", isInView ? 'animate-slide-up opacity-100' : 'opacity-0')}>
          <div className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Recycle className="size-3.5 md:size-4" />
            Pioneering Circular Economy in India
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Transforming <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-300">Plastic Waste</span> into Resources
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed animate-fade-in px-2 md:px-0" style={{ animationDelay: '0.5s' }}>
            We collect scrap materials from suppliers across India and recycle them into high-quality plastic granules, creating a transparent and sustainable circular economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4 animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.7s' }}>
            <Button asChild size="lg">
              <Link href="/sell-scrap">
                Sell Your Scrap <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
              <Link href="/buy-scrap">
                Buy Recycled Materials
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
