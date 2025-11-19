import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Logo } from './logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300" id="contact">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Logo variant="dark" />
            <p className="mt-4 text-sm text-neutral-400 max-w-sm">
              Penaca Circular Solutions is pioneering the circular economy in India by transforming plastic waste into high-quality, sustainable resources.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-primary" />
                <span className="text-sm">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <span className="text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <span className="text-sm">contact@penacacircular.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/#about" className="text-sm hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/technology" className="text-sm hover:text-primary transition-colors">Technology</Link></li>
              {/* <li><Link href="/#sustainability" className="text-sm hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Careers</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Solutions</h3>
            <ul className="mt-4 space-y-2">
              {/* <li><Link href="#" className="text-sm hover:text-primary transition-colors">For Suppliers</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">For Buyers</Link></li>
              <li><Link href="/#products" className="text-sm hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">EPR Credits</Link></li> */}
              <li><Link href="/polyEthylene" className="text-sm hover:text-primary transition-colors">rPE</Link></li>
              <li><Link href="/polyPropylene" className="text-sm hover:text-primary transition-colors">rPP</Link></li>
              <li><Link href="/epr" className="text-sm hover:text-primary transition-colors">EPR and Plastic Credits</Link></li>
              <li><Link href="/recyclabilityAssessment" className="text-sm hover:text-primary transition-colors">Recyclability Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Recyclopedia</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/blogs" className="text-sm hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/caseStudies" className="text-sm hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/#contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <h3 className="font-headline text-lg font-semibold text-white">Stay Updated</h3>
          <p className="mt-2 text-sm text-neutral-400">Subscribe to our newsletter for the latest updates.</p>
          <form className="mt-4 flex flex-col sm:flex-row items-center gap-2 max-w-md">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
              aria-label="Email for newsletter"
            />
            <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
          </form>
        </div>
        
        <Separator className="my-8 bg-neutral-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-neutral-400 text-center md:text-left">
                © {new Date().getFullYear()} Penaca Circular Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <Link href="#" aria-label="LinkedIn" className="group">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-primary transition-all duration-300 flex items-center justify-center">
                        <Linkedin className="size-5 text-white" />
                    </div>
                </Link>
                <Link href="#" aria-label="Twitter" className="group">
                     <div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-primary transition-all duration-300 flex items-center justify-center">
                        <Twitter className="size-5 text-white" />
                    </div>
                </Link>
                <Link href="#" aria-label="Facebook" className="group">
                     <div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-primary transition-all duration-300 flex items-center justify-center">
                        <Facebook className="size-5 text-white" />
                    </div>
                </Link>
                <Link href="#" aria-label="Instagram" className="group">
                     <div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-primary transition-all duration-300 flex items-center justify-center">
                        <Instagram className="size-5 text-white" />
                    </div>
                </Link>
            </div>
            <div className="flex gap-4 text-sm text-neutral-400">
                <Link href="/privacyPolicy" className="hover:text-primary transition-colors">Terms and Privacy</Link>
                {/* <span className="text-neutral-600">|</span>
                <Link href="#" className="hover:text-primary transition-colors">Terms</Link> */}
            </div>
        </div>
      </div>
    </footer>
  );
}
