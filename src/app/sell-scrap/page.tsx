import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function SellScrapPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold text-neutral-900">Sell Your Scrap</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Partner with us to monetize your plastic waste and contribute to a circular economy.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Supplier Information</CardTitle>
          <CardDescription>Fill out the form to become a registered supplier.</CardDescription>
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
              <Label htmlFor="material-type">Type of Scrap Material</Label>
               <Select>
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
              <Input id="quantity" type="number" placeholder="e.g., 5" />
            </div>
             <div className="sm:col-span-2 space-y-2">
              <Label htmlFor="address">Pickup Address</Label>
              <Textarea id="address" placeholder="Enter your full pickup address" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full">Submit Application</Button>
        </CardFooter>
      </Card>
    </div>
  );
}