'use client';

import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';
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
      <SheetContent side="right" className="w-[320px] bg-white p-0">
        <SheetHeader className="p-4 border-b">
          <Logo />
        </SheetHeader>
        <div className="p-6">
          <nav className="flex flex-col gap-6 mt-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <Accordion type="single" collapsible key={item.name}>
                  <AccordionItem value={item.name} className="border-b-0">
                    <AccordionTrigger className="text-lg font-semibold py-0 hover:no-underline">
                      {item.name}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pl-4">
                      <div className="flex flex-col gap-4">
                        {item.dropdown.map((subItem) => (
                           <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-base text-neutral-600"
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
                  className="text-lg font-semibold text-neutral-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          <div className="mt-12 flex flex-col gap-4">
            <Button asChild variant="outline" className="w-full">
              <Link href="/sell-scrap" onClick={() => setIsOpen(false)}>Sell Scrap</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/buy-scrap" onClick={() => setIsOpen(false)}>Buy Scrap</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}