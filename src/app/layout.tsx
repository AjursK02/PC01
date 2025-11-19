import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { Background } from '@/components/common/background';
import { WhatsAppButton } from '@/components/common/whatsapp-button';
import { ContactModal } from '@/components/common/contact-modal';

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
        <WhatsAppButton 
          phoneNumber="+91 12345 67890" 
          message="Hello, I visited the Penaca Circular Solutions website and I'm interested in your sustainable plastic solutions. Could you help me with more details?"
        />
        <ContactModal delaySeconds={60} />
        <Toaster />
      </body>
    </html>
  );
}
