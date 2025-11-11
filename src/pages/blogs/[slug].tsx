import { useRouter } from "next/router";
import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


const blogData = [
    {
        slug: "recycling-transforms-future",
        title: "Addressing the Plastic Packaging Crisis Through Recycling",
        image: "https://images.pexels.com/photos/18121632/pexels-photo-18121632.jpeg",
        content: (
            <>
                <p>
                    Plastic packaging plays a crucial role in modern living offering convenience, safety, and resource efficiency but its use has led to a global crisis in waste management. Packaging from bottled water, food trays, grocery bags, and e-commerce shipments make up much of plastic waste found in landfills and oceans. Despite its prevalence, effective recycling systems are lacking, worsened by low consumer awareness and inconsistent government regulations, which lead to the majority of waste being disposed of unsustainably.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Examples & Types of Plastic Packaging</h2>
                <p>
                    From PET bottles and HDPE detergent containers to LDPE wraps and PP caps, plastic packaging varies in properties and recyclability. Identifying and separating these types are essential for effective recycling.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Challenges in Reducing Packaging Waste</h2>
                <p>
                    Barriers include insufficient infrastructure, economic factors favoring virgin plastics, and contamination. This makes scaling up recycling difficult and perpetuates environmental damage.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Role of Stakeholders</h2>
                <p>
                    <ul>
                        <li><strong>Individuals:</strong> Refuse single-use packaging, support eco-friendly brands, practice proper sorting and cleaning for recycling.</li>
                        <li><strong>Businesses:</strong> Redesign packaging to increase recyclability, partner with formal recyclers, educate consumers.</li>
                        <li><strong>Governments:</strong> Enforce EPR, invest in collection and recycling, back recycling innovation.</li>
                    </ul>
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Why Recycling Packaging Promotes Sustainability</h2>
                <p>
                    <strong>Effective recycling:</strong>
                    <ul>
                        <li>Diverts waste from oceans/landfills.</li>
                        <li>Reduces greenhouse gas emissions.</li>
                        <li>Supports circular supply chains and resource preservation.</li>
                    </ul>
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Conclusion</h2>
                <p>
                    To mitigate the packaging crisis, a push for circular systems and better stakeholder engagement is required. Recycling is the cornerstone of cleaner, safer environments. Companies like Penaca Circular Solutions set the standard for a responsible, innovative future.
                </p>
            </>),
    },
    {
        slug: "sustainable-polymers",
        title: "Using Recycled Plastics to Build a Sustainable Supply Chain",
        image: "https://images.pexels.com/photos/6613959/pexels-photo-6613959.jpeg",
        content: (
            <>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Introduction</h2>
                <p>
                    Supply chains are being reimagined amid urgent calls for environmental responsibility. For brands operating in plastics, the shift to recycled HDPE, PP, and LDPE now underpins both business resilience and ecological stewardship. A sustainable supply chain incorporates ethical sourcing, wise resource use, and transparency—all central to reducing harms and building long-term value.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Defining Sustainability in Supply Chains</h2>
                <p>
                    By balancing people, planet, and profit, sustainable supply chains embed environmental and social responsibility across sourcing, manufacturing, and distribution stages. The aim, resilient systems less dependent on virgin resources, less harmful to ecology, and fair to stakeholders.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Core Benefits of Sustainable Supply Chain Management</h2>
                <ul>
                    <li><strong>Risk Mitigation:</strong>  Prepares companies for resource shortages and reputational risks.</li>
                    <li><strong>Cost Reduction:</strong> Less waste, more energy savings.</li>
                    <li><strong>Improved Reputation:</strong> Consumers and investors favor sustainability.</li>
                    <li><strong>Innovation:</strong> Drives new technologies and solutions.</li>
                    <li><strong>Competitive Advantage:</strong> Differentiates in crowded markets.</li>

                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Best Practices</h2>
                <ul>
                    <li><strong>Ethical Sourcing:</strong> Ensure recycled inputs come from responsible suppliers.</li>
                    <li><strong>Traceability:</strong> Utilize tech for supply chain visibility.</li>
                    <li><strong>Quality Assurance:</strong> Maintain high standards for recycled plastics.</li>
                    <li><strong>Collaboration:</strong> Partner with recycling specialists for tailored solutions</li>

                </ul>
            </>),
    },
    {
        slug: "Mechanical-Chemical-Recycling",
        title: "Mechanical vs. Chemical Recycling: What’s Next for Polyolefins?",
        image: "https://images.pexels.com/photos/10186806/pexels-photo-10186806.jpeg",
        content: (
            <>
                <p>Plastic recycling is evolving with the rise of chemical methods alongside established mechanical processes. This duality is especially relevant for polyolefins like HDPE, LDPE, LLDPE, and PP, where standards, purity, and input quality matter acutely.</p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Mechanical vs. Chemical Recycling: Fundamentals</h2>
                <ul>
                    <li><strong>Mechanical Recycling:</strong> Physically processes clean, sorted plastics—grinding, washing, re-melting into lower-grade outputs.</li>
                    <li><strong>Chemical Recycling:</strong> Uses advanced processes to break polymers into monomers, suitable even for contaminated or multi-layered waste. Can yield high-purity replacement for virgin plastic, ideal for food packaging/end-uses.</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Types of Chemical Recycling</h2>
                <ul>
                    <li><strong>Pyrolysis:</strong> Produces fuels or new materials from mixed waste.</li>
                    <li><strong>Gasification:</strong> Converts plastics to syngas for chemical products or power.</li>
                    <li><strong>Depolymerization:</strong> Breaks specific polymers into reusable monomer form.</li>
                    <li><strong>Solvolysis:</strong> Utilizes solvents to efficiently extract reusable polymers.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Key Benefits of Chemical Methods</h2>
                <ul>
                    <li>Handles harder-to-recycle streams missed by mechanical systems.</li>
                    <li>Creates product-to-product loops and high-value, safe outputs.</li>
                    <li>Drives circularity and supports net-zero ambitions for industrial sectors.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Industry Implications and Future Prospects</h2>
                <p>Integrating both methods chemical for complex or contaminated waste, mechanical for clean input enables holistic waste management. Advancements in robotics, AI sorting, and policy support will accelerate adoption. Companies investing early in both will secure compliance and ESG leadership.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Conclusion</h2>
                <p>Chemical recycling is unlocking new frontiers for plastics sustainability. Successful integration with mechanical systems will shape a circular future, where all plastic types can be efficiently and safely reused.</p>
            </>),
    },
    {
        slug: "circular-economy-plastic",
        title: "The Role of Plastic Recycling in Achieving Circular Economy",
        image: "https://plus.unsplash.com/premium_photo-1683072005067-455d56d323b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        content: (
            <>
                <p>The circular economy model reuse, recycle, regenerate is redefining sustainability. Plastic recycling is its foundation, transforming waste into valuable input and reducing resource consumption. This system mimics nature, turning what’s left over into new beginnings for other processes.</p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Why Plastic Recycling Matters</h2>
                <ul>
                    <li><strong>Waste Reduction:</strong> Reduces pollution and landfill burden.</li>
                    <li><strong>Resource Conservation:</strong>  Lessens' need for fresh fossil resources.</li>
                    <li><strong>Energy Efficiency: </strong> Recycled plastics demand less production energy than virgin plastics.</li>
                    <li><strong>Job Creation:</strong>  Spawns employment, innovation, and economic resilience.</li>
                    <li><strong>Material Flow:</strong>  Keeps resources circulating in productive use.</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Pragmatic Strategies</h2>
                <p>While developing fully sustainable materials remains an end goal, recycling is the essential bridge for managing the immense plastic volumes already in circulation. Solutions must combine effective recycling facilities, technology investment, and product design for recyclability.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Stakeholder Engagement</h2>
                <ul>
                    <li><strong>Consumers:</strong>  Practice proper sorting, choose recycled products.</li>
                    <li><strong>Industries:</strong>  Invest in recycling systems and eco-friendly design.</li>
                    <li><strong>Governments: </strong>   Provide supportive policy (EPR, recycled content requirements) to develop robust recycling markets.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Conclusion</h2>
                <p>Plastic recycling, central to the circular economy, offers real solutions for sustainability. By closing the loop and engaging every stakeholder, industries can shift to greener, more resilient models for a better future.</p>
            </>),
    },
    {
        slug: "Science-and-Significance-of-HDPE-Recycling",
        title: "The Science and Significance of HDPE Recycling: Transforming Waste into Opportunity",
        image: "https://plus.unsplash.com/premium_photo-1661373732193-ea19ebe7f51d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
        content: (
            <>
                <p>High-Density Polyethylene (HDPE) is everywhere from milk jugs to durable industrial containers making it one of the most prevalent plastics globally. Its impact is profound, not just as a material but as part of an urgent environmental story. Each day, millions of tons of HDPE waste accumulate across landfills, oceans, and natural habitats, threatening biodiversity and human health. Recycling HDPE is no longer optional; it’s central to circular economy goals, climate change mitigation, and sustainable industrial growth.
                    The global HDPE plastic bottle recycling market alone was valued at USD 1,633 million in 2024 and is projected to reach USD 2,637 million by 2031, growing at a 7.3% CAGR underscoring a fast-evolving landscape shaped by policies and technologies.
                    <br />
                    HDPE is a thermoplastic polymer known for its high strength-to-density ratio. Developed in the 1950s as a lightweight but strong alternative plastic, HDPE ranks among the most chemically resistant plastics, making it ideal for packaging corrosive chemicals, household products, and food-safe containers.
                    <ul>
                        <li><strong>Widely used in:</strong>Bottles, pipes, geomembranes, toys, and plastic lumber.</li>
                        <li><strong>Attributes:</strong>Resistant to impact, moisture, and chemicals; recyclable; long-lasting.</li>
                        <li><strong>Importance:</strong>HDPE’s resistance means it does not degrade easily, leading to environmental persistence when improperly disposed.</li>
                    </ul>
                    This durability, though beneficial industrially, poses significant waste management challenges, fueling the need for effective recycling practices.

                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">The Recycling Journey: Processes and Challenges</h2>
                <p>The majority of HDPE recycling is mechanical collection, segregation by type, intensive washing to remove contaminants, shredding into flakes, pelletizing, and remanufacturing into new products. Recent advances like Near-Infrared (NIR) spectroscopy and artificial intelligence sorting have improved sorting accuracy beyond 98%, reducing contamination and boosting output quality.</p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Chemical Recycling Emergence</h2>
                <p>Chemical recycling methods, including depolymerization and pyrolysis, are gaining traction to process multi-layered or contaminated HDPE that mechanical recycling cannot handle. These techniques break HDPE down to its monomers, producing virgin-quality feedstock suitable for food-grade applications where safety is paramount.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Environmental and Societal Implications</h2>
                <p><strong>Recycling HDPE offers substantial environmental benefits:</strong></p>
                <ul>
                    <li>Reduces landfill waste and ocean pollution by diverting plastic from ecosystems.</li>
                    <li>Cuts greenhouse gas emissions by up to 70% compared to virgin HDPE production.</li>
                    <li>Conserves fossil resources and reduces dependence on petroleum feedstocks.</li>
                    <li>Creates green jobs, especially within informal waste collection networks transitioning into formal sectors.</li>
                </ul>
                <p>However, improper disposal continues to cause soil and water contamination, endangering ecosystems. The durability of HDPE means it can persist for centuries if not recycled or managed properly.</p>
                <p>Popular, versatile, and durable, HDPE's future hinges on the effectiveness of recycling systems. By combining advanced technology, policy enforcement, industry collaboration, and public participation, HDPE can transition from an environmental liability to a cornerstone of sustainable materials management.</p>
                <p>The journey from plastic bottle to recycled pellet is complex but rewarding, offering economic and ecological opportunities critical for our planet’s health. Active investment and awareness today will determine the legacy we leave for tomorrow—a circular economy powered by innovation and responsibility.</p>

            </>),
    },
    {
        slug: "HDPE-The-Backbone-of-Sustainability",
        title: "HDPE — The Backbone of Sustainable Recycling.",
        image: "https://images.unsplash.com/photo-1758599668932-484f54cdf48f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        content: (
            <>
                <p>High-Density Polyethylene (HDPE) has quietly become the unsung hero of modern sustainability. Found in milk jugs, shampoo bottles, and detergent containers, this durable yet lightweight polymer is one of the most recycled plastics globally. As businesses and governments push toward circular economies, HDPE recycling is redefining how we approach resource efficiency and waste reduction.</p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">1. Understanding HDPE and Its Importance</h2>
                <p>HDPE is a thermoplastic polymer produced from petroleum. Its key characteristics include high tensile strength, chemical resistance, and durability. These properties make it ideal for applications requiring sturdiness and longevity such as industrial piping, packaging, and construction materials.
                    <br />
                    What sets HDPE apart is its recyclability. Unlike some plastics that degrade quickly when reheated, HDPE maintains its integrity across multiple recycling cycles, making it a cornerstone of sustainable manufacturing.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">2. The Journey of HDPE: From Waste to Resource</h2>
                <p>The HDPE recycling process typically follows four steps:</p>
                <ul>
                    <li><strong>1. Collection and Sorting:</strong> HDPE waste is separated from other plastics using density-based methods and optical sensors.</li>
                    <li><strong>2. Cleaning and Shredding:</strong> Contaminants like labels and residues are removed; plastics are shredded into flakes.</li>
                    <li><strong>3. Melting and Pelletizing:</strong> The flakes are melted and converted into pellets.</li>
                    <li><strong>4. Re-manufacturing:</strong> These pellets are used to create new products pipes, containers, or even recycled furniture.</li>
                </ul>
                <p>Each cycle of HDPE recycling diverts thousands of tons of waste from landfills, conserving both material and energy resources.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">3. Environmental and Economic Benefits</h2>
                <p><strong>HDPE recycling offers dual advantages:</strong></p>

                <li>Reduces landfill pressure and prevents oceanic pollution.</li>
                <li>Consumes 50–60% less energy compared to virgin plastic production.</li>
                <li>Lowers carbon footprint, saving approximately 1.5 tons of CO₂ per ton recycled.</li>
                <li>Supports local economies by creating jobs in collection, sorting, and manufacturing sectors.</li>

                <p>For companies, switching to recycled HDPE (rHDPE) provides a strong sustainability narrative while meeting regulatory standards for recycled content.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">4. Challenges in HDPE Recycling</h2>
                <p><strong>Despite its success, HDPE recycling faces challenges:</strong></p>
                <li>Contamination from food or non-recyclable materials reduces quality.</li>
                <li>Inconsistent collection systems across regions limit scale.</li>
                <li>Market volatility for recycled resin can discourage investment.</li>
                <p>To overcome these, technological advancements like AI-based sorting and chemical recycling integration are paving the way forward.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">5. Future Outlook</h2>
                <p>With rising global demand for sustainable materials, HDPE’s future looks bright. Many FMCG brands are now pledging to use 50-100%
                    recycled HDPE in packaging by 2030. Investment in advanced sorting facilities and policy measures such as Extended Producer Responsibility (EPR) will accelerate this transition.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Conclusion</h2>
                <p>HDPE embodies the essence of circular economy thinking: turning waste into wealth. By recycling it efficiently, we’re not only reducing plastic pollution but also building a future where every molecule of plastic counts.</p>
            </>),
    },
    {
        slug: "LDPE-LLDPE—The-Flexible-Future",
        title: "LDPE and LLDPE — The Flexible Future of Plastic Recycling",
        image: "https://images.pexels.com/photos/27666146/pexels-photo-27666146.jpeg?_gl=1*1lpbask*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjEzOTUwODkkbzI2JGcxJHQxNzYxMzk1MDkwJGo1OSRsMCRoMA..",
        content: (
            <>
                <p>Lightweight yet resilient, <strong>Low-Density Polyethylene (LDPE)</strong> and <strong>Linear Low-Density Polyethylene (LLDPE)</strong> form the invisible backbone of everyday products plastic bags, cling films, bubble wraps, and agricultural sheets. These materials provide flexibility and transparency but are often labeled as “hard-to-recycle.” Today, innovation and circular design are changing that narrative.</p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">1. The Chemistry of Flexibility</h2>
                <p><strong>LDPE and LLDPE are polymers derived from ethylene, but their structures differ slightly:</strong></p>
                <li><strong>LDPE</strong> has highly branched chains, making it soft and flexible.</li>
                <li><strong>LLDPE</strong>  has a linear chain with short branches, offering superior strength and stretchability.</li>
                <p>Their versatility makes them essential for flexible packaging, yet the very same property thinness and lightweight poses a recycling challenge.</p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">2. Recycling Process and Challenges</h2>
                <p>Unlike rigid plastics such as HDPE, flexible LDPE/LLDPE waste often contains food residues, dyes, and multi-layer films. This contamination complicates sorting and cleaning.</p>
                <p>Typical recycling stages include:</p>
                <ul>
                    <li><strong>1. Collection and Sorting:</strong> Advanced AI and infrared sorting systems now help separate LDPE/LLDPE films.</li>
                    <li><strong>2. Washing and Pelletizing: </strong> After cleaning, the plastic is melted into granules for reuse.</li>
                    <li><strong>3. Reprocessing:</strong> These pellets are used in producing garbage bags, agricultural films, or plastic lumber.</li>
                </ul>
                <p>However, not all facilities are equipped to process film-grade plastics, leading to low global recycling rates (~10%).</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">3. The Rise of Closed-Loop Systems</h2>
                <p>Forward-thinking brands and recyclers are investing in <strong>closed-loop recycling</strong>, where post-consumer LDPE films are converted back into packaging-grade materials.
                    For instance, chemical recycling technologies like <strong>pyrolysis</strong> convert LDPE into oil, which can then be refined into new plastics, closing the material loop.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">4. Environmental and Economic Advantages</h2>
                <li><strong>Energy Efficiency:</strong> Recycling LDPE/LLDPE consumes 60% less energy than producing virgin material.</li>
                <li><strong>Reduced Plastic Leakage: </strong>Flexible packaging accounts for nearly 40% of ocean plastic; recycling mitigates this dramatically.</li>
                <li><strong>Revenue Streams: </strong> Recycled LDPE granules find markets in construction, agriculture, and packaging sectors.</li>


                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">5. Future Innovations</h2>
                <li><strong>Digital Watermarking</strong> for packaging to aid automated sorting.</li>
                <li><strong>Bio-based LDPE alternatives</strong> to reduce fossil dependency.</li>
                <li><strong>Extended Producer Responsibility (EPR)</strong> pushing industries to design recyclable packaging.</li>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Conclusion</h2>
                <p>The story of LDPE and LLDPE recycling is one of innovation meeting necessity. While challenges persist, technology and awareness are driving a paradigm shift. By reimagining how we design, collect, and process flexible plastics, we’re inching closer to a truly circular economy.</p>
            </>),
    },
    {
        slug: "MDPE-Plastic-Sustainability",
        title: "MDPE — The Middle Path to Plastic Sustainability",
        image: "https://images.pexels.com/photos/13472779/pexels-photo-13472779.jpeg?_gl=1*wtusly*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjEzOTUwODkkbzI2JGcxJHQxNzYxMzk1Mzk4JGoyOCRsMCRoMA..",
        content: (
            <>
                <p>Between the rigidity of HDPE and the flexibility of LDPE lies a quiet middle ground <strong>Medium-Density
                    Polyethylene (MDPE)</strong>. Often overshadowed by its more famous counterparts, MDPE combines strength with
                    elasticity, resistance with adaptability. From gas pipes to packaging films, this polymer has long supported
                    industrial infrastructure and now, it’s stepping into the spotlight of sustainable innovation.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">1. What Makes MDPE Unique?</h2>
                <p><strong>MDPE’s molecular structure sits between HDPE and LDPE, giving it:</strong></p>
                <li>Moderate strength and flexibility</li>
                <li>Excellent resistance to shock and cracking</li>
                <li>Chemical durability that ensures long-term performance</li>
                <p>It’s a preferred material for applications like <strong>water and gas pipes, shrink films, and industrial packaging</strong>, where reliability is crucial.</p>
                <p>Yet, what makes MDPE valuable in sustainability circles is not only its performance but its <strong>potential for circularity</strong>.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">2. The Hidden Challenge: Recycling Complexity</h2>
                <p>MDPE, though recyclable, is often grouped with other polyethylene streams, leading to inconsistent recovery.</p>
                <p>Most recycling facilities classify it under “PE mixed plastics,” which results in:</p>
                <li>Loss of purity</li>
                <li>Degradation of polymer strength</li>
                <li>Limited reuse in high-value products</li>

                <p>This challenge underscores the need for <strong>dedicated MDPE recycling streams</strong> and improved material tracking.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">3. Industry Innovations</h2>
                <p>Today, technology is rewriting MDPE’s future:</p>
                <li><strong>Infrared sorting and AI-based classification</strong>  now allow recyclers to identify MDPE with high accuracy.</li>
                <li><strong>Advanced extrusion methods</strong> maintain polymer integrity, enabling reuse in gas piping or flexible packaging.</li>
                <li><strong>Chemical recycling</strong> converts MDPE waste into feedstock for new polymers extending its lifecycle indefinitely.</li>
                <p>In the EU and Japan, companies have begun blending recycled MDPE (rMDPE) into municipal pipeline systems, showing how functional recycling can align with infrastructure needs.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">4. The Environmental Payoff</h2>
                <p>When MDPE is properly recycled:</p>
                <li><strong>CO₂ emissions drop by 60–70%</strong>  compared to virgin production.</li>
                <li><strong>Energy use decreases significantly, </strong>saving roughly 2.5 tons of oil per 10 tons recycled.</li>
                <li><strong>Waste diversion increases, </strong>as mixed polyolefin recycling systems recover more usable material.</li>
                <p>Moreover, the material’s durability ensures longer product life cycles reducing frequent replacements and associated emissions.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">5. Toward Circular Infrastructure</h2>
                <p>Imagine an urban pipeline network where every meter of pipe is born from recycled material resilient, safe, and sustainable. That vision is closer than ever with MDPE’s evolution.
                    <br />
                    Governments adopting EPR regulations and Green Public Procurement are already incentivizing the use of recycled materials in public infrastructure. MDPE’s balance between performance and recyclability positions it as the ideal candidate for a circular economy in construction and utilities
                    <br />
                    MDPE represents the “middle path” not just chemically, but philosophically  balancing strength, flexibility, and sustainability. Its story is a reminder that even lesser-known materials can become central pillars in the transition toward a circular, resource-efficient world.
                </p>
            </>),
    },
    {
        slug: "Polypropylene-Industrial-Circularity",
        title: "Polypropylene (PP) — The Reinvention of Industrial Circularity",
        image: "https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?_gl=1*qlzb8i*_ga*MjEyMjQzODkyNC4xNzUwNDA2MDE1*_ga_8JE65Q40S6*czE3NjEzOTUwODkkbzI2JGcxJHQxNzYxMzk1NTc5JGozMiRsMCRoMA..",
        content: (
            <>
                <p>Polypropylene, or PP, is one of the world’s most versatile and widely used plastics from yogurt cups to car
                    bumpers and laboratory equipment. For decades, PP has symbolized industrial efficiency. But in the face of
                    a global sustainability reckoning, this same polymer is being redefined not as disposable, but as
                    <i> recyclable, reusable, and regenerative</i>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">1. The Power of Polypropylene</h2>
                <p>PP is prized for its:</p>
                <li>High melting point ideal for hot-fill packaging.</li>
                <li>Impact resistance and stiffness used in automotive parts and medical tools.</li>
                <li>Light weight and chemical resilience reducing transport emissions and increasing durability.</li>
                <p>These traits make PP indispensable across industries  yet they also make it one of the most under-recycled plastics globally.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">2. The Recycling Paradox</h2>
                <p>Despite being labeled with the #5 recycling code, PP has lagged behind PET and HDPE in recovery rates.</p>
                <p> The reasons are multifold:</p>
                <li>Inconsistent collection systems</li>
                <li>Color and additive variations</li>
                <li>Lack of widespread recycling infrastructure</li>

                <p>Globally, only about 1% of polypropylene is recycled efficiently. Most ends up in landfills or incineration  a loss of both material and economic value.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">3. Turning the Tide: Innovation in PP Recycling</h2>
                <p>New technologies are rewriting PP’s future:</p>
                <li><strong>Mechanical Recycling 2.0:</strong>  Advanced melt filtration and deodorization systems now produce near-virgin-quality rPP (recycled PP).</li>
                <li><strong>Chemical Recycling:</strong>  Processes like pyrolysis and depolymerization convert PP waste into monomers or fuel-grade oil, re-entering the industrial cycle.</li>
                <li><strong>Sorting AI Systems:</strong> Vision-based sorting can now distinguish PP grades and colors at industrial scale, increasing purity rates.</li>
                <p>Companies like PureCycle Technologies have demonstrated closed-loop PP systems, achieving transparency and odor-free recycled output suitable for food-grade applications.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">4. The Industrial Opportunity</h2>
                <p>For industries, adopting recycled PP isn’t just a sustainability move, it’s a strategic advantage:</p>
                <li><strong>Automotive Sector:</strong>  Recycled PP trims reduce material costs and improve ESG scores.</li>
                <li><strong>FMCG Packaging: </strong>Brands meet recycled content mandates without sacrificing design flexibility.</li>
                <li><strong>Infrastructure: </strong>PP pipes and containers made from recycled materials outperform in durability and carbon efficiency.</li>
                <p>According to McKinsey’s 2023 Circular Plastics Report, recycled PP can cut lifecycle emissions by up to 70%, representing one of the highest impact potentials among commodity plastics.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">5. Toward a PP Renaissance</h2>
                <p>The next frontier lies in polymer-to-polymer upcycling, where PP waste is refined into higher-value materials. Integration of blockchain traceability ensures transparency across the recycling value chain, and policy-driven incentives under EPR frameworks are scaling adoption.</p>
                <p>More than a material, PP now stands as a symbol of reinvention of how industrial materials can evolve toward sustainability without compromising performance.</p>
                <p>Polypropylene’s story mirrors our industrial evolution from unchecked utility to conscious responsibility. As recycling technologies mature and industries rethink material design, PP could emerge as the face of the next great sustainability revolution where even the toughest polymers learn to live again.</p>
            </>),
    },
    {
        slug: "Lifecycle-of-Plastics",
        title: "The Lifecycle of Plastics — From Cradle to Circularity",
        image: "https://images.unsplash.com/photo-1647763563889-109bbe7591ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
        content: (
            <>
                <p>Imagine a single plastic bottle. Born from ancient fossil fuels, molded in a factory, filled with water, and
                    sold at a corner store. Within minutes, it fulfills its purpose and then begins a journey that could last hundreds of years.
                </p>
                <p>This journey is not just a story of pollution; it’s a story of transformation. A story that could end in waste
                    or be reborn into something new.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">1. Birth: The Creation of Modern Plastics</h2>
                <p>Plastics start their life as hydrocarbons natural gas or crude oil refined and polymerized into long chains like <strong>HDPE, LDPE, PP, or PET</strong>.
                    <br />
                    Each chain gives plastics their strength, flexibility, or resistance, making them indispensable for industries from food packaging to aerospace.
                </p>
                <p>But here lies the paradox: <strong>what made plastics durable also made them indestructible</strong>.</p>
                <p>Every toothbrush ever made still exists in some form today buried, burnt, or drifting.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">2. Life: The Use and Utility</h2>
                <p>Plastic’s utility is undeniable:</p>
                <li>Keeps food fresh longer</li>
                <li>Reduces vehicle weight and fuel use</li>
                <li>Protects medicines and electronics</li>
                <p>Yet, this utility blinds us to its volume</p>
                <p>Over <strong>400 million tons</strong> of plastic are produced every year, and only <strong>9% gets recycled</strong>. The rest? A silent
                    build-up of convenience turned consequence.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">3. Death or Rebirth: The Recycling Junction</h2>
                <p>At the end of its first life, a plastic product faces a fork in the road:</p>
                <li><strong>Landfill:</strong>  Buried for centuries, slowly leaching chemicals.</li>
                <li><strong>Incineration:</strong>  Destroyed for energy but emitting carbon.</li>
                <li><strong>Recycling:</strong> The narrow path to rebirth.</li>
                <p>When recycled correctly, HDPE can become new detergent bottles; LDPE can be reborn as carry bags or film;
                    PP can form durable automotive parts. Each recycling process gives the polymer another life another chance to serve without harm.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">4. The Rise of Circular Thinking</h2>
                <p>The <strong>circular economy</strong> reimagines this story.</p>
                <p>Instead of a “take-make-dispose” cycle, it proposes <strong>“make-use-return”</strong> a continuous loop where resources stay in motion.</p>
                <p>Companies and governments are now setting measurable goals:</p>
                <li><strong>EU Circular Economy Action Plan</strong>  targets 55% plastic packaging recycling by 2030.</li>
                <li><strong>India’s EPR Rules (2022) </strong> require brands to take back plastic waste and ensure its reuse.</li>
                <li>Startups are converting <strong>polyolefins (HDPE, LDPE, PP) </strong>into reusable pellets or even <strong>biofuel substitutes.</strong></li>
                <p>Each policy, each innovation another verse in the plastic’s second life.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Conclusion: Rewriting the Ending</h2>
                <p>The lifecycle of plastic is not fate it’s design.</p>
                <p> If designed wisely, managed responsibly, and recycled intelligently, plastic can be <strong>part of the solution</strong>,
                    not the problem. The bottle’s journey can end not in a landfill, but back in our hands lighter, cleaner, and
                    circular.</p>
            </>),
    },
    {
        slug: "Sorting-the-Future",
        title: "Sorting the Future — How Technology is Transforming Plastic Recycling",
        image: "https://plus.unsplash.com/premium_photo-1737362946506-e3d9153e751c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        content: (
            <>
                <p>In a recycling plant, thousands of bottles, films, and containers rush along conveyor belts a chaotic river of colors and shapes.
                <br/>
                But then, in milliseconds, laser beams, AI cameras, and robotic arms identify and separate them HDPE here, LDPE there, PP to the side.
                </p>
                <p>This silent choreography represents one of humanity’s most <strong>underrated revolutions smart sorting technology</strong> 
                the key that could unlock the full potential of recycling.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">1. Why Sorting Matters</h2>
                <p>Plastic recycling begins long before the machines it begins with separation.
                <br/>
                If plastics of different types are mixed say HDPE with PVC the final product weakens, loses clarity, or even becomes unusable.
                <br/>
                Sorting is the heart of recycling. Without accurate sorting, there is no circular economy.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">2. The Old World of Manual Sorting</h2>
                <p>In the early days of recycling, workers manually picked plastics from waste piles, relying on experience and visual cues.
                <br/>
                But this was slow, unsafe, and inefficient. Only the cleanest, most obvious materials were recovered.</p>
                <p>As waste volumes grew, manual sorting became unsustainable leading to landfills overflowing with valuable recyclables.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">3. The Rise of Smart Sorting</h2>
                <p>Then came the revolution:</p>
                <li><strong>Near-Infrared (NIR) Spectroscopy:</strong>  Detects chemical signatures of plastics by how they reflect light.</li>
                <li><strong>AI Vision Systems:</strong>  Trained on millions of samples, these systems can now distinguish HDPE, LDPE, PP, and PET with 98% accuracy.</li>
                <li><strong>Robotic Arms:</strong> Sort 60+ items per minute with precision impossible for human hands.</li>
                <li><strong>IoT-Enabled Plants:</strong> Track recycling rates and contamination in real-time.</li>
                <p>These technologies, once limited to high-tech countries, are now emerging in India and Southeast Asia
                     driven by startups and sustainability mandates.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">4. The Economic Ripple Effect</h2>
                <p>Automated sorting doesn’t just clean waste it creates value:</p>
                <li>Recyclers produce higher-grade pellets</li>
                <li>Manufacturers gain stable, traceable recycled material supply.</li>
                <li>Governments reduce landfill dependency and import costs.</li>
                <p>McKinsey estimates that better sorting could increase global plastic recycling rates by 50% and add $60 billion
                     annually to the circular economy.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">5. The Human-Tech Partnership</h2>
                <p>Technology can do the sorting, but people must drive the purpose.
                <br/>
                Workers now transition from manual picking to <strong>data-driven operations</strong> monitoring AI systems, maintaining 
                equipment, and ensuring ethical recycling flows.
                <br/>
                Recycling becomes not just cleaner, but <strong>more dignified</strong>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-950">Conclusion: A Revolution in Every Beam of Light</h2>
                <p>Sorting technology has transformed recycling from a manual chore to a <strong>precision science</strong>.
                <br/>
                It’s where innovation meets responsibility and where every scanned bottle and identified polymer takes us 
                one step closer to a sustainable, circular world.
</p>
            </>),
    },
];

export default function BlogArticle() {
    const router = useRouter();
    const { slug } = router.query;

    // Find matching article
    const article = blogData.find((b) => b.slug === slug);

    if (!article) return <p>Loading...</p>;

    return (
        // <Layout>
        //     <div className="max-w-4xl mx-auto px-6 py-16">
        //         <img
        //             src={article.image}
        //             alt={article.title}
        //             className="w-full h-[500px] object-cover rounded-2xl mb-10"
        //         />
        //         <h1 className="text-4xl font-bold mb-6 text-blue-950">{article.title}</h1>
        //         <p className="text-lg leading-relaxed whitespace-pre-line text-gray-800">
        //             {article.content}
        //         </p>
        //     </div>
        // </Layout>

        <Layout>
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* === LEFT CONTENT AREA === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          {/* Featured Image */}
          <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-md mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Blog Title */}
          <h1 className="text-4xl font-bold mb-6 text-blue-950 leading-tight">
            {article.title}
          </h1>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            {article.content}
          </div>
        </motion.div>

        {/* === RIGHT SIDEBAR === */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 h-fit sticky top-28"
        >
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">
            OTHER BLOGS
          </h2>

          <ul className="space-y-3">
            {blogData.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/blogs/${b.slug}`}
                  className={`block text-blue-950 hover:text-yellow-600 transition-colors font-medium ${
                    b.slug === slug ? "font-semibold text-yellow-600" : ""
                  }`}
                >
                   {b.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.aside>
      </section>
    </Layout>
    );
}
