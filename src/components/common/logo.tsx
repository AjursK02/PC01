import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-md">
        <span className="font-headline text-2xl font-bold text-white">P</span>
      </div>
      <div>
        <h1 className={cn(
          "font-headline text-xl font-bold tracking-tight text-foreground"
        )}>
          Penaca Deployed
        </h1>
        <p className={cn(
          "text-sm -mt-1 text-neutral-400"
        )}>
          Circular Solutions
        </p>
      </div>
    </Link>
  );
}
