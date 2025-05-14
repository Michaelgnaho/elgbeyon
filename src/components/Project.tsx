"use client";

import { motion } from "framer-motion";

// Define animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const featuredProjects = [
  {
    title: "Sustainable Farming Initiative",
    client: "GreenAgro Ltd",
    description:
      "A project focused on sustainable farming practices to improve crop yield and reduce environmental impact.",
    image:
      "https://i.pinimg.com/736x/13/13/81/1313817d673598d6af87622cd6aa7778.jpg",
  },
  {
    title: "Community Agriculture Program",
    client: "Farmers United",
    description:
      "Empowering local farmers through training and resources for better agricultural practices.",
    image:
      "https://i.pinimg.com/736x/65/21/c0/6521c05c369041906648e9a3425e6ad6.jpg",
  },
  {
    title: "Agro-Industrial Development",
    client: "AgroTech Inc",
    description:
      "Establishing agro-industrial facilities to boost local economies and create job opportunities.",
    image:
      "https://i.pinimg.com/736x/0f/f2/58/0ff258ce0dc290cbebf9a233d7c5edf2.jpg",
  },
];

export default function Project() {
  const [servicesInView] = React.useState(true); // Replace 'true' with your desired logic

  return (
    // Project section to add to Home.jsx
    // Add this after the services section

    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeInLeft}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00374B] font-poppins mb-4">
          Our Projects
        </h2>
        <div className="h-1 bg-gradient-to-r from-[#129E58] to-[#00374B] w-24 mx-auto mb-6" />
        <p className="text-lg md:text-xl text-gray-700 font-poppins max-w-2xl mx-auto">
          Explore our successful partnerships and sustainable agriculture
          initiatives across Nigeria.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#129E58]"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={index}
            whileHover={{ y: -5 }}
          >
            <div className="h-48 relative">
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
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#00374B] font-poppins mb-2">
                {project.title}
              </h3>
              <p className="text-[#129E58] text-sm mb-3">
                Client: {project.client}
              </p>
              <p className="text-gray-600 text-sm font-poppins mb-4">
                {project.description.substring(0, 100)}...
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#129E58] font-medium text-sm hover:text-[#00374B] transition-colors"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeInUp}
        custom={4}
        className="text-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#129E58] text-white px-6 py-3 rounded-full font-poppins font-medium text-lg hover:bg-[#00374B] transition-colors"
          >
            View All Projects
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
