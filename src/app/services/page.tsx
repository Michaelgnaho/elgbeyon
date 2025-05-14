"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sprout, ArrowRight, Recycle, Leaf, Dog, Package } from "lucide-react";
import Link from "next/link";
import Header from "@/components/common/Header";

export default function Services() {
  // Animation controls for service sections
  const { ref: wasteRef, inView: isWasteInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: consultingRef, inView: isConsultingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: feedsRef, inView: isFeedsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <Header />
      <div className="relative h-96 overflow-hidden inset-0 mt-10">
        <div className="absolute inset-0 bg-green-900/70 z-10" />
        <Image
          src="/api/placeholder/1200/800"
          alt="El Gbe-yon Services"
          fill
          className="object-cover"
          onError={(e) => {
            e.currentTarget.src = "/api/placeholder/1200/800";
          }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-white max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sustainable solutions for waste management, animal farming, and
            agricultural development
          </motion.p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">
            Transforming Nigeria&apos;s Agricultural Landscape
          </h2>
          <p className="text-gray-700 mb-8">
            At El Gbe-yon, we&apos;re committed to developing sustainable
            agricultural practices while addressing environmental challenges
            through innovative waste management and recycling solutions. Our
            comprehensive services support farmers, businesses, and communities
            across Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#waste-management"
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Recycle size={18} />
              Waste Management
            </a>
            <a
              href="#farm-consulting"
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Sprout size={18} />
              Farm Consulting
            </a>
            <a
              href="#animal-feeds"
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Package size={18} />
              Animal Feeds
            </a>
          </div>
        </div>
      </div>

      {/* Waste Management Section */}
      <div id="waste-management" className="py-16 bg-white">
        <div className="container mx-auto px-4" ref={wasteRef}>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              className="lg:w-1/2"
              variants={fadeInLeft}
              initial="hidden"
              animate={isWasteInView ? "visible" : "hidden"}
            >
              <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/fd/5b/70/fd5b7067605fbc9f9caa1308e9d7d275.jpg"
                  alt="Waste Management Services"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/600/400";
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              variants={fadeInRight}
              initial="hidden"
              animate={isWasteInView ? "visible" : "hidden"}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-green-800">
                  Waste Management & Recycling
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                We provide comprehensive waste management solutions that
                transform agricultural and industrial waste into valuable
                resources. Our innovative recycling processes help reduce
                environmental impact while creating sustainable materials for
                farming and other industries.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-green-600 mt-1" />
                  <span>Organic waste conversion to natural fertilizers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-green-600 mt-1" />
                  <span>Agricultural waste recycling programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-green-600 mt-1" />
                  <span>Sustainable waste collection and processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-green-600 mt-1" />
                  <span>Environmental impact assessment and consulting</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Request our waste management services{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Farm Consulting Section */}
      <div id="farm-consulting" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4" ref={consultingRef}>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <motion.div
              className="lg:w-1/2"
              variants={fadeInRight}
              initial="hidden"
              animate={isConsultingInView ? "visible" : "hidden"}
            >
              <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/ef/a4/f5/efa4f509c20a3fe59b539f65e2aafa4a.jpg"
                  alt="Animal Farm Consulting"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/600/400";
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              variants={fadeInLeft}
              initial="hidden"
              animate={isConsultingInView ? "visible" : "hidden"}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Sprout className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-green-800">
                  Animal Farm Consulting
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our team of experienced agricultural experts provides
                comprehensive consulting services for animal farm establishment,
                management, and optimization. We help farmers implement
                sustainable practices while maximizing productivity and animal
                welfare.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Dog className="h-5 w-5 text-green-600 mt-1" />
                  <span>Farm setup and infrastructure planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Dog className="h-5 w-5 text-green-600 mt-1" />
                  <span>Animal welfare and health management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Dog className="h-5 w-5 text-green-600 mt-1" />
                  <span>Sustainable farming practices implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Dog className="h-5 w-5 text-green-600 mt-1" />
                  <span>
                    Operational efficiency and productivity optimization
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Schedule a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animal Feeds Section */}
      <div id="animal-feeds" className="py-16 bg-white">
        <div className="container mx-auto px-4" ref={feedsRef}>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              className="lg:w-1/2"
              variants={fadeInLeft}
              initial="hidden"
              animate={isFeedsInView ? "visible" : "hidden"}
            >
              <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/f5/f9/23/f5f923e6dce4cd7faf6e2875e63ce643.jpg"
                  alt="Animal Feeds and Wellness Products"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/600/400";
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              variants={fadeInRight}
              initial="hidden"
              animate={isFeedsInView ? "visible" : "hidden"}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Package className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-green-800">
                  Animal Feeds & Wellness
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                We supply high-quality animal feeds and wellness products that
                promote healthy growth and optimal animal performance. Our
                products are formulated with sustainable ingredients and meet
                the highest nutritional standards for various livestock species.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Package className="h-5 w-5 text-green-600 mt-1" />
                  <span>Premium quality livestock feeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <Package className="h-5 w-5 text-green-600 mt-1" />
                  <span>Natural nutritional supplements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Package className="h-5 w-5 text-green-600 mt-1" />
                  <span>Animal health and wellness products</span>
                </li>
                <li className="flex items-start gap-2">
                  <Package className="h-5 w-5 text-green-600 mt-1" />
                  <span>Custom feed formulations for specific needs</span>
                </li>
              </ul>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Explore our product range <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Agricultural Practices?
            </h2>
            <p className="text-green-100 mb-8">
              Partner with El Gbe-yon for sustainable solutions that enhance
              productivity, reduce environmental impact, and support
              Nigeria&apos;s agricultural future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-green-800 font-medium rounded-md hover:bg-green-100 transition-colors"
              >
                Contact Us Today
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-green-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-800 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">AH</span>
                </div>
                <div>
                  <h4 className="font-medium">Adewale Hassan</h4>
                  <p className="text-sm text-gray-500">Poultry Farmer, Lagos</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;El Gbe-yon&apos;s consulting services have completely
                transformed our poultry operation. Their feed recommendations
                and waste management solutions have improved our productivity
                while reducing costs.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">BO</span>
                </div>
                <div>
                  <h4 className="font-medium">Blessing Okonkwo</h4>
                  <p className="text-sm text-gray-500">
                    Livestock Manager, Abuja
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;The quality of animal feeds we purchase from El Gbe-yon is
                exceptional. Our animals are healthier, and we&apos;ve seen
                significant improvements in growth rates and overall farm
                performance.&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">MI</span>
                </div>
                <div>
                  <h4 className="font-medium">Mohammed Ibrahim</h4>
                  <p className="text-sm text-gray-500">
                    Agricultural Cooperative, Kano
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;Working with El Gbe-yon on our community waste management
                project has been revolutionary. They&apos;ve helped us convert
                agricultural waste into valuable resources for our
                members.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
