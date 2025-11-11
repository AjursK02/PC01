import { HeroSection } from '@/components/sections/hero';
import { StatsSection } from '@/components/sections/stats';
import { ProcessSection } from '@/components/sections/process';
import { MaterialsSection } from '@/components/sections/materials';
import { WasteStatsSection } from '@/components/sections/waste-stats';
// import { PlasticTypes } from '@/components/sections/plasticTypes';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WasteStatsSection />
      <StatsSection />
      <ProcessSection />
      <MaterialsSection />
    </>
  );
}