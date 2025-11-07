import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  HomeModernIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Industries - SmatAccess Solutions",
  description:
    "Secure Any Environment — Built for Every Industry. SmatAccess adapts to your environment, scale, and security goals.",
};

export default function Industries() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION - match other pages style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12 bg-gray-50">
        <section
          className="relative flex items-center justify-center text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          <Image
            src="/hero.png"
            alt="SmatAccess Industries Hero Background"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="relative z-20 max-w-4xl px-5 text-center md:px-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm">
                Tailored Security Solutions
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Secure Any Environment — Built for Every Industry
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-white/90">
              SmatAccess adapts to your environment, scale, and security goals.
              Find the perfect solution for your sector.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#2090C4] bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>

      {/* INDUSTRY BLOCKS */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Residential & Cluster Homes',
                description: 'Gate QR codes, visitor tracking.',
                video: 'Cluster Homes: Gate entry via QR & WhatsApp.'
              },
              {
                name: 'Corporate Offices',
                description: 'Facial login, time & attendance logs.',
                video: 'Corporate Offices: Facial & fingerprint entry, digital logs.'
              },
              {
                name: 'Educational Institutions',
                description: 'Student & staff access control.',
                video: 'Educational Institutions: Student & staff access control.'
              },
              {
                name: 'Healthcare Facilities',
                description: 'Restricted zone access.',
                video: 'Healthcare Facilities: Restricted zone access.'
              },
              {
                name: 'Industrial & Mining Sites',
                description: 'Heavy-vehicle monitoring.',
                video: 'Industrial Sites: Rugged devices, truck entry scanning.'
              },
              {
                name: 'Government & Public Buildings',
                description: 'Multi-level clearance control.',
                video: 'Government & Public Buildings: Multi-level clearance control.'
              },
              {
                name: 'Retail & Commercial',
                description: 'POS area protection, staff movement logs.',
                video: 'Retail & Commercial: POS area protection, staff movement logs.'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500 text-sm">See in Action: {industry.video}</p>
                </div>
                <Link href="/use-cases">
                  <button className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request a Demo for Your Sector
            </button>
          </div>
        </div>
      </section> */}
      {/* INDUSTRY BLOCKS WITH HOVER EFFECTS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solutions for Every Sector
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From residential complexes to industrial sites, our access control
              solutions adapt to your unique security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Residential & Cluster Homes",
                description:
                  "Smart gate access with QR codes, visitor tracking, and WhatsApp integration for seamless entry management.",
                features: [
                  "Gate QR codes",
                  "Visitor tracking",
                  "WhatsApp approvals",
                ],
                icon: HomeModernIcon,
              },
              {
                name: "Corporate Offices",
                description:
                  "Comprehensive access control with facial recognition, time tracking, and detailed attendance logs.",
                features: [
                  "Facial recognition",
                  "Time tracking",
                  "Access logs",
                ],
                icon: BuildingOffice2Icon,
              },
              {
                name: "Educational Institutions",
                description:
                  "Secure campus access with student and staff identification, zone restrictions, and attendance tracking.",
                features: [
                  "Student ID integration",
                  "Zone control",
                  "Attendance system",
                ],
                icon: AcademicCapIcon,
              },
              {
                name: "Healthcare Facilities",
                description:
                  "Advanced security for sensitive areas with multi-factor authentication and real-time monitoring.",
                features: [
                  "Restricted access",
                  "Staff tracking",
                  "Emergency protocols",
                ],
                icon: HeartIcon,
              },
              {
                name: "Industrial & Mining Sites",
                description:
                  "Robust access control for vehicles and personnel with specialized equipment tracking.",
                features: [
                  "Vehicle monitoring",
                  "Equipment tracking",
                  "Safety compliance",
                ],
                icon: WrenchScrewdriverIcon,
              },
              {
                name: "Government Buildings",
                description:
                  "High-security solutions with multi-level clearance and detailed audit trails for compliance.",
                features: [
                  "Clearance levels",
                  "Audit trails",
                  "Compliance tools",
                ],
                icon: BuildingOfficeIcon,
              },
              {
                name: "Retail & Commercial",
                description:
                  "Retail-focused security with POS area protection and staff movement tracking.",
                features: [
                  "POS security",
                  "Staff monitoring",
                  "Inventory access",
                ],
                icon: ShoppingBagIcon,
              },
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Decorative background gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2090C4]/20 to-[#2090C4]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#2090C4]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {industry.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-[#2090C4] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Action buttons */}
                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      href="/use-cases"
                      className="text-[#2090C4] hover:text-[#1a7bb7] font-semibold inline-flex items-center group/link"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#2090C4]/10 text-[#2090C4] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#2090C4]/20 transition-colors"
                    >
                      Book Demo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA SECTION */}
          <div className="mt-20 text-center">
            <div className="relative py-12 px-6 rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
              </div>

              <div className="relative">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Secure Your Industry?
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                  Get a personalized demo and see how SmatAccess can transform
                  your security infrastructure.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#2090C4] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors text-lg shadow-lg"
                >
                  Request Industry Demo
                  <PlayIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
