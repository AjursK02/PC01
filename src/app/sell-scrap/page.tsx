'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function SellScrapPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [materialType, setMaterialType] = useState<string>('');
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
      const address = formData.get('address') as string;
      
      // Map material type values to proper display names
      const materialTypeMap: { [key: string]: string } = {
        'hdpe': 'HDPE',
        'ldpe': 'LDPE',
        'pp': 'PP',
        'pet': 'PET',
        'other': 'Other'
      };
      const materialTypeDisplay = materialType ? (materialTypeMap[materialType] || materialType) : '';
      
      // Create ordered object with form_type first
      const orderedData: { [key: string]: string } = {
        'access_key': 'c9385d2c-b811-41a9-acb0-b528300d6208',
        'subject': 'Sell Scrap Application - Penaca Circular Solutions',
        'Form Type': 'Sell Scrap',
        'Name': name || '',
        'Company': company || '',
        'Email': email || '',
        'Phone': phone || '',
        'Material Type': materialTypeDisplay,
        'Quantity': quantity || '',
        'Address': address || ''
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
        setMaterialType('');
        
        // Show success toast
        toast({
          title: "Application Submitted Successfully!",
          description: "We'll contact you soon.",
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
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* --- Left Side --- */}
        <div className="bg-blue-900/40 shadow-lg rounded-2xl p-10">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-white leading-tight">
            Turn Everyday Waste into Value — Sell Scrap Online with <span className="text-green-600">Penaca!</span>
          </h2>
          <p className="mt-6 text-lg text-white">
            Join our mission to make recycling profitable and sustainable. Whether you’re an individual
            or a business, we help you turn waste materials into valuable resources while protecting
            the planet.
          </p>
        </div>

        {/* --- Right Side Form --- */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Supplier Information</CardTitle>
            <CardDescription>Fill out the form to become a registered supplier.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" name="company" placeholder="Your Company Inc." disabled={isSubmitting} />
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
                <Label htmlFor="material-type">Type of Scrap Material</Label>
                <Select value={materialType} onValueChange={setMaterialType} required disabled={isSubmitting}>
                  <SelectTrigger id="material-type">
                    <SelectValue placeholder="Select material types you supply" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hdpe">HDPE</SelectItem>
                    <SelectItem value="ldpe">LDPE</SelectItem>
                    <SelectItem value="pp">PP</SelectItem>
                    <SelectItem value="pet">PET</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="quantity">Average Monthly Quantity (in Tons)</Label>
                <Input id="quantity" name="quantity" type="number" placeholder="e.g., 5" required disabled={isSubmitting} />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="address">Pickup Address</Label>
                <Textarea id="address" name="address" placeholder="Enter your full pickup address" required disabled={isSubmitting} />
              </div>
              
              <div className="sm:col-span-2">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
