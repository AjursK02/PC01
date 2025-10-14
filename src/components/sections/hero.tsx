'use client';

import { ArrowRight, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function HeroSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video
          src="https://videos.pexels.com/video-files/5529528/5529528-hd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className={cn("space-y-6", isInView ? 'animate-slide-up opacity-100' : 'opacity-0')}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Recycle className="size-4" />
            Pioneering Circular Economy in India
          </div>

          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Transforming <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-300">Plastic Waste</span> into Resources
          </h1>

          <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            We collect scrap materials from suppliers across India and recycle them into high-quality plastic granules, creating a transparent and sustainable circular economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
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
