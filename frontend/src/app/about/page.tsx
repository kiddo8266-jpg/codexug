import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StatsCounter from "@/components/StatsCounter";
import { getContent } from "@/lib/content";
import { CheckCircle, Award, Target, Eye, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CodexUg, our mission, our founder Mask o Kenneth, and how we empower businesses through technology.",
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower businesses across Uganda and East Africa with innovative, reliable, and affordable IT solutions that drive growth and efficiency.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the most trusted technology partner in East Africa, recognized for excellence, innovation, and transformative impact on businesses.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Integrity, innovation, client-centricity, excellence, and continuous learning form the foundation of everything we do at CodexUg.",
  },
];

export default function AboutPage() {
  const content = getContent();
  const { founder, certifications, companyInfo } = content;
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#060E1A] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">About CodexUg</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Passion for Technology,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Commitment to Excellence
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Founded by a passionate computer scientist with a vision to bridge the technology
            gap for businesses in Uganda and East Africa, CodexUg has grown to become a
            trusted technology partner for hundreds of organizations.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-[#0F1E35] border border-white/10 rounded-xl p-8 hover:border-cyan-500/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-[#060E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Meet Our Founder</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <Image
                  src={founder.image}
                  alt={`Mask o Kenneth - Founder of CodexUg`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">{founder.name}</p>
                  <p className="text-cyan-400 text-sm">Founder & CEO, CodexUg</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-white font-bold text-2xl mb-2">{founder.name}</h3>
              <p className="text-cyan-400 font-medium mb-6">{founder.role}</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {founder.bio1}
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                {founder.bio2}
              </p>

              {/* Certifications */}
              <h4 className="text-white font-semibold mb-4">Professional Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert: { name: string; issuer: string }) => (
                  <div key={cert.name} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm font-medium">{cert.name}</p>
                      <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                >
                  Connect on LinkedIn
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter stats={content.stats} />

      {/* Certifications & Partners */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Our Credentials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Certifications & Partnerships
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert: { name: string; issuer: string }) => (
              <div
                key={cert.name}
                className="bg-[#0F1E35] border border-white/10 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={18} className="text-cyan-400" />
                </div>
                <p className="text-white text-xs font-semibold leading-tight mb-1">{cert.name}</p>
                <p className="text-gray-500 text-xs">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-20 bg-[#060E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            The People Behind CodexUg
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Our growing team of certified IT professionals, developers, and support specialists
            is dedicated to delivering excellence for every client.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {["Software Engineer", "Network Specialist", "Cloud Architect"].map((role) => (
              <div
                key={role}
                className="bg-[#0F1E35] border border-dashed border-white/20 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <p className="text-gray-400 text-sm font-medium">{role}</p>
                <p className="text-gray-600 text-xs mt-1">Position open</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
          >
            Join Our Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
