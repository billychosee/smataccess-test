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
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">SmatAccess in Action — See Real-World Applications.</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            From cluster homes to corporate parks, explore how SmatAccess transforms access management.
          </p>
        </div>
      </section>

      {/* USE CASE BLOCKS WITH VIDEOS */}
      {/* <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              <div key={index} className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{useCase.name}</h3>
                <p className="mb-4 text-gray-600">{useCase.description}</p>
                <div className="flex items-center justify-center h-32 mb-4 bg-gray-200 rounded-lg">
                  <p className="text-sm text-gray-500">Video: {useCase.video}</p>
                </div>
                <button className="font-semibold text-blue-600 cursor-pointer hover:text-blue-800">Learn More →</button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            // eslint-disable-next-line max-len
            <button className="px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700">
              Watch Full App Walkthrough
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
