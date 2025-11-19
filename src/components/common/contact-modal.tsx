'use client';

import { useState, useEffect } from 'react';
import { X, Leaf, Recycle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ContactModalProps {
  delaySeconds?: number; // Time before showing modal (default: 30 seconds)
}

export function ContactModal({ 
  delaySeconds = 5
}: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if modal was already shown in this session
    const modalShown = sessionStorage.getItem('contactModalShown');
    if (modalShown === 'true') {
      return;
    }

    // Show after delay
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('contactModalShown', 'true');
      }
    }, delaySeconds * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delaySeconds, hasShown]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    // You can add API call here
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl w-full p-0 gap-0 overflow-hidden sm:rounded-lg [&>button]:hidden">
        {/* DialogTitle for accessibility - visually hidden */}
        <DialogTitle className="sr-only">Contact Us</DialogTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 relative">
          {/* Left Section - Green Promotional */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20"></div>
              <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-white/20"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-white/20"></div>
              <div className="absolute bottom-40 right-10 w-12 h-12 rounded-full bg-white/20"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                  <span className="font-headline text-2xl font-bold text-white">P</span>
                </div>
                <div>
                  <h1 className="font-headline text-xl font-bold tracking-tight text-white">
                    Penaca
                  </h1>
                  <p className="text-sm -mt-1 text-white/80">
                    Circular Solutions
                  </p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <h2 className="text-2xl lg:text-3xl font-headline font-bold text-white leading-tight">
                  Building a sustainable future through circular economy
                </h2>
                
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Recycle className="w-4 h-4 text-white" />
                  <span className="text-white font-semibold text-sm">5000+ Tons Recycled</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6">
              <p className="text-white/90 text-base font-medium">
                Transforming waste into valuable resources
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-6 lg:p-8 flex flex-col relative">
            {/* Close Button - Top Right Inside White Box */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-30 w-8 h-8 rounded-full bg-white hover:bg-neutral-50 flex items-center justify-center shadow-md border border-neutral-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-neutral-700" />
            </button>
            
            <div className="mb-4">
              <h3 className="text-xl lg:text-2xl font-headline font-bold text-neutral-900">
                Need Assistance? Let's Talk!
              </h3>
              <p className="text-neutral-600 mt-1 text-sm">
                Share your details and our team will contact you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <Input 
                    id="name" 
                    placeholder="Full Name" 
                    required
                    className="bg-white h-10 border-[1.5px] text-neutral-900"
                  />
                </div>
                <div>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    className="bg-white h-10 border-[1.5px] text-neutral-900"
                  />
                </div>
              </div>

              <div>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="bg-white h-10 border-[1.5px] text-neutral-900"
                />
              </div>

              <div>
                <Select>
                  <SelectTrigger id="department" className="bg-white h-10 border-[1.5px] [&>span]:text-neutral-900 [&[data-placeholder]>span]:text-neutral-500 focus:ring-2 focus:ring-ring/20 focus:ring-offset-0 focus:border-primary">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Customer Support</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="partnerships">Partnerships</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea 
                  id="message" 
                  placeholder="Your Message"
                  className="min-h-[100px] bg-white resize-none border-[1.5px] text-neutral-900 focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-0 focus-visible:border-primary"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-600 text-white mt-2"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

