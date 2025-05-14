"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Building, Award, Users } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true });

  return (
    <section
      ref={ctaRef}
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-r from-[#00374B] to-[#129E58] text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Ready to Transform Your Agricultural Practices?
          </h2>
          <p className="text-lg md:text-xl font-poppins max-w-2xl mx-auto mb-10 text-green-100">
            Join hundreds of farms and agricultural businesses benefiting from
            our sustainable solutions. Let&apos;s work together to create a
            greener and more productive future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#00374B] px-6 py-3 rounded-full font-poppins font-medium text-lg hover:bg-green-100 transition-colors w-full sm:w-auto justify-center"
              >
                Contact Us
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-poppins font-medium text-lg hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
              >
                Explore Services
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.4,
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            {
              icon: <Users size={32} />,
              value: "10,000+",
              label: "Farmers Supported",
            },
            {
              icon: <Factory size={32} />,
              value: "120+",
              label: "Projects Completed",
            },
            {
              icon: <Building size={32} />,
              value: "50+",
              label: "Partner Companies",
            },
            {
              icon: <Award size={32} />,
              value: "15",
              label: "Industry Awards",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <p className="text-2xl md:text-3xl font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-green-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
