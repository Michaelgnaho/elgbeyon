"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sprout, ArrowRight, Trash2, Factory, Tractor } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Animation controls for About and Services sections
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2 },
    }),
  };

  const services = [
    {
      title: "Waste Management",
      description:
        "Efficiently collecting agricultural and organic waste from companise,  farms and communities.",
      icon: <Trash2 size={40} className="text-[#129E58]" />,
    },
    {
      title: "Recycling & Processing of Waste",
      description:
        "Transforming waste into nutrient-rich compost and bio-products for animal farming.",
      icon: <Factory size={40} className="text-[#129E58]" />,
    },
    {
      title: "Farmers Consultation",
      description:
        "Educating farmers on sustainable practices for long-term impact.",
      icon: <Tractor size={40} className="text-[#129E58]" />,
    },
    {
      title: "Sustainable Products",
      description:
        "Distributing eco-friendly fertilizers and materials to farmers.",
      icon: <Sprout size={40} className="text-[#129E58]" />,
    },
  ];

  return (
    <div className="bg-white">
      <section
        ref={servicesRef}
        className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50"
      >
        <motion.div
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={fadeInLeft}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00374B] font-poppins mb-4">
            Our Services
          </h2>
          <div className="h-1 bg-gradient-to-r from-[#129E58] to-[#00374B] w-24 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-700 font-poppins max-w-2xl mx-auto">
            Empowering sustainable agriculture through innovative waste
            management and farmer support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-[#129E58]"
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#00374B] font-poppins mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm font-poppins">
                {service.description}
              </p>
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
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-[#129E58] border-2 border-[#129E58] px-6 py-3 rounded-full font-poppins font-medium text-lg hover:bg-[#00374B] hover:text-white transition-colors"
            >
              Explore Our Services
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
    </div>
  );
}
