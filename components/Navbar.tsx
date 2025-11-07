"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm shadow-lg border border-gray-200 rounded-full px-8 py-4 min-w-[1000px]">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/smatacces_logo.png"
                alt="SmatAccess Logo"
                width={60}
                height={60}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="items-center hidden space-x-6 md:flex">
            <Link
              href="/industries"
              className="text-gray-700 hover:text-[#2090C4] transition-colors font-medium"
            >
              Industries
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-[#2090C4] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/use-cases"
              className="text-gray-700 hover:text-[#2090C4] transition-colors font-medium"
            >
              Use Cases
            </Link>
            <Link
              href="/hardware"
              className="text-gray-700 hover:text-[#2090C4] transition-colors font-medium"
            >
              Hardware
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-[#2090C4] transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#2090C4] transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* Contact Button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="bg-[#2090C4] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2090C4]/80 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button className="cursor-pointer text-gray-700 hover:text-[#2090C4] focus:outline-none focus:ring-2 focus:ring-[#2090C4] rounded-full p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
