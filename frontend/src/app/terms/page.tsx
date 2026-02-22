import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for CodexUg – the conditions governing your use of our IT services and products.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <p className="text-gray-400 leading-relaxed">
        By accessing this website or engaging CodexUg for any services or
        products, you agree to be bound by these Terms of Service and all
        applicable laws and regulations of the Republic of Uganda. If you do not
        agree with any of these terms, please do not use our website or
        services. CodexUg reserves the right to update these terms at any time;
        continued use of our services constitutes acceptance of the revised
        terms.
      </p>
    ),
  },
  {
    id: "services",
    title: "2. Description of Services",
    content: (
      <>
        <p className="text-gray-400 leading-relaxed mb-3">
          CodexUg provides a comprehensive range of IT services including, but
          not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-2">
          <li>Cybersecurity &amp; Network Security</li>
          <li>Cloud Infrastructure &amp; Migration</li>
          <li>IT Consulting &amp; Strategy</li>
          <li>Web &amp; Mobile App Development</li>
          <li>Managed IT Support &amp; Helpdesk</li>
          <li>Data Analytics &amp; Business Intelligence</li>
          <li>Hardware Installation &amp; Maintenance</li>
          <li>Network Design &amp; Implementation</li>
          <li>Biometric &amp; Access Control</li>
          <li>CCTV Installation &amp; Management</li>
          <li>IT Training &amp; Certifications</li>
          <li>Custom PC Building</li>
          <li>System Design &amp; Implementation</li>
          <li>Digital &amp; Content Management</li>
          <li>Custom App Development</li>
        </ul>
        <p className="text-gray-400 leading-relaxed mt-3">
          The scope, deliverables, and timelines for each engagement are defined
          in a written quote or service agreement provided before work commences.
        </p>
      </>
    ),
  },
  {
    id: "products",
    title: "3. Products",
    content: (
      <>
        <p className="text-gray-400 leading-relaxed mb-3">
          CodexUg supplies IT hardware and software products across the
          following categories:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-2">
          <li>Laptops, Desktops &amp; Workstations</li>
          <li>Servers &amp; Storage</li>
          <li>Networking Equipment</li>
          <li>Software Licenses</li>
          <li>CCTV &amp; Surveillance Systems</li>
          <li>UPS &amp; Power Backup</li>
          <li>VoIP Phones</li>
          <li>Cloud Hosting Packages</li>
          <li>Printers &amp; Peripherals</li>
        </ul>
        <p className="text-gray-400 leading-relaxed mt-3">
          All prices are quoted in Uganda Shillings (UGX) unless otherwise
          stated. Product availability is subject to change without notice.
        </p>
      </>
    ),
  },
  {
    id: "payment",
    title: "4. Payment Terms",
    content: (
      <>
        <p className="text-gray-400 leading-relaxed mb-3">
          All payments are made in Uganda Shillings (UGX). We accept the
          following payment methods:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-2">
          <li>Mobile money (MTN MoMo, Airtel Money)</li>
          <li>Bank transfer</li>
          <li>Cash (for in-person transactions)</li>
        </ul>
        <p className="text-gray-400 leading-relaxed mt-3">
          Quotes and proposals are valid for 30 days from the date of issue
          unless otherwise specified. For project engagements, an agreed
          percentage deposit is required before work begins, with the balance
          due on completion or as defined in the service agreement. Overdue
          invoices may attract a late payment fee.
        </p>
      </>
    ),
  },
  {
    id: "delivery",
    title: "5. Service Delivery & Timelines",
    content: (
      <p className="text-gray-400 leading-relaxed">
        Estimated timelines for service delivery are provided in written quotes
        or project proposals. CodexUg will make every reasonable effort to meet
        agreed deadlines. Delays caused by client-side factors (e.g., late
        provision of information, approvals, or access) may extend timelines and
        are not the responsibility of CodexUg. Hardware delivery timelines are
        subject to supplier availability and logistics.
      </p>
    ),
  },
  {
    id: "warranties",
    title: "6. Warranties & Support",
    content: (
      <>
        <p className="text-gray-400 leading-relaxed mb-3">
          <span className="text-white font-medium">Hardware warranty:</span>{" "}
          Hardware products are covered by the manufacturer&apos;s warranty.
          CodexUg will assist in processing warranty claims on your behalf.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          <span className="text-white font-medium">Software licensing:</span>{" "}
          Software licenses are governed by the terms of the respective
          software vendors. CodexUg provides genuine, licensed software only.
        </p>
        <p className="text-gray-400 leading-relaxed">
          <span className="text-white font-medium">Service guarantee:</span>{" "}
          We stand behind the quality of our work. If a deliverable does not
          meet the agreed specifications, we will correct it at no additional
          charge within the warranty period defined in the service agreement
          (typically 30 days from handover).
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "7. Intellectual Property",
    content: (
      <>
        <p className="text-gray-400 leading-relaxed mb-3">
          <span className="text-white font-medium">Work product:</span> Upon
          full payment, clients receive ownership of custom deliverables
          (e.g., custom-built software, websites) as agreed in the service
          contract. CodexUg retains the right to use general methodologies,
          frameworks, and know-how developed during the engagement.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          <span className="text-white font-medium">Client IP:</span> All
          content, data, and materials provided by the client remain the
          property of the client.
        </p>
        <p className="text-gray-400 leading-relaxed">
          <span className="text-white font-medium">Open source:</span> Where
          open-source software is incorporated into deliverables, it is governed
          by the applicable open-source licenses.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    content: (
      <p className="text-gray-400 leading-relaxed">
        To the maximum extent permitted by applicable law, CodexUg shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages arising out of or in connection with our services or products.
        Our total liability for any claim shall not exceed the amount paid by
        the client for the specific service or product giving rise to the claim.
        CodexUg does not accept liability for losses resulting from unauthorized
        access to systems, acts of God, power failures, or other events beyond
        our reasonable control.
      </p>
    ),
  },
  {
    id: "confidentiality",
    title: "9. Confidentiality",
    content: (
      <p className="text-gray-400 leading-relaxed">
        Both parties agree to keep confidential any proprietary or sensitive
        information disclosed during the course of the engagement. This
        obligation survives termination of the service agreement. CodexUg
        employees and contractors are bound by confidentiality agreements.
      </p>
    ),
  },
  {
    id: "termination",
    title: "10. Termination",
    content: (
      <p className="text-gray-400 leading-relaxed">
        Either party may terminate a service agreement by providing written
        notice as specified in the contract (typically 30 days). Upon
        termination, the client is liable for payment of all work completed up
        to the termination date. CodexUg may immediately suspend or terminate
        services if the client breaches these terms or engages in illegal
        activity.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: (
      <p className="text-gray-400 leading-relaxed">
        These Terms of Service are governed by and construed in accordance with
        the laws of the Republic of Uganda. Any disputes arising under these
        terms shall be subject to the exclusive jurisdiction of the courts of
        Uganda.
      </p>
    ),
  },
  {
    id: "disputes",
    title: "12. Dispute Resolution",
    content: (
      <p className="text-gray-400 leading-relaxed">
        In the event of a dispute, both parties agree to first attempt
        resolution through good-faith negotiation. If negotiation fails within
        30 days, the dispute may be referred to mediation before proceeding to
        litigation. Mediation will be conducted in Kampala, Uganda, in
        accordance with applicable Ugandan law.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "13. Modifications to Terms",
    content: (
      <p className="text-gray-400 leading-relaxed">
        CodexUg reserves the right to modify these Terms of Service at any time.
        Changes will be posted on this page with an updated &quot;Last
        updated&quot; date. It is your responsibility to review these terms
        periodically. Continued use of our services after changes are posted
        constitutes your acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    content: (
      <div className="text-gray-400 leading-relaxed space-y-1">
        <p>
          If you have questions about these Terms of Service, please contact us:
        </p>
        <p className="mt-3">
          <span className="text-white font-medium">CodexUg</span>
        </p>
        <p>Uganda, East Africa</p>
        <p>
          Email:{" "}
          <a
            href="mailto:info.codex2024@gmail.com"
            className="text-cyan-400 hover:text-cyan-300"
          >
            info.codex2024@gmail.com
          </a>
        </p>
        <p>Phone: 0768827827</p>
        <p>Website: https://codexug.com</p>
      </div>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#060E1A] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services or
            purchasing products. By engaging CodexUg, you agree to these terms.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-[#0F1E35] border border-white/10 rounded-xl p-8 hover:border-cyan-500/20 transition-colors duration-300"
              >
                <h2 className="text-white font-bold text-xl mb-4">
                  {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              Contact Us About These Terms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
