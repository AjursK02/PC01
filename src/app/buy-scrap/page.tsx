import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function BuyScrapPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold text-neutral-900">Buy Recycled Materials</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Fill out the form below to get a quote for our premium recycled plastic granules.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Request a Quote</CardTitle>
          <CardDescription>Let us know your material requirements.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Your Company Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 12345 67890" />
            </div>
            <div className="sm:col-span-2 space-y-2">
              <Label htmlFor="material">Material Type</Label>
              <Select>
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
              <Input id="quantity" type="number" placeholder="e.g., 10" />
            </div>
            <div className="sm:col-span-2 space-y-2">
              <Label htmlFor="message">Additional Requirements</Label>
              <Textarea id="message" placeholder="Tell us more about your needs, desired specifications, etc." />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full">Submit Request</Button>
        </CardFooter>
      </Card>
    </div>
  );
}