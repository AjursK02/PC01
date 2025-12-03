"use client";
import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


export default function EPR() {
    return (
        <Layout>
            {/* === Banner Section === */}
            <section className="relative w-screen h-[30vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="EPR Banner"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12">
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-green-900 text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 border px-3 md:px-4 py-1 rounded-full border-white/30 bg-yellow-400"
                    >
                        Extended Producer Responsibility (EPR)
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-5xl leading-tight"
                    >
                        Empowering Circular Solutions with EPR
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        className="mt-4 md:mt-8 text-sm md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed"
                    >
                        We help brands meet their sustainability goals through transparent, traceable,
                        and compliant Extended Producer Responsibility systems.
                    </motion.p>
                </div>
            </section>

            {/* === Content Section Wrapper === */}
            <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-14 py-12 md:py-24 space-y-16 md:space-y-32 text-gray-800">

                {/* === Intro Section (Left Text + Right Image) === */}
                <motion.section
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mb-4 md:mb-6">
                            Extended Producer Responsibility (EPR)
                        </h2>
                        <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-4">
                            At <span className="font-semibold text-green-700">Penaca</span>, we empower brands to meet their Extended Producer Responsibility (EPR)
                            goals with ease, transparency, and accountability.
                        </p>
                        <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-4">
                            Our end-to-end EPR solutions help businesses in India comply with{" "}
                            <span className="font-medium text-blue-800">CPCB guidelines</span> while driving
                            real impact through responsible plastic waste collection, recycling, and reuse.
                        </p>
                        <p className="text-sm md:text-lg leading-relaxed">
                            With 100% traceable documentation and expert guidance, we simplify EPR compliance so
                            you can focus on building a sustainable future while we ensure your brand stays fully
                            compliant and environmentally responsible.
                        </p>
                    </div>

                    <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="https://i0.wp.com/compass.rauias.com/wp-content/uploads/2025/04/image-14.jpeg?w=1400&ssl=1"
                            alt="EPR Sustainability"
                            fill
                            className="object-contain"
                        />
                    </div>
                </motion.section>

                {/* === What is EPR === */}
                <Section
                    title="What is EPR (Extended Producer Responsibility)?"
                    content={`Extended Producer Responsibility (EPR) is an environmental policy framework that places the responsibility of managing post-consumer waste on producers, importers, and brand owners. Under this mandate, manufacturers are accountable for the environmental impact of their products throughout their entire lifecycle—from design and material selection to collection, recycling, and end-of-life disposal.

The objective of EPR is to promote sustainable product design, encourage the use of recyclable materials, and reduce the burden of waste management on municipal bodies. In India, EPR compliance is governed by the Central Pollution Control Board (CPCB), requiring producers to achieve specific collection and recycling targets and maintain verifiable records of waste handling and recovery.

At Penaca, we work closely with brands to help them navigate the complexities of EPR compliance through traceable documentation, efficient waste collection systems, and certified recycling partnerships. Our data-driven and transparent approach ensures that businesses not only meet their regulatory obligations but also contribute meaningfully to the circular economy and national sustainability goals.`}
                />

                {/* === Importance of EPR === */}
                <Section
                    title="Importance of EPR in Sustainability"
                    content={`Extended Producer Responsibility (EPR) is central to building a sustainable and circular economy by holding producers accountable for the environmental impact of their products. In India, it serves as a key driver of responsible waste management, fostering innovation, regulatory compliance, and ecological balance.

At Penaca, we view EPR not just as a regulatory requirement, but as a pathway to build cleaner, more efficient, and future-ready production ecosystems. Here’s why EPR is essential for sustainability:`}
                />

                <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-lg leading-relaxed text-gray-800">
                    <li><span className="font-semibold text-green-800">Waste Minimization:</span> Encourages producers to reduce waste generation at the source by adopting recyclable and reusable packaging materials.</li>
                    <li><span className="font-semibold text-green-800">Circular Economy Transition:</span> Fosters reuse of resources through efficient recycling systems, reducing dependency on virgin plastics.</li>
                    <li><span className="font-semibold text-green-800">Environmental Accountability:</span> Helps mitigate pollution and lower the carbon footprint of industries.</li>
                    <li><span className="font-semibold text-green-800">Economic Efficiency:</span> Shifts waste management responsibility from public authorities to producers, ensuring shared accountability.</li>
                    <li><span className="font-semibold text-green-800">Innovation & Design Improvement:</span> Inspires sustainable product and packaging design.</li>
                    <li><span className="font-semibold text-green-800">Regulatory Compliance:</span> Aligns businesses with CPCB and government mandates, strengthening environmental governance.</li>
                </ul>

                <p className="text-lg leading-relaxed mt-6 text-gray-800">
                    Through our EPR solutions, <span className="font-semibold text-green-700">Penaca</span> empowers
                    organizations to meet compliance standards while creating measurable environmental impact—
                    driving India closer to a truly circular economy.
                </p>

                {/* === Plastic Credit Section === */}
                <Section
                    title="What is EPR Plastic Credit?"
                    content={`Plastic EPR Credit is a mechanism that allows producers to fulfill their Extended Producer Responsibility obligations by supporting verified plastic waste collection and recycling activities. Each credit represents a measurable quantity of plastic that has been recovered and recycled through authorized channels.

At Penaca, our EPR credit framework enables brands to balance their plastic footprint, achieve compliance, and actively contribute to sustainable waste management without disrupting their core operations.`}
                />

                <Section
                    title="The Role of EPR Plastic Credits"
                    content={`EPR Plastic Credits play a pivotal role in promoting responsible waste management and advancing the circular economy. At Penaca, we view them as a practical and impactful approach to environmental accountability.
Key Roles of EPR Plastic Credits:`}
                />

                <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-lg leading-relaxed text-gray-800">
                    <li><span className="font-semibold text-green-800">Supports Circular Economy: </span> Encourages businesses to take responsibility for the plastic they produce by investing in verified collection and recycling initiatives.</li>
                    <li><span className="font-semibold text-green-800">Improves Recycling Infrastructure:</span> Drives funding toward organized waste collection and recycling systems, reducing reliance on virgin plastics.</li>
                    <li><span className="font-semibold text-green-800">Enhances Industry Accountability: </span> Promotes transparent reporting and traceability, ensuring producers are responsible for their plastic footprint.</li>
                    <li><span className="font-semibold text-green-800">Transforms Waste into Value:</span> Creates a market-based mechanism that converts plastic waste into a reusable resource.</li>
                    <li><span className="font-semibold text-green-800">Strengthens Sustainability Commitments:</span> Helps brands demonstrate genuine environmental responsibility while complying with EPR regulations.</li>
                </ul>

                <p className="text-lg leading-relaxed mt-6 text-gray-800">
                    Through <span className="font-semibold text-green-700">EPR Plastic Credits</span> ,Penaca enables companies to meet compliance goals while contributing to a cleaner, more sustainable future.

                </p>

                <Section
                    title="Benefits of Plastic EPR Credits for Manufacturers and PIBOs"
                    content={`For manufacturers and PIBOs (Producers, Importers, and Brand Owners), Plastic EPR Credits offer a practical and cost-effective way to meet sustainability goals while fulfilling compliance obligations. Beyond regulatory adherence, they enable companies to demonstrate genuine environmental leadership and responsibility.
Key Benefits:`}
                />

                <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-lg leading-relaxed text-gray-800">
                    <li><span className="font-semibold text-green-800">Cost-Effective Compliance: </span>  EPR credits allow companies to meet their waste management responsibilities without the logistical and financial burden of running large-scale recycling operations.</li>
                    <li><span className="font-semibold text-green-800">Sustainability Leadership:</span>  Investing in EPR credits reflects a brand’s proactive approach to environmental stewardship, strengthening its reputation among consumers and stakeholders.</li>
                    <li><span className="font-semibold text-green-800">Access to Global Markets: </span>  Many regions require proof of environmental compliance for trade and operations. EPR credits help businesses meet these standards, facilitating smoother market entry.</li>
                    <li><span className="font-semibold text-green-800">Regulatory Readiness:</span> As waste management laws evolve, EPR credits help companies stay compliant with current and upcoming environmental regulations, reducing legal and financial risks.</li>
                    <li><span className="font-semibold text-green-800">Environmental Impact:</span> Each EPR credit directly contributes to verified recycling or recovery efforts, reducing plastic pollution and conserving natural resources.</li>
                    <li><span className="font-semibold text-green-800">Simplified Waste Management:</span>  By offsetting their plastic footprint through verified channels, companies can manage waste more efficiently while maintaining full traceability.</li>
                </ul>

                <p className="text-lg leading-relaxed mt-6 text-gray-800">
                    At <span className="font-semibold text-green-700">Penaca</span> , we help businesses integrate Plastic EPR Credits into their sustainability strategies ensuring compliance, enhancing brand value, and contributing to a cleaner planet.

                </p>

                <Section
                    title="Process to Purchase EPR Credits from Plastic Waste Recyclers"
                    content={``}
                />

                <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-lg leading-relaxed text-gray-800">
                    <li><span className="font-semibold text-green-800">Identify EPR Obligations: </span> Begin by determining your product or packaging category and calculating your plastic footprint to understand the quantity of plastic waste you are responsible for managing.</li>
                    <li><span className="font-semibold text-green-800">Connect with Certified Recyclers:</span> Partner with authorized and CPCB-registered recyclers or waste processors to ensure that the collected plastic is handled, sorted, and recycled in an environmentally compliant manner.</li>
                    <li><span className="font-semibold text-green-800">Share EPR Requirements: </span> Provide recyclers with details of your EPR obligation, including the quantity, plastic type, and compliance period to help them prepare an appropriate plan.</li>
                    <li><span className="font-semibold text-green-800">Receive Quotation:</span> The recycler will share a proposal or quotation based on your EPR credit requirements, including details of collection, processing, and certification.</li>
                    <li><span className="font-semibold text-green-800">Obtain EPR Credits and Documentation:</span> Upon completion of the recycling activity and verification of supporting documents, you will receive EPR Plastic Credits along with certificates and records for compliance reporting.</li>
                </ul>

                <Section
                    title="CPCB Plastic Credit Model for Plastic Waste"
                    content={`The Central Pollution Control Board (CPCB) has established a national-level EPR Plastic Credit Model to ensure that producers, importers, and brand owners remain accountable for the plastic waste generated from their products, even after consumption and disposal.
To streamline this process, the CPCB EPR Portal serves as a centralized digital platform where businesses can:`}
                />

                <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-lg leading-relaxed text-gray-800">
                    <li>Register as PIBOs (Producers, Importers, and Brand Owners) in accordance with the official EPR guidelines.</li>
                    <li>Declare their plastic waste generation and recycling data as part of their annual compliance requirements.</li>
                    <li>Monitor EPR credit performance and targets through a transparent, traceable reporting system.</li>
                    <li>Collaborate with registered plastic waste processors and recyclers to fulfill their EPR obligations effectively.</li>
                </ul>

                <p className="text-lg leading-relaxed mt-6 text-gray-800">
                    This framework promotes accountability, transparency, and nationwide participation in responsible plastic waste management.
                </p>

                <Section
                    title="How EPR Plastic Credit Solutions Are Implemented"
                    content={`As a sustainability-driven organization, Penaca is committed to building efficient and transparent systems that simplify EPR Plastic Credit implementation for brands and producers. Through collaboration with verified recyclers and technology-enabled processes, we ensure that every credit represents real, measurable environmental impact.
Our integrated approach combines data intelligence, traceability, and verified recycling networks to manage plastic waste responsibly—from collection to conversion. By leveraging digital tools and partnerships with certified recyclers, we enable brands to meet their EPR targets while supporting large-scale circular economy initiatives.
With a focus on innovation and accountability, Penaca’s EPR framework bridges the gap between compliance and sustainability, helping industries transform plastic waste into valuable resources for a cleaner, more circular future.
`}
                />
                

                <Section
                    title="Validity of EPR Credits for Plastic Waste Recyclers"
                    content={``}
                />
                <p className="text-lg leading-relaxed mt-6 text-gray-800">
                    EPR credits for plastic waste recyclers are valid for two years from the end of the financial year they were generated. They are automatically extinguished after this period and can only be adjusted against the EPR obligation for the same category of plastic waste.
                </p>

                <Section
                    title="How Penaca Enables EPR and Plastic Credit Solutions"
                    content={`EPR Plastic Credits provide businesses with an effective way to take responsibility for the plastic they introduce into the market while actively supporting sustainable waste management initiatives. These credits help organizations balance their plastic footprint and align with environmental regulations and goals.
Companies can leverage EPR Plastic Credits to:`}
                />

                <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-lg leading-relaxed text-gray-800">
                    <li><span className="font-semibold text-green-800">Offset Their Plastic Footprint: </span>  Compensate for the amount of plastic introduced into circulation by supporting verified recycling efforts.</li>
                    <li><span className="font-semibold text-green-800">Achieve Sustainability Objectives:</span> Contribute directly to corporate sustainability and ESG (Environmental, Social, and Governance) goals.</li>
                    <li><span className="font-semibold text-green-800">Strengthen Brand Reputation: </span>  Build trust among environmentally conscious consumers by demonstrating accountability and action.</li>
                    <li><span className="font-semibold text-green-800">Support Recycling Ecosystems:</span>  Invest in certified waste management and recycling projects that create real environmental impact.</li>
                    <li><span className="font-semibold text-green-800">Ensure Regulatory Compliance:</span> Fulfill EPR obligations as outlined by CPCB and other environmental authorities efficiently and transparently.</li>
                </ul>

                <p className="text-lg leading-relaxed mt-6 text-gray-800">
                    Together, we can close the loop on plastic waste and redefine sustainability for a cleaner tomorrow.
                </p>

                {/* === FAQs Section === */}
                <FAQSection />

            </div>
        </Layout>
    );
}

/* === Reusable Section Component === */
function Section({ title, content }: { title: string; content: string }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
        >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-950 border-l-4 md:border-l-8 border-yellow-400 pl-3 md:pl-4">
                {title}
            </h2>
            <p className="text-sm md:text-lg leading-relaxed whitespace-pre-line text-gray-800">
                {content}
            </p>
        </motion.section>
    );
}


function FAQSection() {
    const faqs = [
        {
            question:
                "1. Have EPR Guidelines been notified by Government?",
            answer: `Yes. MoEF&CC vide Fourth Amendment to Plastic Waste Management Rules 2016 notified EPR Guideline on February 16, 2022`,
        },
        {
            question: "2. Which entities shall register on the centralized portal developed by CPCB? ",
            answer: `The following entities shall register on the centralized portal developed by CPCB:

             I. Producer (P)
             II. Importer (I)
             III. Brand owner (BO)
             IV. Plastic Waste Processor engaged in (a) recycling, (b) waste to energy, (c) waste to oil, and (d) industrial composting`,
        },
        {
            question:
                "3. What are the consequences for companies that do not fulfill their CPCB EPR credit obligations?",
            answer: `Businesses that fail to meet their EPR targets as per CPCB regulations may face penalties in the form of environmental compensation. The CPCB can also initiate detailed compliance audits and, in serious cases, take legal action against persistent defaulters for violating environmental norms.`,
        },
        {
            question:
                "4. How is the quantity of different plastic materials translated into plastic credits? Are all types of plastics valued equally when recycled? ",
            answer: `Currently, one ton of plastic collected and managed, or recycled equals one plastic credit, regardless of the plastic type. Each plastic credit is linked to specific information about the type and weight of each plastic type, ensuring traceability. Over time, as better impact assessment data becomes available, these conversion standards may evolve giving greater credit value to difficult-to-recycle materials like multi-layer plastics (MLP) compared to easily recyclable plastics such as PET.`,
        },
        {
            question:
                "5. What are the benefits of using plastic credits?",
            answer: `1. Compliance: Businesses can avoid penalties, which can be significant, and meet their legal requirements.
            2.Sustainability: It provides a tangible way for companies to support environmental goals, enhance their brand image, and contribute to a circular economy.
            3.Cost efficiency: Trading credits can be a more cost-effective way to manage EPR compliance for some companies. `,
        },
        {
            question:
                "6.  What are the repercussions for companies that fail to adhere to EPR regulations?",
            answer: `Companies that do not comply with EPR norms may face financial penalties in the form of environmental compensation, temporary suspension of licenses or operations, and reputational harm due to non-conformance with sustainability and regulatory standards. `,
        },
        {
            question:
                "7. How do Plastic EPR Credits work?",
            answer: `Under the EPR framework, Producers, Importers, and Brand Owners (PIBOs) can fulfill their plastic waste management obligations by buying credits from authorized recyclers or waste processors. Each credit represents a verified quantity of plastic that has been collected, processed, or recycled in an environmentally responsible manner, allowing companies to meet their compliance goals without directly handling the waste themselves. `,
        },
        {
            question:
                "8. Do plastic credit programs genuinely help in lowering plastic waste generation?",
            answer: `Yes. Plastic credit initiatives encourage companies to fund verified recycling and recovery efforts, which strengthen formal waste management systems. By channeling resources into these projects, the mechanism boosts recycling capacity and helps divert significant volumes of plastic away from landfills and the natural environment, contributing to a more circular and sustainable economy. `,
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-4 md:px-10 lg:px-12 py-12 md:py-24"
        >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-950 mb-8 md:mb-12">
                FAQs
            </h2>

            <div className="space-y-4 md:space-y-6">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="border border-yellow-300 rounded-xl md:rounded-2xl shadow-sm overflow-hidden bg-white"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex justify-between items-center px-4 md:px-6 py-4 md:py-5 text-left"
                        >
                            <span className="text-sm md:text-lg font-medium text-gray-900 pr-2">
                                {faq.question}
                            </span>
                            {openIndex === i ? (
                                <ChevronUp className="text-green-800 size-5 md:size-6 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="text-green-800 size-5 md:size-6 flex-shrink-0" />
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
                            className="overflow-hidden px-4 md:px-6"
                        >
                            <p className="pb-4 md:pb-6 text-gray-800 whitespace-pre-line text-xs md:text-base leading-relaxed">
                                {faq.answer}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
