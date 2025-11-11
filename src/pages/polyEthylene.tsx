"use client";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import { Recycle, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function OurOfferings() {

    const images = [
    "https://images.unsplash.com/photo-1759240142878-9c5229cbe3c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "https://images.unsplash.com/photo-1633762348290-33a37f4d7fcf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    "https://plus.unsplash.com/premium_photo-1758838883194-28812c7269ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "https://images.pexels.com/photos/17157913/pexels-photo-17157913.jpeg?_gl=1*1oolsxk*_ga*NzcwNDQ3Ni4xNzYyNjExNjA5*_ga_8JE65Q40S6*czE3NjI2MTUzNzYkbzIkZzEkdDE3NjI2MTU4NTgkajUyJGwwJGgw",
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
                    src="https://images.pexels.com/photos/3806781/pexels-photo-3806781.jpeg?_gl=1*4sgstv*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjE1NjY2NjYkbzI4JGcxJHQxNzYxNTY2OTE2JGo1OSRsMCRoMA.."
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
                        Polyethylene(PE)
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
                    >
                        Discover how Penaca is transforming common polymers like HDPE and LDPE into
                        sustainable, high-quality recycled materials.
                    </motion.p>
                </div>
            </section> */}

                {/* === Banner Section === */}
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
          Polyethylene (PE)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
        >
          Discover how Penaca is transforming common polymers like HDPE and LDPE into
          sustainable, high-quality recycled materials.
        </motion.p>
      </div>
    </section>

            {/* === Content Sections === */}
            <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-28 space-y-40">
                {/* HDPE Section */}
                <MaterialSection
                    title="High Density Polyethylene (HDPE)"
                    subtitle="What are High density polyethylene?"
                    description={`HDPE (High Density Polyethylene) is a polyolefin produced from the monomer ethylene. It features a relatively high density, unbranched molecular chains, which give it strong rigidity, good chemical resistance and durability. It is widely used in bottles, milk jugs, detergent containers, piping, crates and outdoor furniture.`}
                    examples={[
                        "https://images.pexels.com/photos/10566502/pexels-photo-10566502.jpeg?_gl=1*grumy9*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjE1NjY2NjYkbzI4JGcxJHQxNzYxNTY3MzgxJGo1OSRsMCRoMA..",
                        "https://images.pexels.com/photos/4491711/pexels-photo-4491711.jpeg?_gl=1*1efz4v8*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjE1NjY2NjYkbzI4JGcxJHQxNzYxNTY3NTE1JGo5JGwwJGgw",
                        "https://media.istockphoto.com/id/1650800203/photo/dirty-used-motor-oil-plastic-bottle-piles-together.jpg?s=2048x2048&w=is&k=20&c=QjRQfqvwReK7QMI9sPDN-mC5ixOfUHgrBNhdymE6zvc=",
                    ]}
                    details={[
                        {
                            heading: "Why does it matter in recycling & sustainability?",
                            text: `HDPE is one of the easiest plastics to recycle, accepted by most curb-side systems.
                        Recycling HDPE reduces energy, raw-material use, and landfill burden.
                        Recycled HDPE (rHDPE) can be used to make new pipes, crates, plastic lumber, benches replacing virgin resin.`,
                        },
                        {
                            heading: "Key properties & applications",
                            text: `Rigid, durable, weather-resistant plastic ideal for utility pipes, milk bottles, and drums.
                            Good for injection moulding, blow moulding, extrusion scrap.
                            Marked as Resin Code #2 (♻️) in many countries. 
                            `,
                        },
                        {
                            heading: "Recycling process overview",
                            text: `1. Collection & Sorting: HDPE is separated and color-sorted.
                            2. Cleaning & Shredding: Labels and contaminants removed; shredded into flakes.
                            3. Pelletising: Flakes melted into pellets, used for new products.
                            4. Reuse: rHDPE is used in non-food bottles, outdoor furniture, and crates.`,
                        },
                        {
                            heading: "Challenges & what to watch",
                            text: `Contamination (food residue, mixed materials) reduces material quality.
Colored or mixed HDPE needs extra sorting.
Although easier to recycle, the growing demand for rHDPE needs better infrastructure.`,
                        },
                        {
                            heading: "Future outlook & business relevance",
                            text: `HDPE recycling offers a strong sustainability opportunity. 
With global brands committing to recycled content and improved policies (EPR), 
HDPE remains a high-value circular material for recyclers.`,
                        },
                    ]}
                />

                {/* LDPE Section */}
                <MaterialSection
                    title="Low Density Polyethylene (LDPE)"
                    subtitle="What is Low density polyethylene?"
                    description={`LDPE (Low Density Polyethylene) is an early form of polyethylene, featuring branched molecular chains that make it flexible, transparent and less dense. It is widely used for films, bags, packaging wraps, liners and some rigid packaging. `}
                    examples={[
                        "https://images.pexels.com/photos/3900506/pexels-photo-3900506.jpeg?_gl=1*1pq1squ*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjE1NjY2NjYkbzI4JGcxJHQxNzYxNTY4MzczJGozNSRsMCRoMA..",
                        "https://media.istockphoto.com/id/508654394/photo/colored-plastic-utensils-on-red-background.jpg?s=2048x2048&w=is&k=20&c=9N-Yjj-ISTFVAqVO_3VTByuiYeHH8dMcMh8MZdBrBtM=",
                        "https://media.istockphoto.com/id/2232353272/photo/bottles-of-glue-with-caps-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=4kZoDAZxfzHJZ3HieoKVlIEazHc8p455bPZCfRAt2lk=",
                    ]}
                    details={[
                        {
                            heading: "Why it matters for recycling & circularity",
                            text: `LDPE’s flexibility and low cost make it ubiquitous in packaging and agriculture yet its recyclability remains more complex than HDPE.
Recycled LDPE can become bin liners, film plastics, garbage bags, and other film-based materials.`,
                        },
                        {
                            heading: "Key properties & applications",
                            text: `Lightweight, flexible, and transparent ideal for plastic bags, food wraps, agricultural sheeting.
                            Good chemical and moisture resistance.
                            Marked as Resin Code #4 in many identification systems.`,
                        },
                        {
                            heading: "Recycling process overview",
                            text: `1. Collection & Sorting: Film LDPE is collected separately since flexible film can jam machines.
2. Cleaning & Shredding: Films are cleaned and shredded into granules.
3. Pelletisation & Reuse: Granules melted and reused in new liners, sheets, and bags.`,
                        },
                        {
                            heading: "Challenges & what to watch",
                            text: `Flexible film is hard to handle in sorting equipment.
Recycling rates are lower than rigid plastics.
Multi-layer films and contamination complicate recycling economics.
Technical limits on repeated recycling without quality loss.`,
                        },
                        {
                            heading: "Future outlook & business relevance",
                            text: `LDPE represents a high-volume feedstock for recyclers.
Innovations like mono-material films, better cleaning systems, and chemical recycling 
will improve LDPE circularity and value recovery.`,
                        },
                    ]}
                />

                {/* MDPE section */}
                <MaterialSection
                    title="Medium Density Polyethylene  (MDPE)"
                    subtitle="What is Medium density polyethylene?"
                    description={`MDPE (Medium Density Polyethylene) sits between LDPE and HDPE in structure and performance. It offers a blend of flexibility and strength, making it suitable for shrink films, gas-distribution pipes, and heavier-duty flexible packaging. (While specific sources are fewer, the category is widely recognized in polyethylene grades.) `}
                    examples={[
                        "https://images.pexels.com/photos/127944/pexels-photo-127944.jpeg?_gl=1*f8cpda*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjE1NzQ0MDkkbzI5JGcxJHQxNzYxNTc0NTQ2JGozMSRsMCRoMA..",
                        "https://images.pexels.com/photos/10522900/pexels-photo-10522900.jpeg?_gl=1*tn7yki*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjE1NzQ0MDkkbzI5JGcxJHQxNzYxNTc0NzU3JGoyMyRsMCRoMA..",
                        "https://images.pexels.com/photos/29606685/pexels-photo-29606685.jpeg?_gl=1*tys34q*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjE1NzQ0MDkkbzI5JGcxJHQxNzYxNTc0ODQ0JGozJGwwJGgw",
                    ]}
                    details={[
                        {
                            heading: "Why it matters in recycling & sustainability?",
                            text: `MDPE finds use in infrastructure (pipes) and flexible packaging both promising for recycled feedstocks.
                            Recycling MDPE offers a niche opportunity: streamlining mixed PE waste and enabling higher-value reuse rather than down-cycling.`,
                        },
                        {
                            heading: "Key properties & applications",
                            text: `Balanced strength and flexibility more robust than LDPE, more flexible than HDPE.
                            Typical applications: shrink films, packaging films, medium-duty bags, piping systems.
                            `,
                        },
                        {
                            heading: "Recycling process overview",
                            text: `Given its structural similarity to other PE grades, MDPE follows similar steps: collection, sorting (often separated from mixed PE), cleaning, shredding, pelletising, and reuse  often in lower-grade or infrastructure applications due to quality constraints.`,
                        },
                        {
                            heading: "Challenges & what to watch",
                            text: `MDPE often mixes with other PE grades, which may compromise quality.
                            Lower visibility in recycling value chains compared to HDPE/LDPE requiring dedicated separation efforts.
                            Infrastructure for MDPE-specific sorting is less developed; demand for mdPE specific recycled pellets must be cultivated.
                            `,
                        },
                        {
                            heading: "Future outlook & business relevance",
                            text: `MDPE represents a “hidden gem” in polyolefin recycling: by building dedicated supply streams and increasing market awareness (for rMDPE in construction, piping, film) a recycler can differentiate. For brands and infrastructure players aiming for circularity, rMDPE offers an emerging material pathway.`,
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
                    <td className="px-6 py-4 font-medium text-green-900">HDPE</td>
                    <td className="px-6 py-4">#2</td>
                    <td className="px-6 py-4">Bottles, pipes, crates</td>
                    <td className="px-6 py-4">High</td>
                    <td className="px-6 py-4">rHDPE in piping, bins, lumber</td>
                </tr>

                <tr className="hover:bg-yellow-50">
                    <td className="px-6 py-4 font-medium text-green-900">LDPE</td>
                    <td className="px-6 py-4">#4</td>
                    <td className="px-6 py-4">Films, bags, wraps</td>
                    <td className="px-6 py-4">Moderate</td>
                    <td className="px-6 py-4">rLDPE in films, liners</td>
                </tr>

                <tr className="hover:bg-yellow-50">
                    <td className="px-6 py-4 font-medium text-green-900">MDPE</td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">Shrink film, medium bags, pipes</td>
                    <td className="px-6 py-4">Emerging</td>
                    <td className="px-6 py-4">Dedicated rMDPE supply streams</td>
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
                "1. What are HDPE, LDPE and MDPE, and how are they different?",
            answer: `These four are types of polyolefins plastics made from simple hydrocarbons like ethylene and propylene.

            1. HDPE (High Density Polyethylene) is rigid and strong used in pipes, bottles, and containers.
            2. LDPE (Low Density Polyethylene) is soft and flexible used for bags, wraps, and films.
            3. MDPE (Medium Density Polyethylene) sits between HDPE and LDPE used in gas pipes and shrink films.

Their main difference lies in density, flexibility, and application all crucial for recycling.`,
        },
        {
            question: "2. Can all these plastics be recycled?",
            answer: `Yes, all three can be recycled though with varying ease:

            HDPE has one of the highest recycling rates globally.
            LDPE and MDPE are recyclable, but films are harder to process.

Proper collection, sorting, and cleaning are key to successful recycling of these materials.`,
        },
        {
            question:
                "3. What is the environmental benefit of recycling HDPE, LDPE and MDPE?",
            answer: `Recycling reduces dependency on virgin petroleum, cuts carbon emissions, and minimizes landfill waste.
            Each ton of recycled polyolefins saves:

                1. Up to 75% of energy compared to virgin production.
                2. Around 1.5 tons of CO₂ emissions.

It also keeps plastics circulating in the economy supporting a circular materials ecosystem instead of a linear “take–make–waste” model.`,
        },
        {
            question:
                "4. What products can be made from recycled HDPE, LDPE and MDPE?",
            answer: `Recycled plastics (rHDPE, rLDPE, rMDPE) can be transformed into:

                1. rHDPE: pipes, crates, bins, outdoor furniture.
                2. rLDPE: film, liners, garbage bags.
                3. rMDPE: shrink films, durable packaging, piping.

New markets are growing fast as brands commit to using recycled content.`,
        },
        {
            question:
                "5. Why is LDPE recycling more difficult than HDPE recycling?",
            answer: `LDPE is lightweight and flexible its films tend to tangle in sorting machinery and often contain contaminants or mixed materials.
 While HDPE bottles are rigid and easy to separate, LDPE requires specialized equipment and clean, mono-material streams for efficient recycling.
 Advances in chemical recycling and AI-based sorting are helping overcome these barriers.`,
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
