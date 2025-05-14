"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sprout, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Animation controls for About section
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white">
      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sprout size={32} className="text-[#129E58]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#00374B] font-poppins">
                Who We Are
              </h2>
            </div>
            <div className="h-1 bg-gradient-to-r from-[#129E58] to-[#00374B] w-24 mb-6" />
            <p className="text-lg md:text-xl text-gray-700 font-poppins mb-6">
              El Gbe-yon transforms waste into sustainable agriculture,
              empowering farmers and fostering a greener Nigeria through
              innovative recycling and eco-friendly practices.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 bg-white text-[#129E58] border-2 border-[#129E58] px-6 py-3 rounded-full font-poppins font-medium text-lg hover:bg-[#00374B] hover:text-white transition-colors"
              >
                Learn More
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="relative h-[300px] md:h-[400px]"
          >
            <Image
              src="https://i.pinimg.com/736x/84/b0/4c/84b04c358d7428e166342d6b21f3e4be.jpg"
              alt="Sustainable Agriculture"
              fill
              className="object-cover rounded-lg shadow-md border-4 border-[#129E58] animate-pulse-slow"
              onError={(e) => {
                e.currentTarget.src = "/api/placeholder/600/400";
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
