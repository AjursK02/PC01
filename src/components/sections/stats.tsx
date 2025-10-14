'use client';

import { Package, Users, Recycle, Leaf } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const stats = [
  {
    icon: Package,
    value: 5000,
    suffix: '+',
    label: 'Tons Recycled',
    description: 'Plastic waste diverted from landfills',
    color: 'primary'
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Suppliers Connected',
    description: 'Across multiple states',
    color: 'accent'
  },
  {
    icon: Recycle,
    value: 95,
    suffix: '%',
    label: 'Recycling Efficiency',
    description: 'Industry-leading conversion rate',
    color: 'primary'
  },
  {
    icon: Leaf,
    value: 25000,
    suffix: '+',
    label: 'Tons CO₂ Saved',
    description: 'Compared to virgin plastic',
    color: 'accent'
  },
];

export function StatsSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="bg-background text-white py-24 sm:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center max-w-3xl mx-auto", isInView ? "animate-fade-in" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Impact in Numbers</h2>
          <p className="mt-4 text-lg text-neutral-300">
            Building a sustainable future through measurable environmental impact.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                'bg-secondary/60 border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-primary/20 shadow-lg',
                isInView ? 'animate-slide-up' : 'opacity-0'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn(
                  "w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center",
                  stat.color === 'primary' ? 'bg-primary/10' : 'bg-purple-500/10'
              )}>
                <stat.icon className={cn(
                    "w-8 h-8",
                    stat.color === 'primary' ? 'text-primary-400' : 'text-purple-400'
                )} />
              </div>
              <p className="font-stats text-5xl font-bold">
                <AnimatedCounter to={stat.value} />
                {stat.suffix}
              </p>
              <h3 className="text-xl font-semibold mt-2">{stat.label}</h3>
              <p className="text-sm text-neutral-400 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
