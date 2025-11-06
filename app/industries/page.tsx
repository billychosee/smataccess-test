import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industries - SmatAccess Solutions",
  description: "Secure Any Environment — Built for Every Industry. SmatAccess adapts to your environment, scale, and security goals.",
};

export default function Industries() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Secure Any Environment — Built for Every Industry.</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SmatAccess adapts to your environment, scale, and security goals.
          </p>
        </div>
      </section>

      {/* INDUSTRY BLOCKS */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Residential & Cluster Homes',
                description: 'Gate QR codes, visitor tracking.',
                video: 'Cluster Homes: Gate entry via QR & WhatsApp.'
              },
              {
                name: 'Corporate Offices',
                description: 'Facial login, time & attendance logs.',
                video: 'Corporate Offices: Facial & fingerprint entry, digital logs.'
              },
              {
                name: 'Educational Institutions',
                description: 'Student & staff access control.',
                video: 'Educational Institutions: Student & staff access control.'
              },
              {
                name: 'Healthcare Facilities',
                description: 'Restricted zone access.',
                video: 'Healthcare Facilities: Restricted zone access.'
              },
              {
                name: 'Industrial & Mining Sites',
                description: 'Heavy-vehicle monitoring.',
                video: 'Industrial Sites: Rugged devices, truck entry scanning.'
              },
              {
                name: 'Government & Public Buildings',
                description: 'Multi-level clearance control.',
                video: 'Government & Public Buildings: Multi-level clearance control.'
              },
              {
                name: 'Retail & Commercial',
                description: 'POS area protection, staff movement logs.',
                video: 'Retail & Commercial: POS area protection, staff movement logs.'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-500 text-sm">See in Action: {industry.video}</p>
                </div>
                <Link href="/use-cases">
                  <button className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request a Demo for Your Sector
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
