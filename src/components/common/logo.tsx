import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className, variant }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
        <Image
          src="/logo/PC01 Logo.png"
          alt="Penaca Circular Solutions Logo"
          width={48}
          height={48}
          className="object-contain w-full h-full"
          priority
        />
      </div>
      <div>
        <h1 className={cn(
          "font-headline text-xl font-bold tracking-tight text-foreground"
        )}>
          Penaca
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
