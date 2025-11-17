/* eslint-disable max-len */
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
  UserPlusIcon,
  QrCodeIcon,
  ClockIcon,
  ChartBarIcon,
  PlayIcon,
  // Icons for Why Choose SmatAccess section
  EyeIcon,
  ChatBubbleLeftRightIcon,
  KeyIcon,
  ServerIcon,
  CloudIcon,
  PhoneIcon,
  // New icons for additional features
  CpuChipIcon,
  PuzzlePieceIcon,
  WifiIcon,
  // Icons for testimonials
  CheckIcon,
  XMarkIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  // State for testimonial rotation
  const [, setCurrentTestimonialIndex] = useState(0);

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
      title: "Mining Operations",
      description:
        "Secure remote mining sites with robust access control, equipment tracking, and emergency response systems.",
      icon: WrenchScrewdriverIcon,
      slug: "mining-operations",
    },
    {
      title: "Banking",
      description:
        "Meet strict financial security requirements with multi-layer authentication and compliance reporting.",
      icon: BuildingOfficeIcon,
      slug: "banking",
    },
    {
      title: "Manufacturing Facilities",
      description:
        "Track personnel and equipment across large, complex locations with enhanced security measures.",
      icon: WrenchScrewdriverIcon,
      slug: "manufacturing-facilities",
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
      title: "7-Day Offline",
      description:
        "Our system keeps working perfectly—including all access rules—even during power cuts or network failures. All actions sync to the audit log once reconnected.",
      icon: WifiIcon,
      imageSrc: "/feature-cloud.png",
      color: "bg-orange-500",
    },
    {
      title: "Integrated Smat-Ecosystem",
      description:
        "Connects natively to SmatProp to automate tenant management and SmatPay to build a complete 'super app' for your community.",
      icon: PuzzlePieceIcon,
      imageSrc: "/feature-multisite.png",
      color: "bg-pink-500",
    },
    {
      title: "Advanced AI Security",
      description:
        "Add powerful modules for AI Facial Recognition and ANPR (Vehicle Plate Recognition) for high-security zones.",
      icon: CpuChipIcon,
      imageSrc: "/feature-monitoring.png",
      color: "bg-violet-500",
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

  // Define client logos — use available use-case images from public/ as partner placeholders
  const clientLogos = [
    { name: "SmatAccess", logo: "/smataccess-usecase.jpg" },
    { name: "SmatProp", logo: "/smatprop-usecase.jpg" },
    { name: "SmatQR", logo: "/smatqr-usecase.jpg" },
    { name: "SmatUtor", logo: "/smatutor-usecase.jpg" },
    { name: "SmatPay", logo: "/smatpay-usecase.jpg" },
    { name: "Njere", logo: "/njere-usecase.jpg" },
    { name: "Team A", logo: "/team-1.jpg" },
    { name: "Team B", logo: "/team-2.jpg" },
  ];

  // **********************************************
  // PRICING Tiers Data
  // **********************************************
  const pricingTiers = [
    {
      name: "Residential",
      price: "5",
      tagline: "Cluster Homes, Residential Complexes, Apartment Buildings",
      isPopular: false,
      features: [
        "Digital Visitor Logbook",
        "Web-Based Admin Portal",
        "Tier 1 (Self-Serve) Support",
        "Mobile App (iOS & Android)",
        "Time & Attendance Module",
        "Cloud-Based Audit Logs"
      ],
      missingFeatures: ["Advanced Zoned-Off Access Control"],
      buttonText: "Start Free Trial",
      link: "/signup/residential",
    },
    {
      name: "Business Standard",
      price: "70",
      tagline: "Best for Corporate Offices, SMEs, Single-Site Facilities",
      isPopular: true,
      features: [
        "Time & Attendance Module",
        "Cloud-Based Audit Logs",
        "Web Admin Portal",
        "All core access control features",
        "Tier 1 (Self-Serve) Support",
        "Advanced Zoned-Off Access Control",
        "Centralized Multi-Site Management"
      ],
      missingFeatures: ["Custom Integrations & API Access"],
      buttonText: "Request Quote",
      link: "/contact/business",
    },
    {
      name: "Enterprise",
      price: "500 - 1200",
      tagline: "Best for Mining Operations, Banks, Manufacturing, Multi-Site Corporations",
      isPopular: false,
      features: [
        "Advanced Zoned-Off Access Control (for high-security areas, vaults, etc.)",
        "Centralized Multi-Site Management Dashboard",
        "Custom Integrations & API Access",
        "Includes all Business Standard features",
        "Tier 2 (Enterprise) Support"
      ],
      missingFeatures: [],
      buttonText: "Contact Sales",
      link: "/contact/enterprise",
    },
  ];
  // **********************************************

  // **********************************************
  // HARDWARE DATA for Showcase Section
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION - Updated for sleek design */}
      <div className="px-4 py-8 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-0 sm:py-12 md:pt-8 bg-gray-50">
        <section
          className="relative flex items-end text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          {/* Background Image */}
          <Image
            src="/hero.png"
            alt="SmatAccess Home Hero Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Content Container */}
          <div className="relative z-20 w-full px-5 pb-16 md:px-20">
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
                Unlock Simplicity, Reliability, and Control.
              </h1>
              <p className="max-w-2xl mb-4 text-xl text-white md:text-xl">
                {/* eslint-disable-next-line max-len, max-len */}
                The African-built access platform that works even when the
                lights go out—effortless, secure, and trusted by the
                region&apos;s top properties.
              </p>
              <p className="max-w-2xl mb-8 text-lg text-white md:text-lg">
                Gain real-time visibility, tenant trust, and control over every
                entry—no matter your industry, even during power cuts.
              </p>
              <button className="cursor-pointer bg-white text-[#2090C4] px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Request a Demo
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3 – INDUSTRY SOLUTIONS - Glass Glowing Blue Style */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Industry Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Control every gate with ease
            </p>
          </div>

          {/* All 8 cards - Mobile: single grid, Desktop: split layout */}
          {/* Mobile layout: All cards in one grid */}
          <div className="block md:hidden">
            <div className="grid items-stretch grid-cols-1 pt-10 gap-x-8 gap-y-16">
              {industrySolutions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="h-full">
                    <div className="relative p-8 pt-16 rounded-2xl flex flex-col items-center text-center justify-start h-full min-h-[300px] w-full transition-all duration-300 ease-in-out transform hover:scale-[1.02] glass-glow-blue">
                      {/* Icon Circle - ABSOLUTE POSITIONING */}
                      <div className="absolute top-0 flex items-center justify-center w-20 h-20 mb-6 transform -translate-y-1/2 rounded-full shadow-lg bg-gradient-to-br from-blue-400 to-cyan-400">
                        <Icon className="w-12 h-12 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 mb-4 text-2xl font-bold text-gray-800">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="max-w-sm mb-6 text-base text-gray-600 grow">
                        {item.description}
                      </p>

                      {/* Learn More Link */}
                      <Link
                        href={`/use-cases/${item.slug}`}
                        className="flex items-center mt-auto font-medium text-blue-600 transition-colors hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop layout: First 6 cards in grid, last 2 centered */}
          <div className="hidden md:block">
            {/* First 6 cards (2 full rows) */}
            <div className="grid items-stretch grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {industrySolutions.slice(0, 6).map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="h-full lg:col-span-1">
                    <div className="relative p-8 pt-16 rounded-2xl flex flex-col items-center text-center justify-start h-full min-h-[300px] w-full transition-all duration-300 ease-in-out transform hover:scale-[1.02] glass-glow-blue">
                      {/* Icon Circle - ABSOLUTE POSITIONING */}
                      <div className="absolute top-0 flex items-center justify-center w-20 h-20 mb-6 transform -translate-y-1/2 rounded-full shadow-lg bg-gradient-to-br from-blue-400 to-cyan-400">
                        <Icon className="w-12 h-12 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 mb-4 text-2xl font-bold text-gray-800">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="max-w-sm mb-6 text-base text-gray-600 grow">
                        {item.description}
                      </p>

                      {/* Learn More Link */}
                      <Link
                        href={`/use-cases/${item.slug}`}
                        className="flex items-center mt-auto font-medium text-blue-600 transition-colors hover:text-blue-800"
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
            <div className="flex justify-center mt-16 gap-x-8">
              {industrySolutions.slice(6).map((item, index) => {
                const Icon = item.icon;
                const actualIndex = index + 6; // Adjust index to match original array

                return (
                  <div key={actualIndex} className="w-full max-w-md">
                    <div className="relative p-8 pt-16 rounded-2xl flex flex-col items-center text-center justify-start h-full min-h-[300px] w-full transition-all duration-300 ease-in-out transform hover:scale-[1.02] glass-glow-blue">
                      {/* Icon Circle - ABSOLUTE POSITIONING */}
                      <div className="absolute top-0 flex items-center justify-center w-20 h-20 mb-6 transform -translate-y-1/2 rounded-full shadow-lg bg-gradient-to-br from-blue-400 to-cyan-400">
                        <Icon className="w-12 h-12 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 mb-4 text-2xl font-bold text-gray-800">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="max-w-sm mb-6 text-base text-gray-600 grow">
                        {item.description}
                      </p>

                      {/* Learn More Link */}
                      <Link
                        href={`/use-cases/${item.slug}`}
                        className="flex items-center mt-auto font-medium text-blue-600 transition-colors hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
              Find Your Industry
            </button>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 4 – HOW IT WORKS (Sleek Grid Layout) */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to secure access.
            </p>
          </div>

          {/* Grid for the steps - two columns on medium, three on large */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 border border-gray-300 rounded-lg">
                      <IconComponent className="w-12 h-12 text-[#2090C4]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 grow">
                    {stepItem.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2090C4]/80 transition-colors flex items-center justify-center mx-auto w-fit">
              Watch the Walkthrough Video
              <PlayIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 5 – WHY CHOOSE SMATACCESS - REDESIGNED WITH IMAGES AND ANIMATIONS */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
          <div className="absolute bg-blue-500 rounded-full bottom-10 right-10 w-96 h-96 filter blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Choose SmatAccess?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Advanced features designed to provide unparalleled security and
              convenience for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
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
                    <div className="absolute flex items-center justify-center w-12 h-12 transition-all duration-500 transform bg-white rounded-full shadow-lg opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12">
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

          <div className="mt-12 text-center">
            <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2090C4]/80 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 6 – OUR PARTNERS - Enhanced Sleek Design */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute w-96 h-96 bg-[#2090C4] rounded-full top-20 left-20 filter blur-3xl"></div>
          <div className="absolute w-64 h-64 bg-blue-500 rounded-full bottom-20 right-20 filter blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#2090C4] to-[#1a7bb7] rounded-full text-white text-sm font-semibold uppercase tracking-wider">
              Partnership Program
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Become a SmatAccess Partner
            </h2>
            <div className="w-full">
              <h3 className="text-3xl font-bold text-[#2090C4] mb-8">
                Join Zimbabwe&apos;s Fastest-Growing Security Ecosystem
              </h3>
              <p className="mb-12 text-xl leading-relaxed text-gray-600">
                At SmatAccess, we believe the future of property security is
                built on partnership, innovation, and local expertise.
                That&apos;s why we invite leading security companies like yours
                to become official SmatAccess Partners.
              </p>

              {/* Sleek Horizontal Cards */}
              <div className="grid grid-cols-1 gap-6 mb-16 sm:grid-cols-2 md:grid-cols-4">
                {/* Card 1: Boost Your Offering */}
                <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-[#2090C4]/30 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2090C4] to-[#1a7bb7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2090C4] to-[#1a7bb7] rounded-lg flex items-center justify-center mr-3">
                        <CheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        Boost Your Offering
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Modern, AI-driven access control—purpose-built for Africa,
                      resilient to power cuts, instantly familiar via WhatsApp.
                    </p>
                  </div>
                </div>

                {/* Card 2: Win More Deals */}
                <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-[#2090C4]/30 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2090C4] to-[#1a7bb7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2090C4] to-[#1a7bb7] rounded-lg flex items-center justify-center mr-3">
                        <CheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        Win More Deals
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Recurring SaaS income, best-in-class support, and unique
                      features competitors can&apos;t match.
                    </p>
                  </div>
                </div>

                {/* Card 3: Grow With Us */}
                <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-[#2090C4]/30 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2090C4] to-[#1a7bb7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2090C4] to-[#1a7bb7] rounded-lg flex items-center justify-center mr-3">
                        <CheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        Grow With Us
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Exclusive training, priority support, co-branded
                      materials, and dedicated success team.
                    </p>
                  </div>
                </div>

                {/* Card 4: Get Noticed */}
                <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-[#2090C4]/30 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2090C4] to-[#1a7bb7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2090C4] to-[#1a7bb7] rounded-lg flex items-center justify-center mr-3">
                        <CheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        Get Noticed
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Feature your logo in our trusted &quot;Our Partners&quot;
                      section and show cutting-edge technology leadership.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Section */}
              <div className="relative p-10 bg-gradient-to-br from-[#2090C4] to-[#1a7bb7] rounded-3xl text-white overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="partner-pattern"
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
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#partner-pattern)"
                    />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h4 className="mb-4 text-2xl font-bold">
                    Ready to Step Ahead of the Competition?
                  </h4>
                  <p className="mb-8 text-lg text-blue-100">
                    Let&apos;s build a safer, smarter Africa—together.
                  </p>
                  <div className="space-y-4">
                    <button className="cursor-pointer relative bg-white text-[#2090C4] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 shadow-xl inline-flex items-center group">
                      Apply to Become a SmatAccess Partner
                      <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
                    </button>
                    <div className="text-blue-100">
                      Or contact our Partner Success team at{" "}
                      <a
                        href="mailto:info@smataccess.com"
                        className="font-semibold text-white hover:underline"
                      >
                        info@smataccess.com
                      </a>{" "}
                      to start your application or learn more.
                    </div>
                  </div>
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
              <div className="absolute top-0 bottom-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute top-0 bottom-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent"></div>

              {/* Logo container with horizontal scroll */}
              <div className="pb-4 overflow-x-auto scrollbar-hide">
                <div className="flex px-12 space-x-12">
                  {clientLogos.map((client, index) => (
                    <div key={index} className="cursor-pointer shrink-0 group">
                      <div className="relative flex items-center justify-center w-32 h-16 p-4 transition-all duration-300 bg-gray-100 rounded-lg md:w-40 md:h-20 group-hover:bg-gray-200 group-hover:shadow-md">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={120}
                          height={60}
                          objectFit="contain"
                          className="transition-all duration-300 filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100"
                        />
                      </div>
                      <p className="mt-2 text-sm text-center text-gray-600 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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

      {/* SECTION 7 – PRICING PREVIEW */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute w-64 h-64 bg-blue-300 rounded-full top-10 right-10 filter blur-3xl"></div>
          <div className="absolute bg-purple-300 rounded-full bottom-10 left-10 w-96 h-96 filter blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              Pricing Structure
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Choose the plan that fits your specific needs and scale as you grow.
            </p>
          </div>

          <div className="grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative flex flex-col p-8 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.05] group
                  ${
                    tier.isPopular
                      ? "bg-gradient-to-br from-[#2090C4] to-[#1a7bb7] text-white shadow-2xl ring-4 ring-offset-2 ring-[#2090C4] z-10"
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

                <div className="flex items-center justify-start mb-8">
                  {tier.price.includes("500 - 1200") ? (
                    <>
                      <CurrencyDollarIcon
                        className={`w-7 h-7 ${
                          tier.isPopular ? "text-white" : "text-[#2090C4]"
                        } mr-1`}
                      />
                      <span
                        className={`text-3xl font-extrabold ${
                          tier.isPopular ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {tier.price}
                      </span>
                    </>
                  ) : (
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
                  )}
                  <span
                    className={`ml-2 text-lg ${
                      tier.isPopular ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    /month
                  </span>
                </div>

                <ul className="flex flex-col mb-10 space-y-3 grow">
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
                <Link href={tier.link} className="block mt-auto">
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
          <div className="mt-16 text-center">
            <Link href="/pricing">
              <button
                className={[
                  "cursor-pointer",
                  "bg-[#2090C4]",
                  "text-white",
                  "px-10",
                  "py-4",
                  "rounded-full",
                  "font-semibold",
                  "flex",
                  "items-center",
                  "justify-center",
                  "mx-auto",
                  "w-fit",
                  "text-lg",
                  "shadow-md",
                  "transition-transform",
                  "transition-shadow",
                  "transition-colors",
                  "duration-300",
                  "ease-in-out",
                  "hover:scale-105",
                  "hover:shadow-xl",
                  "hover:bg-[#1a7bb7]",
                ].join(" ")}
              >
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Explore Our Smart Hardware
            </h2>
            <p className="text-xl text-gray-600">
              SmatAccess is a software-first platform designed to be
              hardware-agnostic. It integrates seamlessly with your existing
              biometric scanners, gate barriers, turnstiles, and smart locks.
              For the client who needs a fully integrated solution, we also
              offer bespoke hardware solutions
              <a href="/hardware" className="text-[#2090C4] hover:underline">
                Explore our Hardware Solutions
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {hardwareDevices.map((device, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group ${device.color} p-8 rounded-3xl text-center shadow-lg transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl hover:ring-2 hover:ring-offset-4 hover:ring-[#2090C4]/50 min-h-[500px] flex flex-col`}
              >
                {/* Image Container - Fixed to prevent overflow */}
                <div className="relative z-10 flex items-center justify-center w-full h-56 mb-8 overflow-hidden border-2 border-gray-300 rounded-lg">
                  <div className="relative w-full h-full">
                    <Image
                      src={device.imageSrc}
                      alt={device.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 filter drop-shadow-xl"
                    />
                  </div>
                  {/* Shadow/Base to suggest floating */}
                  <div className="absolute bottom-0 w-3/4 h-3 transition-all duration-500 bg-black rounded-full opacity-10 blur-md group-hover:w-4/5"></div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col p-4 pt-0 grow">
                  <h3 className="mb-2 text-2xl font-extrabold text-gray-900">
                    {device.name}
                  </h3>
                  <p className="mb-6 font-medium text-gray-700 grow">
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

          <div className="mt-16 text-center">
            <Link href="/hardware">
              <button className="flex items-center justify-center px-10 py-4 mx-auto text-lg font-semibold text-gray-800 transition-colors bg-gray-200 rounded-full shadow-md cursor-pointer hover:bg-gray-300 w-fit">
                Explore Devices
                <ArrowRightIcon className="w-5 h-5 ml-3" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* SECTION 9 – CALL TO ACTION */}
      <section className="relative py-20 bg-gradient-to-br from-[#2090C4] via-[#1a7bb7] to-[#0f5d8c] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-64 h-64 bg-white rounded-full top-20 left-20 filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bg-white rounded-full bottom-20 right-20 w-96 h-96 filter blur-3xl animate-pulse"
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

        <div className="relative z-10 max-w-5xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="relative">
            {/* Animated underline for heading */}
            <h2 className="relative inline-block mb-6 text-4xl font-bold text-white md:text-5xl">
              Ready to Secure Smarter?
              <span className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-700 origin-left transform scale-x-0 bg-white group-hover:scale-x-100"></span>
            </h2>

            <p className="max-w-3xl mx-auto mb-10 text-lg transition-all duration-500 transform md:text-xl text-white/90 hover:scale-105">
              Schedule your demo today and see how SmatAccess transforms
              property security.
            </p>

            <div className="relative inline-block">
              {/* Button with ripple effect on hover */}
              <button className="cursor-pointer relative bg-white text-[#2090C4] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Request a Demo
                  <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
                </span>

                {/* Ripple effect */}
                <span className="absolute inset-0 transition-opacity duration-500 bg-white opacity-0 group-hover:opacity-20"></span>

                {/* Animated background gradient */}
                <span className="absolute inset-0 transition-all duration-1000 transform -translate-x-full -skew-x-12 opacity-0 bg-gradient-to-r from-transparent via-white to-transparent group-hover:opacity-30 group-hover:translate-x-full"></span>
              </button>
            </div>

            {/* Floating security badges */}
            <div className="flex justify-center mt-16 space-x-8">
              <div
                className="flex flex-col items-center animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-2 transition-all duration-300 transform rounded-full shadow-lg bg-white/20 backdrop-blur-sm hover:scale-110">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-white/80">
                  Bank-Level Security
                </span>
              </div>

              <div
                className="flex flex-col items-center animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-2 transition-all duration-300 transform rounded-full shadow-lg bg-white/20 backdrop-blur-sm hover:scale-110">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-white/80">24/7 Monitoring</span>
              </div>

              <div
                className="flex flex-col items-center animate-float"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-2 transition-all duration-300 transform rounded-full shadow-lg bg-white/20 backdrop-blur-sm hover:scale-110">
                  <UserPlusIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-white/80">Easy Onboarding</span>
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
      <style jsx>{`
        .glass-glow-blue {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.18);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }

        .glass-glow-blue:hover {
          box-shadow: 0 8px 32px 0 rgba(59, 130, 246, 0.3);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
}

