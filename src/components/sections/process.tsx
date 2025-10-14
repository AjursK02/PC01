'use client';

import { Package, Sparkles, CheckCircle, Truck } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const processSteps = [
  {
    step: 1,
    title: 'Collection',
    description: 'We collect plastic scrap from suppliers across multiple states through our network of aggregators and direct partnerships.',
    features: ['Multi-state coverage', 'Fair pricing', 'Timely payment'],
    icon: Package,
    gradient: 'from-primary/80 to-primary-600'
  },
  {
    step: 2,
    title: 'Recycling',
    description: 'Advanced washing and processing technology converts waste plastic into high-quality granules and flakes.',
    features: ['Quality sorting', 'Advanced washing', 'ISO standards'],
    icon: Sparkles,
    gradient: 'from-purple-500/80 to-purple-700'
  },
  {
    step: 3,
    title: 'Quality Control',
    description: 'Rigorous quality checks ensure our recycled materials meet international standards for safety and performance.',
    features: ['Lab testing', 'Certifications', 'Traceability'],
    icon: CheckCircle,
    gradient: 'from-primary/80 to-primary-600'
  },
  {
    step: 4,
    title: 'Supply',
    description: 'We supply premium recycled plastic materials to manufacturers and brands committed to sustainability.',
    features: ['Consistent supply', 'Custom grades', 'On-time delivery'],
    icon: Truck,
    gradient: 'from-purple-500/80 to-purple-700'
  }
];

export function ProcessSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <section id="process" ref={ref} className="bg-background py-24 sm:py-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center max-w-4xl mx-auto mb-16", isInView ? "animate-fade-in" : "opacity-0")}>
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-400 uppercase mb-4">Our Process</div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">From Waste to Worth</h2>
          <p className="mt-4 text-lg text-neutral-300">
            Our end-to-end recycling process transforms plastic waste into valuable resources through innovation, technology, and transparency.
          </p>
        </div>

        <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 hidden lg:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
                <div key={step.step} className={cn("z-10", isInView ? 'animate-slide-up' : 'opacity-0')} style={{ animationDelay: `${index * 0.15}s` }}>
                <Card className="h-full bg-secondary shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden border border-border">
                    <CardContent className="p-8 relative">
                    <div className="absolute -top-4 -left-4 font-stats text-8xl font-extrabold text-white/5">
                        0{step.step}
                    </div>
                    <div className="relative flex justify-end mb-6">
                        <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br", step.gradient)}>
                        <step.icon className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-neutral-300 mb-6 text-sm leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                        {step.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                            <span className="text-neutral-200 font-medium">{feature}</span>
                        </li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>
                </div>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
}
