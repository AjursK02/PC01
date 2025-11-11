"use client";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import { Recycle, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function OurOfferings() {
    const images = [
        "https://plus.unsplash.com/premium_photo-1681221717267-8d399462280f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1129",
        "https://images.unsplash.com/photo-1647535091784-1c1c1b5b8b90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        "https://images.unsplash.com/photo-1563958840061-3fe27427fd21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
        "https://plus.unsplash.com/premium_photo-1674406051718-0d4bc46f5b93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        "https://plus.unsplash.com/premium_photo-1760761217538-12316ce42bf6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
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
                    src="https://media.istockphoto.com/id/2163906808/photo/plastic-granules.jpg?s=2048x2048&w=is&k=20&c=9eIQpMNJ2ZMM3vxsu5i1gSbwDf__o7fIpdAGHya-WKg="
                    alt="Our Offerings Banner"
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
                        Our Offerings
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-4xl md:text-6xl font-extrabold text-white max-w-5xl leading-tight"
                    >
                        Polypropylene (PP)

                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
                    >
                        Discover how Penaca is redefining Polypropylene (PP) recycling by producing durable, eco-friendly materials for diverse applications.
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
          Our Offerings
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-extrabold text-white max-w-5xl leading-tight"
        >
          Polypropylene (PP)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
        >
          Discover how Penaca is redefining Polypropylene (PP) recycling by producing durable, eco-friendly materials for diverse applications.
        </motion.p>
      </div>
    </section>

            {/* === Content Sections === */}
            <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-28 space-y-40">
                {/* HDPE Section */}
                <MaterialSection
                    title="Polypropylene (PP)"
                    subtitle="What is Polypropylene (PP)?"
                    description={`PP (Polypropylene) is a thermoplastic polymer derived from propylene monomer. It is semi-crystalline, with a relatively high melting point (~160-171 °C), good fatigue resistance, and strong versatility. Uses include yogurt cups, bottle caps, rigid containers, automotive parts and non-woven fabrics.`}
                    examples={[
                        "https://images.pexels.com/photos/9324372/pexels-photo-9324372.jpeg?_gl=1*1gl2r37*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjE1NzQ0MDkkbzI5JGcxJHQxNzYxNTc2MzEyJGo1OSRsMCRoMA..",
                        "https://images.pexels.com/photos/11703476/pexels-photo-11703476.jpeg?_gl=1*12p5quq*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjE1NzQ0MDkkbzI5JGcxJHQxNzYxNTc2NDM3JGoxNSRsMCRoMA..",
                        "https://images.unsplash.com/photo-1719594853425-c2dc9893e684?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                    ]}
                    details={[
                        {
                            heading: "Why it matters in recycling & sustainability?",
                            text: `PP has a very low recycling rate compared to HDPE despite its widespread use. 
                            Recycling PP has strong environmental upside reducing petroleum use, material waste and greenhouse-gas emissions.
                            With increasing policy pressure and brand commitments, recycled PP (rPP) presents an urgent opportunity for circularity.
                            `,
                        },
                        {
                            heading: "Key properties & applications",
                            text: `Lightweight yet rigid, heat-resistant, with good fatigue strength ideal for automotive, appliance, food packaging, hinges and living-hinge designs. 
                            Resin Code #5 in recycling systems.
                            `,
                        },
                        {
                            heading: "Recycling process overview",
                            text: `1. Collection & Sorting: PP must be separated from other plastics; float/sink or NIR technologies help. 
                            2. Cleaning & Shredding: Shredded clean PP waste into flakes.
                            3. Pelletising: Melted and formed into pellets; often mixed with virgin PP due to degradation in properties.
                            4. Reuse: rPP used for garden furniture, auto parts, packaging, non-food containers.`,
                        },
                        {
                            heading: "Challenges & what to watch",
                            text: `Mechanical recycling degrades PP’s properties (melt-flow, molecular weight, thermal stability) more than some other plastics. 
                            Economic viability is lower: rPP costs can be higher than virgin PP due to sorting, cleaning and additives.
                            Infrastructure and consumer access are less developed; only ~20% of PP used captured in some geographies.
                            `,
                        },
                        {
                            heading: "Future outlook & business relevance",
                            text: `PP presents a strategic frontier: with technology improvements (chemical recycling, solvent dissolution), better sorting and stronger end-market development, rPP can scale rapidly. For recyclers and brands alike, engaging now means positioning for the next wave of circular plastics.`,
                        },
                    ]}
                />

                {/* === Comparison Table Section === */}
<motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-20"
>
    {/* <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-10">
        Polyethylene Grades Comparison
    </h2> */}

    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
        <table className="min-w-full text-left text-gray-800">
            <thead className="bg-green-900 text-white text-sm md:text-base">
                <tr>
                    <th className="px-6 py-4 font-semibold">Material</th>
                    <th className="px-6 py-4 font-semibold">Resin Code</th>
                    <th className="px-6 py-4 font-semibold">Typical Use</th>
                    <th className="px-6 py-4 font-semibold">Recycle Strength</th>
                    <th className="px-6 py-4 font-semibold">Key Opportunity for Circularity</th>
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-sm md:text-base bg-white">
                <tr className="hover:bg-yellow-50">
                    <td className="px-6 py-4 font-medium text-green-900">PP</td>
                    <td className="px-6 py-4">#5</td>
                    <td className="px-6 py-4">Caps, containers, automotive</td>
                    <td className="px-6 py-4">Low</td>
                    <td className="px-6 py-4">rPP for auto parts, packaging</td>
                </tr>
            </tbody>
        </table>
    </div>
</motion.section>

{/* === FAQs Section === */}
                <FAQSection />

            </div>
        </Layout>
    );
}

/* === Reusable Vertical Material Section Component === */
function MaterialSection({ title, subtitle, description, examples, details }: any) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
        >
            {/* Subtitle Badge */}
            <span className="inline-block border border-yellow-400 px-4 py-1 rounded-full uppercase text-sm tracking-widest text-green-900 bg-yellow-300">
                <div className="flex items-center">
                    <Recycle className="size-5 text-green-800 mr-2" />
                    {subtitle}
                </div>
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">{title}</h2>

            {/* Description */}
            <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
                {description}
            </p>

            {/* Example Images Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-2">
                {examples?.map((img: string, i: number) => (
                    <div
                        key={i}
                        className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden shadow-md"
                    >
                        <Image src={img} alt="example" fill className="object-cover" />
                    </div>
                ))}
            </div>

            {/* Detailed Sections */}
            <div className="space-y-10 pt-8">
                {details?.map((d: any, i: number) => (
                    <div key={i} className="space-y-4">
                        <h3 className="text-2xl font-semibold text-green-900 inline-block py-1 ">
                            {d.heading}
                        </h3>
                        <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
                            {d.text}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

function FAQSection() {
    const faqs = [
        {
            question:
                "1. How does chemical recycling help where mechanical recycling struggles?",
            answer: `Mechanical recycling melts and reshapes plastics but quality can degrade over time.
 Chemical recycling, on the other hand, breaks plastics down into their base molecules (monomers or fuels) enabling even mixed or contaminated plastics to be reused at near-virgin quality.
 This is especially promising for polyolefins like LDPE and PP, which are challenging for traditional mechanical methods.`,
        },
        {
            question: "2. How can businesses integrate recycled polyolefins into their products?",
            answer: `Businesses can start by:

1. Redesigning products for recyclability (mono-material packaging).
2. Sourcing rHDPE, rLDPE, or rPP from certified recyclers.
3. Using recycled content goals (e.g., 25–50% r-material).
4. Educating customers on proper disposal and recycling.
 
This not only improves sustainability metrics but also enhances brand trust and regulatory compliance.
`,
        },
        {
            question:
                "3.  What role do consumers play in improving plastic recycling?",
            answer: `Consumers are the first link in the recycling chain. By:

                1. Cleaning and sorting waste properly.
                2. Avoiding single-use plastics.
                3. Choosing products made from recycled materials.
                4. Supporting brands committed to sustainability.

Individual action helps make large-scale recycling systems work efficiently.`,
        },
        {
            question:
                "4.  Why is PP recycling gaining attention now?",
            answer: `PP (Polypropylene) is one of the most versatile plastics  but historically, its recycling infrastructure lagged behind.
 With increasing corporate and regulatory commitments (like Extended Producer Responsibility and recycled content mandates), rPP demand is growing rapidly.
 New sorting and chemical recycling technologies are unlocking PP’s potential in circular systems.
`,
        },
        {
            question:
                "5. What is the future of polyolefin recycling in India and globally?",
            answer: `The future is circular.
 India and many global markets are investing in:

1. Advanced recycling technologies (AI sorting, pyrolysis, depolymerization).
2. Policy support (EPR, recycled content standards).
3. Corporate sustainability targets from FMCG and packaging brands.
 
Recyclers focusing on HDPE, LDPE, MDPE, and PP are well-positioned to become key enablers of resource-efficient, low-carbon economies.
`,
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12 py-24"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-12">
                FAQs
            </h2>

            <div className="space-y-6">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="border border-yellow-300 rounded-2xl shadow-sm overflow-hidden bg-white"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex justify-between items-center px-6 py-5 text-left"
                        >
                            <span className="text-lg font-medium text-gray-900">
                                {faq.question}
                            </span>
                            {openIndex === i ? (
                                <ChevronUp className="text-green-800 size-6" />
                            ) : (
                                <ChevronDown className="text-green-800 size-6" />
                            )}
                        </button>

                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={
                                openIndex === i
                                    ? { height: "auto", opacity: 1 }
                                    : { height: 0, opacity: 0 }
                            }
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden px-6"
                        >
                            <p className="pb-6 text-gray-800 whitespace-pre-line text-base leading-relaxed">
                                {faq.answer}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}