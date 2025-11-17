/* eslint-disable max-len */
"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  XMarkIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  PhoneIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Pricing() {
  const [propertyType, setPropertyType] = useState("");
  const [userCount, setUserCount] = useState(100);
  const [vatRequired, setVatRequired] = useState(false);
  const [vatDetails, setVatDetails] = useState({
    companyName: "",
    vatNumber: "",
    companyAddress: "",
    companyEmail: "",
  });
  const [addOns, setAddOns] = useState({
    whatsapp: false,
    maintenance: false,
    analytics: false,
  });

  // PRICING TIERS Data from Home Page
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
        "Mobile App (iOS & Android)"
      ],
      missingFeatures: ["Time & Attendance Module", "Cloud-Based Audit Logs"],
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
        "Tier 1 (Self-Serve) Support"
      ],
      missingFeatures: ["Advanced Zoned-Off Access Control", "Centralized Multi-Site Management"],
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

  const basePrice = userCount > 100 ? 5 : 3;
  const totalBase = userCount * basePrice;
  const addOnCost =
    (addOns.whatsapp ? 1 : 0) +
    (addOns.maintenance ? 1 : 0) +
    (addOns.analytics ? 2 : 0);
  const totalAddOns = userCount * addOnCost;
  const subtotal = totalBase + totalAddOns;
  const vat = vatRequired ? subtotal * 0.15 : 0;
  const total = subtotal + vat;

  const handleVatDetailChange = (field: string, value: string) => {
    setVatDetails({
      ...vatDetails,
      [field]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION - Sleek Design */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-0 sm:py-12 bg-gray-50">
        <section
          className="relative flex items-center justify-center text-white overflow-hidden rounded-[44px] shadow-2xl"
          style={{ height: "calc(100vh - 8rem)" }}
        >
          {/* Background Image */}
          <Image
            src="/pricing-hero.png"
            alt="SmatAccess Pricing Hero Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Content Container */}
          <div className="relative z-20 max-w-4xl px-5 text-center md:px-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm">
                Flexible & Transparent Pricing
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Simple, Scalable Pricing
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-white/90">
              Choose the plan that fits your needs. No hidden fees, no
              surprises.
            </p>
            <button
              onClick={() =>
                document.getElementById("calculator")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
              className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
            >
              Try Our Calculator
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>

      {/* PRICING TIERS - Enhanced Card Design */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Pricing Structure
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Choose the plan that fits your specific needs and scale as you grow.
            </p>
          </div>

          <div className="grid items-stretch grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`group relative flex flex-col p-8 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.05] overflow-hidden
                  ${
                    tier.isPopular
                      ? "bg-gradient-to-br from-[#2090C4] to-[#1a7bb7] text-white shadow-2xl ring-4 ring-offset-2 ring-[#2090C4] z-10"
                      : "bg-white text-gray-900 ring-1 ring-gray-200 hover:ring-[#2090C4]/50"
                  }
                `}
              >
                {/* Popular Badge (for the popular card) - Home page style */}
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 px-5 py-1 bg-white text-[#2090C4] text-sm font-bold rounded-full shadow-lg transform rotate-6">
                    Most Popular
                  </div>
                )}

                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
                  ${
                    tier.isPopular
                      ? "bg-white/20"
                      : "bg-gradient-to-r from-[#2090C4] to-[#1a7bb7]"
                  }
                `}
                ></div>

                {/* Card Header */}
                <div className="mb-8 text-center">
                  <h3
                    className={`mb-3 text-3xl font-bold ${
                      tier.isPopular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-lg mb-8 ${
                      tier.isPopular ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-center justify-center mb-8">
                    {tier.price === "Custom Quote" ? (
                      <span
                        className={`text-4xl font-extrabold ${
                          tier.isPopular ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {tier.price}
                      </span>
                    ) : tier.price.includes("-") || tier.price.includes("Custom") ? (
                      <span
                        className={`text-5xl font-extrabold ${
                          tier.isPopular ? "text-white" : "text-gray-900"
                        }`}
                      >
                        ${tier.price}
                      </span>
                    ) : (
                      <>
                        <CurrencyDollarIcon
                          className={`w-10 h-10 ${
                            tier.isPopular ? "text-white" : "text-[#2090C4]"
                          } mr-2`}
                        />
                        <span
                          className={`text-6xl font-extrabold ${
                            tier.isPopular ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {tier.price}
                        </span>
                        <span
                          className={`ml-2 text-lg ${
                            tier.isPopular ? "text-blue-100" : "text-gray-600"
                          }`}
                        >
                          /month
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="flex flex-col mb-10 space-y-3 grow">
                  {/* Included Features */}
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

                  {/* Missing/Excluded Features */}
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

                {/* CTA Button */}
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
        </div>
      </section>

      {/* CUSTOM QUOTE CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-[#2090C4] via-[#1a7bb7] to-[#0f5d8c] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-64 h-64 bg-white rounded-full top-20 left-20 filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bg-white rounded-full bottom-20 right-20 w-96 h-96 filter blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Need a Custom Quote?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
            Get a tailored pricing solution for your specific requirements, whether you need
            multi-site management, enterprise security, or custom property park solutions.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
            >
              <CurrencyDollarIcon className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2090C4] transition-all duration-300 flex items-center justify-center"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Speak to Expert
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR */}
      <section
        id="calculator"
        className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#2090C4] rounded-full filter blur-3xl"></div>
          <div className="absolute bg-blue-500 rounded-full bottom-20 left-20 w-96 h-96 filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Pricing Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Get an instant estimate for your specific needs
            </p>
          </div>

          <div className="p-8 bg-white shadow-xl rounded-2xl">
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2090C4] focus:border-transparent"
                >
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="office">Corporate Office</option>
                  <option value="school">School</option>
                  <option value="industrial">Industrial</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Number of Users: {userCount}
                </label>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={userCount}
                  onChange={(e) => setUserCount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="mt-2 text-center text-gray-600">
                  {userCount} users
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-4 text-sm font-medium text-gray-700">
                Add-ons
              </label>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.whatsapp}
                    onChange={(e) =>
                      setAddOns({ ...addOns, whatsapp: e.target.checked })
                    }
                    className="mr-3 w-5 h-5 text-[#2090C4] border-gray-300 rounded focus:ring-[#2090C4]"
                  />
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 text-[#2090C4] mr-2" />
                    <span>WhatsApp Bot (+$1/user)</span>
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.maintenance}
                    onChange={(e) =>
                      setAddOns({ ...addOns, maintenance: e.target.checked })
                    }
                    className="mr-3 w-5 h-5 text-[#2090C4] border-gray-300 rounded focus:ring-[#2090C4]"
                  />
                  <div className="flex items-center">
                    <ShieldCheckIcon className="w-5 h-5 text-[#2090C4] mr-2" />
                    <span>Maintenance Module (+$1/user)</span>
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.analytics}
                    onChange={(e) =>
                      setAddOns({ ...addOns, analytics: e.target.checked })
                    }
                    className="mr-3 w-5 h-5 text-[#2090C4] border-gray-300 rounded focus:ring-[#2090C4]"
                  />
                  <div className="flex items-center">
                    <LightBulbIcon className="w-5 h-5 text-[#2090C4] mr-2" />
                    <span>Advanced Analytics (+$2/user)</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={vatRequired}
                  onChange={(e) => setVatRequired(e.target.checked)}
                  className="mr-3 w-5 h-5 text-[#2090C4] border-gray-300 rounded focus:ring-[#2090C4]"
                />
                <span>VAT Invoice Required (+15%)</span>
              </label>
            </div>

            {/* VAT Details Section - Appears when VAT checkbox is checked */}
            {vatRequired && (
              <div className="p-6 mb-6 border border-blue-200 rounded-lg bg-blue-50">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  VAT Details
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={vatDetails.companyName}
                      onChange={(e) =>
                        handleVatDetailChange("companyName", e.target.value)
                      }
                      placeholder="Enter company name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2090C4] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      VAT Number
                    </label>
                    <input
                      type="text"
                      value={vatDetails.vatNumber}
                      onChange={(e) =>
                        handleVatDetailChange("vatNumber", e.target.value)
                      }
                      placeholder="Enter VAT number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2090C4] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Company Address
                    </label>
                    <input
                      type="text"
                      value={vatDetails.companyAddress}
                      onChange={(e) =>
                        handleVatDetailChange("companyAddress", e.target.value)
                      }
                      placeholder="Enter company address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2090C4] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Company Email
                    </label>
                    <input
                      type="email"
                      value={vatDetails.companyEmail}
                      onChange={(e) =>
                        handleVatDetailChange("companyEmail", e.target.value)
                      }
                      placeholder="Enter company email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2090C4] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-[#2090C4]/5 to-[#1a7bb7]/5 p-6 rounded-lg mb-6 border border-[#2090C4]/10">
              <h3 className="mb-2 text-2xl font-bold text-center text-gray-900">
                Estimated Annual Total: ${total.toFixed(2)}
              </h3>
              {vatRequired && (
                <p className="text-sm text-center text-gray-600">
                  (VAT Included: ${vat.toFixed(2)})
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="cursor-pointer flex-1 bg-[#2090C4] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1a7bb7] transition-colors"
              >
                Request Formal Quote
              </Link>
              <Link
                href="/contact"
                className="cursor-pointer flex-1 border-2 border-[#2090C4] text-[#2090C4] px-6 py-3 rounded-full font-semibold hover:bg-[#2090C4] hover:text-white transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="flex-1 px-6 py-3 font-semibold text-gray-600 transition-colors border-2 border-gray-600 rounded-full cursor-pointer hover:bg-gray-700 hover:text-white"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and we&apos;ll prorate any billing
                differences.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Do you offer annual discounts?
              </h3>
              <p className="text-gray-600">
                Yes, we offer 20% discount on all annual plans. This is
                automatically applied when you choose annual billing.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                What&apos;s included in support?
              </h3>
              <p className="text-gray-600">
                All plans include email support. Business plans add phone
                support, and Enterprise plans include a dedicated account
                manager and priority support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#2090C4] via-[#1a7bb7] to-[#0f5d8c] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-64 h-64 bg-white rounded-full top-20 left-20 filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bg-white rounded-full bottom-20 right-20 w-96 h-96 filter blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-white/90">
            Join hundreds of satisfied customers who trust SmatAccess for their
            security needs.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Free Trial
            </button>
            <Link
              href="/contact"
              className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2090C4] transition-all duration-300 flex items-center justify-center"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2090c4;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2090c4;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}

