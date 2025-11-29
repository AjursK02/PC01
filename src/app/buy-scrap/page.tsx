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
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold text-white">Buy Recycled Materials</h1>
        <p className="mt-4 text-lg text-white">
          Fill out the form below to get a quote for our premium recycled plastic granules.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left side - info points */}
<div className="space-y-8 bg-blue-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-800/30">
  <h2 className="text-3xl font-semibold text-white">Why Choose Us?</h2>

  <div>
    <h3 className="text-xl font-medium text-white mb-1">✅ Tell us exactly what you need</h3>
    <p className="text-white">
      Share your material type, quantity, and specifications — we’ll tailor our offerings to match your exact
      requirements with precision and consistency.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-medium text-white mb-1">💰 Get the best deals on recycled materials</h3>
    <p className="text-white">
      We provide competitive pricing without compromising quality, helping your business save costs while
      supporting sustainable sourcing.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-medium text-white mb-1">🚚 Fast delivery and reliable quality</h3>
    <p className="text-white">
      Our logistics network ensures your order reaches you quickly and safely, backed by consistent, verified
      material quality every time.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-medium text-white mb-1">♻️ Contribute to a greener planet</h3>
    <p className="text-white">
      Every purchase helps reduce plastic waste and promotes a circular economy — together, we can make a
      tangible environmental impact.
    </p>
  </div>
</div>


        {/* Right side - your existing form (unchanged) */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Request a Quote</CardTitle>
            <CardDescription>Let us know your material requirements.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" name="company" placeholder="Your Company Inc." required disabled={isSubmitting} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required disabled={isSubmitting} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 12345 67890" required disabled={isSubmitting} />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="material">Material Type</Label>
                <Select value={material} onValueChange={setMaterial} required disabled={isSubmitting}>
                  <SelectTrigger id="material">
                    <SelectValue placeholder="Select a material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rpe">Recycled Polyethylene (rPE)</SelectItem>
                    <SelectItem value="rpp">Recycled Polypropylene (rPP)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="quantity">Required Quantity (in Tons)</Label>
                <Input id="quantity" name="quantity" type="number" placeholder="e.g., 10" required disabled={isSubmitting} />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="message">Additional Requirements</Label>
                <Textarea id="message" name="message" placeholder="Tell us more about your needs, desired specifications, etc." disabled={isSubmitting} />
              </div>
              
              <div className="sm:col-span-2">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
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
