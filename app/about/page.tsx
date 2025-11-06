import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About SmatAccess - Our Story & Values",
  description: "Learn about SmatAccess, our mission to provide intelligent access control solutions, and the values that drive our commitment to security across Africa.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The SmatAccess Story — Innovation, Integrity, and Impact.
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Born from Smatech Group&apos;s vision of smarter, safer spaces across Africa.
            </p>
          </div>
          <div className="flex justify-center mb-12">
            <Image
              src="/placeholder-about.png"
              alt="SmatAccess Team"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* OUR PURPOSE */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Purpose</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We exist to make physical access simple, secure, and intelligent for everyone.
          </p>
        </div>
      </section> */}

      {/* OUR STORY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            Born from Smatech Group&apos;s vision of smarter, safer spaces across Africa.
            Built by engineers and innovators who understand technology and local security challenges.
          </p>
        </div>
      </section>

      {/* OUR VALUES */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#2090C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2090C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We push limits to redefine access control.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#2090C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2090C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">We design for uptime and consistency.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#2090C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2090C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">Every access is logged, every process accountable.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#2090C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2090C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User Experience</h3>
              <p className="text-gray-600">Simple enough for anyone to use, powerful enough for enterprises.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* TEAM SNAPSHOT */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Team Snapshot</h2>
          <p className="text-lg text-gray-600 mb-8">Founder and key staff — short bio lines.</p>
          <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Meet the Team
          </button>
        </div>
      </section> */}

      {/* OUR IMPACT */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#2090C4] mb-2">170+</div>
              <div className="text-gray-600">clients rated us 5★</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#2090C4] mb-2">97+</div>
              <div className="text-gray-600">happy users</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#2090C4] mb-2">3,000+</div>
              <div className="text-gray-600">hours saved</div>
            </div>
          </div>
          <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Request a Demo
          </button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}