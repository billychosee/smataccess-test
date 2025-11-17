import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact SmatAccess - Get Connected",
  description:
    "Have questions or need a quote? We're here to help — and fast. Contact SmatAccess for intelligent access control solutions across Africa.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION - Enhanced with better visual hierarchy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12 bg-gray-50">
        <section
          className="relative flex items-center justify-center text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          {/* Background Image */}
          <Image
            src="/hero.png"
            alt="SmatAccess Contact Hero Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />

          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent z-10"></div>

          {/* Content Container - Enhanced with better spacing */}
          <div className="relative z-20 px-5 md:px-20 text-center max-w-4xl">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                We&apos;re here to help
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Let&apos;s Get You Connected
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Have questions or need a quote? We&apos;re here to help — and
              fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                Contact Us Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2090C4] transition-all duration-300 flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Us
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* CONTACT OPTIONS SECTION - Redesigned to match other cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to connect with our team based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sales & Demos Card - Updated to match other cards */}
            <div className="group relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/hero.png" // Using the same hero image as background
                  alt="Sales Background"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-5"
                />
                <div className="absolute inset-0 bg-linear-to-br from-[#2090C4]/5 via-transparent to-blue-500/5"></div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-[#2090C4]/10 to-transparent rounded-full transform translate-x-20 -translate-y-20 z-0"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-20 h-20 bg-linear-to-br from-[#2090C4] to-[#1a7bb7] rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Sales & Demos
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed grow">
                  Talk to our access experts for tailored recommendations and
                  see SmatAccess in action with a personalized demo.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">Product demonstrations</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">Custom solutions</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">Pricing information</span>
                  </li>
                </ul>

                <button className="cursor-pointer w-full bg-linear-to-r from-[#2090C4] to-[#1a7bb7] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Book a Demo
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Support & Maintenance Card - Updated to match other cards */}
            <div className="group relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/hero.png" // Using the same hero image as background
                  alt="Support Background"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-5"
                />
                <div className="absolute inset-0 bg-linear-to-br from-green-500/5 via-transparent to-blue-500/5"></div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-green-500/10 to-transparent rounded-full transform translate-x-20 -translate-y-20 z-0"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-20 h-20 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <QuestionMarkCircleIcon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Support & Maintenance
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed grow">
                  Already a client? Get instant support through our WhatsApp bot
                  or connect with our technical team.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">24/7 WhatsApp support</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">Technical assistance</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">Maintenance requests</span>
                  </li>
                </ul>

                <button className="cursor-pointer w-full bg-linear-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Open WhatsApp Chat
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* General Enquiries Card - Updated to match other cards */}
            <div className="group relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/hero.png" // Using the same hero image as background
                  alt="Enquiries Background"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-5"
                />
                <div className="absolute inset-0 bg-linear-to-br from-gray-500/5 via-transparent to-blue-500/5"></div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-gray-500/10 to-transparent rounded-full transform translate-x-20 -translate-y-20 z-0"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-20 h-20 bg-linear-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <EnvelopeIcon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  General Enquiries
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed grow">
                  Need information about our services, partnership
                  opportunities, or have general questions?
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">Partnership inquiries</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">General information</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">Media inquiries</span>
                  </li>
                </ul>

                <button className="cursor-pointer w-full bg-linear-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Email Us
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION SECTION - Reduced height */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is ready to assist you with any questions about our
              access control solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Contact Information Card - Reduced height */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative overflow-hidden h-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/hero.png" // Using the same hero image as background
                    alt="Contact Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-5"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-[#2090C4]/5 via-transparent to-blue-500/5"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-[#2090C4]/10 to-transparent rounded-full transform translate-x-20 -translate-y-20 z-0"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-[#2090C4]/5 to-transparent rounded-full transform -translate-x-16 translate-y-16 z-0"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-[#2090C4] to-[#1a7bb7] rounded-full mb-3 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Contact Information
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">
                      Reach out to us through any of these channels
                    </p>
                  </div>

                  <div className="grow space-y-4">
                    {/* Location Card */}
                    <div className="group bg-linear-to-r from-[#2090C4]/5 to-transparent p-4 rounded-xl border border-[#2090C4]/10 transition-all duration-300 hover:shadow-md hover:border-[#2090C4]/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-linear-to-br from-[#2090C4] to-[#1a7bb7] rounded-full flex items-center justify-center mr-3 shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <MapPinIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-gray-900 mb-1">
                            Head Office
                          </h4>
                          <p className="text-gray-600 text-xs">
                            13 Brentwood Avenue, Groombridge, Harare
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phone Card */}
                    <div className="group bg-linear-to-r from-[#2090C4]/5 to-transparent p-4 rounded-xl border border-[#2090C4]/10 transition-all duration-300 hover:shadow-md hover:border-[#2090C4]/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-linear-to-br from-[#2090C4] to-[#1a7bb7] rounded-full flex items-center justify-center mr-3 shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <PhoneIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-gray-900 mb-1">
                            Phone
                          </h4>
                          <p className="text-gray-600 text-xs">
                            +263 86 8800 8361 / +263 789 566 428/7
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email Card */}
                    <div className="group bg-linear-to-r from-[#2090C4]/5 to-transparent p-4 rounded-xl border border-[#2090C4]/10 transition-all duration-300 hover:shadow-md hover:border-[#2090C4]/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-linear-to-br from-[#2090C4] to-[#1a7bb7] rounded-full flex items-center justify-center mr-3 shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <EnvelopeIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-gray-900 mb-1">
                            Email
                          </h4>
                          <p className="text-gray-600 text-xs">
                            info@smatechgroup.com
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Business Hours Card */}
                    <div className="group bg-linear-to-r from-[#2090C4]/5 to-transparent p-4 rounded-xl border border-[#2090C4]/10 transition-all duration-300 hover:shadow-md hover:border-[#2090C4]/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-linear-to-br from-[#2090C4] to-[#1a7bb7] rounded-full flex items-center justify-center mr-3 shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <ClockIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-gray-900 mb-1">
                            Business Hours
                          </h4>
                          <p className="text-gray-600 text-xs">
                            Mon-Fri: 8AM-5PM / Sat: 9AM-1PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-center text-xs text-gray-600 mb-3">
                      Follow us on social media
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href="https://www.facebook.com/smatechgroup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center hover:bg-[#2090C4]/20 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-4 h-4 text-[#2090C4]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/smatechgroup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center hover:bg-[#2090C4]/20 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg
                          className="w-4 h-4 text-[#2090C4]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/smatechgroup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center hover:bg-[#2090C4]/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-4 h-4 text-[#2090C4]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Updated with all requested fields */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative overflow-hidden h-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/hero.png" // Using the same hero image as background
                    alt="Form Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-5"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-[#2090C4]/5 via-transparent to-blue-500/5"></div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-[#2090C4]/10 to-transparent rounded-full transform translate-x-20 -translate-y-20 z-0"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Send us a Quick Message
                  </h3>

                  <form className="space-y-5 grow flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          placeholder="Name"
                          className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-[#2090C4] focus:border-[#2090C4] transition-all bg-gray-50 text-gray-900 placeholder-gray-500"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <div className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-[#2090C4]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-[#2090C4] focus:border-[#2090C4] transition-all bg-gray-50 text-gray-900 placeholder-gray-500"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <div className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center">
                            <EnvelopeIcon className="w-4 h-4 text-[#2090C4]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Phone"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-[#2090C4] focus:border-[#2090C4] transition-all bg-gray-50 text-gray-900 placeholder-gray-500"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <div className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center">
                          <PhoneIcon className="w-4 h-4 text-[#2090C4]" />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        placeholder="Company / Property Name"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-[#2090C4] focus:border-[#2090C4] transition-all bg-gray-50 text-gray-900 placeholder-gray-500"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <div className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center">
                          <BuildingOfficeIcon className="w-4 h-4 text-[#2090C4]" />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="location"
                        placeholder="Location"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-[#2090C4] focus:border-[#2090C4] transition-all bg-gray-50 text-gray-900 placeholder-gray-500"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <div className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center">
                          <MapPinIcon className="w-4 h-4 text-[#2090C4]" />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        id="propertyType"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-[#2090C4] focus:border-[#2090C4] transition-all bg-gray-50 text-gray-900 appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled hidden>
                          Property Type
                        </option>
                        <option value="residential">Residential</option>
                        <option value="office">Corporate Office</option>
                        <option value="school">School</option>
                        <option value="industrial">Industrial</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="government">Government</option>
                        <option value="event">Event Venue</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <div className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center">
                          <BuildingOffice2Icon className="w-4 h-4 text-[#2090C4]" />
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div className="relative grow">
                      <textarea
                        id="message"
                        placeholder="Message"
                        rows={4}
                        className="w-full h-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#2090C4] focus:border-[#2090C4] transition-all bg-gray-50 text-gray-900 placeholder-gray-500 resize-none"
                      ></textarea>
                      <div className="absolute top-3 left-4 pointer-events-none">
                        <div className="w-8 h-8 bg-[#2090C4]/10 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-[#2090C4]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="cursor-pointer w-full bg-linear-to-r from-[#2090C4] to-[#1a7bb7] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      Submit Request
                      <PaperAirplaneIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL OUT - Enhanced with better design */}
      <section className="relative py-20 bg-linear-to-br from-[#2090C4] via-[#1a7bb7] to-[#0f5d8c] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Security?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Join hundreds of businesses across Africa using SmatAccess to secure
            their properties efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
              Request Demo
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
            <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2090C4] transition-all duration-300 flex items-center">
              Get Pricing
            </button>
            <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2090C4] transition-all duration-300 flex items-center">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
