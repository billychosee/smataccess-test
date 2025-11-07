/* eslint-disable max-len */
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import ScrollToGridButton from "../../components/ScrollToGridButton";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases - SmatAccess in Action",
  description:
    "SmatAccess in Action — See Real-World Applications. From cluster homes to corporate parks, explore how SmatAccess transforms access management.",
};

export default function UseCases() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION - match pricing/about style */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-0 sm:py-12 bg-gray-50">
        <section
          className="relative flex items-center justify-center text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          <Image
            src="/hero.png"
            alt="SmatAccess Use Cases Background"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="relative z-20 max-w-4xl px-5 text-center md:px-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm">
                SmatAccess in Action
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              SmatAccess in Action — See Real-World Applications.
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-white/90">
              From cluster homes to corporate parks, explore how SmatAccess
              transforms access management.
            </p>
            <ScrollToGridButton />
          </div>
        </section>
      </div>

      {/* USE CASE BLOCKS WITH VIDEOS */}
      <section className="py-16 bg-gray-50">
        <div
          id="use-cases-grid"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Cluster Homes",
                description: "Gate entry via QR & WhatsApp.",
                videoLabel: "Cluster Homes: Gate entry via QR & WhatsApp.",
              },
              {
                name: "Corporate Offices",
                description: "Facial & fingerprint entry, digital logs.",
                videoLabel:
                  "Corporate Offices: Facial & fingerprint entry, digital logs.",
              },
              {
                name: "Industrial Sites",
                description: "Rugged devices, truck entry scanning.",
                videoLabel:
                  "Industrial Sites: Rugged devices, truck entry scanning.",
              },
              {
                name: "Event Venues",
                description: "Temporary passes and guest management.",
                videoLabel:
                  "Event Venues: Temporary passes and guest management.",
              },
            ].map((useCase, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {useCase.name}
                </h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>

                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <div className="w-full h-44 bg-black/5 flex items-center justify-center">
                    {/* Placeholder for video thumbnail */}
                    <p className="text-gray-500 text-sm">
                      Video: {useCase.videoLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href="/services"
                    className="text-[#2090C4] hover:text-[#1a7bb7] font-semibold"
                    aria-label={`Learn more about ${useCase.name}`}
                  >
                    Learn More →
                  </a>

                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 bg-[#2090C4] text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:bg-[#1a7bb7]"
                  >
                    Watch
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a7bb7] transition-colors shadow-lg"
            >
              Watch Full App Walkthrough
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
