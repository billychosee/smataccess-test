/* eslint-disable max-len */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hardware - SmatAccess Devices",
  description: "The Technology Behind the Access. Industrial-grade, Smat-engineered hardware that works seamlessly with our software.",
};

export default function Hardware() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">The Technology Behind the Access.</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Industrial-grade, Smat-engineered hardware that works seamlessly with our software.
          </p>
        </div>
      </section>

      {/* HARDWARE CARDS */}
      {/* <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Biometric Scanners',
                description: 'Face/Fingerprint verification.',
                specs: 'High accuracy, weather-resistant'
              },
              {
                name: 'RFID Readers',
                description: 'Fast, contactless access.',
                specs: 'Long-range reading, secure encryption'
              },
              {
                name: 'Turnstiles',
                description: 'Modern, durable gate solutions.',
                specs: 'Anti-tailgating, high throughput'
              },
              {
                name: 'Gate Barriers',
                description: 'High-traffic control.',
                specs: 'Automatic operation, vehicle detection'
              },
              {
                name: 'Rugged Devices for Security',
                description: 'Handheld scanners, mobile ANPR.',
                specs: 'IP65 rated, offline capability'
              }
            ].map((hardware, index) => (
              <div key={index} className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center h-32 mb-4 bg-gray-200 rounded-lg">
                  <p className="text-gray-500">Image: {hardware.name}</p>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{hardware.name}</h3>
                <p className="mb-2 text-gray-600">{hardware.description}</p>
                <p className="mb-4 text-sm text-gray-500">{hardware.specs}</p>
                <button className="font-semibold text-blue-600 cursor-pointer hover:text-blue-800">Learn More →</button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700">
              Request Hardware Quote
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
