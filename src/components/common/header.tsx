"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { MobileNav } from './mobile-nav';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Our Process', href: '/#process' },
  { 
    name: 'Solutions', 
    dropdown: [
      { name: 'For Suppliers', href: '/sell-scrap' },
      { name: 'For Buyers', href: '/buy-scrap' },
    ]
  },
  { name: 'EPR', href: '/#sustainability' },
  { name: 'Contact', href: '/#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "h-20 bg-background/80 shadow-lg backdrop-blur-sm" : "h-24 bg-transparent"
    )}>
      <div 
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-600"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="container max-w-7xl mx-auto h-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="text-base font-semibold text-foreground hover:text-primary transition-colors duration-300">{item.name}</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-3">
                  {item.dropdown.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link href={subItem.href}>{subItem.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.name} href={item.href} className="text-base font-semibold text-foreground hover:text-primary transition-colors duration-300">
                {item.name}
              </Link>
            )
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/sell-scrap">Sell Scrap</Link>
          </Button>
          <Button asChild>
            <Link href="/buy-scrap">Buy Scrap</Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} navItems={navItems} />
    </header>
  );
}
