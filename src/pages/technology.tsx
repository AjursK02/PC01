"use client";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import { Recycle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Technology() {
  const images = [
      "https://thumbs.dreamstime.com/b/recycling-plant-utilizes-robotic-arms-sorting-processing-plastic-waste-modern-facility-daytime-robotic-arms-362123144.jpg",
      "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/EWA/iStock-2065996489.jpg",
      "https://plus.unsplash.com/premium_photo-1682144509812-4734c830b486?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1719754519931-0e5763a44d36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      "https://plus.unsplash.com/premium_photo-1683121758343-8da46d7b2c9e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ];
  
    const [currentImage, setCurrentImage] = useState(0);
  
    // Change image every 2.5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 2500);
      return () => clearInterval(interval);
    }, [images.length]);
  return (
    <Layout>
      {/* === Banner Section === */}
      {/* <section className="relative w-screen h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://media.istockphoto.com/id/536215563/photo/color-polythene-fabric.jpg?s=2048x2048&w=is&k=20&c=-M5_qtq7lbwbNV7E1ZeJ3mv7YyS2ntTHLAXaJk500XU="
          alt="Technology Banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-black/80 text-sm tracking-widest uppercase mb-6 border px-4 py-1 rounded-full border-white/30 bg-yellow-400"
          >
            Our Technology
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white max-w-5xl leading-tight"
          >
            Building the Future of Plastic Recycling
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
          >
            At Penaca, we are redefining how plastic recycling is done in India — creating
            a technology-driven recycling system that delivers high-quality recycled
            materials with minimal environmental impact.
          </motion.p>
        </div>
      </section> */}

      <section className="relative w-screen h-[90vh] flex items-center justify-center overflow-hidden">
      {/* === Animated Image Background === */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImage]}
            alt="Polyethylene Banner"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* === Text Overlay === */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-black/80 text-sm tracking-widest uppercase mb-6 border px-4 py-1 rounded-full border-white/30 bg-yellow-400"
        >
          Our Technology
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-extrabold text-white max-w-5xl leading-tight"
        >
          Building the Future of Plastic Recycling
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
        >
          At Penaca, we are redefining how plastic recycling is done in India — creating
            a technology-driven recycling system that delivers high-quality recycled
            materials with minimal environmental impact.
        </motion.p>
      </div>
    </section>

      {/* === Main Sections === */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-32 space-y-52">
        {/* Section 1 */}
        <Section
          title="Proprietary hot wash for super-clean plastic flakes"
          subtitle="Aiming for breakthrough cleaning technology"
          image="https://plasticrecyclingconference.com/wp-content/uploads/2024/12/image-10-1024x683.png"
          text={`We aim to develop a proprietary hot wash process capable of removing surface contaminants from post-consumer plastic waste with exceptional efficiency eliminating oils, adhesives, inks, labels, and other residues that affect purity and performance.

          By leveraging advanced chemistry and precision temperature control, our system will loosen contaminants without damaging the base polymer, producing super-clean plastic flakes ready for reuse across rigid and flexible plastics, including FMCG packaging and industrial components.`}
        />

        {/* Section 2 */}
        <Section
          title="Scientific and Controlled Recycling"
          subtitle="Technology-backed quality control"
          image="https://media.istockphoto.com/id/2219207545/photo/water-plant-engineer-inspecting-industrial-pipes-and-holding-clipboard.jpg?s=2048x2048&w=is&k=20&c=VvtVBRSZpmodkVEjxc1R82rH0wwHK0H9eMqWfsLaSkU="
          text={`Penaca’s recycling lines will integrate automated color sorting and intelligent blending algorithms to ensure consistent color and quality across every batch.

          We use state-of-the-art extruders enabling gentle melting, fine filtration, and reduced volatile emissions, resulting in durable, safe, and application-ready recycled resins.`}
          reverse
        />

        {/* Section 3 */}
        <Section
          title="Targeting Odor-Free, Food-Grade Resins"
          subtitle="Raising the standard for recycled materials"
          image="https://www.cm-today.com/uploads/docs/plastic%20landscape.png"
          text={`Our research roadmap includes the development of a USFDA-compliant deodorization system designed to remove even the most persistent organic compounds from recycled plastics, making Penaca’s resins suitable for food-contact and sensitive packaging applications.`}
        />

        {/* Section 4 */}
        <Section
          title="Sustainable and Responsible Systems"
          subtitle="Building a truly circular process"
          image="https://jiantai.io/wp-content/uploads/2024/09/plastic-bottle-recycling-machine-near-me-1-1024x585.jpg"
          text={`Sustainability is central to our operations. Penaca aims to establish an in-house water recycling and management system to reduce groundwater consumption and ensure closed-loop recycling with minimal environmental footprint.

          Every batch will be traceable, every product circular, and every process ethical and responsible.`}
          reverse
        />

        {/* Section 5 */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-center md:text-left"
        >
          <span className="inline-block border border-yellow-400 px-4 py-1 rounded-full uppercase text-sm tracking-widest text-green-900 bg-yellow-300">
            Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            The Penaca Promise
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed max-w-4xl mx-auto md:mx-0">
            While our technology is in development, our commitment to innovation,
            quality, and sustainability remains steadfast. We’re laying the foundation
            for a new standard in recycling clean, consistent, and circular.
          </p>
        </motion.section>
      </div>
    </Layout>
  );
}

/* === Reusable Section Component === */
function Section({ title, subtitle, image, text, reverse = false }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-20 lg:gap-28`}
    >
      <div className="lg:w-1/2 space-y-8">
        {/* Bordered Title Badge */}
        <span className="inline-block border border-yellow-400 px-4 py-1 rounded-full uppercase text-sm tracking-widest text-green-900 bg-yellow-300">
          <div className="flex">
            <Recycle className="size-5 text-green-800 pr-1"/>
            {subtitle}
            </div>
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
          {title}
        </h2>

        {/* Paragraph */}
        <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
          {text}
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 relative w-full h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </motion.section>
  );
}
