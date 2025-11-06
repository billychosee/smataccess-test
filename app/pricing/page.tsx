'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Pricing() {
  const [propertyType, setPropertyType] = useState('');
  const [userCount, setUserCount] = useState(100);
  const [vatRequired, setVatRequired] = useState(false);
  const [addOns, setAddOns] = useState({
    whatsapp: false,
    maintenance: false,
    analytics: false
  });

  const basePrice = userCount > 100 ? 5 : 3;
  const totalBase = userCount * basePrice;
  const addOnCost = (addOns.whatsapp ? 1 : 0) + (addOns.maintenance ? 1 : 0) + (addOns.analytics ? 2 : 0);
  const totalAddOns = userCount * addOnCost;
  const subtotal = totalBase + totalAddOns;
  const vat = vatRequired ? subtotal * 0.15 : 0;
  const total = subtotal + vat;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing. Total Control.</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Estimate your cost instantly — no hidden fees.
          </p>
          <button className="cursor-pointer bg-[#2090C4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Try the Calculator
          </button>
        </div>
      </section>

      {/* INTERACTIVE PRICING CALCULATOR */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Calculator</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Users
                </label>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={userCount}
                  onChange={(e) => setUserCount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center mt-2">{userCount} users</div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
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

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estimated Annual Total: ${total.toFixed(2)}</h3>
              {vatRequired && <p className="text-sm text-gray-600">(VAT Included)</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="cursor-pointer bg-[#2090C4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Request Formal Quote
              </button>
              <button className="cursor-pointer border-2 border-blue-600 text-[#2090C4] px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors">
                Book a Demo
              </button>
              <button className="cursor-pointer border-2 border-gray-600 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-colors">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* STATIC PRICING SECTION */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Plan</h3>
              <p className="text-2xl font-bold text-[#2090C4] mb-2">$3–$5 per user annually</p>
              <p className="text-gray-600">Basic access control features</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Plan</h3>
              <p className="text-2xl font-bold text-[#2090C4] mb-2">Custom quote</p>
              <p className="text-gray-600">Includes advanced integrations</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-red-600 font-semibold">Special Offer: 40% OFF annual plans for a limited time</p>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600">Trusted by 100+ estates and institutions.</p>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}