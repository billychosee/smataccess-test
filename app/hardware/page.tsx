/* eslint-disable max-len */
'use client'; // <-- ADD THIS LINE to make it a Client Component (needed for state/hooks)

import { useState, useEffect } from 'react'; // <-- IMPORT useState and useEffect
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  PhoneIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  XMarkIcon, // <-- IMPORT XMarkIcon for closing
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

// Define the type for a hardware item for better type safety
interface HardwareItem {
  name: string;
  description: string;
  specs: string;
  image: string;
  modalImage?: string;
  images?: string[]; // Optional array for multiple preview images
  features: string[];
}

// Hardware data
const hardwareData: HardwareItem[] = [
  {
    name: "Biometric Scanners",
    description:
      "Advanced face and fingerprint verification systems with AI-powered recognition.",
    specs: "99.9% accuracy, IP65 weather-resistant, anti-spoofing technology",
    image: "/biometric-scanners.png",
    images: [
      "/biometric-scanners-front.png",
      "/biometric-scanners-back.png",
      "/biometric-scanners-side.png",
      "/biometric-scanners-top-bottom.png",
    ],
    features: [
      "Face Recognition",
      "Fingerprint Scanner",
      "Anti-spoofing",
      "Weather Resistant",
      "High-Speed Processing",
      "Tamper Alerts",
    ],
  },
  {
    name: "RFID Readers",
    description:
      "High-speed contactless access with secure encryption and long-range reading.",
    specs: "Up to 10m range, AES-256 encryption, multi-frequency support",
    image: "/rfid-readers.png",
    images: [
      "/rfid-readers-long-range.png",
      "/rfid-readers-white.png",
      "/rfid-readers-black-front.png",
      "/rfid-readers-black-back.png",
    ],
    features: [
      "Long Range",
      "Secure Encryption",
      "Multi-frequency",
      "Fast Processing",
      "Wiegand/OSDP Support",
      "Integrated Antenna",
    ],
  },
  {
    name: "Turnstiles",
    description:
      "Modern, durable gate solutions with anti-tailgating and high throughput design.",
    specs:
      "Anti-tailgating sensors, 30+ users/minute, stainless steel construction",
    image: "/turnstile.png",
    images: ["/turnstile-1.png", "/turnstile-2.png", "/turnstile-3.png"],
    features: [
      "Anti-tailgating",
      "High Throughput",
      "Durable Build",
      "Safety Sensors",
      "Emergency Breakaway",
      "Bi-directional Flow",
    ],
  },
  {
    name: "Gate Barriers",
    description:
      "Intelligent vehicle control systems with automatic operation and detection.",
    specs: "ANPR integration, 3m barrier length, solar power option",
    image: "/gate-barrier.png",
    features: [
      "ANPR Integration",
      "Automatic Operation",
      "Solar Power",
      "Vehicle Detection",
      "Fast Open/Close",
      "Safety Loop Sensors",
    ],
  },
  {
    name: "Rugged Security Devices",
    description:
      "Handheld scanners and mobile ANPR cameras for field operations.",
    specs: "IP65 rated, 8-hour battery, offline capability",
    image: "/rugged-security.png",
    images: ["/device1-overview.png", "/rugged-security.png"],
    features: [
      "IP65 Rated",
      "Long Battery Life",
      "Offline Mode",
      "Thermal Imaging",
      "Mobile Connectivity",
      "GPS Tracking",
    ],
  },
];

// --- MODAL COMPONENT ---
const HardwareModal = ({ hardware, onClose }: { hardware: HardwareItem, onClose: () => void }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imagesToShow = hardware.images || [hardware.modalImage || hardware.image];

    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + imagesToShow.length) % imagesToShow.length);
    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % imagesToShow.length);

    // Basic Tailwind CSS for the modal structure and styling
    return (
        // Modal Backdrop
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose}>
            {/* Modal Content */}
            <div
                className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-white rounded-[2rem] shadow-2xl transform transition-all duration-300 scale-100 opacity-100"
                onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing when clicking inside
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute z-50 p-2 text-gray-400 transition-colors duration-200 bg-white rounded-full shadow-lg top-4 right-4 hover:bg-gray-100 hover:text-gray-600"
                    aria-label="Close modal"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Grid Layout for Image and Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-full rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none overflow-hidden bg-gray-100">
                        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                            {imagesToShow.map((imgSrc, index) => (
                                <div key={index} className="relative flex-shrink-0 w-full h-full">
                                    <Image
                                        src={imgSrc}
                                        alt={`${hardware.name} ${index + 1}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        {imagesToShow.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute z-10 p-2 transform -translate-y-1/2 rounded-full top-1/2 left-4 bg-white/80 hover:bg-white"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeftIcon className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute z-10 p-2 transform -translate-y-1/2 rounded-full top-1/2 right-4 bg-white/80 hover:bg-white"
                                    aria-label="Next image"
                                >
                                    <ChevronRightIcon className="w-6 h-6" />
                                </button>
                                <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
                                    {imagesToShow.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Text Content Section */}
                    <div className="p-8 lg:p-12">
                        <h2 className="mb-4 text-4xl font-extrabold text-gray-900">{hardware.name}</h2>
                        <p className="mb-6 text-xl text-gray-600">{hardware.description}</p>

                        {/* Specs Highlight */}
                        <div className="bg-[#2090C4]/10 p-4 rounded-xl mb-6 border-l-4 border-[#2090C4]">
                            <h4 className="font-semibold text-[#2090C4] mb-1">Key Specifications</h4>
                            <p className="font-medium text-gray-700">{hardware.specs}</p>
                        </div>

                        {/* Features List */}
                        <h4 className="mb-3 text-lg font-bold text-gray-900">Core Features</h4>
                        <ul className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-y-3 gap-x-6">
                            {hardware.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                    <ShieldCheckIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-[#2090C4]" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#2090C4] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors text-sm shadow-md"
                            >
                                Request Quote
                                <ArrowRightIcon className="w-3 h-3" />
                            </Link>
                            <button
                                onClick={onClose}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors border-2 border-gray-300 rounded-full hover:bg-gray-100"
                            >
                                Back to Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function Hardware() {
  const [selectedHardware, setSelectedHardware] = useState<HardwareItem | null>(null);

  // Set metadata for client component
  useEffect(() => {
    document.title = "Hardware - SmatAccess Devices";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "The Technology Behind the Access. Industrial-grade, Smat-engineered hardware that works seamlessly with our software.");
    }
  }, []);

  const openModal = (hardware: HardwareItem) => {
    setSelectedHardware(hardware);
    // Optional: Add a class to the body to prevent scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedHardware(null);
    // Optional: Remove the class from the body
    document.body.style.overflow = 'unset';
  };

  // The rest of your existing component logic...
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION - Modernized to match other pages */}
      <div className="px-4 py-8 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-0 sm:py-12 md:pt-8 bg-gray-50">
        <section
          className="relative flex items-center justify-center text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hardware-hero.png"
              alt="SmatAccess Hardware Hero Background"
              fill
              style={{ objectFit: "cover" }}
              className="z-0"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-20 max-w-4xl px-5 text-center md:px-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm">
                Hardware
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              The Technology Behind the Access
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-white/90">
              Industrial-grade, Smat-engineered hardware that works seamlessly with our software.
              Built for the African environment.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                Explore Hardware
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <Link
                href="/contact"
                className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2090C4] transition-all duration-300 flex items-center"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </div>


      {/* HARDWARE CARDS - Modernized with enhanced design */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
          <div className="absolute bg-blue-500 rounded-full bottom-20 left-20 w-96 h-96 filter blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Professional Hardware Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Enterprise-grade devices designed for reliability, security, and performance in demanding environments.
            </p>
          </div>

          {/* First 3 cards in grid layout */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hardwareData.slice(0, 3).map((hardware, index) => {
              return (
                <div
                  key={index}
                  className="relative p-8 overflow-hidden transition-all duration-500 bg-white border border-gray-100 shadow-xl group rounded-3xl hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Decorative background gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                  {/* Hardware Image */}
                  <div className="relative mb-6">
                    <div className="w-full overflow-hidden transition-transform duration-300 bg-gray-100 aspect-square rounded-2xl group-hover:scale-105">
                      <Image
                        src={hardware.image}
                        alt={hardware.name}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    {hardware.name}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    {hardware.description}
                  </p>
                  <p className="text-sm text-[#2090C4] font-medium mb-6">
                    {hardware.specs}
                  </p>

                  {/* Features list */}
                  <ul className="mb-6 space-y-2">
                    {hardware.features.slice(0, 4).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-[#2090C4] rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                    {hardware.features.length > 4 && (
                        <li className="flex items-center text-sm text-[#2090C4] font-medium mt-2">
                           ... and {hardware.features.length - 4} more features
                        </li>
                    )}
                  </ul>

                  {/* Action buttons */}
                  <div className="flex items-center justify-between mt-auto">
                    <button
                        onClick={() => openModal(hardware)}
                        className="text-[#2090C4] hover:text-[#1a7bb7] font-semibold inline-flex items-center group/link"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </button>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#2090C4]/10 text-[#2090C4] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#2090C4]/20 transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex flex-col justify-center gap-8 mt-8 md:flex-row">
            {hardwareData.slice(3).map((hardware, index) => {
              const actualIndex = index + 3; // Adjust index to match original array
              return (
                <div key={actualIndex} className="w-full max-w-md md:w-1/2">
                  <div className="relative p-8 overflow-hidden transition-all duration-500 bg-white border border-gray-100 shadow-xl group rounded-3xl hover:shadow-2xl hover:-translate-y-2">
                    {/* Decorative background gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2090C4]/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                    {/* Hardware Image */}
                    <div className="relative mb-6">
                      <div className="w-full overflow-hidden transition-transform duration-300 bg-gray-100 aspect-square rounded-2xl group-hover:scale-105">
                        <Image
                          src={hardware.image}
                          alt={hardware.name}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      {hardware.name}
                    </h3>
                    <p className="mb-4 leading-relaxed text-gray-600">
                      {hardware.description}
                    </p>
                    <p className="text-sm text-[#2090C4] font-medium mb-6">
                      {hardware.specs}
                    </p>

                    {/* Features list */}
                    <ul className="mb-6 space-y-2">
                      {hardware.features.slice(0, 4).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-[#2090C4] rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                      {hardware.features.length > 4 && (
                          <li className="flex items-center text-sm text-[#2090C4] font-medium mt-2">
                             ... and {hardware.features.length - 4} more features
                          </li>
                      )}
                    </ul>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between mt-auto">
                      <button
                          onClick={() => openModal(hardware)}
                          className="text-[#2090C4] hover:text-[#1a7bb7] font-semibold inline-flex items-center group/link"
                      >
                        Learn More
                        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                      </button>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#2090C4]/10 text-[#2090C4] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#2090C4]/20 transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
           <div className="mt-20 text-center">
             <div className="relative py-12 px-6 rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-5">
                 <div className="absolute top-10 left-10 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
                 <div className="absolute bg-blue-500 rounded-full bottom-10 right-10 w-96 h-96 filter blur-3xl"></div>
               </div>

               <div className="relative">
                 <div className="flex justify-center mb-4">
                   <div className="w-16 h-16 bg-gradient-to-br from-[#2090C4]/20 to-[#2090C4]/5 rounded-2xl flex items-center justify-center">
                     <CpuChipIcon className="w-8 h-8 text-[#2090C4]" />
                   </div>
                 </div>
                 <h3 className="mb-4 text-3xl font-bold text-gray-900">
                   Ready to Upgrade Your Security Infrastructure?
                 </h3>
                 <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
                   Get a personalized hardware quote and see how our professional-grade devices
                   can transform your access control system.
                 </p>
                 <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                   <Link
                     href="/contact"
                     className="inline-flex items-center justify-center gap-2 bg-[#2090C4] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                   >
                     Request Hardware Quote
                     <ArrowRightIcon className="w-5 h-5 ml-2" />
                   </Link>
                   <Link
                     href="/services"
                     className="inline-flex items-center justify-center gap-2 border-2 border-[#2090C4] text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-[#2090C4] hover:text-white transition-all duration-300"
                   >
                     <ShieldCheckIcon className="w-5 h-5" />
                     View Software Integration
                   </Link>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      <Footer />

      {/* RENDER MODAL CONDITIONALY */}
      {selectedHardware && <HardwareModal hardware={selectedHardware} onClose={closeModal} />}
    </div>
  );
}

