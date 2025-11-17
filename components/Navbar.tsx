"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Utility icons for the hamburger menu
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 1. Scroll-based visibility
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // 2. Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/industries", label: "Industries" },
    { href: "/services", label: "Services" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/hardware", label: "Hardware" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 w-[96%] max-w-7xl md:w-[90%] lg:w-[85%] ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div className="px-4 py-3 border border-gray-200 rounded-full shadow-xl bg-white/95 backdrop-blur-sm md:px-8 md:py-4">
        <div className="flex items-center justify-between w-full">
          {/* 1. Logo (Left Side) - Fixed Size */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] relative flex-shrink-0">
                <Image
                  src="/smat-access-logo.png"
                  alt="SmatAccess Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 50px, 60px"
                />
              </div>
            </Link>
          </div>

          {/* 2. Navigation Links (Center/Desktop Only) - No Underline */}
          <div className="items-center hidden space-x-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                // No underline or hover underline on desktop links
                className={`transition-colors font-medium text-sm px-2 py-1 ${
                  pathname === link.href
                    ? "text-[#2090C4]" // Active is blue text
                    : "text-gray-700 hover:text-[#2090C4]" // Hover is blue text
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 3. Login & Sign Up Buttons & Mobile Button (Right Side) */}
          <div className="flex items-center space-x-3">
            {/* Login Button (Desktop Only) */}
            <Link
              href="https://client.smataccess.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block border-2 border-[#2090C4] text-[#2090C4] px-6 py-2 rounded-full font-semibold hover:bg-[#2090C4] hover:text-white transition-all duration-300"
            >
              Login
            </Link>

            {/* Sign Up Button (Desktop Only) */}
            <Link
              href="https://client.smataccess.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-[#2090C4] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2090C4]/80 transition-colors"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Button (Toggle) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="cursor-pointer text-gray-700 hover:text-[#2090C4] focus:outline-none focus:ring-2 focus:ring-[#2090C4] rounded-full p-2 transition-colors lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 4. Mobile Menu Dropdown (Animated) */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`absolute left-1/2 transform -translate-x-1/2 w-[98%] max-w-xs mt-4 transition-all duration-500 ease-in-out border border-gray-200 shadow-xl top-full bg-white/95 backdrop-blur-sm rounded-2xl lg:hidden overflow-hidden ${
            isMobileMenuOpen
              ? "opacity-100 max-h-[400px] pointer-events-auto"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          <div className="py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-3 transition-colors font-medium ${
                  pathname === link.href
                    ? "text-[#2090C4] bg-[#2090C4]/5"
                    : "text-gray-700 hover:text-[#2090C4] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Login & Sign Up Buttons */}
            <div className="px-6 py-3 mt-2 space-y-2 border-t border-gray-100">
              <Link
                href="https://client.smataccess.com/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full border-2 border-[#2090C4] text-[#2090C4] px-4 py-2 rounded-full font-semibold hover:bg-[#2090C4] hover:text-white transition-all duration-300 text-center"
              >
                Login
              </Link>
              <Link
                href="https://client.smataccess.com/register"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-[#2090C4] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#2090C4]/80 transition-colors text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
