import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import {
  Shield,
  Cloud,
  Code,
  Headphones,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  DollarSign,
} from "lucide-react";
import { SERVICES, TESTIMONIALS } from "@/lib/data";
import { getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "CodexUg - Empowering Businesses Through Technology",
  description:
    "Uganda's premier IT products and services company. Cybersecurity, cloud solutions, web development, IT consulting and more.",
};

// Quick service icons for home overview
const homeServices = [
  { icon: Shield, title: "Cybersecurity", desc: "Protect your digital assets" },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scale with confidence" },
  { icon: Code, title: "Web Development", desc: "Custom digital solutions" },
  { icon: Headphones, title: "IT Support", desc: "24/7 expert assistance" },
];

const differentiators = [
  {
    icon: Star,
    title: "Certified Experts",
    desc: "Our team holds top industry certifications in cloud, security, and networking.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round-the-clock monitoring and support to keep your business running.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Solutions",
    desc: "We use the latest technologies to solve your most complex IT challenges.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Enterprise-grade solutions at pricing that fits your budget.",
  },
];

export default function HomePage() {
  const content = getContent();
  // Pick first 6 services for the overview
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Services Overview */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From cybersecurity to cloud infrastructure, we provide end-to-end technology
              services to help your business grow and thrive.
            </p>
          </div>

          {/* Quick icons grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {homeServices.map((service, i) => (
              <div
                key={service.title}
                className="bg-[#0F1E35] border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-colors duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Full service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#060E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Why CodexUg</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with a client-first approach to deliver solutions
              that make a real difference for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className="bg-[#0F1E35] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter stats={content.stats} />

      {/* Testimonials */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what businesses say about working with CodexUg.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#0F1E35] to-[#0A2540] border border-cyan-500/30 rounded-2xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how CodexUg can help you leverage technology to achieve
                your business goals. The first consultation is free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Contact Us Today
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20"
                >
                  <CheckCircle size={18} className="text-cyan-400" />
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
