import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Technology Behind the Access.</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industrial-grade, Smat-engineered hardware that works seamlessly with our software.
          </p>
        </div>
      </section>

      {/* HARDWARE CARDS */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500">Image: {hardware.name}</p>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{hardware.name}</h3>
                <p className="text-gray-600 mb-2">{hardware.description}</p>
                <p className="text-sm text-gray-500 mb-4">{hardware.specs}</p>
                <button className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request Hardware Quote
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}