import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Toaster } from '@/components/ui/toaster';
// import { Background } from '@/components/common/background';
import { cn } from '@/lib/utils';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("font-body antialiased min-h-screen flex flex-col relative")}>
      
      <Header />
      <main className="flex-1 relative z-10 pt-20 bg-white">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
