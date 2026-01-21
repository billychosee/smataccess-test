/* eslint-disable max-len */
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - SmatAccess",
  description: "Terms and Conditions for using the SmatAccess platform.",
};

export default function Terms() {
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
              Terms & Conditions
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-white/90">
              Please read these terms carefully before using our platform.
            </p>
          </div>
        </section>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h1 className="mb-8 text-3xl font-bold text-gray-900">TERMS AND CONDITIONS</h1>
            <h2 className="mb-4 text-xl font-semibold text-gray-800">SmatAccess Platform</h2>
            <p className="mb-8 text-sm text-gray-600">Last updated: 20/01/2026</p>

            <div className="space-y-6">
              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">1. DEFINITIONS</h3>
                <p className="text-gray-700">In these Terms:</p>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>&quot;Platform&quot; means the SmatAccess website, software, dashboards, systems, APIs, and related services accessible via https://smataccess.com/</li>
                  <li>&quot;Services&quot; means access control, monitoring, security management, analytics, subscription services, and related offerings provided by SmatAccess.</li>
                  <li>&quot;User&quot; / &quot;You&quot; means any individual or legal entity accessing or using the Platform, whether located in Zimbabwe or internationally.</li>
                  <li>&quot;Subscription&quot; means any paid plan, license, or recurring service offered by SmatAccess.</li>
                  <li>&quot;Content&quot; includes all software, data, text, graphics, designs, documentation, and materials made available through the Platform.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">2. COMPANY DETAILS AND SCOPE</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>SmatAccess is based and operated from Zimbabwe, but its Platform and Services can be for use by users internationally.</li>
                  <li>Users accessing the Platform from outside Zimbabwe do so at their own initiative and are responsible for compliance with all local laws and regulations applicable in their jurisdiction.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">3. ACCEPTANCE OF TERMS</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>By accessing, registering, subscribing to, or using the Platform, you agree to be legally bound by these Terms.</li>
                  <li>If you use the Platform on behalf of a company or an organisation, you confirm that you have the authority to bind that entity, and these Terms shall apply to both you and the entity.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">4. ACCOUNT REGISTRATION AND SECURITY</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>Certain features require account creation.</li>
                  <li>You agree to:
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>provide accurate, current, and complete information;</li>
                      <li>maintain the confidentiality of your login credentials;</li>
                      <li>immediately notify SmatAccess of unauthorised access or security breaches.</li>
                    </ol>
                  </li>
                  <li>You are solely responsible for all activity conducted through your account, regardless of geographic location.</li>
                  <li>SmatAccess reserves the right to suspend or terminate accounts that violate these Terms or pose legal, security, or operational risk.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">5. SERVICES AND SUBSCRIPTIONS</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>SmatAccess provides paid, subscription-based Services, which may be offered globally.</li>
                  <li>Pricing, billing cycles, currencies, features, and service tiers are displayed on the Platform or communicated separately and may vary by region.</li>
                  <li>Unless expressly stated otherwise:
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>all fees are payable in advance;</li>
                      <li>subscriptions renew automatically;</li>
                      <li>fees are non-refundable, except where required by applicable law.</li>
                    </ol>
                  </li>
                  <li>SmatAccess may suspend or terminate Services for non-payment without liability.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">6. PERMITTED USE</h3>
                <p className="text-gray-700">You agree not to:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>use the Platform in violation of any applicable law or regulation (local or international);</li>
                  <li>misuse the Platform for unlawful surveillance, data harvesting, or privacy violations;</li>
                  <li>interfere with the Platform&apos;s security, availability, or integrity;</li>
                  <li>reverse-engineer, copy, sublicense, or resell the Platform without written consent;</li>
                  <li>introduce malicious code, malware, or unauthorised integrations.</li>
                </ol>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">7. SECURITY AND RELIANCE DISCLAIMER (IMPORTANT)</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>SmatAccess provides technology tools intended to assist with access management and monitoring.</li>
                  <li>You acknowledge that:
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>no access-control or monitoring system is completely secure;</li>
                      <li>system performance may be affected by connectivity, hardware, third-party services, or human factors.</li>
                    </ol>
                  </li>
                  <li>SmatAccess does not guarantee prevention of loss, theft, unauthorised access, or damage and shall not be relied upon as a substitute for physical security measures, insurance, or human oversight.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">8. INTELLECTUAL PROPERTY</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>All intellectual property rights in the Platform and Services remain the exclusive property of SmatAccess or its licensors.</li>
                  <li>No rights are transferred except the limited, revocable right to use the Platform in accordance with these Terms.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">9. DATA PROTECTION AND INTERNATIONAL USE</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>SmatAccess processes personal and operational data in accordance with Zimbabwean data protection laws and applicable international data protection principles where relevant.</li>
                  <li>Users outside Zimbabwe acknowledge that data may be:
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>processed or stored in Zimbabwe or other jurisdictions;</li>
                      <li>transferred across borders as required for service delivery.</li>
                    </ol>
                  </li>
                  <li>You warrant that you have the legal authority to submit any data relating to third parties and that such submission complies with applicable local laws.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">10. SERVICE AVAILABILITY</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>SmatAccess endeavors to provide reliable access but does not guarantee uninterrupted availability.</li>
                  <li>Temporary interruptions may occur due to:
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>maintenance or upgrades;</li>
                      <li>third-party outages;</li>
                      <li>force majeure events.</li>
                    </ol>
                  </li>
                  <li>Such interruptions do not constitute a breach of these Terms.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">11. THIRD-PARTY SERVICES</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>The Platform may integrate with third-party products or services.</li>
                  <li>SmatAccess is not responsible for third-party availability, performance, or data practices, regardless of user location.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">12. DISCLAIMER OF WARRANTIES</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>The Platform and Services are provided &quot;as is&quot; and &quot;as available.&quot;</li>
                  <li>To the maximum extent permitted by law, SmatAccess disclaims all warranties, express or implied, including fitness for purpose, merchantability, and accuracy.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">13. LIMITATION OF LIABILITY</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>To the fullest extent permitted by law, SmatAccess shall not be liable for any indirect, incidental, consequential, or special damages, including loss of data, profits, revenue, or business opportunity.</li>
                  <li>SmatAccess&apos;s total liability, if any, shall be limited to the fees paid by the User in the three (3) months preceding the event giving rise to the claim, regardless of jurisdiction.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">14. INDEMNITY</h3>
                <p className="text-gray-700">You agree to indemnify and hold harmless SmatAccess, its directors, officers, employees, and affiliates from any claims, damages, or losses arising from:</p>
                <ol className="ml-4 text-gray-700 list-decimal list-inside">
                  <li>your use of the Platform in any jurisdiction;</li>
                  <li>breach of these Terms;</li>
                  <li>violation of local or international law.</li>
                </ol>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">15. TERMINATION</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>SmatAccess may suspend or terminate access immediately if:
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>these Terms are breached;</li>
                      <li>payment obligations are unmet;</li>
                      <li>continued use presents legal, security, or reputational risk.</li>
                    </ol>
                  </li>
                  <li>Upon termination:
                    <ol className="mt-2 ml-4 list-decimal list-inside">
                      <li>all access rights cease immediately;</li>
                      <li>outstanding fees remain payable;</li>
                      <li>no refunds shall be due unless required by law.</li>
                    </ol>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">16. GOVERNING LAW AND JURISDICTION</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>These Terms shall be governed by and interpreted in accordance with the laws of Zimbabwe, without regard to conflict-of-law principles.</li>
                  <li>The courts of Zimbabwe shall have exclusive jurisdiction, notwithstanding the User&apos;s location.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">17. CHANGES TO TERMS</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
                  <li>SmatAccess may amend these Terms at any time.</li>
                  <li>Continued use of the Platform constitutes acceptance of the updated Terms.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">18. CONTACT DETAILS</h3>
                <ul className="ml-4 text-gray-700 list-disc list-inside">
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
