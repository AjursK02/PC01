'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function PlasticTypes() {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const plastics = [
    {
      title: 'PET (Plastic #1)',
      description:
        'That clear water bottle in your hand? It’s most likely PET — light, transparent, and recyclable.',
      imageUrl: 'https://images.pexels.com/photos/7767813/pexels-photo-7767813.jpeg?_gl=1*oj70pg*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjA3MDM1MjckbzIwJGcxJHQxNzYwNzAzNTc0JGoxMyRsMCRoMA..', // 🧃 Replace with your actual image path
      alt: 'PET plastic water bottle',
    },
    {
      title: 'HDPE (Plastic #2)',
      description:
        'Your shampoo bottle? That’s HDPE — tough, long-lasting, and one of the safest plastics to reuse.',
      imageUrl: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?_gl=1*1drmg1f*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjA3MDM1MjckbzIwJGcxJHQxNzYwNzA0MDkwJGo1OSRsMCRoMA..', // 🧴 Replace with your actual image path
      alt: 'HDPE shampoo bottle',
    },
    {
      title: 'LDPE (Plastic #4)',
      description:
        'Those grocery bags? Probably LDPE — soft and flexible, but not always recyclable everywhere.',
      imageUrl: 'https://images.pexels.com/photos/3900506/pexels-photo-3900506.jpeg?_gl=1*107rxs7*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjA3MDM1MjckbzIwJGcxJHQxNzYwNzA0MjEwJGoxMyRsMCRoMA..', // 🛍️ Replace with your actual image path
      alt: 'LDPE grocery bags',
    },
    {
      title: 'PS (Plastic #6)',
      description:
        'The toys or CD cases lying around? Often PS — lightweight, but not very eco-friendly.',
      imageUrl: 'https://images.pexels.com/photos/27196535/pexels-photo-27196535.jpeg?_gl=1*fpgfcp*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjA3MDM1MjckbzIwJGcxJHQxNzYwNzA0MzUxJGo0JGwwJGgw', // 🧸 Replace with your actual image path
      alt: 'PS toys and CD cases',
    },
  ];

  return (
    <section
      id="plastics-info"
      ref={ref}
      className="bg-background/80 backdrop-blur-sm py-24 sm:py-32"
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Intro Section */}
        <div
          className={cn(
            'max-w-3xl mx-auto mb-16',
            isInView ? 'animate-fade-in' : 'opacity-0'
          )}
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-400 uppercase mb-4">
            Know Your Plastics
          </div>

          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            🌍 Do You Know What Your Everyday Plastics Are Made Of?
          </h2>

          <p className="mt-4 text-lg text-neutral-300">
            Do you know the water bottle you drink from or the shampoo bottle
            you use every day isn’t made from the same plastic? Some plastics
            can be recycled and reused easily — while others can harm the planet
            for hundreds of years! ♻️
          </p>
        </div>

        {/* Plastics Cards */}
        <div
          className={cn(
            'grid grid-cols-1 sm:grid-cols-2 gap-8 text-left',
            isInView ? 'animate-slide-up' : 'opacity-0'
          )}
        >
          {plastics.map((item) => (
            <div
              key={item.title}
              className="bg-secondary/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-5">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-headline">
                {item.title}
              </h3>
              <p className="text-neutral-300 text-base">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Explore Button (Next.js Route) */}
        <div className="mt-16 flex justify-center">
          <Link href="/plastics" passHref>
            <Button size="lg" className="gap-2 text-base font-semibold">
              🌱 Explore All Plastics <ArrowRightCircle className="size-5" />
            </Button>
          </Link>
        </div>

        <p className="mt-4 text-neutral-400 text-sm">
          Learn how each plastic affects the environment and what you can do to recycle smarter.
        </p>
      </div>
    </section>
  );
}
