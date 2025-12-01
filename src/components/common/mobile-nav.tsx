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
        className="w-[320px] bg-white p-0"
        aria-label="Mobile navigation"
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="sr-only">Main navigation</SheetTitle>
          <Logo />
        </SheetHeader>
        <div className="p-6">
          <nav className="flex flex-col gap-4 mt-6">
            {navItems.map((item) =>
              item.dropdown ? (
                <Accordion key={item.name} type="single" collapsible>
                  <AccordionItem value={item.name} className="border-b-0">
                    <AccordionTrigger className="text-lg font-semibold text-neutral-900 py-2 hover:no-underline">
                      <span>{item.name}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-0">
                      <div className="flex flex-col gap-3 pl-3 border-l border-neutral-200">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-base text-neutral-700"
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
                  className="text-lg font-semibold text-neutral-800 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
          <div className="mt-10 flex flex-col gap-4">
            <Button asChild variant="outline" className="w-full">
              <Link href="/sell-scrap" onClick={() => setIsOpen(false)}>
                Sell Scrap
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/buy-scrap" onClick={() => setIsOpen(false)}>
                Buy Scrap
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}