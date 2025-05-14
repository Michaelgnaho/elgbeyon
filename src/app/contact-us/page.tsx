"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/common/Header";

export default function Contact() {
  // Animation controls for form section
  const { ref: formRef, inView: isFormInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation controls for info section
  const { ref: infoRef, inView: isInfoInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  // Handle form changes
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Normally would send data to server here
    // This is just a demo implementation
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We'll get back to you soon.",
    });
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
      <div className="relative h-80 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-green-900/70 z-10" />
        <Image
          src="/api/placeholder/1200/800"
          alt="El Gbe-yon Contact"
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-white max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reach out to El Gbe-yon for sustainable agricultural solutions
          </motion.p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-green-800 mb-4">
              Get in Touch With Our Team
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Have questions about our services or want to learn more about how
              El Gbe-yon can help your agricultural business? We&apos;re here to
              assist you. Reach out using the contact information below or fill
              out our form.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              variants={fadeInLeft}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
              className="bg-white rounded-lg shadow-sm p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-green-800">
                  Send Us a Message
                </h3>
              </div>

              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-700">
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              variants={fadeInRight}
              initial="hidden"
              animate={isInfoInView ? "visible" : "hidden"}
            >
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-700">+234 801 234 5678</p>
                      <p className="text-gray-700">+234 809 876 5432</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-700">info@elgbeyon.com</p>
                      <p className="text-gray-700">contact@elgbeyon.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-gray-700">
                        123 Agro Way, Ikeja Business District
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Business Hours
                      </h4>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Follow Us
                </h3>
                <p className="text-gray-700 mb-4">
                  Stay updated with our latest news, projects, and agricultural
                  insights.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-green-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-green-600" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-green-800 text-center mb-8">
              Visit Our Office
            </h3>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md">
              {/* In a real implementation, you would use Google Maps or other mapping service */}
              {/* This is a placeholder for demonstration */}
              <div className="absolute inset-0 bg-green-50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-green-800 font-medium">
                    Interactive map would be displayed here
                  </p>
                  <p className="text-gray-700">
                    123 Agro Way, Ikeja Business District, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-green-800 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-green-700 mb-2">
                  How quickly can you respond to waste management inquiries?
                </h3>
                <p className="text-gray-700">
                  We typically respond to all inquiries within 24-48 business
                  hours. For urgent matters, we recommend calling our customer
                  service line directly.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-green-700 mb-2">
                  Do you offer on-site farm consultations?
                </h3>
                <p className="text-gray-700">
                  Yes, our team of agricultural experts provides comprehensive
                  on-site farm assessments and consultations throughout Nigeria.
                  Contact us to schedule a visit.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-green-700 mb-2">
                  Can you customize animal feed formulations for specific
                  livestock needs?
                </h3>
                <p className="text-gray-700">
                  Absolutely! We specialize in creating custom feed formulations
                  tailored to your specific livestock requirements. Our
                  nutritionists will work with you to develop the optimal
                  solution.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-green-700 mb-2">
                  Do you offer services outside of Nigeria?
                </h3>
                <p className="text-gray-700">
                  Currently, our operational services are focused within
                  Nigeria. However, we do offer remote consulting services to
                  clients in neighboring West African countries.
                </p>
              </div>

              <div className="pb-4">
                <h3 className="text-lg font-medium text-green-700 mb-2">
                  How can I become a distributor for El Gbe-yon products?
                </h3>
                <p className="text-gray-700">
                  We&apos;re always looking for distribution partners! Please
                  contact our business development team using the form above and
                  specify &quot;Distribution Partnership&quot; in the subject
                  line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-green-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-green-100 mb-6">
              Stay informed about sustainable agricultural practices, industry
              news, and El Gbe-yon updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 flex-1 rounded-md outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
