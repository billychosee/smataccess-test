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
  const [addOns, setAddOns] = useState({
    whatsapp: false,
    maintenance: false,
    analytics: false,
  });

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
            src="/hero.png"
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
                document
                  .getElementById("calculator")
                  ?.scrollIntoView({
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

      {/* PRICING TIERS - Sleek Card Design */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Choose Your Perfect Plan
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Designed to scale with your business from startup to enterprise.
            </p>
          </div>

          <div className="grid items-stretch grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {/* Starter Plan */}
            <div className="relative flex flex-col p-8 rounded-3xl shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group bg-white border border-gray-200 hover:border-[#2090C4]/50">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  Starter
                </h3>
                <p className="mb-6 text-gray-600">
                  Perfect for small businesses and single locations
                </p>

                <div className="flex items-center justify-center mb-6">
                  <CurrencyDollarIcon className="w-8 h-8 text-[#2090C4] mr-1" />
                  <span className="text-5xl font-extrabold text-gray-900">
                    3
                  </span>
                  <span className="ml-1 text-gray-600">/user/year</span>
                </div>
              </div>

              <ul className="flex flex-col mb-8 space-y-4 grow">
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">Up to 50 users</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">Mobile app access</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">Basic event logging</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-6 h-6 text-red-400 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-400 line-through">
                    Multi-site control
                  </span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-6 h-6 text-red-400 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-400 line-through">
                    WhatsApp integration
                  </span>
                </li>
              </ul>

              <button className="cursor-pointer w-full py-3 rounded-full font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 bg-[#2090C4] text-white hover:bg-[#1a7bb7] shadow-md">
                Start Free Trial
              </button>
            </div>

            {/* Business Plan - Most Popular */}
            <div className="relative flex flex-col p-8 rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group bg-gradient-to-br from-[#2090C4] to-[#1a7bb7] text-white ring-4 ring-offset-2 ring-[#2090C4] z-10">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 px-5 py-1 bg-white text-[#2090C4] text-sm font-bold rounded-full shadow-lg transform rotate-6">
                Most Popular
              </div>

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold">Business</h3>
                <p className="mb-6 text-blue-100">
                  Ideal for growing businesses and single buildings
                </p>

                <div className="flex items-center justify-center mb-6">
                  <CurrencyDollarIcon className="w-8 h-8 mr-1 text-white" />
                  <span className="text-5xl font-extrabold">5</span>
                  <span className="ml-1 text-blue-100">/user/year</span>
                </div>
              </div>

              <ul className="flex flex-col mb-8 space-y-4 grow">
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-white shrink-0 mr-3 mt-0.5" />
                  <span className="text-blue-100">Up to 500 users</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-white shrink-0 mr-3 mt-0.5" />
                  <span className="text-blue-100">
                    Time & attendance tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-white shrink-0 mr-3 mt-0.5" />
                  <span className="text-blue-100">WhatsApp integration</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-white shrink-0 mr-3 mt-0.5" />
                  <span className="text-blue-100">24/7 phone support</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-white shrink-0 mr-3 mt-0.5" />
                  <span className="text-blue-100">Advanced reporting</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="w-6 h-6 text-blue-200 shrink-0 mr-3 mt-0.5" />
                  <span className="text-blue-200 line-through">
                    Dedicated account manager
                  </span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="cursor-pointer w-full py-3 rounded-full font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 bg-white text-[#2090C4] hover:bg-gray-100 shadow-md flex items-center justify-center"
              >
                Request Quote
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="relative flex flex-col p-8 rounded-3xl shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group bg-white border border-gray-200 hover:border-[#2090C4]/50">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  Enterprise
                </h3>
                <p className="mb-6 text-gray-600">
                  Tailored solutions for large-scale operations
                </p>

                <div className="flex items-center justify-center mb-6">
                  <span className="text-5xl font-extrabold text-gray-900">
                    Custom
                  </span>
                </div>
              </div>

              <ul className="flex flex-col mb-8 space-y-4 grow">
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">Unlimited users</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">Multi-site management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">
                    Dedicated account manager
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">
                    Custom integrations (API)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">
                    On-premise deployment option
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">SLA guarantees</span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="cursor-pointer w-full py-3 rounded-full font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 bg-[#2090C4] text-white hover:bg-[#1a7bb7] shadow-md flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
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

            <div className="bg-gradient-to-r from-[#2090C4]/5 to-[#1a7bb7]/5 p-6 rounded-lg mb-6 border border-[#2090C4]/10">
              <h3 className="mb-2 text-2xl font-bold text-center text-gray-900">
                Estimated Annual Total: ${total.toFixed(2)}
              </h3>
              {vatRequired && (
                <p className="text-sm text-center text-gray-600">
                  (VAT Included)
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
