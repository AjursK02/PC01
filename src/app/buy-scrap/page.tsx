'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function BuyScrapPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [material, setMaterial] = useState<string>('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Get form values in correct order
      const name = formData.get('name') as string;
      const company = formData.get('company') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const quantity = formData.get('quantity') as string;
      const message = formData.get('message') as string;
      
      // Map material values to proper display names
      const materialMap: { [key: string]: string } = {
        'rpe': 'Recycled Polyethylene (rPE)',
        'rpp': 'Recycled Polypropylene (rPP)'
      };
      const materialDisplay = material ? (materialMap[material] || material) : '';
      
      // Create ordered object with form_type first
      const orderedData: { [key: string]: string } = {
        'access_key': 'c9385d2c-b811-41a9-acb0-b528300d6208',
        'subject': 'Buy Scrap Request - Penaca Circular Solutions',
        'Form Type': 'Buy Scrap',
        'Name': name || '',
        'Company': company || '',
        'Email': email || '',
        'Phone': phone || '',
        'Material': materialDisplay,
        'Quantity': quantity || '',
        'Message': message || ''
      };
      
      const json = JSON.stringify(orderedData);

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        // Reset form and state
        (e.target as HTMLFormElement).reset();
        setMaterial('');
        
        // Show success toast
        toast({
          title: "Request Submitted Successfully!",
          description: "We'll get back to you soon with a quote.",
          className: "bg-green-50 border-green-200 text-green-900 border-l-4 border-l-primary-500",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "Something went wrong. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white">Buy Recycled Materials</h1>
        <p className="mt-3 md:mt-4 text-sm md:text-lg text-white">
          Fill out the form below to get a quote for our premium recycled plastic granules.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {/* Left side - info points */}
<div className="space-y-5 md:space-y-8 bg-blue-900/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl shadow-lg border border-blue-800/30">
  <h2 className="text-xl md:text-3xl font-semibold text-white">Why Choose Us?</h2>

  <div>
    <h3 className="text-base md:text-xl font-medium text-white mb-1">✅ Tell us exactly what you need</h3>
    <p className="text-sm md:text-base text-white">
      Share your material type, quantity, and specifications — we’ll tailor our offerings to match your exact
      requirements with precision and consistency.
    </p>
  </div>

  <div>
    <h3 className="text-base md:text-xl font-medium text-white mb-1">💰 Get the best deals on recycled materials</h3>
    <p className="text-sm md:text-base text-white">
      We provide competitive pricing without compromising quality, helping your business save costs while
      supporting sustainable sourcing.
    </p>
  </div>

  <div>
    <h3 className="text-base md:text-xl font-medium text-white mb-1">🚚 Fast delivery and reliable quality</h3>
    <p className="text-sm md:text-base text-white">
      Our logistics network ensures your order reaches you quickly and safely, backed by consistent, verified
      material quality every time.
    </p>
  </div>

  <div>
    <h3 className="text-base md:text-xl font-medium text-white mb-1">♻️ Contribute to a greener planet</h3>
    <p className="text-sm md:text-base text-white">
      Every purchase helps reduce plastic waste and promotes a circular economy — together, we can make a
      tangible environmental impact.
    </p>
  </div>
</div>


        {/* Right side - your existing form (unchanged) */}
        <Card className="shadow-lg">
          <CardHeader className="px-4 md:px-6">
            <CardTitle className="text-lg md:text-xl">Request a Quote</CardTitle>
            <CardDescription className="text-xs md:text-sm">Let us know your material requirements.</CardDescription>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="name" className="text-sm md:text-base">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} className="text-sm md:text-base" />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="company" className="text-sm md:text-base">Company Name</Label>
                <Input id="company" name="company" placeholder="Your Company Inc." required disabled={isSubmitting} className="text-sm md:text-base" />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required disabled={isSubmitting} className="text-sm md:text-base" />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="phone" className="text-sm md:text-base">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 12345 67890" required disabled={isSubmitting} className="text-sm md:text-base" />
              </div>
              <div className="sm:col-span-2 space-y-1.5 md:space-y-2">
                <Label htmlFor="material" className="text-sm md:text-base">Material Type</Label>
                <Select value={material} onValueChange={setMaterial} required disabled={isSubmitting}>
                  <SelectTrigger id="material" className="text-sm md:text-base">
                    <SelectValue placeholder="Select a material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rpe">Recycled Polyethylene (rPE)</SelectItem>
                    <SelectItem value="rpp">Recycled Polypropylene (rPP)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2 space-y-1.5 md:space-y-2">
                <Label htmlFor="quantity" className="text-sm md:text-base">Required Quantity (in Tons)</Label>
                <Input id="quantity" name="quantity" type="number" placeholder="e.g., 10" required disabled={isSubmitting} className="text-sm md:text-base" />
              </div>
              <div className="sm:col-span-2 space-y-1.5 md:space-y-2">
                <Label htmlFor="message" className="text-sm md:text-base">Additional Requirements</Label>
                <Textarea id="message" name="message" placeholder="Tell us more about your needs, desired specifications, etc." disabled={isSubmitting} className="text-sm md:text-base" />
              </div>
              
              <div className="sm:col-span-2">
                <Button 
                  type="submit" 
                  className="w-full text-sm h-10 md:h-12 md:text-base" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
