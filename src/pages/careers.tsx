"use client";
import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, Users, Heart, Leaf, TrendingUp, ArrowRight } from "lucide-react";

const jobPositions = [
  {
    id: 1,
    title: "Operations Manager",
    department: "Operations",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead and manage day-to-day recycling operations, ensuring efficiency, safety, and quality standards are met across all processing facilities.",
    responsibilities: [
      "Oversee daily plant operations and production schedules",
      "Manage team of 20+ operators and supervisors",
      "Implement process improvements for efficiency",
      "Ensure compliance with environmental regulations"
    ]
  },
  {
    id: 2,
    title: "Quality Control Engineer",
    department: "Quality Assurance",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3+ years",
    description: "Ensure the highest quality standards for recycled plastic granules through rigorous testing and quality control processes.",
    responsibilities: [
      "Conduct quality tests on incoming materials and finished products",
      "Develop and maintain quality documentation",
      "Collaborate with production team on quality improvements",
      "Handle customer quality inquiries and audits"
    ]
  },
  {
    id: 3,
    title: "Supply Chain Coordinator",
    department: "Supply Chain",
    location: "Remote / Hyderabad",
    type: "Full-time",
    experience: "2+ years",
    description: "Coordinate the collection and logistics of plastic waste materials from suppliers across India.",
    responsibilities: [
      "Manage relationships with scrap suppliers",
      "Coordinate logistics and transportation",
      "Track and optimize inventory levels",
      "Negotiate pricing and contracts with vendors"
    ]
  },
  {
    id: 4,
    title: "Environmental Compliance Officer",
    department: "Sustainability",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "4+ years",
    description: "Ensure all operations comply with environmental regulations and lead sustainability initiatives.",
    responsibilities: [
      "Monitor and report on environmental compliance",
      "Manage EPR documentation and certifications",
      "Lead sustainability improvement projects",
      "Liaise with regulatory authorities"
    ]
  },
  {
    id: 5,
    title: "Business Development Executive",
    department: "Sales",
    location: "Pan India",
    type: "Full-time",
    experience: "2+ years",
    description: "Drive business growth by acquiring new clients and expanding relationships with existing customers.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain client relationships",
      "Achieve monthly and quarterly sales targets",
      "Represent company at industry events"
    ]
  },
  {
    id: 6,
    title: "Machine Operator",
    department: "Production",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "1+ years",
    description: "Operate and maintain recycling machinery to process plastic waste into high-quality granules.",
    responsibilities: [
      "Operate extrusion and pelletizing equipment",
      "Perform routine maintenance and cleaning",
      "Monitor production quality parameters",
      "Follow safety protocols and procedures"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family"
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career progression paths and learning opportunities"
  },
  {
    icon: Leaf,
    title: "Meaningful Work",
    description: "Make a real impact on environmental sustainability"
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with passionate professionals committed to change"
  }
];

export default function Careers() {
  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(`Hi Penaca Team,\n\nI am interested in applying for the ${jobTitle} position.\n\nPlease find my details below:\n\nName: \nPhone: \nExperience: \n\nI have attached my resume for your review.\n\nThank you!`);
    window.location.href = `mailto:nageswara@penaca.in?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      {/* === Banner Section === */}
      <section className="relative w-screen h-[30vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Careers Banner"
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
            Join Our Team
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-5xl leading-tight"
          >
            Build Your Career While Building a Sustainable Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="mt-4 md:mt-8 text-sm md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed px-2"
          >
            Join Penaca and be part of India&apos;s circular economy revolution. We&apos;re looking for passionate individuals who want to make a difference.
          </motion.p>
        </div>
      </section>

      {/* === Why Join Us Section === */}
      <section className="py-12 md:py-20 bg-neutral-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Join Penaca?
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We offer more than just a job – we offer a chance to be part of something meaningful.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 md:p-6">
                    <div className="mx-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <CardTitle className="text-sm md:text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <CardDescription className="text-xs md:text-sm">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Open Positions Section === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-4">
              Open Positions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our current openings and find the perfect role for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30">
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg md:text-xl mb-2">{job.title}</CardTitle>
                        <Badge variant="secondary" className="mb-2 text-xs">{job.department}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm text-neutral-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                        {job.experience}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                    <p className="text-sm md:text-base text-neutral-600 mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-xs md:text-sm mb-2">Key Responsibilities:</h4>
                      <ul className="text-xs md:text-sm text-neutral-600 space-y-1">
                        {job.responsibilities.slice(0, 3).map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      onClick={() => handleApply(job.title)}
                      className="w-full sm:w-auto text-sm"
                      size="sm"
                    >
                      Apply Now <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Contact Section === */}
      <section className="py-12 md:py-20 bg-neutral-900 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-neutral-900"
              onClick={() => {
                const subject = encodeURIComponent("General Career Inquiry - Penaca");
                const body = encodeURIComponent("Hi Penaca Team,\n\nI am interested in exploring career opportunities at Penaca.\n\nPlease find my details below:\n\nName: \nPhone: \nArea of Interest: \nExperience: \n\nI have attached my resume for your review.\n\nThank you!");
                window.location.href = `mailto:nageswara@penaca.in?subject=${subject}&body=${body}`;
              }}
            >
              Send Your Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
