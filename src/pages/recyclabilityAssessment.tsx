"use client";
import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import { Recycle } from "lucide-react";

export default function RecyclabilityAssessment() {
  return (
    <Layout>
      {/* === Banner Section === */}
      <section className="relative w-screen h-[30vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1610093703375-6d8fd641294b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Recyclability Assessment Banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-black/80 text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 border px-3 md:px-4 py-1 rounded-full border-white/30 bg-yellow-400"
          >
            Recyclability Assessment
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-5xl leading-tight"
          >
            Assessing Plastic Packaging for a Circular Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="mt-4 md:mt-8 text-sm md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed"
          >
            At Penaca, we combine technology, data, and field expertise to redefine how
            recyclability is assessed in India — building measurable impact across the
            entire packaging lifecycle.
          </motion.p>
        </div>
      </section>

      {/* === Content Sections === */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 py-16 md:py-32 space-y-24 md:space-y-52">
        {/* Section 1 */}
        <Section
          title="Holistic Value Chain Understanding"
          subtitle="End-to-end perspective on recycling"
          image="https://images.unsplash.com/photo-1639390325187-98c9534805e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          text={`Our assessments are rooted in a deep understanding of India’s recycling ecosystem from waste collection and segregation to reprocessing and reuse.

This enables us to evaluate packaging across every stage of its life cycle, ensuring accurate, actionable, and locally relevant recyclability insights.`}
        />

        {/* Section 2 */}
        <Section
          title="Risk and Material Compatibility Analysis"
          subtitle="Understanding material behavior and recovery"
          image="https://images.unsplash.com/photo-1717667745830-de42bb75a4fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
          text={`We conduct end-of-life assessments to identify risks and challenges in material recovery, contamination, and processing.

Each material is analyzed to determine its compatibility with India’s existing recycling infrastructure, ensuring optimized recovery pathways.`}
          reverse
        />

        {/* Section 3 */}
        <Section
          title="Recyclability Certification"
          subtitle="Transparent and credible validation"
          image="https://plus.unsplash.com/premium_photo-1737180621224-bdddbe8df9a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          text={`Based on our comprehensive evaluations, Penaca certifies whether packaging materials align with national recycling streams.

Our certification framework ensures that materials can be effectively recovered, reprocessed, and reintroduced into the circular economy.`}
        />

        {/* Section 4 */}
        <Section
          title="Design and Improvement Insights"
          subtitle="Guiding brands toward circular packaging"
          image="https://plus.unsplash.com/premium_photo-1737241774648-4bb74a75f470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
          text={`Penaca collaborates with brands to recommend design-based interventions that enhance packaging recyclability.

Our mission is to help companies transition toward sustainable, circular packaging that reduces waste and promotes responsible resource use.`}
          reverse
        />
      </div>
    </Layout>
  );
}

/* === Reusable Section Component === */
function Section({
  title,
  subtitle,
  image,
  text,
  reverse = false,
}: {
  title: string;
  subtitle: string;
  image: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-10 md:gap-20 lg:gap-28`}
    >
      {/* Text Content */}
      <div className="lg:w-1/2 space-y-4 md:space-y-8">
        {/* Subtitle */}
        <span className="inline-block border border-yellow-400 px-3 md:px-4 py-1 rounded-full uppercase text-xs md:text-sm tracking-widest text-green-900 bg-yellow-300">
          <div className="flex items-center">
            <Recycle className="size-4 md:size-5 text-green-800 mr-2" />
            {subtitle}
          </div>
        </span>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">{title}</h2>

        {/* Paragraph */}
        <p className="text-gray-800 text-sm md:text-lg leading-relaxed whitespace-pre-line">
          {text}
        </p>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 relative w-full h-60 md:h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </motion.section>
  );
}
