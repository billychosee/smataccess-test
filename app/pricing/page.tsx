/* eslint-disable max-len */
"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Pricing() {
  const [, _setUserCount] = useState(100);
  const [] = useState(false);
  const [] = useState({
    whatsapp: false,
    maintenance: false,
    analytics: false,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setPropertyType] = useState("");


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Transparent Pricing. Total Control.
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
            Estimate your cost instantly — no hidden fees.
          </p>
          <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Try the Calculator
          </button>
        </div>
      </section>

      {/* INTERACTIVE PRICING CALCULATOR */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Pricing Calculator</h2>

            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  Number of Users
                </label>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={userCount}
                  onChange={(e) => _setUserCount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="mt-2 text-center">{userCount} users</div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Add-ons
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={addOns.whatsapp}
                    onChange={(e) => setAddOns({...addOns, whatsapp: e.target.checked})}
                    className="mr-2"
                  />
                  WhatsApp Bot (+$1/user)
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={addOns.maintenance}
                    onChange={(e) => setAddOns({...addOns, maintenance: e.target.checked})}
                    className="mr-2"
                  />
                  Maintenance Module (+$1/user)
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={addOns.analytics}
                    onChange={(e) => setAddOns({...addOns, analytics: e.target.checked})}
                    className="mr-2"
                  />
                  Advanced Analytics (+$2/user)
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={vatRequired}
                  onChange={(e) => setVatRequired(e.target.checked)}
                  className="mr-2"
                />
                VAT Invoice Required (+15%)
              </label>
            </div>

            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Estimated Annual Total: ${total.toFixed(2)}</h3>
              {vatRequired && <p className="text-sm text-gray-600">(VAT Included)</p>}
            </div>

            <div className="flex flex-col gap-4 mt-6 sm:flex-row">
              <button className="cursor-pointer bg-[#2090C4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Request Formal Quote
              </button>
              <button className="cursor-pointer border-2 border-blue-600 text-[#2090C4] px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors">
                Book a Demo
              </button>
              <button className="px-6 py-3 font-semibold text-gray-600 transition-colors border-2 border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* STATIC PRICING SECTION */}
      {/* <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Standard Plan</h3>
              <p className="text-2xl font-bold text-[#2090C4] mb-2">$3–$5 per user annually</p>
              <p className="text-gray-600">Basic access control features</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Enterprise Plan</h3>
              <p className="text-2xl font-bold text-[#2090C4] mb-2">Custom quote</p>
              <p className="text-gray-600">Includes advanced integrations</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="font-semibold text-red-600">Special Offer: 40% OFF annual plans for a limited time</p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Trusted by 100+ estates and institutions.</p>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
