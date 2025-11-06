"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
// 1. IMPORT ICONS FROM HEROICONS
import {
  ShieldCheckIcon,
  HomeModernIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  TicketIcon,
  ArrowRightIcon,
  UserPlusIcon, // New icon for Step 1
  QrCodeIcon, // New icon for Step 2
  ClockIcon, // New icon for Step 3
  ChartBarIcon, // New icon for Step 4
  PlayIcon,
  // Icons for Why Choose SmatAccess section
  EyeIcon,
  ChatBubbleLeftRightIcon,
  KeyIcon,
  ServerIcon,
  CloudIcon,
  PhoneIcon,
  // Icons for testimonials
  StarIcon,
  CheckIcon, // New icon for pricing features
  XMarkIcon, // New icon for missing features
  CurrencyDollarIcon, // New icon for pricing
} from "@heroicons/react/24/outline"; // Using outline style for the example

export default function Home() {
  // State for testimonial rotation
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Define all industries with titles, descriptions, and the imported Heroicon component
  const industrySolutions = [
    {
      title: "Protection of buildings and facilities",
      description:
        "Ensure only authorized personnel can access critical infrastructure and restricted areas.",
      icon: ShieldCheckIcon,
      slug: "building-protection",
    },
    {
      title: "Residential Complexes",
      description:
        "Manage visitor, staff, and vehicle entry with seamless, privacy-focused controls.",
      icon: HomeModernIcon,
      slug: "residential-complexes",
    },
    {
      title: "Corporate Offices",
      description:
        "Implement touchless entry and accurate time-and-attendance logging for all employees.",
      icon: BuildingOffice2Icon,
      slug: "corporate-offices",
    },
    {
      title: "Schools & Institutions",
      description:
        "Create safe campuses by controlling all access points and centralizing security protocols.",
      icon: AcademicCapIcon,
      slug: "schools-institutions",
    },
    {
      title: "Healthcare Facilities",
      description:
        "Manage sensitive area access while guaranteeing efficient movement for essential staff.",
      icon: HeartIcon,
      slug: "healthcare-facilities",
    },
    {
      title: "Industrial Sites",
      description:
        "Track personnel and equipment across large, complex locations with enhanced security measures.",
      icon: WrenchScrewdriverIcon,
      slug: "industrial-sites",
    },
    {
      title: "Government Buildings",
      description:
        "Meet strict security compliance using biometric multi-factor verification systems.",
      icon: BuildingOfficeIcon,
      slug: "government-buildings",
    },
    {
      title: "Event Venues",
      description:
        "Handle high-volume crowds with temporary access controls and real-time credential validation.",
      icon: TicketIcon,
      slug: "event-venues",
    },
  ];

  // Define the sleek 'How It Works' steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Register Users & Devices",
      description:
        "Securely set up employees, visitors, and connecting hardware in minutes.",
      icon: UserPlusIcon, // Using imported icon
      // Placeholder image source (replace with actual image)
      imageSrc: "/placeholder-step1.png",
    },
    {
      step: 2,
      title: "Scan or Approve Access",
      description:
        "Users gain entry via facial recognition, QR code, mobile app, or credential scan.",
      icon: QrCodeIcon,
      imageSrc: "/placeholder-step2.png",
    },
    {
      step: 3,
      title: "Monitor Activity in Real Time",
      description:
        "View live entry logs, track attendance, and receive instant security alerts.",
      icon: ClockIcon,
      imageSrc: "/placeholder-step3.png",
    },
    {
      step: 4,
      title: "View Analytics & Reports",
      description:
        "Access detailed security insights and compliance documentation instantly.",
      icon: ChartBarIcon,
      imageSrc: "/placeholder-step4.png",
    },
  ];

  // Define features for "Why Choose SmatAccess" with icons and images
  const whyChooseFeatures = [
    {
      title: "Real-Time Monitoring",
      description:
        "Track all access points with live video feeds and instant alerts on any suspicious activity.",
      icon: EyeIcon,
      imageSrc: "/feature-monitoring.png",
      color: "bg-blue-500",
    },
    {
      title: "WhatsApp Integration",
      description:
        "Send visitor passes, approvals, and security alerts directly through WhatsApp for seamless communication.",
      icon: ChatBubbleLeftRightIcon,
      imageSrc: "/feature-whatsapp.png",
      color: "bg-green-500",
    },
    {
      title: "Automated Visitor Codes",
      description:
        "Generate temporary access codes for visitors that expire after use, ensuring maximum security.",
      icon: KeyIcon,
      imageSrc: "/feature-codes.png",
      color: "bg-purple-500",
    },
    {
      title: "Centralized Multi-Site Control",
      description:
        "Manage multiple locations from a single dashboard with role-based access for different administrators.",
      icon: ServerIcon,
      imageSrc: "/feature-multisite.png",
      color: "bg-indigo-500",
    },
    {
      title: "Cloud-Based Security Logs",
      description:
        "Access historical data, generate reports, and maintain compliance records securely in the cloud.",
      icon: CloudIcon,
      imageSrc: "/feature-cloud.png",
      color: "bg-cyan-500",
    },
    {
      title: "Local Support",
      description:
        "Get 24/7 assistance from our dedicated support team with technicians in your region.",
      icon: PhoneIcon,
      imageSrc: "/feature-support.png",
      color: "bg-red-500",
    },
  ];

  // Define testimonials with more options
  const testimonials = [
    {
      id: 1,
      quote:
        "SmatAccess has transformed our security operations. The real-time monitoring feature is invaluable for our facility.",
      author: "John Smith",
      position: "Security Director",
      company: "TechCorp Industries",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Reliable and easy to use. Our staff adapted to the system quickly, and visitor management has never been smoother.",
      author: "Sarah Johnson",
      position: "Office Manager",
      company: "Global Financial Services",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Outstanding support and features. The multi-site control has saved us countless hours in administrative work.",
      author: "Michael Chen",
      position: "Operations Lead",
      company: "Healthcare Plus Network",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "The WhatsApp integration is a game-changer for our residential complex. Residents love the convenience.",
      author: "Emily Rodriguez",
      position: "Property Manager",
      company: "Luxury Living Communities",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "We've tried several access control systems, but SmatAccess is by far the most intuitive and reliable.",
      author: "David Thompson",
      position: "IT Director",
      company: "Educational Institutions Group",
      rating: 5,
    },
  ];

  // Define client logos using placeholder images
  const clientLogos = [
    { name: "TechCorp Industries", logo: "/placeholder-device1.png" },
    { name: "Global Financial Services", logo: "/placeholder-device2.png" },
    { name: "Healthcare Plus Network", logo: "/placeholder-device3.png" },
    { name: "Luxury Living Communities", logo: "/feature-monitoring.png" },
    { name: "Educational Institutions Group", logo: "/feature-whatsapp.png" },
    { name: "Manufacturing Excellence", logo: "/feature-codes.png" },
    { name: "Retail Chain International", logo: "/feature-multisite.png" },
    { name: "Government Services", logo: "/feature-cloud.png" },
  ];

  // **********************************************
  // PRICING Tiers Data
  // **********************************************
  const pricingTiers = [
    {
      name: "Residential",
      price: "3",
      tagline: "Ideal for small communities and single-site homes.",
      isPopular: false,
      features: ["Up to 50 Users", "Mobile App Access", "Basic Event Log"],
      missingFeatures: ["Multi-Site Control", "WhatsApp Integration"],
      buttonText: "Start Free Trial",
      link: "/signup/residential",
    },
    {
      name: "Business Standard",
      price: "5",
      tagline: "Perfect for corporate offices and single-building facilities.",
      isPopular: true,
      features: [
        "Up to 500 Users",
        "Time & Attendance",
        "WhatsApp Integration",
        "24/7 Phone Support",
      ],
      missingFeatures: ["Dedicated Account Manager"],
      buttonText: "Request Quote",
      link: "/contact/business",
    },
    {
      name: "Enterprise",
      price: "Custom",
      tagline: "Tailored security for large-scale operations and government.",
      isPopular: false,
      features: [
        "Unlimited Users",
        "Multi-Site Control",
        "Dedicated Account Manager",
        "Custom Integrations (API)",
      ],
      missingFeatures: [],
      buttonText: "Contact Sales",
      link: "/contact/enterprise",
    },
  ];
  // **********************************************

  // **********************************************
  // HARDWARE DATA for Showcase Section - All dummy images are now /placeholder-device1.png
  // **********************************************
  const hardwareDevices = [
    {
      name: "Biometric Scanner",
      description: "Face and fingerprint verification for high-security areas.",
      imageSrc: "/device1.png", // Standardized image
      color: "bg-gradient-to-tr from-blue-50 to-blue-200", // Soft blue background
    },
    {
      name: "Gate Barrier System",
      description: "Automated gate control with vehicle plate recognition.",
      imageSrc: "/gate-barrier.png", // Standardized image
      color: "bg-gradient-to-tr from-green-50 to-green-200", // Soft green background
    },
    {
      name: "High-Traffic Turnstile",
      description: "Modern access solutions for efficient high-volume entry.",
      imageSrc: "/high-traffic.png", // Standardized image
      color: "bg-gradient-to-tr from-purple-50 to-purple-200", // Soft purple background
    },
  ];
  // **********************************************

  // Auto-rotate testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Function to handle manual testimonial navigation
  const goToTestimonial = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION - Updated for sleek design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12 bg-gray-50">
        <section
          className="relative flex items-end text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          {/* Background Image */}
          <Image
            src="/hero.png"
            alt="SmatAccess Hero Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10"></div>

          {/* Content Container */}
          <div className="relative pb-16 w-full z-20 px-5 md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Secure Your World with Intelligence.
                </h1>
              </div>

              <div className="text-right">
                <p className="text-xl md:text-xl mb-8 text-white max-w-lg ml-auto">
                  SmatAccess – Smart Access Control for Homes, Offices &
                  Enterprises. Simplify entry, strengthen security, and manage
                  visitors, vehicles, and staff with one intelligent platform.
                </p>
                <button className="cursor-pointer bg-white text-[#2090C4] px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3 – INDUSTRY SOLUTIONS - Sleek Card Design */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Tailored access control for every sector.
            </p>
          </div>

          {/* First 6 cards (2 full rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-x-8 gap-y-16 pt-10 mb-16">
            {industrySolutions.slice(0, 6).map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="lg:col-span-1 h-full">
                  <div className="bg-black p-8 pt-16 rounded-2xl shadow-2xl flex flex-col items-center text-center justify-start relative h-full min-h-[300px] w-full transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-[#2090C4]/50 border border-transparent hover:border-[#2090C4]">
                    {/* Icon Circle - ABSOLUTE POSITIONING */}
                    <div className="w-20 h-20 bg-black rounded-full border border-[#2090C4] flex items-center justify-center mb-6 absolute top-0 transform -translate-y-1/2">
                      <Icon className="w-12 h-12 text-[#2090C4]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 mt-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-base mb-6 max-w-sm grow">
                      {item.description}
                    </p>

                    {/* Learn More Link */}
                    <Link
                      href={`/use-cases/${item.slug}`}
                      className="text-[#2090C4] hover:text-[#2090C4]/80 font-medium transition-colors mt-auto flex items-center"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex justify-center gap-x-8">
            {industrySolutions.slice(6).map((item, index) => {
              const Icon = item.icon;
              const actualIndex = index + 6; // Adjust index to match original array

              return (
                <div key={actualIndex} className="w-full max-w-md">
                  <div className="bg-black p-8 pt-16 rounded-2xl shadow-2xl flex flex-col items-center text-center justify-start relative h-full min-h-[300px] w-full transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-[#2090C4]/50 border border-transparent hover:border-[#2090C4]">
                    {/* Icon Circle - ABSOLUTE POSITIONING */}
                    <div className="w-20 h-20 bg-black rounded-full border border-[#2090C4] flex items-center justify-center mb-6 absolute top-0 transform -translate-y-1/2">
                      <Icon className="w-12 h-12 text-[#2090C4]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 mt-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-base mb-6 max-w-sm grow">
                      {item.description}
                    </p>

                    {/* Learn More Link */}
                    <Link
                      href={`/use-cases/${item.slug}`}
                      className="text-[#2090C4] hover:text-[#2090C4]/80 font-medium transition-colors mt-auto flex items-center"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2090C4]/80 transition-colors">
              Find Your Industry
            </button>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 4 – HOW IT WORKS (Sleek Grid Layout) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to secure access.
            </p>
          </div>

          {/* Grid for the steps - two columns on medium, three on large */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((stepItem, index) => {
              const IconComponent = stepItem.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gray-50 rounded-2xl shadow-lg text-center flex flex-col items-center justify-start h-full hover:bg-gray-100 hover:shadow-xl transition-all duration-300 border-b-4 border-[#2090C4]"
                >
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 bg-[#2090C4] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">
                    {stepItem.step}
                  </div>

                  {/* Image/Icon Placeholder */}
                  <div className="relative w-full h-32 mb-6">
                    {/* Placeholder for the image */}
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg border border-gray-300">
                      <IconComponent className="w-12 h-12 text-[#2090C4]" />
                    </div>
                    {/* Optional: Actual Next/Image if you had a dedicated image */}
                    {/* <Image 
                      src={stepItem.imageSrc} 
                      alt={`Step ${stepItem.step} illustration`}
                      layout="fill" 
                      objectFit="contain" 
                    /> */}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm grow">
                    {stepItem.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2090C4]/80 transition-colors flex items-center justify-center mx-auto w-fit">
              Watch the Walkthrough Video
              <PlayIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 5 – WHY CHOOSE SMATACCESS - REDESIGNED WITH IMAGES AND ANIMATIONS */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose SmatAccess?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced features designed to provide unparalleled security and
              convenience for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Image container with overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                      <IconComponent className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div
                        className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mr-3`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>

                  {/* Bottom accent line that grows on hover */}
                  <div
                    className={`h-1 ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2090C4]/80 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 6 – TESTIMONIALS / CLIENT BRANDS - REDESIGNED WITH AUTO-ROTATING TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-gray-600">See what our clients say.</p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                {/* Quote mark decoration */}
                <div className="absolute top-4 left-4 text-[#2090C4]/10">
                  <svg
                    className="w-24 h-24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Testimonial content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentTestimonialIndex].rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8 text-center">
                    &ldquo;{testimonials[currentTestimonialIndex].quote}&rdquo;
                  </p>

                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">
                      {testimonials[currentTestimonialIndex].author}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonialIndex].position},{" "}
                      {testimonials[currentTestimonialIndex].company}
                    </p>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="mt-8 flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonialIndex
                          ? "bg-[#2090C4] w-8"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Auto-rotate timer */}
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2090C4] rounded-full"
                    style={{
                      animation: "progress 10s linear infinite",
                      animationPlayState: "running",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos - Horizontal Scroll */}
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Partners
              </h3>
            </div>

            <div className="relative">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent z-10"></div>

              {/* Logo container with horizontal scroll */}
              <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex space-x-12 px-12">
                  {clientLogos.map((client, index) => (
                    <div
                      key={index}
                      className="shrink-0 group cursor-pointer"
                    >
                      <div className="relative w-32 h-16 md:w-40 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center p-4 transition-all duration-300 group-hover:bg-gray-200 group-hover:shadow-md">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={120}
                          height={60}
                          objectFit="contain"
                          className="filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                      <p className="text-center text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {client.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 7 – PRICING PREVIEW - SLEEKEST REDESIGN */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Unlock Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible and transparent pricing designed to scale with your
              needs. **Full details are on the pricing page.**
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-stretch">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative flex flex-col p-8 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.05] group
                  ${
                    tier.isPopular
                      ? "bg-linear-to-br from-[#2090C4] to-[#1a7bb7] text-white shadow-2xl ring-4 ring-offset-2 ring-[#2090C4] z-10"
                      : "bg-white text-gray-900 ring-1 ring-gray-200 hover:ring-[#2090C4]/50"
                  }
                `}
              >
                {/* Popular Badge (for the popular card) */}
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 px-5 py-1 bg-white text-[#2090C4] text-sm font-bold rounded-full shadow-lg transform rotate-6">
                    Most Popular
                  </div>
                )}

                <h3
                  className={`text-3xl font-bold mb-3 ${
                    tier.isPopular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-md mb-8 grow-0 ${
                    tier.isPopular ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {tier.tagline}
                </p>

                <div className="mb-8 flex items-center justify-start">
                  {tier.price !== "Custom" ? (
                    <>
                      <CurrencyDollarIcon
                        className={`w-10 h-10 ${
                          tier.isPopular ? "text-white" : "text-[#2090C4]"
                        } mr-1`}
                      />
                      <span
                        className={`text-6xl font-extrabold ${
                          tier.isPopular ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {tier.price}
                      </span>
                    </>
                  ) : (
                    <span
                      className={`text-5xl font-extrabold ${
                        tier.isPopular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {tier.price}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col space-y-3 mb-10 grow">
                  {/* Included Features (Simplified) */}
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start ${
                        tier.isPopular ? "text-blue-100" : "text-gray-700"
                      }`}
                    >
                      <CheckIcon
                        className={`w-6 h-6 ${
                          tier.isPopular ? "text-white" : "text-green-500"
                        } shrink-0 mr-3 mt-0.5`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}

                  {/* Missing/Excluded Features (Simplified) */}
                  {tier.missingFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start ${
                        tier.isPopular
                          ? "text-blue-300 line-through"
                          : "text-gray-400 line-through"
                      }`}
                    >
                      <XMarkIcon
                        className={`w-6 h-6 ${
                          tier.isPopular ? "text-blue-200" : "text-red-400"
                        } shrink-0 mr-3 mt-0.5`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link href={tier.link} className="mt-auto block">
                  <button
                    className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105
                      ${
                        tier.isPopular
                          ? "bg-white text-[#2090C4] hover:bg-gray-100 shadow-md"
                          : "bg-[#2090C4] text-white hover:bg-[#1a7bb7] shadow-md"
                      }
                    `}
                  >
                    {tier.buttonText}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* VIEW FULL PRICING BUTTON - Styled with brand colors and rounded-full */}
          <div className="text-center mt-16">
            <Link href="/pricing">
              <button className="cursor-pointer bg-[#2090C4] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors flex items-center justify-center mx-auto w-fit text-lg shadow-md transform hover:scale-105">
                View Full Pricing
                <ArrowRightIcon className="w-5 h-5 ml-3" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 8 – HARDWARE SHOWCASE - Corrected Layout for Image/Text */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Smart Hardware
            </h2>
            <p className="text-xl text-gray-600">
              Seamlessly integrated, durable, and reliable devices built for any
              environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {hardwareDevices.map((device, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group ${device.color} p-8 rounded-3xl text-center shadow-lg transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl hover:ring-2 hover:ring-offset-4 hover:ring-[#2090C4]/50 min-h-[500px] flex flex-col`}
              >
                {/* Image Container - Fixed to prevent overflow */}
                <div className="relative h-56 w-full flex items-center justify-center mb-8 z-10 border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={device.imageSrc}
                      alt={device.name}
                      layout="fill"
                      objectFit="cover" // Changed from "contain" to "cover"
                      className="transition-transform duration-500 filter drop-shadow-xl"
                    />
                  </div>
                  {/* Shadow/Base to suggest floating */}
                  <div className="absolute bottom-0 w-3/4 h-3 bg-black rounded-full opacity-10 blur-md transition-all duration-500 group-hover:w-4/5"></div>
                </div>

                {/* Text Content */}
                <div className="p-4 pt-0 grow flex flex-col">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                    {device.name}
                  </h3>
                  <p className="text-gray-700 mb-6 font-medium grow">
                    {device.description}
                  </p>

                  <Link href="/hardware" passHref>
                    <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors text-base transform group-hover:scale-105 shadow-md">
                      See Specifications
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/hardware">
              <button className="cursor-pointer bg-gray-200 text-gray-800 px-10 py-4 rounded-full font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center mx-auto w-fit text-lg shadow-md">
                View All Hardware Solutions
                <ArrowRightIcon className="w-5 h-5 ml-3" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 9 – CALL TO ACTION - Standard Design */}
      {/* SECTION 9 – CALL TO ACTION - Sleek Design with Animations */}
      <section className="relative py-20 bg-linear-to-br from-[#2090C4] via-[#1a7bb7] to-[#0f5d8c] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Animated pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            {/* Animated underline for heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative inline-block">
              Ready to Secure Smarter?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></span>
            </h2>

            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto transform transition-all duration-500 hover:scale-105">
              Schedule your demo today and see how SmatAccess transforms
              property security.
            </p>

            <div className="relative inline-block">
              {/* Button with ripple effect on hover */}
              <button className="cursor-pointer relative bg-white text-[#2090C4] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Request a Demo
                  <ArrowRightIcon className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                {/* Ripple effect */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>

                {/* Animated background gradient */}
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
              </button>
            </div>

            {/* Floating security badges */}
            <div className="mt-16 flex justify-center space-x-8">
              <div
                className="flex flex-col items-center animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 shadow-lg transform transition-all duration-300 hover:scale-110">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-white/80 text-sm">
                  Bank-Level Security
                </span>
              </div>

              <div
                className="flex flex-col items-center animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 shadow-lg transform transition-all duration-300 hover:scale-110">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-white/80 text-sm">24/7 Monitoring</span>
              </div>

              <div
                className="flex flex-col items-center animate-float"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 shadow-lg transform transition-all duration-300 hover:scale-110">
                  <UserPlusIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-white/80 text-sm">Easy Onboarding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add custom animation styles */}
      </section>

      <Footer />

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
