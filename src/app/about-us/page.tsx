"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  Leaf,
  Award,
  Users,
  RecycleIcon,
  ArrowRight,
  Sprout,
  Flower, // Changed from SeedingIcon toFlower
  Tractor,
  Trash2,
  Factory,
} from "lucide-react";
import Header from "@/components/common/Header";

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFlowStep, setActiveFlowStep] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const missionPoints = [
    {
      id: 1,
      text: "Empower small-scale farmers with sustainable practices",
      icon: <Sprout size={20} className="text-[#129E58]" />,
    },
    {
      id: 2,
      text: "Convert agricultural waste into valuable resources",
      icon: <RecycleIcon size={20} className="text-[#129E58]" />,
    },
    {
      id: 3,
      text: "Reduce environmental pollution through innovative recycling",
      icon: <Leaf size={20} className="text-[#129E58]" />,
    },
    {
      id: 4,
      text: "Create job opportunities within local communities",
      icon: <Users size={20} className="text-[#129E58]" />,
    },
  ];

  const flowChartSteps = [
    {
      id: 1,
      title: "Waste Collection",
      description:
        "Collecting agricultural and organic waste from farms and communities",
      icon: <Trash2 size={28} />,
    },
    {
      id: 2,
      title: "Processing",
      description:
        "Converting waste into nutrient-rich compost and bio-products",
      icon: <Factory size={28} />,
    },
    {
      id: 3,
      title: "Distribution",
      description: "Making sustainable products accessible to local farmers",
      icon: <Tractor size={28} />,
    },
    {
      id: 4,
      title: "Implementation",
      description:
        "Training farmers on effective sustainable farming practices",
      icon: <Flower size={28} />, // Changed from SeedingIcon toFlower
    },
    {
      id: 5,
      title: "Growth",
      description:
        "Creating measurable impact on crops, soil health, and yields",
      icon: <Sprout size={28} />,
    },
  ];

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Tunde Ashamu",
      role: "Founder & CEO",
      bio: "Agricultural expert with 15+ years of experience in sustainable farming practices.",
      image: "/team-member-1.jpg",
    },
    {
      id: 2,
      name: "Ngozi Okafor",
      role: "Head of Operations",
      bio: "Expert in waste management systems with a focus on rural implementation strategies.",
      image: "/team-member-2.jpg",
    },
    {
      id: 3,
      name: "Emmanuel Duru",
      role: "Agricultural Scientist",
      bio: "Specialist in soil rejuvenation and organic farming techniques.",
      image: "/team-member-3.jpg",
    },
    {
      id: 4,
      name: "Ife Adeleke",
      role: "Community Liaison",
      bio: "Builds bridges between El Gbe-yon and local farming communities.",
      image: "/team-member-4.jpg",
    },
  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      name: "Nigeria Organic Agriculture Certification",
      year: 2022,
      image: "/cert-1.png",
    },
    {
      id: 2,
      name: "Sustainable Farming Initiative Award",
      year: 2023,
      image: "/cert-2.png",
    },
    {
      id: 3,
      name: "ISO 14001 Environmental Management",
      year: 2021,
      image: "/cert-3.png",
    },
    {
      id: 4,
      name: "Regional Green Innovation Award",
      year: 2024,
      image: "/cert-4.png",
    },
  ];

  // Effect to animate the flowchart
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlowStep((prev) =>
        prev === flowChartSteps.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Banner */}
      <Header />
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/farm-sustainability.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#129E58]/15 to-[#00374B]/15" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00374B] mb-4">
            Our Vision for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl text-[#00374B]/80 font-light">
            Guided by Purpose, Driven by Action
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section
        ref={ref}
        className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        {/* Vision Subsection */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <motion.div
            className="md:col-span-4 flex justify-center items-center"
            custom={0}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="absolute inset-0 bg-[#129E58]/10 rounded-full"
              />
              <Globe size={180} className="text-[#129E58] relative z-10" />
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-8"
            custom={1}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#00374B] mb-4 inline-block">
              Our Vision
              <div className="h-1 bg-gradient-to-r from-[#129E58] to-[#00374B] mt-2" />
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              El Gbe-yon envisions a Nigeria where agriculture and environmental
              sustainability work hand in hand, creating prosperous communities
              and a healthier planet for generations to come.
            </p>
            <p className="text-gray-600">
              We see a future where waste is no longer a burden but a valuable
              resource, where farmers thrive using sustainable practices, and
              where the agricultural sector leads the way in environmental
              stewardship.
            </p>
          </motion.div>
        </div>

        {/* Mission Subsection */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <motion.div
            className="md:col-span-6 order-2 md:order-1"
            custom={2}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#00374B] mb-6 inline-block">
              Our Mission
              <div className="h-1 bg-gradient-to-r from-[#129E58] to-[#00374B] mt-2" />
            </h2>

            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <motion.li
                  key={point.id}
                  className="flex items-start gap-3"
                  custom={index + 3}
                  variants={fadeIn}
                >
                  <div className="mt-1">{point.icon}</div>
                  <span className="text-gray-700">{point.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats Counter */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <motion.div
                className="bg-[#129E58]/10 p-4 rounded-lg text-center"
                custom={7}
                variants={fadeIn}
              >
                <motion.span
                  className="text-3xl font-bold text-[#129E58]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  12,500
                </motion.span>
                <p className="text-sm text-gray-700">Tons of Waste Recycled</p>
              </motion.div>

              <motion.div
                className="bg-[#00374B]/10 p-4 rounded-lg text-center"
                custom={7.5}
                variants={fadeIn}
              >
                <motion.span
                  className="text-3xl font-bold text-[#00374B]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  1,200
                </motion.span>
                <p className="text-sm text-gray-700">Farmers Supported</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-6 order-1 md:order-2"
            custom={2}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
          >
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-medium text-[#00374B] mb-6 text-center">
                Our Sustainability Cycle
              </h3>

              <div className="relative">
                {/* Connecting Lines */}
                <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-[#129E58]/20 -translate-x-1/2 z-0" />

                {/* Flow Chart Steps */}
                {flowChartSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`relative z-10 flex items-center gap-4 mb-6 ${
                      index % 2 === 0 ? "justify-start" : "flex-row-reverse"
                    }`}
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: activeFlowStep === index ? 1 : 0.7,
                      scale: activeFlowStep === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        activeFlowStep === index
                          ? "bg-[#129E58] text-white"
                          : "bg-[#129E58]/20 text-[#00374B]"
                      }`}
                    >
                      {step.icon}
                    </div>

                    <div
                      className={`${
                        index % 2 === 0 ? "text-left" : "text-right"
                      } w-3/4`}
                    >
                      <h4 className="font-medium text-[#00374B]">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#00374B] mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate professionals dedicated to transforming
              Nigeria&apos;s agricultural landscape through sustainable
              innovation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gray-200 relative">
                  {/* Using next/image with placeholder for missing images */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/api/placeholder/400/320";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#00374B]">{member.name}</h3>
                  <p className="text-[#129E58] text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#00374B] mb-4">
              Certifications & Awards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and sustainable practices has been
              recognized by leading industry organizations.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 py-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {/* Double the certificates for continuous loop */}
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={`${cert.id}-${index}`}
                  className="flex-shrink-0 w-56 bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="h-24 bg-gray-100 rounded flex items-center justify-center mb-3">
                    <Award size={36} className="text-[#129E58]" />
                  </div>
                  <h3 className="font-medium text-[#00374B]">{cert.name}</h3>
                  <p className="text-sm text-gray-500">{cert.year}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-[#129E58] to-[#00374B] py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Build a Greener Future Together?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-[#129E58] px-8 py-3 rounded-full font-medium text-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Involved
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
