"use client";

import Logo from "@/app/favicon.ico"; // Replace with actual logo path
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/app/lib/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed with:", email);
    setEmail("");
    // Add success notification logic here
  };

  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={16} />,
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: <Twitter size={16} />,
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: <Instagram size={16} />,
      url: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={16} />,
      url: "https://linkedin.com",
    },
  ];

  // Quick links for footer
  const quickLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "FAQ", href: "/faq" },
    { label: "Careers", href: "/careers" },
  ];

  // Contact info
  const contactInfo = [
    { label: "Email", value: "info@elgbeyon.com", icon: <Mail size={14} /> },
    { label: "Phone", value: "+1 (123) 456-7890", icon: <Phone size={14} /> },
    {
      label: "Address",
      value: "123 Business Ave, City, State 12345",
      icon: <MapPin size={14} />,
    },
  ];

  // Check if link is active
  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (
    <footer className="bg-[#00374B] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src={Logo} // Replace with actual logo path
                alt="El Gbe-yon Logo"
                width={150}
                height={50}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm mb-6 max-w-xs">
              Providing exceptional services and solutions for our valued
              clients since 2010.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm hover:text-white transition-colors font-poppins flex items-center ${
                      isLinkActive(link.href)
                        ? "text-[#129E58] font-medium"
                        : "text-gray-200"
                    }`}
                  >
                    <ArrowRight size={12} className="mr-2" />
                    {link.label}
                    {isLinkActive(link.href) && (
                      <span className="ml-2 w-1 h-1 rounded-full bg-[#129E58]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm hover:text-white transition-colors font-poppins flex items-center ${
                      isLinkActive(link.href)
                        ? "text-[#129E58] font-medium"
                        : "text-gray-200"
                    }`}
                  >
                    <ArrowRight size={12} className="mr-2" />
                    {link.label}
                    {isLinkActive(link.href) && (
                      <span className="ml-2 w-1 h-1 rounded-full bg-[#129E58]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-6">
              Stay Connected
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="flex relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="bg-white bg-opacity-10 w-full px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#129E58]"
                />
                <motion.button
                  type="submit"
                  className="absolute right-1 top-1 bg-[#129E58] text-white p-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </form>

            {/* Contact Information */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold font-poppins mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((item) => (
                  <li
                    key={item.label}
                    className="text-sm text-gray-200 flex items-center"
                  >
                    <span className="mr-3 text-[#129E58]">{item.icon}</span>
                    <span>
                      <span className="font-medium">{item.label}:</span>{" "}
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 font-poppins mb-4 md:mb-0">
              © {currentYear} El Gbe-yon. All rights reserved.
            </p>
            <motion.a
              href="/contact-us"
              className="bg-white text-[#00374B] px-6 py-2 rounded-full font-poppins font-medium text-sm flex items-center space-x-2"
              whileHover={{ scale: 1.05, backgroundColor: "#F8F8F8" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Phone size={16} />
              <span>Get a Consultation</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
