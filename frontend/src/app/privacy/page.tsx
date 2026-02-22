import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for CodexUg – learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    id: "data-collected",
    title: "1. Information We Collect",
    content: (
      <>
        <p className="text-gray-400 leading-relaxed mb-3">
          We collect information you provide directly when you use our contact
          form or request a quote. This may include:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-2">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Subject / service of interest</li>
          <li>Message content</li>
        </ul>
        <p className="text-gray-400 leading-relaxed mt-3">
          We do not require you to create an account, and we do not collect
          payment information directly on this website.
        </p>
      </>
    ),
  },
  {
    id: "how-used",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p className="text-gray-400 leading-relaxed mb-3">
          The information you provide is used to:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-2">
          <li>Respond to your inquiries and service requests</li>
          <li>Provide quotes, proposals, and follow-up support</li>
          <li>
            Send service updates or promotional communications where you have
            opted in
          </li>
          <li>
            Improve our website and services based on aggregate usage patterns
          </li>
        </ul>
        <p className="text-gray-400 leading-relaxed mt-3">
          We will never sell your personal information to third parties.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "3. Third-Party Services",
    content: (
      <>
        <p className="text-gray-400 leading-relaxed mb-3">
          Our website uses the following third-party services:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-2">
          <li>
            <span className="text-white font-medium">GNews API</span> – used to
            fetch related news articles on blog post pages. No personal data is
            sent to GNews.
          </li>
          <li>
            <span className="text-white font-medium">Unsplash</span> – used for
            stock photography and imagery displayed on the site. No personal
            data is sent to Unsplash.
          </li>
          <li>
            <span className="text-white font-medium">Vercel</span> – our
            website is hosted on Vercel. Vercel may collect server-side request
            logs including IP addresses for operational purposes. See{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              Vercel&apos;s Privacy Policy
            </a>
            .
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "4. Cookies & Analytics",
    content: (
      <p className="text-gray-400 leading-relaxed">
        Our website may use essential cookies required for basic site
        functionality. We do not currently use tracking or advertising cookies.
        If analytics tools are added in future, this policy will be updated
        accordingly. You may configure your browser to decline cookies; however,
        some features of the site may not function correctly if you do so.
      </p>
    ),
  },
  {
    id: "security",
    title: "5. Data Security",
    content: (
      <p className="text-gray-400 leading-relaxed">
        We implement appropriate technical and organizational measures to protect
        your personal information from unauthorized access, disclosure,
        alteration, or destruction. All data transmissions between your browser
        and our website are encrypted using HTTPS/TLS. While we take reasonable
        precautions, no method of transmission over the internet is completely
        secure.
      </p>
    ),
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: (
      <p className="text-gray-400 leading-relaxed">
        Contact form submissions are retained for as long as necessary to
        respond to your inquiry and for a reasonable period thereafter to
        maintain business records. You may request deletion of your data at any
        time by contacting us at the address below.
      </p>
    ),
  },
  {
    id: "rights",
    title: "7. Your Rights",
    content: (
      <>
        <p className="text-gray-400 leading-relaxed mb-3">
          You have the right to:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-2">
          <li>
            <span className="text-white font-medium">Access</span> – request a
            copy of the personal data we hold about you
          </li>
          <li>
            <span className="text-white font-medium">Correction</span> – ask us
            to correct inaccurate or incomplete data
          </li>
          <li>
            <span className="text-white font-medium">Deletion</span> – request
            that we delete your personal data
          </li>
          <li>
            <span className="text-white font-medium">Objection</span> – object
            to certain uses of your data, including direct marketing
          </li>
        </ul>
        <p className="text-gray-400 leading-relaxed mt-3">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:info.codex2024@gmail.com"
            className="text-cyan-400 hover:text-cyan-300"
          >
            info.codex2024@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: (
      <p className="text-gray-400 leading-relaxed">
        Our services are not directed to individuals under the age of 13. We do
        not knowingly collect personal information from children. If you believe
        we have inadvertently collected data from a child, please contact us
        immediately so we can delete it.
      </p>
    ),
  },
  {
    id: "compliance",
    title: "9. Uganda Data Protection & Privacy Act 2019",
    content: (
      <p className="text-gray-400 leading-relaxed">
        CodexUg is committed to complying with the Uganda Data Protection &amp;
        Privacy Act 2019. We process personal data lawfully, fairly, and
        transparently; collect it only for specified, explicit, and legitimate
        purposes; and take reasonable steps to keep it accurate and secure. If
        you have concerns about our data practices, you may contact the Personal
        Data Protection Office of Uganda.
      </p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: (
      <div className="text-gray-400 leading-relaxed space-y-1">
        <p>
          If you have questions or concerns about this Privacy Policy, please
          contact us:
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

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#060E1A] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Your privacy matters to us. This policy explains what data we
            collect, how we use it, and the rights you have over your personal
            information.
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
              Contact Us About Privacy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
