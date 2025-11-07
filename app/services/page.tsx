/* eslint-disable max-len */
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image"; // Required for the new hero section
import Link from 'next/link';
import type { Metadata } from "next";
import {
  UserPlusIcon,
  FingerPrintIcon,
  TruckIcon,
  ChatBubbleBottomCenterTextIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  BellAlertIcon,
  ArrowRightIcon,
  PhoneIcon, // Required for Contact Us button
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Services - SmatAccess Features",
  description:
    "Everything You Need to Control Access. Powerful features designed to protect your people, property, and processes.",
};

// Define the feature data (kept for the feature blocks section)
const features = [
  {
    name: "Visitor Management",
    description: "QR code creation, WhatsApp approval.",
    icon: UserPlusIcon,
  },
  {
    name: "Facial & Fingerprint Recognition",
    description: "AI-driven identity verification.",
    icon: FingerPrintIcon,
  },
  {
    name: "Vehicle & Number Plate Recognition",
    description: "Automatic detection, zero manual checks.",
    icon: TruckIcon,
  },
  {
    name: "WhatsApp Bot Integration",
    description: "Real-time entry approvals and maintenance requests.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Maintenance Issue Tracker",
    description: "Report, assign, and resolve on one interface.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Real-Time Dashboard & Analytics",
    description: "Users in/out, vehicles in/out, average stay time, alerts.",
    icon: ChartBarIcon,
  },
  {
    name: "Alerts & Logs",
    description: "Denied entries, manual overrides, occupancy count.",
    icon: BellAlertIcon,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION - REPLICATING ABOUT.TSX UI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12 bg-gray-50">
        <section
          className="relative flex items-center justify-center text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          {/* Background Image/Video */}
          <div className="absolute inset-0 z-0">
            {/* NOTE: You will need a suitable image path here, e.g., for security/access control */}
            <Image
              src="/services-hero-bg.jpg"
              alt="SmatAccess Services Hero Background - Integrated Security"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-20 px-5 md:px-20 text-center max-w-4xl">
            <div className="mb-4">
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
                Intelligent Access Control
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Control Access. Empower Security.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Everything you need to secure your premises. Explore the
              powerful features designed to protect your people, property, and
              processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                View All Features
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2090C4] transition-all duration-300 flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Request a Demo
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* FEATURE BLOCKS - Modernized UI (Starts immediately after hero) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right tools for your specific security challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 z-0"></div>

                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#2090C4]/20 to-[#2090C4]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-[#2090C4]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <button className="cursor-pointer text-[#2090C4] hover:text-blue-800 font-semibold flex items-center">
                  See Details
                  <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/hardware" className="inline-flex items-center justify-center gap-2 bg-[#2090C4] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
              Explore Our Hardware Solutions
              <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
