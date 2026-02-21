import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore CodexUg's comprehensive IT services including cybersecurity, cloud solutions, web development, managed IT support, and more.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#060E1A] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Comprehensive IT Services
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Tailored for Your Business
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            From cybersecurity and cloud infrastructure to custom software development,
            CodexUg offers a full spectrum of IT services to help your business
            thrive in the digital age. Click any service to learn more.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#060E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Proven Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We assess your current IT environment and understand your business goals." },
              { step: "02", title: "Planning", desc: "We create a detailed roadmap and customized solution strategy." },
              { step: "03", title: "Implementation", desc: "Our experts execute the solution with minimal disruption to your operations." },
              { step: "04", title: "Support", desc: "We provide ongoing monitoring, maintenance, and continuous improvement." },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-[#0F1E35] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
                  <span className="text-cyan-400/40 text-5xl font-bold">{item.step}</span>
                  <h3 className="text-white font-semibold text-lg mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us today for a free consultation and let&apos;s discuss how we can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20"
            >
              <CheckCircle size={18} className="text-cyan-400" />
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
