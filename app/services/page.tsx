/* eslint-disable max-len */
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image"; // Required for the new hero section
import Link from "next/link";
import type { Metadata } from "next";
import ScrollToFeaturesButton from "../../components/ScrollToFeaturesButton";
import ScrollToFeatureButton from "../../components/ScrollToFeatureButton";
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
      <div className="px-4 py-8 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-0 sm:py-12 md:pt-8 bg-gray-50">
        <section
          className="relative flex items-center justify-center text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          {/* Background Image/Video */}
          <div className="absolute inset-0 z-0">
            {/* NOTE: You will need a suitable image path here, e.g., for security/access control */}
            <Image
              src="/services-hero.png"
              alt="SmatAccess Services Hero Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-20 max-w-4xl px-5 text-center md:px-20">
            <div className="mb-4">
              <span className="inline-block px-6 py-2 text-sm font-medium tracking-wider uppercase rounded-full bg-white/20 backdrop-blur-sm">
                Services
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Control Access. Empower Security.
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-white/90">
              Everything you need to secure your premises. Explore the powerful
              features designed to protect your people, property, and processes.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ScrollToFeaturesButton />
              <Link
                href="/contact"
                className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2090C4] transition-all duration-300 flex items-center"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Request a Demo
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FEATURE BLOCKS - Modernized UI (Starts immediately after hero) */}
      <section id="features-section" className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Core Capabilities
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Choose the right tools for your specific security challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                id={`feature-${index}`}
                key={index}
                className="relative p-8 transition-all duration-500 bg-white border border-gray-100 shadow-xl group rounded-3xl hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Mobile: No decorative element, Medium+: Responsive decorative element */}
                <div className="absolute top-0 right-0 hidden md:block w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform md:translate-x-8 md:-translate-y-8 lg:translate-x-16 lg:-translate-y-16 z-0"></div>

                {/* Mobile alternative: Small subtle element */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-[#2090C4]/5 to-transparent rounded-full md:hidden z-0"></div>

                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#2090C4]/20 to-[#2090C4]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-[#2090C4]" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {feature.description}
                </p>
                <ScrollToFeatureButton
                  featureId={`feature-${index}`}
                  label="See Details"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/hardware"
              className="inline-flex items-center justify-center gap-2 bg-[#2090C4] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
            >
              Explore Our Hardware Solutions
              <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
