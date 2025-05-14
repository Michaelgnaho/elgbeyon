"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/app/lib/constants";
import Image from "next/image";
import Logo from "@/app/favicon.ico";
import { usePathname } from "next/navigation";
import {
  Phone,
  User,
  Home,
  BookOpen,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle sticky navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Mobile menu animation variants
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Get icon for each nav link
  const getNavIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "home":
        return <Home size={18} />;
      case "about":
        return <User size={18} />;
      case "services":
        return <ShieldCheck size={18} />;
      case "blog":
        return <BookOpen size={18} />;
      case "contact":
        return <MessageSquare size={18} />;
      default:
        return null;
    }
  };

  // Check if link is active
  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo} // Replace with actual logo path
            alt="El Gbe-yon Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-base font-poppins flex items-center space-x-1 relative group ${
                isLinkActive(link.href)
                  ? "text-[#129E58] font-medium"
                  : "text-gray-700"
              }`}
            >
              {getNavIcon(link.label)}
              <span>{link.label}</span>

              {/* Active indicator line */}
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#129E58] transform origin-left transition-all duration-300 ${
                  isLinkActive(link.href)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
          {/* CTA Button */}
          <motion.a
            href="/contact-us"
            className="bg-[#00374B] text-white px-6 py-2 rounded-full font-poppins font-medium text-base flex items-center space-x-2"
            whileHover={{ scale: 1.05, backgroundColor: "#129E58" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Phone size={16} />
            <span>Get a Consultation</span>
          </motion.a>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="w-6 h-5 relative"
          >
            <motion.span
              className="absolute h-0.5 w-full bg-[#00374B] rounded"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute h-0.5 w-full bg-[#00374B] rounded top-2"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute h-0.5 w-full bg-[#00374B] rounded top-4"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="lg:hidden bg-[#00374B] text-white"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-poppins font-medium flex items-center space-x-2 ${
                    isLinkActive(link.href) ? "text-[#129E58]" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {getNavIcon(link.label)}
                  <span>{link.label}</span>
                </Link>
              ))}
              <motion.a
                href="/contact-us"
                className="bg-white text-[#00374B] px-6 py-2 rounded-full font-poppins font-medium text-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
              >
                <Phone size={18} />
                <span>Get a Consultation</span>
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
