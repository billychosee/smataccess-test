/* eslint-disable max-len */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services - SmatAccess Features",
  description: "Everything You Need to Control Access. Powerful features designed to protect your people, property, and processes.",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Everything You Need to Control Access</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Powerful features designed to protect your people, property, and processes.
          </p>
        </div>
      </section>

      {/* FEATURE BLOCKS */}
      {/* <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Visitor Management',
                description: 'QR code creation, WhatsApp approval.',
                icon: 'user-plus'
              },
              {
                name: 'Facial & Fingerprint Recognition',
                description: 'AI-driven identity verification.',
                icon: 'face'
              },
              {
                name: 'Vehicle & Number Plate Recognition',
                description: 'Automatic detection, zero manual checks.',
                icon: 'car'
              },
              {
                name: 'WhatsApp Bot Integration',
                description: 'Real-time entry approvals and maintenance requests.',
                icon: 'message'
              },
              {
                name: 'Maintenance Issue Tracker',
                description: 'Report, assign, and resolve on one interface.',
                icon: 'wrench'
              },
              {
                name: 'Real-Time Dashboard & Analytics',
                description: 'Users in/out, vehicles in/out, average stay time, alerts.',
                icon: 'chart'
              },
              {
                name: 'Alerts & Logs',
                description: 'Denied entries, manual overrides, occupancy count.',
                icon: 'bell'
              }
            ].map((service, index) => (
              <div key={index} className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="w-16 h-16 bg-[#2090C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#2090C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                // eslint-disable-next-line max-len, max-len
                <button className="cursor-pointer text-[#2090C4] hover:text-blue-800 font-semibold">See How It Works →</button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700">
              Explore Hardware →
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
