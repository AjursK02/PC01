"use client";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Blogs() {
  const articles = [
    {
      id: 1,
      title: "Addressing the Plastic Packaging Crisis Through Recycling",
      description:
        "Plastic packaging plays a crucial role in modern living offering convenience, safety, and resource efficiency but its use has led to a global crisis in waste management.",
      image:
        "https://images.pexels.com/photos/18121632/pexels-photo-18121632.jpeg",
      slug: "recycling-transforms-future",
    },
    {
      id: 2,
      title: "Using Recycled Plastics to Build a Sustainable Supply Chain",
      description:
        "Supply chains are being reimagined amid urgent calls for environmental responsibility. For brands operating in plastics, the shift to recycled HDPE, PP, and LDPE now underpins both business resilience and ecological stewardship.",
      image: "https://images.pexels.com/photos/6613959/pexels-photo-6613959.jpeg",
      slug: "sustainable-polymers",
    },
    {
      id: 3,
      title: "Mechanical vs. Chemical Recycling: What’s Next for Polyolefins?",
      description:
        "Plastic recycling is evolving with the rise of chemical methods alongside established mechanical processes. This duality is especially relevant for polyolefins like HDPE, LDPE, LLDPE, and PP, where standards, purity, and input quality matter acutely.",
      image:
        "https://images.pexels.com/photos/10186806/pexels-photo-10186806.jpeg",
      slug: "Mechanical-Chemical-Recycling",
    },
    {
      id: 4,
      title: "The Role of Plastic Recycling in Achieving Circular Economy",
      description:
        "The circular economy model reuse, recycle, regenerate is redefining sustainability. Plastic recycling is its foundation, transforming waste into valuable input and reducing resource consumption.",
      image: "https://plus.unsplash.com/premium_photo-1683072005067-455d56d323b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      slug: "circular-economy-plastic",
    },
    {
      id: 5,
      title: "The Science and Significance of HDPE Recycling: Transforming Waste into Opportunity",
      description:
        "High-Density Polyethylene (HDPE) is everywhere from milk jugs to durable industrial containers making it one of the most prevalent plastics globally. Its impact is profound, not just as a material but as part of an urgent environmental story. Each day, millions of tons of HDPE waste accumulate across landfills, oceans, and natural habitats, threatening biodiversity and human health. Recycling HDPE is no longer optional; it’s central to circular economy goals, climate change mitigation, and sustainable industrial growth.",
      image: "https://plus.unsplash.com/premium_photo-1661373732193-ea19ebe7f51d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      slug: "Science-and-Significance-of-HDPE-Recycling",
    },
    {
      id: 6,
      title: "HDPE — The Backbone of Sustainable Recycling.",
      description:
        "High-Density Polyethylene (HDPE) has quietly become the unsung hero of modern sustainability. Found in milk jugs, shampoo bottles, and detergent containers, this durable yet lightweight polymer is one of the most recycled plastics globally. As businesses and governments push toward circular economies, HDPE recycling is redefining how we approach resource efficiency and waste reduction.",
      image: "https://images.unsplash.com/photo-1758599668932-484f54cdf48f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
      slug: "HDPE-The-Backbone-of-Sustainability",
    },
    {
      id: 7,
      title: "LDPE and LLDPE — The Flexible Future of Plastic Recycling",
      description:
        "Lightweight yet resilient, Low-Density Polyethylene (LDPE) and Linear Low-Density Polyethylene (LLDPE) form the invisible backbone of everyday products—plastic bags, cling films, bubble wraps, and agricultural sheets. These materials provide flexibility and transparency but are often labeled as “hard-to-recycle.” Today, innovation and circular design are changing that narrative.",
      image: "https://images.pexels.com/photos/27666146/pexels-photo-27666146.jpeg?_gl=1*1lpbask*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjEzOTUwODkkbzI2JGcxJHQxNzYxMzk1MDkwJGo1OSRsMCRoMA..",
      slug: "LDPE-LLDPE—The-Flexible-Future",
    },
    {
      id: 8,
      title: "MDPE — The Middle Path to Plastic Sustainability",
      description:
        "Between the rigidity of HDPE and the flexibility of LDPE lies a quiet middle ground Medium-Density Polyethylene (MDPE). Often overshadowed by its more famous counterparts, MDPE combines strength with elasticity, resistance with adaptability. From gas pipes to packaging films, this polymer has long supported industrial infrastructure and now, it’s stepping into the spotlight of sustainable innovation.",
      image: "https://images.pexels.com/photos/13472779/pexels-photo-13472779.jpeg?_gl=1*wtusly*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjEzOTUwODkkbzI2JGcxJHQxNzYxMzk1Mzk4JGoyOCRsMCRoMA..",
      slug: "MDPE-Plastic-Sustainability",
    },
    {
      id: 9,
      title: "Polypropylene (PP) — The Reinvention of Industrial Circularity",
      description:
        "Polypropylene, or PP, is one of the world’s most versatile and widely used plastics from yogurt cups to car bumpers and laboratory equipment. For decades, PP has symbolized industrial efficiency. But in the face of a global sustainability reckoning, this same polymer is being redefined not as disposable, but as recyclable, reusable, and regenerative.",
      image: "https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?_gl=1*qlzb8i*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjEzOTUwODkkbzI2JGcxJHQxNzYxMzk1NTc5JGozMiRsMCRoMA..",
      slug: "Polypropylene-Industrial-Circularity",
    },
    {
      id: 10,
      title: "The Lifecycle of Plastics — From Cradle to Circularity",
      description:
        "Imagine a single plastic bottle. Born from ancient fossil fuels, molded in a factory, filled with water, and sold at a corner store. Within minutes, it fulfills its purpose and then begins a journey that could last hundreds of years. This journey is not just a story of pollution; it’s a story of transformation. A story that could end in waste or be reborn into something new.",
      image: "https://images.unsplash.com/photo-1647763563889-109bbe7591ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      slug: "Lifecycle-of-Plastics",
    },
    {
      id: 11,
      title: "Sorting the Future — How Technology is Transforming Plastic Recycling",
      description:
        "In a recycling plant, thousands of bottles, films, and containers rush along conveyor belts a chaotic river of colors and shapes. But then, in milliseconds, laser beams, AI cameras, and robotic arms identify and separate them HDPE here, LDPE there, PP to the side.",
      image: "https://plus.unsplash.com/premium_photo-1737362946506-e3d9153e751c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
      slug: "Sorting-the-Future",
    },
  ];

  return (
    <Layout>
      {/* ===== Banner Section ===== */}
      <section className="relative w-screen h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Banner Image */}
        <Image
          src="https://images.unsplash.com/photo-1749805339958-4b1d0f16423d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
          alt="Blog Banner"
          fill
          className="object-cover brightness-[60%]"
          priority
        />

        {/* Text Overlay with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Our Blogs
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-gray-100">
            Explore insightful articles about plastic recycling,
            sustainability, and innovative technologies shaping a greener
            future.
          </p>
        </motion.div>
      </section>

      {/* ===== Blog Cards Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: article.id * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.description.length > 130
                      ? article.description.slice(0, 130) + "..."
                      : article.description}
                  </p>
                </div>

                <Link
                  href={`/blogs/${article.slug}`}
                  className="mt-auto inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
