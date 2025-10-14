'use client';

import Image from 'next/image';
import { Package, FileText, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { placeholderImages } from '@/lib/placeholder-images';

const materials = [
  {
    id: 'rpe',
    name: 'rPE',
    title: 'Recycled Polyethylene (rPE)',
    types: ['rHDPE', 'rLDPE', 'rLLDPE'],
    description: "High-quality recycled polyethylene suitable for various packaging applications, offering strength and versatility.",
    applications: ['Bottles and containers', 'Packaging films', 'Industrial containers', 'Household products'],
    specifications: [
      { label: 'Melt Flow Index', value: '0.3-10 g/10min' },
      { label: 'Density', value: '0.92-0.96 g/cm³' },
      { label: 'Tensile Strength', value: '20-30 MPa' },
      { label: 'Certification', value: 'ISO 9001, FDA Approved' },
    ],
    imageId: 'product-rpe',
  },
  {
    id: 'rpp',
    name: 'rPP',
    title: 'Recycled Polypropylene (rPP)',
    types: ['Homo-polymer', 'Co-polymer', 'Random Co-polymer'],
    description: "Premium recycled polypropylene known for its durability and heat resistance, ideal for diverse industrial uses.",
    applications: ['Automotive components', 'Consumer goods', 'Packaging solutions', 'Textile fibers'],
    specifications: [
      { label: 'Melt Flow Index', value: '1-35 g/10min' },
      { label: 'Density', value: '0.89-0.91 g/cm³' },
      { label: 'Tensile Strength', value: '25-40 MPa' },
      { label: 'Certification', value: 'ISO Certified' },
    ],
    imageId: 'product-rpp',
  },
];

export function MaterialsSection() {
  const [ref, isInView] = useInView<HTMLDivElement>();
  
  return (
    <section id="products" ref={ref} className="bg-background/80 backdrop-blur-sm py-24 sm:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center max-w-3xl mx-auto mb-16", isInView ? "animate-fade-in" : "opacity-0")}>
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-400 uppercase mb-4">Our Products</div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Premium Recycled Materials</h2>
          <p className="mt-4 text-lg text-neutral-300">High-quality recycled plastic granules that match virgin plastic performance while reducing environmental impact.</p>
        </div>

        <Tabs defaultValue="rpe" className={cn("w-full", isInView ? "animate-slide-up" : "opacity-0")}>
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-auto bg-secondary shadow-sm rounded-xl p-1.5">
            <TabsTrigger value="rpe" className="py-3 text-base font-semibold rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg">rPE</TabsTrigger>
            <TabsTrigger value="rpp" className="py-3 text-base font-semibold rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg">rPP</TabsTrigger>
          </TabsList>
          
          {materials.map((material) => {
            const image = placeholderImages.find(p => p.id === material.imageId);
            return (
              <TabsContent key={material.id} value={material.id} className="mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="font-headline text-4xl font-bold text-foreground">{material.title}</h3>
                    <p className="mt-4 text-lg text-neutral-300">{material.description}</p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {material.types.map(type => (
                        <span key={type} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary-400">{type}</span>
                      ))}
                    </div>

                    <div className="mt-8 space-y-8">
                       <div>
                         <h4 className="flex items-center gap-2 text-xl font-semibold font-headline"><Package className="size-5 text-primary"/> Applications</h4>
                         <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4">
                            {material.applications.map(app => (
                                <div key={app} className="flex items-center gap-2">
                                    <ArrowRight className="size-4 text-primary shrink-0"/>
                                    <span className="text-neutral-200">{app}</span>
                                </div>
                            ))}
                         </div>
                       </div>
                       
                       <div>
                         <h4 className="flex items-center gap-2 text-xl font-semibold font-headline"><FileText className="size-5 text-primary"/> Specifications</h4>
                         <Card className="mt-4 bg-secondary/80 shadow-sm border-border">
                             <CardContent className="p-6 space-y-3">
                                 {material.specifications.map(spec => (
                                     <div key={spec.label} className="flex justify-between items-center text-sm border-b border-border pb-3 last:border-b-0 last:pb-0">
                                         <span className="text-neutral-400 font-medium">{spec.label}</span>
                                         <span className="font-semibold text-foreground">{spec.value}</span>
                                     </div>
                                 ))}
                             </CardContent>
                         </Card>
                       </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button>Request Sample</Button>
                      <Button variant="outline">Download Datasheet</Button>
                    </div>
                  </div>
                  
                  <div className="relative group">
                     <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-purple-500/10 p-6 shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                        <div className="relative w-full h-full bg-secondary/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-primary/20">
                            {image ? (
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover rounded-xl"
                                    data-ai-hint={image.imageHint}
                                />
                            ) : (
                                <div className="text-center text-primary/50">
                                    <Package className="size-32 mx-auto"/>
                                    <p className="font-semibold mt-4">{material.title}</p>
                                </div>
                            )}
                        </div>
                     </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
