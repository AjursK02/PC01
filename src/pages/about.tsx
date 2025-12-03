"use client";
import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      {/* === Banner Section === */}
      <section className="relative w-screen h-[30vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg"
            alt="About Banner"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-black/80 text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 border px-3 py-1 md:px-4 rounded-full border-white/30 bg-yellow-400"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-5xl leading-tight"
          >
            Building India’s Most Responsible Recycling Ecosystem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="mt-4 md:mt-8 text-sm md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed px-2"
          >
            Penaca is committed to transforming plastic waste into valuable
            resources through responsible, technology-driven recycling.
          </motion.p>
        </div>
      </section>

      
      {/* ===== Enhanced Three Sections (No Images) ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 py-16 md:py-32 space-y-20 md:space-y-40">

        {/* === SECTION 1 === */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 bg-gradient-to-br from-blue-200 to-blue-400 shadow-xl"
        >
          {/* Decorative Shape */}
          <div className="absolute -top-5 md:-top-10 -left-5 md:-left-10 w-16 md:w-32 h-16 md:h-32 bg-blue-300/30 blur-3xl rounded-full"></div>

          <p className="text-gray-900 text-sm md:text-lg leading-relaxed whitespace-pre-line">
            Penaca Circular Solutions, founded in 2025, is an innovative leader 
            in polyolefin recycling, engineering a cleaner and more circular future.

            We convert post-consumer and post-industrial polyolefin waste into
            high-grade reprocessed granules, supported by a scientific in-house
            quality control team.

            Integrated with Plastxchange, we ensure full transparency,
            traceability, and accountability—redefining polymer recycling for a
            sustainable future.
          </p>
        </motion.section>


        {/* === SECTION 2 === */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-xl"
        >
          <div className="absolute top-0 right-0 w-20 md:w-40 h-20 md:h-40 bg-yellow-300/20 blur-3xl rounded-full"></div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-700 mb-4 md:mb-6">
            Vision Statement
          </h2>

          <p className="text-gray-900 text-sm md:text-lg leading-relaxed whitespace-pre-line">
            To create a world where recycled polyolefins become the preferred 
            choice across industries—driving sustainability, reducing dependence 
            on virgin materials, and enabling a circular economy powered by 
            responsibility, social impact, and innovation.
          </p>
        </motion.section>


        {/* === SECTION 3 === */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 bg-gradient-to-br from-green-200 to-green-400 shadow-xl"
        >
          <div className="absolute -bottom-5 md:-bottom-10 right-0 w-16 md:w-32 h-16 md:h-32 bg-green-300/30 blur-3xl rounded-full"></div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4 md:mb-6">
            Mission
          </h2>

          <p className="text-gray-900 text-sm md:text-lg leading-relaxed whitespace-pre-line">
            To continuously advance recycling technology and processes, reducing
            environmental footprint while maximizing the usability and value of
            recycled polyolefins across industries.
          </p>
        </motion.section>

      </div>


      {/* ===== Final 3 Recycle Image Strip ===== */}
<section className="relative w-full h-[200px] md:h-[420px] lg:h-[500px]">

  {/* 3-Image Strip (No Gaps) */}
  <div className="grid grid-cols-3 w-full h-full">
    
    <div className="relative w-full h-full group overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/5269922/pexels-photo-5269922.jpeg?_gl=1*gkq54h*_ga*NzcwNDQ3Ni4xNzYyNjExNjA5*_ga_8JE65Q40S6*czE3NjQxODkxNDMkbzUkZzEkdDE3NjQxODkzMDMkajQxJGwwJGgw"
        alt="Recycle 1"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="relative w-full h-full group overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/8395838/pexels-photo-8395838.jpeg?_gl=1*1j23ghs*_ga*NzcwNDQ3Ni4xNzYyNjExNjA5*_ga_8JE65Q40S6*czE3NjQxODkxNDMkbzUkZzEkdDE3NjQxODk5NzckajMzJGwwJGgw"
        alt="Recycle 2"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="relative w-full h-full group overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/5354823/pexels-photo-5354823.jpeg?_gl=1*sh3i89*_ga*NzcwNDQ3Ni4xNzYyNjExNjA5*_ga_8JE65Q40S6*czE3NjQxODkxNDMkbzUkZzEkdDE3NjQxODk2MTIkajE2JGwwJGgw"
        alt="Recycle 3"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

  </div>

  {/* Dark Overlay for Readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Centered Message On Top of Images */}
  <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug max-w-4xl"
    >
      Together, We Transform Waste Into Opportunity Building a Cleaner, Circular Future.
    </motion.h2>
  </div>

</section>

    </Layout>
  );
}




/* ---- Recycle Cards ---- */
function RecycleCard({ img, text }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative w-full h-40 mb-6">
        <Image src={img} alt="Recycle" fill className="object-contain" />
      </div>
      <p className="text-center text-gray-700 text-lg font-medium leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
