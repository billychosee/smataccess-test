/* eslint-disable max-len */
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Use Cases - SmatAccess in Action",
  description: "SmatAccess in Action — See Real-World Applications. From cluster homes to corporate parks, explore how SmatAccess transforms access management.",
};

export default function UseCases() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SmatAccess in Action — See Real-World Applications.</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From cluster homes to corporate parks, explore how SmatAccess transforms access management.
          </p>
        </div>
      </section>

      {/* USE CASE BLOCKS WITH VIDEOS */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Cluster Homes',
                description: 'Gate entry via QR & WhatsApp.',
                video: 'Cluster Homes: Gate entry via QR & WhatsApp.'
              },
              {
                name: 'Corporate Offices',
                description: 'Facial & fingerprint entry, digital logs.',
                video: 'Corporate Offices: Facial & fingerprint entry, digital logs.'
              },
              {
                name: 'Industrial Sites',
                description: 'Rugged devices, truck entry scanning.',
                video: 'Industrial Sites: Rugged devices, truck entry scanning.'
              },
              {
                name: 'Event Venues',
                description: 'Temporary passes and guest management.',
                video: 'Event Venues: Temporary passes and guest management.'
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.name}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500 text-sm">Video: {useCase.video}</p>
                </div>
                <button className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Watch Full App Walkthrough
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
