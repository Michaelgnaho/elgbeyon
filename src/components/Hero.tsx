"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Particle animation component
const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-green-400 rounded-full"
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 100, opacity: [0, 1, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeOut" }}
    style={{ left: `${Math.random() * 100}%` }}
  />
);

export default function Hero() {
  return (
    <section className="relative hero-gradient min-h-screen flex items-center justify-center overflow-hidden parallax-bg">
      {/* Background Image (Optional, for parallax) */}
      <div className="absolute inset-0  opacity-10 parallax-bg" />

      {/* Particles */}
      {[...Array(5)].map((_, i) => (
        <Particle key={i} delay={i * 0.5} />
      ))}

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Text and CTAs */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00374B] font-poppins mb-6 leading-tight">
            Transforming Waste into Sustainable Agriculture
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-poppins mb-8 max-w-xl mx-auto lg:mx-0">
            El Gbe-yon pioneers eco-friendly waste management and innovative
            agricultural solutions for a greener Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="/services"
              className="bg-[#129E58] text-white px-6 py-3 rounded-full font-poppins font-medium text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Explore Our Services
            </motion.a>
            <motion.a
              href="/contact-us"
              className="border-2 border-[#129E58] text-[#129E58] px-6 py-3 rounded-full font-poppins font-medium text-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#129E58",
                color: "white",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Illustration */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="https://i.pinimg.com/736x/01/c6/30/01c63050769a7b7124885228d2e86911.jpg"
            alt="Farm and Recycling Illustration"
            width={600}
            height={700}
            className=" animate-pulse-slow rounded-3xl border-4 border-[#129E58] shadow-lg"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <p className="text-gray-700 font-poppins text-sm">Scroll to Explore</p>
        <div className="mt-2 w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-700 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
