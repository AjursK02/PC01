'use client';

import { Globe, TrendingUp, Users, Droplets } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { AnimatedCounter } from '../ui/animated-counter';
import { Card, CardContent } from '../ui/card';

const stats = [
  {
    icon: Globe,
    value: 400,
    unit: 'M',
    label: 'Global Annual Plastic Waste',
    description: 'Million tons of plastic waste are generated globally each year.',
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10'
  },
  {
    icon: Droplets,
    value: 3.5,
    unit: 'M',
    label: 'India\'s Annual Plastic Waste',
    description: 'Million tons of plastic waste are generated in India annually.',
    decimals: 1,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10'
  },
  {
    icon: Users,
    value: 12,
    unit: 'kg',
    label: 'India\'s Per Capita Waste',
    description: 'The average Indian generates around 12kg of plastic waste per year.',
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10'
  },
  {
    icon: TrendingUp,
    value: 88,
    unit: '%',
    label: 'Energy Saved by Recycling',
    description: 'Recycling plastic can reduce energy consumption by up to 88%.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10'
  }
];

export function WasteStatsSection() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-background/70 backdrop-blur-sm py-10 sm:py-16 md:py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-16", isInView ? "animate-slide-up" : "opacity-0")}>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">The Plastic Waste Challenge</h2>
          <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-neutral-300">
            Understanding the scale of the plastic problem is the first step towards solving it. Here are the numbers that drive our mission.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn('transition-all duration-300', isInView ? 'animate-slide-up' : 'opacity-0' )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="h-full bg-secondary/60 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border-border">
                  <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                    <div className={cn("w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center", stat.bgColor)}>
                        <stat.icon className={cn("w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8", stat.color)} />
                    </div>
                    <p className="font-stats text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        <AnimatedCounter to={stat.value} decimals={stat.decimals || 0} />{stat.unit}
                    </p>
                    <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-neutral-100 mt-2 sm:mt-3 md:mt-4">{stat.label}</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-neutral-400 mt-1 sm:mt-1.5 md:mt-2 leading-tight sm:leading-normal">{stat.description}</p>
                  </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
