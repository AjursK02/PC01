'use client';

import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Logo } from './logo';

interface NavItem {
  name: string;
  href?: string;
  dropdown?: { name: string; href: string }[];
}

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  navItems: NavItem[];
}

export function MobileNav({ isOpen, setIsOpen, navItems }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="right"
        className="w-[280px] bg-neutral-900 border-neutral-800 p-0"
        aria-label="Mobile navigation"
      >
        <SheetHeader className="p-3 border-b border-neutral-800">
          <SheetTitle className="sr-only">Main navigation</SheetTitle>
          <Logo variant="dark" />
        </SheetHeader>
        <div className="p-4">
          <nav className="flex flex-col gap-2 mt-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <Accordion key={item.name} type="single" collapsible>
                  <AccordionItem value={item.name} className="border-b-0">
                    <AccordionTrigger className="text-base font-semibold text-neutral-100 py-2 hover:no-underline hover:text-primary">
                      <span>{item.name}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-0">
                      <div className="flex flex-col gap-2 pl-3 border-l border-neutral-700">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-sm text-neutral-400 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  key={item.name}
                  href={item.href || '#'}
                  className="text-base font-semibold text-neutral-100 py-1.5 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            {/* <Button asChild variant="outline" className="w-full h-10 text-sm border-primary text-primary hover:bg-primary/10">
              <Link href="/sell-scrap" onClick={() => setIsOpen(false)}>
                Sell Scrap
              </Link>
            </Button>
            <Button asChild className="w-full h-10 text-sm">
              <Link href="/buy-scrap" onClick={() => setIsOpen(false)}>
                Buy Scrap
              </Link>
            </Button> */}
            <Button asChild variant="outline" className="w-full h-10 text-sm border-primary text-primary hover:bg-primary/10">
              <a href="https://plastixchange.penaca.in/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Sell Scrap
              </a>
            </Button>
            <Button asChild className="w-full h-10 text-sm">
              <a href="https://plastixchange.penaca.in/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Buy Scrap
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}