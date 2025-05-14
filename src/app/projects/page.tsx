"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Users, Award, Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/common/Header";

export default function Projects() {
  // Animation controls for different sections
  const { ref: statsRef, inView: isStatsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: partnersRef, inView: isPartnersInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: featuredRef, inView: isFeaturedInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Partner companies data
  const partners = [
    {
      name: "Nestle foods ",
      logo: "https://i.pinimg.com/736x/6a/1d/9c/6a1d9cd783ee5f08dc99fd6a783c27ea.jpg",
      category: "Agricultural Conglomerate",
      description:
        "Partnered on implementing large-scale waste management solutions across multiple farming facilities.",
    },
  ];

  // Featured projects data
  const featuredProjects = [
    {
      title: "Integrated Waste Management System",
      client: "GreenFarms International",
      image:
        "https://i.pinimg.com/736x/93/cf/2f/93cf2f0d3d274195921bcebba4a4ac40.jpg",
      description:
        "Designed and implemented a comprehensive waste management system for agricultural communities in Lagos State, processing over 10,000 tons of agricultural waste annually.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 mt-30">
        {/* Hero Section */}
        <div className="relative h-80 overflow-hidden">
          <div className="absolute inset-0 bg-green-900/70 z-10" />

          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Projects
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover the partnerships and collaborations that showcase our
              commitment to sustainable agriculture
            </motion.p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4" ref={statsRef}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
            >
              {/* Stat 1 */}
              <motion.div
                className="bg-green-50 p-6 rounded-lg text-center"
                variants={fadeInScale}
              >
                <div className="flex justify-center mb-4">
                  <Building className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-4xl font-bold text-green-800 mb-2">50+</h3>
                <p className="text-gray-700">Partner Companies</p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                className="bg-green-50 p-6 rounded-lg text-center"
                variants={fadeInScale}
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-4xl font-bold text-green-800 mb-2">120+</h3>
                <p className="text-gray-700">Completed Projects</p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                className="bg-green-50 p-6 rounded-lg text-center"
                variants={fadeInScale}
              >
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-4xl font-bold text-green-800 mb-2">10k+</h3>
                <p className="text-gray-700">Farmers Supported</p>
              </motion.div>

              {/* Stat 4 */}
              <motion.div
                className="bg-green-50 p-6 rounded-lg text-center"
                variants={fadeInScale}
              >
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-4xl font-bold text-green-800 mb-2">15</h3>
                <p className="text-gray-700">Industry Awards</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Partner Companies Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-green-800 mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                El Gbe-yon is proud to collaborate with leading organizations
                across Nigeria&apos;s agricultural sector. Our partners trust us
                to deliver sustainable solutions that drive real results.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              ref={partnersRef}
              variants={staggerChildren}
              initial="hidden"
              animate={isPartnersInView ? "visible" : "hidden"}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  variants={fadeInScale}
                >
                  <div className="h-32 bg-slate-100 flex items-center justify-center p-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={150}
                      height={80}
                      className="object-contain max-h-20"
                      onError={(e) => {
                        e.currentTarget.src = "/api/placeholder/150/80";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-green-800 mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-green-600 mb-2">
                      {partner.category}
                    </p>
                    <p className="text-sm text-gray-600">
                      {partner.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-green-800 mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Explore some of our signature collaborations that highlight our
                expertise in sustainable agriculture and waste management
                solutions.
              </p>
            </div>

            <div className="space-y-16" ref={featuredRef}>
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
                  initial="hidden"
                  animate={isFeaturedInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: index * 0.2 } },
                  }}
                >
                  <div className="lg:w-1/2">
                    <div className="relative h-64 sm:h-72 lg:h-80 w-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/api/placeholder/600/400";
                        }}
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-green-600 mb-4">
                      Client: {project.client}
                    </p>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
                    >
                      View project details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Clients Grid Section */}

        {/* CTA Section */}
        <div className="bg-green-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Partner With El Gbe-yon?
              </h2>
              <p className="text-green-100 mb-8">
                Join the growing list of organizations benefiting from our
                sustainable agricultural solutions. Let&apos;s collaborate to
                create a greener and more productive future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-white text-green-800 font-medium rounded-md hover:bg-green-100 transition-colors"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-green-700 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">
                  What Our Partners Say
                </h2>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xl font-bold">LA</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Lanre Adeyemi</h4>
                    <p className="text-gray-600">
                      Director of Operations, GreenFarms International
                    </p>
                  </div>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;The team at El Gbe-yon has been instrumental in
                  transforming our approach to waste management. Their
                  innovative recycling solutions have not only reduced our
                  environmental footprint but also generated significant cost
                  savings. They truly understand the unique challenges faced by
                  agricultural businesses in Nigeria.&quot;
                </blockquote>
                <div className="flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
