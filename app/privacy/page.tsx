import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SmatAccess",
  description: "Privacy Policy for the SmatAccess platform.",
};

export default function Privacy() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="px-4 py-8 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-0 sm:py-12 md:pt-8 bg-gray-50">
        <section className="relative flex items-center justify-center text-white overflow-hidden rounded-[44px] shadow-2xl bg-gradient-to-br from-[#2090C4] to-[#1a7a9e]" style={{ height: "calc(60vh - 4rem)" }}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-20 max-w-4xl px-5 text-center md:px-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm">
                Legal
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Privacy Policy
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-white/90">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>
        </section>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h1 className="mb-8 text-3xl font-bold text-gray-900">PRIVACY POLICY</h1>
            <h2 className="mb-4 text-xl font-semibold text-gray-800">SmatAccess Platform</h2>
            <p className="mb-8 text-sm text-gray-600">Last updated: 20/01/2026</p>

            <div className="space-y-6">
              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">1. INTRODUCTION</h3>
                <p className="text-gray-700">SmatAccess (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, disclose, and protect personal data when you access or use the SmatAccess platform, website, software, and related services (&quot;Platform&quot;), whether you are located in Zimbabwe or internationally.</p>
                <p className="text-gray-700">By using the Platform, you consent to the practices described in this Privacy Policy.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">2. WHO WE ARE</h3>
                <p className="text-gray-700">SmatAccess is based and operated from Zimbabwe, but provides services to users globally. Users accessing the Platform from outside Zimbabwe do so voluntarily and acknowledge that their information may be processed in Zimbabwe or other jurisdictions.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">3. INFORMATION WE COLLECT</h3>
                <p className="text-gray-700">We may collect the following categories of information:</p>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li><strong>Personal Information</strong>
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Company name and role</li>
                      <li>Billing and payment-related details (processed via secure third-party providers)</li>
                    </ol>
                  </li>
                  <li><strong>Account and Usage Information</strong>
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>Login credentials (encrypted)</li>
                      <li>IP address and device information</li>
                      <li>Access logs, timestamps, and activity records</li>
                      <li>Subscription details and service usage</li>
                    </ol>
                  </li>
                  <li><strong>Security and Operational Data</strong>
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>Access control logs</li>
                      <li>Monitoring and system event data</li>
                      <li>Configuration and audit records submitted through the Platform</li>
                    </ol>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">4. HOW WE COLLECT INFORMATION</h3>
                <p className="text-gray-700">We collect information:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>directly from you (e.g. account registration, contact forms);</li>
                  <li>automatically through the Platform (e.g. logs, cookies, analytics);</li>
                  <li>through authorised third-party integrations where applicable.</li>
                </ol>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">5. PURPOSE OF PROCESSING</h3>
                <p className="text-gray-700">We process personal data for the following purposes:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>providing and operating the Platform and Services;</li>
                  <li>managing accounts, subscriptions, and billing;</li>
                  <li>system monitoring, access management, and security operations;</li>
                  <li>customer support and communications;</li>
                  <li>analytics, performance improvement, and service development;</li>
                  <li>legal compliance and risk management.</li>
                </ol>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">6. LEGAL BASIS FOR PROCESSING</h3>
                <p className="text-gray-700">Where applicable, we process personal data on the basis of:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>your consent;</li>
                  <li>performance of a contract;</li>
                  <li>compliance with legal obligations;</li>
                  <li>our legitimate business interests, including platform security and service improvement.</li>
                </ol>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">7. DATA SHARING AND DISCLOSURE</h3>
                <p className="text-gray-700">We may share personal data with:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>trusted service providers (e.g. hosting, payment processors);</li>
                  <li>professional advisers (legal, accounting, compliance);</li>
                  <li>regulatory or law enforcement authorities where required by law.</li>
                </ol>
                <p className="text-gray-700">We do not sell personal data.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">8. INTERNATIONAL DATA TRANSFERS</h3>
                <p className="text-gray-700">As an international platform, your data may be:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>stored or processed in Zimbabwe or other jurisdictions;</li>
                  <li>transferred across borders for operational purposes.</li>
                </ol>
                <p className="text-gray-700">We take reasonable steps to ensure that any international transfers are subject to appropriate safeguards to protect your data.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">9. DATA RETENTION</h3>
                <p className="text-gray-700">We retain personal data only for as long as necessary to:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>fulfil the purposes outlined in this Policy;</li>
                  <li>comply with legal and regulatory requirements;</li>
                  <li>resolve disputes and enforce agreements.</li>
                </ol>
                <p className="text-gray-700">Data may be anonymised or securely deleted when no longer required.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">10. DATA SECURITY</h3>
                <p className="text-gray-700">We implement reasonable technical and organisational measures to protect personal data against loss, misuse, unauthorised access, or disclosure.</p>
                <p className="text-gray-700">However, no system is completely secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">11. USER RESPONSIBILITIES</h3>
                <p className="text-gray-700">You are responsible for:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>maintaining the confidentiality of your account credentials;</li>
                  <li>ensuring that data you submit lawfully belongs to you or that you have
                    authority to submit it;</li>
                  <li>complying with applicable data protection laws in your jurisdiction.</li>
                </ol>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">12. COOKIES AND TRACKING</h3>
                <p className="text-gray-700">We may use cookies or similar technologies to:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>enhance functionality;</li>
                  <li>analyse usage patterns;</li>
                  <li>improve user experience.</li>
                </ol>
                <p className="text-gray-700">You may control cookies through your browser settings, though some features may be affected.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">13. YOUR RIGHTS</h3>
                <p className="text-gray-700">Subject to applicable law, you may have the right to:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>access personal data we hold about you;</li>
                  <li>request correction or deletion;</li>
                  <li>object to or restrict processing;</li>
                  <li>withdraw consent where processing is based on consent.</li>
                </ol>
                <p className="text-gray-700">Requests may be submitted using the contact details below.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">14. THIRD-PARTY LINKS</h3>
                <p className="text-gray-700">The Platform may contain links to third-party websites or services.</p>
                <p className="text-gray-700">We are not responsible for the privacy practices or content of third-party platforms.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">15. CHILDREN&apos;S PRIVACY</h3>
                <p className="text-gray-700">The Platform is not intended for use by persons under the age of 18, and we do not knowingly collect personal data from minors.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">16. CHANGES TO THIS POLICY</h3>
                <p className="text-gray-700">We may update this Privacy Policy from time to time.</p>
                <p className="text-gray-700">Changes will be effective upon posting on the Platform. Continued use constitutes acceptance of the updated Policy.</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">17. CONTACT INFORMATION</h3>
                <p className="text-gray-700">For privacy-related enquiries or requests, please contact:</p>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>legal@smatecgroup.com</li>
                  <li>SmatAccess</li>
                  <li>Website: https://smataccess.com/contact</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

