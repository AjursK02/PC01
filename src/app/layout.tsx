import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { Background } from '@/components/common/background';

export const metadata: Metadata = {
  title: 'Penaca Circular Solutions',
  description: 'Transforming Plastic Waste into Sustainable Resources',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        "font-body antialiased"
      )}>
        <Background />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
